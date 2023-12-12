<template><div><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1>
<ul>
<li><RouterLink to="/docs/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E5%89%8D%E8%A8%80">前言</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">什么是动态规划</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E5%8F%AF%E4%BB%A5%E8%A7%A3%E5%86%B3%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98">动态规划可以解决什么问题</a></li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E4%B8%AD%E7%9A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">强化学习中的动态规划</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%9A%84%E5%85%B6%E4%BB%96%E5%BA%94%E7%94%A8">动态规划的其他应用</a></li>
</ul>
</li>
<li><a href="#%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">策略评价</a>
<ul>
<li><a href="#%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7%E9%97%AE%E9%A2%98">策略评价问题</a></li>
<li><a href="#%E5%88%A9%E7%94%A8%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E7%9A%84%E8%BF%AD%E4%BB%A3%E5%BC%8F%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">利用贝尔曼期望方程的迭代式策略评价</a></li>
<li><a href="#%E5%90%8C%E6%AD%A5%E5%A4%87%E4%BB%BD%E4%B8%8B%E7%9A%84%E8%BF%AD%E4%BB%A3%E5%BC%8F%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7%E7%AE%97%E6%B3%95">同步备份下的迭代式策略评价算法</a></li>
<li><a href="#%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7%E4%BE%8B%E5%AD%90">策略评价例子</a></li>
</ul>
</li>
<li><a href="#%E7%AD%96%E7%95%A5%E6%8F%90%E5%8D%87">策略提升</a>
<ul>
<li><a href="#%E6%80%8E%E4%B9%88%E6%94%B9%E8%BF%9B%E7%AD%96%E7%95%A5%CF%80">怎么改进策略π</a></li>
<li><a href="#%E7%AD%96%E7%95%A5%E6%8F%90%E5%8D%87%E5%AE%9A%E7%90%86">策略提升定理</a></li>
</ul>
</li>
<li><a href="#%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">策略迭代</a>
<ul>
<li><a href="#%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3%E7%AE%97%E6%B3%95%EF%BC%88%E5%88%A9%E7%94%A8%E8%BF%AD%E4%BB%A3%E5%BC%8F%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7%EF%BC%89">策略迭代算法（利用迭代式策略评价）</a></li>
<li><a href="#%E8%BF%AD%E4%BB%A3%E7%AD%96%E7%95%A5%E7%9A%84%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%80%9D%E8%80%83">迭代策略的进一步思考</a></li>
<li><a href="#%E5%B9%BF%E4%B9%89%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">广义策略迭代</a></li>
</ul>
</li>
<li><a href="#%E5%80%BC%E8%BF%AD%E4%BB%A3">值迭代</a>
<ul>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E4%B8%AD%E7%9A%84%E6%9C%80%E4%BC%98%E6%80%A7%E5%8E%9F%E7%90%86">强化学习中的最优性原理</a></li>
<li><a href="#%E5%80%BC%E8%BF%AD%E4%BB%A3%E5%AE%9A%E4%B9%89">值迭代定义</a></li>
<li><a href="#%E5%80%BC%E8%BF%AD%E4%BB%A3%E7%AE%97%E6%B3%95">值迭代算法</a></li>
<li><a href="#%E5%80%BC%E8%BF%AD%E4%BB%A3%E4%B8%8E%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3%E7%9A%84%E5%AF%B9%E6%AF%94">值迭代与策略迭代的对比</a></li>
<li><a href="#%E5%90%8C%E6%AD%A5%E5%A4%87%E4%BB%BD%E4%B8%8B%E7%9A%84%E4%B8%89%E7%A7%8D%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93">同步备份下的三种算法总结</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E5%BC%95%E7%94%B3">动态规划引申</a>
<ul>
<li><a href="#%E5%BC%82%E6%AD%A5%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">异步动态规划</a>
<ul>
<li><a href="#%E5%B0%B1%E5%9C%B0%EF%BC%88In-Place%EF%BC%89%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">就地（In-Place）动态规划</a></li>
<li>[优先清理（Prioritised Sweeping）](#优先清理（Prioritised Sweeping）)</li>
<li><a href="#%E5%AE%9E%E6%97%B6%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">实时动态规划</a></li>
</ul>
</li>
<li><a href="#%E5%85%A8%E5%AE%BD%E5%A4%87%E4%BB%BD%E5%92%8C%E6%A0%B7%E6%9C%AC%E5%A4%87%E4%BB%BD">全宽备份和样本备份</a>
<ul>
<li><a href="#%E5%85%A8%E5%AE%BD%E5%A4%87%E4%BB%BD">全宽备份</a></li>
<li><a href="#%E6%A0%B7%E6%9C%AC%E5%A4%87%E4%BB%BD">样本备份</a></li>
</ul>
</li>
<li><a href="#%E5%8E%8B%E7%BC%A9%E6%98%A0%E5%B0%84">压缩映射</a></li>
</ul>
</li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/learning-map.png" alt="learning-map"></p>
<p>上一章我们介绍了强化学习的基本假设——马尔科夫决策过程 (Markov Decision Process)。本文将介绍模型相关的强化学习算法。</p>
<p>有的时候，我们完全知道问题背后的马尔科夫决策过程；有的时候，我们不知道问题背后的马尔科夫决策过程 (主要指我们不知奖励函数 (R_{s,a}) 和转移概率 (P_{s,a}^{s’}) 的全貌)。<strong>根据马尔科夫决策过程是否可知，强化学习可以分为两类: 模型相关 (Model-based) 和模型无关 (Model-free)</strong>。模型相关是我们知道整个马尔科夫决策过程。模型无关则是我们不知道马尔科夫决策过程，需要系统进行探索。今天我们先介绍比较简单的<strong>模型相关</strong>强化学习。</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<h2 id="什么是动态规划" tabindex="-1"><a class="header-anchor" href="#什么是动态规划" aria-hidden="true">#</a> 什么是动态规划</h2>
<ul>
<li>之前提到解决序列决策问题有两种手段——学习与规划</li>
<li>当有一个景区的环境模型时，可以用动态规划去解</li>
<li>编程算法中也有动态规划的概念，与其相似</li>
<li>总的来说，就是讲问题分解成子问题，通过解决子问题，来解决原问题
<ul>
<li><strong>动态</strong>：针对序列问题</li>
<li><strong>规划</strong>：优化，得到策略</li>
</ul>
</li>
<li><strong>贝尔曼方程</strong>是关键</li>
</ul>
<h2 id="动态规划可以解决什么问题" tabindex="-1"><a class="header-anchor" href="#动态规划可以解决什么问题" aria-hidden="true">#</a> 动态规划可以解决什么问题</h2>
<p>动态规划是一种解决问题的方法，什么样的问题能使用动态规划去解决呢？这样的问题具有以下两种性质：</p>
<ul>
<li>最优子结构
<ul>
<li>满足<strong>最优性原理</strong></li>
<li>最优的解可以被分解成子问题的最优解</li>
</ul>
</li>
<li>交叠式子问题
<ul>
<li>子问题能被多次重复</li>
<li>子问题的解要能被缓存并再利用</li>
</ul>
</li>
</ul>
<p>恰好MDPs就满足这两个特征：</p>
<ul>
<li>贝尔曼方程是递归的形式，把问题分解成子问题</li>
<li>值函数有效的存储了子问题的解，并能够再利用</li>
</ul>
<p>注：什么是最优性原理？即：多阶段决策过程的最优决策序列具有这样的性质：不论初始状态和初始决策如何，对于前面决策所造成的某一状态而言，其后各阶段的决策序列必须构成最优策略。</p>
<h2 id="强化学习中的动态规划" tabindex="-1"><a class="header-anchor" href="#强化学习中的动态规划" aria-hidden="true">#</a> 强化学习中的动态规划</h2>
<ul>
<li>
<p>使用动态规划解决强化学习问题时，要求知道MDPs的所有元素</p>
</li>
<li>
<p>针对<strong>评价</strong></p>
<ul>
<li>
<p>输入：MDP&lt;S,A,P,R,γ&gt;和策略π；</p>
<p>或者，MRP&lt;S,Pπ,Rπ,γ&gt;</p>
</li>
<li>
<p>输出：值函数vπ</p>
</li>
</ul>
</li>
<li>
<p>针对<strong>优化</strong></p>
<ul>
<li>输入：MDP&lt;S,A,P,R,γ&gt;</li>
<li>输出：最优值函数v和最优策略π</li>
</ul>
</li>
</ul>
<h2 id="动态规划的其他应用" tabindex="-1"><a class="header-anchor" href="#动态规划的其他应用" aria-hidden="true">#</a> 动态规划的其他应用</h2>
<p>动态规划不仅仅用来解决强化学习问题，是运筹学的一个分支。</p>
<ul>
<li>Richard Bellman在1957年出版作品《Dynamic Programming》</li>
<li>分类：线性动态规划，区域动态规划，树形动态规划，背包问题等</li>
<li>应用例子：最短路径问题，二分查找树，网络流优化问题等。</li>
</ul>
<h1 id="策略评价" tabindex="-1"><a class="header-anchor" href="#策略评价" aria-hidden="true">#</a> 策略评价</h1>
<h2 id="策略评价问题" tabindex="-1"><a class="header-anchor" href="#策略评价问题" aria-hidden="true">#</a> 策略评价问题</h2>
<p>问题：给定一个策略π，求对应的值函数vπ(s)或qπ(s,a)</p>
<p>解决方法：</p>
<ul>
<li>
<p>直接解：
$
v_{\pi}=(I-\gamma P^{\pi})^{-1}R^{\pi}
$</p>
<ul>
<li>可以直接求得精确解</li>
<li>时间复杂度O(n^3)</li>
</ul>
</li>
<li>
<p>迭代解：v1→v2→...→vπ</p>
<ul>
<li>利用贝尔曼期望方程求解</li>
<li>同样可以收敛到vπ</li>
</ul>
</li>
</ul>
<h2 id="利用贝尔曼期望方程的迭代式策略评价" tabindex="-1"><a class="header-anchor" href="#利用贝尔曼期望方程的迭代式策略评价" aria-hidden="true">#</a> 利用贝尔曼期望方程的迭代式策略评价</h2>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/v-q-v.png" alt="v-q-v"></p>
<p>贝尔曼期望方程，表明了我们能够<strong>通过后继状态 s‘ 更新s</strong>。
$$
v_{\pi}=\sum_{a\in A}\pi(a|s)\left(R(s,a)+\gamma\sum_{s'\in S}P^a_{ss'}v_{\pi}(s') \right)
$$
因此，可以得到如下的迭代式子
$$
\begin{aligned}
&amp;v_{k+1}=\sum_{a\in A}\pi(a|s)\left(R(s,a)+\gamma\sum_{s'\in S}P^a_{ss'}v_{k}(s') \right)\
&amp;v^{k+1}=R^{\pi}+\gamma P^{\pi}v^k
\end{aligned}
$$</p>
<h2 id="同步备份下的迭代式策略评价算法" tabindex="-1"><a class="header-anchor" href="#同步备份下的迭代式策略评价算法" aria-hidden="true">#</a> 同步备份下的迭代式策略评价算法</h2>
<p>四个关键字：</p>
<ul>
<li>备份（backup）：$v_{k+1}(s)$需要用到$v_k(s')$，用$v_k(s')$更新$v_{k+1}(s)$的过程称为备份。更新状态s的值函数称为备份状态s。<strong>备份图</strong></li>
<li>同步（synchronous）：每次更新都要更新完所有的状态</li>
<li>策略评价</li>
<li>迭代式</li>
</ul>
<p><strong>同步备份下的迭代式策略评价算法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1: for k = 1,2,...  do
2:		for 所有的状态s∈S  do
3:			所有迭代式更新值函数v_{k+1}(s)
4:		end for 
5: end for
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：异步的版本后面会讲</p>
<h2 id="策略评价例子" tabindex="-1"><a class="header-anchor" href="#策略评价例子" aria-hidden="true">#</a> 策略评价例子</h2>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/evaluation-strategy-example1-1.png" alt="evaluation-strategy-example1-1"></p>
<ul>
<li>
<p>假设γ=1</p>
</li>
<li>
<p>14个普通状态，2个终止状态</p>
</li>
<li>
<p>走出边界的动作会导致状态不变</p>
</li>
<li>
<p>在走到终止状态前，任何动作都会导致-1的奖励</p>
</li>
<li>
<p>给定一随机策略
$
\pi(a|s)=0.25, \ \forall s,a
$
<img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/evaluation-strategy-example1-2.png" alt="evaluation-strategy-example1-2"></p>
</li>
</ul>
<p>通过贝尔曼方程验算上图第[0,1]个格子位置的值函数。
$$
\begin{aligned}
&amp;-1.0=-1+\frac{1}{4}\times 0+\frac{1}{4}\times 0+\frac{1}{4}\times 0+\frac{1}{4}\times 0\
&amp;-1.7=-1+\frac{1}{4}\times (-1)+\frac{1}{4}\times  (-1)+\frac{1}{4}\times  (-1)+\frac{1}{4}\times 0\
&amp;-1.7=-1+\frac{1}{4}\times (-1)+\frac{1}{4}\times  (-1)+\frac{1}{4}\times  (-1)+\frac{1}{4}\times (-1)\
\end{aligned}
$$
<img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/evaluation-strategy-example1-3.png" alt="evaluation-strategy-example1-3"></p>
<p>我们可以验证k=∞时，迭代收敛了
$$
\begin{aligned}
&amp;-14=-1+\frac{1}{4}\times 0+\frac{1}{4}\times (-18)+\frac{1}{4}\times (-20)+\frac{1}{4}\times (-14)\
&amp;-18=-1+\frac{1}{4}\times (-14)+\frac{1}{4}\times  (-14)+\frac{1}{4}\times  (-20)+\frac{1}{4}\times (-20)\
&amp;-20=-1+\frac{1}{4}\times (-18)+\frac{1}{4}\times  (-18)+\frac{1}{4}\times  (-20)+\frac{1}{4}\times (-20)\
&amp;-22=-1+\frac{1}{4}\times (-22)+\frac{1}{4}\times  (-22)+\frac{1}{4}\times  (-20)+\frac{1}{4}\times (-20)\
\end{aligned}
$$</p>
<h1 id="策略提升" tabindex="-1"><a class="header-anchor" href="#策略提升" aria-hidden="true">#</a> 策略提升</h1>
<h2 id="怎么改进策略π" tabindex="-1"><a class="header-anchor" href="#怎么改进策略π" aria-hidden="true">#</a> 怎么改进策略π</h2>
<ul>
<li>
<p>给定一个策略π</p>
<ul>
<li>
<p><strong>评价</strong>策略π
$
v_{\pi}=\mathbb{E}<em>{\pi}[R</em>{t+1}+\gamma R_{t+2}+...|S_t=s]
$</p>
</li>
<li>
<p>在求得vπ之后，根据贪婪的动作<strong>改进</strong>策略
$
\pi '=\text{greedy}(v_{\pi})\Leftrightarrow a'=\text{arg }\mathop{\text{max}}<em>a\ q</em>{\pi}(s,a)
$</p>
</li>
</ul>
</li>
<li>
<p>可以证明π’≥π，即
$
v_{\pi'}(s)\geq v_{\pi}(s),\ \forall s
$</p>
</li>
<li>
<p>使得更新后的策略不差于之前的策略的过程称之为<strong>策略提升</strong></p>
</li>
<li>
<p>贪婪动作只是策略提升的一种方式</p>
</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/random-policy-to-optical-policy.png" alt="random-policy-to-optical-policy"></p>
<ul>
<li>通过策略评价，和贪婪动作，策略从随机策略变成了最优策略π*</li>
<li>上述的策略比较幸运，策略提升一次就达到了最优</li>
<li>一般情况下，可能需要多次迭代（策略评价/策略提升）才能到达最优策略</li>
</ul>
<h2 id="策略提升定理" tabindex="-1"><a class="header-anchor" href="#策略提升定理" aria-hidden="true">#</a> 策略提升定理</h2>
<p><strong>策略提升定理：</strong></p>
<p>对于两个确定性策略 π‘ 和π，如果满足
$$
q_{\pi}(s,\pi'(s))\geq v_{\pi}(s)
$$
，那么我们可以得到
$$
v_{\pi'}\geq v_{\pi}(s)
$$
贪婪动作得到的策略是上述的特殊形式：
$$
q_{\pi}(s,\pi_{\text{贪婪}})\geq q_{\pi}(s,\pi'),\ \forall \pi'
$$
证明：</p>
<p>$$
\begin{aligned}
v_{\pi}(s)&amp;\leq q_{\pi}(s,\pi'(s))\
&amp;=\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma v_{\pi}(S_{t+1})|S_t=s]\
&amp;\leq\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma q_{\pi}(S_{t+1},\pi'(S_{t+1}))|S_t=s]\
&amp;=\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma \mathbb{E}<em>{\pi'}[R</em>{t+2}+\gamma v_{\pi}(S_{t+2})]|S_t=s]\
&amp;=\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma R_{t+2}+\gamma^2 v_{\pi}(S_{t+2})|S_t=s]\
&amp;\leq\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+\gamma^3 v_{\pi}(S_{t+3})|S_t=s]\
&amp;\vdots\
&amp;\leq\mathbb{E}<em>{\pi'}[R</em>{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+\gamma^3 R_{t+4}+...|S_t=s]\
&amp;=v_{\pi'}(s)\
\end{aligned}
$$</p>
<h1 id="策略迭代" tabindex="-1"><a class="header-anchor" href="#策略迭代" aria-hidden="true">#</a> 策略迭代</h1>
<p>通过不断地交替运行策略评价和策略提升，使策略收敛到最优的策略的过程即为<strong>策略迭代</strong></p>
<ul>
<li><strong>策略评价</strong>：求vπ。使用方法：迭代式策略评价</li>
<li><strong>策略提升</strong>：提升策略π‘≥π。使用方法：贪婪策略提升</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/policy-iteration.png" alt="policy-iteration"></p>
<p>收敛证明：</p>
<ul>
<li>
<p>提升停止时，
$
q_{\pi}(s,\pi'(s))=\mathop{\text{max}}<em>{a\in A}q</em>{\pi}(s,a)=q_{\pi}(s,\pi(s))=v_{\pi}(s)
$</p>
</li>
<li>
<p>此时满足了贝尔曼方程
$
v_{\pi}(s)=\mathop{\text{max}}<em>{a\in A}q</em>{\pi}(s,a)
$</p>
</li>
<li>
<p>此时，
$
v_{\pi}(s)=v_*(s),\ \forall s\in S
$</p>
</li>
<li>
<p>此时，π是一个最优策略</p>
</li>
</ul>
<h2 id="策略迭代算法-利用迭代式策略评价" tabindex="-1"><a class="header-anchor" href="#策略迭代算法-利用迭代式策略评价" aria-hidden="true">#</a> 策略迭代算法（利用迭代式策略评价）</h2>
<p>算法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1: 随机初始化V(s)和π(s)
2: repeat
3:     对于当前策略π，使用迭代式策略评价的算法估计vπ(s)得到V(s)
4:     使用贪婪策略提升得到π'(s)
5: until 策略保持不变π'(s)=π(s), ∀s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：这里使用大写的V(s)函数，它和小写的区别在于小写的v(s)表示真实值，而大写的表示估计值</p>
<h2 id="迭代策略的进一步思考" tabindex="-1"><a class="header-anchor" href="#迭代策略的进一步思考" aria-hidden="true">#</a> 迭代策略的进一步思考</h2>
<ul>
<li>策略迭代分为两个步骤——策略评价和策略提升</li>
<li>一般策略评价需要迭代式求解。因此这里存在两个循环</li>
<li>策略评价一定要收敛到vπ，才能进行策略提升吗？</li>
<li>我们是不是可以引入提前停止的规则？
<ul>
<li>例如：值函数更新的Δ足够小则停止</li>
<li>例如：限定迭代式策略评价只迭代k次</li>
<li>策略评价只爹带一次，就策略提升？（k=1）这就等同于<strong>值迭代</strong>（马上讲到）算法了</li>
</ul>
</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/iteration-strategy.png" alt="iteration-strategy"></p>
<h2 id="广义策略迭代" tabindex="-1"><a class="header-anchor" href="#广义策略迭代" aria-hidden="true">#</a> 广义策略迭代</h2>
<p>之前的策略迭代制定了策略评价（迭代式）和策略提升（贪婪）的方法</p>
<ul>
<li>广义策略迭代（Generalised Policy Iteration， GPI）不限定两者的方法。</li>
<li>广义策略迭代（Generalised Policy Iteration GPI）不限定两者的方法，它包含
<ul>
<li>策略评价：估计vπ。<strong>任何</strong>策略评价方法均可</li>
<li>策略提升：提升策略π’≥π。<strong>任何</strong>策略提升算法均可</li>
</ul>
</li>
<li>几乎所有的强化学习算法都可以用GPI（广义策略迭代）来描述</li>
<li>值函数只有在符合当前策略的情况下才稳定</li>
<li>策略只有在当前值函数下是贪婪的才稳定</li>
<li>因此稳态下，两者分别收敛到最优的v*(s)，π*(s)</li>
</ul>
<h1 id="值迭代" tabindex="-1"><a class="header-anchor" href="#值迭代" aria-hidden="true">#</a> 值迭代</h1>
<h2 id="强化学习中的最优性原理" tabindex="-1"><a class="header-anchor" href="#强化学习中的最优性原理" aria-hidden="true">#</a> 强化学习中的最优性原理</h2>
<p>任何最优的策略都能被分解成两部分</p>
<ul>
<li>最优的初始动作A*</li>
<li>从后继状态S‘开始沿着最优策略继续进行</li>
</ul>
<p><strong>强化学习中的最优性原理</strong></p>
<p>一个策略π(a|s)能够实现从s开始的最优值函数，vπ(s)=v*(s)，当且仅当</p>
<ul>
<li>对于任何从状态s开始的后继状态s'</li>
<li>π能实现从状态s’开始的最优值函数vπ(s')=v*(s')</li>
</ul>
<h2 id="值迭代定义" tabindex="-1"><a class="header-anchor" href="#值迭代定义" aria-hidden="true">#</a> 值迭代定义</h2>
<ul>
<li>
<p>根据最优性原理，只要知道v*(s')，即可以知道v*(s)</p>
</li>
<li>
<p>我们只需要选择一步动作即可
$
v_<em>(s)\leftarrow\mathop{\text{max}}<em>{a\in A}\left[R(s,a)+\gamma\sum</em>{s'\in S}P_{ss'}^av_</em>(s')\right]
$</p>
</li>
<li>
<p>上式中[.]内的部分表示进行了一步<strong>迭代式策略评价</strong>，max操作符表示进行了一次<strong>策略提升</strong></p>
</li>
<li>
<p><strong>值迭代</strong>指的是利用上面的迭代式更新</p>
</li>
<li>
<p>相当于从最后的奖励函数出发，递归地求解之前的状态的值函数</p>
</li>
</ul>
<p><strong>例子—最短路径</strong></p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/shortest-road.png" alt="shortest-road"></p>
<h2 id="值迭代算法" tabindex="-1"><a class="header-anchor" href="#值迭代算法" aria-hidden="true">#</a> 值迭代算法</h2>
<ul>
<li>值迭代算法的额两种理解方式：
<ul>
<li>策略迭代中，在策略评价阶段，只迭代一步</li>
<li>利用贝尔曼最优方程进行迭代</li>
</ul>
</li>
<li>问题仍然为找到最优的策略π</li>
<li>但是在更新的过程中并没有显式的策略</li>
</ul>
<p><strong>算法 同步备份下的值迭代算法：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1: for k = 1,2,... do
2:     for 所有的状态 s∈S do
3:         通过vk(s')更新v_{k+1}(s)
4:     end for
5: end for
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>与“同步备份下的迭代式策略算法”类似，但是有两点区别
<ul>
<li>更新的公式不同</li>
<li>v_k(s)的意义不同</li>
</ul>
</li>
</ul>
<h2 id="值迭代与策略迭代的对比" tabindex="-1"><a class="header-anchor" href="#值迭代与策略迭代的对比" aria-hidden="true">#</a> 值迭代与策略迭代的对比</h2>
<ul>
<li>值迭代
<ul>
<li>v1 → v2 → v3 → ... → v*</li>
<li>没有显式的策略</li>
<li>迭代过程中的值函数可能不对应任何策略</li>
<li>效率较高</li>
<li>贝尔曼最优方程</li>
</ul>
</li>
<li>策略迭代
<ul>
<li>π1 → v1 → π2 → v2 → π3 → v3 → ... → π* → v*</li>
<li>有显式的策略</li>
<li>迭代过程中的值函数对应了某个具体的策略</li>
<li>效率较低</li>
<li>贝尔曼方程+贪婪策略提升</li>
</ul>
</li>
</ul>
<h2 id="同步备份下的三种算法总结" tabindex="-1"><a class="header-anchor" href="#同步备份下的三种算法总结" aria-hidden="true">#</a> 同步备份下的三种算法总结</h2>
<table>
<thead>
<tr>
<th style="text-align:center">问题</th>
<th style="text-align:center">贝尔曼方程</th>
<th style="text-align:center">算法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">评价</td>
<td style="text-align:center">贝尔曼期望方程</td>
<td style="text-align:center">迭代式策略评价</td>
</tr>
<tr>
<td style="text-align:center">优化</td>
<td style="text-align:center">贝尔曼期望方程+贪婪策略提升</td>
<td style="text-align:center">策略迭代</td>
</tr>
<tr>
<td style="text-align:center">优化</td>
<td style="text-align:center">贝尔曼最优方程</td>
<td style="text-align:center">值迭代</td>
</tr>
</tbody>
</table>
<ul>
<li>算法都是基于状态值函数的（V函数）</li>
<li>如果一共有动作m个，状态n个，每次迭代的复杂度为O(mn^2)</li>
<li>上述算法也可以拓展到状态动作值函数（Q函数）</li>
<li>运用到Q函数时，每次迭代的复杂度为O(m^2n^2)</li>
</ul>
<h1 id="动态规划引申" tabindex="-1"><a class="header-anchor" href="#动态规划引申" aria-hidden="true">#</a> 动态规划引申</h1>
<h2 id="异步动态规划" tabindex="-1"><a class="header-anchor" href="#异步动态规划" aria-hidden="true">#</a> 异步动态规划</h2>
<ul>
<li>之前的动态规划方法都是用了同步规划</li>
<li>也就是说，每次迭代都会同时保存所有状态的值函数</li>
<li>异步动态规划以某种顺序单独考虑每一个状态</li>
<li>能够大大减少计算量</li>
<li>只要所有的状态都能被持续的选择到，收敛性能够保证</li>
<li>常用的三种形式：
<ul>
<li>就地动态规划</li>
<li>优先清理</li>
<li>实时动态规划</li>
</ul>
</li>
</ul>
<h3 id="就地-in-place-动态规划" tabindex="-1"><a class="header-anchor" href="#就地-in-place-动态规划" aria-hidden="true">#</a> 就地（In-Place）动态规划</h3>
<ul>
<li>
<p>同步值迭代存储了值函数的两个版本</p>
<p>对于每一个s∈S
$
\begin{aligned}
&amp;v_{new}(s)\leftarrow\mathop{\text{max}}<em>{a\in A}\left(R(s,a)+\gamma\sum</em>{s'\in S}P_{ss'}^av_{old}(s')\right)\
&amp;v_{old}\leftarrow v_{new}
\end{aligned}
$</p>
</li>
<li>
<p>就地动态规划仅仅存储一个副本</p>
<p>对于每一个s∈S
$
v(s)\leftarrow \mathop{\text{max}}<em>{a\in A}\left(R(s,a)+\gamma\sum</em>{s'\in S}P_{ss'}^av(s')\right)
$
注：可以看出就地动态规划，每一次的更新与值遍历的顺序有关系。</p>
</li>
</ul>
<h3 id="优先清理-prioritised-sweeping" tabindex="-1"><a class="header-anchor" href="#优先清理-prioritised-sweeping" aria-hidden="true">#</a> 优先清理（Prioritised Sweeping）</h3>
<ul>
<li>
<p>使用贝尔曼误差的大小来指导状态的选择
$
\left | \mathop{\text{max}}<em>{a\in A}\left(R(s,a)+\gamma\sum</em>{s'\in S}P_{ss'}^av(s')\right)  - v(s) \right |
$</p>
</li>
<li>
<p>只备份当前贝尔曼误差最大的状态</p>
</li>
<li>
<p>每次备份完之后，更新受到影响的状态的贝尔曼误差</p>
</li>
<li>
<p>受到影响的状态分两类：</p>
<ul>
<li>1，更新的状态作为s</li>
<li>2，更新的状态作为s‘</li>
</ul>
</li>
<li>
<p>第一种情况，贝尔曼误差变为0；第二种情况，要求知道逆运动学（前驱状态）</p>
</li>
<li>
<p>在编程上，可以通过维护一个优先级队列来完成</p>
</li>
<li>
<p>可以保证每一个状态都能被遍历，因此能收敛</p>
</li>
</ul>
<h3 id="实时动态规划" tabindex="-1"><a class="header-anchor" href="#实时动态规划" aria-hidden="true">#</a> 实时动态规划</h3>
<ul>
<li>
<p>之前的动态的规划考虑的是状态粒度读的操作</p>
</li>
<li>
<p>实时动态规划考虑了时间粒度的操作</p>
</li>
<li>
<p>仅仅和智能体相关的状态会被备份</p>
</li>
<li>
<p>用智能体的经验去指导状态的选择</p>
</li>
<li>
<p>在每一个时间步t上，智能体与环境交互了St,At,R_{t-1}</p>
</li>
<li>
<p>备份状态St
$
v(S_t)\leftarrow \mathop{\text{max}}<em>{a\in A}\left(R(S_t,a)+\gamma\sum</em>{s'\in S}P_{S_ts'}^av(s')\right)
$</p>
</li>
<li>
<p>并不能保证每一个状态被遍历，需要结合一定的探索方法</p>
</li>
</ul>
<h2 id="全宽备份和样本备份" tabindex="-1"><a class="header-anchor" href="#全宽备份和样本备份" aria-hidden="true">#</a> 全宽备份和样本备份</h2>
<h3 id="全宽备份" tabindex="-1"><a class="header-anchor" href="#全宽备份" aria-hidden="true">#</a> 全宽备份</h3>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/full-width-backup.png" alt="full-width-backup"></p>
<ul>
<li>动态规划用的是全宽备份</li>
<li><strong>全宽备份</strong>表示对每一次备份都要考虑到每一个后继状态以及每一个动作</li>
<li>要求知道奖励函数R和状态转移函数P</li>
<li>当状态数量较少（数百万）时，动态规划很有效</li>
<li>当状态数量太多（维度灾难）时，即使是每一次备份都会需要很久的时间</li>
</ul>
<h3 id="样本备份" tabindex="-1"><a class="header-anchor" href="#样本备份" aria-hidden="true">#</a> 样本备份</h3>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/dynamic-programming/pic/sample-backup.png" alt="sample-backup"></p>
<ul>
<li>强化学习中主要使用样本备份——后面的章节</li>
<li>直接通过采样得到转移记录（transition）&lt;S,A,R,S'&gt;</li>
<li>通过采样代替总体</li>
<li>优点：
<ul>
<li>无模型（model-free）：无需要知道R和P</li>
<li>通过采样打破了维度灾难</li>
<li>备份的时间复杂度固定，和状态的数量无关</li>
</ul>
</li>
</ul>
<h2 id="压缩映射" tabindex="-1"><a class="header-anchor" href="#压缩映射" aria-hidden="true">#</a> 压缩映射</h2>
<p>证明了以下的问题</p>
<ul>
<li>值迭代收敛到v*？</li>
<li>迭代式策略评价收敛到vπ？</li>
<li>策略跌倒收敛到v*？</li>
<li>解是唯一的吗？</li>
<li>算法收敛速度？</li>
</ul>
<p>证明过程：</p>
<p><a href="https://zhuanlan.zhihu.com/p/39279611" target="_blank" rel="noopener noreferrer">如何证明迭代式策略评价、值迭代和策略迭代的收敛性？<ExternalLinkIcon/></a></p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第三章：动态规划<ExternalLinkIcon/></a></li>
</ul>
<p>本章内容是该课程这节课的笔记。</p>
<ul>
<li><a href="https://www.zybuluo.com/Team/note/1125995" target="_blank" rel="noopener noreferrer">强化学习通俗理解系列三：动态规划求解最优策略<ExternalLinkIcon/></a></li>
</ul>
<p>还可以参考这篇文章，是David Sliver 强化学习公开课（b站有视频）的ppt的笔记。</p>
<ul>
<li><a href="http://www.algorithmdog.com/%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E7%B3%BB%E5%88%97%E4%B9%8B%E4%BA%8C-%E6%A8%A1%E5%9E%8B%E7%9B%B8%E5%85%B3%E7%9A%84%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0" target="_blank" rel="noopener noreferrer">强化学习系列之二:模型相关的强化学习<ExternalLinkIcon/></a></li>
</ul>
<p>这个文章也可以看下。有的时候，我们完全知道问题背后的马尔科夫决策过程；有的时候，我们不知道问题背后的马尔科夫决策过程 (主要指我们不知奖励函数 (R_{s,a}) 和转移概率 (P_{s,a}^{s’}) 的全貌)。根据马尔科夫决策过程是否可知，强化学习可以分为两类: 模型相关 (Model-based) 和模型无关 (Model-free)。模型相关是我们知道整个马尔科夫决策过程。模型无关则是我们不知道马尔科夫决策过程，需要系统进行探索。今天我们先介绍比较简单的模型相关强化学习。</p>
</div></template>


