<template><div><h1 id="word2vec算法原理" tabindex="-1"><a class="header-anchor" href="#word2vec算法原理" aria-hidden="true">#</a> word2vec算法原理</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/natural-language-processing/word2vec/word2vec.html">返回上层目录</RouterLink></li>
</ul>
<p>http://suhui.github.io/word2vec</p>
<p>http://pskun.github.io/machine%20learning/word2vec-source-code-analysis.html</p>
<p>https://zhuanlan.zhihu.com/p/40557458</p>
<p>https://zhuanlan.zhihu.com/p/40558913</p>
<p>http://jacoxu.com/word2vector/</p>
<p>https://blog.csdn.net/lingerlanlan/article/details/38232755</p>
<p>https://blog.csdn.net/mpk_no1/article/details/72458003</p>
<p>https://blog.csdn.net/leiting_imecas/article/details/72303044</p>
<p>https://blog.csdn.net/google19890102/article/details/51887344</p>
<p>https://blog.csdn.net/jingquanliang/article/details/82886645</p>
<p>https://www.processon.com/diagraming/5c3f5691e4b08a7683aa7ac5</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<h1 id="预备知识" tabindex="-1"><a class="header-anchor" href="#预备知识" aria-hidden="true">#</a> 预备知识</h1>
<h2 id="sigmoi函数" tabindex="-1"><a class="header-anchor" href="#sigmoi函数" aria-hidden="true">#</a> sigmoi函数</h2>
<h2 id="逻辑回归" tabindex="-1"><a class="header-anchor" href="#逻辑回归" aria-hidden="true">#</a> 逻辑回归</h2>
<h2 id="bayer公式" tabindex="-1"><a class="header-anchor" href="#bayer公式" aria-hidden="true">#</a> bayer公式</h2>
<h2 id="huffman编码" tabindex="-1"><a class="header-anchor" href="#huffman编码" aria-hidden="true">#</a> Huffman编码</h2>
<p>本节简单介绍Huffman编码，为此，首先介绍Huffman树的定义及其构造算法：</p>
<h3 id="huffman树" tabindex="-1"><a class="header-anchor" href="#huffman树" aria-hidden="true">#</a> Huffman树</h3>
<p>在计算机科学中，<strong>树</strong>是一种重要的非线性数据结构，它是数据元素（在树中称为<strong>结点</strong>）按分之关系组织起来的结构。若干棵互补交互的树所构成的集合称为森林。下面给出几个与树相关的常用概念。</p>
<ul>
<li>
<p>路径和路径长度</p>
<p>在一棵树中，从一个节点往下可以到达的孩子或者孙子节点之间的道路，称为<strong>路径</strong>。通路中分支的数目称为路径长度。若规定根节点的层号为1，则从根结点到第L层的结点的路径长度为L-1。</p>
</li>
<li>
<p>结点的权和带权路径长度</p>
<p>若为树中结点赋予一个具有某种含义的（非负）数值，则这个数值称为该结点的权。结点的带权路径长度是指，从根结点到该结点之间的路径长度与该结点的权的乘积。</p>
</li>
<li>
<p>树的带权路径长度</p>
<p>树的带权路径长度规定为所有叶子结点的带权路径长度之和。</p>
</li>
</ul>
<p><strong>二叉树</strong>是每个结点最多有两个子树的有序树。两个子树通常被称为“左子树”和“右子树”，定义中的“有序”是指两个子树有左右之分，顺序不能颠倒。</p>
<p>给定n个权值作为n个叶子结点，构造一颗二叉树，若它的带权路径长度达到最小，则称这样的二叉树为最右二叉树，也称为Huffman树。</p>
<h3 id="huffman树的构造" tabindex="-1"><a class="header-anchor" href="#huffman树的构造" aria-hidden="true">#</a> Huffman树的构造</h3>
<p>给定n个权值{w1, w2,  ... , wn}作为二叉树的n个叶子结点，可通过以下算法来构造一颗Huffman树。</p>
<blockquote>
<p><strong>Huffman树构造算法</strong></p>
<p>（1）将{w1, w2,  ... , wn}看成是有n棵树的森林（每棵树仅有一个结点）。</p>
<p>（2）在森林中选出两个根结点的权值最小的树合并，作为一棵新树的左、右子树，且新树的根结点权值为其左、右子树结点权值之和。</p>
<p>（3）从森林中删除选取的两棵树，并将新树加入森林。</p>
<p>（4）重复（2）（3）步，直到森林中只剩下一棵树为止，该树即为所求的Huffman树。</p>
</blockquote>
<p>接下来，给出上述算法的一个具体实例。</p>
<p>例：假设2018世界杯期间，从新浪微博中住去了若干条鱼足球相关的微博，经统计，“我”、“喜欢”、“观看”、“巴西”、“足球”、“世界杯”这六个词出现的次数分别为15、8、6、5、3、1。请以这六个词为叶子结点，以相应词频当权值，构造一颗Huffman树。</p>
<p>下图为Huffman树的构造过程：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-algorithm-principle/pic/Huffman-tree-construction-process.png" alt="Huffman-tree-construction process"></p>
<p>利用上述的Huffman树构造算法，易知其构造过程如上图所示。图中第六步给出了做中的Huffman树，由图可见词频越大的词离根结点越近。</p>
<p>构造过程中，痛殴合并新增的结点被标记为黄色。由于每两个结点都要进行一次合并，因此，<strong>若叶子结点的个数为n，则构造的Huffman树中新增结点的个数为n-1</strong>，本例中n=6，因此新增结点的个数为5。</p>
<p>注意，前面有提到，二叉树的两个子树是分左右的，对于某个非叶子结点来说，就是其两个孩子结点是分左右的，在本例中，统一将词频大的结点作为左孩子结点，词频小的作为右孩子结点。当然，这只是一个约定，你要将词频大的结点作为右孩子结点也没有问题。</p>
<h3 id="huffman编码-1" tabindex="-1"><a class="header-anchor" href="#huffman编码-1" aria-hidden="true">#</a> Huffman编码</h3>
<p>在数据通信中，需要将传送的文字转换成二进制的字符串，用0、1码的不同排列来表示字符。例如，需传送的报文为“AFTER DATA EAR ARE ART AREA”，这里用到的字符集为“A, E, R, T, F, D”，各字母出现的次数为8, 4, 5, 3, 1, 1。现要求为这些字母设计编码。</p>
<p>要区分6个字母，最简单的二进制编码方式是<strong>等长编码</strong>，固定采用3位二进制（2^3=8&gt;6），可分别用000、001、010、011、100、101对“A, E, R, T, F, D”进行编码发送，当对方接受报文时再按照三位分一进行译码。</p>
<p>显然你编码的长度取决豹纹那种不同字符的个数。若报文中可能出现26个不同字符，则固定编码长度为5（2^5=32&gt;26）。然而，传送报文时总是希望总长度尽可能短。在实际应用中，各个字符的出现频度或使用次数是不相同的，如A、B、C的使用频率远远高于X、Y、Z，自然会想到设计编码时，让使用频率高的用短码，使用频率低的用长码，以优化整个报文方案。</p>
<p>为使<strong>不等长编码</strong>为<strong>前缀编码</strong>（即要求一个字符的编码不能是另一个字符编码的前缀），可用字符集中的每个字符作为叶子结点生成一颗编码二叉树，为了获得传送报文的最短长度，可将每个字符的出现频率作为字符结点的权值赋予该结点上，显然字使用频率越小权值越小，权值越小叶子就越靠下，于是<strong>频率小编码长，频率高编码短</strong>，这样就<strong>保证了此树的最小带权路径长度</strong>，效果上就是传送报文的最短长度。因此，求传送报文的最短长度问题转化为求由字符集中的所有字符作为叶子结点，由字符出现频率作为其权值所产生的huffman树的问题。利用Huffman树设计的二进制前缀编码，称为<strong>Huffman编码</strong>，它既能满足前缀编码的条件，又能保证报文编码总长最短。</p>
<p>本文将介绍的word2vector工具中也用到Huffman编码，<strong>它把训练预料中的词当成叶子结点，其在语料中出现的次数当作权值，通过构建相应的Huffman树来对每一个词进行Huffman编码</strong>。</p>
<p>下图给出了上例中的六个词的Huffman编码，其中约定（词频较大的）左孩子结点编码为1，（词频较小的）右孩子编码为0.这样一来，“我”、“喜欢”、“观看”、“巴西”、“足球”、“世界杯”这六个词的huffman编码分别为0、111、110、110、101、1001和1000。</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-algorithm-principle/pic/Huffman-code-example.png" alt="Huffman-code-example"></p>
<p>注意，到目前为至，关于Huffman树的Huffman编码，有两个约定：（1）将权值大的结点作为左孩子结点，权值小的作为右孩子结点；（2）左孩子结点编码为1，右孩子结点编码为0。<strong>在word2vec源码中将权值较大的孩子结点编码为1，较小的孩子结点编码为0</strong>。为与上述约定统一起见，<strong>下文中提到的“左孩子结点”都是指权值较大的孩子结点</strong>。</p>
<h1 id="背景知识" tabindex="-1"><a class="header-anchor" href="#背景知识" aria-hidden="true">#</a> 背景知识</h1>
<h2 id="统计语言模型" tabindex="-1"><a class="header-anchor" href="#统计语言模型" aria-hidden="true">#</a> 统计语言模型</h2>
<h2 id="n-gram模型" tabindex="-1"><a class="header-anchor" href="#n-gram模型" aria-hidden="true">#</a> n-gram模型</h2>
<h2 id="神经概率语言模型" tabindex="-1"><a class="header-anchor" href="#神经概率语言模型" aria-hidden="true">#</a> 神经概率语言模型</h2>
<h2 id="词向量的理解" tabindex="-1"><a class="header-anchor" href="#词向量的理解" aria-hidden="true">#</a> 词向量的理解</h2>
<h1 id="word2vec模型" tabindex="-1"><a class="header-anchor" href="#word2vec模型" aria-hidden="true">#</a> Word2Vec模型</h1>
<p>Word2vec是一种可以进行高效率词嵌套学习的预测模型。其有两种变体是现在比较常用的，分别为：连续词袋模型（CBOW）及Skip-Gram模型。从算法角度看，这两种方法非常相似，其区别为CBOW根据源词上下文词汇（'the cat sits on the'）来预测目标词汇（例如，‘mat'），而Skip-Gram模型做法相反，它通过目标词汇来预测源词汇。</p>
<p>Skip-Gram模型采取CBOW的逆过程的动机在于：CBOW算法对于很多分布式信息进行了平滑处理（例如将一整段上下文信息视为一个单一观察量）。很多情况下，对于小型的数据集，这一处理是有帮助的。相比之下，Skip-Gram模型将每个“上下文-目标词汇”的组合视为一个新观察量，这种做法在大型数据集中会更为有效。</p>
<p>下面详细说说两种模型：</p>
<h2 id="cbow模型" tabindex="-1"><a class="header-anchor" href="#cbow模型" aria-hidden="true">#</a> CBOW模型</h2>
<h2 id="skip-gram模型" tabindex="-1"><a class="header-anchor" href="#skip-gram模型" aria-hidden="true">#</a> Skip-Gram模型</h2>
<h1 id="输出层softmax加速策略" tabindex="-1"><a class="header-anchor" href="#输出层softmax加速策略" aria-hidden="true">#</a> 输出层softmax加速策略</h1>
<p>Bengio 等人发现当前神经网络的最后的 softmax 层（更确切地说，是标准化项）是神经网络的瓶颈，因为计算 softmax 的计算复杂度与词汇库 V 中词的数量成正比，而个数量通常为成百上千，乃至几百万。</p>
<p>因此，如何在一个大词汇库中用较低的计算成本计算 softmax，成为了建立神经语言模型和词嵌入模型的一个关键挑战。关于如何简化softmax计算，则出现了两种模型：（1）基于Hierarchical Softmax的模型；（2）基于Negative Sampling的模型。</p>
<h2 id="hierarchical-softmax-层次softmax" tabindex="-1"><a class="header-anchor" href="#hierarchical-softmax-层次softmax" aria-hidden="true">#</a> Hierarchical Softmax（层次softmax）</h2>
<p><strong>使用哈夫曼树的作用</strong>：如果不适用哈夫曼树，而是直接从隐层计算每一个输出的概率——即传统的Softmax，则需要对词汇表V中的每一个词都计算一遍概率，这个过程的时间复杂度是O|V|，而如果使用了哈夫曼树，则时间复杂度就降到了O(log2(|V|))。另外，由于哈夫曼树的特点，<strong>词频高的编码短，这样就更加快了模型的训练过程</strong>。</p>
<p>想进一步了解Hierarchical Softmax，点击：<a href="https://www.cnblogs.com/eniac1946/p/8818892.html" target="_blank" rel="noopener noreferrer">层次softmax函数<ExternalLinkIcon/></a>，在fastText作者（fastText算是words2vec所衍生出来的，其作者都是Facebook的科学家Tomas Mikolov）的<a href="https://arxiv.org/pdf/1607.01759.pdf" target="_blank" rel="noopener noreferrer">paper<ExternalLinkIcon/></a>中讲到，当类别的数量巨大时，计算线性分类器的计算量相当高，更准确地说，计算复杂度时O(kh)，k是类别的数量，h是文本特征的维度数。基于Huffman树的Hierarchical Softmax，可以将计算复杂度降低到O(h log2(k))。</p>
<h2 id="negative-sampling-负采样" tabindex="-1"><a class="header-anchor" href="#negative-sampling-负采样" aria-hidden="true">#</a> Negative Sampling（负采样）</h2>
<p>通过负采样替代极大似然估计的以绕过求概率规范化因子的有效办法</p>
<p>其实，上面介绍的CBOW和Skip-gram模型就是在Hierarchical Softmax方法下实现的，还记得我们一开始提到的还有一种Negative Sampling方法么，这种方法也叫作负采样方法。从上面我们可以看出，无论是CBOW还是Skip-gram模型，其实都是分类模型。对于机器学习中的分类任务，在训练的时候不但要给正例，还要给负例。对于Hierarchical Softmax来说，负例其实就是哈夫曼树的根节点。对于Negative Sampling，负例是随机挑选出来的。据说Negative Sampling能提高速度、改进模型质量。</p>
<h2 id="两者对比" tabindex="-1"><a class="header-anchor" href="#两者对比" aria-hidden="true">#</a> 两者对比</h2>
<p>基于采样的方法并不改变模型的结构，只是近似计算更新梯度。因此这类方法虽然在训练时可以显著提高模型的训练速度，但是在测试阶段依然需要计算配分函数。而基于层次化 softmax 的方法改变的模型的结构，在训练和测试时都可以加快计算速度。</p>
<h1 id="若干源码细节" tabindex="-1"><a class="header-anchor" href="#若干源码细节" aria-hidden="true">#</a> 若干源码细节</h1>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/google19890102/article/details/51887344" target="_blank" rel="noopener noreferrer">机器学习算法实现解析——word2vec源码解析<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;word2vec源码解析&quot;一节主要参考此文章。</p>
<ul>
<li><a href="https://blog.csdn.net/mpk_no1/article/details/72458003" target="_blank" rel="noopener noreferrer">深度学习笔记——Word2vec和Doc2vec原理理解并结合代码分析<ExternalLinkIcon/></a></li>
</ul>
<p>从此文知道了Huffman树的作用和HS的负反馈就是其哈夫曼树的根结点。</p>
<ul>
<li>
<p><a href="http://suhui.github.io/word2vec" target="_blank" rel="noopener noreferrer">word2vec之源码注释<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/40557458" target="_blank" rel="noopener noreferrer">基于深度学习的自然语言处理（Word2vec源码分析-2上）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/40558913" target="_blank" rel="noopener noreferrer">基于深度学习的自然语言处理（Word2vec源码分析-2下）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/jingquanliang/article/details/82886645" target="_blank" rel="noopener noreferrer">word2vec 源代码 完整注释<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/lingerlanlan/article/details/38232755" target="_blank" rel="noopener noreferrer">word2vec源码解析之word2vec.c<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>源码注释参考上述几个文档。</p>
<ul>
<li><a href="http://jacoxu.com/word2vector/" target="_blank" rel="noopener noreferrer">word2vec使用说明<ExternalLinkIcon/></a></li>
</ul>
<p>这是word2vec的使用说明。</p>
<h2 id="w2v直觉理解-解释" tabindex="-1"><a class="header-anchor" href="#w2v直觉理解-解释" aria-hidden="true">#</a> W2V直觉理解，解释</h2>
<p><a href="http://mccormickml.com/" target="_blank" rel="noopener noreferrer">THE INNER WORKINGS OF WORD2VEC<ExternalLinkIcon/></a></p>
<p><a href="http://mccormickml.com/2016/04/19/word2vec-tutorial-the-skip-gram-model/" target="_blank" rel="noopener noreferrer">Word2Vec Tutorial - The Skip-Gram Model<ExternalLinkIcon/></a></p>
<p><a href="http://mccormickml.com/2017/01/11/word2vec-tutorial-part-2-negative-sampling/" target="_blank" rel="noopener noreferrer">Word2Vec Tutorial Part 2 - Negative Sampling<ExternalLinkIcon/></a></p>
<p><a href="http://mccormickml.com/2016/04/27/word2vec-resources/" target="_blank" rel="noopener noreferrer">Word2Vec Resources<ExternalLinkIcon/></a></p>
<p>The best tutorials I found online were done by <a href="http://alexminnaar.com/" target="_blank" rel="noopener noreferrer">Alex Minnaar<ExternalLinkIcon/></a>.</p>
<p>He's since taken the tutorials down, but I have PDF copies here:</p>
<ul>
<li><a href="http://mccormickml.com/assets/word2vec/Alex_Minnaar_Word2Vec_Tutorial_Part_I_The_Skip-Gram_Model.pdf" target="_blank" rel="noopener noreferrer">Part I - The Skip-Gram Model<ExternalLinkIcon/></a></li>
<li><a href="http://mccormickml.com/assets/word2vec/Alex_Minnaar_Word2Vec_Tutorial_Part_II_The_Continuous_Bag-of-Words_Model.pdf" target="_blank" rel="noopener noreferrer">Part II - Continuous Bag-of-Words Model<ExternalLinkIcon/></a></li>
</ul>
<p><a href="http://www.1-4-5.net/~dmm/ml/how_does_word2vec_work.pdf" target="_blank" rel="noopener noreferrer">How exactly does word2vec work?<ExternalLinkIcon/></a></p>
<p>好：</p>
<p><a href="https://zhuanlan.zhihu.com/p/27234078" target="_blank" rel="noopener noreferrer">理解 Word2Vec 之 Skip-Gram 模型<ExternalLinkIcon/></a></p>
<p><a href="https://nndl.github.io/chap-%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E4%B8%8E%E8%AF%8D%E5%B5%8C%E5%85%A5.pdf" target="_blank" rel="noopener noreferrer">邱锡鹏：《神经网络与深度学习》第 14 章 语言模型与词嵌入 <ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/guoyaohua/p/9240336.html" target="_blank" rel="noopener noreferrer">NLP之——Word2Vec详解<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/leadai/article/details/89391366" target="_blank" rel="noopener noreferrer">图解Word2vec，读这一篇就够了<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/iloveai/p/word2vec.html" target="_blank" rel="noopener noreferrer">word2vec前世今生<ExternalLinkIcon/></a></p>
<p>整体框架：</p>
<p><a href="https://zhuanlan.zhihu.com/p/33799633" target="_blank" rel="noopener noreferrer">全面理解word2vec<ExternalLinkIcon/></a></p>
<p><a href="https://kexue.fm/usr/uploads/2017/04/146269300.pdf" target="_blank" rel="noopener noreferrer">Deep Learning 实战之 word2vec<ExternalLinkIcon/></a></p>
<h2 id="近似softmax的几种方法" tabindex="-1"><a class="header-anchor" href="#近似softmax的几种方法" aria-hidden="true">#</a> 近似softmax的几种方法</h2>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650720050&amp;idx=2&amp;sn=9fedc937d3128462c478ef7911e77687&amp;chksm=871b034cb06c8a5a8db8a10f708c81025fc62084d871ac5d184bab5098cb64e939c1c23a7369&amp;mpshare=1&amp;scene=1&amp;srcid=0613xBLYGgZUw99YG99QMP6p#rd" target="_blank" rel="noopener noreferrer">技术 | 词嵌入系列博客Part2：比较语言建模中近似softmax的几种方法<ExternalLinkIcon/></a></p>
<h3 id="层次softmax" tabindex="-1"><a class="header-anchor" href="#层次softmax" aria-hidden="true">#</a> 层次softmax</h3>
<h3 id="nce" tabindex="-1"><a class="header-anchor" href="#nce" aria-hidden="true">#</a> NCE</h3>
<p><a href="http://proceedings.mlr.press/v9/gutmann10a/gutmann10a.pdf" target="_blank" rel="noopener noreferrer">Noise-contrastive estimation: A new estimation principle for unnormalized statistical models<ExternalLinkIcon/></a></p>
<p><a href="http://demo.clab.cs.cmu.edu/cdyer/nce_notes.pdf" target="_blank" rel="noopener noreferrer">Notes on Noise Contrastive Estimation and Negative Sampling<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/ae7663197898" target="_blank" rel="noopener noreferrer">神经网络语言建模系列之四：噪声对比评估<ExternalLinkIcon/></a></p>
<p><a href="https://spaces.ac.cn/archives/5617" target="_blank" rel="noopener noreferrer">“噪声对比估计”杂谈：曲径通幽之妙<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/littlely_ll/article/details/79252064" target="_blank" rel="noopener noreferrer">噪音对比估计（NCE）<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/53942951" target="_blank" rel="noopener noreferrer">再看NCE，从DeepMind新文回到word2vec<ExternalLinkIcon/></a></p>
<p><a href="http://blog.sina.com.cn/s/blog_13647fd0f0102vwls.html" target="_blank" rel="noopener noreferrer">王琳 NCE算法研究以及其在Word2vec工具上的应用<ExternalLinkIcon/></a></p>
<h3 id="负采样" tabindex="-1"><a class="header-anchor" href="#负采样" aria-hidden="true">#</a> 负采样</h3>
<p><a href="http://qiancy.com/2016/08/24/word2vec-negative-sampling/" target="_blank" rel="noopener noreferrer">Word2Vec原理之负采样算法<ExternalLinkIcon/></a></p>
<p><a href="http://mccormickml.com/2017/01/11/word2vec-tutorial-part-2-negative-sampling/" target="_blank" rel="noopener noreferrer">Word2Vec Tutorial Part 2 - Negative Sampling<ExternalLinkIcon/></a></p>
<p><a href="https://stats.stackexchange.com/questions/244616/how-does-negative-sampling-work-in-word2vec" target="_blank" rel="noopener noreferrer">How does negative sampling work in word2vec?<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/wizardforcel/article/details/84075703" target="_blank" rel="noopener noreferrer">【番外】负采样原理<ExternalLinkIcon/></a></p>
</div></template>


