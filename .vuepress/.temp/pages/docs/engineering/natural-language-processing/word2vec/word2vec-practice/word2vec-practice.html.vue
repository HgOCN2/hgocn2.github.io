<template><div><h1 id="word2vector实践" tabindex="-1"><a class="header-anchor" href="#word2vector实践" aria-hidden="true">#</a> word2vector实践</h1>
<ul>
<li><RouterLink to="/docs/engineering/natural-language-processing/word2vec/word2vec.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="原版word2vec实践" tabindex="-1"><a class="header-anchor" href="#原版word2vec实践" aria-hidden="true">#</a> 原版word2vec实践</h1>
<p>官方使用说明：<a href="https://code.google.com/archive/p/word2vec/" target="_blank" rel="noopener noreferrer">word2vec<ExternalLinkIcon/></a>，这个并没有实践过，只是放在这里，下面是经过实践检验的：</p>
<p>下面的介绍仅仅适用于linux系统，windows其实也差不多，只是不能用sh语言了，需要自己去手动编译和运行程序或者自己写bat语言。</p>
<h2 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h2>
<p>github:<a href="https://github.com/dav/word2vec" target="_blank" rel="noopener noreferrer">dav/word2vec<ExternalLinkIcon/></a></p>
<h2 id="下载训练数据" tabindex="-1"><a class="header-anchor" href="#下载训练数据" aria-hidden="true">#</a> 下载训练数据</h2>
<p>下载训练数据：<a href="http://mattmahoney.net/dc/text8.zip" target="_blank" rel="noopener noreferrer">text8.zip<ExternalLinkIcon/></a>，用<code v-pre>unzip text8.zip</code>将其解压缩到<code v-pre>\data</code>文件夹中，文件名为text8，这个解压后的文件text8就是模型训练需要的数据了。</p>
<p>其实在sh文件中会自动下载text8，但是还是自己先下载下来吧。</p>
<h2 id="开始训练模型" tabindex="-1"><a class="header-anchor" href="#开始训练模型" aria-hidden="true">#</a> 开始训练模型</h2>
<p>（1）由c源码生成可执行文件</p>
<p>两种方法：</p>
<p>第一种方法：进入word2vec的根目录，然后命令行运行<code v-pre>make build</code>把<code v-pre>\src</code>文件夹中的c文件编译为可执行文件放到<code v-pre>\bin</code>文件夹中。</p>
<p>第二种方法：进入word2vec\src目录，然后命令行运行<code v-pre>make</code>把<code v-pre>\src</code>文件夹中的c文件编译为可执行文件放到<code v-pre>\bin</code>文件夹中。</p>
<p>（2）运行可执行文件开始训练模型</p>
<p>进入根目录下的<code v-pre>\scripts</code>文件夹，然后运行sh文件demo-classes.sh：<code v-pre>sh demo-classes.sh</code>，等待程序运行完毕（可能需要五分钟到一个小时之间，看机器性能）。</p>
<h2 id="得到结果文件" tabindex="-1"><a class="header-anchor" href="#得到结果文件" aria-hidden="true">#</a> 得到结果文件</h2>
<p>等训练结束后，会在<code v-pre>\data</code>文件夹中生成两个文件：classes.txt和classes.sorted.txt，其中classes.txt就是我们需要的文件。打开就能看到每个单词训练的embedding向量了。</p>
<h2 id="查看topn相似度" tabindex="-1"><a class="header-anchor" href="#查看topn相似度" aria-hidden="true">#</a> 查看TopN相似度</h2>
<p>进入根目录下的<code v-pre>\scripts</code>文件夹，然后运行sh文件demo-word.sh：<code v-pre>sh demo-word.sh</code>，然后按照提示输入单词，查看与其相近的前40个词及相似程度。</p>
<p>相似程度的代码是distance.c，很简单，有个博客有对这个代码的注释：<a href="https://blog.csdn.net/a785143175/article/details/23771625" target="_blank" rel="noopener noreferrer">Word2Vec代码注解-distance<ExternalLinkIcon/></a></p>
<h1 id="embedding的可视化" tabindex="-1"><a class="header-anchor" href="#embedding的可视化" aria-hidden="true">#</a> embedding的可视化</h1>
<p>##TSNE降维</p>
<p>Embedding最酷的一个地方在于它们可以用来可视化出表示的数据的相关性，当然要我们能够观察，需要通过降维技术来达到2维或3维。最流行的降维技术是：t-Distributed Stochastic Neighbor Embedding (TSNE)。</p>
<p>我们可以定义维基百科上所有书籍为原始37000维（one-hot编码），使用neural network embedding将它们映射到50维，然后使用TSNE将它们映射到2维，其结果如下：</p>
<p><img src="@source/docs/engineering/natural-language-processing/word2vec/word2vec-practice/pic/embedding-37000-books.jpg" alt="embedding-37000-books"></p>
<p>这样看好像并不能看出什么，但是如果我们根据不同书籍的特征着色，我们将可以很明显的看出结果。</p>
<p>我们可以清楚地看到属于同一类型的书籍的分组。虽然它并不完美，但惊奇的是，我们只用2个数字就代表维基百科上的所有书籍，而在这些数字中仍能捕捉到不同类型之间的差异。这代表着embedding的价值。</p>
<p><img src="@source/docs/engineering/natural-language-processing/word2vec/word2vec-practice/pic/embedding-37000-books-with-color.jpg" alt="embedding-37000-books-with-color"></p>
<h2 id="tensorflow-projector" tabindex="-1"><a class="header-anchor" href="#tensorflow-projector" aria-hidden="true">#</a> TensorFlow-projector</h2>
<p>静态图的问题在于我们无法真正探索数据并调查变量之间的分组或关系。 为了解决这个问题，TensorFlow开发了 <a href="https://projector.tensorflow.org/" target="_blank" rel="noopener noreferrer">projector<ExternalLinkIcon/></a>，这是一个在线应用程序，可以让我们可视化并与embedding交互。 结果如下：</p>
<p><img src="@source/docs/engineering/natural-language-processing/word2vec/word2vec-practice/pic/embedding-37000-books-using-pojector.gif" alt="embedding-37000-books-using-pojector"></p>
<p>Embedding的基本内容如前面介绍所示，然而我想说的是它的价值并不仅仅在于word embedding或者entity embedding，这种将类别数据用低维表示且可自学习的思想更存在价值。通过这种方式，我们可以将神经网络，深度学习用于更广泛的领域，Embedding可以表示更多的东西，而这其中的关键在于要想清楚我们需要解决的问题和应用Embedding表示我们得到的是什么。</p>
<h2 id="google-tensorboard" tabindex="-1"><a class="header-anchor" href="#google-tensorboard" aria-hidden="true">#</a> google-tensorboard</h2>
<p>词的分布，推荐用google的<a href="https://www.tensorflow.org/tensorboard/r1/summaries" target="_blank" rel="noopener noreferrer">tensorboard<ExternalLinkIcon/></a>，可以多视角查看，如果不想搭建服务，直接访问<a href="http://projector.tensorflow.org/" target="_blank" rel="noopener noreferrer">TensorFlow-projector<ExternalLinkIcon/></a>。另外可以用python的matplotlib。</p>
<h1 id="word2vec的参数选择" tabindex="-1"><a class="header-anchor" href="#word2vec的参数选择" aria-hidden="true">#</a> word2vec的参数选择</h1>
<p><a href="https://blog.csdn.net/xiaojiayudst/article/details/84668729" target="_blank" rel="noopener noreferrer">word2vec你可能不知道的秘密<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/zwwhsxq/article/details/77200129" target="_blank" rel="noopener noreferrer">使用word2vec（C语言版本）训练中文语料 并且将得到的vector.bin文件转换成txt文件<ExternalLinkIcon/></a></li>
<li><a href="https://kexue.fm/usr/uploads/2017/04/146269300.pdf" target="_blank" rel="noopener noreferrer">Deep Learning 实战之 word2vec<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/bitcarmanlee/article/details/51182420" target="_blank" rel="noopener noreferrer">word2vec 入门教程<ExternalLinkIcon/></a></li>
<li><a href="https://code.google.com/archive/p/word2vec/" target="_blank" rel="noopener noreferrer">word2vec-google code<ExternalLinkIcon/></a></li>
</ul>
<p>“原版word2vec实践”参考了上述资料。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/46016518" target="_blank" rel="noopener noreferrer">Embedding 的理解<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/29364112" target="_blank" rel="noopener noreferrer">关于word2vec，我有话要说<ExternalLinkIcon/></a></li>
</ul>
<p>“embedding的可视化”参考了该知乎专栏文章。</p>
</div></template>


