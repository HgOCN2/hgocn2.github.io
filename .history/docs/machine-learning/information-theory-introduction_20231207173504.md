
## 交叉熵

这里再强调一遍：

* 熵的本质含义是：编码方案完美时，最短平均编码长度的是多少

* 交叉熵的本质含义是：编码方案不一定完美时（但你或者模型以为是完美的），平均编码长度的是多少

我们先**直观**地理解交叉熵，用信息编码来直观举例说明，然后再用**严谨**的数学语言来描述交叉熵的概念。

从信息编码的角度举个例子：

**信息熵**：

假设一个信源是一个随机变量$X$，且该随机变量取值的正确分布$p$如下：
$$
A:\frac{1}{2},\quad B:\frac{1}{4},\quad C:\frac{1}{4}
$$
因为我们知道信道传输是只能传二进制编码的，所以必须对A，B，C进行编码，根据哈夫曼（Huffman）树来实现，如下所示：

![huffman_tree_1](pic/huffman_tree_1.png)

也就是说A被编码为0，B被编码为10，C被编码为11。所以ABC字符的平均编码长度为：
$$
\frac{1}{2}\times 1+\frac{1}{4}\times 2+\frac{1}{4}\times 2=1.5
$$
那么这个随机变量的信息熵是什么呢？
$$
\begin{aligned}
H(X)&=-\frac{1}{2}\text{log}_2(\frac{1}{2})-\frac{1}{4}\text{log}_2(\frac{1}{4})-\frac{1}{4}\text{log}_2(\frac{1}{4})\\
&=0.5+0.5+0.5\\
&=1.5
\end{aligned}
$$
正好也是1.5。所以说**信息熵是随机变量平均编码的最小长度**。

**交叉熵**

有了信息上的概念后，然后就去看看交叉上的物理含义。假设我们用一个错误的分布$q$，对随机变量编码，$q$的分布如下：
$$
A:\frac{1}{4},\quad B:\frac{1}{4},\quad C:\frac{1}{2}
$$
那么我们得到的哈夫曼树为：

![huffman_tree_2](pic/huffman_tree_2.jpg)

也就是说A被编码为11，B被编码为10，C被编码为0。但是实际上，ABC三个字符实际出现的概率还是1/2，1/4，1/4。所以在这种情况下，平均编码长度变成了
$$
\frac{1}{2}\times 2+\frac{1}{4}\times 2+\frac{1}{4}\times 1=1.75
$$
那么这个时候的交叉熵H(p,q)是什么呢？计算如下：
$$
\begin{aligned}
H(p,q)&=-\frac{1}{2}\text{log}_2(\frac{1}{4})-\frac{1}{4}\text{log}_2(\frac{1}{4})-\frac{1}{4}\text{log}_2(\frac{1}{2})\\
&=1+0.5+0.25\\
&=1.75
\end{aligned}
$$
正好也是1.75的，所以这就是交叉熵的物理含义。

有了交叉熵和信息熵，那么相对熵就更好理解了。其实际含义就是用错误分布对随机变量编码时，其产生多余的编码长度。

这里就是
$$
D_{K,L}(p||q)=H(p,q)-H(p)=1.75-1.5=0.25
$$
由上面的分析，我们很容易直观理解了交叉熵是一定大于信息熵的，那从数学上该怎么证明呢？这其实就是吉布斯不等式（Gibbs inequality）：
$$
\begin{aligned}
D_{K,L}(p||q)&=H(p,q)-H(p)\\
&=-\sum_{i\in I}p_i\text{ln}\ q_i - (-\sum_{i\in I}p_i\text{ln}\ p_i)\\
&=-\sum_{i\in I}p_i\text{ln}\ \frac{q_i}{p_i}\\
&\geqslant-\sum_{i\in I}p_i\left( \frac{q_i}{p_i}-1 \right)\ \text{since}\ \text{ln}\ x \leqslant x -1\\
&=-\sum_{i\in I}q_i+\sum_{i\in I}p_i\\
&=0\\
\end{aligned}
$$
注：上式中的等号成立的条件是，当且仅当$p_i=q_i$，即预测的概率$q_i$和实际的概率$p_i$相等的时候。

下面用比较严谨的语言来说明交叉熵和相对熵：

现有关于样本集的2个概率分布p和q，其中p为真实分布，q为非真实分布（即你所估算出来的你认为的真实分布，但和真实分布p可能并不一致）。

按照真实分布p来衡量识别一个样本的所需要的编码长度的期望（即平均编码长度）为：
$$
H(p)=\sum_ip(i)\text{log}\frac{1}{p(i)}
$$
如果使用有误差（只是你个人觉得很完美）的分布q来表示来自真实分布p的平均编码长度，则应该是：
$$
H(p,q)=\sum_ip(i)\text{log}\frac{1}{q(i)}
$$
，因为用q来编码的样本来自分布$p$，所以期望$H(p,q)$中概率是$p(i)$。$H(p,q)$我们称之为“交叉熵”。

比如含有4个字母(A,B,C,D)的数据集中，真实分布$p=(1/2,1/2,0,0)$，即A和B出现的概率均为1/2。C和D出现的概率都为0。计算$H(p)$为1，即只需要1位编码即可识别A和B。如果使用不恰当的分布$Q=(1/4,1/4,1/4,1/4)$来编码则得到$H(p,q)=2$，即需要2位编码来识别A和B（当然还有C和D，尽管C和D并不会出现，因为真实分布$p$中C和D出现的概率为0，这里就钦定概率为0的事件不会发生啦）。

可以看到上例中根据非真实（只是你个人或模型以为是真实的）分布q得到的平均编码长度$H(p,q)$大于根据真实分布p得到的平均编码长度$H(p)$。事实上，根据吉布斯不等式(Gibbs' inequality)可知，$H(p,q)\ge H(p)$恒成立，当$q$为真实分布$p$时取等号。

**这里要完全理解交叉熵的关键就是，一定要意识到信息熵是最短平均编码长度。即编码方案完美时的平均编码长度，其他任何编码方案的平均编码长度都要大于信息熵**。

### 交叉熵损失函数

交叉熵可在机器学习中作为**损失函数**，p表示真实标记的分布，q则为训练后的模型的预测标记分布，交叉熵损失函数可以衡量p与q的相似性。**交叉熵作为损失函数还有一个好处：在神经网络中使用sigmod函数在梯度下降时能避免均方误差损失函数学习速率降低的问题，因为学习速率可以被输入的误差所控制**。

PS：通常“相对熵”也可以称之为“交叉熵”，因为真实分布p是固定的$D(p||q)$由$H(p,q)$决定。当然也有特殊情况，彼时两者须区别对待。

大部分机器学习和现代的神经网络使用最大似然来训练。这意味着代价函数就是负的对数似然。它与训练数据和模型分布之间的交叉熵等价。这个代价函数表示为
$$
J(\theta)=-\mathbb E_{x,y\sim\hat{p}_{\text{data}}}\text{log}\ p_{\text{model}}(y|x)
$$
可以看出：**任何一个由负对数似然组成的损失都是定义在训练集上的经验分布和定义在模型上的概率分布之间的交叉熵。例如，均方误差是经验分布和高斯模型之间的交叉熵**。在《深度学习》第235页中，Goodfellow也提到，均方误差就是与单位高斯分布的输出相关联的交叉熵损失。

### 交叉熵和最大似然的等价性

交叉熵这东西你如果理解为两个概率分布会发现它就是nonsense，你得把对数里面那个分布理解为真实的随机变量分布，而将对数外面那个理解为**观察到的频率**。然后你就会发现它就是最最原始的MLE（最大似然估计）套了个时髦的壳而已。

比如说现在有一个真实分布为P(x)的随机变量，我们对它进行了N次独立同分布实验，对于每个可能的结果x观察到的次数为N(x)，那么它的似然值就可以写成
$$
L=\mathop{\Pi}_xP(x)^{N(x)}
$$
很好理解对吧，乘法公式，把每次实验的概率乘起来，然后合并相同的项写成幂次。这是个乘积的形式，取个对数可以得到求和的形式：
$$
lnL=\sum_{x}N(x)lnP(x)
$$
这个式子有两个缺点，第一它是个负数，第二它的数值跟样本数有关，样本越多数值越小，因此除以一下总的样本数归一化，再取个相反数，然后改用频率表示：
$$
-\sum_x\frac{N(x)}{N}lnP(x)=-\sum_xP_0(x)lnP(x)
$$
就齐活了。

因此可以看出，**交叉熵最小实质上就是似然值最大**。我们可以证明，在给定$P_0$的情况下，使交叉熵最小的分布P一定有$P=P_0$，只需要用拉格朗日乘子法就可以：
$$
W=-\sum P_0(x)lnP(x)+\lambda\left(\sum_xP(x)-1\right)
$$
求偏导得到
$$
-\frac{P_0(x)}{P(x)}+\lambda=0
$$
即$P_0$和P成比例，再根据归一化条件得到$P=P_0$

因此在有模型约束的条件下求交叉熵最小值，也就是让模型输出的分布尽量能接近训练数据的分布。

## 相对熵（KL散度）

相对熵的本质是：你所以为或者模型估算出的完美编码方案，和实际的完美方案相比，平均编码长度多出来的长度。

我们将由存在误差（只是你自己或模型以为正确无误）的$q$分布得到的平均编码长度比由p分布得到的平均编码长度多出的bit数称为“相对熵”：
$$
D(p||q)=H(p,q)-H(p)=\sum_ip(i)log\frac{p(i)}{q(i)}
$$
，其又被称为[KL散度](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence)(Kullback-Leibler divergence, KLD)。它表示两个函数或概率分布的差异性：差异越大则相对熵越大，差异越小则相对熵越小，特别地，若两者相同则熵为0。

注意，KL散度不对称，没有交换律。因为所基于的真实分布$p$不一样。

如果对于同一个随机变量$x$有两个单独的概率分布$P(x)$和$Q(x)$，可以使用KL散度来衡量这两个分布的差异：
$$
D_{KL}(P||Q)=\mathbb{E}_{x\sim P}\left[log\frac{P(x)}{Q(x)}\right]=\mathbb{E}_{x\sim P}[logP(x)-logQ(x)]
$$
在离散型随机变量的情况下，KL散度衡量的是，当我们使用一种被设计成能够使得概率分布$Q$产生的消息长度最小的编码，发送包含由概率分布$P$产生的符号的消息时，所需要的额外信息量。

PS：通常“相对熵”也可称为“交叉熵”，因为真实分布$p$是固定的，$D(p||q)$由$H(p,q)$决定。针对$q$最小化交叉熵等价于最小化KL散度，因为$q$并不参与被省略的$H(p)$项。当然也有特殊情况，彼时两者须区别对待。

[初学机器学习：直观解读KL散度的数学概念](https://zhuanlan.zhihu.com/p/37452654)

### 相对熵与TF-IDF

在吴军的《数学之美》中，相关性那一节提到TF-IDF算法可以理解为相对熵的应用：词频在整个语料库的分布与词频在具体文档中分布之间的差异性。

首先大致介绍下什么是TF_IDF：

[TF-IDF](https://zh.wikipedia.org/wiki/Tf-idf)是一种统计方法，用以评估一字词对于一个文件集或一个语料库中的其中一份文件的重要程度。字词的重要性随着它在文件中出现的次数成正比增加，但同时会随着它在语料库中出现的频率成反比下降。

在一份给定的文件里，**词频**（term frequency，TF）指的是某一个给定的词语在该文件中出现的频率。对于在某一特定文件里的词语ti来说，它的重要性可表示为：
$$
\text{TF}_{i,j}=\frac{n_{i,j}}{\sum_{k}n_{k,j}}
$$
以上式子中$n_{i,j}$是该词在文件$d_j$中的出现次数，而分母则是在文件$d_j$中所有字词的出现次数之和。

**逆向文件频率**（inverse document frequency，IDF）是一个词语普遍重要性的度量。某一特定词语的IDF，可以由总文件数目除以包含该词语之文件的数目，再将得到的商取以10为底的对数得到：
$$
\text{IDF}_i=\text{lg}\frac{|D|}{|\{ j:t_i\in d_j \}|}
$$
其中，

* 上式分子为语料库中的文件总数
* 上式分母为包含词语$t_i$的文件数目（即$n_{i,j}\neq 0$的文件数目）

则词语$t_i$在文件$d_j$中的重要程度为：
$$
\text{TF-IDF}_{i,j}=\text{TF}_{i,j}\times \text{IDF}_i
$$
TF-IDF权重计算方法经常会和余弦相似性（cosine similarity）一同使用于向量空间模型中，用以判断两份文件之间的相似性。



下面讨论相对熵与TF-IDF的关系：

先进行一些假设：

* 假设1：每个词的出现是独立事件
* 假设2：每篇文档大小基本相同，都为m个词

* 假设3：一个词$w_i$如果出现在文档中，则在每个文档中出现的次数$n_i$都相同

  注：我也觉得这个假设太过理想了

有了以上假设后，我们可以估计每个词的概率分布进而求解其信息量了。

设共有D篇文档，每篇文档有m个词，其中包含词$w_i$的文档有$D(w_i)$篇，有：
$$
q(w_i)=\frac{n_iD(w_i)}{mD}
$$
设词$w_i$在文档$d$中的真实概率分布为$p'$，于是
$$
p'(w_i)=\frac{n_i}{m}
$$
然后把$p', q$套进相对熵公式：
$$
\begin{aligned}
D_{KL}(p'||q)&=\sum_{i=1}^kp'(w_i)\text{log}_2\frac{p'(w_i)}{q(w_i)}\\
&=\sum_{i=1}^k\frac{n_i}{m}\text{log}_2\frac{n_i/m}{n_iD(w_i)/mD}\\
&=\sum_{i=1}^k\frac{n_i}{m}\text{log}_2\frac{1}{D(w_i)/D}\\
&=\sum_{i=1}^k\text{TF}(w_i)\cdot\text{IDF}(w_i)\\
\end{aligned}
$$
上式如何理解呢？

* 当这个相对熵（TF-IDF之和）越大，q对文档d的描述越差，说明文档d的内容指向性越强，因为q是对整个语言中所有词的概率分布的估计
* 当这个相对熵越小（TF-IDF之和）越小，q对文档d的描述越好，说明文档d的内容指向性越差，越可能是随机按q选取词堆砌成文

# 条件熵、联和熵与互信息

## 条件熵

条件熵就是按照一个分类变量对原变量数据进行分类后，原变量的不确定性就会减小了，**因为新增加了这个新的分类变量的信息**。这个不确定程度减小了多少就是信息的增益，而还剩下多少不确定性程度就是条件熵。

**条件熵是另一个变量$Y$的熵对$X$（条件）的期望而已**。

### 由信息熵引出条件熵

我们首先知道信息熵是考虑该随机变量的所有可能取值，即所有可能发生事件所带来的信息量的期望。公式如下：
$$
H(x)=-\sum_{i=1}^np(x_i)\text{log}\ p(x_i)
$$
我们的条件熵的定义是：定义为给定$X$条件下，$Y$的条件概率分布的熵的数学期望。

这个还是比较抽象，下面我们解释一下：

设有随机变量$(X,Y)$，其联合概率分布为 
$$
p(X=x_i,Y=y_i)=p_{ij}, \ i=1,2,...,n,\ j=1,2,...,m
$$
条件熵$H(Y|X)$表示在已知随机变量$X$的条件下随机变量$Y$的不确定性。

随机变量$X$给定的条件下随机变量$Y$的条件熵$H(Y|X)$

### 条件熵公式

下面推导一下条件熵的公式：
$$
\begin{aligned}
H(Y|X)&=\sum_{x\in X}p(x)H(Y|X=x)\\
&=-\sum_{x\in X}p(x)\sum_{y\in Y}p(y|x)log\ p(y|x)\\
&=-\sum_{x\in X}\sum_{y\in Y}p(x,y)log\ p(y|x)\\
\end{aligned}
$$
注意，这个条件熵，不是指在给定某个数（某个变量为某个值）的情况下，另一个变量的熵是多少，变量的不确定性是多少，而是**期望**！

因为条件熵中$X$也是一个变量，意思是在一个变量$X$的条件下（变量$X$的每个值都会取），另一个变量$Y$的熵对$X$的期望。

**条件熵是另一个变量$Y$的熵对$X$（条件）的期望**。这是最容易错的！

### 举例解释条件熵

下面通过例子来解释一下：

![marry_or_not](pic/marry_or_not.png)

假如我们有上面数据，则设随机变量Y={嫁, 不嫁}，我们就可以统计出，嫁的个数为6/12 = 1/2，不嫁的个数为6/12 = 1/2，那么Y的熵，根据熵的公式来算，可以得到

$$
H(Y)=-\frac{1}{2}log\frac{1}{2}-\frac{1}{2}log\frac{1}{2}
$$
为了引出条件熵，我们现在还有一个**变量X**，代表长相是帅还是不帅，当长相是不帅的时候，统计如下红色所示：

![marry_not_handsome](pic/marry_not_handsome.png)

可以得出，当已知不帅的条件下，满足条件的只有4个数据了，这四个数据中，不嫁的个数为1个，占1/4，

嫁的个数为3个，占3/4，那么此时是否嫁人的熵为

$$
\begin{aligned}
&H(Y|X=\text{不帅})=-\frac{1}{4}log\frac{1}{4}-\frac{3}{4}log\frac{3}{4}\\
&p(X=\text{不帅})=4/12=1/3
\end{aligned}
$$
同理我们可以得到，当已知帅的条件下，满足条件的有8个数据了，这八个数据中，不嫁的个数为5个，占5/8

嫁的个数为3个，占3/8，那么此时是否嫁人的熵为

$$
\begin{aligned}
&H(Y|X=\text{帅})=-\frac{5}{8}log\frac{5}{8}-\frac{3}{8}log\frac{3}{8}\\
&p(X=\text{帅})=8/12=2/3\\
\end{aligned}
$$
我们终于可以计算我们的**条件熵**了，我们现在需要求：
$$
H(Y|X=\text{长相})
$$
也就是说，我们想要求出当已知长相的条件下的条件熵。根据公式我们可以知道，长相可以取帅与不帅两种。

由于条件熵是另一个变量Y熵对X（条件）的期望。公式为：

$$
H(Y|X)=\sum_{x\in X}p(x)H(Y|X=x)
$$
则有
$$
H(Y|X=\text{长相})=p(X=\text{帅})\times H(Y|X=\text{帅})+p(X=\text{不帅})\times H(Y|X=\text{不帅})
$$
然后将上面已经求得的答案带入即可求出条件熵！

**这里比较容易犯的错误就是忽略了$X$也是可以取多个值，然后对其求期望！！**

### 条件熵总结

其实条件熵意思是按一个新的变量的**每个值（并非单一的某个值）**对原变量进行分类，比如上面这个题把嫁与不嫁按帅，不帅分成了俩类。然后在每一个小类里面，都计算一个小熵，然后每一个小熵乘以各个类别的概率，然后**求和**。

**我们用另一个变量对原变量分类后，原变量的不确定性就会减小了，因为新增了$Y$的信息**，可以感受一下。不确定程度减少了多少就是信息的增益。

**条件熵是另一个变量$Y$的熵对$X$（条件）的期望**。

## 联和熵

两个随机变量$X$、$Y$的联合分布，可形成联和熵（Joint Entropy），

下面给出两个随机变量的联合熵的定义。

分布为$p(x,y)$的一对随机变量$(X,Y)$,其联合熵$H(X, Y)$定义为：
$$
H(X,Y)=-\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\text{log}\ p(x,y)=E\left[\text{log}\frac{1}{p(x,y)}\right]
$$
**数学**上讲，联合熵就是度量一个联合分布的随机系统的不确定度。联合熵的**物理**意义是，观察一个多个随机变量的随机系统获得的信息量。与信息熵一样也是一个数学期望。
$$
\begin{aligned}
&H(X,Y)=H(X)+H(Y|X)\\
&H(X,Y)-H(X)=H(Y|X)
\end{aligned}
$$

- $(X, Y)$发生所包含的熵 $-$ $X$单独发生包含的熵 = 在$X$发生的前提下$Y$发生“新”带来的熵
- 该式子定义为$X$发生前提下，$Y$的熵，即条件熵$H(Y|X)$

$$
\begin{aligned}
&H(X,Y)-H(X)\\
=&-\sum_{x,y}p(x,y)\text{log}\ p(x,y)+\sum_xp(x)\text{log}\ p(x)\\
=&-\sum_{x,y}p(x,y)\text{log}\ p(x,y)+\sum_x(\sum_yp(x,y))log\ p(x)\\
=&-\sum_{x,y}p(x,y)\text{log}\ p(x,y)+\sum_{x,y}p(x,y)\text{log}\ p(x)\\
=&-\sum_{x,y}p(x,y)\text{log}\ \frac{p(x,y)}{p(x)}\\
=&-\sum_{x,y}p(x,y)\text{log}\ p(y|x)\\
=&-\sum_{x}p(x)\sum_{y}p(y|x)\text{log}\ p(y|x)\\
=&-\sum_{x}p(x)H(y|x)\\
\end{aligned}
$$

对于式子$H(X,Y)=H(X)+H(Y|X)$所表达的物理含义是，对一个两个随机变量的随机系统，**我们可以先观察一个随机变量获取信息量，观察完后，我们可以在拥有这个信息量的基础上观察第二个随机变量的信息量**。其那么先观察哪一个随机变量对信息量的获取有影响吗？利用概率论的知识，我们可以轻易得出H(X,Y)=H(Y)+H(X|Y)$。也就是说，先观察谁，对信息量都不会有影响，这是非常符合直觉的。

基于上述的讨论，我们不禁会问，如果有$n$个随机变量处于一个随机系统中，那么我们获取其联合熵也是无关观察先后吗？答案是肯定的。具体请看[信息论——联合熵](https://blog.csdn.net/SAJIAHAN/article/details/82779513)

## 互信息（信息增益）

- 两个随机变量$X$，$Y$的互信息，定义为$X$，$Y$的联合分布和独立分布乘积的相对熵（KL散度）

$$
I(X,Y)=D(P(X, Y)||P(X)P(Y))=\sum_{x,y}p(x,y)\text{log}\frac{p(x,y)}{p(x)p(y)}
$$

* 或者根据文氏图，也可将互信息定义为：$I(X,Y) = H(X) + H(Y) - H(X,Y)$

条件熵也可由$H(X)-I(X,Y)$推出：
$$
\begin{aligned}
&H(X)-I(X,Y)\\
=&-\sum_xp(x)\text{log}\ p(x)-\sum_{x,y}p(x,y)\text{log}\ \frac{p(x,y)}{p(x)p(y)}\\
=&-\sum_x(\sum_yp(x,y))\text{log}\ p(x)-\sum_{x,y}p(x,y)\text{log}\ \frac{p(x,y)}{p(x)p(y)}\\
=&-\sum_{x,y}p(x,y))\text{log}\ p(x)-\sum_{x,y}p(x,y)\text{log}\ \frac{p(x,y)}{p(x)p(y)}\\
=&\sum_{x,y}p(x,y)\text{log}\ \frac{p(x,y)}{p(y)}\\
=&\sum_{x,y}p(x,y)\text{log}\ p(x|y)\\
=&H(X|Y)\\
\end{aligned}
$$
互信息和信息增益的异同：

* 互信息的大小和信息增益相等，即由于$Y$的引入，使$X$的熵减小的量。

* 但我个人认为两者意义不一样，互信息度量的是$X$和$Y$的相关性。如果$X$和$Y$是独立的，那么$X$和$Y$的互信息就是零。

  说互信息的时候，$X,Y$两个随机变量的地位是相同的

  说信息增益的时候，是把一个变量堪称减小另一个变量不确定度的手段。

# 各种熵之间关系的文氏图

![Venn-diagram-of-entropy](pic/Venn-diagram-of-entropy.png)

整理得到的等式

* 条件熵定义

  $$
  H(Y|X) = H(X,Y) - H(X)
  $$
  
* 根据互信息定义展开得到

  $$
  H(Y|X) = H(Y) - I(X,Y)
  $$
  
* 对偶式

  $$
\begin{aligned}
  H(Y|X)&=H(X,Y)-H(X)\\
  H(Y|X)&=H(Y)-I(X,Y)
  \end{aligned}
  $$
  
* 多数文献，将该式作为互信息的定义式

  $$
  I(X,Y)=H(X)+H(Y)-H(X,Y)
  $$
  
* $H(Y|X)\leqslant H(Y)$

# 参考资料

* 《深度学习》Goodfellow，第三章，概率与信息论

“自信息”一章参考此书；“交叉熵与相对熵(KL散度)”一章参考此书。

* [通俗理解条件熵](https://blog.csdn.net/xwd18280820053/article/details/70739368)

"条件熵"一节参考此博客。

* [如何通俗的解释交叉熵与相对熵?](https://www.zhihu.com/question/41252833/answer/108777563)

"交叉熵"一节参考此博客。

* [为什么交叉熵（cross-entropy）可以用于计算代价？](https://www.zhihu.com/question/65288314/answer/849294209)

"交叉熵和最大似然的等价性"参考此知乎回答。

* [信息论随笔3: 交叉熵与TF-IDF模型](https://www.cnblogs.com/ZisZ/p/9087921.html)

"相对熵与TF-IDF"一节参考此博客。

* [北京2014年10月机器学习班之邹博的最大熵模型PPT](http://pan.baidu.com/s/1qWLSehI)

“各种熵之间关系的文氏图”一节参考子ppt。

===

有时间看下下面的网址

[信息论的熵](http://blog.csdn.net/hguisu/article/details/27305435)

[从香农熵到手推KL散度：纵览机器学习中的信息论](https://zhuanlan.zhihu.com/p/32985487)

[如何通俗的解释交叉熵与相对熵?](https://www.zhihu.com/question/41252833/answer/195901726)

[机器学习各种熵：从入门到全面掌握](https://mp.weixin.qq.com/s?__biz=MzUyMjE2MTE0Mw==&mid=2247485772&idx=1&sn=08e167ca071873b569ede4e5f9ae422f&chksm=f9d157d4cea6dec235cc2ae4500c0b72a81f92d1b540d377d6fe2a8ce9d12469b3073c6b7117&scene=0#rd)

[为什么交叉熵（cross-entropy）可以用于计算代价？](https://www.zhihu.com/question/65288314/answer/244557337)

[信息量，熵，交叉熵，相对熵与代价函数](https://mp.weixin.qq.com/s?__biz=MzU1NTUxNTM0Mg==&mid=2247488638&idx=1&sn=d00968aa06484c0d0550324f1c372baa&chksm=fbd278dfcca5f1c97d3fa571ffe53b184abad005753ff81eb9037e5ff29a42709c8ba1b4ff26&scene=0#rd)

[http://blog.csdn.net/saltriver/article/details/53056816](http://blog.csdn.net/saltriver/article/details/53056816)

[http://blog.csdn.net/xuxurui007/article/details/21788551](http://blog.csdn.net/xuxurui007/article/details/21788551)

[https://www.zhihu.com/search?type=content&q=%E4%BF%A1%E6%81%AF%E7%86%B5](https://www.zhihu.com/search?type=content&q=%E4%BF%A1%E6%81%AF%E7%86%B5)

[https://www.zhihu.com/question/26521135](https://www.zhihu.com/question/26521135)

[https://www.zhihu.com/question/26446385](https://www.zhihu.com/question/26446385)

[https://www.zhihu.com/question/40185590](https://www.zhihu.com/question/40185590)

[https://zhuanlan.zhihu.com/p/28564865](https://zhuanlan.zhihu.com/p/28564865)

[https://zhuanlan.zhihu.com/p/26486223](https://zhuanlan.zhihu.com/p/26486223)

[http://www.jianshu.com/p/67425a89df47](http://www.jianshu.com/p/67425a89df47)

[https://ask.julyedu.com/question/6897](https://ask.julyedu.com/question/6897)

[https://ask.julyedu.com/people/zoubo](https://ask.julyedu.com/people/zoubo)

[https://ask.julyedu.com/question/628](https://ask.julyedu.com/question/628)

[https://www.zhihu.com/question/21149770/answer/219143281](https://www.zhihu.com/question/21149770/answer/219143281)

