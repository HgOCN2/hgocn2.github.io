<template><div><h1 id="超参数优化hpo" tabindex="-1"><a class="header-anchor" href="#超参数优化hpo" aria-hidden="true">#</a> 超参数优化HPO</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/auto-machine-learning/auto-machine-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E8%B6%85%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96HPO%E7%AE%80%E4%BB%8B">超参数优化HPO简介</a></li>
<li><a href="#%E8%B6%85%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96HPO%E7%AE%97%E6%B3%95%E7%AE%80%E4%BB%8B">超参数优化HPO算法简介</a></li>
<li><a href="#%E8%B6%85%E5%8F%82%E6%95%B0%E4%BC%98%E5%8C%96HPO%E7%AE%97%E6%B3%95%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7">超参数优化HPO算法开源工具</a>
<ul>
<li><a href="#Katib%E8%B6%85%E5%8F%82%E6%95%B0%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F">Katib超参数训练系统</a></li>
</ul>
</li>
</ul>
<h1 id="超参数优化hpo简介" tabindex="-1"><a class="header-anchor" href="#超参数优化hpo简介" aria-hidden="true">#</a> 超参数优化HPO简介</h1>
<p>超参数优化 (HPO) 是 Hyper-parameter optimization的缩写，是指不是依赖人工调参，而是通过一定算法找出机器学习/深度学习中最优/次优超参数的一类方法。HPO的本质是是生成多组超参数，一次次地去训练，根据获取到的评价指标等调节再生成超参数组再训练，依此类推。从使用过的情况来看，使用HPO的代价较高，尤其是对复杂深度模型或中小企业来说。</p>
<h1 id="超参数优化hpo算法简介" tabindex="-1"><a class="header-anchor" href="#超参数优化hpo算法简介" aria-hidden="true">#</a> 超参数优化HPO算法简介</h1>
<p>从开源项目来看，超参数优化（HPO）算法一般都包括三类:</p>
<ol>
<li>暴力搜索类： 随机搜索(random search)、网格搜索(grid search)、自定义(custom)</li>
<li>启发式搜索:   进化算法(Naïve Evolution, NE)、模拟退火算法(Simulate Anneal, SA)、遗传算法(Genetic Algorithm, GA)、粒子群算法(Particle Swarm Optimization, PSO)等自然计算算法、Hyperband</li>
<li>贝叶斯优化:   BOHB、TPE、SMAC、Metis、GP</li>
</ol>
<h1 id="超参数优化hpo算法开源工具" tabindex="-1"><a class="header-anchor" href="#超参数优化hpo算法开源工具" aria-hidden="true">#</a> 超参数优化HPO算法开源工具</h1>
<p>超参数优化（HPO）算法伴随着机器学习的发展而发展而来，至今已经发展得比较成熟了。</p>
<p>github项目等也比较多，一类是专注于HPO算法的。如hyperopt, advisor，scikit-optimize等；另外一类是大而全的AutoML，</p>
<p>超参数优化HPO只是其中一部分，如nni,  katib,  autokeras,  auto-sklearn等。</p>
<p>可以发现，python版的超参优化HPO颇受sklearn影响，毕竟是是最受欢迎的机器学习算法工具了。</p>
<h2 id="katib超参数训练系统" tabindex="-1"><a class="header-anchor" href="#katib超参数训练系统" aria-hidden="true">#</a> Katib超参数训练系统</h2>
<p>Katib: Kubernetes native 的超参数训练系统</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/rensihui/article/details/104591292" target="_blank" rel="noopener noreferrer">超参数优化与NNI(HPO，Hyper-parameter optimization)<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了此博客。</p>
<ul>
<li><a href="http://gaocegege.com/Blog/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/katib" target="_blank" rel="noopener noreferrer">Katib: Kubernetes native 的超参数训练系统<ExternalLinkIcon/></a></li>
</ul>
<p>“Katib超参数训练系统”一节参考了此博客。</p>
<p>===</p>
<p><a href="https://mp.weixin.qq.com/s/cfFcMyabJjj4qPoBTvvj6A" target="_blank" rel="noopener noreferrer">AutoML——让算法解放算法工程师<ExternalLinkIcon/></a></p>
<p><a href="http://www.noahlab.com.hk/opensource/vega/docs/algorithms/hpo.html" target="_blank" rel="noopener noreferrer">HPO<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/waPWzo6iIEXYaH_MQdLfYg" target="_blank" rel="noopener noreferrer">【知出乎争】超参自动优化方法总结<ExternalLinkIcon/></a></p>
<p>本文旨在介绍当前被大家广为所知的超参自动优化方法，像网格搜索、随机搜索、贝叶斯优化和Hyperband，并附有相关的样例代码供大家学习。</p>
<p>写这篇文章的过程中，我主要学到了2点：
一是随机搜索在某些时候会比格子搜索好，因为某些参数对模型影响较小时，使用随机搜索能让我们有更多的探索空间。
二是了解贝叶斯优化的机理（准备采样点-&gt;GP拟合代理模型-&gt;采集函数选点-&gt;更新数据集-&gt;循环此过程，直到调优结束）。</p>
<p>但由于贝叶斯开销较大，所以As a general rule of thumb, any time you want to optimize tuning hyperparameters, think Grid Search and Randomized Search!</p>
</div></template>


