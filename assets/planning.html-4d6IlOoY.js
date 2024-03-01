import{_ as l,r,o as s,c,b as e,e as t,w as a,d as n}from"./app-VitiyI7N.js";const h={},p=e("h1",{id:"规划",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#规划","aria-hidden":"true"},"#"),n(" 规划")],-1),u=e("p",null,"===",-1),_={href:"https://www.zhihu.com/question/576631261/answer/3106771050",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"这种非凸的问题没有万灵药，只能根据具体系统来看。比如你要是搞个小车的避障，如果障碍物很稀疏的，可能a*就够了。要是很多障碍物还要考虑运动学，rrt可能是不错的选择。如果赛道竞速，如何过弯，那得考虑动力学、胎地模型，基本就是最优化。(还有邪派武功RL)",-1),m=e("p",null,"最近比较关注Russ Tedrake他们搞的graph of convex set的方法，感觉理论很漂亮。这个是他们最近一篇文章的abstract，可以看看大佬对这个问题的看法:",-1),g=e("p",null,"Computing optimal, collision-free trajectories for high-dimensional systems is a challenging problem. Sampling-based planners struggle with the dimensionality, whereas trajectory optimizers may get stuck in local minima due to inherent nonconvexities in the optimization landscape. The use of mixed-integer programming to encapsulate these nonconvexities and find globally optimal trajectories has recently shown great promise, thanks in part to tight convex relaxations and efficient approximation strategies that greatly reduce runtime.",-1),f={href:"https://www.zhihu.com/question/319353555/answer/3102886996",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"Btraj是一个在线的四旋翼无人机的运动规划框架，主要用于未知环境中的自主导航。基于机载状态估计和环境感知，采用基于快速行进（FM *）的路径搜索方法，从基于构建的欧氏距离场（ESDF）中寻找路径，以实现更好的时间分配。通过对环境进行膨胀生成四旋翼无人机的飞行走廊。使用伯恩斯坦多项式将轨迹表示为分段Bezier曲线，并将整个轨迹生成问题转换成凸问题。通过使用Bezier曲线，可以确保轨迹的安全性和高阶动力学可行性，可以将轨迹完全限制在安全区域内。",-1),b={href:"https://www.zhihu.com/zvideo/1599031183647617024",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.zhihu.com/question/557673420/answer/2777046020",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"这里分享两点观察：1）强化学习在整个机器学习圈子里发展步调要慢一个档位，其他领域诸如CV、NLP的发展领先于强化学习；2）从历史上来看，其他领域的先进算法最终都会被人用在强化学习上，并成为一个个的爆点，比如历史上的VAE+RL、GAN+RL、Neural Turing Machine+RL……。基于这个观察，我们姑且可以预言一波近期的爆点了。",-1),L={href:"http://diffusion-planning.github.io",target:"_blank",rel:"noopener noreferrer"};function z(R,v){const i=r("RouterLink"),o=r("ExternalLinkIcon");return s(),c("div",null,[p,e("ul",null,[e("li",null,[t(i,{to:"/docs/machine-learning/artificial-general-intelligence/autopilot/autopilot.html"},{default:a(()=>[n("返回上层目录")]),_:1})]),e("li",null,[t(i,{to:"/docs/machine-learning/artificial-general-intelligence/autopilot/planning/llm-based-planning/llm-based-planning.html"},{default:a(()=>[n("基于LLM大语言模型的规划")]),_:1})])]),u,e("p",null,[e("a",_,[n("对于机器人轨迹规划来说，优化的方式是当今主流吗?"),t(o)])]),d,m,g,e("p",null,[e("a",f,[n("为啥国内做轨迹优化的比较少呢？"),t(o)])]),w,e("p",null,[e("a",b,[n("贝塞尔曲线之美"),t(o)])]),e("p",null,[e("a",x,[n("离线强化学习之后，强化的下一个爆点是什么？"),t(o)])]),k,e("p",null,[n("首先是热门的技术。Transformer在其他领域方兴未艾，而在RL领域中还正在兴起，爆发只是时间问题。已经开始的爆点就是Diffusion Model+RL（分享一个可视化效果不错的项目，"),e("a",L,[n("diffusion-planning.github.io"),t(o)]),n("）。")])])}const B=l(h,[["render",z],["__file","planning.html.vue"]]);export{B as default};