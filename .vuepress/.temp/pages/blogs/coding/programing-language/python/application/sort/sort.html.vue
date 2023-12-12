<template><div><h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1>
<ul>
<li><RouterLink to="/blogs/coding/programing-language/python/application/application.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F">冒泡排序</a></li>
<li><a href="#%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F">选择排序</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F">快速排序</a></li>
<li><a href="#%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F">归并排序</a></li>
</ul>
<h1 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h1>
<ul>
<li>原理
<ul>
<li>循环遍历列表，每次循环找出本次循环最大的元素排在后边</li>
<li>需要使用嵌套循环实现，外层循环控制总循环次数，内存循环负责每轮的循环比较（共n-1轮）</li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/bubble-sort1.png" alt="bubble-sort1"></p>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/bubble-sort2.png" alt="bubble-sort2"></p>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/bubble-sort3.png" alt="bubble-sort3"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
len(list) = n
轮数：n-1
每轮两两元素比较的次数为：n-1-i(i为预警排好序的元素个数，等于已经排序过的轮数)
'''</span>
<span class="token triple-quoted-string string">'''
参数：data_list：待排序的元素列表
'''</span>
<span class="token keyword">def</span> <span class="token function">bubble_sort</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span> <span class="token comment">#待排序的元素个数</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment">#控制总体轮数</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> data_list<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> data_list<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                data_list<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> data_list<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> data_list<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> data_list<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
bubble_sort<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----排序结果-----"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token comment"># [12, 14, 28, 32, 42, 53]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h1>
<ul>
<li>原理
<ul>
<li>将待排序列表看成是已排序和未排序两部分</li>
<li>每次从未排序列表中找出最小值，放到已排序列表末尾</li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/selection-sort1.png" alt="selection-sort1"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
带排序元素有n个，总共需要n-1轮排序
'''</span>
<span class="token keyword">def</span> <span class="token function">select_sort</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    list_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span>
    <span class="token comment"># 控制排序轮数</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>list_len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始假设的最小值脚标</span>
        temp_min_index <span class="token operator">=</span> i
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> list_len<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> data_list<span class="token punctuation">[</span>temp_min_index<span class="token punctuation">]</span> <span class="token operator">></span> data_list<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token comment"># 更新临时最小值脚标</span>
                temp_min_index <span class="token operator">=</span> j
        <span class="token comment"># 如果初始假设最小值脚标和临时最小值脚标不等，</span>
        <span class="token comment"># 则交换两个元素的位置。</span>
        <span class="token keyword">if</span> i <span class="token operator">!=</span> temp_min_index<span class="token punctuation">:</span>
            data_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> data_list<span class="token punctuation">[</span>temp_min_index<span class="token punctuation">]</span> <span class="token operator">=</span> data_list<span class="token punctuation">[</span>temp_min_index<span class="token punctuation">]</span><span class="token punctuation">,</span> data_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
select_sort<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----排序结果-----"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token comment"># [12, 14, 28, 32, 42, 53]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h1>
<ul>
<li>原理
<ul>
<li>一次排序按照一个基准值将带排序的列表分割成两部分，基准值左边是比基准值小的元素，基准值邮编是比基准值大的元素</li>
<li>按照上一步的方法对基准值左右两部分数据分别进行快速排序</li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/quick_sort.png" alt="quick_sort"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
基准值：默认带排序的第一个元素
使用临时变量存储基准值
高位游标，和低位游标，
'''</span>
<span class="token keyword">def</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span>data_list<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 结束递归标识</span>
    <span class="token keyword">if</span> start <span class="token operator">>=</span> end<span class="token punctuation">:</span>
        <span class="token keyword">return</span>
    <span class="token comment"># 低位游标</span>
    low_index <span class="token operator">=</span> start
    <span class="token comment"># 高位游标</span>
    high_index <span class="token operator">=</span> end
    <span class="token comment"># 基准值</span>
    basic_data <span class="token operator">=</span> data_list<span class="token punctuation">[</span>low_index<span class="token punctuation">]</span>
    <span class="token comment"># 开始比较</span>
    <span class="token keyword">while</span> low_index <span class="token operator">&lt;</span> high_index<span class="token punctuation">:</span>
        <span class="token comment"># 如果高位游标指向的元素>=基准值，高位游标向左移动一位</span>
        <span class="token keyword">while</span> low_index <span class="token operator">&lt;</span> high_index <span class="token keyword">and</span> data_list<span class="token punctuation">[</span>high_index<span class="token punctuation">]</span> <span class="token operator">>=</span> basic_data<span class="token punctuation">:</span>
            high_index <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token keyword">if</span> low_index <span class="token operator">!=</span> high_index<span class="token punctuation">:</span>
            <span class="token comment"># 当高位游标指向的元素小于基准值</span>
            data_list<span class="token punctuation">[</span>low_index<span class="token punctuation">]</span> <span class="token operator">=</span> data_list<span class="token punctuation">[</span>high_index<span class="token punctuation">]</span>
            low_index <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token comment"># 如果低位游标指向的元素&lt;基准值，低位游标向右移动一位</span>
        <span class="token keyword">while</span> low_index <span class="token operator">&lt;</span> high_index <span class="token keyword">and</span> data_list<span class="token punctuation">[</span>low_index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> basic_data<span class="token punctuation">:</span>
            low_index <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">if</span> low_index <span class="token operator">!=</span> high_index<span class="token punctuation">:</span>
            <span class="token comment"># 当低位游标指向的元素大于等于基准值</span>
            data_list<span class="token punctuation">[</span>high_index<span class="token punctuation">]</span> <span class="token operator">=</span> data_list<span class="token punctuation">[</span>low_index<span class="token punctuation">]</span>

    data_list<span class="token punctuation">[</span>low_index<span class="token punctuation">]</span> <span class="token operator">=</span> basic_data
    <span class="token comment"># 对基准值左侧位置采用快速排序</span>
    quick_sort<span class="token punctuation">(</span>data_list<span class="token punctuation">,</span> start<span class="token punctuation">,</span> low_index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># 对基准值右侧位置采用快速排序</span>
    quick_sort<span class="token punctuation">(</span>data_list<span class="token punctuation">,</span> high_index<span class="token punctuation">,</span> end<span class="token punctuation">)</span>
    high_index <span class="token operator">-=</span> <span class="token number">1</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
quick_sort<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----排序结果-----"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h1>
<p>归并排序在大数据中经常用到。</p>
<ul>
<li>原理
<ul>
<li>先递归分解序列，再排序合并序列</li>
</ul>
</li>
</ul>
<p><img src="@source/blogs/coding/programing-language/python/application/sort/pic/merge_sort.png" alt="merge_sort"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
归并排序
'''</span>
<span class="token keyword">def</span> <span class="token function">merge_sort</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> data_list
    <span class="token comment"># 根据列表长度，确定拆分的中间位置</span>
    mid_index <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
    left_list <span class="token operator">=</span> merge_sort<span class="token punctuation">(</span>data_list<span class="token punctuation">[</span><span class="token punctuation">:</span>mid_index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    right_list <span class="token operator">=</span> merge_sort<span class="token punctuation">(</span>data_list<span class="token punctuation">[</span>mid_index<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> merge<span class="token punctuation">(</span>left_list<span class="token punctuation">,</span> right_list<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">merge</span><span class="token punctuation">(</span>left_list<span class="token punctuation">,</span> right_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    l_index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment"># 左侧列表游标</span>
    r_index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment"># 右侧列表游标</span>
    merge_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> l_index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>left_list<span class="token punctuation">)</span> <span class="token keyword">and</span> r_index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>right_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> left_list<span class="token punctuation">[</span>l_index<span class="token punctuation">]</span> <span class="token operator">&lt;</span> right_list<span class="token punctuation">[</span>r_index<span class="token punctuation">]</span><span class="token punctuation">:</span>
            merge_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>left_list<span class="token punctuation">[</span>l_index<span class="token punctuation">]</span><span class="token punctuation">)</span>
            l_index <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            merge_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>right_list<span class="token punctuation">[</span>r_index<span class="token punctuation">]</span><span class="token punctuation">)</span>
            r_index <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> l_index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>left_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
        merge_list <span class="token operator">+=</span> left_list<span class="token punctuation">[</span>l_index<span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> r_index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>right_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
        merge_list <span class="token operator">+=</span> right_list<span class="token punctuation">[</span>r_index<span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> merge_list

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
sorted_list <span class="token operator">=</span> merge_sort<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----排序结果-----"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sorted_list<span class="token punctuation">)</span>
<span class="token comment"># [12, 14, 28, 32, 42, 53]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


