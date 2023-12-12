<template><div><h1 id="transformer模型tf2官网demo代码解读" tabindex="-1"><a class="header-anchor" href="#transformer模型tf2官网demo代码解读" aria-hidden="true">#</a> Transformer模型TF2官网demo代码解读</h1>
<ul>
<li><RouterLink to="/docs/Engineering/natural-language-processing/self-attention-and-transformer/self-attention-and-transformer.html">返回上层目录</RouterLink></li>
</ul>
<p>TensorFlow官网有一个Transformer的demo，即</p>
<p><a href="https://www.tensorflow.org/tutorials/text/transformer" target="_blank" rel="noopener noreferrer">理解语言的 Transformer 模型<ExternalLinkIcon/></a>（如果打不开，需要科学上网），本文针对此略微进行结构调整（但代码不变），然后进行讲解。</p>
<p>调整后的整个代码分为三部分：</p>
<ul>
<li>params.py  一些配置参数</li>
<li>transformer_model.py 模型结构</li>
<li>run_demo.py 运行，包括数据产出、模型加载、训练、预测等</li>
</ul>
<h1 id="配置参数params-py" tabindex="-1"><a class="header-anchor" href="#配置参数params-py" aria-hidden="true">#</a> 配置参数params.py</h1>
<p>这块的代码如下所示，不多，也很好理解，不再多说，即便不理解也不用管，接着往下看。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 数据来源</span>
DATA_PATH <span class="token operator">=</span> <span class="token string">'ted_hrlr_translate/pt_to_en'</span>
<span class="token comment"># 读取数据的buffer</span>
BUFFER_SIZE <span class="token operator">=</span> <span class="token number">20000</span>
<span class="token comment"># 数据的batch size</span>
BATCH_SIZE <span class="token operator">=</span> <span class="token number">64</span>

<span class="token comment"># 为了使训练速度变快，我们删除长度大于40个单词的样本。</span>
MAX_LENGTH <span class="token operator">=</span> <span class="token number">40</span>
<span class="token comment"># 训练的轮次</span>
EPOCHS <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="模型结构transformer-model-py" tabindex="-1"><a class="header-anchor" href="#模型结构transformer-model-py" aria-hidden="true">#</a> 模型结构transformer_model.py</h1>
<p>导入模型所需的包：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token triple-quoted-string string">'''
本代码为 理解语言的Transformer模型 中的代码实现
https://www.tensorflow.org/tutorials/text/transformer
本教程训练了一个Transformer模型 用于将葡萄牙语翻译成英语。
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="位置编码" tabindex="-1"><a class="header-anchor" href="#位置编码" aria-hidden="true">#</a> 位置编码</h2>
<p>Transformer 模型本身不具备像循环神经网络那样的学习词序信息的能力，所以我们需要主动地将词序信息输入模型。那么，模型原先的输入是不含词序信息的词向量，位置编码需要将词序信息和词向量结合起来形成一种新的表示输入给模型（在编码器和解码器中使用），这样模型就具备了学习词序信息的能力。</p>
<p>计算位置编码的公式如下：
$$
\begin{aligned}
PE_{(pos,2i)}&amp;=sin(\frac{pos}{10000^{2i/d_{model}}})\
PE_{(pos,2i+1)}&amp;=cos(\frac{pos}{10000^{2i/d_{model}}})
\end{aligned}
$$
其中，$pos$是单词的位置索引，设句子长度为$L$，那么$pos = 0, 1, ..., L−1$。$i$是向量的某一维度，假设词向量维度$d_{model} = 512$，那么$i = 0 , 1 , . . . , 255$。</p>
<p>举例来说，假设$$d_{model} =5$$，那么在一个样本中：</p>
<p>第一个单词的位置编码为：
$$
\left[ sin(\frac{0}{10000^{\frac{2\times 0}{5}}})\quad cos(\frac{0}{10000^{\frac{2\times 0}{5}}})\quad sin(\frac{0}{10000^{\frac{2\times 1}{5}}})\quad cos(\frac{0}{10000^{\frac{2\times 1}{5}}})\quad sin(\frac{0}{10000^{\frac{2\times 2}{5}}})\right]
$$
第二个单词的位置编码为：
$$
\left[ sin(\frac{1}{10000^{\frac{2\times 0}{5}}})\quad cos(\frac{1}{10000^{\frac{2\times 0}{5}}})\quad sin(\frac{1}{10000^{\frac{2\times 1}{5}}})\quad cos(\frac{1}{10000^{\frac{2\times 1}{5}}})\quad sin(\frac{1}{10000^{\frac{2\times 2}{5}}})\right]
$$</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
<span class="token comment"># ===================位置编码=====================</span>
<span class="token comment"># 因为该模型并不包括任何的循环（recurrence）或卷积，所以模型添加了位置编码，为模型提供一些关于单词在句子中相对位置的信息。</span>

<span class="token comment"># 位置编码向量被加到嵌入（embedding）向量中。嵌入表示一个d维空间的标记，在d维空间中有着相似含义的标记会离彼此更近。</span>
<span class="token comment"># 但是，嵌入并没有对在一句话中的词的相对位置进行编码。因此，当加上位置编码后，</span>
<span class="token comment"># 词将基于它们含义的相似度以及它们在句子中的位置，在d维空间中离彼此更近。</span>
<span class="token keyword">def</span> <span class="token function">get_angles</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> i<span class="token punctuation">,</span> d_model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""就是计算公式里sin和cos括号里的，参数类型是我根据下面的代码推测的，方便理解本函数
    Args:
        pos: ndarray型
        i: ndarray型，注意，这里的i和公式里的i不一样，这里的i是公式里的2i和2i+1，所以在代码里要用//地板除
        d_model: int型
    Returns:
        计算公式里sin和cos括号里的部分
    """</span>
    angle_rates <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> np<span class="token punctuation">.</span>power<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i<span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> np<span class="token punctuation">.</span>float32<span class="token punctuation">(</span>d_model<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 以后面的调用为例，传入的pos是维度(50,1)的ndarray，i是维度(1,512)的ndarray，d_model是整型512</span>
    <span class="token comment"># 于是angle_rates也是(1,512)的ndarray</span>

    <span class="token keyword">return</span> pos <span class="token operator">*</span> angle_rates
    <span class="token comment"># 于是返回值pos * angle_rates的维度就是(50,512)</span>
    <span class="token comment"># 从这里也可以看到，位置编码是根据position的值一下子把整个序列的每一时间步的编码都算出来的</span>
    <span class="token comment"># 实际用的时候，根据序列长度，对位置编码切片取值</span>


<span class="token keyword">def</span> <span class="token function">positional_encoding</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> d_model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># np.newaxis的作用是增加一个维度</span>
    <span class="token comment"># position行：np.arange(position)[:, np.newaxis]</span>
    <span class="token comment"># d_model列：np.arange(d_model)[np.newaxis, :]</span>
    angle_rads <span class="token operator">=</span> get_angles<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>newaxis<span class="token punctuation">]</span><span class="token punctuation">,</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>d_model<span class="token punctuation">)</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>newaxis<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> d_model<span class="token punctuation">)</span>
    <span class="token comment"># 将 sin 应用于数组中的偶数索引（indices）；2i</span>
    angle_rads<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> np<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>angle_rads<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># 将 cos 应用于数组中的奇数索引；2i+1</span>
    angle_rads<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>angle_rads<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    pos_encoding <span class="token operator">=</span> angle_rads<span class="token punctuation">[</span>np<span class="token punctuation">.</span>newaxis<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
    <span class="token comment"># 最后的维度是(1,position,d_model)</span>
    <span class="token keyword">return</span> tf<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>pos_encoding<span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码本身很简单，认真看就能理解，唯一理解可能有难度的就是里面的矩阵相乘用到了广播机制。</p>
<p>然后我们测试一下，画一个位置编码的图：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 简单测试下positional_encoding函数：</span>
pos_encoding <span class="token operator">=</span> positional_encoding<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pos_encoding<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>pcolormesh<span class="token punctuation">(</span>pos_encoding<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cmap<span class="token operator">=</span><span class="token string">'RdBu'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'Depth'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlim<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'Position'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>colorbar<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Engineering/natural-language-processing/self-attention-and-transformer/transformer-tf2-demo-code-explain/pic/positional-encoding.png" alt="positional-encoding"></p>
<h2 id="遮挡" tabindex="-1"><a class="header-anchor" href="#遮挡" aria-hidden="true">#</a> 遮挡</h2>
<h3 id="填充遮挡" tabindex="-1"><a class="header-anchor" href="#填充遮挡" aria-hidden="true">#</a> 填充遮挡</h3>
<p>当句子的长度小于规定的长度时，在后面的空白处要遮挡，即后面的空白处的填充遮挡补1。</p>
<p>在填充值0出现的位置mask输出1，否则输出0。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># ===================遮挡========================</span>
<span class="token comment"># 填充遮挡</span>
<span class="token comment"># 遮挡一批序列中所有的填充标记（即将文本转换到数字向量后标记为零的位置）。</span>
<span class="token comment"># 这确保了模型不会将填充作为输入。在填充值0出现的位置mask输出1，否则输出0。</span>
<span class="token keyword">def</span> <span class="token function">create_padding_mask</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""创建padding mask，功能上来说，就是对于把序列中不是0的换成0，0换成1，1就表示被遮挡了
    Args:
        seq:输入的数据，维度是(batch_size,seq_len)
    Returns:
        处理后的结果，顺便增加了维度，变成(batch_size, 1, 1, seq_len)
    """</span>
    seq <span class="token operator">=</span> tf<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>math<span class="token punctuation">.</span>equal<span class="token punctuation">(</span>seq<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>

    <span class="token comment"># 这个tf.newaxis和np.newaxis效果一样</span>
    <span class="token keyword">return</span> seq<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> tf<span class="token punctuation">.</span>newaxis<span class="token punctuation">,</span> tf<span class="token punctuation">.</span>newaxis<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment"># (batch_size, 1, 1, seq_len)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试一下</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># create_padding_mask的调用示例：</span>
x <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>create_padding_mask<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>tf.Tensor(
[[[[0. 0. 1. 1. 0.]]]
 [[[0. 0. 0. 1. 1.]]]
 [[[1. 1. 1. 0. 0.]]]], shape=(3, 1, 1, 5), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前瞻遮挡" tabindex="-1"><a class="header-anchor" href="#前瞻遮挡" aria-hidden="true">#</a> 前瞻遮挡</h3>
<p>前瞻遮挡用于遮挡未来的信息。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 前瞻遮挡</span>
<span class="token keyword">def</span> <span class="token function">create_look_ahead_mask</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    关于tf.linalg.band_part函数：
    这是个关于三角阵操作的函数，函数api手册说得挺花哨的，功能就是保留矩阵的非主对角线元素，其余的换成0
    接收三个参数：
    input: 输入的张量;
    num_lower ：指定保留的主对角线下方的副对角线的数量，输入数值为负数时，表示下方的对角矩阵元素全部保留；
    num_upper：指定保留的主对角线上方的副对角线的数量，输入数值为负数时，表示上方的对角矩阵元素全部保留；
    这样解释就很清晰明了了，自己跑一跑就更清楚了
    """</span>
    mask <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">-</span> tf<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>band_part<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment"># 先产生个幺矩阵，再把主对角线上方的元素置零，变成了下三角阵，1减这个下三角阵，又变成了上三角阵（此时主对角线也全是0）</span>
    <span class="token comment"># 在模型中的作用，后续会有解释，目前先记住代码功能就行</span>
    <span class="token keyword">return</span> mask  <span class="token comment"># (seq_len, seq_len)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试一下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 测试下上面的函数：</span>
x <span class="token operator">=</span> tf<span class="token punctuation">.</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>create_look_ahead_mask<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>tf.Tensor(
[[0. 1. 1. 1.]
 [0. 0. 1. 1.]
 [0. 0. 0. 1.]
 [0. 0. 0. 0.]], shape=(4, 4), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成所有遮挡" tabindex="-1"><a class="header-anchor" href="#生成所有遮挡" aria-hidden="true">#</a> 生成所有遮挡</h3>
<p>在编码器中，我们对其中唯一的注意力模块使用填充遮挡；在解码器中，我们对其中第一个注意力模块使用填充遮挡和前瞻遮挡，对第二个注意力模块使用填充遮挡。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 在编码器中，我们对其中唯一的注意力模块使用填充遮挡；</span>
<span class="token comment"># 在解码器中，我们对其中第一个注意力模块使用填充遮挡和前瞻遮挡，对第二个注意力模块使用填充遮挡。</span>
<span class="token keyword">def</span> <span class="token function">create_masks</span><span class="token punctuation">(</span>inp<span class="token punctuation">,</span> tar<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 编码器填充遮挡</span>
    enc_padding_mask <span class="token operator">=</span> create_padding_mask<span class="token punctuation">(</span>inp<span class="token punctuation">)</span>

    <span class="token comment"># 在解码器的第二个注意力模块使用。</span>
    <span class="token comment"># 该填充遮挡用于遮挡编码器的输出。</span>
    dec_padding_mask <span class="token operator">=</span> create_padding_mask<span class="token punctuation">(</span>inp<span class="token punctuation">)</span>

    <span class="token comment"># 在解码器的第一个注意力模块使用。</span>
    <span class="token comment"># 用于填充（pad）和遮挡（mask）解码器获取到的输入的后续标记（future tokens）。</span>
    look_ahead_mask <span class="token operator">=</span> create_look_ahead_mask<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>shape<span class="token punctuation">(</span>tar<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># 1、前瞻mask，tar即目标数据，维度是batch_size × tar_seq_len × embedding_dims</span>
    <span class="token comment"># 可以回忆下create_look_ahead_mask函数，生成一个上三角阵，维度是tar_seq_len × tar_seq_len，对角线及其以下都是0，其他的是1</span>
    <span class="token comment"># 对于tar的一条数据来说，第i个时间步，对应前瞻mask的第i行，i及i前面的mask是0，后面的是1（表示遮挡），so easy</span>
    dec_target_padding_mask <span class="token operator">=</span> create_padding_mask<span class="token punctuation">(</span>tar<span class="token punctuation">)</span>
    <span class="token comment"># 2、填充mask</span>
    combined_mask <span class="token operator">=</span> tf<span class="token punctuation">.</span>maximum<span class="token punctuation">(</span>dec_target_padding_mask<span class="token punctuation">,</span> look_ahead_mask<span class="token punctuation">)</span>
    <span class="token comment"># 用maximum函数，这样两个mask只要有一个是1的地方，combined mask对应位置就是1</span>

    <span class="token keyword">return</span> enc_padding_mask<span class="token punctuation">,</span> combined_mask<span class="token punctuation">,</span> dec_padding_mask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意力机制" tabindex="-1"><a class="header-anchor" href="#注意力机制" aria-hidden="true">#</a> 注意力机制</h2>
<p>这部分的代码是进行如下图和下式的运算</p>
<p><img src="@source/docs/Engineering/natural-language-processing/self-attention-and-transformer/transformer-tf2-demo-code-explain/pic/self-attention-gpu.jpg" alt="self-attention-gpu"></p>
<p>用公式表示即为
$$
\text{Attention}(Q,K,V)=\text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V具体代码如下。祝
$$
具体代码如下。注意，下面函数<code v-pre>scaled_dot_product_attention</code>的输入<code v-pre>q,k,v</code>为矩阵形式，内容为
$$
\begin{aligned}
q&amp;=XW^Q=Q\
k&amp;=XW^K=K\
q&amp;=XW^V=V\
\end{aligned}
$$</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># ===================Scaled dot-product attention======================</span>
<span class="token keyword">def</span> <span class="token function">scaled_dot_product_attention</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> mask<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""计算注意力权重。
    q, k, v必须具有匹配的前置维度。
    k, v必须有匹配的倒数第二个维度，例如：seq_len_k = seq_len_v。
    虽然mask根据其类型（填充或前瞻）有不同的形状，
    但是mask必须能进行广播转换以便求和。

    参数:
    q: 请求的形状 == (..., seq_len_q, depth)
    k: 主键的形状 == (..., seq_len_k, depth)
    v: 数值的形状 == (..., seq_len_v, depth_v)
    mask: Float 张量，其形状能转换成
          (..., seq_len_q, seq_len_k)。默认为None。

    返回值:
    输出，注意力权重
    """</span>

    matmul_qk <span class="token operator">=</span> tf<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>q<span class="token punctuation">,</span> k<span class="token punctuation">,</span> transpose_b<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># (..., seq_len_q, seq_len_k)</span>
    <span class="token comment"># tf.matmul，就是矩阵乘法，会自动处理好batch等维度</span>
    <span class="token comment"># transpose_b=True就是先把右乘的矩阵转置再计算</span>
    <span class="token comment"># 最后得到的矩阵维度就是(..., seq_len_q, seq_len_k)</span>
    <span class="token comment"># 这一步就是计算公式里的q，k内积，不清楚的可以去官方页面查看公式</span>
    <span class="token comment"># q，k，v什么含义一定要先看明白</span>

    <span class="token comment"># 缩放 matmul_qk</span>
    dk <span class="token operator">=</span> tf<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>shape<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>
    scaled_attention_logits <span class="token operator">=</span> matmul_qk <span class="token operator">/</span> tf<span class="token punctuation">.</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>dk<span class="token punctuation">)</span>

    <span class="token comment"># 将 mask 加入到缩放的张量上。</span>
    <span class="token keyword">if</span> mask <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        scaled_attention_logits <span class="token operator">+=</span> <span class="token punctuation">(</span>mask <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">1e9</span><span class="token punctuation">)</span>
    <span class="token comment"># 遮挡（mask）与-1e9（接近于负无穷）相乘。这样做是因为遮挡与缩放的Q和K的矩阵乘积相加，</span>
    <span class="token comment"># 并在softmax之前立即应用。目标是将这些单元归零，因为softmax的较大负数输入在输出中接近于零。</span>
    <span class="token comment"># 原文没对这个做说明，我的理解是，需要屏蔽的位置(比如序列长度不足填充0的地方)，</span>
    <span class="token comment"># mask矩阵对应的位置就是1(可以看一下前面创建mask的两个函数)</span>

    <span class="token comment"># softmax在最后一个轴（seq_len_k）上归一化，因此分数相加等于1。</span>
    attention_weights <span class="token operator">=</span> tf<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>softmax<span class="token punctuation">(</span>scaled_attention_logits<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># (..., seq_len_q, seq_len_k)</span>

    output <span class="token operator">=</span> tf<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>attention_weights<span class="token punctuation">,</span> v<span class="token punctuation">)</span>  <span class="token comment"># (..., seq_len_q, depth_v)</span>

    <span class="token keyword">return</span> output<span class="token punctuation">,</span> attention_weights
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来简单测试一下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 测试scaled_dot_product_attention</span>
np<span class="token punctuation">.</span>set_printoptions<span class="token punctuation">(</span>suppress<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 设置supress=True意味着打印出来的小数不用科学记数法</span>
<span class="token comment"># 用于测试下qkv计算的函数</span>
<span class="token keyword">def</span> <span class="token function">print_out</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">:</span>
    temp_out<span class="token punctuation">,</span> temp_attn <span class="token operator">=</span> scaled_dot_product_attention<span class="token punctuation">(</span>q<span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Attention weights are:'</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>temp_attn<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Output is:'</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>temp_out<span class="token punctuation">)</span>

<span class="token comment"># 随机给个q、k、v瞧瞧：</span>
temp_q <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 3)</span>
temp_k <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 3)</span>
temp_v <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 2)</span>
print_out<span class="token punctuation">(</span>temp_q<span class="token punctuation">,</span> temp_k<span class="token punctuation">,</span> temp_v<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Attention weights are:
tf.Tensor(
[[[0.64045745 0.35954252]
  [0.35954252 0.64045745]]

 [[0.64045745 0.35954252]
  [0.35954252 0.64045745]]], shape=(2, 2, 2), dtype=float32)
Output is:
tf.Tensor(
[[[1.3595425 0.       ]
  [1.6404574 0.       ]]

 [[1.3595425 0.       ]
  [1.6404574 0.       ]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们其实还是不是那么清楚到底函数里面是怎么算的，那我们就一步步来把函数里面的算法过一遍。</p>
<p>先<strong>定义输入的变量$q,k,v$</strong>：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>q <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 3)</span>
k <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 3)</span>
v <span class="token operator">=</span> tf<span class="token punctuation">.</span>constant<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>  <span class="token comment"># (batch_size, 4, 2)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"q ="</span><span class="token punctuation">,</span> q<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"k ="</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"v ="</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可得：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>q = tf.Tensor(
[[[0. 1. 0.]
  [0. 0. 1.]]

 [[0. 1. 0.]
  [0. 0. 1.]]], shape=(2, 2, 3), dtype=float32)

k = tf.Tensor(
[[[1. 2. 0.]
  [0. 1. 1.]]

 [[1. 2. 0.]
  [0. 1. 1.]]], shape=(2, 2, 3), dtype=float32)

v = tf.Tensor(
[[[1. 0.]
  [2. 0.]]

 [[1. 0.]
  [2. 0.]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去掉batch，$q,k,v$分别为
$$
q=\begin{bmatrix}
0 &amp; 1 &amp; 0\
0 &amp; 0 &amp; 1
\end{bmatrix},
k=\begin{bmatrix}
1 &amp; 2 &amp; 0\
0 &amp; 1 &amp; 1
\end{bmatrix},
v=\begin{bmatrix}
2 &amp; 1\
0 &amp; 1
\end{bmatrix}
$$
为什么$v$和$q,k$的维度不同呢？因为我故意的，从理论上是可以不同的，但是$q$和$k$需要矩阵相乘，所以维度必须要相同。</p>
<p>然后<strong>计算$q$和$k$的矩阵相乘的结果</strong>，</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>matmul_qk <span class="token operator">=</span> tf<span class="token punctuation">.</span>matmul<span class="token punctuation">(</span>q<span class="token punctuation">,</span> k<span class="token punctuation">,</span> transpose_b<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># (..., seq_len_q, seq_len_k)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"matmul_qk ="</span><span class="token punctuation">,</span> matmul_qk<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>matmul_qk = tf.Tensor(
[[[2. 1.]
  [0. 1.]]

 [[2. 1.]
  [0. 1.]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来手算验证一下：
$$
qk^T=\begin{bmatrix}
0 &amp; 1 &amp; 0\
0 &amp; 0 &amp; 1
\end{bmatrix}
\begin{bmatrix}
1 &amp; 2 &amp; 0\
0 &amp; 1 &amp; 1
\end{bmatrix}^T
=\begin{bmatrix}
0 &amp; 1 &amp; 0\
0 &amp; 0 &amp; 1
\end{bmatrix}
\begin{bmatrix}
1 &amp; 0\
2 &amp; 1\
0 &amp; 1
\end{bmatrix}
=\begin{bmatrix}
2 &amp; 1\
0 &amp; 1
\end{bmatrix}
$$
和代码计算结果一致。</p>
<p>然后<strong>除以$\sqrt{d_k}$进行修正</strong>，防止维数过高时$QK^T$的值过大导致softmax函数反向传播时发生梯度消失。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dk <span class="token operator">=</span> tf<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>shape<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>
scaled_attention_logits <span class="token operator">=</span> matmul_qk <span class="token operator">/</span> tf<span class="token punctuation">.</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>dk<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"dk ="</span><span class="token punctuation">,</span> dk<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"scaled_attention_logits ="</span><span class="token punctuation">,</span> scaled_attention_logits<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>dk = tf.Tensor(3.0, shape=(), dtype=float32)
scaled_attention_logits = tf.Tensor(
[[[1.1547005  0.57735026]
  [0.         0.57735026]]

 [[1.1547005  0.57735026]
  [0.         0.57735026]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来手算验证一下：
$$
\frac{qk^T}{\sqrt{d_k}}=\frac
{\begin{bmatrix}
2 &amp; 1\
0 &amp; 1
\end{bmatrix}}
{\sqrt{3}}
={\begin{bmatrix}
1.1547005 &amp; 0.57735026\
0 &amp; 0.57735026
\end{bmatrix}}
$$
和代码计算结果一致。</p>
<p>然后进行softmax得到attention的权重：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>attention_weights <span class="token operator">=</span> tf<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>softmax<span class="token punctuation">(</span>scaled_attention_logits<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># (..., seq_len_q, seq_len_k)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"attention_weights ="</span><span class="token punctuation">,</span> attention_weights<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>attention_weights = tf.Tensor(
[[[0.64045745 0.35954252]
  [0.35954252 0.64045745]]

 [[0.64045745 0.35954252]
  [0.35954252 0.64045745]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来手算验证一下：
$$
\begin{aligned}
\text{attention_weights}&amp;=\text{softmax}\left(\frac{qk^T}{\sqrt{d_k}}\right)\
&amp;=\text{softmax}(\frac
{\begin{bmatrix}
2 &amp; 1\
0 &amp; 1
\end{bmatrix}}
{\sqrt{3}})\
&amp;=\text{softmax}\begin{pmatrix}
1.1547005 &amp; 0.57735026\
0 &amp; 0.57735026
\end{pmatrix}\
&amp;=\begin{bmatrix}
\frac{\text{exp}(1.1547005)}{\text{exp}(1.1547005) + \text{exp}(0.5773502)} &amp; \frac{\text{exp}(0.5773502)}{\text{exp}(1.1547005) + \text{exp}(0.5773502)}\
\frac{\text{exp}(0)}{\text{exp}(0) + \text{exp}(0.5773502)} &amp; \frac{\text{exp}(0.5773502)}{\text{exp}(0) + \text{exp}(0.5773502)}
\end{bmatrix}\
&amp;=\begin{bmatrix}
0.64045745 &amp; 0.35954252\
0.35954252 &amp; 0.64045745
\end{bmatrix}
\end{aligned}
$$
最后，我们计算Attention层输出的向量，即
$$
\text{Attention}(Q,K,V)=\text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$
其实也就是
$$
\begin{aligned}
&amp;z_1=\theta_{11}v_1+\theta_{12}v_2\
&amp;z_2=\theta_{21}v_1+\theta_{22}v_2
\end{aligned}
$$
其中，组合权重（即所谓的权值矩阵）$\theta$为：
$$
\begin{aligned}
&amp;[\theta_{11},\theta_{12}]=\text{softmax}\left(\frac{q_1k^T_1}{\sqrt{d_k}},\quad \frac{q_1k^T_2}{\sqrt{d_k}}\right)\
&amp;[\theta_{21},\theta_{22}]=\text{softmax}\left(\frac{q_2k^T_1}{\sqrt{d_k}},\quad \frac{q_2k^T_2}{\sqrt{d_k}}\right)
\end{aligned}
$$
用代码表示为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>output = tf.matmul(attention_weights, v)
print("output =", output)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>output = tf.Tensor(
[[[1.3595425 0.       ]
  [1.6404574 0.       ]]

 [[1.3595425 0.       ]
  [1.6404574 0.       ]]], shape=(2, 2, 2), dtype=float32)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来手动验算一下：
$$
\begin{aligned}
z&amp;=\text{softmax}\left(\frac{qk^T}{\sqrt{d_k}}\right)v\
&amp;=\text{softmax}(\frac
{\begin{bmatrix}
2 &amp; 1\
0 &amp; 1
\end{bmatrix}}
{\sqrt{3}})\begin{bmatrix}
1 &amp; 0\
2 &amp; 0
\end{bmatrix}\
&amp;=\text{softmax}\begin{pmatrix}
1.1547005 &amp; 0.57735026\
0 &amp; 0.57735026
\end{pmatrix}
\begin{bmatrix}
1 &amp; 0\
2 &amp; 0
\end{bmatrix}\
&amp;=\begin{bmatrix}
\frac{\text{exp}(1.1547005)}{\text{exp}(1.1547005) + \text{exp}(0.5773502)} &amp; \frac{\text{exp}(0.5773502)}{\text{exp}(1.1547005) + \text{exp}(0.5773502)}\
\frac{\text{exp}(0)}{\text{exp}(0) + \text{exp}(0.5773502)} &amp; \frac{\text{exp}(0.5773502)}{\text{exp}(0) + \text{exp}(0.5773502)}
\end{bmatrix}
\begin{bmatrix}
1 &amp; 0\
2 &amp; 0
\end{bmatrix}\
&amp;=\begin{bmatrix}
0.64045745 &amp; 0.35954252\
0.35954252 &amp; 0.64045745
\end{bmatrix}
\begin{bmatrix}
1 &amp; 0\
2 &amp; 0
\end{bmatrix}\
&amp;=\begin{bmatrix}
1.3595425 &amp; 0\
1.6404574 &amp; 0
\end{bmatrix}
\end{aligned}
$$
即
$$
\begin{aligned}
z_1&amp;=\begin{bmatrix}
1.3595425 &amp; 0
\end{bmatrix}\
z_2&amp;=\begin{bmatrix}
1.6404574 &amp; 0
\end{bmatrix}
\end{aligned}
$$</p>
<h2 id="多头注意力" tabindex="-1"><a class="header-anchor" href="#多头注意力" aria-hidden="true">#</a> 多头注意力</h2>
<h2 id="点式前馈网络" tabindex="-1"><a class="header-anchor" href="#点式前馈网络" aria-hidden="true">#</a> 点式前馈网络</h2>
<h2 id="编码与解码" tabindex="-1"><a class="header-anchor" href="#编码与解码" aria-hidden="true">#</a> 编码与解码</h2>
<h3 id="编码器层" tabindex="-1"><a class="header-anchor" href="#编码器层" aria-hidden="true">#</a> 编码器层</h3>
<h3 id="解码器层" tabindex="-1"><a class="header-anchor" href="#解码器层" aria-hidden="true">#</a> 解码器层</h3>
<h3 id="编码器" tabindex="-1"><a class="header-anchor" href="#编码器" aria-hidden="true">#</a> 编码器</h3>
<h3 id="解码器" tabindex="-1"><a class="header-anchor" href="#解码器" aria-hidden="true">#</a> 解码器</h3>
<h2 id="自定义学习率调用程序" tabindex="-1"><a class="header-anchor" href="#自定义学习率调用程序" aria-hidden="true">#</a> 自定义学习率调用程序</h2>
<h1 id="运行run-demo-py" tabindex="-1"><a class="header-anchor" href="#运行run-demo-py" aria-hidden="true">#</a> 运行run_demo.py</h1>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.tensorflow.org/tutorials/text/transformer" target="_blank" rel="noopener noreferrer">理解语言的 Transformer 模型<ExternalLinkIcon/></a></li>
</ul>
<p>这是官网的demo。</p>
<ul>
<li><a href="https://blog.csdn.net/qq_36758914/article/details/105465817" target="_blank" rel="noopener noreferrer">Tensorflow2.0之理解语言的 Transformer 模型<ExternalLinkIcon/></a></li>
</ul>
<p>本文的解释部分参考了此博客。</p>
</div></template>


