<template><div><h1 id="tensorflow2-0基础" tabindex="-1"><a class="header-anchor" href="#tensorflow2-0基础" aria-hidden="true">#</a> TensorFlow2.0基础</h1>
<ul>
<li><RouterLink to="/docs/machine-learning-framework/tensorflow/tensorflow2.0/tensorflow2.0.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="安装tensorflow" tabindex="-1"><a class="header-anchor" href="#安装tensorflow" aria-hidden="true">#</a> 安装Tensorflow</h1>
<h2 id="anaconda下安装tensorflow2-0" tabindex="-1"><a class="header-anchor" href="#anaconda下安装tensorflow2-0" aria-hidden="true">#</a> Anaconda下安装Tensorflow2.0</h2>
<p>anaconda的安装方式不再赘述，首先虚拟出一个tf2.0的环境：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda create <span class="token parameter variable">-n</span> tf20 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后激活这个环境：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda activate tf20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用pip来安装tf2.0:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> tensorflow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完以后输入如下命令来测试：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip list <span class="token operator">|</span> <span class="token function">grep</span> tensor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tensorboard          <span class="token number">2.0</span>.2              
tensorflow           <span class="token number">2.0</span>.0              
tensorflow-estimator <span class="token number">2.0</span>.1  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者在python中输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">import</span> tensorflow
tensorflow.__version__
tensorflow.keras.__version__
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token string">'2.0.0-alpha0'</span>
<span class="token string">'2.2.4-tf'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此tensorflow2.0安装完成。</p>
<p>退出tf20环境：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="linux系统下安装tensorflow2-1" tabindex="-1"><a class="header-anchor" href="#linux系统下安装tensorflow2-1" aria-hidden="true">#</a> linux系统下安装Tensorflow2.1</h2>
<p>具体参考：<a href="https://blog.csdn.net/qq_37541097/article/details/103933366" target="_blank" rel="noopener noreferrer">Centos7 安装Tensorflow2.1 GPU以及Pytorch1.3 GPU（CUDA10.1）<ExternalLinkIcon/></a></p>
<h1 id="测试是否支持gpu" tabindex="-1"><a class="header-anchor" href="#测试是否支持gpu" aria-hidden="true">#</a> 测试是否支持GPU</h1>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>test<span class="token punctuation">.</span>is_gpu_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/PecoHe/article/details/91356275" target="_blank" rel="noopener noreferrer">Anaconda下安装Tensorflow2.0<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Anaconda下安装Tensorflow2.0&quot;参考此博客。</p>
</div></template>


