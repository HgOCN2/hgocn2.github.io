<template><div><h1 id="傅里叶变换" tabindex="-1"><a class="header-anchor" href="#傅里叶变换" aria-hidden="true">#</a> 傅里叶变换</h1>
<ul>
<li><RouterLink to="/docs/Engineering/mathematics/calculus/calculus.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E7%9B%B4%E8%A7%82%E7%90%86%E8%A7%A3">傅里叶变换的直观理解</a>
<ul>
<li><a href="#%E7%9B%B4%E8%A7%82%E7%90%86%E8%A7%A3%E4%B9%8B%E4%B8%80%EF%BC%9A%E4%BB%8E%E7%9B%B8%E4%BC%BC%E5%BA%A6%E8%A7%92%E5%BA%A6%E7%90%86%E8%A7%A3%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2">直观理解之一：从相似度角度理解傅里叶变换</a></li>
</ul>
</li>
</ul>
<p>重要：</p>
<p><a href="https://www.zhihu.com/question/22102732/answer/290339137?group_id=934197907310129152#comment-381616429" target="_blank" rel="noopener noreferrer">拉普拉斯变换的物理意义是什么？<ExternalLinkIcon/></a></p>
<p>https://www.zhihu.com/question/22102732/answer/369089156</p>
<h1 id="傅里叶变换的直观理解" tabindex="-1"><a class="header-anchor" href="#傅里叶变换的直观理解" aria-hidden="true">#</a> 傅里叶变换的直观理解</h1>
<h2 id="直观理解之一-从相似度角度理解傅里叶变换" tabindex="-1"><a class="header-anchor" href="#直观理解之一-从相似度角度理解傅里叶变换" aria-hidden="true">#</a> 直观理解之一：从相似度角度理解傅里叶变换</h2>
<p><strong>声明：这个理解源自邹博老师的<a href="http://www.chinahadoop.cn/course/982/learn#lesson/18658" target="_blank" rel="noopener noreferrer">《机器学习》<ExternalLinkIcon/></a>授课视频。</strong></p>
<p>先介绍<strong>相似度</strong>的概念。</p>
<p>两向量$A$和$B$，如下图所示，它们如果重合，则完全相似，若垂直，则完全不相似，所以，它们之间的夹角$\theta$的余弦$cos(\theta)$就反映了向量$A$和$B$之间的相似度，若两向量重合则为1，若垂直则为0。</p>
<p><img src="@source/docs/Engineering/mathematics/calculus/fourier-transform/pic/vectorAB.jpg" alt="vectorAB"></p>
<p>而$cos(\theta)=\frac{A\cdot B}{|A||B|}$，对于多维向量，假设$A = [1, 3, 7, 9]^{T}$，$B = [-4, 9, 7, -3]^{T}$。我们把不同维度依次排开在$x$轴上，$y$轴是不同维度对应的向量坐标值，则$A$、$B$向量如下图所示：</p>
<p><img src="@source/docs/Engineering/mathematics/calculus/fourier-transform/pic/vectorA.jpg" alt="vectorA">                 <img src="@source/docs/Engineering/mathematics/calculus/fourier-transform/pic/vectorB.jpg" alt="vectorB"></p>
<p>则向量$A$和向量$B$的相似度为$A\cdot B = \sum_{i=1}^{4}A_i\cdot B_i$。注：这里忽略了向量模的大小，因为这里并不追求绝对相似度，之后不再就此注解。</p>
<p>那么对于无穷维向量(无穷维向量其实就是普通的单变量实数函数)，如$f(x)$、$g(x)$等。令无穷维向量$A = f(x)$、$B = g(x)$。那么无穷维向量$A$、$B$之间的相似度就是
$$
A\cdot B = \int f(x)\cdot g(x)dx
$$
上式其实也能理解为函数$f(x)$在$g(x)$这个坐标向量上的投影。</p>
<p>那么现在我们使用一些列线性无关且相互正交的无穷维坐标向量作为$g(x)$，比如：
$$
\left{\begin{matrix}
sin(x)\
sin(2x)\
...\
sin(wx)\
...
\end{matrix}\right.
$$
也就是$sin$函数组成的无穷维空间上的正交基。则函数$A = f(x)$在无穷维正交坐标基上的坐标分量为
$$
\left{\begin{matrix}
A_1 = A\cdot sin(x) = \int f(x)\cdot sin(x) dx\
A_2 = A\cdot sin(2x) = \int f(x)\cdot sin(2x) dx\
...\
A_w = A\cdot sin(wx) = \int f(x)\cdot sin(wx) dx\
...
\end{matrix}\right.
$$
那么，显然函数$A = f(x)​$就可以表示为在无穷维坐标基上的无穷维坐标：
$$
\begin{aligned}</p>
<p>f(x) &amp;= A_1\cdot sin(x) + A_2\cdot sin(2x) + ... + A_w \cdot sin(wx) + ...\</p>
<p>&amp;= sin(x)\cdot \int f(x)\cdot sin(x)dx +  sin(2x)\cdot \int f(x)\cdot sin(2x)dx + ... + sin(wx)\cdot \int f(x)\cdot sin(wx)dx + ...</p>
<p>\end{aligned}
$$</p>
<h1 id="如何理解傅里叶公式" tabindex="-1"><a class="header-anchor" href="#如何理解傅里叶公式" aria-hidden="true">#</a> 如何理解傅里叶公式？</h1>
<p>https://www.zhihu.com/question/19714540</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/130933080" target="_blank" rel="noopener noreferrer">Laplace变换与Fourier变换之间有何关系？<ExternalLinkIcon/></a></p>
</div></template>


