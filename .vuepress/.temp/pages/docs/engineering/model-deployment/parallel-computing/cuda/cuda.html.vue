<template><div><h1 id="cuda" tabindex="-1"><a class="header-anchor" href="#cuda" aria-hidden="true">#</a> CUDA</h1>
<ul>
<li><RouterLink to="/docs/engineering/model-deployment/parallel-computing/parallel-computing.html">返回上层目录</RouterLink></li>
</ul>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/34587739" target="_blank" rel="noopener noreferrer">CUDA编程入门极简教程<ExternalLinkIcon/></a></p>
<p>目标机只有Nvidia的GPU及GPU驱动，不允许装CUDA，能跑自己写的CUDA吗？</p>
<blockquote>
<p>这样肯定不行，cuda的编译器是nvcc。除非你在有cuda的环境编译好了，再把程序放在这台机器跑。只需要安装显卡驱动就行。如只是跑简单加法的例子是可以的，因为nvcc默认是静态链接，没有其他依赖。</p>
<p>跑不起来，你只要安装了显卡驱动就有cudaruntime了，没有cudatoolkit，你没法编译cuda程序</p>
<p>装了驱动可以跑的，把编译好的二进制拿进去跑，没问题</p>
<p>有驱动的话，拿到接口交叉编译之后上来跑就可以吧。</p>
</blockquote>
</div></template>


