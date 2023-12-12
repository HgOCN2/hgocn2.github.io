<template><div><h1 id="tensorflow中ckpt转pb文件-模型持久化" tabindex="-1"><a class="header-anchor" href="#tensorflow中ckpt转pb文件-模型持久化" aria-hidden="true">#</a> TensorFlow中ckpt转pb文件（模型持久化）</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/machine-learning-framework/tensorflow/tools/tools.html">返回上层目录</RouterLink></li>
<li><a href="#tensorflow%E6%A8%A1%E5%9E%8B%E6%96%87%E4%BB%B6%E8%A7%A3%E8%AF%BB">TensorFlow模型文件解读</a></li>
<li><a href="#%E8%8E%B7%E5%8F%96%E9%9C%80%E8%A6%81%E6%8C%81%E4%B9%85%E5%8C%96%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%BE%93%E5%87%BA%E8%8A%82%E7%82%B9%E5%90%8D%E7%A7%B0">获取需要持久化模型的输出节点名称</a></li>
<li><a href="#ckpt%E6%96%87%E4%BB%B6%E7%94%9F%E6%88%90%E6%8C%81%E4%B9%85%E5%8C%96%E6%A8%A1%E5%9E%8Bpb%E6%96%87%E4%BB%B6">ckpt文件生成持久化模型pb文件</a></li>
<li><a href="#%E8%AF%BB%E5%8F%96%E7%94%9F%E6%88%90%E7%9A%84pb%E6%96%87%E4%BB%B6%E5%B9%B6%E6%89%93%E5%8D%B0%E8%8A%82%E7%82%B9%E5%90%8D%E7%A7%B0">读取生成的pb文件并打印节点名称</a></li>
<li><a href="#%E5%88%A9%E7%94%A8%E7%94%9F%E6%88%90%E7%9A%84pb%E6%96%87%E4%BB%B6%E5%AE%9E%E7%8E%B0%E6%8E%A8%E6%96%AD">利用生成的pb文件实现推断</a></li>
</ul>
<h1 id="tensorflow模型文件解读" tabindex="-1"><a class="header-anchor" href="#tensorflow模型文件解读" aria-hidden="true">#</a> TensorFlow模型文件解读</h1>
<p>使用tensorflow训练好的模型会自动保存为四个文件，如下</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tools/ckpt-to-pb/pic/ckpt-model.png" alt="ckpt-model"></p>
<ul>
<li>
<p>**checkpoint：**记录近几次训练好的模型结果（名称）。</p>
</li>
<li>
<p><strong>xxx.data-00000-of-00001:</strong> 模型的所有变量的值(weights, biases, placeholders,gradients, hyper-parameters etc)，也就是模型训练好的<strong>权重的值</strong>和其他值。</p>
</li>
<li>
<p>**xxx.index ：**模型的元数据，二进制或者其他格式，不可直接查看 。是一个不可变得字符串表，每一个键都是张量的名称，它的值是一个序列化的BundleEntryProto。 每个BundleEntryProto描述张量的元数据：“数据”文件中的哪个文件包含张量的内容，该文件的偏移量，校验和一些辅助数据等。</p>
</li>
<li>
<p><strong>xxx.meta：<strong>模型的meta数据 ，二进制或者其他格式，不可直接查看，保存了TensorFlow</strong>计算图的结构</strong>信息，通俗地讲就是<strong>神经网络的网络结构</strong>。该文件可以被<code v-pre>tf.train.import_meta_graph</code>加载到当前默认的图来使用。</p>
</li>
</ul>
<h1 id="获取需要持久化模型的输出节点名称" tabindex="-1"><a class="header-anchor" href="#获取需要持久化模型的输出节点名称" aria-hidden="true">#</a> 获取需要持久化模型的输出节点名称</h1>
<p>节点名称通常可以在正常的ckpt模型推断代码中找到。</p>
<p>在模型构建的代码的末尾打上断点，如下所示：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">DeepNet</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>sess <span class="token operator">=</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># ......</span>
        self<span class="token punctuation">.</span>saver <span class="token operator">=</span> tf<span class="token punctuation">.</span>train<span class="token punctuation">.</span>Saver<span class="token punctuation">(</span><span class="token punctuation">[</span>v <span class="token keyword">for</span> v <span class="token keyword">in</span> tf<span class="token punctuation">.</span>global_variables<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max_to_keep<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>CKPT_FILE <span class="token operator">+</span> <span class="token string">'.meta'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>load_ckpt<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 就在这里打上断点吧!!!</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"load ckpt success!"</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"load ckpt failed!"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后调试，会发现你想要输出的tensor的别名，在本例中，想要输出的tensor是<code v-pre>mu</code>，如下图的黄框所示，其别名叫做<code v-pre>pi/mul</code>，注意不是<code v-pre>pi/mu:0</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>name: <span class="token string">"pi/mul"</span>  <span class="token comment"># 名字叫这个</span>
op: <span class="token string">"Mul"</span>
input: <span class="token string">"pi/mul/x"</span>
input: <span class="token string">"pi/actor_mu/Tanh"</span>
attr <span class="token punctuation">{</span>
  key: <span class="token string">"T"</span>
  value <span class="token punctuation">{</span>
    type: DT_FLOAT
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tools/ckpt-to-pb/pic/output-node.png" alt="output-node"></p>
<h1 id="ckpt文件生成持久化模型pb文件" tabindex="-1"><a class="header-anchor" href="#ckpt文件生成持久化模型pb文件" aria-hidden="true">#</a> ckpt文件生成持久化模型pb文件</h1>
<p>获取节点名称后通过ckpt文件持久化模型，生成pb文件</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>python<span class="token punctuation">.</span>framework <span class="token keyword">import</span> graph_util
<span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># tensorflow中ckpt转pb文件（模型持久化） https://zhuanlan.zhihu.com/p/147658249</span>

<span class="token keyword">def</span> <span class="token function">freeze_graph</span><span class="token punctuation">(</span>input_checkpoint<span class="token punctuation">,</span> output_graph<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">'''
    :param input_checkpoint:
    :param output_graph: PB模型保存路径
    :return:
    '''</span>
    <span class="token comment"># checkpoint = tf.train.get_checkpoint_state(model_folder) #检查目录下ckpt文件状态是否可用</span>
    <span class="token comment"># input_checkpoint = checkpoint.model_checkpoint_path #得ckpt文件路径</span>

    <span class="token comment"># 指定输出的节点名称,该节点名称必须是原模型中存在的节点</span>
    output_node_names <span class="token operator">=</span> <span class="token string">"pi/mul"</span>  <span class="token comment"># 打断点调试查看，这个是系统根据功能命名，不是你自己设置的name=xxx的名字</span>
    saver <span class="token operator">=</span> tf<span class="token punctuation">.</span>train<span class="token punctuation">.</span>import_meta_graph<span class="token punctuation">(</span>input_checkpoint <span class="token operator">+</span> <span class="token string">'.meta'</span><span class="token punctuation">,</span> clear_devices<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    graph <span class="token operator">=</span> tf<span class="token punctuation">.</span>get_default_graph<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 获得默认的图</span>
    input_graph_def <span class="token operator">=</span> graph<span class="token punctuation">.</span>as_graph_def<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 返回一个序列化的图代表当前的图</span>

    <span class="token keyword">with</span> tf<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> sess<span class="token punctuation">:</span>
        saver<span class="token punctuation">.</span>restore<span class="token punctuation">(</span>sess<span class="token punctuation">,</span> input_checkpoint<span class="token punctuation">)</span>  <span class="token comment"># 恢复图并得到数据</span>
        output_graph_def <span class="token operator">=</span> graph_util<span class="token punctuation">.</span>convert_variables_to_constants<span class="token punctuation">(</span>  <span class="token comment"># 模型持久化，将变量值固定</span>
            sess<span class="token operator">=</span>sess<span class="token punctuation">,</span>
            input_graph_def<span class="token operator">=</span>input_graph_def<span class="token punctuation">,</span>  <span class="token comment"># 等于:sess.graph_def</span>
            output_node_names<span class="token operator">=</span>output_node_names<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 如果有多个输出节点，以逗号隔开</span>

        <span class="token keyword">with</span> tf<span class="token punctuation">.</span>gfile<span class="token punctuation">.</span>GFile<span class="token punctuation">(</span>output_graph<span class="token punctuation">,</span> <span class="token string">"wb"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fgraph<span class="token punctuation">:</span>  <span class="token comment"># 保存模型</span>
            fgraph<span class="token punctuation">.</span>write<span class="token punctuation">(</span>output_graph_def<span class="token punctuation">.</span>SerializeToString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 序列化输出</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%d ops in the final graph."</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>output_graph_def<span class="token punctuation">.</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 得到当前图有几个操作节点</span>
    <span class="token comment"># i = 1</span>
    <span class="token comment"># for node in output_graph_def.node:</span>
    <span class="token comment">#     print("===> {} &lt;===".format(i))</span>
    <span class="token comment">#     print(node)</span>
    <span class="token comment">#     i += 1</span>
    <span class="token comment">#</span>
    <span class="token comment"># print("="*40)</span>
    <span class="token comment"># i = 1</span>
    <span class="token comment"># for op in graph.get_operations():</span>
    <span class="token comment">#     print("index = {}, name = {}, value = {}".format(i, op.name, op.values()))</span>
    <span class="token comment">#     i += 1</span>
    
    <span class="token comment"># op的打印顺序大致以 以下顺序排列：</span>
    <span class="token comment"># 前向传播op</span>
    <span class="token comment"># 占位符op</span>
    <span class="token comment"># 优化器op</span>
    <span class="token comment"># 评估指标（loss、acc）op</span>
    <span class="token comment"># 反向传播梯度op</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    ckpt_file <span class="token operator">=</span> <span class="token string">"../model/xxxx"</span>
    pb_file <span class="token operator">=</span> <span class="token string">"../model/xxxx.pb"</span>

    freeze_graph<span class="token punctuation">(</span>ckpt_file<span class="token punctuation">,</span> pb_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="读取生成的pb文件并打印节点名称" tabindex="-1"><a class="header-anchor" href="#读取生成的pb文件并打印节点名称" aria-hidden="true">#</a> 读取生成的pb文件并打印节点名称</h1>
<p>读取生成的pb文件，并打印节点名称：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>python<span class="token punctuation">.</span>framework <span class="token keyword">import</span> graph_util
<span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># 读取pb文件</span>
<span class="token keyword">def</span> <span class="token function">read_pb</span><span class="token punctuation">(</span>graph_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    graph_def <span class="token operator">=</span> tf<span class="token punctuation">.</span>GraphDef<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> tf<span class="token punctuation">.</span>gfile<span class="token punctuation">.</span>FastGFile<span class="token punctuation">(</span>graph_path<span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        graph_def<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        tf<span class="token punctuation">.</span>import_graph_def<span class="token punctuation">(</span>graph_def<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> node <span class="token keyword">in</span> graph_def<span class="token punctuation">.</span>node<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

        
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    ckpt_file <span class="token operator">=</span> <span class="token string">"../model/xxxx"</span>
    pb_file <span class="token operator">=</span> <span class="token string">"../model/xxxx.pb"</span>
    
    read_pb<span class="token punctuation">(</span>pb_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下，一共有17个节点：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>state
pi/net_hidden/kernel
pi/net_hidden/kernel/read
pi/net_hidden/bias
pi/net_hidden/bias/read
pi/net_hidden/MatMul
pi/net_hidden/BiasAdd
pi/net_hidden/Relu
pi/net_mu/kernel
pi/net_mu/kernel/read
pi/net_mu/bias
pi/net_mu/bias/read
pi/net_mu/MatMul
pi/net_mu/BiasAdd
pi/net_mu/Tanh
pi/mul/x
pi/mul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以只剩下17个节点了，是因为这17个节点是前向传播的，其余的op算子都不属于前向传播推理，所以就被去掉了。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>op的打印顺序大致以 以下顺序排列：
前向传播op
占位符op
优化器op
评估指标（loss、acc）op
反向传播梯度op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="利用生成的pb文件实现推断" tabindex="-1"><a class="header-anchor" href="#利用生成的pb文件实现推断" aria-hidden="true">#</a> 利用生成的pb文件实现推断</h1>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>python<span class="token punctuation">.</span>framework <span class="token keyword">import</span> graph_util
<span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># pb图模型推断</span>
<span class="token keyword">def</span> <span class="token function">pbInference</span><span class="token punctuation">(</span>graph_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 导入图模型</span>
    graph_def <span class="token operator">=</span> tf<span class="token punctuation">.</span>GraphDef<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> tf<span class="token punctuation">.</span>gfile<span class="token punctuation">.</span>FastGFile<span class="token punctuation">(</span>graph_path<span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        graph_def<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        tf<span class="token punctuation">.</span>import_graph_def<span class="token punctuation">(</span>graph_def<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">)</span>

    <span class="token comment"># PB图模型中节点名称</span>
    tensor_name_list <span class="token operator">=</span> <span class="token punctuation">[</span>tensor<span class="token punctuation">.</span>name <span class="token keyword">for</span> tensor <span class="token keyword">in</span> tf<span class="token punctuation">.</span>get_default_graph<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>as_graph_def<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>node<span class="token punctuation">]</span>

    isess <span class="token operator">=</span> tf<span class="token punctuation">.</span>InteractiveSession<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 默认是Placeholder可以在pb文件中查看节点名称，也可以在tensor_name_list这个变量中查看</span>
    state_placeholder <span class="token operator">=</span> tf<span class="token punctuation">.</span>get_default_graph<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_tensor_by_name<span class="token punctuation">(</span><span class="token string">"state:0"</span><span class="token punctuation">)</span>
    action <span class="token operator">=</span> tf<span class="token punctuation">.</span>get_default_graph<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_tensor_by_name<span class="token punctuation">(</span><span class="token string">"pi/mul:0"</span><span class="token punctuation">)</span>

    s <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.29</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1.29</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.29</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span>np<span class="token punctuation">.</span>newaxis<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
    action_<span class="token punctuation">,</span> <span class="token operator">=</span> isess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span>action<span class="token punctuation">]</span><span class="token punctuation">,</span> feed_dict<span class="token operator">=</span><span class="token punctuation">{</span>state_placeholder<span class="token punctuation">:</span> s<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>action_<span class="token punctuation">)</span>  <span class="token comment"># [[ 0.8672415 , -0.55812573]]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>action_<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [ 0.8672415  -0.55812573]</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    ckpt_file <span class="token operator">=</span> <span class="token string">"../model/xxxx"</span>
    pb_file <span class="token operator">=</span> <span class="token string">"../model/xxxx.pb"</span>

    pbInference<span class="token punctuation">(</span>pb_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的推断结果的为<code v-pre>[ 0.8672415  -0.55812573]</code>，和直接用模型预测的结果完全一致。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.kaotop.com/it/19844.html" target="_blank" rel="noopener noreferrer">tensorflow模型文件(ckpt)转pb文件的方法（不知道输出节点名）<ExternalLinkIcon/></a></li>
</ul>
<p>开头的“tensorflow模型文件解读”参考了此博客。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/147658249" target="_blank" rel="noopener noreferrer">tensorflow中ckpt转pb文件（模型持久化）<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考了此博客。</p>
</div></template>


