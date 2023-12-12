<template><div><h1 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h1>
<ul>
<li><RouterLink to="/blogs/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/sort.html">返回上层目录</RouterLink></li>
</ul>
<p>归并排序（MERGE-SORT）是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并</p>
<p>归并排序是一种稳定的排序算法，其时间复杂度为:O(nlogn)</p>
<p>算法思路（从小到大）：
1、对于一组数据a[N]，申请临时空间，temp[N],用于临时存放数据，划分为两个序列
2、设置两个指针分别指向两个序列的首部，其中中间数据mid=(start+end)/2划分到前一个序列当中
3、比较两个指针所指向的数据，选择相对小的元素放入到合并空间，并移动指针到下一位置
4、重复步骤3，直到这两个指针的某个指针超出自身所指向序列
5、将另外一个序列全部依次放入到临时数组中（合并空间）</p>
<p><img src="@source/blogs/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/pic/merge-sort.png" alt="merge-sort"></p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>

<span class="token comment">/*归并排序*/</span>
<span class="token keyword">void</span> <span class="token function">Merge_Sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>temparr<span class="token punctuation">,</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> mid<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> left_start <span class="token operator">=</span> start <span class="token punctuation">;</span>
    <span class="token keyword">int</span> left_end   <span class="token operator">=</span> mid <span class="token punctuation">;</span>

    <span class="token keyword">int</span> right_start <span class="token operator">=</span> mid<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">;</span>
    <span class="token keyword">int</span> right_end   <span class="token operator">=</span> end <span class="token punctuation">;</span>

    <span class="token keyword">int</span> index <span class="token operator">=</span> start <span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>left_start<span class="token operator">&lt;=</span>left_end<span class="token operator">&amp;&amp;</span>right_start<span class="token operator">&lt;=</span>right_end<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>left_start<span class="token punctuation">]</span><span class="token operator">></span>arr<span class="token punctuation">[</span>right_start<span class="token punctuation">]</span><span class="token punctuation">)</span>
            temparr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right_start<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            temparr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>left_start<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>left_start<span class="token operator">&lt;=</span>left_end<span class="token punctuation">)</span>
        temparr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>left_start<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>right_start<span class="token operator">&lt;=</span>right_end<span class="token punctuation">)</span>
        temparr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right_start<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span>index <span class="token operator">=</span> start <span class="token punctuation">;</span>index<span class="token operator">&lt;=</span>end <span class="token punctuation">;</span><span class="token operator">++</span>index<span class="token punctuation">)</span>
        arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> temparr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Sort_Message</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>temparr<span class="token punctuation">,</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>start<span class="token operator">&lt;</span>end<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token operator">+</span>end<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">;</span>
        <span class="token function">Sort_Message</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>temparr<span class="token punctuation">,</span>start<span class="token punctuation">,</span>mid<span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token function">Sort_Message</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>temparr<span class="token punctuation">,</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>end<span class="token punctuation">)</span> <span class="token punctuation">;</span>
        <span class="token function">Merge_Sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>temparr<span class="token punctuation">,</span>start<span class="token punctuation">,</span>mid<span class="token punctuation">,</span>end<span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">;</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> temp<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"原序列为:"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    <span class="token function">Sort_Message</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>temp<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\n排后序列:"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果为：</p>
<p><img src="@source/blogs/coding/cs-courses/data-structures-and-algorithms/algorithms/sort/pic/merge-sort-2.png" alt="merge-sort-2"></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/Silence_R/article/details/86524975" target="_blank" rel="noopener noreferrer">归并排序C语言实现<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
</div></template>


