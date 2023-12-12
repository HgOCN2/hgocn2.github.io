<template><div><h1 id="函数近似和深度网络" tabindex="-1"><a class="header-anchor" href="#函数近似和深度网络" aria-hidden="true">#</a> 函数近似和深度网络</h1>
<ul>
<li><RouterLink to="/blogs/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E7%AE%80%E4%BB%8B">本章简介</a>
<ul>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC">值函数近似</a></li>
<li><a href="#%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E9%97%AE%E9%A2%98">大规模强化学习问题</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC">值函数近似</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E7%9A%84%E7%B1%BB%E5%9E%8B">值函数近似的类型</a></li>
<li><a href="#%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E5%99%A8">函数近似器</a></li>
</ul>
</li>
<li><a href="#%E5%A2%9E%E9%87%8F%E7%AE%97%E6%B3%95">增量算法</a>
<ul>
<li><a href="#%E6%A2%AF%E5%BA%A6%E7%AE%97%E6%B3%95">梯度算法</a>
<ul>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E5%92%8C%E9%9A%8F%E6%9C%BA%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D">值函数近似和随机梯度下降</a></li>
</ul>
</li>
<li><a href="#%E7%BA%BF%E6%80%A7%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC">线性函数近似</a>
<ul>
<li><a href="#%E7%89%B9%E5%BE%81%E5%90%91%E9%87%8F">特征向量</a></li>
<li><a href="#%E7%BA%BF%E6%80%A7%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC">线性值函数近似</a></li>
<li><a href="#%E8%A1%A8%E6%A0%BC%E6%A3%80%E7%B4%A2%E7%89%B9%E5%BE%81">表格检索特征</a></li>
</ul>
</li>
<li><a href="%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E4%B8%8B%E7%9A%84%E5%A2%9E%E9%87%8F%E5%BC%8F%E8%AF%84%E4%BB%B7%E7%AE%97%E6%B3%95">值函数近似下的增量式评价算法</a>
<ul>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E4%B8%8B%E7%9A%84%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B">值函数近似下的蒙特卡洛</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E4%B8%8B%E7%9A%84%E6%97%B6%E9%97%B4%E5%B7%AE%E5%88%86TD%EF%BC%880%EF%BC%89">值函数近似下的时间差分TD（0）</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E4%B8%8B%E7%9A%84%E6%97%B6%E9%97%B4%E5%B7%AE%E5%88%86TD%EF%BC%88%CE%BB%EF%BC%89">值函数近似下的时间差分TD（λ）</a></li>
</ul>
</li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC%E4%B8%8B%E7%9A%84%E5%A2%9E%E9%87%8F%E5%BC%8F%E4%BC%98%E5%8C%96%E7%AE%97%E6%B3%95">值函数近似下的增量式优化算法</a>
<ul>
<li><a href="#%E9%80%9A%E7%94%A8%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">通用策略迭代</a></li>
<li><a href="#%E5%AF%B9Q%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%91%E4%BC%BC">对Q函数的近似</a></li>
<li><a href="#%E7%BA%BF%E6%80%A7Q%E5%87%BD%E6%95%B0%E8%BF%91%E4%BC%BC">线性Q函数近似</a></li>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3%E4%BC%98%E5%8C%96%E7%AE%97%E6%B3%95">增量式策略迭代优化算法</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%94%B6%E6%95%9B%E6%80%A7%E7%AE%80%E4%BB%8B">收敛性简介</a>
<ul>
<li><a href="#%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7%E6%97%B6%E7%9A%84%E6%94%B6%E6%95%9B%E6%80%A7">策略评价时的收敛性</a></li>
<li><a href="#%E7%AD%96%E7%95%A5%E4%BC%98%E5%8C%96%E6%97%B6%E7%9A%84%E6%94%B6%E6%95%9B%E6%80%A7">策略优化时的收敛性</a></li>
</ul>
</li>
<li><a href="#%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C">神经网络</a>
<ul>
<li><a href="#%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E5%8D%95%E5%85%83">神经网络单元</a></li>
<li><a href="#%E6%BF%80%E6%B4%BB%E5%87%BD%E6%95%B0">激活函数</a></li>
<li><a href="#%E5%A4%9A%E5%B1%82%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C">多层神经网络</a></li>
<li><a href="#%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD">反向传播</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%92%8C%E6%B7%B1%E5%BA%A6">网络的大小和深度</a></li>
<li><a href="#%E6%AD%A3%E5%88%99%E5%8C%96">正则化</a></li>
<li><a href="#%E6%9C%AC%E8%AF%BE%E7%A8%8B%E5%AF%B9%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%9A%84%E8%A6%81%E6%B1%82">本课程对神经网络的要求</a></li>
</ul>
</li>
<li><a href="#%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C">卷积神经网络</a>
<ul>
<li><a href="#%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%9A%84%E6%95%B4%E4%BD%93%E7%BB%93%E6%9E%84">卷积神经网络的整体结构</a></li>
<li><a href="#%E5%8D%B7%E7%A7%AF">卷积</a></li>
<li><a href="#%E5%8D%B7%E7%A7%AF%E5%B1%82">卷积层</a></li>
<li><a href="#%E6%B1%A0%E5%8C%96%E5%B1%82%EF%BC%88Pooling%EF%BC%89">池化层（Pooling）</a></li>
<li><a href="#%E5%85%A8%E8%BF%9E%E6%8E%A5%E5%B1%82">全连接层</a></li>
</ul>
</li>
<li><a href="#%E5%85%B6%E4%BB%96">其他</a>
<ul>
<li><a href="#LeNet5">LeNet5</a></li>
<li><a href="#AlexNet">AlexNet</a></li>
<li><a href="#ResNet">ResNet</a></li>
<li><a href="#%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E7%9A%84%E5%85%B6%E4%BB%96%E6%8B%93%E5%B1%95">深度学习的其他拓展</a></li>
</ul>
</li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/learning-map.png" alt="learning-map"></p>
<p>截止到上一节，基本上有关强化学习的基础方法已经讲清楚了。从这一节课开始，我们要把强化学习方法，和我们现在用的比较多的函数近似的工具，比如神经网络，进行一个结合。</p>
<p>之前课程中的SARSA和Q学习都是基于表格更新的方法，即将值函数列成一个表格，每一次更新都是更新表格中的某一项。从今天开始，就要把表格的这个工具用函数近似的方法来代替。</p>
<p>这节课介绍怎么<strong>用函数近似的方法表达值函数</strong>。下节课会介绍用函数近似的方法表达策略，以及怎么推导出一个策略梯度算法。</p>
<p>本章的前三节都是讲如何将以前学到的理论方法和函数近似结合起来，也会去讲下我们为什么要用函数近似，函数近似并不仅仅是神经网络，神经网络只是函数近似中的一个小小的分支。但是之后要讲的深度强化学习都是用神经网络去逼近的，所以本章后面三节会去讲神经网络。</p>
<h1 id="本章简介" tabindex="-1"><a class="header-anchor" href="#本章简介" aria-hidden="true">#</a> 本章简介</h1>
<h2 id="值函数近似" tabindex="-1"><a class="header-anchor" href="#值函数近似" aria-hidden="true">#</a> 值函数近似</h2>
<ul>
<li>
<p>之前所提到的方法（不论是策略评价还是策略优化）均为基于值函数的方法。策略评价是指给定策略π，求相应的值函数；策略优化是指找到最优的值函数，从而推出最优的一个策略或者一个最优的Q函数来推导最优的策略。我们的目的都是求值函数，所以把它叫做基于值函数的方法。</p>
<ul>
<li>通过求解最优值函数来求解最优策略</li>
</ul>
</li>
<li>
<p>而且，在前面的课程中，都是基于表格的方法。比如Q函数的基于表格的方法：</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/method-based-on-table.png" alt="method-based-on-table"></p>
</li>
<li>
<p>表格的大小会随着<strong>状态数量</strong>和<strong>动作数量</strong>快速膨胀</p>
</li>
<li>
<p>对于表格中某一项的更新不会影响到其他项的更新。会精确地描述每一个动作和状态对应的值函数</p>
<ul>
<li>好处是：更新这个状态不会影响其他状态，更有利于收敛性。即没有干扰，不会引起其他参数的震荡。</li>
<li>坏处是：要想把表格维护的很好，必须保证把表格中的每一项都给采样到，不然很难找到最优的策略。迁移性也不够。</li>
</ul>
</li>
</ul>
<h2 id="大规模强化学习问题" tabindex="-1"><a class="header-anchor" href="#大规模强化学习问题" aria-hidden="true">#</a> 大规模强化学习问题</h2>
<p>强化学习能够用来解决大规模的问题</p>
<ul>
<li>
<p>西洋双陆棋：10^20种不同的状态</p>
<p>这已经非常大了，基本很难用一个表格在计算机内维护</p>
</li>
<li>
<p>围棋：10^170种不同的状态</p>
<p>比宇宙全部的原子数量还要多，那不可能用一个计算机存储这个表格并遍历一遍</p>
</li>
<li>
<p>机器人控制以及无人机控制：连续状态</p>
<p>连续状态是无穷维的量级。。用表格就更不能做了</p>
</li>
<li>
<p>图像状态：256^像素点数</p>
<p>这也是个极其庞大的数</p>
</li>
</ul>
<p>之前讲的基于表格的方法对于这么大的规模的强化学习问题，基本是没有办法的。所以说我们如何将无模型的方法应用到如此大规模的强化学习问题？</p>
<p>那我们就用值函数近似的方法去做。</p>
<h2 id="值函数近似-1" tabindex="-1"><a class="header-anchor" href="#值函数近似-1" aria-hidden="true">#</a> 值函数近似</h2>
<ul>
<li>
<p>过去我们都是使用表格来表示值函数，表格分为两种：</p>
<ul>
<li>对于V函数：每个状态s都有一个V值函数V(s)——V函数向量</li>
<li>对于Q函数：每个状态动作对&lt;s, a&gt;都有一个Q值函数——Q函数矩阵</li>
</ul>
</li>
<li>
<p>在大规模的马尔科夫决策（MDPs）中会存在如下的问题：</p>
<ul>
<li>需要在内存空间中存储大量的状态或者动作。这个内存空间有时候基本上是不可能这么大的。</li>
<li>学习太缓慢</li>
</ul>
</li>
<li>
<p>为了解决大规模的马尔科夫决策（MDPs）的方法是</p>
<ul>
<li>
<p>我们使用<strong>函数近似</strong>的方法
$
\begin{aligned}
\hat{v}(s,w)\approx V_{\pi}(s)\
\hat{q}(s,a,w)\approx q_{\pi}(s,a)\
\end{aligned}
$</p>
</li>
<li>
<p>从已经经历过的状态可以推广到未见的状态，适用性更广。</p>
<p>并不需要把所有的状态都遍历一遍，而是做一些采样就行，采足够的样本就可以拟合成一条曲线。因为有时候想描述一条曲线，有时候并不需要把曲线上的每一个点都给画出来，只需要大概用一个形式去描述就行了。</p>
<p>就像是初中学的函数，描述函数有几种方法，第一个方法就是表格，把自变量和应变量列成一个表格，然后就能根据自变量在表格中查表，找到对应的应变量。还有图像法。最简洁的方式就是函数表达法，就是用极少的参数取描述。</p>
<p>用函数表达的好处在于：比如你要描述一个二次函数曲线，若用表格法，则每一个点都要列在表格中，那表格是无穷大的。但是，用参数的话，用a,b,c就可以表达二次函数了，为了拟合出这个二次函数，你只要采样三个点就能把这三个参数求出来。<strong>但前提假设是，值函数都是有规律的，用参数能够把这个规律表示出来</strong>。恰巧对于值函数，这个假设是成立的，比如打砖块的图像，并不是每个点都会随意随机变化的，肯定是具有某种规律的。<strong>值函数近似就是通过采样一些样本，找到这种规律，有了这个规律，就可以适用到你没有见过的样本点</strong>。</p>
<p>所以值函数的表达就是用具体的参数w去表达。</p>
</li>
<li>
<p>更新参数的方法还和以前一样，可以使用蒙特卡洛或者时间差分更新参数w。</p>
<p>以前是更新一个表格，现在只是更新一个参数。</p>
</li>
</ul>
</li>
</ul>
<h2 id="值函数近似的类型" tabindex="-1"><a class="header-anchor" href="#值函数近似的类型" aria-hidden="true">#</a> 值函数近似的类型</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/type-of-value-function-approximation.png" alt="type-of-value-function-approximation"></p>
<p>第三种情况，要求动作a是可数的，因为s虽然已经可以是无穷大了，即连续的也可以，因为s是输入的。但因为a是输出，要同时输出m个Q值，所以a的数量一定是有限的。它有什么好处呢？我们在之前提过，Q函数得到了之后，我们可以直接得到一个最优的策略，怎么得到最优策略呢？是需要对Q函数取max的，如果同时输出了m个Q值，那么比一下大小，马上就能得到哪个动作a的Q函数值是最大的，这相比第二幅图，是比较高效的，所以，一般在动作a可数有限的情况下，都会选择第三种建模的方式。</p>
<h2 id="函数近似器" tabindex="-1"><a class="header-anchor" href="#函数近似器" aria-hidden="true">#</a> 函数近似器</h2>
<p>我们考虑<strong>可微</strong>的函数近似器，比如</p>
<ul>
<li><strong>线性模型</strong></li>
<li><strong>神经网络</strong></li>
<li>决策树</li>
<li>最近邻法</li>
<li>傅里叶基</li>
<li>小波变换</li>
<li>...</li>
</ul>
<p>不可微的很难用梯度的方法去寻优，所以用的特别少。</p>
<p>这里主要讲两种：线性模型、神经网络。</p>
<h1 id="增量算法" tabindex="-1"><a class="header-anchor" href="#增量算法" aria-hidden="true">#</a> 增量算法</h1>
<p>现在我们来讲在线性模型下，函数近似是怎么更新参数的。一般我们用增量式的方法去更新，即增量算法。</p>
<h2 id="梯度算法" tabindex="-1"><a class="header-anchor" href="#梯度算法" aria-hidden="true">#</a> 梯度算法</h2>
<p>首先来讲怎么更新参数，更新参数其实属于优化理论。</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/gradient-descent.png" alt="gradient-descent"></p>
<ul>
<li>
<p>如果J(w)是参数向量w的可微函数</p>
</li>
<li>
<p>那么J(w)的梯度定义为
$
\begin{aligned}
\bigtriangledown _wJ(w)=
\begin{bmatrix}
\frac{\partial J(w)}{\partial w_1}\
...\
\frac{\partial J(w)}{\partial w_n}
\end{bmatrix}
\end{aligned}
$</p>
</li>
<li>
<p>为了能找到J(w)的局部最优值</p>
</li>
<li>
<p>沿负梯度方向更新参数向量w
$
\bigtriangleup w=-\frac{1}{2}\alpha\bigtriangledown_wJ(w)
$
这里α代表步长。</p>
</li>
</ul>
<p>梯度下降的劣势是只能找到局部最优值，但在线性模型下，局部最优值就是全局最优值。</p>
<h3 id="值函数近似和随机梯度下降" tabindex="-1"><a class="header-anchor" href="#值函数近似和随机梯度下降" aria-hidden="true">#</a> 值函数近似和随机梯度下降</h3>
<p>在强化学习中怎么定义目标函数呢？</p>
<ul>
<li>
<p>目标：寻找参数向量w，以及最小化近似值函数
$
\hat{v}(s,w)
$
和真实的值函数vπ(s)之间的均方误差（mean-squared-error, MSE）：
$
J(w)=\mathbb{E}<em>{\pi}\left[ (v</em>{\pi}(S)-\hat{v}(S,w))^2 \right]
$</p>
</li>
<li>
<p>梯度下降算法会寻找局部最优值
$
\begin{aligned}
\bigtriangleup w&amp;=-\frac{1}{2}\alpha\bigtriangledown_wJ(w)\
&amp;=\alpha\mathbb{E}<em>{\pi}\left[ (v</em>{\pi}(S)-\hat{v}(S,w))\bigtriangledown_w\hat{v}(S,w) \right]\
\end{aligned}
$</p>
</li>
<li>
<p>随机梯度下降算法会对梯度进行采样
$
\bigtriangleup w=\alpha\left( v_{\pi}(S)-\hat{v}(S,w) \right)\bigtriangledown_w\hat{v}(S,w)
$</p>
</li>
<li>
<p>其他常见的优化算法：牛顿法、批量梯度下降、动量梯度下降、RMSprop、Nesterov、Adagrad、Adam...</p>
<p>建议直接用Adam，因为比较简单，而且更新步长是可以自调节自适应的。</p>
</li>
</ul>
<h2 id="线性函数近似" tabindex="-1"><a class="header-anchor" href="#线性函数近似" aria-hidden="true">#</a> 线性函数近似</h2>
<h3 id="特征向量" tabindex="-1"><a class="header-anchor" href="#特征向量" aria-hidden="true">#</a> 特征向量</h3>
<p>线性模型的参数就是一个线性向量。把每一个状态表达为一种线性特征，然后用线性特征和线性向量做一个结合，就得到一个线性模型。</p>
<ul>
<li>
<p>通过一个特征向量表达状态（线性特征）
$
\begin{aligned}
x(S)=
\begin{bmatrix}
x_1(S)\
...\
x_n(S)
\end{bmatrix}
\end{aligned}
$
形象理解：比如一个状态就是一个人，x1(S)就是这个人的身高，x2(S)就是这个人的体重，x3(S)就是这个人的年龄。也就是x(S)是这个人的一系列特征组成的特征向量，用这个特征向量来描述某一个人。也就是说x(S)就是状态的特征向量，x(S)是这个状态的一系列特征的组合，用这个x(S)可以描述一个状态S。</p>
</li>
<li>
<p>常用于特征之间关系不明显的数据</p>
<p>比如图像的不同像素之间是有一定的位置关系的，把它搞成一个向量就不太好，最好还是保持原来的矩阵形式。</p>
</li>
</ul>
<h3 id="线性值函数近似" tabindex="-1"><a class="header-anchor" href="#线性值函数近似" aria-hidden="true">#</a> 线性值函数近似</h3>
<ul>
<li>
<p>通过特征的线性组合表达值函数
$
\hat{v}(S,w)=X(s)^Tw=\sum_{j=1}^nx_j(S)w_j
$</p>
</li>
<li>
<p>目标函数是w的二次形式
$
J(w)=\mathbb{E}<em>{\pi}\left[ (v</em>{\pi}(S)-x(S)^Tw)^2 \right]
$</p>
</li>
<li>
<p>随机梯度下降会收敛到全局最优值</p>
</li>
<li>
<p>在线性值函数近似的情况下，梯度的计算变得非常简单
$
\begin{aligned}
\bigtriangledown <em>w\hat{v}(S,w)&amp;=x(S)\
\bigtriangleup w&amp;=\alpha\left( v</em>{\pi}(S)-\hat{v}(S,w) \right)x(S)\
\end{aligned}
$</p>
</li>
</ul>
<h3 id="表格检索特征" tabindex="-1"><a class="header-anchor" href="#表格检索特征" aria-hidden="true">#</a> 表格检索特征</h3>
<p>还有一种特征，也是线性模型。</p>
<ul>
<li>
<p>表格检索是线性值函数近似的一种特殊形式</p>
</li>
<li>
<p>使用表格检索特征
$
\begin{aligned}
x^{\text{table}}(S)=
\begin{bmatrix}
I(S=s_1)\
...\
I(=s_nS)
\end{bmatrix}
\end{aligned}
$
其中，I是示性函数，满足相等即返回1，否则返回0</p>
</li>
<li>
<p>参数向量w本质上相当于给了每个状态对应的值函数V
$
\begin{aligned}
\hat{v}(S,w)=
\begin{bmatrix}
I(S=s_1)\
...\
I(=s_nS)
\end{bmatrix}^T
\begin{bmatrix}
w_1\
...\
w_n
\end{bmatrix}
\end{aligned}
$
所以说，之前的表格法也是线性模型的一种</p>
</li>
</ul>
<h2 id="值函数近似下的增量式策略评价算法" tabindex="-1"><a class="header-anchor" href="#值函数近似下的增量式策略评价算法" aria-hidden="true">#</a> 值函数近似下的增量式策略评价算法</h2>
<ul>
<li>
<p>之前是假设了给定了真实的值函数vπ(s)</p>
</li>
<li>
<p>但是在RL环境中，并<strong>不知道</strong>真实的值函数，只有奖励值</p>
</li>
<li>
<p>直观地，我们用<strong>目标值</strong>替代vπ(s)</p>
<ul>
<li>
<p>对于蒙特卡洛，目标值是回报值$G_t$，则Δw为</p>
<p>$\bigtriangleup w=\alpha\left( G_t-\hat{v}(S_t,w) \right)\bigtriangledown_w\hat{v}(S_t,w)$</p>
</li>
<li>
<p>对于TD(0)，目标值是TD目标值：$R_{t+1}+\gamma\hat{v}(S_{t+1},w)$，则Δw为
$
\bigtriangleup w=\alpha(R_{t+1}+\gamma \hat{v}(S_{t+1},w)-\hat{v}(S_t,w))\bigtriangleup_w\hat{v}(S_t,w)
$</p>
</li>
<li>
<p>对于TD(λ)，目标值是λ回报值$G_t^{\lambda}$，则Δw为
$
\bigtriangleup w=\alpha\left( G_t^{\lambda}-\hat{v}(S_t,w)\bigtriangleup_w\hat{v}(S_t,w) \right)
$</p>
</li>
</ul>
</li>
</ul>
<h3 id="值函数近似下的蒙特卡洛" tabindex="-1"><a class="header-anchor" href="#值函数近似下的蒙特卡洛" aria-hidden="true">#</a> 值函数近似下的蒙特卡洛</h3>
<ul>
<li>
<p>回报值Gt是真实值函数vπ(St)的<strong>无偏估计</strong></p>
</li>
<li>
<p>通过智能体和环境的交互，可以得到监督学习的“训练数据”
$
&lt;S_1,G_1&gt;,&lt;S_2,G_2&gt;,...,&lt;S_t,G_T&gt;
$</p>
</li>
<li>
<p>更新参数
$
\begin{aligned}
\bigtriangleup w&amp;=\alpha(G_t-\hat{v}(S_t,w))\bigtriangleup_w\hat{v}(S_t,w)\
&amp;=\alpha(G_t-\hat{v}(S_tw))x(S_t)\quad \text{(in linear condition)}
\end{aligned}
$</p>
</li>
</ul>
<h3 id="值函数近似下的时间差分td-0" tabindex="-1"><a class="header-anchor" href="#值函数近似下的时间差分td-0" aria-hidden="true">#</a> 值函数近似下的时间差分TD（0）</h3>
<ul>
<li>
<p>时间差分目标值$R_{t+1}+\gamma\hat{v}(S_{t+1},w)$是真实值函数vπ(St)的<strong>有偏估计</strong></p>
</li>
<li>
<p>仍然可以构建监督学习的“训练数据”
$
&lt;S_1,R_2+\gamma\hat{v}(S_2,w)&gt;,\ &lt;S_2,R_3+\gamma\hat{v}(S_3,w)&gt;\ ,...,\ &lt;S_{T-1},R_T&gt;
$</p>
</li>
<li>
<p>更新参数
$
\begin{aligned}
\bigtriangleup w&amp;=\alpha(R_{t+1}+\gamma\hat{v}(S_{t+1},w)-\hat{v}(S_t,w))\bigtriangledown_w\hat{v}(S_t,w)\
&amp;=\alpha\delta x(S)\quad \text{(in linear condition)}\
\end{aligned}
$</p>
</li>
</ul>
<h3 id="值函数近似下的时间差分td-λ" tabindex="-1"><a class="header-anchor" href="#值函数近似下的时间差分td-λ" aria-hidden="true">#</a> 值函数近似下的时间差分TD（λ）</h3>
<ul>
<li>
<p>λ回报值$G_t^{\lambda}$，也是真实值函数vπ(s)的<strong>有偏估计</strong></p>
</li>
<li>
<p>仍然可以构建监督学习的“训练数据”
$
&lt;S_1,G_1^{\lambda}&gt;,\ &lt;S_1,G_2^{\lambda}&gt;\ ,...,\ &lt;S_1,G_{T-1}^{\lambda}&gt;
$</p>
</li>
<li>
<p>前向视角的TD(λ)
$
\begin{aligned}
\bigtriangleup w&amp;=\alpha\left( G_t^{\lambda}-\hat{v}(S_t,w) \right)\bigtriangledown_w\hat{v}(S_t,w)\
&amp;=\alpha\left( G_t^{\lambda}-\hat{v}(S_t,w) \right)x(S_t)\quad \text{(in linear condition)}\
\end{aligned}
$</p>
</li>
<li>
<p>后向视角的TD(λ)</p>
<p>需要维护一个资格迹Et，但和之前不同的是，之前所维护的资格迹是对每一个状态都维护一个资格迹，它记录了每一个状态对于当前更新的一个贡献。现在的资格迹是对参数的一个资格迹，它描述的是过去的每一套参数，对于我现在的一个更新的贡献。所以说目前这个资格迹的维度是和参数的维度一样的。之前资格迹的维度是和状态的数量是一样的，所以这里资格迹的含义发生了一些变化，但是整体的思路是差不多的。
$
\begin{aligned}
\delta_t&amp;=R_{t+1}+\gamma\hat{v}(S_{t+1},w)-\hat{v}(S_t,w)\
E_t&amp;=\gamma\lambda E_{t-1}+\bigtriangledown_w\hat{v}(S_t,w)=\gamma\lambda E_{t-1}+x(S_t)\quad \text{(in linear condition)}\
\bigtriangleup w&amp;=\alpha\delta_tE_t\
\end{aligned}
$</p>
</li>
</ul>
<h2 id="值函数近似下的增量式策略优化算法" tabindex="-1"><a class="header-anchor" href="#值函数近似下的增量式策略优化算法" aria-hidden="true">#</a> 值函数近似下的增量式策略优化算法</h2>
<h3 id="通用策略迭代" tabindex="-1"><a class="header-anchor" href="#通用策略迭代" aria-hidden="true">#</a> 通用策略迭代</h3>
<p>还是和以前一样，对于无模型的方法，我们同样要选Q函数，V函数是不能得到最优策略的。</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/generic-strategy-iteration.png" alt="generic-strategy-iteration"></p>
<ul>
<li>
<p>策略评价：<strong>近似化策略评价</strong>$\hat{q}(.,.,w)\approx q_{\pi}$在每一次迭代时，是找不到最优的Q函数的，所以是近似的策略评价。</p>
</li>
<li>
<p>策略提升：ε贪婪策略提升</p>
</li>
</ul>
<h3 id="对q函数的近似" tabindex="-1"><a class="header-anchor" href="#对q函数的近似" aria-hidden="true">#</a> 对Q函数的近似</h3>
<p>和V函数其实一样，就是把V换成了Q。</p>
<ul>
<li>
<p>近似Q函数$\hat{q}(S,A,w)\approx q_{\pi}(S,A)$</p>
</li>
<li>
<p>最小化近似值和真实值的均方误差
$
J(w)=\mathbb{E}<em>{\pi}\left[ (q</em>{\pi}(S,A)-\hat{q}(S,A,w))^2 \right]
$</p>
</li>
<li>
<p>使用随机梯度下降来找到局部最小值
$
\begin{aligned}
-\frac{1}{2}\bigtriangledown_wJ(w)&amp;=(q_{\pi}(S,A)-\hat{q}(S,A,w))\bigtriangledown_w\hat{q}(S,A,w)\
\bigtriangleup w&amp;=\alpha(q_{\pi}(S,A)-\hat{q}(S,A,w))\bigtriangledown_w\hat{q}(S,A,w)\
\end{aligned}
$</p>
</li>
</ul>
<h3 id="线性q函数近似" tabindex="-1"><a class="header-anchor" href="#线性q函数近似" aria-hidden="true">#</a> 线性Q函数近似</h3>
<ul>
<li>
<p>用一个特征向量表示某一个具体的S,A。</p>
<p>其实就是多加了一维特征A进去了。当然亦可以多加几维特征。比如机器人关节有六个，那就要多加六个维度。
$
\begin{aligned}
x(S,A)=
\begin{bmatrix}
x_1(S,A)\
...\
x_n(S,A)
\end{bmatrix}
\end{aligned}
$</p>
</li>
<li>
<p>通过特征的线性组合表达Q函数
$
\hat{q}(S,A,w)=x(S,A)^Tw=\sum_{j=1}^nx_j(S,A)w_j
$</p>
</li>
<li>
<p>随机梯度下降
$
\begin{aligned}
\bigtriangledown_w\hat{q}(SA,w)&amp;=x(S,A)\
\bigtriangleup w&amp;=\alpha(q_{\pi}(S,A)-\hat{q}(S,A,w))x(S,A)\
\end{aligned}
$</p>
</li>
</ul>
<h3 id="增量式策略迭代优化算法" tabindex="-1"><a class="header-anchor" href="#增量式策略迭代优化算法" aria-hidden="true">#</a> 增量式策略迭代优化算法</h3>
<p>同样地，我们用目标值替换真实的$q_{\pi}(S,A)$，因为真实的qπ我们是不知道的。</p>
<ul>
<li>
<p>对于蒙特卡洛，目标值即回报值Gt
$
\bigtriangleup w=\alpha(G_t-\hat{q}(S_t,A_t,w))\bigtriangledown_w\hat{q}(S_t,A_t,w)
$</p>
</li>
<li>
<p>对于TD(0)，目标值是TD目标值
$
R_{t+1}+\gamma Q(S_{t+1},A_{t+1})
$</p>
<p>$
\bigtriangleup w=\alpha(R_{t+1}+\gamma\hat{q}(S_{t+1},A_{t+1},w)-\hat{q}(S_t,A_t,w))\bigtriangledown_w\hat{q}(S_t,A_t,w)
$</p>
</li>
<li>
<p>对于前向视角的TD(λ)，目标值时针对Q的λ回报值
$
\bigtriangleup w=\alpha(q_t^{\lambda}-\hat{q}(S_t,A_t,w))\bigtriangledown_w\hat{q}(S_t,A_t,w)
$</p>
</li>
<li>
<p>对于后向视角的TD(λ)，
$
\begin{aligned}
\delta_t&amp;=R_{t+1}+\gamma\hat{q}(S_{t+1},A_{t+1},w)-\hat{q}(S_t,A_t,w)\
E_t&amp;=\gamma\lambda E_{t-1}+\bigtriangledown_w\hat{q}(S_t,A_t,w)\
\bigtriangleup w&amp;=\alpha\delta_tE_t\
\end{aligned}
$</p>
</li>
</ul>
<h1 id="收敛性简介" tabindex="-1"><a class="header-anchor" href="#收敛性简介" aria-hidden="true">#</a> 收敛性简介</h1>
<h2 id="策略评价时的收敛性" tabindex="-1"><a class="header-anchor" href="#策略评价时的收敛性" aria-hidden="true">#</a> 策略评价时的收敛性</h2>
<p>当我们从表格法迁移到函数近似，除了能获得之前所说的一些好处（比如大规模强化学习问题，通用性更广）之外，我们有一些什么坏处呢？</p>
<p>最重要的坏处就是<strong>收敛性会受损</strong>。收敛性的证明比较复杂。</p>
<p>当我们把一个强化学习问题用一套比较复杂的模型去解的时候，是很有可能面临一些不收敛的情况的。怎么去解决不收敛的情况呢？一般是通过一些经验。</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/convergence-in-strategy-evaluation.png" alt="convergence-in-strategy-evaluation"></p>
<p>其中，上图打钩的表示能保证收敛性，打叉的表示不能收敛。</p>
<ul>
<li>表格检索的收敛性最好</li>
<li>离策略的收敛性比在策略要差</li>
<li>非线性近似会影响收敛性</li>
<li>时间差分TD算法的收敛性不如蒙特卡洛MC算法的收敛性</li>
</ul>
<h2 id="策略优化时的收敛性" tabindex="-1"><a class="header-anchor" href="#策略优化时的收敛性" aria-hidden="true">#</a> 策略优化时的收敛性</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/convergence-in-strategy-optimization.png" alt="convergence-in-strategy-optimization"></p>
<p>其中，“（√）”表示接近最优值函数，即可以收敛，但不会到最优值。</p>
<p>Q学习是离策略的，收敛性会更差一点。虽然收敛性不好，但是适用性很广，也可以通过一些手段（下下节课讲），改善它的收敛性，就可以发挥它其他的一些好处，比如离策略下数据有效性会更高啊等一些好处。</p>
<h1 id="神经网络" tabindex="-1"><a class="header-anchor" href="#神经网络" aria-hidden="true">#</a> 神经网络</h1>
<p>参考资料：</p>
<p>由于神经网络和卷积神经网络并不是我们这门课的重点，因此这里主要是简述，具体大家可以参考如下的资料</p>
<ul>
<li>
<p>UFLDL 教程，有关神经网络和反向传播算法</p>
<p>http://ufldl.stanford.edu/wiki/index.php/UFLDL_Tutorial (可以选择中文)</p>
</li>
<li>
<p>CS231</p>
<p>http://cs231n.github.io/</p>
</li>
</ul>
<h2 id="神经网络单元" tabindex="-1"><a class="header-anchor" href="#神经网络单元" aria-hidden="true">#</a> 神经网络单元</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/neural-network-unit.png" alt="neural-network-unit"></p>
<p>本质上是一个线性特征组合 + 一个非线性激活函数。在这里
$$
h_{W,b}(x)=f(W^Tx+b)=f\left( \sum_{i=1}^3 W_ix_i+b\right)
$$</p>
<ul>
<li>其中函数f：R→R称为“激活函数”</li>
<li>W,b表示这个神经元的参数</li>
<li>通过W,b对输入的特征进行了特征组合，然后经过非线性映射，将输入投射到新的空间</li>
</ul>
<h2 id="激活函数" tabindex="-1"><a class="header-anchor" href="#激活函数" aria-hidden="true">#</a> 激活函数</h2>
<p>为什么要靠激活函数？</p>
<ul>
<li>特征组合运算都是线性运算</li>
<li>分割不同的神经网络层</li>
</ul>
<p>常用的激活函数</p>
<ul>
<li>
<p>sigmoid
$
f(z)=\frac{1}{1+e^{-z}}
$</p>
</li>
<li>
<p>tanh
$
f(z)=tanh(z)=\frac{e^z-e^{-z}}{e^z-e^{-z}}
$</p>
</li>
<li>
<p>ReLU(Rectified Linear Unit)
$
f(z)=ReLU(z)=max(0,z)
$</p>
</li>
</ul>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/activation-function.png" alt="activation-function"></p>
<ul>
<li>
<p>sigmoid和tanh形式不同，取值范围有所差别。([0,1],[-1,1])</p>
</li>
<li>
<p>激活函数除了要求非线性外，还要求容易求导</p>
<ul>
<li>
<p>sigmoid：
$
f'(z)=f(z)(1-f(z))
$</p>
</li>
<li>
<p>tanh：
$
f'(z)=1-(f(z))^2
$</p>
</li>
<li>
<p>sigmiod和tanh具有饱和效应，不适用于太深的神经网络。</p>
</li>
</ul>
</li>
</ul>
<h2 id="多层神经网络" tabindex="-1"><a class="header-anchor" href="#多层神经网络" aria-hidden="true">#</a> 多层神经网络</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/multilayer-neural-network.png" alt="multilayer-neural-network"></p>
<ul>
<li>
<p>输入层，输出层，隐藏层</p>
</li>
<li>
<p>每一层的输出本质上是将输入特征进行了变换</p>
</li>
<li>
<p>如果用向量的形式表示
$
f([z_1,z_2,z_3])=[f(z_1),f(z_2),f(z_3)]
$
，且用$W^{(l)}, b^{(l)}$表示第l层的权重和偏置
$
\begin{aligned}
a^{(2)}=f(W^{(1)}x+b^{(1)})\
a^{(3)}=f(W^{(2)}a^{(2)}+b^{(2)})
\end{aligned}
$</p>
</li>
<li>
<p>上述过程叫做前向传播——给定第l层的输出，可以计算l+1层的输出</p>
</li>
</ul>
<h2 id="反向传播" tabindex="-1"><a class="header-anchor" href="#反向传播" aria-hidden="true">#</a> 反向传播</h2>
<p>神经网络中最重要的概念之一就是反向传播</p>
<ul>
<li>
<p>前向传播指的是从前往后一次计算输出的过程</p>
</li>
<li>
<p>反向传播指的是从后往前一次计算梯度的过程</p>
</li>
<li>
<p>损失函数
$
J=\frac{1}{2}||h_{W,b}(x)-y||^2
$</p>
</li>
<li>
<p>如果要更新参数
$
W^{(1)},b^{(1)},W^{(2)},b^{(2)}
$
，那么就需要计算相应的梯度
$
\bigtriangledown_{w^{(1)}}J,\bigtriangledown_{b^{(1)}}J,\bigtriangledown_{w^{(2)}}J,\bigtriangledown_{b^{(2)}}J,...
$</p>
</li>
<li>
<p>反向传播本质上就是利用了求导的链式法则
$
\begin{aligned}\
\frac{\partial y}{\partial x}&amp;=\frac{\partial y}{\partial z}\frac{\partial z}{\partial x}\
\frac{\partial J}{\partial W^{(2)}}&amp;=\frac{\partial J}{\partial a^{(2)}}\frac{\partial a^{(2)}}{\partial W^{(2)}}\
\frac{\partial J}{\partial W^{(1)}}&amp;=\frac{\partial J}{\partial a^{(2)}}\frac{\partial a^{(2)}}{\partial W^{(1)}}\
\end{aligned}
$</p>
</li>
</ul>
<h2 id="网络的大小和深度" tabindex="-1"><a class="header-anchor" href="#网络的大小和深度" aria-hidden="true">#</a> 网络的大小和深度</h2>
<ul>
<li>多层神经网络集合可以拟合任意连续函数</li>
<li>网络越大越深，模型复杂度越高，对函数的拟合能力越强</li>
<li>网络越大越深，参数也会越多，容易导致过拟合</li>
</ul>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/network-size-and-depth.png" alt="network-size-and-depth"></p>
<h2 id="正则化" tabindex="-1"><a class="header-anchor" href="#正则化" aria-hidden="true">#</a> 正则化</h2>
<p>为了防止过拟合，出了修改网络大小之外，还可以在损失函数里加正则化项
$$
J_{\text{with regularization}}=J+\frac{\lambda}{2}\sum_{l}\sum_j\sum_j\left( W_{ji}^{(l)} \right)^2
$$
<img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/regularization.png" alt="regularization"></p>
<h2 id="本课程对神经网络的要求" tabindex="-1"><a class="header-anchor" href="#本课程对神经网络的要求" aria-hidden="true">#</a> 本课程对神经网络的要求</h2>
<ul>
<li>对于本门课而言
<ul>
<li>神经网络是工具的一种</li>
<li>要求知道如何使用</li>
<li>深度学习框架可以自动求导</li>
</ul>
</li>
<li>不过要真正地深入了解深度强化学习，深度学习，神经网络的知识必不可少</li>
</ul>
<h1 id="卷积神经网络" tabindex="-1"><a class="header-anchor" href="#卷积神经网络" aria-hidden="true">#</a> 卷积神经网络</h1>
<h2 id="卷积神经网络的整体结构" tabindex="-1"><a class="header-anchor" href="#卷积神经网络的整体结构" aria-hidden="true">#</a> 卷积神经网络的整体结构</h2>
<ul>
<li>
<p>常规的神经网络每一层都是一维向量</p>
</li>
<li>
<p>卷积神经网络的每一层是三维数据：高，宽，深</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/CNN-structur.png" alt="CNN-structur"></p>
</li>
<li>
<p>由宽和高组成的平面称为特征图 (feature map)</p>
</li>
<li>
<p>深度表示特征图的个数, 也叫做通道 (channal) 数</p>
</li>
<li>
<p>特别地，当输入是一个图像时，它表示深度为3(RGB) 的特征图</p>
</li>
</ul>
<h2 id="卷积" tabindex="-1"><a class="header-anchor" href="#卷积" aria-hidden="true">#</a> 卷积</h2>
<ul>
<li>局部连接</li>
<li>参数共享</li>
<li>关键概念
<ul>
<li>卷积核、步长（stride）、pad</li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/convolution.png" alt="convolution"></p>
<h2 id="卷积层" tabindex="-1"><a class="header-anchor" href="#卷积层" aria-hidden="true">#</a> 卷积层</h2>
<ul>
<li>对于每一个卷积核
<ul>
<li>使用一个滑动窗口在输入层滑动</li>
<li>每滑动一次，就会得到一个输出值</li>
<li>滑动完整个输入层就得到一个输出的特征图</li>
</ul>
</li>
<li>每有一个卷积核就提取一种特征，得到一个特征图</li>
<li>使用多个卷积核就能得到多个特征图</li>
</ul>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/convolution-layer.png" alt="convolution-layer"></p>
<p>http://cs231n.github.io/convolutional-networks/</p>
<h2 id="池化层-pooling" tabindex="-1"><a class="header-anchor" href="#池化层-pooling" aria-hidden="true">#</a> 池化层（Pooling）</h2>
<ul>
<li>池化层本质上是一种降采样</li>
<li>降低特征图大小</li>
</ul>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/Pooling.png" alt="Pooling"></p>
<h2 id="全连接层" tabindex="-1"><a class="header-anchor" href="#全连接层" aria-hidden="true">#</a> 全连接层</h2>
<ul>
<li>全连接层就是传统神经网络中的连接方式</li>
<li>每一层是一个一维向量</li>
<li>也可以用从三维的角度去看待全连接层
<ul>
<li>即宽和高均为1的层</li>
</ul>
</li>
<li>一般卷积神经网络的最后几层是全连接层
<ul>
<li>输出不同类别的概率</li>
<li>输出不同动作所对应的Q值 (RL问题中)</li>
</ul>
</li>
</ul>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="lenet5" tabindex="-1"><a class="header-anchor" href="#lenet5" aria-hidden="true">#</a> LeNet5</h2>
<p>1994年Yann LeCun</p>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/LeNet5.png" alt="LeNet5"></p>
<ul>
<li>Conv, Ave-pooling, sigmoid</li>
</ul>
<h2 id="alexnet" tabindex="-1"><a class="header-anchor" href="#alexnet" aria-hidden="true">#</a> AlexNet</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/AlexNet.png" alt="AlexNet"></p>
<ul>
<li>2012年引发深度学习热潮</li>
<li>使用了多个GPU分布式训练</li>
<li>使用了ReLU，数据增广，dropout</li>
</ul>
<h2 id="resnet" tabindex="-1"><a class="header-anchor" href="#resnet" aria-hidden="true">#</a> ResNet</h2>
<p><img src="@source/blogs/reinforcement-learning/reinforcement-learning/function-approximation-and-deep-network/pic/ResNet.png" alt="ResNet"></p>
<ul>
<li>提出残差结构，使得超深的网络训练成为现实</li>
<li>2015 年152层的结构，导致识别率超过人类</li>
<li>2016 CVPR best paper</li>
</ul>
<h2 id="深度学习的其他拓展" tabindex="-1"><a class="header-anchor" href="#深度学习的其他拓展" aria-hidden="true">#</a> 深度学习的其他拓展</h2>
<ul>
<li>循环神经网络 RNN, LSTM</li>
<li>Attention 结构</li>
<li>可微分存储器</li>
<li>…</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第七章-函数近似与深度网络<ExternalLinkIcon/></a></li>
</ul>
<p>本章内容是该课程这节课的笔记。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/26007538" target="_blank" rel="noopener noreferrer">强化学习入门 第五讲 值函数逼近<ExternalLinkIcon/></a></li>
</ul>
<p>也可参考该知乎专栏文章。</p>
</div></template>


