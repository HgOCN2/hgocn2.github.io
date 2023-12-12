<template><div><h1 id="colossalchat" tabindex="-1"><a class="header-anchor" href="#colossalchat" aria-hidden="true">#</a> ColossalChat</h1>
<ul>
<li><RouterLink to="/docs/engineering/natural-language-processing/large-language-model/rlhf/rlhf.html">返回上层目录</RouterLink></li>
</ul>
<p>作为当下最受欢迎的开源 AI 大模型解决方案，Colossal-AI 率先建立了包含**监督数据集收集-&gt;监督微调-&gt;奖励模型训练-&gt;强化学习微调的完整RLHF****流程，以LLaMA为基础预训练模型，推出ColossalChat，<strong>是目前最接近ChatGPT原始技术方案的实用开源项目</strong>!</p>
<p>ColossalChat 开源了基于LLaMA模型，复现训练ChatGPT 三个阶段的完整代码。</p>
<p>github地址：https://github.com/hpcaitech/ColossalAI</p>
<p>包含以下内容</p>
<ol>
<li><strong>Demo</strong>：可直接在线体验模型效果，无需注册或 waitinglist</li>
<li><strong>训练代码</strong>：开源完整 RLHF 训练代码，已开源至含 7B 和 13B 两种模型</li>
<li><strong>数据集</strong>：开源 104K 中、英双语数据集</li>
<li><strong>推理部署</strong>：4bit 量化推理 70 亿参数模型仅需 4GB 显存</li>
<li><strong>模型权重</strong>：仅需单台服务器少量算力即可快速复现</li>
<li>更大规模模型、数据集、其他优化等将保持高速迭代添加</li>
</ol>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/583485737/answer/2958341615" target="_blank" rel="noopener noreferrer">有代码的话本地搭建一个 ChatGPT 可行吗？<ExternalLinkIcon/></a></li>
</ul>
</div></template>


