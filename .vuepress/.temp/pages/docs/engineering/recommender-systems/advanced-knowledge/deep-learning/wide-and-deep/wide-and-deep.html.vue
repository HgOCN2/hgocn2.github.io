<template><div><h1 id="wide-deep" tabindex="-1"><a class="header-anchor" href="#wide-deep" aria-hidden="true">#</a> Wide&amp;Deep</h1>
<ul>
<li><RouterLink to="/docs/engineering/recommender-systems/advanced-knowledge/deep-learning/wide-and-deep/deep-learning.html">返回上层目录</RouterLink></li>
</ul>
<p><a href="https://docs.wps.cn/view/l/sQrIlK6wZ?f=101" target="_blank" rel="noopener noreferrer">翻译<ExternalLinkIcon/></a></p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/187434679" target="_blank" rel="noopener noreferrer">推荐系统（4）兼容记忆和泛化能力Wide&amp;Deep<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/92279796" target="_blank" rel="noopener noreferrer">推荐系统系列（六）：<em>Wide</em>&amp;<em>Deep</em>理论与实践<ExternalLinkIcon/></a></p>
<p>在CTR预估任务中，线性模型仍占有半壁江山。利用手工构造的交叉组合特征来使线性模型具有“记忆性”，使模型记住共现频率较高的特征组合，往往也能达到一个不错的baseline，且可解释性强。但这种方式有着较为明显的缺点：首先，特征工程需要耗费太多精力。其次，因为模型是强行记住这些组合特征的，所以对于未曾出现过的特征组合，权重系数为0，无法进行泛化。</p>
<p>为了加强模型的泛化能力，研究者引入了DNN结构，将高维稀疏特征编码为低维稠密的Embedding vector，这种基于Embedding的方式能够有效提高模型的泛化能力。但是，现实世界是没有银弹的。基于Embedding的方式可能因为数据长尾分布，导致长尾的一些特征值无法被充分学习，其对应的Embedding vector是不准确的，这便会造成模型泛化过度。</p>
<p>2016年，Google提出Wide&amp;Deep模型，将线性模型与DNN很好的结合起来，在提高模型泛化能力的同时，兼顾模型的记忆性。Wide&amp;Deep这种线性模型与DNN的并行连接模式，后来成为推荐领域的经典模式。今天与大家一起分享这篇paper，向经典学习。</p>
<p>作者：Dadada</p>
<p>链接：https://zhuanlan.zhihu.com/p/92279796</p>
<p>来源：知乎</p>
<p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</div></template>


