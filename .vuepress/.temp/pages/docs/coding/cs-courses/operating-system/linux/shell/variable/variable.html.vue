<template><div><h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1>
<ul>
<li><RouterLink to="/docs/coding/cs-courses/operating-system/linux/shell/shell.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="条件变量替换" tabindex="-1"><a class="header-anchor" href="#条件变量替换" aria-hidden="true">#</a> 条件变量替换</h1>
<p>Bash Shell可以进行变量的条件替换，既只有某种条件发生时才进行替换，替换
条件放在{}中。</p>
<ul>
<li>
<p><code v-pre>${value:-word} </code></p>
<p><strong>当变量未定义或者值为空时,返回值为word的内容,否则返回变量的值</strong></p>
</li>
<li>
<p><code v-pre>${value:=word} </code></p>
<p>与前者类似,只是若变量未定义或者值为空时,在返回word的值的同时将</p>
<p>word赋值给value</p>
</li>
<li>
<p><code v-pre>${value:?message} </code></p>
<p>若变量以赋值的话,正常替换.否则将消息message送到标准错误输出（若</p>
<p>此替换出现在Shell程序中,那么该程序将终止运行）</p>
</li>
<li>
<p><code v-pre>${value:+word} </code></p>
<p>若变量以赋值的话,其值才用word替换,否则不进行任何替换</p>
</li>
<li>
<p><code v-pre>${value:offset} </code></p>
<p><code v-pre>${value:offset:length} </code></p>
<p>从变量中提取子串,这里offset和length可以是算术表达式</p>
</li>
<li>
<p><code v-pre>${#value} </code></p>
<p>变量的字符个数</p>
</li>
<li>
<p><code v-pre>${value#pattern} </code>   <code v-pre>${value##pattern} </code></p>
<p>去掉value中与pattern相匹配的部分,条件是value的开头与pattern相匹配</p>
<p><code v-pre>#</code>与<code v-pre>##</code>的区别在于一个是最短匹配模式,一个是最长匹配模式。</p>
</li>
<li>
<p><code v-pre>${value%pattern}</code>     <code v-pre>${value%%pattern} </code></p>
<p>和<code v-pre>${value#pattern} </code>类似,只是是从value的尾部于pattern相匹配，<code v-pre>%</code>与<code v-pre>%%</code>的区别与<code v-pre>#</code>与<code v-pre>##</code>一样</p>
</li>
<li>
<p><code v-pre>${value/pattern/string}</code>    <code v-pre>${value//pattern/string} </code></p>
<p>进行变量内容的替换,把与pattern匹配的部分替换为string的内容,<code v-pre>/</code>与<code v-pre>//</code>的区别与上同</p>
</li>
</ul>
<p>注意: 上述条件变量替换中,除<code v-pre>${value:=word} </code>外,其余均不影响变量本身的值</p>
<h1 id="date系统时间" tabindex="-1"><a class="header-anchor" href="#date系统时间" aria-hidden="true">#</a> date系统时间</h1>
<p>date是Linux系统里自带的一个系统命令，用来显示当前的系统时间，不过默认显示的结果里包括很多信息，特别是做为文件名输出时，不是很方便</p>
<p>好在date命令里包含格式化输出的选项</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@root ~]# date "+%Y-%m-%d"
2013-02-19
[root@root ~]# date "+%H:%M:%S"
13:13:59
[root@root ~]# date "+%Y-%m-%d %H:%M:%S"
2013-02-19 13:14:19
[root@root ~]# date "+%Y_%m_%d %H:%M:%S"  
2013_02_19 13:14:58
# -d,--date=字符串 显示指定字符串所描述的时间，而非当前时间
[root@root ~]# date -d today 
Tue Feb 19 13:10:38 CST 2013
[root@root ~]# date -d now
Tue Feb 19 13:10:43 CST 2013
[root@root ~]# date -d tomorrow
Wed Feb 20 13:11:06 CST 2013
[root@root ~]# date -d yesterday
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给定的格式FORMAT 控制着输出，解释序列如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">%</span><span class="token operator">%</span>    一个文字的 <span class="token operator">%</span>
<span class="token operator">%</span>a    当前locale <span class="token function">的星期名缩写</span><span class="token punctuation">(</span>例如： 日，代表星期日<span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">A</span>    当前locale <span class="token function">的星期名全称</span> <span class="token punctuation">(</span>如：星期日<span class="token punctuation">)</span>
<span class="token operator">%</span>b    当前locale <span class="token function">的月名缩写</span> <span class="token punctuation">(</span>如：一，代表一月<span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">B</span>    当前locale <span class="token function">的月名全称</span> <span class="token punctuation">(</span>如：一月<span class="token punctuation">)</span>
<span class="token operator">%</span>c    当前locale <span class="token function">的日期和时间</span> <span class="token punctuation">(</span>如：<span class="token number">2005</span>年<span class="token number">3</span>月<span class="token number">3</span>日 星期四 <span class="token number">23</span><span class="token operator">:</span><span class="token number">05</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">C</span>    世纪；比如 <span class="token operator">%</span><span class="token constant">Y</span><span class="token function">，通常为省略当前年份的后两位数字</span><span class="token punctuation">(</span>例如：<span class="token number">20</span><span class="token punctuation">)</span>
<span class="token operator">%</span>d    <span class="token function">按月计的日期</span><span class="token punctuation">(</span>例如：<span class="token number">01</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">D</span>    按月计的日期；等于<span class="token operator">%</span>m<span class="token operator">/</span><span class="token operator">%</span>d<span class="token operator">/</span><span class="token operator">%</span>y
<span class="token operator">%</span>e    按月计的日期，添加空格，等于<span class="token operator">%</span>_d
<span class="token operator">%</span><span class="token constant">F</span>    完整日期格式，等价于 <span class="token operator">%</span><span class="token constant">Y</span><span class="token operator">-</span><span class="token operator">%</span>m<span class="token operator">-</span><span class="token operator">%</span>d
<span class="token operator">%</span>g    <span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8601</span> <span class="token function">格式年份的最后两位</span> <span class="token punctuation">(</span>参见<span class="token operator">%</span><span class="token constant">G</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">G</span>    <span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8601</span> <span class="token function">格式年份</span> <span class="token punctuation">(</span>参见<span class="token operator">%</span><span class="token constant">V</span><span class="token punctuation">)</span>，一般只和 <span class="token operator">%</span><span class="token constant">V</span> 结合使用
<span class="token operator">%</span>h    等于<span class="token operator">%</span>b
<span class="token operator">%</span><span class="token constant">H</span>    <span class="token function">小时</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">I</span>    <span class="token function">小时</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token operator">%</span>c    <span class="token function">按年计的日期</span><span class="token punctuation">(</span><span class="token number">001</span><span class="token operator">-</span><span class="token number">366</span><span class="token punctuation">)</span>
<span class="token operator">%</span>k    <span class="token function">时</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">23</span><span class="token punctuation">)</span>
<span class="token operator">%</span>l    <span class="token function">时</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token operator">%</span>m    <span class="token function">月份</span><span class="token punctuation">(</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">M</span>    <span class="token function">分</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">%</span>n    换行
<span class="token operator">%</span><span class="token constant">N</span>    <span class="token function">纳秒</span><span class="token punctuation">(</span><span class="token number">000000000</span><span class="token operator">-</span><span class="token number">999999999</span><span class="token punctuation">)</span>
<span class="token operator">%</span>p    当前locale 下的<span class="token string">"上午"</span>或者<span class="token string">"下午"</span>，未知时输出为空
<span class="token operator">%</span><span class="token constant">P</span>    与<span class="token operator">%</span>p 类似，但是输出小写字母
<span class="token operator">%</span>r    当前locale 下的 <span class="token number">12</span> <span class="token function">小时时钟时间</span> <span class="token punctuation">(</span>如：<span class="token number">11</span><span class="token operator">:</span><span class="token number">11</span><span class="token operator">:</span><span class="token number">04</span> 下午<span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">R</span>    <span class="token number">24</span> 小时时间的时和分，等价于 <span class="token operator">%</span><span class="token constant">H</span><span class="token operator">:</span><span class="token operator">%</span><span class="token constant">M</span>
<span class="token operator">%</span>s    自<span class="token constant">UTC</span> 时间 <span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> 以来所经过的秒数
<span class="token operator">%</span><span class="token constant">S</span>    <span class="token function">秒</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">60</span><span class="token punctuation">)</span>
<span class="token operator">%</span>t    输出制表符 Tab
<span class="token operator">%</span><span class="token constant">T</span>    时间，等于<span class="token operator">%</span><span class="token constant">H</span><span class="token operator">:</span><span class="token operator">%</span><span class="token constant">M</span><span class="token operator">:</span><span class="token operator">%</span><span class="token constant">S</span>
<span class="token operator">%</span>u    星期，<span class="token number">1</span> 代表星期一
<span class="token operator">%</span><span class="token constant">U</span>    <span class="token function">一年中的第几周，以周日为每星期第一天</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">53</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">V</span>    <span class="token constant">ISO</span><span class="token operator">-</span><span class="token number">8601</span> <span class="token function">格式规范下的一年中第几周，以周一为每星期第一天</span><span class="token punctuation">(</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">53</span><span class="token punctuation">)</span>
<span class="token operator">%</span>w    <span class="token function">一星期中的第几日</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span>，<span class="token number">0</span> 代表周一
<span class="token operator">%</span><span class="token constant">W</span>    <span class="token function">一年中的第几周，以周一为每星期第一天</span><span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">53</span><span class="token punctuation">)</span>
<span class="token operator">%</span>x    当前locale <span class="token function">下的日期描述</span> <span class="token punctuation">(</span>如：<span class="token number">12</span><span class="token operator">/</span><span class="token number">31</span><span class="token operator">/</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">X</span>    当前locale <span class="token function">下的时间描述</span> <span class="token punctuation">(</span>如：<span class="token number">23</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">48</span><span class="token punctuation">)</span>
<span class="token operator">%</span>y    <span class="token function">年份最后两位数位</span> <span class="token punctuation">(</span><span class="token number">00</span><span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">Y</span>    年份
<span class="token operator">%</span>z <span class="token operator">+</span>hhmm              <span class="token function">数字时区</span><span class="token punctuation">(</span>例如，<span class="token operator">-</span><span class="token number">0400</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token operator">:</span>z <span class="token operator">+</span>hh<span class="token operator">:</span>mm            <span class="token function">数字时区</span><span class="token punctuation">(</span>例如，<span class="token operator">-</span><span class="token number">04</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token operator">:</span><span class="token operator">:</span>z <span class="token operator">+</span>hh<span class="token operator">:</span>mm<span class="token operator">:</span>ss        <span class="token function">数字时区</span><span class="token punctuation">(</span>例如，<span class="token operator">-</span><span class="token number">04</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token operator">:</span><span class="token operator">:</span><span class="token operator">:</span>z                 <span class="token function">数字时区带有必要的精度</span> <span class="token punctuation">(</span>例如，<span class="token operator">-</span><span class="token number">04</span>，<span class="token operator">+</span><span class="token number">05</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">Z</span>                    <span class="token function">按字母表排序的时区缩写</span> <span class="token punctuation">(</span>例如，<span class="token constant">EDT</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，日期的数字区域以0 填充。</p>
<p>以下可选标记可以跟在&quot;%&quot;后：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">\</span>- <span class="token punctuation">(</span>连字符<span class="token punctuation">)</span>不填充该域
_ <span class="token punctuation">(</span>下划线<span class="token punctuation">)</span>以空格填充
<span class="token number">0</span> <span class="token punctuation">(</span>数字0<span class="token punctuation">)</span>以0 填充
^ 如果可能，使用大写字母
<span class="token punctuation">\</span># 如果可能，使用相反的大小写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在任何标记之后还允许一个可选的域宽度指定，它是一个十进制数字。作为一个可选的修饰声明，它可以是E，在可能的情况下使用本地环境关联的表示方式；或者是O，在可能的情况下使用本地环境关联的数字符号。</p>
<h2 id="获取其他时间的日期" tabindex="-1"><a class="header-anchor" href="#获取其他时间的日期" aria-hidden="true">#</a> 获取其他时间的日期</h2>
<p>linux中用shell获取昨天、明天或多天前的日期:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d <span class="token parameter variable">--date</span> <span class="token string">'2 days ago'</span><span class="token variable">)</span></span> <span class="token comment">#获取昨天或多天前的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> next-day +%Y%m%d <span class="token comment">#明天日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +%Y%m%d <span class="token comment">#昨天日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> tomorrow +%Y%m%d <span class="token comment">#明天日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> yesterday +%Y%m%d <span class="token comment">#昨天日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> last-month +%Y%m <span class="token comment">#上个月日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> next-month +%Y%m <span class="token comment">#下个月日期 </span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> next-year +%Y <span class="token comment">#明年日期 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/jk110333/article/details/8590746/" target="_blank" rel="noopener noreferrer">Linux下date命令，格式化输出，时间设置<ExternalLinkIcon/></a></li>
<li><a href="https://blog.51cto.com/liucb/1845201" target="_blank" rel="noopener noreferrer">bash中获取其他时间的日期<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;date系统时间&quot;参考此博客。</p>
</div></template>


