<template><div><h1 id="dsin-deep-session-interest-network-for-click-through-rate-prediction" tabindex="-1"><a class="header-anchor" href="#dsin-deep-session-interest-network-for-click-through-rate-prediction" aria-hidden="true">#</a> DSIN:Deep Session Interest Network for Click-Through Rate Prediction</h1>
<ul>
<li><RouterLink to="/docs/recommender-systems/industry-application/alibaba/alibaba.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%97%AE%E9%A2%98%E8%83%8C%E6%99%AF">问题背景</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E7%BB%93%E6%9E%84">模型结构</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%9E%B6%E6%9E%84">基本架构</a></li>
<li><a href="#DSIN%E6%A8%A1%E5%9E%8B">DSIN模型</a></li>
<li>[Session Division Layer](#Session Division Layer)</li>
<li>[Session Interest Extractor Layer](#Session Interest Extractor Layer)</li>
<li>[Session Interest Interacting Layer](#Session Interest Interacting Layer)</li>
<li>[Session Interest Activating Layer](#Session Interest Activating Layer)</li>
</ul>
</li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E8%AF%95%E9%AA%8C">模型试验</a></li>
<li><a href="#%E8%BF%9B%E4%B8%80%E6%AD%A5%E8%AE%A8%E8%AE%BA">进一步讨论</a>
<ul>
<li>[Effect of Multiple Sessions](#Effect of Multiple Sessions)</li>
<li>[Effect of Session Interest Interacting Layer](#Effect of Session Interest Interacting Layer)</li>
<li>[Effect of Bias Encoding](#Effect of Bias Encoding)</li>
<li>[Visualization of Self-attention and the Activation Unit](#Visualization of Self-attention and the Activation Unit)</li>
</ul>
</li>
<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>
</ul>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/DSIN-paper.png" alt="DSIN-paper"></p>
<p>pdf：<a href="https://arxiv.org/pdf/1905.06482.pdf" target="_blank" rel="noopener noreferrer"><em>Deep Session Interest Network for Click-Through Rate Prediction</em><ExternalLinkIcon/></a></p>
<p>代码：<a href="https://github.com/shenweichen/DSIN" target="_blank" rel="noopener noreferrer">shenweichen/<strong>DSIN</strong><ExternalLinkIcon/></a></p>
<h1 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景" aria-hidden="true">#</a> 问题背景</h1>
<p>从用户行为中，我们发现，</p>
<ul>
<li>在每个会话中的行为是相近的，</li>
<li>而在不同会话之间差别是很大的。</li>
</ul>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/session-demo.png" alt="session-demo"></p>
<h1 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构" aria-hidden="true">#</a> 模型结构</h1>
<h2 id="基本架构" tabindex="-1"><a class="header-anchor" href="#基本架构" aria-hidden="true">#</a> 基本架构</h2>
<p>Base Model就是一个全连接神经网络，其输入的特征的主要分为三部分，</p>
<ul>
<li>用户特征$X^U$</li>
<li>待推荐物品特征$X^I$</li>
<li>用户历史行为序列特征$S$</li>
</ul>
<p>损失函数：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/loss-function.png" alt="loss-function"></p>
<h2 id="dsin模型" tabindex="-1"><a class="header-anchor" href="#dsin模型" aria-hidden="true">#</a> DSIN模型</h2>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/DSIN-model.png" alt="DSIN-model"></p>
<p>其中，激活单元具体结构和右下角方框中的各层的名称为</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/DSIN-model-1.png" alt="DSIN-model-1"></p>
<h2 id="session-division-layer" tabindex="-1"><a class="header-anchor" href="#session-division-layer" aria-hidden="true">#</a> Session Division Layer</h2>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/session-division-layer.png" alt="session-division-layer"></p>
<p>这一层将用户的行文进行切分，首先将用户的点击行为按照时间排序，判断每两个行为之间的时间间隔，前后的时间间隔大于30min，就进行切分。</p>
<p>切分后，我们可以将用户的行为序列S转换成会话序列Q。第k个会话$Q_k=[b_1;b_2;...;b_i;...;b_T]$,其中，T是会话的长度，$b_i$是会话中第i个行为，是一个d维的embedding向量。所以$Q_k$是$T<em>d$的，而Q，则是$K</em>T*d$的。</p>
<h2 id="session-interest-extractor-layer" tabindex="-1"><a class="header-anchor" href="#session-interest-extractor-layer" aria-hidden="true">#</a> Session Interest Extractor Layer</h2>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/session-interest-extractor-layer.png" alt="session-interest-extractor-layer"></p>
<p>这里对每个session，使用transformer对每个会话的行为进行处理。</p>
<p>这里使用Bias Encoding而非transformer的Positional Encoding：
$$
BE_{(k,t,c)}=w^K_k+w^T_t+w^C_c
$$
加入偏置项后，Q变为：
$$
Q=Q+BE
$$
随后，是对每个会话中的序列通过Transformer进行处理：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/transformer.png" alt="transformer"></p>
<p>注意，这里的Bias Encoding可能不太好理解，但具体实现很简单，利用了python/tensorflow的广播机制，python代码如下</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># K = 2 两个session</span>
sess <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># T = 3 每个session有三个item</span>
seq <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># C = 5 每个item是5维embedding</span>
embed <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># BE = WK + WT + WC</span>
bias_embedding <span class="token operator">=</span> sess <span class="token operator">+</span> seq <span class="token operator">+</span> embed

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"sess = "</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sess<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"seq = "</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"embed = "</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>embed<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"bias_embedding = sess + seq + embed = "</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bias_embedding<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-interest-interacting-layer" tabindex="-1"><a class="header-anchor" href="#session-interest-interacting-layer" aria-hidden="true">#</a> Session Interest Interacting Layer</h2>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/session-interest-interacting-layer.png" alt="session-interest-interacting-layer"></p>
<p>用户的会话兴趣，是有序列关系在里面的，这种关系，我们通过一个双向LSTM(bi-LSTM)来处理：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/Bi-LSTM.png" alt="Bi-LSTM"></p>
<p>每个时刻的hidden state计算：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/Bi-LSTM-hidden.png" alt="Bi-LSTM-hidden"></p>
<h2 id="session-interest-activating-layer" tabindex="-1"><a class="header-anchor" href="#session-interest-activating-layer" aria-hidden="true">#</a> Session Interest Activating Layer</h2>
<p>用户的会话兴趣与目标物品越相近，那么应该赋予更大的权重，这里使用注意力机制来刻画这种相关性：
$$
\begin{aligned}
&amp;\alpha^I_k=\frac{\text{exp}(I_kW^IX^I)}{\sum_k^K\text{exp}(I_kW^IX^I)}\
&amp;U^I=\sum_k^K \alpha_k^II_k
\end{aligned}
$$
同样，混合了上下文信息的会话兴趣，也进行同样的处理：
$$
\begin{aligned}
&amp;\alpha^H_k=\frac{\text{exp}(H_kW^HX^I)}{\sum_k^K\text{exp}(H_kW^HX^I)}\
&amp;U^H=\sum_k^K \alpha_k^HH_k
\end{aligned}
$$</p>
<h1 id="模型试验" tabindex="-1"><a class="header-anchor" href="#模型试验" aria-hidden="true">#</a> 模型试验</h1>
<p>模型使用了两个数据集进行了实验，分别是阿里妈妈的广告数据集和阿里巴巴的电商推荐数据集。</p>
<p>对比模型有：YoutubeNet、Wide &amp; Deep、DIN 、DIN-RNN、DIEN。</p>
<p>评价指标是AUC。结果如图：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/datasets-metric.png" alt="datasets-metric"></p>
<p>其中，</p>
<p>DIN-RNN(这个和DIN很像，在原始的DIN中，用户的行为序列没有使用RNN进行处理，而DIN-RNN使用bi-LSTM对用户的历史行为序列进行处理)</p>
<p>对于DSIN，这里有分了三种情况，第一个是DSIN，不过将Bias Encoding变为Transformer里面的Positional Encoding，第二个是DSIN，使用bias encoding，但不添加session interest interacting layer and the corresponding activation unit。第三个就是前文介绍的DSIN框架。可以看到，最后一个在两个数据集上的AUC均为最大。</p>
<h1 id="进一步讨论" tabindex="-1"><a class="header-anchor" href="#进一步讨论" aria-hidden="true">#</a> 进一步讨论</h1>
<h2 id="effect-of-multiple-sessions" tabindex="-1"><a class="header-anchor" href="#effect-of-multiple-sessions" aria-hidden="true">#</a> Effect of Multiple Sessions</h2>
<p>从实验结果来看，DIN-RNN的效果差于DIN，而DSIN-BE的效果好于DSIN-BE-No-SIIL。两组的差别均是有没有使用序列建模。文章里提到，对于序列建模来说，如果用户的行为时十分跳跃的，同时是突然结束的，会使得用户的行为看上进去具有很大的噪声。这样就使得DIN-RNN的效果反而不如DIN，</p>
<p>但在DSIN中，我们对用户的行为序列按照会话进行了分组，由于以下两点原因，使得DSIN中使用序列建模效果反而更好：</p>
<p>1、每个session内部，用户的行为是同质的</p>
<p>2、不同的session之间，用户的session兴趣是呈现一种序列性的，适合序列建模</p>
<h2 id="effect-of-session-interest-interacting-layer" tabindex="-1"><a class="header-anchor" href="#effect-of-session-interest-interacting-layer" aria-hidden="true">#</a> Effect of Session Interest Interacting Layer</h2>
<p>DSIN-BE的效果好于DSIN-BE-No-SIIL，说明通过Effect of Session Interest Interacting Layer得到混合上下文信息的用户兴趣，可以进一步提升模型的效果。</p>
<h2 id="effect-of-bias-encoding" tabindex="-1"><a class="header-anchor" href="#effect-of-bias-encoding" aria-hidden="true">#</a> Effect of Bias Encoding</h2>
<p>DSIN-BE的效果好于DSIN-PE，说明对不同的session添加偏置项，效果还是十分不错的。</p>
<h2 id="visualization-of-self-attention-and-the-activation-unit" tabindex="-1"><a class="header-anchor" href="#visualization-of-self-attention-and-the-activation-unit" aria-hidden="true">#</a> Visualization of Self-attention and the Activation Unit</h2>
<p>这里论文展示了一下 Self-attention and the Activation Unit的效果，还是开篇的那个例子：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-session-interest-network/pic/visualize-attention-weights.png" alt="visualize-attention-weights"></p>
<p>可以看到self-attention和激活函数的权值的关系。</p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<ul>
<li>
<p>用户的行为序列包含多个历史session片段，其特点是：</p>
<p>1、在同一个session中，点击的内容是同质的</p>
<p>2、在不同片段中，点击的内通是不同的</p>
</li>
<li>
<p>基于这个特点，提出了Deep Session Interest Network (DSIN) ，具体做法是：</p>
<p>1、使用基于transformer和Bias-Encoding的自注意力机制来提取用户每个片段的兴趣</p>
<p>2、使用双向LSTM来捕获像下文序列兴趣的序列关系</p>
<p>3、使用激活单元（其实还是注意力机制），基于要预测的目标item来聚合用户不同session兴趣的表征</p>
</li>
<li>
<p>将来会使用知识图谱作为先验知识来解释用户的历史行为，以便更好的预测CTR</p>
</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.jianshu.com/p/82ccb10f9ede" target="_blank" rel="noopener noreferrer">推荐系统遇上深度学习(四十五)-探秘阿里之深度会话兴趣网络DSIN<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/71695849" target="_blank" rel="noopener noreferrer">阿里Deep Session Interest Network解读<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考了这两篇文章。</p>
<ul>
<li><a href="https://github.com/shenweichen/DSIN/blob/3aed7819e47f0463f12ab78cc2589cacf1081745/code/models/dsin.py#L28" target="_blank" rel="noopener noreferrer">shenweichen/<strong>DSIN</strong><ExternalLinkIcon/></a></li>
<li><a href="https://github.com/shenweichen/DeepCTR/blob/ce140ffcc1057e8fb57622ae1732c39df32bc11e/deepctr/layers/sequence.py" target="_blank" rel="noopener noreferrer">shenweichen/<strong>DSIN</strong><ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/harvey888/p/10211800.html" target="_blank" rel="noopener noreferrer">numpy和tensorflow中的广播机制<ExternalLinkIcon/></a></li>
</ul>
<p>Bias Encoding的具体TensorFlow代码实现利用了broadcast机制，如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>        self<span class="token punctuation">.</span>sess_bias_embedding <span class="token operator">=</span> self<span class="token punctuation">.</span>add_weight<span class="token punctuation">(</span><span class="token string">'sess_bias_embedding'</span><span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>sess_max_count<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                   initializer<span class="token operator">=</span>TruncatedNormal<span class="token punctuation">(</span>
                                                       mean<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span> stddev<span class="token operator">=</span><span class="token number">0.0001</span><span class="token punctuation">,</span> seed<span class="token operator">=</span>self<span class="token punctuation">.</span>seed<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>seq_bias_embedding <span class="token operator">=</span> self<span class="token punctuation">.</span>add_weight<span class="token punctuation">(</span><span class="token string">'seq_bias_embedding'</span><span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> seq_len_max<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                  initializer<span class="token operator">=</span>TruncatedNormal<span class="token punctuation">(</span>
                                                      mean<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span> stddev<span class="token operator">=</span><span class="token number">0.0001</span><span class="token punctuation">,</span> seed<span class="token operator">=</span>self<span class="token punctuation">.</span>seed<span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>item_bias_embedding <span class="token operator">=</span> self<span class="token punctuation">.</span>add_weight<span class="token punctuation">(</span><span class="token string">'item_bias_embedding'</span><span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> embed_size<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                   initializer<span class="token operator">=</span>TruncatedNormal<span class="token punctuation">(</span>
                                  mean<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span> stddev<span class="token operator">=</span><span class="token number">0.0001</span><span class="token punctuation">,</span> seed<span class="token operator">=</span>self<span class="token punctuation">.</span>seed<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ======</span>

    <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> inputs<span class="token punctuation">,</span> mask<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""
        :param concated_embeds_value: None * field_size * embedding_size
        :return: None*1
        """</span>
        transformer_out <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>sess_max_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
            transformer_out<span class="token punctuation">.</span>append<span class="token punctuation">(</span>
                inputs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>item_bias_embedding <span class="token operator">+</span> self<span class="token punctuation">.</span>seq_bias_embedding <span class="token operator">+</span> self<span class="token punctuation">.</span>sess_bias_embedding<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> transformer_out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


