<template><div><h1 id="pix2code" tabindex="-1"><a class="header-anchor" href="#pix2code" aria-hidden="true">#</a> pix2code</h1>
<ul>
<li><RouterLink to="/blogs/deep-learning/recurrent-neural-network/long-short-term-memory-networks/long-short-term-memory-networks.html">返回上层目录</RouterLink></li>
</ul>
<p><img src="@source/blogs/deep-learning/recurrent-neural-network/long-short-term-memory-networks/pix2code/pic/paper.jpg" alt="paper"></p>
<p>pdf: <a href="https://arxiv.org/pdf/1705.07962.pdf" target="_blank" rel="noopener noreferrer">pix2code: Generating Code from a Graphical User Interface Screenshot<ExternalLinkIcon/></a></p>
<p>github: <a href="https://github.com/tonybeltramelli/pix2code" target="_blank" rel="noopener noreferrer">tonybeltramelli/pix2code<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650728064&amp;idx=1&amp;sn=adb744e599299916faa23545c2ab436e&amp;chksm=871b22feb06cabe83ba0e3268a7a8c0c486cf6f42427ab41814e69242f919b25bc7de06ea258&amp;scene=21" target="_blank" rel="noopener noreferrer">深度学习助力前端开发：自动生成GUI图代码（附试用地址）<ExternalLinkIcon/></a></li>
<li><a href="http://w4lle.com/2019/03/13/UI2Code-0/" target="_blank" rel="noopener noreferrer">UI2Code（一）pix2code<ExternalLinkIcon/></a></li>
<li></li>
</ul>
<ul>
<li><a href="https://cs.anu.edu.au/courses/CSPROJECTS/18S2/initialTalks/u6013787.pdf" target="_blank" rel="noopener noreferrer">UI Design to Code Skeleton<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了当前的几种生成代码的模型原理。</p>
<ul>
<li><a href="https://github.com/floydhub/pix2code-template/issues/2" target="_blank" rel="noopener noreferrer">I trained your project, but it always output the same DSL content no matter what images are given<ExternalLinkIcon/></a></li>
</ul>
<p>复现pix2code论文代码，发现损失在0.38左右就下不去了，然后生成的代码也有问题，不管给什么图片生成的代码都一样。因为显卡不足，把batchsize从默认的64改为了2。这里有个人也遇到了同样的问题。</p>
<ul>
<li>
<p><a href="https://lusing.blog.csdn.net/article/details/97273669" target="_blank" rel="noopener noreferrer">前端智能化漫谈 (1) - pix2code<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/lusing/article/details/97400787" target="_blank" rel="noopener noreferrer">前端智能化漫谈 (2) - pix2code实战篇<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://lusing.blog.csdn.net/article/details/99082951" target="_blank" rel="noopener noreferrer">前端智能化漫谈 (3) - pix2code推理部分解析<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://lusing.blog.csdn.net/article/details/99684397" target="_blank" rel="noopener noreferrer">前端智能化漫谈 (4) - pix2code结果编辑距离分析<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>这几篇博客大体上介绍了一下pix2code代码的实践。</p>
<ul>
<li><a href="">paper: Improving pix2code based Bi-directional LSTM</a></li>
</ul>
<p>这是用双向lstm代替了论文里的单向lstm，待看。</p>
<ul>
<li><a href="https://www.infoq.cn/article/cabmj-kx3xcyv9qbv02a" target="_blank" rel="noopener noreferrer">搞定复杂 GUI！西安交大提出前端设计图自动转代码新方法<ExternalLinkIcon/></a></li>
<li><a href="https://arxiv.org/abs/1810.11536" target="_blank" rel="noopener noreferrer">paper: Automatic Graphics Program Generation using Attention-Based Hierarchical Decoder<ExternalLinkIcon/></a></li>
</ul>
<p>这是西交大发的一篇论文，用了attention注意力机制的，但没给代码和数据集，说是和企业合作的，不便给。</p>
<ul>
<li><a href="https://github.com/samuelmat19/image2source-tf2" target="_blank" rel="noopener noreferrer">github samuelmat19/image2source-tf2 using trainsformer<ExternalLinkIcon/></a></li>
</ul>
<p>该代码使用了transformer技术。基本原理大概看了下，就是encoder使用vggnet，decoder使用transformer，感觉思路比较清晰。值得研究一下。</p>
<ul>
<li><a href="https://imgcook.taobao.org/" target="_blank" rel="noopener noreferrer">阿里imgcook<ExternalLinkIcon/></a></li>
<li><a href="http://w4lle.com/2019/04/08/UI2Code-2/" target="_blank" rel="noopener noreferrer">UI2Code（三）imgcook<ExternalLinkIcon/></a></li>
</ul>
<p>这是阿里的从设计稿一键生成代码的网站。</p>
<ul>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/44263965" target="_blank" rel="noopener noreferrer">前端要凉？微软开源的Sketch2Code碉堡了！<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/microsoft/ailab/tree/master/Sketch2Code" target="_blank" rel="noopener noreferrer">github Microsoft Sketch2Code<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>Sketch2Code是一种基于Web的解决方案，它使用AI将手绘用户界面的图片转换为可用的HTML代码。这个还没看，感觉比较复杂，是个大项目，集成了很多东西。</p>
</div></template>


