<template><div><h1 id="ddpg" tabindex="-1"><a class="header-anchor" href="#ddpg" aria-hidden="true">#</a> DDPG</h1>
<ul>
<li><RouterLink to="/docs/Engineering/reinforcement-learning/reinforcement-learning/paper/paper.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/OgBhIoWe4HptIEMYJnBOlw" target="_blank" rel="noopener noreferrer">一文七问 | 经典论文：利用深度强化学习进行连续动作控制（DDPG）<ExternalLinkIcon/></a></li>
</ul>
<p>本篇推文将为大家介绍 DeepMind 团队于 2016 年在人工智能领域顶级会议 ICLR 上发表的一篇论文: Continuous Control with Deep Reinforcement Learning。该论文介绍了一种用于解决连续动作空间的深度强化学习方法。具体为：基于 DQN 与 DPG 的思想，利用深度网络对高维连续动作策略进行逼近，构成一种无模型的 Actor-Critic 结构的 off-policy 算法。本文同时加入了软更新、经验回放和批标准化的技巧，用于提高训练稳定性。</p>
</div></template>


