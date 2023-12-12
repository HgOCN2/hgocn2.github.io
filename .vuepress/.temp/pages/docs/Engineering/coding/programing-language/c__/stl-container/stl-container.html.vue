<template><div><h1 id="stl容器" tabindex="-1"><a class="header-anchor" href="#stl容器" aria-hidden="true">#</a> STL容器</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/programing-language/c++/c++.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%A1%BA%E5%BA%8F%E5%AE%B9%E5%99%A8">顺序容器</a>
<ul>
<li><a href="#vector%E5%90%91%E9%87%8F">vector向量</a></li>
<li><a href="#deque%E5%8F%8C%E9%98%9F%E5%88%97">deque双队列</a></li>
<li><a href="#list%E9%93%BE%E8%A1%A8">list链表</a></li>
</ul>
</li>
<li><a href="#%E5%85%B3%E8%81%94%E5%AE%B9%E5%99%A8">关联容器</a>
<ul>
<li><a href="#set%E9%9B%86%E5%90%88">set集合</a></li>
<li><a href="#multiset">multiset</a></li>
<li><a href="#map%E6%98%A0%E5%B0%84">map映射</a></li>
<li><a href="#multimap">multimap</a></li>
</ul>
</li>
<li><a href="#%E5%AE%B9%E5%99%A8%E9%80%82%E9%85%8D%E5%99%A8">容器适配器</a>
<ul>
<li><a href="#stack%E6%A0%88">stack栈</a></li>
<li><a href="#queue%E9%98%9F%E5%88%97">queue队列</a></li>
<li><a href="#priority_queue%E4%BC%98%E5%85%88%E7%BA%A7%E9%98%9F%E5%88%97">priority_queue优先级队列</a></li>
</ul>
</li>
</ul>
<h1 id="顺序容器" tabindex="-1"><a class="header-anchor" href="#顺序容器" aria-hidden="true">#</a> 顺序容器</h1>
<p>元素的插入位置和元素的值无关，只跟插入的时机有关。</p>
<h2 id="vector向量" tabindex="-1"><a class="header-anchor" href="#vector向量" aria-hidden="true">#</a> vector向量</h2>
<ul>
<li>
<p>assign</p>
<p>vector有个函数assign, 可以帮助执行赋值操作。<strong>assign会清空你的容器</strong>。</p>
<p>函数原型：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>void assign(const_iterator first,const_iterator last);
// vector.assign(que.begin(), que.end());
void assign(size_type n,const T&amp; x = T());
// vector.assign(3, 2.1);// 3个2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>功能：将区间[first, last)的元素赋值到当前的vector容器中，或者赋n个值为x的元素到vector容器中，这个容器会清除掉vector容器中以前的内容。</p>
</li>
<li>
<p>begin(), end()</p>
<p><strong>这两个类似于数组的地址指针</strong></p>
<p>begin函数原型:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>iterator begin();
const_iterator begin();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>功能：返回一个当前vector容器中起始元素的迭代器。</p>
<p>end函数原型：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>iterator end();
const_iterator end();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>功能：返回一个当前vector容器中末尾元素的迭代器。</p>
<p><strong>可以通过使用 * vector.begin() 或 * vector.end() 来获得 vector 中第一个或最后一个的值；</strong></p>
<p><strong>也可以直接使用 vector.front() 、vector.back() 来得到 vector 首尾的值。</strong></p>
</li>
<li>
<p>front(), back()</p>
<p>front函数原型：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>reference front();
const_reference front();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>功能：返回当前vector容器中起始元素的引用。</p>
<p>back函数原型：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>reference back();
const_reference back();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>功能：返回当前vector容器中末尾元素的引用。</p>
</li>
</ul>
<h2 id="deque双队列" tabindex="-1"><a class="header-anchor" href="#deque双队列" aria-hidden="true">#</a> deque双队列</h2>
<ul>
<li>push_front, pop_front()</li>
<li>push_back, push_back()</li>
</ul>
<h2 id="list链表" tabindex="-1"><a class="header-anchor" href="#list链表" aria-hidden="true">#</a> list链表</h2>
<ul>
<li>
<p>iterator</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>list&lt;int&gt;::iterator current = numbers.begin();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>erase</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>numbers.erase(current);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h1 id="关联容器" tabindex="-1"><a class="header-anchor" href="#关联容器" aria-hidden="true">#</a> 关联容器</h1>
<p>关联容器内的元素是排序的，插入任何元素，都按照相应的排序专责来确定其位置。</p>
<p>关联式容器的特点是在查找时具有非常好的性能。</p>
<p>通常以平衡二叉树方式实现，插入、查找和删除的时间都是O(logN)。</p>
<h2 id="set集合" tabindex="-1"><a class="header-anchor" href="#set集合" aria-hidden="true">#</a> set集合</h2>
<h2 id="multiset" tabindex="-1"><a class="header-anchor" href="#multiset" aria-hidden="true">#</a> multiset</h2>
<h2 id="map映射" tabindex="-1"><a class="header-anchor" href="#map映射" aria-hidden="true">#</a> map映射</h2>
<h2 id="multimap" tabindex="-1"><a class="header-anchor" href="#multimap" aria-hidden="true">#</a> multimap</h2>
<h1 id="容器适配器" tabindex="-1"><a class="header-anchor" href="#容器适配器" aria-hidden="true">#</a> 容器适配器</h1>
<h2 id="stack栈" tabindex="-1"><a class="header-anchor" href="#stack栈" aria-hidden="true">#</a> stack栈</h2>
<h2 id="queue队列" tabindex="-1"><a class="header-anchor" href="#queue队列" aria-hidden="true">#</a> queue队列</h2>
<h2 id="priority-queue优先级队列" tabindex="-1"><a class="header-anchor" href="#priority-queue优先级队列" aria-hidden="true">#</a> priority_queue优先级队列</h2>
<p>优先级高的元素先出。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://wenku.baidu.com/view/93f33b3b192e45361066f5eb.html" target="_blank" rel="noopener noreferrer">C++模版与STL库介绍<ExternalLinkIcon/></a></li>
</ul>
<p>“c++中常见的STL容器类型”参考此课件。</p>
</div></template>


