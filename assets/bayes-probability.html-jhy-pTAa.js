import{_ as m,r as l,o as r,c as o,b as s,e as t,w as c,d as a,a as i}from"./app-VitiyI7N.js";const p={},h=s("h1",{id:"贝叶斯概率",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#贝叶斯概率","aria-hidden":"true"},"#"),a(" 贝叶斯概率")],-1),d=s("h1",{id:"贝叶斯概率简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#贝叶斯概率简介","aria-hidden":"true"},"#"),a(" 贝叶斯概率简介")],-1),u=s("p",null,"我们后面会聊到贝叶斯网络，里面会讲到朴素贝叶斯，贝叶斯概率和朴素贝叶斯的关系就像是雷锋和雷峰塔的区别，就是JavaScript和Java的区别。朴素贝叶斯是假定条件独立，假定特征均衡，进行分类的非常重要的分类器，曾经也被誉为十大数据挖掘算法之一。而贝叶斯呢？得看上下文，贝叶斯公式是贝叶斯；说模型是用贝叶斯的方法做，那意思就是想加入先验，想把它的参数当作是随机变量。",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"A"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"B"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"B"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"A"),s("mo",{stretchy:"false"},")"),s("mo",null,"⋅"),s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"A"),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("mi",null,"P"),s("mo",{stretchy:"false"},"("),s("mi",null,"B"),s("mo",{stretchy:"false"},")")])])]),s("annotation",{encoding:"application/x-tex"}," P(A|B) = \\frac {P(B|A)\\cdot P(A)}{P(B)} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.363em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),g=s("p",null,[a("后验概率=(似然度"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"×")]),s("annotation",{encoding:"application/x-tex"},"\\times")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"×")])])]),a("先验概率)/标准化常量")],-1),y=i('<p>在生活中，我们无时不刻在面对这样的问题：根据给定一些信息，探求事物的真相，贝叶斯公式就是一个非常有力的工具，他被贝叶斯学派奉为佳臬，在输入法识别拼音，药物检测，医疗等等领域都有应用，解释了世界的概率性的一面，简单却有力。</p><p>怎么简单理解贝叶斯公式？ https://www.zhihu.com/question/51448623</p><p>你对贝叶斯统计都有怎样的理解？ https://www.zhihu.com/question/21134457</p><p>小学生都能理解的贝叶斯公式</p><p>https://zhuanlan.zhihu.com/p/22805488</p><p>【贝叶斯推断】基本概念</p><p>https://zhuanlan.zhihu.com/p/24832964</p><p>深入浅出朴素贝叶斯理论</p><p>https://zhuanlan.zhihu.com/p/24602462</p><h1 id="神奇而又美丽的贝叶斯方法" tabindex="-1"><a class="header-anchor" href="#神奇而又美丽的贝叶斯方法" aria-hidden="true">#</a> 神奇而又美丽的贝叶斯方法</h1><p>这篇文章是目前见过最形象的关于贝叶斯的解说了,对贝叶斯方法做了一个很好的讲解。</p>',11),f={href:"http://mindhacks.cn/2008/09/21/the-magical-bayesian-method/",target:"_blank",rel:"noopener noreferrer"},b=s("h1",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1),w=s("p",null,"===",-1),x={href:"https://zhuanlan.zhihu.com/p/42598338",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.zhihu.com/question/54082000/answer/1632000258",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"讲了贝叶斯里为什么那一项叫似然函数。",-1);function P(B,z){const n=l("RouterLink"),e=l("ExternalLinkIcon");return r(),o("div",null,[h,s("ul",null,[s("li",null,[t(n,{to:"/docs/machine-learning/mathematics/statistics/bayesian-analysis/bayesian-analysis.html"},{default:c(()=>[a("返回上层目录")]),_:1})])]),d,u,_,g,y,s("p",null,[s("a",f,[a("数学之美番外篇：平凡而又神奇的贝叶斯方法"),t(e)])]),b,w,s("p",null,[s("a",x,[a("似然和似然函数详解"),t(e)])]),s("p",null,[s("a",k,[a("如何理解似然函数?"),t(e)])]),v])}const L=m(p,[["render",P],["__file","bayes-probability.html.vue"]]);export{L as default};
