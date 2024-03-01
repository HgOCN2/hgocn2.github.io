import{_ as a,r as l,o as i,c as s,b as e,e as o,w as _,d as n}from"./app-VitiyI7N.js";const c={},u=e("h1",{id:"sim2real",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sim2real","aria-hidden":"true"},"#"),n(" Sim2Real")],-1),d=e("p",null,"===",-1),h={href:"https://www.sohu.com/a/472645232_121123911",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"其中，提到了",-1),m=e("p",null,[e("strong",null,"方法的分类")],-1),f=e("p",null,"sim2real 中的典型工作大致可以分为以下五类：",-1),g=e("li",null,[e("p",null,[e("strong",null,"Domain Adaption"),n(" 主要是通过学习一个模拟环境以及现实环境共同的状态到隐变量空间的映射，在模拟环境中，使用映射后的状态空间进行算法的训练；因而在迁移到现实环境中时，同样将状态映射到隐含空间后，就可以直接应用在模拟环境训练好的模型了。")])],-1),x=e("li",null,[e("p",null,[e("strong",null,"Progressive Network"),n("利用一类特殊的 Progressive Neural Network 来进行 sim2real。其主要思想类似于 cumulative learning，从简单任务逐步过渡到复杂任务（这里可以认为模拟器中的任务总是要比现实任务简单的）。")])],-1),v=e("p",null,[e("strong",null,"Inverse Dynamic Model"),n("通过在现实环境中学习一个逆转移概率矩阵来直接在现实环境中应用模拟环境中训练好的模型。")],-1),w={href:"https://williamd4112.github.io/pubs/corl19_self-adv.pdf",target:"_blank",rel:"noopener noreferrer"},k={href:"https://paper.yanxishe.com/questionDetail/9991",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[n("注：还有一节课是请Open AI的专家更深入地讲解collocation method，是用inverse dynamic model（反动态模型），即"),e("img",{src:"https://www.zhihu.com/equation?tex=u_t%3Df^{-1}(x_t%2Cx_{t%2B1})",alt:"u_t=f^{-1}(x_t,x_{t+1})"}),n("。但已经是最前沿model-based RL，所以我将不会写那节的笔记，有兴趣的同学可自行了解，我们最好还是快点开始model-free RL的学习。")],-1),R={href:"http://www.lninfo.com.cn:8088/ShowDetail.aspx?d=1022&id=ZLW20210924000000391510",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"一种基于强化学习和迁移学习的无人机自主飞行训练方法",-1),D=e("li",null,[e("p",null,"Domain Randomization 对模拟环境中的视觉信息或者物理参数进行随机化，例如对于避障任务，智能体在一个墙壁颜色、地板颜色等等或者摩擦力、大气压强会随机变化的模拟环境中进行学习。")],-1),I=e("p",null,"在这一部分我将介绍一下 OpenAI 在 sim2real 领域做出的一个工作，其地位类似于多智能体强化学习领域的 OpenAI Five。",-1),S=e("p",null,"4.1 Learning Dexterous In-Hand Manipulation",-1),y={href:"https://zhuanlan.zhihu.com/p/510951914",target:"_blank",rel:"noopener noreferrer"},A={href:"https://arxiv.org/pdf/2009.13303.pdf",target:"_blank",rel:"noopener noreferrer"};function N(z,B){const r=l("RouterLink"),t=l("ExternalLinkIcon");return i(),s("div",null,[u,e("ul",null,[e("li",null,[o(r,{to:"/docs/machine-learning/reinforcement-learning/reinforcement-learning.html"},{default:_(()=>[n("返回上层目录")]),_:1})])]),d,e("p",null,[e("a",h,[n("最新综述 | 强化学习中从仿真器到现实环境的迁移 "),o(t)])]),p,m,f,e("ul",null,[g,x,e("li",null,[v,e("p",null,[e("a",w,[n("Adversarial Active Exploration for Inverse Dynamics Model Learning"),o(t)])]),e("p",null,[e("a",k,[n("CS 294：Deep Reinforcement Learning（4）"),o(t)])]),b,e("p",null,[e("a",R,[L,o(t)])])]),D]),I,S,e("p",null,[e("a",y,[n("Sim2Real学习总结"),o(t)])]),e("p",null,[n("最近学习了Sim2Real领域的一些相关工作，以此文做一次学习总结，文章主要参照2020的一篇Survey："),e("a",A,[n("《Sim-to-Real Transfer in Deep Reinforcement Learning for Robotics: a Survey》"),o(t)])])])}const E=a(c,[["render",N],["__file","sim2real.html.vue"]]);export{E as default};