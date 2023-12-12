<template><div><h1 id="adagrad" tabindex="-1"><a class="header-anchor" href="#adagrad" aria-hidden="true">#</a> AdaGrad</h1>
<ul>
<li><RouterLink to="/docs/engineering/mathematics/gradient-update-algorithm/offline-learning/offline-learning.html">返回上层目录</RouterLink></li>
</ul>
<p><a href="https://blog.csdn.net/bvl10101111/article/details/72616097" target="_blank" rel="noopener noreferrer">Deep Learning 最优化方法之AdaGrad<ExternalLinkIcon/></a></p>
<p>1.简单来讲，设置全局学习率之后，每次通过，全局学习率逐参数的除以历史梯度平方和的平方根，使得每个参数的学习率不同</p>
<p>2.效果是：在参数空间更为平缓的方向，会取得更大的进步（因为平缓，所以历史梯度平方和较小，对应学习下降的幅度较小）</p>
<p>3.缺点是,使得学习率过早，过量的减少</p>
<p>4.在某些模型上效果不错。</p>
</div></template>


