<template><div><h1 id="模型训练云服务器平台" tabindex="-1"><a class="header-anchor" href="#模型训练云服务器平台" aria-hidden="true">#</a> 模型训练云服务器平台</h1>
<ul>
<li><RouterLink to="/docs/Engineering/machine-learning-framework/machine-learning-framework.html">返回上层目录</RouterLink></li>
</ul>
<p>网上比较便宜的云gpu网站有：</p>
<ul>
<li><a href="https://mistgpu.com/user/" target="_blank" rel="noopener noreferrer">MistGPU<ExternalLinkIcon/></a></li>
<li><a href="https://www.jikecloud.net/" target="_blank" rel="noopener noreferrer">极客云<ExternalLinkIcon/></a></li>
</ul>
<h1 id="mistgpu" tabindex="-1"><a class="header-anchor" href="#mistgpu" aria-hidden="true">#</a> MistGPU</h1>
<p>以<a href="https://mistgpu.com/user/" target="_blank" rel="noopener noreferrer">MistGPU<ExternalLinkIcon/></a>为例，介绍操作方法。</p>
<p><img src="@source/docs/Engineering/machine-learning-framework/cloud-server-platform/D:/2study/课程与学习/0人工智能与机器学习/人工智能与机器学习/02书籍/书籍_数据/书籍/《机器学习笔记》/machine-learning-notes/docs/machine-learning-framework/tensorflow/tools/gpu/pic/mistgpu.jpg" alt="mistgpu"></p>
<p>（1）配置gpu硬件和软件框架。在<code v-pre>创建服务器</code>中，选择合适的GPU机型，并选择适合的软件框架，比如是tf1.x还是tf2.x，并设置ssh远程登录密码。</p>
<p>（2）登录服务器。在<code v-pre>服务器管理</code>中，复制ssh命令，然后粘贴到本地的linux终端，输入密码就可以远程登录到服务器上。</p>
<p>（3）上传代码和数据。在<code v-pre>上传数据集</code>中，点击<code v-pre>选择文件</code>然后点击<code v-pre>开始上传</code>，就可以将数据上传到服务器的<code v-pre>/data</code>目录中。</p>
<p>（4）下载模型和数据。训练完的模型下载，使用scp命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">54000</span> mist@gpu48.mistgpu.com:/data/cloud/file.tar ~/Desktop/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者在win系统上使用WinSCP软件进行下载。</p>
<p>注意，对于大文件，最好只是简单地打个包，不要压缩，否则下载下来会出错。打包命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-vcf</span> xxx  <span class="token comment"># 打包</span>
<span class="token function">tar</span> <span class="token parameter variable">-vxf</span> xxx  <span class="token comment"># 解包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）关闭远程服务器。</p>
<p>在网页端的<code v-pre>服务器管理</code>下点击<code v-pre>关机</code>即可。或者在远程服务器的<code v-pre>~/</code>目录下运行<code v-pre>shutdown.sh</code>关机命令。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/597476907" target="_blank" rel="noopener noreferrer">【深度学习】模型训练云服务器平台推荐！！！个人心路历程，新手少踩坑<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了<a href="https://www.autodl.com/register?code=cd8a7443-6fc2-4ec4-b88a-da35fb2ac603" target="_blank" rel="noopener noreferrer">AutoDL-品质GPU租用平台-租GPU就上AutoDL<ExternalLinkIcon/></a></p>
</div></template>


