<template><div><h1 id="word2vec源码解析" tabindex="-1"><a class="header-anchor" href="#word2vec源码解析" aria-hidden="true">#</a> word2vec源码解析</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/natural-language-processing/word2vec/word2vec.html">返回上层目录</RouterLink></li>
</ul>
<p>在阅读本文之前，建议首先阅读上一小节的“word2vec的算法原理”，掌握如下的几个概念：</p>
<ul>
<li>什么是统计语言模型</li>
<li>神经概率语言模型的网络结构</li>
<li>CBOW模型和Skip-gram模型的网络结构</li>
<li>Hierarchical Softmax和Negative Sampling的训练方法</li>
<li>Hierarchical Softmax与Huffman树的关系</li>
</ul>
<p>有了如上的一些概念，接下来就可以去读word2vec的源码。在源码的解析过程中，对于基础知识部分只会做简单的介绍，而不会做太多的推导，原理部分会给出相应的参考地址。</p>
<p>在wrod2vec工具中，有如下的几个比较重要的概念：</p>
<ul>
<li>
<p>CBOW</p>
</li>
<li>
<p>Skip-Gram</p>
</li>
<li>
<p>Hierarchical Softmax</p>
</li>
<li>
<p>Negative Sampling</p>
</li>
</ul>
<p>其中CBOW和Skip-Gram是word2vec工具中使用到的两种不同的语言模型，而Hierarchical Softmax和Negative Sampling是对以上的两种模型的具体的优化方法。</p>
<h1 id="word2vec源码" tabindex="-1"><a class="header-anchor" href="#word2vec源码" aria-hidden="true">#</a> word2vec源码</h1>
<ul>
<li>GitHub:<a href="https://github.com/dav/word2vec" target="_blank" rel="noopener noreferrer">dav/word2vec<ExternalLinkIcon/></a></li>
<li>Google-Code:<a href="https://code.google.com/archive/p/word2vec/" target="_blank" rel="noopener noreferrer">google-code:word2vec<ExternalLinkIcon/></a></li>
</ul>
<h1 id="word2vec流程图" tabindex="-1"><a class="header-anchor" href="#word2vec流程图" aria-hidden="true">#</a> word2vec流程图</h1>
<p>在word2vec工具中，主要的工作包括：</p>
<ul>
<li>预处理。即变量的声明，全局变量的定义等；</li>
<li>构建词库。即包含文本的处理，以及是否需要有指定词库等；</li>
<li>初始化网络结构。即包含CBOW模型和Skip-Gram模型的参数初始化，Huffman编码的生成等；</li>
<li>多线程模型训练。即利用Hierarchical Softmax或者Negative Sampling方法对网络中的参数进行求解；</li>
<li>最终结果的处理。即是否保存和以何种形式保存。</li>
</ul>
<p>对于以上的过程，可以由下图表示：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/word2vec-flow-chart.png" alt="word2vec-flow-chart"></p>
<p>在接下来的内容中，将针对以上的五个部分，详细分析下在源代码中的实现技巧，以及简单介绍我在读代码的过程中对部分代码的一些思考。</p>
<h1 id="预处理" tabindex="-1"><a class="header-anchor" href="#预处理" aria-hidden="true">#</a> 预处理</h1>
<h1 id="构建词库" tabindex="-1"><a class="header-anchor" href="#构建词库" aria-hidden="true">#</a> 构建词库</h1>
<p>在word2vec源码中，提供了两种构建词库的方法，分别为：</p>
<ul>
<li>指定词库：ReadVocab()方法</li>
<li>从词的文本构建词库：LearnVocabFromTrainFile()方法</li>
</ul>
<h2 id="构建词库的过程" tabindex="-1"><a class="header-anchor" href="#构建词库的过程" aria-hidden="true">#</a> 构建词库的过程</h2>
<h3 id="从指定词库生成词库" tabindex="-1"><a class="header-anchor" href="#从指定词库生成词库" aria-hidden="true">#</a> 从指定词库生成词库</h3>
<h3 id="从词的文本构建词库" tabindex="-1"><a class="header-anchor" href="#从词的文本构建词库" aria-hidden="true">#</a> 从词的文本构建词库</h3>
<p>在这里，我们以从词的文本构建词库为例（函数LearnVocabFromTrainFile()）。构建词库的过程如下所示：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/LearnVocabFromTrainFile-flow-chartbmp.png" alt="LearnVocabFromTrainFile-flow-chartbmp"></p>
<h2 id="对词的哈希处理" tabindex="-1"><a class="header-anchor" href="#对词的哈希处理" aria-hidden="true">#</a> 对词的哈希处理</h2>
<h2 id="对低频词的处理" tabindex="-1"><a class="header-anchor" href="#对低频词的处理" aria-hidden="true">#</a> 对低频词的处理</h2>
<h2 id="根据词频对词库中的词排序" tabindex="-1"><a class="header-anchor" href="#根据词频对词库中的词排序" aria-hidden="true">#</a> 根据词频对词库中的词排序</h2>
<h1 id="初始化网络结构" tabindex="-1"><a class="header-anchor" href="#初始化网络结构" aria-hidden="true">#</a> 初始化网络结构</h1>
<p>有了以上的对词的处理，就已经处理好了所有的训练样本，此时，便可以开始网络结构的初始化和接下来的网络训练。网络的初始化的过程在InitNet()函数中完成。</p>
<h2 id="初始化网络参数" tabindex="-1"><a class="header-anchor" href="#初始化网络参数" aria-hidden="true">#</a> 初始化网络参数</h2>
<p>在初始化的过程中，主要的参数包括词向量的初始化和映射层到输出层的权重的初始化，如下图所示：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/init_net.png" alt="init_net"></p>
<p>在初始化的过程中，映射层到输出层的权重都初始化为0，而对于每一个词向量的初始化，作者的初始化方法如下代码所示：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> layer1_size<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    next_random <span class="token operator">=</span> next_random <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token number">25214903917</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">;</span>
    <span class="token comment">// 1、与：相当于将数控制在一定范围内</span>
    <span class="token comment">// 2、0xFFFF：65536</span>
    <span class="token comment">// 3、/65536：[0,1]之间</span>
    syn0<span class="token punctuation">[</span>a <span class="token operator">*</span> layer1_size <span class="token operator">+</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>next_random <span class="token operator">&amp;</span> <span class="token number">0xFFFF</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>real<span class="token punctuation">)</span><span class="token number">65536</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">/</span> layer1_size<span class="token punctuation">;</span><span class="token comment">// 初始化词向量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，生成一个很大的next_random的数，通过与“0xFFFF”进行与运算截断，再除以65536得到[0,1]之间的数，最终，得到的初始化的向量的范围为：[−0.5/m,0.5/m]，其中，m为词向量的长度。</p>
<h2 id="huffman树的构建" tabindex="-1"><a class="header-anchor" href="#huffman树的构建" aria-hidden="true">#</a> Huffman树的构建</h2>
<p>word2vec里是拿数组实现word2vec，效率很高，在学校里经常见到的是递归迭代实现Huffman树，这对于处理大量叶子节点的问题不是一个最佳方法。</p>
<p>在层次Softmax中需要使用到Huffman树以及Huffman编码，因此，在网络结构的初始化过程中，也需要初始化Huffman树。在生成Huffman树的过程中，首先定义了3个长度为vocab_size*2+1的数组：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span>count <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>vocab_size <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span>binary <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>vocab_size <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span>parent_node <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>vocab_size <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，count数组中前vocab_size存储的是每一个词的对应的词频，后面初始化的是很大的数，已知词库中的词是按照降序排列的，因此，构建Huffman树的过程如下所示（对于Huffman树的原理，可以参见博文“<a href="http://blog.csdn.net/google19890102/article/details/54848262" target="_blank" rel="noopener noreferrer">数据结构和算法——Huffman树和Huffman编码<ExternalLinkIcon/></a>”）：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-1.png" alt="CreateBinaryTree-huffman-tree-construction"></p>
<p>首先，设置两个指针pos1和pos2，分别指向最后一个词和最后一个词的后一位，从两个指针所指的数中选出最小的值，记为min1i，如果pos1所指的值最小，则此时将pos1左移，再比较pos1和pos2所指的数，选择出最小的值，记为min2i，<strong>将它们的和存储到pos2所指的位置。并将此时pos2所指的位置设置为min1i和min2i的父节点</strong>，同时，记min2i所指的位置的编码为1，如下代码所示：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">// 设置父节点</span>
parent_node<span class="token punctuation">[</span>min1i<span class="token punctuation">]</span> <span class="token operator">=</span> vocab_size <span class="token operator">+</span> a<span class="token punctuation">;</span>
parent_node<span class="token punctuation">[</span>min2i<span class="token punctuation">]</span> <span class="token operator">=</span> vocab_size <span class="token operator">+</span> a<span class="token punctuation">;</span>
binary<span class="token punctuation">[</span>min2i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 设置一个子树的编码为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的过程如下图所示：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-1.png" alt="CreateBinaryTree-huffman-tree-construction-1"></p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-2.png" alt="CreateBinaryTree-huffman-tree-construction-2"></p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-3.png" alt="CreateBinaryTree-huffman-tree-construction-3"></p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-4.png" alt="CreateBinaryTree-huffman-tree-construction-4"></p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-construction-5.png" alt="CreateBinaryTree-huffman-tree-construction-5"></p>
<p>构建好Huffman树后，此时，需要根据构建好的Huffman树生成对应节点的Huffman编码。假设，上述的数据生成的最终的Huffman树为：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-Huffman-tree-example.png" alt="CreateBinaryTree-Huffman-tree-example"></p>
<p>此时，count数组，binary数组和parent_node数组分别为：</p>
<p><img src="@source/docs/machine-learning/natural-language-processing/word2vec/word2vec-source-code-analysis/pic/CreateBinaryTree-huffman-tree-count-binary-parent-node.png" alt="CreateBinaryTree-huffman-tree-count-binary-parent-node"></p>
<p>在生成Huffman编码的过程中，针对每一个词（词都在叶子节点上），从叶子节点开始，将编码存入到code数组中，如对于上图中的“R”节点来说，其code数组为{1,0}，再对其反转便是Huffman编码：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>codelen <span class="token operator">=</span> i<span class="token punctuation">;</span><span class="token comment">// 词的编码长度</span>
vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> vocab_size <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>code<span class="token punctuation">[</span>i <span class="token operator">-</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> code<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 编码的反转</span>
    vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>point<span class="token punctuation">[</span>i <span class="token operator">-</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> point<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">-</span> vocab_size<span class="token punctuation">;</span><span class="token comment">// 记录的是从根结点到叶子节点的路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里的Huffman树的构建和Huffman编码的生成过程写得比较精简。</p>
<h2 id="负样本选中表的初始化" tabindex="-1"><a class="header-anchor" href="#负样本选中表的初始化" aria-hidden="true">#</a> 负样本选中表的初始化</h2>
<p>如果是采用负采样的方法，此时还需要初始化每个词被选中的概率。在所有的词构成的词典中，每一个词出现的频率有高有低，我们希望，对于那些高频的词，被选中成为负样本的概率要大点，同时，对于那些出现频率比较低的词，我们希望其被选中成为负样本的频率低点。这个原理于“轮盘赌”的策略一致。在程序中，实现这部分功能的代码为：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">// 生成负采样的概率表</span>
<span class="token keyword">void</span> <span class="token function">InitUnigramTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> i<span class="token punctuation">;</span>
        <span class="token keyword">double</span> train_words_pow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> d1<span class="token punctuation">,</span> power <span class="token operator">=</span> <span class="token number">0.75</span><span class="token punctuation">;</span>
        table <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>table_size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// int --> int</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> vocab_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> train_words_pow <span class="token operator">+=</span> <span class="token function">pow</span><span class="token punctuation">(</span>vocab<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>cn<span class="token punctuation">,</span> power<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 类似轮盘赌生成每个词的概率</span>
        i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        d1 <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span>vocab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>cn<span class="token punctuation">,</span> power<span class="token punctuation">)</span> <span class="token operator">/</span> train_words_pow<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> table_size<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                table<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>table_size <span class="token operator">></span> d1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        i<span class="token operator">++</span><span class="token punctuation">;</span>
                        d1 <span class="token operator">+=</span> <span class="token function">pow</span><span class="token punctuation">(</span>vocab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>cn<span class="token punctuation">,</span> power<span class="token punctuation">)</span> <span class="token operator">/</span> train_words_pow<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> vocab_size<span class="token punctuation">)</span> i <span class="token operator">=</span> vocab_size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="多线程模型训练" tabindex="-1"><a class="header-anchor" href="#多线程模型训练" aria-hidden="true">#</a> 多线程模型训练</h1>
<h1 id="tensorflow上构建word2vec词嵌入模型" tabindex="-1"><a class="header-anchor" href="#tensorflow上构建word2vec词嵌入模型" aria-hidden="true">#</a> TensorFlow上构建Word2Vec词嵌入模型</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/42067012" target="_blank" rel="noopener noreferrer">在TensorFlow上构建Word2Vec词嵌入模型<ExternalLinkIcon/></a></li>
</ul>
<p>本文详细介绍了 word2vector 模型的模型架构，以及 TensorFlow 的实现过程，包括数据准备、建立模型、构建验证集，并给出了运行结果示例。</p>
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
<hr>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<p><a href="https://www.processon.com/diagraming/5c3f5691e4b08a7683aa7ac5" target="_blank" rel="noopener noreferrer">word2vec代码流程图<ExternalLinkIcon/></a></p>
<p><a href="http://suhui.github.io/word2vec" target="_blank" rel="noopener noreferrer">word2vec之源码注释<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/40557458" target="_blank" rel="noopener noreferrer">基于深度学习的自然语言处理（Word2vec源码分析-2上）<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/40558913" target="_blank" rel="noopener noreferrer">基于深度学习的自然语言处理（Word2vec源码分析-2下）<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/lingerlanlan/article/details/38232755" target="_blank" rel="noopener noreferrer">word2vec源码解析之word2vec.c<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/jingquanliang/article/details/82886645" target="_blank" rel="noopener noreferrer">word2vec 源代码 完整注释<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/leiting_imecas/article/details/72303044" target="_blank" rel="noopener noreferrer">word2vec 源码分析word2vec.c<ExternalLinkIcon/></a></p>
<p>代码架构讲解分析：</p>
<p><a href="https://blog.csdn.net/google19890102/article/details/51887344" target="_blank" rel="noopener noreferrer">机器学习算法实现解析——word2vec源码解析<ExternalLinkIcon/></a></p>
<p>局部代码解读：</p>
<p><a href="http://pskun.github.io/machine%20learning/word2vec-source-code-analysis.html" target="_blank" rel="noopener noreferrer">word2vec源码阅读-词典的建立<ExternalLinkIcon/></a></p>
<p>具体使用：</p>
<p><a href="https://blog.csdn.net/zwwhsxq/article/details/77200129" target="_blank" rel="noopener noreferrer">使用word2vec（C语言版本）训练中文语料 并且将得到的vector.bin文件转换成txt文件<ExternalLinkIcon/></a></p>
<hr>
<p>原始</p>
<p>http://suhui.github.io/word2vec
http://pskun.github.io/machine%20learning/word2vec-source-code-analysis.html
https://zhuanlan.zhihu.com/p/40557458
https://zhuanlan.zhihu.com/p/40558913
http://jacoxu.com/word2vector/
https://blog.csdn.net/lingerlanlan/article/details/38232755
https://blog.csdn.net/google19890102/article/details/51887344
https://blog.csdn.net/jingquanliang/article/details/82886645
https://www.processon.com/diagraming/5c3f5691e4b08a7683aa7ac5</p>
<p>https://blog.csdn.net/lingerlanlan/article/details/38232755
https://blog.csdn.net/mpk_no1/article/details/72458003
https://blog.csdn.net/leiting_imecas/article/details/72303044
https://www.zhihu.com/question/21661274
https://blog.csdn.net/zwwhsxq/article/details/77200129</p>
</div></template>


