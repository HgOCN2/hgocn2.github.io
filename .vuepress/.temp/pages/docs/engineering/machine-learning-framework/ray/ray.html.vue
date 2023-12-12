<template><div><h1 id="ray分布式计算框架" tabindex="-1"><a class="header-anchor" href="#ray分布式计算框架" aria-hidden="true">#</a> Ray分布式计算框架</h1>
<ul>
<li><RouterLink to="/docs/engineering/machine-learning-framework/machine-learning-framework.html">返回上层目录</RouterLink></li>
</ul>
<p>github: <a href="https://github.com/ray-project/ray" target="_blank" rel="noopener noreferrer">ray-project/ray<ExternalLinkIcon/></a></p>
<blockquote>
<p>Ray is a unified framework for scaling AI and Python applications. Ray consists of a core distributed runtime and a toolkit of libraries (Ray AIR) for accelerating ML workloads.</p>
</blockquote>
<p>===</p>
<p><a href="https://mp.weixin.qq.com/s/6XLWpsCJZRalDs3-yMX4dg" target="_blank" rel="noopener noreferrer">ChatGPT背后的开源AI框架Ray，现在值10亿美元<ExternalLinkIcon/></a></p>
<p>光说显卡，chatgpt大概用800G显存，你用4090堆比较亏，要30多张并联。但你又买不到性价比高一点的A100，也没有能并联30张4090的主板，更没有多主板还能并行计算的技术</p>
<p>对了比较准确的资料显示训练一次450W美金左右</p>
<p>请问这些技术怎么有啊？国内有吗？openai是怎么解决多个显卡并联训练的？</p>
<p>显卡并联在ai训练是很基础的技术了，没什么稀奇的，gpu计算本来就可以并行</p>
<p>您好，我知道有单机多卡，请问多机多卡，也就是您说的，多主板并行计算，比如10张每张能插8个卡的主板，这10个主板（共10x8个GPU单卡）能并联训练吗？谢谢！</p>
<p>能啊，就说最傻的方法，计算能并行就能搞传统MapReduce，分过去再回来。虽然这样损失很大，现在应该用Ray的比较多吧</p>
<p><a href="https://zhuanlan.zhihu.com/p/61818897" target="_blank" rel="noopener noreferrer">分布式框架Ray及RLlib简易理解<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/536993496" target="_blank" rel="noopener noreferrer">分布式计算集群Ray部署及测试流程<ExternalLinkIcon/></a></p>
<p><a href="https://www.163.com/dy/article/HTH8L7A90552C3W2.html" target="_blank" rel="noopener noreferrer">超级可扩展计算框架Ray用于训练ChatGPT<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_49466306/article/details/110449879" target="_blank" rel="noopener noreferrer">Ubuntu Ray 分布式训练<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/q18729096963/article/details/128422404" target="_blank" rel="noopener noreferrer">python3安装分布式ray集群<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>各节点安装ray
pip3 install ray[default]
切记不可 pip3 install ray，因为这样安装不完整，会没有Dashboard</p>
</li>
<li>
<p>ray集群部署
2.1 启动head节点</p>
</li>
</ol>
<p><a href="https://blog.csdn.net/weixin_43229348/article/details/122666281" target="_blank" rel="noopener noreferrer">Ray 分布式简单教程（1）<ExternalLinkIcon/></a></p>
<p>Ray为构建分布式应用程序提供了一个简单、通用的API。</p>
<p>Ray主要作用就是提供一个调度平台，能够将各个分布式集群以及远程云端的服务器资源调度管理，只需稍加改动，就能将单机运行的代码部署到大规模集群上。</p>
<p>在Ray Core上有几个库，用于解决机器学习中的问题:</p>
<ul>
<li>Tune:可伸缩的超参数调优</li>
<li>RLlib：工业级强化学习</li>
<li>Ray Train:分布式深度学习</li>
<li>Datasets:分布式数据加载和计算(beta)</li>
</ul>
<p>以及用于将 ML 和分布式应用程序投入生产的库：</p>
<ul>
<li>Serve：可扩展和可编程的服务</li>
<li>Workflows：快速、持久的应用程序流程（alpha）</li>
</ul>
<p>还有许多与 Ray 的社区集成，包括 Dask、MARS、Modin、Horovod、Hugging Face、Scikit-learn等。</p>
<p><a href="https://blog.csdn.net/weixin_43585712/article/details/122552831" target="_blank" rel="noopener noreferrer">分布式框架Ray——启动ray、连接集群详细介绍<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/HyperAI/article/details/114090158" target="_blank" rel="noopener noreferrer">PyTorch &amp; 分布式框架 Ray ：保姆级入门教程<ExternalLinkIcon/></a></p>
<blockquote>
<p>图注：Ray Cluster Launcher简化了在任何集群或云提供商上启动和扩展的过程。</p>
</blockquote>
<p>一旦您在笔记本电脑上开发了一个应用程序，并希望将其扩展到云端（也许有更多的数据或更多的 GPU），接下来的步骤并不总是很清楚。这个过程要么让基础设施团队为你设置，要么通过以下步骤:</p>
<ol>
<li>选择一个云提供商（AWS、GCP 或 Azure）。</li>
<li>导航管理控制台，设置实例类型、安全策略、节点、实例限制等。</li>
<li>弄清楚如何在集群上分发你的 Python 脚本。</li>
</ol>
<p>一个更简单的方法是使用 Ray Cluster Launcher 在任何集群或云提供商上启动和扩展机器。Cluster Launcher 允许你自动缩放、同步文件、提交脚本、端口转发等。这意味着您可以在 Kubernetes、AWS、GCP、Azure 或私有集群上运行您的 Ray 集群，而无需了解集群管理的低级细节。</p>
<p><a href="https://blog.csdn.net/weixin_34007020/article/details/85958509" target="_blank" rel="noopener noreferrer">高性能分布式执行框架——Ray<ExternalLinkIcon/></a></p>
<p><a href="https://blog.51cto.com/u_15858929/6117117" target="_blank" rel="noopener noreferrer">cube开源一站式云原生机器学习平台--ray 多机分布式计算<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/572156620/answer/2801733792" target="_blank" rel="noopener noreferrer">实验室有几台ubuntu的工作站，如何组建成一个集群？<ExternalLinkIcon/></a></p>
<p>的话，建议直接用Ray组个集群就可以了，Python只需要改很少几行代码就可以实现集群并行，比Celery还简单，根本用不上题目中说的“一套代码”。</p>
<p>目前Ray已经相当完善了，它本身就是给强化学习框架RLlib做的底层分布式计算框架，有一套机器学习深度学习生态链，既是Python First，又具有很强的机器学习背景，搞数据分析不在话下。对Numpy、Pytorch的支持都很好，内置对GPU资源的分配管理。</p>
<p>具体可以看看我写的介绍文章，一文就足够入门：<a href="https://zhuanlan.zhihu.com/p/460189842" target="_blank" rel="noopener noreferrer">Ray从理论到实战<ExternalLinkIcon/></a></p>
</div></template>


