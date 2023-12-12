<template><div><h1 id="基于图卷积网络的半监督学习" tabindex="-1"><a class="header-anchor" href="#基于图卷积网络的半监督学习" aria-hidden="true">#</a> 基于图卷积网络的半监督学习</h1>
<ul>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/graph-convolutional-networks.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%A6%82%E6%8B%AC">概括</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E5%9B%BE%E7%9A%84%E5%8D%8A%E7%9B%91%E7%9D%A3%E5%AD%A6%E4%B9%A0">基于图的半监督学习</a></li>
<li><a href="#%E8%B0%B1%E5%9B%BE%E5%8D%B7%E7%A7%AF%E7%AE%80%E4%BB%8B">谱图卷积简介</a>
<ul>
<li><a href="#%E8%B0%B1%E5%9B%BE%E5%8D%B7%E7%A7%AF">谱图卷积</a></li>
<li><a href="#%E5%88%87%E6%AF%94%E9%9B%AA%E5%A4%AB%E8%BF%91%E4%BC%BC%E8%B0%B1%E5%8D%B7%E7%A7%AF">切比雪夫近似谱卷积</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E5%88%87%E6%AF%94%E9%9B%AA%E5%A4%AB%E8%BF%91%E4%BC%BC%E7%9A%84GCN">基于切比雪夫近似的GCN</a></li>
</ul>
</li>
<li><a href="#%E6%9C%AC%E6%96%87%E5%B7%A5%E4%BD%9C">本文工作</a>
<ul>
<li><a href="#Layer-wise%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B">Layer-wise线性模型</a></li>
<li><a href="#%E5%8D%B7%E7%A7%AF%E5%B1%82">卷积层</a></li>
<li><a href="#%E5%88%86%E5%B1%82%E4%BC%A0%E6%92%AD">分层传播</a></li>
<li><a href="#%E5%8D%8A%E7%9B%91%E7%9D%A3GCN%E6%A1%86%E6%9E%B6">半监督GCN框架</a></li>
<li><a href="#%E4%B8%A4%E5%B1%82GCN%E4%BE%8B%E5%AD%90">两层GCN例子</a></li>
</ul>
</li>
<li><a href="#%E6%95%88%E6%9E%9C">效果</a></li>
<li><a href="#%E8%AE%A8%E8%AE%BA">讨论</a>
<ul>
<li><a href="#%E5%8D%8A%E7%9B%91%E7%9D%A3%E6%A8%A1%E6%A8%A1%E5%9E%8B">半监督模模型</a></li>
<li><a href="#%E9%99%90%E5%88%B6%E5%8F%8A%E6%9C%AA%E6%9D%A5%E5%B7%A5%E4%BD%9C">限制及未来工作</a></li>
</ul>
</li>
</ul>
<p><img src="@source/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/pic/semi-gcn-paper-title.png" alt="semi-gcn-paper-title"></p>
<blockquote>
<p>论文：Semi-Supervised Classification with Graph Convolutional Networks
作者：Thomas N. Kipf, Max Welling
来源：ICLR 2017</p>
</blockquote>
<p>PDF: <a href="https://openreview.net/pdf?id=SJU4ayYgl" target="_blank" rel="noopener noreferrer"><em>SEMI-SUPERVISED CLASSIFICATION WITH GRAPH CONVOLUTIONAL NETWORKS</em><ExternalLinkIcon/></a></p>
<p>PyTorch源码：<a href="https://github.com/tkipf/pygcn" target="_blank" rel="noopener noreferrer">Graph Convolutional Networks in PyTorch<ExternalLinkIcon/></a></p>
<h1 id="概括" tabindex="-1"><a class="header-anchor" href="#概括" aria-hidden="true">#</a> 概括</h1>
<p>semi-GCN是一篇经典的GCN论文，作者提出了一种简单且有效GCN框架，使用切比雪夫一阶展开近似谱卷积，使每一个卷积层仅处理一阶邻域信息，然后通过分层传播规则叠加一个个卷积层达到多阶邻域信息传播。</p>
<h1 id="基于图的半监督学习" tabindex="-1"><a class="header-anchor" href="#基于图的半监督学习" aria-hidden="true">#</a> 基于图的半监督学习</h1>
<p>图结构反映了节点之间的相似性，大量未标记的样本（节点）加入到模型训练中有助于提升分类效果，故基于图的半监督学习是一件很自然且重要的事情。</p>
<p><strong>传统方法是</strong>假设“相连节点应该相似，具有相同标签”，将基于图的正则项$L_{reg}$显示加入到损失函数中进行学习：
$$
\begin{aligned}
\mathcal{L}&amp;=\mathcal{L}<em>0+\lambda\mathcal{L}</em>{reg}\
\text{with}\quad\mathcal{L}<em>{reg}&amp;=\sum</em>{i,j}A_{ij}||f(X_i)-f(X_j)||^2=f(X)^T\Delta f(X)
\end{aligned}
$$
这个假设太严格了，极大限制模型能力，因为节点相连不一定都是相似，但会包含附加信息。</p>
<h1 id="谱图卷积简介" tabindex="-1"><a class="header-anchor" href="#谱图卷积简介" aria-hidden="true">#</a> 谱图卷积简介</h1>
<p>GCN主流有两大类方法：</p>
<ol>
<li>**基于空间的方法(spatial domain)😗*将图数据规则化，这样就可以直接用CNN来处理了</li>
<li>**基于谱方法(spectral domain)😗*利用谱图理论（spectral graph theory）直接处理图数据，本文是该类方法的代表作，简短介绍下相关的工作。</li>
</ol>
<h2 id="谱图卷积" tabindex="-1"><a class="header-anchor" href="#谱图卷积" aria-hidden="true">#</a> 谱图卷积</h2>
<p><strong>谱方法的理论基础，直接对图结构数据及节点特征进行卷积操作</strong></p>
<p>定义为信号(特征)$x$与卷积核$g_{\theta}$在傅立叶域上的乘积:
$$
g_{\theta}x=Ug_{\theta}U^TX
$$
但上述卷积计算复杂度比较大： 特征向量矩阵U相乘计算复杂度为$O(|N^2|)$ ，以及图的拉普拉斯矩阵分解开销。</p>
<h2 id="切比雪夫近似谱卷积" tabindex="-1"><a class="header-anchor" href="#切比雪夫近似谱卷积" aria-hidden="true">#</a> 切比雪夫近似谱卷积</h2>
<p>为了缓解计算问题，Hammond在2011年论文<a href="https://hal.inria.fr/inria-00541855/document" target="_blank" rel="noopener noreferrer"><em>Wavelets on graphs via spectral graph theory - HAL-Inria</em><ExternalLinkIcon/></a>提出可以用切比雪夫多项式展开近似卷积核$g_{\theta}$（<strong>类似泰勒展开</strong>）：
$$
g_{\theta}*x\approx \sum_{k=0}^K\theta_k'T_k(\tilde{L})x
$$</p>
<ul>
<li>使用切比雪夫是因为是递归性质，计算复杂度低</li>
<li>上述多项式取前K项，即表示对k跳内邻居及特征进行卷积计算，即<strong>谱图卷积不再依赖于整个图，而只是依赖于距离中心节点K步之内的节点（即K阶邻居）</strong></li>
</ul>
<h2 id="基于切比雪夫近似的gcn" tabindex="-1"><a class="header-anchor" href="#基于切比雪夫近似的gcn" aria-hidden="true">#</a> 基于切比雪夫近似的GCN</h2>
<p>2016年Defferrard在<a href="https://arxiv.org/pdf/1606.09375.pdf" target="_blank" rel="noopener noreferrer"><em>Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering</em><ExternalLinkIcon/></a>将上述切比雪夫近似的卷积核应用到CNN中，端到端处理图数据。</p>
<h1 id="本文工作" tabindex="-1"><a class="header-anchor" href="#本文工作" aria-hidden="true">#</a> 本文工作</h1>
<p>本文对Defferrard的工作进一步简化，每一个卷积层仅处理一阶邻居特征，通过分层传播规则叠加一个个卷积层达到多阶邻居特征传播。</p>
<h2 id="layer-wise线性模型" tabindex="-1"><a class="header-anchor" href="#layer-wise线性模型" aria-hidden="true">#</a> Layer-wise线性模型</h2>
<p>近似的谱图卷积虽然可以建立起K阶邻居的依赖，然而，却仍然需要在$\tilde{L}$上进行K阶运算。在实际过程中，这一运算的代价也是非常大的。为了降低运算代价，本文进一步简化了该运算，即限定$K=1$。此时，谱图卷积可以近似为$\tilde{L}$（或$L$）的线性函数。</p>
<p>当然，这样做的代价是，只能建立起一阶邻居的依赖。对于这一问题，可以通过堆积多层图卷积网络建立K阶邻居的依赖，而且，这样做的另一个优势是，在建立$K&gt;1$阶邻居的依赖时，不需要受到切比雪夫多项式的限制。</p>
<p>为了进一步简化运算，在GCN的线性模型中，本文定义$\lambda_{max}\approx 2$。此时，我们可以得到图谱卷积的一阶线性近似：
$$
\begin{aligned}
&amp;g_{\theta'}*x\approx\theta_0'x+\theta_1'\left(L-I_N\right)x=\theta_0'x-\theta_1'D^{-\frac{1}{2}}AD^{-\frac{1}{2}}x\
\Rightarrow&amp;\theta\left(I_N-D^{-\frac{1}{2}}AD^{-\frac{1}{2}}\right)x
\end{aligned}
$$
可以看到，该式中仅有两个参数$\theta^{'}_0$与$\theta^{'}_1$。若需建立k阶邻居上的依赖，可以通过设置k层这样的滤波器来实现。</p>
<p>在实际的过程中，可以通过对参数进行约束来避免过拟合，并进一步简化运算复杂度。例如，可以令
$$
\theta=\theta_0'=-\theta_1'
$$
，从而得到
$$
g_{\theta}*x\approx\theta\left(I_N+D^{-\frac{1}{2}}AD^{-\frac{1}{2}}\right)x
$$
需要注意的是，
$$
I_N+D^{-\frac{1}{2}}AD^{-\frac{1}{2}}
$$
的特征值范围为$[0,2]$，这意味着，当不停地重复该操作时（网络非常深时），可能会引起梯度爆炸或梯度消失。为了减弱这一问题，本文提出了一种renormalization trick：
$$
I_N+D^{-\frac{1}{2}}AD^{-\frac{1}{2}}\Rightarrow\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}
$$
其中，
$$
\tilde{A}=A+I_N,\quad \tilde{D}<em>{ii}=\sum_j\tilde{A}</em>{ij}
$$
当图中每个节点的表示不是单独的标量而是一个大小为$C$的向量时，可以使用其变体进行处理：
$$
Z=\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}X\Theta
$$
其中，$\Theta\in\mathbb{R}^{C\times F}$表示参数矩阵，$Z\in\mathbb{R}^{N\times F}$为相应的卷积结果。此时，每个节点的节点表示被更新成了一个新的F维向量，该$F$维向量包含了相应的一阶邻居上的信息。</p>
<h2 id="卷积层" tabindex="-1"><a class="header-anchor" href="#卷积层" aria-hidden="true">#</a> 卷积层</h2>
<p>使用切比雪夫一阶展开（$K=1$，线性）的卷积核，外套一个非线性单元。
$$
H^{(l+1)}=\sigma\left(\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}H^{(l)}W^{(l)}\right)
$$
$H^{(l)}$为上一个卷积层的输出，表示为节点该层的embedding，作为第$l+1$个卷积层的输入，$H^{(0)}=X$，$X$为节点自身特征。$\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}H^{(l)}$为一阶近似卷积核，可以简单理解成加权平均邻接特征。</p>
<ol>
<li>增加self-loops，使在卷积计算时也会考虑当前节点自身特征：$\tilde{A}=A+I$，$A$为邻接矩阵</li>
<li>对$\tilde{A}$进行对称归一化：$\hat{A}=\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}
$。避免邻居数量越多，卷积后结果越大的情况以及考虑了邻居的度大小对卷积的影响。</li>
</ol>
<p>$\sigma$为非线性激活单元，如RELU，$W^{(l)}$为卷积层参数，<strong>每个节点共享该参数</strong>。</p>
<h2 id="分层传播" tabindex="-1"><a class="header-anchor" href="#分层传播" aria-hidden="true">#</a> 分层传播</h2>
<p>每个卷积层仅处理一阶邻居特征，堆叠起来可以达到处理$K$阶内邻居特征。</p>
<p>这种作法一方面缓解当节点度分布非常广时的过拟合情况，另外也可以以更少的代价建立更深层的模型。</p>
<h2 id="半监督gcn框架" tabindex="-1"><a class="header-anchor" href="#半监督gcn框架" aria-hidden="true">#</a> 半监督GCN框架</h2>
<p><img src="@source/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/pic/semi-gcn-paper-gcn.png" alt="semi-gcn-paper-gcn"></p>
<p>输入：节点$X_1, X_2, X_3, X_4$每个节点包含$C$维特征。</p>
<p>输出：经过卷积层的处理，最终输出$F$个分类对应的预测概率$Z_1, Z_2, Z_3, Z_4$</p>
<p>训练：其中$X_1, X_4$为带标签节点，$X_2, X_3$不带标签，共同训练，并计算带标签的节点损失，进行后向传播。</p>
<h2 id="两层gcn例子" tabindex="-1"><a class="header-anchor" href="#两层gcn例子" aria-hidden="true">#</a> 两层GCN例子</h2>
<p>$$
Z=f(X,A)=\text{softmax}\left(\tilde{A}\text{ReLU}\left(\tilde{A}XW^{(0)}\right)W^{(1)}\right)
$$</p>
<ol>
<li>
<p>输入:节点特征矩阵$X\in R^{N\times C}$及邻接矩阵$A\in R^{N\times N}$</p>
</li>
<li>
<p>预处理邻接矩阵A：$\hat{A}=\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}$</p>
</li>
<li>
<p>第一层卷积+ReLU非线性转换：$H^{(0)}=\text{ReLU}\left(\hat{A}XW^{(0)}\right)$</p>
</li>
<li>
<p>第二层卷积+softmax转换后输出：
$$
\begin{aligned}
&amp;Z=f(X,A)=\text{softmax}\left(\tilde{A}H^{(0)}W^{(1)}\right)=\text{softmax}\left(\tilde{A}\text{ReLU}\left(\tilde{A}XW^{(0)}\right)W^{(1)}\right)\
\Rightarrow &amp;Z=H^{(1)}
\end{aligned}
$$</p>
</li>
</ol>
<p>实现复杂度为$O(|E|CHF) $，$C$为$X$的维度，$H$为中间层维度、$F$为输出层维度。</p>
<h1 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h1>
<p>相比其他算法，效果及计算时间有明显的改进</p>
<p><img src="@source/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/pic/semi-gcn-paper-accuracy.png" alt="semi-gcn-paper-accuracy"></p>
<p><strong>不同传播模型的对比</strong></p>
<p><img src="@source/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/pic/semi-gcn-paper-models.png" alt="semi-gcn-paper-models"></p>
<p><strong>计算时间</strong></p>
<p>1000W边就只能CPU计算了，一个epoch差不多要10s</p>
<p><img src="@source/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/pic/semi-gcn-paper-time.png" alt="semi-gcn-paper-time"></p>
<p>硬件：</p>
<p>Hardwareused:16-coreIntel Xeon CPU E5-2640 v3 @ 2.60GHz, GeForce GTX TITAN X</p>
<h1 id="讨论" tabindex="-1"><a class="header-anchor" href="#讨论" aria-hidden="true">#</a> 讨论</h1>
<h2 id="半监督模模型" tabindex="-1"><a class="header-anchor" href="#半监督模模型" aria-hidden="true">#</a> 半监督模模型</h2>
<p>相关算法如基于图拉普拉斯正则项假设边仅编码节点相似度，限制了模型能力，而基于skip-gram的方法需要多步（随机游走+skip-gram），很难一起优化。</p>
<h2 id="限制及未来工作" tabindex="-1"><a class="header-anchor" href="#限制及未来工作" aria-hidden="true">#</a> 限制及未来工作</h2>
<p>**内存限制：**由于内存原因，大图不能在GPU中工作， 通过mini-batch的梯度下降可以有一定缓解作用，然而应该考虑GCN模型的层数，如果设置为K层，则每个节点K层内的邻居必须存在在内存中，在密度高的图中可能需要进一步的近似。</p>
<p>**有向边和边特征处理：**不支持有向边 和 边特征， 可以将原始有向图表示为无向二分图，可以处理有向边和边上特征，<strong>其中附加节点表示原始图中的边</strong>。</p>
<p><strong>假设限制</strong>
$$
\tilde{A}=A+I_N
$$
表示自连接与相邻节点的边相等重要，但是对于一些数据集，可能需要引入$\lambda$权衡:
$$
\tilde{A}=A+\lambda I_N
$$</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/65276194" target="_blank" rel="noopener noreferrer">semi-GCN：基于图的半监督学习<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/31067515" target="_blank" rel="noopener noreferrer">《Semi-Supervised Classification with Graph Convolutional Networks》阅读笔记<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了这两篇知乎专栏文章。</p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/5817806" target="_blank" rel="noopener noreferrer">经典半监督图卷积神经网络Semi-GCN<ExternalLinkIcon/></a></p>
</div></template>


