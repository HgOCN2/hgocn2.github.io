import{_ as l,r as o,o as i,c as s,b as e,e as t,w as c,d as n}from"./app-VitiyI7N.js";const d={},_=e("h1",{id:"gato-a-generalist-agent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gato-a-generalist-agent","aria-hidden":"true"},"#"),n(" Gato: A Generalist Agent")],-1),p={href:"https://arxiv.org/pdf/2205.06175.pdf",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"这就是multi-task model推到了极致，跟AGI没什么关系。也许transformer model不同任务之间更容易共享权重（即，用共享权重，不同任务之间冲突比较少）。至于模型怎么共享的权重，可能方式很奇怪，比如处理语言的和处理机器人动作的用同一个权重subset，data driven的特点是只要那样做不会让性能变差，模型就可以那么做，但背后并没有什么可以interpret的。",-1),u=e("p",null,"这么做有个好处是用户下游的新任务，用这个fine-tune一下应该性能就可以不错，不需要选模型了，对于researcher发论文来说就又多了一个强baseline",-1),f=e("p",null,"===",-1),g={href:"https://www.jiqizhixin.com/articles/2022-05-13-5",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/amusi1994/article/details/124791731",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/csdnnews/article/details/124804920",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.zhihu.com/question/532624382/answer/2485443378",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/PHCHl44CjFt4XFBBQasZpw",target:"_blank",rel:"noopener noreferrer"};function w(x,A){const a=o("RouterLink"),r=o("ExternalLinkIcon");return i(),s("div",null,[_,e("ul",null,[e("li",null,[t(a,{to:"/docs/machine-learning/artificial-general-intelligence/industry-application/deepmind/deepmind.html"},{default:c(()=>[n("返回上层目录")]),_:1})])]),e("p",null,[n("pdf: "),e("a",p,[n("Gato: A Generalist Agent"),t(r)])]),h,u,f,e("ul",null,[e("li",null,[e("a",g,[n("DeepMind「通才」AI智能体Gato来了，多模态、多任务，受大语言模型启发"),t(r)])]),e("li",null,[e("a",m,[n("重磅！DeepMind新作Gato：一个模型、一套权重通吃600+视觉文本和决策任务！"),t(r)])]),e("li",null,[e("a",k,[n("超越GPT-3，DeepMind推出新宠Gato，却被质疑“换汤不换药”？"),t(r)])]),e("li",null,[e("a",G,[n("如何评价 DeepMind 新发布的通用人工智能 Gato？"),t(r)])]),e("li",null,[e("a",b,[n("Gato炸场！通用人工智能最新突破：一个模型、一套权重通吃600+视觉文本和决策任务，DeepMind两年研究一朝公开"),t(r)])])])])}const B=l(d,[["render",w],["__file","A-Generalist-Agent.html.vue"]]);export{B as default};
