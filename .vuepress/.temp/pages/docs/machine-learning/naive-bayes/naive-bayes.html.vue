<template><div><h1 id="朴素贝叶斯" tabindex="-1"><a class="header-anchor" href="#朴素贝叶斯" aria-hidden="true">#</a> 朴素贝叶斯</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/machine-learning.html">返回上层目录</RouterLink></li>
<li><a href="#%E8%AE%A4%E8%AF%86%E6%9C%B4%E7%B4%A0%E8%B4%9D%E5%8F%B6%E6%96%AF">认识朴素贝叶斯</a></li>
<li><a href="#%E6%9C%B4%E7%B4%A0%E8%B4%9D%E5%8F%B6%E6%96%AF%E6%95%B0%E5%AD%A6%E5%8E%9F%E7%90%86">朴素贝叶斯数学原理</a></li>
<li><a href="#%E6%9C%B4%E7%B4%A0%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%B0%E8%AE%A1">朴素贝叶斯的参数估计</a></li>
<li><a href="#%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E5%B9%B3%E6%BB%91">拉普拉斯平滑</a></li>
<li><a href="#%E6%9C%B4%E7%B4%A0%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9">朴素贝叶斯的优缺点</a></li>
<li><a href="#%E9%A1%B9%E7%9B%AE%E5%AE%9E%E8%B7%B5">项目实践</a>
<ul>
<li><a href="#%E9%B8%A2%E5%B0%BE%E8%8A%B1%E5%88%86%E7%B1%BB">鸢尾花分类</a></li>
</ul>
</li>
</ul>
<p>朴素贝叶斯算法仍然是流行的十大挖掘算法之一，该算法是有监督的学习算法，解决的是<strong>分类</strong>问题，如客户是否流失、是否值得投资、信用等级评定等多分类问题。**该算法的优点在于简单易懂、学习效率高、在某些领域的分类问题中能够与决策树、神经网络相媲美。**但由于该算法以自变量之间的独立（条件特征独立）性和连续变量的正态性假设为前提，就会导致算法精度在某种程度上受影响。接下来我们就详细介绍该算法的知识点及实际应用。</p>
<p>朴素贝叶斯分类器是一种基于贝叶斯定理的弱分类器，所有朴素贝叶斯分类器都假定样本每个特征与其他特征都不相关。举个例子，如果一种水果其具有红，圆，直径大概3英寸等特征，该水果可以被判定为是苹果。尽管这些特征相互依赖或者有些特征由其他特征决定，然而朴素贝叶斯分类器认为这些属性在判定该水果是否为苹果的概率分布上独立的。</p>
<p>朴素贝叶斯分类器很容易建立，特别适合用于大型数据集，众所周知，这是一种胜过许多复杂算法的高效分类方法。</p>
<p>尽管实际上独立假设常常是不准确的，但朴素贝叶斯分类器的若干特性让其在实践中能够取得令人惊奇的效果。特别地，各类条件特征之间的解耦意味着每个特征的分布都可以独立地被当做一维分布来估计。这样减轻了由于维度灾难带来的阻碍,当样本的特征个数增加时就不需要使样本规模呈指数增长。然而朴素贝叶斯在大多数情况下不能对类概率做出非常准确的估计，但在许多应用中这一点并不要求。</p>
<p>朴素贝叶斯分类器通过假设每一个特征的出现都是独立事件，简化了计算复杂度，也避免了样本稀疏的问题。虽然这一假设常常是不准确的，但朴素贝叶斯在实际工程中出乎意料地好用。因为很多应用并不在乎精确的类概率，只关心最后的分类结果。  然而，当特征之间相关性比较强，而我们又要求比较精确的类概率的时候，朴素贝叶斯就不够用了，即如果假设特征之间存在着概率依存关系，模型就变成了<strong>贝叶斯网络</strong>。贝叶斯网络是一种基于贝叶斯理论以DAG形式描述全局概率分布的一种统计方法，不属于分类器的一种，主要用于贝叶斯推断。</p>
<h1 id="认识朴素贝叶斯" tabindex="-1"><a class="header-anchor" href="#认识朴素贝叶斯" aria-hidden="true">#</a> 认识朴素贝叶斯</h1>
<p>朴素贝叶斯（Naive Bayes）算法是机器学习中常见的基本算法之一，它主要被用来做分类任务。其理论基础是基于<strong>贝叶斯定理</strong>和<strong>条件独立性假设</strong>的一种分类方法。对于给定的训练数据集：
$$
T={(x_1,y_1),(x_2,y_2),...,(x_n,y_n)}
$$
首先基于特征条件独立性假设学习联合概率分布$P(X,Y)$，然后基于此模型，对于任意的输入$x$，利用贝叶斯定理求出后验概率最大的$P(Y|X=x)$对应的$y$的取值。</p>
<p>基于以上的解释，我们知道：（1）该算法的理论核心是贝叶斯定理；（2）它是基于条件独立性假设这个强假设基础之上的，这也是它为什么被称为“朴素”的主要原因。</p>
<h1 id="朴素贝叶斯数学原理" tabindex="-1"><a class="header-anchor" href="#朴素贝叶斯数学原理" aria-hidden="true">#</a> 朴素贝叶斯数学原理</h1>
<p>根据贝叶斯定理，对一个分类问题，给定样本特征$x$，样本属于类别$y$的概率是：
$$
P(Y|X)=\frac{P(X|Y)P(Y)}{P(X)}
$$
$P(Y)$是先验概率，$P(Y|X)$是后验概率，$P(X|Y)$是似然函数。$X$在这里是代表“特征”的集合，$Y$是“类别&quot;。</p>
<p>公式中的$X$是特征向量的维度，假设为$n$。因此，有：
$$
P(Y|X)=\frac{P(X^{(1)},X^{(2)},...,X^{(n)}|Y)P(Y)}{P(X)}
$$
我们以挑西瓜为例子，$Y$有两种取值“<code v-pre>好瓜</code>”和&quot;<code v-pre>不是好瓜</code>&quot;。我们先来规定一下符号， <strong>$Y$=好瓜</strong>表示是好瓜，相反**$\bar{Y}$=不是好瓜**。$X^{(i)}$表示二元离散特征，例如$X^{(1)}$=青绿色，$X^{(2)}$=瓜蒂坚挺，$X^{(3)}$=敲击声清脆。于是贝叶斯公式可以写成了下面这个样子：
$$
P(Y|X^{(1)},X^{(2)},X^{(3)})=\frac{P(X^{(1)},X^{(2)},X^{(3)}|Y)P(Y)}{P(X^{(1)},X^{(2)},X^{(3)})}
$$
再写出西瓜“不是好瓜”的概率：
$$
P(\bar{Y}|X^{(1)},X^{(2)},X^{(3)})=\frac{P(X^{(1)},X^{(2)},X^{(3)}|\bar{Y})P(\bar{Y})}{P(X^{(1)},X^{(2)},X^{(3)})}
$$
由于条件概率分布有指数及数量的参数，因此，求解该问题是一个NP难问题，实现中很难解决，所以直接求解不可行。因此，朴素贝叶斯法对条件概率分布做了条件独立性的假设，于是有：
$$
P(X^{(1)}=x^{(1)},X^{(2)}=x^{(2)},...,X^{(n)}=x^{(n)}|Y=c_k)=\prod_{i=0}^n P(X^{(i)}=x^{(i)}|Y=c_k)
$$
将上式带入本小节第二个式子中，得：
$$
P(Y=c_k|X)=\frac{P(Y=c_k)\ \prod_{i=0}^n P(X^{(i)}=x^{(i)}|Y=c_k)}{P(X)}
$$
这是朴素贝叶斯法分类的基本公式。因此，朴素贝叶斯分类器可以表示为：
$$
y=f(x)=\text{arg}\ \mathop{\text{max}}<em>{c_k}\frac{P(Y=c_k)\ \prod</em>{i=0}^n P(X^{(i)}=x^{(i)}|Y=c_k)}{P(X)}
$$
由于所有的$P(x)$的分布是一样的，只是起到了归一化的作用，所以：
$$
y=f(x)=\text{arg}\ \mathop{\text{max}}<em>{c_k}P(Y=c_k)\ \prod</em>{i=0}^n P(X^{(i)}=x^{(i)}|Y=c_k)
$$
由上述的推导可知，朴素贝叶斯分类是将实例分到<strong>后验概率最大</strong>的类中。这等价于期望风险最小化。这就是朴素贝叶斯法所采用的原理。</p>
<h1 id="朴素贝叶斯的参数估计" tabindex="-1"><a class="header-anchor" href="#朴素贝叶斯的参数估计" aria-hidden="true">#</a> 朴素贝叶斯的参数估计</h1>
<p>由上式可知，朴素贝叶斯法的<strong>学习过程主要是估计$P(y=c_k)$以及$P(x^{(j)}|y=c_k)$</strong>。对于类别概率估计可以使用如下的公式进行估计：
$$
P(Y=c_k)=\frac{\sum_{i=1}^N\ I(y_i=c_k)}{N},\ k=1,2,...,K
$$
但是对于条件概率$P(x^{(j)}|y=c_k)$的概率分布的估计，我们需要根据特征向量的每一维$X^{(i)}$分两种情况进行讨论：</p>
<ul>
<li>若$X^{(i)}$为离散型变量；</li>
<li>若$X^{(i)}$为连续型变量</li>
</ul>
<p><strong>特征值为离散型变量时的参数估计</strong></p>
<p>当特征值为离散型变量时，这时候参数估计非常简单，我们只需要计算出每个特征值在相应的类中出现的概率就可以了。直接使用如下的公式进行估计：
$$
P(X^{(j)}=x^{(j)}|Y=c_k)=\frac{\sum_{i=1}^N\ I(X^{(j)}=x_i^{(j)},Y=c_k)}{\sum_{i=1}^{N}\ I(Y_i=c_k)}
$$
<strong>特征值为连续型变量时的参数估计</strong></p>
<p>当特征值为离散型变量的时候，我们使用上式对条件概率分布$P(X^{(j)}=x^{(j)}|Y=c_k)$进行估计。但是如果当特征值$x^{(j)}$为连续型变量，此时这种估计就会失效，此时我们就需要一种新的方式进行估计。常用的方法就是假设特征$x^{(j)}$在条件$Y=c_k$时服从某一分布，如常见的高斯分布、多项式分布以及伯努利分布等。</p>
<p>以高斯分布为例，假设条件概率分布$P(X^{(j)}=x^{(j)}|Y=c_k)$服从如下分布：
$$
P(X^{(j)}=x^{(j)}|Y=c_k)=\frac{1}{\sqrt{2\pi}\sigma}\text{exp}\left(-\frac{(x_i-u_y)}{2\sigma^2}\right)
$$
其中，参数$u_y$和$\sigma_y$分别表示高斯分布的均值和方差，它们可以使用最大似然估计的方法进行计算得到。</p>
<h1 id="拉普拉斯平滑" tabindex="-1"><a class="header-anchor" href="#拉普拉斯平滑" aria-hidden="true">#</a> 拉普拉斯平滑</h1>
<p>到这里好像方法已经介绍完了，但是有一个小问题需要注意：在上述的公式中，如果从样本中算出的概率值为0该怎么办呢？下面介绍一种简单方法，给学习步骤中的两个概率计算公式，分子和分母都分别加上一个常数，就可以避免这个问题。更新过后的公式如下：</p>
<p>$$
P(Y=c_k)=\frac{\sum_{i=-1}^N\ I(y_i=c_k)+\lambda}{N+K\lambda},\ k=1,2,...,K
$$
K是类的个数，
$$
P(X^{(j)}=x^{(j)}|Y=c_k)=\frac{\sum_{i=1}^N\ I(X^{(j)}=x_i^{(j)},Y=c_k)+\lambda}{\sum_{i=1}^{N}\ I(Y_i=c_k)+L_j\lambda},\ k=1,2,...,K
$$
$L_j$是第$j$维特征的最大取值个数。</p>
<p>特别的，当上述估计中$\lambda=1$时，此时称为<strong>拉普拉斯平滑（Laplace smoothing）</strong>。</p>
<h1 id="朴素贝叶斯的优缺点" tabindex="-1"><a class="header-anchor" href="#朴素贝叶斯的优缺点" aria-hidden="true">#</a> 朴素贝叶斯的优缺点</h1>
<p>优点：</p>
<ul>
<li>既简单又快速，预测表现良好；</li>
<li>如果变量独立这个条件成立，相比Logistic回归等其他分类方法，朴素贝叶斯分类器性能更优，且只需少量训练数据；</li>
<li>相较于数值变量，朴素贝叶斯分类器在多个分类变量的情况下表现更好。若是数值变量，需要正态分布假设。</li>
</ul>
<p>缺点:</p>
<ul>
<li>如果分类变量的类别（测试数据集）没有在训练数据集总被观察到，那这个模型会分配一个0（零）概率给它，同时也会无法进行预测。这通常被称为“零频率”。为了解决这个问题，我们可以使用平滑技术，拉普拉斯估计是其中最基础的技术。</li>
<li>朴素贝叶斯也被称为bad estimator，所以它的概率输出predict_prob不应被太认真对待。</li>
<li>朴素贝叶斯的另一个限制是独立预测的假设。在现实生活中，这几乎是不可能的，各变量间或多或少都会存在相互影响。</li>
</ul>
<h1 id="项目实践" tabindex="-1"><a class="header-anchor" href="#项目实践" aria-hidden="true">#</a> 项目实践</h1>
<p>scikit-learn里有3种朴素贝叶斯的模型：</p>
<p><strong>高斯模型</strong>：适用于多个类型变量，假设特征符合高斯分布。</p>
<p><strong>多项式模型</strong>：用于离散计数。如一个句子中某个词语重复出现，我们视它们每个都是独立的，所以统计多次，概率指数上出现了次方。</p>
<p><strong>伯努利模型</strong>：如果特征向量是二进制（即0和1），那这个模型是非常有用的。不同于多项式，伯努利把出现多次的词语视为只出现一次，更加简单方便。</p>
<p>你可以根据特定数据集选取上述3个模型中的合适模型。</p>
<h2 id="鸢尾花分类" tabindex="-1"><a class="header-anchor" href="#鸢尾花分类" aria-hidden="true">#</a> 鸢尾花分类</h2>
<p>本节实战中，我们仍然使用iris数据集，详细步骤如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>naive_bayes <span class="token keyword">import</span> GaussianNB
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>model_selection <span class="token keyword">import</span> train_test_split
<span class="token keyword">from</span> sklearn <span class="token keyword">import</span> datasets

<span class="token comment"># 加载数据集</span>
iris <span class="token operator">=</span> datasets<span class="token punctuation">.</span>load_iris<span class="token punctuation">(</span><span class="token punctuation">)</span>

X <span class="token operator">=</span> iris<span class="token punctuation">.</span>data
y <span class="token operator">=</span> iris<span class="token punctuation">.</span>target
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Sample num:'</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 随机分配训练集和测试集，比例大小为7:3</span>
X_train<span class="token punctuation">,</span> X_test<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> y_test <span class="token operator">=</span> train_test_split<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> test_size <span class="token operator">=</span> <span class="token number">0.3</span><span class="token punctuation">,</span> random_state <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">)</span>


<span class="token comment"># 初始化模型</span>
clf <span class="token operator">=</span> GaussianNB<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 训练模型</span>
clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X_train<span class="token punctuation">,</span> y_train<span class="token punctuation">)</span>

<span class="token comment"># 在测试集上预测</span>
ans <span class="token operator">=</span> clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_test<span class="token punctuation">)</span>

<span class="token comment"># 计算准确率</span>
cnt <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">1e-1</span><span class="token punctuation">:</span>
        cnt <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">,</span> y_test<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Accuracy:"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>cnt <span class="token operator">*</span> <span class="token number">100.0</span> <span class="token operator">/</span> <span class="token builtin">len</span><span class="token punctuation">(</span>y_test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"%"</span><span class="token punctuation">)</span>
<span class="token comment"># Accuracy:, 97.77777777777777%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li><a href="https://www.zhihu.com/question/265995680/answer/303148257" target="_blank" rel="noopener noreferrer">逻辑回归与朴素贝叶斯有什么区别？<ExternalLinkIcon/></a></li>
</ul>
<p>“认识朴素贝叶斯”一节就参考的这篇知乎回答。</p>
<ul>
<li><a href="https://www.zhihu.com/question/19960417/answer/263133017" target="_blank" rel="noopener noreferrer">请用简单易懂的语言描述朴素贝叶斯分类器？<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;朴素贝叶斯的优缺点&quot;和“用scikit-learn进行朴素贝叶斯分类”参考此知乎回答。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/26262151" target="_blank" rel="noopener noreferrer">带你理解朴素贝叶斯分类算法<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;理解朴素贝叶斯分类&quot;参考此专栏文章。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/26329951" target="_blank" rel="noopener noreferrer">理解朴素贝叶斯分类的拉普拉斯平滑<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;拉普拉斯平滑&quot;参考此专栏文章。</p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/26262151" target="_blank" rel="noopener noreferrer">带你理解朴素贝叶斯分类算法<ExternalLinkIcon/></a></p>
<p>举例说明了朴素贝叶斯的求解过程。</p>
</div></template>


