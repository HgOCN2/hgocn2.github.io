<template><div><h2 id="多分类" tabindex="-1"><a class="header-anchor" href="#多分类" aria-hidden="true">#</a> 多分类</h2>
<p>GBDT采用多类逻辑损失函数（muti-class log-loss）作为损失函数：
$$L({ y_k,F_k(x) }^K_1)=-\sum_{k=1}^Ky_k\text{log}\ p_k(x)$$
这里的$y_k\in [0,1]$，使用softmax来计算最后的类别概率：
$$p_k(x)=\text{exp}(F_k(x))/\sum_{l=1}^K\text{exp}(F_l(x))$$
从上式中我们可以得出，对于多分类问题，我们需要为每个类别创建一棵回归树$F_l(x) = 1, 2, ... , k$，每一棵树用来预测一类的概率。</p>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<p><strong>npx</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


