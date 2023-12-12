<template><div><h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h1>
<ul>
<li><RouterLink to="/docs/engineering/">返回上层目录</RouterLink></li>
</ul>
<h1 id="katex在线编辑" tabindex="-1"><a class="header-anchor" href="#katex在线编辑" aria-hidden="true">#</a> KATEX在线编辑</h1>
<p>http://latex.codecogs.com/eqneditor/editor.php</p>
<h1 id="docsify" tabindex="-1"><a class="header-anchor" href="#docsify" aria-hidden="true">#</a> docsify</h1>
<p><a href="https://docsify.js.org/#/zh-cn/quickstart" target="_blank" rel="noopener noreferrer">docsify<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> xxx  <span class="token comment"># xxx.docs</span>
docsify init ./
docsify serve docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h1>
<p>批量替换内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># ==================批量替换内容==================</span>

<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> perl <span class="token parameter variable">-pi</span> <span class="token parameter variable">-e</span> <span class="token string">"s/SUMMARY.md/README.md/gi"</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md.bak"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量替换内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># ==================批量替换内容==================</span>

<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/^[$][$]$/vvvv/g"</span>

<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/[$][$]/\$/g"</span>

<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/vvvv/\$\$/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量替换内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># ==================批量替换内容==================</span>

<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/- \[/\* \[/g"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量删除内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># ==================批量删除内容==================</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">"*.md"</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">""</span> <span class="token string">"s/xxx/d"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


