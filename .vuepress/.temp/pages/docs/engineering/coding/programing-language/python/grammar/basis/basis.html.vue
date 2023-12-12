<template><div><h1 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/programing-language/python/grammar/python.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%AC%AC%E4%B8%80%E4%B8%AApython%E7%A8%8B%E5%BA%8F">第一个python程序</a></li>
<li><a href="#%E6%B3%A8%E9%87%8A">注释</a></li>
<li><a href="#%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B">变量类型</a>
<ul>
<li><a href="#%E6%9F%A5%E7%9C%8B%E5%8F%98%E9%87%8F%E7%B1%BB%E5%9E%8B">查看变量类型</a></li>
<li><a href="#%E6%95%B4%E6%95%B0%E7%9A%84%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%80%BC">整数的最大最小值</a></li>
</ul>
</li>
<li><a href="#%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA">输入输出</a></li>
<li><a href="#%E6%A0%BC%E5%BC%8F%E5%8C%96%E7%AC%A6%E5%8F%B7">格式化符号</a></li>
<li><a href="#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2">类型转换</a></li>
<li><a href="#%E5%8F%98%E9%87%8F%E5%90%8D%E3%80%81%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99%E3%80%81%E5%85%B3%E9%94%AE%E5%AD%97">变量名、命名规则、关键字</a></li>
<li><a href="#%E8%BF%90%E7%AE%97%E7%AC%A6">运算符</a></li>
</ul>
<h1 id="第一个python程序" tabindex="-1"><a class="header-anchor" href="#第一个python程序" aria-hidden="true">#</a> 第一个python程序</h1>
<p>在开始的搜索框中输入cmd，打开cmd命令窗口，然后输入python，进入python</p>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/cmd_print.jpg" alt="cmd_print"></p>
<p>打印“hello,world!”：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>print("hello,world!")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出python：</p>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/cmd_exit.jpg" alt="cmd_exit"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>exit()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>工欲善其事，必先利其器，我们使用<strong>pycharm</strong>作为我们的开发环境。当然你也可以用spyder(anaconda自带)。</p>
<h1 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h1>
<ul>
<li>单行注释
<ul>
<li>以#开头，只注释一行</li>
<li>快捷键ctrl+/</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#单行注释，打印hello world</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"hello,world!"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多行注释
<ul>
<li>'''注释内容'''，实现多行注释</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
多行注释，打印hello world
'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"hello,world!"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h1>
<p>比C语言主要多了列表、元组、字典这三种类型。</p>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/data_type.png" alt="data_type"></p>
<p>注意：</p>
<ul>
<li>Boolean类型的True和False首字母要大写。</li>
<li>python不需要指定变量类型，其解释器会根据变量值来判断是什么类型。</li>
</ul>
<h2 id="查看变量类型" tabindex="-1"><a class="header-anchor" href="#查看变量类型" aria-hidden="true">#</a> 查看变量类型</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">"zhangsan"</span>
age <span class="token operator">=</span> <span class="token number">28</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整数的最大最小值" tabindex="-1"><a class="header-anchor" href="#整数的最大最小值" aria-hidden="true">#</a> 整数的最大最小值</h2>
<p>在Python 3中，这个问题不适用。 普通的<code v-pre>int</code>类型是无界的。</p>
<p>但是，您实际上可能正在寻找机器的字大小。 这在Python 3中仍然可用，如<code v-pre>-sys.maxint - 1</code>。</p>
<p>您可以使用<code v-pre>-sys.maxint - 1</code>计算最小值，如下所示。</p>
<p>一旦超过此值，Python就会<strong>从普通整数切换为长整数</strong>。 所以大多数时候，你不需要知道它。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token builtin">max</span> <span class="token operator">=</span> sys<span class="token punctuation">.</span>maxsize  <span class="token comment"># 9223372036854775807</span>
<span class="token builtin">min</span> <span class="token operator">=</span> <span class="token operator">-</span>sys<span class="token punctuation">.</span>maxsize <span class="token operator">-</span><span class="token number">1.</span> <span class="token comment"># -922337203685477580</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h1>
<ul>
<li>输入input()</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 输入</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入用户名："</span><span class="token punctuation">)</span>
password <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入密码："</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：接收的类型都是默认字符串&quot;str&quot;类型。</p>
<ul>
<li>print输出
<ul>
<li>直接输出内容</li>
<li>输出单个和多个变量</li>
<li>格式化输出</li>
<li>format输出，可免去定义格式</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 直接输出内容</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"luwei,28"</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token string">"luwei"</span>
age <span class="token operator">=</span> <span class="token number">28</span>
<span class="token comment"># 输出单个和多个变量</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
<span class="token comment"># 格式化输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你的名字是：%s"</span><span class="token operator">%</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你的年龄是：%d"</span><span class="token operator">%</span>age<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name:%s,age:%d"</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#一行输出多个变量</span>
<span class="token comment"># format输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name:{},age:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#可免去定义格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>无换行输出
<ul>
<li>加end=&quot;&quot;</li>
</ul>
</li>
<li>换行输出
<ul>
<li>加\n</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">"luwei"</span>
age <span class="token operator">=</span> <span class="token number">28</span>
<span class="token comment"># 无换行输出，加end=""</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你的名字是：%s "</span><span class="token operator">%</span>name<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你的年龄是：%d"</span><span class="token operator">%</span>age<span class="token punctuation">)</span>
<span class="token comment"># 换行输出，加\n</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name:%s\nage:%d"</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="格式化符号" tabindex="-1"><a class="header-anchor" href="#格式化符号" aria-hidden="true">#</a> 格式化符号</h1>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/format_symbol.png" alt="format_symbol.png"></p>
<p><strong>浮点数精度显示控制</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>percent <span class="token operator">=</span> <span class="token number">99.99</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你战胜了全国%.2f%%的用户"</span><span class="token operator">%</span>percent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在格式化输出的时候**%**是特殊字符，表示转换说明符，如果想打印普通的%，那么要使用%%来表示。</p>
<h1 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h1>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/type_convert.png" alt="type_convert"></p>
<p>特别的，其中eval()会根据你所需要的数据类型来自动转换。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入姓名："</span><span class="token punctuation">)</span>
age <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入年龄："</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name:%s,age:%d"</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"name:%s,age:%d"</span><span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token builtin">eval</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="变量名、命名规则、关键字" tabindex="-1"><a class="header-anchor" href="#变量名、命名规则、关键字" aria-hidden="true">#</a> 变量名、命名规则、关键字</h1>
<ul>
<li>
<p>变量名</p>
<ul>
<li>区分大小写</li>
<li>字母、数字、下划线组成，但是不能以数字开头</li>
</ul>
</li>
<li>
<p>命名规则</p>
<ul>
<li>见名知意，如name</li>
<li>驼峰命名法，如：类名(UserInfo)、异常名(ValueError)</li>
<li>小写字符+下划线，如变量名(user_name)、函数名(get_name())</li>
</ul>
</li>
<li>
<p>关键字</p>
<ul>
<li>
<p>在python内部具有特殊功能的标识符</p>
</li>
<li>
<p>通过keyword模块的kwlist函数查看</p>
</li>
<li>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> keyword <span class="token keyword">as</span> kw
<span class="token keyword">print</span><span class="token punctuation">(</span>kw<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1>
<ul>
<li>算数运算符
<ul>
<li>+，加</li>
<li>-，减</li>
<li>*，乘</li>
<li>/，除</li>
<li>%，取余，10%3=1</li>
<li>**，幂次方</li>
<li>//，取整，返回商的整数部分，10//3=3</li>
</ul>
</li>
<li>比较运算符
<ul>
<li>==，等于</li>
<li>!=，不等于</li>
<li>&gt;，大于</li>
<li>&lt;，小于</li>
<li>&gt;=，大于等于</li>
<li>&lt;=，小于等于</li>
</ul>
</li>
<li>赋值运算符
<ul>
<li>=，赋值运算符</li>
<li>+=，自加</li>
<li>-=，自减</li>
<li>*=，自乘</li>
<li>/=，自除</li>
<li>%=，自取余</li>
<li>**=，自幂次方</li>
<li>//=，自取整</li>
</ul>
</li>
<li>逻辑运算
<ul>
<li>and， x and y，与</li>
<li>or，x or y，或</li>
<li>not，not x，非</li>
</ul>
</li>
</ul>
<p><strong>运算符的优先级</strong></p>
<p><img src="@source/docs/engineering/coding/programing-language/python/grammar/basis/pic/operator_prior.png" alt="operator_prior"></p>
</div></template>


