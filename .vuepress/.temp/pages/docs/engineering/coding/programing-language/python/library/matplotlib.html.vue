<template><div><h1 id="matplotlib" tabindex="-1"><a class="header-anchor" href="#matplotlib" aria-hidden="true">#</a> matplotlib</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/programing-language/python/library/python.html#python">返回上层目录</RouterLink></li>
</ul>
<h1 id="matplotlib简介" tabindex="-1"><a class="header-anchor" href="#matplotlib简介" aria-hidden="true">#</a> matplotlib简介</h1>
<p>matplotlib给python提供了丰富的绘图库，尤其是二维图像绘制。</p>
<p><strong>官网</strong>：http://matplotlib.org/</p>
<p><strong>简单介绍</strong></p>
<p>Python中最著名的绘图系统，很多其他的绘图例如seaborn（针对pandas绘图而来）也是由其封装而成。创世人John Hunter于2012年离世。这个绘图系统操作起来很复杂，和R的ggplot,lattice绘图相比显得望而却步，这也是为什么我个人不丢弃R的原因，虽然调用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>plt<span class="token punctuation">.</span>style<span class="token punctuation">.</span>use<span class="token punctuation">(</span><span class="token string">"ggplot"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>绘制的图形可以大致按照ggplot的颜色显示，但是还是感觉很鸡肋。但是matplotlib的复杂给其带来了很强的定制性。其具有面向对象的方式及Pyplot的经典高层封装。</p>
<p>需要掌握的是：</p>
<ol>
<li>散点图，折线图，条形图，直方图，饼状图，箱形图的绘制。</li>
<li>绘图的三大系统：pyplot，pylab(不推荐)，面向对象</li>
<li>坐标轴的调整，添加文字注释，区域填充，及特殊图形patches的使用</li>
<li>金融的同学注意的是：可以直接调用Yahoo财经数据绘图（真。。。）</li>
</ol>
<p>Pyplot快速入门：<a href="http://matplotlib.org/users/pyplot_tutorial.html" target="_blank" rel="noopener noreferrer">Pyplot tutorial<ExternalLinkIcon/></a></p>
<p>下面就是对官网pyplot快速入门教程的学习记录和翻译。</p>
<h1 id="图形的基本绘制" tabindex="-1"><a class="header-anchor" href="#图形的基本绘制" aria-hidden="true">#</a> 图形的基本绘制</h1>
<p>这个已经翻译好了http://blog.csdn.net/qq_31192383/article/details/53977822</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'some numbers'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_02.png" alt="Figure_02"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">'ro'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>axis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_03.png" alt="Figure_03"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment">#x = np.array(range(5))</span>
x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.25</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">'r--o'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'b--s'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'g--^'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'x^n'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_04.png" alt="Figure_04.png"></p>
<h1 id="绘图设置" tabindex="-1"><a class="header-anchor" href="#绘图设置" aria-hidden="true">#</a> 绘图设置</h1>
<h2 id="控制线条的属性" tabindex="-1"><a class="header-anchor" href="#控制线条的属性" aria-hidden="true">#</a> 控制线条的属性</h2>
<ul>
<li>使用关键字参数</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment">#x = np.array(range(5))</span>
x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.25</span><span class="token punctuation">)</span>

<span class="token comment">#plt.plot(x, x, 'r--o', x, x**2, 'b--s', x, x**3, 'g--^')</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">'r--o'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'b--s'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'g--^'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'x^n'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和上一张图相比，通过对线宽属性进行设置，即<code v-pre>linewidth = 3.0</code>，线条明显变粗了。</p>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_05.png" alt="Figure_05"></p>
<ul>
<li>通过获得线对象，对线对象进行设置</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment">#x = np.array(range(5))</span>
x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.25</span><span class="token punctuation">)</span>

<span class="token comment">#line1, = plt.plot(x, x, 'r--o')</span>
<span class="token punctuation">(</span>line1<span class="token punctuation">,</span> line2<span class="token punctuation">,</span> line3<span class="token punctuation">)</span> <span class="token operator">=</span> plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">'r--o'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'b--s'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'g--^'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>line1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class 'matplotlib.lines.Line2D'></span>
line1<span class="token punctuation">.</span>set_antialiased<span class="token punctuation">(</span><span class="token boolean">False</span><span class="token punctuation">)</span>
line2<span class="token punctuation">.</span>set_linewidth<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'x^n'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_06.png" alt="Figure_06.png"></p>
<ul>
<li>dads</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment">#x = np.array(range(5))</span>
x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.25</span><span class="token punctuation">)</span>

lines <span class="token operator">=</span> plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">'r--o'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'b--s'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'g--^'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">)</span>
<span class="token comment"># use keyword args</span>
plt<span class="token punctuation">.</span>setp<span class="token punctuation">(</span>lines<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'r'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">6.0</span><span class="token punctuation">)</span>
<span class="token comment"># 很显然，setp函数一次只能对一个线对象设置属性</span>
<span class="token comment"># or MATLAB style string value pairs</span>
<span class="token comment">#plt.setp(lines, 'color', 'r', 'linewidth', 6.0)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'x^n'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_07.png" alt="Figure_07"></p>
<p>​     同时获取多个线对象，分别使用<code v-pre>plt.setp()</code>函数设置每个线对象的属性。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.25</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span>line1<span class="token punctuation">,</span> line2<span class="token punctuation">,</span> line3<span class="token punctuation">)</span> <span class="token operator">=</span> plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">'r--o'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'b--s'</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'g--^'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>line1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class 'matplotlib.lines.Line2D'></span>
plt<span class="token punctuation">.</span>setp<span class="token punctuation">(</span>line1<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'r'</span><span class="token punctuation">,</span> lw <span class="token operator">=</span> <span class="token number">10.0</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>setp<span class="token punctuation">(</span>line2<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'g'</span><span class="token punctuation">,</span> linewidth <span class="token operator">=</span> <span class="token number">7.0</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>setp<span class="token punctuation">(</span>line3<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">,</span> lw <span class="token operator">=</span> <span class="token number">4.0</span><span class="token punctuation">)</span>
<span class="token comment"># 这样通过setup函数就能对所有线对象设置属性了</span>
<span class="token comment"># or MATLAB style string value pairs</span>
<span class="token comment">#plt.setp(lines, 'color', 'r', 'linewidth', 6.0)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'x^n'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_08.png" alt="Figure_08"></p>
<h3 id="line2d线对象的属性" tabindex="-1"><a class="header-anchor" href="#line2d线对象的属性" aria-hidden="true">#</a> Line2D线对象的属性</h3>
<p>下面是可选的Line2D线对象的属性</p>
<table>
<thead>
<tr>
<th style="text-align:center">Property</th>
<th style="text-align:center">Value Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">alpha</td>
<td style="text-align:center">float</td>
</tr>
<tr>
<td style="text-align:center">animated</td>
<td style="text-align:center">[True | False]</td>
</tr>
<tr>
<td style="text-align:center">antialiased or aa</td>
<td style="text-align:center">[True | False]</td>
</tr>
<tr>
<td style="text-align:center">clip_box</td>
<td style="text-align:center">a matplotlib.transform.Bbox instance</td>
</tr>
<tr>
<td style="text-align:center">clip_on</td>
<td style="text-align:center">[True | False]</td>
</tr>
<tr>
<td style="text-align:center">clip_path</td>
<td style="text-align:center">a Path instance and a Transform instance, a Patch</td>
</tr>
<tr>
<td style="text-align:center">color or c</td>
<td style="text-align:center">any matplotlib color</td>
</tr>
<tr>
<td style="text-align:center">contains</td>
<td style="text-align:center">the hit testing function</td>
</tr>
<tr>
<td style="text-align:center">dash_capstyle</td>
<td style="text-align:center">[<code v-pre>'butt'</code></td>
</tr>
<tr>
<td style="text-align:center">dash_joinstyle</td>
<td style="text-align:center">[<code v-pre>'miter'</code></td>
</tr>
<tr>
<td style="text-align:center">dashes</td>
<td style="text-align:center">sequence of on/off ink in points</td>
</tr>
<tr>
<td style="text-align:center">data</td>
<td style="text-align:center">(np.array xdata, np.array ydata)</td>
</tr>
<tr>
<td style="text-align:center">figure</td>
<td style="text-align:center">a matplotlib.figure.Figure instance</td>
</tr>
<tr>
<td style="text-align:center">label</td>
<td style="text-align:center">any string</td>
</tr>
<tr>
<td style="text-align:center">linestyle or ls</td>
<td style="text-align:center">[ <code v-pre>'-'</code></td>
</tr>
<tr>
<td style="text-align:center">linewidth or lw</td>
<td style="text-align:center">float value in points</td>
</tr>
<tr>
<td style="text-align:center">lod</td>
<td style="text-align:center">[True | False]</td>
</tr>
<tr>
<td style="text-align:center">marker</td>
<td style="text-align:center">[ <code v-pre>'+'</code></td>
</tr>
<tr>
<td style="text-align:center">markeredgecolor or mec</td>
<td style="text-align:center">any matplotlib color</td>
</tr>
<tr>
<td style="text-align:center">markeredgewidth or mew</td>
<td style="text-align:center">float value in points</td>
</tr>
<tr>
<td style="text-align:center">markerfacecolor or mfc</td>
<td style="text-align:center">any matplotlib color</td>
</tr>
<tr>
<td style="text-align:center">markersize or ms</td>
<td style="text-align:center">float</td>
</tr>
<tr>
<td style="text-align:center">markevery</td>
<td style="text-align:center">[ None | integer | (startind, stride) ]</td>
</tr>
<tr>
<td style="text-align:center">picker</td>
<td style="text-align:center">used in interactive line selection</td>
</tr>
<tr>
<td style="text-align:center">pickradius</td>
<td style="text-align:center">the line pick selection radius</td>
</tr>
<tr>
<td style="text-align:center">solid_capstyle</td>
<td style="text-align:center">[<code v-pre>'butt'</code></td>
</tr>
<tr>
<td style="text-align:center">solid_joinstyle</td>
<td style="text-align:center">[<code v-pre>'miter'</code></td>
</tr>
<tr>
<td style="text-align:center">transform</td>
<td style="text-align:center">a matplotlib.transforms.Transform instance</td>
</tr>
<tr>
<td style="text-align:center">visible</td>
<td style="text-align:center">[True | False]</td>
</tr>
<tr>
<td style="text-align:center">xdata</td>
<td style="text-align:center">np.array</td>
</tr>
<tr>
<td style="text-align:center">ydata</td>
<td style="text-align:center">np.array</td>
</tr>
<tr>
<td style="text-align:center">zorder</td>
<td style="text-align:center">any number</td>
</tr>
</tbody>
</table>
<p>为了得到可以设置的线对象的属性列表，调用<code v-pre>plt.setp()</code>函数，该函数以线对象为参数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
line1<span class="token punctuation">,</span> <span class="token operator">=</span> plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">'or'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>line1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class 'matplotlib.lines.Line2D'></span>

plt<span class="token punctuation">.</span>setp<span class="token punctuation">(</span>line1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_09.png" alt="Figure_09"></p>
<h3 id="支持的颜色" tabindex="-1"><a class="header-anchor" href="#支持的颜色" aria-hidden="true">#</a> 支持的颜色</h3>
<p>http://blog.csdn.net/mmc2015/article/details/47746195</p>
<p>如果颜色不显示指出，则默认循环使用不同的颜色，</p>
<table>
<thead>
<tr>
<th style="text-align:center">character</th>
<th style="text-align:center">color</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">‘b’</td>
<td style="text-align:center">blue</td>
</tr>
<tr>
<td style="text-align:center">‘g’</td>
<td style="text-align:center">green</td>
</tr>
<tr>
<td style="text-align:center">‘r’</td>
<td style="text-align:center">red</td>
</tr>
<tr>
<td style="text-align:center">‘c’</td>
<td style="text-align:center">cyan</td>
</tr>
<tr>
<td style="text-align:center">‘m’</td>
<td style="text-align:center">magenta</td>
</tr>
<tr>
<td style="text-align:center">‘y’</td>
<td style="text-align:center">yellow</td>
</tr>
<tr>
<td style="text-align:center">‘k’</td>
<td style="text-align:center">black</td>
</tr>
<tr>
<td style="text-align:center">‘w’</td>
<td style="text-align:center">white</td>
</tr>
</tbody>
</table>
<p>python的plt画图支持的全部颜色种类及对应单词：<a href="https://blog.csdn.net/u011808596/article/details/121335672" target="_blank" rel="noopener noreferrer">Python的plt画图中常用颜色值对应的单词<ExternalLinkIcon/></a>。</p>
<h3 id="支持的线型" tabindex="-1"><a class="header-anchor" href="#支持的线型" aria-hidden="true">#</a> 支持的线型</h3>
<p>http://blog.csdn.net/mmc2015/article/details/47746195</p>
<table>
<thead>
<tr>
<th style="text-align:center">character</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>'-'</code></td>
<td style="text-align:center">solid line style</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'--'</code></td>
<td style="text-align:center">dashed line style</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'-.'</code></td>
<td style="text-align:center">dash-dot line style</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>':'</code></td>
<td style="text-align:center">dotted line style</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'.'</code></td>
<td style="text-align:center">point marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>','</code></td>
<td style="text-align:center">pixel marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'o'</code></td>
<td style="text-align:center">circle marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'v'</code></td>
<td style="text-align:center">triangle_down marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'^'</code></td>
<td style="text-align:center">triangle_up marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'&lt;'</code></td>
<td style="text-align:center">triangle_left marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'&gt;'</code></td>
<td style="text-align:center">triangle_right marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'1'</code></td>
<td style="text-align:center">tri_down marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'2'</code></td>
<td style="text-align:center">tri_up marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'3'</code></td>
<td style="text-align:center">tri_left marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'4'</code></td>
<td style="text-align:center">tri_right marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'s'</code></td>
<td style="text-align:center">square marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'p'</code></td>
<td style="text-align:center">pentagon marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'*'</code></td>
<td style="text-align:center">star marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'h'</code></td>
<td style="text-align:center">hexagon1 marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'H'</code></td>
<td style="text-align:center">hexagon2 marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'+'</code></td>
<td style="text-align:center">plus marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'x'</code></td>
<td style="text-align:center">x marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'D'</code></td>
<td style="text-align:center">diamond marker</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'d'</code></td>
<td style="text-align:center">thin_diamond marker</td>
</tr>
<tr>
<td style="text-align:center">`'</td>
<td style="text-align:center">'`</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>'_'</code></td>
<td style="text-align:center">hline marker</td>
</tr>
</tbody>
</table>
<h2 id="绘制多个图像和轴" tabindex="-1"><a class="header-anchor" href="#绘制多个图像和轴" aria-hidden="true">#</a> 绘制多个图像和轴</h2>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_10.png" alt="Figure_10"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span>t<span class="token punctuation">)</span><span class="token operator">*</span>np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>np<span class="token punctuation">.</span>pi<span class="token operator">*</span>t<span class="token punctuation">)</span>

t1 <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span>
t2 <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0.05</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">211</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>t1<span class="token punctuation">,</span>func<span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'bo'</span><span class="token punctuation">,</span>t2<span class="token punctuation">,</span>func<span class="token punctuation">(</span>t2<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'k'</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">212</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>t2<span class="token punctuation">,</span>np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>np<span class="token punctuation">.</span>pi<span class="token operator">*</span>t2<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'r--'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_11_1.png" alt="Figure_11_1"></p>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_11_2.png" alt="Figure_11_1"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>               <span class="token comment"># the first figure</span>
plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">211</span><span class="token punctuation">)</span>            <span class="token comment"># the first subplot in the first figure</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">212</span><span class="token punctuation">)</span>            <span class="token comment"># the second subplot in tthe first figure</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>               <span class="token comment"># a second figure</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>               <span class="token comment"># figure 1 current; ubplot(212) still current</span>
plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">211</span><span class="token punctuation">)</span>            <span class="token comment"># make subplot(211) in figure1 current</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">"Easy as 1, 2, 3"</span><span class="token punctuation">)</span><span class="token comment"># subplot 211 tittle</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/Figure_12.png" alt="Figure_12"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt

<span class="token comment"># Fixing random state for reproducibility</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">19680801</span><span class="token punctuation">)</span>

mu<span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">15</span>
x <span class="token operator">=</span> mu <span class="token operator">+</span> sigma <span class="token operator">*</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>

<span class="token comment"># the histogram of the data</span>
n<span class="token punctuation">,</span> bins<span class="token punctuation">,</span> patches <span class="token operator">=</span> plt<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>x<span class="token punctuation">,</span> bins<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> normed<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token string">'g'</span><span class="token punctuation">,</span> edgecolor<span class="token operator">=</span><span class="token string">'k'</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.75</span><span class="token punctuation">,</span> histtype<span class="token operator">=</span><span class="token string">'bar'</span><span class="token punctuation">)</span>
<span class="token comment">#hist的参数非常多，但常用的就这六个，只有第一个是必须的，后面六个可选</span>
<span class="token comment">#x: 需要计算直方图的一维数组</span>
<span class="token comment">#bins: 直方图的柱数，可选项，默认为10，可不写bins=10,直接在x后面写10</span>
<span class="token comment">#normed: 是否将得到的直方图向量归一化。默认为0</span>
<span class="token comment">#facecolor: 直方图颜色</span>
<span class="token comment">#edgecolor: 直方图边框颜色</span>
<span class="token comment">#alpha: 透明度</span>
<span class="token comment">#histtype: 直方图类型，‘bar’, ‘barstacked’, ‘step’, ‘stepfilled’</span>
<span class="token comment">#返回值：</span>
<span class="token comment">#n: 直方图向量，是否归一化由参数normed设定</span>
<span class="token comment">#bins: 返回各个bin的区间范围</span>
<span class="token comment">#patches: 返回每个bin里面包含的数据，是一个list</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token comment">#直方图的y值向量，是否归一化由参数normed决定</span>
<span class="token comment">#[  1.28221796e-04   9.14648810e-04   5.06048687e-03   1.65919004e-02</span>
<span class="token comment">#   2.51229239e-02   2.27209022e-02   1.13262586e-02   3.09441934e-03</span>
<span class="token comment">#   4.87242824e-04   3.41924789e-05]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bins<span class="token punctuation">)</span><span class="token comment">#返回各个bin的区间范围</span>
<span class="token comment">#[  43.48262893   55.18110804   66.87958716   78.57806627   90.27654539</span>
<span class="token comment">#  101.97502451  113.67350362  125.37198274  137.07046185  148.76894097</span>
<span class="token comment">#  160.46742008]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>patches<span class="token punctuation">)</span><span class="token comment">#返回每一个bin里包含的数据，是一个list</span>
<span class="token comment">#&lt;a list of 10 Patch objects></span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>patches<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#&lt;class 'matplotlib.cbook.silent_list'></span>

plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'Smarts'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'Probability'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">'Histogram of IQ'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">.025</span><span class="token punctuation">,</span> <span class="token string">r'$\mu=100,\ \sigma=15$'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>axis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.03</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="各种图形的绘制" tabindex="-1"><a class="header-anchor" href="#各种图形的绘制" aria-hidden="true">#</a> 各种图形的绘制</h1>
<h2 id="柱形图" tabindex="-1"><a class="header-anchor" href="#柱形图" aria-hidden="true">#</a> 柱形图</h2>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/bar.png" alt="bar"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3685588454</span><span class="token punctuation">,</span>	<span class="token number">1399975394</span><span class="token punctuation">,</span>	<span class="token number">670070036</span><span class="token punctuation">,</span>	<span class="token number">413226974</span><span class="token punctuation">,</span>	<span class="token number">298643648</span><span class="token punctuation">,</span>	<span class="token number">247590988</span><span class="token punctuation">,</span>	<span class="token number">136104912</span><span class="token punctuation">,</span>	<span class="token number">115126068</span><span class="token punctuation">,</span>	<span class="token number">61071716</span><span class="token punctuation">,</span>	<span class="token number">48001466</span><span class="token punctuation">,</span>	<span class="token number">38891784</span><span class="token punctuation">,</span>	<span class="token number">25692216</span><span class="token punctuation">,</span>	<span class="token number">6555850</span><span class="token punctuation">,</span>	<span class="token number">5839100</span><span class="token punctuation">,</span>	<span class="token number">4661722</span><span class="token punctuation">]</span>
labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'0.00-0.01'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.02-0.03'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.04-0.05'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.06-0.07'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.08-0.09'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.10-0.11'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.12-0.13'</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">'0.14-0.15'</span><span class="token punctuation">]</span>
data <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token operator">/</span><span class="token number">7177459576</span> <span class="token keyword">for</span> a <span class="token keyword">in</span> data<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>bar<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> tick_label<span class="token operator">=</span>labels<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">0.85</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xticks<span class="token punctuation">(</span>rotation<span class="token operator">=</span><span class="token number">90</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">u'区间'</span><span class="token punctuation">)</span>  <span class="token comment"># 给x轴数据加上名称</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">u'数量占比'</span><span class="token punctuation">)</span>  <span class="token comment"># 给y轴数据加上名称</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">u'区间数量占比分布'</span><span class="token punctuation">)</span>  <span class="token comment"># 给整个图表加上标题</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> xx<span class="token punctuation">,</span> yy <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>text<span class="token punctuation">(</span>xx<span class="token punctuation">,</span> yy<span class="token operator">+</span><span class="token number">0.005</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>yy<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">,</span> ha<span class="token operator">=</span><span class="token string">'center'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个bar并列，且加上说明和bar顶部的文字描述</p>
<p><img src="@source/docs/engineering/coding/programing-language/python/library/pic/bar_two.png" alt="bar_two"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># coding:utf-8</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token comment"># 指定默认字体</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'font.sans-serif'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'SimHei'</span><span class="token punctuation">]</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'font.family'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'sans-serif'</span>
<span class="token comment"># 用来正常显示负号</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'axes.unicode_minus'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>


data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">30986452</span><span class="token punctuation">,</span> <span class="token number">50727653</span><span class="token punctuation">,</span> <span class="token number">78679555</span><span class="token punctuation">,</span> <span class="token number">126869295</span><span class="token punctuation">,</span> <span class="token number">166980873</span><span class="token punctuation">]</span>
data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">round</span><span class="token punctuation">(</span>a<span class="token operator">/</span><span class="token number">378880486</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">for</span> a <span class="token keyword">in</span> data1<span class="token punctuation">]</span>

data2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4812099</span><span class="token punctuation">,</span> <span class="token number">6957302</span><span class="token punctuation">,</span> <span class="token number">9347045</span><span class="token punctuation">,</span> <span class="token number">11852169</span><span class="token punctuation">,</span> <span class="token number">13049122</span><span class="token punctuation">]</span>
data2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">round</span><span class="token punctuation">(</span>a<span class="token operator">/</span><span class="token number">25753696</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">for</span> a <span class="token keyword">in</span> data2<span class="token punctuation">]</span>
width <span class="token operator">=</span> <span class="token number">0.3</span>
labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Top50'</span><span class="token punctuation">,</span> <span class="token string">'Top100'</span><span class="token punctuation">,</span> <span class="token string">'Top200'</span><span class="token punctuation">,</span> <span class="token string">'Top500'</span><span class="token punctuation">,</span> <span class="token string">'Top1000'</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
plt<span class="token punctuation">.</span>bar<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data1<span class="token punctuation">,</span> tick_label<span class="token operator">=</span>labels<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> facecolor <span class="token operator">=</span> <span class="token string">'#9999ff'</span><span class="token punctuation">,</span> edgecolor <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'xx召回'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>bar<span class="token punctuation">(</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>width<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data2<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> facecolor <span class="token operator">=</span> <span class="token string">'#ff9999'</span><span class="token punctuation">,</span> edgecolor <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'yy召回'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span>loc<span class="token operator">=</span><span class="token string">"upper left"</span><span class="token punctuation">)</span> <span class="token comment"># label的位置在左上，没有这句会找不到label去哪了</span>


plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">u'Top-K不同K值'</span><span class="token punctuation">)</span>  <span class="token comment"># 给x轴数据加上名称</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">u'平均xx率'</span><span class="token punctuation">)</span>  <span class="token comment"># 给y轴数据加上名称</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">u'Top-K平均xx率'</span><span class="token punctuation">)</span>  <span class="token comment"># 给整个图表加上标题</span>

<span class="token keyword">for</span> xx<span class="token punctuation">,</span> yy <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>data1<span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>text<span class="token punctuation">(</span>xx<span class="token punctuation">,</span> yy<span class="token operator">+</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>yy<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">,</span> ha<span class="token operator">=</span><span class="token string">'center'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> xx<span class="token punctuation">,</span> yy <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>data2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>text<span class="token punctuation">(</span>xx<span class="token operator">+</span>width<span class="token punctuation">,</span> yy<span class="token operator">+</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>yy<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'%'</span><span class="token punctuation">,</span> ha<span class="token operator">=</span><span class="token string">'center'</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1>
<h2 id="中文乱码" tabindex="-1"><a class="header-anchor" href="#中文乱码" aria-hidden="true">#</a> 中文乱码</h2>
<p>具体参见如下帖子：</p>
<p><a href="https://blog.csdn.net/Fantasy_Muse/article/details/78585049" target="_blank" rel="noopener noreferrer">Mac系统彻底解决matplotlib中文显示乱码的问题<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/minixuezhen/article/details/81516949" target="_blank" rel="noopener noreferrer">mac上Matplotlib中文乱码问题<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#coding:utf-8</span>
<span class="token comment"># 指定默认字体</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'font.sans-serif'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'SimHei'</span><span class="token punctuation">]</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'font.family'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'sans-serif'</span>
<span class="token comment"># 用来正常显示负号</span>
plt<span class="token punctuation">.</span>rcParams<span class="token punctuation">[</span><span class="token string">'axes.unicode_minus'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>

<span class="token comment"># 有中文出现的情况，需要 u'内容'，比如 </span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">u'横坐标'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/37180159" target="_blank" rel="noopener noreferrer">如何系统地学习Python 中 matplotlib, numpy, scipy, pandas？<ExternalLinkIcon/></a></li>
</ul>
<p>matplotlib简介中的简单介绍就是复制的这里。</p>
</div></template>


