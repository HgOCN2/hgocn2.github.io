<template><div><h1 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h1>
<ul>
<li><RouterLink to="/blogs/coding/programing-language/python/grammar/python.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4">日期和时间</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C">文件操作</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E5%A4%B9%E6%93%8D%E4%BD%9C">文件夹操作</a></li>
<li><a href="#JSON%E6%A0%BC%E5%BC%8F%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C">JSON格式文件操作</a></li>
<li><a href="#CSV%E6%A0%BC%E5%BC%8F%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C">CSV格式文件操作</a></li>
</ul>
<h1 id="日期和时间" tabindex="-1"><a class="header-anchor" href="#日期和时间" aria-hidden="true">#</a> 日期和时间</h1>
<ul>
<li>
<p>time模块</p>
<ul>
<li>time() 函数获取当前时间戳</li>
<li>time.sleep(seconds) 睡眠程序等待几秒钟</li>
</ul>
</li>
<li>
<p>datetime模块</p>
<ul>
<li>
<p>datetime.datetime.now() 获取当前日期和时间</p>
</li>
<li>
<p>strftime(format) 日期时间格式化</p>
</li>
<li>
<p>datetime.datetime.fromtimestamp(timestamp)将时间戳转换为日期时间</p>
</li>
<li>
<p>datetime.timedelta(时间间隔)返回一个时间间隔对象，通过时间间隔可以对时间进行加减法得到新的时间</p>
<table>
<thead>
<tr>
<th>格式化符号</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%y</td>
<td>两位数的年份表示(00~99)</td>
</tr>
<tr>
<td>%Y</td>
<td>思维说的年份表示(0000~9999)</td>
</tr>
<tr>
<td>%m</td>
<td>月份(01~12)</td>
</tr>
<tr>
<td>%d</td>
<td>月内中的一天(0~31)</td>
</tr>
<tr>
<td>%H</td>
<td>24小时制小时数(0~23)</td>
</tr>
<tr>
<td>%I</td>
<td>12小时制小时数(01~12)</td>
</tr>
<tr>
<td>%M</td>
<td>分钟数(00=59)</td>
</tr>
<tr>
<td>%S</td>
<td>秒(00~59)</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<p>time模块</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token comment"># 获取当前时间戳</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 从1970年到现在经历的秒数</span>

<span class="token comment"># 程序等待</span>
start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----------"</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment"># 程序等待</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"----------"</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>end_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>datetime模块</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 2018-05-17 20:11:59.104035</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;class 'datetime.datetime'></span>

<span class="token comment"># 日期格式化 string_formate</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">"%Y/%m/%d %H/%M/%S"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 2018/05/17 20/11/59</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算时间差值</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 计算时间差值</span>
<span class="token keyword">import</span> datetime<span class="token punctuation">,</span> time
start_time <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
end_time <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span><span class="token punctuation">.</span>seconds<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间戳转换为日期</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 时间戳转换为日期</span>
<span class="token keyword">import</span> datetime<span class="token punctuation">,</span> time
ts <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">"%Y-%m-%d"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据时间间隔，获取指定日期</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 根据时间间隔，获取指定日期</span>
<span class="token keyword">import</span> datetime<span class="token punctuation">,</span> time
today <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">"%Y-%m-%d %H-%M-%S"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 2018-05-17 20-22-56</span>
delta_time <span class="token operator">=</span> datetime<span class="token punctuation">.</span>timedelta<span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>delta_time<span class="token punctuation">)</span>
<span class="token comment"># 1 day, 0:00:00</span>
yestoday <span class="token operator">=</span> today <span class="token operator">-</span> delta_time
<span class="token keyword">print</span><span class="token punctuation">(</span>yestoday<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">"%Y-%m-%d %H-%M-%S"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 2018-05-16 20-22-56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="文件操作-1" tabindex="-1"><a class="header-anchor" href="#文件操作-1" aria-hidden="true">#</a> 文件操作</h1>
<ul>
<li>
<p>open(文件路径，访问模式，encoding=编码格式)方法打开一个已存在的文件，或者创建新的文件</p>
</li>
<li>
<p>close()方法关闭已打开的文件</p>
</li>
<li>
<p>打开文件常用的三种访问模式</p>
<ul>
<li>r:只读模式（默认）</li>
<li>w:只写模式</li>
<li>a:追加模式</li>
</ul>
</li>
<li>
<p>write(data)方法向文件中写入字符串</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 如果不存在则创建一个文件</span>
<span class="token comment">#相对路径</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
<span class="token comment">#绝对路径</span>
<span class="token comment"># f = open("d://test.txt", "w", encoding="utf-8")</span>
<span class="token comment"># 追加模式 a：append</span>
<span class="token comment"># f = open("test.txt", "a", encoding="utf-8")</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">"你好"</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>read()方法读取文件全部内容</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 读数据</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 一次性全读出来</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>readlines()方法读取文件全部内容，放回一个列表，每行数据是列表中的一个元素。</p>
<p>一次性全部读取，非常低效</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># readlines() 一次性全部读取，非常低效</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token comment"># ['你好\n', '123\n']</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'list'></span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"--->{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>readline()方法按行读取文件数据</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#readline</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token comment"># ['你好\n', '123\n']</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'list'></span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>writelines(字符串序列)将一个字符串序列（如字符串列表等）的元素写入到文件中</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
<span class="token comment"># f.writelines(["zhangsan","lisi","wangwu"])</span>
<span class="token comment"># zhangsanlisiwangwu</span>
f<span class="token punctuation">.</span>writelines<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"zhangsan\n"</span><span class="token punctuation">,</span><span class="token string">"lisi\n"</span><span class="token punctuation">,</span><span class="token string">"wangwu\n"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># zhangsan</span>
<span class="token comment"># lisi</span>
<span class="token comment"># wangwu</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>os.rename(oldname,newname)文件重命名</p>
</li>
<li>
<p>os.remove(filepath)删除文件</p>
</li>
<li>
<p>安全的打开关闭文件的方式(自动调用close方法)：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"d://test.txt"</span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">"hello python"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>writelines<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"zhangsan\n"</span><span class="token punctuation">,</span><span class="token string">"lisi\n"</span><span class="token punctuation">,</span><span class="token string">"wangwu\n"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="文件夹操作" tabindex="-1"><a class="header-anchor" href="#文件夹操作" aria-hidden="true">#</a> 文件夹操作</h1>
<ul>
<li>os.mkdir(path)：创建文件夹</li>
<li>os.getcwd()：获取程序运行的当前目录</li>
<li>os.listdir(path)：获取指定目录下的文件列表</li>
<li>os.rmdir(path)：删除空文件夹</li>
<li>shutil.rmtree(path)：删除非空文件夹
<ul>
<li>shutil：高级的文件、文件夹、压缩包处理模块</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token comment"># 创建文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">"d://test_dir"</span><span class="token punctuation">)</span>
<span class="token comment"># 获取程序运行的当前目录</span>
path <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token comment"># 获取指定目录下面所有文件</span>
files_list <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">"d://"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>files_list<span class="token punctuation">)</span>
<span class="token comment"># 删除空文件夹</span>
os<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token string">"d://test_dir"</span><span class="token punctuation">)</span>
<span class="token comment"># 删除非空文件夹</span>
<span class="token keyword">import</span> shutil
shutil<span class="token punctuation">.</span>rmtree<span class="token punctuation">(</span><span class="token string">"d://test_dir"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="json格式文件操作" tabindex="-1"><a class="header-anchor" href="#json格式文件操作" aria-hidden="true">#</a> JSON格式文件操作</h1>
<ul>
<li>
<p>引入json模块：import json</p>
</li>
<li>
<p>dumps(python_data)：将Python数据转换为JSON编码的字符串</p>
</li>
<li>
<p>loads(json_data)：将json编码的字符串转换为python的数据结构</p>
</li>
<li>
<p>dump(python_data, file)：将Python数据转换为JSON编码的字符串，并写入文件</p>
</li>
<li>
<p>load(json_file)：从JSON数据文件中读取数据，并将JSON编码的字符串转换为python的数据结构</p>
</li>
<li>
<p>Python数据类型与JSON类型对比</p>
<table>
<thead>
<tr>
<th>Python</th>
<th>JSON</th>
</tr>
</thead>
<tbody>
<tr>
<td>dict</td>
<td>{}</td>
</tr>
<tr>
<td>list, tuple</td>
<td>[]</td>
</tr>
<tr>
<td>str</td>
<td>sring</td>
</tr>
<tr>
<td>int 或者 float</td>
<td>number</td>
</tr>
<tr>
<td>True/False</td>
<td>true/false</td>
</tr>
<tr>
<td>None</td>
<td>null</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p>将Python数据转换为JSON编码的字符串，</p>
<p>然后将json编码的字符串转换为python的数据结构：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
disc <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
        <span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string">"language"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token string">"java"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">"study"</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">"AI"</span><span class="token punctuation">:</span><span class="token string">"python"</span><span class="token punctuation">,</span><span class="token string">"bigdata"</span><span class="token punctuation">:</span><span class="token string">"hadoop"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">"if_vip"</span><span class="token punctuation">:</span><span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
<span class="token comment"># 将Python数据转换为JSON编码的字符串</span>
json_str <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>disc<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>json_str<span class="token punctuation">)</span>
<span class="token comment"># {"name": "zhangsan", "age": 20, "language": ["python", "java"], "study": {"AI": "python", "bigdata": "hadoop"}, "if_vip": true}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>json_str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'str'></span>

<span class="token comment"># 将json编码的字符串转换为python的数据结构</span>
py_dict <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json_str<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>py_dict<span class="token punctuation">)</span>
<span class="token comment"># {'name': 'zhangsan', 'age': 20, 'language': ['python', 'java'], 'study': {'AI': 'python', 'bigdata': 'hadoop'}, 'if_vip': True}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>py_dict<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># &lt;class 'dict'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="csv格式文件操作" tabindex="-1"><a class="header-anchor" href="#csv格式文件操作" aria-hidden="true">#</a> CSV格式文件操作</h1>
<ul>
<li>csv格式文件默认以逗号分隔</li>
<li>引入csv模块：import csv</li>
<li>write写操作
<ul>
<li>writerow([row_data])一次写入一行数据</li>
<li>writerows([[row_data],[row_data],...])一次写入多行数据</li>
</ul>
</li>
<li>read读操作
<ul>
<li>reader(file_object)根据打开的文件对象返回一个可迭代reader对象</li>
<li>可以使用next(reader)遍历reader对象，获取每一行数据</li>
</ul>
</li>
<li>DictWriter和DictReader对象处理Python字典类型的数据</li>
</ul>
<p>write写操作：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> csv
datas <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"d://user_info.csv"</span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    writer <span class="token operator">=</span> csv<span class="token punctuation">.</span>writer<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> datas<span class="token punctuation">:</span>
        writer<span class="token punctuation">.</span>writerow<span class="token punctuation">(</span>row<span class="token punctuation">)</span>
        <span class="token comment"># name,age</span>
        <span class="token comment"># zhangsan,20</span>
        <span class="token comment"># lisi,24</span>
    <span class="token comment"># 一次写入</span>
    writer<span class="token punctuation">.</span>writerows<span class="token punctuation">(</span>datas<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>read读操作：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 读csv数据</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"d://user_info.csv"</span><span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    reader <span class="token operator">=</span> csv<span class="token punctuation">.</span>reader<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    header <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>reader<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token comment"># ['name', 'age']</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-------"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> reader<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字典数据操作</p>
<ul>
<li>写：</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> csv
header <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">]</span>
rows <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"lisi"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"d://user_info2.csv"</span><span class="token punctuation">,</span><span class="token string">"w"</span><span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    writer <span class="token operator">=</span> csv<span class="token punctuation">.</span>DictWriter<span class="token punctuation">(</span>f<span class="token punctuation">,</span> header<span class="token punctuation">)</span>
    writer<span class="token punctuation">.</span>writeheader<span class="token punctuation">(</span><span class="token punctuation">)</span>
    writer<span class="token punctuation">.</span>writerows<span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>读</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> csv
header <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">]</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"d://user_info2.csv"</span><span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">,</span>newline<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    reader <span class="token operator">=</span> csv<span class="token punctuation">.</span>DictReader<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> reader<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token comment"># OrderedDict([('age', '20'), ('name', 'zhangsan')])</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>row<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment"># zhangsan 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


