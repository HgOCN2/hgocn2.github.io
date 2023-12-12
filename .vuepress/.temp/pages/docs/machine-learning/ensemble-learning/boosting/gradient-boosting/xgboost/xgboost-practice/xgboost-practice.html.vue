<template><div><h1 id="xgboost实践" tabindex="-1"><a class="header-anchor" href="#xgboost实践" aria-hidden="true">#</a> XGBoost实践</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost.html">返回上层目录</RouterLink></li>
<li><a href="#XGBoost%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98">XGBoost常见面试题</a>
<ul>
<li><a href="#%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8BXGBoost">简单介绍一下XGBoost </a></li>
<li><a href="#XGBoost%E4%B8%8EGBDT%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C">XGBoost与GBDT有什么不同</a></li>
<li><a href="#XGBoost%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8%E6%B3%B0%E5%8B%92%E4%BA%8C%E9%98%B6%E5%B1%95%E5%BC%80">XGBoost为什么使用泰勒二阶展开</a></li>
<li><a href="#XGBoost%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AF%E4%BB%A5%E5%B9%B6%E8%A1%8C%E8%AE%AD%E7%BB%83">XGBoost为什么可以并行训练</a></li>
<li><a href="#XGBoost%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BF%AB">XGBoost为什么快</a></li>
<li><a href="#XGBoost%E9%98%B2%E6%AD%A2%E8%BF%87%E6%8B%9F%E5%90%88%E7%9A%84%E6%96%B9%E6%B3%95">XGBoost防止过拟合的方法</a></li>
<li><a href="#XGBoost%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%E7%BC%BA%E5%A4%B1%E5%80%BC">XGBoost如何处理缺失值</a></li>
<li><a href="#XGBoost%E4%B8%AD%E5%8F%B6%E5%AD%90%E7%BB%93%E7%82%B9%E7%9A%84%E6%9D%83%E9%87%8D%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E5%87%BA%E6%9D%A5">XGBoost中叶子结点的权重如何计算出来</a></li>
<li><a href="#XGBoost%E4%B8%AD%E7%9A%84%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%81%9C%E6%AD%A2%E7%94%9F%E9%95%BF%E6%9D%A1%E4%BB%B6">XGBoost中的一棵树的停止生长条件</a></li>
<li><a href="#RF%E5%92%8CGBDT%E7%9A%84%E5%8C%BA%E5%88%AB">RF和GBDT的区别</a></li>
<li><a href="#XGBoost%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%E4%B8%8D%E5%B9%B3%E8%A1%A1%E6%95%B0%E6%8D%AE">XGBoost如何处理不平衡数据</a></li>
<li><a href="#%E6%AF%94%E8%BE%83LR%E5%92%8CGBDT%EF%BC%8C%E8%AF%B4%E8%AF%B4%E4%BB%80%E4%B9%88%E6%83%85%E6%99%AF%E4%B8%8BGBDT%E4%B8%8D%E5%A6%82LR">比较LR和GBDT，说说什么情景下GBDT不如LR</a></li>
<li><a href="#XGBoost%E4%B8%AD%E5%A6%82%E4%BD%95%E5%AF%B9%E6%A0%91%E8%BF%9B%E8%A1%8C%E5%89%AA%E6%9E%9D">XGBoost中如何对树进行剪枝</a></li>
<li><a href="#XGBoost%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E6%9C%80%E4%BD%B3%E5%88%86%E8%A3%82%E7%82%B9">XGBoost如何选择最佳分裂点</a></li>
<li><a href="#XGBoost%E7%9A%84Scalable%E6%80%A7%E5%A6%82%E4%BD%95%E4%BD%93%E7%8E%B0">XGBoost的Scalable性如何体现</a></li>
<li><a href="#XGBoost%E5%A6%82%E4%BD%95%E8%AF%84%E4%BB%B7%E7%89%B9%E5%BE%81%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7">XGBoost如何评价特征的重要性</a></li>
<li><a href="#XGBooost%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98%E7%9A%84%E4%B8%80%E8%88%AC%E6%AD%A5%E9%AA%A4">XGBooost参数调优的一般步骤</a></li>
<li><a href="#XGBoost%E6%A8%A1%E5%9E%8B%E5%A6%82%E6%9E%9C%E8%BF%87%E6%8B%9F%E5%90%88%E4%BA%86%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3">XGBoost模型如果过拟合了怎么解决</a></li>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88XGBoost%E7%9B%B8%E6%AF%94%E6%9F%90%E4%BA%9B%E6%A8%A1%E5%9E%8B%E5%AF%B9%E7%BC%BA%E5%A4%B1%E5%80%BC%E4%B8%8D%E6%95%8F%E6%84%9F">为什么XGBoost相比某些模型对缺失值不敏感</a></li>
</ul>
</li>
<li><a href="#XGBoost%E4%BB%A3%E7%A0%81%E5%AE%9E%E8%B7%B5">XGBoost代码实践</a>
<ul>
<li><a href="#XGBoost%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA">XGBoost运行环境搭建</a>
<ul>
<li><a href="#%E9%80%9A%E8%BF%87pip%E5%AE%89%E8%A3%85">通过pip安装</a></li>
<li><a href="#%E9%80%9A%E8%BF%87%E6%BA%90%E7%A0%81%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85">通过源码编译安装</a></li>
</ul>
</li>
<li><a href="#XGBoost%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3">XGBoost参数详解</a>
<ul>
<li><a href="#%E5%B8%B8%E8%A7%84%E5%8F%82%E6%95%B0">常规参数</a></li>
<li>[模型参数Tree Booster](#模型参数Tree Booster)</li>
<li>[模型参数Linear Booster](#模型参数Linear Booster)</li>
<li><a href="#%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1%E5%8F%82%E6%95%B0">学习任务参数</a></li>
<li><a href="#min_child_weight%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3">min_child_weight参数详解</a></li>
<li><a href="#%E6%AD%A3%E5%B8%B8%E8%B0%83%E5%8F%82%E6%96%B9%E6%B3%95">正常调参方法</a></li>
</ul>
</li>
<li><a href="#XGBoost%E5%AE%9E%E6%88%98">XGBoost实战</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F">数据格式</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E7%AE%80%E5%8D%95%E5%AE%9E%E8%B7%B5%EF%BC%9A%E6%AF%92%E8%98%91%E8%8F%87%E5%88%A4%E5%AE%9A">代码简单实践：毒蘑菇判定</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8EXGBoost%E5%8E%9F%E7%94%9F%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%88%86%E7%B1%BB">基于XGBoost原生接口的分类</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8EXGBoost%E5%8E%9F%E7%94%9F%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%9B%9E%E5%BD%92">基于XGBoost原生接口的回归</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8EScikit-learn%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%88%86%E7%B1%BB">基于Scikit-learn接口的分类</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8EScikit-learn%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%9B%9E%E5%BD%92">基于Scikit-learn接口的回归</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/xgboost-dmlc.jpg" alt="xgboost-dmlc"></p>
<h1 id="xgboost常见面试题" tabindex="-1"><a class="header-anchor" href="#xgboost常见面试题" aria-hidden="true">#</a> XGBoost常见面试题</h1>
<h2 id="简单介绍一下xgboost" tabindex="-1"><a class="header-anchor" href="#简单介绍一下xgboost" aria-hidden="true">#</a> 简单介绍一下XGBoost</h2>
<p>首先需要说一说GBDT，它是一种基于boosting增强策略的加法模型，训练的时候采用前向分布算法进行贪婪的学习，每次迭代都学习一棵CART树来拟合之前 t-1 棵树的预测结果与训练样本真实值的残差。</p>
<p>XGBoost对GBDT进行了一系列优化，比如损失函数进行了二阶泰勒展开、目标函数加入正则项、支持并行和默认缺失值处理等，在可扩展性和训练速度上有了巨大的提升，但其核心思想没有大的变化。</p>
<h2 id="xgboost与gbdt有什么不同" tabindex="-1"><a class="header-anchor" href="#xgboost与gbdt有什么不同" aria-hidden="true">#</a> XGBoost与GBDT有什么不同</h2>
<ul>
<li><strong>基分类器</strong>：XGBoost的基分类器不仅支持CART决策树，还支持线性分类器，此时XGBoost相当于带L1和L2正则化项的Logistic回归（分类问题）或者线性回归（回归问题）。</li>
<li><strong>导数信息</strong>：XGBoost对损失函数做了二阶泰勒展开，GBDT只用了一阶导数信息，并且XGBoost还支持自定义损失函数，只要损失函数一阶、二阶可导。</li>
<li><strong>正则项</strong>：XGBoost的目标函数加了正则项， 相当于预剪枝，使得学习出来的模型更加不容易过拟合。</li>
<li><strong>列抽样</strong>：XGBoost支持列采样，与随机森林类似，用于防止过拟合。</li>
<li><strong>缺失值处理</strong>：对树中的每个非叶子结点，XGBoost可以自动学习出它的默认分裂方向。如果某个样本该特征值缺失，会将其划入默认分支。</li>
<li><strong>并行化</strong>：注意不是tree维度的并行，而是特征维度的并行。XGBoost预先将每个特征按特征值排好序，存储为块结构，分裂结点时可以采用多线程并行查找每个特征的最佳分割点，极大提升训练速度。</li>
</ul>
<h2 id="xgboost为什么使用泰勒二阶展开" tabindex="-1"><a class="header-anchor" href="#xgboost为什么使用泰勒二阶展开" aria-hidden="true">#</a> XGBoost为什么使用泰勒二阶展开</h2>
<ul>
<li><strong>精准性</strong>：相对于GBDT的一阶泰勒展开，XGBoost采用二阶泰勒展开，可以更为精准的逼近真实的损失函数</li>
<li><strong>可扩展性</strong>：损失函数支持自定义，只需要新的损失函数二阶可导。</li>
</ul>
<h2 id="xgboost为什么可以并行训练" tabindex="-1"><a class="header-anchor" href="#xgboost为什么可以并行训练" aria-hidden="true">#</a> XGBoost为什么可以并行训练</h2>
<ul>
<li>XGBoost的并行，并不是说每棵树可以并行训练，XGB本质上仍然采用boosting思想，每棵树训练前需要等前面的树训练完成才能开始训练。</li>
<li>XGBoost的并行，指的是特征维度的并行：在训练之前，每个特征按特征值对样本进行预排序，并存储为Block结构，在后面查找特征分割点时可以重复使用，而且特征已经被存储为一个个block结构，那么在寻找每个特征的最佳分割点时，可以利用多线程对每个block并行计算。</li>
</ul>
<h2 id="xgboost为什么快" tabindex="-1"><a class="header-anchor" href="#xgboost为什么快" aria-hidden="true">#</a> XGBoost为什么快</h2>
<ul>
<li><strong>分块并行</strong>：训练前每个特征按特征值进行排序并存储为Block结构，后面查找特征分割点时重复使用，并且支持并行查找每个特征的分割点</li>
<li><strong>候选分位点</strong>：每个特征采用常数个分位点作为候选分割点</li>
<li><strong>CPU cache 命中优化</strong>： 使用缓存预取的方法，对每个线程分配一个连续的buffer，读取每个block中样本的梯度信息并存入连续的Buffer中。</li>
<li><strong>Block 处理优化</strong>：Block预先放入内存；Block按列进行解压缩；将Block划分到不同硬盘来提高吞吐</li>
</ul>
<h2 id="xgboost防止过拟合的方法" tabindex="-1"><a class="header-anchor" href="#xgboost防止过拟合的方法" aria-hidden="true">#</a> XGBoost防止过拟合的方法</h2>
<p>XGBoost在设计时，为了防止过拟合做了很多优化，具体如下：</p>
<ul>
<li><strong>目标函数添加正则项</strong>：叶子节点个数+叶子节点权重的L2正则化</li>
<li><strong>列抽样</strong>：训练的时候只用一部分特征（不考虑剩余的block块即可）</li>
<li><strong>子采样</strong>：每轮计算可以不使用全部样本，使算法更加保守</li>
<li><strong>shrinkage</strong>: 可以叫学习率或步长，为了给后面的训练留出更多的学习空间</li>
</ul>
<h2 id="xgboost如何处理缺失值" tabindex="-1"><a class="header-anchor" href="#xgboost如何处理缺失值" aria-hidden="true">#</a> XGBoost如何处理缺失值</h2>
<p>XGBoost模型的一个优点就是允许特征存在缺失值。对缺失值的处理方式如下：</p>
<ul>
<li>在特征k上寻找最佳split point时，不会对该列特征missing的样本进行遍历，而只对该列特征值为non-missing的样本上对应的特征值进行遍历，通过这个技巧来减少了为稀疏离散特征寻找split point的时间开销。</li>
<li>在逻辑实现上，为了保证完备性，会将该特征值missing的样本分别分配到左叶子结点和右叶子结点，两种情形都计算一遍后，选择分裂后增益最大的那个方向（左分支或是右分支），作为预测时特征值缺失样本的默认分支方向。</li>
<li>如果在训练中没有缺失值而在预测中出现缺失，那么会自动将缺失值的划分方向放到右子结点。</li>
</ul>
<h2 id="xgboost中叶子结点的权重如何计算出来" tabindex="-1"><a class="header-anchor" href="#xgboost中叶子结点的权重如何计算出来" aria-hidden="true">#</a> XGBoost中叶子结点的权重如何计算出来</h2>
<p>XGBoost目标函数最终推导形式如下：
$$
\begin{aligned}
\tilde{L}^{(t)}&amp;=\sum_{i=1}^n\left[ g_iw_{q(x_i)}+\frac{1}{2}h_iw_{q(x_i)}^2 \right]+\gamma T +\lambda\frac{1}{2}\sum_{j=1}^Tw_j^2\
&amp;=\sum_{j=1}^T\left[ \left(\sum_{i\in I_j}g_i\right)w_j+\frac{1}{2}\left(\sum_{i\in I_j}h_i+\lambda\right)w^2_j \right]+\gamma T\
&amp;=\sum_{j=1}^T\left[ G_jw_j+\frac{1}{2}\left(H_j+\lambda\right)w^2_j \right]+\gamma T\
\end{aligned}
$$
利用一元二次函数求最值的知识，当目标函数达到最小值$Obj^{<em>}$时，每个叶子结点的权重为$w^{</em>}_j$。</p>
<p>具体公式如下：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/leaf-w.jpeg" alt="leaf-w"></p>
<h2 id="xgboost中的一棵树的停止生长条件" tabindex="-1"><a class="header-anchor" href="#xgboost中的一棵树的停止生长条件" aria-hidden="true">#</a> XGBoost中的一棵树的停止生长条件</h2>
<ul>
<li>当新引入的一次分裂所带来的增益Gain&lt;0时，放弃当前的分裂。这是训练损失和模型结构复杂度的博弈过程。</li>
<li>当树达到最大深度时，停止建树，因为树的深度太深容易出现过拟合，这里需要设置一个超参数max_depth。</li>
<li>当引入一次分裂后，重新计算新生成的左、右两个叶子结点的样本权重和。如果任一个叶子结点的样本权重低于某一个阈值，也会放弃此次分裂。这涉及到一个超参数:最小样本权重和，是指如果一个叶子节点包含的样本数量太少也会放弃分裂，防止树分的太细。</li>
</ul>
<h2 id="rf和gbdt的区别" tabindex="-1"><a class="header-anchor" href="#rf和gbdt的区别" aria-hidden="true">#</a> RF和GBDT的区别</h2>
<p><strong>相同点：</strong></p>
<ul>
<li>都是由多棵树组成，最终的结果都是由多棵树一起决定。</li>
</ul>
<p><strong>不同点：</strong></p>
<ul>
<li><strong>集成学习</strong>：RF属于bagging思想，而GBDT是boosting思想</li>
<li><strong>偏差-方差权衡</strong>：RF不断的降低模型的方差，而GBDT不断的降低模型的偏差</li>
<li><strong>训练样本</strong>：RF每次迭代的样本是从全部训练集中有放回抽样形成的，而GBDT每次使用全部样本</li>
<li><strong>并行性</strong>：RF的树可以并行生成，而GBDT只能顺序生成(需要等上一棵树完全生成)</li>
<li><strong>最终结果</strong>：RF最终是多棵树进行多数表决（回归问题是取平均），而GBDT是加权融合</li>
<li><strong>数据敏感性</strong>：RF对异常值不敏感，而GBDT对异常值比较敏感</li>
<li><strong>泛化能力</strong>：RF不易过拟合，而GBDT容易过拟合</li>
</ul>
<h2 id="xgboost如何处理不平衡数据" tabindex="-1"><a class="header-anchor" href="#xgboost如何处理不平衡数据" aria-hidden="true">#</a> XGBoost如何处理不平衡数据</h2>
<p>对于不平衡的数据集，例如用户的购买行为，肯定是极其不平衡的，这对XGBoost的训练有很大的影响，XGBoost有两种自带的方法来解决：</p>
<p>第一种，如果你在意AUC，采用AUC来评估模型的性能，那你可以通过设置scale_pos_weight来平衡正样本和负样本的权重。例如，当正负样本比例为1:10时，scale_pos_weight可以取10；</p>
<p>第二种，如果你在意概率(预测得分的合理性)，你不能重新平衡数据集(会破坏数据的真实分布)，应该设置max_delta_step为一个有限数字来帮助收敛（基模型为LR时有效）。</p>
<p>原话是这么说的：</p>
<blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>For common cases such as ads clickthrough log, the dataset is extremely imbalanced. This can affect the training of xgboost model, and there are two ways to improve it.

If you care only about the ranking order (AUC) of your prediction        Balance the positive and negative weights, via scale_pos_weight        Use AUC for evaluation

If you care about predicting the right probability
	In such a case, you cannot re-balance the dataset  
	In such a case, set parameter max_delta_step to a finite number (say 1) will help convergence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>那么，源码到底是怎么利用<strong>scale_pos_weight</strong>来平衡样本的呢，是调节权重还是过采样呢？请看源码：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>if (info.labels[i] == 1.0f)  w *= param_.scale_pos_weight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出，应该是增大了少数样本的权重。</p>
<p>除此之外，还可以通过上采样、下采样、SMOTE算法或者自定义代价函数的方式解决正负样本不平衡的问题。</p>
<h2 id="比较lr和gbdt-说说什么情景下gbdt不如lr" tabindex="-1"><a class="header-anchor" href="#比较lr和gbdt-说说什么情景下gbdt不如lr" aria-hidden="true">#</a> 比较LR和GBDT，说说什么情景下GBDT不如LR</h2>
<p>先说说LR和GBDT的区别：</p>
<ul>
<li>LR是线性模型，可解释性强，很容易并行化，但学习能力有限，需要大量的人工特征工程</li>
<li>GBDT是非线性模型，具有天然的特征组合优势，特征表达能力强，但是树与树之间无法并行训练，而且树模型很容易过拟合；</li>
</ul>
<p>当在高维稀疏特征的场景下，LR的效果一般会比GBDT好。原因如下：</p>
<p>先看一个例子：</p>
<blockquote>
<p>假设一个二分类问题，label为0和1，特征有100维，如果有1w个样本，但其中只有10个正样本1，而这些样本的特征$f_1$的值为全为1，而其余9990条样本的$f_1$特征都为0(在高维稀疏的情况下这种情况很常见)。</p>
<p>我们都知道在这种情况下，树模型很容易优化出一个使用$f_1$特征作为重要分裂节点的树，因为这个结点直接能够将训练数据划分的很好，但是当测试的时候，却会发现效果很差，因为这个特征$f_1$只是刚好偶然间跟$y$拟合到了这个规律，这也是我们常说的过拟合。</p>
</blockquote>
<p>那么这种情况下，如果采用LR的话，应该也会出现类似过拟合的情况呀：
$$
y = W_1<em>f_1 + W_i</em>f_i+\ ...
$$
，其中$W_1$特别大以拟合这10个样本。为什么此时树模型就过拟合的更严重呢？</p>
<p>仔细想想发现，因为现在的模型普遍都会带着正则项，而LR等线性模型的正则项是对权重的惩罚，也就是$W_1$一旦过大，惩罚就会很大，进一步压缩$W_1$的值，使他不至于过大。但是，树模型则不一样，树模型的惩罚项通常为叶子节点数和深度等，而我们都知道，对于上面这种case，<strong>树只需要一个节点就可以完美分割9990和10个样本，一个结点，最终产生的惩罚项极其之小</strong>。</p>
<p>这也就是为什么在高维稀疏特征的时候，线性模型会比非线性模型好的原因了：<strong>带正则化的线性模型比较不容易对稀疏特征过拟合。</strong></p>
<h2 id="xgboost中如何对树进行剪枝" tabindex="-1"><a class="header-anchor" href="#xgboost中如何对树进行剪枝" aria-hidden="true">#</a> XGBoost中如何对树进行剪枝</h2>
<ul>
<li>在目标函数中增加了正则项：使用叶子结点的数目和叶子结点权重的L2模的平方，控制树的复杂度。</li>
<li>在结点分裂时，定义了一个阈值，如果分裂后目标函数的增益小于该阈值，则不分裂。</li>
<li>当引入一次分裂后，重新计算新生成的左、右两个叶子结点的样本权重和。如果任一个叶子结点的样本权重低于某一个阈值（最小样本权重和），也会放弃此次分裂。</li>
<li>XGBoost 先从顶到底建立树直到最大深度，再从底到顶反向检查是否有不满足分裂条件的结点，进行剪枝。</li>
</ul>
<h2 id="xgboost如何选择最佳分裂点" tabindex="-1"><a class="header-anchor" href="#xgboost如何选择最佳分裂点" aria-hidden="true">#</a> XGBoost如何选择最佳分裂点</h2>
<p>XGBoost在训练前预先将特征按照特征值进行了排序，并存储为block结构，以后在结点分裂时可以重复使用该结构。</p>
<p>因此，可以采用特征并行的方法利用多个线程分别计算每个特征的最佳分割点，根据每次分裂后产生的增益，最终选择增益最大的那个特征的特征值作为最佳分裂点。</p>
<p>如果在计算每个特征的最佳分割点时，对每个样本都进行遍历，计算复杂度会很大，这种全局扫描的方法并不适用大数据的场景。XGBoost还提供了一种直方图近似算法，对特征排序后仅选择常数个候选分裂位置作为候选分裂点，极大提升了结点分裂时的计算效率。</p>
<h2 id="xgboost的scalable性如何体现" tabindex="-1"><a class="header-anchor" href="#xgboost的scalable性如何体现" aria-hidden="true">#</a> XGBoost的Scalable性如何体现</h2>
<ul>
<li><strong>基分类器的scalability</strong>：弱分类器可以支持CART决策树，也可以支持LR和Linear。</li>
<li><strong>目标函数的scalability</strong>：支持自定义loss function，只需要其一阶、二阶可导。有这个特性是因为泰勒二阶展开，得到通用的目标函数形式。</li>
<li><strong>学习方法的scalability</strong>：Block结构支持并行化，支持Out-of-core计算。</li>
</ul>
<h2 id="xgboost如何评价特征的重要性" tabindex="-1"><a class="header-anchor" href="#xgboost如何评价特征的重要性" aria-hidden="true">#</a> XGBoost如何评价特征的重要性</h2>
<p>我们采用三种方法来评判XGBoost模型中特征的重要程度：</p>
<blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>官方文档：
（1）weight - the number of times a feature is used to split the data across all trees. 
（2）gain - the average gain of the feature when it is used in trees. 
（3）cover - the average coverage of the feature when it is used in trees.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ul>
<li><strong>weight</strong> ：该特征在所有树中被用作分割样本的特征的总次数。</li>
<li><strong>gain</strong> ：该特征在其出现过的所有树中产生的平均增益。</li>
<li><strong>cover</strong> ：该特征在其出现过的所有树中的平均覆盖范围。</li>
</ul>
<p>注意：覆盖范围这里指的是一个特征用作分割点后，其影响的样本数量，即有多少样本经过该特征分割到两个子节点。</p>
<h2 id="xgbooost参数调优的一般步骤" tabindex="-1"><a class="header-anchor" href="#xgbooost参数调优的一般步骤" aria-hidden="true">#</a> XGBooost参数调优的一般步骤</h2>
<p>首先需要初始化一些基本变量，例如：</p>
<ul>
<li>max_depth = 5</li>
<li>min_child_weight = 1</li>
<li>gamma = 0</li>
<li>subsample, colsample_bytree = 0.8</li>
<li>scale_pos_weight = 1</li>
</ul>
<p><strong>(1) 确定learning rate和estimator的数量</strong></p>
<p>learning rate可以先用0.1，用cv来寻找最优的estimators</p>
<p><strong>(2) max_depth和 min_child_weight</strong></p>
<p>我们调整这两个参数是因为，这两个参数对输出结果的影响很大。我们首先将这两个参数设置为较大的数，然后通过迭代的方式不断修正，缩小范围。</p>
<p>max_depth，每棵子树的最大深度，check from range(3,10,2)。</p>
<p>min_child_weight，子节点的权重阈值，check from range(1,6,2)。</p>
<p>如果一个结点分裂后，它的所有子节点的权重之和都大于该阈值，该叶子节点才可以划分。</p>
<p><strong>(3) gamma</strong></p>
<p>也称作最小划分损失<code v-pre>min_split_loss</code>，check from 0.1 to 0.5，指的是，对于一个叶子节点，当对它采取划分之后，损失函数的降低值的阈值。</p>
<ul>
<li>如果大于该阈值，则该叶子节点值得继续划分</li>
<li>如果小于该阈值，则该叶子节点不值得继续划分</li>
</ul>
<p><strong>(4) subsample, colsample_bytree</strong></p>
<p>subsample是对训练的采样比例</p>
<p>colsample_bytree是对特征的采样比例</p>
<p>both check from 0.6 to 0.9</p>
<p><strong>(5) 正则化参数</strong></p>
<p>alpha 是L1正则化系数，try 1e-5, 1e-2, 0.1, 1, 100</p>
<p>lambda 是L2正则化系数</p>
<p><strong>(6) 降低学习率</strong></p>
<p>降低学习率的同时增加树的数量，通常最后设置学习率为0.01~0.1</p>
<h2 id="xgboost模型如果过拟合了怎么解决" tabindex="-1"><a class="header-anchor" href="#xgboost模型如果过拟合了怎么解决" aria-hidden="true">#</a> XGBoost模型如果过拟合了怎么解决</h2>
<p>当出现过拟合时，有两类参数可以缓解：</p>
<p>第一类参数：用于直接控制模型的复杂度。包括<code v-pre>max_depth,min_child_weight,gamma</code> 等参数</p>
<p>第二类参数：用于增加随机性，从而使得模型在训练时对于噪音不敏感。包括<code v-pre>subsample,colsample_bytree</code></p>
<p>还有就是直接减小<code v-pre>learning rate</code>，但需要同时增加<code v-pre>estimator</code> 参数。</p>
<h2 id="为什么xgboost相比某些模型对缺失值不敏感" tabindex="-1"><a class="header-anchor" href="#为什么xgboost相比某些模型对缺失值不敏感" aria-hidden="true">#</a> 为什么XGBoost相比某些模型对缺失值不敏感</h2>
<p>对存在缺失值的特征，一般的解决方法是：</p>
<ul>
<li>离散型变量：用出现次数最多的特征值填充；</li>
<li>连续型变量：用中位数或均值填充；</li>
</ul>
<p>一些模型如SVM和KNN，其模型原理中涉及到了对样本距离的度量，如果缺失值处理不当，最终会导致模型预测效果很差。</p>
<p>而树模型对缺失值的敏感度低，大部分时候可以在数据缺失时时使用。原因就是，一棵树中每个结点在分裂时，寻找的是某个特征的最佳分裂点（特征值），完全可以不考虑存在特征值缺失的样本，也就是说，如果某些样本缺失的特征值缺失，对寻找最佳分割点的影响不是很大。</p>
<p>XGBoost对缺失数据有特定的处理方法，<a href="http://mp.weixin.qq.com/s?__biz=Mzg2MjI5Mzk0MA==&amp;mid=2247484181&amp;idx=1&amp;sn=8d0e51fb0cb974f042e66659e1daf447&amp;chksm=ce0b59cef97cd0d8cf7f9ae1e91e41017ff6d4c4b43a4c19b476c0b6d37f15769f954c2965ef&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">详情参考上篇文章第7题<ExternalLinkIcon/></a>。</p>
<p>因此，对于有缺失值的数据在经过缺失处理后：</p>
<ul>
<li>当数据量很小时，优先用朴素贝叶斯</li>
<li>数据量适中或者较大，用树模型，优先XGBoost</li>
<li>数据量较大，也可以用神经网络</li>
<li>避免使用距离度量相关的模型，如KNN和SVM</li>
</ul>
<h1 id="xgboost代码实践" tabindex="-1"><a class="header-anchor" href="#xgboost代码实践" aria-hidden="true">#</a> XGBoost代码实践</h1>
<h2 id="xgboost运行环境搭建" tabindex="-1"><a class="header-anchor" href="#xgboost运行环境搭建" aria-hidden="true">#</a> XGBoost运行环境搭建</h2>
<p>XGBoost安装分为两种方式，一种是直接通过pip安装（适用于Ptyhon），另一种是直接编译源码安装。</p>
<h3 id="通过pip安装" tabindex="-1"><a class="header-anchor" href="#通过pip安装" aria-hidden="true">#</a> 通过pip安装</h3>
<p>通过pip安装Python包既简单又方便。 如果读者准备在Python环境下使用XGBoost，即可以采用此方法。只需执行如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> xgboost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若Python版本为3.X，则执行命令为pip3 install xgboost。安装完毕后，即可在Python里直接引用XGBoost包，如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过源码编译安装" tabindex="-1"><a class="header-anchor" href="#通过源码编译安装" aria-hidden="true">#</a> 通过源码编译安装</h3>
<p>虽然通过pip安装XGBoost虽然方便，但其安装的XGBoost可能并非最新版本。源码编译安装XGBoost主要分为两个步骤：① 通过C++代码构建共享库；② 安装相应语言包。</p>
<p><strong>（1）构建共享库</strong></p>
<p>Linux下首先通过Git将XGBoost项目从github上克隆下来。因为XGBoost使用了Git submodules来管理依赖，因此在执行克隆时需加上--recursive选项，然后通过make对源码直接编译，如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> https://github.com/dmlc/xgboost
<span class="token builtin class-name">cd</span> xgboost
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果你是Mac系统，你可能会遇到下面的<a href="https://stackoverflow.com/questions/36211018/clang-error-errorunsupported-option-fopenmp-on-mac-osx-el-capitan-buildin" target="_blank" rel="noopener noreferrer">问题<ExternalLinkIcon/></a>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>clang: error: <span class="token builtin class-name">:</span> errorunsupported option <span class="token string">'-fopenmp'</span> on Mac OSX El Capitan building XGBoost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你需要下载完git之后，</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew uninstall gcc
brew <span class="token function">install</span> gcc
<span class="token builtin class-name">cd</span> xgboost
<span class="token function">cp</span> make/config.mk ./config.mk<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> /usr/local/bin/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>里面可能会有</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/usr/local/bin/gcc-9
/usr/local/bin/g++-9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>找到其中的gcc g++,然后</p>
<p>将./config.mk中的CC和CXX改成自己的路径</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CC</span><span class="token operator">=</span>/usr/local/bin/gcc-9  <span class="token comment">#自己的安装路经</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CXX</span><span class="token operator">=</span>/usr/local/bin/g++-9 <span class="token comment">#自己的安装路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，再</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">make</span> <span class="token parameter variable">-j4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可。</p>
<p>但是又会出现</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ld: symbol<span class="token punctuation">(</span>s<span class="token punctuation">)</span> not found <span class="token keyword">for</span> architecture x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我也是醉了。</p>
<p>算了，还是直接<code v-pre>pip install xgboost</code>。</p>
<p><strong>（2）Python包安装</strong></p>
<p>共享库编译完成之后，即可安装相应的语言包，此处以Python包为例。XGBoost使用Distutils来实现Python环境中的构建和安装，对于用户来讲安装过程十分简单。XGBoost的Python包在python-package中，用户只需进入该目录然后执行安装命令即可，如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> python-package
<span class="token function">sudo</span> python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xgboost参数详解" tabindex="-1"><a class="header-anchor" href="#xgboost参数详解" aria-hidden="true">#</a> XGBoost参数详解</h2>
<p>xgboost的python版本有原生版本和为了与sklearn相适应的sklearn接口版本
原生版本更灵活，而sklearn版本能够使用sklearn的Gridsearch，二者互有优缺。</p>
<p>对比预测结果，原生xgb与sklearn接口的训练过程相同，结果也相同。
不同之处在于：</p>
<ol>
<li>原生采用xgb.train()训练，sklearn接口采用model.fit() 。</li>
<li>sklearn接口中的参数n_estimators在原生xgb中定义在xgb.train()的num_boost_round</li>
<li>sklearnwatchlist为[(xtrain,ytrain),(xtest,ytest)]形式，而原生则是(dtrain,'train'),(dtest,'test')],在数据和标签都在DMatrix中，元组里可以定位输出时的名字。</li>
</ol>
<p>下面的参数以原生版本为例。</p>
<p>在运行XGboost之前，必须设置三种类型成熟：general parameters，booster parameters和task parameters：</p>
<ul>
<li><strong>General parameters</strong>
该参数参数控制在提升(boosting)过程中使用哪种booster，常用的booster有树模型(tree)和线性模型(linear model)</li>
<li><strong>Booster parameters</strong>
这取决于使用哪种booster</li>
<li><strong>Task parameters</strong>
控制学习的场景，例如在回归问题中会使用不同的参数控制排序</li>
</ul>
<p>这是一个字典，里面包含着训练中的参数关键字和对应的值，形式如下：</p>
<h3 id="常规参数" tabindex="-1"><a class="header-anchor" href="#常规参数" aria-hidden="true">#</a> 常规参数</h3>
<ul>
<li>booster [default=gbtree]：有两种模型可以选择gbtree和gblinear。gbtree使用基于树的模型进行提升计算，gblinear使用线性模型进行提升计算。缺省值为gbtree。</li>
<li>silent [default=0]：取0时表示打印出运行时信息，取1时表示以缄默方式运行，不打印运行时信息。缺省值为0。（True、False也可以）</li>
<li>nthread ：XGBoost运行时的线程数。缺省值是当前系统可以获得的最大线程数</li>
<li>num_pbuffer：无需自己手动设置。预测缓冲区的大小，通常设置为训练实例数。缓冲区用于保存上一个树生长的预测结果。</li>
<li>num_feature：特征数量，无需自己手动设置。</li>
</ul>
<h3 id="模型参数tree-booster" tabindex="-1"><a class="header-anchor" href="#模型参数tree-booster" aria-hidden="true">#</a> 模型参数Tree Booster</h3>
<ul>
<li>eta [default=0.3]：为了防止过拟合，更新过程中用到的收缩步长。在每次提升计算之后，算法会直接获得新特征的权重。 eta通过缩减特征的权重使提升计算过程更加保守。缺省值为0.3，取值范围为：[0,1]。</li>
<li>gamma [default=0]：分裂节点时，损失函数减小值只有大于等于gamma节点才分裂，gamma值越大，算法越保守，越不容易过拟合，但性能就不一定能保证，需要平衡，取值范围为：[0,∞]。</li>
<li>max_depth [default=6]：数的最大深度。缺省值为6，取值范围为：[1,∞]。值越大，树越大，模型越复杂，可以用来防止过拟合，典型值是3-10。</li>
<li>min_child_weight [default=1]：一个子集的所有观察值的最小权重和。如果新分裂的节点的样本权重和小于min_child_weight则停止分裂 。这个可以用来减少过拟合，但是也不能太高，会导致欠拟合。该指数越大越大算法越保守，取值范围为: [0,∞]。</li>
<li>max_delta_step [default=0]：每棵树所被允许的权重估计为最大增量。如果该值设置为0，则表示没有约束。如果将其设置为正值，则有助于使更新步骤更加保守。通常不需要这个参数，但当类极不平衡时，它可能有助于logistic回归。将其设置为1-10可能有助于控制更新，取值范围为：[0,∞]。</li>
<li>subsample [default=1]：构建每棵树对样本的采样率，用于训练模型的子样本占整个样本集合的比例。如果设置为0.5则意味着XGBoost将随机的冲整个样本集合中随机的抽取出50%的子样本建立树模型，这能够防止过拟合。取值范围为：(0,1]。</li>
<li>colsample_bytree [default=1]：列采样率，也就是特征采样率。在建立树时对特征采样的比例。缺省值为1，取值范围：(0,1]。</li>
<li>colsample_bylevel [default=1]：构建每一层时，列采样率。</li>
<li>lambda [default=1, alias: reg_lambda]：L2正则化，这个参数是用来控制XGBoost的正则化部分的。虽然大部分数据科学家很少用到这个参数，但是这个参数在减少过拟合上还是可以挖掘出更多用处的。</li>
<li>alpha [default=0, alias: reg_alpha]：L1正则化，增加该值会让模型更加收敛</li>
<li>scale_pos_weight, [default=1]：在类别高度不平衡的情况下，将参数设置大于0，可以加快收敛。</li>
</ul>
<h3 id="模型参数linear-booster" tabindex="-1"><a class="header-anchor" href="#模型参数linear-booster" aria-hidden="true">#</a> 模型参数Linear Booster</h3>
<ul>
<li>lambda [default=0]：L2 正则的惩罚系数</li>
<li>alpha [default=0]：L1 正则的惩罚系数</li>
<li>lambda_bias：在偏置上的L2正则。缺省值为0（在L1上没有偏置项的正则，因为L1时偏置不重要）</li>
</ul>
<h3 id="学习任务参数" tabindex="-1"><a class="header-anchor" href="#学习任务参数" aria-hidden="true">#</a> 学习任务参数</h3>
<ul>
<li>
<p>objective [default=reg:linear]：定义学习任务及相应的学习目标，可选的目标函数如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>“reg<span class="token punctuation">:</span>linear” –线性回归。
“reg<span class="token punctuation">:</span>logistic” –逻辑回归。
“binary<span class="token punctuation">:</span>logistic”–二分类的逻辑回归问题，输出为概率。
“binary<span class="token punctuation">:</span>logitraw”–二分类逻辑回归，输出是逻辑为<span class="token number">0</span><span class="token operator">/</span><span class="token number">1</span>的前一步的分数。
“count<span class="token punctuation">:</span>poisson”–计数问题的poisson回归，输出结果为poisson分布。在poisson回归中，max_delta_step的缺省值为<span class="token number">0.7</span>。
“multi<span class="token punctuation">:</span>softmax” –让XGBoost采用softmax目标函数处理多分类问题，同时需要设置参数num_class（类别个数）
“multi<span class="token punctuation">:</span>softprob” –和softmax一样，但是输出的是ndata <span class="token operator">*</span> nclass的向量，可以将该向量reshape成ndata行nclass列的矩阵。每个数据属于各个类别的概率。
“rank<span class="token punctuation">:</span>pairwise”–让Xgboost 做排名任务，通过最小化<span class="token punctuation">(</span>Learn to rank的一种方法<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>base_score [default=0.5]：所有实例的初始预测得分，全局偏差；为了足够的迭代次数，改变这个值将不会有太大的影响。</p>
</li>
<li>
<p>eval_metric [<strong>默认值取决于objective参数的取值</strong>]：校验数据所需要的评价指标，不同的目标函数将会有缺省的评价指标（回归：rmse，分类：误差，排序：平均精度）。用户可以添加多种评价指标，对于Python用户要以list传递参数对给程序，而不是map参数，list参数不会覆盖’eval_metric’。</p>
<p>对于有效数据的度量方法。对于回归问题，默认值是rmse，对于分类问题，默认值是error。典型值有：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>rmse：均方根误差
mae：平均绝对误差
logloss：负对数似然函数值
error：二分类错误率<span class="token punctuation">(</span>阈值为<span class="token number">0.5</span><span class="token punctuation">)</span>
merror：多分类错误率
mlogloss：多分类logloss损失函数
auc：曲线下面积
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>seed[ default=0 ]：随机数的种子。缺省值为0</p>
</li>
<li>
<p>dtrain：训练的数据</p>
</li>
<li>
<p>num_boost_round：这是指提升迭代的次数，也就是生成多少基模型。即树的棵树。</p>
</li>
<li>
<p>evals：这是一个列表，用于对训练过程中进行评估列表中的元素。形式是evals = [(dtrain,'train'),(dval,'val')]或者是evals = [(dtrain,'train')]，对于第一种情况，它使得我们可以在训练过程中观察验证集的效果</p>
</li>
<li>
<p>obj：自定义目的函数</p>
</li>
<li>
<p>feval：自定义评估函数</p>
</li>
<li>
<p>maximize：是否对评估函数进行最大化</p>
</li>
<li>
<p>early_stopping_rounds：早期停止次数 ，假设为100，验证集的误差迭代到一定程度在100次内不能再继续降低，就停止迭代。这要求evals 里至少有一个元素，如果有多个，按最后一个去执行。返回的是最后的迭代次数（不是最好的）。如果early_stopping_rounds存在，则模型会生成三个属性，bst.best_score，bst.best_iteration和bst.best_ntree_limit</p>
</li>
<li>
<p>evals_result：字典，存储在watchlist中的元素的评估结果。</p>
</li>
<li>
<p>verbose_eval ：(可以输入布尔型或数值型)，也要求evals里至少有 一个元素。如果为True,则对evals中元素的评估结果会输出在结果中；如果输入数字，假设为5，则每隔5个迭代输出一次。</p>
</li>
<li>
<p>learning_rates：每一次提升的学习率的列表，</p>
</li>
<li>
<p>xgb_model：在训练之前用于加载的xgb model。</p>
</li>
</ul>
<h3 id="min-child-weight参数详解" tabindex="-1"><a class="header-anchor" href="#min-child-weight参数详解" aria-hidden="true">#</a> min_child_weight参数详解</h3>
<p>The <a href="http://xgboost.readthedocs.io/en/latest/parameter.html" target="_blank" rel="noopener noreferrer">definition<ExternalLinkIcon/></a> of the min_child_weight parameter in xgboost is given as the:</p>
<blockquote>
<p>minimum sum of instance weight (hessian) needed in a child. If the tree partition step results in a leaf node with the sum of instance weight less than min_child_weight, then the building process <strong>will give up further partitioning</strong>. In linear regression mode, this simply corresponds to minimum number of instances needed to be in each node. The larger, the more conservative the algorithm will be.</p>
</blockquote>
<p>min_child_weight，意思是，当一个节点进行分裂后，发现子节点中至少有一个节点的二阶导之和如果小于min_child_weight，就不再进行下一次分裂（本次分裂则保留，不会回退停止）。</p>
<p>1、对于回归问题，假设损失函数是均方误差函数，每个样本的二阶导数是一个常数，这个时候 min_child_weight就是这个叶子结点中样本的数目。如果这个值设置的太小，那么会出现单个样本成一个叶子结点的情况，这很容易过拟合。</p>
<p>2、对于分类问题，假设为二分类问题，损失函数为交叉熵，则每个样本的二阶导数可以写成几个因子相乘的形式，其中一项为$sigmoid(\hat{y})\cdot (1-sigmoid(\hat{y}))$。对分类问题，我们考虑叶子结点的纯度。假设某个叶子节点只包含一类，$y = 1$，那个这个节点有很大的可能是：该节点包含的$\hat{y}$非常正，也就是我们给这个节点打分非常正，这个时候$sigmoid(\hat{y})$非常接近1，上面的式子接近0；反之，假设某个叶子节点只包含$y=0$，情况也是类似的。从分析中可知，如果某个叶子结点的二阶导之和越小，或者越接近0，这个节点就越纯，这种情况下容易过拟合。</p>
<p>而二阶导数恰巧就是
$$
\begin{aligned}
h_i&amp;=\frac{\partial^2 l(y_i, \hat{y}^{(t-1)})}{\partial^2 \hat{y}^{(t-1)}}\
&amp;=\frac{\text{exp}(-\hat{y}_i^{(t-1)})}{\left( 1+\text{exp}(-\hat{y}_i^{(t-1)}) \right)^2}\
&amp;=\text{Pred}\cdot (1-\text{Pred})\
\end{aligned}
$$</p>
<h3 id="正常调参方法" tabindex="-1"><a class="header-anchor" href="#正常调参方法" aria-hidden="true">#</a> 正常调参方法</h3>
<ol>
<li>确定学习速率和提升参数调优的初始值</li>
<li>max_depth 和 min_child_weight 参数调优</li>
<li>gamma参数调优</li>
<li>subsample 和 colsample_bytree 参数优</li>
<li>正则化参数alpha调优</li>
<li>降低学习速率和使用更多的决策树</li>
</ol>
<h2 id="xgboost实战" tabindex="-1"><a class="header-anchor" href="#xgboost实战" aria-hidden="true">#</a> XGBoost实战</h2>
<p>XGBoost有两大类接口：<strong>XGBoost原生接口</strong> 和 <strong>scikit-learn接口</strong> ，并且XGBoost能够实现 <strong>分类</strong> 和 <strong>回归</strong> 两种任务。因此，本章节分四个小块来介绍！</p>
<h3 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h3>
<p>XGBoost可以加载多种数据格式的训练数据：</p>
<ol>
<li><strong>libsvm</strong> 格式的文本数据；</li>
<li><strong>Numpy</strong> 的二维数组；</li>
<li><strong>XGBoost</strong> 的二进制的缓存文件。加载的数据存储在对象 <strong>DMatrix</strong> 中。</li>
</ol>
<p>下面一一列举：</p>
<ul>
<li>加载libsvm格式的数据</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dtrain1 <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span><span class="token string">'train.svm.txt'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>加载二进制的缓存文件</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dtrain2 <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span><span class="token string">'train.svm.buffer'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>加载numpy的数组</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># 5 entities, each contains 10 features</span>
label <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># binary target</span>
dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span> data<span class="token punctuation">,</span> label<span class="token operator">=</span>label<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将scipy.sparse格式的数据转化为 <strong>DMatrix</strong> 格式</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>csr <span class="token operator">=</span> scipy<span class="token punctuation">.</span>sparse<span class="token punctuation">.</span>csr_matrix<span class="token punctuation">(</span> <span class="token punctuation">(</span>dat<span class="token punctuation">,</span> <span class="token punctuation">(</span>row<span class="token punctuation">,</span>col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span> csr <span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将 DMatrix 格式的数据保存成XGBoost的二进制格式，在下次加载时可以提高加载速度，使用方式如下</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span><span class="token string">'train.svm.txt'</span><span class="token punctuation">)</span>
dtrain<span class="token punctuation">.</span>save_binary<span class="token punctuation">(</span><span class="token string">"train.buffer"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以用如下方式处理 DMatrix中的缺失值：</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span> data<span class="token punctuation">,</span> label<span class="token operator">=</span>label<span class="token punctuation">,</span> missing <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">999.0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>当需要给样本设置权重时，可以用如下方式</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>w <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span> data<span class="token punctuation">,</span> label<span class="token operator">=</span>label<span class="token punctuation">,</span> missing <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">999.0</span><span class="token punctuation">,</span> weight<span class="token operator">=</span>w<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码简单实践-毒蘑菇判定" tabindex="-1"><a class="header-anchor" href="#代码简单实践-毒蘑菇判定" aria-hidden="true">#</a> 代码简单实践：毒蘑菇判定</h3>
<p>XGBoost安装完成后，本节通过一个简单的示例，介绍如何使用XGBoost解决机器学习问题。该示例使用的是XGBoost自带的数据集（位于/demo/data文件夹下），该数据集描述的是不同蘑菇的相关特征，比如大小、颜色等，并且每一种蘑菇都会被标记为可食用的（标记为0）或有毒的（标记为1）。</p>
<p>**我们的任务是对蘑菇特征数据进行学习，训练相关模型，然后利用训练好的模型预测未知的蘑菇样本是否具有毒性。**下面用XGBoost解决该问题，如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb

<span class="token comment"># 数据读取</span>
XGBOOST_PATH<span class="token operator">=</span><span class="token string">"/Users/momo/xgboost"</span>
xgb_train <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>XGBOOST_PATH <span class="token operator">+</span> <span class="token string">'/demo/data/agaricus.txt.train'</span><span class="token punctuation">)</span>
xgb_test <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>XGBOOST_PATH <span class="token operator">+</span> <span class="token string">'/demo/data/agaricus.txt.test'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>xgb_train<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xgb_train<span class="token punctuation">.</span>num_col<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xgb_train<span class="token punctuation">.</span>num_row<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xgb_train<span class="token punctuation">.</span>feature_names<span class="token punctuation">)</span>

<span class="token comment"># 定义模型训练参数</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"objective"</span><span class="token punctuation">:</span> <span class="token string">"binary:logistic"</span><span class="token punctuation">,</span>
    <span class="token string">"booster"</span><span class="token punctuation">:</span> <span class="token string">"gbtree"</span><span class="token punctuation">,</span>
    <span class="token string">"max_depth"</span><span class="token punctuation">:</span> <span class="token number">3</span>
         <span class="token punctuation">}</span>
<span class="token comment"># 训练轮数</span>
num_round <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment"># 训练过程中实时输出评估结果</span>
watchlist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>xgb_train<span class="token punctuation">,</span> <span class="token string">'train'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>xgb_test<span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># 模型训练</span>
model <span class="token operator">=</span> xgb<span class="token punctuation">.</span>train<span class="token punctuation">(</span>params<span class="token punctuation">,</span> xgb_train<span class="token punctuation">,</span> num_round<span class="token punctuation">,</span> watchlist<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>首先读取训练集和测试集数据</strong>，XGBoost会将数据加载为自定义的矩阵DMatrix。<strong>数据加载完毕后，定义模型训练参数，然后对模型进行训练</strong>，训练过程的输出如下图所示。</p>
<div class="language-s line-numbers-mode" data-ext="s"><pre v-pre class="language-s"><code>[0]	train-error:0.01443	test-error:0.01614
[1]	train-error:0.01443	test-error:0.01614
[2]	train-error:0.01443	test-error:0.01614
[3]	train-error:0.00860	test-error:0.00993
[4]	train-error:0.00123	test-error:0.00000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上图中可以看到，XGBoost训练过程中实时输出了训练集和测试集的错误率评估结果。随着训练的进行，训练集和测试集的错误率均在不断下降，说明模型对于特征数据的学习是十分有效的。**最后，模型训练完毕后，即可通过训练好的模型对测试集数据进行预测。**预测代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 模型预测</span>
preds <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>xgb_test<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>preds<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[0.10455427 0.8036663  0.10455427 ... 0.10285233 0.89609396]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，预测结果为一个浮点数的数组，其数组大小和测试集的样本数量是一致的。数组中的值均在0~1的区间内，每个值对应一个样本。该值可以看作是模型对于该样本的预测概率，即模型认为该蘑菇是有毒蘑菇的概率。</p>
<h3 id="基于xgboost原生接口的分类" tabindex="-1"><a class="header-anchor" href="#基于xgboost原生接口的分类" aria-hidden="true">#</a> 基于XGBoost原生接口的分类</h3>
<p>以鸢尾花分类为例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris
<span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> plot_importance
<span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split

<span class="token comment"># read in the iris data</span>
iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>

X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data
y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target

X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1234565</span><span class="token punctuation">)</span>
dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
dtest <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_test<span class="token punctuation">,</span> y_test<span class="token punctuation">)</span>

params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'booster'</span><span class="token punctuation">:</span> <span class="token string">'gbtree'</span><span class="token punctuation">,</span>
    <span class="token string">'objective'</span><span class="token punctuation">:</span> <span class="token string">'multi:softmax'</span><span class="token punctuation">,</span>
    <span class="token string">'num_class'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string">'gamma'</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token string">'max_depth'</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>  <span class="token comment"># 每棵树的深度</span>
    <span class="token string">'lambda'</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string">'subsample'</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
    <span class="token string">'colsample_bytree'</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
    <span class="token string">'min_child_weight'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string">'silent'</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">'eta'</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
    <span class="token string">'seed'</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token string">'nthread'</span><span class="token punctuation">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
<span class="token comment"># 树的棵数</span>
num_boost_round <span class="token operator">=</span> <span class="token number">50</span>
<span class="token comment"># 训练过程中实时输出评估结果</span>
watchlist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>dtrain<span class="token punctuation">,</span> <span class="token string">'train'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>dtest<span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

model <span class="token operator">=</span> xgb<span class="token punctuation">.</span>train<span class="token punctuation">(</span>params<span class="token punctuation">,</span> dtrain<span class="token punctuation">,</span> num_boost_round<span class="token operator">=</span>num_boost_round<span class="token punctuation">,</span> evals<span class="token operator">=</span>watchlist<span class="token punctuation">)</span>

<span class="token comment"># 对测试集进行预测</span>
dtest <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>
py_test <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>dtest<span class="token punctuation">)</span>

<span class="token comment"># 计算准确率</span>
accuracy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>py_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Train Accuracy: %.2f%%"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> accuracy<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 另一种计算准确率的方法</span>
<span class="token comment">#from sklearn.metrics import accuracy_score</span>
<span class="token comment">#py01_test = [round(value) for value in py_test]  # 进行四舍五入的操作--变成0.1(算是设定阈值的符号函数)</span>
<span class="token comment">#train_accuracy = accuracy_score(y_test, py01_test)  # 使用sklearn进行比较正确率</span>
<span class="token comment">#print("Train Accuracy: %.2f%%" % (train_accuracy * 100.0))</span>

<span class="token comment"># 显示重要特征</span>
plot_importance<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 画出第i棵树</span>
xgb<span class="token punctuation">.</span>plot_tree<span class="token punctuation">(</span>model<span class="token punctuation">,</span> num_trees<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出预测正确率：<code v-pre>Train Accuracy: 96.67%</code></p>
<p>特征重要性：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/feature-importance-1.png" alt="feature-importance-1"></p>
<p>第1棵树的图：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/tree-pic-1.png" alt="tree-pic-1.png"></p>
<h3 id="基于xgboost原生接口的回归" tabindex="-1"><a class="header-anchor" href="#基于xgboost原生接口的回归" aria-hidden="true">#</a> 基于XGBoost原生接口的回归</h3>
<p>回归的例子没找到，我就造了一个逻辑回归的，但其实还是二分类，但实际应用中，二分类用的比较多，那就用这个例子吧。当然你可以自己造一个回归的例子。</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/data-pic-2.png" alt="data-pic-2"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding=utf-8 -*-</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> plot_importance
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split


<span class="token comment"># train data</span>
<span class="token keyword">def</span> <span class="token function">get_train_data</span><span class="token punctuation">(</span>data_size<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    data_label <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># class 1</span>
    x1 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    y1 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    data_train <span class="token operator">=</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    data_label<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>data_size<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># class 2</span>
    x2 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    y2 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    data_train <span class="token operator">=</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>data_train<span class="token punctuation">,</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    data_label<span class="token punctuation">[</span>data_size<span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>data_size<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">return</span> data_train<span class="token punctuation">,</span> data_label


<span class="token comment"># show data distribution</span>
<span class="token keyword">def</span> <span class="token function">plot_data</span><span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> X_test<span class="token punctuation">)</span><span class="token punctuation">:</span>
    index_y01_train <span class="token operator">=</span> <span class="token punctuation">(</span>y_train <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>X_train<span class="token punctuation">[</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train<span class="token punctuation">[</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g.'</span><span class="token punctuation">,</span>
             X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'b*'</span><span class="token punctuation">,</span>
             X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'rs'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'class1'</span><span class="token punctuation">,</span> <span class="token string">'class0'</span><span class="token punctuation">,</span> <span class="token string">'test_data'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">'Distribution'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'axis1'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'axis2'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># plot predict res</span>
<span class="token keyword">def</span> <span class="token function">plot_predict_data</span><span class="token punctuation">(</span>X_train_py1<span class="token punctuation">,</span> X_train_py0<span class="token punctuation">,</span> X_test_py1<span class="token punctuation">,</span> X_test_py0<span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>

    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>X_train_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g.'</span><span class="token punctuation">,</span>
             X_train_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'b*'</span><span class="token punctuation">,</span>
             X_test_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'ro'</span><span class="token punctuation">,</span>
             X_test_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'rs'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'class1'</span><span class="token punctuation">,</span> <span class="token string">'class0'</span><span class="token punctuation">,</span> <span class="token string">'predict1'</span><span class="token punctuation">,</span> <span class="token string">'predict0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">'Predict res'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'axis1'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'axis2'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># main function</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    data_size <span class="token operator">=</span> <span class="token number">100</span>
    X<span class="token punctuation">,</span> y <span class="token operator">=</span> get_train_data<span class="token punctuation">(</span>data_size<span class="token punctuation">)</span>  <span class="token comment"># train data generate</span>

    X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1234565</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>X_train<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>X_test<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y_train<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y_test<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    plot_data<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> X_test<span class="token punctuation">)</span>  <span class="token comment"># plot</span>

    dtrain <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>
    dtest <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_test<span class="token punctuation">,</span> y_test<span class="token punctuation">)</span>

    <span class="token comment"># data training</span>
    param <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'booster'</span><span class="token punctuation">:</span> <span class="token string">'gbtree'</span><span class="token punctuation">,</span>
             <span class="token string">'eta'</span><span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
             <span class="token string">'max_depth'</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
             <span class="token string">'objective'</span><span class="token punctuation">:</span> <span class="token string">'binary:logistic'</span><span class="token punctuation">}</span>
    num_boost_round <span class="token operator">=</span> <span class="token number">5</span>

    <span class="token comment"># 训练过程中实时输出评估结果</span>
    watchlist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>dtrain<span class="token punctuation">,</span> <span class="token string">'train'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>dtest<span class="token punctuation">,</span> <span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    model <span class="token operator">=</span> xgb<span class="token punctuation">.</span>train<span class="token punctuation">(</span>param<span class="token punctuation">,</span> dtrain<span class="token punctuation">,</span> num_boost_round<span class="token operator">=</span>num_boost_round<span class="token punctuation">,</span> evals<span class="token operator">=</span>watchlist<span class="token punctuation">)</span>

    <span class="token comment"># make prediction</span>
    dtest <span class="token operator">=</span> xgb<span class="token punctuation">.</span>DMatrix<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>
    py_test <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>dtest<span class="token punctuation">)</span>

    <span class="token comment"># 计算准确率</span>
    py_test<span class="token punctuation">[</span>py_test <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    py_test<span class="token punctuation">[</span>py_test <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    accuracy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>py_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Train Accuracy: %.2f%%"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> accuracy<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># plot prediction result</span>
    index_py01_train <span class="token operator">=</span> <span class="token punctuation">(</span>y_train <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
    X_train_py1 <span class="token operator">=</span> X_train<span class="token punctuation">[</span>index_py01_train<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
    X_train_py0 <span class="token operator">=</span> X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_py01_train<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>

    index_py01_test <span class="token operator">=</span> py_test <span class="token operator">>=</span> <span class="token number">0.5</span>
    X_test_py1 <span class="token operator">=</span> X_test<span class="token punctuation">[</span>index_py01_test<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
    X_test_py0 <span class="token operator">=</span> X_test<span class="token punctuation">[</span><span class="token operator">~</span>index_py01_test<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>

    plot_predict_data<span class="token punctuation">(</span>X_train_py1<span class="token punctuation">,</span> X_train_py0<span class="token punctuation">,</span> X_test_py1<span class="token punctuation">,</span> X_test_py0<span class="token punctuation">)</span>

    <span class="token comment"># 显示重要特征</span>
    plot_importance<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 画出第i棵树</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_boost_round<span class="token punctuation">)</span><span class="token punctuation">:</span>
        xgb<span class="token punctuation">.</span>plot_tree<span class="token punctuation">(</span>model<span class="token punctuation">,</span> num_trees<span class="token operator">=</span>i<span class="token punctuation">)</span>
        plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出预测正确率：<code v-pre>Train Accuracy: 90.00%</code></p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/result-2.png" alt="result-2"></p>
<p>特征重要性：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/feature-importance-2.png" alt="feature-importance-2"></p>
<p>第一棵树的图：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/tree-pic-2.png" alt="tree-pic-2"></p>
<h3 id="基于scikit-learn接口的分类" tabindex="-1"><a class="header-anchor" href="#基于scikit-learn接口的分类" aria-hidden="true">#</a> 基于Scikit-learn接口的分类</h3>
<p>还是以鸢尾花分类为例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 基于XGBoost原生接口的分类</span>
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>datasets <span class="token keyword">import</span> load_iris
<span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> plot_importance
<span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> pyplot <span class="token keyword">as</span> plt
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split

<span class="token comment"># read in the iris data</span>
iris <span class="token operator">=</span> load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>

X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data
y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target

X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1234565</span><span class="token punctuation">)</span>

<span class="token comment"># 训练模型</span>
model <span class="token operator">=</span> xgb<span class="token punctuation">.</span>XGBClassifier<span class="token punctuation">(</span>max_depth<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> learning_rate<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span> n_estimators<span class="token operator">=</span><span class="token number">160</span><span class="token punctuation">,</span> silent<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> objective<span class="token operator">=</span><span class="token string">'multi:softmax'</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>

<span class="token comment"># 对测试集进行预测</span>
py_test <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>

<span class="token comment"># 计算准确率</span>
accuracy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>py_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Train Accuracy: %.2f%%"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> accuracy<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 显示重要特征</span>
plot_importance<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 画出第i棵树</span>
xgb<span class="token punctuation">.</span>plot_tree<span class="token punctuation">(</span>model<span class="token punctuation">,</span> num_trees<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出预测正确率：<code v-pre>Train Accuracy: 96.67%</code></p>
<p>特征重要性：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/feature-importance-3.png" alt="feature-importance-3"></p>
<p>第1棵树的图：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/tree-pic-3.png" alt="tree-pic-3"></p>
<h3 id="基于scikit-learn接口的回归" tabindex="-1"><a class="header-anchor" href="#基于scikit-learn接口的回归" aria-hidden="true">#</a> 基于Scikit-learn接口的回归</h3>
<p>回归的例子没找到，我就造了一个逻辑回归的，但其实还是二分类，但实际应用中，二分类用的比较多，那就用这个例子吧。当然你可以自己造一个回归的例子。</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/data-pic-4.png" alt="data-pic-4"></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding=utf-8 -*-</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> xgboost <span class="token keyword">as</span> xgb
<span class="token keyword">from</span> xgboost <span class="token keyword">import</span> plot_importance
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split


<span class="token comment"># train data</span>
<span class="token keyword">def</span> <span class="token function">get_train_data</span><span class="token punctuation">(</span>data_size<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    data_label <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># class 1</span>
    x1 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    y1 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    data_train <span class="token operator">=</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    data_label<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>data_size<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># class 2</span>
    x2 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    y2 <span class="token operator">=</span> np<span class="token punctuation">.</span>reshape<span class="token punctuation">(</span>np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> data_size<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data_size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    data_train <span class="token operator">=</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>data_train<span class="token punctuation">,</span> np<span class="token punctuation">.</span>concatenate<span class="token punctuation">(</span><span class="token punctuation">(</span>x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    data_label<span class="token punctuation">[</span>data_size<span class="token punctuation">:</span><span class="token number">2</span><span class="token operator">*</span>data_size<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">return</span> data_train<span class="token punctuation">,</span> data_label


<span class="token comment"># show data distribution</span>
<span class="token keyword">def</span> <span class="token function">plot_data</span><span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> X_test<span class="token punctuation">)</span><span class="token punctuation">:</span>
    index_y01_train <span class="token operator">=</span> <span class="token punctuation">(</span>y_train <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>X_train<span class="token punctuation">[</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train<span class="token punctuation">[</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g.'</span><span class="token punctuation">,</span>
             X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_y01_train<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'b*'</span><span class="token punctuation">,</span>
             X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'rs'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'class1'</span><span class="token punctuation">,</span> <span class="token string">'class0'</span><span class="token punctuation">,</span> <span class="token string">'test_data'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">'Distribution'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'axis1'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'axis2'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># plot predict res</span>
<span class="token keyword">def</span> <span class="token function">plot_predict_data</span><span class="token punctuation">(</span>X_train_py1<span class="token punctuation">,</span> X_train_py0<span class="token punctuation">,</span> X_test_py1<span class="token punctuation">,</span> X_test_py0<span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>

    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>X_train_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g.'</span><span class="token punctuation">,</span>
             X_train_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_train_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'b*'</span><span class="token punctuation">,</span>
             X_test_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test_py1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'ro'</span><span class="token punctuation">,</span>
             X_test_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> X_test_py0<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'rs'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'class1'</span><span class="token punctuation">,</span> <span class="token string">'class0'</span><span class="token punctuation">,</span> <span class="token string">'predict1'</span><span class="token punctuation">,</span> <span class="token string">'predict0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">'Predict res'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">'axis1'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">'axis2'</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># main function</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    data_size <span class="token operator">=</span> <span class="token number">100</span>
    X<span class="token punctuation">,</span> y <span class="token operator">=</span> get_train_data<span class="token punctuation">(</span>data_size<span class="token punctuation">)</span>  <span class="token comment"># train data generate</span>

    X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size<span class="token operator">=</span><span class="token number">0.2</span><span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">1234565</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>X_train<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>X_test<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y_train<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y_test<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    plot_data<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> X_test<span class="token punctuation">)</span>  <span class="token comment"># plot</span>

    model <span class="token operator">=</span> xgb<span class="token punctuation">.</span>XGBRegressor<span class="token punctuation">(</span>max_depth<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> learning_rate<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span> n_estimators<span class="token operator">=</span><span class="token number">160</span><span class="token punctuation">,</span> silent<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> objective<span class="token operator">=</span><span class="token string">'binary:logistic'</span><span class="token punctuation">)</span>
    model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>

    <span class="token comment"># 对测试集进行预测</span>
    py_test <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>

    <span class="token comment"># 计算准确率</span>
    py_test<span class="token punctuation">[</span>py_test <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    py_test<span class="token punctuation">[</span>py_test <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    accuracy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>py_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Train Accuracy: %.2f%%"</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> accuracy<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># plot prediction result</span>
    index_py01_train <span class="token operator">=</span> <span class="token punctuation">(</span>y_train <span class="token operator">>=</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
    X_train_py1 <span class="token operator">=</span> X_train<span class="token punctuation">[</span>index_py01_train<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
    X_train_py0 <span class="token operator">=</span> X_train<span class="token punctuation">[</span><span class="token operator">~</span>index_py01_train<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>

    index_py01_test <span class="token operator">=</span> py_test <span class="token operator">>=</span> <span class="token number">0.5</span>
    X_test_py1 <span class="token operator">=</span> X_test<span class="token punctuation">[</span>index_py01_test<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>
    X_test_py0 <span class="token operator">=</span> X_test<span class="token punctuation">[</span><span class="token operator">~</span>index_py01_test<span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">]</span>

    plot_predict_data<span class="token punctuation">(</span>X_train_py1<span class="token punctuation">,</span> X_train_py0<span class="token punctuation">,</span> X_test_py1<span class="token punctuation">,</span> X_test_py0<span class="token punctuation">)</span>

    <span class="token comment"># 显示重要特征</span>
    plot_importance<span class="token punctuation">(</span>model<span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 画出第i棵树</span>
    xgb<span class="token punctuation">.</span>plot_tree<span class="token punctuation">(</span>model<span class="token punctuation">,</span> num_trees<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出预测正确率：<code v-pre>Train Accuracy: 80.00%</code></p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/result-4.png" alt="result-4"></p>
<p>特征重要性：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/feature-importance-4.png" alt="feature-importance-4"></p>
<p>第一棵树的图：</p>
<p><img src="@source/docs/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/pic/tree-pic-4.png" alt="tree-pic-4"></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://mp.weixin.qq.com/s/_NCKAon-megJbxzV6w3aYg" target="_blank" rel="noopener noreferrer">数据竞赛利器XGBoost常见面试题集锦<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzI1MzY0MzE4Mg==&amp;mid=2247485159&amp;idx=1&amp;sn=d429aac8370ca5127e1e786995d4e8ec&amp;chksm=e9d01626dea79f30043ab80652c4a859760c1ebc0d602e58e13490bf525ad7608a9610495b3d&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">珍藏版 | 20道XGBoost面试题<ExternalLinkIcon/></a></li>
</ul>
<p>“XGBoost常见面试题”参考了此博客。</p>
<ul>
<li><a href="https://www.zhihu.com/question/41354392/answer/124274741" target="_blank" rel="noopener noreferrer">机器学习算法中 GBDT 和 XGBOOST 的区别有哪些？<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了xgboost的单机多线程和分布式的代码架构。</p>
<ul>
<li>
<p><a href="https://mp.weixin.qq.com/s/uvUN4JiqSb-bS4HAVCDTIQ" target="_blank" rel="noopener noreferrer">集成模型Xgboost！机器学习最热研究方向入门，附学习路线图<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/31182879" target="_blank" rel="noopener noreferrer">史上最详细的XGBoost实战<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/PIPIXIU/article/details/80463565" target="_blank" rel="noopener noreferrer">xgboost的原生版本与sklearn 接口版本对比<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.jianshu.com/p/926d1417b72e" target="_blank" rel="noopener noreferrer">XGBOOST——原生参数解释<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.zhihu.com/question/68621766" target="_blank" rel="noopener noreferrer">xgboost中的min_child_weight是什么意思?<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://stats.stackexchange.com/questions/317073/explanation-of-min-child-weight-in-xgboost-algorithm" target="_blank" rel="noopener noreferrer">Explanation of min_child_weight in xgboost algorithm<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.jb51.net/article/178952.htm" target="_blank" rel="noopener noreferrer">python机器学习库xgboost的使用<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/anshuai_aw1/article/details/82988494" target="_blank" rel="noopener noreferrer">Xgboost如何画出树？<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/32943164" target="_blank" rel="noopener noreferrer">如何画XGBoost里面的决策树<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/w1573007/article/details/80117725?depth_1-utm_source=distribute.pc_relevant.none-task&amp;utm_source=distribute.pc_relevant.none-task" target="_blank" rel="noopener noreferrer">Mac安装graphviz环境变量配置<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/han_xiaoyang/article/details/52663170" target="_blank" rel="noopener noreferrer">Python中Gradient Boosting Machine(GBM）调参方法详解<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/han_xiaoyang/article/details/52665396" target="_blank" rel="noopener noreferrer">XGBoost参数调优完全指南（附Python代码）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/m_buddy/article/details/79341058" target="_blank" rel="noopener noreferrer">XGBoost数据训练小例子<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>“XGBoost代码实践”参考上述资料。</p>
</div></template>


