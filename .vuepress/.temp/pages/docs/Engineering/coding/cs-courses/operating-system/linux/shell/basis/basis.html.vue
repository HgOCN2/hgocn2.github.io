<template><div><h1 id="shell基础" tabindex="-1"><a class="header-anchor" href="#shell基础" aria-hidden="true">#</a> shell基础</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/operating-system/linux/shell/shell.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h1>
<h2 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h2>
<p>加<code v-pre>#</code>。</p>
<h2 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token operator">&lt;&lt;</span><span class="token string">'COMMENT'
多行注释1
多行注释2
多行注释3
COMMENT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="终端行操作" tabindex="-1"><a class="header-anchor" href="#终端行操作" aria-hidden="true">#</a> 终端行操作</h1>
<h2 id="移动到行首行尾" tabindex="-1"><a class="header-anchor" href="#移动到行首行尾" aria-hidden="true">#</a> 移动到行首行尾</h2>
<p>移到行首：<code v-pre>control+a</code>
移到行尾：<code v-pre>control+e</code></p>
<p>下面的还没有实际测试：</p>
<p>===========linux系统用============</p>
<p>移到光标所在单词首部：<code v-pre>alt+a</code></p>
<p>移到光标所在单词尾部：<code v-pre>alt+e</code></p>
<p>删除光标处到单词尾部：<code v-pre>alt+d</code></p>
<p>===============================</p>
<p>插入最近删除的单词或语句：<code v-pre>ctrl+y</code></p>
<p>删除光标处到行尾部分：<code v-pre>ctrl+k</code></p>
<p>删除光标处到行首部分：<code v-pre>ctrl+u</code></p>
<p>删除光标处到当前单词开头部分或语句：<code v-pre>ctrl+w</code></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/hherima/article/details/47083739" target="_blank" rel="noopener noreferrer">mac shell终端编辑命令行快捷键——行首，行尾<ExternalLinkIcon/></a></li>
</ul>
<p>“移动到行首行尾”参考此资料。</p>
</div></template>


