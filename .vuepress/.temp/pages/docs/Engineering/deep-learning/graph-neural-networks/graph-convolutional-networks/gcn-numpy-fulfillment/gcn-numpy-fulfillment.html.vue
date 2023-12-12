<template><div><h1 id="gcn图卷积网络的numpy简单实现" tabindex="-1"><a class="header-anchor" href="#gcn图卷积网络的numpy简单实现" aria-hidden="true">#</a> GCN图卷积网络的numpy简单实现</h1>
<ul>
<li><RouterLink to="/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/graph-convolutional-networks.html">返回上层目录</RouterLink></li>
<li><a href="#%E4%BD%95%E4%B8%BA%E5%9B%BE%E5%8D%B7%E7%A7%AF%E7%BD%91%E7%BB%9C">何为图卷积网络</a></li>
<li><a href="#%E4%BC%A0%E6%92%AD%E8%A7%84%E5%88%99%E7%9A%84%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B">传播规则的简单示例</a>
<ul>
<li><a href="#%E7%AE%80%E5%8C%96">简化</a></li>
</ul>
</li>
<li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E5%9B%BE%E7%A4%BA%E4%BE%8B">简单的图示例</a>
<ul>
<li><a href="#%E5%BA%94%E7%94%A8%E4%BC%A0%E6%92%AD%E8%A7%84%E5%88%99">应用传播规则</a></li>
<li><a href="#%E9%97%AE%E9%A2%98">问题</a>
<ul>
<li><a href="#%E5%A2%9E%E5%8A%A0%E8%87%AA%E7%8E%AF">增加自环</a></li>
<li><a href="#%E5%AF%B9%E7%89%B9%E5%BE%81%E8%A1%A8%E5%BE%81%E8%BF%9B%E8%A1%8C%E5%BD%92%E4%B8%80%E5%8C%96%E5%A4%84%E7%90%86">对特征表征进行归一化处理</a></li>
</ul>
</li>
<li><a href="#%E6%95%B4%E5%90%88">整合</a>
<ul>
<li><a href="#%E6%B7%BB%E5%8A%A0%E6%9D%83%E9%87%8D">添加权重</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E6%BF%80%E6%B4%BB%E5%87%BD%E6%95%B0">添加激活函数</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%9C%A8%E7%9C%9F%E5%AE%9E%E5%9C%BA%E6%99%AF%E4%B8%8B%E7%9A%84%E5%BA%94%E7%94%A8">在真实场景下的应用</a>
<ul>
<li>[构建 GCN](#构建 GCN)</li>
</ul>
</li>
<li><a href="#%E7%BB%93%E8%AF%AD">结语</a></li>
<li><a href="#%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81">完整代码</a></li>
</ul>
<blockquote>
<p>由于图结构非常复杂且信息量很大，因此对于图的机器学习是一项艰巨的任务。本文介绍了如何使用图卷积网络（GCN）对图进行深度学习，GCN是一种可直接作用于图并利用其结构信息的强大神经网络。</p>
<p>本文将介绍GCN，并使用代码示例说明信息是如何通过GCN的隐藏层传播的。读者将看到GCN如何聚合来自前一层的信息，以及这种机制如何生成图中节点的有用特征表征。</p>
</blockquote>
<h1 id="何为图卷积网络" tabindex="-1"><a class="header-anchor" href="#何为图卷积网络" aria-hidden="true">#</a> 何为图卷积网络</h1>
<p>GCN是一类非常强大的用于图数据的神经网络架构。事实上，它非常强大，即使是随机初始化的两层GCN也可以生成图网络中节点的有用特征表征。下图展示了这种两层GCN生成的每个节点的二维表征。请注意，即使没有经过任何训练，这些二维表征也能够保存图中节点的相对邻近性。</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/gcn.png" alt="gcn"></p>
<p>更形式化地说，图卷积网络（GCN）是一个对图数据进行操作的神经网络。给定图$G = (V, E)$，GCN的输入为：</p>
<ul>
<li>一个输入维度为$N \times F^0$的特征矩阵$X$，其中$N$是图网络中的节点数，$F^0$是每个节点的输入特征数。</li>
<li>一个图结构的维度为$N \times N$的矩阵表征，例如图G的邻接矩阵A。</li>
</ul>
<p>因此，GCN 中的隐藏层可以写作$H^i=f(H^{i-1}, A))$。其中，$H^0 = X$，$f$是一种传播规则。每一个隐藏层$H^i$都对应一个维度为$N \times F^i$的特征矩阵，该矩阵中的每一行都是某个节点的特征表征。在每一层中，GCN会使用传播规则f将这些信息聚合起来，从而形成下一层的特征。这样一来，在每个连续的层中特征就会变得越来越抽象。在该框架下，GCN的各种变体只不过是在传播规则f的选择上有所不同。</p>
<h1 id="传播规则的简单示例" tabindex="-1"><a class="header-anchor" href="#传播规则的简单示例" aria-hidden="true">#</a> 传播规则的简单示例</h1>
<p>下面，本文将给出一个最简单的传播规则示例：
$$
f(H^i,A)=\sigma(AH^iW^i)
$$
其中，$W^i$是第$i$层的权重矩阵，$\sigma$是非线性激活函数（如ReLU函数）。权重矩阵的维度为$F^i \times F^{i+1}$，即权重矩阵第二个维度的大小决定了下一层的特征数。如果你对卷积神经网络很熟悉，那么<strong>你会发现由于这些权重在图中的节点间共享，该操作与卷积核滤波操作类似</strong>。</p>
<h2 id="简化" tabindex="-1"><a class="header-anchor" href="#简化" aria-hidden="true">#</a> 简化</h2>
<p>接下来我们在最简单的层次上研究传播规则。令：</p>
<ul>
<li>$i = 1$，（约束条件$f$是作用于输入特征矩阵的函数）</li>
<li>$\sigma$为恒等函数</li>
<li>选择权重（约束条件： $AH^0W^0 =AXW^0 = AX$）</li>
</ul>
<p>换言之，$f(X, A) = AX$。该传播规则可能过于简单，本文后面会补充缺失的部分。此外，$AX$等价于多层感知机的输入层。</p>
<h1 id="简单的图示例" tabindex="-1"><a class="header-anchor" href="#简单的图示例" aria-hidden="true">#</a> 简单的图示例</h1>
<p>我们将使用下面的图作为简单的示例：</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/gcn-1.png" alt="gcn-1"></p>
<p><em>一个简单的有向图。</em></p>
<p>使用numpy编写的上述有向图的邻接矩阵表征如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 有向图的邻接矩阵表征</span>
A <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dtype<span class="token operator">=</span><span class="token builtin">float</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A = \n"</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[0. 1. 0. 0.]
 [0. 0. 1. 1.]
 [0. 1. 0. 0.]
 [1. 0. 1. 0.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们需要抽取出特征！我们基于每个节点的索引为其生成两个整数特征，这简化了本文后面手动验证矩阵运算的过程。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 两个整数特征</span>
X <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token operator">-</span>i<span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dtype<span class="token operator">=</span><span class="token builtin">float</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"X = \n"</span><span class="token punctuation">,</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 0.  0.]
 [ 1. -1.]
 [ 2. -2.]
 [ 3. -3.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用传播规则" tabindex="-1"><a class="header-anchor" href="#应用传播规则" aria-hidden="true">#</a> 应用传播规则</h2>
<p>我们现在已经建立了一个图，其邻接矩阵为$A$，输入特征的集合为$X$。下面让我们来看看，当我们对其应用传播规则后会发生什么：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A * X = \n"</span><span class="token punctuation">,</span> A <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 1. -1.]
 [ 5. -5.]
 [ 1. -1.]
 [ 2. -2.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个节点的表征（每一行）现在是其相邻节点特征的和！换句话说，图卷积层将每个节点表示为其相邻节点的聚合。大家可以自己动手验证这个计算过程。请注意，在这种情况下，如果存在从$v$到$n$的边，则节点$n$是节点$v$的邻居。</p>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<p>你可能已经发现了其中的问题：</p>
<ul>
<li>节点的聚合表征不包含它自己的特征！该表征是相邻节点的特征聚合，因此只有具有自环（self-loop）的节点才会在该聚合中包含自己的特征 [1]。</li>
<li>度大的节点在其特征表征中将具有较大的值，度小的节点将具有较小的值。这可能会导致梯度消失或梯度爆炸 [1, 2]，也会影响随机梯度下降算法（随机梯度下降算法通常被用于训练这类网络，且对每个输入特征的规模（或值的范围）都很敏感）。</li>
</ul>
<p>接下来，本文将分别对这些问题展开讨论。</p>
<h3 id="增加自环" tabindex="-1"><a class="header-anchor" href="#增加自环" aria-hidden="true">#</a> 增加自环</h3>
<p>为了解决第一个问题，我们可以直接为每个节点添加一个自环。具体而言，这可以通过在应用传播规则之前将邻接矩阵$A$与单位矩阵$I$相加来实现。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>I <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>eye<span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I = \n"</span><span class="token punctuation">,</span> I<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[1. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 1.]]
'''</span>
<span class="token comment"># 每个节点都是自己的邻居</span>
A_hat <span class="token operator">=</span> A <span class="token operator">+</span> I
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat = \n"</span><span class="token punctuation">,</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[1. 1. 0. 0.]
 [0. 1. 1. 1.]
 [0. 1. 1. 0.]
 [1. 0. 1. 1.]]
'''</span>
<span class="token comment"># 由于每个节点都是自己的邻居，每个节点在对相邻节点的特征求和过程中也会囊括自己的特征！</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat * X = \n"</span><span class="token punctuation">,</span> A_hat <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 1. -1.]
 [ 6. -6.]
 [ 3. -3.]
 [ 5. -5.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，由于每个节点都是自己的邻居，每个节点在对相邻节点的特征求和过程中也会囊括自己的特征！</p>
<h3 id="对特征表征进行归一化处理" tabindex="-1"><a class="header-anchor" href="#对特征表征进行归一化处理" aria-hidden="true">#</a> 对特征表征进行归一化处理</h3>
<p>通过将邻接矩阵$A$与度矩阵$D$的逆相乘，对其进行变换，从而通过节点的度对特征表征进行归一化。因此，我们简化后的传播规则如下：
$$
f(X, A)=D^{-1}AX
$$
让我们看看发生了什么。我们首先计算出节点的度矩阵。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 首先计算出节点的度矩阵，这里改成了出度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A = \n"</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span>
D <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">#D = np.array(np.sum(A, axis=0))[0]</span>
D <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D = \n"</span><span class="token punctuation">,</span> D<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1. 0. 0. 0.]
 [0. 2. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 2.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变换之前</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>A <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dtype<span class="token operator">=</span><span class="token builtin">float</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变换之后</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># A归一化后,邻接矩阵中每一行的权重（值）都除以该行对应节点的度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D⁻¹ * A = \n"</span><span class="token punctuation">,</span> D<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[0.  1.  0.  0. ]
 [0.  0.  0.5 0.5]
 [0.  1.  0.  0. ]
 [0.5 0.  0.5 0. ]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以观察到，邻接矩阵中每一行的权重（值）都除以该行对应节点的度。我们接下来对变换后的邻接矩阵应用传播规则：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 接下来对变换后的邻接矩阵应用传播规则</span>
<span class="token comment"># 得到与相邻节点的特征均值对应的节点表征。这是因为（变换后）邻接矩阵的权重对应于相邻节点特征加权和的权重</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D⁻¹ * A * X = \n"</span><span class="token punctuation">,</span> D<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 1.  -1. ]
 [ 2.5 -2.5]
 [ 1.  -1. ]
 [ 1.  -1. ]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到与相邻节点的特征均值对应的节点表征。这是因为（变换后）邻接矩阵的权重对应于相邻节点特征加权和的权重。大家可以自己动手验证这个结果。</p>
<h2 id="整合" tabindex="-1"><a class="header-anchor" href="#整合" aria-hidden="true">#</a> 整合</h2>
<p>现在，我们将把自环和归一化技巧结合起来。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 接下来得到D_hat, 是 A_hat = A + I 对应的度矩阵</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D_hat<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat = \n"</span><span class="token punctuation">,</span> D_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[2. 0. 0. 0.]
 [0. 3. 0. 0.]
 [0. 0. 2. 0.]
 [0. 0. 0. 3.]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们还将重新介绍之前为了简化讨论而省略的有关权重和激活函数的操作。</p>
<h3 id="添加权重" tabindex="-1"><a class="header-anchor" href="#添加权重" aria-hidden="true">#</a> 添加权重</h3>
<p>首先要做的是应用权重。请注意，这里的$\hat{D}$是$\hat{A} = A + I$对应的度矩阵，即具有强制自环的矩阵$A$的度矩阵。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 我们想要减小输出特征表征的维度，我们可以减小权重矩阵 W 的规模</span>
<span class="token comment"># 但是这里故意增大了</span>
W <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W = \n"</span><span class="token punctuation">,</span> W<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W = 
 [[ 1 -1  2]
 [-1  1 -2]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$\hat{D}^{-1} \cdot \hat{A} \cdot X\cdot W =$</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat = \n"</span><span class="token punctuation">,</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1. 1. 0. 0.]
 [0. 1. 1. 1.]
 [0. 1. 1. 0.]
 [1. 0. 1. 1.]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[0.5        0.5        0.         0.        ]
 [0.         0.33333333 0.33333333 0.33333333]
 [0.         0.5        0.5        0.        ]
 [0.33333333 0.         0.33333333 0.33333333]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat * X = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 0.5        -0.5       ]
 [ 2.         -2.        ]
 [ 1.5        -1.5       ]
 [ 1.66666667 -1.66666667]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat * X * W = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 1.         -1.          2.        ]
 [ 4.         -4.          8.        ]
 [ 3.         -3.          6.        ]
 [ 3.33333333 -3.33333333  6.66666667]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加激活函数" tabindex="-1"><a class="header-anchor" href="#添加激活函数" aria-hidden="true">#</a> 添加激活函数</h3>
<p>本文选择保持特征表征的维度，并应用ReLU激活函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 添加激活函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"relu(D_hat**-1 * A_hat * X * W) = \n"</span><span class="token punctuation">,</span> relu<span class="token punctuation">(</span>D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1.         0.         2.        ]
 [4.         0.         8.        ]
 [3.         0.         6.        ]
 [3.33333333 0.         6.66666667]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是一个带有邻接矩阵、输入特征、权重和激活函数的完整隐藏层！</p>
<p>我们一步步来看明白：
$$
\begin{aligned}
&amp;\hat{D}^{-1} \cdot \hat{A} \cdot X\cdot W\
=&amp;\hat{D}^{-1} \cdot (A + I) \cdot X\cdot W\
=&amp;\begin{bmatrix}
2&amp; 0&amp; 0&amp; 0\
0&amp; 3&amp; 0&amp; 0\
0&amp; 0&amp; 2&amp; 0\
0&amp; 0&amp; 0&amp; 3\
\end{bmatrix} ^{-1}
\cdot
\left(
\begin{bmatrix}
0&amp; 1&amp; 0&amp; 0\
0&amp; 0&amp; 1&amp; 1\
0&amp; 1&amp; 0&amp; 0\
1&amp; 0&amp; 1&amp; 0\
\end{bmatrix}
+I\right)
\cdot
\begin{bmatrix}
0&amp; 0\
1&amp; -1\
2&amp; -2\
3&amp; -3\
\end{bmatrix}
\cdot
\begin{bmatrix}
1&amp; -1&amp; 2\
-1&amp; 1&amp; -2\
\end{bmatrix}\
=&amp;\begin{bmatrix}
0.5&amp; 0&amp; 0&amp; 0\
0&amp; 0.33&amp; 0&amp; 0\
0&amp; 0&amp; 0.5&amp; 0\
0&amp; 0&amp; 0&amp; 0.33\
\end{bmatrix}
\cdot
\begin{bmatrix}
1&amp; 1&amp; 0&amp; 0\
0&amp; 1&amp; 1&amp; 1\
0&amp; 1&amp; 1&amp; 0\
1&amp; 0&amp; 1&amp; 1\
\end{bmatrix}
\cdot
\begin{bmatrix}
0&amp; 0\
1&amp; -1\
2&amp; -2\
3&amp; -3\
\end{bmatrix}
\cdot
\begin{bmatrix}
1&amp; -1&amp; 2\
-1&amp; 1&amp; -2\
\end{bmatrix}\
=&amp;\begin{bmatrix}
0.5&amp; 0.5&amp; 0&amp; 0\
0&amp; 0.33&amp; 0.33&amp; 0.33\
0&amp; 0.5&amp; 0.5&amp; 0\
0.33&amp; 0&amp; 0.33&amp; 0.33\
\end{bmatrix}
\cdot
\begin{bmatrix}
0&amp; 0\
1&amp; -1\
2&amp; -2\
3&amp; -3\
\end{bmatrix}
\cdot
\begin{bmatrix}
1&amp; -1&amp; 2\
-1&amp; 1&amp; -2\
\end{bmatrix}\
=&amp;\begin{bmatrix}
0.5&amp; 0.5\
2&amp; -2\
1.5&amp; -1.5\
1.66&amp; -1.66\
\end{bmatrix}
\cdot
\begin{bmatrix}
1&amp; -1&amp; 2\
-1&amp; 1&amp; -2\
\end{bmatrix}\
=&amp;\begin{bmatrix}
0&amp; 0&amp; 0\
4&amp; -4&amp; 8\
3&amp; -3&amp; 6\
3.32&amp; -3.32&amp; 6.64\
\end{bmatrix}\
&amp;\
&amp;\text{ReLU}\left(\hat{D}^{-1} \cdot \hat{A} \cdot X\cdot W\right)\
=&amp;\begin{bmatrix}
0&amp; 0&amp; 0\
4&amp; 0&amp; 8\
3&amp; 0&amp; 6\
3.32&amp; 0&amp; 6.64\
\end{bmatrix}\
\end{aligned}\
$$</p>
<h1 id="在真实场景下的应用" tabindex="-1"><a class="header-anchor" href="#在真实场景下的应用" aria-hidden="true">#</a> 在真实场景下的应用</h1>
<p>最后，我们将图卷积网络应用到一个真实的图上。本文将向读者展示如何生成上文提到的特征表征。</p>
<p><strong>Zachary 空手道俱乐部</strong></p>
<p>Zachary 空手道俱乐部是一个被广泛使用的社交网络，其中的节点代表空手道俱乐部的成员，边代表成员之间的相互关系。当年，Zachary 在研究空手道俱乐部的时候，管理员和教员发生了冲突，导致俱乐部一分为二。下图显示了该网络的图表征，其中的节点标注是根据节点属于俱乐部的哪个部分而得到的，A和I分别表示属于管理员和教员阵营的节点。</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary.png" alt="Zachary"></p>
<p><em>Zachary 空手道俱乐部图网络</em></p>
<h2 id="构建-gcn" tabindex="-1"><a class="header-anchor" href="#构建-gcn" aria-hidden="true">#</a> 构建 GCN</h2>
<p>接下来，我们将构建一个图卷积网络。<strong>我们并不会真正训练该网络，但是会对其进行简单的随机初始化，从而生成我们在本文开头看到的特征表征</strong>。</p>
<p>我们将使用networkx，它有一个可以很容易实现的Zachary空手道俱乐部的图表征。</p>
<p>该俱乐部有34个人，对应34个节点。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> networkx <span class="token keyword">as</span> nx
<span class="token keyword">from</span> networkx <span class="token keyword">import</span> to_numpy_matrix

zkc <span class="token operator">=</span> nx<span class="token punctuation">.</span>karate_club_graph<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>zkc<span class="token punctuation">)</span>  <span class="token comment"># Zachary's Karate Club</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>zkc<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class 'networkx.classes.graph.Graph'></span>

<span class="token keyword">print</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,</span>
<span class="token comment">#  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;class 'networkx.classes.reportviews.NodeView'></span>

order <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,</span>
<span class="token comment">#  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们将计算$\hat{A},\ \hat{B}$矩阵。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>A <span class="token operator">=</span> to_numpy_matrix<span class="token punctuation">(</span>zkc<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>order<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[0. 1. 1. ... 1. 0. 0.]
 [1. 0. 1. ... 0. 0. 0.]
 [1. 1. 0. ... 0. 1. 0.]
 ...
 [1. 0. 0. ... 0. 1. 1.]
 [0. 0. 1. ... 1. 0. 1.]
 [0. 0. 0. ... 1. 1. 0.]]
'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 34 34</span>

I <span class="token operator">=</span> np<span class="token punctuation">.</span>eye<span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>number_of_nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 34 x 34</span>
A_hat <span class="token operator">=</span> A <span class="token operator">+</span> I

D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D_hat<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们将随机初始化权重。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>W_1 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span>
    loc<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> scale<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>number_of_nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W_1 = \n"</span><span class="token punctuation">,</span> W_1<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W_1 = 
 [[ 6.42144245e-01 -2.83590736e-01 -8.75764693e-01  4.17843912e-01]
 [-6.60605015e-01 -4.72658496e-01  1.10796818e+00 -1.64596954e+00]
 ...
 [-4.34570333e-01 -1.17468794e+00  3.94254896e-01  2.24888554e-01]]
'''</span>
W_2 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span>
    loc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span>W_1<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W_2 = \n"</span><span class="token punctuation">,</span> W_2<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W_2 = 
 [[-0.41063717  0.61026865]
 [-0.20577127 -1.79543329]
 [ 1.1148323   0.34126572]]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，我们会堆叠GCN层。这里，我们只使用单位矩阵作为特征表征，即每个节点被表示为一个one-hot编码的类别变量。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">relu</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#return np.maximum(x, 0)</span>
    <span class="token comment">#试试sigmoid啥情况</span>
    s <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> s

<span class="token keyword">def</span> <span class="token function">gcn_layer</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> X<span class="token punctuation">,</span> W<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> relu<span class="token punctuation">(</span>D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span>

H_1 <span class="token operator">=</span> gcn_layer<span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> I<span class="token punctuation">,</span> W_1<span class="token punctuation">)</span>

H_2 <span class="token operator">=</span> gcn_layer<span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> H_1<span class="token punctuation">,</span> W_2<span class="token punctuation">)</span>

output <span class="token operator">=</span> H_2

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"output = \n"</span><span class="token punctuation">,</span> output<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
output = 
 [[0.30333074 0.38689069]
 [0.34164209 0.3803171 ]
 ...
 [0.29526046 0.35807214]]
'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> output<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 34 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们进一步抽取出特征表征。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>feature_representations <span class="token operator">=</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">:</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>node<span class="token punctuation">]</span>
    <span class="token keyword">for</span> node <span class="token keyword">in</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们开始画图：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 绘画</span>
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment"># 原本的关系图</span>
<span class="token keyword">def</span> <span class="token function">plot_graph</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> weight_name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''
    G: a networkx G
    weight_name: name of the attribute for plotting edge weights (if G is weighted)
    '''</span>
    <span class="token comment">#% matplotlib</span>
    <span class="token comment">#notebook</span>
    <span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pos <span class="token operator">=</span> nx<span class="token punctuation">.</span>spring_layout<span class="token punctuation">(</span>G<span class="token punctuation">)</span>
    edges <span class="token operator">=</span> G<span class="token punctuation">.</span>edges<span class="token punctuation">(</span><span class="token punctuation">)</span>
    weights <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">if</span> weight_name<span class="token punctuation">:</span>
        weights <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">(</span>G<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">[</span>weight_name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">for</span> u<span class="token punctuation">,</span> v <span class="token keyword">in</span> edges<span class="token punctuation">]</span>
        labels <span class="token operator">=</span> nx<span class="token punctuation">.</span>get_edge_attributes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> weight_name<span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_edge_labels<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edge_labels<span class="token operator">=</span>labels<span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edges<span class="token operator">=</span>edges<span class="token punctuation">,</span> width<span class="token operator">=</span>weights<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        nodelist1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        nodelist2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'club'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Mr. Hi'</span><span class="token punctuation">:</span>
                nodelist1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                nodelist2<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token comment"># nx.draw_networkx(G, pos, edges=edges);</span>
        nx<span class="token punctuation">.</span>draw_networkx_nodes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>nodelist1<span class="token punctuation">,</span> node_size<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">'r'</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_nodes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>nodelist2<span class="token punctuation">,</span> node_size<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">'b'</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_edges<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edgelist<span class="token operator">=</span>edges<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>


plot_graph<span class="token punctuation">(</span>zkc<span class="token punctuation">)</span>

<span class="token comment"># 隐层参数的图</span>
plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span> <span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'club'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Mr. Hi'</span><span class="token punctuation">:</span>
        plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">,</span>color <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">,</span>alpha<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">,</span>color <span class="token operator">=</span> <span class="token string">'r'</span><span class="token punctuation">,</span>alpha<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>


H <span class="token operator">=</span> nx<span class="token punctuation">.</span>Graph<span class="token punctuation">(</span><span class="token punctuation">)</span>

node_num <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">)</span>

nodes <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 34 nodes</span>

<span class="token comment"># add edges</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    src <span class="token operator">=</span> i
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">!=</span> j<span class="token punctuation">:</span>
            dest <span class="token operator">=</span> j
            H<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span>src<span class="token punctuation">,</span> dest<span class="token punctuation">)</span>

nx<span class="token punctuation">.</span>draw_networkx_edges<span class="token punctuation">(</span>H<span class="token punctuation">,</span> feature_representations<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本的关系图：</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary-1.png" alt="Zachary-1">隐层的参数如下所示，你看，这样的特征表征可以很好地将 Zachary 空手道俱乐部的两个社区划分开来。至此，我们甚至都没有开始训练模型！</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary-2.png" alt="Zachary-2"></p>
<p>重复不同的次数就能得到不同的图。</p>
<p>我们应该注意到，在该示例中由于 ReLU 函数的作用，在 x 轴或 y 轴上随机初始化的权重很可能为 0，因此需要反复进行几次随机初始化才能生成上面的图。</p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary-3.png" alt="Zachary-3"></p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary-4.png" alt="Zachary-4"></p>
<p><img src="@source/docs/Engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/pic/Zachary-5.png" alt="Zachary-5"></p>
<h1 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h1>
<p>本文中对图卷积网络进行了高屋建瓴的介绍，并说明了GCN中每一层节点的特征表征是如何基于其相邻节点的聚合构建的。读者可以从中了解到如何使用numpy构建这些网络，以及它们的强大：<strong>即使是随机初始化的GCN也可以将Zachary空手道俱乐部网络中的社区分离开来</strong>。</p>
<h1 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h1>
<p>上文的完整代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np


<span class="token keyword">def</span> <span class="token function">relu</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#return np.maximum(x, 0)</span>
    s <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> s


<span class="token comment"># 有向图的邻接矩阵表征</span>
A <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dtype<span class="token operator">=</span><span class="token builtin">float</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A = \n"</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[0. 1. 0. 0.]
 [0. 0. 1. 1.]
 [0. 1. 0. 0.]
 [1. 0. 1. 0.]]
'''</span>
<span class="token comment"># 两个整数特征</span>
X <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token operator">-</span>i<span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dtype<span class="token operator">=</span><span class="token builtin">float</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"X = \n"</span><span class="token punctuation">,</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 0.  0.]
 [ 1. -1.]
 [ 2. -2.]
 [ 3. -3.]]
'''</span>
<span class="token comment"># 应用传播规则 A*X</span>
<span class="token comment"># 每个节点的表征（每一行）现在是其相邻节点特征的和！</span>
<span class="token comment"># 换句话说，图卷积层将每个节点表示为其相邻节点的聚合。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A * X = \n"</span><span class="token punctuation">,</span> A <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 1. -1.]
 [ 5. -5.]
 [ 1. -1.]
 [ 2. -2.]]
'''</span>

<span class="token comment"># 上面存在的问题：</span>
<span class="token comment"># 1、节点的聚合表征不包含它自己的特征！</span>
<span class="token comment"># 2、度大的节点在其特征表征中将具有较大的值，度小的节点将具有较小的值。</span>
<span class="token comment">#    这可能会导致梯度消失或梯度爆炸</span>
I <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>eye<span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I = \n"</span><span class="token punctuation">,</span> I<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[1. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 1.]]
'''</span>
<span class="token comment"># 每个节点都是自己的邻居</span>
A_hat <span class="token operator">=</span> A <span class="token operator">+</span> I
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat = \n"</span><span class="token punctuation">,</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[1. 1. 0. 0.]
 [0. 1. 1. 1.]
 [0. 1. 1. 0.]
 [1. 0. 1. 1.]]
'''</span>
<span class="token comment"># 由于每个节点都是自己的邻居，每个节点在对相邻节点的特征求和过程中也会囊括自己的特征！</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat * X = \n"</span><span class="token punctuation">,</span> A_hat <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[ 1. -1.]
 [ 6. -6.]
 [ 3. -3.]
 [ 5. -5.]]
'''</span>
<span class="token comment"># 为了防止某些度很大的节点的特征值很大，对特征表征进行归一化处理</span>
<span class="token comment"># 通过将邻接矩阵 A 与度矩阵 D 的逆相乘，对其进行变换，从而通过节点的度对特征表征进行归一化</span>
<span class="token comment"># f(X, A) = D⁻¹AX</span>

<span class="token comment"># 首先计算出节点的度矩阵，这里改成了出度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A = \n"</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span>
D <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">#D = np.array(np.sum(A, axis=0))[0]</span>
D <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D = \n"</span><span class="token punctuation">,</span> D<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1. 0. 0. 0.]
 [0. 2. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 2.]]
'''</span>

<span class="token comment"># A归一化后,邻接矩阵中每一行的权重（值）都除以该行对应节点的度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D⁻¹ * A = \n"</span><span class="token punctuation">,</span> D<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[0.  1.  0.  0. ]
 [0.  0.  0.5 0.5]
 [0.  1.  0.  0. ]
 [0.5 0.  0.5 0. ]]
'''</span>

<span class="token comment"># 接下来对变换后的邻接矩阵应用传播规则</span>
<span class="token comment"># 得到与相邻节点的特征均值对应的节点表征。这是因为（变换后）邻接矩阵的权重对应于相邻节点特征加权和的权重</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D⁻¹ * A * X = \n"</span><span class="token punctuation">,</span> D<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 1.  -1. ]
 [ 2.5 -2.5]
 [ 1.  -1. ]
 [ 1.  -1. ]]
'''</span>

<span class="token comment"># 接下来得到D_hat, 是 A_hat = A + I 对应的度矩阵</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D_hat<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat = \n"</span><span class="token punctuation">,</span> D_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[2. 0. 0. 0.]
 [0. 3. 0. 0.]
 [0. 0. 2. 0.]
 [0. 0. 0. 3.]]
'''</span>


<span class="token comment"># ================= 整合 ===============</span>

<span class="token comment"># 现在，我们将把自环和归一化技巧结合起来。</span>
<span class="token comment"># 此外，我们还将重新介绍之前为了简化讨论而省略的有关权重和激活函数的操作。</span>

<span class="token comment"># 添加权重</span>
<span class="token comment"># 我们想要减小输出特征表征的维度，我们可以减小权重矩阵 W 的规模</span>
<span class="token comment"># 但是这里故意增大了</span>
W <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W = \n"</span><span class="token punctuation">,</span> W<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W = 
 [[ 1 -1  2]
 [-1  1 -2]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A_hat = \n"</span><span class="token punctuation">,</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1. 1. 0. 0.]
 [0. 1. 1. 1.]
 [0. 1. 1. 0.]
 [1. 0. 1. 1.]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[0.5        0.5        0.         0.        ]
 [0.         0.33333333 0.33333333 0.33333333]
 [0.         0.5        0.5        0.        ]
 [0.33333333 0.         0.33333333 0.33333333]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat * X = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 0.5        -0.5       ]
 [ 2.         -2.        ]
 [ 1.5        -1.5       ]
 [ 1.66666667 -1.66666667]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"D_hat**-1 * A_hat * X * W = \n"</span><span class="token punctuation">,</span> D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[ 1.         -1.          2.        ]
 [ 4.         -4.          8.        ]
 [ 3.         -3.          6.        ]
 [ 3.33333333 -3.33333333  6.66666667]]
'''</span>

<span class="token comment"># 添加激活函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"relu(D_hat**-1 * A_hat * X * W) = \n"</span><span class="token punctuation">,</span> relu<span class="token punctuation">(</span>D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
 [[1.         0.         2.        ]
 [4.         0.         8.        ]
 [3.         0.         6.        ]
 [3.33333333 0.         6.66666667]]

'''</span>


<span class="token comment"># ============ 我们将图卷积网络应用到一个真实的图上 ============</span>

<span class="token keyword">import</span> networkx <span class="token keyword">as</span> nx
<span class="token keyword">from</span> networkx <span class="token keyword">import</span> to_numpy_matrix

zkc <span class="token operator">=</span> nx<span class="token punctuation">.</span>karate_club_graph<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>zkc<span class="token punctuation">)</span>  <span class="token comment"># Zachary's Karate Club</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>zkc<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class 'networkx.classes.graph.Graph'></span>

<span class="token keyword">print</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,</span>
<span class="token comment">#  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;class 'networkx.classes.reportviews.NodeView'></span>

order <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,</span>
<span class="token comment">#  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]</span>

A <span class="token operator">=</span> to_numpy_matrix<span class="token punctuation">(</span>zkc<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>order<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
[[0. 1. 1. ... 1. 0. 0.]
 [1. 0. 1. ... 0. 0. 0.]
 [1. 1. 0. ... 0. 1. 0.]
 ...
 [1. 0. 0. ... 0. 1. 1.]
 [0. 0. 1. ... 1. 0. 1.]
 [0. 0. 0. ... 1. 1. 0.]]
'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 34 34</span>

I <span class="token operator">=</span> np<span class="token punctuation">.</span>eye<span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>number_of_nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 34 x 34</span>
A_hat <span class="token operator">=</span> A <span class="token operator">+</span> I

D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
D_hat <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span>np<span class="token punctuation">.</span>diag<span class="token punctuation">(</span>D_hat<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 接下来，我们将随机初始化权重。</span>
W_1 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span>
    loc<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> scale<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span>zkc<span class="token punctuation">.</span>number_of_nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W_1 = 
 [[ 6.42144245e-01 -2.83590736e-01 -8.75764693e-01  4.17843912e-01]
 [-6.60605015e-01 -4.72658496e-01  1.10796818e+00 -1.64596954e+00]
 ...
 [-4.34570333e-01 -1.17468794e+00  3.94254896e-01  2.24888554e-01]]
'''</span>
W_2 <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span>
    loc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span>W_1<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
W_2 = 
 [[-0.41063717  0.61026865]
 [-0.20577127 -1.79543329]
 [ 1.1148323   0.34126572]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W_1 = \n"</span><span class="token punctuation">,</span> W_1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"W_2 = \n"</span><span class="token punctuation">,</span> W_2<span class="token punctuation">)</span>

<span class="token comment"># 接着，我们会堆叠 GCN 层。</span>
<span class="token comment"># 这里，我们只使用单位矩阵作为特征表征，</span>
<span class="token comment"># 即每个节点被表示为一个 one-hot 编码的类别变量。</span>


<span class="token keyword">def</span> <span class="token function">gcn_layer</span><span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> X<span class="token punctuation">,</span> W<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> relu<span class="token punctuation">(</span>D_hat<span class="token operator">**</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> A_hat <span class="token operator">*</span> X <span class="token operator">*</span> W<span class="token punctuation">)</span>


H_1 <span class="token operator">=</span> gcn_layer<span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> I<span class="token punctuation">,</span> W_1<span class="token punctuation">)</span>

H_2 <span class="token operator">=</span> gcn_layer<span class="token punctuation">(</span>A_hat<span class="token punctuation">,</span> D_hat<span class="token punctuation">,</span> H_1<span class="token punctuation">,</span> W_2<span class="token punctuation">)</span>

output <span class="token operator">=</span> H_2
<span class="token triple-quoted-string string">'''
output = 
 [[0.30333074 0.38689069]
 [0.34164209 0.3803171 ]
 ...
 [0.29526046 0.35807214]]
'''</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"output = \n"</span><span class="token punctuation">,</span> output<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> output<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


feature_representations <span class="token operator">=</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">:</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>node<span class="token punctuation">]</span>
    <span class="token keyword">for</span> node <span class="token keyword">in</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"len = "</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 绘画</span>
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment"># 原本的关系图</span>
<span class="token keyword">def</span> <span class="token function">plot_graph</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> weight_name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''
    G: a networkx G
    weight_name: name of the attribute for plotting edge weights (if G is weighted)
    '''</span>
    <span class="token comment">#% matplotlib</span>
    <span class="token comment">#notebook</span>
    <span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pos <span class="token operator">=</span> nx<span class="token punctuation">.</span>spring_layout<span class="token punctuation">(</span>G<span class="token punctuation">)</span>
    edges <span class="token operator">=</span> G<span class="token punctuation">.</span>edges<span class="token punctuation">(</span><span class="token punctuation">)</span>
    weights <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">if</span> weight_name<span class="token punctuation">:</span>
        weights <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">(</span>G<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">[</span>weight_name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">for</span> u<span class="token punctuation">,</span> v <span class="token keyword">in</span> edges<span class="token punctuation">]</span>
        labels <span class="token operator">=</span> nx<span class="token punctuation">.</span>get_edge_attributes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> weight_name<span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_edge_labels<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edge_labels<span class="token operator">=</span>labels<span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edges<span class="token operator">=</span>edges<span class="token punctuation">,</span> width<span class="token operator">=</span>weights<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        nodelist1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        nodelist2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'club'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Mr. Hi'</span><span class="token punctuation">:</span>
                nodelist1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                nodelist2<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token comment"># nx.draw_networkx(G, pos, edges=edges);</span>
        nx<span class="token punctuation">.</span>draw_networkx_nodes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>nodelist1<span class="token punctuation">,</span> node_size<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">'r'</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_nodes<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> nodelist<span class="token operator">=</span>nodelist2<span class="token punctuation">,</span> node_size<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">,</span> node_color<span class="token operator">=</span><span class="token string">'b'</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>
        nx<span class="token punctuation">.</span>draw_networkx_edges<span class="token punctuation">(</span>G<span class="token punctuation">,</span> pos<span class="token punctuation">,</span> edgelist<span class="token operator">=</span>edges<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.4</span><span class="token punctuation">)</span>


plot_graph<span class="token punctuation">(</span>zkc<span class="token punctuation">)</span>

<span class="token comment"># 隐层参数的图</span>
plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span> <span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> zkc<span class="token punctuation">.</span>nodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'club'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Mr. Hi'</span><span class="token punctuation">:</span>
        plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">,</span>color <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">,</span>alpha<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">,</span>color <span class="token operator">=</span> <span class="token string">'r'</span><span class="token punctuation">,</span>alpha<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">)</span>


H <span class="token operator">=</span> nx<span class="token punctuation">.</span>Graph<span class="token punctuation">(</span><span class="token punctuation">)</span>

node_num <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>feature_representations<span class="token punctuation">)</span>

nodes <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 34 nodes</span>

<span class="token comment"># add edges</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    src <span class="token operator">=</span> i
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>node_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> A<span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">!=</span> j<span class="token punctuation">:</span>
            dest <span class="token operator">=</span> j
            H<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span>src<span class="token punctuation">,</span> dest<span class="token punctuation">)</span>

nx<span class="token punctuation">.</span>draw_networkx_edges<span class="token punctuation">(</span>H<span class="token punctuation">,</span> feature_representations<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://mp.weixin.qq.com/s/sg9O761F0KHAmCPOfMW_kQ" target="_blank" rel="noopener noreferrer">图卷积网络到底怎么做，这是一份极简的Numpy实现<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考此文章。</p>
<ul>
<li><a href="https://towardsdatascience.com/how-to-do-deep-learning-on-graphs-with-graph-convolutional-networks-7d2250723780" target="_blank" rel="noopener noreferrer">How to do Deep Learning on Graphs with Graph Convolutional Networks<ExternalLinkIcon/></a></li>
</ul>
<p>这是本文参考文章的英文版。</p>
<ul>
<li><a href="https://blog.csdn.net/qq_36793545/article/details/84844867" target="_blank" rel="noopener noreferrer">Graph Convolutional Network介绍及简单实现(一)<ExternalLinkIcon/></a></li>
</ul>
<p>本文的绘图主要参考此博客。</p>
<ul>
<li><a href="https://stackoverflow.com/questions/40941264/how-to-draw-a-small-graph-with-community-structure-in-networkx" target="_blank" rel="noopener noreferrer">How to draw a small graph with community structure in networkx<ExternalLinkIcon/></a></li>
</ul>
<p>本文的绘图中的连线部分参考此回答。</p>
</div></template>


