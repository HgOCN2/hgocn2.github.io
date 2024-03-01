import{_ as c,r as a,o,c as u,b as n,e as t,w as l,d as s,a as i}from"./app-VitiyI7N.js";const r={},k=n("h1",{id:"指标keras-metrics",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#指标keras-metrics","aria-hidden":"true"},"#"),s(" 指标keras.metrics")],-1),d=i(`<h1 id="使用步骤总结" tabindex="-1"><a class="header-anchor" href="#使用步骤总结" aria-hidden="true">#</a> 使用步骤总结</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法的流程：
1、 新建一个metric
2、 更新数据update_state
3、 取出数据result().numpy()
4、 重置清零数据reset_states
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤1，新建一个meter</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>acc_meter <span class="token operator">=</span> metrics<span class="token punctuation">.</span>Accuracy<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 新建一个准确度的meter</span>
loss_meter <span class="token operator">=</span> metrics<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 求平均值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤2，向meter中添加数据</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>loss_meter<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span>loss<span class="token punctuation">)</span>
acc_meter<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span>y_true<span class="token punctuation">,</span> y_pred<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤3，取出数据</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>loss_meter<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Evaluate Acc:&#39;</span><span class="token punctuation">,</span> total_correct<span class="token operator">/</span>total<span class="token punctuation">,</span> acc_meter<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<strong>loss_meter.result()</strong> 会得到一个tensor的数据，再使用.numpy将它转化为numpy的数据</p><p><strong>步骤4，清除缓存meter</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>loss_meter<span class="token punctuation">.</span>reset_states<span class="token punctuation">(</span><span class="token punctuation">)</span>
acc_meter<span class="token punctuation">.</span>reset_states<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="各种评价指标" tabindex="-1"><a class="header-anchor" href="#各种评价指标" aria-hidden="true">#</a> 各种评价指标</h1><h2 id="tf-keras-metrics-accuracy" tabindex="-1"><a class="header-anchor" href="#tf-keras-metrics-accuracy" aria-hidden="true">#</a> tf.keras.metrics.Accuracy</h2><p>计算预测与真实值的准确度。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>Accuracy<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;accuracy&#39;</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，如果<strong>y_true</strong>为[1、2、3、4]，而<strong>y_pred</strong>为[0、2、3、4]，则精度为<strong>3/4</strong>或 <strong>.75</strong> 。如果将权重指定为 <strong>[1、1、0、0]</strong> ，则精度将为<strong>1/2</strong>或 <strong>.5</strong> ,权重0是用来屏蔽的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>update_state<span class="token punctuation">(</span>y_true<span class="token punctuation">,</span> y_pred<span class="token punctuation">,</span> sample_weight<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf

m <span class="token operator">=</span> tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>Accuracy<span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 注： m.update_state(y, pred) 中添加的不是一个实时的Accuracy，它是一个专门计算Accuracy 的meter，只需要传递真实的y和预测的y（pred），它会自动的计算Accuracy，并保存。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 0.75</span>
m<span class="token punctuation">.</span>reset_states<span class="token punctuation">(</span><span class="token punctuation">)</span>

m<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sample_weight <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tf-keras-metrics-mean" tabindex="-1"><a class="header-anchor" href="#tf-keras-metrics-mean" aria-hidden="true">#</a> tf.keras.metrics.Mean</h2><p>函数说明：计算给定值的（加权）平均值。</p><p>用法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>Mean<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;mean&#39;</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，如果值为[1、3、5、7]，则平均值为4。如果权重指定为[1、1、0、0]，则平均值为2。</p><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf

m <span class="token operator">=</span> tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>Mean<span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 4.0</span>
m<span class="token punctuation">.</span>reset_states<span class="token punctuation">(</span><span class="token punctuation">)</span>

m<span class="token punctuation">.</span>update_state<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sample_weight<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>`,27),m={href:"https://blog.csdn.net/jpc20144055069/article/details/105324654",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"本文参考了此博客。",-1);function b(h,g){const e=a("RouterLink"),p=a("ExternalLinkIcon");return o(),u("div",null,[k,n("ul",null,[n("li",null,[t(e,{to:"/docs/machine-learning/machine-learning-framework/tensorflow/tensorflow2.0/keras/keras.html"},{default:l(()=>[s("返回上层目录")]),_:1})])]),d,n("ul",null,[n("li",null,[n("a",m,[s("tensorflow2中keras.metrics的Accuracy和Mean的用法"),t(p)])])]),v])}const _=c(r,[["render",b],["__file","keras-metrics.html.vue"]]);export{_ as default};
