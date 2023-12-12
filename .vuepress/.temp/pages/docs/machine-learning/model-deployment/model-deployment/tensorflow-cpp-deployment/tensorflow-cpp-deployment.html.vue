<template><div><h1 id="基于c-c-部署tensorflow模型" tabindex="-1"><a class="header-anchor" href="#基于c-c-部署tensorflow模型" aria-hidden="true">#</a> 基于C/C++部署TensorFlow模型</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/model-deployment/model-deployment/model-deployment.html">返回上层目录</RouterLink></li>
<li><a href="#TensorFlow%E5%AE%98%E6%96%B9C%E5%BA%93%E4%BB%8B%E7%BB%8D">TensorFlow官方C库介绍</a>
<ul>
<li><a href="#%E8%8E%B7%E5%8F%96%E5%BA%93%E6%96%87%E4%BB%B6">获取库文件</a></li>
<li><a href="#%E7%BC%96%E8%AF%91">编译</a></li>
<li><a href="#C%E5%BA%93%E7%9A%84API%E8%AE%B2%E8%A7%A3">C库的API讲解</a></li>
</ul>
</li>
<li><a href="#TensorFlow%E5%AE%98%E6%96%B9C++%E5%BA%93%E4%BB%8B%E7%BB%8D">TensorFlow官方C++库介绍</a></li>
<li><a href="#%E7%AC%AC%E4%B8%80%E7%A7%8DC++%E9%83%A8%E7%BD%B2%E5%B7%A5%E7%A8%8BNeargye">第一种C++部署工程Neargye</a>
<ul>
<li><a href="#%E4%B8%8B%E8%BD%BD%E5%B9%B6%E6%89%93%E5%BC%80C++%E9%83%A8%E7%BD%B2%E7%9A%84VS%E5%B7%A5%E7%A8%8B">下载并打开C++部署的VS工程</a>
<ul>
<li><a href="#%E7%94%B1cmake%E5%88%9B%E5%BB%BAVS%E5%B7%A5%E7%A8%8B">由cmake创建VS工程</a></li>
<li><a href="#%E8%BF%90%E8%A1%8C%E5%B9%B6%E6%94%B9%E9%80%A0VS%E5%B7%A5%E7%A8%8B">运行并改造VS工程</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8ENeargye%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84VS%E5%B7%A5%E7%A8%8B">基于Neargye建立自己的VS工程</a>
<ul>
<li><a href="#%E6%89%BE%E5%87%BA%E5%BF%85%E8%A6%81%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E9%93%BE%E6%8E%A5%E5%BA%93%E5%92%8C%E5%A4%B4%E6%96%87%E4%BB%B6">找出必要的第三方链接库和头文件</a></li>
<li><a href="#%E5%88%9B%E5%BB%BAVS%E5%B7%A5%E7%A8%8B">创建VS工程</a></li>
<li><a href="#%E5%8A%A0%E8%BD%BD%E5%8A%A8%E6%80%81%E9%93%BE%E6%8E%A5%E5%BA%93">加载动态链接库</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C">编译运行</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E5%BA%93%E5%92%8Cpb%E6%A8%A1%E5%9E%8B%E6%96%87%E4%BB%B6%E7%9A%84%E6%94%BE%E7%BD%AE%E4%BD%8D%E7%BD%AE%E5%88%86%E6%9E%90">动态库和pb模型文件的放置位置分析</a></li>
<li><a href="#%E8%AD%A6%E5%91%8A%E6%B6%88%E9%99%A4">警告消除</a></li>
<li><a href="#GPU%E8%BF%98%E6%98%AFCPU%EF%BC%9F">GPU还是CPU？</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%AC%AC%E4%BA%8C%E7%A7%8DC++%E9%83%A8%E7%BD%B2%E5%B7%A5%E7%A8%8Bgdyshi">第二种C++部署工程gdyshi</a>
<ul>
<li><a href="#%E6%9F%A5%E7%9C%8B%E5%B9%B6%E6%A2%B3%E7%90%86dyshi%E5%B7%A5%E7%A8%8B%E4%BB%A3%E7%A0%81">查看并梳理dyshi工程代码</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8Egdyshi%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84VS%E5%B7%A5%E7%A8%8B">基于gdyshi建立自己的VS工程</a></li>
</ul>
</li>
<li><a href="#%E7%AC%AC%E4%B8%89%E7%A7%8DC++%E9%83%A8%E7%BD%B2%E5%B7%A5%E7%A8%8BCppFlow">第三种C++部署工程CppFlow</a>
<ul>
<li><a href="#%E6%9F%A5%E7%9C%8B%E5%B9%B6%E6%A2%B3%E7%90%86CppFlow%E5%B7%A5%E7%A8%8B%E4%BB%A3%E7%A0%81">查看并梳理CppFlow工程代码</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8ECppFlow%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84VS%E5%B7%A5%E7%A8%8B">基于CppFlow建立自己的VS工程</a></li>
</ul>
</li>
</ul>
<p>本文介绍使用C++语言实现通用模型的部署。本文主要使用pb格式的模型文件，其它格式的模型文件请先进行格式转换。</p>
<h1 id="tensorflow官方c库" tabindex="-1"><a class="header-anchor" href="#tensorflow官方c库" aria-hidden="true">#</a> TensorFlow官方C库</h1>
<h2 id="tensorflow官方c库介绍" tabindex="-1"><a class="header-anchor" href="#tensorflow官方c库介绍" aria-hidden="true">#</a> TensorFlow官方C库介绍</h2>
<p>TensorFlow官方同时提供了C++接口和C接口，目前不能直接使用C++接口的调用，使用之前需要使用TensorFlow bazel build编译；而C接口TensorFlow官方提供了预编译库，可直接下载。</p>
<h3 id="获取库文件" tabindex="-1"><a class="header-anchor" href="#获取库文件" aria-hidden="true">#</a> 获取库文件</h3>
<p>库文件在获取和安装可参考<a href="https://tensorflow.google.cn/install/lang_c" target="_blank" rel="noopener noreferrer">TensorFlow官方C库安装教程<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/tensorflow-c-lib.png" alt="tensorflow-c-lib"></p>
<p>Download and extract</p>
<table>
<thead>
<tr>
<th style="text-align:left">TensorFlow C library</th>
<th style="text-align:left">URL</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Linux</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Linux CPU only</td>
<td style="text-align:left"><a href="https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-2.10.0.tar.gz" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-2.10.0.tar.gz<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">Linux GPU support</td>
<td style="text-align:left"><a href="https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-gpu-linux-x86_64-2.10.0.tar.gz" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-gpu-linux-x86_64-2.10.0.tar.gz<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">macOS</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">macOS CPU only</td>
<td style="text-align:left"><a href="https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-darwin-x86_64-2.10.0.tar.gz" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-darwin-x86_64-2.10.0.tar.gz<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">Windows</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Windows CPU only</td>
<td style="text-align:left"><a href="https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-windows-x86_64-2.10.0.zip" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-windows-x86_64-2.10.0.zip<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">Windows GPU only</td>
<td style="text-align:left"><a href="https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-gpu-windows-x86_64-2.10.0.zip" target="_blank" rel="noopener noreferrer">https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-gpu-windows-x86_64-2.10.0.zip<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>Extract the downloaded archive, which contains the header files to include in your C program and the shared libraries to link against.</p>
<p>选择<code v-pre>Windows GPU only</code>，下载并解压缩：</p>
<p><code v-pre>libtensorflow-gpu-windows-x86_64-1.12.0.zip</code></p>
<p>注意，上面的地址的zip版本是随着Tensorflow的更新而升级的，我下的是参考的博客里的，比较老，还是tf1.12的，暂时也够了。</p>
<p>解压缩后如下，就只有一个<strong>动态链接库</strong>和一个<strong>头文件</strong>，注意这个头文件是用于C的，不是用于C++，用于C++的稍后有大神适配了，但这里官方的还不行。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/libtensorflow-1.12-download.png" alt="libtensorflow-1.12-download"></p>
<p>注：最新版(2.10.0版)的下载下来，头文件有好几个，doing链接库也分为了dll和配套的lib。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/libtensorflow-2.10-download.png" alt="libtensorflow-2.10-download"></p>
<p>下载完毕后只需将解压后的库文件和头文件添加到系统环境变量中即可。这里我自己没有加，因为我需要放到其他任意机器上跑。</p>
<h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3>
<p>如果以上列表中没有我们想要的平台库，或者我们需要开启一些未开启的加速选项，就需要从源代码编译C库了。具体编译环境搭建可参考官方文档<a href="https://tensorflow.google.cn/install/source" target="_blank" rel="noopener noreferrer">linux/macOS<ExternalLinkIcon/></a> <a href="https://tensorflow.google.cn/install/source_windows" target="_blank" rel="noopener noreferrer">windows<ExternalLinkIcon/></a> <a href="https://tensorflow.google.cn/install/source_rpi" target="_blank" rel="noopener noreferrer">树莓派<ExternalLinkIcon/></a>，编译命令可参考<a href="https://github.com/tensorflow/tensorflow/blob/master/tensorflow/tools/lib_package/README.md" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<p>关于TensorFlow的编译因为东西比较多，<a href="https://blog.csdn.net/chongtong/article/details/91947690" target="_blank" rel="noopener noreferrer">参考资料<ExternalLinkIcon/></a>的作者说会在后续专门写一个博客进行说明。这篇文章主要聚焦在使用C++调用模型文件进行推理这一块。</p>
<h3 id="c库的api讲解" tabindex="-1"><a class="header-anchor" href="#c库的api讲解" aria-hidden="true">#</a> C库的API讲解</h3>
<p>TensorFlow的C接口详见<a href="https://github.com/tensorflow/tensorflow/blob/master/tensorflow/c/c_api.h" target="_blank" rel="noopener noreferrer">c_api.h<ExternalLinkIcon/></a>，这里针对常用接口做一个说明，并跟将C接口跟<a href="https://blog.csdn.net/chongtong/article/details/90693787" target="_blank" rel="noopener noreferrer">tensorflow模型部署系列—单机python部署<ExternalLinkIcon/></a>中的python代码进行对应，以便于读者更好地理解接口。</p>
<ul>
<li>
<p>加载模型文件，对应python代码<code v-pre>tensors = tf.import_graph_def(output_graph_def, name=&quot;&quot;)</code></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 函数`TF_GraphImportGraphDef`用于从序列化的缓存中导入模型
void TF_GraphImportGraphDef(
 TF_Graph* graph, const TF_Buffer* graph_def,
 const TF_ImportGraphDefOptions* options, TF_Status* status)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建session，对应python代码<code v-pre>self.__sess = tf.Session()</code></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 函数TF_NewSession用于使用当前模型图创建session
TF_Session* TF_NewSession(TF_Graph* graph, const TF_SessionOptions* opts, TF_Status* status);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取输入输出OP，对应python代码<code v-pre>self.__input = graph.get_tensor_by_name(&quot;input:0&quot;)</code></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 函数TF_GraphOperationByName可根据op名称获取当前图的op。op名称的获取方式见tensorflow模型部署系列—单机python部署https://blog.csdn.net/chongtong/article/details/90693787。注意：C中将冒号切分开了，代码表述为{TF_GraphOperationByName(tf_app.graph, &quot;output/Softmax&quot;), 0}
TF_CAPI_EXPORT extern TF_Operation* TF_GraphOperationByName(
 TF_Graph* graph, const char* oper_name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>张量填充，无对应python代码，python可直接赋值</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 使用TF_AllocateTensor创建张量，张量的数据缓冲区地址使用TF_TensorData获取，找到张量的数据缓冲区地址就可以用memcpy进行数据填充了
F_Tensor* TF_AllocateTensor(TF_DataType, const int64_t* dims,
int num_dims, size_t len);
void* TF_TensorData(const TF_Tensor*);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行OP，对应python代码<code v-pre>output = self.__sess.run(self.__output, feed_dict={self.__input: input})</code></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 使用TF_SessionRun运行op，在运行之前需要拿到session、填充好输入数据
void TF_SessionRun(
 TF_Session* session,
 // RunOptions
 const TF_Buffer* run_options,
 // Input tensors
 const TF_Output* inputs, TF_Tensor* const* input_values, int ninputs,
 // Output tensors
 const TF_Output* outputs, TF_Tensor** output_values, int noutputs,
 // Target operations
 const TF_Operation* const* target_opers, int ntargets,
 // RunMetadata
 TF_Buffer* run_metadata,
 // Output status
 TF_Status*);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取张量值，无对应python代码，因python可直接获取</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// op运行完毕后就可以通过TF_TensorData找到张量的数据缓冲区地址，并获取输出数据了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>释放资源，无对应python代码，因python可自动释放资源</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 这一步是C/C++特有的，需要手动释放资源。包括释放张量TF_DeleteTensor、关闭sessionTF_CloseSession、删除sessionTF_DeleteSession、删除计算图TF_DeleteGraph
void TF_DeleteTensor(TF_Tensor*);
void TF_CloseSession(TF_Session*, TF_Status* status);
void TF_DeleteSession(TF_Session*, TF_Status* status);
void TF_DeleteGraph(TF_Graph*);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="tensorflow官方c-库介绍" tabindex="-1"><a class="header-anchor" href="#tensorflow官方c-库介绍" aria-hidden="true">#</a> TensorFlow官方C++库介绍</h2>
<p>TensorFlow官方的C++库接口见这里：<a href="https://www.tensorflow.org/api_docs/cc/" target="_blank" rel="noopener noreferrer">TensorFlow C++ API Reference<ExternalLinkIcon/></a>，具体界面是：</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/tensorFlow-c++-api-reference.png" alt="tensorFlow-c++-api-reference"></p>
<p>目前基于C++库的好像很少。下面三种都是基于C库的，封装成了C++形式。</p>
<p>这篇文章介绍了如何下载编译C++DLL并使用pb文件进行推理。下面参考这篇文章进行下载编译和推理</p>
<p><a href="https://blog.csdn.net/yuejisuo1948/article/details/84197534" target="_blank" rel="noopener noreferrer">windows下编译tensorflow源码 用其c++接口调用训练好的模型<ExternalLinkIcon/></a></p>
<h3 id="下载并编译" tabindex="-1"><a class="header-anchor" href="#下载并编译" aria-hidden="true">#</a> 下载并编译</h3>
<p>参考文章：</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/yuejisuo1948/article/details/84197534" target="_blank" rel="noopener noreferrer">windows下编译tensorflow源码 用其c++接口调用训练好的模型<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/dycljj/article/details/118408400" target="_blank" rel="noopener noreferrer">indows下编译tensorflow2.5.0 c++库并调用<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/yx123919804/article/details/107042822" target="_blank" rel="noopener noreferrer">Windows10 Bazel 编译 Tensorflow 2 C++ dll 和 lib 文件<ExternalLinkIcon/></a></p>
</li>
</ul>
<h1 id="第一种c-部署工程neargye" tabindex="-1"><a class="header-anchor" href="#第一种c-部署工程neargye" aria-hidden="true">#</a> 第一种C++部署工程Neargye</h1>
<p>因为C/C++语言本身的特性，tensorflow的C/C++接口相对复杂了不少，好在已有大神把TensorFlow的C接口进行了封装，见<a href="https://github.com/Neargye/hello_tf_c_api" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>，第一种C++部署工程就是参考此GitHub。</p>
<h2 id="下载并打开c-部署的vs工程" tabindex="-1"><a class="header-anchor" href="#下载并打开c-部署的vs工程" aria-hidden="true">#</a> 下载并打开C++部署的VS工程</h2>
<p>打开<a href="https://github.com/Neargye/hello_tf_c_api" target="_blank" rel="noopener noreferrer">GitHub: Neargye/hello_tf_c_api<ExternalLinkIcon/></a>，下载源代码。看时间应该配套的tensorflow.dll是1.15版本的。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/github-neargye.png" alt="github-neargye"></p>
<p>这里有介绍如何从dll生成配套的lib(引入库，不是静态库)：<a href="https://github.com/Neargye/hello_tf_c_api/blob/master/doc/create_lib_file_from_dll_for_windows.md" target="_blank" rel="noopener noreferrer">Create .lib file from .dll for windows<ExternalLinkIcon/></a>。</p>
<p>仔细看看ReadMe。</p>
<h3 id="由cmake创建vs工程" tabindex="-1"><a class="header-anchor" href="#由cmake创建vs工程" aria-hidden="true">#</a> 由cmake创建VS工程</h3>
<p>在其GitHub：<a href="https://github.com/Neargye/hello_tf_c_api" target="_blank" rel="noopener noreferrer">Neargye/hello_tf_c_api<ExternalLinkIcon/></a>主页上有介绍如何在Windows下创建VS工程，摘录如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Neargye/hello_tf_c_api
<span class="token builtin class-name">cd</span> hello_tf_c_api  <span class="token comment"># cd进去后打开CmakeList，可以看到下载的tf的版本及cpu/gpu,可以自行修改</span>
<span class="token function">mkdir</span> build
<span class="token builtin class-name">cd</span> build
cmake <span class="token parameter variable">-G</span> <span class="token string">"Visual Studio 15 2017"</span> <span class="token parameter variable">-A</span> x64 <span class="token punctuation">..</span>  <span class="token comment"># 64位 若32位则改为Win32</span>
cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--config</span> Debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/cmake-create-vs2017.png" alt="cmake-create-vs2017"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--config</span> Debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/cmake-build-vs2017.png" alt="cmake-build-vs2017"></p>
<h3 id="运行并改造vs工程" tabindex="-1"><a class="header-anchor" href="#运行并改造vs工程" aria-hidden="true">#</a> 运行并改造VS工程</h3>
<p>该VS工程的解决方案打开后有好几个项目，我们需要两个项目：</p>
<ul>
<li>
<p><code v-pre>graph_info</code></p>
<p>用于显示模型文件的结构和各变量名</p>
</li>
<li>
<p><code v-pre>interface</code></p>
<p>用于前向推理，得出推理结果。</p>
</li>
</ul>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/github-vs-sln.png" alt="github-vs-sln"></p>
<p>我们需要先用<code v-pre>graph_info</code>得到模型文件的输入输出变量名和维度，然后争取填写到<code v-pre>interface</code>中，得到正确的模型推理输出结果。</p>
<p>首先运行<code v-pre>graph_info</code>工程，把输入的pb模型文件变为自己的pb模型文件，可以指定路径，如果不指定路径，只有文件名的话，就默认是在<code v-pre>inferface.vcxproj</code>同目录下。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">2</span>: state type: Placeholder device:  number inputs: <span class="token number">0</span> number outputs: <span class="token number">1</span>
Number inputs: <span class="token number">0</span>
Number outputs: <span class="token number">1</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT dims: <span class="token number">2</span> <span class="token punctuation">[</span>-1,7<span class="token punctuation">]</span>

<span class="token punctuation">..</span>.

<span class="token number">18</span>: pi/mul type: Mul device:  number inputs: <span class="token number">2</span> number outputs: <span class="token number">1</span>
Number inputs: <span class="token number">2</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT
<span class="token number">1</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT
Number outputs: <span class="token number">1</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT dims: <span class="token number">2</span> <span class="token punctuation">[</span>-1,2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据输出来确定模型的输入输出的名称，以及输入的维度，来改编<code v-pre>interface</code>工程，具体如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 由2: state type: Placeholder | type : TF_FLOAT dims: 2 [-1,7]可知
// 输入名字叫state，维度是[1, 7]，即
const std::vector&lt;TF_Output&gt; input_ops = { {TF_Graph...ByName(graph, &quot;state&quot;), 0} };
const std::vector&lt;std::int64_t&gt; input_dims = { 1, 7 };
// 由18: pi/mul type: Mul | type : TF_FLOAT dims: 2 [-1,2]可知
// 输出名字叫pi/mul，维度是[1, 2]，即
const std::vector&lt;TF_Output&gt; out_ops = { {TF_Graph...ByName(graph, &quot;pi/mul&quot;), 0} };
std::cout &lt;&lt; &quot;Output vals: &quot; &lt;&lt; result[0] &lt;&lt; &quot;, &quot; &lt;&lt; result[1] &lt;&lt; std::endl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果为</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">2022</span>-11-16 <span class="token number">22</span>:01:48.389869: I tensorflow/core/platform/cpu_feature_guard.cc:142<span class="token punctuation">]</span> Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2
<span class="token number">4</span>
Output vals: <span class="token number">0.867242</span>, <span class="token parameter variable">-0.558126</span>
<span class="token number">0.867241501808</span>, <span class="token parameter variable">-0.558125674725</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功输出模型运行结果，经过比对验证，结果正确无误。</p>
<h2 id="基于neargye建立自己的vs工程" tabindex="-1"><a class="header-anchor" href="#基于neargye建立自己的vs工程" aria-hidden="true">#</a> 基于Neargye建立自己的VS工程</h2>
<p>这里建立的VS工程名字是<code v-pre>tf_model_infer</code>。</p>
<p>注意：第二种工程不能使用最新版(2.9.0版本)的TensorFlow官网给的C接口，<strong>只能使用1.12.0版本的旧</strong>的C接口，这是因为作者已经有4年（写这段话的时间为2022年11月17日）没维护代码了，可能有些函数接口已经变了？所以这个代码虽然能用，但是我<strong>不打算用了</strong>，因为它不能使用官方最新的C接口，但是它的<strong>运行速度真的很快</strong>，同样的模型，10万次循环测试下来，单次耗时只需要0.03ms，其他两个模型（第二种和第三种都需要0.3ms）。</p>
<table>
<thead>
<tr>
<th>模型类型</th>
<th>是否能使用最新版C接口(2.9.0版)</th>
<th>单次推理速度</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>第一种Neargye/hello_tf_c_api</td>
<td>不能，能使用旧版C接口(1.12.0版)</td>
<td>0.03ms</td>
<td></td>
</tr>
<tr>
<td>第二种gdyshi/model_deployment</td>
<td>能</td>
<td>0.3ms</td>
<td>二是基于一写的</td>
</tr>
<tr>
<td>第三种CppFlow</td>
<td>能</td>
<td>0.3ms</td>
<td></td>
</tr>
</tbody>
</table>
<p>而且该工程可以打印pb文件的模型结构，即内部的变量和算子名字。</p>
<h3 id="找出必要的第三方链接库和头文件" tabindex="-1"><a class="header-anchor" href="#找出必要的第三方链接库和头文件" aria-hidden="true">#</a> 找出必要的第三方链接库和头文件</h3>
<p>经过仔细查看示例工程给的VS源码工程，发现需要第三方导入的就是一个dll动态链接库（以及配套的lib引入库），还有与动态链接库对应的一些头文件。整理如下所示，按下面的目录进行整理即可。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>├─3rdparty
│  ├─include
│  │  ├─scope_guard  <span class="token comment"># 这也是某个需要的头文件，没看内容</span>
│  │  │  └─include
│  │  │          scope_guard.hpp
│  │  │
│  │  └─tensorflow  <span class="token comment"># 动态链接库对应的头文件</span>
│  │      └─c
│  │          │  c_api.h
│  │          │  tf_attrtype.h
│  │          │  tf_datatype.h
│  │          │  tf_status.h
│  │          │  tf_tensor.h
│  │          │
│  │          └─eager
│  │                  c_api.h
│  │
│  └─lib  <span class="token comment"># 动态链接库</span>
│          tensorflow.dll
│          tensorflow.lib  <span class="token comment"># 注：这不是静态库，而是动态链接库对应的引入库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建vs工程" tabindex="-1"><a class="header-anchor" href="#创建vs工程" aria-hidden="true">#</a> 创建VS工程</h3>
<p>创建新的VS工程，解决方案起名为<code v-pre>tf_model_infer</code>，里面的代码如下图所示，含有一个main函数所在的<code v-pre>tf_model_infer.cpp</code>文件，还有一个原工程里就有的<code v-pre>tf_utils.cpp</code>和<code v-pre>tf_utils.h</code>文件。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-file-structure.png" alt="vs-file-structure"></p>
<p>然后把原代码中的<code v-pre>graph_info</code>工程中的代码加进来，目的是为了显示pb模型文件的结构，方便找出输入和输出的变量名。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-file-structure-2.png" alt="vs-file-structure-2"></p>
<p>这样我们的工程就建好了，但是运行会报错，因为还没有加载动态链接库和对应的头文件。</p>
<h3 id="加载动态链接库" tabindex="-1"><a class="header-anchor" href="#加载动态链接库" aria-hidden="true">#</a> 加载动态链接库</h3>
<p>先回顾下动态链接库和静态链接库的概念：</p>
<p>函数库一般分为<code v-pre>静态库</code>和<code v-pre>动态库</code>两种，所谓静态、动态是指链接过程。</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">静态库</th>
<th style="text-align:center">动态库</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Windows</td>
<td style="text-align:center">.lib</td>
<td style="text-align:center">.dll</td>
</tr>
<tr>
<td style="text-align:center">Linux</td>
<td style="text-align:center">.a</td>
<td style="text-align:center">.so</td>
</tr>
</tbody>
</table>
<p>虽然Windows下静态库后缀为<code v-pre>.lib</code>，但是Windows下的动态链接库，往往提供两个文件：一个**引入库（.lib）文件（也称“导入库文件”）<strong>和一个</strong>DLL（.dll）**文件。当然到了后面会告诉你如果只提供一个DLL文件，使用显示连接的方式也可以调用，只是稍加麻烦而已。</p>
<p><strong>Windows中两种lib的区别</strong></p>
<p><strong>静态库（.lib）</strong></p>
<ul>
<li>函数和数据被编译进一个二进制文件（通常扩展名为.lib）。</li>
<li>在使用静态库的情况下，在编译链接可执行文件时，链接库从库中复制这些函数和数据并把它们和应用程序的其他模块组合起来创建最终的可执行文件（.EXE文件）</li>
<li>当发布产品时，只需要发布这个可执行文件，并不需要发布被使用的静态库</li>
</ul>
<p><strong>动态库(.lib和.dll)</strong></p>
<ul>
<li>在使用动态库的时候，编译后往往提供两个文件：一个引入库（.lib）文件（也称“导入库文件”）和一个DLL（.dll）文件。当然到了后面会告诉你如果只提供一个DLL文件，使用显示连接的方式也可以调用，只是稍加麻烦而已。</li>
<li>虽然引入库的后缀名也是“lib”，但是，动态库的引入库文件和静态库文件有着本质的区别。对于一个dll文件来说，其引入库文件（.lib）包含该DLL导出的函数和变量的符号名，而.dll文件包含该DLL实际的函数和数据。</li>
<li>在使用动态库的情况下，在编译链接可执行文件时，只需要链接该DLL的引入库文件，该DLL中的函数代码和数据并不复制到可执行文件，知道可执行程序运行时，才去加载所需的DLL，将该DLL映射到进程的地址空间中，然后访问DLL中导出的函数。</li>
<li>也就是说，在发布产品时，除了发布可执行文件以外，同时还需要发布该程序将要调用的动态链接库。</li>
<li>只有当EXE程序确实要调用这些DLL模块的情况下，系统才会将它们加载到内存空间中。这种方式不仅减少了EXE文件的大小和对内存空间的需求，而且使这些DLL模块可以同时被多个应用程序使用。<strong>链接Windows程序以产生一个可执行文件时，你必须链接由编程环境提供的专门的 “引入库(import library)”</strong>。这些引入库包含了动态链接库名称和所有Windows函数调用的引用信息。链接程序使用该信息在.EXE文件中构造一个表，当加载程序时，Windows使用它将调用转换为Windows函数。</li>
<li><strong>“引入库”和静态库的区别很大</strong>，它们本质是不一样的东西。静态库本身就包含了实际执行代码、符号表等等，而对于<strong>引用库而言，其实际的执行代码位于动态库中，引入库只包含了地址符号表等，确保程序找到对应函数的一些基本地址信息</strong>。但是<strong>引入用文件的引入方式和静态库一样</strong>，要在链接路径上添加找到这些.lib的路径</li>
</ul>
<p>上文是复制的<a href="https://blog.csdn.net/zhizhengguan/article/details/121532075" target="_blank" rel="noopener noreferrer">基础：windows下lib和dll的区别和使用<ExternalLinkIcon/></a>中的一段话，更详细的介绍，请看该博客。</p>
<p>下面介绍我自己在VS2019中加载使用动态链接库的方法。</p>
<p>加载动态库有隐式链接和显示链接两种方式，具体见<a href="https://blog.csdn.net/zhizhengguan/article/details/121532075" target="_blank" rel="noopener noreferrer">基础：windows下lib和dll的区别和使用<ExternalLinkIcon/></a>，这里不再详述，我选择了隐式链接，因为显示链接1是有点麻烦，不优雅，2是需要指定dll的位置，不方便，相对位置一变就要重新编译（除非一直放在根目录下），不灵活。</p>
<p>正式开始介绍隐式链接的方法：</p>
<p>隐式链接需要三个东西，分别是*.h头文件，lib库（动态的），dll库；而这里的lib库仅是编译的时候用，运行时候不用，运行时只用dll。</p>
<p><strong>第一步：添加动态链接库的Lib引入库</strong></p>
<p>有两种方法，这里选择其中一种：通过设置工程配置来添加lib库。</p>
<ul>
<li>添加文件引用的lib静态库<strong>路径</strong>：工程-&gt;属性-&gt;配置属性-&gt;链接器-&gt;常规-&gt;附加库目录：加上lib文件存放目录。</li>
</ul>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-lib-load.png" alt="vs-lib-load"></p>
<ul>
<li>然后添加工程引用的lib<strong>文件名</strong>：工程-&gt;属性-&gt;配置属性-&gt;链接器-&gt;输入-&gt;附加依赖项：加上lib文件名。</li>
</ul>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-lib-load-2.png" alt="vs-lib-load-2"></p>
<p><strong>第二步：添加头文件</strong></p>
<p>在调用DLL中导出的函数之前要include对应的头文件，可以写绝对路径，也可以拷贝到工程调用源文件的同一目录下，也可以通过VS添加（include）头文件目录，VS中配置方法：</p>
<ul>
<li>VS项目-&gt;右击属性-&gt;配置属性-&gt;VC++目录-&gt;包含目录</li>
<li>VS项目-&gt;右击属性-&gt;配置属性-&gt;C/C+±&gt;常规-&gt;附加包含目录</li>
</ul>
<p>两种估计都行，但是我选择了第二种，没啥理由，就是一种直觉。。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-h-load.png" alt="vs-h-load"></p>
<p><strong>第三步：VS工程模式选择</strong></p>
<p>最后要注意，VS工程选择的是32位还是64位，是Debug模式还是Release模式。选择不同，可能会导致动态链接库链接失败。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/vs-load.png" alt="vs-load"></p>
<h3 id="编译运行" tabindex="-1"><a class="header-anchor" href="#编译运行" aria-hidden="true">#</a> 编译运行</h3>
<p>如果一切正确的话，运行结果分为两个部分，1是显示模型文件的结构，2是显示模型的输出结果，具体如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">2</span>: state type: Placeholder device:  number inputs: <span class="token number">0</span> number outputs: <span class="token number">1</span>
Number inputs: <span class="token number">0</span>
Number outputs: <span class="token number">1</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT dims: <span class="token number">2</span> <span class="token punctuation">[</span>-1,7<span class="token punctuation">]</span>

<span class="token punctuation">..</span>.

<span class="token number">18</span>: pi/mul type: Mul device:  number inputs: <span class="token number">2</span> number outputs: <span class="token number">1</span>
Number inputs: <span class="token number">2</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT
<span class="token number">1</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT
Number outputs: <span class="token number">1</span>
<span class="token number">0</span> <span class="token builtin class-name">type</span> <span class="token builtin class-name">:</span> TF_FLOAT dims: <span class="token number">2</span> <span class="token punctuation">[</span>-1,2<span class="token punctuation">]</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

<span class="token number">2022</span>-11-16 <span class="token number">21</span>:34:17.601445: I tensorflow/core/platform/cpu_feature_guard.cc:142<span class="token punctuation">]</span> Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2
infer <span class="token function">time</span> is <span class="token number">5</span>
Output vals: <span class="token number">0.867242</span>, <span class="token parameter variable">-0.558126</span>
<span class="token number">0.867241501808</span>, <span class="token parameter variable">-0.558125674725</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态库和pb模型文件的放置位置分析" tabindex="-1"><a class="header-anchor" href="#动态库和pb模型文件的放置位置分析" aria-hidden="true">#</a> 动态库和pb模型文件的放置位置分析</h3>
<p>设定<code v-pre>std::string pb_file = &quot;dppo.pb&quot;;</code>，即没有加绝对或者相对路径。</p>
<p>（1）编译：</p>
<ul>
<li>
<p>必须要有lib：</p>
<p>若没有指定lib文件路径，则必须放在和<code v-pre>tf_model_infer.vcxproj</code>同目录下；</p>
<p>若指定lib文件路径，则要么放在和<code v-pre>tf_model_infer.vcxproj</code>同目录下，要么放在指定的lib文件路径下：<code v-pre>属性-&gt;链接器-&gt;常规-&gt;附加库目录</code></p>
</li>
<li>
<p>可以没有dll；</p>
</li>
<li>
<p>可以没有pb模型文件，因为不会实际运行代码</p>
</li>
</ul>
<p>（2）IDE中调试/运行：</p>
<ul>
<li>
<p>dll文件：</p>
<p>（1）要么放在和<code v-pre>tf_model_infer.vcxproj</code>同目录下；</p>
<p>（2）要么放在和<code v-pre>tf_model_infer.exe</code>同目录下，即<code v-pre>\x64\Debug</code>目录</p>
<p>注：<code v-pre>属性-&gt;链接器-&gt;常规-&gt;附加库目录</code>不是检索dll的目录，是检索lib的目录</p>
</li>
<li>
<p>pb文件必须放在和<code v-pre>tf_model_infer.vcxproj</code>同目录下</p>
</li>
</ul>
<p>（3）运行<code v-pre>\x64\Debug\xxx.exe</code>可执行文件：</p>
<ul>
<li>dll文件必须放在和<code v-pre>tf_model_infer.exe</code>同目录下，即<code v-pre>\x64\Debug</code>目录</li>
<li>pb文件必须放在和<code v-pre>tf_model_infer.exe</code>同目录下，即<code v-pre>\x64\Debug</code>目录</li>
</ul>
<h3 id="警告消除" tabindex="-1"><a class="header-anchor" href="#警告消除" aria-hidden="true">#</a> 警告消除</h3>
<p>运行时有警告：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>严重性 代码  说明  项目  文件  行   禁止显示状态
警告  C4190   “TF_NewWhile”有指定的 C 链接，但返回了与 C 不兼容的 UDT“TF_WhileParams” tf_model_infer  D:<span class="token punctuation">\</span>1work<span class="token punctuation">\</span>code<span class="token punctuation">\</span>VisualStudioProjects<span class="token punctuation">\</span>tf_model_infer<span class="token punctuation">\</span>3rdparty<span class="token punctuation">\</span>include<span class="token punctuation">\</span>tensorflow<span class="token punctuation">\</span>c<span class="token punctuation">\</span>c_api.h <span class="token number">935</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查了下说是动态链接库太老了，估计需要重新编译该动态库，或者直接用最新的动态库。</p>
<p>疑惑：下的官网的压缩包里没有lib啊。。这个里面哪里来的？可能是要么官网删了，要么是重新编译生成的。</p>
<h3 id="gpu还是cpu" tabindex="-1"><a class="header-anchor" href="#gpu还是cpu" aria-hidden="true">#</a> GPU还是CPU？</h3>
<p>经过实际运行并查看<code v-pre>nvidia-smi</code>，显示GPU占用率为0%，故是CPU运行。</p>
<h1 id="第二种c-部署工程gdyshi" tabindex="-1"><a class="header-anchor" href="#第二种c-部署工程gdyshi" aria-hidden="true">#</a> 第二种C++部署工程gdyshi</h1>
<p>第二种C++部署工程的原作者的代码，参考了第一种的代码。</p>
<h2 id="查看并梳理dyshi工程代码" tabindex="-1"><a class="header-anchor" href="#查看并梳理dyshi工程代码" aria-hidden="true">#</a> 查看并梳理dyshi工程代码</h2>
<p>因为C/C++语言本身的特性，tensorflow的C/C++接口相对复杂了不少，好在已有大神把TensorFlow的C接口进行了封装，见<a href="https://github.com/Neargye/hello_tf_c_api" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>，第一种C++部署工程就是参考此GitHub。</p>
<p>相比大神的封装，我们可以基于此更简单的使用。我写这篇文章所参考的博客<a href="https://blog.csdn.net/chongtong/article/details/91947690" target="_blank" rel="noopener noreferrer">tensorflow模型部署系列—单机C++部署（附源码）<ExternalLinkIcon/></a>的作者的开源的<a href="https://github.com/gdyshi/model_deployment" target="_blank" rel="noopener noreferrer">代码<ExternalLinkIcon/></a>（即第二种的参考）便是<strong>在此（第一种C++部署工程）基础上做的</strong>。</p>
<p>GitHub：<a href="https://github.com/gdyshi/model_deployment/tree/master/C%2B%2B" target="_blank" rel="noopener noreferrer">gdyshi/model_deployment<ExternalLinkIcon/></a></p>
<p><strong>（1）TensorFlow库接口封装</strong></p>
<p>TensorFlow库接口封装参考大神的代码，主要提供了计算图的加载与删除；session的创建、运行和删除；张量的创建、填充、获取与删除。</p>
<p><strong>（2）模型封装库</strong></p>
<p>模型封装类主要包括三个方法：初始化、去初始化和推理。</p>
<p>初始化只用于处理与sess.run无关的所有操作，以减少推理时的操作，保证模型推理高效运行。初始化主要进行的操作包括：模型文件加载、获取计算图和计算session、根据输入输出tensor名称获取输入输出tensor。从模型文件中获取输入输出op名请参考博客<a href="https://blog.csdn.net/chongtong/article/details/90693787" target="_blank" rel="noopener noreferrer">tensorflow模型部署系列—单机python部署<ExternalLinkIcon/></a></p>
<p>推理主要进行的操作有：输入张量填充、sesson.run、和输出张量获取。</p>
<p>去初始化用于释放资源，这一块是python所没有的。主要操作包括：session的关闭和释放、计算图的释放。</p>
<p><strong>（3）模型封装类示例代码</strong></p>
<p>经过模型封装类封装以后，示例代码就很简单了。只用准备数据，然后推理就行了。</p>
<h2 id="基于gdyshi建立自己的vs工程" tabindex="-1"><a class="header-anchor" href="#基于gdyshi建立自己的vs工程" aria-hidden="true">#</a> 基于gdyshi建立自己的VS工程</h2>
<table>
<thead>
<tr>
<th>模型类型</th>
<th>是否能使用最新版C接口(2.9.0版)</th>
<th>单次推理速度</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>第一种Neargye/hello_tf_c_api</td>
<td>不能，能使用旧版C接口(1.12.0版)</td>
<td>0.03ms</td>
<td></td>
</tr>
<tr>
<td>第二种gdyshi/model_deployment</td>
<td>能</td>
<td>0.3ms</td>
<td>二是基于一写的</td>
</tr>
<tr>
<td>第三种CppFlow</td>
<td>能</td>
<td>0.3ms</td>
<td></td>
</tr>
</tbody>
</table>
<p>这里建立的VS工程名字是<code v-pre>tf_model_infer_by_gdyshi</code>。</p>
<p>创建VS工程的过程和第一种的创建方法一样，这里就不再重复说了。</p>
<h1 id="第三种c-部署工程cppflow" tabindex="-1"><a class="header-anchor" href="#第三种c-部署工程cppflow" aria-hidden="true">#</a> 第三种C++部署工程CppFlow</h1>
<p>这种是直接使用CppFlow，而CppFlow又依赖于<a href="https://tensorflow.google.cn/install/lang_c" target="_blank" rel="noopener noreferrer">Tensorflow C API<ExternalLinkIcon/></a>。</p>
<p>CppFlow的<a href="https://github.com/serizba/cppflow" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>CppFlow的<a href="https://serizba.github.io/cppflow/quickstart.html" target="_blank" rel="noopener noreferrer">quickstart guide<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/cppflow.png" alt="cppflow"></p>
<h2 id="查看并梳理cppflow工程代码" tabindex="-1"><a class="header-anchor" href="#查看并梳理cppflow工程代码" aria-hidden="true">#</a> 查看并梳理CppFlow工程代码</h2>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/cppflow-github.png" alt="cppflow-github"></p>
<p>我们把CppFlow的源码从<a href="https://github.com/serizba/cppflow" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>下载下来，里面有包含的源代码<code v-pre>include/cppflow</code>，还有例子库<code v-pre>examples</code>。，由此可知：</p>
<p>（1）所以我们在建立自己的工程时，就需要把<code v-pre>include/cppflow</code>作为自己的头文件库，又因为它依赖了<a href="https://tensorflow.google.cn/install/lang_c" target="_blank" rel="noopener noreferrer">Tensorflow C API<ExternalLinkIcon/></a>，所以还需要从<a href="https://tensorflow.google.cn/install/lang_c" target="_blank" rel="noopener noreferrer">Tensorflow C API<ExternalLinkIcon/></a>中下载动态链接库和头文件，具体做法见前面的第一种部署，这里不再重复叙述了，累了。</p>
<p>（2）具体怎么编写代码呢？在例子库中找到<code v-pre>cppflow/examples/load_model/main.cpp</code>，查看：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// CppFlow headers
#include &lt;cppflow/ops.h&gt;
#include &lt;cppflow/model.h&gt;

// C++ headers
#include &lt;iostream&gt;

int main() {
    auto input = cppflow::fill({10, 5}, 1.0f);
    cppflow::model model(std::string(MODEL_PATH));
    auto output = model(input);

    std::cout &lt;&lt; output &lt;&lt; std::endl;

    auto values = output.get_data&lt;float&gt;();

    for (auto v : values) {
        std::cout &lt;&lt; v &lt;&lt; std::endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，输入部分如果想改变，可以这么做：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>const std::vector&lt;float&gt; input_vals = {0.f,-1.5f,-1.29f,-1.5f,-1.29f,-0.5f,-0.29f,};
//auto input = cppflow::fill({ 1, 7 }, 1.0f);
auto input = cppflow::tensor(input_vals, { 1, 7 });//{1, 7});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于cppflow建立自己的vs工程" tabindex="-1"><a class="header-anchor" href="#基于cppflow建立自己的vs工程" aria-hidden="true">#</a> 基于CppFlow建立自己的VS工程</h2>
<table>
<thead>
<tr>
<th>模型类型</th>
<th>是否能使用最新版C接口(2.9.0版)</th>
<th>单次推理速度</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>第一种Neargye/hello_tf_c_api</td>
<td>不能，能使用旧版C接口(1.12.0版)</td>
<td>0.03ms</td>
<td>基于Tensorflow C API</td>
</tr>
<tr>
<td>第二种gdyshi/model_deployment</td>
<td>能</td>
<td>0.3ms</td>
<td>二是基于一写的</td>
</tr>
<tr>
<td>第三种CppFlow</td>
<td>能</td>
<td>0.3ms</td>
<td>基于Tensorflow C API</td>
</tr>
</tbody>
</table>
<p>具体过程见上面的第一种建立过程。</p>
<p>值得一提的是，头文件库同时包含了tensorflow和cppflow的头文件库，动态链接库还是和第一种第二种都一样，只有tensorflow的动态链接库。</p>
<p><img src="@source/docs/machine-learning/model-deployment/model-deployment/tensorflow-cpp-deployment/pic/cppflow-diy-include.png" alt="cppflow-diy-include"></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/zhizhengguan/article/details/121532075" target="_blank" rel="noopener noreferrer">基础：windows下lib和dll的区别和使用<ExternalLinkIcon/></a></li>
</ul>
<p>该博客详细介绍了windows下，动态库分为了导入库(.lib)和链接库(.dll)，以及在工程中怎么使用。很好！</p>
<ul>
<li><a href="https://tensorflow.google.cn/install/lang_c" target="_blank" rel="noopener noreferrer">Tensorflow C API<ExternalLinkIcon/></a></li>
</ul>
<p>TensorFlow官方的C接口。</p>
<ul>
<li><a href="https://www.tensorflow.org/api_docs/cc/" target="_blank" rel="noopener noreferrer">TensorFlow C++ API Reference<ExternalLinkIcon/></a></li>
</ul>
<p>TensorFlow官方的C++接口。这个<a href="https://github.com/FloopCZ/tensorflow_cc" target="_blank" rel="noopener noreferrer">FloopCZ/<strong>tensorflow_cc</strong><ExternalLinkIcon/></a>是基于TensorFlow官方的C++接口，但是我没看懂。</p>
</div></template>


