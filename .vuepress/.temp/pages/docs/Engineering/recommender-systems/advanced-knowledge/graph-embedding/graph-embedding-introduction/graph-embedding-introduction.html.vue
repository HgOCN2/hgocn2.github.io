<template><div><h1 id="图表征概述" tabindex="-1"><a class="header-anchor" href="#图表征概述" aria-hidden="true">#</a> 图表征概述</h1>
<ul>
<li><RouterLink to="/docs/Engineering/recommender-systems/advanced-knowledge/advanced-knowledge.html">返回上层目录</RouterLink></li>
<li><a href="#Network-Embedding%E6%A6%82%E8%BF%B0">Network-Embedding概述</a></li>
<li><a href="#Embedding%E6%96%B9%E6%B3%95%E7%9A%84%E5%AD%A6%E4%B9%A0%E8%B7%AF%E5%BE%84">Embedding方法的学习路径</a>
<ul>
<li><a href="#word2vec%E5%9F%BA%E7%A1%80">word2vec基础</a></li>
<li><a href="#word2vec%E7%9A%84%E8%A1%8D%E7%94%9F%E5%8F%8A%E5%BA%94%E7%94%A8">word2vec的衍生及应用</a></li>
<li><a href="#Graph-Embedding">Graph-Embedding</a></li>
</ul>
</li>
</ul>
<h1 id="network-embedding概述" tabindex="-1"><a class="header-anchor" href="#network-embedding概述" aria-hidden="true">#</a> Network-Embedding概述</h1>
<p>什么时候更新graph embedding的文章啊，最近在做这一块，很期待
还是找几篇论文看看吧 deepwalk note2vec line 都不难实现</p>
<p><a href="https://zhuanlan.zhihu.com/p/64200072" target="_blank" rel="noopener noreferrer">深度学习中不得不学的Graph Embedding方法<ExternalLinkIcon/></a></p>
<p><a href="https://www.jiqizhixin.com/articles/2018-08-14-10" target="_blank" rel="noopener noreferrer">网络表示学习综述：一文理解Network Embedding<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/ZhichaoDuan/article/details/79570051" target="_blank" rel="noopener noreferrer">关于Network embedding的一些笔记(内含数据集）<ExternalLinkIcon/></a></p>
<h1 id="embedding方法的学习路径" tabindex="-1"><a class="header-anchor" href="#embedding方法的学习路径" aria-hidden="true">#</a> Embedding方法的学习路径</h1>
<p>这篇文章来自<a href="https://zhuanlan.zhihu.com/wangzhenotes" target="_blank" rel="noopener noreferrer">王喆的机器学习笔记<ExternalLinkIcon/></a>中的<a href="https://zhuanlan.zhihu.com/p/58805184" target="_blank" rel="noopener noreferrer">《Embedding从入门到专家必读的十篇论文》<ExternalLinkIcon/></a>。</p>
<p>这里是**「王喆的机器学习笔记」<strong>的第十篇文章，今天我们不分析论文，而是总结一下</strong>Embedding方法的学习路径**，这也是我三四年前从接触word2vec，到在推荐系统中应用Embedding，再到现在逐渐从传统的sequence embedding过渡到graph embedding的过程，因此该论文列表在应用方面会对推荐系统、计算广告方面有所偏向。</p>
<h2 id="word2vec基础" tabindex="-1"><a class="header-anchor" href="#word2vec基础" aria-hidden="true">#</a> word2vec基础</h2>
<p><strong>1.</strong> [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BWord2Vec%255D%2520Efficient%2520Estimation%2520of%2520Word%2520Representations%2520in%2520Vector%2520Space%2520%2528Google%25202013%2529.pdf" target="_blank" rel="noopener noreferrer">Word2Vec] Efficient Estimation of Word Representations in Vector Space (Google 2013)<ExternalLinkIcon/></a></p>
<p>Google的Tomas Mikolov提出word2vec的两篇文章之一，这篇文章更具有综述性质，列举了NNLM、RNNLM等诸多词向量模型，但最重要的还是提出了CBOW和Skip-gram两种word2vec的模型结构。虽然词向量的研究早已有之，但不得不说还是Google的word2vec的提出让词向量重归主流，拉开了整个embedding技术发展的序幕。</p>
<p><strong>2</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BWord2Vec%255D%2520Distributed%2520Representations%2520of%2520Words%2520and%2520Phrases%2520and%2520their%2520Compositionality%2520%2528Google%25202013%2529.pdf" target="_blank" rel="noopener noreferrer">Word2Vec] Distributed Representations of Words and Phrases and their Compositionality (Google 2013)<ExternalLinkIcon/></a></p>
<p>Tomas Mikolov的另一篇word2vec奠基性的文章。相比上一篇的综述，本文更详细的阐述了Skip-gram模型的细节，包括模型的具体形式和 Hierarchical Softmax和 Negative Sampling两种可行的训练方法。</p>
<p><strong>3</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BWord2Vec%255D%2520Word2vec%2520Parameter%2520Learning%2520Explained%2520%2528UMich%25202016%2529.pdf" target="_blank" rel="noopener noreferrer">Word2Vec] Word2vec Parameter Learning Explained (UMich 2016)<ExternalLinkIcon/></a></p>
<p>虽然Mikolov的两篇代表作标志的word2vec的诞生，但其中忽略了大量技术细节，如果希望完全读懂word2vec的原理和实现方法，比如词向量具体如何抽取，具体的训练过程等，强烈建议大家阅读UMich Xin Rong博士的这篇针对word2vec的解释性文章。惋惜的是Xin Rong博士在完成这篇文章后的第二年就由于飞机事故逝世，在此也致敬并缅怀一下Xin Rong博士。</p>
<h2 id="word2vec的衍生及应用" tabindex="-1"><a class="header-anchor" href="#word2vec的衍生及应用" aria-hidden="true">#</a> word2vec的衍生及应用</h2>
<p><strong>4</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BItem2Vec%255D%2520Item2Vec-Neural%2520Item%2520Embedding%2520for%2520Collaborative%2520Filtering%2520%2528Microsoft%25202016%2529.pdf" target="_blank" rel="noopener noreferrer">Item2Vec] Item2Vec-Neural Item Embedding for Collaborative Filtering (Microsoft 2016)<ExternalLinkIcon/></a></p>
<p>这篇论文是微软将word2vec应用于推荐领域的一篇实用性很强的文章。该文的方法简单易用，可以说极大拓展了word2vec的应用范围，使其从NLP领域直接扩展到推荐、广告、搜索等任何可以生成sequence的领域。</p>
<p><strong>5</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BAirbnb%2520Embedding%255D%2520Real-time%2520Personalization%2520using%2520Embeddings%2520for%2520Search%2520Ranking%2520at%2520Airbnb%2520%2528Airbnb%25202018%2529.pdf" target="_blank" rel="noopener noreferrer">Airbnb Embedding] Real-time Personalization using Embeddings for Search Ranking at Airbnb (Airbnb 2018)<ExternalLinkIcon/></a></p>
<p>Airbnb的这篇论文是KDD 2018的best paper，在工程领域的影响力很大，也已经有很多人对其进行了解读。简单来说，Airbnb对其用户和房源进行embedding之后，将其应用于搜索推荐系统，获得了实效性和准确度的较大提升。文中的重点在于embedding方法与业务模式的结合，可以说是一篇应用word2vec思想于公司业务的典范。</p>
<h2 id="graph-embedding" tabindex="-1"><a class="header-anchor" href="#graph-embedding" aria-hidden="true">#</a> Graph-Embedding</h2>
<p>基于word2vec的一系列embedding方法主要是基于序列进行embedding，在当前商品、行为、用户等实体之间的关系越来越复杂化、网络化的趋势下，原有sequence embedding方法的表达能力受限，因此Graph Embedding方法的研究和应用成为了当前的趋势。</p>
<p><strong>6</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BGraph%2520Embedding%255D%2520DeepWalk-%2520Online%2520Learning%2520of%2520Social%2520Representations%2520%2528SBU%25202014%2529.pdf" target="_blank" rel="noopener noreferrer">DeepWalk] DeepWalk- Online Learning of Social Representations (SBU 2014)<ExternalLinkIcon/></a></p>
<p>以随机游走的方式从网络中生成序列，进而转换成传统word2vec的方法生成Embedding。这篇论文可以视为Graph Embedding的baseline方法，用极小的代价完成从word2vec到graph embedding的转换和工程尝试。</p>
<p><a href="https://zhuanlan.zhihu.com/p/59887204" target="_blank" rel="noopener noreferrer">Graph embedding: 从Word2vec到DeepWalk<ExternalLinkIcon/></a></p>
<p><strong>7</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BLINE%255D%2520LINE%2520-%2520Large-scale%2520Information%2520Network%2520Embedding%2520%2528MSRA%25202015%2529.pdf" target="_blank" rel="noopener noreferrer">LINE] LINE - Large-scale Information Network Embedding (MSRA 2015)<ExternalLinkIcon/></a></p>
<p>相比DeepWalk纯粹随机游走的序列生成方式，LINE可以应用于有向图、无向图以及边有权重的网络，并通过将一阶、二阶的邻近关系引入目标函数，能够使最终学出的node embedding的分布更为均衡平滑，避免DeepWalk容易使node embedding聚集的情况发生。</p>
<p><strong>8</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BNode2vec%255D%2520Node2vec%2520-%2520Scalable%2520Feature%2520Learning%2520for%2520Networks%2520%2528Stanford%25202016%2529.pdf" target="_blank" rel="noopener noreferrer">Node2vec] Node2vec - Scalable Feature Learning for Networks (Stanford 2016)<ExternalLinkIcon/></a></p>
<p>node2vec这篇文章还是对DeepWalk随机游走方式的改进。为了使最终的embedding结果能够表达网络局部周边结构和整体结构，其游走方式结合了深度优先搜索和广度优先搜索。</p>
<p><strong>9</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BSDNE%255D%2520Structural%2520Deep%2520Network%2520Embedding%2520%2528THU%25202016%2529.pdf" target="_blank" rel="noopener noreferrer">SDNE] Structural Deep Network Embedding (THU 2016)<ExternalLinkIcon/></a></p>
<p>相比于node2vec对游走方式的改进，SDNE模型主要从目标函数的设计上解决embedding网络的局部结构和全局结构的问题。而相比LINE分开学习局部结构和全局结构的做法，SDNE一次性的进行了整体的优化，更有利于获取整体最优的embedding。</p>
<p><strong>10</strong>. [<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/blob/master/Embedding/%255BAlibaba%2520Embedding%255D%2520Billion-scale%2520Commodity%2520Embedding%2520for%2520E-commerce%2520Recommendation%2520in%2520Alibaba%2520%2528Alibaba%25202018%2529.pdf" target="_blank" rel="noopener noreferrer">Alibaba Embedding] Billion-scale Commodity Embedding for E-commerce Recommendation in Alibaba (Alibaba 2018)<ExternalLinkIcon/></a></p>
<p>阿里巴巴在KDD 2018上发表的这篇论文是对Graph Embedding非常成功的应用。从中可以非常明显的看出从一个原型模型出发，在实践中逐渐改造，最终实现其工程目标的过程。这个原型模型就是上面提到的DeepWalk，阿里通过引入side information解决embedding问题非常棘手的冷启动问题，并针对不同side information进行了进一步的改造形成了最终的解决方案EGES（Enhanced Graph Embedding with Side Information）。</p>
<p>注：由于上面十篇论文都是我之前整理的paper list里面的内容，所以没有再引用原文链接，希望大家见谅。想偷懒的同学也可以star或者fork我的github paper list：<a href="https://link.zhihu.com/?target=https%3A//github.com/wzhe06/Reco-papers/tree/master/Embedding" target="_blank" rel="noopener noreferrer">wzhe06/Reco-papers<ExternalLinkIcon/></a></p>
<p>这里是**「王喆的机器学习笔记」 ，**关于Embedding的这十篇论文包括了从基础理论、模型改造与进阶、模型应用等几个方面的内容，还是比较全面的，希望能帮助你成为相关方向的专家。但一个人的视野毕竟有局限性，希望大家能够反馈给我其他embedding相关的著名文章，我可以进行补充和替换。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/58805184" target="_blank" rel="noopener noreferrer">Embedding从入门到专家必读的十篇论文-知乎王喆<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Embedding方法的学习路径&quot;一节参考了此知乎专栏文章。</p>
</div></template>


