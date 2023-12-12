<template><div><h1 id="openmp" tabindex="-1"><a class="header-anchor" href="#openmp" aria-hidden="true">#</a> OpenMP</h1>
<ul>
<li><RouterLink to="/docs/Engineering/model-deployment/parallel-computing/parallel-computing.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%88%A9%E7%94%A8OpenMP%E6%9D%A5%E7%9F%A9%E9%98%B5%E5%B9%B6%E8%A1%8C%E8%AE%A1%E7%AE%97">利用OpenMP来矩阵并行计算</a></li>
<li><a href="#IDE%E9%85%8D%E7%BD%AEopenMP">IDE配置openMP</a>
<ul>
<li><a href="#VisualStudio%E9%85%8D%E7%BD%AEopenMP">VisualStudio配置openMP</a></li>
<li><a href="#CLion%E9%85%8D%E7%BD%AEopenMP">CLion配置openMP</a></li>
</ul>
</li>
</ul>
<h1 id="利用openmp来矩阵并行计算" tabindex="-1"><a class="header-anchor" href="#利用openmp来矩阵并行计算" aria-hidden="true">#</a> 利用OpenMP来矩阵并行计算</h1>
<p>我们想求如下的矩阵和向量乘法
$$
\begin{aligned}
y_{[3,1]}&amp;=M_{[3,2]}x_{[2,1]}+b_{[3,1]}\
\begin{bmatrix}
2.1\
5.2\
8.3
\end{bmatrix}
&amp;=
\begin{bmatrix}
1 &amp; 2\
3 &amp; 4\
5 &amp; 6
\end{bmatrix}
\begin{bmatrix}
1\
0.5
\end{bmatrix}
+
\begin{bmatrix}
0.1\
0.2\
0.3
\end{bmatrix}
\end{aligned}
$$
但是，给的矩阵和向量的原始形式都是个一维数组，即
$$
\begin{aligned}
y_{[3,1]}&amp;=M_{[3,2]}x_{[2,1]}+b_{[3,1]}\
\begin{bmatrix}
2.1 &amp; 5.2 &amp; 8.3
\end{bmatrix}
&amp;=
\begin{bmatrix}
1 &amp; 3 &amp; 5 &amp; 2 &amp; 4 &amp; 6
\end{bmatrix}
\begin{bmatrix}
1 &amp; 0.5
\end{bmatrix}
+
\begin{bmatrix}
0.1 &amp; 0.2 &amp; 0.3
\end{bmatrix}
\end{aligned}
$$
需要你把原始形式的转换成适合矩阵向量乘法的形式。</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>auto input_dim = 2;
auto output_dim = 3;
const std::vector&lt;float&gt; input = { 1, 0.5 };
const std::array&lt;float, 6&gt; weights = { 1, 3, 5, 2, 4, 6 };
const std::array&lt;float, 3&gt; biases = { 0.1, 0.2, 0.3 };
// 这个size_t W在不同的变，可以不用在模板里指定，真正由函数参数array&lt;float, W&gt;&amp; weights指定
std::vector&lt;float&gt; output(output_dim);

auto input_ptr = input.data();
auto weights_ptr = weights.data();
auto biases_ptr = biases.data();
auto output_ptr = output.data();
#pragma omp parallel for
for (unsigned int i = 0; i &lt; output_dim; i++) {
    for (unsigned int j = 0; j &lt; input_dim; j++) {
    	*(output_ptr + i) += *(weights_ptr + j * output_dim + i) * *(input_ptr + j);
    }
    *(output_ptr + i) += *(biases_ptr + i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ide配置openmp" tabindex="-1"><a class="header-anchor" href="#ide配置openmp" aria-hidden="true">#</a> IDE配置openMP</h1>
<h2 id="visualstudio配置openmp" tabindex="-1"><a class="header-anchor" href="#visualstudio配置openmp" aria-hidden="true">#</a> VisualStudio配置openMP</h2>
<p>（1）在项目属性里按照下图进行配置，开启OpenMP支持。</p>
<p><img src="@source/docs/Engineering/model-deployment/parallel-computing/openmp/pic/vs-config.png" alt="vs-config"></p>
<p>（2）开始写OpenMP的代码，例子：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>void main() {
#pragma omp parallel for
    for(int i = 0; i &lt; 100; ++i)
        printf(&quot;i = %d, I am Thread %d\n&quot;, i, omp_get_thread_num());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clion配置openmp" tabindex="-1"><a class="header-anchor" href="#clion配置openmp" aria-hidden="true">#</a> CLion配置openMP</h2>
<p>配置CMakeList.txt：</p>
<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre v-pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.17</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>openMP C<span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_C_STANDARD</span> <span class="token number">99</span><span class="token punctuation">)</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>openMP main.c<span class="token punctuation">)</span>
<span class="token comment"># openMP 配置</span>
<span class="token function">FIND_PACKAGE</span><span class="token punctuation">(</span>OpenMP REQUIRED<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>OPENMP_FOUND<span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">"OPENMP FOUND"</span><span class="token punctuation">)</span>  
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_C_FLAGS</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">CMAKE_C_FLAGS</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">OpenMP_C_FLAGS</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>  
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_CXX_FLAGS</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">CMAKE_CXX_FLAGS</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">OpenMP_CXX_FLAGS</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>
<span class="token keyword">endif</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="https://www.php1.cn/detail/XiangJie_CLion_P_8884a2b8.html" target="_blank" rel="noopener noreferrer">详解CLion配置openMP的方法<ExternalLinkIcon/></a></p>
<h2 id="makefile配置openmp" tabindex="-1"><a class="header-anchor" href="#makefile配置openmp" aria-hidden="true">#</a> Makefile配置OpenMP</h2>
<p>要在Makefile中的两处添加<code v-pre>-fopenmp</code>标志：</p>
<ul>
<li>
<p>在<code v-pre>CXXFLAGS</code>中添加<code v-pre>-fopenmp</code>，否则编译器不支持OpenMP并行，并行不起作用。</p>
<p><code v-pre>CFLAGS = -pipe -std=c++11 -fopenmp -O2</code></p>
</li>
</ul>
<p>加了上面，如果编译报错，那就要在加上：</p>
<ul>
<li>
<p>在<code v-pre>LFLAGS</code>处加上<code v-pre>-foenmp</code>。</p>
<p><code v-pre>LFLAGS = -fopenmp</code></p>
</li>
</ul>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_44210987/article/details/112388379" target="_blank" rel="noopener noreferrer">多线程使用1--#pragma omp parallel for<ExternalLinkIcon/></a></li>
</ul>
<p>讲了OpenMP的使用方法，以及其中的互斥，竞争，保护等操作。</p>
<p><a href="https://zhuanlan.zhihu.com/p/81025414" target="_blank" rel="noopener noreferrer">并行计算笔记(004)-OpenMP的简介<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/530489840" target="_blank" rel="noopener noreferrer">Openmp用法小结<ExternalLinkIcon/></a></p>
</div></template>


