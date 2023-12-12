<template><div><h1 id="reinforcement-learning" tabindex="-1"><a class="header-anchor" href="#reinforcement-learning" aria-hidden="true">#</a> reinforcement-learning</h1>
<ul>
<li><RouterLink to="/blogs/recommender-systems/advanced-knowledge/advanced-knowledge.html">返回上层目录</RouterLink></li>
<li><RouterLink to="/blogs/recommender-systems/advanced-knowledge/reinforcement-learning/drn/DRN-A-Deep-Reinforcement-Learning-Framework-for-News-Recommendation.html">DRN: A Deep Reinforcement Learning Framework for News Recommendation WWW2018</RouterLink></li>
</ul>
<h1 id="为什么要将强化学习用在推荐系统上" tabindex="-1"><a class="header-anchor" href="#为什么要将强化学习用在推荐系统上" aria-hidden="true">#</a> 为什么要将强化学习用在推荐系统上</h1>
<p>作为一个<strong>千亿级数据量</strong>的从业者，我讲讲我认为推荐系统中<strong>最重要的几点</strong>，可能与其他回答都略有不同</p>
<ol>
<li><strong>不同规模下的工程架构：<strong>特征从</strong>百</strong>到<strong>百万</strong>到<strong>百亿</strong>，不同级别的工程架构相差极大</li>
<li>**对目标的选定：**如何选择你的目标，决定了怎么做画像、特征，改变一个目标非常的伤筋动骨，而且也无法说清目标的制定是否科学</li>
<li>**对长期目标的学习：**短期的目标可以是一跳（用户的单次成本，付费或者消费），但长期的目标一定是用户付出的长期成本（长期消费，用户粘性），怎么去学习，是非常困难的事情。很多公司、学校都在进行这方面的研究（1、2、3），可以参考</li>
</ol>
<p>这几个点很难绕过，未来几年也会成为各家推荐的差异点。核心技术说实话大家都非常清楚，Wide &amp; Deep已经应用的非常广泛，这剩余的核心问题就看谁能够解决的足够快、跑的足够前面了。</p>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="https://www.zhihu.com/question/28247353/answer/399162539" target="_blank" rel="noopener noreferrer">推荐系统有哪些坑？-Geek An<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;为什么要将强化学习用在推荐系统上&quot;一节参考了此回答。</p>
<p>===</p>
<p><a href="https://www.zhihu.com/question/57388498/answer/570874226" target="_blank" rel="noopener noreferrer">增强学习在推荐系统有什么最新进展？<ExternalLinkIcon/></a></p>
<p>[1] Dulac-Arnold G, Evans R, van Hasselt H, et al. Deep reinforcement learning in large discrete action spaces[J]. arXiv preprint arXiv:1512.07679, 2015.</p>
<p>[2] Liebman E, Saar-Tsechansky M, Stone P. Dj-mc: A reinforcement-learning agent for music playlist recommendation[C]//Proceedings of the 2015 International Conference on Autonomous Agents and Multiagent Systems. International Foundation for Autonomous Agents and Multiagent Systems, 2015: 591-599.</p>
<p>[3] Zheng G, Zhang F, Zheng Z, et al. DRN: A Deep Reinforcement Learning Framework for News Recommendation[C]//Proceedings of the 2018 World Wide Web Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2018: 167-176.</p>
<p>[4] Lixin Zou, Long Xia, Zhuoye Ding, Jiaxing Song, Weidong Liu, Dawei Yin: <a href="http://export.arxiv.org/abs/1902.05570" target="_blank" rel="noopener noreferrer">Reinforcement Learning to Optimize Long-term User Engagement in Recommender Systems<ExternalLinkIcon/></a>[C]KDD 2019</p>
<p>清华大学和京东发表于 KDD 2019 的全新强化学习框架 FeedRec</p>
<p>[5] Youtube RL Recommendation: Top-k Off-Policy Correction for a REINFORCE Recommender System , Google, WSDM, 2019</p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU0MTgxNDkxOA%3D%3D&amp;chksm=fb256899cc52e18fb17d9adb2898d58360dce1e99b5e9b809bd2ca417d7277948e24a8f8ef52&amp;idx=1&amp;mid=2247487856&amp;scene=21&amp;sn=9ece274646716907367ad1f746c993a4#wechat_redirect" target="_blank" rel="noopener noreferrer">【论文复现】Top-K Off-Policy Correction for a REINFORCE RS论文复现<ExternalLinkIcon/></a></p>
</div></template>


