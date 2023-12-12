<template><div><h1 id="强化学习" tabindex="-1"><a class="header-anchor" href="#强化学习" aria-hidden="true">#</a> 强化学习</h1>
<ul>
<li><RouterLink to="/blogs/">返回上层目录</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/reinforcement-learning/reinforcement-learning.html">强化学习</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/simulation-platform/simulation-platform.html">仿真环境</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/monte-carlo-tree-search/monte-carlo-tree-search.html">MCTS蒙特卡洛树搜索</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/imatation-learning/imatation-learning.html">模仿学习</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/multi-agent-reinforcement-learning/multi-agent-reinforcement-learning.html">多智能体强化学习</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/transformer-rl/transformer-rl.html">Transformer+RL</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/decision-making-big-model/decision-making-big-model.html">决策大模型</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/offline-reinforcement-learning/offline-reinforcement-learning.html">Offline RL离线强化学习</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/multi-modal-reinforcement-learning/multi-modal-reinforcement-learning.html">MMRL多模态强化学习</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/llm-rl/llm-rl.html">LLM+RL</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/diffusion-model-rl/diffusion-model-rl.html">DiffusionModel+RL</RouterLink></li>
<li><RouterLink to="/blogs/reinforcement-learning/industry-application/industry-application.html">业界应用</RouterLink></li>
</ul>
<p>===</p>
<h1 id="深度强化学习入门" tabindex="-1"><a class="header-anchor" href="#深度强化学习入门" aria-hidden="true">#</a> 深度强化学习入门</h1>
<p><a href="https://www.zhihu.com/question/277325426/answer/2786792954" target="_blank" rel="noopener noreferrer">强化学习怎么入门好？<ExternalLinkIcon/></a></p>
<p>必须推荐王树森、黎彧君、张志华的新书《深度强化学习》，已经正式出版。这是一本正式出版前就注定成为经典的入门书籍——其在线公开课视频播放量超过一百万次，助力数万“云学生”——更加高效、方便、系统地学习相关知识。课程主页这里：https://github.com/wangshusen/DRL 还有对应的在线公开课视频和代码，B站、Github都有。下文内容来自作者王树森写的前言。</p>
<p><a href="https://www.zhihu.com/question/277325426/answer/1544863580" target="_blank" rel="noopener noreferrer">强化学习怎么入门好？<ExternalLinkIcon/></a></p>
<p>1.看李宏毅的强化学习视频-b站随便找一个最新最全的；</p>
<p>2.看郭宪大佬的《深入浅出强化学习》-知乎有他的专栏文章；</p>
<p>3.代码刷openai的spinningup。</p>
<p>目前我认为最简洁最不走弯路的方法。至少节省大家半年的随机探索时间</p>
<p>其他的教材对于强化的公式推导不够透彻，</p>
<p>其他几门视频课难度高，不适合入门；</p>
<p>其他的代码库，新手根本看不懂。</p>
<p>最后贴上我基于spinup封装好的一个强化学习库：</p>
<p>https://github.com/kaixindelele/DRL-tensorflow</p>
<p>https://github.com/kaixindelele/DRLib</p>
<h1 id="地图" tabindex="-1"><a class="header-anchor" href="#地图" aria-hidden="true">#</a> 地图：</h1>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU0MTgxNDkxOA%3D%3D&amp;idx=1&amp;mid=2247484575&amp;scene=21&amp;sn=42fe3fc7d5978ca9da467fde38a13245#wechat_redirect" target="_blank" rel="noopener noreferrer">全网首发|| 最全深度强化学习资料(永久更新)<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/NeuronDance/DeepRL" target="_blank" rel="noopener noreferrer">NeuronDance/DeepRL<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/NeuronDance/DeepRL/tree/master/A-Guide-Resource-For-DeepRL" target="_blank" rel="noopener noreferrer">NeuronDance/DeepRL/A-Guide-Resource-For-DeepRL/<ExternalLinkIcon/></a></p>
<h1 id="视频课程" tabindex="-1"><a class="header-anchor" href="#视频课程" aria-hidden="true">#</a> 视频课程</h1>
<p><a href="https://www.bilibili.com/video/BV13W411Y75P?p=5" target="_blank" rel="noopener noreferrer">【莫烦Python】强化学习 Reinforcement Learning<ExternalLinkIcon/></a></p>
<p>短小精悍</p>
<p><a href="https://www.bilibili.com/video/BV1UE411G78S?p=2" target="_blank" rel="noopener noreferrer">李宏毅】2020 最新课程 (完整版) 强化学习 <ExternalLinkIcon/></a></p>
<p>看这个，讲的很好很清楚，比如其中强化学习<a href="https://www.bilibili.com/video/BV1UE411G78S/?p=2&amp;vd_source=147fb813418c7610c21b6a5618c85cb7" target="_blank" rel="noopener noreferrer">策略梯度<ExternalLinkIcon/></a>的部分。</p>
<p><a href="https://www.bilibili.com/video/BV1MW411w79n?p=2&amp;vd_source=147fb813418c7610c21b6a5618c85cb7" target="_blank" rel="noopener noreferrer">李宏毅深度强化学习(国语)课程(2018) ppo<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/54189036" target="_blank" rel="noopener noreferrer">David Silver 增强学习——Lecture 6 值函数逼近<ExternalLinkIcon/></a></p>
<p>有空看这个，那个陈达贵的视频ppt其实就是这个。</p>
<p>B站上deepmind的大佬David alived的强化学习的视频，点击率甚低。看来很多国人不知道阿发狗李的研发团队的首席科学家啊。</p>
<p>[CS294]</p>
<p>初学者非常不推荐看CS294，因为真的很难，可以看David Silver的课程</p>
<p>[CS234]是什么？</p>
<p><a href="https://www.zhihu.com/column/c_1215667894253830144" target="_blank" rel="noopener noreferrer">白话强化学习<ExternalLinkIcon/></a></p>
<p>这个知乎专栏讲的对各种知识点的直觉理解和分析都特别好。</p>
<p><a href="https://zhuanlan.zhihu.com/p/344196096" target="_blank" rel="noopener noreferrer">强化学习路线推荐及资料整理<ExternalLinkIcon/></a></p>
<p>第一个是李宏毅老师21年最新的深度学习课程，将最新的内容都纳入了教学大纲</p>
<p>第二个是多智能体强化学习领域的：UCL的汪军老师新开的课程</p>
<h1 id="仿真环境" tabindex="-1"><a class="header-anchor" href="#仿真环境" aria-hidden="true">#</a> 仿真环境</h1>
<p><a href="https://www.zhihu.com/question/332942236/answer/1295507780" target="_blank" rel="noopener noreferrer">有哪些常用的多智能体强化学习仿真环境？<ExternalLinkIcon/></a></p>
<p><strong>Link：</strong><a href="https://github.com/geek-ai/MAgent" target="_blank" rel="noopener noreferrer">https://github.com/geek-ai/MAgent<ExternalLinkIcon/></a></p>
<p>这个是UCL汪军老师团队Mean Field 论文里用到的环境，主要研究的是当环境由<strong>大量智能体</strong>组成的时候的竞争和协作问题。也可以看成是复杂的Grid World环境。Render如下：</p>
<h1 id="强化学习与控制" tabindex="-1"><a class="header-anchor" href="#强化学习与控制" aria-hidden="true">#</a> 强化学习与控制</h1>
<p><a href="https://zhuanlan.zhihu.com/p/157867488" target="_blank" rel="noopener noreferrer">强化学习无人机交互环境汇总<ExternalLinkIcon/></a></p>
<p>作者在无人机姿态控制上使用PPO训练取得了比PID更好的效果，并成功从虚拟环境迁移到了现实世界。</p>
<p><a href="https://mp.weixin.qq.com/s/bDra-n8stqJ3gcS9zr3IVA" target="_blank" rel="noopener noreferrer">【重磅推荐: 强化学习课程】清华大学李升波老师《强化学习与控制》<ExternalLinkIcon/></a></p>
<p>**《强化学习与控制》**这一门课程包括11节。</p>
<p><strong>第1讲</strong>介绍RL概况，包括发展历史、知名学者、典型应用以及主要挑战等。</p>
<p><strong>第2讲</strong>介绍RL的基础知识，包括定义概念、自洽条件、最优性原理问题架构等。</p>
<p><strong>第3讲</strong>介绍免模型学习的蒙特卡洛法，包括Monte Carlo估计，On-policy/off-policy，重要性采样等。</p>
<p><strong>第4讲</strong>介绍免模型学习的时序差分法，包括它衍生的Sarsa，Q-learning，Expected Sarsa等算法。</p>
<p><strong>第5讲</strong>介绍带模型学习的动态规划法，包括策略迭代、值迭代、收敛性原理等。</p>
<p><strong>第6讲</strong>介绍间接型RL的函数近似方法，包括常用近似函数，值函数近似，策略函数近似以及所衍生的Actor-critic架构等。</p>
<p><strong>第7讲</strong>介绍直接型RL的策略梯度法，包括各类Policy Gradient, 以及如何从优化的观点看待RL等。</p>
<p><strong>第8讲</strong>介绍深度强化学习，即以神经网络为载体的RL，包括深度化典型挑战、经验性处理技巧等。</p>
<p><strong>第9讲</strong>介绍带模型的强化学习，即近似动态规划，包括离散时间系统的ADP，ADP与MPC的关联分析等。</p>
<p><strong>第10讲</strong>介绍有限时域的近似动态规划，同时介绍了状态约束的处理手段以及它与可行性之间的关系</p>
<p><strong>第11讲</strong>介绍RL的各类拾遗，包括POMDP、鲁棒性、多智能体、元学习、逆强化学习以及训练平台等。</p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU0MTgxNDkxOA%3D%3D&amp;chksm=fb257f19cc52f60f9c5a70260fd20cc0b7974bcd300041eb7a75e83eeaaba416d2d965679ff2&amp;idx=1&amp;mid=2247485168&amp;scene=21&amp;sn=59039fc39903a4ee721712b1a2c53b77#wechat_redirect" target="_blank" rel="noopener noreferrer">强化学习和最优控制的《十个关键点》81页PPT汇总<ExternalLinkIcon/></a></p>
<h1 id="多智能体强化学习" tabindex="-1"><a class="header-anchor" href="#多智能体强化学习" aria-hidden="true">#</a> 多智能体强化学习</h1>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU0MTgxNDkxOA%3D%3D&amp;chksm=fb25711ccc52f80aa10666bec175cafb2a349673f39a558811b8945392df45808a053d0f00c4&amp;idx=1&amp;mid=2247485685&amp;scene=21&amp;sn=54dcbcaf022795d05d1f8a7bf6a17c12#wechat_redirect" target="_blank" rel="noopener noreferrer">【DeepMind】多智能体学习231页PPT总结<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/question/517905386/answer/2359101768" target="_blank" rel="noopener noreferrer">最近在写多智能体强化学习工作绪论，请问除了 MADDPG 以及 MAPPO 还有哪些算法？<ExternalLinkIcon/></a></p>
<h1 id="专题" tabindex="-1"><a class="header-anchor" href="#专题" aria-hidden="true">#</a> 专题</h1>
<h2 id="transformer-rl" tabindex="-1"><a class="header-anchor" href="#transformer-rl" aria-hidden="true">#</a> Transformer+RL</h2>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzk0MTI1MzI0OQ==&amp;mid=2247490100&amp;idx=1&amp;sn=56d484dd1cb6062b2783554b88816688&amp;chksm=c2d46ddaf5a3e4cc96329fcbd38876a5936344df6b113e8b7f8bbe8de391a51261e76c6faf46&amp;cur_album_id=2628430986300801025&amp;scene=189#wechat_redirect" target="_blank" rel="noopener noreferrer">Transformer + RL专题 | 究竟是强化学习魔高一尺，还是Transformer道高一丈 （第1期）<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzk0MTI1MzI0OQ==&amp;mid=2247490498&amp;idx=1&amp;sn=4b3e2174d25e530b9a388aba3331295c&amp;chksm=c2d46c2cf5a3e53a3154792c03f4b8be1bc20700ae5a48b70e042272da46e95dcc61a425f079&amp;cur_album_id=2628430986300801025&amp;scene=189#wechat_redirect" target="_blank" rel="noopener noreferrer">Transformer + RL专题｜强化学习中时序建模的千层套路（第2期）<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/S0PgD3SEMbrbA4OE--ZCQg" target="_blank" rel="noopener noreferrer">Transformer + RL 专题｜大力出奇迹，看 Transformer 如何征服超参数搜索中的决策问题 （第3期）<ExternalLinkIcon/></a></p>
<h1 id="论坛" tabindex="-1"><a class="header-anchor" href="#论坛" aria-hidden="true">#</a> 论坛</h1>
<p>中科院自动化所2020智能决策论坛报告ppt：
论坛报告回放：https://space.bilibili.com/551888585/channel/detail?cid=167587
【柯良军】链接：https://pan.baidu.com/s/18uM3GU8HpZ2OAUIoN0timQ 提取码：rb4o
【章宗长】链接：https://pan.baidu.com/s/1hg-YPfcjCaMnUIogZXMmTQ 提取码：dhdf
【余超】链接：https://pan.baidu.com/s/1ZnU7oe8xB6YJgyVC1frY6Q 提取码：h42p
【温颖】链接：https://pan.baidu.com/s/1AhV2v_JLtiYU3gekH0d4ow 提取码：p2h7</p>
<h1 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h1>
<p><a href="https://www.zhihu.com/question/57159315/answer/1855647973" target="_blank" rel="noopener noreferrer">强化学习中on-policy 与off-policy有什么区别？<ExternalLinkIcon/></a></p>
<p><a href="https://www.codelast.com/%E5%8E%9F%E5%88%9B-%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E9%87%8C%E7%9A%84-on-policy-%E5%92%8C-off-policy-%E7%9A%84%E5%8C%BA%E5%88%AB/" target="_blank" rel="noopener noreferrer">[原创] 强化学习里的 on-policy 和 off-policy 的区别<ExternalLinkIcon/></a></p>
<h1 id="框架-库" tabindex="-1"><a class="header-anchor" href="#框架-库" aria-hidden="true">#</a> 框架，库</h1>
<p>[<a href="https://github.com/tensorlayer" target="_blank" rel="noopener noreferrer">tensorlayer<ExternalLinkIcon/></a>/<strong>TensorLayer</strong>](https://github.com/tensorlayer/TensorLayer/blob/cb4eb896dd063e650ef22533ed6fa6056a71cad5/examples/reinforcement_learning/README.md)</p>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzU0MTgxNDkxOA%3D%3D&amp;chksm=fb25706bcc52f97dd9a496508d570dde830a1d9181bf232136993eebcad3ade1936adec6d94a&amp;idx=1&amp;mid=2247485826&amp;scene=21&amp;sn=7faa04e1a7b922d3d42059246dcadc8a#wechat_redirect" target="_blank" rel="noopener noreferrer">Tensorflow2.0实现29种深度强化学习算法大汇总<ExternalLinkIcon/></a></p>
<p>一定要看，非常好</p>
<p>欢迎Star：https://github.com/StepNeverStop/RLs</p>
<p>本文作者使用gym,Unity3D ml-agents等环境，利用tensorflow2.0版本对29种算法进行了实现的深度强化学习训练框架，该框架具有如下特性：</p>
<ul>
<li>实现单智能体强化学习、分层强化学习、多智能体强化学习算法等约29种</li>
<li>适配gym、MuJoCo、PyBullet、Unity ML-Agents等多种训练环境</li>
</ul>
<p><a href="https://github.com/mengwanglalala/RL-algorithms" target="_blank" rel="noopener noreferrer">mengwanglalala/<strong>RL-algorithms</strong><ExternalLinkIcon/></a></p>
<p>RL-algorithms，更新一些基础的RL代码，附带了各个算法的介绍</p>
<p><a href="https://github.com/wwxFromTju/awesome-reinforcement-learning-lib" target="_blank" rel="noopener noreferrer">Awesome Reinforcement Learning Library<ExternalLinkIcon/></a></p>
<p>集合了各种强化学习库</p>
<p><strong>tensorlayer</strong></p>
<p><a href="https://zhuanlan.zhihu.com/p/72304092" target="_blank" rel="noopener noreferrer">对话TensorLayer项目发起者董豪<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/d206fb7a190d" target="_blank" rel="noopener noreferrer">TensorLayer进阶资源<ExternalLinkIcon/></a></p>
<h1 id="新概念" tabindex="-1"><a class="header-anchor" href="#新概念" aria-hidden="true">#</a> 新概念</h1>
<h2 id="重生强化" tabindex="-1"><a class="header-anchor" href="#重生强化" aria-hidden="true">#</a> 重生强化</h2>
<p>我记得我刚开始学强化的时候，好奇的一个问题，对于强化的网络，如果一个开始就全给的专家数据，和从零开始学习，从试错，到自己学成专家，哪个会更好一些？
看了Reset-RL和demo-RL之后，好像答案比较明确了，还是得有高质量的数据，然后少许交互就能快速获得一个高质量策略。而从头开始试错，不断摸索的策略，很可能会因为早期的垃圾数据，导致陷入局部最优（首因偏差)，上不去~</p>
<p>发布于 2022-12-09・IP 属地安徽</p>
<p>这两个是什么算法，求指路</p>
<p>后者是DDPGfD，前者是primacy bias  in rl <a href="https://www.bilibili.com/video/BV1wG4y157we/?vd_source=147fb813418c7610c21b6a5618c85cb7" target="_blank" rel="noopener noreferrer">ResetNet-The Primacy Bias in Deep Reinforcement Learning<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/591880627" target="_blank" rel="noopener noreferrer">重生强化【Reincarnating RL】论文梳理<ExternalLinkIcon/></a></p>
<h1 id="不重要" tabindex="-1"><a class="header-anchor" href="#不重要" aria-hidden="true">#</a> 不重要</h1>
<p><a href="http://blog.sciencenet.cn/blog-3189881-1129931.html" target="_blank" rel="noopener noreferrer">【RL系列】强化学习基础知识汇总<ExternalLinkIcon/></a></p>
</div></template>


