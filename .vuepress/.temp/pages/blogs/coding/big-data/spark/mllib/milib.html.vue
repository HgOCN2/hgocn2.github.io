<template><div><h1 id="mllib机器学习库" tabindex="-1"><a class="header-anchor" href="#mllib机器学习库" aria-hidden="true">#</a> MLlib机器学习库</h1>
<ul>
<li><RouterLink to="/blogs/coding/big-data/spark/spark.html">返回上层目录</RouterLink></li>
<li><RouterLink to="/blogs/coding/big-data/spark/mllib/lr.html">LR逻辑回归</RouterLink></li>
<li><a href="#%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%BA%93%EF%BC%88MLlib%EF%BC%89%E6%8C%87%E5%8D%97">机器学习库（MLlib）指南</a></li>
<li><a href="#MLlib%E5%92%8CML%E5%BA%93%E7%9A%84%E5%8C%BA%E5%88%AB">MLlib和ML库的区别</a></li>
</ul>
<h1 id="机器学习库-mllib-指南" tabindex="-1"><a class="header-anchor" href="#机器学习库-mllib-指南" aria-hidden="true">#</a> 机器学习库（MLlib）指南</h1>
<p>MLlib是Spark的机器学习（ML）库。其目标是使实际的机器学习可扩展和容易。在高层次上，它提供了如下工具：</p>
<ul>
<li>ML算法：通用学习算法，如分类，回归，聚类和协同过滤</li>
<li>特征提取，特征提取，转换，降维和选择</li>
<li>管道：用于构建，评估和调整ML管道的工具</li>
<li>持久性：保存和加载算法，模型和管道</li>
<li>实用程序：线性代数，统计，数据处理等</li>
</ul>
<p><strong>依赖：</strong></p>
<p>MLlib使用线性代数包Breeze，它依赖于 netlib-java进行优化的数值处理。如果本机库在运行时不可用，您将看到一条警告消息，而将使用纯JVM实现。</p>
<h1 id="mllib基本数据类型" tabindex="-1"><a class="header-anchor" href="#mllib基本数据类型" aria-hidden="true">#</a> MLlib基本数据类型</h1>
<p><a href="https://dblab.xmu.edu.cn/blog/1172/" target="_blank" rel="noopener noreferrer">Spark入门：MLlib基本数据类型(1)<ExternalLinkIcon/></a></p>
<h1 id="mllib和ml库的区别" tabindex="-1"><a class="header-anchor" href="#mllib和ml库的区别" aria-hidden="true">#</a> MLlib和ML库的区别</h1>
<p><strong>公告：基于DataFrame的API是主要的API</strong></p>
<p><strong>MLlib基于RDD的API现在处于维护模式。</strong></p>
<p>从Spark 2.0开始，包中的基于RDD的API <code v-pre>spark.mllib</code>已进入维护模式。Spark的主要机器学习API现在是包中的基于DataFrame的API <code v-pre>spark.ml</code>。</p>
<p><strong>有什么影响？</strong></p>
<ul>
<li>MLlib将仍然支持基于RDD的API <code v-pre>spark.mllib</code>并修复错误。</li>
<li>MLlib不会将新功能添加到基于RDD的API。</li>
<li>在Spark 2.x版本中，MLlib将向基于DataFrame的API添加功能，以便与基于RDD的API达成功能对等。</li>
<li>达到功能对等（大致估计为Spark 2.2）后，基于RDD的API将被弃用。</li>
<li>基于RDD的API预计将在Spark 3.0中被删除。</li>
</ul>
<p><strong>为什么MLlib切换到基于DataFrame的API？</strong></p>
<ul>
<li>DataFrames提供比RDD更友好的API。DataFrame的许多优点包括Spark数据源，SQL / DataFrame查询，Tungsten和Catalyst优化以及跨语言的统一API。</li>
<li>MLlib的基于DataFrame的API提供跨ML算法和跨多种语言的统一API。</li>
<li>数据框便于实际的ML管线，特别是功能转换。</li>
</ul>
<p><strong>什么是“Spark ML”？</strong></p>
<ul>
<li>“Spark ML”不是一个正式的名字，偶尔用于指代基于MLlib DataFrame的API。这主要是由于<code v-pre>org.apache.spark.ml</code>基于DataFrame的API所使用的Scala包名以及我们最初用来强调管道概念的“Spark ML Pipelines”术语。</li>
</ul>
<p><strong>MLlib是否被弃用？</strong></p>
<ul>
<li>编号MLlib包括基于RDD的API和基于DataFrame的API。基于RDD的API现在处于维护模式。</li>
</ul>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzA3MDY0NTMxOQ==&amp;mid=2247484273&amp;idx=1&amp;sn=830eee29f7078dd85d6b3156a2880acd&amp;chksm=9f38e059a84f694f99480c6e831d788187d1943704ca69f881721bf40dbf9745c8701902c4db&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">请别再问我Spark的MLlib和ML库的区别<ExternalLinkIcon/></a></p>
<h1 id="基于rdd的mllib的缺陷" tabindex="-1"><a class="header-anchor" href="#基于rdd的mllib的缺陷" aria-hidden="true">#</a> 基于RDD的MLlib的缺陷</h1>
<p>Spark的核心概念是RDD，而RDD的关键特性之一是其不可变性，来规避分布式环境下复杂的各种并行问题。这个抽象，在数据分析的领域是没有问题的，它能最大化的解决分布式问题，简化各种算子的复杂度，并提供高性能的分布式数据处理运算能力。</p>
<p>然而在机器学习领域，RDD的弱点很快也暴露了。机器学习的核心是迭代和参数更新。RDD凭借着逻辑上不落地的内存计算特性，可以很好的解决迭代的问题，然而RDD的不可变性，却非常不适合参数反复多次更新的需求。这本质上的不匹配性，导致了Spark的MLlib库，发展一直非常缓慢，从2015年开始就没有实质性的创新，性能也不好。</p>
<p>为此，Angel在设计生态圈的时候，优先考虑了Spark。在V1.0.0推出的时候，就已经具备了Spark on Angel的功能，基于Angel为Spark加上了PS功能，在不变中加入了变化的因素，可谓如虎添翼。</p>
<p>我们将以L-BFGS为例，来分析Spark在机器学习算法的实现上的问题，以及Spark on Angel是如何解决Spark在机器学习任务中的遇到的瓶颈，让Spark的机器学习更加强大。</p>
<h2 id="l-bfgs算法说明" tabindex="-1"><a class="header-anchor" href="#l-bfgs算法说明" aria-hidden="true">#</a> L-BFGS算法说明</h2>
<p>$$
w_{k+1}=w_k-\lambda\cdot p_k
$$</p>
<p>计算$p_k=H_k^{-1}g_k$伪代码如下所示，这是人们常说的two-loop recursion算法，是Limited-BFGS算法的核心部分。
返回值$r$是我们说要的$p_k$。</p>
<p><img src="@source/blogs/coding/big-data/spark/mllib/pic/BFGSMultiply.png" alt="BFGSMultiply"></p>
<p>其中，$H_0^{-1}$是单位阵，$y_k=g_k-g_k^{-1}, s_k=w_k-w_k^{-1}k^{-1}$，L-BFGS算法将最近$m$轮生成的$y_k$和$s_k$序列，记做${y_k}$和${s_k}$。基于计算${y_k}$和${s_k}$计算$p_k$。（<strong>注：这一行不对，需要修改</strong>）</p>
<h2 id="l-bfgs的spark实现" tabindex="-1"><a class="header-anchor" href="#l-bfgs的spark实现" aria-hidden="true">#</a> L-BFGS的Spark实现</h2>
<h3 id="实现框架" tabindex="-1"><a class="header-anchor" href="#实现框架" aria-hidden="true">#</a> 实现框架</h3>
<p>Spark中的driver负责协调整个Spark任务执行的同时，需要保存最近$m$轮的${y_k}$和${s_k}$序列，并在driver上执行two-loop recursion算法。而executor负责分布式地计算梯度向量。</p>
<p><img src="@source/blogs/coding/big-data/spark/mllib/pic/spark-L-BFGS.png" alt="spark_L-BFGS"></p>
<p>迭代过程：
（1）每轮迭代，将每个executor计算的梯度Aggregate到driver
（2）$y_k$和$s_k$保存在driver上，在driver端执行two-loop recursion算法
（3）driver上更新模型$w$，并将$w$广播到每个Executor</p>
<h3 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h3>
<p>基于Spark的L-BFGS实现的算法优点比较明显：</p>
<ul>
<li>HDFS I/O
Spark可以快速读写HDFS上的训练数据；</li>
<li>细粒度的负载均衡
并行计算梯度时，Spark具有强大的并行调度机制，保证task快速执行；</li>
<li>容错机制
当计算节点挂掉、任务失败，Spark会根据RDD的DAG关系链实现数据的重计算。但是对于迭代式算法，每轮迭代要用RDD的action操作，打断RDD的DAG，避免因为重计算引起逻辑的错乱；</li>
<li>基于内存的计算
基于内存的计算过程，可以加速机器学习算法中计算梯度过程的耗时。</li>
</ul>
<p>该实现的缺点：</p>
<ul>
<li><strong>treeAggregate引起的网络瓶颈</strong>
<strong>Spark用treeAggregate聚合梯度时，如果模型维度达到亿级，每个梯度向量都可能达到几百兆；此时treeAggregate的shuffle的效率非常低</strong>；</li>
<li>driver单点
<ul>
<li>保存${y_k}$和${s_k}$序列需要较大的内存空间；</li>
<li>two-loop recursion算法是由driver单点执行，该过程是多个高维度的向量的运算；</li>
<li><strong>每轮迭代，driver都需要和executor完成高维度向量的aggregate和broadcast</strong>。</li>
</ul>
</li>
</ul>
<h2 id="l-bfgs的spark-on-angel实现" tabindex="-1"><a class="header-anchor" href="#l-bfgs的spark-on-angel实现" aria-hidden="true">#</a> L-BFGS的Spark on Angel实现</h2>
<p>Spark on Angel借助Angel PS-Service的功能为Spark引入PS的角色，减轻整个算法流程对driver的依赖。two-loop recursion算法的运算交给PS，而driver只负责任务的调度，大大减轻的对driver性能的依赖。</p>
<p>Angel PS由一组分布式节点组成，每个vector、matrix被切分成多个partition保存到不同的节点上，同时支持vector和matrix之间的运算；</p>
<p>${y_k}$和${s_k}$序列分布式地保存到Angel PS上，two-loop recursion算法中高维度的向量计算也是在PS上完成。Spark executor每轮迭代过程会从PS上<code v-pre>Pull</code> w 到本地，并将计算的梯度向量<code v-pre>Push</code>到PS。</p>
<p><img src="@source/blogs/coding/big-data/spark/mllib/pic/Spark-on-Angel.png" alt="Spark-on-Angel"></p>
<p>迭代过程：</p>
<p>（1）每轮迭代，executor 将PS上的模型$w$ pull到本地，计算梯度，然后梯度向量push给PS</p>
<p>（2）$y_k$和$s_k$保存在PS上，在PS端执行two-loop recursion算法</p>
<p>（3）PS上更新模型$w$</p>
<h3 id="性能分析-1" tabindex="-1"><a class="header-anchor" href="#性能分析-1" aria-hidden="true">#</a> 性能分析</h3>
<p>整个算法过程，driver只负责任务调度，而复杂的two-loop recursion运算在PS上运行，<strong>梯度的Aggregate和模型的同步是executor和PS之间进行，所有运算都变成分布式</strong>。在网络传输中，高维度的PSVector会被切成小的数据块再发送到目标节点，<strong>这种节点之间多对多的传输大大提高了梯度聚合和模型同步的速度</strong>。</p>
<p>这样Spark on Angel完全避开了Spark中driver单点的瓶颈，以及网络传输高维度向量的问题。</p>
<p>Spark on Angel的出现可以高效、低成本地克服Spark在机器学习领域遇到的瓶颈；我们将继续优化Spark on Angel，并提高其性能。也欢迎大家在Github上一起参与我们的改进。</p>
<p>Angel项目Github：<a href="https://github.com/Tencent/angel" target="_blank" rel="noopener noreferrer">Angel<ExternalLinkIcon/></a>，喜欢的话到Github上给我们Star。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzA3MDY0NTMxOQ==&amp;mid=2247484273&amp;idx=1&amp;sn=830eee29f7078dd85d6b3156a2880acd&amp;chksm=9f38e059a84f694f99480c6e831d788187d1943704ca69f881721bf40dbf9745c8701902c4db&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">请别再问我Spark的MLlib和ML库的区别<ExternalLinkIcon/></a></li>
</ul>
<p>“机器学习库（MLlib）指南”参考了此资料</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzA3MDY0NTMxOQ==&amp;mid=2247484273&amp;idx=1&amp;sn=830eee29f7078dd85d6b3156a2880acd&amp;chksm=9f38e059a84f694f99480c6e831d788187d1943704ca69f881721bf40dbf9745c8701902c4db&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">请别再问我Spark的MLlib和ML库的区别<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;MLlib和ML库的区别&quot;参考了此资料</p>
<ul>
<li><a href="https://www.zybuluo.com/nataliecai1988/note/855008" target="_blank" rel="noopener noreferrer">Spark on Angel：Spark机器学习的核心加速器<ExternalLinkIcon/></a></li>
</ul>
<p>“基于RDD的MLlib的缺陷”参考了此资料</p>
</div></template>


