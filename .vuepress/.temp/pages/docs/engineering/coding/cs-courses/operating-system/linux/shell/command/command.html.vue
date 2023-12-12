<template><div><h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/cs-courses/operating-system/linux/shell/shell.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="比较命令" tabindex="-1"><a class="header-anchor" href="#比较命令" aria-hidden="true">#</a> 比较命令</h1>
<h2 id="数值比较" tabindex="-1"><a class="header-anchor" href="#数值比较" aria-hidden="true">#</a> 数值比较</h2>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>num1 -eq num2</td>
<td>等于</td>
<td>[ 3 -eq $mynum ]</td>
</tr>
<tr>
<td>num1 -ne num2</td>
<td>不等于</td>
<td>[ 3 -ne $mynum ]</td>
</tr>
<tr>
<td>num1 -lt num2</td>
<td>小于</td>
<td>[ 3 -lt $mynum ]</td>
</tr>
<tr>
<td>num1 -le num2</td>
<td>小于或等于</td>
<td>[ 3 -le $mynum ]</td>
</tr>
<tr>
<td>num1 -gt num2</td>
<td>大于</td>
<td>[ 3 -gt $mynum ]</td>
</tr>
<tr>
<td>num1 -ge num2</td>
<td>大于或等于</td>
<td>[ 3 -ge $mynum ]</td>
</tr>
</tbody>
</table>
<h2 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h2>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>-z string</td>
<td>如果 string 长度为零，则为真</td>
<td>[ -z &quot;$myvar&quot; ]</td>
</tr>
<tr>
<td>-n string</td>
<td>如果 string 长度非零，则为真</td>
<td>[ -n &quot;$myvar&quot; ]</td>
</tr>
<tr>
<td>string1 = string2</td>
<td>如果 string1 与 string2 相同，则为真</td>
<td>[ &quot;$myvar&quot; = &quot;one two three&quot; ]</td>
</tr>
<tr>
<td>string1 != string2</td>
<td>如果 string1 与 string2 不同，则为真</td>
<td>[ &quot;$myvar&quot; != &quot;one two three&quot; ]</td>
</tr>
</tbody>
</table>
<h2 id="文件比较" tabindex="-1"><a class="header-anchor" href="#文件比较" aria-hidden="true">#</a> 文件比较</h2>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>-e filename</td>
<td>如果 filename 存在，则为真</td>
<td>[ -e /var/log/syslog ]</td>
</tr>
<tr>
<td>-d filename</td>
<td>如果 filename 为目录，则为真</td>
<td>[ -d /tmp/mydir ]</td>
</tr>
<tr>
<td>-f filename</td>
<td>如果 filename 为常规文件，则为真</td>
<td>[ -f /usr/bin/grep ]</td>
</tr>
<tr>
<td>-L filename</td>
<td>如果 filename 为符号链接，则为真</td>
<td>[ -L /usr/bin/grep ]</td>
</tr>
<tr>
<td>-r filename</td>
<td>如果 filename 可读，则为真</td>
<td>[ -r /var/log/syslog ]</td>
</tr>
<tr>
<td>-w filename</td>
<td>如果 filename 可写，则为真</td>
<td>[ -w /var/mytmp.txt ]</td>
</tr>
<tr>
<td>-x filename</td>
<td>如果 filename 可执行，则为真</td>
<td>[ -L /usr/bin/grep ]</td>
</tr>
<tr>
<td>filename1 -nt filename2</td>
<td>如果 filename1 比 filename2 新，则为真</td>
<td>[ /tmp/install/etc/services -nt /etc/services ]</td>
</tr>
<tr>
<td>filename1 -ot filename2</td>
<td>如果 filename1 比 filename2 旧，则为真</td>
<td>[ /boot/bzImage -ot arch/i386/boot/bzImage ]</td>
</tr>
</tbody>
</table>
<h2 id="逻辑操作符" tabindex="-1"><a class="header-anchor" href="#逻辑操作符" aria-hidden="true">#</a> 逻辑操作符</h2>
<p>另外，Shell还提供了与( -a )、或( -o )、非( ! )三个逻辑操作符用于将测试条件连接起来，其优先级为：&quot;!&quot;最高，&quot;-a&quot;次之，&quot;-o&quot;最低。例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /bin
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-e</span> ./notFile <span class="token parameter variable">-o</span> <span class="token parameter variable">-e</span> ./bash
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'至少有一个文件存在!'</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'两个文件都不存在'</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="test命令" tabindex="-1"><a class="header-anchor" href="#test命令" aria-hidden="true">#</a> test命令</h1>
<p>Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。</p>
<p>分别举例如下：</p>
<ul>
<li>
<p>数值测试</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> $<span class="token punctuation">[</span>num1<span class="token punctuation">]</span> <span class="token parameter variable">-eq</span> $<span class="token punctuation">[</span>num2<span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'两个数相等！'</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'两个数不相等！'</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>两个数相等！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>字符串测试</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token string">"ru1noob"</span>
<span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token string">"runoob"</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token variable">$num1</span> <span class="token operator">=</span> <span class="token variable">$num2</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'两个字符串相等!'</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'两个字符串不相等!'</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>两个字符串不相等<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>文件测试</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /bin
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-e</span> ./bash
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'文件已存在!'</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'文件不存在!'</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>文件已存在<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="和-区别" tabindex="-1"><a class="header-anchor" href="#和-区别" aria-hidden="true">#</a> <code v-pre>[[]]</code>和<code v-pre>[ ]</code>区别</h2>
<p>学习shell的时候总是被shell里的条件判断方式搞得头疼，经常不知道改 用<code v-pre>[]</code>，<code v-pre>[[]]</code>，<code v-pre>(())</code>还是<code v-pre>test</code>，<code v-pre>let</code>，而很少有书把它们的关系讲解的很清楚(应该是我悟性差或是看书太少)，今天总结一下，基础的东西如它们 的使用方法不再赘述，重点说说它们的区别的使用时应该注意的地方。</p>
<ul>
<li>
<p><code v-pre>[]</code>和<code v-pre>test</code></p>
<p>先说**<code v-pre>[]</code>和<code v-pre>test</code>，两者是一样的**，在命令行里<code v-pre>test expr</code>和<code v-pre>[ expr ]</code>的效果相同。<code v-pre>test</code>的三个基本作用是判断文件、判断字符串、判断整数。支持使用与或非将表达式连接起来。要注意的有：</p>
<p><code v-pre>test</code>中可用的比较运算符只有==和!=，两者都是用于字符串比较的，不可用于整数比较，整数比较只能使用-eq, -gt这种形式。无论是字符串比较还是整数比较都千万不要使用大于号小于号。当然，如果你实在想用也是可以的，对于字符串比较可以使用尖括号的转义形式， 如果比较&quot;ab&quot;和&quot;bc&quot;：<code v-pre>[ ab \&lt; bc ]</code>，结果为真，也就是返回状态为0。</p>
</li>
<li>
<p><code v-pre>[[ ]]</code></p>
<p>然后是**<code v-pre>[[ ]]</code>，这是内置在shell中的一个命令**，它就比刚才说的<code v-pre>test</code>强大的多了。支持字符串的模式匹配（使用=~操作符时甚至支持shell的正则表达式）。简直强大的令人发指！逻辑组合可以不使用<code v-pre>test</code>的<code v-pre>-a</code>、<code v-pre>-o</code>而使用<code v-pre>&amp;&amp;</code>、<code v-pre>||</code>这样更亲切的形式(针对c、Java程序员)。当 然，也不用想的太复杂，基本只要记住</p>
<p>1、字符串比较时可以把右边的作为一个模式（这是右边的字符串不加双引号的情况下。如果右边的字符串加了双引号，则认为是一个文本字符串），而不仅仅是一个字符串，比如<code v-pre>[[ hello == hell? ]]</code>，结果为真。</p>
<p>2、使用<code v-pre>[]</code>和<code v-pre>[[]]</code>的时候不要吝啬空格，每一项两边都要有空格，<code v-pre>[[ 1 == 2 ]]</code>的结果为“假”，但<code v-pre>[[ 1==2 ]]</code>的结果为“真”！后一种显然是错的</p>
</li>
<li>
<p><code v-pre>let</code>和<code v-pre>(())</code></p>
<p>两者也是一样（或者说基本上是一样的，双括号比<code v-pre>let</code>稍弱一些）。主要进行算术运算（上面的两个都不行），也比较适合进 行整数比较，可以直接使用熟悉的&lt;,&gt;等比较运算符。可以直接使用变量名如var而不需要$var这样的形式。支持分号隔开的多个表达式</p>
</li>
</ul>
<p><strong><code v-pre>[[ ]]</code>和<code v-pre>[ ]</code>区别</strong></p>
<ul>
<li>
<p>首先，尽管很相似，但是从概念上讲，二者是不同层次的东西。</p>
<p><code v-pre>[[</code>是关键字，许多shell(如ash bsh)并不支持这种方式。ksh, bash（据说从2.02起引入对<code v-pre>[[</code>的支持）等支持。</p>
<p><code v-pre>[</code>是一条命令， 与<code v-pre>test</code>等价，大多数shell都支持。在现代的大多数sh实现中，<code v-pre>[</code>与<code v-pre>test</code>是内部(builtin)命令，换句话说执行<code v-pre>test</code>或<code v-pre>[</code>时不会调用/some/path/to/test这样的外部命令（如果有这样的命令的话）。</p>
</li>
<li>
<p><code v-pre>[[]]</code>结构比Bash版本的<code v-pre>[]</code>更通用。在<code v-pre>[[</code>和<code v-pre>]]</code>之间的所有的字符都不会被文件扩展或是标记分割，但是会有参数引用和命令替换。</p>
<p>用<code v-pre>[[ ... ]]</code>测试结构比用<code v-pre>[ ... ]</code>更能防止脚本里的许多逻辑错误。比如说，<code v-pre>&amp;&amp;</code>,<code v-pre>||</code>,<code v-pre>&lt;</code>和<code v-pre>&gt;</code>操作符能在一个<code v-pre>[[]]</code>测试里通过，但在<code v-pre>[]</code>结构会发生错误。</p>
</li>
<li>
<p><code v-pre>(( ))</code>结构扩展并计算一个算术表达式的值。如果表达式值为0，会返回1或假作为退出状态码。一个非零值的表达式返回一个0或真作为退出状态码。这个结构和先前<code v-pre>test</code>命令及<code v-pre>[]</code>结构的讨论刚好相反。</p>
</li>
<li>
<p><code v-pre>[ ]</code>为shell命令，所以在其中的表达式应是它的命令行参数，所以串比较操作符<code v-pre>&gt;</code> 与<code v-pre>&lt;</code>必须转义，否则就变成IO改向操作符了(请参看上面2中的例子)。在<code v-pre>[[</code>中<code v-pre>&lt;</code>与<code v-pre>&gt;</code>不需转义；
由于<code v-pre>[[</code>是关键字，不会做命令行扩展，因而相对的语法就稍严格些。例如
在<code v-pre>[ ]</code>中可以用引号括起操作符，因为在做命令行扩展时会去掉这些引号，而在<code v-pre>[[ ]]</code>则不允许这样做。</p>
</li>
<li>
<p><code v-pre>[[ ]]</code>进行算术扩展，而<code v-pre>[ ]</code>不做</p>
</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li>[shell中if条件字符串、数字比对，<a href="https://www.cnblogs.com/include/archive/2011/12/09/2307905.html" target="_blank" rel="noopener noreferrer">[ ]]和[ ]区别<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;比较命令&quot;参考此资料。</p>
<ul>
<li><a href="https://www.runoob.com/linux/linux-shell-test.html" target="_blank" rel="noopener noreferrer">Shell test 命令<ExternalLinkIcon/></a></li>
<li>[shell中if条件字符串、数字比对，<a href="https://www.cnblogs.com/include/archive/2011/12/09/2307905.html" target="_blank" rel="noopener noreferrer">[ ]]和[ ]区别<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;test命令&quot;参考此资料。</p>
</div></template>


