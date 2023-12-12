<template><div><h1 id="anaconda" tabindex="-1"><a class="header-anchor" href="#anaconda" aria-hidden="true">#</a> Anaconda</h1>
<ul>
<li><RouterLink to="/docs/machine-learning-framework/machine-learning-framework.html">返回上层目录</RouterLink></li>
<li><a href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85anaconda">下载安装anaconda</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E6%93%8D%E4%BD%9C">环境操作</a>
<ul>
<li><a href="#%E6%96%B0%E5%BB%BA%E7%8E%AF%E5%A2%83">新建环境</a></li>
<li><a href="#%E5%88%A0%E9%99%A4%E7%8E%AF%E5%A2%83">删除环境</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E9%87%8D%E5%91%BD%E5%90%8D">环境重命名</a></li>
</ul>
</li>
<li><a href="#Linux%E5%AE%89%E8%A3%85TensorFlow">Linux安装TensorFlow</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85tensorflow2.5-gpu">安装tensorflow2.5-gpu</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85tensorflow-gpu">安装tensorflow-gpu</a></li>
<li><a href="#%E6%A0%B9%E6%8D%AEtf-gpu%E7%89%88%E6%9C%AC%E6%89%BE%E5%AF%B9%E5%BA%94cuda%E5%92%8Ccudnn%E7%89%88%E6%9C%AC">根据tf-gpu版本找对应cuda和cudnn版本</a></li>
<li><a href="#%E5%AE%89%E8%A3%85cuda">安装cuda</a></li>
<li><a href="#%E5%AE%89%E8%A3%85cudnn">安装cudnn</a></li>
<li><a href="#%E6%9F%A5%E7%9C%8B%E5%AE%89%E8%A3%85%E7%9A%84tensorflow%E8%83%BD%E5%90%A6%E4%BD%BF%E7%94%A8gpu">查看安装的tensorflow能否使用gpu</a></li>
</ul>
</li>
<li><a href="#%E5%AE%89%E8%A3%85tensorflow2.1-gpu">安装tensorflow2.1-gpu</a></li>
<li><a href="#%E6%B5%8B%E8%AF%95%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81GPU">测试是否支持GPU</a></li>
</ul>
</li>
<li><a href="#%E5%85%B6%E4%BB%96%E6%93%8D%E4%BD%9C">其他操作</a>
<ul>
<li><a href="#%E6%89%8B%E5%8A%A8%E5%A4%8D%E5%88%B6%E5%85%B6%E4%BB%96%E7%94%A8%E6%88%B7%E7%9A%84anaconda">手动复制其他用户的anaconda</a></li>
<li><a href="#%E5%88%A0%E9%99%A4anaconda%E9%87%8C%E7%9A%84pkgs%E6%96%87%E4%BB%B6%E4%B8%8B%E7%9A%84%E5%8C%85">删除anaconda里的pkgs文件下的包</a></li>
<li><a href="#ubuntu%E4%B8%AD%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85nvidia%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8">ubuntu中手动安装nvidia显卡驱动</a></li>
<li><a href="#Nvidia30%E7%B3%BB%E5%88%97%E4%B8%8D%E5%86%8D%E6%94%AF%E6%8C%81CUDA10.x">Nvidia30系列不再支持CUDA10.x</a></li>
</ul>
</li>
</ul>
<h1 id="下载安装anaconda" tabindex="-1"><a class="header-anchor" href="#下载安装anaconda" aria-hidden="true">#</a> 下载安装anaconda</h1>
<p>下载最新版或指定版的anaconda：</p>
<p><a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/" target="_blank" rel="noopener noreferrer">清华大学开源软件镜像站<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2021.05-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下好之后，进行安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> Anaconda3-2021.05-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>激活conda</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc或者. ~/.bashrc <span class="token comment"># 初始化conda环境 出现(base)则说明安装成功</span>
<span class="token comment"># 后续就可使用下面的命令进入base或退出base</span>
conda activate <span class="token comment"># 进入conda环境 出现(base)</span>
conda deactivate <span class="token comment"># 退出conda环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建虚拟环境：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda create <span class="token parameter variable">-n</span> tf2 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置国内镜像源：</p>
<p>第一次运行 conda config命令时，将会在用户的home目录创建<code v-pre>.condarc</code>配置文件，是一种可选的（optional）运行期配置文件，其默认情况下是不存在的。</p>
<p>（windows：C:\users\username\，linux：/home/username/）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda config
<span class="token comment"># 第一条不行的话，就试试第二条</span>
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加清华镜像和中科大镜像，文件内容如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/menpo/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
  - defaults
show_channel_urls: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 配置国内源，方便安装Numpy,Matplotlib等</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
<span class="token comment"># 配置国内源，安装PyTorch用</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
<span class="token comment"># 显示源地址</span>
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果都一样。</p>
<p>关闭控制台窗口，重新打开才会重新加载配置。</p>
<p>如果有更好用的源，可以按照上面的格式继续增加。</p>
<p>查看conda信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="环境操作" tabindex="-1"><a class="header-anchor" href="#环境操作" aria-hidden="true">#</a> 环境操作</h1>
<h2 id="新建环境" tabindex="-1"><a class="header-anchor" href="#新建环境" aria-hidden="true">#</a> 新建环境</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda create <span class="token parameter variable">-n</span> tf2 <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：win7最高支持python3.8版本，3.9版本以上win7不支持。</p>
<h2 id="删除环境" tabindex="-1"><a class="header-anchor" href="#删除环境" aria-hidden="true">#</a> 删除环境</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda remove <span class="token parameter variable">-n</span> xxx <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="环境重命名" tabindex="-1"><a class="header-anchor" href="#环境重命名" aria-hidden="true">#</a> 环境重命名</h2>
<p>conda其实没有重命名指令，实现重命名是通过clone完成的，分两步：</p>
<ul>
<li>先clone一份new name的环境</li>
<li>删除old name的环境</li>
</ul>
<p>比如，想把环境rcnn重命名成tf</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda create <span class="token parameter variable">-n</span> tf <span class="token parameter variable">--clone</span> rcnn
conda remove <span class="token parameter variable">-n</span> rcnn <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="linux安装tensorflow" tabindex="-1"><a class="header-anchor" href="#linux安装tensorflow" aria-hidden="true">#</a> Linux安装TensorFlow</h1>
<p>TensorFlow在2.0之前的GPU版本和CPU版本是分开的，TensorFlow在2.0后的版本不用区分GPU和CPU版本。</p>
<h2 id="安装tensorflow2-5-gpu" tabindex="-1"><a class="header-anchor" href="#安装tensorflow2-5-gpu" aria-hidden="true">#</a> 安装tensorflow2.5-gpu</h2>
<p>本节默认安装的是Tensorflow2.5-GPU版本。其他版本安装方法也可以参考。</p>
<p>先下载安装Anaconda。</p>
<h3 id="安装tensorflow-gpu" tabindex="-1"><a class="header-anchor" href="#安装tensorflow-gpu" aria-hidden="true">#</a> 安装tensorflow-gpu</h3>
<p>pip会自动给你安装最新的tensorflow-gpu版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple tensorflow-gpu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果pip安装失败怎么办，手动下载安装文件：</p>
<p>打开<a href="https://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noopener noreferrer">清华镜像源<ExternalLinkIcon/></a>，找到tensorflow-gpu</p>
<p>下载pip安装时命令行里出现的版本，我这里是</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>tensorflow_gpu-2.6.0-cp38-cp38-manylinux2010_x86_64.whl (458.4 MB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载后在该文件目录下cmd输入（注意换成自己对应的名字）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> tensorflow_gpu-2.6.0-cp38-cp38-manylinux2010_x86_64.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实到这里tensorflow部分安装完了，接下来安装显卡部分的。</p>
<h3 id="根据tf-gpu版本找对应cuda和cudnn版本" tabindex="-1"><a class="header-anchor" href="#根据tf-gpu版本找对应cuda和cudnn版本" aria-hidden="true">#</a> 根据tf-gpu版本找对应cuda和cudnn版本</h3>
<p>Tensorflow2.5 GPU相关配置一览</p>
<table>
<thead>
<tr>
<th>本文安装项目</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>python</td>
<td>3.6-3.9（博主是3.7.0）</td>
</tr>
<tr>
<td>Tensorflow（CPU/GPU）</td>
<td>2.5.0</td>
</tr>
<tr>
<td>Cuda（GPU版本所需）</td>
<td>11.2</td>
</tr>
<tr>
<td>Cudnn（GPU版本所需）</td>
<td>v8.1.0（与Cuda版本匹配即可）</td>
</tr>
</tbody>
</table>
<p>如果要安装其他版本亦可类似从→<a href="https://tensorflow.google.cn/install/source?hl=en" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>这里找。Tensorflow、Cuda和Cudnn版本必须对应好。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tf2.5-gpu-cuda-cudnn.jpg" alt="tf2.5-gpu-cuda-cudnn"></p>
<h3 id="安装cuda" tabindex="-1"><a class="header-anchor" href="#安装cuda" aria-hidden="true">#</a> 安装cuda</h3>
<p>直接先安装CUDA，而不是先独立安装GPU驱动，在安装CUDA的过程中，会安装好相应的GPU驱动，省时省力，比较方便。</p>
<p><a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">Cuda下载<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda11.2-linux-download.jpg" alt="cuda11.2-linux-download"></p>
<p>点击上图红框后然后按下图操作：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda11.2-linux-download-2.jpg" alt="cuda11.2-linux-download-2"></p>
<p>按上图操作下载：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.27.04_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> cuda_11.2.0_460.27.04_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你已经预装了nvidia驱动，可能会遇到这个问题：</p>
<blockquote>
<p>Existing package manager installation of the driver found. It is strongly recommended that you remove this before continuing。</p>
</blockquote>
<p>这时候选择只装cuda而不装驱动：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sh</span> cuda_11.2.0_460.27.04_linux.run <span class="token parameter variable">--toolkit</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--override</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者先删除现有的驱动然后再安装，具体见：</p>
<p><a href="https://askubuntu.com/questions/1211919/error-installing-cuda-toolkit-existing-package-manager-installation-of-the-driv" target="_blank" rel="noopener noreferrer">Error installing Cuda toolkit: Existing package manager installation of the driver found<ExternalLinkIcon/></a></p>
<blockquote>
<p>Just run into this exact problem in Ubuntu18.04. And after some search, my solution is the following:</p>
<ol>
<li>If you are sure that your driver version matches the cuda-toolkit version you are gonna install, refer to @domainxz answer, add <code v-pre>--toolkit</code> to only install toolkit and not to care about nvidia driver. Check <a href="https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html" target="_blank" rel="noopener noreferrer">this<ExternalLinkIcon/></a> link for compatibility. (Scroll down to CUDA Driver table).</li>
<li>If you want CUDA to handle the compatibility problem for you, you need to uninstall your current drivers. Follow the instructions in <a href="https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#runfile" target="_blank" rel="noopener noreferrer">the official documentation<ExternalLinkIcon/></a>. After you entered the text screen after reboot, uninstall your previous Nvidia driver and run the cuda runfile. For Ubuntu 18.04, what I did and worked:</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    sudo apt-get remove --purge nvidia\*
    sudo apt-get autoremove
    sudo sh cuda-*.run --silient --override
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The official documentation is actually very detailed... Just make sure you follow each step and you should be fine.</p>
</blockquote>
<p>也可以这样卸载：</p>
<p>1、查看系统中安装了哪些NVIDIA的驱动</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo dpkg --list | grep nvidia-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、卸载NVIDIA驱动</p>
<p>可以直接在软件管理中卸载驱动（参考），同时也可以使用apt-get卸载NVIDIA驱动：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove nvidia-*
<span class="token comment"># 也有的说用下面的命令进行卸载，我个人均有尝试，无碍</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove <span class="token string">"*nvidia*"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>添加环境变量</strong></p>
<p>安装完之后，在<code v-pre>.bashrc配置文件</code>中<code v-pre>添加环境变量</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> ~/.barshrc
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/cuda-11.2/bin:<span class="token environment constant">$PATH</span> 
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/cuda-11.2/lib64:<span class="token variable">$LD_LIBRARY_PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使<code v-pre>.bashrc</code>生效：<code v-pre>source .bashrc </code>。</p>
<p><strong>测试cuda是否安装成功</strong></p>
<p>查看版本信息：一般当你安装好cuda之后，可以输入<code v-pre>nvcc -V</code>查看安装cuda的版本信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvcc: NVIDIA <span class="token punctuation">(</span>R<span class="token punctuation">)</span> Cuda compiler driver
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2005</span>-2020 NVIDIA Corporation
Built on Mon_Nov_30_19:08:53_PST_2020
Cuda compilation tools, release <span class="token number">11.2</span>, V11.2.67
Build cuda_11.2.r11.2/compiler.29373293_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>卸载cuda</strong></p>
<p>如果安装cuda失败，或者是安装的版本不能够匹配，此时可能面临重新安装，同样也要卸载之前安装打cuda。</p>
<p>直接删除安装位置的cuda文件：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>sudo rm <span class="token operator">-</span>rf <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>cuda
sudo rm <span class="token operator">-</span>rf <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>cuda<span class="token operator">-</span><span class="token number">11.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装cudnn" tabindex="-1"><a class="header-anchor" href="#安装cudnn" aria-hidden="true">#</a> 安装cudnn</h3>
<p><a href="https://developer.nvidia.com/rdp/cudnn-archive" target="_blank" rel="noopener noreferrer">Cudnn下载地址<ExternalLinkIcon/></a></p>
<p>有很多版本，选了个兼容Cuda 11.2，因为前面高版本出错问题多的缘故，最终选择出现早的版本</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cudnn8.1-linux-download.png" alt="cudnn8.1-linux-download"></p>
<p>需要注册后下载，如果想从linux上直接线上下载，那么就请不要下载到本地，在下载前的最后一步复制下载地址，因为只有一次机会，在linux下载。或者下载到window，上传到linux上也行。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cudnn8.1-linux-download-2.png" alt="cudnn8.1-linux-download-2"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.cn/compute/machine-learning/cudnn/secure/8.1.0.77/11.2_20210127/cudnn-11.2-linux-x64-v8.1.0.77.tgz?fIolTbf7p-EYtg1E2vyPHzxFoAdBgzd-6WmHkgOnq2Wvgt9QRehQXvqzYkQsKdxHPjqAVLFpW_90p3IMSF6XXifm7v1AY0NrYiEanPyNv7mDEaiq8uCI_bCMnTytKngNF-pXj_jHpIBtNyiRM6gwirh74pRTlHWmpR-CTN2d_RN9U8SXB12ohvy0T5k8RG3jYCkHPlHCULmnQA8YM9A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再把上面的名字改为原名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> cudnn-11.2-linux-x64-v8.1.0.77.tgz<span class="token punctuation">\</span>?fIolTb<span class="token punctuation">..</span>.lHCU cudnn-11.2-linux-x64-v8.1.0.77.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压文件，解压后目录为cuda：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> cudnn-11.2-linux-x64-v8.1.0.77.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看cuda安装路径</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">which</span> nvcc
<span class="token comment"># 显示</span>
<span class="token comment"># /usr/local/cuda-11.2/bin/nvcc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入解压cudnn目录，拷贝文件到cuda目录，并更改文件权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> cuda/
<span class="token function">sudo</span> <span class="token function">cp</span> include/cudnn* /usr/local/cuda-11.2/include
<span class="token function">sudo</span> <span class="token function">cp</span> lib64/libcudnn* /usr/local/cuda-11.2/lib64
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /usr/local/cuda-11.2/include/cudnn*
<span class="token function">sudo</span> <span class="token function">chmod</span> a+r /usr/local/cuda-11.2/lib64/libcudnn*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除刚才解压的cudnn目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> cuda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux到此安装结束。</p>
<p>对于Win系统：</p>
<ul>
<li>把<code v-pre>\cuda\bin\cudnn64_7.dll</code>复制到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\bin</code>目录下。</li>
<li>把<code v-pre>\cuda\include\cudnn.h</code>复制到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\include</code>目录下。</li>
<li>把<code v-pre>\cuda\lib\x64\cudnn.lib</code>复制到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v9.0\lib\x64</code>目录下。</li>
</ul>
<h3 id="查看安装的tensorflow能否使用gpu" tabindex="-1"><a class="header-anchor" href="#查看安装的tensorflow能否使用gpu" aria-hidden="true">#</a> 查看安装的tensorflow能否使用gpu</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda activate tf2
python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在python中输入</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>test<span class="token punctuation">.</span>is_gpu_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 返回true值代表GPU可用，返回false代表GPU不可用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>list_physical_devices<span class="token punctuation">(</span><span class="token string">'GPU'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即可得知结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>2.6.0
True
[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果返回的结果里有这样的语句：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则意味着你的内核没有NUMA支持。你可以在<a href="https://en.wikipedia.org/wiki/Non-uniform_memory_access" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>和<a href="https://pubs.vmware.com/vsphere-4-esx-vcenter/index.jsp?topic=/com.vmware.vsphere.resourcemanagement.doc_41/using_numa_systems_with_esx_esxi/c_what_is_numa.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>阅读关于NUMA的<a href="https://pubs.vmware.com/vsphere-4-esx-vcenter/index.jsp?topic=/com.vmware.vsphere.resourcemanagement.doc_41/using_numa_systems_with_esx_esxi/c_what_is_numa.html" target="_blank" rel="noopener noreferrer">信息<ExternalLinkIcon/></a>。</p>
<p>关于NUMA，粗略地说，如果你有双核CPU，它们都有自己的内存，并且必须通过较慢的QPI链接访问另一个处理器的内存。所以每个CPU +内存都是NUMA节点。</p>
<p>潜在地，你可以将两个不同的NUMA节点视为两个不同的设备，并将你的网络结构化以优化不同的节点内/节点间带宽</p>
<p>不过，我认为现在TF中没有足够的线路来执行此操作。检测也无法正常工作 - 我只是在装有2个NUMA节点的机器上尝试过，它仍然打印相同的消息并初始化为1个NUMA节点。</p>
<h2 id="安装tensorflow2-1-gpu" tabindex="-1"><a class="header-anchor" href="#安装tensorflow2-1-gpu" aria-hidden="true">#</a> 安装tensorflow2.1-gpu</h2>
<p>具体参考：<a href="https://blog.csdn.net/qq_37541097/article/details/103933366" target="_blank" rel="noopener noreferrer">Centos7 安装Tensorflow2.1 GPU以及Pytorch1.3 GPU（CUDA10.1）<ExternalLinkIcon/></a></p>
<p>参照上述教程安装完之后，可能会出现一些问题，如：</p>
<p><strong>关于import tensorflow出现的FutureWarning问题及解决</strong></p>
<p>在安装完tensorflow-gpu之后，等不及进去python里试验一下是否装成功，结果第一个import tensorflow as tf便出现了如下问题：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>FutureWarning: Passing (type, 1) or ‘1type’ as a synonym of type is deprecated; in a future version of numpy, it will be understood as (type, (1,)) / ‘(1,)type’.
_np_quint8 = np.dtype([(“quint8”, np.uint8, 1)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决办法：</strong></p>
<p>对h5py进行升级：<code v-pre>pip install h5py==2.8.0rc1</code>，对numpy包进行降级：<code v-pre>pip install numpy==1.6.0</code>。</p>
<p><strong>cuda 10.1下使用tensorflow-gpu 1.4报错解决办法</strong></p>
<p>报错信息:</p>
<div class="language-； line-numbers-mode" data-ext="；"><pre v-pre class="language-；"><code>ImportError: libcublas.so.10.0: cannot open shared object file: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决办法：<a href="https://blog.csdn.net/weixin_42398077/article/details/101158496" target="_blank" rel="noopener noreferrer">cuda 10.1下使用tensorflow-gpu 1.4报错解决办法<ExternalLinkIcon/></a></p>
<h2 id="测试是否支持gpu" tabindex="-1"><a class="header-anchor" href="#测试是否支持gpu" aria-hidden="true">#</a> 测试是否支持GPU</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>test<span class="token punctuation">.</span>is_gpu_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 返回true值代表GPU可用，返回false代表GPU不可用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>config<span class="token punctuation">.</span>list_physical_devices<span class="token punctuation">(</span><span class="token string">'GPU'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装pytorch" tabindex="-1"><a class="header-anchor" href="#安装pytorch" aria-hidden="true">#</a> 安装pytorch</h1>
<p>检查显卡，安装CUDA和cuDNN，然后安装GPU版的pytorch。</p>
<p>使用<code v-pre>nvidia-smi</code>命令得到你的CUDA版本。</p>
<p>先到<a href="https://pytorch.org/get-started/locally/" target="_blank" rel="noopener noreferrer">pytorch官网<ExternalLinkIcon/></a>找到在你的操作系统、包、CUDA版本、语言版本下对应的安装脚本，官网地址为<code v-pre>https://pytorch.org/get-started/locally/</code>，直接根据你的实际情况选择pytorch安装包版本，然后复制页面自动生成的脚本进行安装。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/pytorch-install.jpg" alt="pytorch-install"></p>
<p>说明：</p>
<ul>
<li>电脑实际安装的CUDA版本不能比所选的CUDA版本更高。比如实际安装的是11.2版本，就不能选择11.3版本，必须等于或低于11.2版本，所以这里就选择10.2版本。CUDA可以兼容低版本。</li>
<li>pip安装的时候，需要使用<code v-pre>conda activate xxx</code>先切换到对应环境，再使用pip，不然就安装到其他环境去了。</li>
</ul>
<p>检查是否安装成功</p>
<p>等待下载完成，输入python进入环境，然后依次输入</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">print</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果都ok的话，就安装成功啦！</p>
<h1 id="windows安装tensorflow" tabindex="-1"><a class="header-anchor" href="#windows安装tensorflow" aria-hidden="true">#</a> Windows安装TensorFlow</h1>
<h2 id="安装cuda-1" tabindex="-1"><a class="header-anchor" href="#安装cuda-1" aria-hidden="true">#</a> 安装CUDA</h2>
<p>参考：<a href="https://blog.csdn.net/m0_51246196/article/details/110587053" target="_blank" rel="noopener noreferrer">超详细GPU部署 （pytorch+tensorflow）<ExternalLinkIcon/></a></p>
<p><strong>（1）看Nvidia控制面板里的驱动，比如是11.2.66，那就选择比它低但是最好最接近它的版本</strong></p>
<p>cuda版本是向下兼容的！！并不一定要一一对应，比如，我电脑上看到的是CUDA 11.0，那可以下载驱动可以是安装CUDA10，CUDA9等以下版本，而CUDA11以上版本就不支持了。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/nvidia-control-pad.png" alt="nvidia-control-pad"></p>
<p>点进去</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/nvidia-control-pad-2.png" alt="nvidia-control-pad-2"></p>
<p>发现最高支持11.2.66，那就选择比它低但是最好最接近它的CUDA版本。</p>
<p>还有一种方式：win+R打开cmd，输入nvidia-smi，即可看到支持的cuda版本是11.2</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-version-choose.png" alt="cuda-version-choose"></p>
<p>并且还能看到GPU驱动的版本号。根据这个链接查看所选的CUDA版本能装的最低GPU驱动版本：https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html，具体如下图。由上图可知本机的GPU驱动版本号是460.89，所选的CUDA11.2要求的最低GPU版本号是460.82，所以CUDA11.2能在本机的GPU上运行。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-version-to-gpu-driver.png" alt="cuda-version-to-gpu-driver"></p>
<p><strong>（2）登录<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">Cuda下载<ExternalLinkIcon/></a>，选择11.2.0下载</strong></p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-download-windows.png" alt="cuda-download-windows"></p>
<p>选择11.2.0，点进去</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-download-windows-2.png" alt="cuda-download-windows-2"></p>
<p>等候下载完成。</p>
<p><strong>（3）点击下载的安装包开始安装</strong></p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install.png" alt="cuda-install"></p>
<p>选择自定义安装</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-2.png" alt="cuda-install-2"></p>
<p>下面的框可以都选上。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-3.png" alt="cuda-install-3"></p>
<p>把Samples改成相同的目录下（提前先手动建好文件夹）。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-4.png" alt="cuda-install-4"></p>
<p>安装成功。</p>
<p>打开环境变量可以看到cuda位置已经被配置到了环境变量里了。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-5.png" alt="cuda-install-5"></p>
<p><strong>重启电脑</strong>后输入<code v-pre>nvcc -V</code>后显示类似信息说明安装成功。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-6.png" alt="cuda-install-6"></p>
<h2 id="安装cudnn-1" tabindex="-1"><a class="header-anchor" href="#安装cudnn-1" aria-hidden="true">#</a> 安装cuDNN</h2>
<p>如果要安装TensorFlow或者Pytorch，可打开下面的网址查看于CUDA和cuDNN的对应版本关系。</p>
<p>cuDNN对照：https://blog.csdn.net/DuLNode/article/details/123428294，根据对照表下载相应版本的cuDNN。</p>
<p>cuDNN下载：https://developer.nvidia.com/rdp/cudnn-archive（CUDA与cuDNN有对应，在这个网址看清楚）。</p>
<p>cuDNN需要注册之后才能下载。</p>
<p>根据CUDA版本(11.2)选择cuDNN的版本，如下所示：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-7.png" alt="cuda-install-7"></p>
<p>点进去后，选择Windows版本：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-8.png" alt="cuda-install-8"></p>
<p>开始下载，等待下载完成。</p>
<p>压缩包解压后，一般长这样</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-9.png" alt="cuda-install-9"></p>
<p>每一个文件夹里都有一个文件。</p>
<p>接下来，我们要做的是打开我的电脑，具体路径如下图：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-10.png" alt="cuda-install-10"></p>
<p>把下载的cuDNN解压缩后的三个文件夹里的内容，复制到CUDA路径下三个对应的文件夹里。与其说是安装CUDNN，还不如说是复制替换文件。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-11.png" alt="cuda-install-11"></p>
<p>将CUDA的<code v-pre>bin</code>、<code v-pre>include</code>和<code v-pre>lib</code>路径添加到环境变量中：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-install-12.png" alt="cuda-install-12"></p>
<p>CUDA与cuDNN版本安装结束！</p>
<p>验证CUDA安装成功的方法：<strong>Win+R打开终端，输入nvidia-smi</strong>，若能看到GPU型号，则表明驱动安装成功。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/cuda-version-choose.png" alt="cuda-version-choose"></p>
<h2 id="安装tensorrt" tabindex="-1"><a class="header-anchor" href="#安装tensorrt" aria-hidden="true">#</a> 安装TensorRT</h2>
<p>参考资料：</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/skyli114/article/details/123623858" target="_blank" rel="noopener noreferrer">ubuntu安装tensorrt<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.ngui.cc/51cto/show-600656.html" target="_blank" rel="noopener noreferrer">windows上安装TensorRT<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><strong>（1）提前安装好CUDA和CUDNN</strong></p>
<p>具体方法前面已经说了。</p>
<p><strong>（2）下载TensorRT</strong></p>
<p>点击<a href="https://developer.nvidia.com/nvidia-tensorrt-download" target="_blank" rel="noopener noreferrer">NVIDIA TensorRT Download<ExternalLinkIcon/></a>，进入如下页面：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tensor-rt-install.png" alt="tensor-rt-install"></p>
<p>怎么选择版本：<a href="https://zhuanlan.zhihu.com/p/438939299" target="_blank" rel="noopener noreferrer">Nvidia CUDA, cuDNN, TensorRT，驱动以及架构之间的相互兼容关系<ExternalLinkIcon/></a></p>
<p>选择TensorRT 7（其实选8也行，也支持CUDA11.2，选7是因为7的例子里有uff的加载例子），勾选对钩，选择Windows平台，和CUDA11.2对应的TensorRT版本，具体如下图：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tensor-rt-install-2.png" alt="tensor-rt-install-2"></p>
<p>开始下载，等待下载完成。</p>
<p>下载的文件为：<code v-pre>TensorRT-7.2.3.4.Windows10.x86_64.cuda-11.1.cudnn8.1</code>。</p>
<p><strong>（3）将头文件和库文件复制进CUDA，添加环境变量</strong></p>
<ul>
<li>
<p>将<code v-pre>TensorRT-x.x.x.x\include</code>中头文件copy到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v1x.x\include</code></p>
</li>
<li>
<p>将<code v-pre>TensorRT-x.x.x.x\lib</code>中所有lib文件copy到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v1x.x\lib\x64</code></p>
</li>
<li>
<p>将<code v-pre>TensorRT-x.x.x.x\lib</code>中所有dll文件copy到<code v-pre>C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v1x.x\bin</code></p>
</li>
<li>
<p>将<code v-pre>C:\Program Files\TensorRT-8.5.1.7\lib</code>添加进系统环境变量：</p>
</li>
</ul>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tensor-rt-install-3.png" alt="tensor-rt-install-3"></p>
<p>然后下载一个<a href="http://www.winimage.com/zLibDll/zlib123dllx64.zip" target="_blank" rel="noopener noreferrer">zlib<ExternalLinkIcon/></a>包，解压缩后找到zlibwapi.dll文件，剪切到C:\Windows\System32位置下面（这是cudnn依赖的动态链接库）。这个存疑，先不安装。。</p>
<p><strong>（4）安装用于python的uff和graphsurgeon包</strong></p>
<p>如果你python已经安装了，那就不用了。若没有安装，就看下面：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到你使用的环境</span>
conda activate your_env
<span class="token comment"># 进入C:\Program Files\TensorRT-8.5.1.7\uff</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Program Files<span class="token punctuation">\</span>TensorRT-8.5.1.7<span class="token punctuation">\</span>uff
<span class="token comment"># 安装python的uff包</span>
pip <span class="token function">install</span> uff-0.6.9-py2.py3-none-any.whl
<span class="token comment"># 进入C:\Program Files\TensorRT-8.5.1.7\graphsurgeon</span>
<span class="token builtin class-name">cd</span> C:<span class="token punctuation">\</span>Program Files<span class="token punctuation">\</span>TensorRT-8.5.1.7<span class="token punctuation">\</span>graphsurgeon
<span class="token comment"># 安装python的graphsurgeon包</span>
pip <span class="token function">install</span> graphsurgeon-0.4.6-py2.py3-none-any.whl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）验证TensorRT是否安装好</strong></p>
<p>进入<code v-pre>C:\Program Files\TensorRT-7.2.3.4\samples\sampleUffMNIST</code>中，用vs2017打开<code v-pre>sampleUffMNIST.sln</code>，如下图所示。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tensorrt-uff-minist-example.png" alt="tensorrt-uff-minist-example"></p>
<p>vs2017的配置参考下面的博客：</p>
<p><a href="https://blog.csdn.net/Vertira/article/details/127592872" target="_blank" rel="noopener noreferrer">WIN11+CUAD11.2+vs2019+tensorTR8.6+Yolov3/4/5模型加速<ExternalLinkIcon/></a></p>
<p>运行时发现有错误，找了一会原因没找到，也没时间去弄了，就放弃了，错误如下：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/tensorrt-uff-minist-example-2.png" alt="tensorrt-uff-minist-example-2"></p>
<h1 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h1>
<h2 id="cuda和cudnn关系及查询命令" tabindex="-1"><a class="header-anchor" href="#cuda和cudnn关系及查询命令" aria-hidden="true">#</a> CUDA和cuDNN关系及查询命令</h2>
<p>CUDA</p>
<p>CUDA是NVIDIA推出的用于自家GPU的并行计算框架，也就是说CUDA只能在NVIDIA的GPU上运行，而且只有当要解决的计算问题是可以大量并行计算的时候才能发挥CUDA的作用。</p>
<p>cuDNN</p>
<p>cuDNN（CUDA Deep Neural Network library）：是NVIDIA打造的针对深度神经网络的加速库，是一个用于深层神经网络的GPU加速库。如果你要用GPU训练模型，cuDNN不是必须的，但是一般会采用这个加速库。</p>
<p>总结</p>
<p>简单来说，CPU适合串行计算，擅长逻辑控制。GPU擅长并行高强度并行计算，适用于AI算法的训练学习
CUDA 是NVIDIA专门负责管理分配运算单元的框架
cuDNN是用于深层神经网络的gpu加速库</p>
<p><strong>查询版本命令：</strong></p>
<p>Linux:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cuda 版本 
nvcc <span class="token parameter variable">-V</span>
<span class="token function">cat</span> /usr/local/cuda/version.txt

cudnn 版本 
<span class="token function">cat</span> /usr/local/cuda/include/cudnn.h <span class="token operator">|</span> <span class="token function">grep</span> CUDNN_MAJOR <span class="token parameter variable">-A</span> <span class="token number">2</span>

查看Nvidia GPU版本
nvidia-smi

//10s显示一次
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> nvidia-smi

nvidia-smi <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装指定源和版本" tabindex="-1"><a class="header-anchor" href="#安装指定源和版本" aria-hidden="true">#</a> 安装指定源和版本</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token parameter variable">--channel</span> https://conda.anaconda.org/anaconda <span class="token assign-left variable">tensorflow</span><span class="token operator">=</span><span class="token number">2.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多参考见这里：<a href="https://blog.csdn.net/lovedingd/article/details/106721998" target="_blank" rel="noopener noreferrer">Python之pip命令指定安装源和版本<ExternalLinkIcon/></a>，简单摘录几个：</p>
<p>指定源：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> Flask <span class="token parameter variable">-i</span> http://pypi.douban.com/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定版本：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token assign-left variable">robotframework</span><span class="token operator">==</span><span class="token number">2.8</span>.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="anaconda各种源" tabindex="-1"><a class="header-anchor" href="#anaconda各种源" aria-hidden="true">#</a> anaconda各种源</h2>
<p>对于win系统，在<code v-pre>C:\Users\User\.condarc</code>中写入；对于linux系统，在xxx中写入。</p>
<p>清华源：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>show_channel_urls: <span class="token boolean">true</span>
channels:
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/win-64
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/win-64
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/win-64
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/win-64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一种清华源：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>channel_alias: https://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
ssl_verify: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ananconda不同机器离线移植" tabindex="-1"><a class="header-anchor" href="#ananconda不同机器离线移植" aria-hidden="true">#</a> ananconda不同机器离线移植</h2>
<p>本节基于windows系统，场景是将A机器上的Anaconda移植到B机器上，因为A机器上的Anaconda安装了很多包，要一个一个包在B机器上安装简直是不太可能的。</p>
<h3 id="anaconda打包压缩与文件替换" tabindex="-1"><a class="header-anchor" href="#anaconda打包压缩与文件替换" aria-hidden="true">#</a> Anaconda打包压缩与文件替换</h3>
<p>（1）将<code v-pre>C:\Users\xxx</code>下的<code v-pre>Anaconda</code>文件夹打包压缩，并复制解压到B电脑的<code v-pre>C:\Users\yourname</code>路径下。</p>
<p>（2）将<code v-pre>C:\Users\xxx\Anaconda</code>文件夹和<code v-pre>C:\Users\xxx\Anaconda\envs\tf1.4</code>文件夹中的<code v-pre>conda-meta</code>文件夹和<code v-pre>qt.conf</code>文件复制到linux系统里，其内容分别如下：</p>
<p><code v-pre>conda-meta</code>文件夹：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/conda-meta.png" alt="conda-meta"></p>
<p><code v-pre>conda-meta</code>文件夹中的json文件：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/conda-meta-json.png" alt="conda-meta-json"></p>
<p><code v-pre>qt.conf</code>文件：</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/qt-conf.png" alt="qt-conf"></p>
<p>可以看出，上述文件里均含有A电脑上的用户名，要想复制到B电脑上还能用，就需要把里面的A电脑用户名替换为B电脑上的用户名，方法如下所示：</p>
<p>在Linux系统中，在装有两个<code v-pre>conda-meta</code>文件夹和<code v-pre>qt.conf</code>文件的根目录下，打开终端，输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.json"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s/luwei/yourname/g"</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.conf"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s/luwei/yourname/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果提示出错，可试试下面的命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.json"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/luwei/yourname/g"</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.conf"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/luwei/yourname/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后用这两份<code v-pre>conda-meta</code>文件夹和<code v-pre>qt.conf</code>文件来替换B电脑中的对应文件夹和文件。</p>
<h3 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h3>
<p>在B电脑的环境变量的系统变量的<code v-pre>Path</code>中，添加：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>yourname<span class="token punctuation">\</span>Anaconda3
C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>yourname<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>Scripts
C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>yourname<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>Library<span class="token punctuation">\</span>bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动复制其他用户的anaconda" tabindex="-1"><a class="header-anchor" href="#手动复制其他用户的anaconda" aria-hidden="true">#</a> 手动复制其他用户的anaconda</h2>
<p>注意，这种方法对于pip install安装的可能不能复制。</p>
<p><strong>（1）复制并修改其他</strong></p>
<p>切换到root用户，将其他用户的anaconda复制过来：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> <span class="token punctuation">..</span>/other_user/anaconda ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后赋予当前用户权限：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> user ./anaconda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后切换回当前用户，将其他用户的<code v-pre>.bashrc</code>复制到当前用户中覆盖。如果你并不是一个刚新建的用户，不想改变<code v-pre>.bashrc</code>中的其他变量，那么就只复制下面的内容，然后注意把其他用户的名字改成你自己的名字：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># >>> conda initialize >>></span>
<span class="token comment"># !! Contents within this block are managed by 'conda init' !!</span>
<span class="token assign-left variable">__conda_setup</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span>'/home/other_user/anaconda3/bin/conda<span class="token string">' '</span>shell.bash<span class="token string">' '</span>hook' <span class="token operator"><span class="token file-descriptor important">2</span>></span> /dev/null<span class="token variable">)</span></span>"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable">$__conda_setup</span>"</span>
<span class="token keyword">else</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">"/home/other_user/anaconda3/etc/profile.d/conda.sh"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> <span class="token string">"/home/other_user/anaconda3/etc/profile.d/conda.sh"</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"/home/other_user/anaconda3/bin:<span class="token environment constant">$PATH</span>"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">unset</span> __conda_setup
<span class="token comment"># &lt;&lt;&lt; conda initialize &lt;&lt;&lt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让修改后的环境变量生效</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后退出当前shell窗口重新打开。<code v-pre>which conda</code>就会显示你的地址了。</p>
<p><strong>（2）修改base环境中的可执行文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/anaconda3/bin
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/other_user/user/g'</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个操作，会把bin文件夹下所有文件中第一行含有用户名的文件进行修改，改为当前用户名，</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/home/other_user/anaconda3/bin/python</span>
-<span class="token operator">></span>
<span class="token comment">#!/home/user/anaconda3/bin/python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如下面这些文件中都含有上述第一行内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/home/anaconda3/bin/conda
/home/anaconda3/bin/pip
/home/anaconda3/bin/conda-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）修改所有虚拟环境中的可执行文件</strong></p>
<p>比如修改虚拟环境下的可执行文件pip之后，进入虚拟环境后pip和python才可用。</p>
<p>分别进入到每个虚拟环境的bin文件中，将bin文件夹下所有文件中第一行含有用户名的文件进行修改，改为当前用户名，</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/anaconda3/envs/gpu3070_enabled/bin
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/other_user/user/g'</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>即会修改为</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/home/other_user/anaconda3/bin/python</span>
-<span class="token operator">></span>
<span class="token comment">#!/home/user/anaconda3/bin/python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如下面这些文件中都含有上述第一行内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/home/anaconda3/envs/gpu3070_enabled/bin/pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除anaconda里的pkgs文件下的包" tabindex="-1"><a class="header-anchor" href="#删除anaconda里的pkgs文件下的包" aria-hidden="true">#</a> 删除anaconda里的pkgs文件下的包</h2>
<p>anaconda文件夹下有个pkgs文件夹。据我观测（没找到正式说明），里面是各种包的各个使用过的版本及压缩包。比如用conda update pandas，那在Lib\site-packages里会更新到新版本。但pkgs里既有新版本，也有旧版本。我推测是conda先把包下载到pkgs里，解压，然后更新site-packages里正式用到的包。所以这个pkgs里的东西能不能删？删了不就可以省很多空间了么？</p>
<blockquote>
<p>可以通过命令行删除，</p>
<p>Google讨论组里推荐用<code v-pre>conda clean -p</code>删除未使用的的包；实际<code v-pre>conda clean -a</code>更强力些。</p>
</blockquote>
<p>在Anaconda python中手动删除pkgs文件夹中的所有文件是否安全?</p>
<blockquote>
<p>实际上，在某些情况下，可以选择除去 pkgs 子目录.如Anaconda社区支持在<a href="https://groups.google.com/a/continuum.io/g/anaconda/c/xV1BiGPmgao?pli=1" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>所述.&quot; pkgs 目录只是一个缓存.您可以将其完全删除.但是，在创建新环境时，将高速缓存中的所有程序包都留在周围效率更高.&quot;</p>
<p>根据<a href="https://docs.conda.io/projects/conda/en/latest/commands/clean.html" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a>，您可以使用 conda clean --packages 删除 pkgs 中未使用的软件包(这会将它们移动到 pkgs/.trash 中，然后可以从中安全删除它们).虽然这不会检查使用返回到程序包缓存的符号链接安装的程序包，但是如果您不使用此类环境或在Windows下工作，则不是主题.我想这就是 conda clean --all 中包含 conda clean --packages 的原因.</p>
<p>要更积极地节省空间，可以使用 conda clean --force-pkgs-dirs 删除<em>所有</em>可写程序包缓存(但要注意的是可能存在环境)与这些目录相关联).如果您不使用环境或在Windows下使用Anaconda，则可能很安全.就我个人而言，我使用此选项没有问题.</p>
</blockquote>
<p>使用</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>conda clean <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以彻底删除下面两个pkgs的缓存：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Remove all contents from the following package caches?
  - C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>user<span class="token punctuation">\</span>Anaconda3<span class="token punctuation">\</span>pkgs
  - C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>user<span class="token punctuation">\</span>AppData<span class="token punctuation">\</span>Local<span class="token punctuation">\</span>conda<span class="token punctuation">\</span>conda<span class="token punctuation">\</span>pkgs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu中手动安装nvidia显卡驱动" tabindex="-1"><a class="header-anchor" href="#ubuntu中手动安装nvidia显卡驱动" aria-hidden="true">#</a> ubuntu中手动安装nvidia显卡驱动</h2>
<h3 id="在官网下载nvidia驱动" tabindex="-1"><a class="header-anchor" href="#在官网下载nvidia驱动" aria-hidden="true">#</a> 在官网下载Nvidia驱动</h3>
<p>根据自己的型号下载：放在<code v-pre>/Downloads</code>下，以GPU型号RTX3090为例</p>
<p>nvidia驱动官网下载地址：<a href="https://www.nvidia.com/Download/index.aspx?lang=en-us" target="_blank" rel="noopener noreferrer">Download <em>Drivers</em> | <em>NVIDIA</em><ExternalLinkIcon/></a></p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/nvidia-diver-downloads.jpg" alt="nvidia-diver-downloads"></p>
<h3 id="删除旧nvidia驱动" tabindex="-1"><a class="header-anchor" href="#删除旧nvidia驱动" aria-hidden="true">#</a> 删除旧NVIDIA驱动</h3>
<p>安装之前先卸载已经存在的驱动版本：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove nvidia*
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove <span class="token string">"*nvidia*"</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove xserver-xorg-video-nouveau
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="屏蔽开源驱动nouveau" tabindex="-1"><a class="header-anchor" href="#屏蔽开源驱动nouveau" aria-hidden="true">#</a> 屏蔽开源驱动nouveau</h3>
<p>需要禁用nouveau，只有在禁用掉nouveau后才能顺利安装NVIDIA显卡驱动，禁用方法就是在 <code v-pre>/etc/modprobe.d/blacklist-nouveau.conf</code>文件中添加一条禁用命令，将Ubuntu自带的显卡驱动加入黑名单。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/modprobe.d/blacklist.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文末添加以下内容保存：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>blacklist nouveau
options nouveau <span class="token assign-left variable">modeset</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意此时还需执行以下命令使禁用nouveau真正生效：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> update-initramfs <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启系统（一定要重启）<code v-pre>reboot</code></p>
<p>验证nouveau是否已禁用 <code v-pre>lsmod | grep nouveau</code></p>
<p>没有信息显示，说明nouveau已被禁用，接下来可以安装nvidia的显卡驱动。</p>
<h3 id="重启电脑-按ctrl-alt-f1进入命令行界面" tabindex="-1"><a class="header-anchor" href="#重启电脑-按ctrl-alt-f1进入命令行界面" aria-hidden="true">#</a> 重启电脑，按Ctrl+Alt+F1进入命令行界面</h3>
<p>重启之后,这里要尤其注意，安装显卡驱动要先切换到文字界面，(按Ctrl+Alt+F1~F6).所以，启动电脑后，先进入文字界面。</p>
<p>先输入用户名密码登录（数字不能用小键盘输入），然后</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> lightdm stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示<code v-pre>unit lightdm.service not loaded</code>，</p>
<p>则先安装LightDm：<code v-pre>sudo apt install lightdm</code>，安装完毕后跳出一个界面，选择lightdm，</p>
<p>再<code v-pre>sudo service lightdm stop</code>。</p>
<h3 id="执行安装驱动" tabindex="-1"><a class="header-anchor" href="#执行安装驱动" aria-hidden="true">#</a> 执行安装驱动</h3>
<p>依然是在命令行界面：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> Downloads
<span class="token function">sudo</span> <span class="token function">chmod</span> a+x NVIDIA-Linux-x86_64-470.63.01.run
<span class="token function">sudo</span> ./NVIDIA-Linux-x86_64-396.18.run -no-x-check -no-nouveau-check -no-opengl-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>-no-x-check：安装驱动时关闭X服务
-no-nouveau-check：安装驱动时禁用nouveau
-no-opengl-files：只安装驱动文件，不安装OpenGL文件，只有禁用opengl这样安装才不会出现循环登陆的问题</p>
</blockquote>
<p>后面就一路Accept就可以~</p>
<p>安装过程中的选项</p>
<ul>
<li>
<p>The distribution-provided pre-install script failed! Are you sure you want to continue?</p>
<p>选择yes继续。</p>
</li>
<li>
<p>Would you like to register the kernel module souces with DKMS? This will allow DKMS to automatically build a new module, if you install a different kernel later?</p>
<p>选择no继续。</p>
</li>
<li>
<p>问题没记住，选项是：install without signing</p>
</li>
<li>
<p>问题大概是：Nvidia’s 32-bit compatibility libraries?</p>
<p>选择no继续。</p>
</li>
<li>
<p>Would you like to run the nvidia-xconfigutility to automatically update your x configuration so that the NVIDIA x driver will be used when you restart x? Any pre-existing x confile will be backed up.</p>
<p>选择yes继续，最重要的一步，安装程序问你是否使用nv的xconfig文件，这里一定要选yes，否则在启动x-window时不会使用nv驱动。</p>
</li>
</ul>
<p>这些选项如果选择错误可能会导致安装失败，没关系，只要前面不出错，多尝试几次就好。</p>
<h3 id="重启x-window服务" tabindex="-1"><a class="header-anchor" href="#重启x-window服务" aria-hidden="true">#</a> 重启X-window服务</h3>
<p>依然是在命令行界面：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> lightdm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启电脑进入bios关闭secure-boot" tabindex="-1"><a class="header-anchor" href="#重启电脑进入bios关闭secure-boot" aria-hidden="true">#</a> 重启电脑进入BIOS关闭secure-boot</h3>
<p>进入BIOS把 <code v-pre>secure boot</code> 选项关掉。</p>
<p>关掉secure boot的原因：如果 secure boot 是开启状态，内核不能安装自己定制的模块；</p>
<p>解决方法：我们进入BIOS 把 secure boot 选项关掉；secure boot 大概的作用时为了保护内核的启动安全。</p>
<p>linux secure boot状态查询：<code v-pre>mokutil --sb-state</code></p>
<p>看的文章里有这么一个步骤，但是我并没用到，但是依然写在这里，目前用不到，但已备不时之需：</p>
<blockquote>
<h4 id="挂载nvidia驱动-modprobe-nvidia" tabindex="-1"><a class="header-anchor" href="#挂载nvidia驱动-modprobe-nvidia" aria-hidden="true">#</a> 挂载Nvidia驱动： <code v-pre>modprobe nvidia</code></h4>
<p>ERROR: could not insert ‘nvidia’: Operation not permitted
secure boot 的原因；如果 secure boot 是开启状态，内核不能安装自己定制的模块；
解决方法：我们进入BIOS 把 secure boot 选项关掉；secure boot 大概的作用时为了保护内核的启动安全；
linux secure boot 状态查询：mokutil --sb-state
再次挂载 nvidia</p>
</blockquote>
<h3 id="查看是否挂载成功-nvidia-smi" tabindex="-1"><a class="header-anchor" href="#查看是否挂载成功-nvidia-smi" aria-hidden="true">#</a> 查看是否挂载成功 <code v-pre>nvidia-smi</code></h3>
<p>如果开机黑屏，则按Ctrl+Alt+F1进入命令行界面，或者按两次Esc进入。</p>
<p>然后输入<code v-pre>nvidia-smi</code>。</p>
<p><img src="@source/docs/machine-learning-framework/anaconda/pic/nvidia-smi.jpg" alt="nvidia-smi"></p>
<p>则显卡挂载成功。</p>
<h3 id="显卡挂载成功但黑屏无法进入图形化界面" tabindex="-1"><a class="header-anchor" href="#显卡挂载成功但黑屏无法进入图形化界面" aria-hidden="true">#</a> 显卡挂载成功但黑屏无法进入图形化界面</h3>
<p>首先确保NVIDIA显卡驱动安装成功：使用命令 sudo nvidia-smi</p>
<p>重装desktop来解决，按Ctrl+Alt+F1进入命令行方式，输入账户密码登入，输入命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> uninstall ubuntu-desktop
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ubuntu-desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除再重新安装。</p>
<p>Ubuntu安装NVIDIA显卡驱动后可以进入命令行界面TYY1 ，但是无法进入图形界面。开机显示<code v-pre>/dev/nvme0n1p8:clean</code></p>
<p>综合查找，最后认定是驱动安装不匹配的原因，最后的解决方法很简单，方法如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /etc/X11/xorg.conf
<span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后<code v-pre>reboot</code>重启，恭喜成功~</p>
<h2 id="nvidia30系列不再支持cuda10-x" tabindex="-1"><a class="header-anchor" href="#nvidia30系列不再支持cuda10-x" aria-hidden="true">#</a> Nvidia30系列不再支持CUDA10.x</h2>
<ul>
<li>
<p>Windows上</p>
<p>Nvidia30xx系列不兼容CUDA10.x，而TendorFlow1.x又必须要CUDA10.x，在CUDA11.x上不能跑，所以Nvidia30xx系列就必须要用TensorFlow2.4及以上了。</p>
</li>
<li>
<p>Linux上</p>
<p>Linux上，TensorFlow有不同CUDA版本的。</p>
</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/QAQIknow/article/details/118858870" target="_blank" rel="noopener noreferrer">Tensorflow2.5安装（安装问题，这一篇全解决）<ExternalLinkIcon/></a></li>
</ul>
<p>“安装anaconda+tensorflow-gpu”参考了该博客。</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/chentianting/article/details/85089403" target="_blank" rel="noopener noreferrer">Ubuntu18.04安装NVIDIA显卡驱动<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/simplyou/article/details/119838829" target="_blank" rel="noopener noreferrer">ubuntu20.04安装NVIDIA显卡驱动 /dev/nvme0n1p8:clean<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>&quot;ubuntu中手动安装nvidia显卡驱动&quot;参考此博客</p>
<p>===</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/112703446" target="_blank" rel="noopener noreferrer">将nvidia-docker容器导出给其他人使用<ExternalLinkIcon/></a></li>
</ul>
<p>装docker里的tensorflow可供参考。</p>
</div></template>


