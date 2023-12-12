# 最大熵模型

* [返回上层目录](../linear-model.md)
* [直观理解最大熵](#直观理解最大熵)
* [最大熵模型的数学推导](#最大熵模型的数学推导)
  * [最大熵原理](#最大熵原理)
  * [最大熵模型的定义](#最大熵模型的定义)
  * [最大熵模型的学习](#最大熵模型的学习)
* [满足最大熵原理的连续分布推导](#满足最大熵原理的连续分布推导)
  * [已知分布区间推导出均匀分布](#已知分布区间推导出均匀分布)
  * [已知均值推导出指数分布](#已知均值推导出指数分布)
  * [已知均值和标准差推导出正态分布](#已知均值和标准差推导出正态分布)
  * [矩约束下的满足最大熵原理的分布是指数族分布](#矩约束下的满足最大熵原理的分布是指数族分布)
* [如何理解最大熵模型里面的特征](#如何理解最大熵模型里面的特征)
* [最大熵模型的极大似然估计](#最大熵模型的极大似然估计)
* [最大熵模型学习算法：IIS](#最大熵模型学习算法：IIS)
* [最大熵模型与svm的关系](#最大熵模型与svm的关系)
* [最大熵模型的进一步探索](#最大熵模型的进一步探索)
* [参考资料](#参考资料)

# 直观理解最大熵

最大熵模型的**原则**：

* 承认已知事物（知识）
* 对未知事物不做任何假设，没有任何偏见



最大熵原理其实讲述了我们小学学过的一句话：

> 知之为知之，不知为不知，是知也。

也就是说，在没有更多信息时，不擅自做假设。也即在满足已知约束的基础上，保留尽可能多的不确定性。也就是说，既然没有掌握模型的任何信息，那么就让模型的熵最大，否则意味着你通过某种途径掌握了模型的先验知识，然而你并没有，那就不要乱做假设。为什么熵要最大？因为宇宙万物本来就是趋于无序的啊。所以满足已知条件的熵最大模型就是最符合实际的模型了。可以从物理学的角度来理解最大熵模型：根据热力学第二定理，如果没有外力干扰，系统的熵值是趋于不断增加的。由此，在没有其它额外参考信息的情况下，选择熵值最大的模型是最可靠的，因为没有外在动力时，宇宙本来就是趋于无序的啊。

可从两个方面来理解:

1. 对于可以确定的部分（已知的部分），要尽可能地确定（贴近）
2. 对于未知的部分，不作任何假设，保留其最大的不确定性（随机性）

满足这两个条件，就是我们的最大熵估计。



也就是还是一句俗话：

>不要把鸡蛋放在同一个篮子里。

如果告诉你不知道各个篮子会出问题的可能性，面对未知，追求稳妥的情况下，大家都会选择把鸡蛋平均放到各个篮子里。



现在总结一下：

最大熵原理是1957年由E.T.Jaynes提出的，其主要思想是，在只掌握关于未知分布的部分知识时，应该选取符合这些知识但熵值最大的概率分布。其实质就是，在已知部分知识的前提下，关于未知分布最合理的推断就是符合已知知识最不确定或最随机的推断，这是我们可以作出的唯一不偏不倚的选择，任何其它的选择都意味着我们增加了其它的约束和假设，这些约束和假设根据我们掌握的信息无法作出。

也就是说，在保证拟合已有数据的前提下，避免过拟合到任何一种数据分布。

# 最大熵模型的数学推导

最大熵模型由最大熵原理推导实现。这里首先叙述一般的最大熵原理，然后讲解最大熵模型的推导，最后给出最大熵魔性学习的形式。

## 最大熵原理

最大熵原理是概率模型学习的一个准则。最大熵原理认为，学习概率模型时，在所有可能的概率模型（分布）中，熵最大的模型是最好的模型。通常用约束条件来确定概率模型的集合，所以，最大熵原理也可以表述为在满足约束条件的模型集合中选取熵最大的模型。

假设离散随机变量X的概率分布是P(X)，则其熵是
$$
H(P)=-\sum_xP(x)\text{log}P(x)
$$
熵满足下列不等式：
$$
0\leqslant H(P)\leqslant \text{log}|X|
$$
式中，|X|是X的取值个数，当且仅当X的分布是均匀分布时右边的等号成立。这就是说，当X服从均匀分布时，熵最大。

直观地，最大熵原理认为要选择的概率模型首先必须满足已有的事实，即约束条件。在没有更多信息的情况下，那些不确定的部分都是“等可能的”。最大熵原理通过熵的最大化来表示等可能性。“等可能”不容易操作，而熵则是一个可优化的数值指标。

## 最大熵模型的定义

最大熵原理是统计学习的一般原理，将它应用到分类得到最大熵模型。假设分类模型是一个条件概率分布P(Y|X)，X ∈ x ⊆ R^n表示输入，Y ∈ y表示输出，x和y分别是输入和输出的集合。这个模型表示的是对于给定的输入X，以条件概率P(Y|X)输出Y。

给定一个训练数据集
$$
T={(x_1,y_1),(x_2,y_2),...(x_N,y_N)}
$$
学习的目的是用最大熵原理选择最好的分类模型。

首先考虑模型应该满足的条件，给定训练数据集，可以确定联合分布P(X,Y)的经验分布和边缘分布的经验分布，分别以$\tilde P(X,Y)$和$\tilde P(X)$表示。这里，
$$
\begin{aligned}
&\tilde P(X=x,Y=y)=\frac{v(X=x,Y=y)}{N}\\
&\tilde P(X=x)=\frac{v(X=x)}{N}\\
\end{aligned}
$$
其中，v(X=x,Y=y)表示训练数据中样本(x,y)出现的频数，v(X=x)表示训练数据中输入x出现的频数，N表示训练样本容童。

用特征函数（feature function）f(x,y)描述输入x和输出y之间的某一个事实。其定义是
$$
f(x,y)=
\left\{\begin{matrix}
&1,&\quad \text{x与y满足某一事实}\\ 
&0,&\quad \text{否则}\\ 
\end{matrix}\right.
$$
它是一个二值函数（一般地，特征函数可以是任意实值函数。），当x和y满足这个事实时取值为1，否则取值为0。

特征函数f(x,y)关于经验分布$\tilde P(X,Y)$的期望值，用$E_{\tilde P}(f)$表示。
$$
E_{\tilde P}(f)=\sum_{x,y}\tilde P(x,y)f(x,y)
$$
特征函数f(x,y)关于模型P(Y|X)与经验分布$\tilde P(X)$的期望值，用$E_{P}(f)$表示。
$$
E_P(f)=\sum_{x,y}\tilde P(x)P(y|x)f(x,y)
$$
如果**模型能够获取训练数据中的信息**，那么就可以假设这两个期望值相等，即
$$
E_p(f)=E_{\tilde P}(f)
$$
或
$$
\sum_{x,y}\tilde P(x)P(y|x)f(x,y)=\sum_{x,y}\tilde P(x,y)f(x,y)
$$
我们将上式作为模型学习的约束条件。假如有n个特征函数fi(x,y), i=1,2,...,n，那么就有n个约束条件。

**最大熵模型**

假设满足所有约束条件的模型集合为
$$
\mathbb{C}\equiv\{P\in\mathbb{P}|E_{P}(f_i)=E_{\tilde P}(f_i), i=1,2,...,n\}
$$
定义在条件概率分布P(Y|X)上的条件熵为
$$
H(P)=-\sum_{x,y}\tilde P(x)P(y|x)logP(y|x)
$$
则模型集合C中条件熵H(P)最大的模型成为最大熵模型，式中的对数为自然对数。

[**最大熵模型，为什么最大的是条件熵？**](https://www.zhihu.com/question/35295907)

1. 最大熵属于discriminant model，所有的discriminant model需要求解的问题都是P(Y|X)，此为一；

2. 最大熵基于经验风险最小化，假设样本的联合分布反映了实际分布，这样经验分布P(X)与P(Y|X)的乘积即等于P(X,Y)，此为二；

3. 最大熵模型的定义中，对于条件概率分布P(Y|X)，条件熵H(Y|X)最大，意思是在已知样本X的情况下，对不确定事件Y|X，让所有的事件都是“等可能”，也是熵最大。既然H(Y|X)最大，那么互信息I(X;Y)最小，表示X,Y之间相互透露的信息量最少，也就是让X,Y之间额外的假设最少。此为三；

   ![venn-diagram-of-entropy](pic/venn-diagram-of-entropy.png)

综合上述三点，最大熵采用最大化条件熵为优化目标，满足从样本中抽取出来的特征的经验期望与期望一致的约束，也就很自然了。

## 最大熵模型的学习

最大熵模型的学习过程就是求解最大熵模型的过程.最大熵模型的学习可以形式化为约束最优化问题。

对于给定的训练数据集T=\{ (x1, y1), (x2, y2), ... , (xN, yN) \}以及特征函数fi(x,y), i=1,2,...,n，最大熵模型的学习等价于约束最优化问题：
$$
\begin{aligned}
\mathop{\text{max}}_{P\in C}\quad &H(P)=-\sum_{x,y}\tilde P(x)P(y|x)\text{log}\ P(y|x)\\
\text{s.t.}\quad &E_P(f_i)=E_{\tilde P}(f_i),\ i=1,2,3...,n\\
&\sum_yP(y|x)=1\\
\end{aligned}
$$
按照最优化问题的习惯，将求最大值问题改写为等价的求最小值问题：
$$
\begin{aligned}
\mathop{\text{min}}_{P\in C}\quad &-H(P)=\sum_{x,y}\tilde P(x)P(y|x)\text{log}\ P(y|x)\\
\text{s.t.}\quad &E_P(f_i)-E_{\tilde P}(f_i)=0,\ i=1,2,3...,n\\
&\sum_yP(y|x)=1\\
\end{aligned}
$$
求解如上式所示的约束最优化问题，所得出的解，就是最大熵模型学习的解。下面给出具体推导。

这里，将约束最优化的原始问题转换为无约束最优化的对偶问题。通过求解对偶问题求解原始问题。

首先，引进拉格朗日乘子w0, w1, w2, ... , wn，定义拉格朗日函数L(P, w)：
$$
\begin{aligned}
L(P,w)\equiv&-H(P)+w_0\left[1-\sum_yP(y|x)\right]+\sum_{i=1}^nw_i(E_{\tilde P}(f_i)-E_P(f_i))\\
=&\sum_{x,y}\tilde P(x)P(y|x)\text{log}\ P(y|x)+w_0\left[1-\sum_yP(y|x)\right]\\
&+\sum_{i=1}^nw_i\left(\sum_{x,y}\tilde P(x,y)f_i(x,y)-\sum_{x,y}\tilde P(x)P(y|x)f_i(x,y)\right)
\end{aligned}
$$
最优化的原始问题是
$$
\mathop{\text{min}}_{P\in C}\ \mathop{\text{max}}_w\ L(P,w)
$$
对偶问题是
$$
\mathop{\text{max}}_w\ \mathop{\text{min}}_{P\in C}\ L(P,w)
$$
由于拉格朗日函数L(P,w)是P的凸函数，原始问题的解与对偶问题的解是等价的。这样，可以通过求解对偶问题来求解原始问题。

首先，求解对偶问题内部的极小化问题min L(P,w)，min L(P,w)是w的函数，将其记作
$$
\Psi(w)=\mathop{\text{min}}_{P\in C}L(P,w)=L(P_w,w)
$$
Ψ(w)称为对偶函数。同时，将其解记作 
$$
P_w=\text{arg}\mathop{\text{min}}_{P\in C}L(P,w)=P_w(y|x)
$$
具体地，求L(P, w)对P(y|x)的偏导数
$$
\begin{aligned}
\frac{\partial L(P,w)}{\partial P(y|x)}
&=\sum_{x,y}\tilde P(x)\left[logP(y|x)+1\right]-\sum_yw_0-\sum_{x,y}\left[\tilde P(x)\sum_{i=1}^nw_if_i(x,y)\right]\\
&=\sum_{x,y}\tilde P(x)\left[logP(y|x)+1-w_0-\sum_{i=1}^nw_if_i(x,y)\right]\\
\end{aligned}
$$
令偏导数等于0，在$\tilde P(x)>0$的情况下，解得
$$
P(y|x)=\text{exp}\left(\sum_{i=1}^nw_if_i(x,y)+w_0-1\right)=\frac{\text{exp}\left(\sum_{i=1}^nw_if_i(x,y)\right)}{\text{exp}(1-w_0)}
$$
由于
$$
\sum_yP(y|x)=1
$$
，得
$$
P_w(y|x)=\frac{1}{Z_w(x)}\text{exp}\left(\sum_{i=1}^nw_if_i(x,y)\right)
$$
其中，
$$
Z_w(x)=\sum_y\text{exp}\left(\sum_{i=1}^nw_if_i(x,y)\right)
$$
Zw(x)称为规范化因子；fi(x,y)是特征函数；wi是特征的权值。由上两式表示的模型Pw=Pw(y|x)就是最大熵模型。这里，w是最大熵模型中的参数向量。

之后，求解对偶问题外部的极大化问题
$$
\mathop{\text{max}}_w\ \Psi(w)
$$
将其解记为w\*，即
$$
w^*=\text{arg}\ \mathop{\text{max}}_w\ \Psi
$$
这就是说，可以应用最优化算法求对偶函数Ψ(w)的极大化，得到w\*，用来表示P\*∈C，这里，
$$
P^*=P_{w^*}=P_{w^*}(y|x)=\frac{1}{Z_{w^*}(x)}\text{exp}\left(\sum_{i=1}^nw_i^*f_i(x,y)\right)
$$
是学习到的最有模型（最大熵模型）。也就是说，最大熵模型的学习归结为对偶函数Ψ(w)的极大化。

# 满足最大熵原理的连续分布推导

最大熵的连续分布：

- 已知区间 → 均匀分布
- 已知均值 → 指数分布
- 已知均值和标准差（方差） → 正态分布

即：

在分布区间已知的情况下，均匀分布是最大熵分布；

在均值已知的情况下，指数分布是最大熵分布；

**在均值和标准差已知的情况下，正态分布是最大熵分布。**



下面我们根据最大熵原理来推导不同约束条件下的最大熵分布。

## 已知分布区间推导出均匀分布

已知概率的区间分布为[a,b]，则最大熵模型学习的最优化问题是
$$
\begin{aligned}
&min\ &-H(P)&=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)\\
&s.t.\ &\sum_{i=1}^nP(x_i)&=\sum_{i=1}^n\tilde{P}(x_i)=1\\
&\ &\text{min}(x_i)&=a\\
&\ &\text{max}(x_i)&=b\\
\end{aligned}
$$
引进拉格朗日乘子w0，w1，w2定义拉格朗日函数
$$
L(P,w)=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)+w_0(\sum_{i=1}^nP(x_i)-1)+w_1[min(x_i)-a]+w_2[max(x_i)-b]
$$
根据拉格朗日对偶性，可以通过求解对偶最优化问题得到原始最优化问题的解，所以求解
$$
\mathop{\text{max}}_{w}\mathop{\text{min}}_{P}L(P,w)
$$
首先求解L(P, w)关于P的极小化问题。为此，固定w0，w1，w2求偏导数：
$$
\frac{\partial L(P,w)}{\partial P(x_i)}=1+\text{log}\ P(x_i)+w_0
$$
令每个偏导数为0，解得
$$
P_w(x_i)=e^{-1-w_0}
$$
于是，
$$
\begin{aligned}
&\mathop{\text{min}}_{P}L(P,w)=L(P_w,w)\\
=&\sum_{i=1}^n(-1-w_0)e^{-1-w_0}+w_0(\sum_{i=1}^ne^{-1-w_0}-1)+w_1[\text{min}(x_i)-a]+w_2[\text{max}(x_i)-b]\\
=&-\sum_{i=1}^ne^{-1-w_0}-w_0+w_1[\text{min}(x_i)-a]+w_2[\text{max}(x_i)-b]\\
\end{aligned}
$$
然后再求解L(pw, w)关于w的极大化问题：
$$
\mathop{\text{max}}_wL(p_w,w)=\mathop{\text{max}}_w\{-\sum_{i=1}^ne^{-1-w_0}-w_0+w_1[\text{min}(x_i)-a]+w_2[\text{max}(x_i)-b]\}
$$
分别求L(pw, w)对w0，w1，w2的偏导数并令其为0，得到
$$
\begin{aligned}
&\frac{\partial L(P_w,w)}{\partial w_0}=\sum_{i=1}^ne^{-1-w_0}-1=0 \Rightarrow \sum_{i=1}^ne^{-1-w_0}=1\\
&\frac{\partial L(P_w,w)}{\partial w_1}=min(x_i)-a=0 \Rightarrow min(x_i)=a\\
&\frac{\partial L(P_w,w)}{\partial w_2}=max(x_i)-b=0 \Rightarrow max(x_i)=b\\
\end{aligned}
$$
因为前面已知
$$
P_w(x_i)=e^{-1-w_0}
$$
所以
$$
\sum_{i=1}^ne^{-1-w_0}=e^{-1-w_0}\sum_{i=1}^n1=P_w(x_i)\sum_a^b1=P_w(x_i)(b-a)=1
$$
则有
$$
P_w(x_i)=\frac{1}{b-a}
$$

## 已知均值推导出指数分布

已知概率分布的均值为μ，则最大熵模型学习的最优化问题是
$$
\begin{aligned}
&\text{min}\ &-H(P)&=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)\\
&s.t.\ &\sum_{i=1}^nP(x_i)&=\sum_{i=1}^n\tilde{P}(x_i)=1\\
&&\sum_{i=1}^nP(x_i)x_i&=\mu\\
\end{aligned}
$$
引进拉格朗日乘子w0，w1定义拉格朗日函数
$$
L(P,w)=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)+w_0(\sum_{i=1}^nP(x_i)-1)+w_1(\sum_{i=1}^nP(x_i)x_i-\mu)
$$
根据拉格朗日对偶性，可以通过求解对偶最优化问题得到原始最优化问题的解，所以求解
$$
\mathop{max}_{w}\mathop{min}_{P}L(P,w)
$$
首先求解$L(P,w)$关于P的极小化问题。为此，固定$w_0$，$w_1$，求偏导数：
$$
\frac{\partial L(P,w)}{\partial P(x_i)}=1+\text{log}\ P(x_i)+w_0+w_1x_i
$$
令每个偏导数为0，解得
$$
P_w(x_i)=e^{-1-w_0-w_1x_i}=\frac{exp(-w_1x_i)}{exp(1+w_0)}
$$
由于
$$
\begin{aligned}
&\sum_{x_i}P_w(x_i)=1\\
\Rightarrow&\frac{1}{exp(1+w_0)}\sum_{i=1}^nexp(-w_1x_i)=1\\
\Rightarrow&exp(1+w_0)=Z_w(x)=\sum_{i=1}^nexp(-w_1x_i)\\
\end{aligned}
$$
可得
$$
\begin{aligned}
P_w(x_i)=&e^{-1-w_0-w_1x_i}\\
=&\frac{exp(-w_1x_i)}{exp(1+w_0)}\\
=&\frac{1}{Z_w(x)}exp(-w_1x_i)\\
\end{aligned}
$$
其中，
$$
Z_w(x)=\sum_{y}exp(-w_1x_i)
$$
Zw(x)被称为规范化因子，-xi是特征函数，wi是特征的权值。上面的Pw(xi)就是最大熵模型。

于是，
$$
\begin{aligned}
&\mathop{min}_{P}L(P,w)=L(P_w,w)\\
=&\sum_{i=1}^n(-1-w_0-w_1x_i)e^{-1-w_0-w_1x_i}+w_0(\sum_{i=1}^ne^{-1-w_0-w_1x_i}-1)+w_1(\sum_{i=1}^nx_ie^{-1-w_0-w_1x_i}-\mu)\\
=&-\sum_{i=1}^ne^{-1-w_0-w_1x_i}-w_0-w_1\mu\\
\end{aligned}
$$
然后再求解$L(p_w,w)$关于w的极大化问题：
$$
\mathop{max}_wL(p_w,w)=\mathop{max}_w\{-\sum_{i=1}^ne^{-1-w_0-w_1x_i}-w_0-w_1\mu\}
$$
分别求$L(P_w,w)$对$w_0$，$w_1$的偏导数并令其为0，得到
$$
\begin{aligned}
&\frac{\partial L(P_w,w)}{\partial w_0}=\sum_{i=1}^ne^{-1-w_0-w_1x_i}-1=0 \Rightarrow \sum_{i=1}^ne^{-1-w_0-w_1x_i}=1\ \ &(1)\\
&\frac{\partial L(P_w,w)}{\partial w_1}=\sum_{i=1}^nx_ie^{-1-w_0-w_1x_i}-\mu=0 \Rightarrow \sum_{i=1}^nx_ie^{-1-w_0-w_1x_i}=\mu\ \ &(2)\\
\end{aligned}
$$
因为前面已知
$$
P_w(x_i)=e^{-1-w_0-w_1x_i}=\frac{1}{Z_w(x)}exp(-w_1x_i)\ \ (3)
$$
所以将上式(3)带入(1)式中，为了方便计算，将求和改为积分，并且为了让计算有意义，选择积分范围从0到正无穷。

则有
$$
\begin{aligned}
\int_0^{\infty}\frac{1}{Z_w(x)}exp(-w_1x)dx=1\\
\end{aligned}
$$
可得
$$
\begin{aligned}
Z_w(x)&=\int_0^{\infty}exp(-w_1x)dx\\
&=-\frac{1}{w_1exp(w_1x)}|^{infty}_0\\
&=-(0-\frac{1}{w_1})\\
&=\frac{1}{w_1}
\end{aligned}
$$
将上式带入(3)式中，可得
$$
P_w(x_i)=e^{-1-w_0-w_1x_i}=\frac{1}{Z_w(x)}exp(-w_1x_i)=w_1exp(-w_1x_i)
$$
将上式带入(2)式中，可得
$$
\begin{aligned}
&\sum_{i=1}^nx_ie^{-1-w_0-w_1x_i}=\int_0^{\infty}xw_1e^{-w_1x}dx=\mu\\
\Rightarrow&\int_0^{\infty}xe^{-w_1x}dx=\frac{\mu}{w_1}\\
\Rightarrow&\int_0^{\infty}x(-\frac{1}{w_1})d(e^{-w_1x})=\frac{\mu}{w_1}\\
\Rightarrow&\int_0^{\infty}xd(e^{-w_1x})=-\mu\\
\Rightarrow&xe^{-w_1x}|^{\infty}_0-\int_0^{\infty}e^{-w_1x}dx=-\mu\\
\Rightarrow&0-\frac{1}{w_1}=-\mu\\
\Rightarrow&w_1=\frac{1}{\mu}
\end{aligned}
$$
好了，现在我们就能得到
$$
P_w(x_i)=e^{-1-w_0-w_1x_i}=\frac{1}{Z_w(x)}exp(-w_1x_i)=\frac{1}{\mu}exp(-\frac{x_i}{\mu})
$$
即
$$
P(x)=\frac{1}{\mu}exp(-\frac{x}{\mu})
$$
而这就是指数分布，参数μ代表均值：

![exponential_distribution](pic/exponential_distribution.jpg)

## 已知均值和标准差推导出正态分布

已知概率分布的均值为μ，方差为σ^2，则最大熵模型学习的最优化问题是
$$
\begin{aligned}
&\text{min}\ -H(P)=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)\\
&\text{s.t.}\quad \sum_{i=1}^nP(x_i)=1\\
&\quad\quad\ \ \sum_{i=1}^nP(x_i)x_i=\mu \\
&\quad\quad\ \ \sum_{i=1}^nP(x_i)(x_i-\mu)^2=\sigma^2\\
\end{aligned}
$$
引进拉格朗日乘子w0，w1，w2定义拉格朗日函数
$$
L(P,w)=\sum_{i=1}^nP(x_i)\text{log}\ P(x_i)+w_0(1-\sum_{i=1}^nP(x_i))+w_1(\mu-\sum_{i=1}^nP(x_i)x_i)+w_2(\sigma^2-\sum_{i=1}^nP(x_i)(x_i-\mu)^2)
$$
根据拉格朗日对偶性，可以通过求解对偶最优化问题得到原始最优化问题的解，所以求解对偶问题
$$
\mathop{\text{max}}_{w}\mathop{\text{min}}_{P}L(P,w)
$$
首先求解L(P,w)关于P的极小化问题。为此，固定w0，w1，求偏导数：
$$
\frac{\partial L(P,w)}{\partial P(x_i)}=1+\text{log}\ P(x_i)-w_0-w_1x_i-w_2(x_i-\mu)^2
$$
令每个偏导数为0，解得
$$
P_w(x_i)=\text{exp}\left(-1+w_0+w_1x_i+w_2(x_i-\mu)^2\right)=\frac{\text{exp}(w_1x_i+w_2(x_i-\mu)^2)}{\text{exp}(1-w_0)}
$$
由于
$$
\begin{aligned}
&\sum_{y}P_w(x_i)=1\\
\Rightarrow&\frac{1}{\text{exp}(1-w_0)}\sum_{y}\text{exp}(w_1x_i+w_2(x_i-u)^2)=1\\
\Rightarrow&\text{exp}(1-w_0)=Z_w(x)=\sum_{y}\text{exp}(w_1x_i+w_2(x_i-u)^2)\\
\end{aligned}
$$
可得
$$
\begin{aligned}
P_w(x_i)=&\text{exp}(-1+w_0+w_1x_i+w_2(x_i-\mu)^2)\\
=&\frac{\text{exp}(w_1x_i+w_2(x_i-\mu)^2)}{\text{exp}(1-w_0)}\\
=&\frac{1}{Z_w(x)}\text{exp}(w_1x_i+w_2(x_i-\mu)^2)\\
\end{aligned}
$$
如果我们令
$$
\begin{aligned}
&w=[w_1, w_2]^T\\
&f(x,y)=[x_i,(x_i-\mu)^2]^T\\
\end{aligned}
$$
则上上式可改写为更清楚的结构：
$$
P_w(x_i)=\frac{1}{Z_w(x)}\text{exp}(w_1x_i+w_2(x_i-\mu)^2)=\frac{1}{Z_w(x)}\text{exp}(w^T\cdot f(x,y))
$$
其中，
$$
Z_w(x)=\sum_{y}\text{exp}(w_1x_i+w_2(x_i-u)^2)=\sum_{y}\text{exp}(w^T\cdot f(x,y))
$$
Zw(x)被称为规范化因子，f(x,y)是特征函数，w是特征的权值。上面的Pw(x_i)就是最大熵模型。

