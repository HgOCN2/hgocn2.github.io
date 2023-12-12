<template><div><h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> Linux常用命令</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/operating-system/linux/linux.html">返回上层目录</RouterLink></li>
<li><a href="#">查看文件</a>
<ul>
<li><a href="#head/tail/sed%E6%9F%A5%E7%9C%8B%E6%88%96%E6%88%AA%E5%8F%96%E8%B6%85%E5%A4%A7%E6%96%87%E4%BB%B6">head/tail/sed查看或截取超大文件</a></li>
<li><a href="#less%E7%9B%B4%E6%8E%A5%E6%9F%A5%E7%9C%8B%E8%B6%85%E5%A4%A7%E6%96%87%E4%BB%B6">less直接查看超大文件</a></li>
<li><a href="#cat%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9%E6%89%93%E5%8D%B0%E5%88%B0%E5%B1%8F%E5%B9%95">cat文件内容打印到屏幕</a></li>
<li><a href="#tree%E5%B1%95%E7%A4%BA%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">tree展示目录结构</a></li>
</ul>
</li>
<li><a href="#%E7%A7%BB%E5%8A%A8/%E4%BC%A0%E8%BE%93%E6%96%87%E4%BB%B6">移动/传输文件</a>
<ul>
<li><a href="#cp%E5%A4%8D%E5%88%B6%E6%96%87%E4%BB%B6">cp复制文件</a></li>
<li><a href="#mv%E7%A7%BB%E5%8A%A8%E6%96%87%E4%BB%B6/%E9%87%8D%E5%91%BD%E5%90%8D">mv移动文件/重命名</a></li>
<li><a href="#scp%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%88%B0%E5%BC%80%E5%8F%91%E6%9C%BA">scp本地文件上传到开发机</a></li>
</ul>
</li>
<li><a href="#%E5%8E%8B%E7%BC%A9%E6%96%87%E4%BB%B6">压缩文件</a>
<ul>
<li><a href="#zip%E5%8E%8B%E7%BC%A9%E6%96%87%E4%BB%B6">zip压缩文件</a></li>
<li><a href="#tar%E5%8E%8B%E7%BC%A9%E6%96%87%E4%BB%B6">tar压缩文件</a></li>
</ul>
</li>
<li><a href="#%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86">文本处理</a>
<ul>
<li><a href="#wc%E8%AE%A1%E7%AE%97%E5%AD%97%E6%95%B0%E8%A1%8C%E6%95%B0">wc计算字数行数</a></li>
<li><a href="#awk%E6%96%87%E6%9C%AC%E5%88%86%E6%9E%90">awk文本分析</a></li>
<li><a href="#sort%E6%96%87%E6%9C%AC%E6%8E%92%E5%BA%8F">sort文本排序</a></li>
</ul>
</li>
<li><a href="#%E7%A3%81%E7%9B%98">磁盘</a>
<ul>
<li><a href="#df%E6%9F%A5%E7%9C%8B%E7%A3%81%E7%9B%98%E5%88%86%E5%8C%BA%E7%A9%BA%E9%97%B4">df查看磁盘分区空间</a></li>
<li><a href="#du%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95%E7%9A%84%E6%80%BB%E5%A4%A7%E5%B0%8F">du查看当前目录的总大小</a></li>
<li><a href="#ln%E8%BD%AF%E9%93%BE%E6%8E%A5">ln软链接</a></li>
</ul>
</li>
<li><a href="#%E6%9D%83%E9%99%90">权限</a>
<ul>
<li><a href="#chmod%E6%9B%B4%E6%94%B9%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90">chmod更改文件权限</a></li>
<li><a href="#chown%E6%9B%B4%E6%94%B9%E6%96%87%E4%BB%B6%E6%8B%A5%E6%9C%89%E8%80%85">chown更改文件拥有者</a></li>
</ul>
</li>
<li><a href="#%E7%BB%88%E7%AB%AF/%E5%90%8E%E5%8F%B0">终端/后台</a>
<ul>
<li><a href="#nohup%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C">nohup后台运行</a></li>
<li><a href="#screen%E4%BC%9A%E8%AF%9D%E7%AA%97%E5%8F%A3%E4%BF%9D%E7%95%99">screen会话窗口保留</a></li>
</ul>
</li>
<li><a href="#%E8%BF%87%E6%BB%A4/%E5%8F%82%E6%95%B0">过滤/参数</a>
<ul>
<li><a href="#grep%E5%85%B3%E9%94%AE%E5%AD%97%E6%9F%A5%E6%89%BE">grep关键字查找</a></li>
<li><a href="#xargs%E7%AE%A1%E9%81%93%E4%BC%A0%E5%8F%82">xargs管道传参</a></li>
</ul>
</li>
<li><a href="#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1">定时任务</a>
<ul>
<li><a href="#crontab%E5%AE%9A%E6%97%B6%E8%BF%90%E8%A1%8C">crontab定时运行</a></li>
</ul>
</li>
</ul>
<h1 id="查看文件" tabindex="-1"><a class="header-anchor" href="#查看文件" aria-hidden="true">#</a> 查看文件</h1>
<h2 id="ls显示文件夹内容" tabindex="-1"><a class="header-anchor" href="#ls显示文件夹内容" aria-hidden="true">#</a> ls显示文件夹内容</h2>
<p>查看文件夹中的文件总数量</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"^-"</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="head-tail-sed查看或截取超大文件" tabindex="-1"><a class="header-anchor" href="#head-tail-sed查看或截取超大文件" aria-hidden="true">#</a> head/tail/sed查看或截取超大文件</h2>
<p>Linux下打开超大文件方法
在Linux下用VIM打开大小几个G、甚至几十个G的文件时，是非常慢的。</p>
<p>这时，我们可以利用下面的方法分割文件，然后再打开。</p>
<p>1 查看文件的前多少行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">head</span> <span class="token parameter variable">-10000</span> /var/lib/mysql/slowquery.log <span class="token operator">></span> temp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的意思是：把slowquery.log文件前10000行的数据写入到temp.log文件中。</p>
<p>或者查看：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>head -10000 /var/lib/mysql/slowquery.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2 查看文件的后多少行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-10000</span> /var/lib/mysql/slowquery.log <span class="token operator">></span> temp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的意思是：把slowquery.log文件后10000行的数据写入到temp.log文件中。</p>
<p>3 查看文件的几行到几行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> ‘10,10000p’ /var/lib/mysql/slowquery.log <span class="token operator">></span> temp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的意思是：把slowquery.log文件第10到10000行的数据写入到temp.log文件中。</p>
<p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/liurwei/article/details/82225245" target="_blank" rel="noopener noreferrer">Linux打开超大文件方法<ExternalLinkIcon/></a></li>
</ul>
<h2 id="less直接查看超大文件" tabindex="-1"><a class="header-anchor" href="#less直接查看超大文件" aria-hidden="true">#</a> less直接查看超大文件</h2>
<p>less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 <strong>less 在查看之前不会加载整个文件</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">less</span> abc.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-less.html" target="_blank" rel="noopener noreferrer">Linux less命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="cat文件内容打印到屏幕" tabindex="-1"><a class="header-anchor" href="#cat文件内容打印到屏幕" aria-hidden="true">#</a> cat文件内容打印到屏幕</h2>
<p>cat 命令用于连接文件并<strong>直接打印到标准输出设备上</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> abc.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-cat.html" target="_blank" rel="noopener noreferrer">Linux cat命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="tree展示目录结构" tabindex="-1"><a class="header-anchor" href="#tree展示目录结构" aria-hidden="true">#</a> tree展示目录结构</h2>
<p>安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> tree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tree <span class="token punctuation">[</span>要展示的文件夹路径<span class="token punctuation">]</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-L</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释：</p>
<p>tree: 显示目录树；</p>
<p>-d: 只显示目录；</p>
<p>-L 1: 选择显示的目录深度为1，只显示一层深度。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tree ~/Desktop/saved_models
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>saved_models
├── cv_sod
│   └── 1609392632
│       ├── saved_model.pb
│       └── variables
│           ├── variables.data-00000-of-00001
│           └── variables.index
└── lstm
    └── 1609392632
        ├── assets
        │   ├── vocab.labels.txt
        │   └── vocab.words.txt
        ├── saved_model.pb
        └── variables
            ├── variables.data-00000-of-00001
            └── variables.index

7 directories, 8 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.cnblogs.com/oxspirt/p/6278004.html" target="_blank" rel="noopener noreferrer">命令展示该目录下的所有子目录及文件结构 tree<ExternalLinkIcon/></a></li>
</ul>
<h2 id="find查找文件" tabindex="-1"><a class="header-anchor" href="#find查找文件" aria-hidden="true">#</a> find查找文件</h2>
<p>查找文件，从当前目录查找所有后缀名为<code v-pre>md</code>的文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找出来的满足要求的文件，可通过<code v-pre>xargs</code>管道传参来进行后续处理，如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/abcd/efgh/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把每一行中所有<code v-pre>abcd</code>字符串转为<code v-pre>efgh</code>。</p>
<h2 id="file显示文件信息" tabindex="-1"><a class="header-anchor" href="#file显示文件信息" aria-hidden="true">#</a> file显示文件信息</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">file</span> libxxx.so
<span class="token comment"># libxxx.so: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, BuildID[sha1]=a5fb794c5f5a4acdc8d365b4fa0f41a45807f49b, with debug_info, not stripped</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示该linux库文件适用于x86-64架构，和arm架构不兼容。</p>
<h1 id="移动-传输文件" tabindex="-1"><a class="header-anchor" href="#移动-传输文件" aria-hidden="true">#</a> 移动/传输文件</h1>
<h2 id="cp复制文件" tabindex="-1"><a class="header-anchor" href="#cp复制文件" aria-hidden="true">#</a> cp复制文件</h2>
<p>只复制部分文件，就使用 <code v-pre>grep -v</code>来 过滤掉不想复制的文件/文件夹，文件名之间用<code v-pre>\|</code>分割。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token variable"><span class="token variable">`</span><span class="token function">ls</span><span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">'data\|input\|output\|tmp'</span><span class="token variable">`</span></span> <span class="token punctuation">..</span>/deep_1f/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mv移动文件-重命名" tabindex="-1"><a class="header-anchor" href="#mv移动文件-重命名" aria-hidden="true">#</a> mv移动文件/重命名</h2>
<p>在一些情况下，我们需要将很多个文件同时移动到一个指定的目录下，如果一个一个移动，那太蛋疼了。</p>
<p>今天用man mv查到一个选项-t，是指定目标文件夹，就是我们所要将文件移至的文件夹，很省事儿，分享给大家。</p>
<p>比如当前目录下有a.dir  b.dir   c.dir  1.txt  2.txt  des.dir.我们现在要将a.dir  b.dir   c.dir  1.txt  2.txt这几个文件移动到des.dir 目录下。</p>
<p>执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span>  a.dir  b.dir   c.dir  <span class="token number">1</span>.txt  <span class="token number">2</span>.txt  <span class="token parameter variable">-t</span>  des.dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以一次将这些文件移动到des.dir下。</p>
<p>参考资料：</p>
<ul>
<li><a href="https://jingyan.baidu.com/article/d8072ac4686a1dec95cefd8d.html" target="_blank" rel="noopener noreferrer">linux命令mv同时移动多个文件至一个目录<ExternalLinkIcon/></a></li>
</ul>
<h2 id="scp本地文件上传到开发机" tabindex="-1"><a class="header-anchor" href="#scp本地文件上传到开发机" aria-hidden="true">#</a> scp本地文件上传到开发机</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">scp</span> /tmp/Anaconda3-2019.03-Linux-x86_64.sh  ml004.dx:/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样也可以将文件从开发机下载到本地。</p>
<h2 id="relink找出符号链接指向位置" tabindex="-1"><a class="header-anchor" href="#relink找出符号链接指向位置" aria-hidden="true">#</a> relink找出符号链接指向位置</h2>
<p>readlink是linux用来找出符号链接所指向的位置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>例1：
readlink <span class="token parameter variable">-f</span> /usr/bin/awk
结果：
/usr/bin/gawk <span class="token comment">#因为/usr/bin/awk是一个软连接，指向gawk</span>
例2：
readlink <span class="token parameter variable">-f</span> /home/software/log
/home/software/log  <span class="token comment">#如果没有链接，就显示自己本身的绝对路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该功能常常和dirname $0连用：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>path=$(dirname $0)
path2=$(readlink -f $path)
或者一步到位：
BASE_DIR=$(readlink -f `dirname "$0"`)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>dirname $0</code>只是获取的当前脚本的相对路径.</p>
<p>解释：
<code v-pre>readlink -f $path</code> 如果​$path没有链接，就显示自己本身的绝对路径</p>
<h1 id="压缩文件" tabindex="-1"><a class="header-anchor" href="#压缩文件" aria-hidden="true">#</a> 压缩文件</h1>
<h2 id="zip压缩文件" tabindex="-1"><a class="header-anchor" href="#zip压缩文件" aria-hidden="true">#</a> zip压缩文件</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">-</span>d 从压缩文件内删除指定的文件。
<span class="token operator">-</span>q 不显示指令执行过程。
<span class="token operator">-</span>r 递归处理，将指定目录下的所有文件和子目录一并处理。
<span class="token operator">-</span>v 显示指令执行过程或显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<ul>
<li>
<p>将/home/html/ 这个目录下所有文件和文件夹打包为当前目录下的 html.zip：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-r</span> html.zip /home/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>如果在我们在 /home/html 目录下，可以执行以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-r</span> html.zip *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>从压缩文件 cp.zip 中删除文件 a.c</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-dv</span> cp.zip a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>对于zip、z01、z02等格式的，需要先将这些压缩包合并后再解压，具体方法如下：</p>
<p>先用zip将其中的文件进行合并，然后再解压，可以获得所有文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># image.zip image.z01 image.z02 ...</span>
<span class="token function">zip</span> <span class="token parameter variable">-s</span> <span class="token number">0</span> image.zip <span class="token parameter variable">--out</span> full.zip
<span class="token function">unzip</span> full.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-zip.html" target="_blank" rel="noopener noreferrer">Linux zip命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="tar压缩文件" tabindex="-1"><a class="header-anchor" href="#tar压缩文件" aria-hidden="true">#</a> tar压缩文件</h2>
<ul>
<li>命令选项：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>-z(gzip)      用gzip来压缩/解压缩文件
-j(bzip2)     用bzip2来压缩/解压缩文件
-v(verbose)   详细报告tar处理的文件信息
-c(create)    创建新的档案文件
-x(extract)   解压缩文件或目录
-f(file)      使用档案文件或设备，这个选项通常是必选的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>命令举例：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#打包</span>
<span class="token function">tar</span> <span class="token parameter variable">-vcf</span> buodo.tar buodo

<span class="token comment">#拆包</span>
<span class="token function">tar</span> <span class="token parameter variable">-vxf</span> buodo.tar

<span class="token comment">#打包并压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zvcf</span> buodo.tar.gz buodo
<span class="token function">tar</span> <span class="token parameter variable">-jvcf</span> buodo.tar.bz2 buodo 

<span class="token comment">#解压并拆包</span>
<span class="token function">tar</span> <span class="token parameter variable">-zvxf</span> buodo.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-jvxf</span> buodo.tar.bz2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/capecape/article/details/78548723" target="_blank" rel="noopener noreferrer">linux 压缩和解压缩命令gz、tar、zip、bz2<ExternalLinkIcon/></a></li>
</ul>
<h1 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理" aria-hidden="true">#</a> 文本处理</h1>
<h2 id="wc计算字数行数" tabindex="-1"><a class="header-anchor" href="#wc计算字数行数" aria-hidden="true">#</a> wc计算字数行数</h2>
<p>利用wc指令我们可以计算文件的Byte数、字数、或是列数，若不指定文件名称、或是所给予的文件名为&quot;-&quot;，则wc指令会从标准输入设备读取数据。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wc</span> <span class="token punctuation">[</span>-clw<span class="token punctuation">]</span><span class="token punctuation">[</span>--help<span class="token punctuation">]</span><span class="token punctuation">[</span>--version<span class="token punctuation">]</span><span class="token punctuation">[</span>文件<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-c或--bytes或--chars 只显示Bytes数。</li>
<li>-l或--lines 只显示行数。</li>
<li>-w或--words 只显示字数。</li>
<li>--help 在线帮助。</li>
<li>--version 显示版本信息。</li>
</ul>
<p>实例：</p>
<p>在默认的情况下，wc将计算指定文件的行数、字数，以及字节数。使用的命令为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wc</span> testfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 wc统计，结果如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wc</span> testfile  <span class="token comment"># testfile文件的统计信息  </span>
<span class="token comment"># 3 92 598 testfile</span>
<span class="token comment"># testfile文件的行数为3、单词数92、字节数598 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，3 个数字分别表示testfile文件的行数、单词数，以及该文件的字节数。</p>
<p>如果想同时统计多个文件的信息，例如同时统计testfile、testfile_1、testfile_2，可使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wc</span> testfile testfile_1 testfile_2   <span class="token comment">#统计三个文件的信息 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#统计三个文件的信息  </span>
<span class="token function">wc</span> testfile testfile_1 testfile_2
<span class="token comment">#3 92 598 testfile</span>
<span class="token comment"># 第一个文件行数为3、单词数92、字节数598  </span>
<span class="token comment"># 9 18 78 testfile_1</span>
<span class="token comment"># 第二个文件的行数为9、单词数18、字节数78  </span>
<span class="token comment"># 3 6 32 testfile_2</span>
<span class="token comment"># 第三个文件的行数为3、单词数6、字节数32  </span>
<span class="token comment"># 15 116 708 总用量</span>
<span class="token comment"># 三个文件总共的行数为15、单词数116、字节数708 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-wc.html" target="_blank" rel="noopener noreferrer">Linux wc命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="awk文本分析" tabindex="-1"><a class="header-anchor" href="#awk文本分析" aria-hidden="true">#</a> awk文本分析</h2>
<p>AWK是一种处理文本文件的语言，是一个强大的文本分析工具。</p>
<p>之所以叫AWK是因为其取了三位创始人 Alfred Aho，Peter Weinberger, 和 Brian Kernighan 的 Family Name 的首字符。</p>
<p><strong>语法</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token punctuation">[</span>选项参数<span class="token punctuation">]</span> <span class="token string">'script'</span> <span class="token assign-left variable">var</span><span class="token operator">=</span>value file<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
或
<span class="token function">awk</span> <span class="token punctuation">[</span>选项参数<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> scriptfile <span class="token assign-left variable">var</span><span class="token operator">=</span>value file<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>选项参数说明：</strong></p>
<ul>
<li>-F fs or --field-separator fs
指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:。</li>
<li>-v var=value or --asign var=value
赋值一个用户定义变量。</li>
<li>-f scripfile or --file scriptfile
从脚本文件中读取awk命令。</li>
<li>-mf nnn and -mr nnn
对nnn值设置内在限制，-mf选项限制分配给nnn的最大块数目；-mr选项限制记录的最大数目。这两个功能是Bell实验室版awk的扩展功能，在标准awk中不适用。</li>
<li>-W compact or --compat, -W traditional or --traditional
在兼容模式下运行awk。所以gawk的行为和标准的awk完全一样，所有的awk扩展都被忽略。</li>
<li>-W copyleft or --copyleft, -W copyright or --copyright
打印简短的版权信息。</li>
<li>-W help or --help, -W usage or --usage
打印全部awk选项和每个选项的简短说明。</li>
<li>-W lint or --lint
打印不能向传统unix平台移植的结构的警告。</li>
<li>-W lint-old or --lint-old
打印关于不能向传统unix平台移植的结构的警告。</li>
<li>-W posix
打开兼容模式。但有以下限制，不识别：/x、函数关键字、func、换码序列以及当fs是一个空格时，将新行作为一个域分隔符；操作符<strong>和</strong>=不能代替^和^=；fflush无效。</li>
<li>-W re-interval or --re-inerval
允许间隔正则表达式的使用，参考(grep中的Posix字符类)，如括号表达式[[:alpha:]]。</li>
<li>-W source program-text or --source program-text
使用program-text作为源代码，可与-f命令混用。</li>
<li>-W version or --version
打印bug报告信息的版本。</li>
</ul>
<p><strong>基本用法</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 行匹配语句 awk '' 只能用单引号</span>
<span class="token function">awk</span> <span class="token string">'{[pattern] action}'</span> <span class="token punctuation">{</span>filenames<span class="token punctuation">}</span>

<span class="token comment">#-F相当于内置变量FS, 指定分割字符</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span>

<span class="token comment"># 设置变量</span>
<span class="token function">awk</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 使用脚本</span>
<span class="token function">awk</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span>awk脚本<span class="token punctuation">}</span> <span class="token punctuation">{</span>文件名<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p>
<p>log.txt文本内容如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">2</span> <span class="token keyword">this</span> is a test
<span class="token number">3</span> Are you like awk
This's a test
<span class="token number">10</span> There are orange<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 每行按空格或TAB分割，输出文本中的1、4项</span>
<span class="token function">awk</span> <span class="token string">'{print $1,$4}'</span> log.txt

<span class="token comment"># 格式化输出</span>
<span class="token function">awk</span> <span class="token string">'{printf "%-8s %-10s\n",$1,$4}'</span> log.txt

<span class="token comment"># 使用","分割</span>
<span class="token function">awk</span> -F, <span class="token string">'{print $1,$2}'</span> log.txt

<span class="token comment"># 或者使用内建变量</span>
<span class="token function">awk</span> <span class="token string">'BEGIN{FS=","} {print $1,$2}'</span> log.txt

<span class="token comment"># 使用多个分隔符.先使用空格分割，然后对分割结果再使用","分割</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">'[ ,]'</span>  <span class="token string">'{print $1,$2,$5}'</span> log.txt

<span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span> <span class="token string">'{print $1,$1+a}'</span> log.txt
<span class="token comment"># 2 3</span>

<span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">b</span><span class="token operator">=</span>s <span class="token string">'{print $1,$1+a,$1b}'</span> log.txt
<span class="token comment"># 2 3 2s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运算符</strong></p>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>= += -= *= /= %= ^= **=</td>
<td>赋值</td>
</tr>
<tr>
<td>?:</td>
<td>C条件表达式</td>
</tr>
<tr>
<td>||</td>
<td>逻辑或</td>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>逻辑与</td>
</tr>
<tr>
<td>~ 和 !~</td>
<td>匹配正则表达式和不匹配正则表达式</td>
</tr>
<tr>
<td>&lt; &lt;= &gt; &gt;= != ==</td>
<td>关系运算符</td>
</tr>
<tr>
<td>空格</td>
<td>连接</td>
</tr>
<tr>
<td>+ -</td>
<td>加，减</td>
</tr>
<tr>
<td>* / %</td>
<td>乘，除与求余</td>
</tr>
<tr>
<td>+ - !</td>
<td>一元加，减和逻辑非</td>
</tr>
<tr>
<td>^ ***</td>
<td>求幂</td>
</tr>
<tr>
<td>++ --</td>
<td>增加或减少，作为前缀或后缀</td>
</tr>
<tr>
<td>$</td>
<td>字段引用</td>
</tr>
<tr>
<td>in</td>
<td>数组成员</td>
</tr>
</tbody>
</table>
<p>过滤第一列大于2的行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'$1>2'</span> log.txt
<span class="token comment"># 输出</span>
<span class="token comment"># 3 Are you like awk</span>
<span class="token comment"># This's a test</span>
<span class="token comment"># 10 There are orange,apple,mongo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤第一列等于2的行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'$1==2 {print $1,$3}'</span> log.txt
<span class="token comment"># 输出</span>
<span class="token comment"># 2 is</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤第一列大于2并且第二列等于'Are'的行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'$1>2 &amp;&amp; $2=="Are" {print $1,$2,$3}'</span> log.txt
<span class="token comment"># 输出</span>
<span class="token comment"># 3 Are you</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内建变量</strong></p>
<table>
<thead>
<tr>
<th>变量</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>$n</td>
<td>当前记录的第n个字段，字段间由FS分隔</td>
</tr>
<tr>
<td>$0</td>
<td>完整的输入记录</td>
</tr>
<tr>
<td>ARGC</td>
<td>命令行参数的数目</td>
</tr>
<tr>
<td>ARGIND</td>
<td>命令行中当前文件的位置(从0开始算)</td>
</tr>
<tr>
<td>ARGV</td>
<td>包含命令行参数的数组</td>
</tr>
<tr>
<td>CONVFMT</td>
<td>数字转换格式(默认值为%.6g)ENVIRON环境变量关联数组</td>
</tr>
<tr>
<td>ERRNO</td>
<td>最后一个系统错误的描述</td>
</tr>
<tr>
<td>FIELDWIDTHS</td>
<td>字段宽度列表(用空格键分隔)</td>
</tr>
<tr>
<td>FILENAME</td>
<td>当前文件名</td>
</tr>
<tr>
<td>FNR</td>
<td>各文件分别计数的行号</td>
</tr>
<tr>
<td>FS</td>
<td>字段分隔符(默认是任何空格)</td>
</tr>
<tr>
<td>IGNORECASE</td>
<td>如果为真，则进行忽略大小写的匹配</td>
</tr>
<tr>
<td>NF</td>
<td>一条记录的字段的数目</td>
</tr>
<tr>
<td>NR</td>
<td>已经读出的记录数，就是行号，从1开始</td>
</tr>
<tr>
<td>OFMT</td>
<td>数字的输出格式(默认值是%.6g)</td>
</tr>
<tr>
<td>OFS</td>
<td>输出记录分隔符（输出换行符），输出时用指定的符号代替换行符</td>
</tr>
<tr>
<td>ORS</td>
<td>输出记录分隔符(默认值是一个换行符)</td>
</tr>
<tr>
<td>RLENGTH</td>
<td>由match函数所匹配的字符串的长度</td>
</tr>
<tr>
<td>RS</td>
<td>记录分隔符(默认是一个换行符)</td>
</tr>
<tr>
<td>RSTART</td>
<td>由match函数所匹配的字符串的第一个位置</td>
</tr>
<tr>
<td>SUBSEP</td>
<td>数组下标分隔符(默认值是/034)</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'BEGIN{printf "%4s %4s %4s %4s %4s %4s %4s %4s %4s\n","FILENAME","ARGC","FNR","FS","NF","NR","OFS","ORS","RS";printf "---------------------------------------------\n"} {printf "%4s %4s %4s %4s %4s %4s %4s %4s %4s\n",FILENAME,ARGC,FNR,FS,NF,NR,OFS,ORS,RS}'</span>  log.txt
<span class="token comment"># FILENAME ARGC  FNR   FS   NF   NR  OFS  ORS   RS</span>
<span class="token comment"># ---------------------------------------------</span>
<span class="token comment"># log.txt    2    1         5    1</span>
<span class="token comment"># log.txt    2    2         5    2</span>
<span class="token comment"># log.txt    2    3         3    3</span>
<span class="token comment"># log.txt    2    4         4    4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用正则，字符串匹配</strong></p>
<p><strong>~ 表示模式开始。// 中是模式。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 输出第二列包含 "th"，并打印第二列与第四列</span>
<span class="token function">awk</span> <span class="token string">'$2 ~ /th/ {print $2,$4}'</span> log.txt
<span class="token comment"># this a</span>

<span class="token comment"># 输出包含"re" 的行</span>
<span class="token function">awk</span> <span class="token string">'/re/ '</span> log.txt
<span class="token comment"># 3 Are you like awk</span>
<span class="token comment"># 10 There are orange,apple,mongo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>忽略大小写</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'BEGIN{IGNORECASE=1} /this/'</span> log.txt
<span class="token comment"># 2 this is a test</span>
<span class="token comment"># This's a test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模式取反</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'$2 !~ /th/ {print $2,$4}'</span> log.txt
<span class="token comment"># Are like</span>
<span class="token comment"># a</span>
<span class="token comment"># There orange,apple,mongo</span>
<span class="token function">awk</span> <span class="token string">'!/th/ {print $2,$4}'</span> log.txt
<span class="token comment"># Are like</span>
<span class="token comment"># a</span>
<span class="token comment"># There orange,apple,mongo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>awk脚本</strong></p>
<p>关于awk脚本，我们需要注意两个关键词BEGIN和END。</p>
<ul>
<li>BEGIN{ 这里面放的是执行前的语句 }</li>
<li>END {这里面放的是处理完所有的行后要执行的语句 }</li>
<li>{这里面放的是处理每一行时要执行的语句}</li>
</ul>
<p>假设有这么一个文件（学生成绩表）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> score.txt
<span class="token comment"># Marry   2143 78 84 77</span>
<span class="token comment"># Jack    2321 66 78 45</span>
<span class="token comment"># Tom     2122 48 77 71</span>
<span class="token comment"># Mike    2537 87 97 95</span>
<span class="token comment"># Bob     2415 40 57 62</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的awk脚本如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> cal.awk
<span class="token comment">#!/bin/awk -f</span>
<span class="token comment">#运行前</span>
BEGIN <span class="token punctuation">{</span>
    math <span class="token operator">=</span> <span class="token number">0</span>
    english <span class="token operator">=</span> <span class="token number">0</span>
    computer <span class="token operator">=</span> <span class="token number">0</span>
 
    <span class="token builtin class-name">printf</span> <span class="token string">"NAME    NO.   MATH  ENGLISH  COMPUTER   TOTAL<span class="token entity" title="\n">\n</span>"</span>
    <span class="token builtin class-name">printf</span> <span class="token string">"---------------------------------------------<span class="token entity" title="\n">\n</span>"</span>
<span class="token punctuation">}</span>
<span class="token comment">#运行中</span>
<span class="token punctuation">{</span>
    <span class="token assign-left variable">math</span><span class="token operator">+=</span><span class="token variable">$3</span>
    <span class="token assign-left variable">english</span><span class="token operator">+=</span><span class="token variable">$4</span>
    <span class="token assign-left variable">computer</span><span class="token operator">+=</span><span class="token variable">$5</span>
    <span class="token builtin class-name">printf</span> <span class="token string">"%-6s %-6s %4d %8d %8d %8d<span class="token entity" title="\n">\n</span>"</span>, <span class="token variable">$1</span>, <span class="token variable">$2</span>, <span class="token variable">$3</span>,<span class="token variable">$4</span>,<span class="token variable">$5</span>, <span class="token variable">$3</span>+<span class="token variable">$4</span>+<span class="token variable">$5</span>
<span class="token punctuation">}</span>
<span class="token comment">#运行后</span>
END <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">"---------------------------------------------<span class="token entity" title="\n">\n</span>"</span>
    <span class="token builtin class-name">printf</span> <span class="token string">"  TOTAL:%10d %8d %8d <span class="token entity" title="\n">\n</span>"</span>, math, english, computer
    <span class="token builtin class-name">printf</span> <span class="token string">"AVERAGE:%10.2f %8.2f %8.2f<span class="token entity" title="\n">\n</span>"</span>, math/NR, english/NR, computer/NR
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看一下执行结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-f</span> cal.awk score.txt
NAME    NO.   MATH  ENGLISH  COMPUTER   TOTAL
---------------------------------------------
Marry  <span class="token number">2143</span>     <span class="token number">78</span>       <span class="token number">84</span>       <span class="token number">77</span>      <span class="token number">239</span>
Jack   <span class="token number">2321</span>     <span class="token number">66</span>       <span class="token number">78</span>       <span class="token number">45</span>      <span class="token number">189</span>
Tom    <span class="token number">2122</span>     <span class="token number">48</span>       <span class="token number">77</span>       <span class="token number">71</span>      <span class="token number">196</span>
Mike   <span class="token number">2537</span>     <span class="token number">87</span>       <span class="token number">97</span>       <span class="token number">95</span>      <span class="token number">279</span>
Bob    <span class="token number">2415</span>     <span class="token number">40</span>       <span class="token number">57</span>       <span class="token number">62</span>      <span class="token number">159</span>
---------------------------------------------
  TOTAL:       <span class="token number">319</span>      <span class="token number">393</span>      <span class="token number">350</span>
AVERAGE:     <span class="token number">63.80</span>    <span class="token number">78.60</span>    <span class="token number">70.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>awk关联数组</strong></p>
<p>在awk中，数组都是关联数组.</p>
<p>所谓关联数组就是每一个数组元素实际都包含两部分：key和value，类似python里面的字典。在awk中数组之间是无序的，一个数组的key值是数值，例如1，2，3，并不代表该数组元素在数组中的出现的位置。</p>
<p>awk中的数组有以下特性：</p>
<ol>
<li>数组无需定义，直接使用</li>
<li>数组自动扩展</li>
<li>下标可以是数值型或者字符串型</li>
</ol>
<p>元素赋值：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">123</span>
arr<span class="token punctuation">[</span>“one”<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组长度：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>length<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>data.txt:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>a1 b1 <span class="token number">1</span>
a2 b1 <span class="token number">1</span>
a1 b2 <span class="token number">1</span>
a3 b2 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计第一列和第二列中的去重数量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> -F<span class="token string">"<span class="token entity" title="\t">\t</span>"</span>  <span class="token string">'{hash1[$1]+=1; hash2[$2]+=1}END{print length(hash1) "\t" length(hash2)}'</span> data.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>计算频率：</p>
<p>data.txt:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>a1 <span class="token number">1</span>
a2 <span class="token number">2</span>
a1 <span class="token number">5</span>
a3 <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shell代码：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> -F<span class="token string">','</span> <span class="token string">'{all_samp_num+=$2; dict[$1]=$2} END{for(i in dict){printf("%s,%.6f\n", i, dict[i]/all_samp_num)}}'</span> ./data.txt <span class="token operator">></span> ./res.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>另外一些实例</strong></p>
<p>计算文件大小</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> *.txt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{sum+=$6} END {print sum}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从文件中找出长度大于80的行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'length>80'</span> log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-awk.html" target="_blank" rel="noopener noreferrer">Linux awk 命令<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/qinyushuang/article/details/50342875" target="_blank" rel="noopener noreferrer">awk关联数组<ExternalLinkIcon/></a></li>
</ul>
<h2 id="sort文本排序" tabindex="-1"><a class="header-anchor" href="#sort文本排序" aria-hidden="true">#</a> sort文本排序</h2>
<p><strong>sort命令</strong>是在Linux里非常有用，它将文件进行排序，并将排序结果标准输出。</p>
<p>sort的-n、-r、-k、-t选项的使用：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># cat sort.txt</span>
AAA:BB:CC
aaa:30:1.6
ccc:50:3.3
ddd:20:4.2
bbb:10:2.5
eee:40:5.4
eee:60:5.1

<span class="token comment">#将BB列按照数字从小到大顺序排列：</span>
<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort -nk 2 -t: sort.txt</span>
AAA:BB:CC
bbb:10:2.5
ddd:20:4.2
aaa:30:1.6
eee:40:5.4
ccc:50:3.3
eee:60:5.1

<span class="token comment">#将CC列数字从大到小顺序排列：</span>
<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort -nrk 3 -t: sort.txt</span>
eee:40:5.4
eee:60:5.1
ddd:20:4.2
ccc:50:3.3
bbb:10:2.5
aaa:30:1.6
AAA:BB:CC

<span class="token comment"># -n是按照数字大小排序，-r是以相反顺序，-k是指定需要爱排序的栏位，-t指定栏位分隔符为冒号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://man.linuxde.net/sort" target="_blank" rel="noopener noreferrer">sort命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="sed批量文本处理" tabindex="-1"><a class="header-anchor" href="#sed批量文本处理" aria-hidden="true">#</a> sed批量文本处理</h2>
<p>sed命令可批量处理文本，比如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># ==================批量替换内容==================</span>

<span class="token comment"># 将每行开头为$$换成vvvv</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/^[$][$]$/vvvv/g"</span>
<span class="token comment"># 将其余的$$换成$</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/[$][$]/\$/g"</span>
<span class="token comment"># 将vvvv换回$$</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/vvvv/\$\$/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的规则是：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed总结
sed元字符（正则表达式）
^ 匹配行开始，如：/^sed/匹配所有以sed开头的行。 
$ 匹配行结束，如：/sed$/匹配所有以sed结尾的行。 
. 匹配一个非换行符的任意字符，如：/s.d/匹配s后接一个任意字符，最后是d。 
* 匹配0个或多个字符，如：/*sed/匹配所有模板是一个或多个空格后紧跟sed的行。 
[] 匹配一个指定范围内的字符，如/[ss]ed/匹配sed和Sed。 
[^] 匹配一个不在指定范围内的字符，如：/[^A-RT-Z]ed/匹配不包含A-R和T-Z的一个字母开头，紧跟ed的行。 
\(..\) 匹配子串，保存匹配的字符，如s/\(love\)able/\1rs，loveable被替换成lovers。 
&amp; 保存搜索字符用来替换其他字符，如s/love/**&amp;**/，love这成**love**。
\&lt; 匹配单词的开始，如:/\ 匹配单词的结束，如/love\>/匹配包含以love结尾的单词的行。 
x\{m\} 重复字符x，m次，如：/0\{5\}/匹配包含5个0的行。 
x\{m,\} 重复字符x，至少m次，如：/0\{5,\}/匹配至少有5个0的行。
x\{m,n\} 重复字符x，至少m次，不多于n次，如：/0\{5,10\}/匹配5~10个0的行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.freesion.com/article/4929825348/" target="_blank" rel="noopener noreferrer">LINUX正则表达式：SED用法详解<ExternalLinkIcon/></a></li>
</ul>
<h1 id="磁盘" tabindex="-1"><a class="header-anchor" href="#磁盘" aria-hidden="true">#</a> 磁盘</h1>
<h2 id="df查看磁盘分区空间" tabindex="-1"><a class="header-anchor" href="#df查看磁盘分区空间" aria-hidden="true">#</a> df查看磁盘分区空间</h2>
<p>df 以磁盘分区为单位查看文件系统，可以获取硬盘被占用了多少空间，目前还剩下多少空间等信息。</p>
<p>例如，我们使用df -h命令来查看磁盘信息， -h 选项为根据大小适当显示：</p>
<p><img src="@source/docs/Engineering/coding/cs-courses/operating-system/linux/linux-command/pic/df.jpg" alt="df"></p>
<p>显示内容参数说明：</p>
<ul>
<li><strong>Filesystem</strong>：文件系统</li>
<li><strong>Size</strong>： 分区大小</li>
<li><strong>Used</strong>： 已使用容量</li>
<li><strong>Avail</strong>： 还可以使用的容量</li>
<li><strong>Use%</strong>： 已用百分比</li>
<li><strong>Mounted on</strong>： 挂载点</li>
</ul>
<p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/w3cnote/linux-view-disk-space.html" target="_blank" rel="noopener noreferrer">Linux 查看磁盘空间<ExternalLinkIcon/></a></li>
</ul>
<h2 id="du查看当前目录的总大小" tabindex="-1"><a class="header-anchor" href="#du查看当前目录的总大小" aria-hidden="true">#</a> du查看当前目录的总大小</h2>
<p><strong>du</strong> 的英文原义为 <strong>disk usage</strong>，含义为显示磁盘空间的使用情况，用于查看当前目录的总大小。</p>
<p>例如查看当前目录的大小：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># du -sh</span>
605M    <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看当前目录中一级目录的大小</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># du -sh *</span>
26G	anaconda3
517M	Anaconda3-2019.07-Linux-x86_64.sh
28G	<span class="token function">crontab</span>
<span class="token number">0</span>	fan.ze
308G	han.xu
130G	han.zefeng
324G	huang.dachun
575G	jiao.wei
101G	li.renjie
223G	li.sizhen
348G	liu.xingchen
<span class="token number">0</span>	li.yaozong
334G	lu.wei
46G	ma.jintao
107G	shi.hongye
420G	wang.yuan
316G	wu.baoxin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示指定文件所占空间：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># du log2012.log </span>
<span class="token number">300</span>     log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方便阅读的格式显示test目录所占空间情况：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># du -h test</span>
608K    test/test6
308K    test/test4
<span class="token number">4</span>.0K    test/scf/lib
<span class="token number">4</span>.0K    test/scf/service/deploy/product
<span class="token number">4</span>.0K    test/scf/service/deploy/info
12K     test/scf/service/deploy
16K     test/scf/service
<span class="token number">4</span>.0K    test/scf/doc
<span class="token number">4</span>.0K    test/scf/bin
32K     test/scf
<span class="token number">8</span>.0K    test/test3
<span class="token number">1</span>.3M    <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>du 命令用于查看当前目录的总大小：</p>
<ul>
<li>-s：对每个Names参数只给出占用的数据块总数。</li>
<li>-a：递归地显示指定目录中各文件及子目录中各文件占用的数据块数。若既不指定-s，也不指定-a，则只显示Names中的每一个目录及其中的各子目录所占的磁盘块数。</li>
<li>-b：以字节为单位列出磁盘空间使用情况（系统默认以k字节为单位）。</li>
<li>-k：以1024字节为单位列出磁盘空间使用情况。</li>
<li>-c：最后再加上一个总计（系统默认设置）。</li>
<li>-l：计算所有的文件大小，对硬链接文件，则计算多次。</li>
<li>-x：跳过在不同文件系统上的目录不予统计。</li>
<li>-h：以K，M，G为单位，提高信息的可读性。</li>
</ul>
<p><strong><code v-pre>du -h --max-depth=1</code>查看子文件夹大小</strong></p>
<p>实际上就是超过指定层数（1层）的目录后，予以忽略。</p>
<p>也可以用<code v-pre>du -sh *</code></p>
<p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/w3cnote/linux-view-disk-space.html" target="_blank" rel="noopener noreferrer">Linux 查看磁盘空间<ExternalLinkIcon/></a></li>
</ul>
<h2 id="ln软链接" tabindex="-1"><a class="header-anchor" href="#ln软链接" aria-hidden="true">#</a> ln软链接</h2>
<p>它的功能是为某一个文件在另外一个位置建立一个同步的链接。</p>
<p>当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在其它的目录下用ln命令链接（link）它就可以，不必重复的占用磁盘空间。</p>
<p>比如，<code v-pre>/mnt/disk4/</code>的空间特别大，而当前文件夹所在的磁盘空间不足，但是还想把文件放在当前文件夹下，那就可以建一个软连接，看起来是把文件放在当前文件夹的<code v-pre>data</code>目录下了，其实文件是存放在<code v-pre>/mnt/disk4/data/user/</code>中的。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /mnt/disk4/data/user/ data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-ln.html" target="_blank" rel="noopener noreferrer">Linux ln命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="mount硬盘或u盘挂载" tabindex="-1"><a class="header-anchor" href="#mount硬盘或u盘挂载" aria-hidden="true">#</a> mount硬盘或U盘挂载</h2>
<p>挂载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sda1 /mnt/mymount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 通过设备名卸载</span>
<span class="token function">umount</span> <span class="token parameter variable">-v</span> /dev/sda1  <span class="token comment"># /dev/sda1 umounted  </span>
<span class="token comment"># 通过挂载点卸载</span>
<span class="token function">umount</span> <span class="token parameter variable">-v</span> /mnt/mymount/  <span class="token comment"># /tmp/diskboot.img umounted </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/qq_42014600/article/details/90404249" target="_blank" rel="noopener noreferrer">mount,umount命令详解<ExternalLinkIcon/></a></li>
</ul>
<h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1>
<p>权限简介：</p>
<p>Linux系统上对文件的权限有着严格的控制，用于如果相对某个文件执行某种操作，必须具有对应的权限方可执行成功。这也是Linux有别于Windows的机制，也是基于这个权限机智，Linux可以有效防止病毒自我运行，因为运行的条件是必须要有运行的权限，而这个权限在Linux是用户所赋予的。</p>
<p>Linux的文件权限有以下设定：</p>
<ul>
<li>Linux下文件的权限类型一般包括读，写，执行。对应字母为 r、w、x。</li>
<li>Linux下权限的粒度有 拥有者(<strong>U</strong>ser)、群组(<strong>G</strong>roup)、其它以外的人(<strong>O</strong>thers)三种(这三种均为所有人<strong>A</strong>ll)。每个文件都可以针对三个粒度，设置不同的rwx(读写执行)权限。</li>
<li>通常情况下，一个文件只能归属于一个用户和组， 如果其它的用户想有这个文件的权限，则可以将该用户加入具备权限的群组，一个用户可以同时归属于多个组。</li>
</ul>
<h2 id="chmod更改文件权限" tabindex="-1"><a class="header-anchor" href="#chmod更改文件权限" aria-hidden="true">#</a> chmod更改文件权限</h2>
<p>Linux上通常使用chmod命令对文件的权限进行设置和更改。</p>
<p>使用格式</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token punctuation">[</span>可选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>mode<span class="token operator">></span> <span class="token operator">&lt;</span>file<span class="token punctuation">..</span>.<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>参数说明：
 
<span class="token punctuation">[</span>可选项<span class="token punctuation">]</span>
  -c, <span class="token parameter variable">--changes</span>          like verbose but report only when a change is made <span class="token punctuation">(</span>若该档案权限确实已经更改，才显示其更改动作<span class="token punctuation">)</span>
  -f, --silent, <span class="token parameter variable">--quiet</span>  suppress <span class="token function">most</span> error messages  （若该档案权限无法被更改也不要显示错误讯息）
  -v, <span class="token parameter variable">--verbose</span>          output a diagnostic <span class="token keyword">for</span> every <span class="token function">file</span> processed（显示权限变更的详细资料）
       --no-preserve-root  <span class="token keyword">do</span> not treat <span class="token string">'/'</span> specially <span class="token punctuation">(</span>the default<span class="token punctuation">)</span>
       --preserve-root    fail to operate recursively on <span class="token string">'/'</span>
       <span class="token parameter variable">--reference</span><span class="token operator">=</span>RFILE  use RFILE's mode instead of MODE values
  -R, <span class="token parameter variable">--recursive</span>        change files and directories recursively （以递归的方式对目前目录下的所有档案与子目录进行相同的权限变更<span class="token punctuation">)</span>
       <span class="token parameter variable">--help</span>		显示此帮助信息
       <span class="token parameter variable">--version</span>		显示版本信息
<span class="token punctuation">[</span>mode<span class="token punctuation">]</span> 
    权限设定字串，详细格式如下 ：
    <span class="token punctuation">[</span>ugoa<span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">[</span>rwxX<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>，
    其中
    <span class="token punctuation">[</span>ugoa<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
    u 表示该档案的拥有者，g 表示与该档案的拥有者属于同一个群体<span class="token punctuation">(</span>group<span class="token punctuation">)</span>者，o 表示其他以外的人，a 表示所有（包含上面三者）。
    <span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span>
    + 表示增加权限，- 表示取消权限，<span class="token operator">=</span> 表示唯一设定权限。
    <span class="token punctuation">[</span>rwxX<span class="token punctuation">]</span>
    r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该档案是个子目录或者该档案已经被设定过为可执行。
 	
<span class="token punctuation">[</span>file<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
    文件列表（单个或者多个文件、文件夹）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>范例：</p>
<p>设置所有用户可读取文件 a.conf</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> ugo+r a.conf
或 
<span class="token function">chmod</span> a+r  a.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 c.sh 只有 拥有者可以读写及执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> u+rwx c.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置文件 a.conf 与 b.xml 权限为拥有者与其所属同一个群组 可读写，其它组可读不可写</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> a+r,ug+w,o-w a.conf b.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置当前目录下的所有档案与子目录皆设为任何人可读写</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> a+rw *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>数字权限使用格式：</strong></p>
<p>在这种使用方式中，首先我们需要了解数字如何表示权限。 首先，我们规定 数字 4 、2 和 1表示读、写、执行权限（具体原因可见下节权限详解内容），即<strong>r=4，w=2，x=1</strong>。此时其他的权限组合也可以用其他的八进制数字表示出来，</p>
<p>如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>rwx <span class="token operator">=</span> <span class="token number">4</span> + <span class="token number">2</span> + <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">7</span>
rw <span class="token operator">=</span> <span class="token number">4</span> + <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">6</span>
rx <span class="token operator">=</span> <span class="token number">4</span> +1 <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即</p>
<ul>
<li>
<p>若要同时设置 rwx (可读写运行） 权限则将该权限位 设置 为 4 + 2 + 1 = 7</p>
</li>
<li>
<p>若要同时设置 rw- （可读写不可运行）权限则将该权限位 设置 为 4 + 2 = 6</p>
</li>
<li>
<p>若要同时设置 r-x （可读可运行不可写）权限则将该权限位 设置 为 4 +1 = 5</p>
</li>
</ul>
<p>由上可以得出，每个属组的所有的权限都可以用一位八进制数表示，每个数字都代表了不同的权限（权值）。如 最高的权限为是7，代表可读，可写，可执行。</p>
<p>故如果我们将每个属组的权限都用八进制数表示，则文件的权限可以表示为三位八进制数</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>-rw------- <span class="token operator">=</span>  <span class="token number">600</span>
-rw-rw-rw- <span class="token operator">=</span>  <span class="token number">666</span>
<span class="token parameter variable">-rwxrwxrwx</span> <span class="token operator">=</span>  <span class="token number">777</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们提到，每个文件都可以针对三个粒度，设置不同的rwx(读写执行)权限。即我们可以用用三个8进制数字分别表示 拥有者 、群组 、其它组( u、 g 、o)的权限详情，并用chmod直接加三个8进制数字的方式直接改变文件权限。语法格式为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token operator">&lt;</span>abc<span class="token operator">></span> file<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中</p>
<blockquote>
<p>a,b,c各为一个数字，分别代表User、Group、及Other的权限。</p>
<p>相当于简化版的</p>
<p>chmod u=权限, g=权限, o=权限 file...</p>
<p>而此处的权限将用8进制的数字来表示User、Group、及Other的读、写、执行权限</p>
</blockquote>
<p>范例：</p>
<ul>
<li>设置所有人可以读写及执行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> <span class="token function">file</span>  
<span class="token comment"># 等价于  chmod u=rwx,g=rwx,o=rwx file 或  chmod a=rwx file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置拥有者可读写，其他人不可读写执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> <span class="token function">file</span>
<span class="token comment"># 等价于  chmod u=rw,g=---,o=--- file 或 chmod u=rw,go-rwx file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/u013197629/article/details/73608613" target="_blank" rel="noopener noreferrer">Linux权限详解（chmod、600、644、666、700、711、755、777、4755、6755、7755）<ExternalLinkIcon/></a></li>
</ul>
<h2 id="chown更改文件拥有者" tabindex="-1"><a class="header-anchor" href="#chown更改文件拥有者" aria-hidden="true">#</a> chown更改文件拥有者</h2>
<p>linux/Unix 是多人多工作业系统，每个的文件都有拥有者（所有者），如果我们想变更文件的拥有者（利用 chown 将文件拥有者加以改变），<strong>一般只有系统管理员(root)拥有此操作权限</strong>，而普通用户则没有权限将自己或者别人的文件的拥有者设置为别人。</p>
<p>范例：</p>
<p>设置文件 d.key、e.scrt的拥有者设为 users 群体的 tom</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chown</span> tom:users <span class="token function">file</span> d.key e.scrt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置当前目录下与子目录下的所有文件的拥有者为 users 群体的 James</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> James:users  *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/u013197629/article/details/73608613" target="_blank" rel="noopener noreferrer">Linux权限详解（chmod、600、644、666、700、711、755、777、4755、6755、7755）<ExternalLinkIcon/></a></li>
</ul>
<h1 id="终端-后台" tabindex="-1"><a class="header-anchor" href="#终端-后台" aria-hidden="true">#</a> 终端/后台</h1>
<h2 id="nohup后台运行" tabindex="-1"><a class="header-anchor" href="#nohup后台运行" aria-hidden="true">#</a> nohup后台运行</h2>
<p>后台运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nohup</span> python <span class="token parameter variable">-u</span> xxx.py <span class="token operator"><span class="token file-descriptor important">1</span>></span>./log.txt <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>python需要加-u，这样才会使得所有输出到输出到log里。</p>
<h2 id="screen会话窗口保留" tabindex="-1"><a class="header-anchor" href="#screen会话窗口保留" aria-hidden="true">#</a> screen会话窗口保留</h2>
<p>在VPS中执行一些非常耗时的任务时（如下载，压缩，解压缩，编译，安装等），我们通常是单独开一个远程终端窗口来执行这个任务，且在任务执行过程中不能关闭这个窗口或者中断连接，否则正在执行的任务会被终止掉。而有了screen，我们可以在一个窗口中安装程序，然后在另一个窗口中下载文件，再在第三个窗口中编译程序，只需要一个SSH连接就可以同时执行这三个任务，还可以方便的在不同会话或窗口中切换，即使因为意外导致窗口关闭或者连接中断，也不会影响这三个任务的执行。</p>
<p>screen的说明相当复杂，反正我是看得头晕了。但事实上，我们只需要掌握下面五个命令就足够我们使用了：</p>
<ul>
<li>创建一个名为test1的会话</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-S</span> test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>进入test1后输入下面的命令，退出test1会话，但会话中的任务会继续执行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-d</span>
or
press Ctrl-A 和 D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>列出所有会话</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>恢复名为test1的会话</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">screen</span> <span class="token parameter variable">-r</span> test1
or
<span class="token function">screen</span> <span class="token parameter variable">-r</span> pid<span class="token punctuation">(</span>number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>退出并彻底关闭当前窗口，会话中的任务也会被关闭</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">exit</span>
or
Ctrl+D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://linux.cn/article-8215-1.html" target="_blank" rel="noopener noreferrer">screen 命令使用及示例<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/haydenwang8287/article/details/1753883" target="_blank" rel="noopener noreferrer">linux文件权限查看及修改-chmod ------入门的一些常识<ExternalLinkIcon/></a></li>
</ul>
<h1 id="过滤-参数" tabindex="-1"><a class="header-anchor" href="#过滤-参数" aria-hidden="true">#</a> 过滤/参数</h1>
<h2 id="grep关键字查找" tabindex="-1"><a class="header-anchor" href="#grep关键字查找" aria-hidden="true">#</a> grep关键字查找</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从文件abc.txt中查找含有xxx字符串的行</span>
<span class="token function">grep</span> <span class="token string">"xxx"</span> abc.txt
<span class="token comment"># 去掉含有xxx的行，例如xxx是异常信息，训练数据中可去除</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">"xxx"</span> abc.txt
hadoop fs <span class="token parameter variable">-text</span> hdfs://x/* <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> INFO  <span class="token operator">></span> ./abc.txt
<span class="token comment"># 只保留xxx字符，即便某一行有多个xxx字符，这n个xxx字符会变为n行单个xxx</span>
<span class="token comment"># 下列语句用于计算xxx在文本中出现的次数</span>
<span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">"xxx"</span> abc.txt <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 过滤掉含有INFO关键字的行</span>
hadoop fs <span class="token parameter variable">-text</span> hdfs://nameservice3/user/abc/* <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> INFO  <span class="token operator">></span> ./a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xargs管道传参" tabindex="-1"><a class="header-anchor" href="#xargs管道传参" aria-hidden="true">#</a> xargs管道传参</h2>
<p>xargs 是一个强有力的命令，它能够捕获一个命令的输出，然后传递给另外一个命令。</p>
<p>之所以能用到这个命令，关键是由于很多命令不支持|管道来传递参数，而日常工作中有有这个必要，所以就有了 xargs 命令。</p>
<p>xargs 一般是和管道一起使用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill含有down的前5条任务</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> down<span class="token operator">|</span> <span class="token function">head</span> -5<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
<span class="token comment"># 展示含有down的前5条任务</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> down<span class="token operator">|</span> <span class="token function">head</span> -5<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h1>
<h2 id="crontab定时运行" tabindex="-1"><a class="header-anchor" href="#crontab定时运行" aria-hidden="true">#</a> crontab定时运行</h2>
<p>Linux crontab是用来定期执行程序的命令。</p>
<p>当安装完成操作系统之后，默认便会启动此任务调度命令。</p>
<p>crond命令每分锺会定期检查是否有要执行的工作，如果有要执行的工作便会自动执行该工作。</p>
<p>而linux任务调度的工作主要分为以下两类：</p>
<ul>
<li>1、系统执行的工作：系统周期性所要执行的工作，如备份系统数据、清理缓存</li>
<li>2、个人执行的工作：某个用户定期要做的工作，例如每隔10分钟检查邮件服务器是否有新信，这些工作可由每个用户自行设置</li>
</ul>
<p><strong>语法</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">crontab</span> <span class="token punctuation">[</span> <span class="token parameter variable">-u</span> user <span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token parameter variable">-e</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明：</strong></p>
<p>crontab 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。</p>
<p>-u user 是指设定指定 user 的时程表，这个前提是你必须要有其权限(比如说是 root)才能够指定他人的时程表。如果不使用 -u user 的话，就是表示设定自己的时程表。</p>
<p><strong>参数说明</strong>：</p>
<ul>
<li>-e : 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，如果你想用别的文字编辑器，则请先设定 VISUAL 环境变数来指定使用那个文字编辑器(比如说 setenv VISUAL joe)</li>
<li>-r : 删除目前的时程表</li>
<li>-l : 列出目前的时程表</li>
</ul>
<p>时程表的格式如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>f1 f2 f3 f4 f5 program
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>其中 f1 是表示分钟，f2 表示小时，f3 表示一个月份中的第几日，f4 表示月份，f5 表示一个星期中的第几天。program 表示要执行的程序。</li>
<li>当 f1 为 * 时表示每分钟都要执行 program，f2 为 * 时表示每小时都要执行程序，其余类推</li>
<li>当 f1 为 a-b 时表示从第 a 分钟到第 b 分钟这段时间内要执行，f2 为 a-b 时表示从第 a 到第 b 小时都要执行，其余类推</li>
<li>当 f1 为 */n 时表示每 n 分钟个时间间隔执行一次，f2 为 */n 表示每 n 小时个时间间隔执行一次，其余类推</li>
<li>当 f1 为 a, b, c,... 时表示第 a, b, c,... 分钟要执行，f2 为 a, b, c,... 时表示第 a, b, c...个小时要执行，其余类推</li>
</ul>
<p><strong>另一种语法</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">crontab</span> <span class="token punctuation">[</span> <span class="token parameter variable">-u</span> user <span class="token punctuation">]</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用者也可以将所有的设定先存放在文件中，用 crontab file 的方式来设定时程表。</p>
<p>举例：</p>
<ul>
<li>
<p>每月每天每小时的第 0 分钟执行一次 /bin/ls</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">0</span> * * * * /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在 12 月内, 每天的早上 6 点到 12 点，每隔 3 个小时 0 分钟执行一次 /usr/bin/backup</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">0</span> <span class="token number">6</span>-12/3 * <span class="token number">12</span> * /usr/bin/backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>周一到周五每天下午 5:00 寄一封信给 alex@domain.name</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">0</span> <span class="token number">17</span> * * <span class="token number">1</span>-5 mail <span class="token parameter variable">-s</span> <span class="token string">"hi"</span> alex@domain.name <span class="token operator">&lt;</span> /tmp/maildata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>每月每天的午夜 0 点 20 分, 2 点 20 分, 4 点 20 分....执行 echo &quot;haha&quot;</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">20</span> <span class="token number">0</span>-23/2 * * * <span class="token builtin class-name">echo</span> <span class="token string">"haha"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>**注意：**当程序在你所指定的时间执行后，系统会寄一封信给你，显示该程序执行的内容，若是你不希望收到这样的信，请在每一行空一格之后加上<code v-pre>&gt; /dev/null 2&gt;&amp;1</code>即可。</p>
<p><strong>查看log</strong>：</p>
<p>crontab的运行记录在/var/log/cron-201xxxxx中，直接vim打开这个文件，或者可以用tail -f /var/log/cron.log观察。</p>
<p>参考资料：</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-comm-crontab.html" target="_blank" rel="noopener noreferrer">Linux crontab命令<ExternalLinkIcon/></a></li>
</ul>
<h2 id="ll-proc-pid查看pid信息" tabindex="-1"><a class="header-anchor" href="#ll-proc-pid查看pid信息" aria-hidden="true">#</a> ll /proc/pid查看pid信息</h2>
<p>通过<code v-pre>top</code>命令查看当前占用cpu资源的任务，然后找到该任务的pid，用<code v-pre>ll /proc/pid</code>进行查看，就可以找到该任务的信息，就能知道是谁在运行，是哪个程序运行的。</p>
<h1 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h1>
<h2 id="set出错就停止" tabindex="-1"><a class="header-anchor" href="#set出错就停止" aria-hidden="true">#</a> set出错就停止</h2>
<ul>
<li>
<p>set -e</p>
<p>设置该选项后，当脚本中任何以一个命令执行返回的状态码不为0时就退出整个脚本（默认脚本运行中某行报错会继续往下执行），这样就不必设置很多的判断条件去判断每个命令是否执行成功，特别那些依赖很强的地方，脚本任何一处执行报错就不应继续执行其他语句的时候就特别有用，之前写的一些像LAMP的安装脚本就深有体会。。。</p>
</li>
<li>
<p>set +e</p>
<p>执行的时候如果出现了返回值为非零将会继续执行下面的脚本</p>
</li>
<li>
<p>set -u</p>
<p>设置该选项后，当脚本在执行过程中尝试使用未定义过的变量时，报错并退出运行整个脚本（默认会把该变量的值当作空来处理），这个感觉也非常有用，有些时候可能在脚本中变量很多很长，疏忽了把某个变量的名字写错了，这时候运行脚本不会报任何错误，但结果却不是你想要的，排查起来很是头疼，使用这个选项就完美的解决了这个问题。</p>
</li>
</ul>
<p>注意：</p>
<ol>
<li>作用范围只限于脚本执行的当前进行，不作用于其创建的子进程。</li>
<li>另外，当想根据命令执行的返回值，输出对应的log时，最好不要采用set -e选项，而是通过配合exit 命令来达到输出log并退出执行的目的。</li>
</ol>
<h1 id="系统环境" tabindex="-1"><a class="header-anchor" href="#系统环境" aria-hidden="true">#</a> 系统环境</h1>
<h2 id="source点命令" tabindex="-1"><a class="header-anchor" href="#source点命令" aria-hidden="true">#</a> source点命令</h2>
<p>以一个脚本为参数，该脚本将作为当前shell的环境执行，即不会启动一个新的子进程。所有在脚本中设置的变量将成为当前Shell的一部分。</p>
<h1 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h1>
<h2 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> kill</h2>
<p>一般使用kill -9直接彻底杀死进程</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> pidname
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ps联合kill杀死进程（如杀死含有pidname的进程）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> lstm <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sudo</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="用户创建与删除" tabindex="-1"><a class="header-anchor" href="#用户创建与删除" aria-hidden="true">#</a> 用户创建与删除</h1>
<h2 id="adduser创建用户" tabindex="-1"><a class="header-anchor" href="#adduser创建用户" aria-hidden="true">#</a> adduser创建用户</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> adduser luwei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有些发行版在创建用户的同时，会要求你设定用户密码。</p>
<h2 id="userdel删除用户" tabindex="-1"><a class="header-anchor" href="#userdel删除用户" aria-hidden="true">#</a> userdel删除用户</h2>
<p>删除用户，“userdel 用户名”即可。最好将它留在系统上的文件也删除掉，可以使用“userdel -r 用户名”来实现。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">-r</span> luwei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


