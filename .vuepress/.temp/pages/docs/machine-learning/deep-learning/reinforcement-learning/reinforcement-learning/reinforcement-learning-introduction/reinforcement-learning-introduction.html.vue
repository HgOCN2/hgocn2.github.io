<template><div><h1 id="强化学习概论" tabindex="-1"><a class="header-anchor" href="#强化学习概论" aria-hidden="true">#</a> 强化学习概论</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E6%9C%AC%E7%AB%A0%E5%9C%A8%E5%AD%A6%E4%B9%A0%E5%9C%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE">本章在学习地图中的位置</a></li>
<li><a href="#%E8%AE%A4%E8%AF%86%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0">认识强化学习</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0">什么是强化学习</a></li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E5%92%8C%E5%85%B6%E4%BB%96%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%9A%84%E5%85%B3%E7%B3%BB">强化学习和其他机器学习的关系</a></li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E7%9A%84%E7%9B%B4%E8%A7%82%E7%89%B9%E6%80%A7">强化学习的直观特性</a></li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E4%B8%8E%E7%9B%91%E7%9D%A3%E5%AD%A6%E4%B9%A0%E5%92%8C%E8%B5%8C%E5%8D%9A%E6%9C%BA%E9%97%AE%E9%A2%98%E7%9A%84%E5%85%B3%E7%B3%BB">强化学习与监督学习和赌博机问题的关系</a></li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E4%BE%8B%E5%AD%90">强化学习例子</a></li>
</ul>
</li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E7%9A%84%E7%BB%84%E6%88%90">强化学习的组成</a>
<ul>
<li><a href="#%E6%95%B4%E4%BD%93%E7%BB%93%E6%9E%84">整体结构</a></li>
<li><a href="#%E5%A5%96%E5%8A%B1">奖励</a>
<ul>
<li><a href="#%E5%A5%96%E5%8A%B1%E5%81%87%E8%AE%BE">奖励假设</a></li>
<li><a href="#%E5%A5%96%E5%8A%B1%E7%A4%BA%E4%BE%8B">奖励示例</a></li>
<li><a href="#%E9%95%BF%E6%9C%9F%E5%A5%96%E5%8A%B1">长期奖励</a></li>
<li><a href="#%E5%A5%96%E5%8A%B1%E5%80%BC%E4%B8%8E%E5%9B%9E%E6%8A%A5%E5%80%BC">奖励值与回报值</a></li>
</ul>
</li>
<li><a href="#%E7%8A%B6%E6%80%81">状态</a>
<ul>
<li><a href="#%E5%8E%86%E5%8F%B2%E5%92%8C%E7%8A%B6%E6%80%81">历史和状态</a></li>
<li><a href="#%E7%8A%B6%E6%80%81%E7%9A%84%E4%BE%8B%E5%AD%90">状态的例子</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E7%8A%B6%E6%80%81">环境状态</a></li>
<li><a href="#%E6%99%BA%E8%83%BD%E4%BD%93%E7%8A%B6%E6%80%81">智能体状态</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E7%8A%B6%E6%80%81%E5%92%8C%E6%99%BA%E8%83%BD%E4%BD%93%E7%8A%B6%E6%80%81%E5%AF%B9%E6%AF%94">环境状态和智能体状态对比</a></li>
<li><a href="#%E5%85%A8%E8%A7%82%E6%B5%8B%E5%92%8C%E9%83%A8%E5%88%86%E8%A7%82%E6%B5%8B%E7%8E%AF%E5%A2%83">全观测和部分观测环境</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E4%BD%9C">动作</a></li>
</ul>
</li>
<li><a href="#%E6%99%BA%E8%83%BD%E4%BD%93%E7%9A%84%E7%BB%84%E6%88%90">智能体的组成</a>
<ul>
<li><a href="#%E6%99%BA%E8%83%BD%E4%BD%93%E7%9A%84%E4%B8%BB%E8%A6%81%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86">智能体的主要组成部分</a></li>
<li><a href="#%E7%AD%96%E7%95%A5">策略</a></li>
<li><a href="#%E5%80%BC%E5%87%BD%E6%95%B0">值函数</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B">模型</a></li>
<li><a href="#%E8%BF%B7%E5%AE%AB%E7%9A%84%E4%BE%8B%E5%AD%90">迷宫的例子</a></li>
</ul>
</li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E7%9A%84%E5%88%86%E7%B1%BB">强化学习的分类</a>
<ul>
<li><a href="#%E6%8C%89%E7%8E%AF%E5%A2%83%E5%88%86%E7%B1%BB">按环境分类</a></li>
<li><a href="#%E6%8C%89%E6%99%BA%E8%83%BD%E4%BD%93%E7%9A%84%E6%88%90%E5%88%86%E5%88%86%E7%B1%BB">按智能体的成分分类</a></li>
<li><a href="#%E6%8C%89%E6%9C%89%E6%97%A0%E6%A8%A1%E5%9E%8B%E5%88%86%E7%B1%BB">按有无模型分类</a></li>
<li><a href="#%E6%8C%89%E4%BD%BF%E7%94%A8%E7%9A%84%E6%89%8B%E6%AE%B5%E5%88%86%E7%B1%BB">按使用的手段分类</a></li>
</ul>
</li>
<li><a href="#%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E4%B8%AD%E7%9A%84%E5%85%B3%E9%94%AE%E6%A6%82%E5%BF%B5">强化学习中的关键概念</a>
<ul>
<li><a href="#%E5%AD%A6%E4%B9%A0%E4%B8%8E%E8%A7%84%E5%88%92">学习与规划</a></li>
<li><a href="#%E6%8E%A2%E7%B4%A2%E4%B8%8E%E5%88%A9%E7%94%A8">探索与利用</a></li>
<li><a href="#%E8%AF%84%E4%BB%B7%E5%92%8C%E4%BC%98%E5%8C%96">评价和优化</a></li>
</ul>
</li>
<li><a href="#%E9%A1%B9%E7%9B%AE%E5%AE%9E%E8%B7%B5">项目实践</a>
<ul>
<li><a href="#TicTacToe%E4%B8%89%E5%AD%90%E6%A3%8B%E5%AF%B9%E6%8A%97%E6%B8%B8%E6%88%8F">TicTacToe三子棋对抗游戏</a></li>
</ul>
</li>
<li><a href="#%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%80%9D%E8%80%83">进一步思考</a></li>
</ul>
<h1 id="本章在学习地图中的位置" tabindex="-1"><a class="header-anchor" href="#本章在学习地图中的位置" aria-hidden="true">#</a> 本章在学习地图中的位置</h1>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/learning-map.png" alt="learning-map"></p>
<h1 id="认识强化学习" tabindex="-1"><a class="header-anchor" href="#认识强化学习" aria-hidden="true">#</a> 认识强化学习</h1>
<h2 id="什么是强化学习" tabindex="-1"><a class="header-anchor" href="#什么是强化学习" aria-hidden="true">#</a> 什么是强化学习</h2>
<ul>
<li>面向智能体的学习——通过与一个环境进行交互来实现目标。</li>
<li>通过试错和优化进行学习——用试错后的奖励（或惩罚）进行学习。</li>
</ul>
<h2 id="强化学习和其他机器学习的关系" tabindex="-1"><a class="header-anchor" href="#强化学习和其他机器学习的关系" aria-hidden="true">#</a> 强化学习和其他机器学习的关系</h2>
<p>先看下强化学习和其他学科的关系：</p>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/relationship-of-reinforcement-learning-and-other-subjects.png" alt="relationship-of-reinforcement-learning-and-other-subjects.png"></p>
<p>再看强化学习和其他机器学习的关系：</p>
<p>我们知道，机器学习分为：</p>
<blockquote>
<ul>
<li>监督学习（supervised learning）：有即时标签的学习（分类、回归等）</li>
<li>非监督学习（unsupervised learning）：无标签学习（聚类问题）</li>
<li>强化学习：有延迟奖励的学习问题，介于监督和非监督之间</li>
</ul>
</blockquote>
<ul>
<li>监督学习本质上也可以认为是强化学习的一种特殊形式（无延迟场景）</li>
<li>强化学习更贴近人类的学习过程</li>
<li>强化学习可能是通往通用人工智能的道路</li>
</ul>
<h2 id="强化学习的直观特性" tabindex="-1"><a class="header-anchor" href="#强化学习的直观特性" aria-hidden="true">#</a> 强化学习的直观特性</h2>
<ul>
<li>没有监督信号，只有奖励信号（具体vs抽象）</li>
<li>奖励信号大都是延迟的，不是瞬时的</li>
<li>问题是优化问题（怎么做最好）</li>
<li>数据具有时间相关性，不满足独立同分布假设</li>
<li>智能体的动作是可以影响它之后的数据</li>
</ul>
<h2 id="强化学习与监督学习和赌博机问题的关系" tabindex="-1"><a class="header-anchor" href="#强化学习与监督学习和赌博机问题的关系" aria-hidden="true">#</a> 强化学习与监督学习和赌博机问题的关系</h2>
<ul>
<li>赌博机（bangit）问题：（非正式定义）搜单步优化问题，每一个时刻都有奖励，每次决策跟后续状态没有关系。一般认为赌博机问题不考虑状态。</li>
<li>赌博机问题和监督学习的区别是给标签还是给奖励。</li>
<li>当赌博机问题拓展到多步时会变成强化学习问题。</li>
</ul>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/supervised-bandit-reinforcement.png" alt="supervised-bandit-reinforcement.png"></p>
<h2 id="强化学习例子" tabindex="-1"><a class="header-anchor" href="#强化学习例子" aria-hidden="true">#</a> 强化学习例子</h2>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/examples-of-rl.png" alt="examples-of-rl"></p>
<ul>
<li>无人机特技飞行</li>
<li>管理投资策略系统</li>
<li>控制电力系统</li>
<li>广告投放策略控制（阿里巴巴）</li>
</ul>
<h1 id="强化学习的组成" tabindex="-1"><a class="header-anchor" href="#强化学习的组成" aria-hidden="true">#</a> 强化学习的组成</h1>
<h2 id="整体结构" tabindex="-1"><a class="header-anchor" href="#整体结构" aria-hidden="true">#</a> 整体结构</h2>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/structure-of-rl.png" alt="structure-of-rl"></p>
<p>每个时刻t，</p>
<ul>
<li>智能体(agent)
<ul>
<li>智能体执行动作At，并在环境中得到观测Qt和奖励Rt</li>
</ul>
</li>
<li>环境(encironment)
<ul>
<li>环境会对智能体的动作At做出反应，然后发送新的观测Q(t+1)和奖励R(t+1)</li>
</ul>
</li>
</ul>
<p>我们要注意学会区分智能体和环境：</p>
<ul>
<li>
<p>智能体是指强化学习需要优化的部分，是我们能够精确控制的部分</p>
</li>
<li>
<p>环境是我们不能直接控制的部分</p>
</li>
<li>
<p><strong>区分智能体和环境是强化学习的第一步</strong></p>
</li>
<li>
<p>环境并不是指自然环境</p>
</li>
<li>
<p>不同的问题，智能体和环境的划分也有所区别</p>
<ul>
<li>
<p>机器人探索房间vs机器人行走控制</p>
<p>机器人探索房间，那智能体就是机器人的搜索策略，环境就是房间的环境。</p>
<p>机器人行走控制，那智能体就是机器人的控制算法，环境就是机器人的身体状态。</p>
</li>
<li>
<p>仿真环境中的控制vs实际环境中的控制</p>
<p>仿真环境能把一个无人驾驶的汽车看成一个智能体，但是在实际环境中，并不能做到完美地控制汽车，所以只是把汽车中的控制代码看成一个智能体，其他（汽车本身和驾驶环境）看成环境。</p>
</li>
</ul>
</li>
</ul>
<h2 id="奖励" tabindex="-1"><a class="header-anchor" href="#奖励" aria-hidden="true">#</a> 奖励</h2>
<ul>
<li><strong>奖励是强化学习的核心</strong>
<ul>
<li>可以没有观测，但是不能没有奖励</li>
<li>奖励是强化学习区别其他机器学习的标志特征</li>
</ul>
</li>
<li>奖励的特点
<ul>
<li>奖励Rt是一个<strong>标量</strong>反馈</li>
<li>它衡量了智能体在时间t上做的有多好</li>
<li>智能体的目标就是<strong>最大化累积奖励</strong></li>
</ul>
</li>
</ul>
<h3 id="奖励假设" tabindex="-1"><a class="header-anchor" href="#奖励假设" aria-hidden="true">#</a> 奖励假设</h3>
<p><strong>强化学习的目标就是最大化期望累积奖励。</strong></p>
<p>注：如果一个问题不满足奖励假设，那么就不能用强化学习去解决！</p>
<h3 id="奖励示例" tabindex="-1"><a class="header-anchor" href="#奖励示例" aria-hidden="true">#</a> 奖励示例</h3>
<ul>
<li>无人机和无人车控制
<ul>
<li>+奖励：如果按预定轨迹运行</li>
<li>-奖励：碰撞或翻车</li>
</ul>
</li>
<li>下围棋
<ul>
<li>+/-奖励：赢了/输了</li>
</ul>
</li>
<li>Atari游戏
<ul>
<li>+/-奖励：得分增加/减少</li>
</ul>
</li>
<li>机械臂控制
<ul>
<li>+奖励：成功抓到东西</li>
</ul>
</li>
</ul>
<p>注：奖励并不要求一定要有正有负，只有正的奖励和负的奖励都可以！</p>
<h3 id="长期奖励" tabindex="-1"><a class="header-anchor" href="#长期奖励" aria-hidden="true">#</a> 长期奖励</h3>
<ul>
<li>每一个动作都可能有一个长期的结果</li>
<li>奖励可能是延迟的</li>
<li>有时我们需要牺牲一些短期奖励来获得更多的长期奖励</li>
<li>例子
<ul>
<li>下围棋：只有在最后才能获得奖励</li>
<li>打砖块游戏：当球运行一段到砖块时才有奖励</li>
<li>（牺牲短期奖励的例子）：平时考试抄袭虽然可以或的短暂的奖励，但是为了长期奖励（取得进步），我们需要牺牲短期奖励</li>
</ul>
</li>
</ul>
<h3 id="奖励值与回报值" tabindex="-1"><a class="header-anchor" href="#奖励值与回报值" aria-hidden="true">#</a> 奖励值与回报值</h3>
<p>当智能体在时间t内做出动作<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>A</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">A_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>时，会在未来收到奖励序列<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>R</mi><mi>t</mi></msub><mo separator="true">,</mo><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>2</mn></mrow></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">R_t, R_{t+1}, R_{t+2},...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span>。我们的目的是使<strong>累积奖励</strong>最大。一种通用的累积奖励的定义方式是将这些奖励值进行加权求和：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>G</mi><mi>t</mi></msub><mo>=</mo><msub><mi>w</mi><mi>t</mi></msub><msub><mi>R</mi><mi>t</mi></msub><mo>+</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mn>2</mn></mrow></msub><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">
G_t=w_tR_t+w_{t+1}R_{t+1}+w_{t+2}R_{t+2}+...
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.1056em;"></span><span class="mord">...</span></span></span></span></span></p>
<p>其中<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>w</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">w_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>表示不同时间的加权系数</p>
<ul>
<li>我们把上面的<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>G</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">G_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>值称为<strong>回报值（Return）</strong></li>
<li>回报值衡量了动作<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>A</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">A_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>对未来结果的影响</li>
<li>强化学习的目的即变成了在每个时刻，使未来的<strong>期望回报值</strong>最大</li>
</ul>
<p><strong>回报值</strong></p>
<ul>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mi>n</mi></mrow></msub><mo>=</mo><mn>1</mn><mo separator="true">,</mo><mi mathvariant="normal">∀</mi><mi>n</mi></mrow><annotation encoding="application/x-tex">w_{t+n}=1,\forall n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">n</span></span></span></span></p>
<ul>
<li>我们将所有时刻的奖励看成一样重要的</li>
<li>这样的<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>G</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">G_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>是<strong>无衰减回报值（undiscounted return）</strong></li>
</ul>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>w</mi><mrow><mi>t</mi><mo>+</mo><mi>n</mi></mrow></msub><mo>=</mo><msup><mi>γ</mi><mi>n</mi></msup><mo separator="true">,</mo><mi>γ</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">w_{t+n}=\gamma^n,\gamma\in[0,1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8588em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span></p>
<ul>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>G</mi><mi>t</mi></msub><mo>=</mo><msub><mi>R</mi><mi>t</mi></msub><mo>+</mo><mi>γ</mi><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msup><mi>γ</mi><mn>2</mn></msup><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">G_t=R_t+\gamma R_{t+1}+\gamma^2 R_{t+2}+...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0224em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.1056em;"></span><span class="mord">...</span></span></span></span></li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\gamma=0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时，退化成赌博机问题</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\gamma=1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>时，变成无衰减回报值</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\gamma\in(0,1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span>时，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span>值衡量了我们对未来奖励的关注度，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span>越大，表示我们越关注长期奖励，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span>越小，表示我们越关注短期奖励</li>
<li>这样的<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>G</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">G_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>是<strong>衰减回报值（discounted return）</strong></li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span>被称为<strong>衰减系数</strong>。</li>
</ul>
</li>
</ul>
<p><strong>衰减系数的理解</strong></p>
<ul>
<li>未来的奖励还会受到其他动作的影响</li>
<li>在估计未来奖励时，我们的把握也越来越小</li>
</ul>
<h2 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h2>
<p>状态和观测不一样，观测是智能体和环境当前时刻直接的交互，而<strong>状态可能包含了好些观测，甚至整个历史。所以，状态是历史的函数</strong>，这个函数视具体问题而定。</p>
<h3 id="历史和状态" tabindex="-1"><a class="header-anchor" href="#历史和状态" aria-hidden="true">#</a> 历史和状态</h3>
<ul>
<li>
<p>**历史（history）**是一个观测、动作和奖励的序列
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mi>t</mi></msub><mo>=</mo><msub><mi>O</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>R</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>A</mi><mn>1</mn></msub><mo separator="true">,</mo><mtext> </mtext><msub><mi>O</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>R</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>A</mi><mn>2</mn></msub><mo separator="true">,</mo><mtext> </mtext><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mtext> </mtext><mo separator="true">,</mo><msub><mi>O</mi><mi>t</mi></msub><mo separator="true">,</mo><msub><mi>R</mi><mi>t</mi></msub><mo separator="true">,</mo><msub><mi>A</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">
H_t=O_1,R_1,A_1,\ O_2,R_2,A_2,\ ...\ ,O_t,R_t,A_t
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mspace"> </span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
</li>
<li>
<p>就是智能体在时间<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>以前的所有的交互变量</p>
</li>
<li>
<p>根据历史：</p>
<ul>
<li>智能体选择动作<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>A</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">A_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></li>
<li>环境产生新的观测<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>O</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">O_{t+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span>和奖励<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">R_{t+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span></span></span></span></li>
</ul>
</li>
<li>
<p><strong>状态</strong>是历史的一种表达，根据状态我们可以判断接下来发生什么</p>
</li>
<li>
<p>本质上，<strong>状态是历史的一个函数<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>H</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">S_t=f(H_t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></strong></p>
</li>
</ul>
<h3 id="状态的例子" tabindex="-1"><a class="header-anchor" href="#状态的例子" aria-hidden="true">#</a> 状态的例子</h3>
<ul>
<li>
<p>下棋时，棋盘现在的布局可以被认为是状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">S_t=Q_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
</li>
<li>
<p>玩打砖块游戏时，前几帧的观测被认为是状态
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msub><mi>O</mi><mrow><mi>t</mi><mo>−</mo><mn>3</mn></mrow></msub><mo separator="true">,</mo><msub><mi>O</mi><mrow><mi>t</mi><mo>−</mo><mn>2</mn></mrow></msub><mo separator="true">,</mo><msub><mi>O</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><msub><mi>O</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">
S_t=O_{t-3},O_{t-2},O_{t-1},O_t
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">−</span><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">−</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
</li>
<li>
<p>玩CS时，可能整个历史都被认为是状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msub><mi>H</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">S_t=H_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
</li>
</ul>
<h3 id="环境状态" tabindex="-1"><a class="header-anchor" href="#环境状态" aria-hidden="true">#</a> 环境状态</h3>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/environment-states.png" alt="environment-states"></p>
<ul>
<li>环境状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>S</mi><mi>t</mi><mi>e</mi></msubsup></mrow><annotation encoding="application/x-tex">S^e_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">e</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span>是环境的内部表达</li>
<li><strong>所有能够影响环境产生观测/奖励的数据都被认为是环境状态的一部分</strong></li>
<li>环境状态一般是智能体观察不到的</li>
<li>即使环境状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>S</mi><mi>t</mi><mi>e</mi></msubsup></mrow><annotation encoding="application/x-tex">S_t^e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">e</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span>可见的，一般也包含了不相关的信息</li>
</ul>
<h3 id="智能体状态" tabindex="-1"><a class="header-anchor" href="#智能体状态" aria-hidden="true">#</a> 智能体状态</h3>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/intelligent-agent-state.png" alt="intelligent-agent-state"></p>
<ul>
<li>
<p>智能体状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>S</mi><mi>t</mi><mi>a</mi></msubsup></mrow><annotation encoding="application/x-tex">S^a_t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span>是智能体的内部表达</p>
</li>
<li>
<p><strong>所有能够影响智能体做出下一个动作的数据都被认为是智能体状态的一部分</strong></p>
</li>
<li>
<p>强化学习中使用的状态</p>
</li>
<li>
<p>智能体状态可能是历史的任何函数
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>S</mi><mi>t</mi><mi>a</mi></msubsup><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>H</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
S_t^a=f(H_t)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></p>
</li>
</ul>
<h3 id="环境状态和智能体状态对比" tabindex="-1"><a class="header-anchor" href="#环境状态和智能体状态对比" aria-hidden="true">#</a> 环境状态和智能体状态对比</h3>
<ul>
<li>机器人控制
<ul>
<li>环境状态：所有机械零件的参数、状态等</li>
<li>智能体状态：传感器所获得的数据</li>
</ul>
</li>
<li>3D游戏
<ul>
<li>环境状态：所有的游戏参数以及对手信息</li>
<li>智能体状态：玩家所能看到的观测</li>
</ul>
</li>
</ul>
<p><strong>要点</strong></p>
<ul>
<li>对于智能体来说，环境状态是未知的，智能体状态是已知的</li>
<li>智能体通过智能体的状态做出相应的动作</li>
<li>没有特殊说明的情况下，我们所说的状态均指智能体状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msubsup><mi>S</mi><mi>t</mi><mi>a</mi></msubsup></mrow><annotation encoding="application/x-tex">S_t=S_t^a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span></li>
</ul>
<h3 id="全观测和部分观测环境" tabindex="-1"><a class="header-anchor" href="#全观测和部分观测环境" aria-hidden="true">#</a> 全观测和部分观测环境</h3>
<ul>
<li>全观测
<ul>
<li>智能体能够直接观测到环境状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>Q</mi><mi>t</mi></msub><mo>=</mo><msubsup><mi>S</mi><mi>t</mi><mi>a</mi></msubsup><mo>=</mo><msubsup><mi>S</mi><mi>t</mi><mi>e</mi></msubsup></mrow><annotation encoding="application/x-tex">Q_t=S_t^a=S_t^e</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">Q</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">e</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span></li>
<li>或者说智能体状态<strong>等价于</strong>环境状态（注意不是相等，因为环境状态含有噪声）</li>
<li>这是强化学习的主要研究问题（之后详述）——马尔科夫决策过程</li>
</ul>
</li>
<li>部分观测
<ul>
<li>智能体<strong>不直接</strong>观测到环境状态</li>
<li>智能体状态<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal">≠</mo></mrow><annotation encoding="application/x-tex">\neq</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span></span></span></span>环境状态</li>
<li>部分观测下的马尔科夫决策问题</li>
</ul>
</li>
</ul>
<h2 id="动作" tabindex="-1"><a class="header-anchor" href="#动作" aria-hidden="true">#</a> 动作</h2>
<ul>
<li>
<p>动作是智能体主动<strong>和环境交互的媒介</strong></p>
</li>
<li>
<p>动作必须对环境起到一定的控制作用（尤其是对奖励）</p>
<p>即动作序列<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>A</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>A</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>A</mi><mn>3</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">A_1,A_2,A_3,...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span>能够影响智能体的回报值</p>
</li>
</ul>
<p><strong>要点</strong></p>
<ul>
<li>动作要能改变未来所能获得的奖励
<ul>
<li>打砖块时上/下动作不能改变环境</li>
</ul>
</li>
<li>奖励的设置要能被动作改变
<ul>
<li>比如时间的流逝是不受改变的</li>
</ul>
</li>
</ul>
<p>注：如果上述两点不满足，那么就无法解这个强化学习问题。</p>
<h1 id="智能体的组成" tabindex="-1"><a class="header-anchor" href="#智能体的组成" aria-hidden="true">#</a> 智能体的组成</h1>
<h2 id="智能体的主要组成部分" tabindex="-1"><a class="header-anchor" href="#智能体的主要组成部分" aria-hidden="true">#</a> 智能体的主要组成部分</h2>
<p>**智能体(agent)**是强化学习需要优化的部分。</p>
<p>一个强化学习的智能体主要由以下一个或几个部分组成：</p>
<ul>
<li>策略（Policy）</li>
<li>值函数（value function）</li>
<li>模型（model）</li>
</ul>
<p>注：这里只是描述，后续会对这几个部分详述。</p>
<h2 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h2>
<ul>
<li>策略是智能体的核心，我们最终的目的就是找到一个策略</li>
<li>通过策略可以描述智能体的行为</li>
<li>它是一个从状态到动作的映射</li>
<li>直观上描述就是：<strong>当智能体在什么状态时应该做什么事</strong></li>
<li>策略分两大类：
<ul>
<li>确定性策略：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">a=\pi(s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span></li>
<li>随机性策略：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>a</mi><mi mathvariant="normal">∣</mi><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mi>P</mi><mo stretchy="false">[</mo><msub><mi>A</mi><mi>t</mi></msub><mo>=</mo><mi>a</mi><mi mathvariant="normal">∣</mi><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>s</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\pi(a|s)=P[A_t=a|S_t=s]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mord">∣</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mclose">]</span></span></span></span></li>
</ul>
</li>
</ul>
<h2 id="值函数" tabindex="-1"><a class="header-anchor" href="#值函数" aria-hidden="true">#</a> 值函数</h2>
<ul>
<li>值函数是对回报值的预测（期望）</li>
<li><strong>值函数主要用来评价不同状态的好坏</strong></li>
<li>可以用来指导动作的选择</li>
</ul>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mtext>v</mtext><mi>π</mi></msub><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="double-struck">E</mi><mo stretchy="false">[</mo><msub><mi>G</mi><mi>t</mi></msub><mi mathvariant="normal">∣</mi><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>s</mi><mo stretchy="false">]</mo><mo>=</mo><mi mathvariant="double-struck">E</mi><mo stretchy="false">[</mo><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>γ</mi><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">∣</mi><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>s</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">
\text{v}_{\pi}(s)=\mathbb{E}[G_t|S_t=s]=\mathbb{E}[R_{t+1}+\gamma R_{t+2}+...|S_t=s]
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord text"><span class="mord">v</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">π</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathbb">E</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathbb">E</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">...∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mclose">]</span></span></span></span></span></p>
<h2 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h2>
<ul>
<li>
<p>这里的模型指智能体所拥有的对环境的预测模型，主要包含两部分：</p>
<ul>
<li>
<p>P：预测下一个状态是什么</p>
</li>
<li>
<p>R：预测下一奖励是什么
<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><msubsup><mi>P</mi><mrow><mi>s</mi><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><mi>a</mi></msubsup><mo>=</mo><mi mathvariant="double-struck">P</mi><mo stretchy="false">[</mo><msub><mi>S</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi mathvariant="normal">∣</mi><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>s</mi><mo separator="true">,</mo><msub><mi>A</mi><mi>t</mi></msub><mo>=</mo><mi>a</mi><mo stretchy="false">]</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><msubsup><mi>R</mi><mi>s</mi><mi>a</mi></msubsup><mo>=</mo><mi mathvariant="double-struck">E</mi><mo stretchy="false">[</mo><msub><mi>R</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub><mi mathvariant="normal">∣</mi><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><mi>s</mi><mo separator="true">,</mo><msub><mi>A</mi><mi>t</mi></msub><mo>=</mo><mi>a</mi><mo stretchy="false">]</mo></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">
\begin{aligned}
&amp;P_{ss&#x27;}^{a}=\mathbb{P}[S_{t+1}=s&#x27;|S_t=s,A_t=a]\\
&amp;R_s^a=\mathbb{E}[R_{t+1}|S_t=s,A_t=a]
\end{aligned}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3em;vertical-align:-1.25em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.75em;"><span style="top:-3.75em;"><span class="pstrut" style="height:2.84em;"></span><span class="mord"></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:2.84em;"></span><span class="mord"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.75em;"><span style="top:-3.91em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-2.453em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6828em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathbb">P</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mclose">]</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-2.453em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathbb">E</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">s</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mclose">]</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span></span></span></span></span></span></p>
</li>
</ul>
</li>
<li>
<p>这里我们将环境看成一个黑盒子，只关心其输入输出</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>P</mi><mrow><mi>s</mi><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><mi>a</mi></msubsup></mrow><annotation encoding="application/x-tex">P_{ss&#x27;}^a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9583em;vertical-align:-0.275em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.425em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6828em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.275em;"><span></span></span></span></span></span></span></span></span></span>是一个概率</p>
<ul>
<li>确定性环境</li>
<li>随机性环境</li>
</ul>
</li>
<li>
<p>P和R可能是不精确的</p>
</li>
</ul>
<h2 id="迷宫的例子" tabindex="-1"><a class="header-anchor" href="#迷宫的例子" aria-hidden="true">#</a> 迷宫的例子</h2>
<p><strong>迷宫描述：</strong></p>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/labyrinth.png" alt="labyrinth"></p>
<ul>
<li>奖励：每走一步获得-1的奖励</li>
<li>动作：上下左右</li>
<li>状态：智能体的位置</li>
</ul>
<p><strong>迷宫策略：</strong></p>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/labyrinth-strategy.png" alt="labyrinth-strategy"></p>
<ul>
<li>图中的箭头描述了<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\pi(s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span>——确定性策略</li>
</ul>
<p><strong>迷宫值函数：</strong></p>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/labyrinth-svalue-function.png" alt="labyrinth-svalue-function"></p>
<ul>
<li>图中的数字代表了<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>V</mi><mi>π</mi></msub><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">V_π(s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.2222em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">π</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span></span></span></span>——按照π进行的值函数</li>
</ul>
<p><strong>迷宫模型：</strong></p>
<p><img src="@source/docs/machine-learning/deep-learning/reinforcement-learning/reinforcement-learning/reinforcement-learning-introduction/pic/labyrinth-model.png" alt="labyrinth-model"></p>
<ul>
<li>网格的布局即代表了<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>P</mi><mrow><mi>s</mi><msup><mi>s</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><mi>a</mi></msubsup></mrow><annotation encoding="application/x-tex">P_{ss&#x27;}^a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9583em;vertical-align:-0.275em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.425em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6828em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.275em;"><span></span></span></span></span></span></span></span></span></span>——确定性环境</li>
<li>数值代表了<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>R</mi><mi>s</mi><mi>a</mi></msubsup></mrow><annotation encoding="application/x-tex">R_s^a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9303em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.453em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span></li>
</ul>
<h1 id="强化学习的分类" tabindex="-1"><a class="header-anchor" href="#强化学习的分类" aria-hidden="true">#</a> 强化学习的分类</h1>
<h2 id="按环境分类" tabindex="-1"><a class="header-anchor" href="#按环境分类" aria-hidden="true">#</a> 按环境分类</h2>
<ul>
<li>全观测环境下的强化学习</li>
<li>部分可观测环境下的强化学习</li>
</ul>
<h2 id="按智能体的成分分类" tabindex="-1"><a class="header-anchor" href="#按智能体的成分分类" aria-hidden="true">#</a> 按智能体的成分分类</h2>
<ul>
<li>基于值函数：学习值函数</li>
<li>基于策略：学习策略</li>
<li>Actor Critic：同时学习策略和值函数</li>
</ul>
<h2 id="按有无模型分类" tabindex="-1"><a class="header-anchor" href="#按有无模型分类" aria-hidden="true">#</a> 按有无模型分类</h2>
<ul>
<li>无模型强化学习</li>
<li>基于模型的强化学习</li>
</ul>
<h2 id="按使用的手段分类" tabindex="-1"><a class="header-anchor" href="#按使用的手段分类" aria-hidden="true">#</a> 按使用的手段分类</h2>
<ul>
<li>传统强化学习</li>
<li>深度强化学习</li>
</ul>
<h1 id="强化学习中的关键概念" tabindex="-1"><a class="header-anchor" href="#强化学习中的关键概念" aria-hidden="true">#</a> 强化学习中的关键概念</h1>
<h2 id="学习与规划" tabindex="-1"><a class="header-anchor" href="#学习与规划" aria-hidden="true">#</a> 学习与规划</h2>
<p>对于序列决策问题有两个基本问题</p>
<ul>
<li>强化学习
<ul>
<li>环境未知</li>
<li>智能体与环境进行交互</li>
<li>智能体会不断改善自己的策略</li>
</ul>
</li>
<li>规划（Planning）
<ul>
<li>环境已知</li>
<li>智能体可根据模型直接计算，不用交互</li>
<li>智能体会不断地改善自己的策略</li>
</ul>
</li>
</ul>
<p>注：</p>
<ul>
<li>既利用模型进行规划，又与环境交互进行强化学习，这就构成了基于模型的强化学习</li>
<li>当有很精确的环境模型时，可以直接用规划的方式解</li>
</ul>
<h2 id="探索与利用" tabindex="-1"><a class="header-anchor" href="#探索与利用" aria-hidden="true">#</a> 探索与利用</h2>
<ul>
<li>探索（Exploration）和利用（Exploitation）是强化学习的<strong>根本问题</strong></li>
<li>强化学习会根据过去的经验得到一个好的策略</li>
<li>但是还有没有更好的策略呢？</li>
<li><strong>探索</strong>是为了能够发现环境的更多信息</li>
<li><strong>利用</strong>是为了利用当前已知的信息来使回报值最大化</li>
<li>两者同等重要</li>
</ul>
<h2 id="评价和优化" tabindex="-1"><a class="header-anchor" href="#评价和优化" aria-hidden="true">#</a> 评价和优化</h2>
<p>在很多地方叫预测（Prediction）和控制（Control）</p>
<ul>
<li>评价：给一个策略，评价该策略的好坏，即求对应的值函数</li>
<li>优化：找到最优的策略</li>
</ul>
<p>这两个过程构成了强化学习的基本思路</p>
<h1 id="项目实践" tabindex="-1"><a class="header-anchor" href="#项目实践" aria-hidden="true">#</a> 项目实践</h1>
<h2 id="tictactoe三子棋对抗游戏" tabindex="-1"><a class="header-anchor" href="#tictactoe三子棋对抗游戏" aria-hidden="true">#</a> TicTacToe三子棋对抗游戏</h2>
<p>TicTacToe 是一个简单的对抗游戏，棋盘大小为3×3，谁先将棋盘连成线（横、竖、斜），谁就获得胜利。 (× 先手) 这里要求大家实现以下功能：</p>
<p>(a) 用数值的方式表示状态、动作、奖励（+1/0/-1 区分胜/平/负）</p>
<p>(b) 环境类，环境能够根据智能体的动作给出反馈。即实现成员函数step(a)-&gt;s,r</p>
<p>(c) 智能体类，并包含一个随机策略，即从剩下的空位中随机采样一个位置下。函数形式 policy(s)-&gt;a</p>
<p>(d) 通过仿真的形式，大量对弈，统计在都执行随机策略的情况下，先手和后手胜利的概率。</p>
<p>注：主要希望大家从代码层面体会环境和智能体之间的关系，用编程函数的形式去实现数学函数 R, P, π。</p>
<p>参考：<a href="https://blog.csdn.net/adorable_/article/details/78387055" target="_blank" rel="noopener noreferrer">三子棋简单实现<ExternalLinkIcon/></a></p>
<p>https://github.com/zkan/tictactoe/blob/master/tictactoe_rl.py</p>
<p>https://github.com/gabrieledcjr/TicTacToe</p>
<p>https://github.com/gabrieledcjr/TicTacToe/blob/master/tictactoeRL.py</p>
<h1 id="进一步思考" tabindex="-1"><a class="header-anchor" href="#进一步思考" aria-hidden="true">#</a> 进一步思考</h1>
<p>在使用强化学习方法解决问题的时候，最关键的一点就是能够定义强化学习问题。良好的强化学习定义是解决问题的先决条件。 选择你认为可以建模成强化学习的两个场景，并回答下面的问题</p>
<p>(a) 为什么这个场景需要强化学习来建模？监督学习，赌博机问题建模可不可以？</p>
<p>(b) 在这个强化学习问题中，环境和智能体分别指什么？</p>
<p>(c) 如何定义状态、动作和奖励？思考定义的合理性</p>
<p>(d) 是全观测的还是部分观测的？为什么？</p>
<p>(e) 环境模型已知还是未知？</p>
<p>(f) 你所认为的最佳策略应该是确定性的还是随机性的？</p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="http://www.shenlanxueyuan.com/my/course/96" target="_blank" rel="noopener noreferrer">《强化学习理论与实践》第一章：强化学习概述<ExternalLinkIcon/></a></li>
</ul>
<p>本文主要参考此视频课程。</p>
</div></template>


