<template><div><h1 id="timechamber-a-massively-parallel-large-scale-self-play-framework" tabindex="-1"><a class="header-anchor" href="#timechamber-a-massively-parallel-large-scale-self-play-framework" aria-hidden="true">#</a> TimeChamber: A Massively Parallel Large Scale Self-Play Framework</h1>
<ul>
<li><RouterLink to="/docs/Engineering/reinforcement-learning/industry-application/inspir-ai/time-chamber/time-chamber.html">返回上层目录</RouterLink></li>
</ul>
<p>TimeChamber: A Massively Parallel Large Scale Self-Play Framework</p>
<p>TimeChamber: 大规模并行的大规模自对弈框架</p>
<p>github: <a href="https://github.com/inspirai/TimeChamber" target="_blank" rel="noopener noreferrer">inspirai/TimeChamber<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/Engineering/reinforcement-learning/industry-application/inspir-ai/time-chamber/time-chamber/pic/algorithm.jpg" alt="algorithm"></p>
<p>TimeChamber里面的任务包括了：</p>
<ul>
<li>
<p>Humanoid Strike</p>
</li>
<li>
<p>Ant Sumo</p>
</li>
<li>
<p>Ant Battle</p>
</li>
</ul>
<p>支持自我博弈训练：</p>
<p>Self-Play Training</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python train.py <span class="token assign-left variable">task</span><span class="token operator">=</span>MA_Humanoid_Strike <span class="token assign-left variable">headless</span><span class="token operator">=</span>True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


