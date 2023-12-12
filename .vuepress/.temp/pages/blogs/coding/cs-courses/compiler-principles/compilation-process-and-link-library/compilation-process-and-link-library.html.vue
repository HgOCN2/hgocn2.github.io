<template><div><h1 id="编译过程、静态库和动态库" tabindex="-1"><a class="header-anchor" href="#编译过程、静态库和动态库" aria-hidden="true">#</a> 编译过程、静态库和动态库</h1>
<ul>
<li><RouterLink to="/blogs/coding/cs-courses/compiler-principles/compiler-principles.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B">编译过程</a>
<ul>
<li><a href="#%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B%EF%BC%88%E9%A2%84%E5%A4%84%E7%90%86%E3%80%81%E7%BC%96%E8%AF%91%E3%80%81%E6%B1%87%E7%BC%96%E5%92%8C%E9%93%BE%E6%8E%A5%EF%BC%89%E4%BB%8B%E7%BB%8D">编译过程（预处理、编译、汇编和链接）介绍</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B%E4%BE%8B%E5%AD%90">编译过程例子</a></li>
</ul>
</li>
<li><a href="#%E9%9D%99%E6%80%81%E5%BA%93%E5%92%8C%E5%8A%A8%E6%80%81%E5%BA%93">静态库和动态库</a>
<ul>
<li><a href="#%E9%9D%99%E6%80%81%E5%BA%93">静态库</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E5%BA%93">动态库</a></li>
</ul>
</li>
</ul>
<p>注：这篇文章只是简单了解下GCC编译器的编译过程和制作静态库、动态库的流程和方法，更具体的详见编译原理部分的GCC编译器教程。</p>
<h1 id="编译过程" tabindex="-1"><a class="header-anchor" href="#编译过程" aria-hidden="true">#</a> 编译过程</h1>
<h2 id="编译过程-预处理、编译、汇编和链接-介绍" tabindex="-1"><a class="header-anchor" href="#编译过程-预处理、编译、汇编和链接-介绍" aria-hidden="true">#</a> 编译过程（预处理、编译、汇编和链接）介绍</h2>
<p>C语言的编译过程一般认为分为4个步骤：预处理、编译、汇编和链接。</p>
<p><img src="@source/blogs/coding/cs-courses/compiler-principles/compilation-process-and-link-library/pic/compilation-process.png" alt="compilation-process"></p>
<ul>
<li>
<p><strong>预处理</strong><code v-pre>.i</code>：预处理，生成<code v-pre>.i</code>的文件 [<em>预处理器cpp</em>]</p>
<p>主要是进行文本替换，处理在源代码文件中以“#”开始的预编译指令，如宏展开、处理条件编译指令、处理#include指令（C程序的头文件编译进来，把<code v-pre>include&lt;&gt;</code>中的头文件插入到当前<code v-pre>.c</code>程序文本中）等。预处理之后，得到的文件名习惯上以<code v-pre>.i</code>结尾。</p>
<p>命令：<code v-pre>gcc -E main.c -o main.i</code>，必须加<code v-pre>-o</code>，不然只会输出到终端。</p>
<p>作用：将<code v-pre>main.c</code>预处理输出<code v-pre>main.i</code></p>
</li>
<li>
<p><strong>编译</strong><code v-pre>.s</code>：将预处理后的文件转换成汇编语言，生成文件<code v-pre>.s</code> [<em>编译器egcs</em>]</p>
<p>这个阶段编译器主要做词法分析、语法分析、语义分析等，在检查无错误后后，把预处理之后的<code v-pre>.i</code>代码翻译成汇编语言，通常以<code v-pre>.s</code>结尾。可用gcc的参数<code v-pre>-S</code>来参看。</p>
<p>编译器(ccl)将文本文件<code v-pre>main.i</code>翻译成文本文件<code v-pre>main.s</code>，它包含一个汇编语言程序。汇编语言程序中的每条语句都以一种标准的文本格式描述了一条低级机器语言指令。</p>
<p>命令：<code v-pre>gcc -S main.i -o main.s</code>，也可以不加<code v-pre>-o</code>，直接<code v-pre>gcc -S main.i</code>，默认输出<code v-pre>main.s</code>。</p>
<p>作用：将预处理输出文件<code v-pre>main.i</code>汇编成<code v-pre>main.s</code>文件</p>
</li>
<li>
<p><strong>汇编</strong><code v-pre>.o</code>：由汇编变为目标代码(机器代码)生成<code v-pre>.o</code>(obj)的文件 [<em>汇编器as</em>]</p>
<p>将编译阶段生成的<code v-pre>.s</code>文件转换为二进制目标代码（机器语言），称为以<code v-pre>.o</code>结尾的目标对象，此时已经是01形式的二进制文件了，不再是文本文件。编译过程就是把预处理完的文件进行一系列词法分析、语法分析、语义分析以及优化后生成相应的汇编代码文件。</p>
<p>可用gcc的参数<code v-pre>-c</code>来参看。汇编器(as)将main.s翻译成机器语言指令，把这些指令打包成可重定位目标程序的格式，并将结果保存在目标文件<code v-pre>main.o</code>中。<code v-pre>main.o</code>文件是一个二进制文件，它的字节编码是机器语言。</p>
<p>命令1：<code v-pre>gcc -c main.s -o main.o</code>，也可以不加<code v-pre>-o</code>，直接<code v-pre>gcc -c main.s</code>，默认输出<code v-pre>main.o</code>。</p>
<p>作用：作用：将汇编输出文件<code v-pre>main.s</code>汇编输出<code v-pre>main.o</code>文件</p>
<p>命令2：<code v-pre>gcc -c main.c -o main.o</code>，也可以不加<code v-pre>-o</code>，直接<code v-pre>gcc -c main.s</code>，默认输出<code v-pre>main.o</code>。</p>
<p>作用：从源码<code v-pre>main.c</code>直接进行预处理编译汇编输出<code v-pre>main.o</code>文件</p>
</li>
<li>
<p><strong>链接</strong>：把obj文件链接为可执行的文件，生成可执行程序 [<em>链接器ld</em>]</p>
<p><code v-pre>.o</code>的目标对象并不是可以执行的，还需要把所需要的其他目标对象链接在一起。比如你编译了一个<code v-pre>main.o</code>的目标对象，但是其中用到了<code v-pre>printf</code>函数，那么就需要将该<code v-pre>main.o</code>的目标对象，和另一个<code v-pre>printf.o</code>的目标对象链接起来，这样才能实现一个真正可执行的程序。</p>
<p>链接器(ld)负责<code v-pre>.o</code>文件的并入。结果就是<code v-pre>main</code>文件，它是一个可执行的目标文件，可以加载到存储器后由系统调用。</p>
<p>链接将二进制文件链接成一个可执行的命令，主要是把分散的数据和代码收集并合成一个单一的可加载并可执行的的文件。链接可以发生在代码静态编译、程序被加载时以及程序执行时。<strong>链接过程的主要工作是符号解析和重定位</strong>。</p>
<p>命令：<code v-pre>gcc main.o -o main</code>，也可以不加<code v-pre>-o</code>，直接<code v-pre>gcc main.o</code>，默认输出<code v-pre>a.out</code>。</p>
</li>
</ul>
<p>即：代码<code v-pre>main.c</code>(文本) =&gt; 预处理<code v-pre>main.i</code>(文本) =&gt; 编译<code v-pre>main.s</code>（汇编）=&gt; 链接<code v-pre>main.o</code>(二进制机器码) =&gt; 可执行程序<code v-pre>main.exe</code>或<code v-pre>main</code>。</p>
<p><img src="@source/blogs/coding/cs-courses/compiler-principles/compilation-process-and-link-library/pic/compilation-process.png" alt="compilation-process"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-E</span> main.c <span class="token parameter variable">-o</span> main.i  <span class="token comment"># 预处理</span>
gcc <span class="token parameter variable">-S</span> main.i <span class="token parameter variable">-o</span> main.s  <span class="token comment"># 编译</span>
gcc <span class="token parameter variable">-c</span> main.s <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 汇编 或 gcc -c main.c -o main.o</span>
gcc main.o <span class="token parameter variable">-o</span> hello      <span class="token comment"># 链接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译过程例子" tabindex="-1"><a class="header-anchor" href="#编译过程例子" aria-hidden="true">#</a> 编译过程例子</h2>
<p>用main函数调用<code v-pre>myadd</code>函数计算<code v-pre>10+12=22</code>。</p>
<h3 id="定义add-c函数源码" tabindex="-1"><a class="header-anchor" href="#定义add-c函数源码" aria-hidden="true">#</a> 定义add.c函数源码</h3>
<p>假设现在有一个<code v-pre>add.c</code>的源文件，里面包含一个<code v-pre>myadd()</code>的函数，如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>int myadd(int a, int b) {
    int c = a + b;
    return c;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-c编译为add-o二进制机器码" tabindex="-1"><a class="header-anchor" href="#add-c编译为add-o二进制机器码" aria-hidden="true">#</a> add.c编译为add.o二进制机器码</h3>
<p>首先我们将该<code v-pre>add.c</code>文件直接编译成目标对象文件<code v-pre>add.o</code>，以备后用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-c</span> add.c 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>gcc知识：</p>
<p><code v-pre>gcc -c</code>是指只激活预处理，编译和汇编，也就是它只把程序做成obj文件（<code v-pre>.o</code>二进制文件）。</p>
<p>例子用法：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc -c main.c  // 预处理，编译，汇编
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将生成<code v-pre>.o</code>的obj文件。</p>
<p>经测试，等价于</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc -E main.c -o main.i  // 预处理
gcc -S main.i -o main.s  // 编译
gcc -c main.s -o main.o  // 汇编
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="定义add-h头文件" tabindex="-1"><a class="header-anchor" href="#定义add-h头文件" aria-hidden="true">#</a> 定义add.h头文件</h3>
<p>当然，还要有一个该文件的文件头<code v-pre>add.h</code></p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>int myadd(int a, int b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="定义并逐步编译main函数" tabindex="-1"><a class="header-anchor" href="#定义并逐步编译main函数" aria-hidden="true">#</a> 定义并逐步编译main函数</h3>
<h4 id="定义main并调用myadd函数" tabindex="-1"><a class="header-anchor" href="#定义main并调用myadd函数" aria-hidden="true">#</a> 定义main并调用myadd函数</h4>
<p>如果我们在下面的源代码<code v-pre>main.c</code>中调用<code v-pre>add.c</code>文件中的<code v-pre>myadd()</code>函数</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;stdio.h&gt;
#include &quot;add.h&quot;
int main()
{
    int x = 12;
    int y = 10;
    int z = myadd(x,y);
    printf(&quot;x + y = %d\n&quot;,z);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="main-c预处理为main-i-文本" tabindex="-1"><a class="header-anchor" href="#main-c预处理为main-i-文本" aria-hidden="true">#</a> main.c预处理为main.i（文本）</h4>
<p>下面我们来逐步进行编译，首先是<strong>预处理</strong>，将<code v-pre>main.c</code>添加头文件扩充为<code v-pre>main.i</code>（会删除注释）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-E</span> main.c <span class="token parameter variable">-o</span> main.i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>gcc知识：</p>
<p><code v-pre>gcc -E</code>编译器将C程序的头文件编译进来，还有宏的替换。</p>
<p>只激活预处理,这个不生成文件, 你需要把它重定向到一个输出文件里面。</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc -E main.c &gt; pianoapan.txt 
gcc -E main.c | more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，预处理器的输出会被导入到标准输出流（也就是显示器），可以利用<code v-pre>-o</code>(输出output的意思)选项把它导入到某个输出文件：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc -E main.c -o main.i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>查看<code v-pre>main.i</code>文件可看到多了很多行代码，其中很多一部分是因为我们<code v-pre>include &lt;stdio.h&gt;</code>中的内容，而我们自己写的<code v-pre>add.h</code>也通过文本替换进行了预处理：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>...
# 2 &quot;main.c&quot; 2
# 1 &quot;add.h&quot; 1
int myadd(int a, int b); 
# 3 &quot;main.c&quot; 2 // 为什么.i里还有#开头的？

int main()
{
    int x = 12;
    int y = 10;
    int z = myadd(x,y);
    printf(&quot;x + y = %d\n&quot;,z);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="main-i编译为main-s-汇编语言" tabindex="-1"><a class="header-anchor" href="#main-i编译为main-s-汇编语言" aria-hidden="true">#</a> main.i编译为main.s（汇编语言）</h4>
<p>然后是编译，将预处理之后的<code v-pre>main.i</code>翻译成<code v-pre>main.s</code>的汇编语言：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-S</span> main.i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到的汇编语言如下（省略部分内容）：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>        .file   &quot;main.c&quot;
...
        movl    -4(%rbp), %eax
        movl    %edx, %esi
        movl    %eax, %edi
        call    myadd
...
        .ident  &quot;GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-39)&quot;
        .section        .note.GNU-stack,&quot;&quot;,@progbits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="main-s翻译为main-o-二进制机器码" tabindex="-1"><a class="header-anchor" href="#main-s翻译为main-o-二进制机器码" aria-hidden="true">#</a> main.s翻译为main.o（二进制机器码）</h4>
<p>然后是编译，将汇编语言翻译成机器码，生成<code v-pre>main.o</code>的目标对象。</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc -c main.s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的目标对象并不是一个可执行的对象，我们可以使用<code v-pre>nm</code>命令来查看二进制文件中的函数。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nm main.o
<span class="token comment"># 0000000000000000 T main</span>
<span class="token comment">#                 U myadd</span>
<span class="token comment">#                 U printf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这儿的<code v-pre>myadd</code>和<code v-pre>printf</code>都是<code v-pre>U</code>，即表示未定义。所以这也是为什么要进行链接的原因。</p>
<h4 id="main-c编译为main-可执行文件" tabindex="-1"><a class="header-anchor" href="#main-c编译为main-可执行文件" aria-hidden="true">#</a> main.c编译为main（可执行文件）</h4>
<p>我们尝试执行下面的代码，直接从源文件，编译成最后的可执行文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc main.c <span class="token parameter variable">-o</span> main
<span class="token comment"># /tmp/ccl95whV.o: In function `main':</span>
<span class="token comment"># main.c:(.text+0x21): undefined reference to `myadd'</span>
<span class="token comment"># collect2: error: ld returned 1 exit status</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会出现错误提示，因为我们前面提到了，<code v-pre>myadd</code>是一个未定义的对象。但是为什么没有提示<code v-pre>printf</code>错误呢？<code v-pre>printf</code>也是一个未定义的对象啊！</p>
<p>其实，gcc编译器在编译的时候会在系统默认路径下寻找相应的目标对象，而<code v-pre>printf</code>是C语言标准库中的函数，所以不用我们指定目标对象，gcc便能够找到相应的函数。但是，<code v-pre>myadd</code>，是我们在当前路径下自定义的一个函数，gcc不会在当前路径下寻找对应的目标对象，所以我们上述的编译过程就出现了无法找到<code v-pre>myadd</code>的错误。</p>
<p>为了解决上述问题，我们在编译的时候需要指定<code v-pre>myadd</code>函数所在的目标对象，即<code v-pre>add.o</code>。如果你想看一下链接到的C语言标准库，可以使用<code v-pre>-Wl,--trace</code>参数：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc main.c add.o <span class="token parameter variable">-o</span> main -Wl,--trace
<span class="token comment"># /usr/bin/ld: mode elf_x86_64</span>
<span class="token comment"># /usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/Scrt1.o</span>
<span class="token comment"># /usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/crti.o</span>
<span class="token comment"># /usr/lib/gcc/x86_64-linux-gnu/7/crtbeginS.o</span>
<span class="token comment"># /tmp/ccYnhbxa.o</span>
<span class="token comment"># add.o</span>
<span class="token comment"># libgcc_s.so.1 (/usr/lib/gcc/x86_64-linux-gnu/7/libgcc_s.so.1)</span>
<span class="token comment"># /lib/x86_64-linux-gnu/libc.so.6</span>
<span class="token comment"># (/usr/lib/x86_64-linux-gnu/libc_nonshared.a)elf-init.oS</span>
<span class="token comment"># /lib/x86_64-linux-gnu/ld-linux-x86-64.so.2</span>
<span class="token comment"># /lib/x86_64-linux-gnu/ld-linux-x86-64.so.2</span>
<span class="token comment"># libgcc_s.so.1 (/usr/lib/gcc/x86_64-linux-gnu/7/libgcc_s.so.1)</span>
<span class="token comment"># /usr/lib/gcc/x86_64-linux-gnu/7/crtendS.o</span>
<span class="token comment"># /usr/lib/gcc/x86_64-linux-gnu/7/../../../x86_64-linux-gnu/crtn.o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这儿， <code v-pre>printf</code>链接到了<code v-pre>/lib/x86_64-linux-gnu/libc.so.6</code>动态库中。而<code v-pre>myadd</code>链接了<code v-pre>add.o</code>目标对象中。</p>
<p>这时，再执行编译后的程序，就完全没有问题了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./main
<span class="token comment"># x + y = 22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="静态库和动态库" tabindex="-1"><a class="header-anchor" href="#静态库和动态库" aria-hidden="true">#</a> 静态库和动态库</h1>
<p>你可能还会留意到一个问题，为什么在上面链接过程中，一个是<code v-pre>.o</code>的目标对象，而另一个是<code v-pre>.so.6</code>的文件？这就涉及到C语言函数库库的两种形式。</p>
<p>函数库一般分为<code v-pre>静态库</code>和<code v-pre>动态库</code>两种，所谓静态、动态是指链接过程。</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">静态库</th>
<th style="text-align:center">动态库</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Windows</td>
<td style="text-align:center">.lib</td>
<td style="text-align:center">.dll</td>
</tr>
<tr>
<td style="text-align:center">Linux</td>
<td style="text-align:center">.a</td>
<td style="text-align:center">.so</td>
</tr>
</tbody>
</table>
<p><strong>静态库</strong>是指编译链接时，把库文件的代码全部加入到可执行文件中，因此生成的文件比较大，但在运行时也就不再需要库文件了。其后缀名一般为<code v-pre>.a</code>。</p>
<p><strong>动态库</strong>与之相反，在编译链接时并没有把库文件的代码加入到可执行文件中，而是在程序执行时由运行时链接文件加载库，这样可以节省系统的开销。动态库一般后缀名为<code v-pre>.so</code>，如前面所述的<code v-pre>libc.so.6</code>就是动态库。gcc在编译时默认使用动态库。</p>
<p><strong>什么是库？</strong></p>
<p>库是一组目标文件的包，就是**一些最常用的代码编译成目标文件后打包存放。**而最常见的库就是运行时库（Runtime Library）,如C运行库CRT。</p>
<h2 id="静态库" tabindex="-1"><a class="header-anchor" href="#静态库" aria-hidden="true">#</a> 静态库</h2>
<p>制作静态库比较简单，使用<code v-pre>ar</code>命令直接生成就可以了。比如，我们把上面<code v-pre>add.o</code>的目标对象转换成一个静态库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># # 其实add.o后面还能跟多个.o文件，类似zip压缩包的感觉</span>
ar <span class="token parameter variable">-rv</span> libadd.a add.o  <span class="token comment"># 将目标文件add.o打包成静态库文件add.a，可以同时打包多个</span>
<span class="token comment"># ar: creating libadd.a</span>
<span class="token comment"># a - add.o</span>
<span class="token comment"># a - xxx.o add.o后面所跟的多个.o文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>习惯上，静态库以<code v-pre>.a</code>为文件名结尾。</p>
<p>然后我们将此静态库链接到之前的<code v-pre>main.c</code>源代码中：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>gcc main.c libadd.a -o main_static
./main_static
# x + y = 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时生成的可执行。如果将<code v-pre>libadd.a</code>的静态库删除，那么main_static仍然可以执行。</p>
<h2 id="动态库" tabindex="-1"><a class="header-anchor" href="#动态库" aria-hidden="true">#</a> 动态库</h2>
<p>动态库在链接的时候并没有将代码拷贝到最终生成的可执行程序中，而是在执行的时候才去加载。动态库的使用很广泛，但是制作一个动态库要比静态库麻烦一些。</p>
<p>不同的操作系统中，我们习惯上使用不同的后缀名，在Linux上，动态库通常是<code v-pre>.so</code>结尾，在OSX上，通常是<code v-pre>.dylib</code>结尾，而在Windows上，通常是<code v-pre>.dll</code>结尾。</p>
<p>与静态库不同的是，不需要打包工具（ar、lib.exe），直接使用gcc/g++编译器 即可创建动态库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 其实add.o后面还能跟多个.o文件，类似zip压缩包的感觉</span>
gcc <span class="token parameter variable">-shared</span> <span class="token parameter variable">-fpic</span> add.c <span class="token parameter variable">-o</span> libadd.so
<span class="token comment"># 或</span>
gcc <span class="token parameter variable">-shared</span> <span class="token parameter variable">-fpic</span> add.o <span class="token parameter variable">-o</span> libadd.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code v-pre>-shared</code>即表示创建一个动态库，<code v-pre>-fpic</code> (position-independent code)将绝对地址转换成相对地址，这样不同的程序可以在不同的虚拟地址中加载该动态库。</p>
<p>我们将上述动态库<code v-pre>libadd.so</code>链接到我们的<code v-pre>main.c</code>的程序中，</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc main.c libadd.so <span class="token parameter variable">-o</span> main_dyn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者可以通过指定动态库名和路径来链接，如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc main.c <span class="token parameter variable">-L</span> /home/xxx <span class="token parameter variable">-l</span> <span class="token function">add</span> <span class="token parameter variable">-o</span> main_dyn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这儿<code v-pre>-L</code>用来指定动态库所在的路径，<code v-pre>-l</code>用来指定库名称，注意这个库名称是<code v-pre>libadd.so</code>去掉前缀<code v-pre>lib</code>和后缀<code v-pre>.so</code>之后的名称。上述两种方法编译后的可执行程序是完全一样的。</p>
<p>此时我们运行上述在动态库上建立的可执行程序，如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./main_dyn 
<span class="token comment">#  ./main_dyn: error while loading shared libraries: libadd.so: cannot open shared object file: No such file or directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时居然提示<strong>错误</strong>，说找不到<code v-pre>libadd.so</code>的动态库！</p>
<p>这就是动态库和静态库的区别，静态库编译完成之后，完全不依赖于静态库，即便删除了静态库，程序仍然可以正确执行，但是动态库不一样，<strong>编译好的程序的运行需要依赖于外部动态库的存在</strong>。程序在运行时会按照一定的顺序寻找所需要的动态库，比如<code v-pre>RPATH</code>，<code v-pre>LD_LIBRARY_PATH</code>, <code v-pre>/etc/ld.so.conf</code>, <code v-pre>/lib/</code>, <code v-pre>/usr/lib/</code>等，如果在这些路径中没有找到所需动态库，那么就出出现上述错误提示。</p>
<p>因为我们自定义的<code v-pre>libadd.so</code>动态库并不在上述路径中，所以我们必须给链接器指定其所在的路径。一种方法是，我们可以把<code v-pre>libadd.so</code>所在的路径添加到链接路径<code v-pre>LD_LIBRARY_PATH</code>中，然后再运行程序，就不会出现错误了。如下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">${LD_LIBRARY_PATH}</span>:/home/xxx
./main_dyn
<span class="token comment"># x + y = 22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方法是在我们链接的时候，使用<code v-pre>RPATH</code>，即“runtime library path”，该路径会保存在最后生成的可执行程序中，在程序运行中，会按照该路径寻找相应的动态库。如下，使用<code v-pre>-Wl,-rpath</code>来指定该路径。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc main.c -Wl,-rpath<span class="token operator">=</span>./ libadd.so <span class="token parameter variable">-o</span> main_dyn1
<span class="token comment"># 或者</span>
gcc main.c -Wl,-rpath<span class="token operator">=</span>./ <span class="token parameter variable">-L</span> ./ <span class="token parameter variable">-l</span> <span class="token function">add</span> <span class="token parameter variable">-o</span> main_dyn1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们比较一下加入了RPATH的可执行程序main_dyn1和没有加入该路径的main_dyn两个程序的链接情况，如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ldd main_dyn
	<span class="token comment"># linux-vdso.so.1 (0x00007ffc9e1db000)</span>
	<span class="token comment"># libadd.so => not found</span>
	<span class="token comment"># libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f748a028000)</span>
	<span class="token comment"># /lib64/ld-linux-x86-64.so.2 (0x00007f748a61b000)</span>

ldd main_dyn1
	<span class="token comment"># linux-vdso.so.1 (0x00007ffce21da000)</span>
	<span class="token comment"># libadd.so => ./libadd.so (0x00007f216990e000)</span>
	<span class="token comment"># libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f216951d000)</span>
	<span class="token comment"># /lib64/ld-linux-x86-64.so.2 (0x00007f2169d12000)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到加入<code v-pre>RPATH</code>的<code v-pre>main_dyn1</code>程序已经可以成功连接到<code v-pre>libadd.so</code>动态库上了，而另一个则仍然提示没有找到对应的动态库。</p>
<p>和静态库相比，整个程序的运行完全依赖于动态库，所以如果你把动态库删除，上述程序仍然会提示错误。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> libadd.so libadd.so1
./main_dyn1
<span class="token comment"># ./main_dyn1: error while loading shared libraries: libadd.so: cannot open shared object file: No such file or directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上，动态库相比于静态库，主要的难点就是如何在程序执行过程中顺利找到外部所依赖的动态库。而动态库的优点是能都很大程度上减少程序的大小。比如我们可以比较一下上述静态库链接的可执行程序<code v-pre>main_static</code>和动态库链接的可执行程序<code v-pre>main_dyn</code>的大小。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> main_*
-rwxrwxr-x <span class="token number">1</span> xxx xxx <span class="token number">8328</span> Oct  <span class="token number">7</span> 04:56 main_dyn
-rwxrwxr-x <span class="token number">1</span> xxx xxx <span class="token number">8328</span> Oct  <span class="token number">7</span> 04:54 main_dyn1
-rwxrwxr-x <span class="token number">1</span> xxx xxx <span class="token number">8360</span> Oct  <span class="token number">6</span> 01:34 main_static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态库链接的程序比动态库链接的程序大了32B。当然，此处它们相差不是太大，主要是我们的库文件很简单，如果是一个很大很长的库文件，那么静态库链接的程序可能会比动态库的大很多。</p>
<p>此外，动态库还能够更有效的利用内存。如果对库文件进行修改，我们也不需要重新编译程序。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/363672984" target="_blank" rel="noopener noreferrer">编译过程、静态库和动态库 -知乎<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考此知乎博客。</p>
<p>===</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/fsdad/article/details/115632555" target="_blank" rel="noopener noreferrer">关于__declspec(dllimport)的理解<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/xuleisdjn/article/details/52594092" target="_blank" rel="noopener noreferrer">__declspec(dllimport)<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>讲了<code v-pre>__declspec(dllimport)</code>存在的必要性。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/130871341?utm_id=0" target="_blank" rel="noopener noreferrer">有关动态链接库的知识<ExternalLinkIcon/></a></li>
</ul>
<p>讲了<code v-pre>__decpspec(dllimport)</code>对函数调用的影响，使用<code v-pre>__declspec(dllimport)</code>导入数据。</p>
<ul>
<li><a href="https://blog.csdn.net/nyist_yangguang/article/details/121766408" target="_blank" rel="noopener noreferrer">【笔记】GCC/G++ 、动态库与静态库：动态库 执行速度慢和依赖性强，但升级简单、节省内存（牺牲了时间效率换取了空间效率）；静态库 浪费空间和更新困难，但执行速度快（牺牲了空间效率，换取了时间效率<ExternalLinkIcon/></a></li>
</ul>
<p>显式调用动态链接库的具体实现过程。</p>
<ul>
<li>[<a href="https://www.cnblogs.com/ziyunlong/p/6023121.html" target="_blank" rel="noopener noreferrer">Linux的.a、.so和.o文件<ExternalLinkIcon/></a>](https://www.cnblogs.com/ziyunlong/p/6023121.html)</li>
</ul>
<p>在说明Linux的.a、.so和.o文件关系之前，先来看看windows下obj,lib,dll,exe的关系</p>
<p>这一篇估计不错，有空好好看下。</p>
</div></template>


