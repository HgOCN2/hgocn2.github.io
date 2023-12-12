<template><div><h1 id="过程控制" tabindex="-1"><a class="header-anchor" href="#过程控制" aria-hidden="true">#</a> 过程控制</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/programing-language/python/grammar/python.html">返回上层目录</RouterLink></li>
<li><a href="#if%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD">if条件判断</a></li>
<li><a href="#while%E5%BE%AA%E7%8E%AF">while循环</a></li>
<li><a href="#for%E5%BE%AA%E7%8E%AF">for循环</a></li>
<li><a href="#break%E8%B7%B3%E5%87%BA%E5%BE%AA%E7%8E%AF">break跳出循环</a></li>
<li><a href="#continue%E8%B7%B3%E5%87%BA%E6%9C%AC%E6%AC%A1%E5%BE%AA%E7%8E%AF">continue跳出本次循环</a></li>
</ul>
<h1 id="if条件判断" tabindex="-1"><a class="header-anchor" href="#if条件判断" aria-hidden="true">#</a> if条件判断</h1>
<p>条件判断语法格式：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
    逻辑代码
<span class="token keyword">else</span><span class="token punctuation">:</span>
    其他逻辑代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：条件句后加<strong>冒号:</strong>，这样是为了方便写正则表达式(把代码写在一行)。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
if条件判断
'''</span>
age <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入你的年龄："</span><span class="token punctuation">)</span>
age_int <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
<span class="token keyword">if</span> age_int <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不向未成年人销售烟酒！"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"请付款！"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"欢迎下次光临"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多条件判断</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> 条件<span class="token number">1</span><span class="token punctuation">:</span>
    逻辑代码<span class="token number">1</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> 条件<span class="token number">2</span><span class="token punctuation">:</span>
    逻辑代码<span class="token number">2</span>
<span class="token keyword">else</span> 条件<span class="token number">3</span><span class="token punctuation">:</span>
    逻辑代码<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，不是else if，是<strong>elif</strong>。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>age <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入你的年龄："</span><span class="token punctuation">)</span>
age_int <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
<span class="token keyword">if</span> age_int <span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"未满16岁，太小了！"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age_int <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不向未成年人销售烟酒！"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"请付款！"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"欢迎下次光临"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>if嵌套</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>fee <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请缴费50："</span><span class="token punctuation">)</span>
fee <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>fee<span class="token punctuation">)</span>
<span class="token keyword">if</span> fee <span class="token operator">==</span> <span class="token number">50</span><span class="token punctuation">:</span>
    gender <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"是男性吗？(y/n)："</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>gender <span class="token operator">==</span> <span class="token string">"y"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"先生，您好！"</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"女士，您好！"</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"缴费成功！"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> fee <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不向未成年人销售烟酒！"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"金额不正确！"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h1>
<p>语法格式：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> 判断条件：
	条件满足，执行语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/grammar/process-control/pic/while.png" alt="while"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 打印数字1到100</span>
num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> num <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    num <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h1>
<p>语法格式：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> 临时变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
	序列中存在待处理元素则进入循环体执行代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/grammar/process-control/pic/for.png" alt="for"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 打印1到10十个数字</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="break跳出循环" tabindex="-1"><a class="header-anchor" href="#break跳出循环" aria-hidden="true">#</a> break跳出循环</h1>
<ul>
<li>
<p>while循环中使用break</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span>条件<span class="token punctuation">:</span>
	<span class="token keyword">break</span> <span class="token comment">#整个循环结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>while循环嵌套中使用break</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span>条件<span class="token punctuation">:</span>
	代码
	<span class="token keyword">while</span> 条件<span class="token punctuation">:</span>
		<span class="token keyword">break</span> <span class="token comment">#只结束内层整个循环</span>
	代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>代码</p>
<ul>
<li>while循环中使用break</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># break跳出它所在的整个循环</span>
<span class="token comment"># 打印1到20的偶数</span>
i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果这个偶数能被10整除，则跳出循环。</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"*************"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>while循环嵌套中使用break</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># while循环嵌套，break跳出内层循环</span>
<span class="token comment"># 打印1到4四个数字，每个数字的上一行都打印与数字相同个数的星号</span>
i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">:</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span>
        j <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于for循环，也同样。</p>
<p>总结：break的作用范围只作用于它所在的循环，不影响其他外部循环。</p>
<h1 id="continue跳出本次循环" tabindex="-1"><a class="header-anchor" href="#continue跳出本次循环" aria-hidden="true">#</a> continue跳出本次循环</h1>
<p>continue跳出本次循环，当次循环中continue后的语句将不会被执行，继续执行下一次循环。</p>
<ul>
<li>
<p>while循环中使用continue</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> 条件<span class="token punctuation">:</span>
	<span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
		<span class="token keyword">continue</span> <span class="token comment">#本次循环结束，后面代码语句不执行</span>
	代码语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>for循环中使用continue</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 序列<span class="token punctuation">:</span>
	<span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
		<span class="token keyword">continue</span> <span class="token comment">#本次循环结束，后面代码语句不执行</span>
	代码语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>代码</p>
<ul>
<li>while循环中使用continue</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># continue 跳出本次while循环</span>
i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"**********"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


