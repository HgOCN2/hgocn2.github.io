<template><div><h1 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型" aria-hidden="true">#</a> 高级类型</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/big-data/scala/scala.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%8D%95%E4%BE%8B%E7%B1%BB%E5%9E%8B">单例类型</a></li>
</ul>
<h1 id="单例类型" tabindex="-1"><a class="header-anchor" href="#单例类型" aria-hidden="true">#</a> 单例类型</h1>
<p>所有的对象实例都有一个<code v-pre>x.type</code>的单例类型，它只对应当前对象实例。这么做有什么意义呢？</p>
<p>从<a href="http://scalada.blogspot.com/2008/02/thistype-for-chaining-method-calls.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>看到一种情况，在“链式”调用风格下，有适用的场景：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">class</span> A <span class="token punctuation">{</span><span class="token keyword">def</span> method1<span class="token operator">:</span> A <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> B <span class="token keyword">extends</span> A <span class="token punctuation">{</span><span class="token keyword">def</span> method2<span class="token operator">:</span> B <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">}</span>

<span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token keyword">new</span> B
b<span class="token punctuation">.</span>method2<span class="token punctuation">.</span>method1  <span class="token comment">// 可以工作</span>
b<span class="token punctuation">.</span>method1<span class="token punctuation">.</span>method2  <span class="token comment">// 不行，提示：error: value method2 is not a member of A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些人很喜欢用 <code v-pre>x.foo.bar</code> 这样的方式连续的去操作，这种风格也成为”链式调用”风格，它要求方法返回的必须是当前对象类型，以便连贯的调用方法。不过上面，因为父类中声明的method1方法返回类型限制死了就是A类型(不写返回值类型，用类型推导也一样)，导致子类对象调用完method1之后，类型已经变成了父类型，无法再调用子类型中的方法了。解决方法是：</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">class</span> A <span class="token punctuation">{</span> <span class="token keyword">def</span> method1<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token punctuation">}</span> 
<span class="token keyword">class</span> B <span class="token keyword">extends</span> A <span class="token punctuation">{</span> <span class="token keyword">def</span> method2 <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token punctuation">}</span> 

<span class="token keyword">val</span> b <span class="token operator">=</span> <span class="token keyword">new</span> B
b<span class="token punctuation">.</span>method1<span class="token punctuation">.</span>method2  <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把返回类型都改为了 <code v-pre>this.type</code> 单例类型，就灵了。它利用了<code v-pre>this</code>关键字的动态特性来实现的，在执行<code v-pre>b.method1</code> 的时候，<code v-pre>method1</code>返回值类型<code v-pre>this.type</code> 被翻译成了<code v-pre>B.this.type</code></p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code>scala<span class="token operator">></span> b<span class="token punctuation">.</span>method1
res0<span class="token operator">:</span> b<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">=</span> B<span class="token annotation punctuation">@ca5bdb6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样不同的对象实例在执行该方法的时候，返回的类型也是不同的(都是当前实例的单例类型)。</p>
<p>小结，单例类型是个特殊的类型，单例类型绑定(依赖)在某个对象实例上，每个对象实例都有它的单例类型。不过它的场景并不多见。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://hongjiang.info/scala-type-system-singleton-type/" target="_blank" rel="noopener noreferrer">scala类型系统：3) 单例类型与this.type<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;单例类型&quot;参考此文章。</p>
</div></template>


