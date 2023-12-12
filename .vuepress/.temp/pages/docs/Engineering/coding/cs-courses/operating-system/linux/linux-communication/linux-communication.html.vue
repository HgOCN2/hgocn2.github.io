<template><div><h1 id="linux通信" tabindex="-1"><a class="header-anchor" href="#linux通信" aria-hidden="true">#</a> Linux通信</h1>
<ul>
<li>
<p><RouterLink to="/docs/Engineering/coding/cs-courses/operating-system/linux/linux.html">返回上层目录</RouterLink></p>
</li>
<li>
<p><a href="#%E4%B8%B2%E5%8F%A3%E9%80%9A%E4%BF%A1">串口通信</a></p>
</li>
<li>
<p><a href="#ftp%E4%BC%A0%E8%BE%93">tfp传输</a></p>
</li>
</ul>
<h1 id="串口通信" tabindex="-1"><a class="header-anchor" href="#串口通信" aria-hidden="true">#</a> 串口通信</h1>
<p>场景：linux板子和电脑通过串口连接。</p>
<p>串口线：如果电脑是笔记本，则一般没有串口，需要串口转USB，建议使用FT232串口转USB线，需要下载驱动。</p>
<p>串口软件选择：</p>
<p>这里建议选择<code v-pre>MobaXterm</code>作为串口的传输工具。如果不想用这个，或者不方便安装这个，可以用下面的：</p>
<ul>
<li>
<p>对于xp系统，选择自带的超级终端（但不建议用超级终端，比较古老，优点是随机自带），超级终端在附件-&gt;通讯里可以找到。</p>
</li>
<li>
<p>对于win7-win10系统，选择下载<code v-pre>Putty</code>软件。如下图打开后，会弹出命令行显示窗口。</p>
</li>
</ul>
<p><img src="@source/docs/Engineering/coding/cs-courses/operating-system/linux/linux-communication/pic/putty.jpg" alt="putty"></p>
<h1 id="ftp传输" tabindex="-1"><a class="header-anchor" href="#ftp传输" aria-hidden="true">#</a> ftp传输</h1>
<p>假设我们要把一个linux板子通过网线直接插在win10电脑上，然后通过ftp互相传输文件。</p>
<p>（1）通过串口连接linux板子</p>
<p>具体方法见对应章节。</p>
<p>（2）接上网线保证能ping通</p>
<p>连接好网线，在win10的命令行窗口中输入<code v-pre>ipconfig -all</code>找到本机ip，比如<code v-pre>192.168.10.111</code>。</p>
<p>然后在</p>
<p>通过<code v-pre>ifconfig -a</code>来</p>
<p>（3）ftp传输</p>
<h1 id="网线传输" tabindex="-1"><a class="header-anchor" href="#网线传输" aria-hidden="true">#</a> 网线传输</h1>
<p>连接串口</p>
<p>连接网线</p>
<p>设置共享</p>
<p>查看IP：WLAN是192.168.200.168</p>
<p>以太网2是 192.168.137.1</p>
<p>然后通过串口通信来设置linux板子的IP：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ifconfig eth0 192.168.137.11
route add default gw 192.168.137.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里参考<a href="https://blog.csdn.net/qq_28090573/article/details/82714028" target="_blank" rel="noopener noreferrer">Linux下用ifconfig命令设置IP、掩码、网关<ExternalLinkIcon/></a></p>
<p>然后在板子上ping主机的WLAN网口：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ping 192.168.200.168
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是通的</p>
<p>再ping百度的网址：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ping www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是通的，说明板子的DNS是好的，不好的话就修改DNS为<code v-pre>114.114.114.114</code>。</p>
<p>然后更新sources.list</p>
<p>然后就运行<code v-pre>apt-get update</code>，如果在这个过程中，你不小心ctrl+c中断了，再次运行<code v-pre>apt-get update</code>的时候就会出现</p>
<blockquote>
<p>正在等待报头”（Eg. waiting for headers）</p>
</blockquote>
<p>的报错，那就执行下面的命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> clean
<span class="token builtin class-name">cd</span> /var/lib/apt
<span class="token function">sudo</span> <span class="token function">mv</span> lists lists.old
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> lists/partial
<span class="token function">sudo</span> <span class="token function">apt-get</span> clean
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里参考<a href="https://blog.csdn.net/liuci3234/article/details/80683706" target="_blank" rel="noopener noreferrer">sudo apt-get 正在等待报头<ExternalLinkIcon/></a>。</p>
</div></template>


