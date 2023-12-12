<template><div><h1 id="线性回归" tabindex="-1"><a class="header-anchor" href="#线性回归" aria-hidden="true">#</a> 线性回归</h1>
<ul>
<li>
<p><RouterLink to="/docs/machine-learning/linear-model/linear-model.html">返回上层目录</RouterLink></p>
</li>
<li>
<p><a href="#%E5%88%86%E7%B1%BB%E4%B8%8E%E5%9B%9E%E5%BD%92%E7%9A%84%E6%A6%82%E5%BF%B5%E5%92%8C%E5%8C%BA%E5%88%AB">分类与回归的概念和区别</a></p>
<ul>
<li><a href="#%E5%9B%9E%E5%BD%92%E7%9A%84%E7%94%B1%E6%9D%A5">回归的由来</a></li>
<li><a href="#%E5%9B%9E%E5%BD%92%E9%97%AE%E9%A2%98%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">回归问题的应用场景</a></li>
<li><a href="#%E5%88%86%E7%B1%BB%E9%97%AE%E9%A2%98%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF">分类问题的应用场景</a></li>
<li><a href="#%E5%88%86%E7%B1%BB%E5%92%8C%E5%9B%9E%E5%BD%92%E7%9A%84%E5%8C%BA%E5%88%AB">分类和回归的区别</a></li>
<li><a href="#%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E6%A8%A1%E5%9E%8B">如何选择模型</a></li>
</ul>
</li>
<li>
<p><a href="#%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92%E8%A7%A3%E6%B3%95%E6%80%9D%E8%B7%AF">线性回归解法思路</a></p>
<ul>
<li><a href="#%E9%80%89%E6%8B%A9%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B">选择线性模型</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E5%A6%82%E4%BD%95%E5%8C%B9%E9%85%8D%E6%95%B0%E6%8D%AE(%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0)">模型如何匹配数据(损失函数)</a></li>
<li><a href="#%E6%B1%82%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">求损失函数参数</a>
<ul>
<li><a href="#%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D%E6%B3%95%E6%B1%82%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">梯度下降法求损失函数参数</a></li>
<li><a href="#%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95%E6%B1%82%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">最小二乘法求损失函数参数</a></li>
<li><a href="#%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D%E6%B3%95%E5%92%8C%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95%E7%9A%84%E5%8C%BA%E5%88%AB">梯度下降法和最小二乘法的区别</a></li>
</ul>
</li>
<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>
</ul>
</li>
<li>
<p><a href="#Ridge%E5%9B%9E%E5%BD%92%EF%BC%88%E5%B2%AD%E5%9B%9E%E5%BD%92%EF%BC%89">Ridge回归（岭回归）</a></p>
</li>
<li>
<p><a href="#Lasso%E5%9B%9E%E5%BD%92">Lasso回归</a></p>
</li>
</ul>
<h1 id="分类与回归的概念和区别" tabindex="-1"><a class="header-anchor" href="#分类与回归的概念和区别" aria-hidden="true">#</a> 分类与回归的概念和区别</h1>
<h2 id="回归的含义与由来" tabindex="-1"><a class="header-anchor" href="#回归的含义与由来" aria-hidden="true">#</a> 回归的含义与由来</h2>
<p>回归（regression)，单词分解re(不断的）+gress（走）。世界 能够产生万事万物，其背后有一条不变的规律，而这个规律我们是看不到的，只能通过观察到数据样本去推测这个规律，这个过程就叫做回归，从数据不断的向规则走：regress。</p>
<p>“回归”一词最初是在1886年由英国人类学家高尔顿(Francis Galton)在论文《Regression towards mediocrity in hereditary stature》中使用的，他仅仅使用“回归”来说明：相比于父代身高，子代身高会<strong>回归</strong>趋向平均身高。之后该术语之后被其他人所采用，含义和最初的已有出入，现在作为一个通常的统计方法。</p>
<p>“回归”最初的具体含义请点击下面的链接查看：</p>
<p><a href="https://stats.stackexchange.com/questions/11087/why-are-regression-problems-called-regression-problems" target="_blank" rel="noopener noreferrer">Why are regression problems called “regression” problems?<ExternalLinkIcon/></a></p>
<p><a href="http://blog.minitab.com/blog/statistics-and-quality-data-analysis/so-why-is-it-called-regression-anyway" target="_blank" rel="noopener noreferrer">So Why Is It Called &quot;Regression,&quot; Anyway?<ExternalLinkIcon/></a></p>
<h2 id="回归问题的应用场景" tabindex="-1"><a class="header-anchor" href="#回归问题的应用场景" aria-hidden="true">#</a> 回归问题的应用场景</h2>
<p>回归问题通常是用来预测一个值，如预测房价、未来的天气情况等等，例如一个产品的实际价格为500元，通过回归分析预测值为499元，我们认为这是一个比较好的回归分析。一个比较常见的回归算法是线性回归算法（LR）。另外，回归分析用在神经网络上，其最上层是不需要加上softmax函数的，而是直接对前一层累加即可。回归是对真实值的一种逼近预测。</p>
<h2 id="分类问题的应用场景" tabindex="-1"><a class="header-anchor" href="#分类问题的应用场景" aria-hidden="true">#</a> 分类问题的应用场景</h2>
<p>分类问题是用于将事物打上一个标签，通常结果为离散值。例如判断一幅图片上的动物是一只猫还是一只狗，<strong>分类通常是建立在回归之上</strong>，分类的最后一层通常要使用softmax函数进行判断其所属类别。分类并没有逼近的概念，最终正确结果只有一个，错误的就是错误的，不会有相近的概念。最常见的分类方法是逻辑回归，或者叫逻辑分类。</p>
<h2 id="分类和回归的区别" tabindex="-1"><a class="header-anchor" href="#分类和回归的区别" aria-hidden="true">#</a> 分类和回归的区别</h2>
<p>一句话概括：输出是离散还是连续，离散即为分类，连续即为回归。</p>
<hr>
<blockquote>
<p>若我们欲预测的是离散值，例如&quot;好瓜&quot;、&quot;坏瓜&quot;，此类学习任务称为 &quot;分类&quot;。</p>
<p>若欲预测的是连续值，例如西瓜的成熟度0.95 ,0.37,此类学习任务称为&quot;回归&quot;。</p>
<p>——周志华所著的《机器学习》</p>
</blockquote>
<hr>
<p>在说分类与回归的区别之前，先说下分类与回归的相同之处：都属于“监督学习（supervised learning）”，从数学的角度来说，监督学习是一个映射，它存在输入空间和输出空间，分别对应机器学习里常说的样本和标记。</p>
<p>说到这来，就可以开始说分类和回归的区别了：如果标记是离散值，则你面对的是一个分类问题，而如果标记是连续值，则你面对的是一个回归问题。</p>
<p>这就是分类问题和回归问题的区别所在，仅仅通过判断输出值是离散的还是连续的就可以确定；</p>
<p>一个简单的例子就是：</p>
<ul>
<li>通过人物照片来判断一个人是不是胖子？（这是一个<strong>分类</strong>问题：是胖子或不是胖子）</li>
<li>通过人物照片来判断一个人有多重？（这是一个<strong>回归</strong>问题：杨幂看起来是42.5Kg）</li>
</ul>
<hr>
<p>因为不能把分类标签当回归问题的输出来解决，所以分类和回归的<strong>损失函数</strong>也不一样，分类的损失函数一般用交叉熵这种，而回归的损失函数一般用类似平方误差这种。</p>
<hr>
<p>总的来说两个问题本质上都是一致的，就是模型的拟合（匹配）。 但是分类问题的y值(也称为label), 更离散化一些. 而且，同一个y值可能对应着一大批的x，这些x是具有一定范围的。</p>
<p>所以分类问题更多的是 (一定区域的一些x) 对应着 (一个y)。而回归问题的模型更倾向于(很小区域内的x，或者一般是一个x) 对应着 (一个y)。</p>
<p>分类问题与回归问题是监督学习问题，区别在于学习函数的预测输出是类别还是值。但是分类基本上都是用“回归模型”解决的，只是假设的模型不同(损失函数不一样)，因为不能把分类标签当回归问题的输出来解决。分类和回归的区别在于输出变量的类型。定量输出称为回归，或者说是连续变量预测；定性输出称为分类，或者说是离散变量预测。</p>
<h2 id="如何选择模型" tabindex="-1"><a class="header-anchor" href="#如何选择模型" aria-hidden="true">#</a> 如何选择模型</h2>
<p>下面一幅图可以告诉实际应用中我们如何选择合适的模型。</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/model-select.png" alt="model-select"></p>
<h1 id="线性回归解法思路" tabindex="-1"><a class="header-anchor" href="#线性回归解法思路" aria-hidden="true">#</a> 线性回归解法思路</h1>
<p>回归分析常用于分析两个变量X和Y 之间的关系。 比如<code v-pre>X＝房子大小</code>和<code v-pre>Y＝房价</code>之间的关系，<code v-pre>X=(公园人流量，公园门票票价)</code>与<code v-pre>Y=(公园收入)</code>之间的关系等等。</p>
<p>那么你的数据点在图上可以这么看：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction.png" alt="regression-house-price-prediction"></p>
<h2 id="选择线性模型" tabindex="-1"><a class="header-anchor" href="#选择线性模型" aria-hidden="true">#</a> 选择线性模型</h2>
<p>现在你想找到 房子大小和房价的关系， 也就是一个函数$f(x) = y$. 能够很好的表示这两个变量之间的关系。</p>
<p>于是你需要<strong>大概评估</strong>一下这个房子大小和房价大概是一个什么关系.</p>
<p>是<strong>线性</strong>的关系吗，还是<strong>非线性</strong>的关系？</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-2.png" alt="regression-house-price-prediction-2"></p>
<p>当然在这个问题里面，线性的关系更符合这两者的关系。于是我们选择一个合适的<strong>线性模型</strong>, 最常用的是
$$
f(x) = ax+b
$$
然后用这个线性的模型去<strong>匹配</strong>这些数据点。</p>
<h2 id="模型如何匹配数据-损失函数" tabindex="-1"><a class="header-anchor" href="#模型如何匹配数据-损失函数" aria-hidden="true">#</a> 模型如何匹配数据(损失函数)</h2>
<p>有了数据点和你臆想出来的线性模型，怎么进行匹配，也就是怎么用这根线<strong>最好地</strong>描述些数据点的关系？</p>
<p>需要最好地描述点，我们又需要一个关于“好”的定义。你也可以想出很多关于**“好”的定义**。下面有两个：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-3.png" alt="regression-house-price-prediction-3"></p>
<p>这两个定义都是将模型与数据点之间的距离差之和做为<strong>衡量匹配好坏的标准</strong>。 误差越小,  匹配程度越大。</p>
<p>但是总的来说，我们想要找到的模型，最后是想要使$f(x)$最大程度地与$y$相似，所以我们想要尽量地减少$f(x)$与$y$之间的差值。所以在这里用第二个图的“好的定义” 来评估这根线的匹配程度是很合理的。于是我们有了<strong>误差公式</strong>!!!!!
$$
cost(a, b)=\sum_{i=1}^{N}(ax_i+b-y_i)^2
$$
这个公式，说的是，可以通过调整不同的a和b的值，就能使误差不断变化，而当你找到这个公式的<strong>最小值</strong>时，你就能得到<strong>最好的a,b</strong>。而这对$(a,b)$就是能最好描述你数据关系的<strong>模型参数</strong>。</p>
<p>##求损失函数参数</p>
<h3 id="梯度下降法求损失函数参数" tabindex="-1"><a class="header-anchor" href="#梯度下降法求损失函数参数" aria-hidden="true">#</a> 梯度下降法求损失函数参数</h3>
<p>怎么找cost(a,b)的最小？cost(a,b)的图像其实像一个碗 一样，有一个最低点。 找这个最低点的办法就是，先随便找一个点(e.g. a=3, b = 2)， 然后沿着这个碗下降的方向找，最后就能找到碗的最低点。</p>
<p>怎么找(某一点)碗下降的方向？答案是，找那一点导数的反方向。拿参数a举个例子，a与cost关系如下图：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-4.png" alt="regression-house-price-prediction-4"></p>
<p>只要将任意一个a，沿着使cost<strong>导数的反方向</strong>慢慢移动，那么最终有一天a值就会到达使cost最小的那一点。于是你可以不断地移动a、b向着最低点前进。</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-5.gif" alt="regression-house-price-prediction-5"></p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-6.gif" alt="regression-house-price-prediction-6"></p>
<p>当然在进行移动的时候也需要考虑，每次移动的速度，也就是α的值，这个值也叫做&quot;<strong>学习率</strong>&quot;。学习率的<strong>增大</strong>可以加速参数逼近最优的情况，但是如果在快要到达函数的底端的时候，需要减小学习率，以免出现cost不断增大或者不停摆动的情况(如下图, J(a,b)就是cost(a,b))。 所以说，当出现以上两种情况时候，我们应该果断<strong>选取一个较小的学习率</strong>，以保证cost能减少到一个稳定的值(我们称为收敛converge).</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-7.jpg" alt="regression-house-price-prediction-7"></p>
<h3 id="最小二乘法求损失函数参数" tabindex="-1"><a class="header-anchor" href="#最小二乘法求损失函数参数" aria-hidden="true">#</a> 最小二乘法求损失函数参数</h3>
<p>这时候，有的人会问，为什么要让$a$不停地往下跑呢？而且还需要设定学习率，多麻烦，直接让找导数为0点(最小极值)，不就可以了吗？嗯。。。也可以。。。但是各有优缺。</p>
<p>与梯度下降法(gradient descent)平行的一种方法为正规方程(Normal Equation，也即最小二乘法)，它采用线性代数中非迭代的方法，见下图：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-8.jpg" alt="regression-house-price-prediction-8"></p>
<p>我们想要找到使cost function最小的θ，就是找到使得导数取0时的参数θ：
该参数可由图中红框公式获得：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-9.jpg" alt="regression-house-price-prediction-9"></p>
<p>具体来说：X是m×(n+1)的矩阵，y是m×1的矩阵。</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-10.jpg" alt="regression-house-price-prediction-10"></p>
<p>上图中为什么x要加上一列1呢？因为经常设置$X^{(i)}_0=1$；</p>
<p>我们已知，对于有m个样本，每个拥有n个feature的一个训练集，有X是m×(n+1)的矩阵，$X^TX$是(n+1)×(n+1)的方阵，那么对于参数θ的计算就出现了一个问题，如果$|X^TX|=0$,即$X^TX$不可求逆矩阵怎么办？这时可以进行冗余feature的删除（m&lt;=n的情况，feature过多）：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-12.jpg" alt="regression-house-price-prediction-12"></p>
<h3 id="梯度下降法和最小二乘法的区别" tabindex="-1"><a class="header-anchor" href="#梯度下降法和最小二乘法的区别" aria-hidden="true">#</a> 梯度下降法和最小二乘法的区别</h3>
<p>下面比较一下Gradient Descent与Normal Equation求损失函数的区别：</p>
<p><img src="@source/docs/machine-learning/linear-model/linear-regression/pic/regression-house-price-prediction-11.jpg" alt="regression-house-price-prediction-11"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总结一下，回归问题的解决方法是：</p>
<ol>
<li>假定一个模型；</li>
<li>定义什么叫做最好的匹配(构造误差函数)；</li>
<li>用这个模型去匹配<strong>已有的数据点</strong>(训练集)。</li>
</ol>
<p>需要进一步讨论的问题：</p>
<ul>
<li>如果参数(a,b)更多了该怎么办?</li>
<li>如果最合适的匹配模型并不是线性的怎么办？——选用一个非线性模型，比如$y = ax^2 + bx + c$。</li>
<li>如果误差(cost)与a,b（模型参数）的关系不是像碗一样的，而是凹凸不平的该怎么办? ——这时候你就得注意你得到的cost的最低点(局部的最低)可能因初始点的不同而不同。而这些最低点你需要进行比较，以确定是不是全局的最低。</li>
</ul>
<p>这篇文章大概的意图是能想让大家了解， 机器学习中最基本的两类问题（线性回归和分类）中的之一：线性回归。 能让大家有个清晰的思想，对于这两类问题都有以下几个步骤,</p>
<ul>
<li>如何选取一个 <strong>合理的模型</strong>(线性的，or 非线性的(e.g. 阶跃函数， 高斯函数))</li>
<li>制造一个&quot;美好&quot;的 **误差函数 **(可以评估拟合程度，而且还是convex函数)</li>
<li>采取一切可能的<strong>技术</strong>(e.g. 导数下降法，解极值方程法) 求出最好的模型参数</li>
</ul>
<p><strong>谈谈回归和分类的区别：</strong></p>
<p>总的来说两个问题本质上都是一致的，就是模型的拟合（匹配）。 但是分类问题的y值(也称为label), 更离散化一些. 而且，同一个y值可能对应着一大批的x，这些x是具有一定范围的。</p>
<p>所以分类问题更多的是 (一定区域的一些x) 对应着 (一个y)。而回归问题的模型更倾向于(很小区域内的x，或者一般是一个x) 对应着 (一个y)。</p>
<p>分类问题与回归问题是监督学习问题，区别在于学习函数的预测输出是类别还是值。但是分类基本上都是用“回归模型”解决的，只是假设的模型不同(损失函数不一样)，因为不能把分类标签当回归问题的输出来解决。分类和回归的区别在于输出变量的类型。定量输出称为回归，或者说是连续变量预测；定性输出称为分类，或者说是离散变量预测。</p>
<p>在把一个问题建模的时候一定要考虑好需求，让你的模型更好的与现实问题相对应。</p>
<h1 id="ridge回归-岭回归" tabindex="-1"><a class="header-anchor" href="#ridge回归-岭回归" aria-hidden="true">#</a> Ridge回归（岭回归）</h1>
<p>岭回归本质上是针对线性回归问题引入了L2范数正则，通过缩减回归系数避免过拟合问题，最先用来处理特征数多于样本数的情况(高维小样本问题)，现在也用于在估计中加入偏差，从而得到更好的估计，加了正则化后的代价函数如下：
$$
\hat{\beta}^{Ridge}=\text{arg }\mathop{min}<em>{\beta}\left{\sum</em>{i=1}^n(y_i-\beta_0-\sum_{j=1}^dx_{ij}\beta_j)^2+\lambda\sum_{j=1}^d\beta_j^2\right}
$$
其中，$\hat\beta$表示估计的回归系数，n表示样本个数，d表示回归系数个数，$y_i$表示第i个样本实际输出值，$\beta_j$表示第j个回归系数，λ为正则化参数。当λ=0，表示不添加正则，则很容易导致原来代价函数为0，预测值与实际值完全贴合即出现了所谓的过你和问题，当λ过大，会导致$\beta_j$系数变小，但不会为0，减小了模型复杂度，原代价函数值较大，出现欠拟合。在实际开发中，通常使用交叉验证集多次循环迭代确定最佳λ值。
$$
\hat{\beta}^{Ridge}=\left(X^Tx+\lambda I\right)^{-1}X^Ty
$$
带正则化的代价函数采用最小二乘法或者正规方程可以得到上述回归结果，可以发现：经过L2范数罚项后，不仅仅压缩了系数，而且可使得原先不可能逆的矩阵一定可逆(XTX+λI一定可逆，这叫伪逆)，这也是L2正则的好处之一。</p>
<h1 id="lasso回归" tabindex="-1"><a class="header-anchor" href="#lasso回归" aria-hidden="true">#</a> Lasso回归</h1>
<p><a href="https://www.zhihu.com/question/275196908/answer/378776895" target="_blank" rel="noopener noreferrer">历史的角度来看，Robert Tibshirani的Lasso到底是不是革命性的创新？<ExternalLinkIcon/></a></p>
<p>Lasso回归本质上是针对线性回归问题引入了L1范数正则，通过缩减回归系数避免过拟合问题，其不同于L2范数，其可以将某些系数缩减为0即所谓的具备稀疏性(稀疏性的好处是简化计算、容易理解模型、减少存储空间、不容易出现过拟合等等)，加了正则化后的代价函数如下：
$$
\hat{\beta}^{lasso}=\text{arg }\mathop{min}<em>{\beta}\left{\sum</em>{i=1}^n(y_i-\beta_0-\sum_{j=1}^dx_{ij}\beta_j)^2+\lambda\sum_{j=1}^d|\beta_j|\right}
$$
其中，参数函数和岭回归中相同。L1范数罚有一个问题：由于|x|函数在0处不可导，故而直接使用最小二乘法、梯度下降法等方法均失效，但是由于其为第一类间断点中的可去间断点，可以通过补充该点的定义解决，通常，对于线性回归中的lasso回归可以采用近似的前向逐步回归替代。</p>
<h1 id="linear-least-squares-lasso-ridge-regression有何本质区别" tabindex="-1"><a class="header-anchor" href="#linear-least-squares-lasso-ridge-regression有何本质区别" aria-hidden="true">#</a> Linear least squares, Lasso,ridge regression有何本质区别？</h1>
<p>https://www.zhihu.com/question/38121173/answer/403986652</p>
<p>https://www.zhihu.com/question/38121173/answer/75158776</p>
<p>https://www.zhihu.com/question/38121173/answer/166238142</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/21329754" target="_blank" rel="noopener noreferrer">分类与回归区别是什么？<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;分类与回归的概念和区别&quot;这一节开头少部分参考了此知乎问答。</p>
<ul>
<li><a href="http://blog.csdn.net/ppn029012/article/details/8775597" target="_blank" rel="noopener noreferrer">机器学习 --- 1. 线性回归与分类, 解决与区别<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;分类与回归的概念和区别&quot;这一节主要参考这个资料。</p>
<ul>
<li><a href="http://blog.csdn.net/abcjennifer/article/details/7700772" target="_blank" rel="noopener noreferrer">Stanford机器学习---第二讲. 多变量线性回归 Linear Regression with multiple variable<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;最小二乘法求损失函数参数&quot;这一小节参考了此资料。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/35432128" target="_blank" rel="noopener noreferrer">史上最全面的正则化技术总结与分析--part2<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;Ridge回归（岭回归）&quot;和“Lasso回归”这两个小节参考了此资料。</p>
</div></template>


