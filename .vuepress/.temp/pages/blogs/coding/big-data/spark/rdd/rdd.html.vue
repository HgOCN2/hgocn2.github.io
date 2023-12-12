<template><div><h1 id="rdd编程" tabindex="-1"><a class="header-anchor" href="#rdd编程" aria-hidden="true">#</a> RDD编程</h1>
<ul>
<li><RouterLink to="/blogs/coding/big-data/spark/spark.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="rdd基本转换操作" tabindex="-1"><a class="header-anchor" href="#rdd基本转换操作" aria-hidden="true">#</a> RDD基本转换操作</h1>
<h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2>
<h3 id="parallelize" tabindex="-1"><a class="header-anchor" href="#parallelize" aria-hidden="true">#</a> parallelize</h3>
<p>调用SparkContext 的 parallelize()，将一个存在的集合，变成一个RDD，这种方式试用于学习spark和做一些spark的测试</p>
<blockquote>
<p>def parallelize[T](seq: Seq[T], numSlices: Int = defaultParallelism)(implicit arg0: ClassTag[T]): RDD[T]</p>
<ul>
<li>第一个参数一是一个 Seq集合</li>
<li>第二个参数是分区数</li>
<li>返回的是RDD[T]</li>
</ul>
</blockquote>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token string">"shenzhen"</span><span class="token punctuation">,</span> <span class="token string">"is a beautiful city"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
res1<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> ParallelCollectionRDD<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> at parallelize at <span class="token generics"><span class="token punctuation">&lt;</span>console<span class="token punctuation">></span></span><span class="token operator">:</span><span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="makerdd" tabindex="-1"><a class="header-anchor" href="#makerdd" aria-hidden="true">#</a> makeRDD</h3>
<p>只有scala版本的才有makeRDD</p>
<blockquote>
<p>def makeRDD[T](seq : scala.Seq[T], numSlices : scala.Int = { /* compiled code */ })</p>
</blockquote>
<p>跟parallelize类似</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>sc<span class="token punctuation">.</span>makeRDD<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token string">"shenzhen"</span><span class="token punctuation">,</span> <span class="token string">"is a beautiful city"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="textfile" tabindex="-1"><a class="header-anchor" href="#textfile" aria-hidden="true">#</a> textFile</h3>
<p>调用SparkContext.textFile()方法，从外部存储中读取数据来创建 RDD
例如在我本地F:\dataexample\wordcount\input下有个sample.txt文件，文件随便写了点内容，我需要将里面的内容读取出来创建RDD</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">var</span> lines <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">"F:\\dataexample\\wordcount\\input"</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注: textFile支持分区，支持模式匹配，例如把F:\dataexample\wordcount\目录下inp开头的给转换成RDD</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">var</span> lines <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">"F:\\dataexample\\wordcount\\inp*"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个路径可以使用逗号分隔，例如</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">var</span> lines <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">"dir1,dir2"</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分区" tabindex="-1"><a class="header-anchor" href="#分区" aria-hidden="true">#</a> 分区</h2>
<h3 id="coalesce" tabindex="-1"><a class="header-anchor" href="#coalesce" aria-hidden="true">#</a> coalesce</h3>
<p>def coalesce(numPartitions: Int, shuffle: Boolean = false)(implicit ord: Ordering[T] = null): RDD[T]</p>
<p>该函数用于将RDD进行重分区，使用HashPartitioner。</p>
<p>第一个参数为重分区的数目，第二个为是否进行shuffle，默认为false;</p>
<p>以下面的例子来看：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">var</span> data <span class="token operator">=</span> sc<span class="token punctuation">.</span>textFile<span class="token punctuation">(</span><span class="token string">"/tmp/lxw1234/1.txt"</span><span class="token punctuation">)</span>
data<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">]</span> at textFile at <span class="token operator">:</span><span class="token number">21</span>
 
scala<span class="token operator">></span> data<span class="token punctuation">.</span>collect
res37<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span>hello world<span class="token punctuation">,</span> hello spark<span class="token punctuation">,</span> hello hive<span class="token punctuation">,</span> hi spark<span class="token punctuation">)</span>
 
scala<span class="token operator">></span> data<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res38<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment">//RDD data默认有两个分区</span>
 
scala<span class="token operator">></span> <span class="token keyword">var</span> rdd1 <span class="token operator">=</span> data<span class="token punctuation">.</span>coalesce<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
rdd1<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> CoalescedRDD<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> at coalesce at <span class="token operator">:</span><span class="token number">23</span>
 
scala<span class="token operator">></span> rdd1<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res1<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">//rdd1的分区数为1</span>
 
 
scala<span class="token operator">></span> <span class="token keyword">var</span> rdd1 <span class="token operator">=</span> data<span class="token punctuation">.</span>coalesce<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
rdd1<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> CoalescedRDD<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> at coalesce at <span class="token operator">:</span><span class="token number">23</span>
 
scala<span class="token operator">></span> rdd1<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res2<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">2</span>   <span class="token comment">//如果重分区的数目大于原来的分区数，那么必须指定shuffle参数为true，//否则，分区数不便</span>
 
scala<span class="token operator">></span> <span class="token keyword">var</span> rdd1 <span class="token operator">=</span> data<span class="token punctuation">.</span>coalesce<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
rdd1<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> at coalesce at <span class="token operator">:</span><span class="token number">23</span>
 
scala<span class="token operator">></span> rdd1<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res3<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repartition" tabindex="-1"><a class="header-anchor" href="#repartition" aria-hidden="true">#</a> repartition</h3>
<p>def repartition(numPartitions: Int)(implicit ord: Ordering[T] = null): RDD[T]</p>
<p>该函数其实就是coalesce函数第二个参数为true的实现</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">var</span> rdd2 <span class="token operator">=</span> data<span class="token punctuation">.</span>repartition<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
rdd2<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> at repartition at <span class="token operator">:</span><span class="token number">23</span>
 
scala<span class="token operator">></span> rdd2<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res4<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">1</span>
 
scala<span class="token operator">></span> <span class="token keyword">var</span> rdd2 <span class="token operator">=</span> data<span class="token punctuation">.</span>repartition<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
rdd2<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> at repartition at <span class="token operator">:</span><span class="token number">23</span>
 
scala<span class="token operator">></span> rdd2<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res5<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map和mappartitions" tabindex="-1"><a class="header-anchor" href="#map和mappartitions" aria-hidden="true">#</a> map和mapPartitions</h3>
<p>Spark中的map函数是将每个rdd都进行自定义函数处理
mapPartitions则是将多个rdd进行分区，对每个分区内部的rdd进行自定义函数的处理</p>
<p>mapPartitions常用于<strong>需要多次加载外部文件的情况下</strong>，若此时仍然使用map函数  那么对于每条记录都需要进行文件读取加载，比较费时费性能</p>
<p>一段pyspark的代码很清楚地将两者的本质不同展现了出来：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql <span class="token keyword">import</span> SparkSession
<span class="token keyword">from</span> pyspark <span class="token keyword">import</span> SparkConf<span class="token punctuation">,</span>SparkContext

<span class="token keyword">def</span> <span class="token function">map_func</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"===="</span><span class="token punctuation">)</span>
    re <span class="token operator">=</span> row<span class="token operator">*</span><span class="token number">2</span>
    <span class="token keyword">return</span> re

<span class="token keyword">def</span> <span class="token function">mapPartition_func</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"===="</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> part<span class="token punctuation">:</span>
        re <span class="token operator">=</span> row<span class="token operator">*</span><span class="token number">2</span>
        <span class="token keyword">yield</span> re
    <span class="token keyword">return</span> re

conf <span class="token operator">=</span> SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setAppName<span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span>
sc <span class="token operator">=</span> SparkContext<span class="token punctuation">(</span>conf<span class="token operator">=</span>conf<span class="token punctuation">)</span>

a <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
re <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">(</span>map_func<span class="token punctuation">)</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> re<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span>

re <span class="token operator">=</span> a<span class="token punctuation">.</span>mapPartitions<span class="token punctuation">(</span>mapPartition_func<span class="token punctuation">)</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> re<span class="token punctuation">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2>
<h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h3>
<p><strong>reduce</strong>将<strong>RDD</strong>中元素两两传递给输入函数? 同时产生一个新的值，新产生的值与RDD中下一个元素再被传递给输入函数直到最后只有一个值为止。</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/rdd-reduce.gif" alt="rdd-reduce"></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token comment">// reduce numbers 1 to 10 by adding them up</span>
<span class="token keyword">val</span> x <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> y <span class="token operator">=</span> x<span class="token punctuation">.</span>reduce<span class="token punctuation">(</span><span class="token punctuation">(</span>accum<span class="token punctuation">,</span>n<span class="token punctuation">)</span> <span class="token keyword">=></span> <span class="token punctuation">(</span>accum <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">// y: Int = 55</span>
 
<span class="token comment">// shorter syntax</span>
<span class="token keyword">val</span> y <span class="token operator">=</span> x<span class="token punctuation">.</span>reduce<span class="token punctuation">(</span>_ <span class="token operator">+</span> _<span class="token punctuation">)</span> 
<span class="token comment">// y: Int = 55</span>
 
<span class="token comment">// same thing for multiplication</span>
<span class="token keyword">val</span> y <span class="token operator">=</span> x<span class="token punctuation">.</span>reduce<span class="token punctuation">(</span>_ <span class="token operator">*</span> _<span class="token punctuation">)</span> 
<span class="token comment">// y: Int = 3628800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="randomsplit" tabindex="-1"><a class="header-anchor" href="#randomsplit" aria-hidden="true">#</a> randomSplit</h3>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> randomSplit<span class="token punctuation">(</span>weights<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span><span class="token punctuation">,</span> seed<span class="token operator">:</span> <span class="token builtin">Long</span> <span class="token operator">=</span> Utils<span class="token punctuation">.</span>random<span class="token punctuation">.</span>nextLong<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token punctuation">[</span>RDD<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该函数根据weights权重，将一个RDD切分成多个RDD。</p>
<p>该权重参数为一个Double数组</p>
<p>第二个参数为random的种子，基本可忽略。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">var</span> rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>makeRDD<span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
rdd<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> ParallelCollectionRDD<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span> at makeRDD at <span class="token operator">:</span><span class="token number">21</span>
 
scala<span class="token operator">></span> rdd<span class="token punctuation">.</span>collect
res6<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>  
 
scala<span class="token operator">></span> <span class="token keyword">var</span> splitRDD <span class="token operator">=</span> rdd<span class="token punctuation">.</span>randomSplit<span class="token punctuation">(</span>Array<span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token number">3.0</span><span class="token punctuation">,</span><span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
splitRDD<span class="token operator">:</span> Array<span class="token punctuation">[</span>org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span>
MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span> at randomSplit at <span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span> 
MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> at randomSplit at <span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span> 
MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span> at randomSplit at <span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span> 
MapPartitionsRDD<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span> at randomSplit at <span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">)</span>
 
<span class="token comment">//这里注意：randomSplit的结果是一个RDD数组</span>
scala<span class="token operator">></span> splitRDD<span class="token punctuation">.</span>size
res8<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token comment">//由于randomSplit的第一个参数weights中传入的值有4个，因此，就会切分成4个RDD,</span>
<span class="token comment">//把原来的rdd按照权重1.0,2.0,3.0,4.0，随机划分到这4个RDD中，权重高的RDD，划分到//的几率就大一些。</span>
<span class="token comment">//注意，权重的总和加起来为1，否则会不正常</span>
 
scala<span class="token operator">></span> splitRDD<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect
res10<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> splitRDD<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect
res11<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>                                                    
 
scala<span class="token operator">></span> splitRDD<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect
res12<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> splitRDD<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect
res13<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="glom" tabindex="-1"><a class="header-anchor" href="#glom" aria-hidden="true">#</a> glom</h3>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RDD<span class="token punctuation">[</span>Array<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该函数是将RDD中每一个分区中类型为T的元素转换成Array[T]，这样每一个分区就只有一个数组元素。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">var</span> rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>makeRDD<span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
rdd<span class="token operator">:</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>rdd<span class="token punctuation">.</span>RDD<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> ParallelCollectionRDD<span class="token punctuation">[</span><span class="token number">38</span><span class="token punctuation">]</span> at makeRDD at <span class="token operator">:</span><span class="token number">21</span>
scala<span class="token operator">></span> rdd<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>size
res33<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">3</span>  <span class="token comment">//该RDD有3个分区</span>
scala<span class="token operator">></span> rdd<span class="token punctuation">.</span>glom<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect
res35<span class="token operator">:</span> Array<span class="token punctuation">[</span>Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span>Array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Array<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Array<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//glom将每个分区中的元素放到一个数组中，这样，结果就变成了3个数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aggregate" tabindex="-1"><a class="header-anchor" href="#aggregate" aria-hidden="true">#</a> aggregate</h3>
<p>针对Spark的RDD，API中有一个aggregate函数，本人理解起来费了很大劲，明白之后，mark一下，供以后参考。</p>
<p>首先，Spark文档中<a href="http://spark.apache.org/docs/latest/api/scala/index.html#org.apache.spark.rdd.RDD" target="_blank" rel="noopener noreferrer">aggregate<ExternalLinkIcon/></a>函数定义如下</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> aggregate<span class="token punctuation">[</span>U<span class="token punctuation">]</span><span class="token punctuation">(</span>zeroValue<span class="token operator">:</span> U<span class="token punctuation">)</span><span class="token punctuation">(</span>seqOp<span class="token operator">:</span> <span class="token punctuation">(</span>U<span class="token punctuation">,</span> T<span class="token punctuation">)</span> ⇒ U<span class="token punctuation">,</span> combOp<span class="token operator">:</span> <span class="token punctuation">(</span>U<span class="token punctuation">,</span> U<span class="token punctuation">)</span> ⇒ U<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">implicit</span> arg0<span class="token operator">:</span> ClassTag<span class="token punctuation">[</span>U<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> U
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Aggregate the elements of each partition, and then the results for all the partitions, using given combine functions and a neutral &quot;zero value&quot;. This function can return a different result type, U, than the type of this RDD, T. Thus, we need one operation for merging a T into an U and one operation for merging two U's, as in scala.TraversableOnce. Both of these functions are allowed to modify and return their first argument instead of creating a new U to avoid memory allocation.</p>
<p>seqOp操作会聚合各分区中的元素，然后combOp操作把所有分区的聚合结果再次聚合，两个操作的初始值都是zeroValue.   seqOp的操作是遍历分区中的所有元素(T)，第一个T跟zeroValue做操作，结果再作为与第二个T做操作的zeroValue，直到遍历完整个分区。combOp操作是把各分区聚合的结果，再聚合。aggregate函数返回一个跟RDD不同类型的值。因此，需要一个操作seqOp来把分区中的元素T合并成一个U，另外一个操作combOp把所有U聚合。</p>
</blockquote>
<ul>
<li>
<p><strong>zeroValue</strong>是给定的初始值，该值将会在seqOp和<strong>combOp两个函数中都</strong>使用。</p>
</li>
<li>
<p><strong>seqOp</strong>在Executor端对每个分区进行操作，会用到初始值zeroValue。</p>
</li>
<li>
<p><strong>combOp</strong>在driver端执行，<strong>也会用到初始值</strong>。</p>
</li>
</ul>
<p>举个例子。假如List(1,2,3,4,5,6,7,8,9,10)，对List求平均数，使用aggregate可以这样操作。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> rdd <span class="token operator">=</span> sc<span class="token punctuation">.</span>makeRDD<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// rdd: List[Int] = List(1, 2, 3, 4, 5, 6, 7, 8, 9)</span>
<span class="token comment">//rdd.aggregate((0,0))( // for List not rdd</span>
rdd<span class="token punctuation">.</span>par<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>
<span class="token punctuation">(</span>acc<span class="token punctuation">,</span>number<span class="token punctuation">)</span> <span class="token keyword">=></span> <span class="token punctuation">(</span>acc<span class="token punctuation">.</span>_1 <span class="token operator">+</span> number<span class="token punctuation">,</span> acc<span class="token punctuation">.</span>_2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span>par1<span class="token punctuation">,</span>par2<span class="token punctuation">)</span> <span class="token keyword">=></span> <span class="token punctuation">(</span>par1<span class="token punctuation">.</span>_1 <span class="token operator">+</span> par2<span class="token punctuation">.</span>_1<span class="token punctuation">,</span> par1<span class="token punctuation">.</span>_2 <span class="token operator">+</span> par2<span class="token punctuation">.</span>_2<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// res0: (Int, Int) = (45,9)</span>
res0<span class="token punctuation">.</span>_1 <span class="token operator">/</span> res0<span class="token punctuation">.</span>_2
<span class="token comment">// res1: Int = 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程大概这样：</p>
<p>首先，初始值是<code v-pre>(0,0)</code>，这个值在后面2步会用到。</p>
<p>然后，<code v-pre>(acc,number) =&gt; (acc._1 + number, acc._2 + 1)</code>，<code v-pre>number</code>即是函数定义中的<code v-pre>T</code>，这里即是List中的元素。所以<code v-pre>acc._1 + number, acc._2 + 1</code>的过程如下。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.  0+1,  0+1
2.  1+2,  1+1
3.  3+3,  2+1
4.  6+4,  3+1
5.  10+5,  4+1
6.  15+6,  5+1
7.  21+7,  6+1
8.  28+8,  7+1
9.  36+9,  8+1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果即是(45,9)。</p>
<p>这里演示的是单线程计算过程，实际Spark执行中是分布式计算，可能会把List分成多个分区，假如3个，p1(1,2,3,4)，p2(5,6,7,8)，p3(9)，经过计算各分区的的结果（10,4），（26,4），（9,1），这样，执行(par1,par2) =&gt; (par1._1 + par2._1, par1._2 + par2._2)就是（10+26+9,4+4+1）即（45,9）.再求平均值就简单了。</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/aggregate.jpg" alt="aggregate"></p>
<p>但需要注意：aggregate是在每个分区计算完成后，把所有的数据拉倒driver端，进行统一的遍历合并，这样如果数据量很大，在driver端可能会爆内存：OOM，这时候就需要使用treeAggregate了。</p>
<p>aggregate执行结构图:</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/aggregate2.jpeg" alt="aggregate2"></p>
<p><strong>这种聚合操作是有缺陷的，就是所有SeqOp操作对分区的执行结果都只能全部返回给Driver端，然后在对返回的结果和初始值执行CombOp操作，这样数据量大的时候很容易导致Driver端内存溢出，所以，就出现了优化函数treeAggregate。</strong></p>
<h3 id="treeaggregate" tabindex="-1"><a class="header-anchor" href="#treeaggregate" aria-hidden="true">#</a> treeAggregate</h3>
<p>treeAggregate在aggregate的基础上做了一些优化，因为aggregate是在每个分区计算完成后，把所有的数据拉倒driver端，进行统一的遍历合并，这样如果数据量很大，在driver端可能会OOM。</p>
<p>因此treeAggregate在中间多加了一层合并。</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/treeAggregate.jpg" alt="treeAggregate"></p>
<p>源码：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> treeAggregate<span class="token punctuation">[</span>U<span class="token operator">:</span> ClassTag<span class="token punctuation">]</span><span class="token punctuation">(</span>zeroValue<span class="token operator">:</span> U<span class="token punctuation">)</span><span class="token punctuation">(</span>
 seqOp<span class="token operator">:</span> <span class="token punctuation">(</span>U<span class="token punctuation">,</span> T<span class="token punctuation">)</span> <span class="token keyword">=></span> U<span class="token punctuation">,</span>
 combOp<span class="token operator">:</span> <span class="token punctuation">(</span>U<span class="token punctuation">,</span> U<span class="token punctuation">)</span> <span class="token keyword">=></span> U<span class="token punctuation">,</span>
 depth<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span> U <span class="token operator">=</span> withScope <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数定义：</strong></p>
<ul>
<li>
<p>zeroValue是给定的初始值，该值只在seqOp使用。</p>
</li>
<li>
<p>seqOp在Executor端对每个分区进行操作，会用到初始值zeroValue。</p>
</li>
<li>
<p>combOp在Executor端和driver端都会执行，<strong>不会用到初始值</strong>。</p>
</li>
</ul>
<p>源码片段分析：</p>
<p>（1）在Executor端执行的第一层任务，主要操作是对源数据和初始值zeroValue执行seqOp操作。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> aggregatePartition <span class="token operator">=</span>
  <span class="token punctuation">(</span>it<span class="token operator">:</span> Iterator<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">=></span> it<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span>zeroValue<span class="token punctuation">)</span><span class="token punctuation">(</span>cleanSeqOp<span class="token punctuation">,</span> cleanCombOp<span class="token punctuation">)</span>
<span class="token keyword">var</span> partiallyAggregated <span class="token operator">=</span> mapPartitions<span class="token punctuation">(</span>it <span class="token keyword">=></span> Iterator<span class="token punctuation">(</span>aggregatePartition<span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）在执行完成第一层任务之后，执行combOp操作，主要是逐渐降低分区数，来逐层进行combOp操作，该操作是在Executor端执行，并且该操作并未用到初始值。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">var</span> numPartitions <span class="token operator">=</span> partiallyAggregated<span class="token punctuation">.</span>partitions<span class="token punctuation">.</span>length
<span class="token keyword">val</span> scale <span class="token operator">=</span> math<span class="token punctuation">.</span>max<span class="token punctuation">(</span>math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span>math<span class="token punctuation">.</span>pow<span class="token punctuation">(</span>numPartitions<span class="token punctuation">,</span> <span class="token number">1.0</span> <span class="token operator">/</span> depth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toInt<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>numPartitions <span class="token operator">></span> scale <span class="token operator">+</span> math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span>numPartitions<span class="token punctuation">.</span>toDouble <span class="token operator">/</span> scale<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  numPartitions <span class="token operator">/=</span> scale
 <span class="token keyword">val</span> curNumPartitions <span class="token operator">=</span> numPartitions
  partiallyAggregated <span class="token operator">=</span> partiallyAggregated<span class="token punctuation">.</span>mapPartitionsWithIndex <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>i<span class="token punctuation">,</span> iter<span class="token punctuation">)</span> <span class="token keyword">=></span> iter<span class="token punctuation">.</span>map<span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">%</span> curNumPartitions<span class="token punctuation">,</span> _<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span>reduceByKey<span class="token punctuation">(</span><span class="token keyword">new</span> HashPartitioner<span class="token punctuation">(</span>curNumPartitions<span class="token punctuation">)</span><span class="token punctuation">,</span> cleanCombOp<span class="token punctuation">)</span><span class="token punctuation">.</span>values
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）在Executor端初步聚合后，对结果数据使用combOp操作再次执行reduce操作。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>partiallyAggregated<span class="token punctuation">.</span>reduce<span class="token punctuation">(</span>cleanCombOp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由上面我们可以总结，aggregate执行结构图，如下：</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/treeAggregate2.jpeg" alt="treeAggregate2"></p>
<p><strong>aggregate VS treeAggregate</strong></p>
<p><code v-pre>treeAggregate</code>其实基本上和<code v-pre>aggregate</code>是一样的，但是在<code v-pre>aggregate</code>中，需要把各partition的结果汇总发到driver上使用<code v-pre>combOp</code>进行最后一步汇总合并，这里有时会成为瓶颈（带宽、依次遍历各partition结果并合并），而<code v-pre>treeAggregate</code>就是用来优化这一环节的，按照树结构来reduce，提升性能。<code v-pre>treeAggregate</code>提供了一个新的参数<code v-pre>depth</code>，就是用来指定这个reduce树的深度的，默认为2。</p>
<p>了解了<code v-pre>aggregate</code>和<code v-pre>treeAggregate</code>后，我们就知道了，在实际使用中，尽量还是使用<code v-pre>treeAggregate</code>吧。</p>
<p>1, aggregate和treeAggregate的作用一样，最终的结果区别是treeAggregate执行combOp并没有用到初始值zeroValue。</p>
<p>2，treeAggregate比aggregate多执行了n次任务，n可计算。</p>
<p>3，treeAggregate降低了aggregate在driver端内存溢出的风险。</p>
<p>可以举个例子：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> seq<span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">Int</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Int</span><span class="token operator">=</span><span class="token punctuation">{</span>
 println<span class="token punctuation">(</span><span class="token string">"seq:"</span><span class="token operator">+</span>a<span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>b<span class="token punctuation">)</span>
  a<span class="token operator">+</span>b
<span class="token punctuation">}</span>

<span class="token keyword">def</span> comb<span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">Int</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Int</span><span class="token operator">=</span><span class="token punctuation">{</span>
 println<span class="token punctuation">(</span><span class="token string">"comb:"</span><span class="token operator">+</span>a<span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>b<span class="token punctuation">)</span>
  a<span class="token operator">+</span>b
<span class="token punctuation">}</span>

<span class="token keyword">val</span> res <span class="token operator">=</span> sc<span class="token punctuation">.</span>parallelize<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
res<span class="token punctuation">.</span>aggregate<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>seq<span class="token punctuation">,</span>comb<span class="token punctuation">)</span>
res<span class="token punctuation">.</span>treeAggregate<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>seq<span class="token punctuation">,</span>comb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果是：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token comment">//res.aggregate(1)(seq,comb)</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">1</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span>
seq<span class="token operator">:</span><span class="token number">4</span><span class="token operator">:</span><span class="token number">4</span>
comb<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">8</span>
comb<span class="token operator">:</span><span class="token number">9</span><span class="token operator">:</span><span class="token number">2</span>
comb<span class="token operator">:</span><span class="token number">11</span><span class="token operator">:</span><span class="token number">3</span>
res0<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">14</span>                                                                  

<span class="token comment">//res.treeAggregate(1)(seq,comb)</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">2</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span>
seq<span class="token operator">:</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">1</span>
seq<span class="token operator">:</span><span class="token number">4</span><span class="token operator">:</span><span class="token number">4</span>
comb<span class="token operator">:</span><span class="token number">2</span><span class="token operator">:</span><span class="token number">8</span>
comb<span class="token operator">:</span><span class="token number">10</span><span class="token operator">:</span><span class="token number">3</span>
res1<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spark的<a href="https://github.com/apache/spark/blob/01f09b161217193b797c8c85969d17054c958615/mllib/src/main/scala/org/apache/spark/mllib/optimization/GradientDescent.scala#L236-L248" target="_blank" rel="noopener noreferrer">GradientDescent<ExternalLinkIcon/></a>用到了该函数，自己写梯度下降时可进行参考。</p>
<h1 id="共享变量" tabindex="-1"><a class="header-anchor" href="#共享变量" aria-hidden="true">#</a> 共享变量</h1>
<p>在spark程序中，当一个传递给Spark操作(例如map和reduce)的函数在远程节点上面运行时，Spark操作实际上操作的是这个函数所用变量的一个独立副本。这些变量会被复制到每台机器上，并且这些变量在远程机器上的所有更新都不会传递回驱动程序。通常跨任务的读写变量是低效的，但是，Spark还是为两种常见的使用模式提供了两种有限的共享变量：广播变（broadcast variable）和累加器（accumulator）</p>
<h2 id="广播变量broadcast" tabindex="-1"><a class="header-anchor" href="#广播变量broadcast" aria-hidden="true">#</a> 广播变量broadcast</h2>
<p><strong>1、为什么要将变量定义成广播变量？</strong></p>
<p>如果我们要在分布式计算里面分发大对象，例如：字典，集合，黑白名单等，这个都会由Driver端进行分发，一般来讲，如果这个变量不是广播变量，那么每个task就会分发一份，这在<strong>task数目十分多的情况下Driver的带宽会成为系统的瓶颈，而且会大量消耗task服务器上的资源</strong>，如果将这个变量声明为广播变量，那么只是每个executor拥有一份，这个executor启动的task会共享这个变量，节省了通信的成本和服务器的资源。</p>
<p><strong>2、广播变量图解</strong></p>
<p>错误的，不使用广播变量</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/not-use-broadcast.png" alt="not-use-broadcast"></p>
<p>正确的，使用广播变量的情况</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/use-broadcast.png" alt="use-broadcast"></p>
<p><strong>3、如何定义一个广播变量？</strong></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">val</span> broadcast <span class="token operator">=</span> sc<span class="token punctuation">.</span>broadcast<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、如何还原一个广播变量？</strong></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> c <span class="token operator">=</span> broadcast<span class="token punctuation">.</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5、定义广播变量需要的注意点？</strong></p>
<p>变量一旦被定义为一个广播变量，那么这个变量只能读，不能修改</p>
<p><strong>6、注意事项</strong></p>
<p>1、能不能将一个RDD使用广播变量广播出去？</p>
<p>​       不能，因为RDD是不存储数据的。<strong>可以将RDD的结果广播出去。</strong></p>
<p>2、 广播变量只能在Driver端定义，<strong>不能在Executor端定义。</strong></p>
<p>3、 在Driver端可以修改广播变量的值，<strong>在Executor端无法修改广播变量的值。</strong></p>
<p>4、如果executor端用到了Driver的变量，如果<strong>不使用广播变量在Executor有多少task就有多少Driver端的变量副本。</strong></p>
<p>5、如果Executor端用到了Driver的变量，如果<strong>使用广播变量在每个Executor中只有一份Driver端的变量副本。</strong></p>
<h2 id="累加器accumulator" tabindex="-1"><a class="header-anchor" href="#累加器accumulator" aria-hidden="true">#</a> 累加器accumulator</h2>
<p><strong>为什么要将一个变量定义为一个累加器？</strong></p>
<p>在spark应用程序中，我们经常会有这样的需求，如异常监控，调试，记录符合某特性的数据的数目，这种需求都需要用到计数器，如果一个变量不被声明为一个累加器，那么它将在被改变时不会再driver端进行全局汇总，即在分布式运行时每个task运行的只是原始变量的一个副本，并不能改变原始变量的值，但是当这个变量被声明为累加器后，该变量就会有分布式计数的功能。</p>
<p><strong>2、图解累加器</strong></p>
<p>错误的图解</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/wrong-accumulator.png" alt="wrong-accumulator"></p>
<p>正确的图解</p>
<p><img src="@source/blogs/coding/big-data/spark/rdd/pic/right-accumulator.png" alt="right-accumulator"></p>
<p><strong>3、如何定义一个累加器？</strong></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a <span class="token operator">=</span> sc<span class="token punctuation">.</span>accumulator<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4、如何还原一个累加器？</strong></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5、注意事项</strong></p>
<p>1、 <strong>累加器在Driver端定义赋初始值，累加器只能在Driver端读取最后的值，在Excutor端更新。</strong></p>
<p>2、累加器不是一个调优的操作，因为如果不这样做，结果是错的</p>
<h1 id="论文" tabindex="-1"><a class="header-anchor" href="#论文" aria-hidden="true">#</a> 论文</h1>
<p>学习一下Spark的RDD，据说这篇论文一定要看</p>
<p><a href="https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf" target="_blank" rel="noopener noreferrer"><em>Resilient Distributed Datasets: A Fault-Tolerant Abstraction for
In-Memory Cluster Computing</em><ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/T1DMzks/article/details/70189509" target="_blank" rel="noopener noreferrer">spark RDD算子（一） parallelize，makeRDD，textFile<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;输入&quot;参考此文章。</p>
<ul>
<li><a href="http://lxw1234.com/archives/2015/07/341.htm" target="_blank" rel="noopener noreferrer">Spark算子：RDD基本转换操作(2)–coalesce、repartition<ExternalLinkIcon/></a></li>
<li><a href="https://www.jianshu.com/p/eabfb80a35a0" target="_blank" rel="noopener noreferrer">mapPartitions 使用<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;分区&quot;参考此文章。</p>
<ul>
<li>
<p><a href="https://backtobazics.com/big-data/spark/apache-spark-reduce-example/" target="_blank" rel="noopener noreferrer">Spark reduce Example Using Scala<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://lxw1234.com/archives/2015/07/343.htm" target="_blank" rel="noopener noreferrer">Spark算子：RDD基本转换操作(3)–randomSplit、glom<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/qingyang0320/article/details/51603243" target="_blank" rel="noopener noreferrer">理解Spark RDD中的aggregate函数<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.cnblogs.com/xing901022/p/9285898.html" target="_blank" rel="noopener noreferrer">Spark MLlib 之 aggregate和treeAggregate从原理到应用<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://cloud.tencent.com/developer/article/1033015" target="_blank" rel="noopener noreferrer">结合源码彻底讲解Aggregate vs treeAggregate<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>&quot;操作&quot;参考此文章。</p>
<ul>
<li><a href="https://www.cnblogs.com/qingyunzong/p/8890483.html" target="_blank" rel="noopener noreferrer">Spark学习之路 （四）Spark的广播变量和累加器<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;共享变量&quot;参考此文章。</p>
<p>===</p>
<p><a href="https://www.cnblogs.com/sharpxiajun/p/5506822.html" target="_blank" rel="noopener noreferrer">Spark笔记：RDD基本操作（上）<ExternalLinkIcon/></a></p>
</div></template>


