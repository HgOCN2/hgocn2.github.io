<template><div><h1 id="ppo近端策略优化" tabindex="-1"><a class="header-anchor" href="#ppo近端策略优化" aria-hidden="true">#</a> PPO近端策略优化</h1>
<ul>
<li><RouterLink to="/docs/reinforcement-learning/reinforcement-learning/paper/paper.html">返回上层目录</RouterLink></li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/paper/ppo/pic/paper.png" alt="paper"></p>
<p>PDF: <a href="https://arxiv.org/abs/1707.06347" target="_blank" rel="noopener noreferrer">Proximal Policy Optimization Algorithms<ExternalLinkIcon/></a></p>
<p>OpenAI Blog: <a href="https://openai.com/blog/openai-baselines-ppo/" target="_blank" rel="noopener noreferrer">Proximal Policy Optimization<ExternalLinkIcon/></a>和<a href="https://spinningup.openai.com/en/latest/algorithms/ppo.html#id3" target="_blank" rel="noopener noreferrer">Proximal Policy Optimization<ExternalLinkIcon/></a></p>
<p>GitHub: <a href="https://github.com/openai/baselines/tree/master/baselines/ppo2" target="_blank" rel="noopener noreferrer">openai/baselines/ppo2<ExternalLinkIcon/></a></p>
<h1 id="连续输出值的方差的选择" tabindex="-1"><a class="header-anchor" href="#连续输出值的方差的选择" aria-hidden="true">#</a> 连续输出值的方差的选择</h1>
<p>PPO 连续动作的sigma，其实在不同版本的实现里一共有三种</p>
<ul>
<li>fixed：固定 sigma，常用于一些特殊控制任务，如果对环境的 sigma 有足够的先验知识可以这样做</li>
<li>independent：即为一个可优化的网络参数，但是和state无关，是一个独立参数。这是一般 PPO 常用的情形</li>
<li>state conditioned：由 state 输入通过一定的网络层生成，这种情况在 SAC 中常用，PPO中较少见。不过有 paper 在mujoco环境上做过对比实验，至少在这个控制环境上差别不大</li>
</ul>
<p>三种类型的代码对比可以参考我们这里的代码 https://github.com/opendilab/DI-engine/blob/main/ding/model/common/head.py#L965</p>
<p>中文版的注释详解可以看这个 https://opendilab.github.io/PPOxFamily/continuous_zh.html</p>
<h2 id="openai的选择" tabindex="-1"><a class="header-anchor" href="#openai的选择" aria-hidden="true">#</a> OpenAI的选择</h2>
<p><a href="https://spinningup.openai.com/en/latest/spinningup/rl_intro.html#id2" target="_blank" rel="noopener noreferrer">OpenAI Spinning Up Part 1: Key Concepts in RL<ExternalLinkIcon/></a></p>
<blockquote>
<p>A diagonal Gaussian policy always has a neural network that maps from observations to mean actions,$\mu_{\theta}(s)$. There are two different ways that the covariance matrix is typically represented.</p>
<p><strong>The first way:</strong> There is a single vector of log standard deviations,$log \sigma$, which is <strong>not</strong> a function of state: the $log \sigma$ are standalone parameters. (You Should Know: our implementations of VPG, TRPO, and PPO do it this way.)</p>
<p><strong>The second way:</strong> There is a neural network that maps from states to log standard deviations,$log \sigma_{\theta}(s)$. It may optionally share some layers with the mean network.</p>
</blockquote>
<h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h2>
<p>刚去openailab仓库上翻了翻 https://github.com/opendilab/DI-engine/blob/0a25e46e29638a4be04654c7fd132ebdff4a556a/ding/model/common/head.py#L965
他们这里连续动作用的ReparameterizationHead就有</p>
<p>可以看openailab的代码  写的挺好的 固定，独立参数，模型推理三种方法都可以选择  莫烦的没有讲的很全面，感觉比较适合入门。</p>
<p>对于独立值：我是这么理解的，当选择的动作在这个分布上的回报高于期望，那就增大这个动作的选择概率，对应的均值向这个动作移动，方差降低。如果低于期望，那方差就调大，增加选择其他动作的概率。</p>
<p>一般选独立参数，比较好训练</p>
<p>其他的参考代码：</p>
<p>independent:</p>
<p>https://github.com/tensorlayer/tensorlayer/blob/master/examples/reinforcement_learning/tutorial_DPPO.py</p>
<p>固定值/线性衰减：</p>
<p>https://github.com/nikhilbarhate99/PPO-PyTorch/blob/master/train.py</p>
<p>基于state训练：</p>
<p>莫凡python：</p>
<p>https://github.com/MorvanZhou/Reinforcement-learning-with-tensorflow/blob/master/contents/12_Proximal_Policy_Optimization/DPPO.py</p>
<p>其他：</p>
<p>我的PPO用的是之前小助手分享的，37个PPO实施细节里的代码，你说的adv_norm，max_grad_norm也是在配置里的</p>
<p>https://github.com/vwxyzjn/ppo-implementation-details</p>
<p>https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/</p>
<p>正态分布：
$$
f(x)=\frac{1}{\sqrt{2\pi}\sigma}\text{exp}\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$
<img src="@source/docs/reinforcement-learning/reinforcement-learning/paper/ppo/pic/normal-dist.png" alt="normal-dist"></p>
<p>代码(参考资料：<a href="https://blog.csdn.net/qq_44444503/article/details/124377863" target="_blank" rel="noopener noreferrer">Python绘制高斯分布（正态分布）图像<ExternalLinkIcon/></a>)：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> math
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt


<span class="token keyword">def</span> <span class="token function">gd</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> mu<span class="token operator">=</span><span class="token number">0.</span><span class="token punctuation">,</span> sigma<span class="token operator">=</span><span class="token number">1.</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># sigma是标准差</span>
    left <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>pi<span class="token punctuation">)</span> <span class="token operator">*</span> sigma<span class="token punctuation">)</span>
    right <span class="token operator">=</span> np<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>x <span class="token operator">-</span> mu<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> np<span class="token punctuation">.</span>square<span class="token punctuation">(</span>sigma<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> left <span class="token operator">*</span> right


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token comment"># 自变量</span>
    x <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0.05</span><span class="token punctuation">)</span>
    <span class="token comment"># 因变量（不同均值或方差）</span>
    y_1 <span class="token operator">=</span> gd<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.01</span><span class="token punctuation">)</span>
    y_2 <span class="token operator">=</span> gd<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span>
    y_3 <span class="token operator">=</span> gd<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    y_4 <span class="token operator">=</span> gd<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    y_5 <span class="token operator">=</span> gd<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span>

    <span class="token comment"># 绘图</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y_1<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">'green'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y_2<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">'blue'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y_3<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">'thistle'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y_4<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">'red'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y_5<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">'fuchsia'</span><span class="token punctuation">)</span>
    <span class="token comment"># 设置坐标系</span>
    plt<span class="token punctuation">.</span>xlim<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylim<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>gca<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>spines<span class="token punctuation">[</span><span class="token string">'right'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span><span class="token string">'none'</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>spines<span class="token punctuation">[</span><span class="token string">'top'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_color<span class="token punctuation">(</span><span class="token string">'none'</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>xaxis<span class="token punctuation">.</span>set_ticks_position<span class="token punctuation">(</span><span class="token string">'bottom'</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>spines<span class="token punctuation">[</span><span class="token string">'bottom'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_position<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>yaxis<span class="token punctuation">.</span>set_ticks_position<span class="token punctuation">(</span><span class="token string">'left'</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">.</span>spines<span class="token punctuation">[</span><span class="token string">'left'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>set_position<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span>labels<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">'$\mu = 0, \sigma=0.01$'</span><span class="token punctuation">,</span>
        <span class="token string">'$\mu = 0, \sigma=0.1$'</span><span class="token punctuation">,</span>
        <span class="token string">'$\mu = 0, \sigma=0.5$'</span><span class="token punctuation">,</span>
        <span class="token string">'$\mu = 0, \sigma=1.0$'</span><span class="token punctuation">,</span>
        <span class="token string">'$\mu = 0, \sigma=2.0$'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="连续值action训练时要不要clip" tabindex="-1"><a class="header-anchor" href="#连续值action训练时要不要clip" aria-hidden="true">#</a> 连续值action训练时要不要clip</h1>
<p>请问ppo的动作a，收集好发回给模型进行训练时，这个动作a应该去掉clip限幅，还是要保留clip限幅？
p.s.这个动作a输给env.step(a)时肯定是要做限幅的，这个没啥说的。</p>
<p>训练时，不要clip，clip只放在环境里面做。否则你计算时的log prob很容易过大或过小。训练时就用最原始的从概率分布里采样出来的action</p>
<h2 id="adv-norm" tabindex="-1"><a class="header-anchor" href="#adv-norm" aria-hidden="true">#</a> adv norm</h2>
<p>adv norm需要考虑reward的数值范围，如果绝对值在0-100之内其实影响不大，如果绝对值大于这个范围，且reward波动的确实很明显（注意要和稀疏reward区分），那适合用adv norm</p>
<p>然后这种比较直接的 adv norm，应该batch越大统计量越准，所以在实现中，像dppo的话，应该是训练的多卡之间allreduce同步mean和std，然后再norm</p>
<p>出现nan有很多种原因，其中之一就是adv norm</p>
<p>如果数据多样性很差，一个batch里太相近，那么算出来的std就很接近于0，这样norm一除就炸了</p>
<p>mean和std计算用的样本肯定是越多越准，但因为rl本身数据分布就一直在变，所以可能有些场景里对最终性能影响不大，就跟你的实验结果一样。</p>
<p>你要想真正深究这个问题，应该要去可视化这两种设定下算出来的mean和std的变化情况，再分析这个变化对于智能体性能的影响，并在不同类型的环境上做对比看能不能找到普适结论</p>
<p>决策问题(环境)之间的差异性太大了，所以经验性结论经常变化，但是分析方法和手段掌握了之后，具体问题具体分析就好，没有什么玄学的</p>
<p>baseline这个地方只是说减去一项还是无偏估计，并没有说除上这样一个动态变化的std还是无偏估计</p>
<p>如果缩放的因子是整个训练期间都用一个固定值，那没问题，关键就是我们做adv norm是用动态统计量，这个就进入到很麻烦的领域了</p>
<h1 id="掩码-mask-是做什么用的" tabindex="-1"><a class="header-anchor" href="#掩码-mask-是做什么用的" aria-hidden="true">#</a> 掩码（mask）是做什么用的</h1>
<p>有没有一些这方面的强化学习科普资料？</p>
<p>Musk主要是针对一些动作和参数之间的关系，通过掩码可以建立这种关系，加速收敛。</p>
<p>mask部分一般有两类</p>
<ul>
<li>离散动作空间的 mask，用于去掉一些当前帧不可选的动作，对训练优化有一定加速作用。我们这次第二节课的作业题会涉及到。</li>
<li>混合动作空间的 mask，用于表达不同 action 部分之间的关系，例如某些动作类型对应特定的动作参数，可以参考这里的讲解例子，尤其是最后的 mask 使用部分 https://opendilab.github.io/PPOxFamily/hybrid_zh.html</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/550312933" target="_blank" rel="noopener noreferrer">游戏AI比赛番外篇2：为啥强化学习做游戏AI都喜欢用PPO算法？<ExternalLinkIcon/></a></p>
<p>必看，因为这篇文章直观介绍了损失函数。</p>
<p>（Generalized Advantage Estimation）训练最稳定，调参最简单，适合高维状态 High-dimensional state，但是环境不能有太多随机因数。GAE会根据经验轨迹 trajectory 生成优势函数估计值，然后让Critic去拟合这个值。在这样的调整下，在随机因素小的环境中，不需要太</p>
<p><a href="https://github.com/mengwanglalala/RL-algorithms" target="_blank" rel="noopener noreferrer">mengwanglalala/<strong>RL-algorithms</strong><ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_37395293/article/details/114254505" target="_blank" rel="noopener noreferrer">进阶篇---PPO代码逐行分析<ExternalLinkIcon/></a></p>
<p>A3C在每一次迭代中，都要采集T个samples(T远远小于回合长度)，计算T个n-step return，然后使用这T个数据更新评价网络：</p>
<p>PPO也使用了相同的思路，但是使用GAE实现</p>
<p>===</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/shengzimao/article/details/126493407" target="_blank" rel="noopener noreferrer">PPO算法经典论文阅读<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/jinzhuojun/article/details/80417179" target="_blank" rel="noopener noreferrer">深度增强学习PPO（Proximal Policy Optimization）算法源码走读<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.zhihu.com/question/417161289/answer/2207316616" target="_blank" rel="noopener noreferrer">PPO强化学习如何实现多维度的动作呢？<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>个人觉得用得比较多的是输出5个均值和方差，再从这5个分布中，采样5个值。</p>
<p>这里给你附上一个Pytorch实现PPO的代码，对多维连续空间进行了详细的实现，代码也比较简洁稳定：</p>
<p><a href="https://github.com/XinJingHao/PPO-Continuous-Pytorch" target="_blank" rel="noopener noreferrer">https://github.com/XinJingHao/PPO-Continuous-Pytorch<ExternalLinkIcon/></a></p>
<p>请问如果action是5维，并且每一维是0,1,2,3,4这样的离散的数，这种情况应该怎么处理呢？</p>
<p>也可以作为independent action （见Section V subsection A <a href="http://link.zhihu.com/?target=https%3A//arxiv.org/pdf/2105.13807.pdf" target="_blank" rel="noopener noreferrer">arxiv.org/pdf/2105.1380<ExternalLinkIcon/></a>），代码可见 <a href="http://link.zhihu.com/?target=https%3A//github.com/vwxyzjn/PPO-Implementation-Deep-Dive/blob/lstm-and-multidiscrete/ppo_multidiscrete.py" target="_blank" rel="noopener noreferrer">github.com/vwxyzjn/PPO-<ExternalLinkIcon/></a>。一般如果你的离散动作空间有很多维度，可能会有无效动作，这时候invalid action masking 很重要，见<a href="http://link.zhihu.com/?target=https%3A//arxiv.org/abs/2006.14171" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2006.1417<ExternalLinkIcon/></a>, 代码可见 <a href="http://link.zhihu.com/?target=https%3A//github.com/vwxyzjn/PPO-Implementation-Deep-Dive/blob/lstm-and-multidiscrete/ppo_multidiscrete_mask.py" target="_blank" rel="noopener noreferrer">github.com/vwxyzjn/PPO-Implementation-Deep-Dive<ExternalLinkIcon/></a>。</p>
<ul>
<li><a href="https://www.zhihu.com/question/63067895/answer/214180615" target="_blank" rel="noopener noreferrer">如何理解看待 OpenAI 公布PPO算法？ 莫凡<ExternalLinkIcon/></a></li>
</ul>
<p>我也实践了一下 Python 的简单 PPO 算法. 毕竟 OpenAI 开源的那个 <a href="https://link.zhihu.com/?target=https%3A//github.com/openai/baselines" target="_blank" rel="noopener noreferrer">baselines<ExternalLinkIcon/></a> 太复杂了, 看半天源码也看不懂. 所以下定决心自己写一个比他们的简单好多倍的代码. 自己写的教程在这里: <a href="https://link.zhihu.com/?target=https%3A//mofanpy.com/tutorials/machine-learning/reinforcement-learning/6-4-DPPO/" target="_blank" rel="noopener noreferrer">结合了 OpenAI 和 DeepMind 的 PPO<ExternalLinkIcon/></a>。额，前面这个地址打不开了，直接看这个：<a href="https://mofanpy.com/tutorials/machine-learning/reinforcement-learning/DPPO" target="_blank" rel="noopener noreferrer">Distributed Proximal Policy Optimization (DPPO)<ExternalLinkIcon/></a>，既可以看代码，也可以看环境源码。特别推荐。</p>
<p>简述一下自己写代码的感想. OpenAI 的 PPO 感觉是个串行的（要等所有并行的 Actor 搞完才更新模型）, DeepMind 的 DPPO 是并行的（不用等全部 worker）, 但是代码实践起来比较困难, 需要推送不同 worker 的 <a href="https://www.zhihu.com/search?q=gradient&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A214180615%7D" target="_blank" rel="noopener noreferrer">gradient<ExternalLinkIcon/></a>. 我取了 OpenAI 和 DeepMind 两者的精华. 用 OpenAI 中性能最好的 Policy 更新策略 (clipped surrogate) + DeepMind <a href="https://www.zhihu.com/search?q=parallel+training&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A214180615%7D" target="_blank" rel="noopener noreferrer">parallel training<ExternalLinkIcon/></a> (但不是推送 gradient, 只是推送 collected data). 让原本<a href="https://www.zhihu.com/search?q=%E5%8D%95%E7%BA%BF%E7%A8%8B&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A214180615%7D" target="_blank" rel="noopener noreferrer">单线程<ExternalLinkIcon/></a>的 PPO 速度飞起来了.</p>
<p>你确定你看过OpenAI PPO的原文，原文中算法就是有N个Actor并行训练的！</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/512327050" target="_blank" rel="noopener noreferrer">影响PPO算法性能的10个关键技巧（附PPO算法简洁Pytorch实现）<ExternalLinkIcon/></a></li>
</ul>
<p>具体代码见：<a href="https://github.com/Lizhi-sjtu/DRL-code-pytorch" target="_blank" rel="noopener noreferrer">https://github.com/Lizhi-sjtu/DRL-code-pytorch<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/48293363" target="_blank" rel="noopener noreferrer">强化学习笔记（五）--PPO<ExternalLinkIcon/></a></li>
</ul>
<p>2017年7月20日，OpenAI 刚刚通过自己的研究博客介绍了一种新的优化算法 Proximal Policy Optimization（近端策略优化，PPO）。据介绍，这种算法用在强化学习中时表现能达到甚至超过现有算法的顶尖水平，同时还更易于实现和调试。所以 OpenAI 已经把PPO作为自己强化学习研究中首选的算法。</p>
<p>之前 OpenAI 就详细介绍过 PPO的一个变种 （<a href="https://link.zhihu.com/?target=https%3A//channel9.msdn.com/Events/Neural-Information-Processing-Systems-Conference/Neural-Information-Processing-Systems-Conference-NIPS-2016/Deep-Reinforcement-Learning-Through-Policy-Optimization" target="_blank" rel="noopener noreferrer">NIPS 2016 论文视频：通过策略优化进行深度强化学习<ExternalLinkIcon/></a>），其中用一个自适应 Kullback–Leibler 惩罚项控制每次迭代中的策略变化程度。现在介绍的这种新变种则使用了一种其它算法中罕见的全新的目标函数：</p>
<p>PPO2：不用计算KL，同样可以控制θ与θ'之间差距。</p>
<p>说明：当A&gt;0，也就是a是好的，我们希望增加Pθ的概率，但是，Pθ不能弄得太大，太大也就会使与Pθ'差距大，导致效果不好。反之亦然。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/468828804" target="_blank" rel="noopener noreferrer">强化学习之PPO算法<ExternalLinkIcon/></a></li>
</ul>
<p>写的不错，参考了下面两个文章。</p>
<ul>
<li>
<p><a href="https://www.bilibili.com/video/BV1MW411w79n?p=2&amp;vd_source=147fb813418c7610c21b6a5618c85cb7" target="_blank" rel="noopener noreferrer">李宏毅深度强化学习(国语)课程(2018) ppo<ExternalLinkIcon/></a></p>
<p>还有对应的课件：<a href="https://speech.ee.ntu.edu.tw/~tlkagk/courses/MLDS_2018/Lecture/PPO%20(v3).pdf" target="_blank" rel="noopener noreferrer">李宏毅深度强化学习(国语)课程(2018) ppo 课件<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><a href="https://www.jianshu.com/p/9f113adc0c50" target="_blank" rel="noopener noreferrer">Proximal Policy Optimization(PPO)算法原理及实现！ 美团文哥的笔记<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><a href="https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/" target="_blank" rel="noopener noreferrer">The 37 Implementation Details of Proximal Policy Optimization<ExternalLinkIcon/></a></p>
<p>对应的中文翻译：<a href="https://blog.csdn.net/CharilePuth/article/details/125555567" target="_blank" rel="noopener noreferrer">优化PPO<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/128484325" target="_blank" rel="noopener noreferrer">【强化学习8】PPO<ExternalLinkIcon/></a></p>
<p>参考文献：</p>
<p>[1] TRPO: Schulman, John, et al. “Trust Region Policy Optimization.”<em>ArXiv Preprint ArXiv:1502.05477</em>, 2015.</p>
<p>[2] DPPO: Heess, Nicolas, et al. “Emergence of Locomotion Behaviours in Rich Environments.”<em>ArXiv Preprint ArXiv:1707.02286</em>, 2017.</p>
<p>[3] PPO: Schulman, John, et al. “Proximal Policy Optimization Algorithms.”<em>ArXiv Preprint ArXiv:1707.06347</em>, 2017.</p>
<p>[4] batchPPO: Hafner, D. , Davidson, J. , &amp; Vanhoucke, V. . (2017). Tensorflow agents: efficient batched reinforcement learning in tensorflow.</p>
<p>[5] Implementation Matters in Deep Policy Gradients: a Case Study on PPO and TRPO.</p>
<p>关于用bootstrap法估计advantage和state value函数的内容，可参见“【CS285第6讲】Actor-critic”。</p>
</div></template>


