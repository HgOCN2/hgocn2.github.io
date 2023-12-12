<template><div><h1 id="马尔科夫决策过程" tabindex="-1"><a class="header-anchor" href="#马尔科夫决策过程" aria-hidden="true">#</a> 马尔科夫决策过程</h1>
<ul>
<li><RouterLink to="/docs/engineering/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E5%86%B3%E7%AD%96%E8%BF%87%E7%A8%8B%E7%AE%80%E4%BB%8B">马尔科夫决策过程简介</a></li>
<li><a href="#%E7%AC%A6%E5%8F%B7%E7%BA%A6%E5%AE%9A">符号约定</a></li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E8%BF%87%E7%A8%8B">马尔科夫过程</a>
<ul>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E6%80%A7">马尔科夫性</a></li>
<li><a href="#%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BB%E7%9F%A9%E9%98%B5">状态转移矩阵</a></li>
<li><a href="#%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BB%E5%87%BD%E6%95%B0">状态转移函数</a></li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E8%BF%87%E7%A8%8B">马尔科夫过程</a></li>
<li><a href="#%E7%89%87%E6%AE%B5">片段</a></li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E9%93%BE%E7%9A%84%E4%BE%8B%E5%AD%90">马尔科夫链的例子</a></li>
</ul>
</li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E5%A5%96%E5%8A%B1%E8%BF%87%E7%A8%8B">马尔科夫奖励过程</a>
<ul>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E5%A5%96%E5%8A%B1%E8%BF%87%E7%A8%8B%E4%BE%8B%E5%AD%90">马尔科夫奖励过程例子</a></li>
<li><a href="#%E5%9B%9E%E6%8A%A5%E5%80%BC">回报值</a></li>
<li><a href="#%E5%86%8D%E8%81%8A%E7%89%87%E6%AE%B5">再聊片段</a></li>
<li><a href="#%E5%86%8D%E8%81%8A%E8%A1%B0%E5%87%8F%E5%80%BC">再聊衰减值</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0">值函数</a></li>
<li><a href="#%E4%BE%8B%E5%AD%90%EF%BC%9A%E5%9B%9E%E6%8A%A5%E5%80%BC%E5%92%8C%E5%80%BC%E5%87%BD%E6%95%B0">例子：回报值和值函数</a>
<ul>
<li><a href="#%E5%9B%9E%E6%8A%A5%E5%80%BC">回报值</a></li>
<li><a href="#%E9%92%88%E5%AF%B9%E4%BE%8B%E5%AD%90%E7%9A%84V%E5%87%BD%E6%95%B0%E5%80%BC">针对例子的V函数值</a></li>
</ul>
</li>
<li><a href="#MRPs%E4%B8%AD%E7%9A%84%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%96%B9%E7%A8%8B">MRPs中的贝尔曼方程</a>
<ul>
<li><a href="#%E9%92%88%E5%AF%B9%E4%BE%8B%E5%AD%90%E7%9A%84%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%96%B9%E7%A8%8B">针对例子的贝尔曼方程</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%96%B9%E7%A8%8B%E7%9A%84%E7%9F%A9%E9%98%B5%E5%BD%A2%E5%BC%8F">贝尔曼方程的矩阵形式</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E5%86%B3%E7%AD%96%E8%BF%87%E7%A8%8B">马尔科夫决策过程</a>
<ul>
<li><a href="#%E9%A9%AC%E5%B0%94%E7%A7%91%E5%A4%AB%E5%86%B3%E7%AD%96%E8%BF%87%E7%A8%8B%E7%9A%84%E5%AE%9A%E4%B9%89">马尔科夫决策过程的定义</a>
<ul>
<li><a href="#MDPs%E4%BE%8B%E5%AD%90">MDPs例子</a></li>
</ul>
</li>
<li><a href="#%E7%AD%96%E7%95%A5">策略</a></li>
<li><a href="#MDPs%E5%92%8CMRPs%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB">MDPs和MRPs之间的关系</a></li>
<li><a href="#MDPs%E4%B8%AD%E7%9A%84%E5%80%BC%E5%87%BD%E6%95%B0">MDPs中的值函数</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B">贝尔曼期望方程</a>
<ul>
<li><a href="#V%E5%87%BD%E6%95%B0%E4%B8%8EQ%E5%87%BD%E6%95%B0%E4%B9%8B%E9%97%B4%E7%9A%84%E7%9B%B8%E4%BA%92%E8%BD%AC%E5%8C%96">V函数与Q函数之间的相互转化</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E2%80%94V%E5%87%BD%E6%95%B0">贝尔曼期望方程—V函数</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E2%80%94Q%E5%87%BD%E6%95%B0">贝尔曼期望方程—Q函数</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E4%BE%8B%E5%AD%90">贝尔曼期望方程例子</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E7%9A%84%E7%9F%A9%E9%98%B5%E5%BD%A2%E5%BC%8F">贝尔曼期望方程的矩阵形式</a></li>
</ul>
</li>
<li><a href="#%E6%9C%80%E4%BC%98%E5%80%BC%E5%87%BD%E6%95%B0">最优值函数</a>
<ul>
<li><a href="#%E6%9C%80%E4%BC%98V%E5%87%BD%E6%95%B0">最优V函数</a></li>
<li><a href="#%E6%9C%80%E4%BC%98Q%E5%87%BD%E6%95%B0">最优Q函数</a></li>
</ul>
</li>
<li><a href="#%E6%9C%80%E4%BC%98%E7%AD%96%E7%95%A5">最优策略</a>
<ul>
<li><a href="#%E6%9C%80%E4%BC%98%E7%AD%96%E7%95%A5%E5%AE%9A%E7%90%86">最优策略定理</a></li>
<li><a href="#%E6%80%8E%E4%B9%88%E5%BE%97%E5%88%B0%E6%9C%80%E4%BC%98%E7%AD%96%E7%95%A5">怎么得到最优策略</a></li>
<li><a href="#%E6%9C%80%E4%BC%98%E7%AD%96%E7%95%A5%E4%BE%8B%E5%AD%90">最优策略例子</a></li>
</ul>
</li>
<li><a href="#v*%E4%B8%8Eq*%E7%9A%84%E7%9B%B8%E4%BA%92%E8%BD%AC%E5%8C%96">v*与q*的相互转化</a></li>
<li><a href="#%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%80%E4%BC%98%E6%96%B9%E7%A8%8B">贝尔曼最优方程</a>
<ul>
<li><a href="#%E6%9C%80%E4%BC%98V%E5%87%BD%E6%95%B0">最优V函数</a></li>
<li><a href="#%E6%9C%80%E4%BC%98Q%E5%87%BD%E6%95%B0">最优Q函数</a></li>
<li><a href="#%E5%92%8C%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%9F%E6%9C%9B%E6%96%B9%E7%A8%8B%E7%9A%84%E5%85%B3%E7%B3%BB">和贝尔曼期望方程的关系</a></li>
<li><a href="#%E8%A7%A3%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%9C%80%E4%BC%98%E6%96%B9%E7%A8%8B">解贝尔曼最优方程</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#MDPs%E7%9A%84%E6%89%A9%E5%B1%95">MDPs的扩展</a>
<ul>
<li><a href="#%E6%97%A0%E7%A9%B7%E6%88%96%E8%BF%9E%E7%BB%ADMDPs">无穷或连续MDPs</a></li>
<li><a href="#%E9%83%A8%E5%88%86%E5%8F%AF%E8%A7%82%E6%B5%8BMDPs">部分可观测MDPs</a></li>
<li><a href="#%E6%97%A0%E8%A1%B0%E5%87%8FMDPs">无衰减MDPs</a></li>
</ul>
</li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/learning-map.png" alt="learning-map"></p>
<p>马尔科夫决策过程是强化学习的数学基础，也是将强化学习从直观定义到数学定义的一个桥梁。</p>
<h1 id="马尔科夫决策过程简介" tabindex="-1"><a class="header-anchor" href="#马尔科夫决策过程简介" aria-hidden="true">#</a> 马尔科夫决策过程简介</h1>
<ul>
<li><strong>马尔科夫决策过程（Markov Decision Process, MDPs）<strong>是对强化学习问题的</strong>数学描述</strong>。</li>
<li>要求环境是全观测的。（原因后述）</li>
<li>几乎所有的RL问题都能用MDPs来描述
<ul>
<li>最优控制问题可以描述成<strong>连续MDPs</strong></li>
<li>部分观测问题可以转化成POMDPs</li>
<li>赌博机问题是只有<strong>一个状态</strong>的MDPs</li>
</ul>
</li>
</ul>
<p>注：虽然大部分RL问题都可以转化成MDPs，但是在我写的笔记中所描述的MDPs是在全观测的情况下。</p>
<h1 id="符号约定" tabindex="-1"><a class="header-anchor" href="#符号约定" aria-hidden="true">#</a> 符号约定</h1>
<ul>
<li>
<p>用大写字母表示随机变量：$S,A,R$</p>
</li>
<li>
<p>用小写字母表示某一个具体的值：$s,a,r$</p>
</li>
<li>
<p>用空心字母表示统计运算符：$\mathbb{E,P}$</p>
</li>
<li>
<p>用花体字母表示集合或函数：$\cal{S,A,P}$</p>
</li>
</ul>
<h1 id="马尔科夫过程" tabindex="-1"><a class="header-anchor" href="#马尔科夫过程" aria-hidden="true">#</a> 马尔科夫过程</h1>
<h2 id="马尔科夫性" tabindex="-1"><a class="header-anchor" href="#马尔科夫性" aria-hidden="true">#</a> 马尔科夫性</h2>
<p>只要知道<strong>现在</strong>，将来和过去是条件独立的。</p>
<p>定义：</p>
<p>如果在$t$时刻的状态$S_t$满足如下等式，那么这个状态被称为马尔科夫状态，或者说该状态满足马尔科夫性：
$$
\mathbb{P}[S_{t+1}|S_t]=\mathbb{P}[S_{t+1}|S_1,...,S_t]
$$</p>
<ul>
<li>状态$S_t$包含了所有历史<strong>相关</strong>信息（注：这里的相关指与问题相关，可能有一些问题无关的信息没有在$S_t$中）</li>
<li>或者说历史的所有状态的相关信息都在当前状态$S_t$上体现出来</li>
<li>一旦$S_t$知道了，那么$S_1,S_2,...,S_{t-1}$都可以被抛弃</li>
<li>数学上可以认为：状态是将来的充分统计量</li>
<li>因此，这里要求环境全观测（马尔科夫性与状态的定义息息相关，比如打砖块，就要求状态是当前画面帧和上一次的画面帧，不然得不到砖块下落速度）</li>
<li>例子
<ul>
<li>下棋时，只用关心当前局面</li>
<li>打俄罗斯方块时，只用关心屏幕</li>
</ul>
</li>
<li>有了马尔科夫状态之后
<ul>
<li>定义状态转移矩阵</li>
<li>忽略时间的影响</li>
</ul>
</li>
</ul>
<h2 id="状态转移矩阵" tabindex="-1"><a class="header-anchor" href="#状态转移矩阵" aria-hidden="true">#</a> 状态转移矩阵</h2>
<p>定义：状态转移概率指从一个马尔科夫状态$s$跳转到后继状态（successor state）$s'$的概率</p>
<p>$$
{P}<em>{ss'}=\mathbb{P}[S</em>{t+1}=s'|S_t=s]
$$
所有的状态组成行，所有的后继状态组成列，我们得到状态转移矩阵
$$
\begin{aligned}
\cal{P}=
\begin{bmatrix}
{P}<em>{11} &amp; ... &amp; {P}</em>{1n}\
\vdots &amp; \ddots &amp; \vdots\
{P}<em>{n1} &amp; ... &amp; {P}</em>{nn}\
\end{bmatrix}
\end{aligned}
$$</p>
<ul>
<li>$n$表示状态的个数</li>
<li>由于$\cal{P}$代表了整个状态转移的集合，所以用花体</li>
<li>每行元素相加等于1</li>
</ul>
<h2 id="状态转移函数" tabindex="-1"><a class="header-anchor" href="#状态转移函数" aria-hidden="true">#</a> 状态转移函数</h2>
<p>我们也可以将状态转移概率写成函数的形式
$$
{P}<em>{ss'}=\mathbb{P}[S</em>{t+1}=s'|S_t=s]
$$</p>
<ul>
<li>
<p>状态转移概率到下一各状态的和为1，即$\sum_{s'}\mathbb{P}(s'|s)=1$</p>
</li>
<li>
<p>状态数量太多或者是无穷大（连续状态）时，更适合使用状态转移函数，此时$\int_{s'}\mathbb{P}(s'|s)=1$</p>
</li>
</ul>
<h2 id="马尔科夫过程-1" tabindex="-1"><a class="header-anchor" href="#马尔科夫过程-1" aria-hidden="true">#</a> 马尔科夫过程</h2>
<p>一个马尔科夫过程（Markov process， MP）是一个无记忆的随机过程，即一些马尔科夫状态的序列</p>
<p>定义：马尔科夫过程可以由一个二元组来定义$&lt;S,P&gt;$</p>
<ul>
<li>
<p>$S$代表了状态的集合</p>
</li>
<li>
<p>$P$代表了状态转移概率矩阵${P}<em>{ss'}=\mathbb{P}[S</em>{t+1}=s'|S_t=s]$</p>
</li>
</ul>
<p>注：虽然我们有时候并不知道$P$的具体值，但是通常我们假设$P$是存在且稳定的</p>
<p>注：当$P$不稳定时，是不稳定环境，需要在线学习，快速学习</p>
<p><strong>马尔科夫过程的例子</strong>：</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/MP-example.png" alt="MP-example"></p>
<ul>
<li>一个学生每天需要学习三个科目，然后通过测验</li>
<li>不过也有可能只学完两个科目之后直接睡觉</li>
<li>一旦挂科，有可能需要重新学习某些科目</li>
<li>用椭圆表示普通状态，每一条线上的数字表示从一个状态跳转到另一个状态的概率</li>
<li>方块表示终止（terminal）状态</li>
<li>终止状态的定义有两种：
<ul>
<li>时间终止</li>
<li>状态终止</li>
</ul>
</li>
</ul>
<p>由于马尔科夫过程可以用图中的方块和线条组成，所以可以称马尔科夫过程为<strong>马尔科夫链（MDPs chain）</strong></p>
<h2 id="片段" tabindex="-1"><a class="header-anchor" href="#片段" aria-hidden="true">#</a> 片段</h2>
<p>定义：强化学习中，从<strong>初始</strong>状态$S_1$到终止状态的序列过程，被称为一个片段（episode）</p>
<p>$$
S_1,S_2,...,S_T
$$</p>
<ul>
<li>如果一个任务总以终止状态结束，那么这个任务被称为<strong>片段</strong>（episodic task）</li>
<li>如果一个任务会没有终止状态，会被无限执行下去，这被称为<strong>连续性任务</strong>（continuing task）</li>
</ul>
<h2 id="马尔科夫链的例子" tabindex="-1"><a class="header-anchor" href="#马尔科夫链的例子" aria-hidden="true">#</a> 马尔科夫链的例子</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/MP-example.png" alt="MP-example"></p>
<p><strong>片段</strong>：</p>
<p>假设初始状态是“科目一”，从这个马尔科夫链中，我们可能采样到如下的片段</p>
<ul>
<li>“科目一”，“科目二”，“睡觉”</li>
<li>“科目一”，“科目二”，“科目三”，“通过”，“睡觉”</li>
<li>“科目一”，“玩手机”，“玩手机”，... ，“玩手机”，“科目一”，“科目二”，“睡觉”</li>
<li>“科目一”，“科目二”，“科目三”，“挂科”，“科目二”，“科目三”，“挂科”，“科目一”，“科目二”，“科目三”，“挂科”，“科目三”，“通过”，“睡觉”</li>
</ul>
<p><strong>转移矩阵</strong></p>
<p>分别用$s_1$~$s_7$代表“科目一”，“科目二”，“科目三”，“通过”，“挂科”，“玩手机”，“睡觉”
$$
\cal{P}=
\begin{bmatrix}
-&amp; 0.5 &amp; -&amp; -&amp; -&amp; 0.5 &amp; -\
-&amp; -&amp; 0.8 &amp; -&amp; -&amp; -&amp; 0.2\
-&amp; -&amp; -&amp; 0.6 &amp; 0.4 &amp; -&amp; -\
-&amp; -&amp; -&amp; -&amp;- &amp; -&amp; 1.0\
0.2 &amp; 0.4 &amp; 0.4 &amp; -&amp; -&amp; -&amp; -\
0.1 &amp; -&amp; -&amp; -&amp; -&amp; 0.9 &amp; -\
-&amp; -&amp; -&amp; -&amp;- &amp; -&amp; 1.0\
\end{bmatrix}
$$</p>
<h1 id="马尔科夫奖励过程" tabindex="-1"><a class="header-anchor" href="#马尔科夫奖励过程" aria-hidden="true">#</a> 马尔科夫奖励过程</h1>
<p>接下来我们在马尔科夫过程中加一个强化学习中三大交互学习组成中最重要的一个：奖励，这也是强化学习和其他机器学习问题中比较大的一个区别。</p>
<p>马尔科夫过程主要描述的是状态之间的转移关系，在这个转移关系上赋予不同的奖励值即得到了马尔科夫<strong>奖励</strong>过程。</p>
<p>定义：马尔科夫奖励过程（Markov Reward Process，MRP）过程由一个四元组组成$&lt;S,P,R,\gamma&gt;$</p>
<ul>
<li>
<p>$S$代表了状态的集合</p>
</li>
<li>
<p>$P$描述了状态转移矩阵</p>
<p>${P}<em>{ss'}=\mathbb{P}[S</em>{t+1}=s'|S_t=s]$</p>
</li>
<li>
<p><strong>$R$表示奖励函数，$R(s)$描述了在状态$s$的奖励</strong></p>
<p>${R}(s)=\mathbb{E}[R_{t+1}|S_t=s]$</p>
<p>很多听众纠结为什么奖励是t+1时刻的。照此理解起来相当于离开这个状态才能获得奖励而不是进入这个状态即获得奖励。David指出这仅是一个约定，为了在描述RL问题中涉及到的观测$O$、行为$A$、和奖励$R$时比较方便。他同时指出如果把奖励改为$R_t$而不是$R_{t+1}$，只要规定好，本质上意义是相同的，在表述上可以把奖励描述为“当进入某个状态会获得相应的奖励”。</p>
</li>
<li>
<p>$\gamma$表示衰减引子$\gamma\in [0,1]$</p>
</li>
</ul>
<h2 id="马尔科夫奖励过程例子" tabindex="-1"><a class="header-anchor" href="#马尔科夫奖励过程例子" aria-hidden="true">#</a> 马尔科夫奖励过程例子</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/markov-reward-process-example1.png" alt="markov-reward-process-example1"></p>
<h2 id="回报值" tabindex="-1"><a class="header-anchor" href="#回报值" aria-hidden="true">#</a> 回报值</h2>
<ul>
<li>奖励值：对每一个<strong>状态</strong>的评价</li>
<li>回报值：对每一个<strong>片段</strong>的评价</li>
</ul>
<p>定义：</p>
<p>回报值（return $G_t$）是从时间$t$处开始的累计衰减奖励。</p>
<ul>
<li>
<p>对于片段性任务：</p>
<p>$
\begin{aligned}
G_t&amp;=R_{t+1}+\gamma R_{t+2}+...+\gamma^{T-t-1}R_T\
&amp;=\sum_{k=0}^{T-t-1}\gamma^kR_{t+k+1}
\end{aligned}
$</p>
</li>
<li>
<p>对于连续性任务：</p>
<p>$
\begin{aligned}
G_t&amp;=R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+...\
&amp;=\sum_{k=0}^{\infty}\gamma^kR_{t+k+1}
\end{aligned}
$</p>
</li>
</ul>
<h2 id="再聊片段" tabindex="-1"><a class="header-anchor" href="#再聊片段" aria-hidden="true">#</a> 再聊片段</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/slice.png" alt="slice"></p>
<ul>
<li>
<p>终止状态等价于自身转移概率为1，奖励为0的状态</p>
</li>
<li>
<p>因此我们能够将片段性任务和连续性任务统一表达：</p>
<p>$G_t=\sum_{k=0}^{T-t-1}\gamma^kR_{t+k+1}$</p>
<p>这里当$T=\infin$时，表示连续性任务，否则即为片段性任务。</p>
</li>
</ul>
<h2 id="再聊衰减值" tabindex="-1"><a class="header-anchor" href="#再聊衰减值" aria-hidden="true">#</a> 再聊衰减值</h2>
<p>为什么我们要使用这样的衰减指数值？</p>
<ul>
<li>直观感觉
<ul>
<li>影响未来的因素不仅仅包含当前</li>
<li>我们对未来的把握也是逐渐衰减的</li>
<li>一般情况下，我们更关注短时间的反馈</li>
</ul>
</li>
<li>数学便利
<ul>
<li>一个参数就描述了整个衰减过程，只需要调节这一个参数$\gamma$就可以来调节长时奖励和短时奖励的权衡（trade-off）</li>
<li>指数衰减形式又很容易进行数学分析</li>
<li>指数衰减是对回报值的有界保证，避免了循环MRP和连续性MRP情况下回报值变成无穷大</li>
</ul>
</li>
</ul>
<p>注：在一些特殊情况，也可以使用$\gamma=1$的回报值</p>
<h2 id="值函数" tabindex="-1"><a class="header-anchor" href="#值函数" aria-hidden="true">#</a> 值函数</h2>
<p>为什么要值函数？</p>
<ul>
<li>回报值是一次片段的结果，存在很大的样本偏差</li>
<li>回报值的脚标是$t$，值函数关注的是状态$s$</li>
</ul>
<p>值函数定义：</p>
<p>一个马尔科夫奖励过程MRP的值函数定义如下：
$$
v(s)=\mathbb{E}[G_t|S_t=s]
$$
也是就是从这个状态出发的所有片段的回报值的按照概率加权的平均值（即期望值）。</p>
<ul>
<li>这里的值函数针对的是状态$s$，所以称为<strong>状态值函数</strong>，又称$V$函数</li>
<li>$G_t$是一个随机变量</li>
<li>这里使用小写的$v$函数，代表了真实存在的值函数</li>
</ul>
<h2 id="例子-回报值和值函数" tabindex="-1"><a class="header-anchor" href="#例子-回报值和值函数" aria-hidden="true">#</a> 例子：回报值和值函数</h2>
<h3 id="回报值-1" tabindex="-1"><a class="header-anchor" href="#回报值-1" aria-hidden="true">#</a> 回报值</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/markov-reward-process-example1.png" alt="markov-reward-process-example1"></p>
<p>针对初始状态$S_1$=“科目一”，且$\gamma=0.5$计算不同片段的回报值</p>
<ul>
<li>
<p>&quot;科目一&quot;，“科目二”，“睡觉”</p>
<p>$
\begin{aligned}
g_1&amp;=(-2)+0.5\times (-2)+0.5^2\times (0)\
&amp;=-3
\end{aligned}
$</p>
</li>
<li>
<p>&quot;科目一&quot;，“科目二”，“科目三”，“通过”，“睡觉”</p>
<p>$
\begin{aligned}
g_1&amp;=(-2)+0.5\times (-2)+0.5^2\times (-2)+0.5^3\times (10)+0.5^4\times (0)\
&amp;=-2.25
\end{aligned}
$</p>
</li>
<li>
<p>&quot;科目一&quot;，“玩手机”，“玩手机”，“玩手机”，&quot;科目一&quot;，“科目二”，“睡觉”</p>
<p>$
\begin{aligned}
g_1=&amp;(-2)+0.5\times (-1)+0.5^2\times (-1)+0.5^3\times (-1)\
&amp;+0.5^4\times (-2)+0.5^5\times (-2)+0.5^6\times (0)\
=&amp;-3.0625
\end{aligned}
$</p>
</li>
<li>
<p>&quot;科目一&quot;，“科目二”，“科目三”，“挂科”，“科目二”，“科目三”，“挂科”，&quot;科目一&quot;，“科目二”，“科目三”，“挂科”，“科目三”，“通过”，“睡觉”</p>
<p>$
\begin{aligned}
g_1&amp;=(-2)+0.5\times (-2)+0.5^2\times (-2)+...\
&amp;=-4.4214...
\end{aligned}
$</p>
</li>
</ul>
<p><strong>虽然都是从相同的初始状态开始，但是不同的片段有不同的回报值，而值函数是它们的期望值。</strong></p>
<h3 id="针对例子的v函数值" tabindex="-1"><a class="header-anchor" href="#针对例子的v函数值" aria-hidden="true">#</a> 针对例子的V函数值</h3>
<p>当$\gamma=0$时</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/value-function-gamma-0.png" alt="value-function-gamma-0"></p>
<p>当$\gamma=1$时</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/value-function-gamma-1.png" alt="value-function-gamma-1"></p>
<h2 id="mrps中的贝尔曼方程" tabindex="-1"><a class="header-anchor" href="#mrps中的贝尔曼方程" aria-hidden="true">#</a> MRPs中的贝尔曼方程</h2>
<p>值函数的表达式可以分解成两部分</p>
<ul>
<li>
<p>瞬时奖励$R_{t+1}$</p>
</li>
<li>
<p>后继状态$S_{t+1}$的值函数乘上一个衰减系数</p>
<p>$\begin{aligned}
v(s)&amp;=\mathbb{E}[G_t|S_t=s]\
&amp;=\mathbb{E}[R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+...|S_t=s]\
&amp;=\mathbb{E}[R_{t+1}+\gamma (R_{t+2}+\gamma R_{t+3}+...)|S_t=s]\
&amp;=\mathbb{E}[R_{t+1}+\gamma G_{t+1}|S_t=s]\
&amp;=\mathbb{E}[R_{t+1}+\gamma v(S_{t+1})|S_t=s]\
\end{aligned}$</p>
</li>
<li>
<p>体现了$v(s)$与$v(S_{t+1})$之间的迭代关系</p>
</li>
<li>
<p>这是强化学习中的理论核心之一</p>
</li>
<li>
<p>注意$s$小写，$S_{t+1}$大写</p>
</li>
</ul>
<p>如果我们已知转移矩阵$P$，那么
$$
\begin{aligned}
v(s)&amp;=\mathbb{E}[R_{t+1}+\gamma v(S_{t+1})|S_t=s]\
&amp;=\mathbb{E}[R_{t+1}|S_t=s]+\gamma\mathbb{E}[v(S_{t+1})|S_t=s]\
&amp;={R}(s)+\gamma\sum_{s'\in S}{P}_{ss'}v(s')
\end{aligned}
$$
<img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/value-ss'.png" alt="value-ss'"></p>
<p>图中我们可以用$v(s_1), v(s_2), v(s_3)$去计算$v(s_0)$。</p>
<h3 id="针对例子的贝尔曼方程" tabindex="-1"><a class="header-anchor" href="#针对例子的贝尔曼方程" aria-hidden="true">#</a> 针对例子的贝尔曼方程</h3>
<p>当$\gamma=1$时，我们来看下一状态可能性最多的“科目三”状态：
$$
0.6=(-2)+1.0\times[0.6\times 10+0.4\times(-8.5)]
$$
<img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/bellman-equation-example1.png" alt="bellman-equation-example1"></p>
<h3 id="贝尔曼方程的矩阵形式" tabindex="-1"><a class="header-anchor" href="#贝尔曼方程的矩阵形式" aria-hidden="true">#</a> 贝尔曼方程的矩阵形式</h3>
<h1 id="使用矩阵-向量的形式表达贝尔曼方程-即-v-r-gamma-p-v-假设状态集合为-s-s-1-s-2-s-n-那么-begin-aligned-begin-bmatrix-v-s-1-vdots-v-s-n-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#使用矩阵-向量的形式表达贝尔曼方程-即-v-r-gamma-p-v-假设状态集合为-s-s-1-s-2-s-n-那么-begin-aligned-begin-bmatrix-v-s-1-vdots-v-s-n-end-bmatrix" aria-hidden="true">#</a> 使用矩阵-向量的形式表达贝尔曼方程，即
$$
v={R}+\gamma{P}v
$$
假设状态集合为
$$
{S}={s_1,s_2,...,s_n}
$$
，那么
$$
\begin{aligned}
\begin{bmatrix}
v(s_1)\
\vdots\
v(s_n)\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
{R}(s_1)\
\vdots\
{R}(s_n)\
\end{bmatrix}
+
\gamma
\begin{bmatrix}
{P}<em>{11} &amp; ... &amp; {P}</em>{1n}\
\vdots &amp; \ddots &amp; \vdots\
{P}<em>{n1} &amp; ... &amp; {P}</em>{nn}\
\end{bmatrix}
\end{aligned}
\begin{bmatrix}
v(s_1)\
\vdots\
v(s_n)\
\end{bmatrix}
$$
贝尔曼方程本质上是一个线性方程，可以直接解
$$
\begin{aligned}
v&amp;={R}+\gamma{P}v\
(1-\gamma{P})v&amp;={R}\
v&amp;=(1-\gamma{P})^{-1}{R}
\end{aligned}
$$</p>
<ul>
<li>
<p>计算复杂度$O(n^3)$</p>
</li>
<li>
<p>要求已知状态转移矩阵$P$</p>
</li>
<li>
<p>直接求解的方式仅限于小的MRPs</p>
</li>
<li>
<p>大规模MRP的求解通常使用迭代法。常用的迭代方法有：</p>
<ul>
<li>动态规划Dynamic Programming、</li>
<li>蒙特卡洛评估Monte-Carlo evaluation、</li>
<li>时序差分学习Temporal-Difference，</li>
</ul>
<p>后文会逐步讲解这些方法。</p>
</li>
</ul>
<h1 id="马尔科夫决策过程-1" tabindex="-1"><a class="header-anchor" href="#马尔科夫决策过程-1" aria-hidden="true">#</a> 马尔科夫决策过程</h1>
<h2 id="马尔科夫决策过程的定义" tabindex="-1"><a class="header-anchor" href="#马尔科夫决策过程的定义" aria-hidden="true">#</a> 马尔科夫决策过程的定义</h2>
<p><strong>与马尔科夫过程MP和马尔科夫奖励过程MRP的区别：</strong></p>
<ul>
<li>MP和MRP中，我们都是作为观察者，去观察其中的状态转移现象，去计算回报值。</li>
<li>对于一个RL问题，我们更希望去<strong>改变</strong>状态转移的流程，去<strong>最大化</strong>回报值。</li>
<li>通过在MRP中引入决策，即得到了<strong>马尔科夫决策过程（Markov Decision Process，MDPs）</strong></li>
</ul>
<p><strong>马尔科夫决策过程的定义</strong></p>
<p>一个马尔科夫决策过程（MDPs）由一个五元组构成
$$
&lt;{S,A,P,R,\gamma}&gt;
$$</p>
<ul>
<li>
<p>$S$代表了状态的集合</p>
</li>
<li>
<p>$A$代表了<strong>动作</strong>的集合</p>
</li>
<li>
<p>$P$描述了状态转移矩阵</p>
<p>${P}<em>{ss'}^a=\mathbb{P}[S</em>{t+1}=s'|S_t=s,A_t=a]$</p>
</li>
<li>
<p>$R$表示奖励函数，$R(s,a)$描述了在状态$s$**做动作$a$**的奖励</p>
<p>${R}(s,a)=\mathbb{E}[R_{t+1}|S_t=s,A_t=a]$</p>
</li>
<li>
<p>$\gamma$表示衰减引子，$\gamma\in [0,1]$</p>
</li>
</ul>
<h3 id="mdps例子" tabindex="-1"><a class="header-anchor" href="#mdps例子" aria-hidden="true">#</a> MDPs例子</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/MDPs-example1.png" alt="MDPs-example1"></p>
<ul>
<li>针对状态的奖励变成了针对$&lt;s, a&gt;$的奖励</li>
<li>能通过动作进行控制的状态转移，由原来的状态转移概率特换成了动作</li>
<li>MDP只关注那些可以做出决策的动作</li>
<li>被动的状态转移关系被压缩成一个状态
<ul>
<li>“被动”指无论做任何动作，状态都会发生跳转。这样的状态不属于MDPs中考虑的状态</li>
<li>原图中，由于“通过”后一定会去“睡觉”，因此进行了压缩</li>
<li>原图中，“挂科”后的跳转不受控制</li>
</ul>
</li>
</ul>
<p>注：图中除了在“科目三”的状态上执行“不复习”动作外，其他的所有状态跳转都是不确定性的，我们通过在不同的状态上执行不同的动作，即可实现不同的状态跳转。</p>
<h2 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h2>
<p>我们将之前的MRPs中的状态转移矩阵分成了两个部分</p>
<ul>
<li>能被智能体控制的<strong>策略，Policy</strong></li>
<li>MDPs中的转移矩阵$P$（不受智能体控制，认为是环境的一部分）</li>
</ul>
<p>策略的定义：在MDPs中，一个策略（Policy）$\pi$是给定状态下的动作的概率分布</p>
<p>$$
\pi(a|s)=\mathbb{P}[A_t=a|S_t=s]
$$
策略的特点</p>
<ul>
<li>策略是对智能体行为的全部描述</li>
<li>MDPs中的策略是基于马尔科夫状态的（而不是基于历史）</li>
<li>策略是时间稳定的，只与状态$s$有关，与时间$t$无关</li>
<li><strong>策略是RL问题的终极目标</strong></li>
<li>如果策略的概率分布输出都是<strong>独热的</strong>（one-hot）的，那么称为确定性策略，否则即为随机性策略</li>
</ul>
<h2 id="mdps和mrps之间的关系" tabindex="-1"><a class="header-anchor" href="#mdps和mrps之间的关系" aria-hidden="true">#</a> MDPs和MRPs之间的关系</h2>
<p>对于一个MDP问题$&lt;S,A,P,R,\gamma&gt;$，如果给定了策略$\pi$</p>
<ul>
<li>
<p>MDP将会退化成MRP，$&lt;{S},{P}^{\pi},{R}^{\pi},\gamma&gt;$</p>
</li>
<li>
<p>此时</p>
<p>$\begin{aligned}
{P}<em>{ss'}^{\pi}&amp;=\sum</em>{a\in {A}}\pi(a|s){P}<em>{ss'}^a\
{R}<em>s^{\pi}&amp;=\sum</em>{a\in {A}}\pi(a|s){R}</em>{s}^a
\end{aligned}$</p>
</li>
</ul>
<p>注：注意由于策略$\pi$代表：1，一个动作；2，一个动作分布，所以有时候，$\pi$和$a$会存在一定的混淆。</p>
<h2 id="mdps中的值函数" tabindex="-1"><a class="header-anchor" href="#mdps中的值函数" aria-hidden="true">#</a> MDPs中的值函数</h2>
<p>在MDPs问题中，由于动作的引入，值函数分为了两种：</p>
<ol>
<li>状态值函数（$V$函数）</li>
<li>状态动作值函数（$Q$函数）</li>
</ol>
<p>定义：MDPs中的<strong>状态值函数</strong>是从状态$s$开始，使用策略$\pi$得到的期望回报值</p>
<p>$$
v_{\pi}(s)=\mathbb{E}_{\pi}[G_t|S_t=s]
$$
定义：MDPs中的<strong>状态动作值函数</strong>是从状态$s$开始，执行动作$a$，然后对接下来的状态使用策略$\pi$得到的期望回报值</p>
<p>$$
q_{\pi}(s,a)=\mathbb{E}_{\pi}[G_t|S_t=s,A_t=a]
$$
这个怎么理解呢？</p>
<p>假设一条马尔可夫链为$s_1, a_1, s_2, a_2, s_3, a_3...$</p>
<p>$q(s, a)$表示初始状态和初始动作确定了$s=s_1$, $a=a_1$，之后的动作$a_2, a_3, ...$都是来自策略$\pi$的：$a_2, a_3, ...$服从$\pi$</p>
<p>也就是与下式是等价的：</p>
<p>给定当前状态$s$和当前动作$a$，在未来遵循策略$\pi$，那么系统将以概率$p(s'|s,a)$转向下个状态$s'$，上式可以重写为：
$$
Q^{\pi}(s,a)=\sum_{s'\in S}P(s'|s,a)[R(s'|s,a)+\gamma V^{\pi}(s')]
$$
注：在MDPs中，任何不说明策略$\pi$的情况下，讨论值函数都是在耍流氓！</p>
<h2 id="贝尔曼期望方程" tabindex="-1"><a class="header-anchor" href="#贝尔曼期望方程" aria-hidden="true">#</a> 贝尔曼期望方程</h2>
<p>和MRP相似，MDPs中的值函数也能分为瞬时奖励和后继状态的值函数两部分
$$
\begin{aligned}
v_{\pi}(s)&amp;=\mathbb{E}<em>{\pi}[R</em>{t+1}+\gamma v_{\pi}(S_{t+1})|S_t=s]\
q_{\pi}(s,a)&amp;=\mathbb{E}<em>{\pi}[R</em>{t+1}+\gamma q_{\pi}(S_{t+1},A_{t+1})|S_t=s,A_t=a]\
\end{aligned}
$$
例子：</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/MDPs-bellman-expectation-equation-example1.png" alt="MDPs-bellman-expectation-equation-example1"></p>
<ul>
<li>当对于所有的s和a，都有π(a|s)=0.5时，v_π(s)如上图</li>
<li>将图中的圆圈状态从上到下从左到右
分别记为s1,s2,s3,s4，将终止状态记
为s5，则对于所有的s和a，当π(a|s)=0.5时，状态转移矩阵为</li>
</ul>
<p>$$
{P}=
\begin{bmatrix}
0.5 &amp; 0.5 &amp; -&amp; -&amp; -\
0.5 &amp; -&amp; 0.5 &amp; -&amp; -\
-&amp; -&amp; -&amp; 0.5 &amp; 0.5 \
-&amp; 0.1 &amp; 0.2 &amp; 0.2 &amp; 0.5 \</p>
<ul>
<li>&amp; - &amp; - &amp; -&amp; 1\
\end{bmatrix}
$$</li>
</ul>
<h3 id="v函数与q函数之间的相互转化" tabindex="-1"><a class="header-anchor" href="#v函数与q函数之间的相互转化" aria-hidden="true">#</a> V函数与Q函数之间的相互转化</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/v-q-convert.png" alt="v-q-convert">
$$
v_{\pi}(s)=\sum_{a\in {A}}\pi(a|s)q_{\pi}(s,a)
$$
注：本质上是全概率公式</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/q-v-convert.png" alt="q-v-convert">
$$
q_{\pi}(s,a)={R}(s,a)+\gamma\sum_{s'\in S}{P}<em>{ss'}^av</em>{\pi}(s')
$$</p>
<h3 id="贝尔曼期望方程—v函数" tabindex="-1"><a class="header-anchor" href="#贝尔曼期望方程—v函数" aria-hidden="true">#</a> 贝尔曼期望方程—V函数</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/v-q-v-convert.png" alt="v-q-v-convert">
$$
\begin{aligned}
v_{\pi}(s)&amp;=\sum_{a\in{A}}\pi(a|s)q_{\pi}(s,a)\
&amp;=\sum_{a\in {A}}\pi(a|s)\left({R}(s,a)+\gamma\sum_{s'\in S}{P}<em>{ss'}^av</em>{\pi}(s')\right)
\end{aligned}
$$
实际上等价于
$$
v_{\pi}(s)=\mathbb{E}<em>{\pi}[R</em>{t+1}+\gamma v_{\pi}(S_{t+1})|S_t=s]
$$
为什么？分别带进去就好了</p>
<h3 id="贝尔曼期望方程—q函数" tabindex="-1"><a class="header-anchor" href="#贝尔曼期望方程—q函数" aria-hidden="true">#</a> 贝尔曼期望方程—Q函数</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/q-v-q-convert.png" alt="q-v-q-convert">
$$
q_{\pi}(s,a)={R}(s,a)+\gamma\sum_{ss'}^a\sum_{a'\in{A}}\pi(a'|s')q_{\pi}(s',a')
$$
实际上等价于
$$
q_{\pi}(s,a)=\mathbb{E}[R_{t+1}+\gamma q_{\pi}(S_{t+1},A_{t+1})|S_t=s,A_t=a]
$$
，为什么？</p>
<h3 id="贝尔曼期望方程例子" tabindex="-1"><a class="header-anchor" href="#贝尔曼期望方程例子" aria-hidden="true">#</a> 贝尔曼期望方程例子</h3>
<p>当γ=1，π(a|s)=0.5时
$$
2.8=0.5\times (10+0)+0.5\times (-5+0.2\times(-3.6)+0.4\times 0.4+0.4\times 2.8)
$$
<img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/MDPs-bellman-expectation-equation-example2.png" alt="MDPs-bellman-expectation-equation-example2"></p>
<h3 id="贝尔曼期望方程的矩阵形式" tabindex="-1"><a class="header-anchor" href="#贝尔曼期望方程的矩阵形式" aria-hidden="true">#</a> 贝尔曼期望方程的矩阵形式</h3>
<p>MDPs下的贝尔曼期望方程和MRP的形式相同。
$$
v_{\pi}={R}^T+\gamma{P}^{\pi}v_{\pi}
$$
同样地，可以直接求解
$$
v_{\pi}=(I-\gamma{P}^{\pi})^{-1}{R}^{\pi}
$$
求解的要求：</p>
<ul>
<li>已知π(a|s)</li>
<li>已知P(s'|s,a)</li>
</ul>
<h2 id="最优值函数" tabindex="-1"><a class="header-anchor" href="#最优值函数" aria-hidden="true">#</a> 最优值函数</h2>
<p>之前值函数，以及贝尔曼期望方程针对的都是给定策略π的情况，是一个<strong>评价</strong>的问题。</p>
<p>现在我们来考虑强化学习中的<strong>优化</strong>问题，即找出最好的策略。</p>
<p>定义：</p>
<p>最优值函数指的是在所有策略中的值函数最大值，其中包括最优V函数和最优Q函数
$$
\begin{aligned}
v_<em>(s)&amp;=\mathop{\text{max}}<em>{\pi}\ v</em>{\pi}(s)\
q_</em>(s,a)&amp;=\mathop{\text{max}}<em>{\pi}\ q</em>{\pi}(s,a)
\end{aligned}
$$</p>
<ul>
<li>最优值函数指的是一个MDP中所能达到的最佳性能</li>
<li>如果我们找到最优值函数，即相当于这个MDP已经解决了</li>
</ul>
<h3 id="最优v函数" tabindex="-1"><a class="header-anchor" href="#最优v函数" aria-hidden="true">#</a> 最优V函数</h3>
<p>当γ=1时的最优V函数v*(s)</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/optimal-v-function.png" alt="optimal-v-function"></p>
<h3 id="最优q函数" tabindex="-1"><a class="header-anchor" href="#最优q函数" aria-hidden="true">#</a> 最优Q函数</h3>
<p>当γ=1时的最优Q函数q*(s,a)</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/optimal-q-function.png" alt="optimal-q-function"></p>
<h2 id="最优策略" tabindex="-1"><a class="header-anchor" href="#最优策略" aria-hidden="true">#</a> 最优策略</h2>
<p>为了比较不同策略的好坏，我们首先应该定义策略的比较关系
$$
\pi\geq\pi'\quad\text{if}\quad v_{\pi}(s)\geq v_{\pi'}(s),\ \forall s
$$</p>
<h3 id="最优策略定理" tabindex="-1"><a class="header-anchor" href="#最优策略定理" aria-hidden="true">#</a> 最优策略定理</h3>
<p>对于任何MDPs问题</p>
<ul>
<li>
<p>总<strong>存在</strong>一个策略π*，要好于或等于其他所有的策略，π*&gt;π，∀π</p>
</li>
<li>
<p><strong>所有</strong>的最优策略都能够实现最优的V函数
$
v_{\pi*}(s)=v_*(s)
$</p>
</li>
<li>
<p><strong>所有</strong>的最优策略都能够实现最优的Q函数
$
q_{\pi*}(s,a)=q_*(s,a)
$</p>
</li>
</ul>
<p>注：具体证明参考<a href="http://www.ams.sunysb.edu/~feinberg/public/enc_dis.pdf" target="_blank" rel="noopener noreferrer">《Total Expected Discounted Reward MDPs: Existence of Optimal Policies 》<ExternalLinkIcon/></a></p>
<h3 id="怎么得到最优策略" tabindex="-1"><a class="header-anchor" href="#怎么得到最优策略" aria-hidden="true">#</a> 怎么得到最优策略</h3>
<p>我们已知了最优Q函数之后，我们能够马上求出最优策略，只要根据q*(s,a)选择相应的动作即可。
$$
\begin{aligned}
\pi_<em>(a|s)=
\left{\begin{matrix}
&amp;1\quad&amp;\text{if  a = arg }\mathop{\text{max}}<em>{a\in A}q</em></em>(s,a)\
&amp;0\quad&amp;\text{otherwise}
\end{matrix}\right.
\end{aligned}
$$</p>
<ul>
<li>可以看出对于任何MDPs问题，总存在一个确定性的最优策略</li>
<li>如果已知最优V函数，能不能找到最优策略呢？</li>
</ul>
<h3 id="最优策略例子" tabindex="-1"><a class="header-anchor" href="#最优策略例子" aria-hidden="true">#</a> 最优策略例子</h3>
<p>当γ=1时的最优策略π*(a|s)</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/optimal-policies-example.png" alt="optimal-policies-example"></p>
<h2 id="v-与q-的相互转化" tabindex="-1"><a class="header-anchor" href="#v-与q-的相互转化" aria-hidden="true">#</a> v*与q*的相互转化</h2>
<ul>
<li>之前我们已经讨论了vπ(s)和qπ(s,a)之前的关系——贝尔曼期望方程</li>
<li>同样地，v*(s)和q*(s,a)也存在着递归的关系——贝尔曼<strong>最优</strong>方程</li>
</ul>
<p><strong>v-&gt;q：</strong></p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/bellman-optical-equition.png" alt="bellman-optical-equition">
$$
v_<em>(s)=\mathop{\text{max}}<em>a\ q</em></em>(s,a)
$$
和贝尔曼期望方程的关系：
$$
v_<em>(s)=v_{\pi</em>}(s)=\sum_{a\in A}\pi_<em>(a|s)q_{\pi}(s,a)=\mathop{\text{max}}<em>a\ q</em>{\pi</em>}(s,a)
$$
上式很好理解，因为最优动作对应的概率为1嘛。</p>
<p><strong>q-&gt;v：</strong></p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/bellman-optical-equition-2.png" alt="bellman-optical-equition-2">
$$
q_<em>(s,a)=R(s,a)+\gamma\sum_{s'\in S}P_{ss'}^av_</em>(s')
$$</p>
<h2 id="贝尔曼最优方程" tabindex="-1"><a class="header-anchor" href="#贝尔曼最优方程" aria-hidden="true">#</a> 贝尔曼最优方程</h2>
<h3 id="最优v函数-1" tabindex="-1"><a class="header-anchor" href="#最优v函数-1" aria-hidden="true">#</a> 最优V函数</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/bellman-optical-equition-V-function.png" alt="bellman-optical-equition-V-function">
$$
v_<em>(s)=\mathop{\text{max}}<em>a[R(s,a)+\gamma\sum</em>{s'\in S}P_{ss'}^av_</em>(s')]
$$</p>
<h3 id="最优q函数-1" tabindex="-1"><a class="header-anchor" href="#最优q函数-1" aria-hidden="true">#</a> 最优Q函数</h3>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/markov-decision-processes/pic/bellman-optical-equition-Q-function.png" alt="bellman-optical-equition-Q-function">
$$
q_<em>(s,a)=R(s,a)+\gamma\sum_{s'\in S}P_{ss'}^a\ \mathop{\text{max}}<em>{a'}\ q</em></em>(s',a')
$$</p>
<h3 id="和贝尔曼期望方程的关系" tabindex="-1"><a class="header-anchor" href="#和贝尔曼期望方程的关系" aria-hidden="true">#</a> 和贝尔曼期望方程的关系</h3>
<ul>
<li>贝尔曼最优方程本质上就是利用了π*的特点，将求期望的算子转化成了max_a</li>
<li>在贝尔曼期望方程中，π是已知的。而贝尔曼最优方程中，π*是未知的。</li>
<li>解贝尔曼期望方程的过程即对应了<strong>评价</strong>，解贝尔曼最优方程的过程即对应了<strong>优化</strong>。</li>
</ul>
<h3 id="解贝尔曼最优方程" tabindex="-1"><a class="header-anchor" href="#解贝尔曼最优方程" aria-hidden="true">#</a> 解贝尔曼最优方程</h3>
<ul>
<li>贝尔曼最优方程不是线性的</li>
<li>一般很难有闭式的解</li>
<li>可以使用迭代优化的方法去解
<ul>
<li>值迭代</li>
<li>策略迭代</li>
<li>Q学习</li>
<li>SARSA</li>
<li>...</li>
</ul>
</li>
</ul>
<h1 id="mdps的扩展" tabindex="-1"><a class="header-anchor" href="#mdps的扩展" aria-hidden="true">#</a> MDPs的扩展</h1>
<ul>
<li>无穷或连续MDPs</li>
<li>部分可观测MDPs（Partially observable MDPs, POMDPs）</li>
<li>无衰减MDPs</li>
</ul>
<h2 id="无穷或连续mdps" tabindex="-1"><a class="header-anchor" href="#无穷或连续mdps" aria-hidden="true">#</a> 无穷或连续MDPs</h2>
<ul>
<li>动作空间或状态空间无限可数</li>
<li>动作空间或状态空间无限不可数 (连续)</li>
<li>时间连续</li>
</ul>
<h2 id="部分可观测mdps" tabindex="-1"><a class="header-anchor" href="#部分可观测mdps" aria-hidden="true">#</a> 部分可观测MDPs</h2>
<ul>
<li>
<p>此时观测不等于状态Ot≠St</p>
</li>
<li>
<p>POMDPs由七元组成
$
&lt;S,A,O,P,R,Z,\gamma&gt;
$</p>
</li>
<li>
<p>其中<strong>Z</strong>是观测函数
$
Z_{s'o}^a=\mathbb{P}[O_{t+1}=o|S_{t+1}=s',A_t=a]
$</p>
</li>
<li>
<p>观测不满足马尔科夫性，因此也不满足贝尔曼方程</p>
</li>
<li>
<p>状态未知，隐马尔科夫过程</p>
</li>
<li>
<p>有时对于POMDPs来说，最优的策略是随机性的</p>
</li>
</ul>
<h2 id="无衰减mdps" tabindex="-1"><a class="header-anchor" href="#无衰减mdps" aria-hidden="true">#</a> 无衰减MDPs</h2>
<ul>
<li>用于各态历经马尔科夫决策过程
<ul>
<li>各态历经性：平稳随机过程的一种特性</li>
</ul>
</li>
<li>存在独立于状态的平均奖赏ρ^π</li>
<li>求值函数时，需要减去该平均奖赏，否则有可能奖赏爆炸</li>
</ul>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第二章：马尔科夫决策过程<ExternalLinkIcon/></a></li>
</ul>
<p>本章内容是该课程这节课的笔记。</p>
<p>===</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/28084942" target="_blank" rel="noopener noreferrer">《强化学习》第二讲 马尔科夫决策过程<ExternalLinkIcon/></a></li>
</ul>
</div></template>


