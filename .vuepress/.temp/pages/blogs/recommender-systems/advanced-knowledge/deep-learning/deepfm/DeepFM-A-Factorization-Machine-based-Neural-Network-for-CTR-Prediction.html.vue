<template><div><h1 id="deepfm-a-factorization-machine-based-neural-network-for-ctr-prediction" tabindex="-1"><a class="header-anchor" href="#deepfm-a-factorization-machine-based-neural-network-for-ctr-prediction" aria-hidden="true">#</a> DeepFM: A Factorization-Machine based Neural Network for CTR Prediction</h1>
<ul>
<li><RouterLink to="/blogs/recommender-systems/advanced-knowledge/deep-learning/deep-learning.html">返回上层目录</RouterLink></li>
<li><a href="#DeepFM%E6%9E%B6%E6%9E%84">DeepFM架构</a></li>
<li><a href="#DeepFM%E5%8E%9F%E7%90%86">DeepFM原理</a>
<ul>
<li><a href="#FM%E9%83%A8%E5%88%86">FM部分</a></li>
<li><a href="#Deep%E9%83%A8%E5%88%86">Deep部分</a></li>
<li><a href="#%E7%89%B9%E5%BE%81%E7%9A%84Embedding%E5%B1%82">特征的Embedding层</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E5%8F%8C%E5%A1%94%E6%9E%B6%E6%9E%84%E7%9A%84DeepFM%E7%94%A8%E4%BA%8E%E5%8F%AC%E5%9B%9E">基于双塔架构的DeepFM用于召回</a></li>
</ul>
<p>PDF: <a href="https://arxiv.org/abs/1703.04247" target="_blank" rel="noopener noreferrer"><em>DeepFM: A Factorization-Machine based Neural Network for CTR Prediction</em><ExternalLinkIcon/></a></p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm.png" alt="deepfm"></p>
<p>类似于Wide&amp;Deep，华为诺亚方舟实验室提出了DeepFM模型，它的特点是：</p>
<ul>
<li>不需要预训练，直接端到端训练</li>
<li>同时学习低阶和高阶的特征交叉</li>
<li>Wide部分和Deep部分共享特征的Embedding</li>
</ul>
<h1 id="deepfm架构" tabindex="-1"><a class="header-anchor" href="#deepfm架构" aria-hidden="true">#</a> DeepFM架构</h1>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm-architecture.png" alt="deepfm-architecture"></p>
<p>显然，Wide侧是FM，Deep侧就是一个多层神经网络。而且Wide侧和Deep侧共享了底层的特征Embedding。</p>
<p>DeepFM同时考虑了低阶（FM）和高阶（Deep）特征交叉，和单独各自作为模型相比，这样做会带来额外的收益。</p>
<p>Wide侧采用FM避免了特征工程，因为它能自动进行特征交叉。</p>
<h1 id="deepfm原理" tabindex="-1"><a class="header-anchor" href="#deepfm原理" aria-hidden="true">#</a> DeepFM原理</h1>
<p>设训练数据为n个$(x,y)$样本，其中，$x=[x_{field_1}, x_{field_2}, ... x_{field_j}, ... , x_{field_m}]$，$y\in {0, 1}$。</p>
<p>CTR预测模型为$\hat{y}=CTR_model(x)$。</p>
<p>就和FM一样，对于每一个特征，都会有一个一阶权值$w_i$和一个二阶特征交叉的隐向量（Embedding）$V_i$，而且$V_i$还会被Deep模型共享用来进行高阶特征交叉。</p>
<p>所有的参数，包括$w_i$，$V_i$，和深度网络参数$(W^{(l)},\ b^{(l)})$，会按照如下的模型进行训练：
$$
\hat{y}=sigmoid(y_{FM}+y_{DNN})
$$
其中，$y_{FM}$为FM部分的输出值，$y_{DNN}$为Deep部分的输出值。</p>
<h2 id="fm部分" tabindex="-1"><a class="header-anchor" href="#fm部分" aria-hidden="true">#</a> FM部分</h2>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm-fm.png" alt="deepfm-fm"></p>
<p>模型为：
$$
y_{FM}=w_0+\sum_{i=1}^dw_ix_i+\sum_{j_1=1}^d\sum_{j_2=j_1+1}^d&lt;V_i,V_j&gt;x_{j_1}\cdot x_{j_2}
$$</p>
<h2 id="deep部分" tabindex="-1"><a class="header-anchor" href="#deep部分" aria-hidden="true">#</a> Deep部分</h2>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm-deep.png" alt="deepfm-deep"></p>
<p>Deep部分就是一个简单的前馈神经网络，用于高阶特征交叉。</p>
<h2 id="特征的embedding层" tabindex="-1"><a class="header-anchor" href="#特征的embedding层" aria-hidden="true">#</a> 特征的Embedding层</h2>
<p>FM部分和Deep部分共享了特征的Embedding层，该层具体结构如下：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm-embedding.png" alt="deepfm-embedding"></p>
<p>特征的Embedding其实就是OneHot对应的神经网络权重，这一点和Word2Vec一样。</p>
<h1 id="基于双塔架构的deepfm用于召回" tabindex="-1"><a class="header-anchor" href="#基于双塔架构的deepfm用于召回" aria-hidden="true">#</a> 基于双塔架构的DeepFM用于召回</h1>
<p>DeepFM的结构只适合用于排序，那怎么用于召回呢？</p>
<p>其实，我们联想到FM用于召回的方法，即分别将User和Item各自所有特征的Embedding相加，得到表征User和Item的两个向量，即
$$
\begin{aligned}
\text{Vec}<em>U&amp;=\sum</em>{i=1}^nVec_{U_i}\
\text{Vec}<em>I&amp;=\sum</em>{i=1}^nVec_{I_i}
\end{aligned}
$$
则FM的预测值为
$$
y_{FM}=\sum_{i=1}^nVec_{U_i}\cdot \sum_{i=1}^nVec_{I_i}=\text{Vec}_U\cdot \text{Vec}_I
$$
当然上述只取了FM原始公式中的User和Item的二阶交叉项，是原始FM的一种近似。</p>
<p>然后我们发现，如果把DeepFM中的FM部分改为上述形式，就可以使用双塔架构来构建用于召回的DeepFM了。</p>
<p>为什么要用双塔架构呢，除了这样可以使用Deep外，另一个原因是，其负采样方式特别适合召回。</p>
<p>具体的架构如下所示：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/deep-learning/deepfm/pic/deepfm-dssm.png" alt="deepfm-dssm"></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://blog.csdn.net/John_xyz/article/details/78933253" target="_blank" rel="noopener noreferrer">CTR预估算法之FM, FFM, DeepFM及实践<ExternalLinkIcon/></a></p>
<p><a href="http://axure.pmskill.net/AI/%E6%96%B0%E6%B5%AA-ffm%E5%8F%8Adeepffm%E6%A8%A1%E5%9E%8B%E5%9C%A8%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%8E%A2%E7%B4%A2%E5%8F%8A%E5%AE%9E%E8%B7%B5.pdf" target="_blank" rel="noopener noreferrer">FFM及DeepFFM模型在推荐系统的探索<ExternalLinkIcon/></a></p>
<p><a href="https://www.kdocs.cn/l/sY7EQM541" target="_blank" rel="noopener noreferrer">翻译：DeepFM：基于因子分解 -机器的CTR预测神经网络<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/QrO48ZdP483TY_EnnWFhsQ" target="_blank" rel="noopener noreferrer">【通俗易懂】手把手带你实现DeepFM！<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/6f1c2643d31b" target="_blank" rel="noopener noreferrer">推荐系统遇上深度学习(三)--DeepFM模型理论和实践<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/81937617" target="_blank" rel="noopener noreferrer">推荐算法——从FM到XDeepFM<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/109901389" target="_blank" rel="noopener noreferrer">[带你撸论文]之Deep FM算法代码级精讲<ExternalLinkIcon/></a></p>
</div></template>


