<template><div><h1 id="负采样" tabindex="-1"><a class="header-anchor" href="#负采样" aria-hidden="true">#</a> 负采样</h1>
<ul>
<li><RouterLink to="/docs/Engineering/machine-learning/tips/tips.html">返回上层目录</RouterLink></li>
<li><a href="#%E4%B8%A4%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7">两种负采样</a>
<ul>
<li><a href="#%E7%AC%AC%E4%B8%80%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7">第一种负采样</a></li>
<li><a href="#%E7%AC%AC%E4%BA%8C%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7">第二种负采样</a></li>
</ul>
</li>
<li><a href="#%E4%B8%A4%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%8C%BA%E5%88%AB">两种负采样的本质区别</a>
<ul>
<li><a href="#%E7%AC%AC%E4%B8%80%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7%E6%B1%82%E6%A2%AF%E5%BA%A6">第一种负采样求梯度</a></li>
<li><a href="#%E7%AC%AC%E4%BA%8C%E7%A7%8D%E8%B4%9F%E9%87%87%E6%A0%B7%E6%B1%82%E6%A2%AF%E5%BA%A6">第二种负采样求梯度</a></li>
</ul>
</li>
</ul>
<h1 id="两种负采样" tabindex="-1"><a class="header-anchor" href="#两种负采样" aria-hidden="true">#</a> 两种负采样</h1>
<h2 id="第一种负采样" tabindex="-1"><a class="header-anchor" href="#第一种负采样" aria-hidden="true">#</a> 第一种负采样</h2>
<p>采样方式为：
$$
\begin{aligned}
&lt;u, i_0&gt;,\
&lt;u, i_1&gt;,\
&lt;u, i_2&gt;,\
&lt;u, i_3&gt;,\
&lt;u, i_4&gt;,\
&lt;u, i_5&gt;
\end{aligned}
$$
其中，$i_0$为正样本，$i_1,\ i_2, ... , i_5$为负样本。</p>
<p>损失计算方式为
$$
\begin{aligned}
\text{loss}&amp;=-p_0\mathop{\Pi}<em>{i=1}^5(1-p_i)\
\Rightarrow\text{loss}&amp;=-log(p_0)-\sum</em>{i=1}^5log(1-p_i)\
&amp;=-log\left(\frac{1}{1+\text{exp}(-s_0)}\right)-\sum_{i=1}^5log\left(1-\frac{1}{1+\text{exp}(-s_i)}\right)\
\end{aligned}
$$</p>
<h2 id="第二种负采样" tabindex="-1"><a class="header-anchor" href="#第二种负采样" aria-hidden="true">#</a> 第二种负采样</h2>
<p>采样方式为：
$$
&lt;u, i_0, i_1, i_2, i_3, i_4, i_5&gt;
$$
其中，$i_0$为正样本，$i_1,\ i_2, ... , i_5$为负样本。</p>
<p>损失计算方式为
$$
\begin{aligned}
&amp;\text{loss}=-\frac{\text{exp}(s_0)}{\sum_{i=0}^5\text{exp}(s_i)}\
\Rightarrow &amp;\text{loss}=-(s_0-\text{log}\sum_{i=0}^5\text{exp}(s_i))=-s_0+\text{log}\sum_{i=0}^5\text{exp}(s_i)
\end{aligned}
$$</p>
<h1 id="两种负采样的本质区别" tabindex="-1"><a class="header-anchor" href="#两种负采样的本质区别" aria-hidden="true">#</a> 两种负采样的本质区别</h1>
<p>对两种负采样的损失函数分别求梯度。</p>
<h2 id="第一种负采样求梯度" tabindex="-1"><a class="header-anchor" href="#第一种负采样求梯度" aria-hidden="true">#</a> 第一种负采样求梯度</h2>
<p>$$
\begin{aligned}
\frac{\partial \text{loss}}{\partial s_0}&amp;=\frac{\partial\left[-log\left(\frac{1}{1+\text{exp}(-s_0)}\right)-\sum_{i=1}^5log\left(1-\frac{1}{1+\text{exp}(-s_i)}\right)\right]}{\partial s_0}\
&amp;=-\frac{p_0(1-p_0)}{p_0}\
&amp;=-1+p_0\</p>
<p>\frac{\partial \text{loss}}{\partial s_i}|<em>{i=1,2,...,5}&amp;=\frac{\partial\left[-log\left(\frac{1}{1+\text{exp}(-s_0)}\right)-\sum</em>{i=1}^5log\left(1-\frac{1}{1+\text{exp}(-s_i)}\right)\right]}{\partial s_i}\
&amp;=-\frac{p_i(1-p_i)}{1-p_i}\
&amp;=p_i\
\end{aligned}
$$</p>
<p>其中，上式的推导用到了 sigmoid导数的特点：$f'(z)=f(z)(1-f(z))$。</p>
<p>注意，这里的
$$
\begin{aligned}
\sum_{i=0}^5\frac{\partial \text{loss}}{\partial s_i}=-1+\sum_{i=0}^5p_i\neq0
\end{aligned}
$$
即<strong>所有的变量$s_i$的梯度的和不是1</strong></p>
<h2 id="第二种负采样求梯度" tabindex="-1"><a class="header-anchor" href="#第二种负采样求梯度" aria-hidden="true">#</a> 第二种负采样求梯度</h2>
<p>$$
\begin{aligned}
\frac{\partial \text{loss}}{\partial s_0}&amp;=\frac{\partial[-(s_0-\text{log}\sum_{i=0}^5\text{exp}(s_i))]}{\partial s_0}\
&amp;=-1+\frac{\text{exp}(s_0)}{\sum_{i=0}^5\text{exp}(s_i)}\
&amp;=-1+p_0\</p>
<p>\frac{\partial \text{loss}}{\partial s_i}|<em>{i=1,2,...,5}&amp;=\frac{\partial[-(s_0-\text{log}\sum</em>{i=0}^5\text{exp}(s_i))]}{\partial s_i}\
&amp;=\frac{\text{exp}(s_i)}{\sum_{i=0}^5\text{exp}(s_i)}\
&amp;=p_i\
\end{aligned}
$$</p>
<p>注意：所有变量的梯度值相加等于1:
$$
\begin{aligned}
\sum_{i=0}^5\frac{\partial \text{loss}}{\partial s_i}=-1+\sum_{i=0}^5p_i=-1+1=0
\end{aligned}
$$
所以，<strong>每个变量$s_i$的梯度更新值是相互制约的，总和等于1</strong>。</p>
<p><strong>这就是两种负采样的本质区别，即所有的变量$s_i$的梯度的和是否等于1</strong>。</p>
</div></template>


