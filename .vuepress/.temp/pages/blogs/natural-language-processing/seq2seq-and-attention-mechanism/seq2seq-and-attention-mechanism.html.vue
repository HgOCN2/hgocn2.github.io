<template><div><h1 id="seq2seq和注意力机制" tabindex="-1"><a class="header-anchor" href="#seq2seq和注意力机制" aria-hidden="true">#</a> Seq2Seq和注意力机制</h1>
<ul>
<li><RouterLink to="/blogs/natural-language-processing/natural-language-processing.html">返回上层目录</RouterLink></li>
<li><a href="#RNN%E7%9A%84%E5%A4%9A%E7%A7%8D%E7%BB%93%E6%9E%84">RNN的多种结构</a></li>
<li><a href="#Seq2Seq%E6%A8%A1%E5%9E%8B">Seq2Seq模型</a></li>
<li><a href="#Encoder-Decoder%E7%BB%93%E6%9E%84">Encoder-Decoder结构</a>
<ul>
<li><a href="#Encoder-Decoder%E4%BB%8B%E7%BB%8D">Encoder-Decoder介绍</a></li>
<li><a href="#Encoder-Decoder%E5%88%86%E6%9E%90">Encoder-Decoder分析</a></li>
</ul>
</li>
<li><a href="#Attention%E6%9C%BA%E5%88%B6">Attention机制</a>
<ul>
<li><a href="#Encoder-Decoder%E7%BB%93%E6%9E%84%E7%9A%84%E5%B1%80%E9%99%90%E6%80%A7">Encoder-Decoder结构的局限性</a></li>
<li><a href="#Attention%E6%9C%BA%E5%88%B6%E5%8E%9F%E7%90%86">Attention机制原理</a></li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/paper.png" alt="paper"></p>
<p>pdf: <a href="https://arxiv.org/pdf/1409.0473.pdf" target="_blank" rel="noopener noreferrer"><em>NEURAL MACHINE TRANSLATION BY JOINTLY LEARNING TO ALIGN AND TRANSLATE</em><ExternalLinkIcon/></a></p>
<h1 id="rnn的多种结构" tabindex="-1"><a class="header-anchor" href="#rnn的多种结构" aria-hidden="true">#</a> RNN的多种结构</h1>
<p>首先从RNN的结构说起，根据输出和输入序列不同数量RNN可以有多种不同的结构，不同结构自然就有不同的引用场合。如下图，</p>
<ul>
<li><strong>one to one</strong>结构，仅仅只是简单的给一个输入得到一个输出，此处并未体现序列的特征，例如图像分类场景。</li>
<li><strong>one to many</strong>结构，给一个输入得到一系列输出，这种结构可用于生产图片描述的场景。</li>
<li><strong>many to one</strong>结构，给一系列输入得到一个输出，这种结构可用于文本情感分析，对一些列的文本输入进行分类，看是消极还是积极情感。</li>
<li><strong>many to many</strong>结构，给一些列输入得到一系列输出，这种结构可用于翻译或聊天对话场景，对输入的文本转换成另外一些列文本。</li>
<li><strong>同步many to many</strong>结构，它是经典的RNN结构，前一输入的状态会带到下一个状态中，而且每个输入都会对应一个输出，我们最熟悉的就是用于字符预测了，同样也可以用于视频分类，对视频的帧打标签。</li>
</ul>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/RNN-structures.png" alt="RNN-structures"></p>
<h1 id="seq2seq模型" tabindex="-1"><a class="header-anchor" href="#seq2seq模型" aria-hidden="true">#</a> Seq2Seq模型</h1>
<p>Seq2Seq是2014年Google提出的一个模型<a href="https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf" target="_blank" rel="noopener noreferrer"><em>Sequence to Sequence Learning with Neural Networks</em><ExternalLinkIcon/></a>。论文中提出的 <em>Seq2Seq</em> 模型可简单理解为由三部分组成：<strong>Encoder、Decoder 和连接两者的 State Vector (中间状态向量) C 。</strong></p>
<p>在上图many to many的两种模型中，可以看到第四和第五种是有差异的，经典的RNN结构的输入和输出序列必须要是等长，它的应用场景也比较有限。而第四种它可以是<strong>输入和输出序列不等长，这种模型便是Seq2Seq模型</strong>，即Sequence to Sequence。</p>
<p>Seq2Seq实现了<strong>从一个序列到另外一个序列的转换</strong>，比如google曾用Seq2Seq模型加attention模型来实现了翻译功能，类似的还可以实现聊天机器人对话模型。经典的RNN模型固定了输入序列和输出序列的大小，而Seq2Seq模型则突破了该限制。</p>
<p>这种结构最重要的地方在于<strong>输入序列和输出序列的长度是可变的</strong>。</p>
<p><strong>举个栗子</strong></p>
<blockquote>
<p>在机器翻译：输入（hello） -&gt; 输出 （你好）。输入是1个英文单词，输出为2个汉字。
在对话机器中：我们提（输入）一个问题，机器会自动生成（输出）回答。这里的输入和输出显然是长度没有确定的序列（sequences）.</p>
</blockquote>
<p>要知道，在以往的很多模型中，我们一般都说输入<strong>特征矩阵</strong>，每个样本对应矩阵中的某一行。就是说，无论是第一个样本还是最后一个样本，他们都有一样的特征维度。但是对于翻译这种例子，难道我们要让每一句话都有一样的字数吗，那样的话估计五言律诗和七言绝句又能大火一把了，哈哈。但是这不科学呀，所以就有了Seq2Seq这种结构。</p>
<p>Seq2Seq模型有两种常见结构。</p>
<p>（1）简单结构</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/Seq2Seq-strcture1.png" alt="Seq2Seq-strcture1"></p>
<p>该结构是最简单的结构，<strong>Decoder 的第一个时刻只用到了 Encoder 最后输出的中间状态变量</strong> ：</p>
<p>上图来自谷歌2014年的论文：<a href="https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf" target="_blank" rel="noopener noreferrer"><em>Sequence to Sequence Learning with Neural Networks</em><ExternalLinkIcon/></a></p>
<p>（2）复杂结构</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/Seq2Seq-strcture2.png" alt="Seq2Seq-strcture2"></p>
<p>上图来自蒙特利尔大学2014年的论文：<a href="https://www.aclweb.org/anthology/D14-1179.pdf" target="_blank" rel="noopener noreferrer"><em>Learning Phrase Representations using RNN Encoder–Decoder
for Statistical Machine Translation</em><ExternalLinkIcon/></a></p>
<p>Seq2Seq的应用有：</p>
<ul>
<li>
<p>在英文翻译中，将英文输入到Encoder中，Decoder输出中文。</p>
<p>蒙特利尔大学2014年的论文：<a href="https://www.aclweb.org/anthology/D14-1179.pdf" target="_blank" rel="noopener noreferrer"><em>Learning Phrase Representations using RNN Encoder–Decoder
for Statistical Machine Translation</em><ExternalLinkIcon/></a></p>
</li>
<li>
<p>在图像标注中，将图像特征输入到Encoder中，Decoder输出一段文字对图像的描述。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/show-and-tell.png" alt="show-and-tell"></p>
<p>Google2015年的论文：<a href="https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vinyals_Show_and_Tell_2015_CVPR_paper.pdf" target="_blank" rel="noopener noreferrer"><em>Show and Tell: A Neural Image Caption Generator</em><ExternalLinkIcon/></a></p>
</li>
<li>
<p>在 <em>QA</em> 系统中，将提出的问题输入Encoder中，Decoder输出对于问题的回答。</p>
</li>
</ul>
<h1 id="encoder-decoder结构" tabindex="-1"><a class="header-anchor" href="#encoder-decoder结构" aria-hidden="true">#</a> Encoder-Decoder结构</h1>
<h2 id="encoder-decoder介绍" tabindex="-1"><a class="header-anchor" href="#encoder-decoder介绍" aria-hidden="true">#</a> Encoder-Decoder介绍</h2>
<p>所谓的Sequence2Sequence任务主要是泛指一些Sequence到Sequence的映射问题，Sequence在这里可以理解为一个字符串序列，当我们在给定一个字符串序列后，希望得到与之对应的另一个字符串序列（如 翻译后的、如语义上对应的）时，这个任务就可以称为Sequence2Sequence了。</p>
<p>在现在的深度学习领域当中，通常的做法是将输入的源Sequence编码到一个中间的context当中，这个context是一个特定长度的编码（可以理解为一个向量），然后再通过这个context还原成一个输出的目标Sequence。</p>
<p>如果用人的思维来看，就是我们先看到源Sequence，将其读一遍，然后在我们大脑当中就记住了这个源Sequence，并且存在大脑的某一个位置上，形成我们自己的记忆（对应Context），然后我们再经过思考，将这个大脑里的东西转变成输出，然后写下来。</p>
<p>那么我们大脑读入的过程叫做Encoder，即将输入的东西变成我们自己的记忆，放在大脑当中，而这个记忆可以叫做Context，然后我们再根据这个Context，转化成答案写下来，这个写的过程叫做Decoder。其实就是编码-存储-解码的过程。</p>
<p>而对应的，大脑怎么读入（Encoder怎么工作）有一个特定的方式，怎么记忆（Context）有一种特定的形式，怎么转变成答案（Decoder怎么工作）又有一种特定的工作方式。</p>
<p>好了，现在我们大体了解了一个工作的流程Encoder-Decoder后，我们来介绍一个深度学习当中，最经典的Encoder-Decoder实现方式，即用RNN来实现。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/encoder-decoder.jpeg" alt="encoder-decoder"></p>
<p>在RNN Encoder-Decoder的工作当中，我们用一个RNN去模拟大脑的读入动作，用一个特定长度的特征向量去模拟我们的记忆，然后再用另外一个RNN去模拟大脑思考得到答案的动作，将三者组织起来利用就成了一个可以实现Sequence2Sequence工作的“模拟大脑”了。
而我们剩下的工作也就是如何正确的利用RNN去实现，以及如何正确且合理的组织这三个部分了。</p>
<p>获取<strong>语义向量C</strong>最简单的方式就是直接将最后一个输入的隐状态作为语义向量C。也可以对最后一个隐含状态做一个变换得到语义向量，还可以将输入序列的所有隐含状态做一个变换得到语义变量。</p>
<h2 id="encoder-decoder分析" tabindex="-1"><a class="header-anchor" href="#encoder-decoder分析" aria-hidden="true">#</a> Encoder-Decoder分析</h2>
<p><strong>（1）Encoder</strong></p>
<p>给定句子对</p>
<p><strong>（2）Decoder</strong></p>
<p>得到中间语义向量$C$后，使用Decoder进行解码。Decoder根据中间状态向量$C$和已经生成的历史信息$y_1, y_2,...,y_{i-1}$去生成$t$时刻的单词$y_i$：
$$
y_i=g(C,y_1,y_2,...,y_{i-1})
$$
如果直接将$C$输入到Decoder中，则是Seq2Seq模型的第一种模型：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/deconder-encoder-structure-1.png" alt="deconder-encoder-structure-1"></p>
<p>如果将$C$当作Decoder的每一时刻输入，则是Seq2Seq模型的第二种模型：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/deconder-encoder-structure-2.png" alt="deconder-encoder-structure-2"></p>
<h1 id="attention机制" tabindex="-1"><a class="header-anchor" href="#attention机制" aria-hidden="true">#</a> Attention机制</h1>
<h2 id="encoder-decoder结构的局限性" tabindex="-1"><a class="header-anchor" href="#encoder-decoder结构的局限性" aria-hidden="true">#</a> Encoder-Decoder结构的局限性</h2>
<p>（1）Encoder和Decoder的唯一联系只有语义编码$C$</p>
<p>即将整个输入序列的信息编码成一个固定大小的状态向量再解码，相当于将信息”有损压缩”。很明显这样做有两个缺点：</p>
<ul>
<li>
<p>中间语义向量无法完全表达整个输入序列的信息。</p>
</li>
<li>
<p>随着输入信息长度的增加，由于向量长度固定，先前编码好的信息会被后来的信息覆盖，丢失很多信息。</p>
</li>
</ul>
<p>（2）不同位置的单词的贡献都是一样的</p>
<p>Decoder过程，其输出的产生如下：
$$
\begin{aligned}
&amp;y_1=g(C,h^{'}_0)\
&amp;y_2=g(C,y_1)\
&amp;y_3=g(C,y_1,y_2)
\end{aligned}
$$
明显可以发现在生成$y_1$、$y_2$、$y_3$时，语义编码$C$对它们所产生的贡献都是一样的。例如翻译：<code v-pre>Cat chase mouse</code>，Encoder-Decoder模型逐字生成：“猫”、“捉”、“老鼠”。在翻译mouse单词时，每一个英语单词对“老鼠”的贡献都是相同的。如果引入了Attention模型，那么mouse对于它的影响应该是最大的。</p>
<h2 id="attention机制原理" tabindex="-1"><a class="header-anchor" href="#attention机制原理" aria-hidden="true">#</a> Attention机制原理</h2>
<p>为了解决上面两个问题，于是引入了Attention模型。Attention模型的特点是Decoder不再将整个输入序列编码为固定长度的中间语义向量$C$ ，而是根据当前生成的新单词计算新的$C_i$，使得每个时刻输入不同的$C$，这样就解决了单词信息丢失的问题。引入了Attention的Encoder-Decoder模型如下图：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention.png" alt="attention"></p>
<p>对于刚才提到的那个“猫捉老鼠”的翻译过程变成了如下：
$$
\begin{aligned}
&amp;y_1=g(C_1,h^{'}_0)\
&amp;y_2=g(C_2,y_1)\
&amp;y_3=g(C_3,y_1,y_2)
\end{aligned}
$$
整个翻译流程如下：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-2.png" alt="attention-2"></p>
<p>图中输入是<code v-pre>Cat chase mouse</code>，Encoder中隐层$h_1$、$h_2$、$h_3$可看作经过计算<code v-pre>Cat、chase、mouse</code>这些词的信息。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-3.png" alt="attention-3"></p>
<p>使用$a_{ij}$表示Encoder中第$j$阶段的$h_j$和解码时第$i$阶段的相关性，计算出解码需要的中间语义向量$C_i$。$C_1$和 “猫” 关系最近，相对应的$a_{11}$要比$a_{12}$、$a_{13}$大；而$C_2$和 “捉” 关系最近，相对应的$a_{22}$要比$a_{21}$、$a_{23}$大；同理$C_3$和 “老鼠” 关系最近，相对应的$a_{33}$要比$a_{31}$、$a_{32}$大。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-4.png" alt="attention-4"></p>
<p>那么参数$a_{ij}$是如何得到呢？</p>
<p>Encoder中第$j$个隐层单元$h_j$和Decoder第$i-1$个隐层单元$h^{'}<em>{i-1}$经过运算得到$a</em>{ij}$。</p>
<p>例如$a_{1j}$的计算过程：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-5.png" alt="attention-5"></p>
<p>例如$a_{2j}$的计算过程：</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-6.png" alt="attention-6"></p>
<p>那具体是怎么运算得到的呢？我们来把上面的过程用公式严谨的表达出来。我们按照原论文的标点符号来进行推导。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-7.png" alt="attention-7"></p>
<p>语义向量$c_i$由Encoder的隐向量$h_i$加权求和表示：
$$
c_i=\sum^{T_x}<em>{j=1}\alpha</em>{ij}h_j
$$
每个隐向量$h_j$对应的权重$\alpha_{ij}$可由下式计算得到：
$$
\alpha_{ij}=\frac{\text{exp}(e_{ij})}{\sum^{T_x}<em>{k=1}\text{exp}(e</em>{ik})}
$$
其中，
$$
e_{ij}=\alpha(s_{i-1},h_j)
$$
上式中的$s_{i-1}$就是上图中的$h^{'}_{i-1}$。</p>
<p>这个$\alpha$具体怎么算，有不同的方法，论文里是用了神经网络去算，
$$
e_{ij}=\alpha(s_{i-1},h_j)=v^T\text{tanh}(Ws_{i-1}+Vh_j)
$$
还可以用二次型矩阵来计算：
$$
e_{ij}=\alpha(s_{i-1},h_j)=s_{i-1}W_{i-1,j}h_j
$$
通过训练，注意力机制可以对关系较大的输入输出的赋以较大权重（两者在转换中对齐的概率更大），对位置信息进行了建模，而因此减少了信息损失，能专注于更重要的信息进行序列预测。</p>
<p>我们可以看到，attention的效果如下图所示，确实是不同单词的注意力是不一样的。</p>
<p><img src="@source/blogs/natural-language-processing/seq2seq-and-attention-mechanism/pic/attention-8.png" alt="attention-8"></p>
<p>这是Attention Mechanism第一次找到很合适的用武之地。在BERT中，还会用到Attention Mechanism。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/wshixinshouaaa/article/details/80085668" target="_blank" rel="noopener noreferrer">详解从 Seq2Seq模型、RNN结构、Encoder-Decoder模型 到 Attention模型<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_39671140/article/details/88240612" target="_blank" rel="noopener noreferrer">从seq2seq到谷歌BERT，浅谈对Attention Mechanism的理解<ExternalLinkIcon/></a></li>
</ul>
<p>对注意力机制的解释参考了此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/malefactor/article/details/50550211" target="_blank" rel="noopener noreferrer">自然语言处理中的Attention Model：是什么及为什么<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/malefactor/article/details/50583474" target="_blank" rel="noopener noreferrer">以Attention Model为例谈谈两种研究创新模式<ExternalLinkIcon/></a></li>
</ul>
<p>这两个还没看，但是这是张俊林写的需要好好看看。所以就列在这了。</p>
<p>===</p>
<p><a href="https://study.163.com/course/courseMain.htm?courseId=1006498029" target="_blank" rel="noopener noreferrer">Seq2Seq 与attention机制 网易公开课<ExternalLinkIcon/></a></p>
<p><a href="http://f.dataguru.cn/thread-907291-1-1.html" target="_blank" rel="noopener noreferrer">如何理解Seq2Seq？<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/28054589" target="_blank" rel="noopener noreferrer">完全图解RNN、RNN变体、Seq2Seq、Attention机制<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/jerr__y/article/details/53749693" target="_blank" rel="noopener noreferrer">Seq2Seq学习笔记<ExternalLinkIcon/></a></p>
<p>Seq2Seq 模型分析</p>
<p>首先介绍几篇比较重要的 Seq2Seq 相关的论文： 
[1] Cho et al., 2014 . Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation 
[2] Sutskever et al., 2014. Sequence to Sequence Learning with Neural Networks 
[3] Bahdanau et al., 2014. Neural Machine Translation by Jointly Learning to Align and Translate 
[4] Jean et. al., 2014. On Using Very Large Target Vocabulary for Neural Machine Translation 
[5] Vinyals et. al., 2015. A Neural Conversational Model[J]. Computer Science</p>
<p><a href="https://blog.csdn.net/qq_32241189/article/details/81591456" target="_blank" rel="noopener noreferrer">NLP之Seq2Seq<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/weixin_37479258/article/details/99887469" target="_blank" rel="noopener noreferrer">翻译系统/聊天机器人Seq2Seq模型+attention<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/40920384" target="_blank" rel="noopener noreferrer">真正的完全图解Seq2Seq Attention模型<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/weixin_39671140/article/details/88240612" target="_blank" rel="noopener noreferrer">从seq2seq到谷歌BERT，浅谈对Attention Mechanism的理解<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/ziyi9663/article/details/109989814" target="_blank" rel="noopener noreferrer">tensorflow2.0官网demo学习笔记 基于attention的seq2seq机器翻译<ExternalLinkIcon/></a></p>
<p>这个有tf官网的代码，有空跑起来试试。</p>
<p><a href="https://www.zhihu.com/question/68482809/answer/264632289" target="_blank" rel="noopener noreferrer">目前主流的attention方法都有哪些？ 张俊林<ExternalLinkIcon/></a></p>
<p>张俊林写的，已经看过了其注意力模块，有空仔细看后半部分的自注意力部分。</p>
<p><a href="https://www.zhihu.com/question/68482809/answer/1876764572" target="_blank" rel="noopener noreferrer">目前主流的attention方法都有哪些？「Attention九层塔——理解Attention的九层境界」<ExternalLinkIcon/></a></p>
</div></template>


