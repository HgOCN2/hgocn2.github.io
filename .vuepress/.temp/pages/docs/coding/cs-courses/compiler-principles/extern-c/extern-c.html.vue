<template><div><h1 id="关于extern-c" tabindex="-1"><a class="header-anchor" href="#关于extern-c" aria-hidden="true">#</a> 关于extern &quot;C&quot;</h1>
<ul>
<li><RouterLink to="/docs/coding/cs-courses/compiler-principles/compiler-principles.html">返回上层目录</RouterLink></li>
<li><a href="#gcc%E5%92%8Cg++%E7%9A%84%E5%8C%BA%E5%88%AB">gcc和g++的区别</a>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">基础知识</a></li>
<li><a href="#%E6%B5%8B%E8%AF%95">测试</a>
<ul>
<li><a href="#%E7%BC%96%E8%AF%91%E4%BD%BF%E7%94%A8g++%EF%BC%8C%E9%93%BE%E6%8E%A5%E4%BD%BF%E7%94%A8g++%EF%BC%8C%E6%88%90%E5%8A%9F">编译使用g++，链接使用g++，成功</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E4%BD%BF%E7%94%A8gcc%EF%BC%8C%E9%93%BE%E6%8E%A5%E4%BD%BF%E7%94%A8g++%EF%BC%8C%E6%88%90%E5%8A%9F">编译使用gcc，链接使用g++，成功</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E4%BD%BF%E7%94%A8g++%EF%BC%8C%E9%93%BE%E6%8E%A5%E4%BD%BF%E7%94%A8gcc%EF%BC%8C%E5%A4%B1%E8%B4%A5">编译使用g++，链接使用gcc，失败</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E4%BD%BF%E7%94%A8gcc/g++%EF%BC%8C%E9%93%BE%E6%8E%A5%E4%BD%BF%E7%94%A8gcc-lstdc++%EF%BC%8C%E6%88%90%E5%8A%9F">编译使用gcc/g++，链接使用gcc-lstdc++，成功</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#extern%22C%22">extern&quot;C&quot;</a>
<ul>
<li><a href="#C++%E5%BC%95%E7%94%A8C">C++引用C</a>
<ul>
<li><a href="#C++%E4%B8%8D%E5%8A%A0extern%22C%22%EF%BC%8C%E5%A4%B1%E8%B4%A5">C++不加extern“C”，失败</a></li>
<li><a href="#C++%E5%8A%A0%E4%B8%8Aextern%22C%22%EF%BC%8C%E6%88%90%E5%8A%9F">C++加上extern“C”，成功</a></li>
<li><a href="#%E4%B8%8D%E8%83%BD%E7%BB%99C%E5%87%BD%E6%95%B0%E6%9C%AC%E8%BA%AB%E5%8A%A0extern%22C%22,gcc%E4%B8%8D%E8%AF%86%E5%88%AB%E4%BC%9A%E6%8A%A5%E9%94%99">不能给C函数本身加extern&quot;C&quot;,gcc不识别会报错</a></li>
</ul>
</li>
<li><a href="#C%E5%BC%95%E7%94%A8C++">C引用C++</a>
<ul>
<li><a href="#C++%E4%B8%8D%E5%8A%A0extern%22C%22%EF%BC%8C%E5%A4%B1%E8%B4%A5">C++不加extern“C”，失败</a></li>
<li><a href="#C++%E5%8A%A0%E4%B8%8Aextern%22C%22%EF%BC%8C%E6%88%90%E5%8A%9F">C++加上extern“C”，成功</a></li>
<li><a href="#C++%E5%8A%A0%E4%B8%8Aextern%22C%22%E4%B8%94C++%E5%BC%95%E7%94%A8%E4%B8%8D%E5%B8%A6extern%E7%9A%84%E8%87%AA%E8%BA%AB%E5%A4%B4%E6%96%87%E4%BB%B6%EF%BC%8C%E5%A4%B1%E8%B4%A5">C++加上extern“C”且C++引用不带extern的自身头文件，失败</a></li>
<li><a href="#C%E7%A8%8B%E5%BA%8F%E5%8A%A0%E4%B8%8Aextern%22C%22%EF%BC%8C%E5%A4%B1%E8%B4%A5">C程序加上extern“C”，失败</a></li>
<li><a href="#C%E7%A8%8B%E5%BA%8F%E5%BC%95%E7%94%A8%E5%B8%A6#ifdef-C++%E4%B8%94%E5%B8%A6extern%E7%9A%84C++%E5%A4%B4%E6%96%87%E4%BB%B6%EF%BC%8C%E6%88%90%E5%8A%9F">C程序引用带#ifdef-C++且带extern的C++头文件，成功</a></li>
<li><a href="#C%E7%A8%8B%E5%BA%8F%E8%B0%83%E7%94%A8C++%E7%9A%84%E7%B1%BB%EF%BC%8C%E5%BE%85%E8%A1%A5%E5%85%85%EF%BC%8C%E6%9C%AA%E5%AE%8C%E6%88%90">C程序调用C++的类，待补充，未完成</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>一句话总结：</p>
<p>1、C++里如果某个函数提前声明了extern &quot;C&quot;,那该函数就会以C语言去编译，即函数名不变</p>
<p>2、C语言里禁止出现extern &quot;C&quot;,因为C语言编译器不认该关键字</p>
<h1 id="gcc和g-的区别" tabindex="-1"><a class="header-anchor" href="#gcc和g-的区别" aria-hidden="true">#</a> gcc和g++的区别</h1>
<p>一句话总结：</p>
<p>1、gcc和g++均能编译C语言和C++，区别是，gcc遇到.c按C语言编译，遇到.cpp按照C++编译，而g++不管遇到.c还是.cpp均按照C++编译</p>
<p>2、如果C++语言使用了自己的LIB库（如输入输出<iostream>），则gcc无法链接，必须要加<code v-pre>-lstdc++</code>才行，而g++可以链接C++的LIB库。</p>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<ul>
<li>GNU is a free operating system</li>
<li>GNU's not unix;递归：G means GNU,整句缩写也是GNU.</li>
<li>GCC(GNU编译器套件)：**GNU Compiler Collection。**可以编译C、C++、JAVA、Fortran、Pascal、Object-C、Ada等语言
<ul>
<li>gcc是GCC中的GNU C Compiler（<strong>C 编译器</strong>）</li>
<li>g++是GCC中的GNU C++ Compiler（<strong>C++编译器</strong>）</li>
</ul>
</li>
</ul>
<p>gcc既能编译C语言程序（后缀为.c识别为C语言程序，按照C语言来编译），也能编译C++程序（后缀为.cpp识别为C++程序，按照C++来编译），<strong>但无法链接C++的库</strong>，需手动添加<code v-pre>-lstdc++ -shared-libgcc</code>选项，表示gcc在编译C++程序时可以链接必要的C++标准库。</p>
<p>g++则无论是C语言程序（后缀为.c）还是C++程序（后缀为.cpp）均当做C++程序来编译。</p>
<p>更多关于gcc和g++的知识：</p>
<p><a href="https://blog.csdn.net/oqqHuTu12345678/article/details/125043255" target="_blank" rel="noopener noreferrer">GCC编译器——GCC编译器的简介<ExternalLinkIcon/></a></p>
<p><a href="http://c.biancheng.net/view/7936.html" target="_blank" rel="noopener noreferrer">gcc和g++是什么，有什么区别？<ExternalLinkIcon/></a></p>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.cpp/////
int add(int a, int b) {
	return a + b;
}

// /////main.cpp/////
#include &lt;stdio.h&gt;
#include &lt;iostream&gt;
using namespace std;

//extern &quot;C&quot; int add(int, int);
int add(int, int);

int main() {
	int a = 1, b = 2;
	int ret = add(a, b);
	printf(&quot;ret = %d\n&quot;, ret);
	cout &lt;&lt; &quot;ret = &quot; &lt;&lt; ret &lt;&lt; endl;
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译使用g-链接使用g-成功" tabindex="-1"><a class="header-anchor" href="#编译使用g-链接使用g-成功" aria-hidden="true">#</a> 编译使用g++，链接使用g++，成功</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.cpp</span>
g++ <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
g++ <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译使用gcc-链接使用g-成功" tabindex="-1"><a class="header-anchor" href="#编译使用gcc-链接使用g-成功" aria-hidden="true">#</a> 编译使用gcc，链接使用g++，成功</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.cpp</span>
gcc <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译使用g-链接使用gcc-失败" tabindex="-1"><a class="header-anchor" href="#编译使用g-链接使用gcc-失败" aria-hidden="true">#</a> 编译使用g++，链接使用gcc，失败</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.cpp</span>
g++ <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
g++ <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 失败！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误原因：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>main.o: In <span class="token keyword">function</span> <span class="token variable"><span class="token variable">`</span>main':
main.cpp:<span class="token punctuation">(</span>.text+0x48<span class="token punctuation">)</span>: undefined reference to <span class="token variable">`</span></span>std::cout<span class="token string">'
...
main.cpp:(.text+0x72): undefined reference to `std::ostream::operator&lt;&lt;(std::ostream&amp; (*)(std::ostream&amp;))'</span>
collect2: error: ld returned <span class="token number">1</span> <span class="token builtin class-name">exit</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思就是找不到头文件<code v-pre>#include &lt;iostream&gt;</code>的函数。</p>
<p>其根本原因就在于，main.cpp中使用了C++标准库 <code v-pre>&lt;iostream&gt;</code> 和提供的类对象，而C++和C文件中标准库STL文件的命名方式不同，gcc默认是无法找到它们的，所以在链接时会出错。</p>
<p>编译执行C++程序，使用gcc和g++也是有区别的。要知道，很多C++程序都会调用某些标准库中现有的函数或者类对象，而单纯的gcc指令是无法自动链接这些标准库文件的。如果想使用gcc指令来编译执行C++程序，需要在使用gcc指令时，手动为其添加<code v-pre>-lstdc++ -shared-libgcc</code>选项，表示gcc在编译C++程序时可以链接必要的C++标准库。</p>
<blockquote>
<p>C语言标准库和C++标准库有什么不同？</p>
<p>一、规模不同。C++标准库内容庞大许多，涵盖范围也要广得多。
二、功能不同。C++标准库功能更强大。
三、使用范围不同。鉴于两种语言本身的区别，这种差别是显而易见的。
……</p>
<p>虽然都是根据编程需要去使用库，如C语言的stdio.h、stdlib.h、string.h、time.h等，C++的algorithm、iostream、vector等，但是后者明显更适应现代编程方法的要求，特别是标准模板库、容器类等标准类库的提出，大大提升了编程的效率。</p>
</blockquote>
<h3 id="编译使用gcc-g-链接使用gcc-lstdc-成功" tabindex="-1"><a class="header-anchor" href="#编译使用gcc-g-链接使用gcc-lstdc-成功" aria-hidden="true">#</a> 编译使用gcc/g++，链接使用gcc-lstdc++，成功</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.cpp</span>
gcc/g++ <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc/g++ <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 成功！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++ -shared-libgcc  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="extern-c" tabindex="-1"><a class="header-anchor" href="#extern-c" aria-hidden="true">#</a> extern&quot;C&quot;</h1>
<h2 id="c-引用c" tabindex="-1"><a class="header-anchor" href="#c-引用c" aria-hidden="true">#</a> C++引用C</h2>
<h3 id="c-不加extern-c-失败" tabindex="-1"><a class="header-anchor" href="#c-不加extern-c-失败" aria-hidden="true">#</a> C++不加extern“C”，失败</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// /////math.c/////</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// /////main.cpp/////</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">//extern "C" int add(int, int);</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"ret = "</span> <span class="token operator">&lt;&lt;</span> ret <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编译并链接：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.c和main.cpp</span>
gcc <span class="token parameter variable">-c</span> math.c <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 失败！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 失败！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>main.o: In <span class="token keyword">function</span> <span class="token variable"><span class="token variable">`</span>main':
main.cpp:<span class="token punctuation">(</span>.text+0x21<span class="token punctuation">)</span>: undefined reference to <span class="token variable">`</span></span>add<span class="token punctuation">(</span>int, int<span class="token punctuation">)</span>'
collect2: error: ld returned <span class="token number">1</span> <span class="token builtin class-name">exit</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为，</p>
<p>gcc编译main.cpp时（<code v-pre>gcc -c main.cpp -o main.o</code>），会按照C++语法去编译，编译的main.o二进制文件中，add函数会被改写为add_ini_int，</p>
<p>而gcc编译math.c时（gcc -c math.c -o math.o），是按照C语言语法去编译，编译的math.o二进制文件中，add函数依然是add，</p>
<p>所以，在链接阶段（g++ main.o math.o -o app），main.o中的add_ini_int函数，由于和math.o中的add函数名称不一致，所以找不到匹配add_ini_int的具体实现，就会报错，说main.cpp找不到add(int, int)的定义。</p>
<h3 id="c-加上extern-c-成功" tabindex="-1"><a class="header-anchor" href="#c-加上extern-c-成功" aria-hidden="true">#</a> C++加上extern“C”，成功</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// /////math.c/////</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// /////main.cpp/////</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">extern</span> <span class="token string">"C"</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"ret = "</span> <span class="token operator">&lt;&lt;</span> ret <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编译并链接：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.c和main.cpp</span>
gcc <span class="token parameter variable">-c</span> math.c <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 成功！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>成功</strong>，这是因为，</p>
<p>gcc编译main.cpp时（<code v-pre>gcc -c main.cpp -o main.o</code>），会按照C++语法去编译，但是遇到了<code v-pre>extern &quot;C&quot;</code>修饰的函数add，这就是要求gcc在编译C++文件时，对该函数add保持原名，即add（而不是add_int_int），编译的main.o二进制文件中，add函数就是原名add，而不会被改写为add_ini_int，</p>
<p>而gcc编译math.c时（gcc -c math.c -o math.o），是按照C语言语法去编译，编译的math.o二进制文件中，add函数依然是add，</p>
<p>所以，在链接阶段（g++ main.o math.o -o app），main.o中的add函数，会找到math.o中的add函数，就成功链接生成可执行二进制文件了。</p>
<h3 id="不能给c函数本身加extern-c-gcc不识别会报错" tabindex="-1"><a class="header-anchor" href="#不能给c函数本身加extern-c-gcc不识别会报错" aria-hidden="true">#</a> 不能给C函数本身加extern&quot;C&quot;,gcc不识别会报错</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.c/////
extern &quot;C&quot; int add(int, int);

int add(int a, int b) {
	return a + b;
}

// /////main.cpp/////
#include &lt;iostream&gt;
using namespace std;

extern &quot;C&quot; int add(int, int);

int main() {
    int a = 1, b = 2;
    int ret = add(a, b);
    cout &lt;&lt; &quot;ret = &quot; &lt;&lt; ret &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编译：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 编译math.cpp</span>
gcc <span class="token parameter variable">-c</span> math.c <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>失败：</p>
<blockquote>
<p>math.c:1:8: error: expected identifier or ‘(’ before string constant
extern &quot;C&quot; int add(int, int);</p>
</blockquote>
<p>这说明gcc不识别<code v-pre>&quot;C&quot;</code>，会报错，gcc会认为这个句子本应该是类似<code v-pre>extern str = &quot;C&quot;</code>。</p>
<p>但是g++可以编译：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 编译math.cpp</span>
g++ <span class="token parameter variable">-c</span> math.c <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译的math.o里，add函数名字就是add，而不是add_int_int。</p>
<p>然后可以成功链接，总结一下，即</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.c和main.cpp</span>
<span class="token comment"># 因为math.c里含有extern "C"， gcc不识别</span>
<span class="token comment">#gcc -c math.c -o math.o  # 失败</span>
g++ <span class="token parameter variable">-c</span> math.c <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.cpp <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 成功！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有个小疑问，就是g++编译的math.o里（<code v-pre>g++ -c math.c -o math.o</code>），会把add函数最终生成为什么呢？</p>
<p>add还是add_int_int?</p>
<p>经过<code v-pre>vim math.o</code>查看，是add。</p>
<p>所以，当C++引用C时，如果是用gcc编译器，那就不要在C语言文件中加入<code v-pre>extern &quot;C&quot;</code>这样的语句，哪怕是在头文件中。而是应当在C++文件中引用C语言的头文件时，标注<code v-pre>extern &quot;C&quot;</code>或者用<code v-pre>extern &quot;C&quot; {}</code>把C语言的头文件包住。</p>
<p>什么叫用<code v-pre>extern &quot;C&quot; {}</code>把C语言的头文件包住？即</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////main.cpp/////

#include &lt;iostream&gt;
using namespace std;

//extern &quot;C&quot; int add(int, int);
extern &quot;C&quot; {
	int add(int, int);
}

int main() {
	int a = 1, b = 2;
	int ret = add(a, b);
	cout &lt;&lt; &quot;ret = &quot; &lt;&lt; ret &lt;&lt; endl;
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c引用c" tabindex="-1"><a class="header-anchor" href="#c引用c" aria-hidden="true">#</a> C引用C++</h2>
<p>记住两点：</p>
<p>1、C++里如果某个函数提前声明了extern &quot;C&quot;,那该函数就会以C语言去编译，即函数名不变</p>
<p>2、C语言里禁止出现extern &quot;C&quot;,因为C语言编译器不认该关键字</p>
<h3 id="c-不加extern-c-失败-1" tabindex="-1"><a class="header-anchor" href="#c-不加extern-c-失败-1" aria-hidden="true">#</a> C++不加extern“C”，失败</h3>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.cpp/////
#include &lt;iostream&gt;
using namespace std;

int add(int a, int b) {
	cout &lt;&lt; &quot;c = &quot; &lt;&lt; a &lt;&lt; &quot; + &quot; &lt;&lt; b &lt;&lt; &quot; = &quot; &lt;&lt; a + b &lt;&lt; endl;
    return a + b;
}

// /////main.c/////
#include &lt;stdio.h&gt;

//extern &quot;C&quot; int add(int, int);
int add(int, int);

int main() {
	int a = 1, b = 2;
	int ret = add(a, b);
	printf(&quot;ret = %d\n&quot;, ret);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编译并链接：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.c</span>
gcc <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.c <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 失败！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 失败！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败：</p>
<blockquote>
<p>main.o: In function <code v-pre>main': main.c:(.text+0x21): undefined reference to </code>add'
collect2: error: ld returned 1 exit status</p>
</blockquote>
<p>gcc编译math.cpp（gcc -c math.cpp -o math.o）时，是按照C++语法编译的，那么math.o里的add函数必然是add_int_int。而main.o里的add函数依然是add，所以main.o里的add找不到对应的实现，就报错了。</p>
<h3 id="c-加上extern-c-成功-1" tabindex="-1"><a class="header-anchor" href="#c-加上extern-c-成功-1" aria-hidden="true">#</a> C++加上extern“C”，成功</h3>
<p>既然C++不加extern“C”失败了，那要怎么才能成功呢？</p>
<p>我们自然想到了给C++加上extern“C”，即</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.cpp/////
#include &lt;iostream&gt;
using namespace std;

extern &quot;C&quot; int add(int, int);

int add(int a, int b) {
	cout &lt;&lt; &quot;c = &quot; &lt;&lt; a &lt;&lt; &quot; + &quot; &lt;&lt; b &lt;&lt; &quot; = &quot; &lt;&lt; a + b &lt;&lt; endl;
    return a + b;
}

// /////main.c/////
#include &lt;stdio.h&gt;

//extern &quot;C&quot; int add(int, int);
int add(int, int);

int main() {
	int a = 1, b = 2;
	int ret = add(a, b);
	printf(&quot;ret = %d\n&quot;, ret);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编译并链接：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 分别编译math.cpp和main.c</span>
gcc <span class="token parameter variable">-c</span> math.cpp <span class="token parameter variable">-o</span> math.o  <span class="token comment"># 成功！</span>
gcc <span class="token parameter variable">-c</span> main.c <span class="token parameter variable">-o</span> main.o  <span class="token comment"># 成功！</span>
<span class="token comment"># 链接</span>
g++ main.o math.o <span class="token parameter variable">-o</span> app  <span class="token comment"># 成功！</span>
gcc main.o math.o <span class="token parameter variable">-o</span> app -lstdc++  <span class="token comment"># 成功！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成功！</p>
<p>gcc编译math.cpp生成的math.o里的add函数依然是add，而不是add_int_int。</p>
<h3 id="c-加上extern-c-且c-引用不带extern的自身头文件-失败" tabindex="-1"><a class="header-anchor" href="#c-加上extern-c-且c-引用不带extern的自身头文件-失败" aria-hidden="true">#</a> C++加上extern“C”且C++引用不带extern的自身头文件，失败</h3>
<p><strong>注意！！！注意！！！注意！！！</strong>：</p>
<p>前面的main.c函数，是没有加math.h的，如果存在math.h，且math.h里有<code v-pre>int add(int, int);</code>，那就得分情况了</p>
<p>如果你的math.h是这样：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int add(int, int);  // 相当于#include &quot;math.h&quot;
extern &quot;C&quot; int add(int, int);

int add(int a, int b) {
	cout &lt;&lt; &quot;c = &quot; &lt;&lt; a &lt;&lt; &quot; + &quot; &lt;&lt; b &lt;&lt; &quot; = &quot; &lt;&lt; a + b &lt;&lt; endl;
    return a + b;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译math.cpp，<code v-pre>gcc -c math.cpp -o math.o</code>，会报错：</p>
<blockquote>
<p>math.cpp:5:16: error: conflicting declaration of ‘int add(int, int)’ with ‘C’ linkage
extern &quot;C&quot; int add(int, int);
^~~
math.cpp:4:5: note: previous declaration with ‘C++’ linkage
int add(int, int);
^~~</p>
</blockquote>
<p>意思是，冲突了，你写<code v-pre> extern &quot;C&quot; int add(int, int);</code>不就是要告诉编译器这个函数按照C语言的语法来编译么，那你头文件里又加了<code v-pre>int add(int, int);</code>声明，那这意思就是默认按照C++编译器，这不就冲突了么。</p>
<h3 id="c程序加上extern-c-失败" tabindex="-1"><a class="header-anchor" href="#c程序加上extern-c-失败" aria-hidden="true">#</a> C程序加上extern“C”，失败</h3>
<p>卧槽，上面的失败了，那就病急乱投医，给C程序加上<code v-pre>extern &quot;C&quot; int add(int, int);</code>试试，其实很显然，这会失败，因为C语言程序里不识别extern &quot;C&quot;。</p>
<p>为了彻底死心，还是再试试吧...</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.cpp/////
#include &lt;iostream&gt;
using namespace std;

int add(int a, int b) {
	cout &lt;&lt; &quot;c = &quot; &lt;&lt; a &lt;&lt; &quot; + &quot; &lt;&lt; b &lt;&lt; &quot; = &quot; &lt;&lt; a + b &lt;&lt; endl;
    return a + b;
}

// /////main.c/////
#include &lt;stdio.h&gt;

extern &quot;C&quot; int add(int, int);

int main() {
	int a = 1, b = 2;
	int ret = add(a, b);
	printf(&quot;ret = %d\n&quot;, ret);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译main.c，<code v-pre>gcc -c main.c -o main.o</code>，报错：</p>
<blockquote>
<p>main.c:3:8: error: expected identifier or ‘(’ before string constant
extern &quot;C&quot; int add(int, int);
^~~
main.c: In function ‘main’:
main.c:8:12: warning: implicit declaration of function ‘add’ [-Wimplicit-function-declaration]
int ret = add(a, b);</p>
</blockquote>
<p>很显然，错了，因为C语言编译器会认为你的<code v-pre>extern &quot;C&quot;</code>应该是<code v-pre>extern char* str = &quot;C&quot;</code>，记住，只有C++编译器才识别<code v-pre>extern &quot;C&quot;</code>。</p>
<p>经过了实验，并得出了两点惨痛教训：</p>
<p>1、C++里如果某个函数提前声明了extern &quot;C&quot;,那该函数就会以C语言去编译，即函数名不变</p>
<p>2、C语言里禁止出现extern &quot;C&quot;,因为C语言编译器不认该关键字</p>
<h3 id="c程序引用带-ifdef-c-且带extern的c-头文件-成功" tabindex="-1"><a class="header-anchor" href="#c程序引用带-ifdef-c-且带extern的c-头文件-成功" aria-hidden="true">#</a> C程序引用带#ifdef-C++且带extern的C++头文件，成功</h3>
<p>经过了这么多挫折，只有一次成功，太打击人了。</p>
<p>成功的地方在于，我只需要给C++源文件里提前声明要调用的函数为extern &quot;C&quot;，该C++文件被编译时，该函数就会以C的方式去编译。</p>
<p>失败的地方在于，C语言不认extern &quot;C&quot;啊，那就不能在C++的头文件里加上extern &quot;C&quot;。</p>
<p>这样会造成不便：</p>
<p>1、如果C++的头文件要给C语言引用，那我只能把C++的头文件声明为不带extern &quot;C&quot;的</p>
<p>2、如果C++的头文件要给C++本身的源码实现引用，那我就必须把C++的头文件声明为带extern &quot;C&quot;的</p>
<p>面对这样的矛盾，解决办法似乎只有一个，那就是生成两个C++的头文件：</p>
<ul>
<li>一个不带extern &quot;C&quot;，这个专门给C语言源码引用</li>
<li>另一个带extern &quot;C&quot;，这个专门给C++源码引用</li>
</ul>
<p>这好坑爹啊，太麻烦了，能不能只生成一个头文件，既能给C语言源码引用，又能给C++源码引用？</p>
<p>啊，想出来了，利用C++编译器有__cplusplus这个宏定义，而C语言编译器没有这个宏定义，我们可以把C++头文件写成：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// /////math.h/////
#ifdef _cplusplus
extern &quot;C&quot;
{
#endif

int add(int a, int b);

#ifdef _cplusplus
extern &quot;C&quot;
}
#endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样不就完美了么！</p>
<p>参考资料：<a href="https://blog.csdn.net/BoArmy/article/details/8652870" target="_blank" rel="noopener noreferrer">C中如何调用C++函数<ExternalLinkIcon/></a></p>
<h3 id="c程序调用c-的类-待补充-未完成" tabindex="-1"><a class="header-anchor" href="#c程序调用c-的类-待补充-未完成" aria-hidden="true">#</a> C程序调用C++的类，待补充，未完成</h3>
<p><a href="https://blog.csdn.net/qq_29011249/article/details/105402456" target="_blank" rel="noopener noreferrer">C中如何调用C++函数?<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/w839687571/article/details/120252956" target="_blank" rel="noopener noreferrer">c 文件中调用 cpp 中函数<ExternalLinkIcon/></a></p>
</div></template>


