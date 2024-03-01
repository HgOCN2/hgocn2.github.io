import{_ as t,r as s,o as c,c as d,b as a,e,w as o,d as n,a as r}from"./app-VitiyI7N.js";const p={},u=a("h1",{id:"流程控制",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#流程控制","aria-hidden":"true"},"#"),n(" 流程控制")],-1),h=r(`<h1 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h1><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2><h3 id="if语句语法格式" tabindex="-1"><a class="header-anchor" href="#if语句语法格式" aria-hidden="true">#</a> if语句语法格式</h3><ul><li><p>if</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    command2
    <span class="token punctuation">..</span>.
    commandN 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写成一行（适用于终端命令提示符）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;ssh&quot;</span><span class="token variable">)</span></span> <span class="token parameter variable">-gt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>末尾的fi就是if倒过来拼写，后面还会遇到类似的。</p></li><li><p>if else</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    command2
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">else</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>if else-if else</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition1
<span class="token keyword">then</span>
    command1
<span class="token keyword">elif</span> condition2 
<span class="token keyword">then</span> 
    command2
<span class="token keyword">else</span>
    commandN
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>实例</strong></p><p>判断两个变量是否相等：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a 小于 b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h1><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><h2 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h2><h2 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> until</h2><h1 id="选择语句" tabindex="-1"><a class="header-anchor" href="#选择语句" aria-hidden="true">#</a> 选择语句</h1><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h2><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>`,17),v={href:"https://www.cnblogs.com/chengmo/archive/2010/10/14/1851434.html",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,"本文架构参考此博客。",-1);function k(m,f){const i=s("RouterLink"),l=s("ExternalLinkIcon");return c(),d("div",null,[u,a("ul",null,[a("li",null,[e(i,{to:"/docs/machine-learning/coding/cs-courses/operating-system/linux/shell/shell.html"},{default:o(()=>[n("返回上层目录")]),_:1})])]),h,a("ul",null,[a("li",null,[a("a",v,[n("linux shell 流程控制（条件if,循环【for,while】,选择【case】语句实例"),e(l)])])]),b])}const w=t(p,[["render",k],["__file","process-control.html.vue"]]);export{w as default};