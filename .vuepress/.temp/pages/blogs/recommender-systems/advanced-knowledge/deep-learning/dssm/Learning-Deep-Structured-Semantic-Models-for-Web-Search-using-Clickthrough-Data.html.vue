<template><div><h1 id="dssm-learning-deep-structured-semantic-models-for-web-search-using-clickthrough-data" tabindex="-1"><a class="header-anchor" href="#dssm-learning-deep-structured-semantic-models-for-web-search-using-clickthrough-data" aria-hidden="true">#</a> DSSM: Learning Deep Structured Semantic Models for Web Search using Clickthrough Data</h1>
<ul>
<li><RouterLink to="/blogs/recommender-systems/advanced-knowledge/deep-learning/deep-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%AE%80%E4%BB%8B">简介</a></li>
<li><a href="#DSSM%E5%8E%9F%E7%90%86">DSSM原理</a>
<ul>
<li><a href="#%E8%AE%A1%E7%AE%97%E8%AF%AD%E4%B9%89%E7%89%B9%E5%BE%81%E7%9A%84DNN%E6%A8%A1%E5%9E%8B">计算语义特征的DNN模型</a></li>
<li><a href="#word-hash">word-hash</a></li>
<li><a href="#DSSM%E7%9A%84%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0">DSSM的损失函数</a></li>
</ul>
</li>
<li><a href="#%E5%AE%9E%E9%AA%8C">实验</a></li>
</ul>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/dssm/pic/dssm-paper.png" alt="dssm-paper"></p>
<blockquote>
<p>论文：Learning Deep Structured Semantic Models for Web Search using Clickthrough Data
作者：Po-Sen Huang, Xiaodong He, Jianfeng Gao, Li Deng
来源：CIKM2013</p>
</blockquote>
<p>PDF: <a href="https://posenhuang.github.io/papers/cikm2013_DSSM_fullversion.pdf" target="_blank" rel="noopener noreferrer"><em>Learning Deep Structured Semantic Models for Web Search using Clickthrough Data</em><ExternalLinkIcon/></a></p>
<p>做了两件事：</p>
<p>1、用深度结构将query和doc映射到同一个低维空间，从而可以计算出它俩之间的相似度。</p>
<p>2、应对大规模网络检索，采用word hash技巧。</p>
<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<p>传统的网络检索通常用关键词匹配，但是一个概念通常用的词汇和语法都不一样，这样就导致不准确了。</p>
<p>已有的LSA隐语义模型虽然能将相似上下文的不同单词放到同一个语义类簇中，但是它的训练方式是无监督的，损失函数和检索的评估指标联系不太相关，所以性能也不能达到预期。</p>
<p>目前对于上述传统的隐语义模型，有两条路进行了拓展：</p>
<ol>
<li>将训练目标和检索排序任务联系起来。但其训练目标是最大化似然值，而不是排序这一评估指标，这依然是次优的。而且，不能应对大规模检索任务，必须要见效减小单词数量，但这会导致性能下降。</li>
<li>Hinton等人通过深度自编码这一深度学习技术，可得到单词的embedding，比传统的LSA更优。但是其依然使用了无监督学习，模型的参数被用来重建doc而和排序无关，所以比base line方法也好不了太多。而且，当检索规模一大，也不能胜任。</li>
</ol>
<p>针对上述缺点，于是提出了DSSM，给定query，使用深度神经网络对doc进行排序。</p>
<p>主要改进之处有两点：</p>
<ol>
<li>将query和doc同时非线性映射到同一个语义空间，然后计算给定的query和每一个doc之间的cos相似度。目标函数是直接最大化实际发生的query-doc点击pair对的条件似然。</li>
<li>对于大规模单词，提出了word hash技巧。以很小的信息损失，将高维的vector映射到n-gram大小维度。</li>
</ol>
<p>经过这两点改进，DSSM比其他所有的方法的指标都要高出2.5～4.3%。</p>
<h1 id="dssm原理" tabindex="-1"><a class="header-anchor" href="#dssm原理" aria-hidden="true">#</a> DSSM原理</h1>
<h2 id="计算语义特征的dnn模型" tabindex="-1"><a class="header-anchor" href="#计算语义特征的dnn模型" aria-hidden="true">#</a> 计算语义特征的DNN模型</h2>
<p>DNN架构如下图所示。输入的原始文本特征是高维向量，输出是低维语义特征空间的向量。</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/dssm/pic/dssm-dnn-architecture.png" alt="dssm-dnn-architecture"></p>
<p>DNN模型的作用如下：</p>
<ol>
<li>将原始的文本特征非线性映射到低维语义空间。</li>
<li>在低维语义空间中计算doc和query的相似度。</li>
</ol>
<p>具体表述如下：</p>
<p>$x$为输入向量，$y$为输出向量，
$$
l_i,\ i=1,...,N-1
$$
为中间隐层，$W_i$为第$i$层的权重矩阵，$b_i$是第$i$层的偏移项。</p>
<p>我们有：
$$
\begin{aligned}
&amp;l_1=W_1x\
&amp;l_i=f(W_il_{i-1}+b_i)\
&amp;y=f(W_Nl_{N-1}+b_N)
\end{aligned}
$$
使用tanh作为输出层和隐藏层$l_i(i = 2, ..., N-1)$的激活函数：
$$
f(x)=\frac{1-e^{\text{—}2x}}{1+e^{\text{—}2x}}
$$
则queryQ和docD的语义相关度为：
$$
R(Q,\ D)=\text{cosine}(y_Q,y_D)=\frac{y_Q^Ty_D}{||y_Q||\ ||y_D||}
$$
所以，给定query，按照其语义相关度对doc进行排序。</p>
<p>输入的$x$向量的维度等于单词表的大小，但是单词表在现实中是非常大的，所以将其直接作为神经网络的输入，对神经网络的前向传播和模型训练都不可接受。所以这里对DNN的第一层使用了“word hash”，这一层的权重被设置为不可学习（固定权重的线性变换）。</p>
<h2 id="word-hash" tabindex="-1"><a class="header-anchor" href="#word-hash" aria-hidden="true">#</a> word-hash</h2>
<p>word hash用于减小输入x（词袋向量）的维度，它基于n-gram，最终被表征为n-gram字符的向量。例如good这个单词，先加上起始结束标志#，即<code v-pre>#good#</code>，基于3-gram可被拆分为：<code v-pre>#go, goo, ood, od#</code>。</p>
<p>相比维度巨大的one-hot编码的向量，Word hash技术让我们能够用维度小得多的向量去表征query或者doc。500K大小的单词可表征成30621维的3-gram向量，从而让我们能将DNN模型用到大国膜信息检索任务上。</p>
<p>唯一的问题是可能不同的单词会有相同的word hash值，但是这个概率很小，500K的单词中仅有22个单词发生了重叠，重叠概率仅为0.0044%。</p>
<p>可将word hash视为固定的不可变的线性变换。</p>
<h2 id="dssm的损失函数" tabindex="-1"><a class="header-anchor" href="#dssm的损失函数" aria-hidden="true">#</a> DSSM的损失函数</h2>
<p>我们的目标是给定query下最大化点击过的doc的条件概率。
$$
P(D|Q)=\frac{\text{exp}(\gamma R(Q,D))}{\sum_{D'\in \mathbf{D}}\text{exp}(\gamma R(Q,D'))}
$$
其中，$\gamma$是平滑因子，需要经验性设置。$\mathbf{D}$为待排序的候选doc集。</p>
<p>理论上，$\mathbf{D}$应该包含所有可能的doc，但实际上，对于每一个实际发生的(query, clicked-doc)pair对，用
$$
(Q, D^{+})
$$
表示，即$Q$是query，$D^{+}$是点击过的doc。</p>
<p><strong>负采样：</strong></p>
<p>我们将理论上包含了所有doc的集合D近似为包含了$D^{+}$和四个随机选择的未点击的doc（负样本）。</p>
<p>而且这里作者说，并没有观察到不同的选择未点击doc的负采样策略会导致显著差异。</p>
<p>所以损失函数是
$$
L(\Lambda)=-\text{log}\mathop{\Pi}_{(Q,D^{+})}P(D^{+}|Q)
$$</p>
<h1 id="实验" tabindex="-1"><a class="header-anchor" href="#实验" aria-hidden="true">#</a> 实验</h1>
<p>略。具体直接看paper。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>无</p>
<p>===</p>
<p><a href="https://www.jianshu.com/p/71b731e4444b" target="_blank" rel="noopener noreferrer">DSSM模型和tensorflow实现<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/wangqingbaidu/article/details/79286038" target="_blank" rel="noopener noreferrer">DSSM系列: Deep Structured Semantic Models<ExternalLinkIcon/></a></p>
</div></template>


