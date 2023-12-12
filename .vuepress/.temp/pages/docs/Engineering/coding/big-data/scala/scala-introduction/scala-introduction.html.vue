<template><div><h1 id="scala简介" tabindex="-1"><a class="header-anchor" href="#scala简介" aria-hidden="true">#</a> Scala简介</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/big-data/scala/scala.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="单机编译并运行scala" tabindex="-1"><a class="header-anchor" href="#单机编译并运行scala" aria-hidden="true">#</a> 单机编译并运行scala</h1>
<p>将下述代码</p>
<div class="language-scala line-numbers-mode" data-ext="scala"><pre v-pre class="language-scala"><code><span class="token keyword">object</span> HelloWorld <span class="token keyword">extends</span> App <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> println<span class="token punctuation">(</span><span class="token string">"hello, "</span> <span class="token operator">+</span> args<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token keyword">else</span> println<span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写到<code v-pre>HelloWorld.scala</code>中，然后使用scalac编译，再用scala执行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 编译 </span>
scalac HelloWorld.scala 
<span class="token comment"># 运行（输出运行所花费的时间） </span>
scala <span class="token parameter variable">-Dscala.time</span> HelloWorld 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.cnblogs.com/LiCheng-/p/8022289.html" target="_blank" rel="noopener noreferrer">Scala入门系列（六）：面向对象之object<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;单机编译并运行scala&quot;参考此博客。</p>
</div></template>


