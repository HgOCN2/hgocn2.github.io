<template><div><h1 id="概率论与贝叶斯先验" tabindex="-1"><a class="header-anchor" href="#概率论与贝叶斯先验" aria-hidden="true">#</a> 概率论与贝叶斯先验</h1>
<ul>
<li>
<p><RouterLink to="/blogs/mathematics/statistics/bayesian-analysis/bayesian-analysis.html">返回上层目录</RouterLink></p>
</li>
<li>
<p><a href="#%E6%A6%82%E7%8E%87%E8%AE%BA%E5%9F%BA%E7%A1%80">概率论基础</a></p>
<ul>
<li><a href="#%E6%A6%82%E7%8E%87%E4%B8%8E%E7%9B%B4%E8%A7%82">概率与直观</a>
<ul>
<li><a href="#%E6%9C%AC%E7%A6%8F%E7%89%B9%E5%AE%9A%E5%BE%8B">本福特定律</a></li>
<li><a href="#%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87">条件概率</a></li>
<li><a href="#%E5%85%A8%E6%A6%82%E7%8E%87%E5%85%AC%E5%BC%8F">全概率公式</a></li>
<li><a href="#%E8%B4%9D%E5%8F%B6%E6%96%AF(Bayes)%E5%85%AC%E5%BC%8F">贝叶斯(Bayes)公式</a></li>
</ul>
</li>
<li><a href="#%E5%B8%B8%E8%A7%81%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83">常见概率分布</a></li>
<li><a href="#Sigmod/Logistic%E5%87%BD%E6%95%B0%E7%9A%84%E5%BC%95%E5%85%A5">Sigmod/Logistic函数的引入</a></li>
</ul>
</li>
<li>
<p><a href="#%E7%BB%9F%E8%AE%A1%E9%87%8F">统计量</a></p>
<ul>
<li><a href="#%E6%9C%9F%E6%9C%9B/%E6%96%B9%E5%B7%AE/%E5%8D%8F%E6%96%B9%E5%B7%AE/%E7%9B%B8%E5%85%B3%E7%B3%BB%E6%95%B0">期望/方差/协方差/相关系数</a></li>
<li><a href="#%E7%8B%AC%E7%AB%8B%E5%92%8C%E4%B8%8D%E7%9B%B8%E5%85%B3">独立和不相关</a></li>
</ul>
</li>
<li>
<p><a href="#%E5%A4%A7%E6%95%B0%E5%AE%9A%E5%BE%8B">大数定律</a></p>
</li>
<li>
<p><a href="#%E4%B8%AD%E5%BF%83%E6%9E%81%E9%99%90%E5%AE%9A%E7%90%86">中心极限定理</a></p>
</li>
<li>
<p><a href="#%E6%9C%80%E5%A4%A7%E4%BC%BC%E7%84%B6%E4%BC%B0%E8%AE%A1">最大似然估计</a></p>
<ul>
<li><a href="#%E8%BF%87%E6%8B%9F%E5%90%88">过拟合</a></li>
</ul>
</li>
</ul>
<h1 id="概率论基础" tabindex="-1"><a class="header-anchor" href="#概率论基础" aria-hidden="true">#</a> 概率论基础</h1>
<h2 id="概率与直观" tabindex="-1"><a class="header-anchor" href="#概率与直观" aria-hidden="true">#</a> 概率与直观</h2>
<h3 id="本福特定律" tabindex="-1"><a class="header-anchor" href="#本福特定律" aria-hidden="true">#</a> 本福特定律</h3>
<p>本福特定律（本福特法则），又称第一数字定律，是指在实际生活得出的一组数据中，以1为首位数字出现的概率约为总数的三成；是直观想象1/9的三倍。</p>
<table>
<thead>
<tr>
<th>数字</th>
<th style="text-align:center">1</th>
<th style="text-align:center">2</th>
<th style="text-align:center">3</th>
<th style="text-align:center">4</th>
<th style="text-align:center">5</th>
<th style="text-align:center">6</th>
<th style="text-align:center">7</th>
<th style="text-align:center">8</th>
<th style="text-align:center">9</th>
</tr>
</thead>
<tbody>
<tr>
<td>出现概率</td>
<td style="text-align:center">30.1%</td>
<td style="text-align:center">17.6%</td>
<td style="text-align:center">12.51%</td>
<td style="text-align:center">9.7%</td>
<td style="text-align:center">7.9%</td>
<td style="text-align:center">6.7%</td>
<td style="text-align:center">5.8%</td>
<td style="text-align:center">5.1%</td>
<td style="text-align:center">4.6%</td>
</tr>
</tbody>
</table>
<p>广泛存在于生活中，比如：</p>
<ul>
<li>阶乘、素数数列、斐波那契数列首位</li>
<li>住宅地址号码</li>
<li>经济数据反欺诈</li>
<li>选举投票反欺诈</li>
</ul>
<h3 id="条件概率" tabindex="-1"><a class="header-anchor" href="#条件概率" aria-hidden="true">#</a> 条件概率</h3>
<p>$$
P(A|B)=\frac{P(AB)}{P(B)}
$$</p>
<p><img src="@source/blogs/mathematics/statistics/bayesian-analysis/probability-and-bayesian-prior/PIC/conditional_probability.jpg" alt="conditional_probability"></p>
<h3 id="全概率公式" tabindex="-1"><a class="header-anchor" href="#全概率公式" aria-hidden="true">#</a> 全概率公式</h3>
<p>$$
P(A)=\sum_{i}P(A|B_i)P(B_{i})
$$</p>
<h3 id="贝叶斯-bayes-公式" tabindex="-1"><a class="header-anchor" href="#贝叶斯-bayes-公式" aria-hidden="true">#</a> 贝叶斯(Bayes)公式</h3>
<p>$$
P(B_i|A)=\frac{P(B_iA)}{P(A)}=\frac{P(AB_i)}{P(A)}=\frac{P(A|B_i)P(B_i)}{\sum_jP(A|B_j)P(B_i)}
$$</p>
<p><img src="@source/blogs/mathematics/statistics/bayesian-analysis/probability-and-bayesian-prior/PIC/conditional_probability.jpg" alt="conditional_probability"></p>
<p>贝叶斯公式一定要熟练的掌握运用。</p>
<p><strong>思考题</strong></p>
<p>8支步枪中有5支已校准过，3支未校准。一名射手用校准过的枪射击，中吧概率为0.8；用未校准过的枪射击，中靶概率为0.3；现从8支枪中随机取一支射击，结果中靶了。求该枪是已校准过的概率。</p>
<p>凡是从结果中算原因，基本就是使用贝叶斯公式。</p>
<p>解：
$$
\begin{aligned}
&amp;P(G=1)=\frac{5}{8}\ \ \ \ \ \ P(G=0)=\frac{3}{8}\
&amp;P(A=1|G=1)=0.8\ \ \ \ \ \ P(A=0|G=1)=0.2\
&amp;P(A=1|G=0)=0.3\ \ \ \ \ \ P(A=0|G=0)=0.7\
&amp;P(G=1|A=1)=?\
&amp;P(G=1|A=1)=\frac{P(A=1|G=1)}{\sum_{i\in G}P(A=1|G=i)P(G=i)}=\frac{0.8\times \frac{5}{8}}{0.8\times\frac{5}{8}+0.3\times\frac{3}{8}}=0.8163
\end{aligned}
$$
我们后面会聊到贝叶斯网络，里面会讲到朴素贝叶斯，贝叶斯概率和朴素贝叶斯的关系就像是雷锋和雷峰塔的区别，就是JavaScript和Java的区别。朴素贝叶斯是假定条件独立，假定特征均衡，进行分类的非常重要的分类器，曾经也被誉为十大数据挖掘算法之一。而贝叶斯呢？得看上下文，贝叶斯公式是贝叶斯；说模型是用贝叶斯的方法做，那意思就是想加入先验，想把它的参数当作是随机变量。</p>
<hr>
<p>给定某系统的若干样本x，计算该系统的参数，即
$$
P(\theta|x)=\frac{P(x|\theta)P(\theta)}{P(xc)}
$$</p>
<ul>
<li>$P(\theta)$：没有数据支持下，$\theta$发生的概率，即在获取经验之前的概率：先验概率。</li>
<li>$P(\theta|x)$：在数据x的支持下，$\theta$发生的概率：后验概率。</li>
<li>$P(x|\theta)$：给定某参数$\theta$的概率分布：似然函数。想算算在某个参数给定的时候，换句话，系统给定了的时候，那么说，这个样本x的发生概率，即$x_1,x_2,x_3...,x_n$发生的联合概率，那么说，像$x_1,x_2,x_3...,x_n$这样发生的概率，那就是似然概率，<strong>不是很理解</strong></li>
<li>$P(xf)$：没有任何参数影响下样本x的发生概率。不同的参数$\theta$，对于$P(x)$没有任何影响。</li>
</ul>
<p>假设$x=(x_1,x_2,x_3,...x_m)$一共m个样本，给定了m个样本x，看哪个参数$\theta$取最大，这不就是这个意思嘛。我们想算算哪个参数可能概率取最大，哪个就最有可能的参数嘛。因为$P(x)$和任何参数的取值都无关，所以，我们想取$P(\theta|x)$最大，就是$P(x|\theta)P(\theta)$取最大，跟底下分母的$P(x)$无关，可以把分母$P(x)$扔掉，即
$$
P(\theta|x)\propto P(x|\theta)P(\theta)
$$</p>
<p>例如：</p>
<ul>
<li>在没有任何信息的前提下，猜测某人姓氏：先猜李王张刘......猜对的概率相对较大：先验概率。</li>
<li>若知道某人来自&quot;牛家村&quot;，则他姓牛的概率很大：后验概率——但不排除他姓郭、杨等情况。</li>
</ul>
<h2 id="常见概率分布" tabindex="-1"><a class="header-anchor" href="#常见概率分布" aria-hidden="true">#</a> 常见概率分布</h2>
<p>常见分布可以完美统一为一类分布。</p>
<h3 id="两点分布-伯努利分布" tabindex="-1"><a class="header-anchor" href="#两点分布-伯努利分布" aria-hidden="true">#</a> 两点分布(伯努利分布)</h3>
<p>0-1分布，Bernoulli distribution</p>
<p>已知随机变量X的分布律为</p>
<table>
<thead>
<tr>
<th style="text-align:center">X</th>
<th style="text-align:center">1</th>
<th style="text-align:center">0</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">p</td>
<td style="text-align:center">p</td>
<td style="text-align:center">1-p</td>
</tr>
</tbody>
</table>
<p>则有
$$
\begin{aligned}
E(X)&amp;=1\cdot p+0\cdot q=p\
D(X)&amp;=E(X^2)-[E(X)]^2\
&amp;=1^2\cdot p+0^2\cdot (1-p)-p^2=pq
\end{aligned}
$$</p>
<h3 id="二项分布" tabindex="-1"><a class="header-anchor" href="#二项分布" aria-hidden="true">#</a> 二项分布</h3>
<p>Binomial Distribution</p>
<p>两点分布做n次试验，那么就变成了二项分布</p>
<p>设随机变量X服从参数为$n,p$的两点分布,如何求期望和方差？</p>
<p>（<strong>法一</strong>）设$X_i$为第$i$次试验中事件A的发生次数，$i=1,2,...,n$，则
$$
X=\sum_{i=1}^{n}X_i
$$
显然，$X_i$相互独立均服从参数为p的0-1分布，</p>
<p>所以
$$
\begin{aligned}
E(X)=E(\sum_{i=1}^n X_i)=\sum_{i=1}^n E(X_i)=np\
D(X)=D(\sum_{i=1}^n X_i)=\sum_{i=1}^n D(X_i)=np(1-p)
\end{aligned}
$$
（<strong>法二</strong>）X的分布律为
$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k},(k=0,1,2,...,n),
$$
则有
$$
\begin{aligned}
E(X)&amp;=\sum_{k=0}^{n}k\cdot P(X=k)\
&amp;=\sum_{k=0}^{n}k\binom{n}{k}p^k(1-p)^{n-k}\
&amp;=\sum_{k=0}^{n}\frac{kn!}{k!(n-k)!}p^k(1-p)^{n-k}\
&amp;=\sum_{k=0}^{n}\frac{n!}{(k-1)!(n-k)!}p^k(1-p)^{n-k}\
\end{aligned}
$$</p>
<h3 id="正态分布" tabindex="-1"><a class="header-anchor" href="#正态分布" aria-hidden="true">#</a> 正态分布</h3>
<p><a href="http://www.52nlp.cn/%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83%E7%9A%84%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F%E5%9B%9B" target="_blank" rel="noopener noreferrer">正态分布的前世今生(四)<ExternalLinkIcon/></a></p>
<h2 id="sigmod-logistic函数的引入" tabindex="-1"><a class="header-anchor" href="#sigmod-logistic函数的引入" aria-hidden="true">#</a> Sigmod/Logistic函数的引入</h2>
<h1 id="统计量" tabindex="-1"><a class="header-anchor" href="#统计量" aria-hidden="true">#</a> 统计量</h1>
<h2 id="期望-方差-协方差-相关系数" tabindex="-1"><a class="header-anchor" href="#期望-方差-协方差-相关系数" aria-hidden="true">#</a> 期望/方差/协方差/相关系数</h2>
<h2 id="样本方差的有偏与无偏估计" tabindex="-1"><a class="header-anchor" href="#样本方差的有偏与无偏估计" aria-hidden="true">#</a> 样本方差的有偏与无偏估计</h2>
<p><a href="https://www.zhihu.com/question/20099757/answer/26586088" target="_blank" rel="noopener noreferrer">为什么样本方差（sample variance）的分母是 n-1？<ExternalLinkIcon/></a>(魏天闻的回答)</p>
<p><a href="https://www.zhihu.com/question/20099757/answer/312670291" target="_blank" rel="noopener noreferrer">为什么样本方差（sample variance）的分母是 n-1？<ExternalLinkIcon/></a>(马同学的回答)</p>
<p>为什么$\frac{1}{n}\sum_{i=1}^n(x^{(i)}-\hat{\mu)}$要小于$\frac{1}{n}\sum_{i=1}^n(x^{(i)}-\mu)$？</p>
<p>因为显然$\hat{\mu}\neq\mu$啊。</p>
<p><img src="@source/blogs/mathematics/statistics/bayesian-analysis/probability-and-bayesian-prior/pic/variance-biased-estimation.png" alt="variance-biased-estimation"></p>
<p>如果对MSE进行分解，它可以写成bias的平方＋估计量的方差，所以它同时衡量了精度（accuracy）和准度（precision）。</p>
<h2 id="独立和不相关" tabindex="-1"><a class="header-anchor" href="#独立和不相关" aria-hidden="true">#</a> 独立和不相关</h2>
<h1 id="大数定律" tabindex="-1"><a class="header-anchor" href="#大数定律" aria-hidden="true">#</a> 大数定律</h1>
<h1 id="中心极限定理" tabindex="-1"><a class="header-anchor" href="#中心极限定理" aria-hidden="true">#</a> 中心极限定理</h1>
<h1 id="最大似然估计" tabindex="-1"><a class="header-anchor" href="#最大似然估计" aria-hidden="true">#</a> 最大似然估计</h1>
<h2 id="过拟合" tabindex="-1"><a class="header-anchor" href="#过拟合" aria-hidden="true">#</a> 过拟合</h2>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.chinahadoop.cn/course/1068/learn#lesson/20294" target="_blank" rel="noopener noreferrer">小象学院-邹博老师-机器学习-第二课<ExternalLinkIcon/></a></li>
</ul>
<p>本节主要照抄自本课程。</p>
</div></template>


