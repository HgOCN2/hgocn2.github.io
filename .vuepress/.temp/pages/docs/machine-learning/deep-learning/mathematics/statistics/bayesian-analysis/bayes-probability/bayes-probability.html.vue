<template><div><h1 id="贝叶斯概率" tabindex="-1"><a class="header-anchor" href="#贝叶斯概率" aria-hidden="true">#</a> 贝叶斯概率</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/deep-learning/mathematics/statistics/bayesian-analysis/bayesian-analysis.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="贝叶斯概率简介" tabindex="-1"><a class="header-anchor" href="#贝叶斯概率简介" aria-hidden="true">#</a> 贝叶斯概率简介</h1>
<p>我们后面会聊到贝叶斯网络，里面会讲到朴素贝叶斯，贝叶斯概率和朴素贝叶斯的关系就像是雷锋和雷峰塔的区别，就是JavaScript和Java的区别。朴素贝叶斯是假定条件独立，假定特征均衡，进行分类的非常重要的分类器，曾经也被誉为十大数据挖掘算法之一。而贝叶斯呢？得看上下文，贝叶斯公式是贝叶斯；说模型是用贝叶斯的方法做，那意思就是想加入先验，想把它的参数当作是随机变量。</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mi mathvariant="normal">∣</mi><mi>A</mi><mo stretchy="false">)</mo><mo>⋅</mo><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">
P(A|B) = \frac {P(B|A)\cdot P(A)}{P(B)}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord">∣</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>后验概率=(似然度<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>×</mo></mrow><annotation encoding="application/x-tex">\times</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">×</span></span></span></span>先验概率)/标准化常量</p>
<p>在生活中，我们无时不刻在面对这样的问题：根据给定一些信息，探求事物的真相，贝叶斯公式就是一个非常有力的工具，他被贝叶斯学派奉为佳臬，在输入法识别拼音，药物检测，医疗等等领域都有应用，解释了世界的概率性的一面，简单却有力。</p>
<p>怎么简单理解贝叶斯公式？
https://www.zhihu.com/question/51448623</p>
<p>你对贝叶斯统计都有怎样的理解？
https://www.zhihu.com/question/21134457</p>
<p>小学生都能理解的贝叶斯公式</p>
<p>https://zhuanlan.zhihu.com/p/22805488</p>
<p>【贝叶斯推断】基本概念</p>
<p>https://zhuanlan.zhihu.com/p/24832964</p>
<p>深入浅出朴素贝叶斯理论</p>
<p>https://zhuanlan.zhihu.com/p/24602462</p>
<h1 id="神奇而又美丽的贝叶斯方法" tabindex="-1"><a class="header-anchor" href="#神奇而又美丽的贝叶斯方法" aria-hidden="true">#</a> 神奇而又美丽的贝叶斯方法</h1>
<p>这篇文章是目前见过最形象的关于贝叶斯的解说了,对贝叶斯方法做了一个很好的讲解。</p>
<p><a href="http://mindhacks.cn/2008/09/21/the-magical-bayesian-method/" target="_blank" rel="noopener noreferrer">数学之美番外篇：平凡而又神奇的贝叶斯方法<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/42598338" target="_blank" rel="noopener noreferrer">似然和似然函数详解<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/54082000/answer/1632000258" target="_blank" rel="noopener noreferrer">如何理解似然函数?<ExternalLinkIcon/></a></p>
<p>讲了贝叶斯里为什么那一项叫似然函数。</p>
</div></template>


