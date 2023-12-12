<template><div><h1 id="im2col-将卷积转为矩阵乘法来加速计算" tabindex="-1"><a class="header-anchor" href="#im2col-将卷积转为矩阵乘法来加速计算" aria-hidden="true">#</a> im2col: 将卷积转为矩阵乘法来加速计算</h1>
<ul>
<li><RouterLink to="/docs/Engineering/model-deployment/matrix-acceleration-algorithm/matrix-acceleration-algorithm.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E5%8D%B7%E7%A7%AF">矩阵卷积</a></li>
<li><a href="#im2col%E7%9A%84%E4%BD%9C%E7%94%A8">im2col的作用</a></li>
<li><a href="#%E5%8D%95%E9%80%9A%E9%81%93%E5%8D%95%E5%8D%B7%E7%A7%AF%E6%A0%B8">单通道单卷积核</a></li>
<li><a href="#%E5%A4%9A%E9%80%9A%E9%81%93%E5%8D%95%E5%8D%B7%E7%A7%AF%E6%A0%B8">多通道单卷积核</a></li>
<li><a href="#%E5%A4%9A%E9%80%9A%E9%81%93%E5%A4%9A%E5%8D%B7%E7%A7%AF%E6%A0%B8">多通道多卷积核</a></li>
<li><a href="#%E6%89%B9%E9%87%8F%E5%A4%9A%E9%80%9A%E9%81%93%E5%A4%9A%E5%8D%B7%E7%A7%AF%E6%A0%B8">批量多通道多卷积核</a></li>
</ul>
<h1 id="矩阵卷积" tabindex="-1"><a class="header-anchor" href="#矩阵卷积" aria-hidden="true">#</a> 矩阵卷积</h1>
<p>卷积就是卷积核跟图像矩阵的运算。卷积核是一个小窗口，记录的是权重。卷积核在输入图像上按步长滑动，每次操作卷积核对应区域的输入图像，将卷积核中的权值和对应的输入图像的值相乘再相加，赋给卷积核中心所对应的输出特征图的一个值，如下图所示（这里卷积核要旋转180 °）：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/conv.jpg" alt="conv"></p>
<p>卷积计算的输入从二维的矩阵到四维张量，以及卷积核从二维矩阵到四维矩阵都对应不同大小的输出，最后会统一到一个算法里面，这里用一个函数来表示：
$$
a=conv(x,k)
$$
$x$是输入，$k$是卷积核，$\alpha$是卷积的结果，即特征图（feature map）。</p>
<h1 id="im2col的作用" tabindex="-1"><a class="header-anchor" href="#im2col的作用" aria-hidden="true">#</a> im2col的作用</h1>
<p>以上我们已经知道了卷积是如何操作的，im2col的作用就是优化卷积运算，如何优化呢，我们先学习一下这个函数的原理。</p>
<p>我们假设卷积核的尺寸为2x2，输入图像尺寸为3x3。im2col做的事情就是对于卷积核每一次要处理的小窗，将其展开到新矩阵的一行（列），新矩阵的列（行）数，就是对于一副输入图像，卷积运算的次数（卷积核滑动的次数），如下图所示：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/im2col.jpg" alt="im2col"></p>
<p>以最右侧一列为例，卷积核为2x2，所以新矩阵的列数就为4；步长为一，卷积核共滑动4次，行数就为4。再放一张图应该看得更清楚。</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/im2col-process.jpg" alt="im2col-process"></p>
<p>输入为4x4，卷积核为3x3，则新矩阵为9x4 。看到这里我就产生了一个疑问：我们把一个卷积核对应的值展开，到底应该展开为行还是列呢？卷积核的滑动先行后列还是相反？区别在哪？</p>
<p>这其实主要取决于我们使用的框架访存的方式。 计算机一次性读取相近的内存是最快的，尤其是当需要把数据送到GPU去计算的时候，这样可以节省访存的时间，以达到加速的目的。不同框架的访存机制不一样，所以会有行列相反这样的区别。在caffe框架下，im2col是将一个小窗的值展开为一行，而在matlab中则展开为列。所以说，行列的问题没有本质区别，目的都是<strong>为了在计算时读取连续的内存</strong>。</p>
<p>这也解释了我们为什么要通过这个变化来优化卷积。如果<strong>按照数学上的步骤做卷积读取内存是不连续的</strong>，这样就会增加时间成本。同时我们注意到做卷积对应元素相乘再相加的做法跟向量内积很相似，所以通过im2col将矩阵卷积转化为矩阵乘法来实现。</p>
<h1 id="单通道单卷积核" tabindex="-1"><a class="header-anchor" href="#单通道单卷积核" aria-hidden="true">#</a> 单通道单卷积核</h1>
<p>先看输入和卷积核都是矩阵的情况：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/single-conv-and-single-filter.jpg" alt="single-conv-and-single-filter"></p>
<p>上图中蓝色的为输入，红色的是卷积核，灰色是结果</p>
<p>卷积的过程就是，将输入划分成若干个<strong>与卷积核相同大小</strong>的不同子集，再分别与卷积核点乘：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/conv-process.jpg" alt="conv-process"></p>
<p>如上图所示，本栗子的输入可以划分为4个子子集（为什么是4个，这里涉及一个步长的变量，后面讨论），将它们各自与卷积核点乘，得到的结果就是红框上面的输出。</p>
<h1 id="现在-将上述的过程用公式向量表示-就拿第一个子集-将其表示为-x-1-来说吧-x-1-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-end-bmatrix-然后将其展开-变成一个行向量-x-1-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-end-bmatrix-对这四个子集都进行同样的操作-然后并在一起得到一个矩阵-begin-aligned-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-end-bmatrix-end-aligned-同样的-再将卷积核如法炮制-只不过这次是展开成列向量-w-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-t-然后将-x-w-相乘-得到-begin-aligned-a-xw" tabindex="-1"><a class="header-anchor" href="#现在-将上述的过程用公式向量表示-就拿第一个子集-将其表示为-x-1-来说吧-x-1-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-end-bmatrix-然后将其展开-变成一个行向量-x-1-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-end-bmatrix-对这四个子集都进行同样的操作-然后并在一起得到一个矩阵-begin-aligned-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-end-bmatrix-end-aligned-同样的-再将卷积核如法炮制-只不过这次是展开成列向量-w-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-t-然后将-x-w-相乘-得到-begin-aligned-a-xw" aria-hidden="true">#</a> 现在，将上述的过程用公式向量表示，就拿第一个子集（将其表示为$x^{(1)}$）来说吧：
$$
x^{(1)}=
\begin{bmatrix}
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}\
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}\
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}\
\end{bmatrix}
$$
然后将其展开，变成一个行向量：
$$
x^{(1)}=
\begin{bmatrix}
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}
\end{bmatrix}
$$
对这四个子集都进行同样的操作，然后并在一起得到一个<strong>矩阵</strong>：
$$
\begin{aligned}
X&amp;=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}
&amp;=
\begin{bmatrix}
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}\
x_{1,2}&amp;x_{1,3}&amp;x_{1,4}&amp;
x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;
x_{3,2}&amp;x_{3,3}&amp;x_{3,4}\
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;
x_{4,1}&amp;x_{4,2}&amp;x_{4,3}&amp;\
x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;
x_{3,2}&amp;x_{3,3}&amp;x_{3,4}&amp;
x_{4,2}&amp;x_{4,3}&amp;x_{4,4}
\end{bmatrix}
\end{aligned}
$$
同样的，再将卷积核如法炮制，只不过这次是展开成<strong>列向量</strong>：
$$
W=
\begin{bmatrix}
w_{1,1}&amp;w_{1,2}&amp;w_{1,3}&amp;
w_{2,1}&amp;w_{2,2}&amp;w_{2,3}&amp;
w_{3,1}&amp;w_{3,2}&amp;w_{3,3}
\end{bmatrix}^T
$$
然后将$X,W$相乘，得到：
$$
\begin{aligned}
A&amp;=XW</h1>
<h1 id="begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-w" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-w" aria-hidden="true">#</a> \begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}W</h1>
<h1 id="begin-bmatrix-x-1-w-x-2-w-x-3-w-x-4-w-end-bmatrix-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-end-bmatrix-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-end-aligned-最后将a变形-就得到了卷积的结果-a-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-rightarrow-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-w-x-2-w-x-3-w-x-4-w-end-bmatrix-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-end-bmatrix-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-end-aligned-最后将a变形-就得到了卷积的结果-a-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-rightarrow-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
x^{(1)}W\
x^{(2)}W\
x^{(3)}W\
x^{(4)}W\
\end{bmatrix}
&amp;=
\begin{bmatrix}
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}\
x_{1,2}&amp;x_{1,3}&amp;x_{1,4}&amp;
x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;
x_{3,2}&amp;x_{3,3}&amp;x_{3,4}\
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;
x_{4,1}&amp;x_{4,2}&amp;x_{4,3}&amp;\
x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;
x_{3,2}&amp;x_{3,3}&amp;x_{3,4}&amp;
x_{4,2}&amp;x_{4,3}&amp;x_{4,4}
\end{bmatrix}
\begin{bmatrix}
w_{1,1}\w_{1,2}\w_{1,3}\
w_{2,1}\w_{2,2}\w_{2,3}\
w_{3,1}\w_{3,2}\w_{3,3}
\end{bmatrix}
&amp;=
\begin{bmatrix}
a_1\
a_2\
a_3\
a_4\
\end{bmatrix}
\end{aligned}
$$
最后将A变形，就得到了卷积的结果：
$$
A=\begin{bmatrix}
a_1\
a_2\
a_3\
a_4\
\end{bmatrix}
\rightarrow
\begin{bmatrix}
a_1&amp;a_2\
a_3&amp;a_4\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
a_{1,1}&amp;a_{1,2}\
a_{2,1}&amp;a_{2,2}\
\end{bmatrix}
$$
以上，就是输入和卷积核都是矩阵时的情况。</p>
<h1 id="更一般的-卷积操作一般会进行填零操作-same-padding-这是为了卷积后结果的尺寸和卷积输入一致-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-1-4-x-2-1-x-2-2-x-2-3-x-2-4-x-3-1-x-3-2-x-3-3-x-3-4-x-4-1-x-4-2-x-4-3-x-4-4-end-bmatrix-rightarrow-begin-bmatrix-0-0-0-0-0-0-0-x-1-1-x-1-2-x-1-3-x-1-4-0-0-x-2-1-x-2-2-x-2-3-x-2-4-0-0-x-3-1-x-3-2-x-3-3-x-3-4-0-0-x-4-1-x-4-2-x-4-3-x-4-4-0-0-0-0-0-0-0-end-bmatrix-对应的卷积核为-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-卷积结果为-begin-bmatrix-a-1-1-a-1-2-a-1-3-a-1-4-a-2-1-a-2-2-a-2-3-a-2-4-a-3-1-a-3-2-a-3-3-a-3-4-a-4-1-a-4-2-a-4-3-a-4-4-end-bmatrix-其各项的值按如下方式算出-begin-bmatrix-0-0-0-0-x-1-1-x-1-2-0-x-2-1-x-2-2-0-0-0-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-0-0-0-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-0-0-0-x-1-3-x-1-4-0-x-2-3-x-2-4-0-0-x-1-1-x-1-2-0-x-2-1-x-2-2-0-x-3-1-x-3-2-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-1-3-x-1-4-0-x-2-3-x-2-4-0-x-3-3-x-3-4-0-0-x-2-1-x-2-2-0-x-3-1-x-3-2-0-x-4-1-x-4-2-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-x-2-3-x-2-4-0-x-3-3-x-3-4-0-x-4-3-x-4-4-0-0-x-3-1-x-3-2-0-x-4-1-x-4-2-0-0-0-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-0-0-0-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-0-0-0-x-3-3-x-3-4-0-x-4-3-x-4-4-0-0-0-0-end-bmatrix-times-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#更一般的-卷积操作一般会进行填零操作-same-padding-这是为了卷积后结果的尺寸和卷积输入一致-begin-bmatrix-x-1-1-x-1-2-x-1-3-x-1-4-x-2-1-x-2-2-x-2-3-x-2-4-x-3-1-x-3-2-x-3-3-x-3-4-x-4-1-x-4-2-x-4-3-x-4-4-end-bmatrix-rightarrow-begin-bmatrix-0-0-0-0-0-0-0-x-1-1-x-1-2-x-1-3-x-1-4-0-0-x-2-1-x-2-2-x-2-3-x-2-4-0-0-x-3-1-x-3-2-x-3-3-x-3-4-0-0-x-4-1-x-4-2-x-4-3-x-4-4-0-0-0-0-0-0-0-end-bmatrix-对应的卷积核为-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix-卷积结果为-begin-bmatrix-a-1-1-a-1-2-a-1-3-a-1-4-a-2-1-a-2-2-a-2-3-a-2-4-a-3-1-a-3-2-a-3-3-a-3-4-a-4-1-a-4-2-a-4-3-a-4-4-end-bmatrix-其各项的值按如下方式算出-begin-bmatrix-0-0-0-0-x-1-1-x-1-2-0-x-2-1-x-2-2-0-0-0-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-0-0-0-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-0-0-0-x-1-3-x-1-4-0-x-2-3-x-2-4-0-0-x-1-1-x-1-2-0-x-2-1-x-2-2-0-x-3-1-x-3-2-x-1-1-x-1-2-x-1-3-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-1-2-x-1-3-x-1-4-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-1-3-x-1-4-0-x-2-3-x-2-4-0-x-3-3-x-3-4-0-0-x-2-1-x-2-2-0-x-3-1-x-3-2-0-x-4-1-x-4-2-x-2-1-x-2-2-x-2-3-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-x-2-2-x-2-3-x-2-4-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-x-2-3-x-2-4-0-x-3-3-x-3-4-0-x-4-3-x-4-4-0-0-x-3-1-x-3-2-0-x-4-1-x-4-2-0-0-0-x-3-1-x-3-2-x-3-3-x-4-1-x-4-2-x-4-3-0-0-0-x-3-2-x-3-3-x-3-4-x-4-2-x-4-3-x-4-4-0-0-0-x-3-3-x-3-4-0-x-4-3-x-4-4-0-0-0-0-end-bmatrix-times-begin-bmatrix-w-1-1-w-1-2-w-1-3-w-2-1-w-2-2-w-2-3-w-3-1-w-3-2-w-3-3-end-bmatrix" aria-hidden="true">#</a> 更一般的，卷积操作一般会进行填零操作（same padding），这是为了卷积后结果的尺寸和卷积输入一致：
$$
\begin{bmatrix}
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;x_{1,4}\
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{2,4}\
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{3,4}\
x_{4,1}&amp;x_{4,2}&amp;x_{4,3}&amp;x_{4,4}\
\end{bmatrix}
\rightarrow
\begin{bmatrix}
0&amp;0&amp;0&amp;0&amp;0&amp;0\
0&amp;x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;x_{1,4}&amp;0\
0&amp;x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;0\
0&amp;x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{3,4}&amp;0\
0&amp;x_{4,1}&amp;x_{4,2}&amp;x_{4,3}&amp;x_{4,4}&amp;0\
0&amp;0&amp;0&amp;0&amp;0&amp;0
\end{bmatrix}
$$
对应的卷积核为：
$$
\begin{bmatrix}
w_{1,1}&amp;w_{1,2}&amp;w_{1,3}\
w_{2,1}&amp;w_{2,2}&amp;w_{2,3}\
w_{3,1}&amp;w_{3,2}&amp;w_{3,3}\
\end{bmatrix}
$$
卷积结果为：
$$
\begin{bmatrix}
a_{1,1}&amp;a_{1,2}&amp;a_{1,3}&amp;a_{1,4}\
a_{2,1}&amp;a_{2,2}&amp;a_{2,3}&amp;a_{2,4}\
a_{3,1}&amp;a_{3,2}&amp;a_{3,3}&amp;a_{3,4}\
a_{4,1}&amp;a_{4,2}&amp;a_{4,3}&amp;a_{4,4}\
\end{bmatrix}
$$
其各项的值按如下方式算出：
$$
\begin{bmatrix}
0&amp;0&amp;0&amp;0&amp;x_{1,1}&amp;x_{1,2}&amp;0&amp;x_{2,1}&amp;x_{2,2}\
0&amp;0&amp;0&amp;x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;x_{2,1}&amp;x_{2,2}&amp;x_{2,3}\
0&amp;0&amp;0&amp;x_{1,2}&amp;x_{1,3}&amp;x_{1,4}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{2,4}\
0&amp;0&amp;0&amp;x_{1,3}&amp;x_{1,4}&amp;0&amp;x_{2,3}&amp;x_{2,4}&amp;0\
\
0&amp;x_{1,1}&amp;x_{1,2}&amp;0&amp;x_{2,1}&amp;x_{2,2}&amp;0&amp;x_{3,1}&amp;x_{3,2}\
x_{1,1}&amp;x_{1,2}&amp;x_{1,3}&amp;x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{3,1}&amp;x_{3,2}&amp;x_{3,3}\
x_{1,2}&amp;x_{1,3}&amp;x_{1,4}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{3,4}\
x_{1,3}&amp;x_{1,4}&amp;0&amp;x_{2,3}&amp;x_{2,4}&amp;0&amp;x_{3,3}&amp;x_{3,4}&amp;0\
\
0&amp;x_{2,1}&amp;x_{2,2}&amp;0&amp;x_{3,1}&amp;x_{3,2}&amp;0&amp;x_{4,1}&amp;x_{4,2}\
x_{2,1}&amp;x_{2,2}&amp;x_{2,3}&amp;x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{4,1}&amp;x_{4,2}&amp;x_{4,3}\
x_{2,2}&amp;x_{2,3}&amp;x_{2,4}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{3,4}&amp;x_{4,2}&amp;x_{4,3}&amp;x_{4,4}\
x_{2,3}&amp;x_{2,4}&amp;0&amp;x_{3,3}&amp;x_{3,4}&amp;0&amp;x_{4,3}&amp;x_{4,4}&amp;0\
\
0&amp;x_{3,1}&amp;x_{3,2}&amp;0&amp;x_{4,1}&amp;x_{4,2}&amp;0&amp;0&amp;0\
x_{3,1}&amp;x_{3,2}&amp;x_{3,3}&amp;x_{4,1}&amp;x_{4,2}&amp;x_{4,3}&amp;0&amp;0&amp;0\
x_{3,2}&amp;x_{3,3}&amp;x_{3,4}&amp;x_{4,2}&amp;x_{4,3}&amp;x_{4,4}&amp;0&amp;0&amp;0\
x_{3,3}&amp;x_{3,4}&amp;0&amp;x_{4,3}&amp;x_{4,4}&amp;0&amp;0&amp;0&amp;0\
\end{bmatrix}
\times
\begin{bmatrix}
w_{1,1}\w_{1,2}\w_{1,3}\
w_{2,1}\w_{2,2}\w_{2,3}\
w_{3,1}\w_{3,2}\w_{3,3}\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
a_{1,1}\a_{1,2}\a_{1,3}\a_{1,4}\\
a_{2,1}\a_{2,2}\a_{2,3}\a_{2,4}\\
a_{3,1}\a_{3,2}\a_{3,3}\a_{3,4}\\
a_{4,1}\a_{4,2}\a_{4,3}\a_{4,4}
\end{bmatrix}
$$
im2col具体过程如下：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/single-conv-and-single-filter-2.png" alt="single-conv-and-single-filter-2"></p>
<h1 id="多通道单卷积核" tabindex="-1"><a class="header-anchor" href="#多通道单卷积核" aria-hidden="true">#</a> 多通道单卷积核</h1>
<p>现在将输入升级为<strong>多通道</strong>（例如图片一般都是三通道的），即变成一个三维张量，相对应的，之前的情况称之为<strong>单通道</strong>；同时，卷积核也必须升级成多通道的，为什么？因为<strong>卷积核的通道数必须与输入的通道数相等</strong>：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-single-filter.jpg" alt="multi-conv-and-single-filter"></p>
<p>如上图所示，输入变成双通道后，卷积核也必须变成双通道的，但是，输出还是一个通道，下面看一下计算过程，先画一个详细的图示：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-single-filter-2.jpg" alt="multi-conv-and-single-filter-2"></p>
<p>同样，还是将输入划分成4个子集，具体的划分过程是，通道一和通道二各自划一个子集，与卷积核对应的通道大小相同：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-single-filter-3.jpg" alt="multi-conv-and-single-filter-3"></p>
<h1 id="将两个通道的子集上下拼接变成一个6行3列的矩阵-它们之间元素的顺序我用下标表示-x-1-begin-bmatrix-x-1-1-1-x-1-1-2-x-1-1-3-x-1-2-1-x-1-2-2-x-1-2-3-x-1-3-1-x-1-3-2-x-1-3-3-x-2-1-1-x-2-1-2-x-2-1-3-x-2-2-1-x-2-2-2-x-2-2-3-x-2-3-1-x-2-3-2-x-2-3-3-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#将两个通道的子集上下拼接变成一个6行3列的矩阵-它们之间元素的顺序我用下标表示-x-1-begin-bmatrix-x-1-1-1-x-1-1-2-x-1-1-3-x-1-2-1-x-1-2-2-x-1-2-3-x-1-3-1-x-1-3-2-x-1-3-3-x-2-1-1-x-2-1-2-x-2-1-3-x-2-2-1-x-2-2-2-x-2-2-3-x-2-3-1-x-2-3-2-x-2-3-3-end-bmatrix" aria-hidden="true">#</a> 将两个通道的子集上下拼接变成一个6行3列的矩阵，它们之间元素的顺序我用下标表示：
$$
x^{(1)}=
\begin{bmatrix}
x_{1,1,1}&amp;x_{1,1,2}&amp;x_{1,1,3}\
x_{1,2,1}&amp;x_{1,2,2}&amp;x_{1,2,3}\
x_{1,3,1}&amp;x_{1,3,2}&amp;x_{1,3,3}\
x_{2,1,1}&amp;x_{2,1,2}&amp;x_{2,1,3}\
x_{2,2,1}&amp;x_{2,2,2}&amp;x_{2,2,3}\
x_{2,3,1}&amp;x_{2,3,2}&amp;x_{2,3,3}\
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-x-1-x-2-x-3-x-4-x-5-x-6-x-7-x-8-x-9-x-10-x-11-x-12-x-13-x-14-x-15-x-16-x-17-x-18-end-bmatrix-然后同样的将其展开成一个横向量-x-1-x-1-x-18-剩下的就是重复上述两步-得到4个横向量-得到一个矩阵-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-接下来-同样将卷积核也给展开-还是变成一个列向量-卷积核两个通道的元素之间的顺序处理与输入是一样的-w-begin-bmatrix-w-1-vdots-w-18-end-bmatrix-然后-计算卷积结果-a-xw-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-w" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-x-2-x-3-x-4-x-5-x-6-x-7-x-8-x-9-x-10-x-11-x-12-x-13-x-14-x-15-x-16-x-17-x-18-end-bmatrix-然后同样的将其展开成一个横向量-x-1-x-1-x-18-剩下的就是重复上述两步-得到4个横向量-得到一个矩阵-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-接下来-同样将卷积核也给展开-还是变成一个列向量-卷积核两个通道的元素之间的顺序处理与输入是一样的-w-begin-bmatrix-w-1-vdots-w-18-end-bmatrix-然后-计算卷积结果-a-xw-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-w" aria-hidden="true">#</a> \begin{bmatrix}
x_1&amp;x_2&amp;x_3\
x_4&amp;x_5&amp;x_6\
x_7&amp;x_8&amp;x_9\
x_{10}&amp;x_{11}&amp;x_{12}\
x_{13}&amp;x_{14}&amp;x_{15}\
x_{16}&amp;x_{17}&amp;x_{18}\
\end{bmatrix}
$$
然后同样的将其展开成一个<strong>横向量</strong>：$x^{(1)}=[x_1,...,x_{18}]$，剩下的就是重复上述两步，得到4个横向量，得到一个<strong>矩阵</strong>：
$$
X=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}
$$
接下来，同样将卷积核也给展开，还是变成一个<strong>列向量</strong>，卷积核两个通道的元素之间的顺序处理与输入是一样的：
$$
W=
\begin{bmatrix}
w_1\
\vdots\
w_{18}\
\end{bmatrix}
$$
然后，计算卷积结果：
$$
A=XW=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}W</h1>
<h1 id="begin-bmatrix-x-1-w-x-2-w-x-3-w-x-4-w-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-w-x-2-w-x-3-w-x-4-w-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
x^{(1)}W\
x^{(2)}W\
x^{(3)}W\
x^{(4)}W\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
a_1\
a_2\
a_3\
a_4\
\end{bmatrix}
$$
可以看到，多通道的情况与单通道的情况基本上是没有区别的；然后，还是示意图：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-single-filter-3.png" alt="multi-conv-and-single-filter-3"></p>
<h1 id="多通道多卷积核" tabindex="-1"><a class="header-anchor" href="#多通道多卷积核" aria-hidden="true">#</a> 多通道多卷积核</h1>
<p>接下来，在多通道的基础上，进一步升级，使用<strong>多个卷积核</strong>，大致如下图：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-multi-filter.jpg" alt="multi-conv-and-multi-filter"></p>
<p>可以看到，现在输出的结果变成多通道了，也就是说，<strong>卷积结果的通道数等于卷积核的个数是一致的</strong>，计算过程大致如下：</p>
<h1 id="因为输入没有变化-所以划分出来的矩阵还是与之前一样-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-然后-对于第一个卷积核-处理的方式也和之前一样-展开成一个列向量-不过这里命名为-w-1-w-begin-bmatrix-w-1-vdots-w-18-end-bmatrix-然后对于第二个卷积核也是采取同样的操作展开成一个列向量-为-w-2-所以此时所有的卷积核可以用一个矩阵表示-w-w-1-w-2-然后是结算卷积结果-a-xw-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#因为输入没有变化-所以划分出来的矩阵还是与之前一样-x-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-然后-对于第一个卷积核-处理的方式也和之前一样-展开成一个列向量-不过这里命名为-w-1-w-begin-bmatrix-w-1-vdots-w-18-end-bmatrix-然后对于第二个卷积核也是采取同样的操作展开成一个列向量-为-w-2-所以此时所有的卷积核可以用一个矩阵表示-w-w-1-w-2-然后是结算卷积结果-a-xw-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" aria-hidden="true">#</a> 因为输入没有变化，所以划分出来的矩阵还是与之前一样：
$$
X=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}
$$
然后，对于第一个卷积核，处理的方式也和之前一样，展开成一个列向量，不过这里命名为$W_1$：
$$
W=
\begin{bmatrix}
w_1\
\vdots\
w_{18}\
\end{bmatrix}
$$
然后对于第二个卷积核也是采取同样的操作展开成一个列向量，为$W_2$，所以此时所有的卷积核可以用<strong>一个矩阵</strong>表示：
$$
W=[W_1,W_2]
$$
然后是结算卷积结果：
$$
A=XW=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}
\begin{bmatrix}
W_1
W_2\
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-a-1-a-5-a-2-a-6-a-3-a-7-a-4-a-8-end-bmatrix-从上式可以得知-各个每个卷积核是独立与输入进行卷积计算-相互之间并不影响-然后-将计算结果变形-就得到了输出-a-begin-bmatrix-a-1-a-5-a-2-a-6-a-3-a-7-a-4-a-8-end-bmatrix-rightarrow-begin-bmatrix-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-begin-bmatrix-a-5-a-6-a-7-a-8-end-bmatrix-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-a-1-a-5-a-2-a-6-a-3-a-7-a-4-a-8-end-bmatrix-从上式可以得知-各个每个卷积核是独立与输入进行卷积计算-相互之间并不影响-然后-将计算结果变形-就得到了输出-a-begin-bmatrix-a-1-a-5-a-2-a-6-a-3-a-7-a-4-a-8-end-bmatrix-rightarrow-begin-bmatrix-begin-bmatrix-a-1-a-2-a-3-a-4-end-bmatrix-begin-bmatrix-a-5-a-6-a-7-a-8-end-bmatrix-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
a_1&amp;a_5\
a_2&amp;a_6\
a_3&amp;a_7\
a_4&amp;a_8\
\end{bmatrix}
$$
从上式可以得知，各个每个卷积核是独立与输入进行卷积计算，相互之间并不影响；然后，将计算结果变形，就得到了输出：
$$
A=
\begin{bmatrix}
a_1&amp;a_5\
a_2&amp;a_6\
a_3&amp;a_7\
a_4&amp;a_8\
\end{bmatrix}
\rightarrow
\begin{bmatrix}
\begin{bmatrix}
a_1&amp;a_2\
a_3&amp;a_4\
\end{bmatrix}
\begin{bmatrix}
a_5&amp;a_6\
a_7&amp;a_8\
\end{bmatrix}
\end{bmatrix}</h1>
<p>\begin{bmatrix}
\begin{bmatrix}
a_{1,1,1}&amp;a_{1,1,2}\
a_{1,2,1}&amp;a_{1,2,2}\
\end{bmatrix}
\begin{bmatrix}
a_{2,1,1}&amp;a_{2,1,2}\
a_{2,2,1}&amp;a_{2,2,2}\
\end{bmatrix}
\end{bmatrix}
$$
然后，还是示意图：</p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/multi-conv-and-multi-filter-2.png" alt="multi-conv-and-multi-filter-2"></p>
<h1 id="批量多通道多卷积核" tabindex="-1"><a class="header-anchor" href="#批量多通道多卷积核" aria-hidden="true">#</a> 批量多通道多卷积核</h1>
<p>剩下的就是扩展到批量的情况了：</p>
<p>有了前面多卷积核的计算过程做对比后，多输入的计算过程也是大同小异的，在前面的多卷积核的计算中，每个卷积核都独立与输入进行卷积，现在有多个输入也是一样，每一个输入独立与所有卷积核进行卷积计算得到一个输出，所以<strong>输入的数量与输出的数量一致</strong></p>
<p><img src="@source/docs/Engineering/model-deployment/matrix-acceleration-algorithm/im2col/pic/batch-multi-conv-and-multi-filter.jpg" alt="batch-multi-conv-and-multi-filter"></p>
<h1 id="还是来看栗子吧-设输入的批量为2-对第一个输入采用与前面一样的操作-变换为一个矩阵-x-1-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-第二个输入变换为-x-2-begin-bmatrix-x-5-x-6-x-7-x-8-end-bmatrix-然后将两个矩阵拼接在一起-组成一个大矩阵-x-begin-bmatrix-x-1-x-2-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#还是来看栗子吧-设输入的批量为2-对第一个输入采用与前面一样的操作-变换为一个矩阵-x-1-begin-bmatrix-x-1-x-2-x-3-x-4-end-bmatrix-第二个输入变换为-x-2-begin-bmatrix-x-5-x-6-x-7-x-8-end-bmatrix-然后将两个矩阵拼接在一起-组成一个大矩阵-x-begin-bmatrix-x-1-x-2-end-bmatrix" aria-hidden="true">#</a> 还是来看栗子吧，设输入的批量为2，对第一个输入采用与前面一样的操作，变换为一个矩阵：
$$
X_1=
\begin{bmatrix}
x^{(1)}\
x^{(2)}\
x^{(3)}\
x^{(4)}\
\end{bmatrix}
$$
第二个输入变换为：
$$
X_2=
\begin{bmatrix}
x^{(5)}\
x^{(6)}\
x^{(7)}\
x^{(8)}\
\end{bmatrix}
$$
然后<strong>将两个矩阵拼接在一起</strong>，组成一个大矩阵：
$$
X=
\begin{bmatrix}
X^{(1)}\
X^{(2)}\
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-x-1-x-2-vdots-x-4-x-5-x-6-vdots-x-8-end-bmatrix-如果非常熟悉矩阵乘法-肯定已经知道了输出的结果-a-xw-begin-bmatrix-x-1-x-2-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-x-2-vdots-x-4-x-5-x-6-vdots-x-8-end-bmatrix-如果非常熟悉矩阵乘法-肯定已经知道了输出的结果-a-xw-begin-bmatrix-x-1-x-2-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
x^{(1)}\
x^{(2)}\
\vdots\
x^{(4)}\
x^{(5)}\
x^{(6)}\
\vdots\
x^{(8)}\
\end{bmatrix}
$$
如果非常熟悉矩阵乘法，肯定已经知道了输出的结果：
$$
A=XW=
\begin{bmatrix}
X_1\
X_2
\end{bmatrix}
\begin{bmatrix}
W_1
W_2\
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-x-1-x-2-vdots-x-4-x-5-x-6-vdots-x-8-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-x-1-x-2-vdots-x-4-x-5-x-6-vdots-x-8-end-bmatrix-begin-bmatrix-w-1w-2-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
x^{(1)}\
x^{(2)}\
\vdots\
x^{(4)}\
x^{(5)}\
x^{(6)}\
\vdots\
x^{(8)}\
\end{bmatrix}
\begin{bmatrix}
W_1
W_2\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
a_1&amp;a_5\
a_2&amp;a_6\
a_3&amp;a_7\
a_4&amp;a_8\
a_9&amp;a_{13}\
a_{10}&amp;a_{14}\
a_{11}&amp;a_{15}\
a_{12}&amp;a_{16}\
\end{bmatrix}
$$
上面$a_1$至$a_8$是$X_1$与$W$相乘的结果，$a_9$至$a_{16}$是$X_2$与$W$相乘的结果，扩展到更一般的形式就是：
$$
XW=
\begin{bmatrix}
X_1\
X_2\
\vdots\
X_m\
\end{bmatrix}
\begin{bmatrix}
W_1&amp;W_2&amp;\dots&amp;W_n
\end{bmatrix}
$$</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/dwyane12138/article/details/78449898" target="_blank" rel="noopener noreferrer">im2col的原理和实现<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/63974249" target="_blank" rel="noopener noreferrer">im2col方法实现卷积算法<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了上述博客。</p>
<p>===</p>
<p>现在卷积运算一般先用img2col算法展成矩阵，然后调用gemm矩阵乘</p>
</div></template>


