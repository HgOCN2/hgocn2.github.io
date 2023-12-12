<template><div><h1 id="基于强化学习的控制" tabindex="-1"><a class="header-anchor" href="#基于强化学习的控制" aria-hidden="true">#</a> 基于强化学习的控制</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/control/control.html">返回上层目录</RouterLink></li>
</ul>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/641918952" target="_blank" rel="noopener noreferrer">Science Robotics 预定？ETH最新四足“跑酷”<ExternalLinkIcon/></a></p>
<p>23年6月26号，ETH在arxiv挂出了他们最新的论文，视频暂时还没有放出来。推测这篇应该是投了science robotics。</p>
<p>我们趁热打铁来分析一波这篇论文。</p>
<p>https://arxiv.org/pdf/2306.14874.pdf</p>
<p>“什么mpc和rl不实用，都是老一代思想”，mpc我不懂，rl在真实的运动控制上还是差的很远的。</p>
<p>我读博开始那会也是这么认为的，想想都觉得不靠谱，直到ETH的rl狗给所有做rl控制的人打了一剂强心针</p>
<p>eth基本上现在每年一篇science robotics，基本上都有用rl，算是现在四足rl标杆了。</p>
<p>谢谢分享，我还是第一次看到这个工作。RL做机器人我一直知道，做的最好的我以前以为是DeepMind的<a href="https://arxiv.org/abs/2008.12228" target="_blank" rel="noopener noreferrer">Towards General and Autonomous Learning of Core Skills: A Case Study in Locomotion<ExternalLinkIcon/></a>。DeepMind这个工作没有任何MPC，他就靠设计一个多层次的reward function然后不断training就出来了。DeepMind一直是致力于通用智能，我觉得他们搞的hierarchical RL来做控制方向还是很对的。相比之下ETH这个结构复杂的多，还需要MPC和一堆传统控制用的方法，效果上来说似乎ETH的好一点（从地形上看）。但是似乎还是比不过波士顿动力的人工调的MPC。</p>
<p>来自：<a href="https://www.zhihu.com/question/402251886/answer/2449239868" target="_blank" rel="noopener noreferrer">在实际工程系统中，MPC太复杂，难以做到realtime。因此都利用数据，MPC对比RL还有优势么?<ExternalLinkIcon/></a></p>
<p>这个Actor Critic网络是不是颇有点控制中反馈的意味：</p>
<p><img src="@source/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/control/reinforcement-learning-based-control/pic/rl-control-example.png" alt="rl-control-example"></p>
<p>来自：<a href="https://www.zhihu.com/question/402251886/answer/1294806970" target="_blank" rel="noopener noreferrer">在实际工程系统中，MPC太复杂，难以做到realtime。因此都利用数据，MPC对比RL还有优势么?<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/68960762" target="_blank" rel="noopener noreferrer">09-基于强化学习的固定翼无人机着陆飞行控制仿真<ExternalLinkIcon/></a></p>
<p>其中使用的代码来自<a href="https://github.com/tobiasfshr/deep-reinforcement-learning-drone-control" target="_blank" rel="noopener noreferrer">deep-reinforcement-learning-drone-control<ExternalLinkIcon/></a>。</p>
<p><a href="https://zhuanlan.zhihu.com/p/144544347" target="_blank" rel="noopener noreferrer">【重磅综述】如何在少量尝试下学习机器人强化学习控制<ExternalLinkIcon/></a></p>
</div></template>


