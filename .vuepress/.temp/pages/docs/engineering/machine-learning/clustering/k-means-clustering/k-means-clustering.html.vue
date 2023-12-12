<template><div><h1 id="k均值聚类" tabindex="-1"><a class="header-anchor" href="#k均值聚类" aria-hidden="true">#</a> k均值聚类</h1>
<ul>
<li><RouterLink to="/docs/engineering/machine-learning/clustering/clustering.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%A8%A1%E5%9E%8B">模型</a></li>
<li><a href="#%E7%AD%96%E7%95%A5">策略</a></li>
<li><a href="#%E7%AE%97%E6%B3%95">算法</a></li>
<li><a href="#%E7%AE%97%E6%B3%95%E7%89%B9%E6%80%A7">算法特性</a>
<ul>
<li><a href="#%E6%80%BB%E4%BD%93%E7%89%B9%E7%82%B9">总体特点</a></li>
<li><a href="#%E6%94%B6%E6%95%9B%E6%80%A7">收敛性</a></li>
<li><a href="#%E5%88%9D%E5%A7%8B%E7%B1%BB%E7%9A%84%E9%80%89%E6%8B%A9">初始类的选择</a></li>
<li><a href="#%E7%B1%BB%E5%88%AB%E4%B8%AA%E6%95%B0k%E7%9A%84%E9%80%89%E6%8B%A9">类别个数k的选择</a></li>
</ul>
</li>
<li><a href="#%E4%BB%A3%E7%A0%81%E5%AE%9E%E8%B7%B5">代码实践</a>
<ul>
<li><a href="#sklearn%E4%B8%AD%E7%9A%84KMeans%E5%AE%9E%E7%8E%B0">sklearn中的KMeans实现</a></li>
<li><a href="#word2vec%E4%B8%ADKMeans%E5%AE%9E%E7%8E%B0">word2vec中KMeans实现</a>
<ul>
<li><a href="#word2vec%E4%B8%AD%E7%9A%84KMeans%E6%BA%90%E7%A0%81%E6%91%98%E5%BD%95">word2vec中的KMeans源码摘录</a></li>
<li><a href="#%E5%AF%B9embdding%E8%BF%9B%E8%A1%8CKMeans%E8%81%9A%E7%B1%BB">对embdding进行KMeans聚类</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>k均值聚类是基于样本集合划分的聚类算法。k均值聚类将样本划分为$k$个子集，构成$k$个类，将$n$个样本分到$k$个类中每个样本到其所属类的中心的距离最小。每个样本只能属于一个类，所以$k$均值聚类是硬聚类。下面分别介绍$k$均值聚类的模型、策略、算法，讨论算法的特性及相关问题。</p>
<p>实际上，均值聚类是使用最大期望算法（Expectation-Maximization algorithm）求解的高斯混合模型（Gaussian Mixture Model, GMM）在正态分布的协方差为单位矩阵，且隐变量的后验分布为一组<a href="https://baike.baidu.com/item/%E7%8B%84%E6%8B%89%E5%85%8B%CE%B4%E5%87%BD%E6%95%B0/5760582" target="_blank" rel="noopener noreferrer">狄拉克δ函数<ExternalLinkIcon/></a>时所得到的特例。</p>
<h1 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h1>
<p>给定$n$个样本的集合$X={x_1, x_2, ... , x_n}$，每个样本由一个特征向量表示，特征向量的维数是$m$。k均值聚类的目标是将$n$个样本分到$k$个不同的类或着簇中，这里假设$k&lt;n$。$k$个类$G_1, G_2, ... ,G_k$形成对样本集合$X$的划分，其中
$$
G_i \bigcap G_j = \varnothing ,\ \bigcup_{i=1}^{k}G_i=X
$$
。用$C$表示划分，一个划分对应着一个聚类结果。</p>
<p>划分$C$是一个多对一的函数。事实上，如果把每个样本用一个整数$i \in {1, 2, ... , n}$表示，每个类也用一个整数$l  \in {1, 2, ... , k}$表示，那么划分或者聚类可以用函数$l = C(i)$表示，其中$i \in {1, 2, ... , n}$，$l \in {1, 2, ... , k}$。所以<strong>k均值聚类的模型是一个从样本到类的函数</strong>。</p>
<h1 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h1>
<p>k均值聚类归结为样本集合$X$的划分，或者从样本到类的函数的选择问题。k均值聚类的策略是通过损失函数的最小化选取最优的划分或函数$C^{*}$。</p>
<p>首先，采用欧式距离平方作为样本之间的距离$d(x_i, x_j)$
$$
\begin{aligned}
d(x_i,x_j)&amp;=\sum_{k=1}^{m}(x_{ki}-x_{kj})^2\
&amp;= ||x_i-x_j||^2
\end{aligned}
$$
然后，定义样本与其所属类的中心之间的距离的总和为损失函数，即
$$
W(C)=\sum_{l=1}^{k}\sum_{C(i)=l}||x_i-\bar{x}<em>l||^2
$$
式中，
$$
\bar{x}<em>l=(\bar{x}</em>{1l},\bar{x}</em>{2l},...,\bar{x}<em>{ml})^T
$$
是第$l$个类的均值或者聚类中心，属于第$l$类的样本个数为$n_l=\sum</em>{i=1}^nI\left(C(i)=l\right)$，$I(C(i) = l)$是指示函数，取值为1或0。函数$W(C)$也称为能量，表示相同类中的样本相似的程度。</p>
<p>k均值聚类就是求解最优化问题：
$$
\begin{aligned}
C^*&amp;=\text{arg }\mathop{\text{min}}<em>C W(C)\
&amp;=\text{arg }\mathop{\text{min}}<em>C \sum</em>{l=1}^{k}\sum</em>{C(i)=l}||x_i-\bar{x}<em>l||^2
\end{aligned}
$$
相似的样本被聚到同类时，损失函数最小，这个目标函数的最优化能达到聚类的目的。但是，这是一个组合优化问题，$n$个样本分到$k$类，所有可能分法的数目时：
$$
\begin{aligned}
S(n,k)=\frac{1}{k!}\sum</em>{l=1}^k(-1)^{k-l}
\begin{pmatrix}
k\
l
\end{pmatrix}
k^n
\end{aligned}
$$
这个数字是指数级的。事实上，k均值聚类的最优解求解问题是NP难问题。现实中采用迭代的方法求解。</p>
<h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h1>
<p>k均值聚类的算法是一个迭代的过程，每次迭代包括两个步骤：</p>
<ul>
<li>首先选择$k$个类的中心，将样本逐个指派到与其最近的中心的类中，得到一个聚类的结果；</li>
<li>然后更新每个类的样本的均值，作为类的新的中心</li>
</ul>
<p>重复以上步骤，直到收敛为止。具体过程如下。</p>
<p>首先，对于给定的中心值$(m_1, m_2, ... , m_k)$，求一个划分$C$，使得目标函数极小化：
$$
\mathop{\text{min}}<em>C \sum</em>{l=1}^{k}\sum_{C(i)=l}||x_i-m_l||^2
$$
就是说在类中心确定的情况下，将每个样本分到一个类中，使样本和其所属类的中心之间的距离总和最小。求解结果，将每个样本指派到与其最近的中心$m_l$的类$G_l$中。</p>
<p>然后，对给定的划分$C$，再求各个类的中心$(m_1, m_2, ... , m_k)$，使得目标函数极小化：
$$
\mathop{\text{min}}<em>{m_1,...,m_k} \sum</em>{l=1}^{k}\sum_{C(i)=l}||x_i-m_l||^2
$$
就是说在划分确定的情况下，使样本和其所属类的中心之间的距离总和最小。求解结果，对于每个包含$n_l$个样本的类$G_l$，更新其均值$m_l$：
$$
m_l=\frac{1}{n_l}\sum_{G(i)=l}x_i,\quad l=1,...,k
$$
重复以上两个步骤，直到划分不再改变，得到聚类结果。现将k均值聚类算法叙述如下：</p>
<p><strong>k均值聚类算法</strong></p>
<p>输入：$n$个样本的集合$X$；</p>
<p>输出：样本集合的聚类$C^*$。</p>
<p>（1）初始化。令$t=0$，随机选择$k$个样本点作为初始聚类中心
$$
m^{(0)}=\left(m_1^{(0)},...,m_l^{(0)},...,m_k^{(0)}\right)
$$
（2）对样本进行聚类。对固定的类中心
$$
m^{(t)}=\left(m_1^{(t)},...,m_l^{(t)},...,m_k^{(t)}\right)
$$
，其中$m_l^{(t)}$为类$G_l$的中心，计算每个样本到类中心的距离，将每个样本指派到与其最近的中心的类中，构成聚类结果$C^{(t)}$。</p>
<p>（3）计算新的类中心。对聚类结果$C^{(t)}$，计算当前各个类中的样本的均值，作为新的类中心
$$
m^{(t+1)}=\left(m_1^{(t+1)},...,m_l^{(t+1)},...,m_k^{(t+1)}\right)
$$
（4）如果迭代收敛或符合停止条件，输出
$$
C^*=C^{(t)}
$$
否则，令$t=t+1$，返回步（2）。</p>
<p><strong>k均值聚类算法的复杂度是$O(mnk)$，其中$m$是样本维数，$n$是样本个数，$k$是类别个数。在实际代码中，还要乘上迭代次数$iter$</strong>。</p>
<p>例子：</p>
<p>给定含有5个样本的集合
$$
\begin{aligned}
X=
\begin{bmatrix}
0 &amp; 0 &amp; 1 &amp; 5 &amp; 5\
2 &amp; 0 &amp; 0 &amp; 0 &amp; 2
\end{bmatrix}
\end{aligned}
$$
试用k均值聚类算法将样本聚到2个类中。</p>
<p>解：按照上述算法，</p>
<p>（1）选择两个样本点作为类的中心。假设选择
$$
\begin{aligned}
&amp;m_1^{(0)}=x_1=(0,2)^T\
&amp;m_2^{(0)}=x_2=(0,0)^T
\end{aligned}
$$
（2）以$m_1^{(0)},m_2^{(0)}$为类$G_1^{(0)},G_2^{(0)}$的中心，计算$x_3=(1,0)^T,x_4=(5,0)^T,x_5=(5,2)^T$与$m_1^{(0)}=(0,2)^T,m_2^{(0)}=(0,0)^T$的欧式距离平方。</p>
<p>对$x_3 = (1, 0)^T$，$d(x_3,m_1^{(0)})=5,d(x_3,m_2^{(0)})=1$，将$x_3$分到类$G_2^{(0)}$。</p>
<p>对$x_4= (5, 0)^T$，$d(x_4,m_1^{(0)})=29,d(x_4,m_2^{(0)})=25$，将$x_4$分到类$G_2^{(0)}$。</p>
<p>对$x_5= (5, 2)^T$，$d(x_5,m_1^{(0)})=25,d(x_5,m_2^{(0)})=29$，将$x_5$分到类$G_1^{(0)}$。</p>
<p>（3）得到新的类$G_1^{(1)}={x_1,x_5},G_2^{(1)}={x_2,x_3,x_4}$，计算类的中心$m_1^{(1)}, m_2^{(1)}$：
$$
m_1^{(1)}=(2.5,2.0)^T,m_2^{(1)}=(2,0)^T
$$
（4）重复步骤（2）和步骤（3）。</p>
<p>将$x_1$分到类$G_1^{(1)}$，将$x_2$分到类$G_2^{(1)}$，将$x_3$分到类$G_2^{(1)}$，将$x_4$分到类$G_2^{(1)}$，将$x_5$分到类$G_1^{(1)}$。</p>
<p>得到新的类$G_1^{(2)}={x_1,x_5},G_2^{(2)}={x_2,x_3,x_4}$</p>
<p>由于得到的新的类没有改变，聚类停止。得到聚类结果：
$$
G_1^<em>={x_1,x_5},G_2^</em>={x_2,x_3,x_4}
$$</p>
<h1 id="算法特性" tabindex="-1"><a class="header-anchor" href="#算法特性" aria-hidden="true">#</a> 算法特性</h1>
<h2 id="总体特点" tabindex="-1"><a class="header-anchor" href="#总体特点" aria-hidden="true">#</a> 总体特点</h2>
<p>k均值聚类有以下特点：基于划分的聚类方法：类别数$k$事先指定；以欧式距离平方表示样本之间的距离，以中心或样本的均值表示类别；以样本和其他所属类的中心之间的距离的总和为最优化的目标函数；得到的类别是平坦的、非层次化的；算法是迭代算法，不能保证得到全局最优。</p>
<h2 id="收敛性" tabindex="-1"><a class="header-anchor" href="#收敛性" aria-hidden="true">#</a> 收敛性</h2>
<p>k均值聚类属于启发式方法，不能保证收敛到全局最优，<strong>初始中心的选择会直接影响聚类结果</strong>。注意，类中心在聚类的过程中会发生移动，但是往往不会移动太大，因为在每一步，样本被分到与其最近的中心的类中。</p>
<h2 id="初始类的选择" tabindex="-1"><a class="header-anchor" href="#初始类的选择" aria-hidden="true">#</a> 初始类的选择</h2>
<p>选择不同的初始中心，会得到不同的聚类结果。针对上面的例子，如果改变两个类的初始中心，比如选择
$$
m_1^{(0)}=x_1,m_2^{(0)}=x_5
$$
那么$x_2$，$x_3$会分到$G_1^{(0)}$，$x_4$会分到$G_2^{(0)}$，形成聚类结果$G_1^{(1)}={x_!,x_2,x_3},\ G_2^{(1)}={x_4,x_5}$，中心是$m_1^{(1)}=(0.33,0.67)^T,m_2^{(1)}=(5,1)^T$。继续迭代，聚类结果仍然是$G_1^{(1)}={x_!,x_2,x_3},\ G_2^{(1)}={x_4,x_5}$。聚类停止。</p>
<p>初始中心的选择，比如可以用层次聚类对样本进行聚类，得到$k$个类时停止。然后从每个类中选择一个与中心距离最近的点。</p>
<h2 id="类别个数k的选择" tabindex="-1"><a class="header-anchor" href="#类别个数k的选择" aria-hidden="true">#</a> 类别个数k的选择</h2>
<p>k均值聚类中的类别数$k$值需要预先指定，而在实际应用中最优的$k$值是不知道的，解决这个问题的一个方法是尝试用不同的$k$值聚类，检验各自的到的聚类结果的质量，推测最优的$k$值。聚类结果的质量可以用类的平均直径来衡量。一般地，类别数目变小时，平均直径会增加；类别数目变大超过某个值以后，平均直径会不变；而这个值正是最优的$k$值。下图说明类别数与平均直径的关系。实验时，可以采用二分查找，快速找到最优的$k$值。</p>
<p>下图是聚类的类别数和平均直径的关系。</p>
<p><img src="@source/docs/engineering/machine-learning/clustering/k-means-clustering/pic/KMeans-classes-and-diameter.png" alt="KMeans-classes-and-diameter"></p>
<h1 id="代码实践" tabindex="-1"><a class="header-anchor" href="#代码实践" aria-hidden="true">#</a> 代码实践</h1>
<h2 id="sklearn中的kmeans实现" tabindex="-1"><a class="header-anchor" href="#sklearn中的kmeans实现" aria-hidden="true">#</a> sklearn中的KMeans实现</h2>
<p>这个简单的例子来自<a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html" target="_blank" rel="noopener noreferrer"><code v-pre>sklearn.cluster.KMeans</code><ExternalLinkIcon/></a>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>cluster <span class="token keyword">import</span> KMeans
<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token operator">>></span><span class="token operator">></span> X <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>               <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> kmeans <span class="token operator">=</span> KMeans<span class="token punctuation">(</span>n_clusters<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> kmeans<span class="token punctuation">.</span>labels_
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>int32<span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> kmeans<span class="token punctuation">.</span>predict<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>int32<span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> kmeans<span class="token punctuation">.</span>cluster_centers_
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">10.</span><span class="token punctuation">,</span>  <span class="token number">2.</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span> <span class="token number">1.</span><span class="token punctuation">,</span>  <span class="token number">2.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="word2vec中kmeans实现" tabindex="-1"><a class="header-anchor" href="#word2vec中kmeans实现" aria-hidden="true">#</a> word2vec中KMeans实现</h2>
<h3 id="word2vec中的kmeans源码摘录" tabindex="-1"><a class="header-anchor" href="#word2vec中的kmeans源码摘录" aria-hidden="true">#</a> word2vec中的KMeans源码摘录</h3>
<p>下面这段代码是从word2vec.c中的源码摘录出来的KMeans部分，我自己改了一些变量的名称，还加了一些注释，方便看懂。</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">// Run K-means on the word vectors</span>
<span class="token keyword">int</span> cluster_count <span class="token operator">=</span> classes<span class="token punctuation">,</span> iter <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> closeid<span class="token punctuation">;</span> <span class="token comment">// cluster_count: clusterCount</span>
<span class="token keyword">int</span> <span class="token operator">*</span>center_count <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>classes <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//属于每个中心的单词个数</span>
<span class="token keyword">int</span> <span class="token operator">*</span>vocab_cluster_id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>vocab_size<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 存放每个单词指派的中心id</span>
real closev<span class="token punctuation">,</span> x<span class="token punctuation">;</span>
real <span class="token operator">*</span>center_vector <span class="token operator">=</span> <span class="token punctuation">(</span>real <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>classes <span class="token operator">*</span> layer1_size<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>real<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//存放每个中心的向量表示</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> vocab_cluster_id<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> a <span class="token operator">%</span> cluster_count<span class="token punctuation">;</span> <span class="token comment">//随机指派每个单词的中心</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> iter<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//一共迭代iter轮</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> cluster_count <span class="token operator">*</span> layer1_size<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> center_vector<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> cluster_count<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> center_count<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>d <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> d<span class="token operator">++</span><span class="token punctuation">)</span> center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> vocab_cluster_id<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">+</span> d<span class="token punctuation">]</span> <span class="token operator">+=</span> syn0<span class="token punctuation">[</span>c <span class="token operator">*</span> layer1_size <span class="token operator">+</span> d<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//将属于每个中心的点的每个坐标相加</span>
        center_count<span class="token punctuation">[</span>vocab_cluster_id<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 分别计算属于每个中心的点个数</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> cluster_count<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//更新每个中心的向量表示</span>
        closev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">/=</span> center_count<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
            closev <span class="token operator">+=</span> center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">*</span> center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        closev <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>closev<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">/=</span> closev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//更新每个样本的中心</span>
        closev <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
        closeid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>d <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">&lt;</span> cluster_count<span class="token punctuation">;</span> d<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> x <span class="token operator">+=</span> center_vector<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> d <span class="token operator">+</span> b<span class="token punctuation">]</span> <span class="token operator">*</span> syn0<span class="token punctuation">[</span>c <span class="token operator">*</span> layer1_size <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> closev<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//选出与单词表示最相近的中心</span>
                closev <span class="token operator">=</span> x<span class="token punctuation">;</span>
                closeid <span class="token operator">=</span> d<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        vocab_cluster_id<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> closeid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Save the K-means classes</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token function">fprintf</span><span class="token punctuation">(</span>fo<span class="token punctuation">,</span> <span class="token string">"%s %d\n"</span><span class="token punctuation">,</span> vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>word<span class="token punctuation">,</span> vocab_cluster_id<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">free</span><span class="token punctuation">(</span>center_count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">free</span><span class="token punctuation">(</span>center_vector<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">free</span><span class="token punctuation">(</span>vocab_cluster_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对embdding进行kmeans聚类" tabindex="-1"><a class="header-anchor" href="#对embdding进行kmeans聚类" aria-hidden="true">#</a> 对embdding进行KMeans聚类</h3>
<p>word2vec训练出来的embedding结果，以二进制进行存储，其格式为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>id vec[0] vec[1] ... vec[end]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：vec[0] vec[1] ... vec[end]需要以二进制格式存储。</p>
<p>将下面KMeans.c文件进行编译，然后用下面的sh脚本运行。</p>
<p>这里面的向量是经过归一化的，其中心向量也经过了归一化，所以其实算的是cos距离，是球面聚类。</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">// KMeans.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span> <span class="token comment">// mac os x</span></span>
<span class="token comment">// #include &lt;malloc.h></span>

<span class="token keyword">const</span> <span class="token keyword">long</span> <span class="token keyword">long</span> max_size <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>         <span class="token comment">// max length of strings</span>
<span class="token keyword">const</span> <span class="token keyword">long</span> <span class="token keyword">long</span> N <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>                  <span class="token comment">// number of closest words that will be shown</span>
<span class="token keyword">const</span> <span class="token keyword">long</span> <span class="token keyword">long</span> max_w <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>              <span class="token comment">// max length of vocabulary entries</span>

<span class="token keyword">typedef</span> <span class="token keyword">float</span> real<span class="token punctuation">;</span>                      <span class="token comment">// Precision of float numbers</span>

<span class="token keyword">void</span> <span class="token function">KMeans</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>vocab<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">float</span> <span class="token operator">*</span>syn0<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> vocab_size<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> layer1_size<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> classes<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>output_file_name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">long</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">;</span>
  FILE <span class="token operator">*</span>fo<span class="token punctuation">;</span>
  fo <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>output_file_name<span class="token punctuation">,</span> <span class="token string">"wb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Run K-means on the word vectors</span>
  <span class="token keyword">int</span> clcn <span class="token operator">=</span> classes<span class="token punctuation">,</span> iter <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> closeid<span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>centcn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>classes <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>cl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>vocab_size<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  real closev<span class="token punctuation">,</span> x<span class="token punctuation">;</span>
  real <span class="token operator">*</span>cent <span class="token operator">=</span> <span class="token punctuation">(</span>real <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>classes <span class="token operator">*</span> layer1_size<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>real<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">char</span> <span class="token operator">*</span>word <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>max_w <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> cl<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> a <span class="token operator">%</span> clcn<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> iter<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> clcn <span class="token operator">*</span> layer1_size<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> cent<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> clcn<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> centcn<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>d <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> d<span class="token operator">++</span><span class="token punctuation">)</span> cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> cl<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">+</span> d<span class="token punctuation">]</span> <span class="token operator">+=</span> syn0<span class="token punctuation">[</span>c <span class="token operator">*</span> layer1_size <span class="token operator">+</span> d<span class="token punctuation">]</span><span class="token punctuation">;</span>
      centcn<span class="token punctuation">[</span>cl<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> clcn<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      closev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">/=</span> centcn<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
        closev <span class="token operator">+=</span> cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">*</span> cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      closev <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>closev<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> b <span class="token operator">+</span> c<span class="token punctuation">]</span> <span class="token operator">/=</span> closev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      closev <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
      closeid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>d <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">&lt;</span> clcn<span class="token punctuation">;</span> d<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> x <span class="token operator">+=</span> cent<span class="token punctuation">[</span>layer1_size <span class="token operator">*</span> d <span class="token operator">+</span> b<span class="token punctuation">]</span> <span class="token operator">*</span> syn0<span class="token punctuation">[</span>c <span class="token operator">*</span> layer1_size <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> closev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          closev <span class="token operator">=</span> x<span class="token punctuation">;</span>
          closeid <span class="token operator">=</span> d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      cl<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> closeid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Save the K-means classes</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">memcpy</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> vocab <span class="token operator">+</span> a <span class="token operator">*</span> max_w<span class="token punctuation">,</span> max_w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fprintf</span><span class="token punctuation">(</span>fo<span class="token punctuation">,</span> <span class="token string">"%s %d\n"</span><span class="token punctuation">,</span> word<span class="token punctuation">,</span> cl<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">free</span><span class="token punctuation">(</span>centcn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">free</span><span class="token punctuation">(</span>cent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">free</span><span class="token punctuation">(</span>cl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  FILE <span class="token operator">*</span>f<span class="token punctuation">;</span>
  <span class="token keyword">float</span> len<span class="token punctuation">;</span>
  <span class="token keyword">long</span> <span class="token keyword">long</span> words<span class="token punctuation">,</span> size<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
  <span class="token keyword">char</span> vec_file_name<span class="token punctuation">[</span>max_size<span class="token punctuation">]</span><span class="token punctuation">,</span> output_file_name<span class="token punctuation">[</span>max_size<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">float</span> <span class="token operator">*</span>M<span class="token punctuation">;</span>
  <span class="token keyword">char</span> <span class="token operator">*</span>vocab<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Usage: ./KMeans vec_file output_file classes\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">strcpy</span><span class="token punctuation">(</span>vec_file_name<span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">strcpy</span><span class="token punctuation">(</span>output_file_name<span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> classes <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  f <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>vec_file_name<span class="token punctuation">,</span> <span class="token string">"rb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>f <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Input file not found\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">fscanf</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">"%lld"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">fscanf</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">"%lld"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  vocab <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>words <span class="token operator">*</span> max_w <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  M <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>words <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>M <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Cannot allocate memory: %lld MB    %lld  %lld\n"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>words <span class="token operator">*</span> size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1048576</span><span class="token punctuation">,</span> words<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> words<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vocab<span class="token punctuation">[</span>b <span class="token operator">*</span> max_w <span class="token operator">+</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">feof</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>vocab<span class="token punctuation">[</span>b <span class="token operator">*</span> max_w <span class="token operator">+</span> a<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">' '</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> max_w<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>vocab<span class="token punctuation">[</span>b <span class="token operator">*</span> max_w <span class="token operator">+</span> a<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">'\n'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> a<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    vocab<span class="token punctuation">[</span>b <span class="token operator">*</span> max_w <span class="token operator">+</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>a <span class="token operator">+</span> b <span class="token operator">*</span> size<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> len <span class="token operator">+=</span> M<span class="token punctuation">[</span>a <span class="token operator">+</span> b <span class="token operator">*</span> size<span class="token punctuation">]</span> <span class="token operator">*</span> M<span class="token punctuation">[</span>a <span class="token operator">+</span> b <span class="token operator">*</span> size<span class="token punctuation">]</span><span class="token punctuation">;</span>
    len <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> M<span class="token punctuation">[</span>a <span class="token operator">+</span> b <span class="token operator">*</span> size<span class="token punctuation">]</span> <span class="token operator">/=</span> len<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">fclose</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">KMeans</span><span class="token punctuation">(</span>vocab<span class="token punctuation">,</span> M<span class="token punctuation">,</span> words<span class="token punctuation">,</span> size<span class="token punctuation">,</span> classes<span class="token punctuation">,</span> output_file_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于编译KMeans.c文件的makefile文件如下，用<code v-pre>make</code>命令编译。</p>
<div class="language-makefile line-numbers-mode" data-ext="makefile"><pre v-pre class="language-makefile"><code>SCRIPTS_DIR<span class="token operator">=</span>../scripts
BIN_DIR<span class="token operator">=</span>../bin

CC <span class="token operator">=</span> gcc
<span class="token comment">#Using -Ofast instead of -O3 might result in faster code, but is supported only by newer GCC versions</span>
CFLAGS <span class="token operator">=</span> -lm -pthread -O3 -march<span class="token operator">=</span>native -Wall -funroll-loops -Wno-unused-result

<span class="token target symbol">all</span><span class="token punctuation">:</span> KMeans

<span class="token target symbol">KMeans</span> <span class="token punctuation">:</span> KMeans.c
    <span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> KMeans.c -o <span class="token variable">$</span><span class="token punctuation">{</span>BIN_DIR<span class="token punctuation">}</span>/KMeans <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span>
    chmod +x <span class="token variable">$</span><span class="token punctuation">{</span>SCRIPTS_DIR<span class="token punctuation">}</span>/*.sh

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    pushd <span class="token variable">$</span><span class="token punctuation">{</span>BIN_DIR<span class="token punctuation">}</span> &amp;&amp; rm -rf KMeans<span class="token punctuation">;</span> popd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在shell脚本中确定输入文件，输出文件，以及聚类的类别个数，下面的sh中指定了聚类类别为30。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">DATA_DIR</span><span class="token operator">=</span><span class="token punctuation">..</span>/data
<span class="token assign-left variable">BIN_DIR</span><span class="token operator">=</span><span class="token punctuation">..</span>/bin
<span class="token assign-left variable">SRC_DIR</span><span class="token operator">=</span><span class="token punctuation">..</span>/src

<span class="token assign-left variable">VECTOR_DATA</span><span class="token operator">=</span><span class="token variable">$DATA_DIR</span>/final_item_vec_v1.bin
<span class="token assign-left variable">OUTPUT_DATA</span><span class="token operator">=</span><span class="token variable">$DATA_DIR</span>/KMeans_v1.txt

<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>
<span class="token variable">$BIN_DIR</span>/KMeans <span class="token variable">$VECTOR_DATA</span> <span class="token variable">$OUTPUT_DATA</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行shell文件，则会输出聚类结果文件。至此聚类完成。经过测试，量级在5百万的数据，可在3分钟内聚类完成。</p>
<p>然后如果需要用sql查询做一些分析，就考虑将生成的文件传到hdfs中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>hadoop fs <span class="token parameter variable">-copyFromLocal</span> KMeans_v1.txt hdfs://nameservice/user/machine_learning/lu/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后导入sql</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> INPATH <span class="token string">'hdfs://nameservice/user/machine_learning/lu/tmp/'</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> machine_learning<span class="token punctuation">.</span>tp_embedding_cluster<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以做想做的分析了</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li>《统计学习方法第二版-李航》</li>
</ul>
<p>本文的理论部分摘抄自李航书的对应章节。</p>
<ul>
<li><a href="https://blog.csdn.net/zhoubl668/article/details/24320153" target="_blank" rel="noopener noreferrer">word2vec中k-means学习笔记<ExternalLinkIcon/></a></li>
</ul>
<p>“word2vec中的KMeans源码摘录”参考此文。</p>
</div></template>


