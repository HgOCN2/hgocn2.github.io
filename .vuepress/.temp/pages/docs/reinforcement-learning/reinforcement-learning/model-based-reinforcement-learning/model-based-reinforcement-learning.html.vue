<template><div><h1 id="基于模型的强化学习" tabindex="-1"><a class="header-anchor" href="#基于模型的强化学习" aria-hidden="true">#</a> 基于模型的强化学习</h1>
<ul>
<li><RouterLink to="/docs/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E7%AE%80%E4%BB%8B">本章简介</a>
<ul>
<li><a href="#%E5%AD%A6%E4%B9%A0%E4%B8%8E%E8%A7%84%E5%88%92">学习与规划</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0">基于模型的强化学习</a></li>
<li><a href="#%E6%97%A0%E6%A8%A1%E5%9E%8BRL%E5%92%8C%E5%9F%BA%E4%BA%8E%E6%A8%A1%E5%9E%8B%E7%9A%84RL">无模型RL和基于模型的RL</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E8%AF%A6%E8%BF%B0">基于模型的强化学习详述</a>
<ul>
<li><a href="#%E4%BC%98%E5%8A%BF%E5%92%8C%E5%8A%A3%E5%8A%BF">优势和劣势</a></li>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E7%8E%AF%E5%A2%83%E6%A8%A1%E5%9E%8B">什么是环境模型</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E5%AD%A6%E4%B9%A0">模型学习</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E7%9A%84%E4%BE%8B%E5%AD%90">模型的例子</a></li>
<li><a href="#%E6%9F%A5%E8%A1%A8%E6%A8%A1%E5%9E%8B">查表模型</a></li>
<li><a href="#%E6%A0%B9%E6%8D%AE%E6%A8%A1%E5%9E%8B%E8%A7%84%E5%88%92">根据模型规划</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E6%A0%B7%E6%9C%AC%E7%9A%84%E8%A7%84%E5%88%92">基于样本的规划</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E4%B8%8D%E7%B2%BE%E7%A1%AE%E7%9A%84%E6%A8%A1%E5%9E%8B%E8%A7%84%E5%88%92">使用不精确的模型规划</a></li>
</ul>
</li>
<li><a href="#%E6%95%B4%E5%90%88%E6%97%A0%E6%A8%A1%E5%9E%8B%E6%96%B9%E6%B3%95%E5%92%8C%E5%9F%BA%E4%BA%8E%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%96%B9%E6%B3%95">整合无模型方法和基于模型的方法</a>
<ul>
<li><a href="#%E7%9C%9F%E5%AE%9E%E7%9A%84%E5%92%8C%E4%BB%BF%E7%9C%9F%E7%9A%84%E7%BB%8F%E9%AA%8C">真实的和仿真的经验</a></li>
<li><a href="#%E6%95%B4%E5%90%88%E5%AD%A6%E4%B9%A0%E5%92%8C%E8%A7%84%E5%88%92">整合学习和规划</a></li>
<li><a href="#Dyna%E7%9A%84%E7%BB%93%E6%9E%84%E5%9B%BE">Dyna的结构图</a></li>
<li><a href="#Dyna-q%E7%9A%84%E7%AE%97%E6%B3%95">Dyna-q的算法</a></li>
<li><a href="#%E4%B8%80%E4%B8%AA%E6%B7%B1%E5%BA%A6%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E7%9A%84%E4%BE%8B%E5%AD%90">一个深度强化学习的例子</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E4%BB%BF%E7%9C%9F%E7%9A%84%E6%90%9C%E7%B4%A2">基于仿真的搜索</a>
<ul>
<li><a href="#%E4%BB%BF%E7%9C%9F%E4%B8%8E%E7%8E%AF%E5%A2%83%E6%A8%A1%E5%9E%8B">仿真与环境模型</a></li>
<li><a href="#%E5%89%8D%E5%90%91%E6%90%9C%E7%B4%A2%EF%BC%88%E6%90%9C%E7%B4%A2%E6%A0%91%EF%BC%89">前向搜索（搜索树）</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E4%BB%BF%E7%9C%9F%E7%9A%84%E6%90%9C%E7%B4%A2%E8%AF%A6%E8%BF%B0">基于仿真的搜索详述</a></li>
<li><a href="#%E7%AE%80%E5%8D%95%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%90%9C%E7%B4%A2">简单蒙特卡洛搜索</a></li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2%EF%BC%88%E8%AF%84%E4%BB%B7%EF%BC%89">蒙特卡洛树搜索（评价）</a></li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2%EF%BC%88%E4%BB%BF%E7%9C%9F%EF%BC%89">蒙特卡洛树搜索（仿真）</a></li>
<li><a href="#%E4%BE%8B%E5%AD%90%EF%BC%9A%E5%9B%B4%E6%A3%8B">例子：围棋</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2%EF%BC%88MCTS%EF%BC%89">使用蒙特卡洛树搜索（MCTS）</a></li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2%EF%BC%88MCTS%EF%BC%89">蒙特卡洛树搜索（MCTS）</a></li>
<li><a href="#%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2%EF%BC%88MCTS%EF%BC%89%E7%9A%84%E4%BC%98%E5%8A%BF">蒙特卡洛树搜索（MCTS）的优势</a></li>
<li><a href="#%E6%97%B6%E9%97%B4%E5%B7%AE%E5%88%86%EF%BC%88TD%EF%BC%89%E6%A0%91%E6%90%9C%E7%B4%A2">时间差分（TD）树搜索</a></li>
</ul>
</li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/learning-map.png" alt="learning-map"></p>
<p>其实本来截止到上一讲就结束了，本节和下节课是拓展。基于模型的强化学习作为强化学习的补充。</p>
<p>无模型是指在马尔科夫转移过程中，我们并不知道状态转移函数和奖励函数，所以说会通过采样的方式去获得。在动态规划这一节我们知道，如果已知状态转移函数和奖励函数，是不需要和环境发生交互的，直接使用动态规划的算法就可以得到。</p>
<p>基于模型的强化学习<strong>将动态规划和无模型方法进行整合</strong>，就类似于多步自举是时间差分和蒙特卡洛的整合一样。</p>
<p>为什么要讲基于模型的强化学习？</p>
<ul>
<li>基于模型的强化学习是和我们之前讲的内容的并行的分支</li>
<li>Alpha-GO用的最核心算法其实是基于模型的强化学习的一种：蒙特卡洛树搜索。其中也会结合值函数和策略梯度等。</li>
</ul>
<h1 id="本章简介" tabindex="-1"><a class="header-anchor" href="#本章简介" aria-hidden="true">#</a> 本章简介</h1>
<h2 id="学习与规划" tabindex="-1"><a class="header-anchor" href="#学习与规划" aria-hidden="true">#</a> 学习与规划</h2>
<ul>
<li>学习（Learning）
<ul>
<li>未知环境模型P,R</li>
<li>智能体与环境交互产生经验</li>
<li>从经验中学习（学习值函数，策略等）</li>
<li>无模型的方法（蒙特卡洛，时间差分等）</li>
</ul>
</li>
<li>规划（Planning）
<ul>
<li>已知环境模型P,R</li>
<li>无需智能体的交互</li>
<li>直接从模型学习</li>
<li>动态规划的方法（DP）</li>
</ul>
</li>
<li>相同点
<ul>
<li>
<p>都是根据未来的结果，计算当前的估计</p>
<p>利用贝尔曼方程</p>
</li>
</ul>
</li>
</ul>
<h2 id="基于模型的强化学习-1" tabindex="-1"><a class="header-anchor" href="#基于模型的强化学习-1" aria-hidden="true">#</a> 基于模型的强化学习</h2>
<p>这个图是其中一种：用经验采用监督学习来拟合环境模型，再用环境模型做动态规划。就是先和环境进行交互，拟合出环境模型，后面就无需和环境模型交互了。</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/model-based-reinforcement-learning.png" alt="model-based-reinforcement-learning"></p>
<h2 id="无模型rl和基于模型的rl" tabindex="-1"><a class="header-anchor" href="#无模型rl和基于模型的rl" aria-hidden="true">#</a> 无模型RL和基于模型的RL</h2>
<ul>
<li>无模型RL
<ul>
<li>没有环境模型</li>
<li>从经验中学习值函数（或者策略）</li>
</ul>
</li>
<li>基于模型的RL
<ul>
<li>从经验中学习一个环境模型</li>
<li>利用环境模型做动态规划，从而计算出值函数或者策略</li>
</ul>
</li>
</ul>
<p>基于模型的强化学习相当于一个虚拟的环境。</p>
<p><strong>疑惑</strong>：无模型RL和基于模型的RL感觉没有本质区别呀。。</p>
<p>感觉无模型是用神经网络之类的拟合出一个值函数（Q的分布），而基于模型的LR是拟合出一个环境模型（P和R），而Q是可以根据P和R算出来的，那么他们是否就没有本质区别呢？</p>
<p>唯一的区别好像就是，无模型是动态和环境交互而拟合，而基于模型是用已标注的样本来拟合。</p>
<p><strong>回答</strong>：</p>
<p>本质上都是做一样的事，都是想求出Q，但是一个是通过了采样去拟合，另一个是通过求出模型之后，用模型来求。都是一样的事，但是求的方法不同而已。</p>
<ul>
<li>我猜你的意思是，反正学模型也需要样本，建立模型加了一道工序却看不到实际有什么好处。（对不？）我觉得好处在于，通过建模，可以大致推测出一些以前没有见过的样本。（请问老师这样理解是否正确？）</li>
<li>你说的很有道理。虽然不同的方法目的是一样，但是不同的方法总能达到不同的效果。通过采样一些样本学习出来一个环境模型，是能够通过这个环境模型生成大量的样本的。</li>
</ul>
<h1 id="基于模型的强化学习详述" tabindex="-1"><a class="header-anchor" href="#基于模型的强化学习详述" aria-hidden="true">#</a> 基于模型的强化学习详述</h1>
<h2 id="优势和劣势" tabindex="-1"><a class="header-anchor" href="#优势和劣势" aria-hidden="true">#</a> 优势和劣势</h2>
<ul>
<li>优势
<ul>
<li>能够通过监督学习有效地学习环境模型</li>
<li>能够利用环境模型有效地学习</li>
<li>减少不精确的值函数带来的影响</li>
<li>直接利用环境模型的不确定性</li>
</ul>
</li>
<li>劣势
<ul>
<li>先学习环境模型，再构建值函数
<ul>
<li>存在两次近似误差，导致误差累计</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="什么是环境模型" tabindex="-1"><a class="header-anchor" href="#什么是环境模型" aria-hidden="true">#</a> 什么是环境模型</h2>
<ul>
<li>
<p>环境模型即智能体能够预测环境的返回值</p>
</li>
<li>
<p>环境模型M是一个MDP&lt;S,A,P,R&gt;的参数化表达</p>
</li>
<li>
<p>我们假设状态空间S和动作空间A均已知</p>
</li>
<li>
<p>所以一个环境模型M=&lt;Pη,Rη&gt;表示状态转移函数Pη≈P和奖励函数Rη≈R
$
\begin{aligned}
S_{t+1}&amp;=P_{\eta}(S_{t+1}|S_t,A_t)\
R_{t+1}&amp;=R_{\eta}(R_{t+1}|S_t,A_t)\
\end{aligned}
$</p>
</li>
<li>
<p>特别地，我们假设了状态转移函数和奖励函数的条件独立，即可以解耦
$
\mathbb{P}[S_{t+1},R_{t+1}|S_t,A_t]=\mathbb{P}[S_{t+1}|S_t,A_t]\mathbb{P}[R_{t+1}|S_t,A_t]
$</p>
</li>
</ul>
<h2 id="模型学习" tabindex="-1"><a class="header-anchor" href="#模型学习" aria-hidden="true">#</a> 模型学习</h2>
<ul>
<li>
<p>从经验{ S1, A1, R2, ..., ST }估计环境模型Mη</p>
</li>
<li>
<p>这是一个监督学习问题，按如下形式构建样本：
$
\begin{aligned}
S_1,A_1&amp;\rightarrow R_2,S_2\
S_2,A_2&amp;\rightarrow R_3,S_3\
&amp;...\
S_{T-1},A_{T-1}&amp;\rightarrow R_T,S_T\
\end{aligned}
$</p>
</li>
<li>
<p>然后可以建立两个模型：</p>
<ul>
<li>学习s,a→r是一个回归问题，因为r是一个值</li>
<li>学习s,a→s‘是一个概率分布估计问题，因为s’随机跳转</li>
</ul>
</li>
<li>
<p>选用的损失函数：MSE（回归），KL距离（分布）</p>
</li>
<li>
<p>通过寻找参数η来最小化损失函数</p>
</li>
</ul>
<h2 id="模型的例子" tabindex="-1"><a class="header-anchor" href="#模型的例子" aria-hidden="true">#</a> 模型的例子</h2>
<ul>
<li>查表模型</li>
<li>线性期望模型</li>
<li>线性高斯模型</li>
<li>高斯过程模型</li>
<li>神经网络</li>
<li>深度神经网络</li>
<li>…</li>
</ul>
<h2 id="查表模型" tabindex="-1"><a class="header-anchor" href="#查表模型" aria-hidden="true">#</a> 查表模型</h2>
<ul>
<li>统计每个状态动作对出现的次数N(s,a)
$$
\begin{aligned}
\hat{P}^a_{aa'}&amp;=\frac{1}{N(s,a)}\sum_{t=1}^T1(=)\
\hat{R}^a_{s}&amp;=\frac{1}{N(s,a)}\sum_{t=1}^T1(=)R_t\
\end{aligned}
$$</li>
</ul>
<p>另外，我们也可以</p>
<ul>
<li>
<p>存储每个时刻的经验
$
&lt;S_t, A_t, R_{t+1}, S_{t+1}&gt;
$</p>
</li>
<li>
<p>采样模型：采样匹配的经验&lt;s,a, . , .&gt;</p>
</li>
</ul>
<p><strong>例子</strong></p>
<p>采样了8个片段</p>
<ul>
<li>A, 0, B, 0</li>
<li>B, 1</li>
<li>B, 1</li>
<li>B, 1</li>
<li>B, 1</li>
<li>B, 1</li>
<li>B, 1</li>
<li>B, 0</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/table-model-example.png" alt="table-model-example"></p>
<p>我们已经通过经验构建了一个表格查找模型</p>
<h2 id="根据模型规划" tabindex="-1"><a class="header-anchor" href="#根据模型规划" aria-hidden="true">#</a> 根据模型规划</h2>
<ul>
<li>给定学好的模型Mη=&lt;Pη, Rη&gt;</li>
<li>解MDP，&lt;S, A, Pη, Rη&gt;</li>
<li>使用动态规划算法
<ul>
<li>值迭代</li>
<li>策略迭代</li>
<li>树搜索</li>
<li>...</li>
</ul>
</li>
</ul>
<h2 id="基于样本的规划" tabindex="-1"><a class="header-anchor" href="#基于样本的规划" aria-hidden="true">#</a> 基于样本的规划</h2>
<p>还有一种基于模型的强化学习的方式，并不用动态规划</p>
<ul>
<li>
<p>一个简单但是有效的规划方法</p>
</li>
<li>
<p>只用环境模型<strong>仅仅</strong>用来生成大量虚拟样本</p>
</li>
<li>
<p>从模型中<strong>采样</strong>经验
$
\begin{aligned}
S_{t+1}&amp;\sim P_{\eta}(S_{t+1}|S_t,A_t)\
R_{t+1}&amp;=R_{\eta}(R_{t+1}|S_t,A_t)\
\end{aligned}
$</p>
</li>
<li>
<p>学习的时候仍然使用无模型的RL，比如</p>
<ul>
<li>蒙特卡洛优化</li>
<li>Sarsa</li>
<li>Q学习</li>
</ul>
</li>
<li>
<p>这个方法效率通常很高</p>
</li>
</ul>
<p><strong>例子</strong></p>
<ul>
<li>首先根据真实经验构建表格查找模型</li>
<li>然后采样经验，一步一步地采样，不是一次性采样。</li>
<li>利用无模型的RL来学习值函数</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/table-model-example.png" alt="table-model-example"></p>
<table>
<thead>
<tr>
<th style="text-align:center">真实经验</th>
<th style="text-align:center">采样的经验</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">A, 0, B, 0</td>
<td style="text-align:center">B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">B, 0</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">A, 0, B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">A, 0, B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 1</td>
<td style="text-align:center">B, 1</td>
</tr>
<tr>
<td style="text-align:center">B, 0</td>
<td style="text-align:center">B, 0</td>
</tr>
</tbody>
</table>
<p>如果使用蒙特卡洛学习，可以估计得到 V(A) = 1，V(B) = 0.75。</p>
<h2 id="使用不精确的模型规划" tabindex="-1"><a class="header-anchor" href="#使用不精确的模型规划" aria-hidden="true">#</a> 使用不精确的模型规划</h2>
<p>实际使用的时候还要考虑到模型不精确的情况，用不精确的模型去学习策略，即更新策略的话，会最终导致永远也找不到最优的策略，只能找到次优的策略。</p>
<ul>
<li>给定一个不精确的模型&lt;Pη, Rη&gt;≠&lt;P, R&gt;</li>
<li>所解出来的最优解仅仅适合于近似的MDP&lt;S, A, Pη, Rη&gt;</li>
<li>当环境模型不精确时，动态规划只能计算到一个次优的策略</li>
<li>解决方法1：当环境模型错误时，使用无模型的RL</li>
<li>解决方法2：在求解时考虑到模型的不精确性</li>
</ul>
<h1 id="整合无模型方法和基于模型的方法" tabindex="-1"><a class="header-anchor" href="#整合无模型方法和基于模型的方法" aria-hidden="true">#</a> 整合无模型方法和基于模型的方法</h1>
<h2 id="真实的和仿真的经验" tabindex="-1"><a class="header-anchor" href="#真实的和仿真的经验" aria-hidden="true">#</a> 真实的和仿真的经验</h2>
<p>我们考虑两种形式的经验</p>
<ul>
<li>
<p><strong>真实的经验</strong>，从环境中真实采样（真实的MDP）
$
\begin{aligned}
S'&amp;\sim P_{ss'}^a\
R&amp;=R_s^a\
\end{aligned}
$</p>
</li>
<li>
<p><strong>仿真的经验</strong>，从环境模型中采样（近似的MDP）
$
\begin{aligned}
S'&amp;\sim P_{\eta}(S'|S,A)\
R&amp;= R_{\eta}(R|S,A)\
\end{aligned}
$</p>
</li>
</ul>
<h2 id="整合学习和规划" tabindex="-1"><a class="header-anchor" href="#整合学习和规划" aria-hidden="true">#</a> 整合学习和规划</h2>
<ul>
<li>无模型RL
<ul>
<li>没有环境模型</li>
<li>从经验中学习值函数（或者策略）</li>
</ul>
</li>
<li>基于模型的RL
<ul>
<li>从经验中学习一个环境模型</li>
<li>利用环境模型做动态规划，从而计算出值函数或者策略</li>
</ul>
</li>
<li>Dyna（混合的方法）
<ul>
<li>从经验中学习一个环境模型</li>
<li>同时利用真实的和仿真的经验来学习值函数和策略</li>
</ul>
</li>
</ul>
<h2 id="dyna的结构图" tabindex="-1"><a class="header-anchor" href="#dyna的结构图" aria-hidden="true">#</a> Dyna的结构图</h2>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/Dyna-structure.png" alt="Dyna-structure"></p>
<p>Dyna和之前的基于模型的强化学习的区别是：采的经验不仅会更新环境模型，也会更新值函数。</p>
<h2 id="dyna-q的算法" tabindex="-1"><a class="header-anchor" href="#dyna-q的算法" aria-hidden="true">#</a> Dyna-q的算法</h2>
<p>Dyna的Q学习算法：</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/Dyna-q-algorithm.png" alt="Dyna-q-algorithm"></p>
<p>abcd部分为Q学习，是和真实环境交互，得到真实经验。用真实经验去更新Q函数。</p>
<p>e部分，真实的经验不仅仅用来更新Q函数，也会来更新环境模型。</p>
<p>f部分，用更新后的环境模型重复n次（在等待真实反馈过程中，能做多少次就做多少次n），用环境模型生成一些经验样本，用生成的经验样本去更新Q函数</p>
<h2 id="一个深度强化学习的例子" tabindex="-1"><a class="header-anchor" href="#一个深度强化学习的例子" aria-hidden="true">#</a> 一个深度强化学习的例子</h2>
<p>在深度强化学习里怎么把两者进行结合的例子，考虑了如何在不精确环境模型下的基于模型的强化学习。</p>
<p>Imagination-Augmented Agents for Deep Reinforcement Learning</p>
<ul>
<li>混合了无模型的方法和基于模型的方法</li>
<li>考虑了环境模型的不精确性</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/Imagination-Augmented-Agents-for-Deep-Reinforcement-Learning.png" alt="Imagination-Augmented-Agents-for-Deep-Reinforcement-Learning"></p>
<p>左图就是用环境模型生成一些经验样本，用生成的经验样本去更新Q函数，这里它被称为“想象样本”</p>
<p>想象会有误差，随着想象的步长增加，误差会逐渐累积。不精确模型导致的累积误差会让模型越学越坏。</p>
<p>所以中图用了一个循环神经网络去不断纠正这个误差。具体怎么纠正，可以查看这篇paper。循环神经网络每一时刻都会有一个监督信号，用此监督信号，不断纠正环境模型的误差。</p>
<p>右图中，并没有直接学习环境模型生成的样本，而是两条路线兼顾（基于模型和无模型），兼顾了效率（基于模型）和准确性（无模型，没有累积误差）。</p>
<h1 id="基于仿真的搜索" tabindex="-1"><a class="header-anchor" href="#基于仿真的搜索" aria-hidden="true">#</a> 基于仿真的搜索</h1>
<p>Alpha-GO用的最核心算法其实是基于模型的强化学习的一种：<strong>蒙特卡洛树搜索</strong>。其中也会结合值函数和策略梯度等。</p>
<p>前面大致的讲了基于模型的强化学习的思路。其实基于模型的强化学习是一个很大很大的门派，不仅仅包含上面讲的模型和方法，还有比如像贝叶斯推理啊等等。</p>
<p>而且，基于模型的强化学习里的<strong>最大的特点就是，能把人为先验融入模型</strong>。在解决问题的时候，无模型的方法讲究的是，不管问题是什么，只要让我和环境交互，然后给我奖励，我就能做。通用性很好，但是实际解决问题的效果不那么具有普适性，就是不是每一个问题都会解决得很好。</p>
<p>怎么解决一个具体的问题，还得深入问题的本质，把关于这个问题的人为先验写进去，基于模型的强化学习里的最大的特点就是把人为先验融入到这个模型里，会让学习方法非常鲁棒，解决问题非常有效。</p>
<h2 id="仿真与环境模型" tabindex="-1"><a class="header-anchor" href="#仿真与环境模型" aria-hidden="true">#</a> 仿真与环境模型</h2>
<p>基于仿真的搜索，就是说，环境模型只是用来产生样本，有一套专门的搜索算法，更新值函数和选择策略的方法，跟我们以前的方法都不一样，它是来源于启发式搜索，就是说启发式搜索里面有一套策略更新和策略评价的机制，然后用这个机制去更新值函数。</p>
<ul>
<li>
<p>环境模型指我们知道了状态转移函数和奖励函数Pη和Rη。</p>
</li>
<li>
<p>仿真和环境模型有一点点区别，仿真是一个更加弱化的条件</p>
<ul>
<li>
<p>我们不需要知道P和R的具体形式</p>
<p>只需要有一个速度还可以的仿真器即可</p>
<p>比如围棋，和真人对弈，效率很慢，搭建自我博弈的仿真器后，两个智能体左右互搏，那这个仿真器的速度就是比较快的</p>
</li>
<li>
<p>只要能以某种过程，获得样本即可</p>
<p>通过仿真器，直接能仿真出一些经验</p>
</li>
</ul>
</li>
<li>
<p>如果已知环境模型，那么一定可以仿真</p>
</li>
<li>
<p>如果不已知环境模型，也有可能进行仿真</p>
<p>只要有某种规则，能让仿真器以较快的速度运行下去，这就是仿真</p>
</li>
</ul>
<hr>
<p>在仿真条件下，怎么以较好的效果来解决强化学习问题呢？看下面</p>
<h2 id="前向搜索-搜索树" tabindex="-1"><a class="header-anchor" href="#前向搜索-搜索树" aria-hidden="true">#</a> 前向搜索（搜索树）</h2>
<p>前向搜索也叫搜索树。其特点是只适用于离散的动作。</p>
<ul>
<li>
<p><strong>前向搜索</strong>主要是为了选择最好的动作</p>
<p>以前很简单，看哪个动作使Q最大就行了。但搜索树不会这么简单地用$\text{arg}\ \text{max}\ Q$来选择动作了，要多考虑几步。</p>
</li>
<li>
<p>以当前状态$s_t$为根建立了一颗<strong>搜索树</strong></p>
</li>
<li>
<p>可以使用环境模型来向前搜索</p>
<p>就是在脑海（仿真）里先根据第一反应（学得的值函数和策略，即先验）推演几步棋，再来判断第一反应是否正确，若不正确，则来判断第二反应。根据一系列的推导来选择比第一反应更好的动作。</p>
<p>就比如alpha-go也会学一个值函数和策略，但是并不按照值函数和策略（第一反应，先验）去做，虽然会有个大的概率按照第一反应去做，但到底做不做，要在脑海（仿真器，脑海）中推演（仿真）一遍。</p>
<p>本质上来说，树搜索是更强的策略提升器。之前的策略提升都只是简单的选max Q或者带ε的贪婪策略。但这里会用复杂的树搜索，保证此次选择是足够鲁棒的，即不会因为估计的不准而导致有很大的误差。</p>
</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/forward-search.png" alt="forward-search"></p>
<ul>
<li>不需要解整个MDP，仅仅解从<strong>当前状态</strong>开始的部分MDP即可，并不全部展开。</li>
</ul>
<h2 id="基于仿真的搜索详述" tabindex="-1"><a class="header-anchor" href="#基于仿真的搜索详述" aria-hidden="true">#</a> 基于仿真的搜索详述</h2>
<ul>
<li>
<p><strong>前向搜索</strong>算法使用了基于样本的规划算法</p>
</li>
<li>
<p>利用环境模型仿真了从当前状态开始的数个经验片段</p>
</li>
<li>
<p>然后对这些仿真的经验片段使用无模型的RL来学习</p>
<p>最简单的无模型强化学习就是蒙特卡洛，所以用的比较多的就是蒙特卡洛树搜索（用子节点平均的回报值作为当前节点的值函数）</p>
<p>时间差分就不用子节点的回报值了，用子节点的值函数做贝尔曼期望方程，得到当前节点的值函数</p>
</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/simulation-based-search.png" alt="simulation-based-search"></p>
<ul>
<li>
<p>利用环境模型（或仿真规则）仿真了从当前状态开始的K个经验片段
$
{ s_t^k,A_t^k,R_{t+1}^k, ..., S_T^k }_{k=1}^K\sim M_v
$</p>
</li>
<li>
<p>然后对这些仿真的片段使用无模型的RL来学习</p>
<ul>
<li>用蒙特卡洛优化方法，就得到了蒙特卡洛树搜索</li>
<li>用Sarsa的方法，就得到了TD搜索</li>
</ul>
</li>
</ul>
<h2 id="简单蒙特卡洛搜索" tabindex="-1"><a class="header-anchor" href="#简单蒙特卡洛搜索" aria-hidden="true">#</a> 简单蒙特卡洛搜索</h2>
<ul>
<li>
<p>给定环境模型Mv和一个<strong>仿真策略</strong>π</p>
</li>
<li>
<p>对于每个动作$a\in A$</p>
<ul>
<li>
<p>从当前状态$s_t$开始采样$K$个片段
$
{ s_t, a, R_{t+1}^k, S_{t+1}^k, A_{t+1}^k, ... , S_T^k }_{k=1}^K\sim M_v,\pi
$</p>
</li>
<li>
<p>使用平均回报值评价Q函数（<strong>蒙特卡洛评价</strong>）</p>
<p>只更新根节点
$$
Q(s_t,a)=\frac{1}{k}\sum_{k=1}^kG_t\rightarrow (P)\rightarrow q_{\pi}(s_t,a)
$$</p>
</li>
</ul>
</li>
<li>
<p>根据Q函数的最大值来选择当前的动作
$$
a_t=\text{arg }\mathop{\text{max}}_{a\in A}Q(_t, a)
$$</p>
</li>
</ul>
<p>树搜索的越深，复杂度也越高，计算量也越大。这也是一个权衡。每一步决策都要在脑海里过很久，虽然下的很好，但是效率会变低。</p>
<p>树搜索其实是用计算量换准确度。这是alpha-go打败人类的原因之一，用蒙特卡洛树搜索大幅扩充了计算量。</p>
<h2 id="蒙特卡洛树搜索-评价" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛树搜索-评价" aria-hidden="true">#</a> 蒙特卡洛树搜索（评价）</h2>
<ul>
<li>
<p>给定一个模型Mv</p>
</li>
<li>
<p>从当前状态st开始使用当前仿真策略采样K个片段
$
{ s_t,A_t^k,R_{t+1}^k,S_{t+1}^k,...,S_T^k }_{k=1}^K\sim M_v,\pi
$</p>
</li>
<li>
<p>建立一颗包含了所有访问的状态和动作的搜索树</p>
</li>
<li>
<p>使用从s, a开始的片段的回报值来评价Q(s,a)</p>
<p>每次拜访，更新每一个节点，对每一个节点进行策略评价
$
Q(s,a)=\frac{1}{N(s,a)}\sum_{k=1}^K\sum_{u=t}^TI(S_u,A_u=s,a)G_u\rightarrow(P)\rightarrow q_{\pi}(s,a)
$</p>
</li>
<li>
<p>搜索结束之后，选择Q值最大的动作
$
a_t=\text{arg }\mathop{\text{max}}_{a\in A}Q(s_t, a)
$</p>
</li>
</ul>
<h2 id="蒙特卡洛树搜索-仿真" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛树搜索-仿真" aria-hidden="true">#</a> 蒙特卡洛树搜索（仿真）</h2>
<p>真正做蒙特卡洛树搜索的时候，不仅要策略评价，还要做策略提升，是融到一起的。</p>
<ul>
<li>
<p>在MCTS（Monte-Carlo Tree Search）中，<strong>仿真策略π需要策略提升</strong></p>
</li>
<li>
<p>每次仿真有两个阶段（<strong>树搜索内，树搜索外</strong>）</p>
<ul>
<li>
<p><strong>树策略</strong>（提升）：选择动作以最大化Q(S, A)</p>
</li>
<li>
<p><strong>默认策略</strong>（固定）：快速计算到终止状态</p>
<p>最简单的策略是纯随机，比如下棋，刚下的时候，脑海里不可能推演到最后一步，也就推演四五步，这四五步就是树搜索，怎么判断四五步之后的局面？就是默认策略，人会用经验判断四五步之后的局面大概率是赢还是输，而电脑（alpha-go第一版）会用快速落子网络，用之前的规则算法快速把这一局下完，去判断这个局面会怎样。</p>
</li>
</ul>
</li>
<li>
<p>Repeat（每次仿真）</p>
<ul>
<li>
<p>使用MC评价来估计Q(S, A)</p>
</li>
<li>
<p>提升树策略，比如ε贪婪，UCB等</p>
<p>UCB也叫UCT（和树搜索结合），ε贪婪只考虑到最大Q函数的动作概率和非最大函数的动作概率。UCB不仅考虑这些，还会考虑值函数按照值大小排名的概率，也和访问的次数有关，即搜索的时候，访问次数越多，则置信度越高。这是一个很综合的搜索算法，在很多棋类游戏都会采用。</p>
</li>
</ul>
</li>
<li>
<p>对仿真出来的经验做蒙特卡洛优化</p>
</li>
<li>
<p>收敛到最优的搜索树Q(S,A)→q*(S,A)</p>
</li>
</ul>
<h2 id="例子-围棋" tabindex="-1"><a class="header-anchor" href="#例子-围棋" aria-hidden="true">#</a> 例子：围棋</h2>
<ul>
<li>被认为是最难的经典棋类博弈，是组合博弈</li>
<li>解空间 2361 ≈ 10108</li>
<li>Combinatorial Game：零和，完美信息（状态完全观测），确定性，离散，序列化</li>
<li>MCTS（蒙特卡洛树搜索）适合用来解Combinatorial Game的问题</li>
</ul>
<p><strong>围棋中的位置评价</strong></p>
<ul>
<li>
<p>评价位置s有多好？</p>
</li>
<li>
<p>奖励函数
$
\begin{aligned}
&amp;R_t=0\ \text{对于所有非终止状态t}&lt;\text{T}\
&amp;R_T=\left{\begin{matrix}
1\ \text{黑棋赢}\
0\ \text{白棋赢}\
\end{matrix}\right.
\end{aligned}
$</p>
</li>
<li>
<p>策略π=&lt;πB,πW&gt;表示白方和黑方的策略</p>
</li>
<li>
<p>值函数（奖励无衰减）
$
\begin{aligned}
&amp;v_{\pi}=\mathbb{E}<em>{\pi}[R_T|S=s]=\mathbb{P}[\text{黑旗赢}|S=s]\
&amp;v</em>*(s)=\mathop{\text{max}}<em>{\pi_B}\mathop{\text{min}}</em>{\pi_W}v_{\pi}(s)
\end{aligned}
$</p>
</li>
</ul>
<p><strong>围棋中的蒙特卡洛评价</strong></p>
<p>怎么用蒙特卡洛树搜索？分两步</p>
<ul>
<li>第一步：在当前位置用树搜索的方式搜四步。本身学得的策略网络会输出下到不同位置的概率分布，采样四次，就得到四个动作，则概率最大的被采到的次数就越多</li>
<li>第二步，对于每一个动作，用快速落子网络赶快落网，即仿真。仿真完，发现有两次赢了，那么该状态的V函数就是2/4=0.5。在这个过程中，就做了一次策略提升，因为其本身肯定不是0.5，因为还有一些比较垃圾的步，但是没选，蒙特卡洛树搜索选的只是最大的，这样就变相地太高了整体赢的概率。</li>
</ul>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/Go-MCTS.png" alt="Go-MCTS"></p>
<h2 id="使用蒙特卡洛树搜索-mcts" tabindex="-1"><a class="header-anchor" href="#使用蒙特卡洛树搜索-mcts" aria-hidden="true">#</a> 使用蒙特卡洛树搜索（MCTS）</h2>
<p>看下蒙特卡洛树搜索里是怎么做的。</p>
<p>分为两个策略，一个是树策略，一个是默认策略（快速仿真）</p>
<p>目前，树还没有建立，只有一个根节点（整体的一个叶子节点），每走到叶子节点，马上按照默认策略去走完，得到输赢的结果得分（状态值函数评价）</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/PIC/MCTS-1.png" alt="MCTS-1"></p>
<p>蒙特卡洛树搜索在每一步判断的时候，不只搜一次，继续搜。把下一个动作加到叶子节点中去，这一次值为0，所以分母加了1，分子没有加。</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/PIC/MCTS-2.png" alt="MCTS-2"></p>
<p>由于刚才的动作不好，那换一个动作，按照UCB的分去搜。此次是个好的结果，那分子分母各加1。</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/PIC/MCTS-3.png" alt="MCTS-3"></p>
<p>继续把下一个叶子节点加入。发现不行。</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/PIC/MCTS-4.png" alt="MCTS-4"></p>
<p>那么继续换一个动作</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/PIC/MCTS-5.png" alt="MCTS-5"></p>
<h2 id="蒙特卡洛树搜索-mcts" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛树搜索-mcts" aria-hidden="true">#</a> 蒙特卡洛树搜索（MCTS）</h2>
<p>整体来说，就分为如下四步，交替循环去做</p>
<p><img src="@source/docs/reinforcement-learning/reinforcement-learning/model-based-reinforcement-learning/pic/MCTS.png" alt="MCTS"></p>
<ul>
<li>在每一步下按照UCB打分，然后走，发现动作A（左）搜过了，就搜动作B（右）</li>
<li>对于没搜过的动作B，进行展开</li>
<li>然后用默认策略走完去评价</li>
<li>然后对于这条路上的所有值函数顺序，都去更新一次（即采样次数加1，值函数也更新）</li>
</ul>
<p>搜索还没结束，继续循环，搜很多步之后，觉得这几个点估计的差不多了，再选择一个动作。所以蒙特卡洛树搜索在选择一个动作时，其实还挺麻烦的。以前选动作，直接求max，现在是这样四步还套了一个循环。循环还要走好多次，才能选一个动作，以时间换效果。</p>
<p>alpha-go就是以蒙特卡洛树搜索为核心，再结合一些经验上的调优和其他方法，包括值函数学习，策略梯度算法作为蒙特卡洛树的辅助，比如UCB打分用的就是值函数网络的输出，怎么采样用的就是策略网络的输出。用之前学的AC的网络作为蒙特卡洛树搜索的辅助。</p>
<h2 id="蒙特卡洛树搜索-mcts-的优势" tabindex="-1"><a class="header-anchor" href="#蒙特卡洛树搜索-mcts-的优势" aria-hidden="true">#</a> 蒙特卡洛树搜索（MCTS）的优势</h2>
<ul>
<li>
<p>Highly selective best-first search，即最佳优先搜索</p>
</li>
<li>
<p>动态评价状态</p>
<p>在维度很高时效果比较好，用树搜索加仿真</p>
</li>
<li>
<p>结合了采样去打破维度诅咒</p>
</li>
<li>
<p>适用于各种黑盒模型</p>
</li>
<li>
<p>计算有效，很容易并行</p>
</li>
</ul>
<h2 id="时间差分-td-树搜索" tabindex="-1"><a class="header-anchor" href="#时间差分-td-树搜索" aria-hidden="true">#</a> 时间差分（TD）树搜索</h2>
<p>TD树搜索不是蒙特卡洛优化算法，是Sarsa优化算法。TD树搜索一般来说没有蒙特卡洛树搜索用的那么广泛，因为既然已经仿真了，那何不仿真到结束呢。</p>
<ul>
<li>
<p>基于采样的搜索</p>
</li>
<li>
<p>对于采样的经验使用TD去更新（使用了自举）</p>
</li>
<li>
<p>蒙特卡洛树搜索（MCTS）使用蒙特卡洛（MC）优化算法</p>
</li>
<li>
<p>时间差分树搜索（TDTS）使用Sarsa优化算法</p>
</li>
<li>
<p>从当前状态st开始采样片段</p>
</li>
<li>
<p>估计Q(s, a)</p>
</li>
<li>
<p>对于每一步的仿真，使用Sarsa算法更新Q函数
$
\bigtriangleup Q(S,A)=\alpha(R+\gamma Q(S',A;)-Q(S,A))
$</p>
</li>
<li>
<p>基于Q(s, a)选择动作</p>
</li>
</ul>
<p>这节课不并要求理解透彻，只是让大家了解alpha-go的核心（一套蒙特卡洛树搜索的方法），蒙特卡洛树搜索对解决组合博弈论非常有效。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第十章-基于模型的强化学习<ExternalLinkIcon/></a></li>
</ul>
<p>本章内容是该课程这节课的笔记。</p>
</div></template>


