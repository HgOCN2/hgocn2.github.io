<template><div><h1 id="vim编辑器" tabindex="-1"><a class="header-anchor" href="#vim编辑器" aria-hidden="true">#</a> vim编辑器</h1>
<ul>
<li><RouterLink to="/blogs/coding/cs-courses/operating-system/linux/linux.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="tab多标签切换" tabindex="-1"><a class="header-anchor" href="#tab多标签切换" aria-hidden="true">#</a> tab多标签切换</h1>
<p><strong>新建标签页</strong></p>
<p>使用**:tab**命令和文件名参数，可以在新标签页中打开指定的文件。也可以使用:tabnew命令，在新标签页中编辑新的文件。命令:tab split将在新标签页中，打开当前缓冲区中的文件。</p>
<p>命令:tabf允许你在当前目录搜索文件，并在新标签页中打开。比如我想打开当前目录下的img.txt文件，那么就可以使用:tabf img.*命令。请注意，此命令只能打开一个文件，如果搜索出多个匹配文件，将提示你“文件名过多”，这时你需要给出更精确的搜索条件以打开文件。</p>
<p>Vim默认最多只能打开10个标签页。你可以用set tabpagemax=15改变这个限制。</p>
<p><strong>列示标签页</strong></p>
<p>命令:tabs可以显示已打开标签页的列表，并用“&gt;”标识出当前页面，用“+”标识出已更改的页面。</p>
<p><strong>关闭标签页</strong></p>
<p>命令**:tabc**可以关闭当前标签页。而命令:tabo将关闭所有的标签页。</p>
<p><strong>切换标签页</strong></p>
<p>命令:tabn或<strong>gt</strong>可以移动到下一个标签页。而命令:tabp或<strong>gT</strong>将移动到上一个标签页。如果已经到达最后面或最前面的标签页，将会自动转向循环。</p>
<p><strong>移动标签页</strong></p>
<p>如果你希望按照指定的次序排列标签页，那么你可以使用:tabm命令。请注意，标签页次序是从0开始计数的。比如命令:tabm 1将把当前标签页移动到第2的位置。如果你没有为:tabm命令指定参数，那么当前标签页将会被移动到最后。</p>
<p><strong>配置标签页</strong></p>
<p>默认情况下，只有用户新建了标签页才会在窗口上方显示标签栏，这是由选项set showtabline=1决定的。如果我们希望总是显示标签栏，那么可以用set showtabline=2命令来设置。如果我们希望完全不显示标签栏，那么可以使用set showtabline=0来设置。</p>
<p><strong>多标签页命令</strong></p>
<p>使用:tabdo命令，我们可以同时在多个标签页中执行命令。比如我们打开了多个标签页，需要把这些文件中的“food”都替换成“drink”，那么就可以使用:tabdo %s/food/drink/g命令，一次完成对所有文件的替换操作，而不用针对每个文件重复操作。</p>
<p><strong>图形界面</strong></p>
<p>如果你使用的是带有图形界面的gVim，那么新建、关闭和打开标签页的操作，都可以通过在标签页上右击鼠标完成。只需要点击相应标签，就可以在不同的标签页间切换。</p>
<p>通过:help tab-page-intro命令，可以获得关于标签页使用的更多信息。</p>
<p><strong>命令小结</strong></p>
<table>
<thead>
<tr>
<th><code v-pre>:tabnew</code></th>
<th>新建标签页</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:tabs</code></td>
<td>显示已打开标签页的列表</td>
</tr>
<tr>
<td><code v-pre>:tabc</code></td>
<td>关闭当前标签页</td>
</tr>
<tr>
<td><code v-pre>:tabn</code></td>
<td>移动到下一个标签页</td>
</tr>
<tr>
<td><code v-pre>:tabp</code></td>
<td>移动到上一个标签页</td>
</tr>
<tr>
<td><code v-pre>:tabfirst</code></td>
<td>移动到第一个标签页</td>
</tr>
<tr>
<td><code v-pre>:tablast</code></td>
<td>移动到最后一个标签页</td>
</tr>
</tbody>
</table>
<p>参考资料：<a href="https://www.cnblogs.com/liqiu/archive/2013/03/26/2981949.html" target="_blank" rel="noopener noreferrer">vim-tabe多标签切换<ExternalLinkIcon/></a></p>
<h1 id="显示不可见字符" tabindex="-1"><a class="header-anchor" href="#显示不可见字符" aria-hidden="true">#</a> 显示不可见字符</h1>
<p>在Linux中，<code v-pre>cat -A file</code>可以把文件中的所有可见的和不可见的字符都显示出来，在Vim中，如何将不可见字符也显示出来呢？</p>
<p>只需要<code v-pre>:set invlist</code>即可以将不可见的字符显示出来，例如，会以<code v-pre>^I</code>表示一个tab符，<code v-pre>$</code>表示一个回车符等。</p>
<p>最后，<code v-pre>:set nolist</code>可以回到正常的模式。</p>
<p>参考资料：<a href="http://yejinxin.github.io/show-nonprinting-character-in-vim" target="_blank" rel="noopener noreferrer">Vim中显示不可见字符<ExternalLinkIcon/></a></p>
<h1 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h1>
<h2 id="行内跳转" tabindex="-1"><a class="header-anchor" href="#行内跳转" aria-hidden="true">#</a> 行内跳转</h2>
<h3 id="快速移动光标至行首和行尾" tabindex="-1"><a class="header-anchor" href="#快速移动光标至行首和行尾" aria-hidden="true">#</a> 快速移动光标至行首和行尾</h3>
<ul>
<li>
<p>移动光标至行首：<code v-pre>Shift+6</code>或者<code v-pre>Home</code></p>
<p>需要按行快速移动光标时，可以使用键盘上的编辑键Home，快速将光标移动至当前行的行首。除此之外，也可以在命令模式中使用快捷键&quot;^&quot;（即Shift+6）或<strong>0（数字0）</strong>。</p>
</li>
<li>
<p>移动光标至行尾：<code v-pre>Shift+4</code>或者<code v-pre>End</code></p>
<p>如果要快速移动光标至当前行的行尾，可以使用编辑键End。也可以在命令模式中使用<strong>快捷键&quot;$&quot;（Shift+4）</strong>。与快捷键&quot;^&quot;和0不同，快捷键&quot;$&quot;前可以加上数字表示移动的行数。例如使用&quot;1$&quot;表示当前行的行尾，&quot;2$&quot;表示当前行的下一行的行尾。</p>
</li>
</ul>
<p>参考资料：<a href="https://blog.csdn.net/Miss_Mario/article/details/45915151" target="_blank" rel="noopener noreferrer">Vim快速移动光标至行首和行尾<ExternalLinkIcon/></a></p>
<h2 id="行间跳转" tabindex="-1"><a class="header-anchor" href="#行间跳转" aria-hidden="true">#</a> 行间跳转</h2>
<h3 id="跳到第一行和最后一行" tabindex="-1"><a class="header-anchor" href="#跳到第一行和最后一行" aria-hidden="true">#</a> 跳到第一行和最后一行</h3>
<p>跳到第一行：<code v-pre>gg</code></p>
<p>跳到最后一行：<code v-pre>shift+g</code>即<code v-pre>G</code></p>
<h3 id="跳转到指定的行" tabindex="-1"><a class="header-anchor" href="#跳转到指定的行" aria-hidden="true">#</a> 跳转到指定的行</h3>
<p>命令行模式下输入（n为指定的行号）：</p>
<p>（1）<strong>ngg / nG</strong></p>
<p>（2）<strong>:n</strong></p>
<p>（3）<strong>vim +n filename</strong>（注意这里要输入 <strong>+</strong> 号）</p>
<p>三者的区别在于，ngg/nG输入以后不需要按下回车键，而输入:n之后还要按下回车键才会跳转，vim +n filename只能在打开文件时跳转到相应的行。</p>
<p>比如想跳转到文本的第12行，可以执行如下命令：</p>
<p>（1）12gg / 12G</p>
<p>（2）:12</p>
<p>（3）打开文件时输入vim +12 filename</p>
<p>文本中想查看当前行信息，可输入： <strong>Ctrl + g</strong></p>
<p>参考资料：</p>
<ul>
<li><a href="https://blog.csdn.net/u011848617/article/details/38434359" target="_blank" rel="noopener noreferrer">vim跳转到指定的行<ExternalLinkIcon/></a></li>
</ul>
<h1 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h1>
<h2 id="shift-3查找" tabindex="-1"><a class="header-anchor" href="#shift-3查找" aria-hidden="true">#</a> shift+3查找</h2>
<p>vim里按shift+3 就会查找那个词，之后就用黄色背景高亮的显示它。</p>
<p>如果想取消高亮，执行<code v-pre>:nohlsearch</code>或者<code v-pre>:noh</code>取消高亮。</p>
<p>参考资料：<a href="https://zhidao.baidu.com/question/243941.html" target="_blank" rel="noopener noreferrer">vim里按shift+3 就会查找那个词，之后就用黄色背景高亮的显示它，怎么才能取消这黄色呢？<ExternalLinkIcon/></a></p>
<h1 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h1>
<h2 id="同时注释多行" tabindex="-1"><a class="header-anchor" href="#同时注释多行" aria-hidden="true">#</a> 同时注释多行</h2>
<blockquote>
<p>1、首先，将光标放在要注释的行首，然后按ESC进入命令行模式;
2、按Ctrl + V进入 VISUAL BLOCK ；
3、按 PgUp/PgDn选择要注释的行；
4、按大写的i进入插入模式；
5、输入#,按ESC保存即可</p>
</blockquote>
<h2 id="同时删除多行注释" tabindex="-1"><a class="header-anchor" href="#同时删除多行注释" aria-hidden="true">#</a> 同时删除多行注释</h2>
<blockquote>
<p>1、首先，将光标放在注释的行首，然后按ESC进入命令模式；
2、按Ctrl + V进入 VISUAL BLOCK；
3、按PgUp选择要删除的注释行；
4、按X即可删除第一列#；
5、如果有多个&quot;#&quot;,重复上述步骤</p>
</blockquote>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>===</p>
<p><a href="https://blog.csdn.net/weixin_37657720/article/details/80645991" target="_blank" rel="noopener noreferrer">vim 操作命令大全<ExternalLinkIcon/></a></p>
</div></template>


