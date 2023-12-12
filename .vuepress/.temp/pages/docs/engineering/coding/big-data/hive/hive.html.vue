<template><div><h1 id="hive常用函数" tabindex="-1"><a class="header-anchor" href="#hive常用函数" aria-hidden="true">#</a> HIVE常用函数</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/big-data/big-data.html">返回上层目录</RouterLink></li>
</ul>
<p>这是工作实践中最常用到的一些sql函数，总结如下：</p>
<h1 id="表操作查询" tabindex="-1"><a class="header-anchor" href="#表操作查询" aria-hidden="true">#</a> 表操作查询</h1>
<h2 id="alter-table" tabindex="-1"><a class="header-anchor" href="#alter-table" aria-hidden="true">#</a> ALTER TABLE</h2>
<h3 id="增删" tabindex="-1"><a class="header-anchor" href="#增删" aria-hidden="true">#</a> 增删</h3>
<h4 id="增加列" tabindex="-1"><a class="header-anchor" href="#增加列" aria-hidden="true">#</a> 增加列</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> xxx<span class="token punctuation">.</span>xxx <span class="token keyword">ADD</span> <span class="token keyword">COLUMNS</span> <span class="token punctuation">(</span>
  xxx <span class="token keyword">bigint</span> <span class="token keyword">COMMENT</span> <span class="token string">'xxx'</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列" aria-hidden="true">#</a> 删除列</h4>
<p>Hive没有删除指定列的命令，Hive通过replace命令变向实现删除列的功能。
replace命令将用新的列信息替换之前的列信息，相当于删除之前全部的列，再用新的列代替。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> xxx<span class="token punctuation">.</span>xxx <span class="token keyword">REPLACE</span> <span class="token keyword">COLUMNS</span> <span class="token punctuation">(</span>
  xxx <span class="token keyword">bigint</span> <span class="token keyword">COMMENT</span> <span class="token string">'xxx'</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内外表转换" tabindex="-1"><a class="header-anchor" href="#内外表转换" aria-hidden="true">#</a> 内外表转换</h3>
<p>外部表转为内部表</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> xxx<span class="token punctuation">.</span>xxxx <span class="token keyword">set</span> TBLPROPERTIES<span class="token punctuation">(</span><span class="token string">'EXTERNAL'</span><span class="token operator">=</span><span class="token string">'false'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/shawnhu007/article/details/83055135" target="_blank" rel="noopener noreferrer">Hive外部表和内部表区别以及相互转换<ExternalLinkIcon/></a></li>
</ul>
<h3 id="删除分区" tabindex="-1"><a class="header-anchor" href="#删除分区" aria-hidden="true">#</a> 删除分区</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> xxx<span class="token punctuation">.</span>xxxx <span class="token keyword">DROP</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">PARTITION</span><span class="token punctuation">(</span>partition_date<span class="token operator">=</span><span class="token string">'20191002'</span><span class="token punctuation">,</span> partition_version<span class="token operator">=</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：如果是外部表，则仅仅会删除表的meta信息，实际的数据是不会删除的。如果非要删除外部表的实际数据，则需要把外部表先转为内部表。</p>
<h2 id="load-data-inpath数据导入函数" tabindex="-1"><a class="header-anchor" href="#load-data-inpath数据导入函数" aria-hidden="true">#</a> LOAD DATA INPATH数据导入函数</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> INPATH <span class="token string">'hdfs://nameservice/user/xxxxxxxx/'</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> xxx<span class="token punctuation">.</span>xxxxxxxx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样会把原始的hdfs中的数据删除掉，相当于剪切。</p>
<h2 id="desc-table查询表的详细信息" tabindex="-1"><a class="header-anchor" href="#desc-table查询表的详细信息" aria-hidden="true">#</a> desc table查询表的详细信息</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">desc</span> xxx<span class="token punctuation">.</span><span class="token keyword">table</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="show-create-table建表语句查询" tabindex="-1"><a class="header-anchor" href="#show-create-table建表语句查询" aria-hidden="true">#</a> show create table建表语句查询</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> xxxx<span class="token punctuation">.</span>xxxxxxxxx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="desc-formatted表的存储位置查询" tabindex="-1"><a class="header-anchor" href="#desc-formatted表的存储位置查询" aria-hidden="true">#</a> desc formatted表的存储位置查询</h2>
<p>用下面的语句查询表级别的存储位置：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">desc</span> formatted xxx<span class="token punctuation">.</span>xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有一类表比较特殊，各个分区是自己用命令load的。因此需要查具体的分区信息：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">desc</span> formatted xxxx <span class="token keyword">partition</span><span class="token punctuation">(</span>partition_date<span class="token operator">=</span>xxx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="with-as临时表" tabindex="-1"><a class="header-anchor" href="#with-as临时表" aria-hidden="true">#</a> WITH AS临时表</h2>
<p>WITH 通常与AS连用，也叫做子查询部分。</p>
<p>1). 可用来定义一个SQL片断，该片断会被整个SQL语句所用到。</p>
<p>2). 为了让SQL语句的可读性更高</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">WITH</span> xxxx <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
        xxx
    <span class="token keyword">FROM</span>
        xxx
<span class="token punctuation">)</span>

<span class="token keyword">INSERT</span> OVERWRITE <span class="token keyword">TABLE</span> xxxx<span class="token punctuation">.</span>xxxxxxxx
<span class="token keyword">SELECT</span>
    xxx
<span class="token keyword">FROM</span>
	xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几个WITH AS连用要加逗号，只写一个WITH：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">WITH</span> sayhi_raw_tmp <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
    xxx
<span class="token punctuation">)</span>

<span class="token punctuation">,</span> active_tab_tmp <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
    yyy
<span class="token punctuation">)</span>  

<span class="token keyword">SELECT</span>
		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，create table的时候，应当把create table语句放在最前面：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> abcxxxx <span class="token keyword">AS</span> 

<span class="token keyword">WITH</span> sayhi_raw_tmp <span class="token keyword">AS</span>
<span class="token punctuation">(</span>
    xxx
<span class="token punctuation">)</span>

<span class="token keyword">SELECT</span>
	z
<span class="token keyword">FROM</span>
	xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="udf用户自定义函数" tabindex="-1"><a class="header-anchor" href="#udf用户自定义函数" aria-hidden="true">#</a> UDF用户自定义函数</h1>
<h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ADD</span> JAR hdfs:<span class="token comment">//nameservice1/user/hive/warehouse/bin/udfs/mxxx-hive-latest.jar;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">FUNCTION</span> udfLatLngToLocation <span class="token keyword">AS</span> <span class="token string">'com.imxxx.hive.common.udf.UDFLatLngToLocation'</span><span class="token punctuation">;</span>
<span class="token keyword">ADD</span> <span class="token keyword">FILE</span> hdfs:<span class="token comment">//nameservice1/user/hive/thirddata/tl_geoCity_all/${hivevar:partition_date}/geoFile;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">FUNCTION</span> udafMergeMapStr <span class="token keyword">AS</span> <span class="token string">'com.imxxxx.hive.common.udaf.UDAFMergeMapStr'</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">FUNCTION</span> udfToJson <span class="token keyword">AS</span> <span class="token string">'com.mxxx.hive.common.udf.UDFToJson'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常用内置函数" tabindex="-1"><a class="header-anchor" href="#常用内置函数" aria-hidden="true">#</a> 常用内置函数</h1>
<h2 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> A</h2>
<h3 id="array-contains判断数组是否包含元素" tabindex="-1"><a class="header-anchor" href="#array-contains判断数组是否包含元素" aria-hidden="true">#</a> array_contains判断数组是否包含元素</h3>
<p>判断元素数组是否包含元素:array_contains</p>
<p>语法: array_contains(Array&lt;T&gt;, value)</p>
<p>返回值: boolean</p>
<p>说明: 返回 Array&lt;T&gt;中是否包含元素 value</p>
<p>举例:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>hive<span class="token operator">></span> <span class="token keyword">select</span> array_contains<span class="token punctuation">(</span>array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> lxw1234<span class="token punctuation">;</span> 
<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h2>
<h3 id="coalesce返回参数中第一个非空值" tabindex="-1"><a class="header-anchor" href="#coalesce返回参数中第一个非空值" aria-hidden="true">#</a> COALESCE返回参数中第一个非空值</h3>
<p>语法: COALESCE(T v1, T v2, …)
返回参数中的第一个非空值；如果所有值都为NULL，那么返回NULL</p>
<p>具体举例：https://www.cnblogs.com/luogankun/p/4015280.html</p>
<h3 id="collect-list列转数组不去重" tabindex="-1"><a class="header-anchor" href="#collect-list列转数组不去重" aria-hidden="true">#</a> collect_list列转数组不去重</h3>
<p>Hive中collect相关的函数有collect_list和collect_set。</p>
<p>它们都是将分组中的某列转为一个数组返回，不同的是collect_list不去重而collect_set去重，详见<a href="https://blog.csdn.net/AntKengElephant/article/details/83277885" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 
	username<span class="token punctuation">,</span> collect_list<span class="token punctuation">(</span>video_name<span class="token punctuation">)</span> 
<span class="token keyword">from</span> 
	t_visit_video 
<span class="token keyword">group</span> <span class="token keyword">by</span> username<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>collect_list还有一个重要作用，展示字表排序后结果，而collect_set是乱序的：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> overwrite <span class="token keyword">table</span> xxx<span class="token punctuation">.</span>yyy <span class="token keyword">partition</span> <span class="token punctuation">(</span>partition_date<span class="token operator">=</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">)</span>
<span class="token keyword">select</span>
        concat_ws<span class="token punctuation">(</span><span class="token string">':'</span><span class="token punctuation">,</span><span class="token string">'np_item_cf'</span><span class="token punctuation">,</span>user_id<span class="token punctuation">)</span> <span class="token keyword">as</span> redis_key
        <span class="token punctuation">,</span>user_id <span class="token keyword">as</span> hash_key<span class="token punctuation">,</span>
        <span class="token punctuation">,</span>concat_ws<span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">,</span>collect_list<span class="token punctuation">(</span>item_id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">value</span>
<span class="token keyword">from</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span>
                user_id<span class="token punctuation">,</span>
                item_id<span class="token punctuation">,</span>
                score<span class="token punctuation">,</span>
        <span class="token keyword">from</span> xxx<span class="token punctuation">.</span>zzz
        <span class="token keyword">where</span> partition_date<span class="token operator">=</span><span class="token string">'${hivevar:partition_date}'</span>
        distribute <span class="token keyword">by</span> user_id
        sort <span class="token keyword">by</span> user_id<span class="token punctuation">,</span> score <span class="token keyword">desc</span>
<span class="token punctuation">)</span> t
<span class="token keyword">group</span> <span class="token keyword">by</span> user_id
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="collect-set列转数组去重" tabindex="-1"><a class="header-anchor" href="#collect-set列转数组去重" aria-hidden="true">#</a> collect_set列转数组去重</h3>
<p>Hive中collect相关的函数有collect_list和collect_set。</p>
<p>它们都是将分组中的某列转为一个数组返回，不同的是collect_list不去重而collect_set去重，详见<a href="https://blog.csdn.net/AntKengElephant/article/details/83277885" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 
	username<span class="token punctuation">,</span> collect_set<span class="token punctuation">(</span>video_name<span class="token punctuation">)</span> 
<span class="token keyword">from</span> 
	t_visit_video 
<span class="token keyword">group</span> <span class="token keyword">by</span> username<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat字符串连接" tabindex="-1"><a class="header-anchor" href="#concat字符串连接" aria-hidden="true">#</a> concat字符串连接</h3>
<p>语法: CONCAT(string A, string B…)</p>
<p>返回值: string</p>
<p>说明：返回输入字符串连接后的结果，支持任意个输入字符串</p>
<p>举例：</p>
<p>[select concat(‘abc’,'def’,'gh’) from lxw_dual;</p>
<p>abcdefgh</p>
<h3 id="concat-ws带分隔符字符串连接" tabindex="-1"><a class="header-anchor" href="#concat-ws带分隔符字符串连接" aria-hidden="true">#</a> concat_ws带分隔符字符串连接</h3>
<p>语法: concat_ws(string SEP, string A, string B…);  concat_ws(',',array[n]) as value</p>
<p>返回值: string</p>
<p>说明：返回输入字符串连接后的结果，SEP表示各个字符串间的分隔符</p>
<p>举例1：</p>
<p>hive&gt; select concat_ws(‘,’,'abc’,'def’,'gh’) from dual;</p>
<p>abc,def,gh</p>
<p>举例2：</p>
<p>concat_ws(',',collect_list(item_id)) as value</p>
<h2 id="d" tabindex="-1"><a class="header-anchor" href="#d" aria-hidden="true">#</a> D</h2>
<h3 id="datediff日期相减天数" tabindex="-1"><a class="header-anchor" href="#datediff日期相减天数" aria-hidden="true">#</a> datediff日期相减天数</h3>
<p>语法:   datediff(string enddate, string startdate)
返回值: int
说明: 返回结束日期减去开始日期的天数。
举例：
hive&gt;   select datediff('2012-12-08','2012-05-09') from dual;
213</p>
<h3 id="date-sub日期减少函数" tabindex="-1"><a class="header-anchor" href="#date-sub日期减少函数" aria-hidden="true">#</a> date_sub日期减少函数</h3>
<p>语法: date_sub (string startdate, int days)
返回值: string
说明: 返回开始日期startdate减少days天后的日期。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> date_sub<span class="token punctuation">(</span><span class="token string">'2012-12-08'</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">from</span> iteblog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="distinct去重" tabindex="-1"><a class="header-anchor" href="#distinct去重" aria-hidden="true">#</a> distinct去重</h3>
<p>distinct单列很简单</p>
<p>distinct多列：select distinct id, type from tablename;</p>
<p>实际返回id与type同时不相同的结果,也就是distinct同时作用了两个字段，必须得id与type都相同的才被排除了。</p>
<p>现在验证一下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_1_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_1_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_1_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_1_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>L</td>
</tr>
</tbody>
</table>
<p>现在distinct一下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">distinct</span> to_id<span class="token punctuation">,</span> from_id <span class="token keyword">from</span> table_1_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果变为了</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>B</td>
<td>M</td>
</tr>
</tbody>
</table>
<h3 id="distribute-by-a-sort-by-b" tabindex="-1"><a class="header-anchor" href="#distribute-by-a-sort-by-b" aria-hidden="true">#</a> distribute by A sort by B</h3>
<p>distribute by是控制在map端如何拆分数据给reduce端的。hive会根据distribute by后面列，对应reduce的个数进行分发，默认是采用hash算法。</p>
<p>sort by为每个reduce产生一个排序文件。在有些情况下，你需要控制某个特定行应该到哪个reducer，这通常是为了进行后续的聚集操作。distribute by刚好可以做这件事。</p>
<p>因此，distribute by经常和sort by配合使用。</p>
<p><strong>注：Distribute by和sort by的使用场景</strong></p>
<p>**1.**Map输出的文件大小不均。</p>
<p>**2.**Reduce输出文件大小不均。</p>
<p>**3.**小文件过多。</p>
<p>**4.**文件超大。</p>
<h2 id="f" tabindex="-1"><a class="header-anchor" href="#f" aria-hidden="true">#</a> F</h2>
<h3 id="from-unixtime" tabindex="-1"><a class="header-anchor" href="#from-unixtime" aria-hidden="true">#</a> FROM_UNIXTIME</h3>
<p>将unix时间戳转换为自己想要的格式</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>
		FROM_UNIXTIME<span class="token punctuation">(</span>act_time<span class="token punctuation">,</span><span class="token string">'yyyyMMdd'</span><span class="token punctuation">)</span><span class="token keyword">as</span> partition_date<span class="token punctuation">,</span>
<span class="token keyword">FROM</span> 
		xxx<span class="token punctuation">.</span>xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="j" tabindex="-1"><a class="header-anchor" href="#j" aria-hidden="true">#</a> J</h2>
<h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h3>
<h4 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join" aria-hidden="true">#</a> INNER JOIN</h4>
<p>该函数的意思很容易懂，但是当join自身的时候，会发生什么？</p>
<p>这就不确定了吧。。现在我们来具体看下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_1_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_1_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_1_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_1_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>然后join自身</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> 
    t1<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to
    <span class="token punctuation">,</span>t1<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t1_from
    <span class="token punctuation">,</span>t2<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to
    <span class="token punctuation">,</span>t2<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t2_from
<span class="token keyword">FROM</span> 
    table_1_luwei t1 
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
    table_1_luwei t2 
<span class="token keyword">ON</span> t1<span class="token punctuation">.</span>from_id <span class="token operator">=</span> t2<span class="token punctuation">.</span>from_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>t1_to</th>
<th>t1_from</th>
<th>t2_to</th>
<th>t2_from</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>B</td>
<td>M</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>M</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>5</td>
<td>A</td>
<td>M</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>6</td>
<td>A</td>
<td>N</td>
<td>A</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>我们再来看下它的应用（为什么要join自身）</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>
    t1_to
    <span class="token punctuation">,</span>t2_to
    <span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> score
<span class="token keyword">FROM</span>
<span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> 
        t1<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to
        <span class="token punctuation">,</span>t1<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t1_from
        <span class="token punctuation">,</span>t2<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to
        <span class="token punctuation">,</span>t2<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t2_from
    <span class="token keyword">FROM</span> 
        table_1_luwei t1 
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
        table_1_luwei t2 
    <span class="token keyword">ON</span> t1<span class="token punctuation">.</span>from_id <span class="token operator">=</span> t2<span class="token punctuation">.</span>from_id
 <span class="token punctuation">)</span> aaa
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> t1_to<span class="token punctuation">,</span> t2_to
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>t1_to</th>
<th>t2_to</th>
<th>score</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>B</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>A</td>
<td>A</td>
<td>3</td>
</tr>
<tr>
<td>3</td>
<td>B</td>
<td>A</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>B</td>
<td>B</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>看到了吧，结果是同现矩阵，用于协同过滤算法。</p>
<p>我们继续再建立一个表，尝试和上表进行交联。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_2_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_2_luwei<span class="token punctuation">(</span>
    from_id string<span class="token punctuation">,</span>
    activity <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_2_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'L'</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'M'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'N'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_2_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该表为：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>from_id</th>
<th>activity</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>L</td>
<td>2</td>
</tr>
<tr>
<td>2</td>
<td>M</td>
<td>5</td>
</tr>
<tr>
<td>3</td>
<td>N</td>
<td>7</td>
</tr>
</tbody>
</table>
<p>交联程序为：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>
    t1_to
    <span class="token punctuation">,</span>t2_to
    <span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span>t1_activity <span class="token operator">*</span> t2_activity<span class="token punctuation">)</span> <span class="token keyword">as</span> score
<span class="token keyword">FROM</span>
<span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> 
        t1<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to
        <span class="token punctuation">,</span>t2<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to
    	<span class="token punctuation">,</span>t3<span class="token punctuation">.</span>activity <span class="token keyword">as</span> t1_activity
    	<span class="token punctuation">,</span>t4<span class="token punctuation">.</span>activity <span class="token keyword">as</span> t2_activity
    <span class="token keyword">FROM</span> 
        table_1_luwei t1 
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
        table_1_luwei t2 
    <span class="token keyword">ON</span> t1<span class="token punctuation">.</span>from_id <span class="token operator">=</span> t2<span class="token punctuation">.</span>from_id
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
        table_2_luwei t3
    <span class="token keyword">ON</span> t1<span class="token punctuation">.</span>from_id <span class="token operator">=</span> t3<span class="token punctuation">.</span>from_id
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
        table_2_luwei t4
    <span class="token keyword">ON</span> t1<span class="token punctuation">.</span>from_id <span class="token operator">=</span> t4<span class="token punctuation">.</span>from_id
 <span class="token punctuation">)</span> aaa
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> t1_to<span class="token punctuation">,</span> t2_to
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交联结果为：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>t1_to</th>
<th>t2_to</th>
<th>score</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>B</td>
<td>A</td>
<td>25</td>
</tr>
<tr>
<td>2</td>
<td>A</td>
<td>A</td>
<td>78</td>
</tr>
<tr>
<td>3</td>
<td>B</td>
<td>B</td>
<td>25</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>B</td>
<td>25</td>
</tr>
</tbody>
</table>
<h4 id="left-outer-join" tabindex="-1"><a class="header-anchor" href="#left-outer-join" aria-hidden="true">#</a> LEFT OUTER JOIN</h4>
<p>创建表1:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_1_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_1_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_1_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_1_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>创建表2:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_2_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_2_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_2_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'D'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"K"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_2_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>N</td>
</tr>
<tr>
<td>3</td>
<td>C</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>D</td>
<td>M</td>
</tr>
<tr>
<td>5</td>
<td>A</td>
<td>K</td>
</tr>
</tbody>
</table>
<p>然后基于上面的两个表，进行where条件选择：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 
    table_1_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to_id
    <span class="token punctuation">,</span>table_1_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t1_from_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t2_from_id
<span class="token keyword">from</span>
    table_1_luwei
<span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span>
    table_2_luwei
<span class="token keyword">on</span> table_1_luwei<span class="token punctuation">.</span>from_id <span class="token operator">=</span> table_2_luwei<span class="token punctuation">.</span>from_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>t1_to_id</th>
<th>t1_from_id</th>
<th>t2_to_id</th>
<th>t2_from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
<td>D</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>B</td>
<td>M</td>
<td>C</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>M</td>
<td>D</td>
<td>M</td>
</tr>
<tr>
<td>5</td>
<td>A</td>
<td>M</td>
<td>C</td>
<td>M</td>
</tr>
<tr>
<td>6</td>
<td>A</td>
<td>N</td>
<td>B</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>是不是和你想的一样呢？</p>
<p>而如果多加一个条件，那就是我们想要的：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 
    table_1_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to_id
    <span class="token punctuation">,</span>table_1_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t1_from_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t2_from_id
<span class="token keyword">from</span>
    table_1_luwei
<span class="token keyword">left</span> <span class="token keyword">outer</span> <span class="token keyword">join</span>
    table_2_luwei
<span class="token keyword">on</span> table_1_luwei<span class="token punctuation">.</span>from_id <span class="token operator">=</span> table_2_luwei<span class="token punctuation">.</span>from_id <span class="token operator">and</span> table_1_luwei<span class="token punctuation">.</span>to_id <span class="token operator">=</span> table_2_luwei<span class="token punctuation">.</span>to_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>行号</td>
<td>t1_to_id</td>
<td>t1_from_id</td>
<td>t2_to_id</td>
<td>t2_from_id</td>
</tr>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>N</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="l" tabindex="-1"><a class="header-anchor" href="#l" aria-hidden="true">#</a> L</h2>
<h3 id="log数学函数" tabindex="-1"><a class="header-anchor" href="#log数学函数" aria-hidden="true">#</a> log数学函数</h3>
<p>语法: log(double base, double a)
返回值: double
说明: 返回以base为底的a的对数</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> log<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token keyword">from</span> iteblog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="r" tabindex="-1"><a class="header-anchor" href="#r" aria-hidden="true">#</a> R</h2>
<h3 id="rand随机" tabindex="-1"><a class="header-anchor" href="#rand随机" aria-hidden="true">#</a> rand随机</h3>
<p>Hive实现从表中随机抽样得到一个不重复的数据样本</p>
<p>select  *  from table_a  order by rand() limit 100;</p>
<p>取1/10大小</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span>
	<span class="token operator">*</span>
<span class="token keyword">from</span>
<span class="token punctuation">(</span>
    xxx
<span class="token punctuation">)</span> tab
<span class="token keyword">where</span> rand<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0.1</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexp判断字符串是否包含字符串" tabindex="-1"><a class="header-anchor" href="#regexp判断字符串是否包含字符串" aria-hidden="true">#</a> regexp判断字符串是否包含字符串</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>recall_type_list <span class="token operator">regexp</span> <span class="token string">'16'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="regexp-replace正则表达式解析" tabindex="-1"><a class="header-anchor" href="#regexp-replace正则表达式解析" aria-hidden="true">#</a> regexp_replace正则表达式解析</h3>
<p>语法: regexp_extract(string subject, string pattern, int index)
返回值: string
说明：将字符串subject按照pattern正则表达式的规则拆分，返回index指定的字符。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>partition_date <span class="token operator">>=</span> regexp_replace<span class="token punctuation">(</span>date_sub<span class="token punctuation">(</span>concat<span class="token punctuation">(</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="round四舍五入" tabindex="-1"><a class="header-anchor" href="#round四舍五入" aria-hidden="true">#</a> ROUND四舍五入</h3>
<p><strong>ROUND(X)：</strong> 返回参数X的四舍五入的一个整数。(注意：ROUND 返回值被变换为一个BIGINT!)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1.23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token keyword">select</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1.58</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token operator">></span> <span class="token operator">-</span><span class="token number">2</span>
<span class="token keyword">select</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">1.58</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token operator">></span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ROUND(X,D)：</strong> 返回参数X的四舍五入的有 D 位小数的一个数字。如果D为0，结果将没有小数点或小数部分。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">1.298</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token operator">></span> <span class="token number">1.3</span>
<span class="token keyword">select</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">1.298</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">-</span><span class="token operator">></span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="row-number排序输出前n个" tabindex="-1"><a class="header-anchor" href="#row-number排序输出前n个" aria-hidden="true">#</a> row_number排序输出前n个</h3>
<p>语法：row_number () over (partition by A order by B desc) as rank</p>
<p>排序输出前n个</p>
<p>说明: DISTRIBUTE BY COLUMN_A 的意思是按照 COLUMN_A 进行分组, SORT BY COLUMN_B 的意思是按照 COLUMN_B 进行排序, 后面跟着 ASC/DESC 指定是按照升序还是降序排序。row_number() 按指定的列进行分组生成行序列, 从 1 开始, 如果两行记录的分组列相同, 则行序列+1。</p>
<p><strong><a href="https://my.oschina.net/jackieyeah/blog/681274" target="_blank" rel="noopener noreferrer">需求实现<ExternalLinkIcon/></a></strong></p>
<p>数据表 user_item_score 结构大致如下：</p>
<table>
<thead>
<tr>
<th>user_id</th>
<th>item_id</th>
<th>item_score</th>
</tr>
</thead>
<tbody>
<tr>
<td>U_AAAA</td>
<td>I_AAA1</td>
<td>0.5</td>
</tr>
<tr>
<td>U_BBBB</td>
<td>I_BBB1</td>
<td>0.3</td>
</tr>
<tr>
<td>U_AAAA</td>
<td>I_AAA2</td>
<td>0.6</td>
</tr>
<tr>
<td>U_CCCC</td>
<td>I_CCCC</td>
<td>0.7</td>
</tr>
<tr>
<td>U_AAAA</td>
<td>I_AAA3</td>
<td>0.55</td>
</tr>
<tr>
<td>U_BBBB</td>
<td>I_BBB2</td>
<td>0.4</td>
</tr>
</tbody>
</table>
<p>实现 SQL 如下:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> user_id<span class="token punctuation">,</span> item_id<span class="token punctuation">,</span> item_score <span class="token keyword">from</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token operator">*</span><span class="token punctuation">,</span> row_number<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">over</span> <span class="token punctuation">(</span> distribute <span class="token keyword">by</span> user_id sort <span class="token keyword">by</span> item_score <span class="token keyword">desc</span><span class="token punctuation">)</span> rownum <span class="token keyword">from</span> user_item_score
<span class="token punctuation">)</span> <span class="token keyword">temp</span>
<span class="token keyword">where</span> rownum <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终结果如下:</p>
<table>
<thead>
<tr>
<th>user_id</th>
<th>item_id</th>
<th>item_score</th>
<th>row_num</th>
</tr>
</thead>
<tbody>
<tr>
<td>U_AAAA</td>
<td>I_AAA2</td>
<td>0.6</td>
<td>1</td>
</tr>
<tr>
<td>U_AAAA</td>
<td>I_AAA3</td>
<td>0.55</td>
<td>2</td>
</tr>
<tr>
<td>U_AAAA</td>
<td>I_AAA1</td>
<td>0.5</td>
<td>3</td>
</tr>
<tr>
<td>U_BBBB</td>
<td>I_BBB2</td>
<td>0.4</td>
<td>1</td>
</tr>
<tr>
<td>U_BBBB</td>
<td>I_BBB1</td>
<td>0.3</td>
<td>2</td>
</tr>
<tr>
<td>U_CCCC</td>
<td>I_CCCC</td>
<td>0.7</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>是不是懂了？</p>
<h2 id="s" tabindex="-1"><a class="header-anchor" href="#s" aria-hidden="true">#</a> S</h2>
<h3 id="sort-by局部排序" tabindex="-1"><a class="header-anchor" href="#sort-by局部排序" aria-hidden="true">#</a> sort by局部排序</h3>
<p>sort by不是全局排序，其在数据进入reducer前完成排序，因此，如果用sort by进行排序，并且设置mapred.reduce.tasks&gt;1，则sort by只会保证每个reducer的输出有序，并不保证全局有序。</p>
<p>sort by不同于order by，它不受hive.mapred.mode属性的影响，sort by的数据只能保证在同一个reduce中的数据可以按指定字段排序。</p>
<p>使用sort by你可以指定执行的reduce个数(通过set mapred.reduce.tasks=n来指定)，对输出的数据再执行归并排序，即可得到全部结果。</p>
<h3 id="sort-array对数组由小到大排序取极值" tabindex="-1"><a class="header-anchor" href="#sort-array对数组由小到大排序取极值" aria-hidden="true">#</a> sort_array对数组由小到大排序取极值</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> min_val<span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token keyword">as</span> max_val 
<span class="token keyword">from</span><span class="token punctuation">(</span>
     <span class="token keyword">select</span> sort_array<span class="token punctuation">(</span>array<span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> arr 
     <span class="token keyword">from</span> test2
<span class="token punctuation">)</span>a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="split分割字符串" tabindex="-1"><a class="header-anchor" href="#split分割字符串" aria-hidden="true">#</a> split分割字符串</h3>
<p><strong>语法</strong>: split(string str, string pat)
<strong>返回值</strong>: array
<strong>说明</strong>: 按照pat字符串分割str，会返回分割后的字符串数组</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> split<span class="token punctuation">(</span><span class="token string">'abtcdtef'</span><span class="token punctuation">,</span><span class="token string">'t'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> iteblog<span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">"ab"</span><span class="token punctuation">,</span><span class="token string">"cd"</span><span class="token punctuation">,</span><span class="token string">"ef"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="substr-substring字符串截取" tabindex="-1"><a class="header-anchor" href="#substr-substring字符串截取" aria-hidden="true">#</a> substr,substring字符串截取</h3>
<p>语法: substr(string A, int start, int len),substring(string A, int start, int len)</p>
<p>返回值: string</p>
<p>说明：返回字符串A从start位置开始，长度为len的字符串</p>
<p>举例：</p>
<p>hive&gt; select substr(‘abcde’,3,2) from dual;</p>
<p>cd</p>
<p>hive&gt; select substring(‘abcde’,3,2) from dual;</p>
<p>cd</p>
<p>hive&gt;select substring(‘abcde’,-2,2) from dual;</p>
<p>de</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>partition_date <span class="token operator">>=</span> regexp_replace<span class="token punctuation">(</span>date_sub<span class="token punctuation">(</span>concat<span class="token punctuation">(</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span><span class="token string">'${hivevar:partition_date}'</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'-'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="t" tabindex="-1"><a class="header-anchor" href="#t" aria-hidden="true">#</a> T</h2>
<h3 id="trim去掉字符串两端空格" tabindex="-1"><a class="header-anchor" href="#trim去掉字符串两端空格" aria-hidden="true">#</a> trim去掉字符串两端空格</h3>
<p>语法：trim(string A)</p>
<p>去掉字符串A两端的空格</p>
<h2 id="u" tabindex="-1"><a class="header-anchor" href="#u" aria-hidden="true">#</a> U</h2>
<h3 id="unix-timestamp获取时间戳" tabindex="-1"><a class="header-anchor" href="#unix-timestamp获取时间戳" aria-hidden="true">#</a> UNIX_TIMESTAMP获取时间戳</h3>
<p>MySQL中的UNIX_TIMESTAMP函数有两种类型供调用</p>
<p><strong>1  无参数调用：UNIX_TIMESTAMP()</strong></p>
<p>返回值：自'1970-01-01 00:00:00'的到当前时间的秒数差</p>
<p>例子：SELECT UNIX_TIMESTAMP()  =&gt; 1339123415</p>
<p><strong>2  有参数调用：UNIX_TIMESTAMP(date)</strong></p>
<p>其中date可以是一个DATE字符串，一个DATETIME字符串，一个TIMESTAMP或者一个当地时间的YYMMDD或YYYMMDD格式的数字</p>
<p>返回值：自'1970-01-01 00:00:00'与指定时间的秒数差</p>
<p>举例说明：</p>
<p><strong>DATE字符串格式：（日期类型）</strong></p>
<p>SELECT UNIX_TIMESTAMP(‘2012-06-08’)       =&gt; 1339084800</p>
<p>SELECT UNIX_TIMESTAMP(CURRENT_DATE())  =&gt;1339084800</p>
<p>注：CURRENT_DATE ()的返回值是一个DATE字符串格式</p>
<p>以下几种格式返回的结果相同：</p>
<p>SELECT UNIX_TIMESTAMP('20120608');</p>
<p>SELECT UNIX_TIMESTAMP('2012-6-8');</p>
<p>SELECT UNIX_TIMESTAMP('2012-06-08');</p>
<p>结果都是：1339084800</p>
<p><strong>DATETIME字符串格式:（日期和时间的组合类型）</strong></p>
<p>SELECT UNIX_TIMESTAMP(‘2012-06-08 10:48:55’)  =&gt; 1339123415</p>
<p>SELECT UNIX_TIMESTAMP(NOW())  =&gt; 1339123415</p>
<p>注：NOW()的返回值是一个DATETIME字符串格式</p>
<h2 id="w" tabindex="-1"><a class="header-anchor" href="#w" aria-hidden="true">#</a> W</h2>
<h3 id="where条件过滤" tabindex="-1"><a class="header-anchor" href="#where条件过滤" aria-hidden="true">#</a> where条件过滤</h3>
<p>where条件相信大家已经很熟悉了。</p>
<p>但是，对于两个表的where语句，当where的条件数量不足时，会发生什么情况么？可能心里并不是很清楚，那么下面就来验证一下：</p>
<p>创建表1:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_1_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_1_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_1_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_1_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>创建表2:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> table_2_luwei<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> table_2_luwei<span class="token punctuation">(</span>
    to_id string<span class="token punctuation">,</span>
    from_id string
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">table</span> table_2_luwei <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span><span class="token string">"L"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span><span class="token string">"N"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span><span class="token string">"M"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_2_luwei<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>to_id</th>
<th>from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>N</td>
</tr>
<tr>
<td>3</td>
<td>C</td>
<td>M</td>
</tr>
</tbody>
</table>
<p>然后基于上面的两个表，进行where条件选择：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> 
    table_1_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t1_to_id
    <span class="token punctuation">,</span>table_1_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t1_from_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>to_id <span class="token keyword">as</span> t2_to_id
    <span class="token punctuation">,</span>table_2_luwei<span class="token punctuation">.</span>from_id <span class="token keyword">as</span> t2_from_id
<span class="token keyword">from</span>
    table_1_luwei
    <span class="token punctuation">,</span>table_2_luwei
<span class="token keyword">where</span> table_1_luwei<span class="token punctuation">.</span>from_id <span class="token operator">=</span> table_2_luwei<span class="token punctuation">.</span>from_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p>
<table>
<thead>
<tr>
<th>行号</th>
<th>t1_to_id</th>
<th>t1_from_id</th>
<th>t2_to_id</th>
<th>t2_from_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>A</td>
<td>L</td>
<td>A</td>
<td>L</td>
</tr>
<tr>
<td>2</td>
<td>B</td>
<td>M</td>
<td>C</td>
<td>M</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>M</td>
<td>C</td>
<td>M</td>
</tr>
<tr>
<td>4</td>
<td>A</td>
<td>N</td>
<td>B</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>是不是和你想的一样呢？</p>
<p>这和join是一样的结果</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.iteblog.com/archives/2258.html" target="_blank" rel="noopener noreferrer">Hive常用函数大全一览<ExternalLinkIcon/></a></li>
</ul>
<p>“常用内置函数”参考该资料</p>
</div></template>


