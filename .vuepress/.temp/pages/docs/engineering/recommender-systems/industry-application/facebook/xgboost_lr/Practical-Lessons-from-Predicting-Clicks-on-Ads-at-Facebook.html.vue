<template><div><h1 id="xgb-lr-practical-lessons-from-predicting-clicks-on-ads-at-facebook" tabindex="-1"><a class="header-anchor" href="#xgb-lr-practical-lessons-from-predicting-clicks-on-ads-at-facebook" aria-hidden="true">#</a> XGB+LR:Practical Lessons from Predicting Clicks on Ads at Facebook</h1>
<p><img src="@source/docs/engineering/recommender-systems/industry-application/facebook/xgboost+lr/pic/paper.png" alt="paper"></p>
<p>pdf：<a href="http://quinonero.net/Publications/predicting-clicks-facebook.pdf" target="_blank" rel="noopener noreferrer">Practical Lessons from Predicting Clicks on Ads at Facebook<ExternalLinkIcon/></a></p>
<p>对GBDT/XGB+LR的看法：</p>
<p>xgb因为是tree based，可以看做一种<strong>特征交叉</strong>方法。比如一棵树的某个叶子节点的路径依次为 f1 &gt; 0.2 &amp;&amp; f2 &lt; 5 &amp;&amp; f3 == 1 &amp;&amp; f4 &gt; 0，它其实就可以看做四个特征结合的交叉特征。而且分割节点的时候，是按照gain来分割的，自带了<strong>特征选择</strong>的思想在里面。</p>
<h1 id="改进的xgboost-lr" tabindex="-1"><a class="header-anchor" href="#改进的xgboost-lr" aria-hidden="true">#</a> 改进的XGBoost+LR</h1>
<p>原始特征：类别+连续</p>
<p>先把类别特征离散化了（连续特征不用离散化），然后喂给xgboost。然后将xgboost的叶子结点也给离散化了。</p>
<p>然后把连续特征离散化了，将离散化的xgboost特征和原始特征离散化后拼接在一起，其实此时特征数据的x值已经全部成为了01值了，再喂给LR，得到预估值。</p>
<p><a href="https://cloud.tencent.com/developer/article/1006009" target="_blank" rel="noopener noreferrer">XGBoost + LR 就是加特征而已<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://xgboost.readthedocs.io/en/latest/jvm/xgboost4j_spark_tutorial.html" target="_blank" rel="noopener noreferrer">XGBoost4J-Spark Tutorial<ExternalLinkIcon/></a></li>
</ul>
<p>===</p>
<p><a href="https://www.jianshu.com/p/96173f2c2fb4" target="_blank" rel="noopener noreferrer">推荐系统遇上深度学习(十)--GBDT+LR融合方案实战<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/wkang/p/9657032.html" target="_blank" rel="noopener noreferrer">GBDT+LR算法解析及Python实现<ExternalLinkIcon/></a></p>
<p><a href="https://ask.julyedu.com/question/7720" target="_blank" rel="noopener noreferrer">gbdt对标量特征要不要onehot编码<ExternalLinkIcon/></a></p>
<p>在我看来，GBDT中每课tree的作用是进行supervised clustering，最后输出的其实是每个cluster的index。用GBDT是为了追求tree间的diversity。类似思路见周志华的gcForest，用extreme random forest进行特征转换，也是为了追求diversity。</p>
<p><a href="https://www.zhihu.com/question/35821566/answer/225927793" target="_blank" rel="noopener noreferrer">知乎：LR,gbdt,libfm这三种模型分别适合处理什么类型的特征<ExternalLinkIcon/></a></p>
<p><a href="https://cloud.tencent.com/developer/news/14063" target="_blank" rel="noopener noreferrer">10分钟了解GBDT＋LR模型的来龙去脉<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/42123341?utm_source=wechat_session&amp;utm_medium=social&amp;utm_oi=903049909593317376" target="_blank" rel="noopener noreferrer">XGBoost+LR融合的原理和简单实现<ExternalLinkIcon/></a></p>
</div></template>


