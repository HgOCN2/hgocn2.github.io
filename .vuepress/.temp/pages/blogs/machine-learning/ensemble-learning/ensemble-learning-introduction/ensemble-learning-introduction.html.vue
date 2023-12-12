<template><div><h1 id="集成学习概述" tabindex="-1"><a class="header-anchor" href="#集成学习概述" aria-hidden="true">#</a> 集成学习概述</h1>
<ul>
<li><RouterLink to="/blogs/machine-learning/ensemble-learning/ensemble-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0%E7%AE%80%E8%BF%B0">集成学习简述</a></li>
<li><a href="#Bagging">Bagging</a>
<ul>
<li>随机森林</li>
</ul>
</li>
<li><a href="#Boosting">Boosting</a>
<ul>
<li><a href="#Boosting%E6%A6%82%E8%BF%B0">Boosting概述</a>
<ul>
<li><a href="#Boosting%E7%AE%97%E6%B3%95%E8%B5%B7%E6%BA%90">Boosting算法起源</a></li>
<li><a href="#Boosting%E6%96%B9%E6%B3%95%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%80%9D%E8%B7%AF">Boosting方法的基本思路</a></li>
</ul>
</li>
<li>AdaBoost</li>
<li>GradientBoosting
<ul>
<li>GBDT</li>
<li>XGBoost</li>
<li>LightGBM</li>
</ul>
</li>
</ul>
</li>
<li><a href="#Stacking">Stacking</a></li>
</ul>
<h1 id="集成学习简述" tabindex="-1"><a class="header-anchor" href="#集成学习简述" aria-hidden="true">#</a> 集成学习简述</h1>
<p>俗话说：三个臭皮匠，顶个诸葛亮。集成学习就是几个臭皮匠集成起来比诸葛亮还牛逼。</p>
<p>建议阅读：《沈学华, 周志华, 吴建鑫, 等. Boosting和Bagging综述》</p>
<p>集成学习是一种优化手段和策略，通常是<strong>结合多个简单的弱分类器来集成模型组，去做更可靠的决策</strong>。一般的弱分类器可以是决策树，SVM，kNN等构成，其中的模型可以单独来训练，并且这些弱分类器以某种方式结合在一起去做出一个总体预测。集成学习就是找出哪些弱分类器可以结合在一起，以及如何结合的方法。目前集成学习主要有bagging，boosting，stacking三种。</p>
<h1 id="bagging" tabindex="-1"><a class="header-anchor" href="#bagging" aria-hidden="true">#</a> Bagging</h1>
<p>Bagging就是“Bootstrap aggregating（有放回采样的集成）”的缩写。Bagging是集成学习的一种，可提高用于统计分类回归的机器学习算法的稳定性和精度，也可以减小方差，有助于防止过拟合。虽然Bagging常使用决策树（即随机森林），但是也可用于任何方法，如朴素贝叶斯等。Bagging是模型平均方法（model averaging approach）的特例。</p>
<p>Bagging具体做法：对训练集进行随机子抽样，对每个子训练集构建基模型，对所有的基模型的预测结果进行综合产生最后的预测结果。如果是<strong>分类</strong>算法，则用多数投票法确定最终类别，如果是<strong>回归</strong>算法，则将各个回归结果做算术平均作为最终的预测值。</p>
<p>Bagging能防止噪声影响，是因为它的样本是有放回采样，这样子一些特例就很可能不会被采集到，即使采集到，也因为投票而被否决。这样就从样本上防止了过拟合。</p>
<p>Bagging样本的权值是一样的，各分类器的权值也都相等（即一人一票）。</p>
<h1 id="boosting" tabindex="-1"><a class="header-anchor" href="#boosting" aria-hidden="true">#</a> Boosting</h1>
<p>提升方法是一种常用的统计学习方法，应用广泛且有效。在分类问题中，它通过改变训练样本的权重，学习多个分类器，并将这些分类器进行线性组合，提高分类的性能。</p>
<h2 id="boosting概述" tabindex="-1"><a class="header-anchor" href="#boosting概述" aria-hidden="true">#</a> Boosting概述</h2>
<p>提升的含义就是<strong>将容易找到的识别率不高的弱分类算法提升为识别率很高的强分类算法</strong>。</p>
<p>Boosting是一种提高任意给定学习算法（弱分类算法）准确度的方法，这种方法通过构造一个<strong>预测函数系列</strong>，然后以一定的方式将他们<strong>组合成一个预测函数</strong>。</p>
<p>它是一种框架算法，训练过程为阶梯状，基模型按照次序进行训练（实际上可以做到并行处理），先给定一个初始训练数据，训练出第一个基模型，根据基模型的表现对样本进行调整，在之前基模型预测错误的样本上投入更多的关注，然后用调整后的样本训练下一个基模型，重复上述过程N次，将N个基模型进行加权结合，输出最后的结果。在这n个基分类器中，每个单个的分类器的识别率不一定很高，但他们联合后的结果有很高的识别率，这样便提高了该弱分类算法的识别率。在产生单个的基分类器时可用相同的分类算法，也可用不同的分类算法，这些算法一般是不稳定的弱分类算法，如朴素贝叶斯，决策树(C4.5)，神经网络(BP)等。常用的算法有GBDT，XGBOOST等。</p>
<h3 id="boosting算法起源" tabindex="-1"><a class="header-anchor" href="#boosting算法起源" aria-hidden="true">#</a> Boosting算法起源</h3>
<p>Boosting的思想起源于Valiant提出的PAC ( Probably Approximately Correct: 概率近似正确)学习模型。</p>
<p>Valiant和Kearns提出了<strong>弱学习</strong>和<strong>强学习</strong>的概念：一个概念（一个类）若存在</p>
<ul>
<li>识别错误率小于1/2，也即准确率仅比随机猜测略高的学习算法，称为弱学习算法；</li>
<li>识别准确率很高，并能在<a href="https://baike.baidu.com/item/%E5%A4%9A%E9%A1%B9%E5%BC%8F%E6%97%B6%E9%97%B4" target="_blank" rel="noopener noreferrer">多项式时间<ExternalLinkIcon/></a>内完成的学习算法，称为强学习算法。</li>
</ul>
<p>同时，Valiant和Kearns首次提出了PAC学习模型中弱学习算法和强学习算法的等价性问题，Schapire后来证明了强可学习和弱可学习是等价的，也就是说，在PCA学习的框架下，一个概念是强可学习的充分必要条件是这个概念是弱可学习的。</p>
<p>这样一来，问题便成为，在学习中，如果已经发现了“弱学习算法”，那么能否将其提升为“强学习算法”？即任意给定仅比随机猜测略好的弱学习算法，是否可以将其提升为强学习算法？大家知道，发现弱学习算法通常要比发现强学习算法容易的多。那么具体如何实施提升，就成为开发提升发放时索要解决的问题。</p>
<p>关于提升方法的研究很多，有很多提升算法被提出，最具代表性的是AdaBoost算法。</p>
<ul>
<li>1990年，Schapire最先构造出一种多项式级的算法，对该问题做了肯定的证明，这就是最初的Boosting算法。</li>
<li>一年后，即1991年，Freund提出了一种效率更高的Boosting算法。但是，这两种算法存在共同的实践上的缺陷，那就是都要求事先知道弱学习算法学习正确的下限。</li>
<li>1995年，Freund和Schapire改进了Boosting算法，提出了<strong>AdaBoost</strong>(Adaptive Boosting)算法，该算法效率和Freund于1991年提出的Boosting算法几乎相同，但不需要任何关于弱学习器的先验知识，因而更容易应用到实际问题当中。</li>
<li>之后，Freund和Schapire进一步提出了改变Boosting投票权重的AdaBoost.M1、AdaBoost.M2等算法，在机器学习领域受到了极大的关注。</li>
</ul>
<h3 id="boosting方法的基本思路" tabindex="-1"><a class="header-anchor" href="#boosting方法的基本思路" aria-hidden="true">#</a> Boosting方法的基本思路</h3>
<p>对于分类问题,给定一个训练样本集，求比较粗糙的分类规则（弱分类器）要比求精确的分类规则（强分类器）容易的多。提升方法就是从弱学习算法出发，反复学习，得到一系列弱分类器（基本分类器），然后组合这些弱分类器，后成一个强分类器。大多数的提升方法都是改变训练数据的概率分布（训练数据的权值分布），针对不同的训练数据分布，调用弱学习算法，学习一系列弱分类器。</p>
<p>这样，对提升方法来说，有两个问题需要回答：</p>
<ul>
<li>每一轮如何改变训练数据的权值或概率分布</li>
<li>如何将弱分类器组合成一个强分类器</li>
</ul>
<p>关于第一个问题，AdaBoost的做法是，提高那些被前一轮弱分类器错误分类的样本的权值，而降低那些被正确分类样本的权值。这样一来，那些没有得到正确分类的数据，由于其权值的加大，而受到后一轮的弱分类器的更大关注。于是，分类问题被一系列的弱分类器“分而治之”。</p>
<p>至于第二个问题，即弱分类器的组合，AdaBoost采取加权多数表决的方法。具体地，加大分类误差率小的弱分类器的权值，使其在表决中起较大作用减小分类误差率大的弱分类器的权值，使其在表决中起较小的作用。</p>
<p>通俗的说，AdaBoost的做法是：数据有权重，分类器也有权重。给数据分权重了，分错的话，权重会增加，该数据就越重要；同样也给臭皮匠（分类器）分等级了，有不同的地位，分类器准确率越高，权值就越大。</p>
<p>AdaBoost的巧妙之处就在于它将这些想法自然且有效地实现在一种算法里。</p>
<h1 id="stacking" tabindex="-1"><a class="header-anchor" href="#stacking" aria-hidden="true">#</a> Stacking</h1>
<p>是一种组合分类器的方法，训练一个模型来组合其他各个模型。</p>
<p>首先第一层先训练多个不同的模型，然后第二层再以之前训练的各个模型的输出为输入来训练一个模型(一般用LR进行回归组合），从而得到完整的stacking模型。</p>
<p>使用过stacking之后，发现其实stacking很像神经网络，通过很多模型的输出，构建中间层，最后用逻辑回归讲中间层训练得到最后的结果。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://baike.baidu.com/item/Boosting/1403912?fr=aladdin" target="_blank" rel="noopener noreferrer">百度百科：Boosting<ExternalLinkIcon/></a></li>
</ul>
<p>“Boosting概述”一节参考此文章。</p>
<ul>
<li><a href="https://www.jianshu.com/p/32def2294ae6" target="_blank" rel="noopener noreferrer">用python参加Kaggle的些许经验总结<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Stacking&quot;部分参考此博客。</p>
<p>===</p>
<p><a href="https://mp.weixin.qq.com/s/1R9IoKnaVVSzHKD2DAjByQ" target="_blank" rel="noopener noreferrer">带答案面经分享-面试中最常考的树模型！<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/29036379" target="_blank" rel="noopener noreferrer">集成学习（ensemble learning ）该如何入门？<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUyMjE2MTE0Mw==&amp;mid=2247485821&amp;idx=1&amp;sn=9cb901cb9c5144a1714eed4927c4b609&amp;chksm=f9d157e5cea6def32faea122cf4193a77cfb3397543e95392acd6ec0185a647a42d2eab01ccd&amp;mpshare=1&amp;scene=1&amp;srcid=032606p3UBT1losMDZ9DyjdX#rd" target="_blank" rel="noopener noreferrer">《机器学习》笔记-集成学习（8）<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/36621482" target="_blank" rel="noopener noreferrer">如何评价周志华深度森林模型<ExternalLinkIcon/></a></p>
</div></template>


