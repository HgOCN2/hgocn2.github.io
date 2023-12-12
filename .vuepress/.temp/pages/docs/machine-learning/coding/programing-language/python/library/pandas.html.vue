<template><div><h1 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> pandas</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/programing-language/python/library/python.html#python">返回上层目录</RouterLink></li>
<li><a href="#pandas%E7%AE%80%E4%BB%8B">pandas简介</a></li>
</ul>
<h1 id="pandas简介" tabindex="-1"><a class="header-anchor" href="#pandas简介" aria-hidden="true">#</a> pandas简介</h1>
<p>Pandas(PythoN Data Analysis Library)在NumPy基础上提供了更多的数据读写工具，是python的数据分析库，二维表格数据封装，读取二维表格DataFrame（封装了ndarray），读文件，依赖于Numpy。</p>
<p>pandas处理数据能力比excel强，10G以内都可以用pandas处理，超过后有可能用spark处理。</p>
<p>推荐一本书，是pandas的作者写的，<a href="https://book.douban.com/subject/25779298/" target="_blank" rel="noopener noreferrer">利用Python进行数据分析 (豆瓣)<ExternalLinkIcon/></a>。pandas主要基于numpy.ndarray构造了更高级的Series和DataFrame数据结构。这本书主要就是说明基于这两种数据结构的API用法。这些API主要是对原本numpy操作的补充。行列Index在DataFrame的加强对于各种数据逻辑操作帮助比较大。对pyplot的绘图函数也和两种数据结构绑定的很好。越来越多的数据分析特别是探索式的分析都会转到Python和R这块来，高性能的部分还是会用c扩展来实现。</p>
<p><strong>官网</strong>：http://pandas.pydata.org/</p>
<p><strong>简单介绍</strong></p>
<p>Pandas是基于NumPy 的一种工具，该工具是为了解决数据分析任务而创建的。Pandas 纳入了大量库和一些标准的数据模型，提供了高效地操作大型数据集所需的工具。最具有统计意味的工具包，某些方面优于R软件。数据结构有一维的Series，二维的DataFrame(类似于Excel或者SQL中的表，如果深入学习，会发现Pandas和SQL相似的地方很多，例如merge函数)，三维的Panel（Pan（el) + da(ta) + s，知道名字的由来了吧）。学习Pandas你要掌握的是：</p>
<ol>
<li>汇总和计算描述统计，处理缺失数据 ，层次化索引</li>
<li>清理、转换、合并、重塑、GroupBy技术</li>
<li>日期和时间数据类型及工具（日期处理方便地飞起）</li>
</ol>
<p>快速入门：<a href="http://pandas.pydata.org/pandas-docs/stable/10min.html" target="_blank" rel="noopener noreferrer">10 Minutes to pandas<ExternalLinkIcon/></a>。这块内容推荐这个文档，在pandas官网上。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/37180159" target="_blank" rel="noopener noreferrer">如何系统地学习Python 中 matplotlib, numpy, scipy, pandas？<ExternalLinkIcon/></a></li>
</ul>
<p>pandas简介中的简单介绍就是复制的这里。</p>
</div></template>


