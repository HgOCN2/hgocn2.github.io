import{_ as r,r as t,o as i,c as s,b as n,e as o,w as d,d as e}from"./app-VitiyI7N.js";const g={},c=n("h1",{id:"inner-monologue-embodied-reasoning-through-planning-with-language-models",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#inner-monologue-embodied-reasoning-through-planning-with-language-models","aria-hidden":"true"},"#"),e(" Inner Monologue: Embodied Reasoning through Planning with Language Models")],-1),h={href:"https://arxiv.org/pdf/2210.06407.pdf",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"当LLM遇上机器人",-1),_=n("p",null,"大型语言模型(LLM)的一个特性是能够将描述和上下文编码成「人和机器都能理解」的格式。",-1),p=n("p",null,"当把LLM应用到机器人技术中时，可以让用户仅通过自然语言指令就能给机器人分配任务；当与视觉模型和机器人学习方法相结合时，LLM 为机器人提供了一种理解用户请求的上下文的方法，并能够对完成请求所采取的行动进行规划。",-1),L=n("p",null,"研究人员选择使用 LLM 来预测完成长期任务的步骤顺序，以及一个表示机器人在给定情况下实际能够完成的技能的affordance 模型。",-1),m=n("p",null,"同时拥有 LLM 和affordance 模型并不意味着机器人能够成功地完成任务，通过内心独白（ Inner Monologue），可以结束基于 LLM 的任务规划中的循环；利用其他信息来源，如人工反馈或场景理解，可以检测机器人何时无法正确完成任务。",-1),f=n("p",null,"利用Everyday Robots中的一个机器人，研究人员发现 LLM 可以有效地重新规划当前或以前的失败计划步，机器人可以从失败中恢复并完成复杂的任务，比如「把一个可乐放在最上面的抽屉里」。",-1),M=n("p",null,"在基于 LLM 的任务规划中，其中一个突出能力就是机器人可以对高级目标中间任务的变化做出反应：例如，用户可以告诉机器人在发生的事，通过提供快速纠正或重定向机器人到另一个任务，从而可以改变已经规划好的行动，对于让用户交互式地控制和定制机器人任务特别有用。",-1),b={href:"https://mp.weixin.qq.com/s/JRCQP2S3CbLtUaq8MkP4pQ",target:"_blank",rel:"noopener noreferrer"};function x(k,I){const a=t("RouterLink"),l=t("ExternalLinkIcon");return i(),s("div",null,[c,n("ul",null,[n("li",null,[o(a,{to:"/docs/machine-learning/artificial-general-intelligence/autopilot/planning/llm-based-planning/llm-based-planning.html"},{default:d(()=>[e("返回上层目录")]),_:1})])]),n("p",null,[e("paper: "),n("a",h,[e("Inner Monologue"),o(l)])]),u,_,p,L,m,f,M,n("p",null,[n("a",b,[e("Google AI年终总结第六弹：没有波士顿动力的谷歌机器人，发展得怎么样了？"),o(l)])])])}const E=r(g,[["render",x],["__file","Inner-Monologue-Embodied-Reasoning-through-Planning-with-Language-Models.html.vue"]]);export{E as default};