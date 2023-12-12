<template><div><h1 id="机器学习前言" tabindex="-1"><a class="header-anchor" href="#机器学习前言" aria-hidden="true">#</a> 机器学习前言</h1>
<ul>
<li><RouterLink to="/docs/engineering/perface/perface.html">返回上层目录</RouterLink></li>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%92%8C%E6%A8%A1%E5%BC%8F%E8%AF%86%E5%88%AB">什么是机器学习和模式识别</a></li>
<li><a href="#%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%9A%84%E5%BA%94%E7%94%A8">机器学习的应用</a></li>
<li><a href="#%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%9A%84%E6%B5%81%E7%A8%8B">机器学习的流程</a></li>
<li><a href="#%E4%B8%8D%E5%90%8C%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95%E9%A2%84%E6%B5%8B%E6%95%88%E6%9E%9C%E4%B8%8D%E5%90%8C">不同机器学习算法预测效果不同</a></li>
</ul>
<p>这是传说中的人工智能深渊</p>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/AI_chasm.jpg" alt="AI_chasm"></p>
<h1 id="什么是机器学习和模式识别" tabindex="-1"><a class="header-anchor" href="#什么是机器学习和模式识别" aria-hidden="true">#</a> 什么是机器学习和模式识别</h1>
<p>一句话解释：</p>
<p><strong>机器学习</strong>就是可以通过自动调节参数，使得模型可以解释所观测到的数据。</p>
<p><strong>模式识别</strong>其实就是控制科学下的机器学习。</p>
<p>正经解释：</p>
<p>什么是<strong>机器学习</strong>：对于某给定的任务T，在合理的性能度量方案P的前提下，某计算机程序可以自主学习任务T的经验E；随着提供合适、优质、大量的经验E，该程序对于任务T的性能逐步提高。--Tom Michael Mitchell,1997</p>
<p>说人话：</p>
<p><strong>机器学习</strong>是人工智能的一个分支。我们使用计算机设计一个系统，使它能够根据提供的训练数据按照一定的方式来学习；随着训练次数的增加，该系统可以在性能上不断学习和改进；通过参数优化的学习模型，能够用于预测相关问题的输出。</p>
<p>别人眼中的机器学习和自己眼中的机器学习：</p>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/machine_learning_on_ones_eye.jpg" alt="machine_learning_on_ones_eye"></p>
<p>肯定你们也听到了，人工智能、机器学习、深度学习这样的关键词，那么他们之间得关系是什么？</p>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/relationship_between_AI_ML_DL.jpg" alt="relationship_between_AI_ML_DL"></p>
<h1 id="机器学习的应用" tabindex="-1"><a class="header-anchor" href="#机器学习的应用" aria-hidden="true">#</a> 机器学习的应用</h1>
<p><strong>在踏入人工智能大门前，我先讲一下，为什么这两年深度学习为什么突然火了</strong></p>
<p>2016年AlphaGo 4比1 战胜李世石，掀起了一波AI热潮，DeepMind背后所用的深度学习一下子火了起来了。其实在内行看来，AlphaGo对阵李世石的结果是毫无悬念的，真正的突破在几年前就发生了。</p>
<p>最近AlphaGo的弟弟AlphaGo Zero把自己的哥哥直接横扫了，原因是AlphaGo Zero是两个机器人自己博弈，所以收敛速度要比学习人类棋谱快多了。</p>
<p>2012年，Gefferey Hinton的学生Alex使用一个特别构造的深度神经网络（后来就叫AlexNet），在图像识别的专业比赛ImageNet中，得到了远超之前最好成绩的结果，那个时候，整个人工智能领域就已经明白，深度学习的革命已经到来了。</p>
<p>果然，之后深度学习在包括语音识别，图像理解，机器翻译等传统的人工智能领域都超越了原先各自领域效果最好的方法。从2015年起，工业界内一些嗅觉灵敏的人士也意识到，一场革命或已到来。</p>
<p><strong>随着机器学习在生活中越来越广泛得被应用在各个领域，</strong></p>
<p>比如：</p>
<ul>
<li>资讯类APP，每日的消息推送都是我们自己喜欢且关注的内容（人工智能的学习和记忆）</li>
<li>百度搜索结果的排序推送是基于用户历史的点击数据，会更多地推送个人喜欢或认为正确的结果</li>
<li>百度广告根据每个人喜好去最大化点击的概率</li>
<li>美图秀秀根据用户储存的自动美化后的照片来优化算法</li>
<li>滴滴帮助司机选择路线、规划车辆调度方案</li>
<li>未来的自动驾驶技术重新定义智能出行、智能城市</li>
<li>APP背后的判断、预测、抉择、分类。</li>
<li>当前发展比较热门的应用，语音识别、自然语言理解、知识图谱、个性推荐、个性化排序各种领域的进步</li>
</ul>
<h1 id="机器学习的流程" tabindex="-1"><a class="header-anchor" href="#机器学习的流程" aria-hidden="true">#</a> 机器学习的流程</h1>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/machine_learning_process_1.jpg" alt="machine_learning_process_1"></p>
<p>(注：本图片来自小象学院邹博老师的机器学习课程)</p>
<p>将数据挖掘/机器学习的流程比作<strong>炒菜</strong>：</p>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/machine_learning_process_2.jpg" alt="machine_learning_process_2"></p>
<p>(注：本图片来自小象学院邹博老师的机器学习课程)</p>
<h1 id="不同机器学习算法预测效果不同" tabindex="-1"><a class="header-anchor" href="#不同机器学习算法预测效果不同" aria-hidden="true">#</a> 不同机器学习算法预测效果不同</h1>
<p>即便是同一个数据，选择不同的机器学习算法，就有不同的分类预测。</p>
<p><img src="@source/docs/engineering/perface/machine-learning-perface/pic/different_machine_learning_algorithms.jpg" alt="different_machine_learning_algorithms"></p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="http://www.chinahadoop.cn/course/1068" target="_blank" rel="noopener noreferrer">小象学院_机器学习_邹博<ExternalLinkIcon/></a></li>
</ul>
<p>前几节的内容和图片基本都来自于此。</p>
</div></template>


