<template><div><h1 id="din-deep-interest-network-for-click-through-rate-prediction" tabindex="-1"><a class="header-anchor" href="#din-deep-interest-network-for-click-through-rate-prediction" aria-hidden="true">#</a> DIN:Deep Interest Network for Click-Through Rate Prediction</h1>
<ul>
<li><RouterLink to="/docs/recommender-systems/industry-application/alibaba/alibaba.html">返回上层目录</RouterLink></li>
<li><a href="#%E8%83%8C%E6%99%AF">背景</a>
<ul>
<li><a href="#%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A">名词解释</a></li>
<li><a href="#%E7%9B%B8%E5%85%B3%E5%B7%A5%E4%BD%9C">相关工作</a></li>
</ul>
</li>
<li><a href="#%E7%B3%BB%E7%BB%9F%E6%80%BB%E8%A7%88">系统总览</a>
<ul>
<li><a href="#%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE">训练数据</a></li>
<li><a href="#%E7%89%B9%E5%BE%81%E5%A4%84%E7%90%86">特征处理</a></li>
<li><a href="#%E8%AF%84%E4%BB%B7%E6%8C%87%E6%A0%87">评价指标</a></li>
</ul>
</li>
<li><a href="#%E5%8E%9F%E7%90%86">原理</a>
<ul>
<li><a href="#Base-Model">Base-Model</a></li>
<li><a href="#DIN-Design">DIN-Design</a></li>
<li><a href="#Dice%EF%BC%9AData-Dependent-Activation-Function">Dice:Data-Dependent-Activation-Function</a></li>
<li><a href="#Adaptive-Regularization">Adaptive-Regularization</a></li>
</ul>
</li>
<li><a href="#%E5%AE%9E%E7%8E%B0">实现</a>
<ul>
<li><a href="#%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86">组成部分</a></li>
<li><a href="#%E6%9E%B6%E6%9E%84%E5%9B%BE">架构图</a></li>
<li><a href="#Common-Feature-Trick">Common-Feature-Trick</a></li>
<li><a href="#%E7%BB%93%E6%9E%9C%E5%B1%95%E7%A4%BA">结果展示</a></li>
</ul>
</li>
<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>
</ul>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-paper.png" alt="DIN-paper"></p>
<p>pdf: <a href="https://arxiv.org/pdf/1706.06978.pdf" target="_blank" rel="noopener noreferrer"><em>Deep Interest Network for Click-Through Rate Prediction</em><ExternalLinkIcon/></a></p>
<p>github:<a href="https://github.com/alibaba/x-deeplearning/wiki" target="_blank" rel="noopener noreferrer">深度兴趣网络(DIN)<ExternalLinkIcon/></a></p>
<h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<p>Deep Interest Network(DIN)是盖坤大神领导的阿里妈妈的精准定向检索及基础算法团队，在2017年6月提出的。
它针对<strong>电子商务领域(e-commerce industry)<strong>的CTR预估，重点在于</strong>充分利用/挖掘用户历史行为数据中的信息</strong>。</p>
<p>先给出结论：
针对互联网电子商务领域，数据特点：Diversity、Local Activation。DIN给出了解决方案：</p>
<ol>
<li>使用<strong>用户兴趣分布</strong>来表示用户多种多样的兴趣爱好</li>
<li>使用<strong>Attention机制</strong>来实现Local Activation</li>
<li>针对模型训练，提出了<strong>Dice激活函数，自适应正则</strong>，显著提升了模型性能与收敛速度</li>
</ol>
<h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h2>
<p>这两个词在论文中通篇出现，先把其表示的意思说清楚。</p>
<p><strong>Diversity：</strong>
用户在访问电商网站时会对多种商品都感兴趣。也就是用户的兴趣非常的广泛。</p>
<p><strong>Local Activation：</strong>
用户是否会点击推荐给他的商品，仅仅取决于历史行为数据中的一小部分，而不是全部。</p>
<p>不明白？举个例子：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-user-behavior.jpg" alt="DIN-user-behavior"></p>
<p>Diversity：一个年轻的母亲，从他的历史行为中，我们可以看到她的兴趣非常广泛：羊毛衫、手提袋、耳环、童装、运动装等等。
Local Activation：一个爱游泳的人，他之前购买过travel book、ice cream、potato chips、swimming cap。当前给他推荐的商品(或者说是广告Ad)是goggle(护目镜)。那么他是否会点击这次广告，跟他之前是否购买过薯片、书籍、冰激凌一丁点关系也没有！而是与他之前购买过游泳帽有关系。也就是说在这一次CTR预估中，<strong>部分历史数据(swimming cap)起了决定作用，而其他的基本都没啥用</strong>。</p>
<h2 id="相关工作" tabindex="-1"><a class="header-anchor" href="#相关工作" aria-hidden="true">#</a> 相关工作</h2>
<p>CTR预估是一个比较窄的研究领域，但是模型性能一点点的提升，在实际应用中都非常关键，真金白银毫不含糊。随着深度学习在CV、NLP等领域取得突破性进展，一些研究也开始尝试将DNN应用于CTR预估，比如：Wide&amp;Deep, DeepFM等。</p>
<p>这些做法一般分为两部分：</p>
<ol>
<li>在输入上面加一层embeding层，把最原始高维度、稀疏的数据转换为低维度的实值表示上(dense vector)。</li>
<li>增加多个全连接层，学习特征之间的非线性关系。</li>
<li>Sparse Features -&gt; Embedding Vector -&gt; MLPs -&gt; Output</li>
</ol>
<p>这些方法的<strong>优点</strong>在于：<strong>相比于原来的Logistic Regression方法，大大减少了人工特征工程的工作量。</strong></p>
<p>**缺点：<strong>在电子商务领域中，用户的历史行为数据(User Behavior Data)中包含大量的用户兴趣信息，之前的研究并没有针对Behavior data</strong>特殊的结构(Diversity + Local Activation)**进行建模。</p>
<p><strong>这就是DIN要改进的地方!</strong> DIN同时对Diversity和Local Activation进行建模。</p>
<p><strong>针对Diversity：</strong>
针对用户广泛的兴趣，DIN用<strong>an interest distribution</strong>去表示。</p>
<p><strong>针对Local Activation：</strong>
DIN借鉴机器翻译中的Attention机制，设计了一种<strong>attention-like network structure</strong>， 针对当前候选Ad，去局部的激活(<strong>Local Activate</strong>)相关的历史兴趣信息。和当前候选Ad相关性越高的历史行为，会获得更高的<strong>attention score</strong>，从而会主导这一次预测。</p>
<p>当DNN深度比较深(参数非常多)，输入又非常稀疏的时候，很容易过拟合。DIN提出<strong>Adaptive regularizaion</strong>来防止过拟合，效果显著。</p>
<p>论文还提出，DIN方法也可以应用于其他<strong>有丰富用户行为数据</strong>的场景，比如：</p>
<ul>
<li>电子商务中的个性化推荐</li>
<li>社交网络中的信息推流排序(feeds ranking)</li>
</ul>
<h1 id="系统总览" tabindex="-1"><a class="header-anchor" href="#系统总览" aria-hidden="true">#</a> 系统总览</h1>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-system.png" alt="DIN-system"></p>
<p>阿里推荐系统工作流程就像上图所示：</p>
<ol>
<li>检查用户历史行为数据</li>
<li>使用matching module产生候选ads</li>
<li>通过ranking module得到候选ads的点击概率，并根据概率排序得到推荐列表</li>
<li>记录下用户在当前展示广告下的反应(点击与否)</li>
</ol>
<p>这是一个闭环的系统，对于用户行为数据(User Behavior Data)，系统自己生产并消费。</p>
<h2 id="训练数据" tabindex="-1"><a class="header-anchor" href="#训练数据" aria-hidden="true">#</a> 训练数据</h2>
<p>前面提到，电子商务领域，充分利用User Behavior Data非常关键，而它又有着非常显著的特点：</p>
<ul>
<li>Diversity. 兴趣爱好非常广泛</li>
<li>Local Activation. 历史行为中部分数据主导是否会点击候选广告</li>
</ul>
<p>还有的特点，就是CTR中输入普遍存在的特点：</p>
<ul>
<li>高维度</li>
<li>非常稀疏</li>
</ul>
<p>CTR中一旦涉及到用户行为数据，还有一个特点：</p>
<ul>
<li>特征往往都是<strong>multi-hot</strong>的稀疏ids。</li>
</ul>
<p>也就是：多值离散特征。比如：用户在YouTube上看的视频和搜索过的视频。无论是看过的还是搜索过的，都不止一个，但是相对于所有的视频来说，看过和搜索过的数量都太小了(非常稀疏)。
在电子商务上的例子就是：用户购买过的good_id有多个，购买过的shop_id也有多个，而这也直接导致了每个用户的历史行为id长度是不同的。</p>
<p>为了得到一个固定长度的Embedding Vector表示，原来的做法是在<code v-pre>Embedding Layer</code>后面增加一个<code v-pre>Pooling Layer</code>。Pooling可以用sum或average。最终得到一个固定长度的<code v-pre>Embedding Vector</code>，是用户兴趣的一个抽象表示，常被称作<code v-pre>User Representation</code>。缺点是会损失一些信息。</p>
<p>DIN使用Attention机制来解决这个问题。<strong>Attention机制</strong>来源于<code v-pre>Neural Machine Translation(NMT)</code>。DIN使用Attention机制去更好的建模局部激活。在DIN场景中，针对不同的候选广告需要自适应地调整<code v-pre>User Representation</code>。也就是说：在<code v-pre>Embedding Layer -&gt; Pooling Layer</code>得到用户兴趣表示的时候，赋予不同的历史行为不同的权重，实现局部激活。从最终反向训练的角度来看，就是根据当前的候选广告，来反向的激活用户历史的兴趣爱好，赋予不同历史行为不同的权重。</p>
<h2 id="特征处理" tabindex="-1"><a class="header-anchor" href="#特征处理" aria-hidden="true">#</a> 特征处理</h2>
<p>参考论文<code v-pre>Learning piece-wise linear models from large scale data for ad click prediction</code>中<em>common feature trick</em>，目的是降低空间开销和计算开销。大体的思想是：同一个用户多条样本，它们之间很多信息重复，比如用户统计信息，昨天之前的统计信息等。针对这些重复信息只存储一次，并建立索引。</p>
<p>另外，论文中作者把特征分为四大类，并<strong>没有进行特征组合/交叉特征</strong>。而是通过DNN去学习特征间的交互信息。特征如下：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-feature.png" alt="DIN-feature"></p>
<p>可以看到特征主要包括：用户特征、用户行为特征、广告特征、上下文特征。
其中，只有<strong>用户行为特征</strong>中会出现<code v-pre>multi-hot</code>，原因就是一个用户会购买多个good_id,也会访问多个shop_id，另一个表现就是这样导致了每个用户的样本长度都是不同的。还记得我们是怎么解决这个问题的吗？</p>
<blockquote>
<p>Embedding -&gt; Pooling + Attention</p>
</blockquote>
<p>聪明如你，一定答对了吧~</p>
<h2 id="评价指标" tabindex="-1"><a class="header-anchor" href="#评价指标" aria-hidden="true">#</a> 评价指标</h2>
<p>评价标准是阿里自己提出的GAUC。并且实践证明了GAUC相比于AUC更加稳定、可靠。</p>
<p>AUC表示正样本得分比负样本得分高的概率。在CTR实际应用场景中，CTR预测常被用于对每个用户候选广告的排序。但是不同用户之间存在差异：有些用户天生就是点击率高。以往的评价指标对样本不区分用户地进行AUC的计算。论文采用的GAUC实现了用户级别的AUC计算，<strong>在单个用户AUC的基础上，按照点击次数或展示次数进行加权平均，消除了用户偏差对模型的影响</strong>，更准确的描述了模型的表现效果：
$$
GAUC=\frac{\sum_{i=1}^nw_i\times AUC_i}{\sum_{i=1}^nw_i}=\frac{\sum_{i=1}^n\text{impression}<em>i\times AUC_i}{\sum</em>{i=1}^n\text{impression}_i}
$$
其中，权重w既可以是展示次数(impression)也可以是点击次数(clicks)。n是用户数量。</p>
<h1 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h1>
<p>用户访问阿里巴巴的电商网站，看到推荐的广告时，大部分人都是没有一个明确的目标的，他自己也不知道要买什么。所以，用一个高效的方法从用户丰富的历史行为数据中获取用户的兴趣信息并进行推荐，就非常关键了。</p>
<h2 id="base-model" tabindex="-1"><a class="header-anchor" href="#base-model" aria-hidden="true">#</a> Base-Model</h2>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-base-model.png" alt="DIN-base-model"></p>
<p>如上图所示，Base Model主要由两部分组成：</p>
<ol>
<li>把稀疏的输入(id特征)转换成embedding vector</li>
<li>增加MLPs得到最终的输出</li>
</ol>
<p>对于一个用户，之前购买过的good_ids组成了一个<code v-pre>user behavior sequence ids</code>。针对不同的用户，这个序列的长度是不同的(不同用户购买的物品数量不同). 所以在Embedding Layer和MLPs中间，增加了一个<strong>Pooling Layer</strong>，使用的是<strong>sum</strong> operation，把这些goods或shops的embedding vector相加，得到一个固定长度的向量作为MLPs的输入。</p>
<p>这里对multi-hot多值离散特征进行Pooling操作，就是对Diversity的建模。Base Model中还没有引入Attention机制。</p>
<p>Base Model上线后表现很好，现在也在承担着阿里线上广告展示系统的大部分流量。（论文发表时）</p>
<h2 id="din-design" tabindex="-1"><a class="header-anchor" href="#din-design" aria-hidden="true">#</a> DIN-Design</h2>
<p>但是，仔细的研究下Base Model中Pooling Layer就会发现，Pooling操作损失了很多信息，所以有了后面DIN的完整模型。</p>
<p>这个图太重要了，一定要仔细研究：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-model.png" alt="DIN-model"></p>
<p>先给出结论：</p>
<ol>
<li>Activation Unit实现Attention机制，对Local Activation建模</li>
<li>Pooling(weighted sum)对Diversity建模</li>
</ol>
<p>我们模型的目标：基于用户历史行为，充分挖掘用户兴趣和候选广告之间的关系。用户是否点击某个广告往往是基于他之前的部分兴趣，这是应用Attention机制的基础。<strong>Attention机制简单的理解就是对于不同的特征有不同的权重，这样某些特征就会主导这一次的预测，就好像模型对某些特征pay attention</strong>。但是，<strong>DIN中并不能直接用attention机制</strong>。因为<strong>对于不同的候选广告，用户兴趣表示(embedding vector)应该是不同的</strong>。也就是说用户针对不同的广告表现出不同的兴趣表示，即使历史兴趣行为相同，但是各个行为的权重不同。这不就是Local Activation的含义吗?</p>
<p>这该怎么理解那？下面我们给出两种解释，从两个角度来解释：</p>
<blockquote>
<p>1.核心是: 到Embedding后的空间中思考。</p>
</blockquote>
<p>无论是用户兴趣行为，还是候选广告都会被映射到<strong>Embedding空间</strong>中。他们两者的关系，是在Embedding空间中学习的。</p>
<p>现在有用户U和两个候选广告 A,B。在Embedding空间中，U和A，U和B的相关性都比较高。假设我们使用内积来计算用户和广告之间的相关性。广告A和B嵌入后的向量分别为Va, Vb，那么就要求对于Va Vb终点连线上的任何一个广告，用户U都要有很高的相关性。
这样的限制使得模型非常难学习到有效的用户和广告的embedidng表示。当然，如果增大embedding的大小，也许能行。但是会极大的增加模型参数数量。</p>
<blockquote>
<p>2.用户的兴趣分布是一个多峰的函数，随着候选广告的变化而变化，表现出局部激活的特性</p>
</blockquote>
<p>用户Embedding Vector的维度为k，它最多表示k个相互独立的兴趣爱好。但是用户的兴趣爱好远远不止k个，怎么办？DIN给出的方案是：用户兴趣不再是一个点，而是一个<strong>一个分布，一个多峰的函数</strong>。这样即使在低维空间，也可以获得几乎无限强的表达能力。</p>
<p>用户的兴趣不是一个点，而是一个<strong>多峰的函数</strong>。一个峰就表示一个兴趣，峰值的大小表示兴趣强度。那么针对不同的候选广告，用户的兴趣强度是不同的，也就是说<strong>随着候选广告的变化，用户的兴趣强度不断在变化。</strong></p>
<p>换句话说：<strong>假定用户兴趣表示的Embedding Vector是Vu，候选广告的是Va，那么Vu是Va的函数。</strong> 也就是说，同意用户针对不同的广告有不同的用户兴趣表示(嵌入向量不同)。</p>
<p><strong>公式如下：</strong>
$$
V_u=f(V_a)=\sum_{i=1}^Nw_i\times V_i=\sum_{i=1}^Ng(V_i,V_a)\times V_i
$$
其中，Vi表示behavior id i的嵌入向量，比如good_id,shop_id等。Vu是所有behavior ids的加权和，表示的是用户兴趣。候选广告影响着每个behavior id的权重，也就是Local Activation。权重表示的是：每一个behavior id针对当前的候选广告Va，对总的用户兴趣表示的Embedding Vector的贡献大小。在实际实现中，权重用激活函数Dice的输出来表示，输入是Vi和Va。</p>
<h2 id="dice-data-dependent-activation-function" tabindex="-1"><a class="header-anchor" href="#dice-data-dependent-activation-function" aria-hidden="true">#</a> Dice：Data-Dependent-Activation-Function</h2>
<p>PReLU其实是ReLU的改良版，ReLU可以看作是<code v-pre>x*Max(x,0)</code>，相当于输出x经过了一个在0点的阶跃整流器。由于ReLU在x小于0的时候，梯度为0，可能导致网络停止更新，PReLU对整流器的左半部分形式进行了修改，使得x小于0时输出不为0。</p>
<p>研究表明，PReLU能提高准确率但是也稍微增加了过拟合的风险。PReLU形式如下：
$$
\begin{aligned}
f(s)=
\left{\begin{matrix}
s\quad&amp;\text{if}\ s&gt;0\
\alpha s\quad&amp;\text{if}\ s\leqslant0
\end{matrix}\right.
=p(s)\cdot s+(1-p(s))\cdot \alpha s
\end{aligned}
$$
其中，$p(s)=I(s&gt;0)$</p>
<p>无论是ReLU还是PReLU突变点都在0，论文里认为，对于所有输入不应该都选择0点为突变点而是应该依赖于数据的。于是提出了一种<strong>data dependent</strong>的方法：<strong>Dice激活函数</strong>。形式如下：
$$
f(s)=p(s)\cdot s+(1-p(s))\cdot \alpha s,\ p(s)=\frac{1}{1+\text{exp}\left(-\frac{s-E[s]}{\sqrt{Var[s]+\epsilon}}\right)}
$$
可以看出，p(s)是一个概率值，这个概率值决定着输出是取s或者是$\alpha \cdot s$，p(s)也起到了一个整流器的作用。</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-ps.png" alt="DIN-ps"></p>
<p>p(s)的计算分为两步：</p>
<ol>
<li>首先，对x进行均值归一化处理，这使得整流点是在数据的均值处，实现了data dependent的想法；</li>
<li>其次，经过一个sigmoid函数的计算，得到了一个0到1的概率值。巧合的是最近google提出的Swish函数形式为<code v-pre>x*sigmoid(x)</code> 在多个实验上证明了比ReLU函数<code v-pre>x*Max(x,0)</code>表现更优。</li>
</ol>
<p>Dice可以看作是PReLu的通用化，也即PReLu是Dice的特例。当E(s)=0且Var[s]=0时，Dice就成了PReLu。</p>
<h2 id="adaptive-regularization" tabindex="-1"><a class="header-anchor" href="#adaptive-regularization" aria-hidden="true">#</a> Adaptive-Regularization</h2>
<p>由于深度模型比较复杂，输入又非常稀疏，导致参数非常多，不出意外的过拟合了。</p>
<p>CTR中输入稀疏而且维度高，已有的L1 L2 Dropout防止过拟合的办法，论文中尝试后效果都不是很好。用户数据符合长尾定律<code v-pre>long-tail law</code>，也就是说很多的feature id只出现了几次，而一小部分feature id出现很多次。这在训练过程中增加了很多噪声，并且加重了过拟合。</p>
<p>对于这个问题一个简单的处理办法就是：人工的去掉出现次数比较少的feature id。缺点是：损失的信息不好评估；阈值的设定非常的粗糙。</p>
<p><strong>DIN给出的解决方案是：</strong></p>
<ol>
<li>针对feature id出现的频率，来自适应的调整他们正则化的强度；</li>
<li>对于出现频率高的，给与较小的正则化强度；</li>
<li>对于出现频率低的，给予较大的正则化强度。</li>
</ol>
<p>在实际中，导致计算困难的最主要原因就是embedding字典，即$W\in R^{D\times K}$，其中D是字典的个数，K是embedding向量空间的维度，W的L2正则逐样本可表示为：
$$
\begin{aligned}
L_2(W)=||w||^2_2=\sum_{j=1}^K||w_j||^2_2=\sum_{(x,y)\in S}\sum_{j=1}^K\frac{I(x_j\neq0)}{n_j}||w_j||^2_2\
\end{aligned}
$$
其中$I(x_j\neq0)$表示为例子x是否有特征j，$n_j$表示为特征j在所有样本中的数量。上式可用mini-batch的形式表示如下：
$$
L_2(W)=\sum_{j=1}^K\sum_{m=1}^B\sum_{(x,y)\in \mathcal{B}<em>m}\frac{I(x_j\neq 0)}{n_j}||w_j||^2_2
$$
其中，B表示mini-batch的数量，$\mathcal{B}<em>m$表示第m个mini-batch。令$\alpha</em>{mj}=\text{max}</em>{(x,y)\in \mathcal{B}<em>m}I(x_j\neq 0)$表示只要特征j在该mini-batch中出现至少一次，就为1，一次都没出现过，就为0。则上式可近似为：
$$
L_2(W)\approx \sum^K</em>{j=1}\sum_{m=1}^B\dfrac{\alpha_{mj}}{n_j}||w_j||_2^2
$$
这样，我们就能得到mini-batch的L2正则的近似版本。</p>
<p>对于第m个mini-batch，考虑了embedding权重的第j个特征的权重的梯度下降更新公式为：
$$
w_j\leftarrow w_j-\eta\left[\frac{1}{|\mathcal{B}<em>m|}\sum</em>{(x,y)\in\mathcal{B}<em>m}\frac{\partial L(p(x),y)}{\partial w_j}+\lambda\frac{\alpha</em>{mj}}{n_j}w_j\right]
$$
所以这里做了两点：</p>
<ul>
<li><strong>只有在mini-batch中出现过的特征的参数才会参与正则的计算</strong></li>
<li>针对feature id出现的频率，来自适应的调整他们正则化的强度。这是因为作者实践发现出现频率高的物品无论是在模型评估还是线上收入中都有较大影响</li>
</ul>
<p>我个人的感觉是：</p>
<p>这仅仅是由于出现频率高的商品更符合大众的兴趣，而现有的模型还不能实现真正的千人千面推荐，所以使得热度高的商品重要性依旧非常大，不这样做的话模型性能就下降。</p>
<p>这就好比最简单的推荐系统：给所有人都推荐最热的商品。当技术还不够成熟，模型效果没那么好的时候，我们增加对热点商品的权重(极端就是给所有人都推荐热点商品)，从最终的指标来看多半能提升模型效果，毕竟这符合大多数人兴趣爱好。但是这并不是我们想要的千人千面的推荐。</p>
<h1 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h1>
<p>DIN在阿里内部的实现，使用了多个GPU。并行化是基于<strong>模型并行化、数据并行化</strong>。命名为<strong>X-Deep Learning(XDL)</strong>。</p>
<h2 id="组成部分" tabindex="-1"><a class="header-anchor" href="#组成部分" aria-hidden="true">#</a> 组成部分</h2>
<p>由三部分组成：</p>
<ol>
<li>Distributed Embedding Layer。模型并行化部分，Embedding Layer的参数分布在多个GPU上，完成前向后向传播计算。</li>
<li>Local Backend。单独的模块，用来在处理网络的训练。使用了开源的deep learning框架，比如tf，mxnet，theano等。作为一个后端支撑，良好的接口封装方便集成或切换各个开源框架。</li>
<li>Communication Component。基础模块，用来帮助embedding layer和backend来实现并行化。使用MPI实现。</li>
</ol>
<h2 id="架构图" tabindex="-1"><a class="header-anchor" href="#架构图" aria-hidden="true">#</a> 架构图</h2>
<p>分为<strong>模型并行化、数据并行化</strong>。</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-XDL-platform.jpg" alt="DIN-XDL-platform"></p>
<h2 id="common-feature-trick" tabindex="-1"><a class="header-anchor" href="#common-feature-trick" aria-hidden="true">#</a> Common-Feature-Trick</h2>
<p>对于一个用户，一次pageview中假设展示了200个商品。那么每个商品就对应一条样本。但是，这200条样本中是有很多<code v-pre>Common Feature</code>的。所以DIN的实现中并没有把用户都展开，类似于下图：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-common-feature.jpg" alt="DIN-common-feature"></p>
<p>对于很多静态的不变的特征，比如性别、年龄、昨天以前的行为等只计算一次、存储一次。之后利用索引与其他特征关联，大幅度的压缩了样本的存储，加快了模型的训练。最终实验仅用了1/3的资源，获得了12倍的加速。</p>
<h2 id="结果展示" tabindex="-1"><a class="header-anchor" href="#结果展示" aria-hidden="true">#</a> 结果展示</h2>
<p>下图展示了用户兴趣分布：颜色越暖表示用户兴趣越高，可以看到用户的兴趣分布有多个峰。</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-visualize.png" alt="DIN-visualize"></p>
<p>利用候选的广告，反向激活历史兴趣。不同的历史兴趣爱好对于当前候选广告的权重不同，做到了local activation，如下图：</p>
<p><img src="@source/docs/recommender-systems/industry-application/alibaba/deep-interest-network/pic/DIN-history-weight.png" alt="DIN-history-weight"></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<ol>
<li>用户有多个兴趣爱好，访问了多个good_id，shop_id。为了降低纬度并使得商品店铺间的算术运算有意义，我们先对其进行Embedding嵌入。那么我们如何对用户多种多样的兴趣建模那？使用<strong>Pooling对Embedding Vector求和或者求平均</strong>。同时这也解决了不同用户输入长度不同的问题，得到了一个固定长度的向量。这个向量就是用户表示，是用户兴趣的代表。</li>
<li>但是，直接求sum或average损失了很多信息。所以稍加改进，针对不同的behavior id赋予不同的权重，这个权重是由当前behavior id和候选广告共同决定的。这就是Attention机制，实现了Local Activation。</li>
<li>DIN使用<em>activation unit</em>来捕获local activation的特征，使用<em>weighted sum pooling</em>来捕获diversity结构。</li>
<li>在模型学习优化上，DIN提出了<em>Dice激活函数</em>、<em>自适应正则</em> ，显著的提升了模型性能与收敛速度。</li>
</ol>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.cnblogs.com/bentuwuying/p/8295747.html" target="_blank" rel="noopener noreferrer">阿里深度兴趣网络模型paper学习<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/39439947" target="_blank" rel="noopener noreferrer">CTR预估--阿里Deep Interest Network<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/u010352603/article/details/80590152" target="_blank" rel="noopener noreferrer">计算广告CTR预估系列(五)--阿里Deep Interest Network理论<ExternalLinkIcon/></a></li>
</ul>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/35599271" target="_blank" rel="noopener noreferrer">【阿里算法天才盖坤】解读阿里深度学习实践，CTR 预估、MLR 模型、兴趣分布网络等<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/a1066196847/article/details/99467276" target="_blank" rel="noopener noreferrer">阿里巴巴线上使用的深度学习兴趣网络 DIN (三) - 论文翻译<ExternalLinkIcon/></a></p>
<p>https://github.com/alibaba/x-deeplearning/wiki/%E6%B7%B1%E5%BA%A6%E5%85%B4%E8%B6%A3%E7%BD%91%E7%BB%9C(DIN)#%E7%AE%97%E6%B3%95%E4%BB%8B%E7%BB%8D</p>
<p><a href="https://zhuanlan.zhihu.com/p/81193062" target="_blank" rel="noopener noreferrer">阿里DIN网络你真的懂了吗？<ExternalLinkIcon/></a></p>
</div></template>


