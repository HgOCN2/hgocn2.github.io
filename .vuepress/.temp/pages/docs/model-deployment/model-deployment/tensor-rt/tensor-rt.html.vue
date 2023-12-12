<template><div><h1 id="tensorrt" tabindex="-1"><a class="header-anchor" href="#tensorrt" aria-hidden="true">#</a> TensorRT</h1>
<ul>
<li><RouterLink to="/docs/model-deployment/model-deployment/model-deployment.html">返回上层目录</RouterLink></li>
<li><a href="#TensorRT%E7%AE%80%E4%BB%8B">TensorRT简介</a>
<ul>
<li><a href="#TensorRT%E7%9A%84%E8%BE%93%E5%85%A5">TensorRT的输入</a></li>
<li><a href="#TensorRT%E7%9A%84%E8%BE%93%E5%87%BA">TensorRT的输出</a></li>
<li><a href="#TensorRT%E9%83%A8%E7%BD%B2%E6%B5%81%E7%A8%8B">TensorRT部署流程</a></li>
</ul>
</li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E5%AF%BC%E5%85%A5">模型导入</a>
<ul>
<li><a href="#Tensorflow%E6%A1%86%E6%9E%B6">Tensorflow框架</a></li>
<li><a href="#Pytorch%E6%A1%86%E6%9E%B6">Pytorch框架</a></li>
<li><a href="#Caffe%E6%A1%86%E6%9E%B6">Caffe框架</a></li>
</ul>
</li>
</ul>
<h1 id="tensorrt简介" tabindex="-1"><a class="header-anchor" href="#tensorrt简介" aria-hidden="true">#</a> TensorRT简介</h1>
<p>TensorRT是NVIDIA公司发布的一个高性能的深度学习推理加速框架，</p>
<ul>
<li>
<p>官网示例：<a href="https://developer.nvidia.com/zh-cn/blog/speeding-up-deep-learning-inference-using-tensorrt-updated/" target="_blank" rel="noopener noreferrer">nvidia: speeding up deep learning inference using tensorrt updated<ExternalLinkIcon/></a></p>
</li>
<li>
<p>官方文档：<a href="https://docs.nvidia.com/deeplearning/tensorrt/archives/index.html" target="_blank" rel="noopener noreferrer">nvidia: tensorrt<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>下面先看一下使用TensorRT的背景：</p>
<p>训练主要是获得层与层之间的权重参数，目的是为了获得一个性能优异的模型，关注点集中在模型的准确度、精度等指标。</p>
<p>推理（inference）则不一样，其没有了训练中的反向迭代过程，只是针对新的数据进行预测。相较于训练，推理的更关注的是部署简单、处理速度快、吞吐率高和资源消耗少。</p>
<p>作用：TensorRT优化深度学习模型结构，并提供高吞吐率和低延迟的推理部署。</p>
<p>应用：TensorRT可用于大规模数据中心、嵌入式平台或自动驾驶平台进行推理加速。</p>
<h2 id="tensorrt的输入" tabindex="-1"><a class="header-anchor" href="#tensorrt的输入" aria-hidden="true">#</a> TensorRT的输入</h2>
<p>在输入方面，TensorRT支持所有常见的深度学习框架包括Caffe、Tensorflow、Pytorch、MXNet、Paddle Paddle等。</p>
<p>得到的网络模型需要导入到TensorRT，对于模型的导入方式，TensorRT支持的导入方式包括C++ API、Python API、NvCaffeParser和NvUffParser等</p>
<p>还可以借助中间转换工具ONNX，比如：先将模型由Pytorch保存的模型文件转换成ONNX模型，然后再将ONNX模型转换成TensorRT推理引擎。后面再结合具体案例，详细分析。</p>
<h2 id="tensorrt的输出" tabindex="-1"><a class="header-anchor" href="#tensorrt的输出" aria-hidden="true">#</a> TensorRT的输出</h2>
<p>将模型导入TensorRT以生成引擎（engine）文件，将engine文件序列化保存，之后即可以方便快速地调用它来执行模型的加速推理。</p>
<p>输出方面，对于系统平台，TensorRT支持Linux x86、Linux aarch64、Android aarch64和QNX  aarch64。</p>
<h2 id="tensorrt部署流程" tabindex="-1"><a class="header-anchor" href="#tensorrt部署流程" aria-hidden="true">#</a> TensorRT部署流程</h2>
<p>Tensor RT 的部署分为两个部分：（TensorRT部署流程如下图所示）</p>
<ul>
<li>一是<strong>优化训练好的模型</strong>并<strong>生成计算流图</strong>；</li>
<li>二是<strong>部署计算流图</strong>。</li>
</ul>
<p><img src="@source/docs/model-deployment/model-deployment/tensor-rt/pic/tensor-rt-process.png" alt="tensor-rt-process"></p>
<h1 id="模型导入" tabindex="-1"><a class="header-anchor" href="#模型导入" aria-hidden="true">#</a> 模型导入</h1>
<p>这里介绍Caffe框架、Tensorflow框架、Pytorch框架等，进行模型导入，重点分析一下Pytorch框架。</p>
<h2 id="tensorflow框架" tabindex="-1"><a class="header-anchor" href="#tensorflow框架" aria-hidden="true">#</a> Tensorflow框架</h2>
<p>方法1：使用uff python接口将模型转成uff格式，之后使用NvUffParser导入。</p>
<p>方法2：使用Freeze graph来生成.Pb(protobuf)文件，之后使用convert-to-uff工具将.pb文件转化成uff格式，然后利用NvUffParser导入。</p>
<p>方法3：将Tensorflow训练好的模型（xx.pb）进行TensorRT推理加速，需要先将模型由Pytorch保存的模型文件转换成ONNX模型，然后再将ONNX模型转换成TensorRT推理引擎。处理流程如下图所示</p>
<p><img src="@source/docs/model-deployment/model-deployment/tensor-rt/pic/tensor-rt-process-2.png" alt="tensor-rt-process-2"></p>
<h3 id="方法2-ckpt-pb-uff-nvuffparser" tabindex="-1"><a class="header-anchor" href="#方法2-ckpt-pb-uff-nvuffparser" aria-hidden="true">#</a> 方法2：ckpt-&gt;pb-&gt;uff-&gt;NvUffParser</h3>
<p>下面详细介绍方法2：使用Freeze graph来生成.Pb(protobuf)文件，之后使用convert-to-uff工具将.pb文件转化成uff格式，然后利用NvUffParser导入。</p>
<p><strong>（1）模型持久化：ckpt转成pb文件</strong></p>
<p>这个请参考介绍tensorflow对应部分，此处就不重复讲了。</p>
<p><strong>（2）生成uff模型：用convert-to-uff工具将.pb文件转化成uff格式</strong></p>
<p>有了pb模型，需要将其转换为tensorRT可用的uff模型，只需要调用uff包自带的convert脚本即可。</p>
<p>先安装uff包：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nvidia-pyindex
pip <span class="token function">install</span> uff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在下述路径中找到<code v-pre>convert_to_uff.py</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>your_name<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>tf1.14<span class="token punctuation">\</span>Lib<span class="token punctuation">\</span>site-packages<span class="token punctuation">\</span>uff<span class="token punctuation">\</span>bin<span class="token punctuation">\</span>convert_to_uff.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>your_name<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>tf1.14<span class="token punctuation">\</span>Lib<span class="token punctuation">\</span>site-packages<span class="token punctuation">\</span>uff<span class="token punctuation">\</span>bin<span class="token punctuation">\</span>convert_to_uff.py pb_model.pb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，在使用上述命令前，确保conda到了正确的环境下，使用下面的命令来切换到正确的环境下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda activate tf1.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后可能会出错，让你安装某个包，就<code v-pre>pip install xxx</code>就行，然后运行前面的<code v-pre>convert_to_uff.py</code>命令，成功，显示入如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>your_name<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>tf1.14<span class="token punctuation">\</span>Lib<span class="token punctuation">\</span>site-packages<span class="token punctuation">\</span>uff<span class="token punctuation">\</span>bin<span class="token punctuation">\</span>convert_to_uff.py .<span class="token punctuation">\</span>pb_model.pb
Loading .<span class="token punctuation">\</span>pb_model.pb

NOTE: UFF has been tested with TensorFlow <span class="token number">1.15</span>.0.
WARNING: The version of TensorFlow installed on this system is not guaranteed to work with UFF.
UFF Version <span class="token number">0.6</span>.9
<span class="token operator">==</span><span class="token operator">=</span> Automatically deduced input nodes <span class="token operator">==</span><span class="token operator">=</span>
<span class="token punctuation">[</span>name: <span class="token string">"state"</span>
op: <span class="token string">"Placeholder"</span>
attr <span class="token punctuation">{</span>
  key: <span class="token string">"dtype"</span>
  value <span class="token punctuation">{</span>
    type: DT_FLOAT
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
attr <span class="token punctuation">{</span>
  key: <span class="token string">"shape"</span>
  value <span class="token punctuation">{</span>
    shape <span class="token punctuation">{</span>
      dim <span class="token punctuation">{</span>
        size: <span class="token parameter variable">-1</span>
      <span class="token punctuation">}</span>
      dim <span class="token punctuation">{</span>
        size: <span class="token number">7</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>

<span class="token operator">==</span><span class="token operator">=</span> Automatically deduced output nodes <span class="token operator">==</span><span class="token operator">=</span>
<span class="token punctuation">[</span>name: <span class="token string">"pi/mul"</span>
op: <span class="token string">"Mul"</span>
input: <span class="token string">"pi/mul/x"</span>
input: <span class="token string">"pi/actor_mu/Tanh"</span>
attr <span class="token punctuation">{</span>
  key: <span class="token string">"T"</span>
  value <span class="token punctuation">{</span>
    type: DT_FLOAT
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

Using output <span class="token function">node</span> pi/mul
Converting to UFF graph
DEBUG <span class="token punctuation">[</span>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>your_name<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>envs<span class="token punctuation">\</span>tf1.14<span class="token punctuation">\</span>Lib<span class="token punctuation">\</span>site-packages<span class="token punctuation">\</span>uff<span class="token punctuation">\</span>bin<span class="token punctuation">\</span><span class="token punctuation">..</span><span class="token punctuation">\</span><span class="token punctuation">..</span><span class="token punctuation">\</span>uff<span class="token punctuation">\</span>converters<span class="token punctuation">\</span>tensorflow<span class="token punctuation">\</span>converter.py:143<span class="token punctuation">]</span> Marking <span class="token punctuation">[</span><span class="token string">'pi/mul'</span><span class="token punctuation">]</span> as outputs
No. nodes: <span class="token number">14</span>
UFF Output written to .<span class="token punctuation">\</span>pd_model.uff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换成功后会输出包含总结点的个数以及推断出的输入输出节点的信息。</p>
<p><strong>（3）TensorRT部署模型</strong></p>
<p>使用tensorrt部署生成好的uff模型需要先将uff中保存的模型权值以及网络结构导入进来，然后执行优化算法生成对应的inference engine。</p>
<p>注：这里尝试过官网给的简单例子，见<code v-pre>C:\Program Files\TensorRT-7.2.3.4\samples\sampleUffMNIST</code>，用VS2017打开，但是没有成功。由于时间紧迫，就没有再尝试跑通了，暂时就停在这了。本段内容参考的下面的博客：</p>
<p><a href="https://blog.csdn.net/weixin_43941538/article/details/120852269" target="_blank" rel="noopener noreferrer">TensorRT-tensorflow模型tensorrt部署<ExternalLinkIcon/></a></p>
<h2 id="pytorch框架" tabindex="-1"><a class="header-anchor" href="#pytorch框架" aria-hidden="true">#</a> Pytorch框架</h2>
<p>为了将Pytorch训练好的模型（xx.pt）进行TensorRT推理加速，需要先将模型由Pytorch保存的模型文件转换成ONNX模型，然后再将ONNX模型转换成TensorRT推理引擎。</p>
<p><strong>A、Pytorch-ONNX模型转换</strong></p>
<p>ONNX（Open Neural Network Exchange，开放神经网络交换）模型格式是一种用于表示深度学习模型的文件格式，可以使深度学习模型在不同框架之间相互转换。</p>
<ul>
<li>
<p>目前ONNX支持应用于：Pytorch、Caffe2、Tensorflow、MXNet、Microsoft CNTK和TensorRT等深度学习框架。</p>
</li>
<li>
<p>ONNX组成：由可扩展计算图模型的定义、标准数据类型的定义和内置运算符的定义三个部分组成。</p>
</li>
<li>
<p>与Pytorch模型不同，ONNX格式的权重文件除了包含权重值外，还包含：神经网络中的网络流动信息、每层网络的输入输出信息以及一些辅助信息。</p>
</li>
</ul>
<p>为得到TensorRT推理引擎，首先将经过网络训练得到的Pytorch模型转换成ONNX模型，然后进行ONNX模型的解析，最终生成用于加速的网络推理引擎（engine）。Pytorch模型转换生成ONNX模型的流程如下图所示。</p>
<p><img src="@source/docs/model-deployment/model-deployment/tensor-rt/pic/pytorch-to-onnx.png" alt="pytorch-to-onnx"></p>
<ul>
<li>
<p>第一步定义ONNX模型的输入、输出数据类型；</p>
</li>
<li>
<p>第二步将模型图与模型元数据进行关联，模型图中含有可执行元素，模型元数据是一种特殊的数据类型，用于数据描述；</p>
</li>
<li>
<p>第三步先定义导入模型的运算符集， 再将运算符集导入相应的图（Graph）中；</p>
</li>
<li>
<p>第四步生成由元数据、模型参数列表、计算列表构成的序列化图（ONNX Graph）。</p>
</li>
</ul>
<p>成功转换后，得到ONNX模型。</p>
<ul>
<li>
<p>其中，PyTorch 中自带的torch.onnx模块。此模块包含将模型导出为onnx IR格式的函数。这些模型可以从onnx库加载，然后转换为可以在其他深度学习框架上运行的模型。</p>
</li>
<li>
<p>基本流程为：模型读取、参数设置、tensor张量生成和模型转化。</p>
</li>
<li>
<p>其中关键的export函数为：torch.onnx.export()</p>
</li>
</ul>
<p><strong>B、ONNX-TensorRT模型转换</strong></p>
<p>创建并保存engine文件流程，如下图所示：</p>
<p><img src="@source/docs/model-deployment/model-deployment/tensor-rt/pic/onnx-to-tenser-rt.png" alt="onnx-to-tenser-rt"></p>
<ul>
<li>第一步创建engine类为构建器，engine类是TensorRT中创建推理引擎所 用的函数，创建engine类为 nvinfer::IBuilder；</li>
<li>第二步使用builder-&gt;createNetworkV2创建网络（Network）；</li>
<li>第三步使用nvonnxparser::createParser创建ONNX模型的解析器；</li>
<li>第四步通过builder-&gt;setMaxBatchSize设置网络每个批次处理的图片数量，通过builder-&gt;setMaxWorkspaceSize设置内存空间以及通过config-&gt;setFlag设置推理时模型参 数的精度类型；</li>
<li>第五步通过解析器来解析ONNX模型；最后生成engine文件并保存。</li>
</ul>
<h2 id="caffe框架" tabindex="-1"><a class="header-anchor" href="#caffe框架" aria-hidden="true">#</a> Caffe框架</h2>
<p><strong>方法1</strong>：使用C++/Python API导入模型，通过代码定义网络结构，并载入模型weights的方式导入。</p>
<p><strong>方法2</strong>：使用NvCaffeParser导入模型，导入时输入网络结构prototxt文件及caffemodel文件。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/qq_41204464/article/details/123998448" target="_blank" rel="noopener noreferrer">TensorRT 模型加速 1-输入、输出、部署流程<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_43941538/article/details/120852269" target="_blank" rel="noopener noreferrer">TensorRT-tensorflow模型tensorrt部署<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;TensorFLow框架 方法2：ckpt-&gt;pb-&gt;uff-&gt;NvUffParser&quot;参考此博客。</p>
<p>===</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/35657027" target="_blank" rel="noopener noreferrer">高性能深度学习支持引擎实战——TensorRT<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了TensorRT。</p>
<ul>
<li><a href="https://developer.nvidia.com/zh-cn/blog/speeding-up-deep-learning-inference-using-tensorrt-updated/" target="_blank" rel="noopener noreferrer">使用 NVIDIA TensorRT 加速深度学习推理（更新）<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了具体操作案例。</p>
<p>===</p>
<ul>
<li><a href="https://blog.csdn.net/yangjf91/article/details/97912773" target="_blank" rel="noopener noreferrer">TensorRT学习（二）通过C++使用<ExternalLinkIcon/></a></li>
</ul>
<p>有具体代码，但不知道是干啥的</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/402074214" target="_blank" rel="noopener noreferrer">TensorRT快速上手指南<ExternalLinkIcon/></a></li>
</ul>
<p>有具体流程。</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_29502579/article/details/112439506" target="_blank" rel="noopener noreferrer">tensorflow 小于_用TensorRT C++ API加速TensorFlow模型实例<ExternalLinkIcon/></a></li>
</ul>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/84125533" target="_blank" rel="noopener noreferrer">TensorRT部署深度学习模型<ExternalLinkIcon/></a></li>
</ul>
<ul>
<li><a href="https://blog.csdn.net/shanglianlm/article/details/93386306" target="_blank" rel="noopener noreferrer">TensorRT之第一个示例：mnist手写体识别<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/HaoBBNuanMM/article/details/102841685" target="_blank" rel="noopener noreferrer">【代码分析】TensorRT sampleMNIST 详解<ExternalLinkIcon/></a></li>
</ul>
</div></template>


