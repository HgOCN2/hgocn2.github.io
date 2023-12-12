<template><div><h1 id="gcn图卷积网络" tabindex="-1"><a class="header-anchor" href="#gcn图卷积网络" aria-hidden="true">#</a> GCN图卷积网络</h1>
<ul>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-neural-networks.html">返回上层目录</RouterLink></li>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-preliminary-understand/gcn-preliminary-understand.html">GCN图卷积网络初步理解</RouterLink></li>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-numpy-fulfillment/gcn-numpy-fulfillment.html">GCN图卷积网络的numpy简单实现</RouterLink></li>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-essential-understand/gcn-essential-understand.html">GCN图卷积网络本质理解</RouterLink></li>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/gcn-comprehensive-understand/gcn-comprehensive-understand.html">GCN图卷积网络全面理解</RouterLink></li>
<li><RouterLink to="/docs/engineering/deep-learning/graph-neural-networks/graph-convolutional-networks/semi-supervised-gcn/Semi-Supervised-Classification-With-Graph-Convolutional-Networks.html">Semi-Supervised-Classification-With-Graph-Convolutional-Networks ICLR2017</RouterLink></li>
</ul>
<p>===</p>
<p><a href="https://www.zhihu.com/question/54504471" target="_blank" rel="noopener noreferrer">知乎：如何理解 Graph Convolutional Network（GCN）？<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/I3MsVSR0SNIKe-a9WRhGPQ" target="_blank" rel="noopener noreferrer">何时能懂你的心——图卷积神经网络（GCN）<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/ftz8E5LffWFfaSuF9uKqZQ" target="_blank" rel="noopener noreferrer">Graph Neural Network：GCN 算法原理，实现和应用<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/SivilTaram/p/graph_neural_network_1.html" target="_blank" rel="noopener noreferrer">从图(Graph)到图卷积(Graph Convolution)：漫谈图神经网络模型 (一)<ExternalLinkIcon/></a></p>
<p><a href="https://ai.yanxishe.com/page/postDetail/13980?from=timeline" target="_blank" rel="noopener noreferrer">如何理解 Graph Convolutional Network（GCN）？<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/5wSgC4pXBfRLoCX-73DLnw" target="_blank" rel="noopener noreferrer">入门学习 | 什么是图卷积网络？行为识别领域新星<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/67522582" target="_blank" rel="noopener noreferrer">图卷积神经网络(GCN)详解:包括了数学基础(傅里叶，拉普拉斯)<ExternalLinkIcon/></a></p>
<p><a href="http://blog.openkg.cn/%E8%AE%BA%E6%96%87%E6%B5%85%E5%B0%9D-%E5%9B%BE%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C%E7%BB%BC%E8%BF%B0%EF%BC%9A%E6%96%B9%E6%B3%95%E5%8F%8A%E5%BA%94%E7%94%A8/" target="_blank" rel="noopener noreferrer">论文浅尝 | 图神经网络综述：方法及应用<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/Jiakui/awesome-gcn" target="_blank" rel="noopener noreferrer">图卷积神经网络相关资源：附有基于图卷积神经网络的实现、示例和教程；<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/Mp-iLuPScFjyhq3IwzRGHA" target="_blank" rel="noopener noreferrer">20190820近期必读的7篇 IJCAI 2019【图神经网络（GNN）】相关论文<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/r1K2Ry_GR1RN0frcr_HzLA" target="_blank" rel="noopener noreferrer">20190806近期必读的12篇KDD 2019【图神经网络（GNN）】相关论文<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/NYoObFBacOamjo2KHjJOAg" target="_blank" rel="noopener noreferrer">【清华NLP】图神经网络GNN论文分门别类，16大应用200+篇论文最新推荐<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/4KS_HG7rBOQgcTII7YKsaQ" target="_blank" rel="noopener noreferrer">斯坦福大学最新论文|知识图卷积神经网络在推荐系统中的应用<ExternalLinkIcon/></a></p>
<p>论文：《SocialGCN: An Efficient Graph Convolutional Network based Model for Social Recommendation》（AAAI2019）</p>
<p>https://zhuanlan.zhihu.com/p/73679727</p>
<p>菜鸟笔记之《Large-Scale Learnable Graph Convolutional Networks》</p>
<p>https://www.jianshu.com/p/ada8730913ce</p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU2ODA0NTUyOQ==&amp;mid=2247483775&amp;idx=1&amp;sn=735e671a4223e47149197c5eacd94e0a&amp;chksm=fc92bbc9cbe532df3742dbad41c7364d536a6e56dd18030a41fadd7ad409a7e8fb02ac027bc6&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">Google图嵌入工业界最新大招，高效解决训练大规模深度图卷积神经网络问题<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/86352650" target="_blank" rel="noopener noreferrer">ICCV 2019 | 成功从3/4层拓展到56层，训练超级深层的图卷积神经网络,tf<ExternalLinkIcon/></a></p>
</div></template>


