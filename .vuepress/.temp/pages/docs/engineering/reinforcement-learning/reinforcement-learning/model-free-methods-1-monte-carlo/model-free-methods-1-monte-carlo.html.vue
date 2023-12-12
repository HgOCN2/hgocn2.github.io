<template><div><h1 id="无模型方法一-蒙特卡洛" tabindex="-1"><a class="header-anchor" href="#无模型方法一-蒙特卡洛" aria-hidden="true">#</a> 无模型方法一：蒙特卡洛</h1>
<ul>
<li><RouterLink to="/docs/engineering/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E6%97%A0%E6%A8%A1%E5%9E%8B%E6%96%B9%E6%B3%95%E7%AE%80%E4%BB%8B">无模型方法简介</a>
<ul>
<li><a href="#%E6%97%A0%E6%A8%A1%E5%9E%8B%EF%BC%88model-free%EF%BC%89%E6%96%B9%E6%B3%95">无模型（model-free）方法</a></li>
<li><a href="#%E4%BB%8E%E7%BB%8F%E9%AA%8C%E4%B8%AD%E5%AD%A6%E4%B9%A0">从经验中学习</a></li>
<li><a href="#%E5%92%8C%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%9A%84%E5%8C%BA%E5%88%AB">和动态规划的区别</a></li>
</ul>
</li>
<li><a href="#%E5%9C%A8%E7%AD%96%E7%95%A5%E5%92%8C%E7%A6%BB%E7%AD%96%E7%95%A5">在策略和离策略</a>
<ul>
<li><a href="#%E8%A1%8C%E4%B8%BA%E7%AD%96%E7%95%A5%E5%92%8C%E7%9B%AE%E6%A0%87%E7%AD%96%E7%95%A5">行为策略和目标策略</a></li>
<li><a href="#%E5%9C%A8%E7%AD%96%E7%95%A5%EF%BC%88on-policy%EF%BC%89%E5%AD%A6%E4%B9%A0">在策略（on-policy）学习</a></li>
<li><a href="#%E7%A6%BB%E7%AD%96%E7%95%A5%EF%BC%88off-policy%EF%BC%89%E5%AD%A6%E4%B9%A0">离策略（off-policy）学习</a></li>
<li><a href="#%E9%87%8D%E8%A6%81%E6%80%A7%E9%87%87%E6%A0%B7">重要性采样</a></li>
<li><a href="#%E7%A6%BB%E7%AD%96%E7%95%A5%E5%AD%A6%E4%B9%A0%E4%B8%AD%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%E9%87%87%E6%A0%B7">离策略学习中的重要性采样</a></li>
</ul>
</li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%96%B9%E6%B3%95">蒙特卡洛方法</a>
<ul>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%EF%BC%88Monte-Carlo,MC%EF%BC%89%E6%96%B9%E6%B3%95">蒙特卡洛（Monte-Carlo,MC）方法</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E6%96%B9%E6%B3%95">动态规划方法</a></li>
</ul>
</li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E8%AF%84%E4%BB%B7">蒙特卡洛评价</a>
<ul>
<li><a href="#%E4%B8%80%E4%BA%9B%E8%A1%A8%E8%BF%B0%E8%AF%B4%E6%98%8E">一些表述说明</a></li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">蒙特卡洛策略评价</a></li>
<li><a href="#%E9%A6%96%E6%AC%A1%E6%8B%9C%E8%AE%BF%EF%BC%88First-visit%EF%BC%89MC%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">首次拜访（First-visit）MC策略评价</a></li>
<li><a href="#%E6%AF%8F%E6%AC%A1%E6%8B%9C%E8%AE%BF%EF%BC%88Every-visit%EF%BC%89MC%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">每次拜访（Every-visit）MC策略评价</a></li>
<li><a href="#%E5%AF%B9Q%E5%87%BD%E6%95%B0%E7%9A%84MC%E6%96%B9%E6%B3%95">对Q函数的MC方法</a></li>
<li><a href="#%E7%A6%BB%E7%AD%96%E7%95%A5MC%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">离策略MC策略评价</a></li>
<li><a href="#MC%E7%9A%84%E7%89%B9%E7%82%B9%E5%B0%8F%E7%BB%93">MC的特点小结</a></li>
</ul>
</li>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E7%AE%97%E6%B3%95">增量式蒙特卡洛算法</a>
<ul>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E5%A2%9E%E9%87%8F%E5%BC%8F%E7%AE%97%E6%B3%95%EF%BC%9F">为什么需要增量式算法？</a></li>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8FMC%E6%9B%B4%E6%96%B0">增量式MC更新</a></li>
<li><a href="#%E5%B8%B8%E9%87%8F%E6%AD%A5%E9%95%BF">常量步长</a></li>
</ul>
</li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E4%BC%98%E5%8C%96">蒙特卡洛优化</a>
<ul>
<li><a href="#%E5%B9%BF%E4%B9%89%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">广义策略迭代</a></li>
<li><a href="#MC%E4%B8%AD%E7%9A%84%E5%B9%BF%E4%B9%89%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">MC中的广义策略迭代</a></li>
<li><a href="#%E9%97%AE%E9%A2%98%E4%B8%80%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%B8%AA%E5%80%BC%E5%87%BD%E6%95%B0%EF%BC%9F">问题一：使用哪个值函数？</a></li>
<li><a href="#%E9%97%AE%E9%A2%98%E4%BA%8C%EF%BC%9A%E8%B4%AA%E5%A9%AA%E7%AD%96%E7%95%A5%E6%8F%90%E5%8D%87%EF%BC%9F">问题二：贪婪策略提升？</a></li>
<li><a href="#%CE%B5-%E8%B4%AA%E5%A9%AA%E6%8E%A2%E7%B4%A2">ε-贪婪探索</a></li>
<li><a href="#%CE%B5-%E8%B4%AA%E5%A9%AA%E6%8E%A2%E7%B4%A2%E6%8F%90%E5%8D%87">ε-贪婪探索提升</a></li>
<li><a href="#MC%E7%9A%84%E7%AD%96%E7%95%A5%E8%BF%AD%E4%BB%A3">MC的策略迭代</a></li>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E7%AD%96%E7%95%A5%E8%AF%84%E4%BB%B7">增量式策略评价</a></li>
<li><a href="#%E6%97%A0%E9%99%90%E6%8E%A2%E7%B4%A2%E4%B8%8B%E7%9A%84%E6%9E%81%E9%99%90%E8%B4%AA%E5%A9%AA%EF%BC%88GLIE%EF%BC%89">无限探索下的极限贪婪（GLIE）</a></li>
<li><a href="#GLIE%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E4%BC%98%E5%8C%96">GLIE蒙特卡洛优化</a></li>
</ul>
</li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E7%AE%97%E6%B3%95%E5%BC%95%E7%94%B3">蒙特卡洛算法引申</a>
<ul>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E7%A6%BB%E7%AD%96%E7%95%A5%E6%AF%8F%E6%AC%A1%E6%8B%9C%E8%AE%BF%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E8%AF%84%E4%BB%B7">增量式离策略每次拜访蒙特卡洛评价</a></li>
<li><a href="#%E5%A2%9E%E9%87%8F%E5%BC%8F%E7%A6%BB%E7%AD%96%E7%95%A5%E6%AF%8F%E6%AC%A1%E6%8B%9C%E8%AE%BF%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E4%BC%98%E5%8C%96">增量式离策略每次拜访蒙特卡洛优化</a></li>
</ul>
</li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/learning-map.png" alt="learning-map"></p>
<p>上一章我们介绍了模型相关 (Model-based) 的强化学习。从现在开始我们要介绍模型无关 (Model-free) 的强化学习。</p>
<p>由于模型无关的强化学习比较复杂，今天先介绍其中一部分——模型无关的<strong>策略评价</strong>。模型无关的策略评价是，不知道马尔科夫决策过程转移概率和奖励函数的情况下，计算一个策略的每一个状态价值。模型无关的策略评价主要有两种算法，一个是蒙特卡罗算法，另一个叫时差学习算法。</p>
<p>模型无关的<strong>策略学习</strong>，是在不知道马尔科夫决策过程的情况下学习到最优策略。模型无关的策略学习主要有三种算法: MC Control, SARSA 和 Q learning。</p>
<h1 id="无模型方法简介" tabindex="-1"><a class="header-anchor" href="#无模型方法简介" aria-hidden="true">#</a> 无模型方法简介</h1>
<h2 id="无模型-model-free-方法" tabindex="-1"><a class="header-anchor" href="#无模型-model-free-方法" aria-hidden="true">#</a> 无模型（model-free）方法</h2>
<ul>
<li>属于<strong>学习</strong>方法的一种</li>
<li>MDPs中未知P，R——无模型</li>
<li>需要智能体和环境进行<strong>交互</strong></li>
<li>一般采用样本备份</li>
<li>需要结合充分的<strong>探索</strong></li>
</ul>
<h2 id="从经验中学习" tabindex="-1"><a class="header-anchor" href="#从经验中学习" aria-hidden="true">#</a> 从经验中学习</h2>
<ul>
<li>
<p>由于未知环境模型，所以无法预知自己的后继状态和奖励值</p>
</li>
<li>
<p>通过与环境进行交互然后观察环境返回的值</p>
</li>
<li>
<p>本质上相当于从概率分布$P_{ss'}^a,R_s^a$中进行采样</p>
</li>
<li>
<p>上述是对随机变量S‘和R的采样，需要实现完整的轨迹还需要确定动作A</p>
</li>
<li>
<p>采样<strong>策略</strong>得到动作A</p>
<ul>
<li>可控制</li>
</ul>
</li>
<li>
<p>采样足够充分时，可以使用样本分布良好地刻画总体分布</p>
</li>
</ul>
<h2 id="和动态规划的区别" tabindex="-1"><a class="header-anchor" href="#和动态规划的区别" aria-hidden="true">#</a> 和动态规划的区别</h2>
<ul>
<li>无模型学习
<ul>
<li>未知环境模型</li>
<li>需要与环境进行交互，有交互成本</li>
<li>样本备份</li>
<li>异步备份</li>
<li>需要充分的探索</li>
<li>两个策略（行为策略和目标策略）</li>
<li>...</li>
</ul>
</li>
<li>动态规划（基于模型学习）
<ul>
<li>已知环境模型</li>
<li>不需要直接交互，直接利用环境模型推导</li>
<li>全宽备份</li>
<li>同步和异步</li>
<li>一个策略</li>
<li>...</li>
</ul>
</li>
</ul>
<h1 id="在策略和离策略" tabindex="-1"><a class="header-anchor" href="#在策略和离策略" aria-hidden="true">#</a> 在策略和离策略</h1>
<h2 id="行为策略和目标策略" tabindex="-1"><a class="header-anchor" href="#行为策略和目标策略" aria-hidden="true">#</a> 行为策略和目标策略</h2>
<ul>
<li>行为策略是智能体与环境交互的策略</li>
<li>目标策略是我们要学习的策略，即vπ，qπ时的下标π</li>
</ul>
<h2 id="在策略-on-policy-学习" tabindex="-1"><a class="header-anchor" href="#在策略-on-policy-学习" aria-hidden="true">#</a> 在策略（on-policy）学习</h2>
<ul>
<li>行为策略和目标策略是同一个策略，可以理解为<strong>同策略</strong></li>
<li>直接使用样本统计属性去估计总体</li>
<li>更简单，且收敛性更好</li>
<li>数据利用性更差（只有智能体<strong>当前</strong>交互的样本能够被利用）</li>
<li>限定了学习过程中的策略是随机性策略</li>
</ul>
<h2 id="离策略-off-policy-学习" tabindex="-1"><a class="header-anchor" href="#离策略-off-policy-学习" aria-hidden="true">#</a> 离策略（off-policy）学习</h2>
<ul>
<li>
<p>行为策略μ和目标策略π<strong>不是</strong>同一个策略，可以理解为<strong>异策略</strong></p>
</li>
<li>
<p>一般行为策略μ选用随机性策略，目标策略π选用确定性策略</p>
</li>
<li>
<p>需要结合<strong>重要性采样</strong>才能使用样本估计总体</p>
</li>
<li>
<p>方差更大，收敛性更差</p>
</li>
<li>
<p>数据利用性更好（可以使用其他智能体交互的样本）</p>
</li>
<li>
<p>行为策略μ需要比目标策略π更具备探索性。即，在每个状态下，目标策略π的可行动作是行为策略μ可行动作的子集
$
\pi(a|s)&gt;0\Rightarrow\mu(a|s)&gt;0
$</p>
</li>
</ul>
<h2 id="重要性采样" tabindex="-1"><a class="header-anchor" href="#重要性采样" aria-hidden="true">#</a> 重要性采样</h2>
<ul>
<li>
<p>重要性采样是一种估计<strong>概率分布期望值</strong>的技术，它使用了来自其他概率分布的样本。</p>
</li>
<li>
<p>主要用于无法直接采样原分布的情况</p>
</li>
<li>
<p>估计期望值时，需要加权概率分布的比值（称为重要性采样率）</p>
</li>
<li>
<p>例子：</p>
<ul>
<li>
<p>估计全班身高，总体男女比例1:2</p>
</li>
<li>
<p>由于某些限制（比如女生大部分出去玩了），只能按男女比例2:1去采样</p>
</li>
<li>
<p>如果不考虑采样的分布形式，直接平均得到的值就有问题</p>
</li>
<li>
<p>因此需要加权，按照下面的加权比例去加权：
$
\frac{1}{2}:\frac{2}{1}=1:4
$</p>
</li>
</ul>
</li>
<li>
<p>重要性采样证明很简单，如下：
$
\begin{aligned}
\mathbb{E}<em>{X\sim P}[f(X)]&amp;=\sum P(X)f(X)\
&amp;=\sum Q(X)\frac{P(X)}{Q(X)}f(X)\
&amp;=\mathbb{E}</em>{X\sim Q}[\frac{P(X)}{Q(X)}f(X)]
\end{aligned}
$</p>
</li>
</ul>
<h2 id="离策略学习中的重要性采样" tabindex="-1"><a class="header-anchor" href="#离策略学习中的重要性采样" aria-hidden="true">#</a> 离策略学习中的重要性采样</h2>
<p>考虑t时刻之后的动作状态<strong>轨迹</strong>
$$
\rho_t=A_t,S_{t+1},A_{t+1},...,S_T
$$
，可以得到该轨迹出现的概率为
$$
\mathbb{P}(\rho_t)=\prod_{k=t}^{T-1}\pi(A_k|S_k)\mathbb{P}(S_{k+1}|S_k,A_k)
$$
，因此可以得到相应的重要性采样率为
$$
\eta_t^T=\frac{\prod_{k=t}^{T-1}\pi(A_k|S_k)\mathbb{P}(S_{k+1}|S_k,A_k)}
{\prod_{k=t}^{T-1}\mu(A_k|S_k)\mathbb{P}(S_{k+1}|S_k,A_k)}
=\prod_{k=t}^{T-1}\frac{\pi(A_k|S_k)}
{\mu(A_k|S_k)}
$$
即便是未知环境模型，也能得到重要性采样率。</p>
<h1 id="蒙特卡洛方法" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛方法" aria-hidden="true">#</a> 蒙特卡洛方法</h1>
<h2 id="蒙特卡洛-monte-carlo-mc-方法" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛-monte-carlo-mc-方法" aria-hidden="true">#</a> 蒙特卡洛（Monte-Carlo,MC）方法</h2>
<ul>
<li>MC方法可以被用于任意涉及随机变量的估计</li>
<li>这里MC方法特指利用统计平均估计期望值的方法</li>
<li>强化学习中存在很多估计期望值的计算vπ,v*</li>
<li>使用MC方法只需要利用经验数据，不需要P,R</li>
<li>MC方法从<strong>完整</strong>的片段中学习</li>
<li>MC方法仅仅用于片段性任务（必须有终止条件）</li>
</ul>
<p>最简单的思路，通过不断的采样，然后统计平均回报值来估计值函数，方差较大。</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/monte-carlo-explaination-1.png" alt="monte-carlo-explaination-1"></p>
<h2 id="动态规划方法" tabindex="-1"><a class="header-anchor" href="#动态规划方法" aria-hidden="true">#</a> 动态规划方法</h2>
<p>使用所有后续状态进行全宽备份</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/monte-carlo-explaination-2.png" alt="monte-carlo-explaination-2"></p>
<h1 id="蒙特卡洛评价" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛评价" aria-hidden="true">#</a> 蒙特卡洛评价</h1>
<h2 id="一些表述说明" tabindex="-1"><a class="header-anchor" href="#一些表述说明" aria-hidden="true">#</a> 一些表述说明</h2>
<ul>
<li>
<p>轨迹：把状态-动作的序列称为一个智能体的<strong>轨迹</strong>（trajectory）（有时也会加上奖励）
$
\rho=S_1,A_1,S_2,A_2,...,S_T
$</p>
<ul>
<li>状态动作序列构成了马尔科夫链图上的一条轨迹</li>
</ul>
</li>
<li>
<p>从$\pi,P_{ss'}^a$采样一条轨迹：我们把智能体从初始状态开始和环境进行交互的整个过程中得到的轨迹叫做采样一条轨迹。其中需要考虑两个分布$\pi,P_{ss'}^a$</p>
</li>
<li>
<p>从策略中采样一条轨迹ρ。因为$P_{ss'}^a$是稳定的，所以轨迹的分布随着策略的变化而变化。我们简述成从一个策略π中采样轨迹
$
\rho\sim \pi
$</p>
</li>
</ul>
<h2 id="蒙特卡洛策略评价" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛策略评价" aria-hidden="true">#</a> 蒙特卡洛策略评价</h2>
<ul>
<li>
<p>目标：给定策略π，求vπ</p>
</li>
<li>
<p>过去的方法使用了贝尔曼期望方程
$
v_{\pi}(s)=\sum_{a\in A}\left(R(s,a)+\gamma\sum_{s'\in S}P_{ss'}^av_{\pi}(s')\right)
$</p>
<ul>
<li>直接解</li>
<li>迭代式动态规划</li>
</ul>
</li>
<li>
<p>MC利用了值函数的原始定义
$
v_{\pi}(s)=\mathbb{E}_{\pi}[G_t|S_t=s]
$</p>
</li>
<li>
<p>MC策略评价使用回报值的经验平均来估计实际期望值</p>
</li>
</ul>
<h2 id="首次拜访-first-visit-mc策略评价" tabindex="-1"><a class="header-anchor" href="#首次拜访-first-visit-mc策略评价" aria-hidden="true">#</a> 首次拜访（First-visit）MC策略评价</h2>
<ul>
<li>为了评价状态s</li>
<li>使用给定的策略π采样大量的轨迹
<ul>
<li>在每一条轨迹中，对于状态s<strong>首次</strong>出现的时间t</li>
<li>增加状态数量N(s)←N(s)+1</li>
<li>增加总回报值Gsum(s)←Gsum(s)+Gt</li>
</ul>
</li>
<li>计算平均值得到值函数的估计V(s)=Gsum(s) / N(s)</li>
<li>每条轨迹都是独立同分布的</li>
<li>根据大数定律，随着N(s)→∞,V(s)→vπ(s)</li>
<li>在MC方法下，V(s)是vπ(s)的无偏估计</li>
</ul>
<h2 id="每次拜访-every-visit-mc策略评价" tabindex="-1"><a class="header-anchor" href="#每次拜访-every-visit-mc策略评价" aria-hidden="true">#</a> 每次拜访（Every-visit）MC策略评价</h2>
<ul>
<li>
<p>为了评价状态s</p>
</li>
<li>
<p>使用给定的策略π采样大量的轨迹</p>
<ul>
<li>在每一条轨迹中，对于状态s<strong>每次</strong>出现的时间t</li>
<li>增加状态数量N(s)←N(s)+1</li>
<li>增加总回报值Gsum(s)←Gsum(s)+Gt</li>
</ul>
</li>
<li>
<p>计算平均值得到值函数的估计V(s)=Gsum(s) / N(s)</p>
</li>
<li>
<p>同样的，根据大数定律，随着N(s)→∞,V(s)→vπ(s)</p>
</li>
<li>
<p>收敛性的证明不如首次拜访MC策略评价直观。可参考论文：</p>
<p><a href="https://link.springer.com/content/pdf/10.1007%2FBF00114726.pdf" target="_blank" rel="noopener noreferrer">《Reinforcement learning with replacing eligibility traces》<ExternalLinkIcon/></a></p>
</li>
<li>
<p>更容易拓展到函数逼近和资格迹（后述）</p>
</li>
</ul>
<h2 id="对q函数的mc方法" tabindex="-1"><a class="header-anchor" href="#对q函数的mc方法" aria-hidden="true">#</a> 对Q函数的MC方法</h2>
<ul>
<li>
<p>在没有模型的时候，一般我们选择估计Q函数（为什么不选V函数？）</p>
<p>在模型相关强化学习中，我们的工作是找到最优策略的状态价值v函数。但是在模型无关的环境下，这个做法却行不通。如果我们在模型无关环境下找最优策略的状态价值v，在预测时，对状态 (s) 最优策略如下所示
$
\begin{aligned}
\pi(s,a)=
\left{\begin{matrix}
&amp;1,\ a=\text{arg}\ \mathop{\text{max}}<em>{a}[R</em>{s,a}+\gamma\sum_{s'\in S}P_{s,a}^{s'}v(s')]\
&amp;0,\ a\neq\text{arg}\ \mathop{\text{max}}<em>{a}[R</em>{s,a}+\gamma\sum_{s'\in S}P_{s,a}^{s'}v(s')]
\end{matrix}\right.
\end{aligned}
$
看到那个R和P了吗？在模型无关的设定下，我们不知道这两个值。也许有同学说可以在预测时探索环境得到R和T。但是实际问题中，探索会破坏当前状态，比如在机器人行走任务中，为了探索，机器人需要做出一个动作，这个动作使得机器人状态发生变化。这时候为原来状态选择最优动作已经没有意义了。解决办法是把工作对象换成状态-动作价值q。获得最优策略的状态-动作价值q之后，对于状态s，最优策略策略如下所示：
$
\begin{aligned}
\pi(s,a)=
\left{\begin{matrix}
&amp;1,\ a=\text{arg}\ \mathop{\text{max}}<em>{a}q(s,a)\
&amp;0,\ a\neq\text{arg}\ \mathop{\text{max}}</em>{a}q(s,a)
\end{matrix}\right.
\end{aligned}
$</p>
</li>
<li>
<p>因为我们可以通过Q函数直接得到贪婪的策略，最优的Q函数可以得到最优的策略（如上式所示）</p>
</li>
<li>
<p>MC方法和V函数类似，但是Q函数的拜访从状态s变成了在状态s下做动作a</p>
</li>
<li>
<p>一个重要的区别是，在给定策略π的情况下，大量的&lt;s,a&gt;都没有被遍历到</p>
<ul>
<li>尤其是当策略π是确定性策略时，每个s只对应一个a</li>
</ul>
</li>
<li>
<p>一种避免该困境的方法是假设<strong>探索开始</strong>，即随机选择初始状态和初始动作</p>
</li>
</ul>
<h2 id="离策略mc策略评价" tabindex="-1"><a class="header-anchor" href="#离策略mc策略评价" aria-hidden="true">#</a> 离策略MC策略评价</h2>
<ul>
<li>
<p>在采样轨迹时使用的策略是行为策略μ</p>
</li>
<li>
<p>而我们计算的值函数是目标策略π</p>
</li>
<li>
<p>使用重要性采样率去加权回报值
$
G_t^{\pi/\mu}=\prod_{k=t}^{T-1}\frac{\pi(A_k|S_k)}{\mu(A_k|S_k)}G_t
$</p>
</li>
<li>
<p>将所有在策略的MC算法中的Gt替换成
$
G_t^{\pi/\mu}
$
就得到离策略MC算法</p>
</li>
<li>
<p>使用重要性采样会显著增加方差，可能到无限大。（增加了X^2）
$
\text{Var}[X]=\mathbb{E}[X^2]-\bar{X}^2
$</p>
</li>
</ul>
<h2 id="mc的特点小结" tabindex="-1"><a class="header-anchor" href="#mc的特点小结" aria-hidden="true">#</a> MC的特点小结</h2>
<ul>
<li>偏差为0，是无偏估计</li>
<li>方差较大，需要大量数据去消除</li>
<li>收敛性好</li>
<li>容易理解和使用</li>
<li>没有利用马尔科夫性，有时可以用在非马尔科夫环境</li>
</ul>
<h1 id="增量式蒙特卡洛算法" tabindex="-1"><a class="header-anchor" href="#增量式蒙特卡洛算法" aria-hidden="true">#</a> 增量式蒙特卡洛算法</h1>
<h2 id="为什么需要增量式算法" tabindex="-1"><a class="header-anchor" href="#为什么需要增量式算法" aria-hidden="true">#</a> 为什么需要增量式算法？</h2>
<ul>
<li>
<p>之前的蒙特卡洛算法需要采样大量轨迹之后再同一计算平均数</p>
</li>
<li>
<p>能不能在每一条轨迹之后都得到值函数的估计值呢？</p>
</li>
<li>
<p>平均值能够以增量式进行计算
$
\begin{aligned}
\mu_k&amp;=\frac{1}{k}\sum_{j=1}^kx_j\
&amp;=\frac{1}{k}\left(x_k+\sum_{j=1}^{k-1}x_j\right)\
&amp;=\frac{1}{k}\left(x_k+(k-1)\mu_{k-1}\right)\
&amp;=\mu_{k-1}+\frac{1}{k}(x_k-\mu_{k-1})
\end{aligned}
$</p>
</li>
</ul>
<h2 id="增量式mc更新" tabindex="-1"><a class="header-anchor" href="#增量式mc更新" aria-hidden="true">#</a> 增量式MC更新</h2>
<ul>
<li>
<p>采样轨迹S1,A1,S2,A2,...,ST</p>
</li>
<li>
<p>对于每一个状态St，统计回报值Gt，
$
\begin{aligned}
&amp;N(S_t)\leftarrow N(S_t)+1\
&amp;V(S_t)\leftarrow V(S_t)+\frac{1}{N(S_t)}(G_t-V(S_t))\
\end{aligned}
$</p>
</li>
<li>
<p>此时1/N(St)可以认为是更新的步长</p>
</li>
</ul>
<h2 id="常量步长" tabindex="-1"><a class="header-anchor" href="#常量步长" aria-hidden="true">#</a> 常量步长</h2>
<p>很多时候，我们会采样常量步长α∈(0,1]。
$$
V(S_t)\leftarrow V(S_t)+\alpha(G_t-V(S_t))
$$
常量步长的意思表示会逐渐遗忘过去的轨迹。（ps.这不就是一阶低通滤波嘛。。。）
$$
\begin{aligned}
V_{k+1}=&amp;V_k+\alpha(g_k-V_k)\
=&amp;\alpha g_k+(1-\alpha)V_k\
=&amp;\alpha g_k+(1-\alpha)[\alpha g_{k-1}+(1-\alpha)V_{k-1}]\
=&amp;\alpha g_k+(1-\alpha)\alpha g_{k-1}+(1-\alpha)^2\alpha g_{k-2}+\
&amp;...+(1-\alpha)^{k-1}\alpha g_1+(1-\alpha)^kV_1\
=&amp;(1-\alpha)^kV_1+\sum_{i-1}^k\alpha(1-\alpha)^{k-i}g_i
\end{aligned}
$$
由于
$$
(1-\alpha)^k+\sum_{i-1}^k\alpha(1-\alpha)^{k-i}=1
$$
，所以也可以认为常量步长是回报值的指数加权。</p>
<p>对于常量步长，有：</p>
<ul>
<li>仍然是回报值的加权平均</li>
<li>对初始值敏感度更小</li>
<li>更简单，不用使用N(St)</li>
<li>适用于不稳定环境</li>
</ul>
<h1 id="蒙特卡洛优化" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛优化" aria-hidden="true">#</a> 蒙特卡洛优化</h1>
<h2 id="广义策略迭代" tabindex="-1"><a class="header-anchor" href="#广义策略迭代" aria-hidden="true">#</a> 广义策略迭代</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/policy-iteration.png" alt="policy-iteration"></p>
<ul>
<li><strong>策略评价</strong>：估计vπ，比如迭代式策略评价</li>
<li><strong>策略生成</strong>：生成π’≥π，比如贪婪策略提升</li>
</ul>
<h2 id="mc中的广义策略迭代" tabindex="-1"><a class="header-anchor" href="#mc中的广义策略迭代" aria-hidden="true">#</a> MC中的广义策略迭代</h2>
<ul>
<li><strong>策略评价</strong>：估计vπ，蒙特卡洛策略评价，<strong>V=vπ？</strong></li>
<li><strong>策略生成</strong>：生成π’≥π，贪婪策略提升**？**</li>
</ul>
<h2 id="问题一-使用哪个值函数" tabindex="-1"><a class="header-anchor" href="#问题一-使用哪个值函数" aria-hidden="true">#</a> 问题一：使用哪个值函数？</h2>
<ul>
<li>在V函数上做贪婪策略提升要求环境模型
$$
\pi'(s)=\text{arg }\mathop{\text{max}}<em>{a\in A}R(s,a)
$$
在Q函数上做贪婪策略提升是无模型的
$$
\pi'(s)=\text{arg }\mathop{\text{max}}</em>{a\in A}Q(s,a)
$$
如何理解以上两点：</li>
</ul>
<p>在模型相关强化学习中，我们的工作是找到最优策略的状态价值v函数。但是在模型无关的环境下，这个做法却行不通。如果我们在模型无关环境下找最优策略的状态价值$v$，在预测时，对状态 (s) 最优策略如下所示
$$
\begin{aligned}
\pi(s,a)=
\left{\begin{matrix}
&amp;1,\ a=\text{arg}\ \mathop{\text{max}}<em>{a}[R</em>{s,a}+\gamma\sum_{s'\in S}P_{s,a}^{s'}v(s')]\
&amp;0,\ a\neq\text{arg}\ \mathop{\text{max}}<em>{a}[R</em>{s,a}+\gamma\sum_{s'\in S}P_{s,a}^{s'}v(s')]
\end{matrix}\right.
\end{aligned}
$$
看到那个R和P了吗？在模型无关的设定下，我们不知道这两个值。也许有同学说可以在预测时探索环境得到R和P。但是实际问题中，探索会破坏当前状态，比如在机器人行走任务中，为了探索，机器人需要做出一个动作，这个动作使得机器人状态发生变化。这时候为原来状态选择最优动作已经没有意义了。解决办法是把工作对象换成状态-动作价值q。获得最优策略的状态-动作价值q之后，对于状态s，最优策略策略如下所示：
$$
\begin{aligned}
\pi(s,a)=
\left{\begin{matrix}
&amp;1,\ a=\text{arg}\ \mathop{\text{max}}<em>{a}q(s,a)\
&amp;0,\ a\neq\text{arg}\ \mathop{\text{max}}</em>{a}q(s,a)
\end{matrix}\right.
\end{aligned}
$$</p>
<h2 id="问题二-贪婪策略提升" tabindex="-1"><a class="header-anchor" href="#问题二-贪婪策略提升" aria-hidden="true">#</a> 问题二：贪婪策略提升？</h2>
<ul>
<li>MC虽然利用了过去的经验数据，但是
<ul>
<li>某些状态并未遍历到</li>
<li>遍历不够充分，置信度不高</li>
</ul>
</li>
<li>例子
<ul>
<li>比如每天早上有两个选择，学习和玩耍</li>
<li>学习如果没有成果，获得奖励0，有成果获得奖励1000</li>
<li>玩耍获得奖励1</li>
<li>首次尝试学习获得奖励0，Q(s,学习)=0</li>
<li>首次尝试玩耍获得奖励1，Q(s,学习)=1</li>
<li>根据贪婪策略会选择玩耍</li>
<li>由于不会选择学习，所以Q(s,学习)不会更新</li>
</ul>
</li>
<li>你确定选到了最优策略？
<ul>
<li>不是，因为按照贪婪策略，会一直选择玩耍。</li>
</ul>
</li>
</ul>
<h2 id="ε-贪婪探索" tabindex="-1"><a class="header-anchor" href="#ε-贪婪探索" aria-hidden="true">#</a> ε-贪婪探索</h2>
<ul>
<li>
<p>解决这个问题，需要保证智能体一直在探索新的策略</p>
</li>
<li>
<p>最简单的做法，保证所有的m个动作都有一定的概率被采样</p>
<ul>
<li>用1-ε的概率选择贪婪的动作</li>
<li>用ε的概率随机选择从m各动作中选择（贪婪动作也包括在m内）</li>
</ul>
<p>$
\begin{aligned}
\pi(a|s)=\left{\begin{matrix}
&amp;\epsilon/m+1-\epsilon\quad&amp;\text{if  }a=\text{arg }\mathop{\text{max}}_{a\in A}Q(s,a)\
&amp;\epsilon/m\quad&amp;\text{otherwise}
\end{matrix}\right.
\end{aligned}
$</p>
</li>
<li>
<p>能同时解决对Q函数的蒙特卡洛策略评价中的<strong>探索开始</strong>假设</p>
</li>
</ul>
<h2 id="ε-贪婪探索提升" tabindex="-1"><a class="header-anchor" href="#ε-贪婪探索提升" aria-hidden="true">#</a> ε-贪婪探索提升</h2>
<p>ε-贪婪探索提升<strong>定理</strong>：</p>
<p>对于任意ε-贪婪策略π，使用相应的qπ得到的ε-贪婪策略π‘是在π上的一次策略提升，即
$$
v_{\pi'}(s)\geq v_{\pi}(s)
$$
证明如下：
$$
\begin{aligned}
q_{\pi}(s,\pi'(s))&amp;=\sum_{a\in A}\pi'(a|s)q_{\pi}(s,a)\
&amp;=\frac{\epsilon}{m}\sum_{a\in A}q_{\pi}(s,a)+(1-\epsilon)\mathop{\text{max}}<em>{a\in A}q</em>{\pi}(s,a)\
&amp;\geq\frac{\epsilon}{m}\sum_{a\in A}q_{\pi}(s,a)+(1-\epsilon)\frac{\pi(a|s)-\epsilon/m}{1-\epsilon}q_{\pi}(s,a)\
&amp;=\sum_{a\in A}\pi(a|s)q_{\pi}(s,a)\
&amp;=v_{\pi}(s)\
\end{aligned}
$$
上式中的不等式证明详见<a href="https://zhuanlan.zhihu.com/p/54272316" target="_blank" rel="noopener noreferrer">ε-贪婪策略提升定理的理论证明<ExternalLinkIcon/></a>。</p>
<p>根据策略提升定理，可以得到
$$
v_{\pi'}(s)\geq v_{\pi}(s)
$$</p>
<h2 id="mc的策略迭代" tabindex="-1"><a class="header-anchor" href="#mc的策略迭代" aria-hidden="true">#</a> MC的策略迭代</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/MC-policy-iterition.png" alt="MC-policy-iterition"></p>
<ul>
<li>策略评价：蒙特卡洛策略评价，<strong>Q=q_π</strong></li>
<li>策略提升：<strong>ε</strong>-贪婪探索提升</li>
</ul>
<h2 id="增量式策略评价" tabindex="-1"><a class="header-anchor" href="#增量式策略评价" aria-hidden="true">#</a> 增量式策略评价</h2>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/incremental-policy-evaluation.png" alt="incremental-policy-evaluation"></p>
<p><strong>每条轨迹：</strong></p>
<ul>
<li>策略评价：蒙特卡洛策略评价，<strong>Q≈ qπ</strong></li>
<li>策略提升：<strong>ε</strong>-贪婪探索提升</li>
</ul>
<h2 id="无限探索下的极限贪婪-glie" tabindex="-1"><a class="header-anchor" href="#无限探索下的极限贪婪-glie" aria-hidden="true">#</a> 无限探索下的极限贪婪（GLIE）</h2>
<p>定义：</p>
<p><strong>无限探索下的极限贪婪（Greedy in the Limit with Infnite Exploration (GLIE) ）</strong></p>
<ul>
<li>
<p>无限探索：所有状态动作都能被探索无穷次
$
\lim_{k\rightarrow\infty} N_k(s,a)=\infty
$</p>
</li>
<li>
<p>极限贪婪：在极限的情况下，策略会收敛到一个贪婪的策略
$
\lim_{k\rightarrow\infty}\pi_k(a|s)=1,\ \left(a=\text{arg }\mathop{\text{max}}_{a'\in A}Q_k(s,a')\right)
$</p>
</li>
<li>
<p>设置ε逐渐衰减到0，比如$\epsilon_k=1/k$，ε-贪婪策略是GLI的。</p>
</li>
</ul>
<p>定理：</p>
<p>GLIE蒙特卡洛优化能收敛到最优的Q函数</p>
<h2 id="glie蒙特卡洛优化" tabindex="-1"><a class="header-anchor" href="#glie蒙特卡洛优化" aria-hidden="true">#</a> GLIE蒙特卡洛优化</h2>
<p>算法：GLIE蒙特卡洛优化算法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1: repeat k = 1,2,3,...
2:     使用策略π采样第k条轨迹，S1,A1,S2,A2,...,ST
3:     对于轨迹中的每一个St和At
4:        N(St,At)←N(St,At)+1
5:        Q(St,At)←Q(St,At)+1/N(St,At)(Gt-Q(St,At))
6:     执行ε-策略提升，并衰减ε值
7:         ε←1/k
8:         π←ε-greedy(Q)
9: until 收敛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="蒙特卡洛算法引申" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛算法引申" aria-hidden="true">#</a> 蒙特卡洛算法引申</h1>
<h2 id="增量式离策略每次拜访蒙特卡洛评价" tabindex="-1"><a class="header-anchor" href="#增量式离策略每次拜访蒙特卡洛评价" aria-hidden="true">#</a> 增量式离策略每次拜访蒙特卡洛评价</h2>
<p>算法：增量式离策略每次拜访蒙特卡洛评价算法</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/everytime-MC-evaluating-algorithm.png" alt="everytime-MC-evaluating-algorithm"></p>
<h2 id="增量式离策略每次拜访蒙特卡洛优化" tabindex="-1"><a class="header-anchor" href="#增量式离策略每次拜访蒙特卡洛优化" aria-hidden="true">#</a> 增量式离策略每次拜访蒙特卡洛优化</h2>
<p>算法：增量式离策略每次拜访蒙特卡洛优化算法</p>
<p><img src="@source/docs/engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/pic/everytime-MC-optical-algorithm.png" alt="everytime-MC-optical-algorithm"></p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第四章：无模型方法一：蒙特卡洛<ExternalLinkIcon/></a></li>
</ul>
<p>本章内容是该课程这节课的笔记</p>
<ul>
<li><a href="http://www.algorithmdog.com/reinforcement-learning-model-free-evalution" target="_blank" rel="noopener noreferrer">强化学习系列之三:模型无关的策略评价<ExternalLinkIcon/></a></li>
</ul>
<p>可以看下这个，讲蒙特卡洛和时间差分的模型无关的策略评价</p>
<ul>
<li><a href="http://www.algorithmdog.com/reinforcement-learning-model-free-learning" target="_blank" rel="noopener noreferrer">强化学习系列之四:模型无关的策略学习<ExternalLinkIcon/></a></li>
</ul>
<p>讲模型无关的策略学习，主要有三种算法: MC Control, SARSA和Q learning</p>
</div></template>


