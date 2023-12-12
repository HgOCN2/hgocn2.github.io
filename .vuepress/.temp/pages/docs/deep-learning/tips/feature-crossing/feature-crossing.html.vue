<template><div><h1 id="深度学习的高阶特征交叉原理" tabindex="-1"><a class="header-anchor" href="#深度学习的高阶特征交叉原理" aria-hidden="true">#</a> 深度学习的高阶特征交叉原理</h1>
<ul>
<li><RouterLink to="/docs/deep-learning/tips/tips.html">返回上层目录</RouterLink></li>
<li><a href="#sigmoid">sigmoid</a></li>
<li><a href="#relu">relu</a></li>
</ul>
<p>我们总说深度学习可以进行高阶的特征交叉，但是没人说到底是怎么交叉的，那现在就详细定性分析一下。</p>
<h1 id="sigmoid" tabindex="-1"><a class="header-anchor" href="#sigmoid" aria-hidden="true">#</a> sigmoid</h1>
<p>如果把sogmoid看成是简单的$\text{sigmoid}(x)=x+x^2$（为什么可以看成，因为泰勒展开呀），仅仅凭借<strong>非线性激活函数的一阶项和二阶项通过多层</strong>就已经能起到了高阶特征交叉的作用。
$$
\begin{aligned}
&amp;\sigma(w_{11}\sigma(w_{11}x_1+w_{12}x_2)+w_{21}\sigma(w_{21}x_1+w_{22}x_2))\
\approx&amp;\sigma(\sigma(x_1+x_2)+\sigma(x_1+x_2))\
\approx&amp;\sigma((x_1+x_2)+(x_1+x_2)^2)\ \ \  \sigma(x)=x+x^2\
\approx&amp;\sigma(x_1+x_2+x_1^2+x_2^2+x_1x_2)\ \ \  \sigma(x)=x+x^2\
\approx&amp;(x_1+x_2+x_1^2+x_2^2+x_1x_2)+(x_1+x_2+x_1^2+x_2^2+x_1x_2)^2\
\approx&amp;(x_1+x_2+x_1^2+x_2^2+x_1x_2+x_1^3+x_2^3+x_1^2x_2+x_1x_2^2+x_1^4+x_2^4+x_1^2x_2^2+x_1^3x_2+x_1x_2^3)
\end{aligned}
$$</p>
<h1 id="relu" tabindex="-1"><a class="header-anchor" href="#relu" aria-hidden="true">#</a> relu</h1>
<p>这样推导很清晰，有个问题，如果激活函数是relu的话该怎么推导呢？</p>
<p>relu可以看成是导数连续的光滑函数的分段线性离散化，所以我们反过来用relu的离散点可以拟合成连续可导的光滑函数 。下图就是用10阶多项式函数对relu进行拟合：</p>
<p><img src="@source/docs/deep-learning/tips/feature-crossing/pic/relu-fit.png" alt="relu-fit"></p>
<p>这里当然要放上上图的代码啦：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt


<span class="token keyword">def</span> <span class="token function">relu</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> leaky<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> leaky <span class="token operator">*</span> x
    <span class="token keyword">return</span> ret


x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> <span class="token punctuation">[</span>relu<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> x<span class="token punctuation">]</span>
<span class="token comment"># 用10次多项式拟合x，y数组</span>
a <span class="token operator">=</span> np<span class="token punctuation">.</span>polyfit<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># 拟合完之后用这个函数来生成多项式对象</span>
b <span class="token operator">=</span> np<span class="token punctuation">.</span>poly1d<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 生成多项式对象之后，就是获取x在这个多项式处的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>coefficients<span class="token punctuation">)</span>
c <span class="token operator">=</span> b<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token comment"># 对原始数据画散点图</span>
plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> marker<span class="token operator">=</span><span class="token string">'o'</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'original datas'</span><span class="token punctuation">)</span>
<span class="token comment"># 对拟合之后的数据，也就是x，c数组画图</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> c<span class="token punctuation">,</span> ls<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token string">'red'</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'polynomial fitting'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为它的大于零的部分是线性增长的，所以我们猜测它的高阶项是非常小的，主要是低阶项在起作用，上图的拟合函数的系数如下：
$$
\begin{aligned}
&amp;x^{10}=6.07335221e^{-09}\
&amp;x^9=1.30143262e^{-08}\
&amp;x^8=-1.52639454e^{-06}\
&amp;x^7=-2.23983403e^{-06}\
&amp;x^6=1.44036671e^{-04}\<br>
&amp;x^5=1.25396014e^{-04}\
&amp;x^4=-6.45528501e^{-03}\
&amp;x^3=-2.52140119e^{-03}\
&amp;x^2=1.74796855e^{-01}\
&amp;x^1=5.63144794e^{-01}\
&amp;x^0=2.12781922e^{-01}
\end{aligned}
$$
所以其实在0附近，主要是$x$的一次项和二次项在起作用。所以relu的推导方法和sigmoid是一样的。</p>
</div></template>


