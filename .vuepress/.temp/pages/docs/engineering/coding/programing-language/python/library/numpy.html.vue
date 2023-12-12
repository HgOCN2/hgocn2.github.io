<template><div><h1 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy" aria-hidden="true">#</a> NumPy</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/programing-language/python/library/python.html#python">返回上层目录</RouterLink></li>
<li><a href="#NumPy%E4%BB%8B%E7%BB%8D">NumPy介绍</a></li>
<li><a href="#Array%E6%95%B0%E7%BB%84%E5%92%8C%E7%9F%A9%E9%98%B5%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%BF%90%E7%AE%97">Array数组和矩阵的基本运算</a>
<ul>
<li><a href="#%E5%87%BD%E6%95%B0%E5%BA%93%E7%9A%84%E5%AF%BC%E5%85%A5">函数库的导入</a></li>
<li><a href="#array%E5%B8%B8%E7%94%A8%E5%8F%98%E9%87%8F%E5%8F%8A%E5%8F%82%E6%95%B0">array常用变量及参数</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA%E7%9F%A9%E9%98%B5">创建矩阵</a>
<ul>
<li><a href="#%E7%9B%B4%E6%8E%A5%E5%88%9B%E5%BB%BA%E7%9F%A9%E9%98%B5array">直接创建矩阵array</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA0%E7%9F%A9%E9%98%B5zeros">创建0矩阵zeros</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA1%E7%9F%A9%E9%98%B5ones">创建1矩阵ones</a></li>
<li><a href="#%E5%8C%BA%E9%97%B4%E5%86%85%E6%8C%89%E7%AD%89%E5%B7%AE%E5%88%9B%E5%BB%BA%E7%9F%A9%E9%98%B5arange">区间内按等差创建矩阵arange</a></li>
<li><a href="#%E5%8C%BA%E9%97%B4%E5%86%85%E6%8C%89%E5%85%83%E7%B4%A0%E4%B8%AA%E6%95%B0%E5%8F%96%E5%80%BClinspace">区间内按元素个数取值linspace</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA%E9%9A%8F%E6%9C%BA%E6%95%B0%E7%BB%84random">创建随机数组random</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E6%8B%BC%E6%8E%A5%E6%8C%89%E8%A1%8Cvstack">矩阵拼接按行vstack</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E6%8B%BC%E6%8E%A5%E6%8C%89%E5%88%97hstack">矩阵拼接按列hstack</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E5%88%86%E5%89%B2%E6%8C%89%E5%88%97hsplit">矩阵分割按列hsplit</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E5%88%86%E5%89%B2%E6%8C%89%E8%A1%8Cvsplit">矩阵分割按行vsplit</a></li>
<li><a href="#%E5%A4%9A%E9%87%8D%E5%A4%8D%E5%88%B6tile">多重复制tile</a></li>
<li><a href="#%E7%94%A8reshape%E5%88%9B%E5%BB%BA%E6%96%B0%E6%95%B0%E7%BB%84">用reshape创建新数组</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C%E5%92%8C%E8%BF%90%E7%AE%97">基本操作和运算</a>
<ul>
<li><a href="#%E6%B1%82%E5%92%8Csum">求和sum</a></li>
<li><a href="#%E6%B1%82%E6%9C%80%E5%A4%A7%E5%80%BCmax">求最大值max</a></li>
<li><a href="#%E6%B1%82%E6%9C%80%E5%B0%8F%E5%80%BCmin">求最小值min</a></li>
<li><a href="#%E6%B1%82%E5%B9%B3%E5%9D%87%E5%80%BCmean">求平均值mean</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E8%A1%8C%E6%B1%82%E5%92%8Csum">矩阵行求和sum</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E5%88%97%E6%B1%82%E5%92%8Csum">矩阵列求和sum</a></li>
<li><a href="#%E5%85%83%E7%B4%A0%E6%B1%82%E5%B9%B3%E6%96%B9a2">元素求平方a2</a></li>
<li><a href="#%E5%85%83%E7%B4%A0%E6%B1%82e%E7%9A%84n%E6%AC%A1%E5%B9%82exp">元素求e的n次幂exp</a></li>
<li><a href="#%E5%85%83%E7%B4%A0%E5%BC%80%E6%A0%B9%E5%8F%B7sqrt">元素开根号sqrt</a></li>
<li><a href="#%E5%90%91%E4%B8%8B%E5%8F%96%E6%95%B4floor">向下取整floor</a></li>
<li><a href="#%E5%B9%B3%E5%9D%A6%E5%8C%96%E6%95%B0%E7%BB%84ravel">平坦化数组ravel</a></li>
<li><a href="#%E6%9F%A5%E6%89%BE%E5%B9%B6%E4%BF%AE%E6%94%B9%E7%9F%A9%E9%98%B5%E7%89%B9%E5%AE%9A%E5%85%83%E7%B4%A0">查找并修改矩阵特定元素</a></li>
</ul>
</li>
<li><a href="#Array%E6%95%B0%E7%BB%84%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">Array数组的数据类型</a>
<ul>
<li><a href="#%E6%9F%A5%E8%AF%A2%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8Bdtype">查询数据类型dtype</a></li>
<li><a href="#%E5%88%9B%E5%BB%BA%E6%97%B6%E6%8C%87%E5%AE%9A%E5%85%83%E7%B4%A0%E7%B1%BB%E5%9E%8B">创建时指定元素类型</a></li>
<li><a href="#%E8%BD%AC%E6%8D%A2%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8Bastype">转换数据类型astype</a></li>
<li><a href="#%E4%BF%AE%E6%94%B9%E6%95%B0%E7%BB%84%E7%9A%84shape">修改数组的shape</a></li>
</ul>
</li>
<li><a href="#%E7%9F%A9%E9%98%B5%E8%BF%90%E7%AE%97">矩阵运算</a>
<ul>
<li><a href="#%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95dot">矩阵乘法dot</a></li>
<li><a href="#%E7%9F%A9%E9%98%B5%E8%BD%AC%E7%BD%AET/transpose">矩阵转置T/transpose</a></li>
<li><a href="#%E6%B1%82%E7%89%B9%E5%BE%81%E5%80%BC%E5%92%8C%E7%89%B9%E5%BE%81%E5%90%91%E9%87%8Feig">求特征值和特征向量eig</a></li>
<li><a href="#%E6%B1%82%E7%9F%A9%E9%98%B5%E7%9A%84%E8%BF%B9trace">求矩阵的迹trace</a></li>
</ul>
</li>
<li><a href="#%E5%A4%8D%E5%88%B6">复制</a>
<ul>
<li><a href="#%E5%85%B1%E4%BA%AB%E5%86%85%E5%AD%98">共享内存</a></li>
<li><a href="#%E6%B5%85%E5%A4%8D%E5%88%B6view">浅复制view</a></li>
<li><a href="#%E6%B7%B1%E5%A4%8D%E5%88%B6copy">深复制copy</a></li>
</ul>
</li>
<li><a href="#%E6%9F%A5%E8%AF%A2%E7%9F%A9%E9%98%B5%E7%9A%84%E7%BB%B4%E5%BA%A6%E4%B8%AA%E6%95%B0%E5%BD%A2%E7%8A%B6%E7%AD%89">查询矩阵的维度个数形状等</a>
<ul>
<li><a href="#%E6%9F%A5%E8%AF%A2%E7%BB%B4%E5%BA%A6ndim">查询维度ndim</a></li>
<li><a href="#%E6%9F%A5%E8%AF%A2%E5%85%83%E7%B4%A0%E4%B8%AA%E6%95%B0size">查询元素个数size</a></li>
<li><a href="#%E6%9F%A5%E8%AF%A2%E7%9F%A9%E9%98%B5%E7%9A%84%E5%A4%A7%E5%B0%8Fshape">查询矩阵的大小shape</a></li>
</ul>
</li>
<li><a href="#%E5%88%A4%E6%96%AD==">判断==</a>
<ul>
<li><a href="#%E5%88%A9%E7%94%A8==%E5%88%A4%E6%96%AD%E6%95%B0%E7%BB%84%E6%88%96%E7%9F%A9%E9%98%B5%E4%B8%AD%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%80%BC">利用==判断数组或矩阵中是否存在某个值</a></li>
<li><a href="#%E4%B8%80%E6%AC%A1%E5%88%A4%E6%96%AD%E5%A4%9A%E4%B8%AA%E6%9D%A1%E4%BB%B6">一次判断多个条件</a></li>
</ul>
</li>
<li><a href="#%E6%8E%92%E5%BA%8F%E5%92%8C%E7%B4%A2%E5%BC%95">排序和索引</a>
<ul>
<li><a href="#%E6%8E%92%E5%BA%8Fsort">排序sort</a></li>
<li><a href="#%E6%8C%89%E8%A1%8C%E6%88%96%E6%8C%89%E5%88%97%E6%89%BE%E5%88%B0%E6%9C%80%E5%A4%A7%E5%80%BC%E7%9A%84%E7%B4%A2%E5%BC%95argmax">按行或按列找到最大值的索引argmax</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E5%BD%92%E4%B8%80%E5%8C%96">数据归一化</a></li>
</ul>
</li>
<li><a href="#%E6%9C%80%E7%AE%80%E6%B4%81%E7%9A%84NumPy%E5%A4%A7%E7%BA%B2">最简洁的NumPy大纲</a>
<ul>
<li><a href="#NumPy%E5%87%BD%E6%95%B0%E5%92%8C%E5%B1%9E%E6%80%A7">NumPy函数和属性</a>
<ul>
<li><a href="#NumPy%E7%B1%BB%E5%9E%8B">NumPy类型</a></li>
<li><a href="#numpy%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0">numpy常用函数</a></li>
</ul>
</li>
<li><a href="#NumPy.ndarray%E5%87%BD%E6%95%B0%E5%92%8C%E5%B1%9E%E6%80%A7">NumPy.ndarray函数和属性</a>
<ul>
<li><a href="#ndarray%E5%B1%9E%E6%80%A7">ndarray属性</a></li>
<li><a href="#ndarray%E5%87%BD%E6%95%B0">ndarray函数</a></li>
<li><a href="#ndarray%E7%B4%A2%E5%BC%95/%E5%88%87%E7%89%87%E6%96%B9%E5%BC%8F">ndarray索引/切片方式</a></li>
</ul>
</li>
<li><a href="#NumPy.random%E5%87%BD%E6%95%B0">NumPy.random函数</a></li>
<li><a href="#NumPy.linalg%E5%87%BD%E6%95%B0">NumPy.linalg函数</a></li>
</ul>
</li>
<li><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料</a></li>
</ul>
<h1 id="numpy介绍" tabindex="-1"><a class="header-anchor" href="#numpy介绍" aria-hidden="true">#</a> NumPy介绍</h1>
<p>标准安装的Python中用列表(list)保存一组值，可以用来当作数组使用，不过由于列表的元素可以是任何对象，因此列表中所保存的是对象的指针。这样为了保存一个简单的[1,2,3]，需要有3个指针和三个整数对象。对于数值运算来说这种结构显然比较浪费内存和CPU计算时间。</p>
<p>此外Python还提供了一个array模块，array对象和列表不同，它直接保存数值，和C语言的一维数组比较类似。但是由于它不支持多维，也没有各种运算函数，因此也不适合做数值运算。</p>
<p>NumPy的诞生弥补了这些不足，NumPy提供了两种基本的对象：ndarray（N-dimensional array object）和 ufunc（universal function object）。ndarray(下文统一称之为数组)是存储单一数据类型的多维数组，而ufunc则是能够对数组进行处理的函数。</p>
<p>Numpy为python提供了快速的多维数组处理能力。用于数学计算，提供了数学函数，但往往用ndarray数据结构，ndarray是数据结构，n维数组，本身内核是C/C++，编程和运行速度快。</p>
<p><strong>(numpy/scipy)官网</strong>：https://www.scipy.org/</p>
<p><strong>简要介绍</strong></p>
<p>NumPy是高性能科学计算和数据分析的基础包，用来存储和处理大型矩阵，比Python自身的嵌套列表（nested list structure)结构要高效的多，本身是由C语言开发。这个是很基础的扩展，其余的扩展都是以此为基础。数据结构为ndarray,一般有三种方式来创建。</p>
<ol>
<li>Python对象的转换</li>
<li>通过类似工厂函数numpy内置函数生成：np.arange,np.linspace.....</li>
<li>从硬盘读取，loadtxt</li>
</ol>
<p>快速入门：<a href="https://link.zhihu.com/?target=https%3A//docs.scipy.org/doc/numpy-dev/user/quickstart.html" target="_blank" rel="noopener noreferrer">Quickstart tutorial<ExternalLinkIcon/></a></p>
<p>部分功能如下：</p>
<ul>
<li>
<p>ndarray, 具有矢量算术运算和复杂广播能力的快速且节省空间的多维数组。</p>
</li>
<li>
<p>用于对整组数据进行快速运算的标准数学函数（无需编写循环）。</p>
</li>
<li>
<p>用于读写磁盘数据的工具以及用于操作内存映射文件的工具。</p>
</li>
<li>
<p>线性代数、随机数生成以及傅里叶变换功能。</p>
</li>
<li>
<p>用于集成C、C++、Fortran等语言编写的代码的工具。</p>
</li>
</ul>
<p><strong>百度百科</strong></p>
<p>NumPy系统是Python的一种开源的数值计算扩展。这种工具可用来存储和处理大型矩阵，比Python自身的嵌套列表（nested list structure)结构要高效的多（该结构也可以用来表示矩阵matrix）。据说NumPy将Python相当于变成一种免费的更强大的MatLab系统。</p>
<p>一个用python实现的科学计算包。包括：1、一个强大的N维数组对象Array；2、比较成熟的（广播）函数库；3、用于整合C/C++和Fortran代码的工具包；4、实用的线性代数、傅里叶变换和随机数生成函数。numpy和稀疏矩阵运算包scipy配合使用更加方便。</p>
<p>NumPy（Numeric Python）提供了许多高级的数值编程工具，如：矩阵数据类型、矢量处理，以及精密的运算库。专为进行严格的数字处理而产生。多为很多大型金融公司使用，以及核心的科学计算组织如：Lawrence Livermore，NASA用其处理一些本来使用C++，Fortran或Matlab等所做的任务。</p>
<p><strong>NumPy库简介</strong></p>
<p>这两年Python特别火，在一些IT网站上转一圈各处都能看到关于Python的技术类文章，引用<a href="http://www.python.org/doc/essays/blurb.html" target="_blank" rel="noopener noreferrer">官方的说法<ExternalLinkIcon/></a>，Python就是“一种解释型的、面向对象的、带有动态语义的高级程序设计语言”。Python是一种想让你在编程实现自己想法时感觉不那么碍手碍脚的程序设计语言。Python特点是开发快，语言简洁，可以花较少的代价实现想要的功能，并且编写的程序清晰易懂，比如豆瓣、国外视频网站youtube、社交分享网站Reddit、文件分享服务Dropbox就是使用Python开发的网站，如此看来Python在大规模使用方面应该没什么问题；Python从性能方面来看，有速度要求的话，还是用C++改写关键部分吧。Python在特定领域的表现还是很突出的，比如作为脚本语言、网络爬虫、科学算法等方面。我是因为搞深度学习开始接触Python的，之前学的C++，在遇见Python后简直打开了新世界的大门，码代码的幸福感简直爆棚啊。。。。。。下面开始正题</p>
<p><strong>NumPy是使用Python进行科学计算的一个基本库。</strong> 其中包括：</p>
<ol>
<li>一个强大的N维数组对象Array；</li>
<li>用于集成C / C ++和Fortran代码的工具；</li>
<li>实用的线性代数、傅里叶变换和随机数生成函数。</li>
</ol>
<p>除了其明显的科学用途，NumPy也可以用作通用数据的高效多维容器。 可以定义任意数据类型。 这允许NumPy无缝，快速地与各种各样的数据库集成。</p>
<h1 id="array数组和矩阵的基本运算" tabindex="-1"><a class="header-anchor" href="#array数组和矩阵的基本运算" aria-hidden="true">#</a> Array数组和矩阵的基本运算</h1>
<p><strong>numpy还是很强大的，这里把一些矩阵基本操作做一些整理，方便大家，也方便我自己码代码的时候查找。</strong></p>
<p>有句话对于我这个初学者来说觉得还是挺符合的，翻书看视频浏览教程贴啊什么的，会发现很多知识点，一开始并不用非得记下都有些什么函数，问题是好像也记不住，学过去之后只要知道这个东西它都能实现什么些什么功能能干些什么事就够了，在你写程序的时候你需要实现什么，这时候再去查找就足够了，用着用着自然就记住了。犹记得那时候苦翻C++ Primer Plus那本书时的悲痛，学语言不用的话真是看后面忘前面。</p>
<p>犹记得那时候苦翻C++ Primer Plus那本书时的悲痛，学语言不用的话真是看后面忘前面。</p>
<h2 id="函数库的导入" tabindex="-1"><a class="header-anchor" href="#函数库的导入" aria-hidden="true">#</a> 函数库的导入</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token comment">#或者</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里<code v-pre>np</code>就是<code v-pre>numpy</code>的一个别名。在下面的程序中就可以用<code v-pre>np</code>来代替<code v-pre>numpy</code>了。</p>
<h2 id="array常用变量及参数" tabindex="-1"><a class="header-anchor" href="#array常用变量及参数" aria-hidden="true">#</a> array常用变量及参数</h2>
<p>numpy.array 常用变量及参数</p>
<ul>
<li>dtype变量，用来存放数据类型， 创建数组时可以同时指定。</li>
<li>shape变量， 存放数组的大小， 这人值是可变的， 只要<strong>确保无素个数不变</strong>的情况下可以任意修改。（-1为自动适配， 保证个数不变）</li>
<li>reshape方法，创建一个改变了形状的数组，与<strong>原数组是内存共享的</strong>，即都指向同一块内存。</li>
</ul>
<h2 id="创建矩阵" tabindex="-1"><a class="header-anchor" href="#创建矩阵" aria-hidden="true">#</a> 创建矩阵</h2>
<h3 id="直接创建矩阵array" tabindex="-1"><a class="header-anchor" href="#直接创建矩阵array" aria-hidden="true">#</a> 直接创建矩阵array</h3>
<p>首先需要创建数组才能对其进行其它操作，通过给array函数传递Python的序列对象创建数组，如果传递的是多层嵌套的序列，将创建多维数组(如c):</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[1 2 3 4]</span>
<span class="token comment">#---</span>
<span class="token comment">#[5 6 7 8]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若导入<code v-pre>numpy</code>用的是<code v-pre>import numpy</code>命令，那么在创建数组的时候用<code v-pre>a = numpy.array([1, 2, 3, 4])</code>的形式
若导入<code v-pre>numpy</code>用的是<code v-pre>import numpy as np</code>命令，那么用<code v-pre>a = np.array([1, 2, 3, 4])</code></p>
<h3 id="创建0矩阵zeros" tabindex="-1"><a class="header-anchor" href="#创建0矩阵zeros" aria-hidden="true">#</a> 创建0矩阵zeros</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 创建3行4列的0矩阵</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>np<span class="token punctuation">.</span><span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token comment"># 可以在创建的时候指定数据类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建1矩阵ones" tabindex="-1"><a class="header-anchor" href="#创建1矩阵ones" aria-hidden="true">#</a> 创建1矩阵ones</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dtype <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment"># 创建3行4列的1矩阵</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[1 1 1 1]</span>
<span class="token comment"># [1 1 1 1]</span>
<span class="token comment"># [1 1 1 1]]</span>
<span class="token comment">#int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区间内按等差创建矩阵arange" tabindex="-1"><a class="header-anchor" href="#区间内按等差创建矩阵arange" aria-hidden="true">#</a> 区间内按等差创建矩阵arange</h3>
<p>左闭右开</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># 10开始到30，没加5生成一个元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[10 15 20 25]</span>
<span class="token comment"># 可以通过修改shape属性改变维度，参考上文</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment"># 0开始到2，没加0.3生成一个元素</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[ 0.   0.3  0.6  0.9  1.2  1.5  1.8]</span>
c <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment"># 从0开始每加1共生成12个元素，并通过reshape设定矩阵大小为3行4列</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 0  1  2  3]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 8  9 10 11]]</span>
d <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 生成2行3列矩阵，元素为0-1之间的随机值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 0.83492169  0.76747417  0.3277655 ]</span>
<span class="token comment"># [ 0.99115563  0.32029091  0.69754825]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区间内按元素个数取值linspace" tabindex="-1"><a class="header-anchor" href="#区间内按元素个数取值linspace" aria-hidden="true">#</a> 区间内按元素个数取值linspace</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> numpy <span class="token keyword">import</span> pi
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">*</span>pi<span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0到2*pi，取11个值</span>
<span class="token comment">#输出</span>
<span class="token comment">#[ 0.          0.62831853  1.25663706  1.88495559  2.51327412  3.14159265</span>
<span class="token comment">#  3.76991118  4.39822972  5.02654825  5.65486678  6.28318531]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0到10，取11个值</span>
<span class="token comment">#输出</span>
<span class="token comment">#[  0.   1.   2.   3.   4.   5.   6.   7.   8.   9.  10.]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建随机数组random" tabindex="-1"><a class="header-anchor" href="#创建随机数组random" aria-hidden="true">#</a> 创建随机数组random</h3>
<p>这里有详细的numpy.random的用法介绍：</p>
<p><RouterLink to="/docs/engineering/coding/programing-language/python/library/#https:/www.cnblogs.com/lemonbit/p/6864179.html">为什么你用不好Numpy的random函数？</RouterLink></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">#[ 0.01449445  0.61745786  0.47911107  0.80746168  0.48032829]</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">#[[ 0.00194012  0.6861311   0.06081057]</span>
<span class="token comment"># [ 0.1238706   0.48659479  0.76274877]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵拼接按行vstack" tabindex="-1"><a class="header-anchor" href="#矩阵拼接按行vstack" aria-hidden="true">#</a> 矩阵拼接按行vstack</h3>
<h3 id="矩阵拼接按列hstack" tabindex="-1"><a class="header-anchor" href="#矩阵拼接按列hstack" aria-hidden="true">#</a> 矩阵拼接按列hstack</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>vstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 按行拼接，也就是竖方向拼接</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>hstack<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 按列拼接，也就是横方向拼接</span>
<span class="token comment">#输出：</span>
<span class="token comment">#[[ 9.  4.]</span>
<span class="token comment"># [ 4.  4.]]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 8.  3.]</span>
<span class="token comment"># [ 9.  8.]]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 9.  4.]</span>
<span class="token comment"># [ 4.  4.]</span>
<span class="token comment"># [ 8.  3.]</span>
<span class="token comment"># [ 9.  8.]]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 9.  4.  8.  3.]</span>
<span class="token comment"># [ 4.  4.  9.  8.]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵分割按列hsplit" tabindex="-1"><a class="header-anchor" href="#矩阵分割按列hsplit" aria-hidden="true">#</a> 矩阵分割按列hsplit</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>hsplit<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 按列分割，也就是横方向分割，参数a为要分割的矩阵，参数3为分成三份</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>hsplit<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 参数(3, 4)为在维度3前面也就是第4列前切一下，在维度4也就是第5列前面切一下</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 2.  9.  4.  6.  1.  9.]</span>
<span class="token comment"># [ 7.  1.  7.  9.  3.  5.]]</span>
<span class="token comment">#[array([[ 2.,  9.],</span>
<span class="token comment">#       [ 7.,  1.]]), array([[ 4.,  6.],</span>
<span class="token comment">#       [ 7.,  9.]]), array([[ 1.,  9.],</span>
<span class="token comment">#       [ 3.,  5.]])]</span>
<span class="token comment">#---</span>
<span class="token comment">#[array([[ 2.,  9.],</span>
<span class="token comment">#       [ 7.,  1.]]), array([[ 4.],</span>
<span class="token comment">#       [ 7.]]), array([[ 6.,  1.],</span>
<span class="token comment">#       [ 9.,  3.]]), array([[ 9.],</span>
<span class="token comment">#       [ 5.]])]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵分割按行vsplit" tabindex="-1"><a class="header-anchor" href="#矩阵分割按行vsplit" aria-hidden="true">#</a> 矩阵分割按行vsplit</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>vsplit<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 按列分割，也就是横方向分割，参数a为要分割的矩阵，参数3为分成三份</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>vsplit<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 参数(3, 4)为在维度3前面也就是第4列前切一下，在维度4也就是第5列前面切一下</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 4.  3.]</span>
<span class="token comment"># [ 9.  1.]</span>
<span class="token comment"># [ 0.  0.]</span>
<span class="token comment"># [ 8.  8.]</span>
<span class="token comment"># [ 0.  2.]</span>
<span class="token comment"># [ 5.  0.]]</span>
<span class="token comment">#[array([[ 4.,  3.],</span>
<span class="token comment">#       [ 9.,  1.]]), array([[ 0.,  0.],</span>
<span class="token comment">#       [ 8.,  8.]]), array([[ 0.,  2.],</span>
<span class="token comment">#       [ 5.,  0.]])]</span>
<span class="token comment">#---</span>
<span class="token comment">#[array([[ 4.,  3.],</span>
<span class="token comment">#       [ 9.,  1.]]), array([[ 0.,  0.]]), array([[ 8.,  8.],</span>
<span class="token comment">#       [ 0.,  2.]]), array([[ 5.,  0.]])]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多重复制tile" tabindex="-1"><a class="header-anchor" href="#多重复制tile" aria-hidden="true">#</a> 多重复制tile</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>tile<span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 参数(4, 3)为按行复制4倍，按列复制3倍</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#[ 5 10 15]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 5 10 15  5 10 15  5 10 15]</span>
<span class="token comment"># [ 5 10 15  5 10 15  5 10 15]</span>
<span class="token comment"># [ 5 10 15  5 10 15  5 10 15]</span>
<span class="token comment"># [ 5 10 15  5 10 15  5 10 15]]</span>
<span class="token comment">#(4, 9)</span>
<span class="token comment">#&lt;class 'numpy.ndarray'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用reshape创建新数组" tabindex="-1"><a class="header-anchor" href="#用reshape创建新数组" aria-hidden="true">#</a> 用reshape创建新数组</h3>
<p>使用数组的reshape方法，可以创建一个改变了尺寸的新数组，原数组的shape保持不变：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#b.shape = -1, 3</span>
<span class="token comment">#b.shape = (4, 3)</span>
<span class="token comment">#b.shape = 4, 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'b = '</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'a = '</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
<span class="token comment">#---</span>
<span class="token comment">#b =  [[ 1  2  3]</span>
<span class="token comment"># [ 4  4  5]</span>
<span class="token comment"># [ 6  7  7]</span>
<span class="token comment"># [ 8  9 10]]</span>
<span class="token comment">#(4, 3)</span>
<span class="token comment">#a =  [[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本操作和运算" tabindex="-1"><a class="header-anchor" href="#基本操作和运算" aria-hidden="true">#</a> 基本操作和运算</h2>
<h3 id="求和sum" tabindex="-1"><a class="header-anchor" href="#求和sum" aria-hidden="true">#</a> 求和sum()</h3>
<h3 id="求最大值max" tabindex="-1"><a class="header-anchor" href="#求最大值max" aria-hidden="true">#</a> 求最大值max()</h3>
<h3 id="求最小值min" tabindex="-1"><a class="header-anchor" href="#求最小值min" aria-hidden="true">#</a> 求最小值min()</h3>
<h3 id="求平均值mean" tabindex="-1"><a class="header-anchor" href="#求平均值mean" aria-hidden="true">#</a> 求平均值mean()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test1 <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 225</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 45</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 25.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵行求和sum-axis-1" tabindex="-1"><a class="header-anchor" href="#矩阵行求和sum-axis-1" aria-hidden="true">#</a> 矩阵行求和sum(axis=1)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test1 <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test1<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 array([30, 75, 120])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵列求和sum-axis-0" tabindex="-1"><a class="header-anchor" href="#矩阵列求和sum-axis-0" aria-hidden="true">#</a> 矩阵列求和sum(axis=0)</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test1 <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
peint<span class="token punctuation">(</span>test1<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 array([60, 75, 90])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素求平方a2" tabindex="-1"><a class="header-anchor" href="#元素求平方a2" aria-hidden="true">#</a> 元素求平方a2</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 [0 1 2 3]</span>
<span class="token comment">#      [0 1 4 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素求e的n次幂exp" tabindex="-1"><a class="header-anchor" href="#元素求e的n次幂exp" aria-hidden="true">#</a> 元素求e的n次幂exp</h3>
<h3 id="元素开根号sqrt" tabindex="-1"><a class="header-anchor" href="#元素开根号sqrt" aria-hidden="true">#</a> 元素开根号sqrt</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#e的n次幂</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#开根号</span>
<span class="token comment"># 输出 [0 1 2]</span>
<span class="token comment">#      [1. 2.71828183 7.3890561]</span>
<span class="token comment">#      [0 1. 1.41421356]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向下取整floor" tabindex="-1"><a class="header-anchor" href="#向下取整floor" aria-hidden="true">#</a> 向下取整floor</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

testRandom <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
testFloor <span class="token operator">=</span> np<span class="token punctuation">.</span>floor<span class="token punctuation">(</span>testRandom<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>testRandom<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>testFloor<span class="token punctuation">)</span>

<span class="token comment"># 输出 [[ 4.1739405   3.61074364  0.96858834]</span>
<span class="token comment">#       [ 4.83959291  8.786262    0.74719657]]</span>
<span class="token comment">#      [[ 4.  3.  0.]</span>
<span class="token comment">#       [ 4.  8.  0.]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平坦化数组ravel" tabindex="-1"><a class="header-anchor" href="#平坦化数组ravel" aria-hidden="true">#</a> 平坦化数组ravel</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
test<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>T<span class="token punctuation">)</span>

<span class="token comment"># 输出 [[2 3]</span>
<span class="token comment">#      [4 5]]</span>
<span class="token comment">#     [2 3 4 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找并修改矩阵特定元素" tabindex="-1"><a class="header-anchor" href="#查找并修改矩阵特定元素" aria-hidden="true">#</a> 查找并修改矩阵特定元素</h3>
<p>例如下面代码中，x_data是我代码中的一个矩阵，但是矩阵数据中有缺失值是用?表示的，我要做一些数据处理，就需要把?换掉，比如换成0。(注：这里我换成了更简单的矩阵)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'----'</span><span class="token punctuation">)</span>

a<span class="token punctuation">[</span>a<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">100</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[0 1 2 3 4]</span>
<span class="token comment">#----</span>
<span class="token comment">#[100   1   2   3   4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array数组的数据类型" tabindex="-1"><a class="header-anchor" href="#array数组的数据类型" aria-hidden="true">#</a> Array数组的数据类型</h2>
<p>关于数据类型：List中的元素可以是不同的数据类型，而Array和Series中则只允许存储相同的数据类型，这样可以更有效的使用内存，提高运算效率。</p>
<p>list类型是python自带的类型，下面的结构就是list类型：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#[1, 2, 3, 4, 5]</span>
<span class="token comment">#&lt;class 'list'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>array数组的数据类型有下面几种</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>bool -- True , False
int -- int16 , int32 , int64
float -- float16 , float32 , float64
string -- string , unicode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询数据类型dtype" tabindex="-1"><a class="header-anchor" href="#查询数据类型dtype" aria-hidden="true">#</a> 查询数据类型dtype</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
<span class="token comment"># int32</span>
<span class="token comment">#&lt;class 'numpy.ndarray'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建时指定元素类型" tabindex="-1"><a class="header-anchor" href="#创建时指定元素类型" aria-hidden="true">#</a> 创建时指定元素类型</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">'str'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a.dtype = "</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"b.dtype = "</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
<span class="token comment">#a.dtype =  int32</span>
<span class="token comment">#---</span>
<span class="token comment">#[['1' '2' '3' '4']</span>
<span class="token comment"># ['4' '5' '6' '7']</span>
<span class="token comment"># ['7' '8' '9' '10']]</span>
<span class="token comment">#b.dtype =  &lt;U2 ???????这是什么鬼？为什么不是str？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转换数据类型astype" tabindex="-1"><a class="header-anchor" href="#转换数据类型astype" aria-hidden="true">#</a> 转换数据类型astype</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token string">'str'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"b.dtype = "</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
b <span class="token operator">=</span> b<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"b.dtype = "</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>dtype<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[['1' '2' '3' '4']</span>
<span class="token comment"># ['4' '5' '6' '7']</span>
<span class="token comment"># ['7' '8' '9' '10']]</span>
<span class="token comment">#b.dtype =  &lt;U2</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
<span class="token comment">#b.dtype =  int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改数组的shape" tabindex="-1"><a class="header-anchor" href="#修改数组的shape" aria-hidden="true">#</a> 修改数组的shape</h3>
<p>通过修改数组的shape属性，在保持数组元素个数不变的情况下，改变数组每个轴的长度。下面的例子将数组b的shape改为(4, 3)，从(3, 4)改为(4, 3)并不是对数组进行转置，而只是改变每个轴的大小，数组元素在内存中的位置并没有改变：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token comment">#当某个轴的元素为-1时，将根据数组元素的个数自动计算该轴的长度</span>
<span class="token comment">#b.shape = -1, 3</span>
<span class="token comment">#b.shape = (4, 3)</span>
<span class="token comment">#b.shape = 4, 3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 1  2  3  4]</span>
<span class="token comment"># [ 4  5  6  7]</span>
<span class="token comment"># [ 7  8  9 10]]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 1  2  3]</span>
<span class="token comment"># [ 4  4  5]</span>
<span class="token comment"># [ 6  7  7]</span>
<span class="token comment"># [ 8  9 10]]</span>
<span class="token comment">#(4, 3)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="矩阵运算" tabindex="-1"><a class="header-anchor" href="#矩阵运算" aria-hidden="true">#</a> 矩阵运算</h2>
<h3 id="矩阵乘法dot" tabindex="-1"><a class="header-anchor" href="#矩阵乘法dot" aria-hidden="true">#</a> 矩阵乘法dot()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token operator">*</span>b<span class="token punctuation">)</span> <span class="token comment"># 对应位置元素相乘</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 矩阵乘法</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 矩阵乘法，同上</span>
<span class="token comment"># 输出 [[5 12]</span>
<span class="token comment">#       [21 32]]</span>
<span class="token comment">#      [[19 22]</span>
<span class="token comment">#       [43 50]]</span>
<span class="token comment">#      [[19 22]</span>
<span class="token comment">#       [43 50]] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="矩阵转置t-transpose" tabindex="-1"><a class="header-anchor" href="#矩阵转置t-transpose" aria-hidden="true">#</a> 矩阵转置T/transpose()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
test<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>T<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 [[2 3]</span>
<span class="token comment">#       [4 5]</span>
<span class="token comment">#       [6 7]]</span>
<span class="token comment">#     [[2 4 6]</span>
<span class="token comment">#      [3 5 7]]</span>
<span class="token comment">#[[2 4 6]</span>
<span class="token comment"># [3 5 7]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="求特征值和特征向量eig" tabindex="-1"><a class="header-anchor" href="#求特征值和特征向量eig" aria-hidden="true">#</a> 求特征值和特征向量eig()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> numpy<span class="token punctuation">.</span>linalg <span class="token keyword">as</span> nplg
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>nplg<span class="token punctuation">.</span>eig<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

eigValues <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">3.</span><span class="token punctuation">,</span>  <span class="token number">1.</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
eigVectors <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">0.</span>        <span class="token punctuation">,</span>  <span class="token number">0.70710678</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                       <span class="token punctuation">[</span> <span class="token number">1.</span>        <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.70710678</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>eigVectors<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>eigValues<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span>eigVectors<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>eigVectors<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>eigValues<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span>eigVectors<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="求矩阵的迹trace" tabindex="-1"><a class="header-anchor" href="#求矩阵的迹trace" aria-hidden="true">#</a> 求矩阵的迹trace()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>trace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>trace<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 2  3  4]</span>
<span class="token comment"># [ 5  6  7]</span>
<span class="token comment"># [ 8  9 10]]</span>
<span class="token comment">#18</span>
<span class="token comment">#18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2>
<h3 id="共享内存" tabindex="-1"><a class="header-anchor" href="#共享内存" aria-hidden="true">#</a> 共享内存=</h3>
<p>a和b共享数据存储内存区域，因此修改其中任意一个数组的元素都会同时修改另外一个数组或矩阵的内容：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a

<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b <span class="token keyword">is</span> a<span class="token punctuation">)</span> <span class="token comment"># 判断b是a？</span>
<span class="token comment"># 输出 [ 0  1  2  3  4  5  6  7  8  9 10 11]</span>
<span class="token comment">#    [ 0  1  2  3  4  5  6  7  8  9 10 11]</span>
<span class="token comment">#    True</span>
b<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token comment"># 输出 (3, 4)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出[[100   1   2   3]</span>
<span class="token comment"># [  4   5   6   7]</span>
<span class="token comment"># [  8   9  10  11]]</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#内存地址</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 201372576</span>
<span class="token comment">#      201372576</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浅复制view" tabindex="-1"><a class="header-anchor" href="#浅复制view" aria-hidden="true">#</a> 浅复制view()</h3>
<p>不是同一地址，但是会被改变</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># The view method creates a new array object that looks at the same data.</span>

<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>view<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># b是新创建出来的数组，但是b和a共享数据</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>b <span class="token keyword">is</span> a<span class="token punctuation">)</span> <span class="token comment"># 判断b是a？</span>
<span class="token comment"># 输出 False</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 输出 [ 0  1  2  3  4  5  6  7  8  9 10 11]</span>
b<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token comment"># 改变b的shape，a的shape不会受影响</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 输出 (12,)</span>
<span class="token comment">#[[ 0  1  2  3  4  5]</span>
<span class="token comment"># [ 6  7  8  9 10 11]]</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1234</span> <span class="token comment"># 改变b第1行第5列元素为1234，a对应位置元素受到影响</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 输出 [[   0    1    2    3 1234    5]</span>
<span class="token comment">#         [   6    7    8    9   10   11]]</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出 [   0    1    2    3 1234    5    6    7    8    9   10   11]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深复制copy" tabindex="-1"><a class="header-anchor" href="#深复制copy" aria-hidden="true">#</a> 深复制copy()</h3>
<p>不是同一地址，也不会被改变</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># The copy method makes a complete copy of the array and its data.</span>

<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>shape <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1234</span>

c <span class="token operator">=</span> a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c <span class="token keyword">is</span> a<span class="token punctuation">)</span>
c<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9999</span> <span class="token comment"># 改变c元素的值，不会影响a的元素</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#False</span>
<span class="token comment">#[[9999    1    2    3]</span>
<span class="token comment"># [1234    5    6    7]</span>
<span class="token comment"># [   8    9   10   11]]</span>
<span class="token comment">#[[   0    1    2    3]</span>
<span class="token comment"># [1234    5    6    7]</span>
<span class="token comment"># [   8    9   10   11]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询矩阵的维度个数形状等" tabindex="-1"><a class="header-anchor" href="#查询矩阵的维度个数形状等" aria-hidden="true">#</a> 查询矩阵的维度个数形状等</h2>
<h3 id="查询维度ndim" tabindex="-1"><a class="header-anchor" href="#查询维度ndim" aria-hidden="true">#</a> 查询维度ndim</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>ndim<span class="token punctuation">)</span>
<span class="token comment">#输出</span>
<span class="token comment">#2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询元素个数size" tabindex="-1"><a class="header-anchor" href="#查询元素个数size" aria-hidden="true">#</a> 查询元素个数size</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
<span class="token comment"># 输出 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询矩阵的大小shape" tabindex="-1"><a class="header-anchor" href="#查询矩阵的大小shape" aria-hidden="true">#</a> 查询矩阵的大小shape</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#(4,)</span>
<span class="token comment">#---</span>
<span class="token comment">#(3, 4)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4, )shape有一个元素即为一维数组，数组中有4个元素
(3, 4)shape有两个元素即为二维数组，数组为3行4列</p>
<h2 id="判断" tabindex="-1"><a class="header-anchor" href="#判断" aria-hidden="true">#</a> 判断==</h2>
<h3 id="利用-判断数组或矩阵中是否存在某个值" tabindex="-1"><a class="header-anchor" href="#利用-判断数组或矩阵中是否存在某个值" aria-hidden="true">#</a> 利用==判断数组或矩阵中是否存在某个值</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test <span class="token operator">>=</span> <span class="token number">15</span><span class="token punctuation">)</span>
<span class="token comment">#[False False  True  True]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token operator">*</span><span class="token punctuation">(</span>test <span class="token operator">>=</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">15</span><span class="token punctuation">)</span>
<span class="token comment">#[15 15 30 35]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将判断结果赋给某个变量</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                 <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                 <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 判断test中第三列等于30的元素</span>
secondColumn30 <span class="token operator">=</span> <span class="token punctuation">(</span>test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>secondColumn30<span class="token punctuation">)</span>
<span class="token comment"># 取secondColumn30为True的行，打印</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">[</span>secondColumn30<span class="token punctuation">,</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[False  True False]</span>
<span class="token comment">#[[20 25 30]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一次判断多个条件" tabindex="-1"><a class="header-anchor" href="#一次判断多个条件" aria-hidden="true">#</a> 一次判断多个条件</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
test <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
equalTo15And20 <span class="token operator">=</span> <span class="token punctuation">(</span>test <span class="token operator">==</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>test <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token comment">#同时等于15又等于20的元素，显然是不存在的</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>equalTo15And20<span class="token punctuation">)</span>
<span class="token comment">#[False False False False]</span>
equalTo15Or20 <span class="token operator">=</span> <span class="token punctuation">(</span>test <span class="token operator">==</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>test <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>equalTo15Or20<span class="token punctuation">)</span><span class="token comment">#等于15或者等于20的元素</span>
<span class="token comment">#[False False  True  True]</span>
test<span class="token punctuation">[</span>equalTo15Or20<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
<span class="token comment">#[  5  10 100 100]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序和索引" tabindex="-1"><a class="header-anchor" href="#排序和索引" aria-hidden="true">#</a> 排序和索引</h2>
<h3 id="排序sort" tabindex="-1"><a class="header-anchor" href="#排序sort" aria-hidden="true">#</a> 排序sort</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">#[[4 3 5]</span>
<span class="token comment"># [1 2 1]]</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>a<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 对a按每行中元素从小到大排序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">#[[3 4 5]</span>
<span class="token comment"># [1 1 2]]</span>
c <span class="token operator">=</span> a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 深拷贝</span>
c<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment">#[[1 2 1]</span>
<span class="token comment"># [4 3 5]]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token comment"># a没有随着c变化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对单行数组进行排序的另外一种方法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>argsort<span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment"># 求a从小到大排序的坐标</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 按求出来的坐标顺序排序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>np<span class="token punctuation">.</span>argsort<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按行或按列找到最大值的索引argmax" tabindex="-1"><a class="header-anchor" href="#按行或按列找到最大值的索引argmax" aria-hidden="true">#</a> 按行或按列找到最大值的索引argmax</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
data <span class="token operator">=</span> np<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span>
ind <span class="token operator">=</span> data<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment"># 按列得到每一列中最大元素的索引，axis=1为按行</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>ind<span class="token punctuation">)</span>
data_max <span class="token operator">=</span> data<span class="token punctuation">[</span>ind<span class="token punctuation">,</span> <span class="token builtin">range</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment"># 将最大值取出来</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>data_max<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#也可以直接取最大值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据归一化" tabindex="-1"><a class="header-anchor" href="#数据归一化" aria-hidden="true">#</a> 数据归一化</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
a<span class="token operator">=</span> <span class="token number">10</span><span class="token operator">*</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---"</span><span class="token punctuation">)</span>
amin<span class="token punctuation">,</span> amax <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>amin<span class="token punctuation">,</span> amax<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---"</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">-</span>amin<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span>amax<span class="token operator">-</span>amin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---"</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">-</span>b<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment">#[[ 7.33412218  7.62784714  7.06761515  6.56230239  3.76404535]</span>
<span class="token comment"># [ 2.68197834  6.02335055  4.67169946  5.08454875  6.97170333]</span>
<span class="token comment"># [ 4.02393841  3.9723266   1.82841784  7.6049149   0.38845819]</span>
<span class="token comment"># [ 6.55672442  1.40986757  1.14657213  3.0356768   9.55024583]</span>
<span class="token comment"># [ 1.06007416  1.23600072  0.97610622  8.8232397   0.39996053]]</span>
<span class="token comment">#---</span>
<span class="token comment">#0.38845818848 9.5502458299</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 0.75811231  0.7901721   0.72902333  0.67386895  0.36844198]</span>
<span class="token comment"># [ 0.25033544  0.61504289  0.46751152  0.51257361  0.71855465]</span>
<span class="token comment"># [ 0.39680905  0.39117567  0.15717016  0.78766907  0.        ]</span>
<span class="token comment"># [ 0.67326012  0.11148582  0.08274738  0.28894128  1.        ]</span>
<span class="token comment"># [ 0.07330622  0.09250842  0.0641412   0.920648    0.00125547]]</span>
<span class="token comment">#---</span>
<span class="token comment">#[[ 0.75811231  0.7901721   0.72902333  0.67386895  0.36844198]</span>
<span class="token comment"># [ 0.25033544  0.61504289  0.46751152  0.51257361  0.71855465]</span>
<span class="token comment"># [ 0.39680905  0.39117567  0.15717016  0.78766907  0.        ]</span>
<span class="token comment"># [ 0.67326012  0.11148582  0.08274738  0.28894128  1.        ]</span>
<span class="token comment"># [ 0.07330622  0.09250842  0.0641412   0.920648    0.00125547]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="最简洁的numpy大纲" tabindex="-1"><a class="header-anchor" href="#最简洁的numpy大纲" aria-hidden="true">#</a> 最简洁的NumPy大纲</h1>
<h2 id="numpy函数和属性" tabindex="-1"><a class="header-anchor" href="#numpy函数和属性" aria-hidden="true">#</a> NumPy函数和属性</h2>
<h3 id="numpy类型" tabindex="-1"><a class="header-anchor" href="#numpy类型" aria-hidden="true">#</a> NumPy类型</h3>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">类型代码</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">int8、uint8</td>
<td style="text-align:center">i1、u1</td>
<td style="text-align:center">有符号和无符号8位整型（1字节）</td>
</tr>
<tr>
<td style="text-align:center">int16、uint16</td>
<td style="text-align:center">i2、u2</td>
<td style="text-align:center">有符号和无符号16位整型（2字节）</td>
</tr>
<tr>
<td style="text-align:center">int32、uint32</td>
<td style="text-align:center">i4、u4</td>
<td style="text-align:center">有符号和无符号32位整型（4字节）</td>
</tr>
<tr>
<td style="text-align:center">int64、uint64</td>
<td style="text-align:center">i8、u8</td>
<td style="text-align:center">有符号和无符号64位整型（8字节）</td>
</tr>
<tr>
<td style="text-align:center">float16</td>
<td style="text-align:center">f2</td>
<td style="text-align:center">半精度浮点数</td>
</tr>
<tr>
<td style="text-align:center">float32</td>
<td style="text-align:center">f4、f</td>
<td style="text-align:center">单精度浮点数</td>
</tr>
<tr>
<td style="text-align:center">float64</td>
<td style="text-align:center">f8、d</td>
<td style="text-align:center">双精度浮点数</td>
</tr>
<tr>
<td style="text-align:center">float128</td>
<td style="text-align:center">f16、g</td>
<td style="text-align:center">扩展精度浮点数</td>
</tr>
<tr>
<td style="text-align:center">complex64</td>
<td style="text-align:center">c8</td>
<td style="text-align:center">分别用两个32位表示的复数</td>
</tr>
<tr>
<td style="text-align:center">complex128</td>
<td style="text-align:center">c16</td>
<td style="text-align:center">分别用两个64位表示的复数</td>
</tr>
<tr>
<td style="text-align:center">complex256</td>
<td style="text-align:center">c32</td>
<td style="text-align:center">分别用两个128位表示的复数</td>
</tr>
<tr>
<td style="text-align:center">bool</td>
<td style="text-align:center">?</td>
<td style="text-align:center">布尔型</td>
</tr>
<tr>
<td style="text-align:center">object</td>
<td style="text-align:center">O</td>
<td style="text-align:center">python对象</td>
</tr>
<tr>
<td style="text-align:center">string</td>
<td style="text-align:center">Sn</td>
<td style="text-align:center">固定长度字符串，每个字符1字节，如S10</td>
</tr>
<tr>
<td style="text-align:center">unicode</td>
<td style="text-align:center">Un</td>
<td style="text-align:center">固定长度Unicode，字节数由系统决定，如U10</td>
</tr>
</tbody>
</table>
<h3 id="numpy常用函数" tabindex="-1"><a class="header-anchor" href="#numpy常用函数" aria-hidden="true">#</a> numpy常用函数</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>生成函数</strong></th>
<th style="text-align:left"><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">np.array( x)<br>np.array( x, dtype)</td>
<td style="text-align:left">将输入数据转化为一个ndarray<br>将输入数据转化为一个类型为type的ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.asarray( array )</td>
<td style="text-align:left">将输入数据转化为一个新的（copy）ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.ones( N )<br>np.ones( N, dtype)<br>np.ones_like( ndarray )</td>
<td style="text-align:left">生成一个N长度的一维全一ndarray<br>生成一个N长度类型是dtype的一维全一ndarray<br>生成一个形状与参数相同的全一ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.zeros( N)<br>np.zeros( N, dtype)<br>np.zeros_like(ndarray)</td>
<td style="text-align:left">生成一个N长度的一维全零ndarray<br>生成一个N长度类型位dtype的一维全零ndarray<br>类似np.ones_like( ndarray )</td>
</tr>
<tr>
<td style="text-align:left">np.empty( N )<br>np.empty( N, dtype)<br>np.empty(ndarray)</td>
<td style="text-align:left">生成一个N长度的未初始化一维ndarray<br>生成一个N长度类型是dtype的未初始化一维ndarray<br>类似np.ones_like( ndarray )</td>
</tr>
<tr>
<td style="text-align:left">np.eye( N )<br>np.identity( N )</td>
<td style="text-align:left">创建一个N * N的单位矩阵（对角线为1，其余为0）</td>
</tr>
<tr>
<td style="text-align:left">np.arange( num)<br>np.arange( begin, end)<br>np.arange( begin, end, step)</td>
<td style="text-align:left">生成一个从0到num-1步数为1的一维ndarray<br>生成一个从begin到end-1步数为1的一维ndarray<br>生成一个从begin到end-step的步数为step的一维ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.mershgrid(ndarray, ndarray,...)</td>
<td style="text-align:left">生成一个ndarray * ndarray * ...的多维ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.where(cond, ndarray1, ndarray2)</td>
<td style="text-align:left">根据条件cond，选取ndarray1或者ndarray2，返回一个新的ndarray</td>
</tr>
<tr>
<td style="text-align:left">np.in1d(ndarray, [x,y,...])</td>
<td style="text-align:left">检查ndarray中的元素是否等于[x,y,...]中的一个，返回bool数组</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>矩阵函数</strong></td>
<td style="text-align:left"><strong>说明</strong></td>
</tr>
<tr>
<td style="text-align:left">np.diag( ndarray)<br>np.diag( [x,y,...])</td>
<td style="text-align:left">以一维数组的形式返回方阵的对角线（或非对角线）元素<br>将一维数组转化为方阵（非对角线元素为0）</td>
</tr>
<tr>
<td style="text-align:left">np.dot(ndarray, ndarray)</td>
<td style="text-align:left">矩阵乘法</td>
</tr>
<tr>
<td style="text-align:left">np.trace( ndarray)</td>
<td style="text-align:left">计算对角线元素的和</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>排序函数</strong></td>
<td style="text-align:left"><strong>说明</strong></td>
</tr>
<tr>
<td style="text-align:left">np.sort( ndarray)</td>
<td style="text-align:left">排序，返回副本</td>
</tr>
<tr>
<td style="text-align:left">np.unique(ndarray)</td>
<td style="text-align:left">返回ndarray中的元素，排除重复元素之后，并进行排序</td>
</tr>
<tr>
<td style="text-align:left">np.intersect1d( ndarray1, ndarray2)<br>np.union1d( ndarray1, ndarray2)<br>np.setdiff1d( ndarray1, ndarray2)<br>np.setxor1d( ndarray1, ndarray2)</td>
<td style="text-align:left">返回二者的交集并排序。<br>返回二者的并集并排序。<br>返回二者的差。<br>返回二者的对称差</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>一元计算函数</strong></td>
<td style="text-align:left"><strong>说明</strong></td>
</tr>
<tr>
<td style="text-align:left">np.abs(ndarray)<br>np.fabs(ndarray)</td>
<td style="text-align:left">计算绝对值计算绝对值（非复数）</td>
</tr>
<tr>
<td style="text-align:left">np.mean(ndarray)</td>
<td style="text-align:left">求平均值</td>
</tr>
<tr>
<td style="text-align:left">np.sqrt(ndarray)</td>
<td style="text-align:left">计算x^0.5</td>
</tr>
<tr>
<td style="text-align:left">np.square(ndarray)</td>
<td style="text-align:left">计算x^2</td>
</tr>
<tr>
<td style="text-align:left">np.exp(ndarray)</td>
<td style="text-align:left">计算e^x</td>
</tr>
<tr>
<td style="text-align:left">log、log10、log2、log1p</td>
<td style="text-align:left">计算自然对数、底为10的log、底为2的log、底为(1+x)的log</td>
</tr>
<tr>
<td style="text-align:left">np.sign(ndarray)</td>
<td style="text-align:left">计算正负号：1（正）、0（0）、-1（负）</td>
</tr>
<tr>
<td style="text-align:left">np.ceil(ndarray)<br>np.floor(ndarray)<br>np.rint(ndarray)</td>
<td style="text-align:left">计算大于等于改值的最小整数<br>计算小于等于该值的最大整数<br>四舍五入到最近的整数，保留dtype</td>
</tr>
<tr>
<td style="text-align:left">np.modf(ndarray)</td>
<td style="text-align:left">将数组的小数和整数部分以两个独立的数组方式返回</td>
</tr>
<tr>
<td style="text-align:left">np.isnan(ndarray)</td>
<td style="text-align:left">返回一个判断是否是NaN的bool型数组</td>
</tr>
<tr>
<td style="text-align:left">np.isfinite(ndarray)<br>np.isinf(ndarray)</td>
<td style="text-align:left">返回一个判断是否是有穷（非inf，非NaN）的bool型数组<br>返回一个判断是否是无穷的bool型数组</td>
</tr>
<tr>
<td style="text-align:left">cos、cosh、sin、sinh、tan、tanh</td>
<td style="text-align:left">普通型和双曲型三角函数</td>
</tr>
<tr>
<td style="text-align:left">arccos、arccosh、arcsin、arcsinh、arctan、arctanh</td>
<td style="text-align:left">反三角函数和双曲型反三角函数</td>
</tr>
<tr>
<td style="text-align:left">np.logical_not(ndarray)</td>
<td style="text-align:left">计算各元素not x的真值，相当于-ndarray</td>
</tr>
<tr>
<td style="text-align:left"><strong>多元计算函数</strong></td>
<td style="text-align:left"><strong>说明</strong></td>
</tr>
<tr>
<td style="text-align:left">np.add(ndarray, ndarray)<br>np.subtract(ndarray, ndarray)<br>np.multiply(ndarray, ndarray)<br>np.divide(ndarray, ndarray)<br>np.floor_divide(ndarray, ndarray)<br>np.power(ndarray, ndarray)<br>np.mod(ndarray, ndarray)</td>
<td style="text-align:left">相加<br>相减<br>乘法<br>除法<br>圆整除法（丢弃余数）<br>次方<br>求模</td>
</tr>
<tr>
<td style="text-align:left">np.maximum(ndarray, ndarray)<br>np.fmax(ndarray, ndarray)<br>np.minimun(ndarray, ndarray)<br>np.fmin(ndarray, ndarray)</td>
<td style="text-align:left">求最大值<br>求最大值（忽略NaN）<br>求最小值<br>求最小值（忽略NaN）</td>
</tr>
<tr>
<td style="text-align:left">np.copysign(ndarray, ndarray)</td>
<td style="text-align:left">将参数2中的符号赋予参数1</td>
</tr>
<tr>
<td style="text-align:left">np.greater(ndarray, ndarray)<br>np.greater_equal(ndarray, ndarray)<br>np.less(ndarray, ndarray)<br>np.less_equal(ndarray, ndarray)<br>np.equal(ndarray, ndarray)<br>np.not_equal(ndarray, ndarray)</td>
<td style="text-align:left">&gt;<br>&gt;=<br>&lt;<br>&lt;=<br>==<br>!=</td>
</tr>
<tr>
<td style="text-align:left">logical_and(ndarray, ndarray)<br>logical_or(ndarray, ndarray)<br>logical_xor(ndarray, ndarray)</td>
<td style="text-align:left">&amp;<br>单根竖线<br>^</td>
</tr>
<tr>
<td style="text-align:left">np.dot( ndarray, ndarray)</td>
<td style="text-align:left">计算两个ndarray的矩阵内积</td>
</tr>
<tr>
<td style="text-align:left">np.ix_([x,y,m,n],...)</td>
<td style="text-align:left">生成一个索引器，用于Fancy indexing(花式索引)</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>文件读写</strong></td>
<td style="text-align:left"><strong>说明</strong></td>
</tr>
<tr>
<td style="text-align:left">np.save(string, ndarray)</td>
<td style="text-align:left">将ndarray保存到文件名为 [string].npy 的文件中（无压缩）</td>
</tr>
<tr>
<td style="text-align:left">np.savez(string, ndarray1, ndarray2, ...)</td>
<td style="text-align:left">将所有的ndarray压缩保存到文件名为[string].npy的文件中</td>
</tr>
<tr>
<td style="text-align:left">np.savetxt(sring, ndarray, fmt, newline=‘\n‘)</td>
<td style="text-align:left">将ndarray写入文件，格式为fmt</td>
</tr>
<tr>
<td style="text-align:left">np.load(string)</td>
<td style="text-align:left">读取文件名string的文件内容并转化为ndarray对象（或字典对象）</td>
</tr>
<tr>
<td style="text-align:left">np.loadtxt(string, delimiter)</td>
<td style="text-align:left">读取文件名string的文件内容，以delimiter为分隔符转化为ndarray</td>
</tr>
</tbody>
</table>
<h2 id="numpy-ndarray函数和属性" tabindex="-1"><a class="header-anchor" href="#numpy-ndarray函数和属性" aria-hidden="true">#</a> NumPy.ndarray函数和属性</h2>
<h3 id="ndarray属性" tabindex="-1"><a class="header-anchor" href="#ndarray属性" aria-hidden="true">#</a> ndarray属性</h3>
<table>
<thead>
<tr>
<th style="text-align:center">ndarray函数</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">ndarray.ndim</td>
<td style="text-align:center">获取ndarray的维数</td>
</tr>
<tr>
<td style="text-align:center">ndarray.shape</td>
<td style="text-align:center">获取ndarray各个维度的长度</td>
</tr>
<tr>
<td style="text-align:center">ndarray.dtype</td>
<td style="text-align:center">获取ndarray中元素的数据类型</td>
</tr>
<tr>
<td style="text-align:center">ndarray.T</td>
<td style="text-align:center">简单转置矩阵ndarray</td>
</tr>
</tbody>
</table>
<h3 id="ndarray函数" tabindex="-1"><a class="header-anchor" href="#ndarray函数" aria-hidden="true">#</a> ndarray函数</h3>
<table>
<thead>
<tr>
<th><strong>函数</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>ndarray.astype(dtype)</td>
<td>转换类型，若转换失败则会出现TypeError</td>
</tr>
<tr>
<td>ndarray.copy()</td>
<td>复制一份ndarray(新的内存空间)</td>
</tr>
<tr>
<td>ndarray.reshape((N,M,...))</td>
<td>将ndarray转化为N<em>M</em>...的多维ndarray（非copy）</td>
</tr>
<tr>
<td>ndarray.transpose((xIndex,yIndex,...))</td>
<td>根据维索引xIndex,yIndex...进行矩阵转置，依赖于shape，不能用于一维矩阵（非copy）</td>
</tr>
<tr>
<td>ndarray.swapaxes(xIndex,yIndex)</td>
<td>交换维度（非copy）</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>计算函数</strong></td>
<td><strong>说明</strong></td>
</tr>
<tr>
<td>ndarray.mean( axis=0 )</td>
<td>求平均值</td>
</tr>
<tr>
<td>ndarray.sum( axis= 0)</td>
<td>求和</td>
</tr>
<tr>
<td>ndarray.cumsum( axis=0)<br>ndarray.cumprod( axis=0)</td>
<td>累加 <br>累乘</td>
</tr>
<tr>
<td>ndarray.std()<br>ndarray.var()</td>
<td>方差<br>标准差</td>
</tr>
<tr>
<td>ndarray.max()<br>ndarray.min()</td>
<td>最大值<br>最小值</td>
</tr>
<tr>
<td>ndarray.argmax()<br>darray.argmin()</td>
<td>最大值索引<br>最小值索引</td>
</tr>
<tr>
<td>ndarray.any()<br>ndarray.all()</td>
<td>是否至少有一个True是否全部为True</td>
</tr>
<tr>
<td>ndarray.dot( ndarray)</td>
<td>计算矩阵内积</td>
</tr>
<tr>
<td><strong>排序函数</strong></td>
<td><strong>说明</strong></td>
</tr>
<tr>
<td>ndarray.sort(axis=0)</td>
<td>排序，返回源数据</td>
</tr>
</tbody>
</table>
<h3 id="ndarray索引-切片方式" tabindex="-1"><a class="header-anchor" href="#ndarray索引-切片方式" aria-hidden="true">#</a> ndarray索引/切片方式</h3>
<table>
<thead>
<tr>
<th>ndarray[n]</th>
<th>选取第n+1个元素</th>
</tr>
</thead>
<tbody>
<tr>
<td>ndarray[n:m]</td>
<td>选取第n+1到第m个元素</td>
</tr>
<tr>
<td>ndarray[:]</td>
<td>选取全部元素</td>
</tr>
<tr>
<td>ndarray[n:]</td>
<td>选取第n+1到最后一个元素</td>
</tr>
<tr>
<td>ndarray[:n]</td>
<td>选取第0到第n个元素</td>
</tr>
<tr>
<td>ndarray[ bool_ndarray ]<br>注：bool_ndarray表示bool类型的ndarray</td>
<td>选取为true的元素</td>
</tr>
<tr>
<td>ndarray[[x,y,m,n]]...</td>
<td>选取顺序和序列为x、y、m、n的ndarray</td>
</tr>
<tr>
<td>ndarray[n,m]<br>ndarray[n][m]</td>
<td>选取第n+1行第m+1个元素</td>
</tr>
<tr>
<td>ndarray[n,m,...]<br>ndarray[n][m]....</td>
<td>选取n行n列....的元素</td>
</tr>
</tbody>
</table>
<h2 id="numpy-random函数" tabindex="-1"><a class="header-anchor" href="#numpy-random函数" aria-hidden="true">#</a> NumPy.random函数</h2>
<table>
<thead>
<tr>
<th><strong>函数</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>seed()<br>seed(int)<br>seed(ndarray)</td>
<td>确定随机数生成种子</td>
</tr>
<tr>
<td>permutation(int)<br>permutation(ndarray)</td>
<td>返回一个一维从0~9的序列的随机排列<br>返回一个序列的随机排列</td>
</tr>
<tr>
<td>shuffle(ndarray)</td>
<td>对一个序列就地随机排列</td>
</tr>
<tr>
<td>rand(int)<br>randint(begin,end,num=1)</td>
<td>产生int个均匀分布的样本值<br>从给定的begin和end随机选取num个整数</td>
</tr>
<tr>
<td>randn(N, M, ...)</td>
<td>生成一个N<em>M</em>...的正态分布（平均值为0，标准差为1）的ndarray</td>
</tr>
<tr>
<td>normal(size=(N,M,...))</td>
<td>生成一个N<em>M</em>...的正态（高斯）分布的ndarray</td>
</tr>
<tr>
<td>beta(ndarray1,ndarray2)</td>
<td>产生beta分布的样本值，参数必须大于0</td>
</tr>
<tr>
<td>chisquare()</td>
<td>产生卡方分布的样本值</td>
</tr>
<tr>
<td>gamma()</td>
<td>产生gamma分布的样本值</td>
</tr>
<tr>
<td>uniform()</td>
<td>产生在[0,1)中均匀分布的样本值</td>
</tr>
</tbody>
</table>
<h2 id="numpy-linalg函数" tabindex="-1"><a class="header-anchor" href="#numpy-linalg函数" aria-hidden="true">#</a> NumPy.linalg函数</h2>
<table>
<thead>
<tr>
<th><strong>函数</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>det(ndarray)</td>
<td>计算矩阵列式</td>
</tr>
<tr>
<td>eig(ndarray)</td>
<td>计算方阵的本征值和本征向量</td>
</tr>
<tr>
<td>inv(ndarray)<br>pinv(ndarray)</td>
<td>计算方阵的逆<br>计算方阵的Moore-Penrose伪逆</td>
</tr>
<tr>
<td>qr(ndarray)</td>
<td>计算qr分解</td>
</tr>
<tr>
<td>svd(ndarray)</td>
<td>计算奇异值分解svd</td>
</tr>
<tr>
<td>solve(ndarray)</td>
<td>解线性方程组Ax = b，其中A为方阵</td>
</tr>
<tr>
<td>lstsq(ndarray)</td>
<td>计算Ax=b的最小二乘解</td>
</tr>
</tbody>
</table>
<h1 id="numpy数据保存与读取" tabindex="-1"><a class="header-anchor" href="#numpy数据保存与读取" aria-hidden="true">#</a> numpy数据保存与读取</h1>
<p>主要介绍了Python Numpy中数据的常用保存与读取方法，本文给大家介绍的非常详细。</p>
<p>在经常性读取大量的数值文件时(比如深度学习训练数据),可以考虑现将数据存储为<code v-pre>Numpy</code>格式,然后直接使用Numpy去读取,速度相比为转化前快很多。</p>
<p>下面就常用的保存数据到二进制文件和保存数据到文本文件进行介绍:</p>
<h2 id="保存为二进制文件-npy-npz" tabindex="-1"><a class="header-anchor" href="#保存为二进制文件-npy-npz" aria-hidden="true">#</a> 保存为二进制文件(.npy/.npz)</h2>
<h3 id="numpy-save" tabindex="-1"><a class="header-anchor" href="#numpy-save" aria-hidden="true">#</a> numpy.save</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numpy<span class="token punctuation">.</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存一个数组到一个二进制的文件中,保存格式是.npy</p>
<p>参数介绍</p>
<blockquote>
<p>numpy.save(file, arr, allow_pickle=True, fix_imports=True)
file:文件名/文件路径
arr:要存储的数组
allow_pickle:布尔值,允许使用Python pickles保存对象数组(可选参数,默认即可)
fix_imports:为了方便Pyhton2中读取Python3保存的数据(可选参数,默认即可)</p>
</blockquote>
<p><strong>使用</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> numpy <span class="token keyword">as</span> np 
<span class="token comment">#生成数据 </span>
<span class="token operator">>></span><span class="token operator">></span> x<span class="token operator">=</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> x 
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
 
<span class="token comment">#数据保存 </span>
<span class="token operator">>></span><span class="token operator">></span> np<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">'save_x'</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span> 
 
<span class="token comment">#读取保存的数据 </span>
<span class="token operator">>></span><span class="token operator">></span> np<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">'save_x.npy'</span><span class="token punctuation">)</span> 
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="numpy-savez" tabindex="-1"><a class="header-anchor" href="#numpy-savez" aria-hidden="true">#</a> numpy.savez</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numpy<span class="token punctuation">.</span>savez
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个同样是保存数组到一个二进制的文件中,但是厉害的是,它可以保存多个数组到同一个文件中,保存格式是.npz,它其实就是多个前面<code v-pre>np.save</code>的保存的npy,再通过打包(<strong>未压缩</strong>)的方式把这些文件归到一个文件上,不行你去解压npz文件就知道了,里面是就是自己保存的多个npy。</p>
<p>参数介绍</p>
<blockquote>
<p>numpy.savez(file, *args, **kwds)
file:文件名/文件路径
*args:要存储的数组,可以写多个,如果没有给数组指定Key,Numpy将默认从'arr_0','arr_1'的方式命名
kwds:(可选参数,默认即可)</p>
</blockquote>
<p><strong>使用</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> numpy <span class="token keyword">as</span> np 
<span class="token comment">#生成数据 </span>
<span class="token operator">>></span><span class="token operator">></span> x<span class="token operator">=</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> x 
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> y<span class="token operator">=</span>np<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>x<span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> y 
array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">0.</span>  <span class="token punctuation">,</span> <span class="token number">0.84147098</span><span class="token punctuation">,</span> <span class="token number">0.90929743</span><span class="token punctuation">,</span> <span class="token number">0.14112001</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.7568025</span> <span class="token punctuation">,</span> 
  <span class="token operator">-</span><span class="token number">0.95892427</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.2794155</span> <span class="token punctuation">,</span> <span class="token number">0.6569866</span> <span class="token punctuation">,</span> <span class="token number">0.98935825</span><span class="token punctuation">,</span> <span class="token number">0.41211849</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
  
<span class="token comment">#数据保存 </span>
<span class="token operator">>></span><span class="token operator">></span> np<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">'save_xy'</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> 
 
<span class="token comment">#读取保存的数据 </span>
<span class="token operator">>></span><span class="token operator">></span> npzfile<span class="token operator">=</span>np<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">'save_xy.npz'</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> npzfile <span class="token comment">#是一个对象,无法读取 </span>
<span class="token operator">&lt;</span>numpy<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>npyio<span class="token punctuation">.</span>NpzFile <span class="token builtin">object</span> at <span class="token number">0x7f63ce4c8860</span><span class="token operator">></span> 
 
<span class="token comment">#按照组数默认的key进行访问 </span>
<span class="token operator">>></span><span class="token operator">></span> npzfile<span class="token punctuation">[</span><span class="token string">'arr_0'</span><span class="token punctuation">]</span> 
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> npzfile<span class="token punctuation">[</span><span class="token string">'arr_1'</span><span class="token punctuation">]</span> 
array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">0.</span>  <span class="token punctuation">,</span> <span class="token number">0.84147098</span><span class="token punctuation">,</span> <span class="token number">0.90929743</span><span class="token punctuation">,</span> <span class="token number">0.14112001</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.7568025</span> <span class="token punctuation">,</span> 
  <span class="token operator">-</span><span class="token number">0.95892427</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.2794155</span> <span class="token punctuation">,</span> <span class="token number">0.6569866</span> <span class="token punctuation">,</span> <span class="token number">0.98935825</span><span class="token punctuation">,</span> <span class="token number">0.41211849</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更加神奇的是,你可以不适用Numpy默认给数组的Key,而是自己给数组有意义的Key,这样就可以不用去猜测自己加载数据是否是自己需要的.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#数据保存 
>>> np.savez('newsave_xy',x=x,y=y) 
 
#读取保存的数据 
>>> npzfile=np.load('newsave_xy.npz') 
 
#按照保存时设定组数key进行访问 
>>> npzfile['x'] 
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) 
>>> npzfile['y'] 
array([ 0.  , 0.84147098, 0.90929743, 0.14112001, -0.7568025 , 
  -0.95892427, -0.2794155 , 0.6569866 , 0.98935825, 0.41211849]) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简直不能太爽,深度学习中,有时候你保存了训练集,验证集,测试集,还包括他们的标签,用这个方式存储起来,要啥加载啥,文件数量大大减少,也不会到处改文件名去.</p>
<h3 id="numpy-savez-compressed" tabindex="-1"><a class="header-anchor" href="#numpy-savez-compressed" aria-hidden="true">#</a> numpy.savez_compressed</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numpy<span class="token punctuation">.</span>savez_compressed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个就是在前面<code v-pre>numpy.savez</code>的基础上加了压缩,前面我介绍时尤其注明numpy.savez是得到的文件打包,不压缩的.这个文件就是对文件进行打包时使用了压缩,可以理解为压缩前各npy的文件大小不变,使用该函数比前面的numpy.savez得到的npz文件更小.</p>
<p>注:函数所需参数和<code v-pre>numpy.savez</code>一致,用法完成一样.</p>
<h2 id="保存到文本文件" tabindex="-1"><a class="header-anchor" href="#保存到文本文件" aria-hidden="true">#</a> 保存到文本文件</h2>
<h3 id="numpy-savetxt" tabindex="-1"><a class="header-anchor" href="#numpy-savetxt" aria-hidden="true">#</a> numpy.savetxt</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numpy<span class="token punctuation">.</span>savetxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存数组到文本文件上,可以直接打开查看文件里面的内容.</p>
<p>参数介绍</p>
<blockquote>
<p>numpy.savetxt(fname, X, fmt='%.18e', delimiter=' ', newline='\n', header='', footer='', comments='# ', encoding=None)
fname:文件名/文件路径,如果文件后缀是.gz,文件将被自动保存为.gzip格式,np.loadtxt可以识别该格式
X:要存储的1D或2D数组
fmt:控制数据存储的格式
delimiter:数据列之间的分隔符
newline:数据行之间的分隔符
header:文件头步写入的字符串
footer:文件底部写入的字符串
comments:文件头部或者尾部字符串的开头字符,默认是'#'
encoding:使用默认参数</p>
</blockquote>
<p><strong>使用</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> numpy <span class="token keyword">as</span> np 
<span class="token comment">#生成数据 </span>
<span class="token operator">>></span><span class="token operator">></span> x <span class="token operator">=</span> y <span class="token operator">=</span> z <span class="token operator">=</span> np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token operator">>></span><span class="token operator">></span> x 
array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token punctuation">[</span><span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
  
<span class="token comment">#保存数据 </span>
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test1.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span>fmt<span class="token operator">=</span><span class="token string">'%1.4e'</span><span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test2.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test3.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">'a'</span><span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test4.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span>delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">'a'</span><span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test5.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span>delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">,</span>header<span class="token operator">=</span><span class="token string">'abc'</span><span class="token punctuation">)</span> 
np<span class="token punctuation">.</span>savetxt<span class="token punctuation">(</span><span class="token string">'test6.out'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span>delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">,</span>footer<span class="token operator">=</span><span class="token string">'abc'</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存下来的文件都是友好的,可以直接打开看看有什么变化.</p>
<h3 id="numpy-loadtxt" tabindex="-1"><a class="header-anchor" href="#numpy-loadtxt" aria-hidden="true">#</a> numpy.loadtxt</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>numpy<span class="token punctuation">.</span>loadtxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据前面定制的保存格式,相应的加载数据的函数也得变化.</p>
<p>参数介绍</p>
<blockquote>
<p>numpy.loadtxt(fname, dtype=&lt;class 'float'&gt;, comments='#', delimiter=None, converters=None, skiprows=0, usecols=None, unpack=False, ndmin=0, encoding='bytes')
fname:文件名/文件路径,如果文件后缀是.gz或.bz2,文件将被解压,然后再载入
dtype:要读取的数据类型
comments:文件头部或者尾部字符串的开头字符,用于识别头部,尾部字符串
delimiter:划分读取上来值的字符串
converters:数据行之间的分隔符
.......后面不常用的就不写了</p>
</blockquote>
<p>使用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>np.loadtxt('test.out') 
np.loadtxt('test2.out', delimiter=',') 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li>
<p><a href="https://baike.baidu.com/item/numpy/5678437?fr=aladdin" target="_blank" rel="noopener noreferrer">NumPy的百度百科<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.zhihu.com/question/37180159" target="_blank" rel="noopener noreferrer">如何系统地学习Python 中 matplotlib, numpy, scipy, pandas？-知乎<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://blog.csdn.net/lwplwf/article/details/55251813" target="_blank" rel="noopener noreferrer">NumPy学习笔记（1）--NumPy简介<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>NumPy介绍就是复制自这里。</p>
<ul>
<li>
<p><a href="http://blog.csdn.net/lwplwf/article/details/55506896" target="_blank" rel="noopener noreferrer">NumPy学习笔记（2）--Array数组和矩阵基本运算<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://blog.csdn.net/lwplwf/article/details/55805602" target="_blank" rel="noopener noreferrer">NumPy学习笔记（3）--排序与索引<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://blog.csdn.net/lwplwf/article/details/55806834" target="_blank" rel="noopener noreferrer">NumPy学习笔记（4）--数据归一化<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>Array数组和矩阵的基本运算都是复制或改编自这里。</p>
<ul>
<li><a href="http://www.cnblogs.com/keepgoingon/p/7137448.html" target="_blank" rel="noopener noreferrer">Python-NumPy最简洁的大纲<ExternalLinkIcon/></a></li>
</ul>
<p>最简洁的NumPy大纲都是复制自这里。</p>
<ul>
<li><a href="https://www.cnblogs.com/wushaogui/p/9142019.html" target="_blank" rel="noopener noreferrer">Numpy中数据的常用的保存与读取方法<ExternalLinkIcon/></a></li>
</ul>
<p>“numpy数据保存与读取”复制自这里。</p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/38786013" target="_blank" rel="noopener noreferrer">搭建模型第一步：你需要预习的NumPy基础都在这了<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/_r1czXpTRL4zFfaBL6XiVA" target="_blank" rel="noopener noreferrer">图解NumPy，这是理解数组最形象的一份教程了<ExternalLinkIcon/></a></p>
</div></template>


