<template><div><h1 id="线性模型" tabindex="-1"><a class="header-anchor" href="#线性模型" aria-hidden="true">#</a> 线性模型</h1>
<ul>
<li>
<p><RouterLink to="/docs/machine-learning/machine-learning.html">返回上层目录</RouterLink></p>
</li>
<li>
<p><RouterLink to="/docs/machine-learning/linear-model/maximum-entropy-model/maximum-entropy-model.html">最大熵模型</RouterLink></p>
</li>
<li>
<p><RouterLink to="/docs/machine-learning/linear-model/exponential-family-distribution-and-generalized-linear-model/exponential-family-distribution-and-generalized-linear-model.html">指数族分布与广义线性模型</RouterLink></p>
</li>
<li>
<p><RouterLink to="/docs/machine-learning/linear-model/linear-regression/linear-regression.html">线性回归</RouterLink></p>
</li>
<li>
<p><RouterLink to="/docs/machine-learning/linear-model/logistic-regression/logistic-regression.html">逻辑回归</RouterLink></p>
</li>
</ul>
<h1 id="为什么线性模型有用" tabindex="-1"><a class="header-anchor" href="#为什么线性模型有用" aria-hidden="true">#</a> 为什么线性模型有用</h1>
<p>时至今日，深度学习早已成为数据科学的新宠。即便往前推10年，SVM、boosting等算法也能在准确率上完爆线性回归。</p>
<p>那么，为什么我们还需要线性回归呢？</p>
<p>一方面，线性回归所能够模拟的关系其实远不止线性关系。线性回归中的“线性”指的是系数的线性，而通过对特征的非线性变换，以及广义线性模型的推广，输出和特征之间的函数关系可以是高度非线性的。另一方面，也是更为重要的一点，线性模型的易解释性使得它在物理学、经济学、商学等领域中占据了难以取代的地位。</p>
<h1 id="线性模型的学习思路" tabindex="-1"><a class="header-anchor" href="#线性模型的学习思路" aria-hidden="true">#</a> 线性模型的学习思路</h1>
<p>本章的学习思路和背后的联系：要想明白softmax回归，需先搞清楚广义线性模型GLM，要想明白GLM又要先知道指数族分布，指数族分布又是从最大熵原理推导出来的。</p>
<p>也就是说，学习顺序是：最大熵模型-&gt;指数族分布-&gt;广义线性模型-&gt;softmax回归</p>
</div></template>


