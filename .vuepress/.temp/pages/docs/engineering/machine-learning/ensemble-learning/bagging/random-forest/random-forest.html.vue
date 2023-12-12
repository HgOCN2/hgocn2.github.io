<template><div><h1 id="随机森林" tabindex="-1"><a class="header-anchor" href="#随机森林" aria-hidden="true">#</a> 随机森林</h1>
<ul>
<li><RouterLink to="/docs/engineering/machine-learning/ensemble-learning/bagging/bagging.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%9A%8F%E6%9C%BA%E6%A3%AE%E6%9E%97%E6%A6%82%E8%BF%B0">随机森林概述</a></li>
</ul>
<p>两个随机选择：</p>
<ul>
<li>
<p>构建决策树的样本是从集合中有放回的随机抽取的</p>
</li>
<li>
<p>在节点处是要随机选m个属性作为集合,再从中选一个做划分</p>
</li>
</ul>
<p><a href="https://zhuanlan.zhihu.com/p/22097796" target="_blank" rel="noopener noreferrer">说说随机森林<ExternalLinkIcon/></a></p>
<p><a href="http://www.cnblogs.com/fionacai/p/5894142.html" target="_blank" rel="noopener noreferrer">决策树与随机森林<ExternalLinkIcon/></a></p>
<p><a href="http://lib.csdn.net/article/machinelearning/35135" target="_blank" rel="noopener noreferrer">集成学习算法总结----Boosting和Bagging<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzI4MDYzNzg4Mw==&amp;mid=2247487987&amp;idx=2&amp;sn=9389a64487c53fd59f09dd6b541ee9bc&amp;chksm=ebb42927dcc3a03154332989ae6e07ce84af69b45f8120f8852f6111c655898472a752664fd3&amp;mpshare=1&amp;scene=1&amp;srcid=0711bsXANeXJTAHrLxFmlBIn#rd" target="_blank" rel="noopener noreferrer">Bagging与随机森林算法原理小结<ExternalLinkIcon/></a></p>
<p>随机森林就是bagging，用bagging的方法生成很多cart树，就是随机森林。</p>
<p>集成学习在机器学习算法中具有较高的准确率，不足之处就是模型的训练过程可能比较复杂，效率不是很高。目前接触较多的集成学习主要有2种：基于Boosting的和基于Bagging，前者的代表算法有Adaboost、GBDT、XGBoost、后者的代表算法主要是随机森林。</p>
<h1 id="随机森林概述" tabindex="-1"><a class="header-anchor" href="#随机森林概述" aria-hidden="true">#</a> 随机森林概述</h1>
<p>随机森林（Random Forest，RF）在以决策树为基学习器的基础上，进一步在决策树的训练过程中引入了随机属性选择。具体来说，传统决策树在选择划分属性时是在当前结点的属性集合（假定有d个属性）中选择一个最优属性；而在RF中，对基决策树的每个结点，先从该结点的属性集合中随机选择一个包含k个属性的子集，然后再从这个子集中选择一个最优属性用于划分，这里的参数k控制了随机性的引入程度。</p>
<p>随机森林简单、容易实现、计算开销小，令人惊奇的是，它在很多现实任务中展现出强大的性能，被誉为“代表集成学习技术水平的方法”。
原文：https://blog.csdn.net/liangjun_feng/article/details/78123583?utm_source=copy</p>
<p>机器学习教程 之 随机森林： 算法及其特征选择原理</p>
<p>https://blog.csdn.net/liangjun_feng/article/details/80152796</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p>Breiman L. Random Forest[J]. Machine Learning, 2001, 45:5-32.</p>
</div></template>


