<template><div><h1 id="自然语言处理概论" tabindex="-1"><a class="header-anchor" href="#自然语言处理概论" aria-hidden="true">#</a> 自然语言处理概论</h1>
<ul>
<li><RouterLink to="/docs/engineering/natural-language-processing/natural-language-processing.html">返回上层目录</RouterLink></li>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86">什么是自然语言处理</a></li>
<li><a href="#%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86%E7%9A%84%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BA%94%E7%94%A8">自然语言处理的核心技术与应用</a></li>
<li><a href="#%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%9A%84%E4%B8%80%E4%BA%9B%E9%87%8D%E8%A6%81%E6%9C%AF%E8%AF%AD">自然语言的一些重要术语</a></li>
<li><a href="#%E8%AF%AD%E8%A8%80%E5%AD%A6%E7%9A%84%E5%8F%91%E5%B1%95%E5%8F%B2">语言学的发展史</a>
<ul>
<li><a href="#%E9%80%BB%E8%BE%91">逻辑</a></li>
<li><a href="#%E5%91%BD%E9%A2%98%E9%80%BB%E8%BE%91">命题逻辑</a></li>
<li><a href="#%E9%80%9A%E7%94%A8%E8%83%BD%E5%8A%9B">通用能力</a></li>
<li><a href="#%E5%85%B8%E5%9E%8B%E4%BB%A3%E8%A1%A8">典型代表</a></li>
<li><a href="#%E6%A8%A1%E7%B3%8A%E9%80%BB%E8%BE%91">模糊逻辑</a></li>
<li><a href="#%E8%AF%8D%E7%9A%84%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%80%A7">词的不确定性</a></li>
<li><a href="#%E7%A8%80%E7%96%8F%E6%95%B0%E6%8D%AE">稀疏数据</a></li>
<li><a href="#%E5%90%8C%E6%84%8F%E4%B8%8D%E5%90%8C%E5%BD%A2">同意不同形</a></li>
</ul>
</li>
<li><a href="#NLP%E7%9A%84%E5%8F%91%E5%B1%95">NLP的发展</a></li>
<li><a href="#%E6%8E%A8%E8%8D%90%E4%B9%A6%E7%B1%8D">推荐书籍</a></li>
</ul>
<h1 id="什么是自然语言处理" tabindex="-1"><a class="header-anchor" href="#什么是自然语言处理" aria-hidden="true">#</a> 什么是自然语言处理</h1>
<p>为了和计算机语言（如C语言，Python语言）区别，我们对于人类的语言称之为自然语言。</p>
<p>自然语言处理是AI最重要的一个分支。目前自然语言处理主要依赖于机器学习技术。</p>
<h1 id="自然语言处理的核心技术与应用" tabindex="-1"><a class="header-anchor" href="#自然语言处理的核心技术与应用" aria-hidden="true">#</a> 自然语言处理的核心技术与应用</h1>
<p>自然语言处理的核心技术：</p>
<ul>
<li>语言建模</li>
<li>文本切分</li>
<li>词性标注</li>
<li>句法解析</li>
<li>名字识别</li>
<li>词意区分</li>
<li>语义角色标注</li>
</ul>
<p>自然语言处理应用：</p>
<ul>
<li>垃圾分类</li>
<li>机器翻译</li>
<li>信息检索</li>
<li>问答系统</li>
<li>对话系统</li>
<li>信息抽取</li>
<li>段落总结</li>
<li>情感分析</li>
<li>实体（地点人名时间）识别</li>
</ul>
<h1 id="自然语言的一些重要术语" tabindex="-1"><a class="header-anchor" href="#自然语言的一些重要术语" aria-hidden="true">#</a> 自然语言的一些重要术语</h1>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/morphology-and-segmentation.png" alt="words"></p>
<p>句法分析和语义：</p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/syntax-parse.png" alt="syntax-parse"></p>
<p>语义：</p>
<p>用逻辑来表示语义</p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/semantics.png" alt="semantics"></p>
<h1 id="语言学的发展史" tabindex="-1"><a class="header-anchor" href="#语言学的发展史" aria-hidden="true">#</a> 语言学的发展史</h1>
<h2 id="逻辑" tabindex="-1"><a class="header-anchor" href="#逻辑" aria-hidden="true">#</a> 逻辑</h2>
<p>著名的三段论：</p>
<blockquote>
<p>1、所有人都会死</p>
<p>2、苏格拉底是人</p>
<p>3、所以苏格拉底会死</p>
</blockquote>
<p>莱布尼兹的定律</p>
<blockquote>
<p>1、a=a</p>
<p>2、a=b, and b=c, then a=c</p>
<p>3、a=not(not a)</p>
<p>4、a is b equals not-b not-a</p>
</blockquote>
<p>语言的推理都是基于符号的系统的，这也是早期人工智能的基础。</p>
<p>是否可以把所有数学建立于简单的逻辑之上？</p>
<p>18世纪希望用集合论作为基础来描述数学。但是根据罗素悖论不行。</p>
<p>罗素悖论：村里的理发师宣称：我只给村里不给自己理发的人理发。这句话是有问题的，对于理发师自己，他如果给自己理发，那他就违反了他说的话，如果他不给自己理发，那他就应该给自己理发，但是这样他又给自己理发了，但是也违反了他说的话。</p>
<p>罗素悖论描述的是。自己索引自己是集合论里边的重大缺点。</p>
<p>维特斯坦：语言只是语言游戏，语言是大脑中某个模型的表述。语言会刺激大脑中图形的出现，我们使用语言时，只是在交换这些图形。我看见了一个图形，我告诉你后，你的大脑中应当也会出现一个图形。</p>
<h2 id="命题逻辑" tabindex="-1"><a class="header-anchor" href="#命题逻辑" aria-hidden="true">#</a> 命题逻辑</h2>
<p>Chomsky在1950s年代写了一本书叫《句法结构》（Syntactic Structures），第一次以数学的方式理解语言。他认为人类之所以能理解语言，是大脑有对应的不同语言结构。比如像猩猩就不能理解人类语言，所以我们必须要把人类的语言结构再造出来才能人工智能来理解人类语言。</p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/Syntactic-Structures.png" alt="Syntactic-Structures"></p>
<p>但目前我们并没有这样做，只是讲复杂的人类任务映射成函数关系，通过找概率最大的结果来逼近。</p>
<h2 id="通用能力" tabindex="-1"><a class="header-anchor" href="#通用能力" aria-hidden="true">#</a> 通用能力</h2>
<p>人类学习了简单的句子之后，就可以再造出来自己的句子，这就是说人类有一个通用的语言结构。</p>
<h2 id="典型代表" tabindex="-1"><a class="header-anchor" href="#典型代表" aria-hidden="true">#</a> 典型代表</h2>
<p>看见这句话：我今天看见树上有一只鸟。脑子中就会想到一只小鸟，而不是鸵鸟，企鹅。这就是集合的典型代表，类似的，我们会取集合中的平均值来代表这个集合。</p>
<h2 id="模糊逻辑" tabindex="-1"><a class="header-anchor" href="#模糊逻辑" aria-hidden="true">#</a> 模糊逻辑</h2>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/fuzzy-set-theory.png" alt="fuzzy-set-theory"></p>
<p>冷热，好坏，多少等这些形容词可以用模糊逻辑去衡量。</p>
<h2 id="词的不确定性" tabindex="-1"><a class="header-anchor" href="#词的不确定性" aria-hidden="true">#</a> 词的不确定性</h2>
<p>词的不确定性有很多层次：</p>
<ul>
<li>词意：苹果（电脑，手机还是水果？）</li>
<li>词性标注：host（主人、主持）</li>
<li>句法结构：I saw a man with a telescope(who has the telescope?)</li>
<li>指用：Join dropped the goblet onto the glass table and it broke.(which broke?奖杯还是玻璃桌子)</li>
</ul>
<p>于是处理方法从逻辑上的真理变成了概率模型。</p>
<h2 id="稀疏数据" tabindex="-1"><a class="header-anchor" href="#稀疏数据" aria-hidden="true">#</a> 稀疏数据</h2>
<p>有用的数据并没有那么多。</p>
<p>比如单词以E开头的最多：</p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/sparse-data.png" alt="sparse-data"></p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/zipf's-law.png" alt="zipf's-law"></p>
<p><img src="@source/docs/engineering/natural-language-processing/natural-language-processing-introduction/pic/zipf's-law1.png" alt="zipf's-law1"></p>
<h2 id="同意不同形" tabindex="-1"><a class="header-anchor" href="#同意不同形" aria-hidden="true">#</a> 同意不同形</h2>
<ul>
<li>这个老师上课非常好，得到了同学们的肯定</li>
<li>给这个老师的课点赞，疯狂打call</li>
<li>好课，6666666666</li>
</ul>
<p>She gave the book to Tom vs. She gave Tom the book</p>
<p>Some kids popped by vs. A few children visited</p>
<p>Is that window still open? vs. Please close the window</p>
<h1 id="nlp的发展" tabindex="-1"><a class="header-anchor" href="#nlp的发展" aria-hidden="true">#</a> NLP的发展</h1>
<p>我们抽取了三篇论文讲述词向量的发展，一脉相承，从经典到前沿。</p>
<p><strong>经典篇：《Efficient Estimation of Word Representations in Vector Space》</strong></p>
<p>word2vec是将词汇向量化，这样我们就可以进行定量的分析，分析词与词之间的关系，这是one-hot encoding做不到的。Google的Tomas Mikolov 在2013年发表的这篇论文给自然语言处理领域带来了新的巨大变革，提出的两个模型CBOW (Continuous Bag-of-Words Model)和Skip-gram (Continuous Skip-gram Model)，创造性的用预测的方式解决自然语言处理的问题，而不是传统的词频的方法。<strong>奠定了后续NLP处理的基石</strong>。并将NLP的研究热度推升到了一个新的高度。</p>
<p><strong>经典篇：《Neural Machine Translation by Jointly Learning to Align and Translate》</strong></p>
<p>Attention机制最初由图像处理领域提出，后来被引入到NLP领域用于解决机器翻译的问题，使得机器翻译的效果得到了显著的提升。attention是近几年NLP领域最重要的亮点之一，后续的Transformer和Bert都是基于attention机制。</p>
<p><strong>经典篇：《Transformer: attention is all you need》</strong></p>
<p>这是谷歌与多伦多大学等高校合作发表的论文，提出了一种新的网络框架Transformer，是一种新的编码解码器，与LSTM地位相当。</p>
<p>Transformer是完全基于注意力机制（attention mechanism)的网络框架，使得机器翻译的效果进一步提升，为Bert的提出奠定了基础。该论文2017年发表后引用已经达到1280，GitHub上面第三方复现的star2300余次。可以说是<strong>近年NLP界最有影响力的工作，NLP研究人员必看！</strong></p>
<h1 id="推荐书籍" tabindex="-1"><a class="header-anchor" href="#推荐书籍" aria-hidden="true">#</a> 推荐书籍</h1>
<p>这两本书是自然语言处理中比较重要的两本教科书。</p>
<ul>
<li><em>Foundations of Statistical Natural Language Processing</em> by Christopher D. Manning and Hinricn Schutze</li>
<li><em>Speech and Language Processing</em> by Daniel Jurafsky &amp; James H. Martin</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.chinahadoop.cn/course/1344/learn#lesson/34213" target="_blank" rel="noopener noreferrer">01第一课：自然语言与数学之美 秦曾昌 小象学院<ExternalLinkIcon/></a></li>
</ul>
<p>本文来自改视频课程。</p>
</div></template>


