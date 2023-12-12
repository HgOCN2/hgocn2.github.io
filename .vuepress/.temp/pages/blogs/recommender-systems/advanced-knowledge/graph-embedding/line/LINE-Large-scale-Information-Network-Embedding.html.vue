<template><div><h1 id="line-large-scale-information-network-embedding" tabindex="-1"><a class="header-anchor" href="#line-large-scale-information-network-embedding" aria-hidden="true">#</a> LINE: Large-scale Information Network Embedding</h1>
<ul>
<li><RouterLink to="/blogs/recommender-systems/advanced-knowledge/graph-embedding/graph-embedding.html">返回上层目录</RouterLink></li>
<li><a href="#%E8%AE%BA%E6%96%87%E8%A7%A3%E8%AF%BB">论文解读</a>
<ul>
<li><a href="#%E4%BB%8B%E7%BB%8D">介绍</a></li>
<li><a href="#%E5%AE%9A%E4%B9%89">定义</a></li>
<li><a href="#%E4%B8%80%E9%98%B6%E8%BF%91%E4%BC%BC">一阶近似</a></li>
<li><a href="#%E4%BA%8C%E9%98%B6%E8%BF%91%E4%BC%BC">二阶近似</a></li>
<li><a href="#%E7%BB%93%E5%90%88%E4%B8%80%E9%98%B6%E8%BF%91%E4%BC%BC%E5%92%8C%E4%BA%8C%E9%98%B6%E8%BF%91%E4%BC%BC">结合一阶近似和二阶近似</a></li>
<li><a href="#%E8%B4%9F%E9%87%87%E6%A0%B7">负采样</a></li>
<li><a href="#%E8%BE%B9%E9%87%87%E6%A0%B7">边采样</a></li>
</ul>
</li>
<li><a href="#%E6%BA%90%E7%A0%81%E8%AF%B4%E6%98%8E%E4%B8%8E%E8%BF%90%E8%A1%8C">源码说明与运行</a>
<ul>
<li><a href="#%E4%BB%A3%E7%A0%81%E8%AF%B4%E6%98%8E">代码说明</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%9B%86">数据集</a></li>
<li><a href="#%E8%BF%90%E8%A1%8C%E7%A4%BA%E4%BE%8B">运行示例</a></li>
<li><a href="#%E7%BC%96%E8%AF%91LINE%E6%BA%90%E7%A0%81">编译LINE源码</a>
<ul>
<li><a href="#%E7%BC%96%E8%AF%91%E6%97%B6%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98">编译时遇到的问题</a></li>
<li><a href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98">运行时遇到的问题</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90">源码解析</a>
<ul>
<li><a href="#train_youtube.sh">train_youtube.sh</a></li>
<li><a href="#reconstruct.cpp">reconstruct.cpp</a></li>
<li><a href="#line.cpp">line.cpp</a></li>
<li><a href="#%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6O%5B1%5D%E7%9A%84Alias%E7%A6%BB%E6%95%A3%E9%87%87%E6%A0%B7%E7%AE%97%E6%B3%95">时间复杂度O[1]的Alias离散采样算法</a></li>
</ul>
</li>
<li><a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E5%AE%9E%E7%8E%B0%EF%BC%88%E8%85%BE%E8%AE%AFAngel%EF%BC%89">分布式实现（腾讯Angel）</a>
<ul>
<li><a href="#%E8%BF%90%E8%A1%8C%E7%A4%BA%E4%BE%8B">运行示例</a></li>
<li><a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">分布式实现原理</a></li>
</ul>
</li>
<li><a href="#%E6%8E%A8%E8%8D%90%E5%9C%BA%E6%99%AF%E4%B8%AD%E7%9A%84%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8">推荐场景中的实际应用</a></li>
</ul>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/paper.png" alt="paper"></p>
<p>论文地址：https://arxiv.org/pdf/1503.03578.pdf</p>
<p>代码地址：https://github.com/tangjianpku/LINE</p>
<h1 id="论文解读" tabindex="-1"><a class="header-anchor" href="#论文解读" aria-hidden="true">#</a> 论文解读</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>本篇文章提出的算法定义了两种相似度：一阶相似度和二阶相似度，一阶相似度为直接相连的节点之间的相似，二阶相似度为存不直接相连单存在相同邻近节点的相似。还提出来一个针对带权图的边采样算法，来优化权重大小差异大，造成梯度优化的时候梯度爆炸的问题。</p>
<p>该方法相比于deepwalk来说，deepwalk本身是针对无权重的图，而且根据其优化目标可以大致认为是针对二阶相似度的优化，但是其使用random walk可以认为是一种DFS的搜索遍历，而针对二阶相似度来说，BFS的搜索遍历更符合逻辑。而LINE同时考虑来一阶和二阶相似度，一阶相似度可以认为是局部相似度，直接关联。二阶相似度可以作为一阶相似度的补充，来弥补一阶相似度的稀疏性。</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/information-network.png" alt="information-network"></p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>**信息网络（Information Network）**信息网络被定义为G(V, E),其中V是节点集合，E表示边的集合。其中每条边定义一个有序对：e=(u, v)，并分配一个权重值$w_{uv}$用于表示点u和点v之间联系的强弱。如果为无向图的话，$(u, v) = (v, u),\ w_{uv} = w_{vu}$。</p>
<p>**一阶相似性（First-order Proximity）**一阶相似性定义为两个节点之间的局部成对相似性。对于由边(u, v)链接的节点对，其链接权重$w_{uv}$用于表示节点u和节点v之间的一阶相似性，如果两个节点之间没有边相连，那么他们的一阶相似性为0。</p>
<p>一阶相似性固然可以直接表示节点之间的相似性，但是在真实环境下的信息网络往往存在大量的信息缺失，而许多一阶相似度为0的节点，他们本质上相似度也很高。自然能想到的是那些拥有相似邻近节点的节点可能会存在一定的相似性。比如在真实环境中，拥有相同朋友的两个人也很可能认识，经常在同一个词的集合中出现的两个词也很有可能很相似。</p>
<p>举例：上图中6和7就是一阶相似，因为6和7直接相连。</p>
<p><strong>二阶相似性(Second-order Proximity)</strong> 两个节点的二阶相似性是他们的邻近网络结构的相似性。如
$$
p_u=(w_{u,1},...,w_{u,|V|})
$$
表示u对全部节点的一阶相似性。那么节点u和节点v的二阶相似性由$p_u$和$p_v$决定。如果没有节点同时链接u和v，那么u和v的二阶相似度为0。</p>
<p>举例：上图中的5和6就是二阶相似，因为它们虽然没有直接相连，但是它们连接的其他节点中有重合（1, 2, 3, 4）。</p>
<h2 id="一阶近似" tabindex="-1"><a class="header-anchor" href="#一阶近似" aria-hidden="true">#</a> 一阶近似</h2>
<p>定义两个点（点$v_i$和$v_j$）之间的联合概率：
$$
p_1(v_i,v_j)=\frac{1}{1+\text{exp}\left(-\vec{u}_i^T\cdot \vec{u}_j^T\right)}
$$
其中，$u_i$和$u_j$属于$R^d$是节点i和j的低维embedding向量，直接利用sigmoid来度量两个节点的相似度。</p>
<p>而对应的需要拟合的经验概率为
$$
\hat{p}<em>1=\frac{w</em>{ij}}{W}
$$
，即为全部权重的归一化后的占比，这里
$$
W=\sum_{(i,j)\in E}w_{i,j}
$$
，所以对应的优化目标为
$$
O_1=d(\hat{p}<em>1(.,.),p_1(.,.))
$$
这就是我们的目标函数，即损失函数，我们要最小化该目标，让预定义的两个点之间的联合概率尽量靠近经验概率。d(.,.)用于度量两个分布之间的距离，作者选择KL散度（即交叉熵）来作为距离度量。那么使用KL散度并忽略常数项后，可以得到：
$$
O_1=-\sum</em>{(i,j)\in Edge}w_{ij}\text{log}\ p_1(v_i,v_j)
$$
这就是最终的优化目标，这里需要注意，一阶相似度只能用于无向图。</p>
<h2 id="二阶近似" tabindex="-1"><a class="header-anchor" href="#二阶近似" aria-hidden="true">#</a> 二阶近似</h2>
<p>二阶相似度同时适用于有向图和无向图。</p>
<p>二阶的含义可以理解为每个节点除了其本身外还代表了其所对应的上下文，如果节点的上下文分布接近那么可以认为这两个节点相似。</p>
<p>以有向边为例，有向边(i, j)定义节点$v_i$的上下文（邻接）节点$v_j$的概率为：
$$
p_2(v_j|v_i)=\frac{\text{exp}(\vec{u}<em>j{'}^T\cdot \vec{u}<em>i)}{\sum</em>{k=1}^{|V|}\text{exp}(\vec{u}<em>k{'}^T\cdot \vec{u}<em>i)}
$$
其中$|V|$是<strong>所有context节点</strong>的数量，而不是和i相连的节点的数量。其实和一阶的思路类似，这里用softmax对邻接节点做了一下归一化。优化目标也是去最小化分布之间的距离：
$$
O_2=\sum</em>{i\in V}\lambda_id\left(\hat{p}<em>2(\cdot|v_i),\ p_2(\cdot|v_i)\right)
$$
这里d(. , .)用于度量两个分布之间的差距。因为考虑到图中的节点重要性可能不一样，所以设置了参数$\lambda_i$来对节点进行加权。可以通过节点的出入度或者用pagerank等算法来估计出来。而这里的经验分布则被定义为：
$$
\hat{p}<em>2(v_i|v_j)=\frac{w</em>{ij}}{d_i}
$$
其中，$w</em>{ij}$是边(i, j)的权重，$d_i$是节点i的出度，即
$$
d_i=\sum</em>{k\in N(i)}w</em>{ik}
$$
而N(i)就是节点i的出度节点的集合。同样采用KL散度作为距离度量，可以得到如下优化目标：
$$
O_2=-\sum_{(i,j)=Edge}w_{ij}\text{log}\ p_2(v_j|v_i)
$$
有人很奇怪，既然这里的V是所有context节点，那和i不相连的节点j的$w_{ij}$怎么算呢？那就是0啊，就这么简单。只有把V当作所有context节点，而不仅仅是和i相连的节点，之后才能说的通文章后面的负采样那里是全局随机负采样。</p>
<p><strong>注意：</strong></p>
<p>这里有个坑，非常容易让人误解。就是二阶边(i, j)其实根本不是上图中的5和6，同一个图里，基本不会出现同时存在二阶和一阶关系的图，一般只能二选一，具体原因见下一小节。二阶边(i, j)应该就是(1, 5)、(1, 6)这种边的关系，因为1的自身向量和5的上下文向量接近。<strong>而为什么我们说5和6是二阶关系呢？因为是按照这种算法，算出来和5相似的就是6，所以才说5和6是二阶关系，即5和6是二阶相似，是计算的结果的体现，不是说训练数据就有(5, 6)这条边！</strong>。</p>
<h2 id="结合一阶近似和二阶近似" tabindex="-1"><a class="header-anchor" href="#结合一阶近似和二阶近似" aria-hidden="true">#</a> 结合一阶近似和二阶近似</h2>
<p>文章提到暂时还不能将一阶和二阶相似度进行联合训练，只能将他们单独训练出embedding，然后在做concatenate。</p>
<p>但是一般来说，从节点和边的性质上来说，能用一阶就不能用二阶，反之亦然。比如github上的相互关注，就是典型的一阶关系，因为彼此都是好基友。但是比如抖音上的屌丝男关注了女神，那就绝对不能用一阶关系，而应该是二阶关系。</p>
<h2 id="负采样" tabindex="-1"><a class="header-anchor" href="#负采样" aria-hidden="true">#</a> 负采样</h2>
<p>这个算是一个常见的技巧，在做softmax的时候，分母的计算要遍历所有节点，这部分其实很费时，所以在分母的求和数量较大的时候，经常会使用负采样技术。</p>
<h2 id="边采样" tabindex="-1"><a class="header-anchor" href="#边采样" aria-hidden="true">#</a> 边采样</h2>
<p>也是训练的一个优化，因为优化函数中由一个w权重，在实际的数据集中，因为链接的大小差异会很大，这样的话会在梯度下降训练的过程中很难去选择好一个学习率。直观的想法是把权重都变成1，然后把w权重的样本复制w份，但是这样会占用更大的内存。第二个方法是按w权重占比做采样，可以减少内存开销。</p>
<p>这篇文章就是按照第二种方法，用一种复杂度为O(1)的方法：alias采样法，该方法在本文后面有详细描述。</p>
<h1 id="源码说明与运行" tabindex="-1"><a class="header-anchor" href="#源码说明与运行" aria-hidden="true">#</a> 源码说明与运行</h1>
<h2 id="代码说明" tabindex="-1"><a class="header-anchor" href="#代码说明" aria-hidden="true">#</a> 代码说明</h2>
<p>在<a href="https://github.com/tangjianpku/LINE" target="_blank" rel="noopener noreferrer">https://github.com/tangjianpku/LINE<ExternalLinkIcon/></a>下载代码。下载下来的代码说明：</p>
<p><strong>LINE：大规模的信息网络嵌入</strong></p>
<p><strong>介绍</strong></p>
<p>这是为了嵌入非常大规模的信息网络而开发的LINE工具箱。它适用于各种网络，包括有向，无向，无权或加权边。 LINE模型非常高效，能够在几个小时内在单台机器上嵌入数百万个顶点和数十亿个边界的网络。</p>
<p>联系人：唐建，tangjianpku@gmail.com</p>
<p>项目页面：https://sites.google.com/site/pkujiantang/line</p>
<p>当作者在微软研究院工作时，这项工作就完成了</p>
<p><strong>用法</strong></p>
<p>我们提供Windows和LINUX版本。为了编译源代码，需要一些外部包，用于为LINE模型中的边缘采样算法生成随机数。对于Windows版本，使用BOOST软件包，可以从http://www.boost.org/下载;对于LINUX，使用GSL包，可以从http://www.gnu.org/software/gsl/下载。</p>
<p><strong>网络输入</strong></p>
<p>网络的输入由网络中的边组成。输入文件的每一行代表网络中的一个DIRECTED边缘，指定为格式“起点-终点-权重”（可以用空格或制表符分隔）。对于每个无向边，用户必须使用两个DIRECTED边来表示它。以下是一个词共现网络的输入示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>good the <span class="token number">3</span>
the good <span class="token number">3</span>
good bad <span class="token number">1</span>
bad good <span class="token number">1</span>
bad of <span class="token number">4</span>
of bad <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./line <span class="token parameter variable">-train</span> network_file <span class="token parameter variable">-output</span> embedding_file <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">200</span> <span class="token parameter variable">-order</span> <span class="token number">2</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">100</span> <span class="token parameter variable">-rho</span> <span class="token number">0.025</span> <span class="token parameter variable">-threads</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>train，网络的输入文件;</li>
<li>output，嵌入的输出文件;</li>
<li>binary，是否以二进制模式保存输出文件;默认是0（关）;</li>
<li>size，嵌入的维度;默认是100;</li>
<li>order，使用的相似度; 1为一阶，2为二阶;默认是2;</li>
<li>negative，负采样中负采样样本的数目；默认是5;</li>
<li>samples，训练样本总数（*百万）;</li>
<li>rho，学习率的起始值;默认是0.025;</li>
<li>threads，使用的线程总数;默认是1。</li>
</ul>
<p><strong>文件夹中的文件</strong></p>
<p>reconstruct.cpp：用于将稀疏网络重建为密集网络的代码</p>
<p>line.cpp：LINE的源代码;</p>
<p>normalize.cpp：用于归一化嵌入的代码（l2归一化）;</p>
<p>concatenate.cpp：用于连接一阶和二阶嵌入的代码;</p>
<p><strong>示例</strong></p>
<p>运行Youtube数据集（可在http://socialnetworks.mpi-sws.mpg.de/data/youtube-links.txt.gz处获得）的示例在train_youtube.bat / train_youtube .sh文件中提供</p>
<h2 id="数据集" tabindex="-1"><a class="header-anchor" href="#数据集" aria-hidden="true">#</a> 数据集</h2>
<p>Youtube数据集：网络中的节点代表用户，有联系的用户之间有边。YouTube网络是一个无向、无权的网络。</p>
<p>数据集从<a href="http://socialnetworks.mpi-sws.mpg.de/data/youtube-links.txt.gz" target="_blank" rel="noopener noreferrer">http://socialnetworks.mpi-sws.mpg.de/data/youtube-links.txt.gz<ExternalLinkIcon/></a>下载。下载的数据集文件中，每行有两个数字，中间以制表符隔开，代表网络中的一条边，两个数字分别代表边的起点和终点。因为是无权图，因此不需要权重的值。因为是无向图，因此每条边在文件中出现两次，如(1, 2)和(2, 1)，代表同一条边。</p>
<p>数据集中共包括4945382条边（有向边，因为无向图中每条边被看做两条有向边，所以Youtube网络中有2472691条边）和至少937968个点（文件中节点的名字并不是连续的，有些节点的度为0，在数据集文件中没有出现）。</p>
<h2 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例" aria-hidden="true">#</a> 运行示例</h2>
<p>在Youtube数据集上运行算法的示例在train_youtube.bat / train_youtube.sh文件中提供。算法运行分为五步：</p>
<ul>
<li>
<p>将单向的关系变为双向的关系，因为youtobe好有关系是无向图</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python3 preprocess_youtube.py youtube-links.txt net_youtube.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>通过reconstruct程序对原网络进行重建（1h）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./reconstruct <span class="token parameter variable">-train</span> net_youtube.txt <span class="token parameter variable">-output</span> net_youtube_dense.txt <span class="token parameter variable">-depth</span> <span class="token number">2</span> <span class="token parameter variable">-threshold</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>两次运行line，分别得到一阶相似度和二阶相似度下的embedding结果</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_1st_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">1</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">2</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>利用normalize程序将实验结果进行归一化</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./normalize <span class="token parameter variable">-input</span> vec_1st_wo_norm.txt <span class="token parameter variable">-output</span> vec_1st.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
./normalize <span class="token parameter variable">-input</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-output</span> vec_2nd.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用concatenate程序连接一阶嵌入和二阶嵌入的结果</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./concatenate <span class="token parameter variable">-input1</span> vec_1st.txt <span class="token parameter variable">-input2</span> vec_2nd.txt <span class="token parameter variable">-output</span> vec_all.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="编译line源码" tabindex="-1"><a class="header-anchor" href="#编译line源码" aria-hidden="true">#</a> 编译LINE源码</h2>
<h3 id="编译时遇到的问题" tabindex="-1"><a class="header-anchor" href="#编译时遇到的问题" aria-hidden="true">#</a> 编译时遇到的问题</h3>
<p>编译LINE源码时，会遇到一些问题：</p>
<p><a href="https://blog.csdn.net/waleking/article/details/8265008/" target="_blank" rel="noopener noreferrer">linux下GSL安装<ExternalLinkIcon/></a></p>
<p>注意，可能会报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>line.cpp:<span class="token punctuation">(</span>.text+0x30b8<span class="token punctuation">)</span>: undefined reference to `gsl_rng_uniform'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候，需要在编译选项</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token parameter variable">-lm</span> <span class="token parameter variable">-pthread</span> <span class="token parameter variable">-Ofast</span> <span class="token parameter variable">-march</span><span class="token operator">=</span>native <span class="token parameter variable">-Wall</span> -funroll-loops -ffast-math -Wno-unused-result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>中加入</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token parameter variable">-lgsl</span> <span class="token parameter variable">-lgslcblas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就好啦。</p>
<p>具体参见<a href="https://blog.csdn.net/waleking/article/details/8265008/" target="_blank" rel="noopener noreferrer">linux下GSL安装<ExternalLinkIcon/></a>、<a href="https://www.daniweb.com/programming/software-development/threads/289812/can-t-link-gsl-properly" target="_blank" rel="noopener noreferrer">can't link GSL properly?<ExternalLinkIcon/></a>。</p>
<h3 id="运行时遇到的问题" tabindex="-1"><a class="header-anchor" href="#运行时遇到的问题" aria-hidden="true">#</a> 运行时遇到的问题</h3>
<h4 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>/bin/reconstruct <span class="token parameter variable">-train</span> <span class="token punctuation">..</span>/data/net_youtube.txt <span class="token parameter variable">-output</span> <span class="token punctuation">..</span>/data/net_youtube_dense.txt <span class="token parameter variable">-depth</span> <span class="token number">2</span> <span class="token parameter variable">-threshold</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会出现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>../bin/reconstruct: error while loading shared libraries: libgsl.so.23: cannot open shared object file: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决办法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export LD_LIBRARY_PATH=/usr/local/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体参见<a href="https://stackoverflow.com/questions/45665878/a-out-error-while-loading-shared-libraries-libgsl-so-23-cannot-open-shared" target="_blank" rel="noopener noreferrer">error while loading shared libraries: libgsl.so.23: cannot open shared object file: No such file or directory<ExternalLinkIcon/></a>。</p>
<h4 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2</h4>
<p>运行代码时可能还会遇到这个问题:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>/bin/line: /lib64/libm.so.6: version `GLIBC_2.15' not found <span class="token punctuation">(</span>required by <span class="token punctuation">..</span>/bin/line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基本是因为你在其他该版本系统上编译好了，又在低版本系统上直接运行了。只需要在低版本上重新make编译一下就好。</p>
<h2 id="源码中存在的bug" tabindex="-1"><a class="header-anchor" href="#源码中存在的bug" aria-hidden="true">#</a> 源码中存在的bug</h2>
<p>源码中在计算输出的时候，数组的index是int型，如果数据量一大，就非常容易超出int的范围21亿，则就会出错，出错类型是：segment fault，这是因为超出int型范围后，index就成了负数了，则数组就会向前检索，一旦求址到达内存中的不可访问区域，则就会报错。</p>
<p>要改正这个bug很简单，就是强制将index的数据类型改为longlong就行：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>if (is_binary) for (b = 0; b &lt; (unsigned long long)dim; b++) fwrite(&amp;emb_vertex[a * (unsigned long long)dim + b], sizeof(real), 1, fo_vertex);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="源码解析" tabindex="-1"><a class="header-anchor" href="#源码解析" aria-hidden="true">#</a> 源码解析</h1>
<p>在Youtube数据集上运行算法的示例在train_youtube.bat / train_youtube.sh文件中提供。算法运行分为五步：</p>
<ul>
<li>
<p>将单向的关系变为双向的关系，因为youtobe好有关系是无向图</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python3 preprocess_youtube.py youtube-links.txt net_youtube.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>通过reconstruct程序对原网络进行稠密化（1h）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./reconstruct <span class="token parameter variable">-train</span> net_youtube.txt <span class="token parameter variable">-output</span> net_youtube_dense.txt <span class="token parameter variable">-depth</span> <span class="token number">2</span> <span class="token parameter variable">-threshold</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>两次运行line，分别得到一阶相似度和二阶相似度下的embedding结果</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_1st_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">1</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">2</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>利用normalize程序将实验结果进行归一化</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./normalize <span class="token parameter variable">-input</span> vec_1st_wo_norm.txt <span class="token parameter variable">-output</span> vec_1st.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
./normalize <span class="token parameter variable">-input</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-output</span> vec_2nd.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用concatenate程序连接一阶嵌入和二阶嵌入的结果</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./concatenate <span class="token parameter variable">-input1</span> vec_1st.txt <span class="token parameter variable">-input2</span> vec_2nd.txt <span class="token parameter variable">-output</span> vec_all.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>下面我们依次分析这些源码：</p>
<h2 id="train-youtube-sh" tabindex="-1"><a class="header-anchor" href="#train-youtube-sh" aria-hidden="true">#</a> train_youtube.sh</h2>
<p>这个代码很简单，就是上述的流程。建议自己先把youtube-links.txt数据下下来，把那段下载的代码屏蔽掉，这样快一些。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

g++ <span class="token parameter variable">-lm</span> <span class="token parameter variable">-pthread</span> <span class="token parameter variable">-Ofast</span> <span class="token parameter variable">-march</span><span class="token operator">=</span>native <span class="token parameter variable">-Wall</span> -funroll-loops -ffast-math -Wno-unused-result line.cpp <span class="token parameter variable">-o</span> line <span class="token parameter variable">-lgsl</span> <span class="token parameter variable">-lm</span> <span class="token parameter variable">-lgslcblas</span>
g++ <span class="token parameter variable">-lm</span> <span class="token parameter variable">-pthread</span> <span class="token parameter variable">-Ofast</span> <span class="token parameter variable">-march</span><span class="token operator">=</span>native <span class="token parameter variable">-Wall</span> -funroll-loops -ffast-math -Wno-unused-result reconstruct.cpp <span class="token parameter variable">-o</span> reconstruct
g++ <span class="token parameter variable">-lm</span> <span class="token parameter variable">-pthread</span> <span class="token parameter variable">-Ofast</span> <span class="token parameter variable">-march</span><span class="token operator">=</span>native <span class="token parameter variable">-Wall</span> -funroll-loops -ffast-math -Wno-unused-result normalize.cpp <span class="token parameter variable">-o</span> normalize
g++ <span class="token parameter variable">-lm</span> <span class="token parameter variable">-pthread</span> <span class="token parameter variable">-Ofast</span> <span class="token parameter variable">-march</span><span class="token operator">=</span>native <span class="token parameter variable">-Wall</span> -funroll-loops -ffast-math -Wno-unused-result concatenate.cpp <span class="token parameter variable">-o</span> concatenate

<span class="token function">wget</span> http://socialnetworks.mpi-sws.mpg.de/data/youtube-links.txt.gz
gunzip youtube-links.txt.gz

python3 preprocess_youtube.py youtube-links.txt net_youtube.txt
./reconstruct <span class="token parameter variable">-train</span> net_youtube.txt <span class="token parameter variable">-output</span> net_youtube_dense.txt <span class="token parameter variable">-depth</span> <span class="token number">2</span> <span class="token parameter variable">-threshold</span> <span class="token number">1000</span>
./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_1st_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">1</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
./line <span class="token parameter variable">-train</span> net_youtube_dense.txt <span class="token parameter variable">-output</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> <span class="token number">128</span> <span class="token parameter variable">-order</span> <span class="token number">2</span> <span class="token parameter variable">-negative</span> <span class="token number">5</span> <span class="token parameter variable">-samples</span> <span class="token number">10000</span> <span class="token parameter variable">-threads</span> <span class="token number">40</span>
./normalize <span class="token parameter variable">-input</span> vec_1st_wo_norm.txt <span class="token parameter variable">-output</span> vec_1st.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
./normalize <span class="token parameter variable">-input</span> vec_2nd_wo_norm.txt <span class="token parameter variable">-output</span> vec_2nd.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>
./concatenate <span class="token parameter variable">-input1</span> vec_1st.txt <span class="token parameter variable">-input2</span> vec_2nd.txt <span class="token parameter variable">-output</span> vec_all.txt <span class="token parameter variable">-binary</span> <span class="token number">1</span>

<span class="token builtin class-name">cd</span> evaluate
./run.sh <span class="token punctuation">..</span>/vec_all.txt
python3 score.py result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reconstruct-cpp" tabindex="-1"><a class="header-anchor" href="#reconstruct-cpp" aria-hidden="true">#</a> reconstruct.cpp</h2>
<p>这个代码的作用是<strong>稠密化一阶节点</strong>，对于少于指定的边数（比如1000）的节点，将其二阶节点采样，作为一阶节点来使用。</p>
<p>但是注意，用二阶节点来稠密一阶节点，只能针对无向图，而针对有向图，如果要稠密化一阶节点，就要取其三阶节点，但是因为多了一层，导致准确度会下降。所以，究竟是稠密化节点带来的好处多，还是多了一层导致准确性的下降带来的坏处多，需要具体实验判定。</p>
<p>核心代码如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>for (sv = 0; sv != num_vertices; sv++)
{
    ///xxx
    sum = vertex[sv].sum_weight;
    node.push(sv);
    depth.push(0);
    weight.push(sum);
    while (!node.empty())
    {
        cv = node.front();
        cd = depth.front();
        cw = weight.front();

        node.pop();
        depth.pop();
        weight.pop();

        if (cd != 0) vid2weight[cv] += cw;// 一阶+二阶

        if (cd &lt; max_depth)
        {
            len = neighbor[cv].size();// 该节点的出度
            sum = vertex[cv].sum_weight;// 该节点的出度权值之和

            for (int i = 0; i != len; i++)
            {
                node.push(neighbor[cv][i].vid);// 该节点的所有出度的链接节点
                depth.push(cd + 1);// 阶层加1
                weight.push(cw * neighbor[cv][i].weight / sum);//
            }
        }
    }
    //xxx
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##line.cpp</p>
<p>这个程序和word2vec的风格很像，估计就是从word2vec改的。</p>
<p>首先在main函数这，特别说明一个参数：<code v-pre>total_samples</code>，这个参数是总的训练次数，LINE没有训练轮数的概念，因为LINE是随机按照权重选择边进行训练的。</p>
<p>我们直接看TrainLINE()函数中的TrainLINEThread()这个函数，多线程跑的就是这个函数。</p>
<p>训练结束条件是，当训练的次数超过<code v-pre>total_samples</code>的次数以后就停止训练。如下：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>if (count &gt; total_samples / num_threads + 2) break;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先要按边的权重采集一条边edge(u, v)，得到其这条边的起始点u和目标点v：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>curedge = SampleAnEdge(gsl_rng_uniform(gsl_r), gsl_rng_uniform(gsl_r));
u = edge_source_id[curedge];
v = edge_target_id[curedge];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后最核心的部分就是负采样并根据损失函数更新参数：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>lu = u * dim;
for (int c = 0; c != dim; c++) vec_error[c] = 0;

// NEGATIVE SAMPLING
for (int d = 0; d != num_negative + 1; d++)
{
    if (d == 0)
    {
        target = v;
        label = 1;
    }
    else
    {
        target = neg_table[Rand(seed)];
        label = 0;
    }
    lv = target * dim;
    if (order == 1) Update(&amp;emb_vertex[lu], &amp;emb_vertex[lv], vec_error, label);
    if (order == 2) Update(&amp;emb_vertex[lu], &amp;emb_context[lv], vec_error, label);
}
for (int c = 0; c != dim; c++) emb_vertex[c + lu] += vec_error[c];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，1阶关系训练的是两个节点的<code v-pre>emb_vertex</code>，而2阶关系训练的是开始节点的<code v-pre>emb_vertex</code>（节点本身的embedding）和目标节点的<code v-pre>emb_context</code>（节点上下文的embedding）。</p>
<p>接下来进入最关键的权值更新函数<code v-pre>Update()</code>：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>/* Update embeddings */
void Update(real *vec_u, real *vec_v, real *vec_error, int label)
{
	real x = 0, g;
	for (int c = 0; c != dim; c++) x += vec_u[c] * vec_v[c];
	g = (label - FastSigmoid(x)) * rho;
	for (int c = 0; c != dim; c++) vec_error[c] += g * vec_v[c];
	for (int c = 0; c != dim; c++) vec_v[c] += g * vec_u[c];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时我们需要回到论文中，看公式（8）和公式（7）：
$$
\begin{aligned}
\frac{\partial O_2}{\partial\vec{u}<em>i}&amp;=w</em>{ij}\cdot \frac{\partial\ \text{log}\ p_2(v_j|v_i)}{\partial \vec{u}_i}\
&amp;=\frac{\partial\ \text{log}\ p_2(v_j|v_i)}{\partial \vec{u}<em>i}\ (w</em>{ij}\text{通过Alias采样来近似})\
&amp;=\frac{\partial\ \text{log}\ \sigma({\vec{u}{'}<em>j}^T\cdot \vec{u}<em>i)+\sum</em>{i=1}^KE</em>{v_n\sim P_n}\left[\text{log}\ \sigma(-{\vec{u}{'}_n}^T\cdot \vec{u}_i)\right]}{\partial \vec{u}_i}\
&amp;=\frac{\partial\ \text{log}\ \sigma({\vec{u}{'}<em>j}^T\cdot \vec{u}<em>i)+\sum</em>{i=1}^KE</em>{v_n\sim P_n}\left[\text{log}\ \left(1-\sigma({\vec{u}{'}_n}^T\cdot \vec{u}_i)\right)\right]}{\partial \vec{u}_i}\
&amp;=\frac{\partial\ \text{log}\ \sigma({\vec{u}{'}_j}^T\cdot \vec{u}<em>i)}{\partial \vec{u}<em>i}+\frac{\sum</em>{i=1}^KE</em>{v_n\sim P_n}\partial\ \left[\text{log}\ \left(1-\sigma({\vec{u}{'}_n}^T\cdot \vec{u}_i)\right)\right]}{\partial \vec{u}_i}\
&amp;=\left[1-\sigma({\vec{u}{'}_j}^T\cdot \vec{u}<em>i)\right]\vec{u}{'}<em>j+\sum</em>{i=1}^KE</em>{v_n\sim P_n} \left[0-\sigma({\vec{u}{'}_n}^T\cdot \vec{u}_i)\right]\vec{u}{'}_n
\end{aligned}
$$
这下代码应该就很容易能理解了。</p>
<p>上式中的$E_{v_n\sim P_n}$对应<code v-pre>TrainLINEThread()</code>负采样部分中的</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>target = neg_table[Rand(seed)];
label = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>边eage(u, v)中的v会在每次update时更新，u会在负采样完之后统一更新。</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 边eage(u, v)中的v会在每次update时更新
void Update(real *vec_u, real *vec_v, real *vec_error, int label)
{
	xxxxx
	for (int c = 0; c != dim; c++) vec_error[c] += g * vec_v[c];
	for (int c = 0; c != dim; c++) vec_v[c] += g * vec_u[c];
}

void *TrainLINEThread(void *id)
{
	xxx
	while (1)
	{
		// NEGATIVE SAMPLING
		for (int d = 0; d != num_negative + 1; d++)
		{
			xxx
		}
        // 边eage(u, v)中的u会在负采样完之后统一更新
		for (int c = 0; c != dim; c++) emb_vertex[c + lu] += vec_error[c];

		count++;
	}
	xxx
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间复杂度o-1-的alias离散采样算法" tabindex="-1"><a class="header-anchor" href="#时间复杂度o-1-的alias离散采样算法" aria-hidden="true">#</a> 时间复杂度O[1]的Alias离散采样算法</h2>
<p><strong>Alias-Sampling-Method</strong></p>
<p>问题：比如一个随机事件包含四种情况，每种情况发生的概率分别为：
$$
\frac{1}{2},\ \frac{1}{3},\ \frac{1}{12},\ \frac{1}{12}
$$
，问怎么用产生符合这个概率的采样方法。</p>
<h3 id="最容易想到的方法" tabindex="-1"><a class="header-anchor" href="#最容易想到的方法" aria-hidden="true">#</a> 最容易想到的方法</h3>
<p>我之前有在<a href="https://blog.csdn.net/haolexiao/article/details/65157026" target="_blank" rel="noopener noreferrer">【数学】均匀分布生成其他分布的方法<ExternalLinkIcon/></a>中写过均匀分布生成其他分布的方法，这种方法就是产生0~1之间的一个随机数，然后看起对应到这个分布的CDF中的哪一个，就是产生的一个采样。比如落在0~1/2之间就是事件A，落在1/2~5/6之间就是事件B，落在5/6~11/12之间就是事件C，落在11/12~1之间就是事件D。</p>
<p>但是这样的复杂度，如果用BST树来构造上面这个的话，时间复杂度为O(logN)，有没有时间复杂度更低的方法。</p>
<h3 id="一个naive的办法" tabindex="-1"><a class="header-anchor" href="#一个naive的办法" aria-hidden="true">#</a> 一个Naive的办法</h3>
<p>一个Naive的想法如下：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-1.png" alt="alias-1"></p>
<ol>
<li>可以像上图这样采样，将四个事件排成4列：1~4，扔两次骰子，第一次扔1~4之间的整数，决定落在哪一列。</li>
</ol>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-2.png" alt="alias-2"></p>
<ol start="2">
<li>如上如所示，将其按照最大的那个概率进行归一化。在1步中决定好哪一列了之后，扔第二次骰子，0~1之间的任意数，如果落在了第一列上，不论第二次扔几，都采样时间A，如果落在第二列上，第二次扔超过2323则采样失败，重新采样，如果小于2323则采样时间B成功，以此类推。</li>
<li>这样算法复杂度最好为O(1)O(1)最坏有可能无穷次，平均意义上需要采样O(N)</li>
</ol>
<p>那怎么去改进呢？</p>
<h3 id="alias-method" tabindex="-1"><a class="header-anchor" href="#alias-method" aria-hidden="true">#</a> Alias-Method</h3>
<p>这样Alias Method采样方法就横空出世了</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-3.png" alt="alias-3"></p>
<p>还是如上面的那样的思路，但是如果我们不按照其中最大的值去归一化，而是按照其均值归一化。即按照1/N（这里是1/4）归一化，即为所有概率乘以N，得到如下图：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-4.png" alt="alias-4"></p>
<p>其总面积为N，然后可以将其分成一个1*N的长方形，如下图：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-5.png" alt="alias-5"></p>
<p>将前两个多出来的部分补到后面两个缺失的部分中。
先将1中的部分补充到4中：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-6.png" alt="alias-6"></p>
<p>这时如果，将1,2中多出来的部分，补充到3中，就麻烦了，因为又陷入到如果从中采样超过2个以上的事件这个问题中，所以Alias Method一定要保证：<strong>每列中最多只放两个事件</strong>
所以此时需要讲1中的补满3中去：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-7.png" alt="alias-7"></p>
<p>再将2中的补到1中：</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/alias-8.png" alt="alias-8"></p>
<p>至此整个方法大功告成
Alias Method具体算法如下：</p>
<ol>
<li>按照上面说的方法，将整个概率分布拉平成为一个1*N的长方形即为Alias Table，构建上面那张图之后，储存两个数组，一个里面存着第i列对应的事件i矩形占的面积百分比【也即其概率】，上图的话数组就为Prab[2/3, 1, 1/3, 1/3]，另一个数组里面储存着第i列不是事件i的另外一个事件的标号，像上图就是Alias[2 NULL 1 1]</li>
<li>产生两个随机数，第一个产生1~N 之间的整数i，决定落在哪一列。扔第二次骰子，0~1之间的任意数，判断其与Prab[i]大小，如果小于Prab[i]，则采样i，如果大于Prab[i]，则采样Alias[i]</li>
</ol>
<p>这个算法是不是非常的精妙而且简洁，做到了O(1)事件复杂度的采样。但是还有一个问题是，如何去构建上面的第1步？即如何去拉平整个概率分布？这样预处理的时间复杂度又是多少呢？</p>
<h3 id="alias-method程序化构建" tabindex="-1"><a class="header-anchor" href="#alias-method程序化构建" aria-hidden="true">#</a> Alias-Method程序化构建</h3>
<h4 id="naive方法" tabindex="-1"><a class="header-anchor" href="#naive方法" aria-hidden="true">#</a> Naive方法</h4>
<p>构建方法：
1.找出其中面积小于等于1的列，如i列，这些列说明其一定要被别的事件矩形填上，所以在Prab[i]中填上其面积
2.然后从面积大于1的列中，选出一个，比如j列，用它将第i列填满，然后Alias[i] = j，第j列面积减去填充用掉的面积。</p>
<p>以上两个步骤一直循环，直到所有列的面积都为1了为止。</p>
<h4 id="存在性证明" tabindex="-1"><a class="header-anchor" href="#存在性证明" aria-hidden="true">#</a> 存在性证明</h4>
<p>那么Alias Table一定存在吗，如何去证明呢？
要证明Alias Table一定存在，就说明上述的算法是能够一直运行下去，直到所有列的面积都为1了为止，而不是会中间卡住。
一个直觉就是，这一定是可以一直运行下去的。上述方法每运行一轮，就会使得剩下的没有匹配的总面积减去1，在第n轮，剩下的面积为N-n，如果存在有小于1的面积，则一定存在大于1的面积，则一定可以用大于1的面积那部分把小于1部分给填充到1，这样就进入到了第n+1轮，最后一直到所有列面积都为1。
更为严谨的证明见Blog：<a href="http://www.keithschwarz.com/darts-dice-coins/" target="_blank" rel="noopener noreferrer">Darts, Dice, and Coins: Sampling from a Discrete Distribution<ExternalLinkIcon/></a>。</p>
<h4 id="更快的构建方法" tabindex="-1"><a class="header-anchor" href="#更快的构建方法" aria-hidden="true">#</a> 更快的构建方法</h4>
<p>如果按照上面的方法去构建Alias Table，算法复杂度是O(n^2)的，因为最多需要跑N轮，而每跑一轮的最大都需要遍历N次。一个更好的办法是用两个队列A,B去储存面积大于1的节点标号，和小于1的节点标号，每次从两个队列中各取一个，将大的补充到小的之中，小的出队列，再看大的减去补给之后，如果大于1，继续放入A中，如果等于1，则也出去，如果小于1则放入B中。
这样算法复杂度为O(n)</p>
<p>至此Alias Method就讲完了，感觉还是一个非常精妙的方法，而且方法实现起来也非常的简单。值得学习。</p>
<h1 id="分布式实现-腾讯angel" tabindex="-1"><a class="header-anchor" href="#分布式实现-腾讯angel" aria-hidden="true">#</a> 分布式实现（腾讯Angel）</h1>
<p>LINE(Large-scale Information Network Embedding)算法，是Network Embedding领域著名的算法之一，将图数据嵌入到向量空间，从达到用针对向量类型数据的机器学习算法来处理图数据的目的</p>
<p><strong>腾讯Angel</strong>实现了LINE的分布式版本。</p>
<p>主页：<a href="https://www.bookstack.cn/read/angel/README.md" target="_blank" rel="noopener noreferrer">Angel<ExternalLinkIcon/></a>，LINE：<a href="https://www.bookstack.cn/read/angel/docs-algo-sona-line_sona.m" target="_blank" rel="noopener noreferrer">LINE<ExternalLinkIcon/></a>或者<a href="https://github.com/Angel-ML/angel/blob/master/docs/algo/sona/line_sona.md" target="_blank" rel="noopener noreferrer">LINE<ExternalLinkIcon/></a></p>
<p>GITHUB：<a href="https://github.com/Angel-ML/angel/blob/master/spark-on-angel/mllib/src/main/scala/com/tencent/angel/spark/ml/embedding/line/LINEModel.scala" target="_blank" rel="noopener noreferrer">LINE<ExternalLinkIcon/></a>，可直接从Github上把源码下载到本地IDEA编辑器中打开。</p>
<h2 id="运行示例-1" tabindex="-1"><a class="header-anchor" href="#运行示例-1" aria-hidden="true">#</a> 运行示例</h2>
<p>进入<code v-pre>/data2/recxxxd/angel-2.2.0-bin/bin</code>，直接<code v-pre>sh SONA-example</code>，就可以运行了。可以打开<code v-pre>SONA-example</code>，查看其内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">source</span> ./spark-on-angel-env.sh

<span class="token variable">$SPARK_HOME</span>/bin/spark-submit <span class="token punctuation">\</span>
    <span class="token parameter variable">--master</span> yarn-cluster <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.ps.jars</span><span class="token operator">=</span><span class="token variable">$SONA_ANGEL_JARS</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.ps.instances</span><span class="token operator">=</span><span class="token number">10</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.ps.cores</span><span class="token operator">=</span><span class="token number">2</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.ps.memory</span><span class="token operator">=</span>6g <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.hadoop.angel.ps.env</span><span class="token operator">=</span><span class="token string">"HADOOP_MAPRED_HOME=${HADOOP_MAPRED_HOME:-"</span>/opt/yarn<span class="token string">"}"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.hadoop.angel.am.env</span><span class="token operator">=</span><span class="token string">"HADOOP_MAPRED_HOME=${HADOOP_MAPRED_HOME:-"</span>/opt/yarn<span class="token string">"}"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--conf</span> <span class="token assign-left variable">spark.hadoop.angel.staging.dir</span><span class="token operator">=</span><span class="token string">"/tmp/recommend"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--jars</span> <span class="token variable">$SONA_SPARK_JARS</span><span class="token punctuation">\</span>
    <span class="token parameter variable">--name</span> <span class="token string">"LR-spark-on-angel"</span> <span class="token punctuation">\</span>
    --driver-memory 10g <span class="token punctuation">\</span>
    --num-executors <span class="token number">10</span> <span class="token punctuation">\</span>
    --executor-cores <span class="token number">2</span> <span class="token punctuation">\</span>
    --executor-memory 4g <span class="token punctuation">\</span>
    <span class="token parameter variable">--class</span> com.tencent.angel.spark.examples.basic.LR <span class="token punctuation">\</span>
    ./<span class="token punctuation">..</span>/lib/spark-on-angel-examples-<span class="token variable">${ANGEL_VERSION}</span>.jar <span class="token punctuation">\</span>
    input:hdfs://nameservice3/tmp/lu.jiawei/angel <span class="token punctuation">\</span>
    lr:0.1 <span class="token punctuation">\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>，要想改源码或者替换成其他模型，那就进入<code v-pre>~/IdeaProjects/angel/spark-on-angel/examples</code>，然后进行打包编译<code v-pre>mvn package</code>。</p>
<h2 id="分布式实现原理" tabindex="-1"><a class="header-anchor" href="#分布式实现原理" aria-hidden="true">#</a> 分布式实现原理</h2>
<p>LINE算法的实现参考了Yahoo的论文</p>
<p><a href="https://arxiv.org/abs/1606.08495" target="_blank" rel="noopener noreferrer"><em>Network–Efficient Distributed Word2vec Training System for Large Vocabularies</em><ExternalLinkIcon/></a></p>
<p>, 将Embedding向量按维度拆分到多个PS上，节点之间的点积运算可以在每个PS内部进行局部运算，之后再拉取到spark端合并。Spark端计算每个节点的梯度，推送到每个PS去更新每个节点对应的向量维度。</p>
<p><img src="@source/blogs/recommender-systems/advanced-knowledge/graph-embedding/line/pic/line_distribute_structure.png" alt="line_distribute_structure"></p>
<h1 id="推荐场景中的实际应用" tabindex="-1"><a class="header-anchor" href="#推荐场景中的实际应用" aria-hidden="true">#</a> 推荐场景中的实际应用</h1>
<p>LINE在推荐中有三种应用。</p>
<p>LINE中的每个节点都有两个embedding，vectex embedding和context embedding。</p>
<p>（1）泛User-Based策略</p>
<p>通过vectex embedding找出相似的节点，这样就找到了相似User，然后将相似User看过的东西推荐给User。</p>
<p>（2）User-&gt;Item策略</p>
<p>直接通过User的vertex embedding找出相似Item的Context embedding，直接将Item推荐给User。</p>
<p>（3）User-&gt;Item * Item-&gt;User策略</p>
<p>通过User的vectext embedding和Item的Context embedding，计算User对Item的喜好，再通过Item的vertex embedding和User的Context embedding，计算Item对User的喜好。然后两者相乘，就是双方的匹配程度。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/daiyongya/article/details/80963767" target="_blank" rel="noopener noreferrer">Embedding算法Line源码简读<ExternalLinkIcon/></a></li>
<li><a href="https://www.jianshu.com/p/f6a9af93d081" target="_blank" rel="noopener noreferrer">LINE实验<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;LINE源码说明与运行&quot;参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/haolexiao/article/details/65157026" target="_blank" rel="noopener noreferrer">【数学】时间复杂度O(1)的离散采样算法—— Alias method/别名采样方法<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/54867139" target="_blank" rel="noopener noreferrer">Alias Method:时间复杂度O(1)的离散采样方法<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;时间复杂度O(1)的Alias离散采样算法&quot;参考了此博客。</p>
<p>===</p>
<p>在2017年在北邮举办的Google开发者节上，一位来自北大的同学使用Tensorflow实现了Line的代码:</p>
<p><a href="https://github.com/snowkylin/line" target="_blank" rel="noopener noreferrer">LINE的tensorflow实现<ExternalLinkIcon/></a></p>
</div></template>


