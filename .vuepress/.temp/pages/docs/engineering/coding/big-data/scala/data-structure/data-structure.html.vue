<template><div><h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1>
<ul>
<li><RouterLink to="/docs/engineering/coding/big-data/scala/scala.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="option选项" tabindex="-1"><a class="header-anchor" href="#option选项" aria-hidden="true">#</a> Option选项</h1>
<p>Scala Option(选项)类型用来表示一个值是可选的（有值或无值)。</p>
<p>Option[T] 是一个类型为 T 的可选值的容器：</p>
<ul>
<li>如果值存在， Option[T] 就是一个 Some[T] ，</li>
<li>如果不存在， Option[T] 就是对象 None 。</li>
</ul>
<p>接下来我们来看一段代码：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token comment">// 虽然 Scala 可以不定义变量的类型，不过为了清楚些，我还是</span>
<span class="token comment">// 把他显示的定义上了</span>
 
<span class="token keyword">val</span> myMap<span class="token operator">:</span> Map<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">,</span> <span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> Map<span class="token punctuation">(</span><span class="token string">"key1"</span> <span class="token operator">-></span> <span class="token string">"value"</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> value1<span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> myMap<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"key1"</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> value2<span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> myMap<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"key2"</span><span class="token punctuation">)</span>
 
println<span class="token punctuation">(</span>value1<span class="token punctuation">)</span> <span class="token comment">// Some("value1")</span>
println<span class="token punctuation">(</span>value2<span class="token punctuation">)</span> <span class="token comment">// None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，myMap是一个Key的类型是String，Value的类型是String的hash map，但不一样的是他的get()返回的是一个叫Option[String]的类别。</p>
<p>Scala使用Option[String]来告诉你：「我会想办法回传一个 String，但也可能没有String给你」。</p>
<p>myMap里并没有key2这笔数据，get()方法返回None。</p>
<p>Option有两个子类别，一个是Some，一个是None，当他回传Some的时候，代表这个函式成功地给了你一个String，而你可以透过get()这个函数拿到那个String，如果他返回的是None，则代表没有字符串可以给你。</p>
<h2 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h2>
<p>你也可以通过模式匹配来输出匹配值。实例如下：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> sites <span class="token operator">=</span> Map<span class="token punctuation">(</span><span class="token string">"runoob"</span> <span class="token operator">-></span> <span class="token string">"www.runoob.com"</span><span class="token punctuation">,</span> <span class="token string">"google"</span> <span class="token operator">-></span> <span class="token string">"www.google.com"</span><span class="token punctuation">)</span>

println<span class="token punctuation">(</span><span class="token string">"show(sites.get( \"runoob\")) : "</span> <span class="token operator">+</span> show<span class="token punctuation">(</span>sites<span class="token punctuation">.</span>get<span class="token punctuation">(</span> <span class="token string">"runoob"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
println<span class="token punctuation">(</span><span class="token string">"show(sites.get( \"baidu\")) : "</span> <span class="token operator">+</span>
show<span class="token punctuation">(</span>sites<span class="token punctuation">.</span>get<span class="token punctuation">(</span> <span class="token string">"baidu"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">def</span> show<span class="token punctuation">(</span>x<span class="token operator">:</span> Option<span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token keyword">match</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Some<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">=></span> s
    <span class="token keyword">case</span> None <span class="token keyword">=></span> <span class="token string">"?"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出结果为：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>show<span class="token punctuation">(</span>sites<span class="token punctuation">.</span>get<span class="token punctuation">(</span> <span class="token string">"runoob"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> www<span class="token punctuation">.</span>runoob<span class="token punctuation">.</span>com
show<span class="token punctuation">(</span>sites<span class="token punctuation">.</span>get<span class="token punctuation">(</span> <span class="token string">"baidu"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token operator">?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="option常用方法" tabindex="-1"><a class="header-anchor" href="#option常用方法" aria-hidden="true">#</a> Option常用方法</h2>
<h3 id="getorelse" tabindex="-1"><a class="header-anchor" href="#getorelse" aria-hidden="true">#</a> getOrElse()</h3>
<p>你可以使用getOrElse()方法来获取元组中存在的元素或者使用其默认的值，实例如下：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a<span class="token operator">:</span>Option<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Some<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> b<span class="token operator">:</span>Option<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> None 

println<span class="token punctuation">(</span><span class="token string">"a.getOrElse(0): "</span> <span class="token operator">+</span> a<span class="token punctuation">.</span>getOrElse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
println<span class="token punctuation">(</span><span class="token string">"b.getOrElse(10): "</span> <span class="token operator">+</span> b<span class="token punctuation">.</span>getOrElse<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出结果为：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>a<span class="token punctuation">.</span>getOrElse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token number">5</span>
b<span class="token punctuation">.</span>getOrElse<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isempty" tabindex="-1"><a class="header-anchor" href="#isempty" aria-hidden="true">#</a> isEmpty()</h3>
<p>你可以使用isEmpty()方法来检测元组中的元素是否为None，实例如下：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a<span class="token operator">:</span>Option<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Some<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> b<span class="token operator">:</span>Option<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> None 

println<span class="token punctuation">(</span><span class="token string">"a.isEmpty: "</span> <span class="token operator">+</span> a<span class="token punctuation">.</span>isEmpty <span class="token punctuation">)</span>
println<span class="token punctuation">(</span><span class="token string">"b.isEmpty: "</span> <span class="token operator">+</span> b<span class="token punctuation">.</span>isEmpty <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码，输出结果为：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>a<span class="token punctuation">.</span>isEmpty<span class="token operator">:</span> <span class="token boolean">false</span>
b<span class="token punctuation">.</span>isEmpty<span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach()</h3>
<p>如果选项包含有值，则将每个值传递给函数f， 否则不处理。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">def</span> foreach<span class="token punctuation">[</span>U<span class="token punctuation">]</span><span class="token punctuation">(</span>f<span class="token operator">:</span> <span class="token punctuation">(</span>A<span class="token punctuation">)</span> <span class="token keyword">=></span> U<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Unit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，该函数会自动检测是否为空，无需再在前面加isEmpty()判断。为空就不会继续执行foreach了。</p>
<h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1>
<h2 id="字符串插值" tabindex="-1"><a class="header-anchor" href="#字符串插值" aria-hidden="true">#</a> 字符串插值</h2>
<p>自2.10.0版本开始，Scala提供了一种新的机制来根据数据生成字符串：字符串插值。字符串插值允许使用者将变量引用直接插入处理过的字面字符中。如下例：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> name<span class="token operator">=</span><span class="token string">"James"</span>
println<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token id function">s</span><span class="token string">"Hello,</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token comment">//Hello,James</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上例中， <code v-pre>s”Hello,$name” </code>是待处理字符串字面，编译器会对它做额外的工作。待处理字符串字面通过“号前的字符来标示（例如：上例中是s）。字符串插值的实现细节在 <a href="https://docs.scala-lang.org/sips/pending/string-interpolation.html" target="_blank" rel="noopener noreferrer">SIP-11<ExternalLinkIcon/></a> 中有全面介绍。</p>
<p>Scala 提供了三种创新的字符串插值方法：s,f 和 raw.</p>
<p><strong>s字符串插值器</strong></p>
<p>在任何字符串前加上s，就可以直接在串中使用变量了。你已经见过这个例子：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> name<span class="token operator">=</span><span class="token string">"James"</span>
println<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token id function">s</span><span class="token string">"Hello,</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token comment">//Hello,James </span>
<span class="token comment">//此例中，$name嵌套在一个将被s字符串插值器处理的字符串中。</span>
<span class="token comment">//插值器知道在这个字符串的这个地方应该插入这个name变量的值，</span>
<span class="token comment">//以使输出字符串为Hello,James。</span>
<span class="token comment">//使用s插值器，在这个字符串中可以使用任何在处理范围内的名字。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串插值器也可以处理任意的表达式。例如：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>println<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token id function">s</span><span class="token string">"1+1=</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression"><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span> 
<span class="token comment">//将会输出字符串1+1=2。任何表达式都可以嵌入到${}中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>f插值器</strong></p>
<p>在任何字符串字面前加上 f，就可以生成简单的格式化串，功能相似于其他语言中的 printf 函数。当使用 f 插值器的时候，所有的变量引用都应当后跟一个printf-style格式的字符串，如%d。看下面这个例子：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> height<span class="token operator">=</span><span class="token number">1.9d</span>
<span class="token keyword">val</span> name<span class="token operator">=</span><span class="token string">"James"</span>
println<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token id function">f</span><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">%s is </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">height</span></span><span class="token string">%2.2f meters tall"</span></span><span class="token punctuation">)</span><span class="token comment">//James is 1.90 meters tall </span>
<span class="token comment">/*f 插值器是类型安全的。如果试图向只支持int的格式化串传入一个double值，编译器则会报错。例如：

val height:Double=1.9d

scala>f"$height%4d"
&lt;console>:9: error: type mismatch;
 found : Double
 required: Int
           f"$height%4d"
              ^ f 插值器利用了java中的字符串数据格式。这种以%开头的格式在 [Formatter javadoc] 中有相关概述。如果在具体变量后没有%，则格式化程序默认使用 %s（串型）格式。*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>raw插值器</strong></p>
<p>除了对字面值中的字符不做编码外，raw 插值器与 s 插值器在功能上是相同的。如下是个被处理过的字符串：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span><span class="token string-interpolation"><span class="token id function">s</span><span class="token string">"a\nb"</span></span>
res0<span class="token operator">:</span><span class="token builtin">String</span><span class="token operator">=</span>
a
b 这里，s 插值器用回车代替了\n。而raw插值器却不会如此处理。

scala<span class="token operator">></span><span class="token string-interpolation"><span class="token id function">raw</span><span class="token string">"a\nb"</span></span>
res1<span class="token operator">:</span><span class="token builtin">String</span><span class="token operator">=</span>a\nb 当不想输入\n被转换为回车的时候，raw 插值器是非常实用的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了以上三种字符串插值器外，使用者可以自定义插值器。</p>
<h1 id="向量和矩阵" tabindex="-1"><a class="header-anchor" href="#向量和矩阵" aria-hidden="true">#</a> 向量和矩阵</h1>
<h2 id="org-apache-spark-mllib-linalg" tabindex="-1"><a class="header-anchor" href="#org-apache-spark-mllib-linalg" aria-hidden="true">#</a> org.apache.spark.mllib.linalg</h2>
<p>这个包里有</p>
<p>DenseVector, Vector, Vectors, SparseVector</p>
<p>DenseMatrix, Matrix, SparseMatrix</p>
<h3 id="org-apache-spark-mllib-linalg-matrix" tabindex="-1"><a class="header-anchor" href="#org-apache-spark-mllib-linalg-matrix" aria-hidden="true">#</a> org.apache.spark.mllib.linalg.Matrix</h3>
<p>初始化并打印矩阵：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>mllib<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span></span>_
<span class="token keyword">val</span> m1<span class="token operator">:</span> Matrix <span class="token operator">=</span> <span class="token keyword">new</span> DenseMatrix<span class="token punctuation">(</span>
    <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> Array<span class="token punctuation">(</span>
        <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> 
        <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> 
        <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">/*m1: org.apache.spark.mllib.linalg.Matrix =
1.0  0.0  2.0  1.0
0.0  3.0  1.0  1.0
2.0  1.0  0.0  0.0*/</span>

<span class="token comment">// 按列打印每一列</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>col <span class="token keyword">&lt;-</span> m1<span class="token punctuation">.</span>colIter<span class="token punctuation">)</span> <span class="token punctuation">{</span> 		 
    println<span class="token punctuation">(</span>col<span class="token punctuation">.</span>toArray<span class="token punctuation">.</span>mkString<span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/*1.0,0.0,2.0
0.0,3.0,1.0
2.0,1.0,0.0
1.0,1.0,0.0*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breeze-linalg" tabindex="-1"><a class="header-anchor" href="#breeze-linalg" aria-hidden="true">#</a> Breeze.linalg</h2>
<p>这个包里有DenseVector, SparseVector, DenseMatrix, SparseMatrix。</p>
<h3 id="breeze-linalg-densematrix" tabindex="-1"><a class="header-anchor" href="#breeze-linalg-densematrix" aria-hidden="true">#</a> breeze.linalg.DenseMatrix</h3>
<p>scala 中有一个包叫做breeze.linalg.DenseMatrix，是专门针对矩阵运算的，目前只是用到DenseMatrix这一个，暂时讲解一下他的用法</p>
<p>DenseMatrix即稠密矩阵与SparseMatrix（稀疏矩阵相对应）</p>
<p>为了写起来方便，可以这样对其重命名为：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">breeze<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span></span><span class="token punctuation">{</span>DenseMatrix <span class="token keyword">=></span> BDM<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即BDM相当于DenseMatrix。</p>
<p><strong>一、随机生成一个矩阵</strong></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a <span class="token operator">:</span>BDM<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span> <span class="token operator">=</span> BDM<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> b <span class="token operator">:</span>BDM<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span> <span class="token operator">=</span> BDM<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>a和b均是二维矩阵，数值是随机生成的。</p>
<p><strong>二、访问矩阵中的元素</strong></p>
<p>1、按行访问，这样可以获得一行的所有数据</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a1 <span class="token operator">=</span> a<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">::</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> b1 <span class="token operator">=</span> b<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">::</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>括号中第一个参数为行数，后面::代表所有的列，即这一行的所有数据</p>
<p>2、访问单个元素</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">val</span> a5 <span class="token operator">=</span> a<span class="token punctuation">.</span>data<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> b7 <span class="token operator">=</span> b<span class="token punctuation">.</span>data<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>data是他的一个方法，参数为我们要访问的第几个元素。</p>
<blockquote>
<p>注意1、索引是从0开始的，所以第5个元素的索引值为4</p>
<p>注意2、矩阵的存储是按列存储的，也就是第一列之后接着是第二列的数据，并不是按照行来存储的，这一点和MATLAB一样</p>
</blockquote>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="使用range来填充一个集合" tabindex="-1"><a class="header-anchor" href="#使用range来填充一个集合" aria-hidden="true">#</a> 使用Range来填充一个集合</h2>
<p>Problem
​    你想要使用Range来填充一个List，Array，Vector或者其他的sequence。</p>
<p>Solution
​    对于支持range方法的集合你可以直接调用range方法，或者创建一个Range对象然后把它转化为一个目标集合。</p>
<p>在第一个解决方案中，我们调用了伴生类的range方法，比如Array，List，Vector，ArrayBuffer等等：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> Array<span class="token punctuation">.</span>range<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
res83<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> List<span class="token punctuation">.</span>range<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
res84<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> Vector<span class="token punctuation">.</span>range<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
res85<span class="token operator">:</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>Vector<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Vector<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一些集合，比如List，Array，你也可以创建一个Range对象，然后把它转化为相应的目标集合：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toArray
a<span class="token operator">:</span> Array<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> <span class="token keyword">val</span> l <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">)</span> by <span class="token number">2</span> toList
warning<span class="token operator">:</span> there were <span class="token number">1</span> feature warning<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> re<span class="token operator">-</span>run <span class="token keyword">with</span> <span class="token operator">-</span>feature <span class="token keyword">for</span> details
l<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> <span class="token keyword">val</span> l <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toList
l<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来看看那些集合可以由Range直接转化的：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>
<span class="token keyword">def</span> toArray<span class="token operator">:</span> Array<span class="token punctuation">[</span>A<span class="token punctuation">]</span>
<span class="token keyword">def</span> toBuffer<span class="token punctuation">[</span>A1 <span class="token operator">></span><span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token operator">:</span> Buffer<span class="token punctuation">[</span>A1<span class="token punctuation">]</span>
<span class="token keyword">def</span> toIndexedSeq<span class="token operator">:</span> IndexedSeq<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toIterator<span class="token operator">:</span> Iterator<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toList<span class="token operator">:</span> scala<span class="token punctuation">.</span>List<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toMap<span class="token punctuation">[</span>T<span class="token punctuation">,</span> U<span class="token punctuation">]</span><span class="token operator">:</span> collection<span class="token punctuation">.</span>Map<span class="token punctuation">[</span>T<span class="token punctuation">,</span> U<span class="token punctuation">]</span>
<span class="token keyword">def</span> toParArray<span class="token operator">:</span> ParArray<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toSet<span class="token punctuation">[</span>B <span class="token operator">></span><span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token operator">:</span> Set<span class="token punctuation">[</span>B<span class="token punctuation">]</span>
<span class="token keyword">def</span> toStream<span class="token operator">:</span> Stream<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toTraversable<span class="token operator">:</span> collection<span class="token punctuation">.</span>Traversable<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> toVector<span class="token operator">:</span> scala<span class="token punctuation">.</span>Vector<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方案我们可以把Range转为Set等，不支持range方法的集合类：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> set <span class="token operator">=</span> Set<span class="token punctuation">.</span>range<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token generics"><span class="token punctuation">&lt;</span>console<span class="token punctuation">></span></span><span class="token operator">:</span><span class="token number">8</span><span class="token operator">:</span> error<span class="token operator">:</span> value range is not a member of <span class="token keyword">object</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>Set
       <span class="token keyword">val</span> set <span class="token operator">=</span> Set<span class="token punctuation">.</span>range<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
                     <span class="token operator">^</span>
 
scala<span class="token operator">></span> <span class="token keyword">val</span> set <span class="token operator">=</span> Range<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toSet
set<span class="token operator">:</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>Set<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Set<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
 
scala<span class="token operator">></span> <span class="token keyword">val</span> set <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span> to <span class="token number">10</span> by <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toSet
set<span class="token operator">:</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>Set<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Set<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以创建一个字符序列：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> letters <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token char">'a'</span> to <span class="token char">'f'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toList
letters<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
 
scala<span class="token operator">></span> <span class="token keyword">val</span> letters <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token char">'a'</span> to <span class="token char">'f'</span> by <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toList
letters<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Char</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span>a<span class="token punctuation">,</span> c<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Range还能用于for循环：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token keyword">&lt;-</span> <span class="token number">0</span> until <span class="token number">10</span> by <span class="token number">2</span><span class="token punctuation">)</span> println<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token number">0</span>
<span class="token number">2</span>
<span class="token number">4</span>
<span class="token number">6</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Discussion</strong></p>
<p>通过对Range使用map方法，你可以创建出了Int，char之外，其他元素类型的集合</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> l <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>map<span class="token punctuation">(</span>_ <span class="token operator">*</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toList
l<span class="token operator">:</span> List<span class="token punctuation">[</span><span class="token builtin">Double</span><span class="token punctuation">]</span> <span class="token operator">=</span> List<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用同样的方案，你可以创建二元祖集合：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> to <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>map<span class="token punctuation">(</span>e <span class="token keyword">=></span> <span class="token punctuation">(</span>e<span class="token punctuation">,</span> e<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t<span class="token operator">:</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>IndexedSeq<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> Vector<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>二元祖集合很容易转换为Map：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> map <span class="token operator">=</span> t<span class="token punctuation">.</span>toMap
map<span class="token operator">:</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>Map<span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">,</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> Map<span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-></span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-></span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">-></span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">-></span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token operator">-></span> <span class="token number">8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scala中的infinity和nan" tabindex="-1"><a class="header-anchor" href="#scala中的infinity和nan" aria-hidden="true">#</a> Scala中的Infinity和NaN</h2>
<h3 id="infinity" tabindex="-1"><a class="header-anchor" href="#infinity" aria-hidden="true">#</a> Infinity</h3>
<p><code v-pre>i == i + 1</code>，一个数字永远不会等于它自己加1？</p>
<p>无穷大加1还是无穷大。</p>
<p>你可以用任何被计算为无穷大的浮点算术表达式来初始化i，例如：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，你最好是能够利用标准类库为你提供的常量：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token builtin">Double</span><span class="token punctuation">.</span>POSITIVE_INFINITY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>事实上，很多情况下都不需要真正使用无限大来表示无限大，许多足够大的浮点数都可以实现这一目的，例如：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token number">1.0e40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时Scala提供了一些检测方法：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token builtin">Double</span><span class="token punctuation">.</span>isInfinite<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">Double</span><span class="token punctuation">.</span>isFinite<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> a <span class="token operator">=</span> <span class="token number">22.0</span>
a<span class="token operator">:</span> <span class="token builtin">Double</span> <span class="token operator">=</span> <span class="token number">22.0</span>

scala<span class="token operator">></span> a<span class="token punctuation">.</span>isInfinite
res0<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>

scala<span class="token operator">></span> <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token number">2.0</span><span class="token operator">/</span><span class="token number">0</span>
b<span class="token operator">:</span> <span class="token builtin">Double</span> <span class="token operator">=</span> Infinity

scala<span class="token operator">></span> b<span class="token punctuation">.</span>isInfinite
res1<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>

scala<span class="token operator">></span> b<span class="token punctuation">.</span>isPosInfinity
res4<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nan" tabindex="-1"><a class="header-anchor" href="#nan" aria-hidden="true">#</a> NaN</h3>
<p><code v-pre>i==i</code>，一个数字总是等于它自己?</p>
<p>IEEE 754浮点算术保留了一个特殊的值用来表示一个不是数字的数量。这个值就是NaN（Not a Number），对于所有没有良好的数字定义的浮点计算，例如0.0/0.0，其值都是它。规范中描述道，NaN不等于任何浮点数值，包括它自身在内。</p>
<p>你可以用任何计算结果为NaN的浮点算术表达式来初始化i，例如：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token number">0.0</span> <span class="token operator">/</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样，为了表达清晰，你可以使用标准类库提供的常量：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token builtin">Double</span><span class="token punctuation">.</span>NaN<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>NaN还有其他的惊人之处。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token builtin">Double</span><span class="token punctuation">.</span>NaN <span class="token operator">==</span> <span class="token builtin">Double</span><span class="token punctuation">.</span>NaN <span class="token comment">//结果是false。但是，</span>
<span class="token builtin">Double</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token builtin">Double</span><span class="token punctuation">(</span><span class="token builtin">Double</span><span class="token punctuation">.</span>NaN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">Double</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token builtin">Double</span><span class="token punctuation">(</span><span class="token builtin">Double</span><span class="token punctuation">.</span>NaN<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">]</span>
a<span class="token punctuation">.</span>equals<span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何浮点操作，只要它的一个或多个操作数为NaN，那么其结果为NaN。这条规则是非常合理的，但是它却具有奇怪的结果。例如，下面的程序将打印false：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>double i <span class="token operator">=</span> <span class="token number">0.0</span> <span class="token operator">/</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
System<span class="token punctuation">.</span>out<span class="token punctuation">.</span>println<span class="token punctuation">(</span>i <span class="token operator">-</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，float 和double 类型都有一个特殊的NaN 值，用来表示不是数字的数量。</p>
<p>同时Java和Scala提供了一些检测方法：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token builtin">Double</span><span class="token punctuation">.</span>isNaN<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例如下：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> <span class="token keyword">val</span> a <span class="token operator">=</span> <span class="token number">22.0</span>
a<span class="token operator">:</span> <span class="token builtin">Double</span> <span class="token operator">=</span> <span class="token number">22.0</span>

scala<span class="token operator">></span> a<span class="token punctuation">.</span>isNaN
res0<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>

scala<span class="token operator">></span> <span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token number">0.0</span><span class="token operator">/</span><span class="token number">0</span>
b<span class="token operator">:</span> <span class="token builtin">Double</span> <span class="token operator">=</span> NaN

scala<span class="token operator">></span> a<span class="token punctuation">.</span>isNaN
res1<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统时间和时间戳" tabindex="-1"><a class="header-anchor" href="#系统时间和时间戳" aria-hidden="true">#</a> 系统时间和时间戳</h2>
<h3 id="获取时间戳" tabindex="-1"><a class="header-anchor" href="#获取时间戳" aria-hidden="true">#</a> 获取时间戳</h3>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>System<span class="token punctuation">.</span>currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取系统时间" tabindex="-1"><a class="header-anchor" href="#获取系统时间" aria-hidden="true">#</a> 获取系统时间</h3>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>SimpleDateFormat
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date

<span class="token keyword">val</span> df <span class="token operator">=</span> <span class="token keyword">new</span> SimpleDateFormat<span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> systemTime1 <span class="token operator">=</span> df<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token keyword">new</span> Date<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> systemTime2 <span class="token operator">=</span> df<span class="token punctuation">.</span>format<span class="token punctuation">(</span>System<span class="token punctuation">.</span>currentTimeMillis<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="md5hash" tabindex="-1"><a class="header-anchor" href="#md5hash" aria-hidden="true">#</a> MD5Hash</h2>
<p>获取md5 hash的16进制的字符串，并转化为Long型整数。</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span>MessageDigest
<span class="token keyword">def</span> hashMD5<span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">val</span> md5 <span class="token operator">=</span> MessageDigest<span class="token punctuation">.</span>getInstance<span class="token punctuation">(</span><span class="token string">"MD5"</span><span class="token punctuation">)</span>
      <span class="token keyword">val</span> encoded <span class="token operator">=</span> md5<span class="token punctuation">.</span>digest<span class="token punctuation">(</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span>getBytes<span class="token punctuation">)</span>
      encoded<span class="token punctuation">.</span>map<span class="token punctuation">(</span><span class="token string">"%02x"</span><span class="token punctuation">.</span>format<span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkString
    <span class="token punctuation">}</span>

<span class="token keyword">val</span> a <span class="token operator">=</span> hashMD5<span class="token punctuation">(</span><span class="token string">"abcd"</span><span class="token punctuation">)</span>

java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span><span class="token builtin">Long</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">"0x"</span> <span class="token operator">+</span> a<span class="token punctuation">.</span>slice<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：只取hash字符串的前10位是因为为了保证转换后的数值范围处于Long整型范围内。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.runoob.com/scala/scala-options.html" target="_blank" rel="noopener noreferrer">Scala Option(选项)<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Option选项&quot;参考此博客。</p>
<ul>
<li><a href="https://docs.scala-lang.org/zh-cn/overviews/core/string-interpolation.html" target="_blank" rel="noopener noreferrer">字符串插值<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;字符串插值&quot;参考此博客。</p>
<ul>
<li><a href="https://stackoverflow.com/questions/51304156/element-by-element-matrix-multiplication-in-scala" target="_blank" rel="noopener noreferrer">Element by Element Matrix Multiplication in Scala<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;org.apache.spark.mllib.linalg.Matrix&quot;参考此博客。</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/qq_18293213/article/details/53308125" target="_blank" rel="noopener noreferrer">Scala中的矩阵Breeze.linalg.DenseMatrix<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/zhuqing2020/article/details/37605553" target="_blank" rel="noopener noreferrer">快速了解Breeze(二)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/xxzhangx/article/details/74066679" target="_blank" rel="noopener noreferrer">spark | scala | 线性代数库Breeze学习<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.knoldus.com/cool-breeze-of-scala-for-easy-computation-introduction-to-breeze-library/" target="_blank" rel="noopener noreferrer">Cool Breeze of Scala for Easy Computation: Introduction to Breeze Library<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>&quot;breeze.linalg.DenseMatrix&quot;参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/qq_36330643/article/details/76483551" target="_blank" rel="noopener noreferrer">scala使用Range来填充一个集合<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;使用Range来填充一个集合&quot;参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/u013007900/article/details/79225016" target="_blank" rel="noopener noreferrer">Scala中的Infinity和NaN<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Scala中的Infinity和NaN&quot;参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/qq_34885598/article/details/86583307" target="_blank" rel="noopener noreferrer">scala获取当前系统时间的两种方式<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;系统时间和时间戳&quot;参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/sunny_xsc1994/article/details/90606893" target="_blank" rel="noopener noreferrer">scala Md5加密<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;MD5Hash&quot;参考此博客。</p>
</div></template>


