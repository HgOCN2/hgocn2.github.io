<template><div><h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/programing-language/python/grammar/python.html">返回上层目录</RouterLink></li>
<li><a href="#range()">range()</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a>
<ul>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C">字符串操作</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B8%B8%E7%94%A8%E5%86%85%E7%BD%AE%E6%96%B9%E6%B3%95">字符串常用内置方法</a></li>
</ul>
</li>
<li><a href="#%E5%88%97%E8%A1%A8">列表</a>
<ul>
<li><a href="#%E5%AF%B9%E5%88%97%E8%A1%A8%E8%BF%9B%E8%A1%8C%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5">对列表进行增删改查</a></li>
<li><a href="#%E5%88%97%E8%A1%A8%E5%8E%BB%E9%87%8D">列表去重</a></li>
</ul>
</li>
<li><a href="#%E5%85%83%E7%BB%84">元组</a></li>
<li><a href="#%E5%AD%97%E5%85%B8">字典</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C">基本操作</a></li>
<li><a href="#%E5%AD%97%E5%85%B8%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5%E6%93%8D%E4%BD%9C">字典的增删改查操作</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E5%BE%AA%E7%8E%AF%E6%9D%A5%E9%81%8D%E5%8E%86%E5%AD%97%E5%85%B8">使用循环来遍历字典</a></li>
<li><a href="#%E6%B8%85%E7%A9%BA%E5%AD%97%E5%85%B8">清空字典</a></li>
</ul>
</li>
<li><a href="#%E9%9B%86%E5%90%88">集合</a></li>
</ul>
<h1 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range()</h1>
<p>range(开始，结束)，返回一个序列，<strong>左闭右开</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#等价于range(0,10)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>range(开始，结束，步长)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 打印0到10的偶数</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="range函数的作用" tabindex="-1"><a class="header-anchor" href="#range函数的作用" aria-hidden="true">#</a> range函数的作用</h2>
<p>python内置range()函数的作用是什么？它能返回一系列连续增加的整数，它的工作方式类似于分片，可以生成一个列表对象。range函数大多数时常出现在<strong>for循环中</strong>，在for循环中可做为索引使用。其实它也可以出现在任何需要整数列表的环境中，在python 3.0中range函数是一个迭代器，不能print(range(4))</p>
<p>Python3.x 中 range() 函数返回的结果是一个<strong>整数序列的对象</strong>，而<strong>不是列表</strong>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class 'range'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当你 help(range) 时会看到：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token builtin">help</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">)</span>
<span class="token comment">#Return an object that produces a sequence of integers from start (inclusive)</span>
<span class="token comment">#to stop (exclusive) by step.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，不是列表，但是可以利用 list 函数返回列表，即：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#[0, 1, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1>
<h2 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作" aria-hidden="true">#</a> 字符串操作</h2>
<ul>
<li>
<p>字符串变量定义</p>
<p>s = &quot;hello&quot;</p>
<p>s = 'hello'</p>
</li>
<li>
<p>组成字符串的方式</p>
<ul>
<li>使用“+”将两个字符串连接成一个新的字符串</li>
<li>组成字符串格式化符号</li>
</ul>
</li>
<li>
<p>下标hello[01234]</p>
<ul>
<li>通过下标获取指定位置的字符，string_name[index]</li>
</ul>
</li>
<li>
<p>切片</p>
<ul>
<li>切片的语法：string_name[起始:结束:步长]</li>
</ul>
</li>
</ul>
<p>代码</p>
<ul>
<li>基本操作</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token comment"># 通过交表获取指定位置元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 获取字符串长度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 循环遍历字符串</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token comment"># 脚标 用负数表示倒着数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># 倒数第一个</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># 倒数第二个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>切片</strong></p>
<ul>
<li>基本操作</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 切片</span>
<span class="token comment"># 注意：切片切出来的字符串是左闭右开的</span>
line <span class="token operator">=</span> <span class="token string">"zhangsan,20"</span>
name <span class="token operator">=</span> line<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
age <span class="token operator">=</span> line<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token comment"># 截取到最后，可以不加结束序号</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>切片步长</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 切片步长</span>
s <span class="token operator">=</span> <span class="token string">"abcde"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># bcde</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># bcd</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># bc</span>
<span class="token comment"># 隔一个位置取一个元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># 等价于</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># ace</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串常用内置方法" tabindex="-1"><a class="header-anchor" href="#字符串常用内置方法" aria-hidden="true">#</a> 字符串常用内置方法</h2>
<ul>
<li>
<p>find</p>
<p>在字符串中查找指定的子字符串是否存在，如果存在则返回第一个子字符串的起始下标，如果不存在则返回-1</p>
</li>
<li>
<p>count</p>
<p>在字符串中统计包含的子字符串的个数</p>
</li>
<li>
<p>replace</p>
<p>使用新的子字符串替换指定的子字符串，返回新的字符串</p>
</li>
<li>
<p>split</p>
<p>按照指定的分隔符字符串，返回分割之后的所有元素的列表</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># find</span>
line <span class="token operator">=</span> <span class="token string">"hello world hello python"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 第一个子字符串的起始脚标</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 从第六个脚标其开始查找 12</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 不存在，返回-1</span>
<span class="token comment"># count</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 出现的次数</span>
<span class="token comment"># replace 字符串是不可变类型</span>
new_line <span class="token operator">=</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"qqq"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_line<span class="token punctuation">)</span>

<span class="token comment"># split分割</span>
line_list <span class="token operator">=</span> line<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>line_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>startswith</p>
<p>判断字符串是否以指定前缀开头，返回值为True或False</p>
</li>
<li>
<p>endswith</p>
<p>判断字符串是否以指定后缀结束，返回值为True或False</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># startswith</span>
files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"20171201.txt"</span><span class="token punctuation">,</span><span class="token string">"20180101.log"</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> files<span class="token punctuation">:</span>
    <span class="token keyword">if</span> item<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">"2018"</span><span class="token punctuation">)</span> <span class="token keyword">and</span> item<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">"log"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"2018年待处理日志：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>upper</p>
<p>字符串所有字符大写</p>
</li>
<li>
<p>lower</p>
<p>字符串所有字符小写</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># upper lower 大小写</span>
content <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"是否继续，继续输入yes，退出输入no"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> content<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"yes"</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"欢迎继续使用"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"退出，请取卡"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h1>
<p>可理解为柜子，柜子里有不同的抽屉，可存储不同类型的值。</p>
<ul>
<li>
<p>可存储相同或者不同类型数据的集合</p>
</li>
<li>
<p>列表定义</p>
<ul>
<li>name_list = [&quot;zhangsan&quot;,&quot;lisi&quot;,&quot;wangwu&quot;]</li>
</ul>
</li>
<li>
<p>顺序存储，可通过下标获取内部元素</p>
<p>name_list[0]</p>
<p>name_list[1]</p>
</li>
<li>
<p>内容可变，可通过下角标修改元素值</p>
<p>name_list[0] = &quot;xiaobai&quot;</p>
</li>
<li>
<p>使用循环遍历列表</p>
</li>
<li>
<p>嵌套列表</p>
</li>
</ul>
<p>代码</p>
<p>基本操作</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span><span class="token comment"># ['zhangsan', 'lisi', 'wangwu']</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 类型&lt;class 'list'></span>
<span class="token comment"># 脚标获取列表元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储不同类型的元素，遍历列表</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 存储不同类型的数据</span>
info_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">180.5</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_list<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># True</span>
info_list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">70</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_list<span class="token punctuation">)</span><span class="token comment"># ['zhangsan', 20, 180.5, 70, True]</span>

<span class="token comment"># 遍历列表，获取列表所有元素</span>
<span class="token comment"># while循环</span>
i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>info_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>info_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token comment"># for循环，通过脚标</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>info_list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>info_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># for循环，通过序列的每一个元素</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> info_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套列表</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 嵌套列表</span>
info_lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"wangwu"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_lists<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># ['zhangsan', 20]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_lists<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># zhangsan</span>

<span class="token comment"># 循环遍历嵌套列表</span>
<span class="token keyword">for</span> person <span class="token keyword">in</span> info_lists<span class="token punctuation">:</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> person<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-----------"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对列表进行增删改查" tabindex="-1"><a class="header-anchor" href="#对列表进行增删改查" aria-hidden="true">#</a> 对列表进行增删改查</h2>
<ul>
<li>
<p>append()/insert()添加元素</p>
<ul>
<li>
<p>append()向列表末尾添加元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># append向列表末尾添加元素</span>
info_lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"wangwu"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
info_lists<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xiaobai"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_lists<span class="token punctuation">)</span>
<span class="token comment"># [['zhangsan', 20], ['lisi', 30], ['wangwu', 40], ['xiaobai', 25]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>insert()可指定位置添加元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># insert(index, item)</span>
info_lists <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"wangwu"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
info_lists<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"wangmazi"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info_lists<span class="token punctuation">)</span>
<span class="token comment"># [['zhangsan', 20], ['wangmazi', 23], ['lisi', 30], ['wangwu', 40]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>“+”组合两个列表生成新的列表</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 两个列表元素组合生成新的列表</span>
name_list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"八戒"</span><span class="token punctuation">]</span>
name_list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"白龙马"</span><span class="token punctuation">]</span>
new_list <span class="token operator">=</span> name_list1 <span class="token operator">+</span> name_list2
<span class="token keyword">print</span><span class="token punctuation">(</span>new_list<span class="token punctuation">)</span><span class="token comment"># ['唐僧', '悟空', '八戒', '沙僧', '白龙马']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>extend()向调用它的列表中添加另外一个列表的元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name_list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"八戒"</span><span class="token punctuation">]</span>
name_list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"白龙马"</span><span class="token punctuation">]</span>
name_list1<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>name_list2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list1<span class="token punctuation">)</span><span class="token comment"># ['唐僧', '悟空', '八戒', '沙僧', '白龙马']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>del()/pop()/remove()删除元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 删除</span>
name_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"八戒"</span><span class="token punctuation">,</span> <span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"白龙马"</span><span class="token punctuation">]</span>
<span class="token comment"># 指定脚标</span>
<span class="token keyword">del</span> name_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span>
<span class="token comment"># 指定元素名称</span>
name_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">"八戒"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span>
<span class="token comment"># 删除最后一个元素(未指定删除位置)</span>
name_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span>
<span class="token comment"># 删除某个脚标</span>
name_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>切片</p>
<ul>
<li>
<p>和字符串的切片操作相同</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"八戒"</span><span class="token punctuation">,</span> <span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"白龙马"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># ['悟空', '沙僧']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>in/not in 判断元素在列表中是否存在</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"唐僧"</span><span class="token punctuation">,</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"八戒"</span><span class="token punctuation">,</span> <span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"白龙马"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"悟空"</span> <span class="token keyword">in</span> name_list<span class="token punctuation">)</span><span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"如来"</span> <span class="token keyword">in</span> name_list<span class="token punctuation">)</span><span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"悟空"</span> <span class="token keyword">not</span> <span class="token keyword">in</span> name_list<span class="token punctuation">)</span><span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"如来"</span> <span class="token keyword">not</span> <span class="token keyword">in</span> name_list<span class="token punctuation">)</span><span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>sort()列表内元素重排序</p>
<ul>
<li>
<p>默认从小到大排列</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># sort()</span>
num_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
num_list<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 默认升序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span><span class="token comment"># [1, 3, 6, 12]</span>
num_list<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># 倒序排列</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span><span class="token comment"># [12, 6, 3, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>reverse()列表内容倒置</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>num_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
num_list<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_list<span class="token punctuation">)</span><span class="token comment">#[1, 12, 3, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>count()统计列表内指定元素个数</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>num_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num_list<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="列表去重" tabindex="-1"><a class="header-anchor" href="#列表去重" aria-hidden="true">#</a> 列表去重</h2>
<p>使用内置set方法来去重：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
lst2 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span>lst1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst2<span class="token punctuation">)</span>
<span class="token comment"># [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h1>
<ul>
<li>
<p>循序存储相同/不同类型的元素</p>
</li>
<li>
<p>元组定义，使用()将元素括起来，元素之间用&quot;,&quot;隔开</p>
</li>
<li>
<p>特性：<strong>不可变，不支持增删改查</strong></p>
</li>
<li>
<p>查询：通过下标查询元组指定位置的元素</p>
</li>
<li>
<p>空元组的定义：none_tuple = ()</p>
</li>
<li>
<p>只包含一个元素的元组：one_tuple = (&quot;one&quot;,)</p>
<p><strong>定义一个元素的元组，括号里一定要有一个逗号(,)</strong></p>
</li>
<li>
<p>循环遍历元组</p>
</li>
</ul>
<p>列表用于存储可变的元素，一般存储相同类型的元素。</p>
<p>元组不可变，通常存储一些不希望被改变的信息，如用户名，密码等。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#定义元组，存储数据库信息</span>
db_info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"192.169.1.1"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"root123"</span><span class="token punctuation">)</span>
<span class="token comment"># 通过脚标查询元组中的元素</span>
ip <span class="token operator">=</span> db_info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
port <span class="token operator">=</span> db_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"ip:{},port:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ip:192.169.1.1,port:root</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#&lt;class 'str'></span>

<span class="token comment"># 通过脚标来修改元组指定元素的值，这是不行的</span>
db_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8080</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>db_info<span class="token punctuation">)</span>
<span class="token comment"># TypeError: 'tuple' object does not support item assignment</span>

<span class="token comment"># del删除元组指定位置的元素，这是不行的</span>
<span class="token keyword">del</span> db_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># TypeError: 'tuple' object doesn't support item deletion</span>

<span class="token comment"># 定义一个元组</span>
one_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>one_tuple<span class="token punctuation">)</span><span class="token comment"># (123,)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>one_tuple<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'tuple'></span>
<span class="token comment"># 错误的定义只包含一个元素的元组，少了元素后的逗号。</span>
one_tuple1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>one_tuple1<span class="token punctuation">)</span><span class="token comment"># 123</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>one_tuple1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'int'></span>

<span class="token comment"># 定义空元组</span>
none_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>none_tuple<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>none_tuple<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环遍历元组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 循环遍历</span>
db_info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"192.169.1.1"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"root123"</span><span class="token punctuation">)</span>
<span class="token comment"># for循环</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> db_info<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

<span class="token comment"># while循环</span>
i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>db_info<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>db_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h1>
<ul>
<li>存储Key-Value键值对类型的数据</li>
<li>字典定义：{Key1 : value1,  key2 : value2,  ...}</li>
<li>查询：根据Key查找Value</li>
<li>字典具有添加、修改、删除操作</li>
<li>内置方法get、keys、values、items、clear</li>
<li>循环遍历字典</li>
</ul>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>user_if_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">"gender"</span><span class="token punctuation">:</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"job"</span><span class="token punctuation">:</span><span class="token string">"取经"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}的年龄：{}，性别：{}，工作内容：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"job"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 通过Key修改已经存在的值</span>
user_if_dict<span class="token punctuation">[</span><span class="token string">"job"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"取经|偷桃"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"job"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用字典的原因：</p>
<p>存储大量数据也能够准确查找和修改。</p>
<p>不支持通过下标来查询指定位置的元素的值。</p>
<p>Key不能重复出现，否则后面的值会覆盖前面的值</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>user_if_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">"gender"</span><span class="token punctuation">:</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"job"</span><span class="token punctuation">:</span><span class="token string">"取经"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"白骨精"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}的年龄：{}，性别：{}，工作内容：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"job"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典的增删改查操作" tabindex="-1"><a class="header-anchor" href="#字典的增删改查操作" aria-hidden="true">#</a> 字典的增删改查操作</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 字典的增删改查操作</span>

<span class="token comment"># 添加一个键值对</span>
user_if_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">"gender"</span><span class="token punctuation">:</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"job"</span><span class="token punctuation">:</span><span class="token string">"取经"</span><span class="token punctuation">}</span>
user_if_dict<span class="token punctuation">[</span><span class="token string">"tel"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13812345678</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span><span class="token comment"># 5对</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 修改字典中的指定的值</span>
user_if_dict<span class="token punctuation">[</span><span class="token string">"tel"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13811118888</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span>
<span class="token comment"># 删除元素</span>
<span class="token keyword">del</span> user_if_dict<span class="token punctuation">[</span><span class="token string">"tel"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span>

<span class="token comment"># 查询指定名字的元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 查询不存在的键，会报错</span>
<span class="token comment"># 解决办法</span>
<span class="token comment"># 方法一：in or not in</span>
<span class="token keyword">if</span> <span class="token string">"tel"</span> <span class="token keyword">in</span> user_if_dict<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">[</span><span class="token string">"tel"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"\"tel\"不存在"</span><span class="token punctuation">)</span>
<span class="token comment"># 方法二： 字典内置的get方法</span>
<span class="token comment"># 如果不存在，就会返回一个设定的默认值，用于缺省只补全</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"tel"</span><span class="token punctuation">,</span><span class="token string">"19911116666"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用循环来遍历字典" tabindex="-1"><a class="header-anchor" href="#使用循环来遍历字典" aria-hidden="true">#</a> 使用循环来遍历字典</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 使用循环来遍历字典</span>
<span class="token comment"># 字典内置的Keys方法，返回所有的Key组成一个序列</span>
user_if_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">"gender"</span><span class="token punctuation">:</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"job"</span><span class="token punctuation">:</span><span class="token string">"取经"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"白骨精"</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> user_if_dict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> user_if_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">"|"</span><span class="token punctuation">)</span>
<span class="token comment"># 字典内置的Values方法，返回所有的Value组成的一个序列</span>
<span class="token keyword">for</span> value <span class="token keyword">in</span> user_if_dict<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment"># 只能遍历出字典所有的值</span>
<span class="token comment"># 返回字典的键值对，组成元组返回</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> user_if_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'tuple'></span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token comment"># ('name', '白骨精')</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># Key: name</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># Value: 白骨精</span>
<span class="token comment"># 用两个变量分别接受字典的Key和Value</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span>value <span class="token keyword">in</span> user_if_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清空字典" tabindex="-1"><a class="header-anchor" href="#清空字典" aria-hidden="true">#</a> 清空字典</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>user_if_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"悟空"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token string">"gender"</span><span class="token punctuation">:</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"job"</span><span class="token punctuation">:</span><span class="token string">"取经"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"白骨精"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span>
user_if_dict<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_if_dict<span class="token punctuation">)</span><span class="token comment"># {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h1>
<ul>
<li>
<p>无序存储不同数据类型不重复元素的序列</p>
<p>即使填入多个相同的元素，也会被去重</p>
</li>
<li>
<p>集合定义：name_set={&quot;xiaoming&quot;,  &quot;xiaoqiang&quot;, &quot;xiaobai&quot;}</p>
</li>
<li>
<p>使set对序列中元素去重，同时创建集合</p>
<p>例如：name_set = set([&quot;xiaoming&quot;, &quot;zhangsan&quot;])</p>
</li>
<li>
<p>创建空集合：none_set = set()</p>
</li>
<li>
<p>使用in和not in判断一个元素在集合中是否存在</p>
</li>
<li>
<p>使用add(元素)方法添加一个元素到集合中</p>
</li>
<li>
<p>使用update(序列)方法将一个序列中的元素添加到集合中，同时对元素去重</p>
</li>
<li>
<p>remove(元素)根据元素值删除集合中指定元素，如果元素不存在，则报错</p>
</li>
<li>
<p>discard(元素)根据元素值删除集合中指定元素，如果元素不存在，不会引发错误</p>
</li>
<li>
<p>pop()随机删除集合中的某个元素，并且返回被删除的元素</p>
</li>
<li>
<p>clear()清空集合</p>
</li>
<li>
<p>集合操作</p>
<ul>
<li>交集intersection(&amp;)</li>
<li>并集union(|)</li>
<li>差集difference(-)</li>
<li>对称差集(^)</li>
</ul>
</li>
</ul>
<p>基本用法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 集合的定义，元素去重</span>
student_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span><span class="token string">"lisi"</span><span class="token punctuation">,</span><span class="token string">"wangwu"</span><span class="token punctuation">,</span><span class="token string">"zhangsan"</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>student_set<span class="token punctuation">)</span><span class="token comment"># 无序，去重</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>student_set<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>student_set<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># set(序列)</span>
<span class="token comment"># set(集合) 对list中的元素去重，并创建一个新的集合</span>
id_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">,</span> <span class="token string">"id3"</span><span class="token punctuation">,</span> <span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">]</span>
new_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>id_list<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>id_list<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_set<span class="token punctuation">)</span>
<span class="token comment"># set(元组) 对突破了中的元素去重，并创建一个新的集合</span>
id_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">,</span> <span class="token string">"id3"</span><span class="token punctuation">,</span> <span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">)</span>
new_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>id_tuple<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>id_tuple<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于字符串，会打乱元素顺序，并对字符去重。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>string_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string_set<span class="token punctuation">)</span>
<span class="token comment"># {'o', 'e', 'l', 'h'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建空集合</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 创建空集合</span>
none_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>none_set<span class="token punctuation">)</span><span class="token comment"># set()</span>
<span class="token comment"># 注意，床架空字典是{}</span>
none_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>none_dict<span class="token punctuation">)</span><span class="token comment"># {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断存在与否</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># in or not in</span>
id_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">,</span> <span class="token string">"id3"</span><span class="token punctuation">,</span> <span class="token string">"id1"</span><span class="token punctuation">,</span> <span class="token string">"id2"</span><span class="token punctuation">]</span>
new_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>id_list<span class="token punctuation">)</span>
user_id <span class="token operator">=</span> <span class="token string">"id1"</span>
<span class="token keyword">if</span> user_id <span class="token keyword">in</span> new_set<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}存在"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user_id<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> user_id <span class="token keyword">not</span> <span class="token keyword">in</span> new_set<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"{}不存在"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user_id<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>update添加序列，而add()只能添加一个元素</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># update(序列) 重复元素会去重</span>
name_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">}</span>
<span class="token comment"># 添加列表元素到集合</span>
name_set<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"悟空"</span><span class="token punctuation">,</span> <span class="token string">"八戒"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
<span class="token comment"># 添加元组元素到集合</span>
name_set<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">"悟空"</span><span class="token punctuation">,</span> <span class="token string">"八戒"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
<span class="token comment"># 添加多个序列元素到集合</span>
name_set<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"悟空"</span><span class="token punctuation">,</span> <span class="token string">"八戒"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"沙僧"</span><span class="token punctuation">,</span> <span class="token string">"八戒"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
<span class="token comment"># 把一个集合并入另一个集合</span>
name_set<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"张飞"</span><span class="token punctuation">,</span><span class="token string">"李逵"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
<span class="token comment"># add()只能添加一个元素</span>
name_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">"如来佛"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三种删除操作</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 三种删除操作</span>

<span class="token comment">#remove(元素)</span>
name_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">}</span>
name_set<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
<span class="token comment"># remove删除不存在的元素会报错</span>
<span class="token comment"># name_set.remove("zhangsan")# KeyError: 'zhangsan'</span>

<span class="token comment"># discard(元素)</span>
name_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">}</span>
name_set<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
name_set<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span>

<span class="token comment"># pop随机删除</span>
name_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">}</span>
name_set<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交集，并集，差集</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 交集，并集，</span>
<span class="token comment"># 交集</span>
num_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>
num_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
inter_set1 <span class="token operator">=</span> num_set1 <span class="token operator">&amp;</span> num_set2
inter_set2 <span class="token operator">=</span> num_set1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>num_set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>inter_set1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>inter_set2<span class="token punctuation">)</span>

<span class="token comment"># 并集</span>
num_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>
num_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
union_set1 <span class="token operator">=</span> num_set1 <span class="token operator">|</span> num_set2
union_set2 <span class="token operator">=</span> num_set1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>num_set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>union_set1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>union_set2<span class="token punctuation">)</span>

<span class="token comment"># 差集</span>
num_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>
num_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
diff_set1 <span class="token operator">=</span> num_set1 <span class="token operator">-</span> num_set2
diff_set2 <span class="token operator">=</span> num_set1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>num_set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>diff_set1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>diff_set2<span class="token punctuation">)</span>

<span class="token comment"># 对称差集, 互差再并</span>
num_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>
num_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
sym_diff_set1 <span class="token operator">=</span> num_set1 <span class="token operator">^</span> num_set2
sym_diff_set2 <span class="token operator">=</span> num_set1<span class="token punctuation">.</span>symmetric_difference<span class="token punctuation">(</span>num_set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sym_diff_set1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sym_diff_set2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
</div></template>


