<template><div><h1 id="linux系统安装" tabindex="-1"><a class="header-anchor" href="#linux系统安装" aria-hidden="true">#</a> linux系统安装</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/operating-system/linux/linux.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="ubuntu安装" tabindex="-1"><a class="header-anchor" href="#ubuntu安装" aria-hidden="true">#</a> ubuntu安装</h1>
<h2 id="ubuntu更新源" tabindex="-1"><a class="header-anchor" href="#ubuntu更新源" aria-hidden="true">#</a> ubuntu更新源</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.bak
<span class="token comment"># 编辑，添加的具体内容见下面的镜像内容</span>
<span class="token function">sudo</span> gedit /etc/apt/sources.list
<span class="token comment"># 更新系统软件 并 更新已安装的包</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> upgrade <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要添加的镜像内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty main restricted universe multiverse

deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-security main restricted universe multiverse

deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse

deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse

deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse

deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty main restricted universe multiverse

deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-security main restricted universe multiverse

deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse

deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse

deb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h1>
<h2 id="vim安装" tabindex="-1"><a class="header-anchor" href="#vim安装" aria-hidden="true">#</a> vim安装</h2>
<p>执行下列更新以便安装vim。如果速度很慢，需要切换到国内镜像源，怎么切换参看对应章节。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge vim-common
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装requirements-txt" tabindex="-1"><a class="header-anchor" href="#安装requirements-txt" aria-hidden="true">#</a> 安装requirements.txt</h2>
<p>使用豆瓣的源比较快，当然也可以使用其他的源。</p>
<div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre v-pre class="language-SHELL"><code>pip install -r requirements.txt -i https://pypi.douban.com/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


