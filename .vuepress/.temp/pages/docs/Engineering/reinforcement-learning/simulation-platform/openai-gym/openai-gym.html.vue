<template><div><h1 id="openai的gym" tabindex="-1"><a class="header-anchor" href="#openai的gym" aria-hidden="true">#</a> OpenAI的Gym</h1>
<ul>
<li><RouterLink to="/docs/Engineering/reinforcement-learning/simulation-platform/simulation-platform.html">返回上层目录</RouterLink></li>
</ul>
<p><a href="https://www.gymlibrary.dev/" target="_blank" rel="noopener noreferrer">OpenAI Gym 官网<ExternalLinkIcon/></a></p>
<p>大家可以到官网上看一下GYM包含的环境。包含了从简单的Classic control、Toy text，到更复杂的MuJoCo、Robotics，当然包括Atari游戏。 环境还在不断扩展，现在也包括一些第三方的环境，例如围棋等。 所以我们经常用它来检验算法的有效性。</p>
<p>Gym的安装方式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip --default-timeout<span class="token operator">=</span><span class="token number">100</span> <span class="token function">install</span> gym <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/u013745804/article/details/78397106" target="_blank" rel="noopener noreferrer">Gym小记（二） 浅析Gym中的env<ExternalLinkIcon/></a></p>
<p>对倒立摆环境<a href="https://github.com/openai/gym/blob/master/gym/envs/classic_control/pendulum.py" target="_blank" rel="noopener noreferrer">Pendulum-v0<ExternalLinkIcon/></a>做了分析。</p>
<p><a href="https://zhuanlan.zhihu.com/p/462248870" target="_blank" rel="noopener noreferrer">gym例子及二次开发<ExternalLinkIcon/></a></p>
<p>给出一个最简单的例子，剖析了gym环境构建</p>
<p><a href="https://blog.csdn.net/stanleyrain/article/details/127880978" target="_blank" rel="noopener noreferrer">如何创建gym环境<ExternalLinkIcon/></a></p>
<p>这就比较复杂了</p>
</div></template>


