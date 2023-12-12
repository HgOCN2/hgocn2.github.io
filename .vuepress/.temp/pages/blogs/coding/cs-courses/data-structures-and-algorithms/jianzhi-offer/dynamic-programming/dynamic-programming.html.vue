<template><div><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1>
<ul>
<li><RouterLink to="/blogs/coding/cs-courses/data-structures-and-algorithms/jianzhi-offer/jianzhi-offer.html">返回上层目录</RouterLink></li>
<li><a href="#%E5%89%91%E6%8C%87offer14%EF%BC%9A%E5%89%AA%E7%BB%B3%E5%AD%90">剑指offer14：剪绳子</a></li>
</ul>
<h1 id="剑指offer14-剪绳子" tabindex="-1"><a class="header-anchor" href="#剑指offer14-剪绳子" aria-hidden="true">#</a> 剑指offer14：剪绳子</h1>
<blockquote>
<p>题目：给你一根长度为n绳子，请把绳子剪成m段（m、n都是整数，n&gt;1并且m≥1）。每段的绳子的长度记为k[0]、k[1]、……、k[m]。k[0]*k[1]*…*k[m]可能的最大乘积是多少？例如当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到最大的乘积18。</p>
</blockquote>
<p>首先定义函数f(n)为把长度为n的绳子剪成若干段后各段长度乘积的最大值。在剪第一刀的时候，我们有n-1中可能的选择，也就是剪出来的第一段绳子可能长度为1，2，...，n-1。因此f(n) = max(f(i) * f(n-i))。其中0&lt;i&lt;n。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;cstdio&gt;
#include &lt;string&gt;
#include &lt;stack&gt;
 
using namespace std;
 
int maxProductAfterCutting_Solution1(int length)
{
	if (length &lt; 2)
		return 0;
	if (length == 2)
		return 1;
	if (length == 3)
		return 2;
	int *products = new int[length + 1];
	products[0] = 0;
	products[1] = 1;
	products[2] = 2;
	products[3] = 3;
 
	int max = 0;
	for (int i = 4; i &lt;= length; ++i)
	{
		max = 0;
		for (int j = 1; j &lt;= i / 2; j++)
		{
			int product = products[j] * products[i - j];
			if (product &gt; max)
				max = product;
		}
		products[i] = max;
	}
	max = products[length];
	delete[] products;
	return max;
}
int main()
{
	cout &lt;&lt;maxProductAfterCutting_Solution1(10)&lt;&lt;endl;
	system(&quot;pause&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/sinat_36161667/article/details/80785142" target="_blank" rel="noopener noreferrer">面试题：剪绳子──动态规划 or 贪心算法<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
</div></template>


