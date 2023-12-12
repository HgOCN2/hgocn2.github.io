<template><div><h1 id="qmake生成makefile" tabindex="-1"><a class="header-anchor" href="#qmake生成makefile" aria-hidden="true">#</a> QMake生成Makefile</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/compiler-principles/compiler-principles.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="通过qmake生成makefile文件" tabindex="-1"><a class="header-anchor" href="#通过qmake生成makefile文件" aria-hidden="true">#</a> 通过qmake生成Makefile文件</h1>
<p>这是在linux系统下生成的，windows系统下还没尝试过。</p>
<p>假设已知有如下文件和文件夹</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>│ ------main.cpp
└─mymath
  ------mycpp.h
  ------mymath.cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了一个子文件夹<code v-pre>mymath</code>和三个程序文件以外，没有其他任何文件，即没有QT使用的<code v-pre>.pro</code>项目文件。</p>
<p>其中，<code v-pre>main.cpp</code>中内容为：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"mymath.h"</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello World!\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>mycpp.h</code>内容为：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>mycpp.cpp</code>内容为：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"mymath.h"</span></span>

<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"c = %d\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在生成Makefile文件，需要两步：</p>
<p>（1）生成<code v-pre>.pro</code>项目文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>qmake <span class="token parameter variable">-project</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先你要找到qmake命令所在的路径，在<code v-pre>/home/xxx/Qt5.0.0/5.0.0/gcc_64/bin/</code>中，需要你添加这个路径。</p>
<p>注意，<strong>需要打开生成的<code v-pre>.pro</code>项目文件，在里面加上<code v-pre>CONFIG -= qt</code></strong>，这是因为生成的是非QT的C++项目，加上这个等效于你创建项目时选择非QT的C++项目（创建非QT的C++项目，其<code v-pre>.pro</code>项目文件里就有这句话），不然，下一步生成的Makefile文件中会有依赖QT相关的库，不仅多余，还会大概率报错，因为你可能没配置相关库的路径。</p>
<p>（2）生成Makefile文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>qmake <span class="token parameter variable">-o</span> Makefile hello.pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就生成了Makefile文件，和<code v-pre>.pro</code>项目文件在同一个目录下。</p>
<p>还可以加上(yejun)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>qmake -o Makefile hello.pro -spec linux-g++ CONFIG+=qtquickcompiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者(zhengen)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>qmake -spec linux-g++-64 -o Makefile hello.pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.95pm.com/index.php/post/130811.html" target="_blank" rel="noopener noreferrer">Qt环境设置及使用<ExternalLinkIcon/></a></li>
</ul>
<p>完成Qt应用程序的编写后，需要进行编译和运行。以下是一个简单的编译和运行步骤：1. 打开命令提示符，进入Qt应用程序所在的目录。2. 输入命令“qmake -project”生成项目文件。3. 输入命令“qmake”生成Makefile文件。4. 输入命令“make”进行编译。5. 输入命令“.\应用程序名称.exe”运行应用程序。</p>
<ul>
<li><a href="http://www.taodudu.cc/news/show-369459.html" target="_blank" rel="noopener noreferrer">Linux 用qmake快速生成makefile<ExternalLinkIcon/></a></li>
</ul>
<p>Makefile可以像这样由&quot;.pro&quot;文件生成：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>qmake <span class="token parameter variable">-o</span> Makefile hello.pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在你的目录下已经产生了一个 Makefile 文件，输入&quot;make&quot; 指令就可以开始编译 hello.c 成执行文件，执行 ./hello 和 world 打声招呼吧！打开这个Makefile文件看看，是不是很专业啊！</p>
</div></template>


