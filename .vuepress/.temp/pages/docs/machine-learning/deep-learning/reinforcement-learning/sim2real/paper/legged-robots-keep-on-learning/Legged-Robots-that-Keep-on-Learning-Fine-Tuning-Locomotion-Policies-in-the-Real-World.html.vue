<template><div><h1 id="legged-robots-that-keep-on-learning-fine-tuning-locomotion-policies-in-the-real-world" tabindex="-1"><a class="header-anchor" href="#legged-robots-that-keep-on-learning-fine-tuning-locomotion-policies-in-the-real-world" aria-hidden="true">#</a> Legged Robots that Keep on Learning: Fine-Tuning Locomotion Policies in the Real World</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/deep-learning/reinforcement-learning/sim2real/paper/paper.html">返回上层目录</RouterLink></li>
</ul>
<p>paper: <a href="https://arxiv.org/abs/2110.05457" target="_blank" rel="noopener noreferrer">Legged Robots that Keep on Learning: Fine-Tuning Locomotion Policies in the Real World<ExternalLinkIcon/></a></p>
<p>虽然模拟可以辅助收集数据，但是在现实世界中收集数据对于微调模拟策略或在新环境中适应现有策略至关重要。</p>
<p>在学习过程中，机器人很容易失败，并可能会对它自身和周围环境造成损害，特别是在探索如何与世界互动的早期学习阶段，需要安全地收集训练数据，使得机器人不仅学习技能，还可以从故障中自主恢复。</p>
<p>研究人员提出了一个安全的 RL 框架，在「学习者策略」和「安全恢复策略」之间进行切换，前者优化为执行所需任务，后者防止机器人处于不安全状态；训练了一个复位策略，这样机器人就能从失败中恢复过来，比如在跌倒后学会自己站起来。</p>
</div></template>


