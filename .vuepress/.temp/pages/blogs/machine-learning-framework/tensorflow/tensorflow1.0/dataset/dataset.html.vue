<template><div><h1 id="tensorflow-dataset-api" tabindex="-1"><a class="header-anchor" href="#tensorflow-dataset-api" aria-hidden="true">#</a> TensorFlow Dataset API</h1>
<ul>
<li><RouterLink to="/blogs/machine-learning-framework/tensorflow/tensorflow1.0/tensorflow1.0.html">返回上层目录</RouterLink></li>
</ul>
<p><a href="https://zhuanlan.zhihu.com/p/30751039" target="_blank" rel="noopener noreferrer">TensorFlow全新的数据读取方式：Dataset API入门教程<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/weixin_39506322/article/details/82455860" target="_blank" rel="noopener noreferrer">Tensorflow学习——导入数据<ExternalLinkIcon/></a></p>
<h1 id="数据集来源" tabindex="-1"><a class="header-anchor" href="#数据集来源" aria-hidden="true">#</a> 数据集来源</h1>
<h2 id="from-tensor-slices" tabindex="-1"><a class="header-anchor" href="#from-tensor-slices" aria-hidden="true">#</a> from_tensor_slices</h2>
<p><code v-pre>from_tensors()</code> 这个函数会把传入的tensor当做一个元素,但是<code v-pre>from_tensor_slices()</code> 会把传入的tensor除开第一维之后的大小当做元素个数.比如上面<code v-pre>2x5</code> 的向量,我们得到的元素是其中每一个形状为<code v-pre>(5,)</code>的tensor。</p>
<p>它的真正作用是<strong>切分传入Tensor的第一个维度，生成相应的dataset。</strong></p>
<p>例如：</p>
<div class="language-python3 line-numbers-mode" data-ext="python3"><pre v-pre class="language-python3"><code>dataset = tf.data.Dataset.from_tensor_slices(np.random.uniform(size=(5, 2)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>传入的数值是一个矩阵，它的形状为(5, 2)，tf.data.Dataset.from_tensor_slices就会切分它形状上的第一个维度，最后生成的dataset中一个含有5个元素，每个元素的形状是(2, )，<strong>即每个元素是矩阵的一行。</strong></p>
<p><a href="https://blog.csdn.net/xierhacker/article/details/79002902" target="_blank" rel="noopener noreferrer">TensorFlow学习（十五）：使用tf.data来创建输入流(上)<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/30751039" target="_blank" rel="noopener noreferrer">TensorFlow全新的数据读取方式：Dataset API入门教程<ExternalLinkIcon/></a></p>
<h1 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h1>
<h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h2>
<p>repeat不指定次数的情况下，可无限延伸。</p>
<p>repeat的位置也很关键，如下两种就有明显差别</p>
<p>（1）<code v-pre>repeat()</code>紧跟在<code v-pre>Dataset</code>之后，当batch不满足5之后就会重复给。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dataset<span class="token operator">=</span>tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span>from_tensor_slices<span class="token punctuation">(</span>tensors<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">4.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>repeat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>buffer_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>batch<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
iterator<span class="token operator">=</span>dataset<span class="token punctuation">.</span>make_one_shot_iterator<span class="token punctuation">(</span><span class="token punctuation">)</span>
element<span class="token operator">=</span>iterator<span class="token punctuation">.</span>get_next<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> sess<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"elements of dataset:"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"epoch:"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---mini_batch:"</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>elements of dataset:
epoch: <span class="token number">0</span>
---mini_batch: <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">5</span>. <span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">4</span>. <span class="token number">5</span>. <span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>.<span class="token punctuation">]</span>
epoch: <span class="token number">1</span>
---mini_batch: <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">3</span>. <span class="token number">4</span>. <span class="token number">5</span>. <span class="token number">0</span>. <span class="token number">1</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>. <span class="token number">5</span>. <span class="token number">0</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>. <span class="token number">5</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）<code v-pre>repeat()</code>跟在<code v-pre>batch(5)</code>之后，当batch取没之后就会重复给。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dataset<span class="token operator">=</span>tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span>from_tensor_slices<span class="token punctuation">(</span>tensors<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">4.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>buffer_size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>batch<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>repeat<span class="token punctuation">(</span><span class="token punctuation">)</span>
iterator<span class="token operator">=</span>dataset<span class="token punctuation">.</span>make_one_shot_iterator<span class="token punctuation">(</span><span class="token punctuation">)</span>
element<span class="token operator">=</span>iterator<span class="token punctuation">.</span>get_next<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> sess<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"elements of dataset:"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"epoch:"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---mini_batch:"</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>elements of dataset:
epoch: <span class="token number">0</span>
---mini_batch: <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">5</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>.<span class="token punctuation">]</span>
epoch: <span class="token number">1</span>
---mini_batch: <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">5</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">0</span>. <span class="token number">1</span>. <span class="token number">2</span>. <span class="token number">3</span>. <span class="token number">4</span>.<span class="token punctuation">]</span>
---mini_batch: <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">5</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.cnblogs.com/marsggbo/p/9603789.html" target="_blank" rel="noopener noreferrer">Tensorflow datasets.shuffle repeat batch方法<ExternalLinkIcon/></a></p>
<h2 id="interleave" tabindex="-1"><a class="header-anchor" href="#interleave" aria-hidden="true">#</a> interleave</h2>
<p>interleave()是Dataset的类方法，所以interleave是作用在一个Dataset上的。</p>
<p>首先该方法会从该Dataset中取出cycle_length个element，然后对这些element apply map_func, 得到cycle_length个新的Dataset对象。然后从这些新生成的Dataset对象中取数据，每个Dataset对象一次取block_length个数据。当新生成的某个Dataset的对象取尽时，从原Dataset中再取一个element，然后apply map_func，以此类推。</p>
<p>cycle_length 和 block_length 参数元素的生成顺序.cycle_length 控制并发处理的输入元素的数量.如果将cycle_length 设置为1,则此转换将一次处理一个输入元素,并将产生与 tf.contrib.data.Dataset.flat_map 相同的结果.一般来说,这种转换将应用 map_func 到 cycle_length 的输入元素,在返回的 Dataset 对象上打开迭代器,并循环通过它们生成每个迭代器的 block_length 连续元素,并在每次到达迭代器结束时使用下一个输入元素.</p>
<p>例如：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dataset <span class="token operator">=</span> tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span>from_tensor_slices<span class="token punctuation">(</span>tensors<span class="token operator">=</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">4.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">,</span> <span class="token number">6.</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\
    <span class="token punctuation">.</span>interleave<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span>from_tensors<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>repeat<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cycle_length<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> block_length<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>

iterator<span class="token operator">=</span>dataset<span class="token punctuation">.</span>make_one_shot_iterator<span class="token punctuation">(</span><span class="token punctuation">)</span>
element<span class="token operator">=</span>iterator<span class="token punctuation">.</span>get_next<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> sess<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"elements of dataset:"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"epoch:"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---mini_batch:"</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">'''
{
    1, 1, 1, 1,
    2, 2, 2, 2,
    1, 1,
    2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4,
    3, 3,
    4, 4,
    5, 5, 5, 5,
    5, 5,
}
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>elements of dataset:
epoch: <span class="token number">0</span>
---mini_batch: <span class="token number">0</span> <span class="token number">1.0</span>
---mini_batch: <span class="token number">1</span> <span class="token number">1.0</span>
---mini_batch: <span class="token number">2</span> <span class="token number">1.0</span>
---mini_batch: <span class="token number">3</span> <span class="token number">1.0</span>
---mini_batch: <span class="token number">4</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">5</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">6</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">7</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">8</span> <span class="token number">1.0</span>
---mini_batch: <span class="token number">9</span> <span class="token number">1.0</span>
epoch: <span class="token number">1</span>
---mini_batch: <span class="token number">0</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">1</span> <span class="token number">2.0</span>
---mini_batch: <span class="token number">2</span> <span class="token number">3.0</span>
---mini_batch: <span class="token number">3</span> <span class="token number">3.0</span>
---mini_batch: <span class="token number">4</span> <span class="token number">3.0</span>
---mini_batch: <span class="token number">5</span> <span class="token number">3.0</span>
---mini_batch: <span class="token number">6</span> <span class="token number">4.0</span>
---mini_batch: <span class="token number">7</span> <span class="token number">4.0</span>
---mini_batch: <span class="token number">8</span> <span class="token number">4.0</span>
---mini_batch: <span class="token number">9</span> <span class="token number">4.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://zhuanlan.zhihu.com/p/97876668" target="_blank" rel="noopener noreferrer">小M学机器学习 tf.data.Dataset.interleave()<ExternalLinkIcon/></a></p>
<p><a href="https://www.w3cschool.cn/tensorflow_python/tensorflow_python-8pwb2dbr.html" target="_blank" rel="noopener noreferrer">TensorFlow文本文件行的数据集<ExternalLinkIcon/></a></p>
<p><a href="https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave" target="_blank" rel="noopener noreferrer">tf.data.Dataset<ExternalLinkIcon/></a></p>
<p><a href="https://tensorflow.google.cn/api_docs/python/tf/data/Dataset?version=stable#interleave" target="_blank" rel="noopener noreferrer">tf.data.Dataset<ExternalLinkIcon/></a></p>
<h1 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h1>
<h2 id="创建迭代器" tabindex="-1"><a class="header-anchor" href="#创建迭代器" aria-hidden="true">#</a> 创建迭代器</h2>
<p>构建了表示输入数据的 <code v-pre>Dataset</code> 后，下一步就是创建 <code v-pre>Iterator</code> 来访问该数据集中的元素。<a href="https://www.tensorflow.org/api_docs/python/tf/data" target="_blank" rel="noopener noreferrer"><code v-pre>tf.data</code><ExternalLinkIcon/></a> API 目前支持下列迭代器，复杂程度逐渐增大：</p>
<ul>
<li><strong>单次</strong>  <strong>iterator = dataset.make_one_shot_iterator()</strong></li>
<li><strong>可初始化</strong>  <strong>iterator = dataset.make_initializable_iterator()</strong></li>
<li><strong>可重新初始化  iterator = tf.data.Iterator.from_structure()</strong></li>
<li><strong>可馈送  iterator = tf.data.Iterator.from_string_handle()</strong></li>
</ul>
<h3 id="from-string-handle" tabindex="-1"><a class="header-anchor" href="#from-string-handle" aria-hidden="true">#</a> from_string_handle</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># Define training and validation datasets with the same structure.</span>
training_dataset <span class="token operator">=</span> tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>
    <span class="token comment"># lambda x: x + tf.random_uniform([], -1, 1, tf.int64)).repeat()</span>
    <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">)</span><span class="token punctuation">.</span>repeat<span class="token punctuation">(</span><span class="token punctuation">)</span>
validation_dataset <span class="token operator">=</span> tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset<span class="token punctuation">.</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span>

<span class="token comment"># A feedable iterator is defined by a handle placeholder and its structure. We</span>
<span class="token comment"># could use the `output_types` and `output_shapes` properties of either</span>
<span class="token comment"># `training_dataset` or `validation_dataset` here, because they have</span>
<span class="token comment"># identical structure.</span>
handle <span class="token operator">=</span> tf<span class="token punctuation">.</span>placeholder<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>string<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
iterator <span class="token operator">=</span> tf<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Iterator<span class="token punctuation">.</span>from_string_handle<span class="token punctuation">(</span>
    handle<span class="token punctuation">,</span> training_dataset<span class="token punctuation">.</span>output_types<span class="token punctuation">,</span> training_dataset<span class="token punctuation">.</span>output_shapes<span class="token punctuation">)</span>
next_element <span class="token operator">=</span> iterator<span class="token punctuation">.</span>get_next<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># You can use feedable iterators with a variety of different kinds of iterator</span>
<span class="token comment"># (such as one-shot and initializable iterators).</span>
training_iterator <span class="token operator">=</span> training_dataset<span class="token punctuation">.</span>make_one_shot_iterator<span class="token punctuation">(</span><span class="token punctuation">)</span>
validation_iterator <span class="token operator">=</span> validation_dataset<span class="token punctuation">.</span>make_initializable_iterator<span class="token punctuation">(</span><span class="token punctuation">)</span>


sess <span class="token operator">=</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># The `Iterator.string_handle()` method returns a tensor that can be evaluated</span>
<span class="token comment"># and used to feed the `handle` placeholder.</span>
training_handle <span class="token operator">=</span> sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>training_iterator<span class="token punctuation">.</span>string_handle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
validation_handle <span class="token operator">=</span> sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>validation_iterator<span class="token punctuation">.</span>string_handle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Loop forever, alternating between training and validation.</span>
<span class="token comment"># while True:</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Run 200 steps using the training dataset. Note that the training dataset is</span>
    <span class="token comment"># infinite, and we resume from where we left off in the previous `while` loop</span>
    <span class="token comment"># iteration.</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"the %sth epoch:"</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"    training_handle:"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>next_element<span class="token punctuation">,</span> feed_dict<span class="token operator">=</span><span class="token punctuation">{</span>handle<span class="token punctuation">:</span> training_handle<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"    validation_handle:"</span><span class="token punctuation">)</span>
    <span class="token comment"># Run one pass over the validation dataset.</span>
    sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>validation_iterator<span class="token punctuation">.</span>initializer<span class="token punctuation">)</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>sess<span class="token punctuation">.</span>run<span class="token punctuation">(</span>next_element<span class="token punctuation">,</span> feed_dict<span class="token operator">=</span><span class="token punctuation">{</span>handle<span class="token punctuation">:</span> validation_handle<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>the 0th epoch:
    training_handle:
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">0</span>
<span class="token number">1</span>
    validation_handle:
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
the 1th epoch:
    training_handle:
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
    validation_handle:
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
the 2th epoch:
    training_handle:
<span class="token number">4</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">0</span>
    validation_handle:
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消耗迭代器" tabindex="-1"><a class="header-anchor" href="#消耗迭代器" aria-hidden="true">#</a> 消耗迭代器</h2>
<p><a href="https://zhuanlan.zhihu.com/p/30751039" target="_blank" rel="noopener noreferrer">TensorFlow全新的数据读取方式：Dataset API入门教程<ExternalLinkIcon/></a></p>
<h2 id="保存迭代器状态" tabindex="-1"><a class="header-anchor" href="#保存迭代器状态" aria-hidden="true">#</a> 保存迭代器状态</h2>
<p><a href="https://zhuanlan.zhihu.com/p/30751039" target="_blank" rel="noopener noreferrer">TensorFlow全新的数据读取方式：Dataset API入门教程<ExternalLinkIcon/></a></p>
</div></template>


