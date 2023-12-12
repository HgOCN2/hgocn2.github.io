<template><div><h1 id="输入-输出重定向" tabindex="-1"><a class="header-anchor" href="#输入-输出重定向" aria-hidden="true">#</a> 输入/输出重定向</h1>
<ul>
<li><RouterLink to="/docs/coding/cs-courses/operating-system/linux/shell/shell.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%87%8D%E5%AE%9A%E5%90%91">重定向</a>
<ul>
<li><a href="#%E8%BE%93%E5%87%BA%E9%87%8D%E5%AE%9A%E5%90%91">输出重定向</a></li>
<li><a href="#%E8%BE%93%E5%85%A5%E9%87%8D%E5%AE%9A%E5%90%91">输入重定向</a></li>
<li><a href="#%E5%90%8C%E6%97%B6%E6%9B%BF%E6%8D%A2%E8%BE%93%E5%85%A5%E5%92%8C%E8%BE%93%E5%87%BA">同时替换输入和输出</a></li>
</ul>
</li>
<li><a href="#%E9%87%8D%E5%AE%9A%E5%90%91%E6%B7%B1%E5%85%A5%E8%AE%B2%E8%A7%A3">重定向深入讲解</a></li>
<li>[/dev/null 文件](#/dev/null 文件)</li>
</ul>
<p>大多数 UNIX 系统命令从你的终端接受输入并将所产生的输出发送回到您的终端。一个命令通常从一个叫标准输入的地方读取输入，默认情况下，这恰好是你的终端。同样，一个命令通常将其输出写入到标准输出，默认情况下，这也是你的终端。</p>
<p>重定向命令列表如下：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>command &gt; file</td>
<td>将输出重定向到 file。</td>
</tr>
<tr>
<td>command &lt; file</td>
<td>将输入重定向到 file。</td>
</tr>
<tr>
<td>command &gt;&gt; file</td>
<td>将输出以追加的方式重定向到 file。</td>
</tr>
<tr>
<td>n &gt; file</td>
<td>将文件描述符为 n 的文件重定向到 file。</td>
</tr>
<tr>
<td>n &gt;&gt; file</td>
<td>将文件描述符为 n 的文件以追加的方式重定向到 file。</td>
</tr>
<tr>
<td>n &gt;&amp; m</td>
<td>将输出文件 m 和 n 合并。</td>
</tr>
<tr>
<td>n &lt;&amp; m</td>
<td>将输入文件 m 和 n 合并。</td>
</tr>
<tr>
<td>&lt;&lt; tag</td>
<td>将开始标记 tag 和结束标记 tag 之间的内容作为输入。</td>
</tr>
</tbody>
</table>
<blockquote>
<p>需要注意的是文件描述符 0 通常是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR）。</p>
</blockquote>
<h1 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h1>
<h2 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h2>
<p>重定向一般通过在命令间插入特定的符号来实现。特别的，这些符号的语法如下所示:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>command1 <span class="token operator">></span> file1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个命令执行command1然后将输出的内容存入file1，而不会在终端输出信息。</p>
<p>注意：<strong>任何file1内的已经存在的内容将被新内容替代</strong>。如果要将新内容添加在文件末尾，请使用&gt;&gt;操作符。</p>
<h2 id="输入重定向" tabindex="-1"><a class="header-anchor" href="#输入重定向" aria-hidden="true">#</a> 输入重定向</h2>
<p>和输出重定向一样，Unix 命令也可以从文件获取输入，语法为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>command1 <span class="token operator">&lt;</span> file1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，本来需要从键盘获取输入的命令会转移到文件读取内容。</p>
<p>注意：输出重定向是大于号(&gt;)，输入重定向是小于号(&lt;)。</p>
<h2 id="同时替换输入和输出" tabindex="-1"><a class="header-anchor" href="#同时替换输入和输出" aria-hidden="true">#</a> 同时替换输入和输出</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>command1 <span class="token operator">&lt;</span> infile <span class="token operator">></span> outfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时替换输入和输出，执行command1，从文件infile读取内容，然后将输出写入到outfile中。</p>
<h1 id="重定向深入讲解" tabindex="-1"><a class="header-anchor" href="#重定向深入讲解" aria-hidden="true">#</a> 重定向深入讲解</h1>
<p>一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：</p>
<ul>
<li>标准<strong>输入</strong>文件(stdin)：stdin的文件描述符为<strong>0</strong>，Unix程序默认从stdin读取数据。</li>
<li>标准<strong>输出</strong>文件(stdout)：stdout 的文件描述符为<strong>1</strong>，Unix程序默认向stdout输出数据。</li>
<li>标准<strong>错误</strong>文件(stderr)：stderr的文件描述符为<strong>2</strong>，Unix程序会向stderr流中写入错误信息。</li>
</ul>
<p>默认情况下，command &gt; file 将 stdout 重定向到 file，command &lt; file 将stdin 重定向到 file。</p>
<p>如果希望 stderr 重定向到 file，可以这样写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token number">2</span> <span class="token operator">></span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果希望 stderr 追加到 file 文件末尾，可以这样写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token number">2</span> <span class="token operator">>></span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2</strong> 表示标准错误文件(stderr)。</p>
<p>如果希望将 stdout 和 stderr 合并后重定向到 file，可以这样写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span> <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
或者
<span class="token builtin class-name">command</span> <span class="token operator">>></span> <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望对 stdin 和 stdout 都重定向，可以这样写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&lt;</span> file1 <span class="token operator">></span>file2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>command 命令将 stdin 重定向到 file1，将 stdout 重定向到 file2。</p>
<h1 id="dev-null-文件" tabindex="-1"><a class="header-anchor" href="#dev-null-文件" aria-hidden="true">#</a> /dev/null 文件</h1>
<p>如果希望执行某个命令，但又不希望在屏幕上显示输出结果，也不想输入到其他文件中，那么可以将输出重定向到 /dev/null：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到&quot;禁止输出&quot;的效果。</p>
<p>如果希望屏蔽 stdout 和 stderr，可以这样写：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>**注意：**0 是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR）。</p>
</blockquote>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.runoob.com/linux/linux-shell-io-redirections.html" target="_blank" rel="noopener noreferrer">Shell 输入/输出重定向<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考此资料。</p>
</div></template>


