<template><div><h1 id="坐标变换与欧拉运动学方程" tabindex="-1"><a class="header-anchor" href="#坐标变换与欧拉运动学方程" aria-hidden="true">#</a> 坐标变换与欧拉运动学方程</h1>
<ul>
<li><RouterLink to="/docs/Engineering/autopilot/navigation/navigation.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%9F%BA%E6%9C%AC%E5%81%87%E5%AE%9A">基本假定</a></li>
<li><a href="#%E5%AF%B9%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%90%86%E8%A7%A3">对坐标变换的基本理解</a>
<ul>
<li><a href="#%E7%9F%A2%E9%87%8F%E6%97%8B%E8%BD%AC%E4%B8%8E%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2%E7%9A%84%E5%85%B3%E7%B3%BB">矢量旋转与坐标变换的关系</a></li>
</ul>
</li>
<li><a href="#%E7%9F%A9%E9%98%B5%E6%97%8B%E8%BD%AC">矩阵旋转</a>
<ul>
<li><a href="#%E7%BB%95z%E8%BD%B4%E6%97%8B%E8%BD%AC">绕z轴旋转</a></li>
<li><a href="#%E7%BB%95y%E8%BD%B4%E6%97%8B%E8%BD%AC">绕y轴旋转</a></li>
<li><a href="#%E7%BB%95x%E8%BD%B4%E6%97%8B%E8%BD%AC">绕x轴旋转</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8E%E6%AC%A7%E6%8B%89%E8%A7%92%E7%9A%84%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2">基于欧拉角的坐标变换</a>
<ul>
<li><a href="#%E5%9D%90%E6%A0%87%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5%E6%8E%A8%E5%AF%BC">坐标变换矩阵推导</a></li>
<li><a href="#%E4%B8%87%E5%90%91%E8%8A%82%E6%AD%BB%E9%94%81">万向节死锁</a></li>
<li><a href="#%E5%B7%B2%E7%9F%A5%E5%A4%9A%E6%97%8B%E7%BF%BC%E6%B0%B4%E5%B9%B3%E5%8A%A0%E9%80%9F%E5%BA%A6%E6%B1%82%E5%A7%BF%E6%80%81%E8%A7%92">已知多旋翼水平加速度求姿态角</a></li>
</ul>
</li>
<li><a href="#%E6%AC%A7%E6%8B%89%E8%BF%90%E5%8A%A8%E5%AD%A6%E6%96%B9%E7%A8%8B">欧拉运动学方程</a>
<ul>
<li><a href="#%E6%AC%A7%E6%8B%89%E8%BF%90%E5%8A%A8%E5%AD%A6%E6%96%B9%E7%A8%8B%E6%8E%A8%E5%AF%BC">欧拉运动学方程推导</a></li>
<li><a href="#%E7%94%B1%E4%BD%93%E8%BD%B4%E8%A7%92%E5%8A%A0%E9%80%9F%E5%BA%A6%E9%99%90%E5%88%B6%E6%B1%82%E6%AC%A7%E6%8B%89%E8%A7%92%E8%A7%92%E5%8A%A0%E9%80%9F%E5%BA%A6%E9%99%90%E5%88%B6">由体轴角加速度限制求欧拉角角加速度限制</a></li>
</ul>
</li>
</ul>
<h1 id="基本假定" tabindex="-1"><a class="header-anchor" href="#基本假定" aria-hidden="true">#</a> 基本假定</h1>
<p>若将飞行器看作刚体，则它在空间中的姿态主要是指与机体固连的机体坐标系跟与大地固连的坐标系之间的旋转关系。旋转关系可以用欧拉角描述，为了方便叙述，先约定下面的一些基本假定：</p>
<p>（1）建立的坐标系均是右手系，且欧拉角的旋转方向也满足右手定则；</p>
<p>（2）与机体固连的机体坐标系的$x$轴，$y$轴，$z$轴的正方向分别为前右下，与大地固连的大地坐标系的$X$轴，$Y$轴，$Z$轴的正方向分别为北东地；</p>
<p>（3）机体坐标系绕其$z$轴旋转所得到的欧拉角称为偏航角$\psi$，机体坐标系绕其$y$轴旋转所得到的欧拉角称为俯仰角$\theta$，机体坐标系绕其$x$轴旋转所得到的欧拉角称为横滚角$\phi$；</p>
<p>（4）用上下标$b$来表示向量在机体（body）坐标系中，用上下标$e$来表示向量在大地（earth）坐标系中；</p>
<h1 id="对坐标变换的基本理解" tabindex="-1"><a class="header-anchor" href="#对坐标变换的基本理解" aria-hidden="true">#</a> 对坐标变换的基本理解</h1>
<p>机体坐标系在任一时刻的姿态都可以分解为通过大地坐标系绕固定点的三次旋转，每次旋转的的旋转轴对应于将要旋转的坐标系的某一坐标轴，也就是上面提到的欧拉角。旋转的次序不同，最终得到的姿态也不相同，因此，这里也规定这三次旋转的次序分别为先绕$z$旋转，再绕$y$旋转，最后绕$x$旋转，即$\psi\rightarrow \theta \rightarrow \phi$。如下图所示，机体坐标系的旋转已经分解成了三次坐标系之间基本变换。下面就分别推导绕$z$，绕$y$，绕$x$的坐标变换矩阵。</p>
<p>需要注意到的一点是，这里讨论的都是<strong>坐标系之间的变换（不是将向量本身进行旋转）</strong>。也就是说<strong>空间中的位置向量或坐标点本身并不发生变化，而只是将它们从一个参考坐标系变换到了另一个参考系当中</strong>。</p>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/ypr.jpg" alt="ypr"></p>
<h2 id="矢量旋转与坐标变换的关系" tabindex="-1"><a class="header-anchor" href="#矢量旋转与坐标变换的关系" aria-hidden="true">#</a> 矢量旋转与坐标变换的关系</h2>
<p>矢量旋转和坐标变换是逆向关系。</p>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/D:/2study/课程与学习/0人工智能与机器学习/人工智能与机器学习/02书籍/书籍_数据/书籍/《机器学习笔记》/machine-learning-notes/docs/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/vector-rot.png" alt="vector-rot"></p>
<p>设有参考坐标系$R$，坐标轴为$x,y,z$。$r$为固连在刚体上的位置向量，可通过旋转矩阵将其旋转到$r'$位置，即
$$
{r'}^R=Dr^R=
\begin{bmatrix}
\cos\theta&amp;-\sin\theta\
\sin\theta&amp;\cos\theta
\end{bmatrix}
r^R
$$
记住，此时的$D$是个向量旋转矩阵，而还不是坐标转换矩阵。</p>
<p>记初始时刻的刚体固连坐标系为$b_0$，在初始时刻，刚体固连坐标系和参考坐标系重合，所以
$$
r^R=r^{b_0}
$$
而在转动过程中，位置向量$r$和$b$系都和刚体固连，所以位置向量和$b$系的相对角位置始终不变，即有
$$
r^{b_0}={r'}^{b}
$$
根据上两式，有
$$
r^R={r'}^b
$$
把上式带入前面的向量旋转公式，有
$$
{r'}^R=Dr^R=
\begin{bmatrix}
\cos\theta&amp;-\sin\theta\
\sin\theta&amp;\cos\theta
\end{bmatrix}
r^R=
\begin{bmatrix}
\cos\theta&amp;-\sin\theta\
\sin\theta&amp;\cos\theta
\end{bmatrix}
{r'}^b
$$
即，$D$为$b$系至$R$系的坐标变换矩阵。</p>
<p>即矢量旋转和坐标变换是逆向关系。</p>
<h1 id="矩阵旋转" tabindex="-1"><a class="header-anchor" href="#矩阵旋转" aria-hidden="true">#</a> 矩阵旋转</h1>
<h2 id="绕z轴旋转" tabindex="-1"><a class="header-anchor" href="#绕z轴旋转" aria-hidden="true">#</a> 绕z轴旋转</h2>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/rot-z-geometry.png" alt="rot-z-geometry"></p>
<p><strong>第一种解法</strong>：几何作图法</p>
<p>上图左侧，向量在$x'$上的投影，等于向量在$x$轴上的分量在$x'$上的投影，加上向量在$y$轴上的分量在$x'$上的投影。</p>
<h1 id="上图右侧-向量在-y-上的投影-等于向量在-y-轴上的分量在-y-上的投影-减去向量在-x-轴上的分量在-y-上的投影。-left-begin-matrix-x-x-cos-psi-y-sin-psi-y-x-sin-psi-y-cos-psi-end-matrix-right-即-begin-bmatrix-x-y-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#上图右侧-向量在-y-上的投影-等于向量在-y-轴上的分量在-y-上的投影-减去向量在-x-轴上的分量在-y-上的投影。-left-begin-matrix-x-x-cos-psi-y-sin-psi-y-x-sin-psi-y-cos-psi-end-matrix-right-即-begin-bmatrix-x-y-end-bmatrix" aria-hidden="true">#</a> 上图右侧，向量在$y'$上的投影，等于向量在$y$轴上的分量在$y'$上的投影，减去向量在$x$轴上的分量在$y'$上的投影。
$$
\left{\begin{matrix}
x'=x\cos\psi+y\sin\psi\
y'=-x\sin\psi+y\cos\psi
\end{matrix}\right.
$$
即
$$
\begin{bmatrix}
x'\
y'
\end{bmatrix}</h1>
<p>\begin{bmatrix}
\cos\psi &amp; \sin\psi\
-\sin\psi &amp; \cos\psi
\end{bmatrix}
\begin{bmatrix}
x\
y
\end{bmatrix}
$$
由于这种方式需要几何作图，比较麻烦，之后均采用下面讲的第二种。第一种解法仅在这里展示一次，后面不再采用。</p>
<p><strong>第二种解法</strong>：（默认）</p>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/rot-z.png" alt="rot-z"></p>
<h1 id="如上图所示-当坐标系绕-z-轴旋转时-空间中的向量与-z-轴之间的相对关系不会改变-因此在旋转前后-z′-z-现在就只考虑该向量在垂直于-z-轴的平面上的投影-overrightarrow-oa-分别在平面直角坐标系-oxy-跟平面直角坐标系-ox-y-上坐标之间的关系。如果向量-overrightarrow-oa-的模为-r-它在坐标系-oxy-中的坐标可以表示如下-left-begin-matrix-x-r-cos-beta-psi-r-cos-beta-cos-psi-r-sin-beta-sin-psi-y-r-sin-beta-psi-r-sin-beta-cos-psi-r-cos-beta-sin-psi-end-matrix-right-在坐标系-ox-y-中的坐标可以表示如下-left-begin-matrix-x-r-cos-beta-y-r-sin-beta-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-x-x-cos-psi-y-sin-psi-y-y-cos-psi-x-sin-psi-end-matrix-right-即-begin-bmatrix-x-y-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#如上图所示-当坐标系绕-z-轴旋转时-空间中的向量与-z-轴之间的相对关系不会改变-因此在旋转前后-z′-z-现在就只考虑该向量在垂直于-z-轴的平面上的投影-overrightarrow-oa-分别在平面直角坐标系-oxy-跟平面直角坐标系-ox-y-上坐标之间的关系。如果向量-overrightarrow-oa-的模为-r-它在坐标系-oxy-中的坐标可以表示如下-left-begin-matrix-x-r-cos-beta-psi-r-cos-beta-cos-psi-r-sin-beta-sin-psi-y-r-sin-beta-psi-r-sin-beta-cos-psi-r-cos-beta-sin-psi-end-matrix-right-在坐标系-ox-y-中的坐标可以表示如下-left-begin-matrix-x-r-cos-beta-y-r-sin-beta-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-x-x-cos-psi-y-sin-psi-y-y-cos-psi-x-sin-psi-end-matrix-right-即-begin-bmatrix-x-y-end-bmatrix" aria-hidden="true">#</a> 如上图所示，当坐标系绕$z$轴旋转时，空间中的向量与$z$轴之间的相对关系不会改变，因此在旋转前后$z′=z$，现在就只考虑该向量在垂直于$z$轴的平面上的投影$\overrightarrow{OA}$，分别在平面直角坐标系$Oxy$跟平面直角坐标系$Ox'y'$上坐标之间的关系。如果向量$\overrightarrow{OA}$的模为$r$，它在坐标系$Oxy$中的坐标可以表示如下：
$$
\left{\begin{matrix}
x=r\cos(\beta+\psi)=r\cos\beta \cos\psi-r\sin\beta \sin\psi\
y=r\sin(\beta+\psi)=r\sin\beta \cos\psi+r\cos\beta \sin\psi
\end{matrix}\right.
$$
在坐标系$Ox'y’$中的坐标可以表示如下：
$$
\left{\begin{matrix}
x'=r\cos\beta\
y'=r\sin\beta
\end{matrix}\right.
$$
联合这两组式子可以得到：
$$
\left{\begin{matrix}
x=x'\cos\psi-y'\sin\psi\
y=y'\cos\psi+x'\sin\psi
\end{matrix}\right.
$$
即
$$
\begin{bmatrix}
x\
y
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-psi-sin-psi-sin-psi-cos-psi-end-bmatrix-begin-bmatrix-x-y-end-bmatrix-求逆可得-begin-bmatrix-x-y-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-psi-sin-psi-sin-psi-cos-psi-end-bmatrix-begin-bmatrix-x-y-end-bmatrix-求逆可得-begin-bmatrix-x-y-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
\cos\psi &amp; -\sin\psi\
\sin\psi &amp; \cos\psi
\end{bmatrix}
\begin{bmatrix}
x'\
y'
\end{bmatrix}
$$
求逆可得
$$
\begin{bmatrix}
x'\
y'
\end{bmatrix}</h1>
<p>\begin{bmatrix}
\cos\psi &amp; \sin\psi\
-\sin\psi &amp; \cos\psi
\end{bmatrix}
\begin{bmatrix}
x\
y
\end{bmatrix}
$$
看，两种解法的结果是一样的！</p>
<h1 id="并且已经知道-z′-z-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#并且已经知道-z′-z-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" aria-hidden="true">#</a> 并且已经知道$z′=z$了，所以把上面的式子写成矩阵的形式则是：
$$
\begin{bmatrix}
x'\
y'\
z'
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-psi-sin-psi-0-sin-psi-cos-psi-0-0-0-1-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-z-psi" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-psi-sin-psi-0-sin-psi-cos-psi-0-0-0-1-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-z-psi" aria-hidden="true">#</a> \begin{bmatrix}
\cos\psi &amp; \sin\psi &amp; 0\
-\sin\psi &amp; \cos\psi &amp; 0\
0 &amp; 0 &amp; 1
\end{bmatrix}
\begin{bmatrix}
x\
y\
z
\end{bmatrix}
$$
即
$$
R_z(\psi)</h1>
<p>\begin{bmatrix}
\cos\psi &amp; \sin\psi &amp; 0\
-\sin\psi &amp; \cos\psi &amp; 0\
0 &amp; 0 &amp; 1
\end{bmatrix}
$$
上面这个矩阵就描述了坐标系绕$z$轴的一次旋转。</p>
<h2 id="绕y轴旋转" tabindex="-1"><a class="header-anchor" href="#绕y轴旋转" aria-hidden="true">#</a> 绕y轴旋转</h2>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/rot-y.png" alt="rot-y"></p>
<h1 id="绕-y-轴旋转的公式推导也与上面是一样的-首先-y-y-然后向量-overrightarrow-oa-在坐标系-ozx-中的坐标可以表示如下-left-begin-matrix-z-r-cos-beta-theta-r-cos-beta-cos-theta-r-sin-beta-sin-theta-x-r-sin-beta-theta-r-sin-beta-cos-theta-r-cos-beta-sin-theta-end-matrix-right-在坐标系-oz-x-中的坐标可以表示如下-left-begin-matrix-z-r-cos-beta-x-r-sin-beta-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-z-z-cos-theta-x-sin-theta-x-z-sin-theta-x-cos-theta-end-matrix-right-即-begin-bmatrix-z-x-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#绕-y-轴旋转的公式推导也与上面是一样的-首先-y-y-然后向量-overrightarrow-oa-在坐标系-ozx-中的坐标可以表示如下-left-begin-matrix-z-r-cos-beta-theta-r-cos-beta-cos-theta-r-sin-beta-sin-theta-x-r-sin-beta-theta-r-sin-beta-cos-theta-r-cos-beta-sin-theta-end-matrix-right-在坐标系-oz-x-中的坐标可以表示如下-left-begin-matrix-z-r-cos-beta-x-r-sin-beta-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-z-z-cos-theta-x-sin-theta-x-z-sin-theta-x-cos-theta-end-matrix-right-即-begin-bmatrix-z-x-end-bmatrix" aria-hidden="true">#</a> 绕$y$轴旋转的公式推导也与上面是一样的,首先$y'=y$，然后向量$\overrightarrow{OA}$在坐标系$Ozx$中的坐标可以表示如下：
$$
\left{\begin{matrix}
z=r\cos(\beta+\theta)=r\cos\beta \cos\theta-r\sin\beta \sin\theta\
x=r\sin(\beta+\theta)=r\sin\beta \cos\theta+r\cos\beta \sin\theta
\end{matrix}\right.
$$
在坐标系$Oz'x’$中的坐标可以表示如下：
$$
\left{\begin{matrix}
z'=r\cos\beta\
x'=r\sin\beta
\end{matrix}\right.
$$
联合这两组式子可以得到：
$$
\left{\begin{matrix}
z=z'\cos\theta-x'\sin\theta\
x=z'\sin\theta+x'\cos\theta
\end{matrix}\right.
$$
即
$$
\begin{bmatrix}
z\
x
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-theta-sin-theta-sin-theta-cos-theta-end-bmatrix-begin-bmatrix-z-x-end-bmatrix-求逆可得-begin-bmatrix-z-x-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-theta-sin-theta-sin-theta-cos-theta-end-bmatrix-begin-bmatrix-z-x-end-bmatrix-求逆可得-begin-bmatrix-z-x-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
\cos\theta &amp; -\sin\theta\
\sin\theta &amp; \cos\theta
\end{bmatrix}
\begin{bmatrix}
z'\
x'
\end{bmatrix}
$$
求逆可得
$$
\begin{bmatrix}
z'\
x'
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-theta-sin-theta-sin-theta-cos-theta-end-bmatrix-begin-bmatrix-z-x-end-bmatrix-变换一下顺序-可得-begin-bmatrix-x-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-theta-sin-theta-sin-theta-cos-theta-end-bmatrix-begin-bmatrix-z-x-end-bmatrix-变换一下顺序-可得-begin-bmatrix-x-z-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
\cos\theta &amp; \sin\theta\
-\sin\theta &amp; \cos\theta
\end{bmatrix}
\begin{bmatrix}
z\
x
\end{bmatrix}
$$
变换一下顺序，可得
$$
\begin{bmatrix}
x'\
z'
\end{bmatrix}</h1>
<p>\begin{bmatrix}
\cos\theta &amp; -\sin\theta\
\sin\theta &amp; \cos\theta
\end{bmatrix}
\begin{bmatrix}
x\
z
\end{bmatrix}
$$
注意：<strong>这里由于变换了一下坐标轴$z'$和$x'$的顺序，所以导致坐标转换矩阵也和上面的$x$和$y$坐标轴的坐标转换矩阵不一样了</strong>。</p>
<h1 id="并且已经知道-y′-y-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#并且已经知道-y′-y-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" aria-hidden="true">#</a> 并且已经知道$y′=y$了，所以把上面的式子写成矩阵的形式则是：
$$
\begin{bmatrix}
x'\
y'\
z'
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-theta-0-sin-theta-0-1-0-sin-theta-0-cos-theta-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-y-theta" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-theta-0-sin-theta-0-1-0-sin-theta-0-cos-theta-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-y-theta" aria-hidden="true">#</a> \begin{bmatrix}
\cos\theta &amp; 0 &amp; -\sin\theta\
0 &amp; 1 &amp; 0\
\sin\theta &amp; 0 &amp; \cos\theta\
\end{bmatrix}
\begin{bmatrix}
x\
y\
z
\end{bmatrix}
$$
即
$$
R_y(\theta)</h1>
<p>\begin{bmatrix}
\cos\theta &amp; 0 &amp; -\sin\theta\
0 &amp; 1 &amp; 0\
\sin\theta &amp; 0 &amp; \cos\theta\
\end{bmatrix}
$$
上面这个矩阵就描述了坐标系绕$y$轴的一次旋转。</p>
<h2 id="绕x轴旋转" tabindex="-1"><a class="header-anchor" href="#绕x轴旋转" aria-hidden="true">#</a> 绕x轴旋转</h2>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/rot-x.png" alt="rot-x"></p>
<h1 id="绕-x-轴旋转的公式推导也与上面是一样的-首先-x-x-然后向量-overrightarrow-oa-在坐标系-oyz-中的坐标可以表示如下-left-begin-matrix-y-r-cos-beta-phi-r-cos-beta-cos-phi-r-sin-beta-sin-phi-z-r-sin-beta-phi-r-sin-beta-cos-phi-r-cos-beta-sin-phi-end-matrix-right-在坐标系-oy-z-中的坐标可以表示如下-left-begin-matrix-y-r-cos-phi-z-r-sin-phi-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-y-y-cos-phi-z-sin-phi-z-y-sin-phi-z-cos-phi-end-matrix-right-即-begin-bmatrix-y-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#绕-x-轴旋转的公式推导也与上面是一样的-首先-x-x-然后向量-overrightarrow-oa-在坐标系-oyz-中的坐标可以表示如下-left-begin-matrix-y-r-cos-beta-phi-r-cos-beta-cos-phi-r-sin-beta-sin-phi-z-r-sin-beta-phi-r-sin-beta-cos-phi-r-cos-beta-sin-phi-end-matrix-right-在坐标系-oy-z-中的坐标可以表示如下-left-begin-matrix-y-r-cos-phi-z-r-sin-phi-end-matrix-right-联合这两组式子可以得到-left-begin-matrix-y-y-cos-phi-z-sin-phi-z-y-sin-phi-z-cos-phi-end-matrix-right-即-begin-bmatrix-y-z-end-bmatrix" aria-hidden="true">#</a> 绕$x$轴旋转的公式推导也与上面是一样的,首先$x'=x$，然后向量$\overrightarrow{OA}$在坐标系$Oyz$中的坐标可以表示如下：
$$
\left{\begin{matrix}
y=r\cos(\beta+\phi)=r\cos\beta \cos\phi-r\sin\beta \sin\phi\
z=r\sin(\beta+\phi)=r\sin\beta \cos\phi+r\cos\beta \sin\phi
\end{matrix}\right.
$$
在坐标系$Oy'z’$中的坐标可以表示如下：
$$
\left{\begin{matrix}
y'=r\cos\phi\
z'=r\sin\phi
\end{matrix}\right.
$$
联合这两组式子可以得到：
$$
\left{\begin{matrix}
y=y'\cos\phi-z'\sin\phi\
z=y'\sin\phi+z'\cos\phi
\end{matrix}\right.
$$
即
$$
\begin{bmatrix}
y\
z
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-phi-sin-phi-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-y-z-end-bmatrix-求逆可得-begin-bmatrix-y-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-phi-sin-phi-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-y-z-end-bmatrix-求逆可得-begin-bmatrix-y-z-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
\cos\phi &amp; -\sin\phi\
\sin\phi &amp; \cos\phi
\end{bmatrix}
\begin{bmatrix}
y'\
z'
\end{bmatrix}
$$
求逆可得
$$
\begin{bmatrix}
y'\
z'
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-cos-phi-sin-phi-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-y-z-end-bmatrix-并且已经知道-x′-x-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-cos-phi-sin-phi-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-y-z-end-bmatrix-并且已经知道-x′-x-了-所以把上面的式子写成矩阵的形式则是-begin-bmatrix-x-y-z-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
\cos\phi &amp; \sin\phi\
-\sin\phi &amp; \cos\phi
\end{bmatrix}
\begin{bmatrix}
y\
z
\end{bmatrix}
$$
并且已经知道$x′=x$了，所以把上面的式子写成矩阵的形式则是：
$$
\begin{bmatrix}
x'\
y'\
z'
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-1-0-0-0-cos-phi-sin-phi-0-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-x-phi" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-1-0-0-0-cos-phi-sin-phi-0-sin-phi-cos-phi-end-bmatrix-begin-bmatrix-x-y-z-end-bmatrix-即-r-x-phi" aria-hidden="true">#</a> \begin{bmatrix}
1 &amp; 0 &amp; 0\
0 &amp; \cos\phi &amp; \sin\phi\
0 &amp; -\sin\phi &amp; \cos\phi\
\end{bmatrix}
\begin{bmatrix}
x\
y\
z
\end{bmatrix}
$$
即
$$
R_x(\phi)</h1>
<p>\begin{bmatrix}
1 &amp; 0 &amp; 0\
0 &amp; \cos\phi &amp; \sin\phi\
0 &amp; -\sin\phi &amp; \cos\phi\
\end{bmatrix}
$$
上面这个矩阵就描述了坐标系绕$x$轴的一次旋转。</p>
<h1 id="基于欧拉角的坐标变换" tabindex="-1"><a class="header-anchor" href="#基于欧拉角的坐标变换" aria-hidden="true">#</a> 基于欧拉角的坐标变换</h1>
<h2 id="坐标变换矩阵推导" tabindex="-1"><a class="header-anchor" href="#坐标变换矩阵推导" aria-hidden="true">#</a> 坐标变换矩阵推导</h2>
<p>这里基于欧拉角的坐标变换按照<code v-pre>偏航角-&gt;俯仰角-&gt;滚转角</code>的变换顺序，具体过程如下图所示。</p>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/ypr-process.png" alt="ypr-process"></p>
<p>具体为：</p>
<ul>
<li>绕$z$轴旋转偏航角$\psi$，坐标轴由$xyz$变为$x'y'(z'/z)$</li>
<li>绕$y'$轴旋转俯仰角$\theta$，坐标轴由$x'y'(z'/z)$变为$x''(y''/y')z''$</li>
<li>绕$x''$轴旋转滚转角$\phi$，坐标轴由$x''(y''/y')z''$变为$(x'''/x'')y'''z'''$</li>
</ul>
<p>已知坐标坐标转换矩阵的转换顺序，再加上前面的矩阵旋转的知识，可得矢量坐标从大地轴系转换到机体轴系的坐标转换矩阵为三个矩阵旋转的连乘，</p>
<ul>
<li>
<p>绕$z$轴旋转偏航角$\psi$，坐标轴由$xyz$变为$x'y'(z'/z)$</p>
<p>由该坐标转换矩阵，可将大地轴系$xyz$的矢量坐标，变换到$x'y'(z'/z)$临时轴系下的坐标</p>
</li>
<li>
<p>绕$y'$轴旋转俯仰角$\theta$，坐标轴由$x'y'(z'/z)$变为$x''(y''/y')z''$</p>
<p>由该坐标转换矩阵，可将$x'y'(z'/z)$临时轴系的矢量坐标，变换到$x''(y''/y')z''$临时轴系下的坐标</p>
</li>
<li>
<p>绕$x''$轴旋转滚转角$\phi$，坐标轴由$x''(y''/y')z''$变为$(x'''/x'')y'''z'''$</p>
<p>由该坐标转换矩阵，可将$x''(y''/y')z''$临时轴系的矢量坐标，变换到最终$(x'''/x'')y'''z'''$机体轴系下的坐标</p>
</li>
</ul>
<h1 id="已知坐标坐标转换矩阵的转换顺序-再加上前面的矩阵旋转的知识-可知-将上述三个坐标转换矩阵顺序相乘-即可得到能够将大地轴系下的矢量坐标转换为机体轴系下的矢量坐标的坐标转换矩阵。即-begin-bmatrix-x-b-y-b-z-b-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#已知坐标坐标转换矩阵的转换顺序-再加上前面的矩阵旋转的知识-可知-将上述三个坐标转换矩阵顺序相乘-即可得到能够将大地轴系下的矢量坐标转换为机体轴系下的矢量坐标的坐标转换矩阵。即-begin-bmatrix-x-b-y-b-z-b-end-bmatrix" aria-hidden="true">#</a> 已知坐标坐标转换矩阵的转换顺序，再加上前面的矩阵旋转的知识，可知，将上述三个坐标转换矩阵顺序相乘，即可得到能够将大地轴系下的矢量坐标转换为机体轴系下的矢量坐标的坐标转换矩阵。即
$$
\begin{bmatrix}
x_b\
y_b\
z_b
\end{bmatrix}</h1>
<h1 id="t-n-b-begin-bmatrix-x-n-y-n-z-n-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#t-n-b-begin-bmatrix-x-n-y-n-z-n-end-bmatrix" aria-hidden="true">#</a> T_n^b
\begin{bmatrix}
x_n\
y_n\
z_n
\end{bmatrix}</h1>
<p>R_x(\phi)\cdot R_y(\theta)\cdot R_z(\psi)
\begin{bmatrix}
x_n\
y_n\
z_n
\end{bmatrix}
$$
其中，$[x_b, y_b, z_b]^T$是矢量在机体轴系下的坐标，$[x_n, y_n, z_n]^T$是矢量在大地轴系下的坐标。</p>
<p>可利用MatLab求解坐标转换矩阵：</p>
<div class="language-matlab line-numbers-mode" data-ext="matlab"><pre v-pre class="language-matlab"><code>syms <span class="token operator">\</span>cos_psi <span class="token operator">\</span>sin_psi <span class="token operator">\</span>cos_theta <span class="token operator">\</span>sin_theta <span class="token operator">\</span>cos_phi <span class="token operator">\</span>sin_phi<span class="token punctuation">;</span>

R_psi <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">% 绕z轴旋转</span>
    <span class="token operator">\</span>cos_psi  <span class="token operator">\</span>sin_psi <span class="token number">0</span><span class="token punctuation">;</span> 
    <span class="token operator">-</span><span class="token operator">\</span>sin_psi <span class="token operator">\</span>cos_psi <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token number">0</span>        <span class="token number">0</span>       <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
R_theta <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">% 绕y轴旋转</span>
    <span class="token operator">\</span>cos_theta <span class="token number">0</span> <span class="token operator">-</span><span class="token operator">\</span>sin_theta<span class="token punctuation">;</span> 
    <span class="token number">0</span>         <span class="token number">1</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token operator">\</span>sin_theta <span class="token number">0</span> <span class="token operator">\</span>cos_theta<span class="token punctuation">]</span><span class="token punctuation">;</span>
R_phi <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">% 绕x轴旋转</span>
    <span class="token number">1</span> <span class="token number">0</span>        <span class="token number">0</span><span class="token punctuation">;</span> 
    <span class="token number">0</span> <span class="token operator">\</span>cos_phi  <span class="token operator">\</span>sin_phi<span class="token punctuation">;</span>
    <span class="token number">0</span> <span class="token operator">-</span><span class="token operator">\</span>sin_phi <span class="token operator">\</span>cos_phi<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">% 大地轴系到机体轴系的坐标转换矩阵</span>
R_phi <span class="token operator">*</span> R_theta <span class="token operator">*</span> R_psi<span class="token punctuation">;</span>
<span class="token comment">% 机体轴系到大地轴系的坐标转换矩阵</span>
<span class="token function">inv</span><span class="token punctuation">(</span>R_phi <span class="token operator">*</span> R_theta <span class="token operator">*</span> R_psi<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为</p>
<div class="language-matlab line-numbers-mode" data-ext="matlab"><pre v-pre class="language-matlab"><code><span class="token comment">% 大地轴系到机体轴系的坐标转换矩阵</span>
R_phi <span class="token operator">*</span> R_theta <span class="token operator">*</span> R_psi <span class="token operator">=</span>
<span class="token punctuation">[</span><span class="token operator">\</span>cos_psi<span class="token operator">*</span><span class="token operator">\</span>cos_theta<span class="token punctuation">,</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_psi<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">\</span>sin_theta<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">\</span>cos_psi<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token operator">*</span><span class="token operator">\</span>sin_theta <span class="token operator">-</span> <span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>sin_psi<span class="token punctuation">,</span> <span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>cos_psi <span class="token operator">+</span> <span class="token operator">\</span>sin_phi<span class="token operator">*</span><span class="token operator">\</span>sin_psi<span class="token operator">*</span><span class="token operator">\</span>sin_theta<span class="token punctuation">,</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token operator">\</span>sin_phi<span class="token operator">*</span><span class="token operator">\</span>sin_psi <span class="token operator">+</span> <span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>cos_psi<span class="token operator">*</span><span class="token operator">\</span>sin_theta<span class="token punctuation">,</span> <span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>sin_psi<span class="token operator">*</span><span class="token operator">\</span>sin_theta <span class="token operator">-</span> <span class="token operator">\</span>cos_psi<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token punctuation">,</span> <span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>cos_theta<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是</p>
<h1 id="大地轴系转机体轴系的坐标转换矩阵-t-n-b-为-t-n-b" tabindex="-1"><a class="header-anchor" href="#大地轴系转机体轴系的坐标转换矩阵-t-n-b-为-t-n-b" aria-hidden="true">#</a> 大地轴系转机体轴系的坐标转换矩阵$T_n^b$为
$$
T_n^b</h1>
<p>\begin{bmatrix}
\cos\psi \cos\theta &amp; \cos\theta \sin\psi &amp; -\sin\theta\
\cos\psi \sin\theta \sin\phi - \sin\psi \cos\phi &amp; \sin\psi \sin\theta \sin\phi + \cos\psi \cos\phi &amp; \cos\theta \sin\phi\
\cos\psi \sin\theta \cos\phi + \sin\psi \sin\phi &amp; \sin\psi \sin\theta \cos\phi - \cos\psi \sin\phi &amp; \cos\theta \cos\phi\
\end{bmatrix}
$$
机体轴系转大地轴系的坐标转换矩阵$T_b^n$为$T_n^b$的转置：
$$
T_b^n=\left(T_n^b\right)^{-1}=\left(T_n^b\right)^T
$$</p>
<h2 id="万向节死锁" tabindex="-1"><a class="header-anchor" href="#万向节死锁" aria-hidden="true">#</a> 万向节死锁</h2>
<p>比如机头向上抬头90度，那么飞机的滚转角旋转的$x'''$轴就会和偏航角旋转的$z$轴相重合，就无法做出绕$z'''$的侧向摆动了。</p>
<p>即此时$\theta=90^{\circ}$，那么大地轴系转机体轴系的坐标转换矩阵$T_n^b$为
$$
\begin{aligned}
T_n^b
&amp;=
\begin{bmatrix}
\cos\psi \cos\theta &amp; \cos\theta \sin\psi &amp; -\sin\theta\
\cos\psi \sin\theta \sin\phi - \sin\psi \cos\phi &amp; \sin\psi \sin\theta \sin\phi + \cos\psi \cos\phi &amp; \cos\theta \sin\phi\
\cos\psi \sin\theta \cos\phi + \sin\psi \sin\phi &amp; \sin\psi \sin\theta \cos\phi - \cos\psi \sin\phi &amp; \cos\theta \cos\phi\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
0 &amp; 0 &amp; -1\
\cos\psi \sin\phi - \sin\psi \cos\phi &amp; \sin\psi \sin\phi + \cos\psi \cos\phi &amp; 0\
\cos\psi \cos\phi + \sin\psi \sin\phi &amp; \sin\psi \cos\phi - \cos\psi \sin\phi &amp; 0\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
0 &amp; 0 &amp; -1\
-\sin(\psi-\phi) &amp; \cos(\psi-\phi) &amp; 0\
cos(\psi-\phi) &amp; \sin(\psi-\phi) &amp; 0\
\end{bmatrix}
\end{aligned}
$$
此时的姿态，其实对应了无数种欧拉角变换，即当俯仰角$\theta=90^{\circ}$时，只要偏航角$\psi$和滚转角$\phi$的大小相等且为任意值，均对应了同一种姿态。</p>
<h2 id="已知多旋翼水平加速度求姿态角" tabindex="-1"><a class="header-anchor" href="#已知多旋翼水平加速度求姿态角" aria-hidden="true">#</a> 已知多旋翼水平加速度求姿态角</h2>
<p>已知多旋翼水平加速飞行（即推力$T$在竖直方向上的分量等于重力），以及水平方向（前向和右向）的加速度$a_f$和$a_r$，求其姿态角。</p>
<h1 id="即有-偏航角-psi-0-m-b-e-begin-bmatrix-0-0-t-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#即有-偏航角-psi-0-m-b-e-begin-bmatrix-0-0-t-end-bmatrix" aria-hidden="true">#</a> 即有（偏航角$\psi=0$）：
$$
M_b^e
\begin{bmatrix}
0\
0\
-T\
\end{bmatrix}</h1>
<h1 id="begin-bmatrix-ma-f-ma-r-mg-end-bmatrix-把坐标变换公式-令偏航角-psi-0-具体带入上式中的-m-b-e-可得-begin-bmatrix-cos-theta-sin-theta-sin-phi-sin-theta-cos-phi-0-cos-phi-sin-phi-sin-theta-cos-theta-sin-phi-cos-theta-cos-phi-end-bmatrix-begin-bmatrix-0-0-t-end-bmatrix" tabindex="-1"><a class="header-anchor" href="#begin-bmatrix-ma-f-ma-r-mg-end-bmatrix-把坐标变换公式-令偏航角-psi-0-具体带入上式中的-m-b-e-可得-begin-bmatrix-cos-theta-sin-theta-sin-phi-sin-theta-cos-phi-0-cos-phi-sin-phi-sin-theta-cos-theta-sin-phi-cos-theta-cos-phi-end-bmatrix-begin-bmatrix-0-0-t-end-bmatrix" aria-hidden="true">#</a> \begin{bmatrix}
ma_f\
ma_r\
-mg\
\end{bmatrix}
$$
把坐标变换公式（令偏航角$\psi=0$）具体带入上式中的$M_b^e$，可得
$$
\begin{bmatrix}
\cos\theta &amp; \sin\theta\sin\phi &amp; \sin\theta \cos\phi\
0 &amp; \cos\phi &amp; -\sin\phi\
-\sin\theta &amp; \cos\theta\sin\phi &amp; \cos\theta\cos\phi\
\end{bmatrix}
\begin{bmatrix}
0\
0\
-T\
\end{bmatrix}</h1>
<p>\begin{bmatrix}
ma_f\
ma_r\
-mg\
\end{bmatrix}
$$
由上式第三行可得推力$T$：
$$
\begin{aligned}
&amp;\cos\theta\cos\phi \cdot T=mg\
\Rightarrow &amp;T=\frac{mg}{\cos\theta\cos\phi}
\end{aligned}
$$
由上上式第一行可得俯仰角$\theta$：
$$
\begin{aligned}
&amp;\sin\theta \cos\phi \cdot (-T)=ma_f\
\Rightarrow &amp;\sin\theta \cos\phi \cdot (-\frac{mg}{\cos\theta\cos\phi})=ma_f\
\Rightarrow &amp;-\tan\theta \cdot mg=ma_f\
\Rightarrow &amp;\theta=\arctan(-\frac{a_f}{g})
\end{aligned}
$$
由上上上式第二行可得滚转角$\phi$：
$$
\begin{aligned}
&amp;\sin\phi \cdot T=ma_r\
\Rightarrow &amp;\sin\phi \cdot \frac{mg}{\cos\theta\cos\phi}=ma_r\
\Rightarrow &amp;\tan\phi\cdot \frac{mg}{\cos\theta}=ma_r\
\Rightarrow &amp;\phi=\arctan(\cos\theta \frac{a_r}{g})
\end{aligned}
$$</p>
<h1 id="欧拉运动学方程" tabindex="-1"><a class="header-anchor" href="#欧拉运动学方程" aria-hidden="true">#</a> 欧拉运动学方程</h1>
<h2 id="欧拉运动学方程推导" tabindex="-1"><a class="header-anchor" href="#欧拉运动学方程推导" aria-hidden="true">#</a> 欧拉运动学方程推导</h2>
<p>已知机体角速度$w=[p,q,r]^T$，想求欧拉角速度$\phi'$，$\theta'$，$\psi'$。</p>
<p>这个不太方便求，故先得出由欧拉角速度求机体角速度的公式，然后反向变换得到由机体角速度得到欧拉角速度的公式。</p>
<p>现在求由欧拉角速度求机体角速度的公式：</p>
<p><img src="@source/docs/Engineering/autopilot/navigation/coord-trans-and-euler-kinematics-equation/pic/angle-rate-translation.png" alt="angle-rate-translation"></p>
<p>（1）偏航角速度的矢量方向为$z'$，其大小为$\psi'$，所以偏航角速度矢量在坐标系$x'y'z'$中为$\overrightarrow{\psi'}_{x'y'z'}=[0,0,\psi']^T$。</p>
<p>（2）俯仰角速度的矢量方向为$y''$，其大小为$\theta'$，所以俯仰角速度矢量在坐标系$x''y''z''$中为$\overrightarrow{\theta'}_{x''y''z''}=[0,\theta',0]^T$。</p>
<p>（3）滚转角速度的矢量方向为$x'''$，其大小为$\phi'$，所以滚转角速度矢量在坐标系$x'''y'''z'''$中为$\overrightarrow{\phi'}_{x'''y'''z'''}=[\phi',0,0]^T$。</p>
<p>接下来，只需要分别把上述三个偏航、俯仰、滚转角速度矢量使用坐标转换矩阵从其所在的坐标系变换到机体坐标系，加起来，就组成了机体轴角速度$w=[p,q,r]^T$了，这是因为三维空间中的矢量可以由三个线性无关的矢量组合表示（线性代数课本上讲的）。</p>
<p>（1）将偏航角速度矢量使用坐标转换矩阵从其所在的坐标系变换到机体坐标系：
$$
\begin{aligned}
R_x(\phi)\cdot R_y(\theta)\cdot\overrightarrow{\psi'}<em>{x'y'z'}
&amp;=
\begin{bmatrix}
1 &amp; 0 &amp; 0\
0 &amp; \cos\phi &amp; \sin\phi\
0 &amp; -\sin\phi &amp; \cos\phi\
\end{bmatrix}
\cdot
\begin{bmatrix}
\cos\theta &amp; 0 &amp; -\sin\theta\
0 &amp; 1 &amp; 0\
\sin\theta &amp; 0 &amp; \cos\theta\
\end{bmatrix}
\cdot
\begin{bmatrix}
0\
0\
\psi'\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
-\sin\theta\
\cos\theta \sin\phi\
\cos\theta \cos\phi\
\end{bmatrix}
\cdot
\psi'
\end{aligned}
$$
（2）将俯仰角速度矢量使用坐标转换矩阵从其所在的坐标系变换到机体坐标系：
$$
\begin{aligned}
R_x(\phi)\cdot\overrightarrow{\theta'}</em>{x''y''z''}
&amp;=
\begin{bmatrix}
1 &amp; 0 &amp; 0\
0 &amp; \cos\phi &amp; \sin\phi\
0 &amp; -\sin\phi &amp; \cos\phi\
\end{bmatrix}
\cdot
\begin{bmatrix}
0\
\theta'\
0\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
0\
\cos\phi\
-\sin\phi\
\end{bmatrix}
\cdot
\theta'
\end{aligned}
$$
（3）将滚转角速度矢量使用坐标转换矩阵从其所在的坐标系变换到机体坐标系：
$$
\begin{aligned}
I\cdot \overrightarrow{\phi'}<em>{x'''y'''z'''}
&amp;=
\begin{bmatrix}
1&amp;0&amp;0\
0&amp;1&amp;0\
0&amp;0&amp;1\
\end{bmatrix}
\cdot
\begin{bmatrix}
\phi'\
0\
0\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
1\
0\
0\
\end{bmatrix}
\cdot
\phi'
\end{aligned}
$$
则机体轴角速度$w$可表示为
$$
\begin{aligned}
w=\begin{bmatrix}
p\
q\
r\
\end{bmatrix}
&amp;=
R_x(\phi)\cdot R_y(\theta)\cdot\overrightarrow{\psi'}</em>{x'y'z'}+
R_x(\phi)\cdot\overrightarrow{\theta'}<em>{x''y''z''}+
I\cdot \overrightarrow{\phi'}</em>{x'''y'''z'''}\
&amp;=
\begin{bmatrix}
-\sin\theta\
\cos\theta \sin\phi\
\cos\theta \cos\phi\
\end{bmatrix}
\cdot
\psi'+
\begin{bmatrix}
0\
\cos\phi\
-\sin\phi\
\end{bmatrix}
\cdot
\theta'+
\begin{bmatrix}
1\
0\
0\
\end{bmatrix}
\cdot
\phi'\
&amp;=
\begin{bmatrix}
1&amp;0&amp;-\sin\theta\
0&amp;\cos\phi&amp;\cos\theta \sin\phi\
0&amp;-\sin\phi&amp;\cos\theta \cos\phi\
\end{bmatrix}
\cdot
\begin{bmatrix}
\phi'\
\theta'\
\psi'\
\end{bmatrix}
\end{aligned}
$$
至此，我们已经得出由欧拉角速度求机体角速度的公式，然后反向变换得到由机体角速度得到欧拉角速度的公式：
$$
\begin{aligned}
\begin{bmatrix}
\phi'\
\theta'\
\psi'\
\end{bmatrix}
&amp;=
\begin{bmatrix}
1&amp;0&amp;-\sin\theta\
0&amp;\cos\phi&amp;\cos\theta \sin\phi\
0&amp;-\sin\phi&amp;\cos\theta \cos\phi\
\end{bmatrix}^{-1}
\cdot
\begin{bmatrix}
p\
q\
r\
\end{bmatrix}\
&amp;=
\begin{bmatrix}
1&amp;\tan\theta \sin\phi&amp;\tan\theta \cos\phi\
0&amp;\cos\phi&amp;-\sin\phi\
0&amp;\frac{\sin\phi}{\cos\theta}&amp;\frac{\cos\phi}{\cos\theta}\
\end{bmatrix}
\cdot
\begin{bmatrix}
p\
q\
r\
\end{bmatrix}
\end{aligned}
$$
上式中矩阵求逆的MatLab代码如下：</p>
<div class="language-matlab line-numbers-mode" data-ext="matlab"><pre v-pre class="language-matlab"><code>syms <span class="token operator">\</span>cos_psi <span class="token operator">\</span>sin_psi <span class="token operator">\</span>cos_theta <span class="token operator">\</span>sin_theta <span class="token operator">\</span>cos_phi <span class="token operator">\</span>sin_phi<span class="token punctuation">;</span>

Mat_rpy2pqr <span class="token operator">=</span> <span class="token punctuation">[</span>
     <span class="token number">1</span> <span class="token number">0</span>        <span class="token operator">-</span><span class="token operator">\</span>sin_theta<span class="token punctuation">;</span>
     <span class="token number">0</span> <span class="token operator">\</span>cos_phi  <span class="token operator">\</span>sin_phi <span class="token operator">*</span> <span class="token operator">\</span>cos_theta<span class="token punctuation">;</span>
     <span class="token number">0</span> <span class="token operator">-</span><span class="token operator">\</span>sin_phi <span class="token operator">\</span>cos_phi <span class="token operator">*</span> <span class="token operator">\</span>cos_theta<span class="token punctuation">]</span><span class="token punctuation">;</span>

Mat_pqr2rpy <span class="token operator">=</span> <span class="token function">inv</span><span class="token punctuation">(</span>Mat_rpy2pqr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为</p>
<div class="language-matlab line-numbers-mode" data-ext="matlab"><pre v-pre class="language-matlab"><code>Mat_pqr2rpy <span class="token operator">=</span>
 
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">\</span>sin_phi<span class="token operator">*</span><span class="token operator">\</span>sin_theta<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">\</span>cos_phi<span class="token operator">*</span><span class="token operator">\</span>sin_theta<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">\</span>cos_phi<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">\</span>sin_phi<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">\</span>sin_phi<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">\</span>cos_phi<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>cos_phi<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token operator">\</span>cos_theta<span class="token operator">*</span><span class="token operator">\</span>sin_phi<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="由体轴角加速度限制求欧拉角角加速度限制" tabindex="-1"><a class="header-anchor" href="#由体轴角加速度限制求欧拉角角加速度限制" aria-hidden="true">#</a> 由体轴角加速度限制求欧拉角角加速度限制</h2>
<p>由
$$
\begin{aligned}
\begin{bmatrix}
p\
q\
r\
\end{bmatrix}
&amp;=
\begin{bmatrix}
1&amp;0&amp;-\sin\theta\
0&amp;\cos\phi&amp;\cos\theta \sin\phi\
0&amp;-\sin\phi&amp;\cos\theta \cos\phi\
\end{bmatrix}
\cdot
\begin{bmatrix}
\phi'\
\theta'\
\psi'\
\end{bmatrix}
\end{aligned}
$$
可得
$$
\begin{aligned}
\text{AccMax}<em>{roll}&amp;=\min(r'</em>{\max})\
\text{AccMax}<em>{pitch}&amp;=\min(\frac{q'</em>{\max}}{\cos\phi},\frac{r'<em>{\max}}{\sin\phi})\
\text{AccMax}</em>{roll}&amp;=\min(\frac{p'<em>{\max}}{\sin\theta},\frac{q'</em>{\max}}{\cos\theta \sin\phi},\frac{r'_{\max}}{\cos\theta \cos\phi})
\end{aligned}
$$
分析：</p>
<p>假设向量$\overrightarrow{a}$和$\overrightarrow{b}$一起构成了向量$\overrightarrow{c}$，已知向量之间的夹角（即夹角已经固定），那么，$\overrightarrow{c}$的最大限制，其实就是$\overrightarrow{c}$在$\overrightarrow{a}$和$\overrightarrow{b}$上的投影，分别不能超过$\overrightarrow{a}$和$\overrightarrow{b}$各自的最大限制，也即：
$$
c_{\max}=\min(\frac{a_{\max}}{\cos&lt;a,c&gt;},\frac{b_{\max}}{\cos&lt;b,c&gt;})
$$</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/bitaohu/article/details/80358773" target="_blank" rel="noopener noreferrer">飞行器控制笔记（二）——姿态解算之坐标变换与欧拉角更新姿态<ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/349306054" target="_blank" rel="noopener noreferrer">四旋翼飞行器建模（一）— 动力学及运动学方程<ExternalLinkIcon/></a></li>
</ul>
<p><code v-pre>矩阵旋转</code>和<code v-pre>欧拉运动学方程</code>两节参考此博客。</p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/45404840" target="_blank" rel="noopener noreferrer">三维旋转：欧拉角、四元数、旋转矩阵、轴角之间的转换<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/20926052" target="_blank" rel="noopener noreferrer">飞行器飞行动力学（二）坐标系与夹角们<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/a735148617/article/details/116740453" target="_blank" rel="noopener noreferrer">欧拉角速度与角速度的关系推导——欧拉运动方程<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_25544855/article/details/81944829" target="_blank" rel="noopener noreferrer">欧拉角速度和机体角速度<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/512513564" target="_blank" rel="noopener noreferrer">刚体的运动学与动力学方程<ExternalLinkIcon/></a></p>
</div></template>


