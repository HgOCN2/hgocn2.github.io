<template><div><h1 id="自动驾驶" tabindex="-1"><a class="header-anchor" href="#自动驾驶" aria-hidden="true">#</a> 自动驾驶</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/">返回上层目录</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/electromechanical-systems/electromechanical-systems.html">机电系统</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/decision/decision.html">决策</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/planning/planning.html">规划</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/guidance/guidance.html">制导</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/control/control.html">控制</RouterLink></li>
<li><RouterLink to="/docs/machine-learning/deep-learning/artificial-general-intelligence/autopilot/navigation/navigation.html">导航</RouterLink></li>
</ul>
<p><a href="https://www.zhihu.com/question/598088657/answer/3099636476" target="_blank" rel="noopener noreferrer">自动驾驶为什么不直接让模型输出下一步的动作?<ExternalLinkIcon/></a></p>
<p>可以当然是可以的，英伟达2016年的那篇<a href="https://arxiv.org/pdf/1604.07316.pdf" target="_blank" rel="noopener noreferrer">End to End Learning for Self-Driving Cars<ExternalLinkIcon/></a> 在自动驾驶行业引发了很大振动，几个摄像头输入到神经网络里，直接回归方向盘转动角度，就是这么简单粗暴。他们还进行了路测，使用第一代DrivePX，说是98%的时间都可以正常行驶，中间有一段路连续开了15公里不需要任何人工介入。我记得当时我们的team lead跟我们说我们要失业了。。。</p>
<p>之后的路就好走了，要让端到端能够真正实现，我尽量把中间过程分拆出来单独学不就可以了？说白了就是把已有的自动驾驶系统，拆成一个一个的子系统，给每一个子系统安排一个模型去学，然后把他们连起来就可以了。这方面最成功的是Wayve公司的创始人Alex Kendall，牛津VGG组博士毕业，不确定度学习的一哥，博士论文就是写这个的。2018年就发表了基于不确定度学习的多任务网络。他的做法就是把整个模型弄成一个多任务模型，每一个任务都训练，最后用强化学习输出控制信号。特斯拉2019的那个多任务网络，其实是他的弟弟。。。他们这条路走通了，还比较成功。</p>
<p>这个端到端系统里面子任务的构成和划分，各个任务的连接方式都可以做文章，于是就出现了CVPR2023的UniAd：</p>
<p><a href="https://github.com/OpenDriveLab/UniAD" target="_blank" rel="noopener noreferrer">GitHub - OpenDriveLab/UniAD: [CVPR 2023 Best Paper] Planning-oriented Autonomous Driving<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/597238433/answer/3080541702" target="_blank" rel="noopener noreferrer">为什么这么多年直到马斯克出来才想到做可复用火箭？<ExternalLinkIcon/></a></p>
<p>因为运载火箭回收中最关键的数学问题之一直到2013年才解决。Lossless Convexification of Nonconvex Control Bound and Pointing Constraints of the Soft Landing Optimal Control Problem</p>
<p>下面是自动驾驶的岗位需求，由此可借鉴自动驾驶的专业划分和知识储备：</p>
<p>自动驾驶高端人才需求：
感知算法总监 200万+
决策规划算法总监 200万+
规控算法总监 200万+
自动驾驶仿真系统负责人 200万+
地图与定位算法总监 200万+
高精地图技术负责人 200万+
自动驾驶软件总监 200万+
自动驾驶首席架构师 200万+
自动驾驶总工 100万+
自动驾驶工程架构技术总监 200万+
深度学习算法总监 200万+
Base地点：北京，上海，深圳，杭州，成都
@职位数量大概100+，隶属于各个自动驾驶公司，有兴趣的朋友请加我好友私聊！
（对于缺乏对市场了解的朋友，可以帮助你了解市场情况以及各家自动驾驶公司的发展状况，根据你的需求来匹配合适的机会！）</p>
<p>深蓝学院课程《自动驾驶规划与控制》</p>
</div></template>


