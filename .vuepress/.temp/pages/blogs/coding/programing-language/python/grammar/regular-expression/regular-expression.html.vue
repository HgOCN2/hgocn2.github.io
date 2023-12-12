<template><div><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1>
<ul>
<li><RouterLink to="/blogs/coding/programing-language/python/grammar/regular-expression/python.html#python">返回上层目录</RouterLink></li>
<li><a href="#re%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BD%BF%E7%94%A8">re模块的使用</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E5%8C%B9%E9%85%8D%E3%80%81%E6%95%B0%E9%87%8F%E8%A1%A8%E7%A4%BA%E3%80%81%E8%BE%B9%E7%95%8C%E8%A1%A8%E7%A4%BA">字符匹配、数量表示、边界表示</a>
<ul>
<li><a href="#%E5%AD%97%E7%AC%A6%E5%8C%B9%E9%85%8D">字符匹配</a></li>
<li><a href="#%E6%95%B0%E9%87%8F%E8%A1%A8%E7%A4%BA">数量表示</a></li>
<li><a href="#%E8%BE%B9%E7%95%8C%E8%A1%A8%E7%A4%BA">边界表示</a></li>
</ul>
</li>
<li><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">正则表达式的高级用法</a></li>
<li><a href="#%E8%B4%AA%E5%A9%AA%E4%B8%8E%E9%9D%9E%E8%B4%AA%E5%A9%AA%E6%A8%A1%E5%BC%8F">贪婪与非贪婪模式</a></li>
</ul>
<h1 id="re模块的使用" tabindex="-1"><a class="header-anchor" href="#re模块的使用" aria-hidden="true">#</a> re模块的使用</h1>
<ul>
<li>re正则表达式模块
<ul>
<li>match（正则表达式，待匹配字符串），
<ul>
<li>用于正则匹配检查，如果待匹配字符串能够匹配正则表达式，则match方法返回匹配对象，否则返回None</li>
<li>采用从左往右逐项匹配</li>
</ul>
</li>
<li>group()方法
<ul>
<li>用来返回字符串的匹配部分</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"chinahadoop"</span><span class="token punctuation">,</span> <span class="token string">"chinahadoop.cn"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span>
<span class="token comment"># &lt;_sre.SRE_Match object; span=(0, 11), match='chinahadoop'></span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class '_sre.SRE_Match'></span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># chinahadoop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="字符匹配、数量表示、边界表示" tabindex="-1"><a class="header-anchor" href="#字符匹配、数量表示、边界表示" aria-hidden="true">#</a> 字符匹配、数量表示、边界表示</h1>
<h2 id="字符匹配" tabindex="-1"><a class="header-anchor" href="#字符匹配" aria-hidden="true">#</a> 字符匹配</h2>
<ul>
<li>. ，匹配除“\n”之外的任意单个字符</li>
<li>\d，匹配0到9之间的一个数字，等价于[0-9]</li>
<li>\D，匹配一个非数字字符，等价于[~0-9]</li>
<li>\s，匹配任意空白字符</li>
<li>\w，匹配任意单词字符（包含下划线），如a-z，A-z，0-9，_</li>
<li>\W，匹配任意非单词字符，等价于^[a-z，A-z，0-9，_]</li>
</ul>
<ul>
<li>[]，匹配[]中列举的字符</li>
</ul>
<ul>
<li>^，取反</li>
</ul>
<p>&quot;.&quot;匹配除了“\n”之外的任意单个字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 1</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># a</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># a</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"..."</span><span class="token punctuation">,</span> <span class="token string">"abcd"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># abc</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"\n"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'NoneType'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;\s&quot;匹配空格字符</p>
<p>&quot;\S&quot;匹配非空格字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\s"</span><span class="token punctuation">,</span><span class="token string">"\t"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># tab</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\S"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;\w&quot;匹配单词字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w"</span><span class="token punctuation">,</span><span class="token string">"Ab"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># A</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w"</span><span class="token punctuation">,</span><span class="token string">"12"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 1</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w"</span><span class="token punctuation">,</span><span class="token string">"_"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># _</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;[]&quot;匹配日中括号列举的字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"[Hh]"</span><span class="token punctuation">,</span><span class="token string">"Hello"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># H</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"[0123456789]"</span><span class="token punctuation">,</span><span class="token string">"3n"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 3</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"[0-9]"</span><span class="token punctuation">,</span><span class="token string">"3n"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数量表示" tabindex="-1"><a class="header-anchor" href="#数量表示" aria-hidden="true">#</a> 数量表示</h2>
<ul>
<li>*，一个字符可以出现任意次，也可以一次都不出现</li>
<li>+，一个字符至少出现一次</li>
<li>？，一个字符至多出现一次</li>
<li>{m}，一个字符出现m次</li>
<li>{m,}，一个字符至少出现m次</li>
<li>{m, n}，一个字符出现m到n次</li>
</ul>
<p>“*“表示出现任意次</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment"># 以1开头</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1\d*"</span><span class="token punctuation">,</span><span class="token string">"123456789"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 123456789</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1\d*"</span><span class="token punctuation">,</span><span class="token string">"23456789"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1\d*"</span><span class="token punctuation">,</span><span class="token string">"12345abcde"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> rs <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;+&quot;一个字符至少出现1次</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 至少包含一个字符的数字，那就能匹配上</span>
<span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d+"</span><span class="token punctuation">,</span><span class="token string">"123abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;?&quot;一个字符至多出现1次</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 最多匹配一个</span>
<span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d?"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># ''空</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d?"</span><span class="token punctuation">,</span><span class="token string">"123abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义匹配字符出现的次数</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{3}"</span><span class="token punctuation">,</span><span class="token string">"12345abc"</span><span class="token punctuation">)</span><span class="token comment"># 出现3次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># 123</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{5}"</span><span class="token punctuation">,</span><span class="token string">"123abc"</span><span class="token punctuation">)</span><span class="token comment"># 出现5次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{3,}"</span><span class="token punctuation">,</span><span class="token string">"12345abc"</span><span class="token punctuation">)</span> <span class="token comment">#至少出现3次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># 12345</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{3,}"</span><span class="token punctuation">,</span><span class="token string">"12abc"</span><span class="token punctuation">)</span> <span class="token comment">#至少出现3次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{0,}"</span><span class="token punctuation">,</span><span class="token string">"abc1234"</span><span class="token punctuation">)</span> <span class="token comment">#至少出现0次 = *</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># ""</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\d{1,}"</span><span class="token punctuation">,</span><span class="token string">"123abc1234"</span><span class="token punctuation">)</span> <span class="token comment">#至少出现1次 = +</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：从字符串的第一个字符进行匹配，这是match函数的特点</p>
<p>练习：匹配一个手机号</p>
<p>分析过程：</p>
<p>手机号11位，第一位以1开头，第二位3/5/7/8，第三位到第十一位是0-9数字</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1[3578]\d{9}"</span><span class="token punctuation">,</span><span class="token string">"13612345678abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># 13612345678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面我们学到“边界”，才能识别11位。</p>
<h2 id="边界表示" tabindex="-1"><a class="header-anchor" href="#边界表示" aria-hidden="true">#</a> 边界表示</h2>
<ul>
<li>
<p>字符串与单词边界</p>
<ul>
<li>
<p>^，用于匹配一个字符串的开头</p>
</li>
<li>
<p>$，用于匹配一个字符串的结尾</p>
<p>只是用于匹配是否结束，而不是匹配结束的那个字符。</p>
</li>
</ul>
</li>
<li>
<p>匹配分组</p>
<ul>
<li>|，表示或，匹配|连接的任何一个表达式</li>
<li>()，将括号中字符作为一个分组</li>
<li>\NUM，配合分组()使用，引用分组NUM（NUM表示分组的编号）对应的匹配规则</li>
<li>(?P<name>)，给分组起别名</li>
<li>(?P=name)，应用指定别名的分组匹配到的字符串</li>
</ul>
</li>
</ul>
<p>转义字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 转义字符</span>
str1 <span class="token operator">=</span> <span class="token string">"hello\\world"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token comment"># hello\world</span>
str2 <span class="token operator">=</span> <span class="token string">"hello\\\\world"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token comment"># hello\\world</span>
<span class="token comment"># 原生字符串 raw(原始)的简写</span>
str3 <span class="token operator">=</span> <span class="token string">r"hello\\world"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token comment"># hello\\world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正则表达式里的字符</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
str1 <span class="token operator">=</span> <span class="token string">r"hello\\world"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{5}\\\\\w{5}"</span><span class="token punctuation">,</span>str1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># None 居然是空，为什么？</span>
<span class="token comment"># 若需匹配\，则需正则表达式里\\\\个斜杠匹配</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{5}\\\\\\\\\w{5}"</span><span class="token punctuation">,</span>str1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># hello\\\\world</span>
<span class="token comment"># 为什么？</span>
<span class="token comment"># \w{5}\\\\\\\\\w{5}   \\\\\\\\(正则表达式引擎)->\\\\正则对象</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"\w{5}\\\\\w{5}"</span><span class="token punctuation">,</span>str1<span class="token punctuation">)</span><span class="token comment"># 原生</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># hello\\\\world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串的边界</p>
<p>使用结束边界&quot;$&quot;完善手机号匹配</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment"># $ 表示到这里就结束了</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1[3578]\d{9}$"</span><span class="token punctuation">,</span><span class="token string">"13612345678abc"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"1[3578]\d{9}$"</span><span class="token punctuation">,</span><span class="token string">"13612345678"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># 13612345678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配邮箱</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@163.com$"</span><span class="token punctuation">,</span><span class="token string">"luwei123@163.com"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># luwei123@163.com</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@163.com$"</span><span class="token punctuation">,</span><span class="token string">"lw@163.com"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@163.com$"</span><span class="token punctuation">,</span><span class="token string">"luwei123@163.comHaHa"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># None</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@163.com$"</span><span class="token punctuation">,</span><span class="token string">"luwei123@163Xcom"</span><span class="token punctuation">)</span><span class="token comment"># .这里是任意字符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># luwei123@163Xcom 这里就有问题了,这里的.不是任意字符</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@163\.com$"</span><span class="token punctuation">,</span><span class="token string">"luwei123@163Xcom"</span><span class="token punctuation">)</span><span class="token comment"># 用转义字符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配分组</p>
<p>匹配0-100的数字</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"[1-9]?\d?$|100$"</span><span class="token punctuation">,</span><span class="token string">"0"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正则表达式中使用括号()来分组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"\w{3,10}@(163|qq|gmail)\.com"</span><span class="token punctuation">,</span><span class="token string">"hello@gmail.com"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span> <span class="token comment"># hello@gmail.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\NUM 使用第NUM个分组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
html_str <span class="token operator">=</span> <span class="token string">"&lt;head>&lt;title>python&lt;/title>&lt;/head>"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"&lt;.+>&lt;.+>.+&lt;/.+>&lt;/.+>"</span><span class="token punctuation">,</span> html_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># &lt;head>&lt;title>python&lt;/title1>&lt;/head></span>
html_str <span class="token operator">=</span> <span class="token string">"&lt;head>&lt;title>python&lt;/title111>&lt;/head222>"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"&lt;.+>&lt;.+>.+&lt;/.+>&lt;/.+>"</span><span class="token punctuation">,</span> html_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># &lt;head>&lt;title>python&lt;/title111>&lt;/head222></span>
html_str <span class="token operator">=</span> <span class="token string">"&lt;head>&lt;title>python&lt;/title111>&lt;/head222>"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"&lt;(.+)>&lt;(.+)>.+&lt;/\2>&lt;/\1>"</span><span class="token punctuation">,</span> html_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># None</span>
html_str <span class="token operator">=</span> <span class="token string">"&lt;head>&lt;title>python&lt;/title>&lt;/head>"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"&lt;(.+)>&lt;(.+)>.+&lt;/\2>&lt;/\1>"</span><span class="token punctuation">,</span> html_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># &lt;head>&lt;title>python&lt;/title>&lt;/head></span>
<span class="token comment"># 给每个分组起一个别名，这样方便使用</span>
html_str <span class="token operator">=</span> <span class="token string">"&lt;head>&lt;title>python&lt;/title>&lt;/head>"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r"&lt;(?P&lt;g1>.+)>&lt;(?P&lt;g2>.+)>.+&lt;/(?P=g2)>&lt;/(?P=g1)>"</span><span class="token punctuation">,</span> html_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># &lt;head>&lt;title>python&lt;/title>&lt;/head>1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="正则表达式的高级用法" tabindex="-1"><a class="header-anchor" href="#正则表达式的高级用法" aria-hidden="true">#</a> 正则表达式的高级用法</h1>
<ul>
<li>search
<ul>
<li>从左到右在字符串的任意位置搜索第一次出现匹配给定正则表达式的字符</li>
</ul>
</li>
<li>findall
<ul>
<li>在字符串中查找所有匹配成功的组，返回匹配成功的结果列表</li>
</ul>
</li>
<li>finditer
<ul>
<li>在字符串中查找所欲正则表达式匹配成功的字符串，返回iterator迭代器</li>
</ul>
</li>
<li>sub
<ul>
<li>将匹配到的数据使用新的数据替换</li>
</ul>
</li>
<li>split
<ul>
<li>根据指定的分隔符切割字符串，返回切割之后的列表</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"haha,hello,python,hello,world"</span><span class="token punctuation">)</span>
<span class="token comment"># 有两个hello，但只找第一个，不会继续往后找</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># hello</span>

rs <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"haha,hello,python,hello,world"</span><span class="token punctuation">)</span>
<span class="token comment">#  找到所有的hello匹配结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># ['hello', 'hello']</span>

rs <span class="token operator">=</span> re<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span><span class="token string">"\w{3,20}@(163|qq)\.(com|cn)"</span><span class="token punctuation">,</span><span class="token string">"hello@163.com---luwei@qq.com"</span><span class="token punctuation">)</span>
<span class="token comment"># 返回和match同类型的迭代器</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> it <span class="token keyword">in</span> rs<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># hello@163.com</span>
    <span class="token comment"># luwei@qq.com</span>

<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">"java python c cpp java"</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r"java"</span><span class="token punctuation">,</span><span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span>
<span class="token comment">#  将匹配到的数据使用新的数据替换</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># python python c cpp python</span>

<span class="token comment"># 用指定符号进行字符串切割</span>
line1 <span class="token operator">=</span> <span class="token string">"word;Word,emp?hahaha"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">r";|,|\?"</span><span class="token punctuation">,</span> line1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#别忘了转义"?"</span>
<span class="token comment"># ['word', 'Word', 'emp', 'hahaha']</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">r"[;,?]"</span><span class="token punctuation">,</span> line1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ['word', 'Word', 'emp', 'hahaha']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="贪婪与非贪婪模式" tabindex="-1"><a class="header-anchor" href="#贪婪与非贪婪模式" aria-hidden="true">#</a> 贪婪与非贪婪模式</h1>
<ul>
<li>贪婪模式
<ul>
<li>正则表达式引擎默认是贪婪模式，尽可能多的匹配字符</li>
</ul>
</li>
<li>非贪婪模式
<ul>
<li>与贪婪模式相反，尽可能少的匹配字符</li>
<li>在表示数量的”*“，”?“，”+“，“{m,n}”符号后面加上?，使贪婪变成非贪婪。</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
rs <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"hello\d*"</span><span class="token punctuation">,</span><span class="token string">"hello12345"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># hello12345</span>
rs <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"hello\d*?"</span><span class="token punctuation">,</span><span class="token string">"hello12345"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token comment"># hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


