import{_ as a,r,o as s,c as d,b as e,e as n,w as i,d as t}from"./app-VitiyI7N.js";const c={},_=e("h1",{id:"darknet深度学习框架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#darknet深度学习框架","aria-hidden":"true"},"#"),t(" DarkNet深度学习框架")],-1),u={href:"https://blog.csdn.net/weixin_41722370/article/details/90340347?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-9.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-9.control",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"darknet是使用C和CUDA编写的开源的神经网络框架，它快速且使用简单，之前在海康做caffe方面的工作，本想研究caffe的源代码，但是被导师推荐阅读darknet源代码加深对深度学习的理解而且还能巩固C语言，由此记录一下我的darknet源码阅读之路。",-1),p={href:"https://blog.csdn.net/mao_hui_fei/article/details/113820303?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.control&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"darknet是一个较为轻型的完全基于C与CUDA的开源深度学习框架，其主要特点就是容易安装，没有任何依赖项（OpenCV都可以不用），移植性非常好，支持CPU与GPU两种计算方式。",-1),f={href:"https://blog.csdn.net/u010122972/article/details/83541978",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"优点：Darknet是一个比较小众的深度学习框架，没有社区，主要靠作者团队维护，所以推广较弱，用的人不多。而且由于维护人员有限，功能也不如tensorflow等框架那么强大，但是该框架还是有一些独有的优点：",-1),b=e("p",null,"相比于TensorFlow来说，darknet并没有那么强大，但这也成了darknet的优势：",-1),g=e("ol",null,[e("li",null,"darknet完全由C语言实现，没有任何依赖项，当然可以使用OpenCV，但只是用其来显示图片、为了更好的可视化；"),e("li",null,"darknet支持CPU（所以没有GPU也不用紧的）与GPU（CUDA/cuDNN，使用GPU当然更块更好了）；"),e("li",null,"正是因为其较为轻型，没有像TensorFlow那般强大的API，所以给我的感觉就是有另一种味道的灵活性，适合用来研究底层，可以更为方便的从底层对其进行改进与扩展；")],-1),C={href:"https://blog.csdn.net/xunan003/article/details/79932888",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"darknet深度学习框架源码分析：详细中文注释，涵盖框架原理与实现语法分析",-1),D=e("p",null,"https://github.com/hgpvision/darknet",-1);function P(U,v){const l=r("RouterLink"),o=r("ExternalLinkIcon");return s(),d("div",null,[_,e("ul",null,[e("li",null,[n(l,{to:"/docs/machine-learning/computer-vision/yolo/yolo.html"},{default:i(()=>[t("返回上层目录")]),_:1})])]),e("p",null,[e("a",u,[t("darknet整体框架"),n(o)])]),h,e("p",null,[e("a",p,[t("Darknet框架简介"),n(o)])]),k,e("p",null,[e("a",f,[t("Darknet概述"),n(o)])]),m,b,g,e("p",null,[e("a",C,[t("Darknet框架简介"),n(o)])]),x,D])}const L=a(c,[["render",P],["__file","darknet.html.vue"]]);export{L as default};
