<template><div><h1 id="tensorflow中使用gpu" tabindex="-1"><a class="header-anchor" href="#tensorflow中使用gpu" aria-hidden="true">#</a> Tensorflow中使用GPU</h1>
<ul>
<li><RouterLink to="/docs/machine-learning-framework/tensorflow/tools/tools.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%B5%8B%E8%AF%95%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81GPU">测试是否支持GPU</a></li>
<li><a href="#%E6%9F%A5%E7%9C%8BGPU%E7%9A%84%E4%BF%A1%E6%81%AF">查看GPU的信息</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E6%8C%87%E5%AE%9A%E7%A9%BA%E9%97%B2GPU">动态指定空闲GPU</a></li>
<li><a href="#%E7%A8%8B%E5%BA%8F%E6%8C%89%E9%9C%80%E5%8D%A0%E7%94%A8GPU%E6%98%BE%E5%AD%98">程序按需占用GPU显存</a></li>
<li><a href="#%E7%BD%91%E4%B8%8A%E7%9A%84%E4%BA%91GPU">网上的云GPU</a></li>
</ul>
<h1 id="测试是否支持gpu" tabindex="-1"><a class="header-anchor" href="#测试是否支持gpu" aria-hidden="true">#</a> 测试是否支持GPU</h1>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>test<span class="token punctuation">.</span>is_gpu_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="查看gpu的信息" tabindex="-1"><a class="header-anchor" href="#查看gpu的信息" aria-hidden="true">#</a> 查看GPU的信息</h1>
<p>使用<code v-pre>nvidia-smi</code>命令查看当前机器的GPU基本信息和被占用信息。</p>
<p>比如下图所示，当前机器有8个GPU，其中[3, 4, 5]被占用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Tue Mar <span class="token number">31</span> <span class="token number">20</span>:03:24 <span class="token number">2020</span>       
+-----------------------------------------------------------------------------+
<span class="token operator">|</span> NVIDIA-SMI <span class="token number">418.67</span>       Driver Version: <span class="token number">418.67</span>       CUDA Version: <span class="token number">10.1</span>     <span class="token operator">|</span>
<span class="token operator">|</span>-------------------------------+----------------------+----------------------+
<span class="token operator">|</span> GPU  Name        Persistence-M<span class="token operator">|</span> Bus-Id        Disp.A <span class="token operator">|</span> Volatile Uncorr. ECC <span class="token operator">|</span>
<span class="token operator">|</span> Fan  Temp  Perf  Pwr:Usage/Cap<span class="token operator">|</span>         Memory-Usage <span class="token operator">|</span> GPU-Util  Compute M. <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">+=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>
<span class="token operator">|</span>   <span class="token number">0</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:8A:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   41C    P0    44W / 300W <span class="token operator">|</span>      0MiB / 32480MiB <span class="token operator">|</span>      <span class="token number">0</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">1</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:8B:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   37C    P0    45W / 300W <span class="token operator">|</span>      0MiB / 32480MiB <span class="token operator">|</span>      <span class="token number">0</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">2</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:8C:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   45C    P0    46W / 300W <span class="token operator">|</span>      0MiB / 32480MiB <span class="token operator">|</span>      <span class="token number">0</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">3</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:8D:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   50C    P0    75W / 300W <span class="token operator">|</span>   8940MiB / 32480MiB <span class="token operator">|</span>     <span class="token number">49</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">4</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:B3:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   44C    P0    60W / 300W <span class="token operator">|</span>   1008MiB / 32480MiB <span class="token operator">|</span>     <span class="token number">28</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">5</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:B4:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   46C    P0    92W / 300W <span class="token operator">|</span>   1016MiB / 32480MiB <span class="token operator">|</span>     <span class="token number">41</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">6</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:B5:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   43C    P0    46W / 300W <span class="token operator">|</span>      0MiB / 32480MiB <span class="token operator">|</span>      <span class="token number">0</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
<span class="token operator">|</span>   <span class="token number">7</span>  Tesla V100-SXM2<span class="token punctuation">..</span>.  Off  <span class="token operator">|</span> 00000000:B6:00.0 Off <span class="token operator">|</span>                    <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">|</span> N/A   42C    P0    44W / 300W <span class="token operator">|</span>      0MiB / 32480MiB <span class="token operator">|</span>      <span class="token number">0</span>%      Default <span class="token operator">|</span>
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
<span class="token operator">|</span> Processes:                                                       GPU Memory <span class="token operator">|</span>
<span class="token operator">|</span>  GPU       PID   Type   Process name                             Usage      <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">3</span>    <span class="token number">320060</span>      C   python                                      8923MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">4</span>    <span class="token number">320060</span>      C   python                                       993MiB <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">5</span>    <span class="token number">320060</span>      C   python                                      1001MiB <span class="token operator">|</span>
+-----------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再通过命令<code v-pre>ll /proc/pid</code>查看pid信息。</p>
<p>另外，<code v-pre>nvidia-smi -l</code>命令可以不断自动刷新GPU信息。</p>
<p><strong>GPU信息介绍</strong></p>
<p><img src="@source/docs/machine-learning-framework/tensorflow/tools/gpu/pic/nvidia-smi.png" alt="nvidia-smi"></p>
<p>GPU：本机中的GPU编号</p>
<p>Name：GPU类型</p>
<p>Persistence-M：驱动常驻模式</p>
<p>Fan：风扇转速</p>
<p>Temp：温度，单位摄氏度</p>
<p>Perf：表征性能状态，从P0到P12，P0表示最大性能，P12表示状态最小性能</p>
<p>Pwr:Usage/Cap：能耗表示</p>
<p>Bus-Id：涉及GPU总线的相关信息；</p>
<p>Disp.A：Display Active，表示GPU的显示是否初始化</p>
<p>Memory-Usage：显存使用率</p>
<p>Volatile GPU-Util：浮动的GPU利用率</p>
<p>Uncorr. ECC：关于ECC的东西</p>
<p>Compute M.：计算模式</p>
<p>Processes 显示每块GPU上每个进程所使用的显存情况。</p>
<h1 id="动态指定空闲gpu" tabindex="-1"><a class="header-anchor" href="#动态指定空闲gpu" aria-hidden="true">#</a> 动态指定空闲GPU</h1>
<p>有两种，第一种是github上找的，另一种是自己写的。</p>
<ul>
<li>
<p>github上的：<a href="https://github.com/anderskm/gputil" target="_blank" rel="noopener noreferrer">gputil<ExternalLinkIcon/></a></p>
</li>
<li>
<p>自己写的：见具体的代码，这里就不写了，有点长。</p>
</li>
</ul>
<h1 id="程序按需占用gpu显存" tabindex="-1"><a class="header-anchor" href="#程序按需占用gpu显存" aria-hidden="true">#</a> 程序按需占用GPU显存</h1>
<p>在使用过程中，我发现我的机器显存在没有执行复杂操作的时候已经占用很高。经过调查发现，tensorflow默认是占用所有显卡和全部显存，用户可以通过以下设置，让tensorflow按需要占用显存。</p>
<p>以下命令为TensorFlow 2.x的命令：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
gpus <span class="token operator">=</span> tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>experimental<span class="token punctuation">.</span>list_physical_devices<span class="token punctuation">(</span><span class="token string">'GPU'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> gpus<span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># Currently, memory growth needs to be the same across GPUs</span>
        <span class="token keyword">for</span> gpu <span class="token keyword">in</span> gpus<span class="token punctuation">:</span>
            tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>experimental<span class="token punctuation">.</span>set_memory_growth<span class="token punctuation">(</span>gpu<span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
        logical_gpus <span class="token operator">=</span> tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>experimental<span class="token punctuation">.</span>list_logical_devices<span class="token punctuation">(</span><span class="token string">'GPU'</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>gpus<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"Physical GPUs,"</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>logical_gpus<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"Logical GPUs"</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> RuntimeError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token comment"># Memory growth must be set before GPUs have been initialized</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://www.cnblogs.com/king-lps/p/12748459.html" target="_blank" rel="noopener noreferrer">指定当前程序使用的 GPU<ExternalLinkIcon/></a></p>
</div></template>


