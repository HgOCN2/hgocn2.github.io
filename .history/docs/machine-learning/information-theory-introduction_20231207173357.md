
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


