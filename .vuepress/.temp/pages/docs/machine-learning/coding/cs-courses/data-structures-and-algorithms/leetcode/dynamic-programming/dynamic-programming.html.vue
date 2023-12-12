<template><div><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/leetcode/leetcode.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="_05最长回文子串" tabindex="-1"><a class="header-anchor" href="#_05最长回文子串" aria-hidden="true">#</a> 05最长回文子串</h1>
<blockquote>
<p>题目：给定一个字符串 <code v-pre>s</code>，找到 <code v-pre>s</code> 中最长的回文子串。你可以假设 <code v-pre>s</code> 的最大长度为 1000。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: "cbbd"
输出: "bb"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>为了改进暴力法，我们首先观察如何避免在验证回文时进行不必要的重复计算。考虑<code v-pre>ababa</code>这个示例。如果我们已经知道<code v-pre>bab</code>是回文，那么很明显，<code v-pre>ababa</code>一定是回文，因为它的左首字母和右尾字母是相同的。</p>
<p>给出<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>i</mi><mo separator="true">,</mo><mi>j</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(i,j)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">)</span></span></span></span>的定义如下：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right" columnspacing=""><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>i</mi><mo separator="true">,</mo><mi>j</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.16em" columnalign="center center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>t</mi><mi>r</mi><mi>u</mi><mi>e</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mtext>如果子串Si...Sj是回文子串</mtext></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi>f</mi><mi>a</mi><mi>l</mi><mi>s</mi><mi>e</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mtext>其他情况</mtext></mstyle></mtd></mtr></mtable></mrow></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">
\begin{aligned}
P(i,j)=\left\{\begin{matrix}
&amp;true, &amp;\text{如果子串Si...Sj是回文子串}\\ 
&amp;false, &amp;\text{其他情况}
\end{matrix}\right.
\end{aligned}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7em;vertical-align:-1.1em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6em;"><span style="top:-3.6em;"><span class="pstrut" style="height:3.45em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">{</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.45em;"><span class="pstrut" style="height:2.84em;"></span><span class="mord"></span></span><span style="top:-2.25em;"><span class="pstrut" style="height:2.84em;"></span><span class="mord"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">u</span><span class="mord mathnormal">e</span><span class="mpunct">,</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">se</span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord cjk_fallback">如果子串</span><span class="mord">Si...Sj</span><span class="mord cjk_fallback">是回文子串</span></span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord cjk_fallback">其他情况</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.1em;"><span></span></span></span></span></span></span></span></span></span></span></span></p>
<p>因此，</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>i</mi><mo separator="true">,</mo><mi>j</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>P</mi><mo stretchy="false">(</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo separator="true">,</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mtext> and </mtext><msub><mi>S</mi><mi>i</mi></msub><mo>=</mo><mo>=</mo><msub><mi>S</mi><mi>j</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
P(i,j)=(P(i+1,j-1)\ \text{and}\ S_i==S_j)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace"> </span><span class="mord text"><span class="mord">and</span></span><span class="mspace"> </span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">==</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span></p>
<p>这产生了一个直观的动态规划解法，我们首先初始化一字母和二字母的回文，然后找到所有三字母回文，并依此类推…</p>
<p>复杂度分析</p>
<p>时间复杂度：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，这里给出我们的运行时间复杂度为<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>。</p>
<p>空间复杂度：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，该方法使用<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>的空间来存储表。</p>
<p>你能进一步优化上述解法的空间复杂度吗？</p>
<p>中心扩展算法
事实上，只需使用恒定的空间，我们就可以在<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>的时间内解决这个问题。</p>
<p>我们观察到回文中心的两侧互为镜像。因此，回文可以从它的中心展开，并且只有2n - 1个这样的中心。</p>
<p>你可能会问，为什么会是2n - 1（即奇数n + 偶数n-1）个，而不是n个中心？原因在于所含字母数为偶数的回文的中心可以处于两字母之间（例如<code v-pre>abba</code>的中心在两个<code v-pre>b</code>之间）。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
	string longestPalindrome(string s) {
		if(s.empty()) return &quot;&quot;;
		int start = 0, end = 0;
		for (int i = 0; i &lt; s.length(); i++) {
			int len1 = expandAroundCenter(s, i, i);
			int len2 = expandAroundCenter(s, i, i + 1);
			int len = max(len1, len2);
			if (len &gt; end - start + 1) {
				start = i - (len - 1) / 2;
				end = i + len / 2;
			}
		}
		return s.substr(start, end - start + 1);
	}
private:
	int expandAroundCenter(string s, int left, int right) {
		int L = left, R = right;
		while (L &gt;= 0 &amp;&amp; R &lt; s.length() &amp;&amp; s[L] == s[R]) {
			L--;
			R++;
		}
		return R - L - 1;
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_53最大子序和" tabindex="-1"><a class="header-anchor" href="#_53最大子序和" aria-hidden="true">#</a> 53最大子序和</h1>
<blockquote>
<p>题目：给定一个整数数组 <code v-pre>nums</code> ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>
<p><strong>示例:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 连续子数组 <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> 的和最大，为 <span class="token number">6</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>动态规划法：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>d</mi><mi>p</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo>=</mo><mi>m</mi><mi>a</mi><mi>x</mi><mo stretchy="false">(</mo><mi>d</mi><mi>p</mi><mo stretchy="false">[</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo><mo>+</mo><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo separator="true">,</mo><mtext> </mtext><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi><mo stretchy="false">[</mo><mi>i</mi><mo stretchy="false">]</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
dp[i]=max(dp[i-1]+nums[i], \ nums[i])
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">p</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ma</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal">d</span><span class="mord mathnormal">p</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">]</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span><span class="mopen">[</span><span class="mord mathnormal">i</span><span class="mclose">])</span></span></span></span></span></p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int maxSubArray(vector&lt;int&gt;&amp; nums) {
        int dp = nums[0];
        int ret_max = dp;

        for(int i = 1; i &lt; nums.size(); i++) {
            dp = max(dp + nums[i], nums[i]);
            ret_max = max(ret_max, dp);
        }

        return ret_max;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_62不同路径" tabindex="-1"><a class="header-anchor" href="#_62不同路径" aria-hidden="true">#</a> 62不同路径</h1>
<blockquote>
<p>题目：一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？</p>
</blockquote>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/leetcode/dynamic-programming/pic/leetcode-62.png" alt="leetcode-62"></p>
<p>例如，上图是一个7 x 3 的网格。有多少可能的路径？</p>
<p>说明：m 和 n 的值均不超过 100。</p>
<p>示例 1:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> m <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">2</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解释:</p>
<p>从左上角开始，总共有 3 条路径可以到达右下角。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span> 向右 <span class="token operator">-</span><span class="token operator">></span> 向右 <span class="token operator">-</span><span class="token operator">></span> 向下
<span class="token number">2.</span> 向右 <span class="token operator">-</span><span class="token operator">></span> 向下 <span class="token operator">-</span><span class="token operator">></span> 向右
<span class="token number">3.</span> 向下 <span class="token operator">-</span><span class="token operator">></span> 向右 <span class="token operator">-</span><span class="token operator">></span> 向右
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思路一：排列组合</strong></p>
<p>因为机器到底右下角，向下几步，向右几步都是固定的，</p>
<p>比如，m=3, n=2，我们只要向下 1 步，向右 2 步就一定能到达终点。</p>
<p>所以有<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mi>C</mi><mrow><mi>m</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msubsup></mrow><annotation encoding="application/x-tex">C_{m+n-2}^{m-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1789em;vertical-align:-0.3246em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8542em;"><span style="top:-2.4337em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">2</span></span></span></span><span style="top:-3.1031em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3246em;"><span></span></span></span></span></span></span></span></span></span>。</p>
<p><strong>思路二：动态规划</strong></p>
<p>我们令<code v-pre>dp[i][j]</code>是到达 i, j 最多路径</p>
<p>动态方程：<code v-pre>dp[i][j] = dp[i-1][j] + dp[i][j-1]</code>。</p>
<p>注意，对于第一行<code v-pre>dp[0][j]</code>，或者第一列<code v-pre>dp[i][0]</code>，由于都是在边界，所以只能为1。</p>
<p>时间复杂度：O(m*n)</p>
<p>空间复杂度：O(m * n)</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
	int uniquePaths(int m, int n) {
		int dp[m][n];
		for (int i = 0; i &lt; n; i++) dp[0][i] = 1;
		for (int i = 0; i &lt; m; i++) dp[i][0] = 1;
		for (int i = 1; i &lt; m; i++) {
			for (int j = 1; j &lt; n; j++) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}
		return dp[m - 1][n - 1];
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/unique-paths/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_63不同路径ii" tabindex="-1"><a class="header-anchor" href="#_63不同路径ii" aria-hidden="true">#</a> 63不同路径II</h1>
<blockquote>
<p>题目：一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。现在考虑<strong>网格中有障碍物</strong>。那么从左上角到右下角将会有多少条不同的路径？</p>
<p>网格中的障碍物和空位置分别用 <code v-pre>1</code> 和 <code v-pre>0</code> 来表示。</p>
</blockquote>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/leetcode/dynamic-programming/pic/leetcode-62.png" alt="leetcode-62"></p>
<p>这一题是不同路径的一个进阶版，添加了障碍物，同样采用动态规划，区别是：</p>
<ul>
<li>对于第一列或者第一行，只要当前的格子上有障碍物，那么之后的列或者行均不可能到达。</li>
<li>对于中间的格子，当有障碍物时，该格子的路径设置为0，这样该格子对于其后续的格子的路径数就没有贡献了。</li>
</ul>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
	int uniquePathsWithObstacles(vector&lt;vector&lt;int&gt;&gt;&amp; obstacleGrid) {
		int m = (int)obstacleGrid.size();
		int n = (int)obstacleGrid[0].size();
		if(m &lt; 1 || n &lt; 1 || obstacleGrid[0][0] == 1) return 0;

		long dp[m][n];
		memset(dp, 0, m * n * sizeof(long));

		for (int i = 0; i &lt; n; i++) {
			if(obstacleGrid[0][i] == 1) {
				dp[0][i] = 0;
				break;
			} else {
				dp[0][i] = 1;
			}
		}
		for (int i = 0; i &lt; m; i++) {
			if(obstacleGrid[i][0] == 1) {
				dp[i][0] = 0;
				break;
			} else {
				dp[i][0] = 1;
			}
		}
		for (int i = 1; i &lt; m; i++) {
			for (int j = 1; j &lt; n; j++) {
				if(obstacleGrid[i][j] == 1) {
					dp[i][j] = 0;
				} else {
					dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
				}
			}
		}
		return dp[m - 1][n - 1];
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/unique-paths-ii/solution/dong-tai-gui-hua-duo-yu-yan-zong-you-yi-kuan-gua-h/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_64最小路径和" tabindex="-1"><a class="header-anchor" href="#_64最小路径和" aria-hidden="true">#</a> 64最小路径和</h1>
<blockquote>
<p>题目：给定一个包含非负整数的 <em>m</em> x <em>n</em> 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p>
<p>**说明：**每次只能向下或者向右移动一步。</p>
</blockquote>
<p><img src="@source/docs/machine-learning/coding/cs-courses/data-structures-and-algorithms/leetcode/dynamic-programming/pic/leetcode-62.png" alt="leetcode-62"></p>
<p><strong>示例:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">7</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 因为路径 <span class="token number">1</span>→<span class="token number">3</span>→<span class="token number">1</span>→<span class="token number">1</span>→<span class="token number">1</span> 的总和最小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态方程：<code v-pre>dp[i][j] = min(dp[i-1][j] + dp[i][j-1]) + grid[i][j]</code>。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int minPathSum(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {
        int m = grid.size();
        int n = grid[0].size();
        if(m &lt; 1 || n &lt; 1) return 0;
        if(m == 1 &amp;&amp; n == 1) return grid[0][0];

        int sum[m][n];
        sum[0][0] = grid[0][0];

        for(int i = 1; i &lt; m; i++) {
            sum[i][0] = sum[i-1][0] + grid[i][0];
        }

        for(int j = 1; j &lt; n; j++) {
            sum[0][j] = sum[0][j-1] + grid[0][j];
        }

        for(int i = 1; i &lt; m; i++) {
            for(int j = 1; j &lt; n; j++) {
                sum[i][j] = min(sum[i-1][j], sum[i][j-1]) + grid[i][j];
            }
        }

        return sum[m-1][n-1];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/minimum-path-sum/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_70爬楼梯" tabindex="-1"><a class="header-anchor" href="#_70爬楼梯" aria-hidden="true">#</a> 70爬楼梯</h1>
<blockquote>
<p>题目：假设你正在爬楼梯。需要 <em>n</em> 阶你才能到达楼顶。</p>
<p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>
<p>**注意：**给定 <em>n</em> 是一个正整数。</p>
</blockquote>
<p><strong>示例1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入： <span class="token number">2</span>
输出： <span class="token number">2</span>
解释： 有两种方法可以爬到楼顶。
<span class="token number">1.</span>  <span class="token number">1</span> 阶 <span class="token operator">+</span> <span class="token number">1</span> 阶
<span class="token number">2.</span>  <span class="token number">2</span> 阶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入： <span class="token number">3</span>
输出： <span class="token number">3</span>
解释： 有三种方法可以爬到楼顶。
<span class="token number">1.</span>  <span class="token number">1</span> 阶 <span class="token operator">+</span> <span class="token number">1</span> 阶 <span class="token operator">+</span> <span class="token number">1</span> 阶
<span class="token number">2.</span>  <span class="token number">1</span> 阶 <span class="token operator">+</span> <span class="token number">2</span> 阶
<span class="token number">3.</span>  <span class="token number">2</span> 阶 <span class="token operator">+</span> <span class="token number">1</span> 阶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态方程：<code v-pre>dp[i] = dp[i-1] + dp[i-2]</code>。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int climbStairs(int n) {
        if(n &lt;= 0) 
            return 0;
        else if(n == 1) 
            return 1;
        else if(n == 2) 
            return 2;
        
        int back2 = 1;
        int back1 = 2;
        int cur;
        for(int i = 3; i &lt;= n; i++) {
            cur = back1 + back2;
            back2 = back1;
            back1 = cur;
        }

        return cur;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<p>注意，不能用递归，会超出时间限制：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int climbStairs(int n) {
        if(n &lt;= 0) 
            return 0;
        else if(n == 1) 
            return 1;
        else if(n == 2) 
            return 2;
        
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么？自己想一下（展开是一个树，会有很多重复计算）。</p>
<h1 id="_91解码方法" tabindex="-1"><a class="header-anchor" href="#_91解码方法" aria-hidden="true">#</a> 91解码方法</h1>
<blockquote>
<p>题目：一条包含字母 <code v-pre>A-Z</code> 的消息通过以下方式进行了编码：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'A' -> 1
'B' -> 2
...
'Z' -> 26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给定一个只包含数字的<strong>非空</strong>字符串，请计算解码方法的总数。</p>
</blockquote>
<p><strong>示例1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token string">"12"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 它可以解码为 <span class="token string">"AB"</span>（<span class="token number">1</span> <span class="token number">2</span>）或者 <span class="token string">"L"</span>（<span class="token number">12</span>）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token string">"226"</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 它可以解码为 <span class="token string">"BZ"</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"VF"</span> <span class="token punctuation">(</span><span class="token number">22</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 或者 <span class="token string">"BBF"</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">)</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态方程：<code v-pre>dp[i] = dp[i-1] + dp[i-2]</code>。</p>
<p>本体利用动态规划比较容易解决，但需要注意分情况讨论</p>
<ul>
<li>
<p>dp[i]为str[0,...,i]的译码方法综述</p>
</li>
<li>
<p>分情况讨论：（建立最优子结构）</p>
<ul>
<li>
<p>若s[i]='0'，那么若s[i-1]='1'或者'2'，则dp[i]=dp[i-2]；否则return 0</p>
<p>解释：s[i-1]+s[i]唯一被译码，不增加情况</p>
</li>
<li>
<p>若s[i-1]='1'，则dp[i]=dp[i-1]+dp[i-2]</p>
<p>解释：S[i-1]与s[i]分开译码，为dp[i-1]；合并译码，为dp[i-2]</p>
</li>
<li>
<p>若s[i-1]='2'且'1'&lt;=s[i]&lt;='6'，则dp[i]=dp[i-1]+dp[i-2]</p>
<p>解释：同上</p>
</li>
</ul>
</li>
<li>
<p>由分析可知，dp[i]仅可能与前两项有关，故可以用单变量代替dp[]数组，将空间复杂度从O(n)降低到O(1)。</p>
</li>
</ul>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int numDecodings(string s) {
        if (s[0] == '0') return 0;
        int pre2 = 1, pre1 = 1, curr = 1;
        for (int i = 1; i &lt; s.size(); i++) {
            if (s[i] == '0')
                if (s[i - 1] == '1' || s[i - 1] == '2') curr = pre2;
                else return 0;
            else if (s[i - 1] == '1' || (s[i - 1] == '2' &amp;&amp; s[i] &gt;= '1' &amp;&amp; s[i] &lt;= '6'))
                curr = pre1 + pre2;
            pre2 = pre1;
            pre1 = curr;
        }
        return curr;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/decode-ways/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<p>如果觉得上述代码不好理解的话，请看下面我实际不断解决错误调试出来的代码：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int numDecodings(string s) {
        if(s.empty()) return 0;
        if(s[0] == '0') return 0;
        int pre2 = 1, pre1 = 1, cur = 1;

        for(int i = 1; i &lt; s.size(); i++) {
            if(s[i] == '0') {
                if(s[i - 1] == '1' || s[i - 1] == '2') {
                    cur = pre2;
                } else {
                    cur = 0;
                    break;
                }
            } else if(s[i - 1] == '2') {
                if(s[i] &gt;= '0' &amp;&amp; s[i] &lt;= '6') {
                    cur = pre2 + pre1;
                } else {
                    cur = pre1;
                }
            } else if(s[i - 1] &lt;= '0' || s[i - 1] &gt;= '3') {
                cur = pre1;
            } else {
                cur = pre2 + pre1;
            }
            pre2 = pre1;
            pre1 = cur;
        } 
        return cur;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_96-不同的二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_96-不同的二叉搜索树" aria-hidden="true">#</a> 96.不同的二叉搜索树</h1>
<blockquote>
<p>题目：给定一个整数 <em>n</em>，求以 1 ... <em>n</em> 为节点组成的二叉搜索树有多少种？</p>
</blockquote>
<p><strong>示例1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span>
给定 n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> 一共有 <span class="token number">5</span> <span class="token literal-property property">种不同结构的二叉搜索树</span><span class="token operator">:</span>

   <span class="token number">1</span>         <span class="token number">3</span>     <span class="token number">3</span>      <span class="token number">2</span>      <span class="token number">1</span>
    \       <span class="token operator">/</span>     <span class="token operator">/</span>      <span class="token operator">/</span> \      \
     <span class="token number">3</span>     <span class="token number">2</span>     <span class="token number">1</span>      <span class="token number">1</span>   <span class="token number">3</span>      <span class="token number">2</span>
    <span class="token operator">/</span>     <span class="token operator">/</span>       \                 \
   <span class="token number">2</span>     <span class="token number">1</span>         <span class="token number">2</span>                 <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>个节点存在二叉排序树的个数是<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">G(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>，令<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(i)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mclose">)</span></span></span></span>为以<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>为根的二叉搜索树的个数，则</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mi>f</mi><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mi>f</mi><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>+</mo><mi>f</mi><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo>+</mo><mi>f</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
G(n)=f(1)+f(2)+f(3)+f(4)+...+f(n)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">2</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">3</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">4</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></span></p>
<p>当<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>为根节点时，其左子树节点个数为<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">i-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>个，右子树节点为<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>−</mo><mi>i</mi></mrow><annotation encoding="application/x-tex">n-i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>，则</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo><mo>=</mo><mi>G</mi><mo stretchy="false">(</mo><mi>i</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>∗</mo><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mi>i</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
f(i)=G(i−1)∗G(n−i)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">i</span><span class="mclose">)</span></span></span></span></span></p>
<p>综合两个公式可以得到 卡特兰数公式</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>G</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>∗</mo><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mi>G</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>∗</mo><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo>+</mo><mi>G</mi><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>∗</mo><mi>G</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">
G(n)=G(0)∗G(n−1)+G(1)∗(n−2)+...+G(n−1)∗G(0)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span></p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int numTrees(int n) {
        int dp[n+1];
        memset(dp, 0, (n + 1) * sizeof(int));
        dp[0] = 1;
        dp[1] = 1;

        for(int i = 2; i &lt;= n; i++) {
            for(int j = 0; j &lt;= i - 1; j++) {
                dp[i] += dp[j] * dp[i - j - 1];
            }
        }

        return dp[n];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/unique-binary-search-trees/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_95-不同的二叉搜索树-ii" tabindex="-1"><a class="header-anchor" href="#_95-不同的二叉搜索树-ii" aria-hidden="true">#</a> 95. 不同的二叉搜索树 II</h1>
<blockquote>
<p>题目：给定一个整数 <em>n</em>，生成所有由 1 ... <em>n</em> 为节点所组成的<strong>二叉搜索树</strong>。</p>
</blockquote>
<p><strong>示例1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span>
以上的输出对应以下 <span class="token number">5</span> 种不同结构的二叉搜索树：

   <span class="token number">1</span>         <span class="token number">3</span>     <span class="token number">3</span>      <span class="token number">2</span>      <span class="token number">1</span>
    \       <span class="token operator">/</span>     <span class="token operator">/</span>      <span class="token operator">/</span> \      \
     <span class="token number">3</span>     <span class="token number">2</span>     <span class="token number">1</span>      <span class="token number">1</span>   <span class="token number">3</span>      <span class="token number">2</span>
    <span class="token operator">/</span>     <span class="token operator">/</span>       \                 \
   <span class="token number">2</span>     <span class="token number">1</span>         <span class="token number">2</span>                 <span class="token number">3</span>
注意：实际只需要输出每个可能的树的根结点即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector&lt;TreeNode*&gt; helper(int start,int end){
        vector&lt;TreeNode*&gt; ret;
        if(start &gt; end)
            ret.push_back(nullptr);
        
        for(int i=start;i&lt;=end;i++){
            vector&lt;TreeNode*&gt; left = helper(start,i-1);
            vector&lt;TreeNode*&gt; right = helper(i+1,end);
            for(auto l : left){
                for(auto r : right){
                    TreeNode* root = new TreeNode(i);
                    root -&gt; left = l;
                    root -&gt; right = r;
                    ret.push_back(root);
                }
            }
        }
        return ret;
    }
    
    vector&lt;TreeNode*&gt; generateTrees(int n) {
        vector&lt;TreeNode*&gt; ret;
        if(n == 0)
            return ret;    
        ret = helper(1,n);
        return ret;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/unique-binary-search-trees-ii/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_120-三角形最小路径和" tabindex="-1"><a class="header-anchor" href="#_120-三角形最小路径和" aria-hidden="true">#</a> 120. 三角形最小路径和</h1>
<blockquote>
<p>题目：给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。</p>
<p>例如，给定三角形：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
     <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自顶向下的最小路径和为 <code v-pre>11</code>（即，<strong>2</strong> + <strong>3</strong> + <strong>5</strong> + <strong>1</strong> = 11）。</p>
</blockquote>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int minimumTotal(vector&lt;vector&lt;int&gt;&gt;&amp; triangle) {
        // 动态规划, 自底向上  
        // 递推式 dp[i][j] = min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
        int rowSize = triangle.size();
        vector&lt;vector&lt;int&gt;&gt; dp = triangle;
                
        for(int i = rowSize - 2;i &gt;= 0; i--) {        
            for(int j = 0; j &lt; triangle[i].size(); j++) {
                dp[i][j] = min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
            }
        }
        return dp[0][0];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/triangle/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_121-买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#_121-买卖股票的最佳时机" aria-hidden="true">#</a> 121. 买卖股票的最佳时机</h1>
<blockquote>
<p>题目：给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。</p>
<p>如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。</p>
<p>注意你不能在买入股票前卖出股票。</p>
</blockquote>
<p>示例 1:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int maxProfit(vector&lt;int&gt;&amp; prices) {
        int max = 0, sum = 0;
        for(int i = 0; i &lt; (int)prices.size() - 1; i++) {
            int delta = prices[i + 1] - prices[i];
            sum = sum + delta &gt; delta? sum + delta: delta;
            if(sum &gt; max) {
                max = sum;
            }
        }
        return max;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_139-单词拆分" tabindex="-1"><a class="header-anchor" href="#_139-单词拆分" aria-hidden="true">#</a> 139. 单词拆分</h1>
<blockquote>
<p>题目：给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。</p>
<p>说明：</p>
<ul>
<li>拆分时可以重复使用字典中的单词。</li>
<li>你可以假设字典中没有重复的单词。</li>
</ul>
</blockquote>
<p>示例 1:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用string.compare来对字符串进行比较</p>
<p>遍历wordDict中的word，与s的字串（从i开始，往前数word.size()个）进行比较，如果比较结果一致，则查看dp。</p>
<p>i处dp[i]设置为1的条件是：从i往前数word.size()个，再往前数1个，如果该处dp也为1,则设置dp[i]=1</p>
<p>最后只需返回dp[s.size()]即可。</p>
<p>总结：该解法比较简单，常规DP解法。比较绕的地方是s的索引i和dp数组的索引之间的关系。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
	bool wordBreak(string s, vector&lt;string&gt;&amp; wordDict) {
		vector&lt;int&gt; dp(s.size()+1, 0);
		dp[0] = 1;
		for(int i=0; i&lt;s.size(); ++i) {
			for(auto word: wordDict) {
				int ws = word.size();
				if(i + 1 - ws &gt;= 0) {
					int cur = s.compare(i + 1 - ws, ws, word);
					if (cur==0 &amp;&amp; dp[i + 1 - ws]==1) {
						dp[i + 1] = 1;
					}
				}
			}
		}
		return dp[s.size()];
	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/word-break/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="_152-乘积最大子序列" tabindex="-1"><a class="header-anchor" href="#_152-乘积最大子序列" aria-hidden="true">#</a> 152. 乘积最大子序列</h1>
<blockquote>
<p>题目：给定一个整数数组 <code v-pre>nums</code> ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。</p>
</blockquote>
<p>示例 1:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解题思路</p>
<p>这题是求数组中子区间的最大乘积，对于乘法，我们需要注意，负数乘以负数，会变成正数，所以解这题的时候我们需要维护两个变量，当前的最大值，以及最小值，最小值可能为负数，但没准下一步乘以一个负数，当前的最大值就变成最小值，而最小值则变成最大值了。</p>
<p>我们的动态方程可能这样：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>maxDP[i + 1] = max(maxDP[i] * A[i + 1], A[i + 1],minDP[i] * A[i + 1])
minDP[i + 1] = min(minDP[i] * A[i + 1], A[i + 1],maxDP[i] * A[i + 1])
dp[i + 1] = max(dp[i], maxDP[i + 1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们还需要注意元素为0的情况，如果A[i]为0，那么maxDP和minDP都为0，
我们需要从A[i + 1]重新开始。</p>
<p>c++:</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>class Solution {
public:
    int maxProduct(vector&lt;int&gt;&amp; nums) {
        int size = nums.size();
        if(size == 0) return 0;

        int dp_max = nums[0];
        int dp_min = nums[0];
        int max_val = nums[0];
        for(int i = 1; i &lt; size; i++) {
            int temp = dp_max;
            dp_max = max(max(dp_max * nums[i], nums[i]), dp_min * nums[i]);
            dp_min = min(min(temp * nums[i], nums[i]), dp_min * nums[i]);
            max_val = max(max_val, dp_max);
        }

        return max_val;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://leetcode-cn.com/problems/maximum-product-subarray/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://leetcode-cn.com/tag/dynamic-programming/" target="_blank" rel="noopener noreferrer">动态规划<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此资料。</p>
</div></template>


