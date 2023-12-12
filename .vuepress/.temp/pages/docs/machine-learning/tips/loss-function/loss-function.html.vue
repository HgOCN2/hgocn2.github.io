<template><div><h1 id="损失函数" tabindex="-1"><a class="header-anchor" href="#损失函数" aria-hidden="true">#</a> 损失函数</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/tips/tips.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%9B%9E%E5%BD%92%E9%97%AE%E9%A2%98%E7%9A%84%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0">回归问题的损失函数</a></li>
<li><a href="#%E5%88%86%E7%B1%BB%E9%97%AE%E9%A2%98%E7%9A%84%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0">分类问题的损失函数</a>
<ul>
<li><a href="#%E4%BA%A4%E5%8F%89%E7%86%B5%E6%8D%9F%E5%A4%B1">交叉熵损失</a>
<ul>
<li><a href="#%E5%88%86%E7%B1%BB%E9%97%AE%E9%A2%98%E4%B8%AD%E4%BA%A4%E5%8F%89%E7%86%B5%E4%BC%98%E4%BA%8EMSE%E7%9A%84%E5%8E%9F%E5%9B%A0">分类问题中交叉熵优于MSE的原因</a></li>
<li><a href="#%E5%A4%9A%E4%B8%AA%E4%BA%8C%E5%88%86%E7%B1%BB%E5%90%8C%E6%97%B6%E8%AE%A1%E7%AE%97%E4%BA%A4%E5%8F%89%E7%86%B5%E6%8D%9F%E5%A4%B1">多个二分类同时计算交叉熵损失</a></li>
</ul>
</li>
<li>[Logistic loss](#Logistic loss)
<ul>
<li>[Logistic loss和交叉熵损失损失的等价性](#Logistic loss和交叉熵损失损失的等价性)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="回归问题的损失函数" tabindex="-1"><a class="header-anchor" href="#回归问题的损失函数" aria-hidden="true">#</a> 回归问题的损失函数</h1>
<h1 id="分类问题的损失函数" tabindex="-1"><a class="header-anchor" href="#分类问题的损失函数" aria-hidden="true">#</a> 分类问题的损失函数</h1>
<h2 id="交叉熵损失" tabindex="-1"><a class="header-anchor" href="#交叉熵损失" aria-hidden="true">#</a> 交叉熵损失</h2>
<h3 id="分类问题中交叉熵优于mse的原因" tabindex="-1"><a class="header-anchor" href="#分类问题中交叉熵优于mse的原因" aria-hidden="true">#</a> 分类问题中交叉熵优于MSE的原因</h3>
<p><a href="https://zhuanlan.zhihu.com/p/84431551" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/84431551<ExternalLinkIcon/></a></p>
<h3 id="多个二分类同时计算交叉熵损失" tabindex="-1"><a class="header-anchor" href="#多个二分类同时计算交叉熵损失" aria-hidden="true">#</a> 多个二分类同时计算交叉熵损失</h3>
<p>通常的负采样中，只有一个正样本和多个负样本，但在某些时候，会有多个正样本和多个负样本同时存在，比如：
$$
[1, 1, 0, 0, 0, 0]
$$
那该怎么计算交叉熵受损失呢？</p>
<p>假设有m个正样本和n个负样本同时存在，则其交叉熵损失计算为
$$
\begin{aligned}
\text{entropy_loss}&amp;=-\sum_{i=1}^{m}\frac{1}{m}\text{log}\frac{\text{exp}(s_i)}{\sum_{j=1}^{m+n}s_j}\
&amp;=-\sum_{i=1}^{m}\left(s_i-\text{log}\sum_{j=1}^{m+n}s_j\right)\ \text{去掉常数项1/m}\
&amp;=-\sum_{i=1}^{m}s_i+m\ \text{log}\sum_{j=1}^{m+n}s_j
\end{aligned}
$$
tensorflow代码为</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">cmp_cross_entropy_loss</span><span class="token punctuation">(</span>logits<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> pos_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    logits_exp_sum <span class="token operator">=</span> tf<span class="token punctuation">.</span>reduce_sum<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>logits<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    logits_sum <span class="token operator">=</span> tf<span class="token punctuation">.</span>reduce_sum<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>multiply<span class="token punctuation">(</span>logits<span class="token punctuation">,</span> labels<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> 
    cross_entropy_loss_ <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.0</span> <span class="token operator">*</span> <span class="token punctuation">(</span>logits_sum <span class="token operator">-</span> tf<span class="token punctuation">.</span>dtypes<span class="token punctuation">.</span>cast<span class="token punctuation">(</span>pos_num<span class="token punctuation">,</span> tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span> <span class="token operator">*</span> tf<span class="token punctuation">.</span>math<span class="token punctuation">.</span>log<span class="token punctuation">(</span>logits_exp_sum<span class="token punctuation">)</span><span class="token punctuation">)</span>
    cross_entropy_loss <span class="token operator">=</span> tf<span class="token punctuation">.</span>reduce_sum<span class="token punctuation">(</span>cross_entropy_loss_<span class="token punctuation">)</span> 
    <span class="token keyword">return</span> cross_entropy_loss<span class="token punctuation">,</span> cross_entropy_loss_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tf-nn-sparse-softmax-cross-entropy-with-logits函数" tabindex="-1"><a class="header-anchor" href="#tf-nn-sparse-softmax-cross-entropy-with-logits函数" aria-hidden="true">#</a> tf.nn.sparse_softmax_cross_entropy_with_logits函数</h3>
<p><a href="https://blog.csdn.net/wdh315172/article/details/106140608/" target="_blank" rel="noopener noreferrer">tf.nn.sparse_softmax_cross_entropy_with_logits 函数简介<ExternalLinkIcon/></a></p>
<p>测试交叉熵损失：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> math
logit <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
softmax <span class="token operator">=</span> math<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>logit<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span>math<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>logit<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
cross_entropy <span class="token operator">=</span> <span class="token operator">-</span> math<span class="token punctuation">.</span>log<span class="token punctuation">(</span>softmax<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cross_entropy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logistic-loss" tabindex="-1"><a class="header-anchor" href="#logistic-loss" aria-hidden="true">#</a> Logistic loss</h2>
<p>有时也叫负二项对数似然损失函数（negative binomial log-likelihood）</p>
<h3 id="logistic-loss和交叉熵损失损失的等价性" tabindex="-1"><a class="header-anchor" href="#logistic-loss和交叉熵损失损失的等价性" aria-hidden="true">#</a> Logistic loss和交叉熵损失损失的等价性</h3>
<p>对于解决分类问题的FM模型，</p>
<p>当标签为[1, 0]时，其损失函数为交叉熵损失：
$$
Loss=y\ \text{log} \hat{y}+(1-y)\text{log}(1-\hat{y})
$$
当标签为[1, -1]时，其损失函数为
$$
Loss=\text{log}\left(1+\text{exp}(-yf(x))\right)
$$
其中，f(x)是$w\cdot x$，不是$\hat{y}$。</p>
<p>这两种损失函数其实是完全等价的。</p>
<p>（1）当为正样本时，损失为</p>
<ul>
<li>
<p>标签为[1, 0]
$
Loss=-y\text{log}(\hat{y})=-\text{log}\frac{1}{1+\text{exp}(-wx)}=\text{log}(1+\text{exp}(-wx)
$</p>
</li>
<li>
<p>标签为[1, -1]
$
Loss=\text{log}\left(1+\text{exp}(-yf(x))\right)=\text{log}\left(1+\text{exp}(-wx)\right)
$</p>
</li>
</ul>
<p>（2）当为负样本时，损失为</p>
<ul>
<li>
<p>标签为[1, 0]
$
\begin{aligned}
Loss&amp;=-(1-y)\text{log}(1-\hat{y})=-\text{log}(1-\frac{1}{1+\text{exp}(-wx)})\
&amp;=\text{log}(1+\text{exp}(wx))
\end{aligned}
$</p>
</li>
<li>
<p>标签为[1, -1]
$
Loss=\text{log}\left(1+\text{exp}(-yf(x))\right)=\text{log}\left(1+\text{exp}(wx)\right)
$</p>
</li>
</ul>
<p>可见，两种损失函数的值完全一样。</p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/36431289" target="_blank" rel="noopener noreferrer">常见回归和分类损失函数比较<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了此博客。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/84431551" target="_blank" rel="noopener noreferrer">MSE vs 交叉熵<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;分类问题中交叉熵优于MSE的原因&quot;参考了此博客。</p>
<ul>
<li><a href="http://www.hongliangjie.com/wp-content/uploads/2011/10/logistic.pdf" target="_blank" rel="noopener noreferrer">Notes on Logistic Loss Function<ExternalLinkIcon/></a></li>
<li><a href="https://www.zybuluo.com/frank-shaw/note/143260" target="_blank" rel="noopener noreferrer">Logistic Loss函数、Logistics回归与极大似然估计<ExternalLinkIcon/></a></li>
<li><a href="https://buracagyang.github.io/2019/05/29/logistic-loss-function/" target="_blank" rel="noopener noreferrer">Logistic loss函数<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Logistic loss和交叉熵损失损失的等价性&quot;参考了此博客。</p>
</div></template>


