<template><div><h1 id="python简介" tabindex="-1"><a class="header-anchor" href="#python简介" aria-hidden="true">#</a> python简介</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/coding/programing-language/python/python.html">返回上层目录</RouterLink></li>
<li><a href="#python%E4%BB%8B%E7%BB%8D">python介绍</a></li>
<li><a href="#%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%94%A8%E5%88%B0%E7%9A%84python">机器学习用到的python</a></li>
<li><a href="#%E7%94%A8anaconda%E5%AE%89%E8%A3%85python">用anaconda安装python</a></li>
</ul>
<h1 id="python介绍" tabindex="-1"><a class="header-anchor" href="#python介绍" aria-hidden="true">#</a> python介绍</h1>
<ul>
<li>一种面向对象的解释型计算机程序设计语言</li>
<li>具有丰富且强大的内置库和第三方库</li>
<li>语法简介灵活</li>
<li>开源、跨平台</li>
</ul>
<p>Python是由荷兰人Guido van Rossum在90年代开发出来的，当初只是为了自娱自乐尝试编写一种替代ABC这些编程语言的脚本语言，没想到受到大家的喜欢，一直发展至今，后来引入了对多平台的支持。</p>
<p><img src="@source/docs/machine-learning/coding/programing-language/python/introduction/pic/Rossum.png" alt="Rossum"></p>
<p>Python语言源代码的底层是用C语言进行编写的，它最强大之处就于它丰富实用的第三方库，使的编写程序的速度非常快。</p>
<p>Python程序的扩展名是(.py)，首先会将.py文件中的源代码编译成Python的字节码，然后再由Python虚拟机来执行这些编译好的字节码，在这一点上与JAVA等程序语言比较相似。通常我们导入或者调用另一个程序，它的.py文件会生成一个(.pyc)文件，它是编译好的的字节码文件，这样程序运行起来更快速。</p>
<h1 id="机器学习用到的python" tabindex="-1"><a class="header-anchor" href="#机器学习用到的python" aria-hidden="true">#</a> 机器学习用到的python</h1>
<p>机器学习中需要用到的编程知识也就是Matlab和Numpy了吧，Matlab是可以现学现卖的；至于Python，就看题主想用来做什么了，如果就是用来做机器学习，完全可以一天入门，如果想要做更多好玩的事，一天不行那就两天。（贴一个Python/Numpy的简要教程：<a href="https://cs231n.github.io/python-numpy-tutorial/" target="_blank" rel="noopener noreferrer">Python Numpy Tutorial<ExternalLinkIcon/></a>，翻译版本：<a href="https://zhuanlan.zhihu.com/p/26514493" target="_blank" rel="noopener noreferrer">Python Numpy 教程<ExternalLinkIcon/></a>，是cs231n的课堂福利。）</p>
<p>首先作为一个普通程序员，C++ / Java / Python 这样的语言技能栈应该是必不可少的，其中 Python 需要重点关注爬虫、数值计算、数据可视化方面的应用，主要是：</p>
<p><img src="@source/docs/machine-learning/coding/programing-language/python/introduction/pic/python_learning_point.png" alt="python_learning_point"></p>
<p>最最后，也要时刻关注能帮你偷懒的工具，它将让你拥有更多的时间去调参：<a href="http://python.jobbole.com/81153/" target="_blank" rel="noopener noreferrer">Python 网页爬虫 &amp; 文本处理 &amp; 科学计算 &amp; 机器学习 &amp; 数据挖掘兵器谱<ExternalLinkIcon/></a></p>
<h1 id="用anaconda安装python" tabindex="-1"><a class="header-anchor" href="#用anaconda安装python" aria-hidden="true">#</a> 用anaconda安装python</h1>
<p>首先说一句，如果你已经安装了python，那就直接<code v-pre>pip install anaconda</code>，系统自己会下载对应版本的anaconda。anaconda默认安装了 numpy, pandas, scipy, matplotlib, sklearn等我们要用的必要的库。他带的spyder（模仿了matlab环境）也很好用，pycharm都不用装。</p>
<p>上面一段话看不懂没关系，接着看下面：</p>
<hr>
<p>打算学习 Python 来做数据分析的你，是不是在开始时就遇到各种麻烦呢？</p>
<blockquote>
<ul>
<li>到底该装 Python2 呢还是 Python3 ？</li>
<li>为什么安装 Python 时总是出错？</li>
<li>怎么安装工具包呢？</li>
<li>为什么提示说在安装这个工具前必须先安装一堆其他不明所以的工具？</li>
</ul>
</blockquote>
<p>相信大多数 Python 的初学者们都曾为环境问题而头疼不已，但你并不孤独，大家都是这么折腾过来的。为了在入门时少走弯路，并且让高涨的积极性不至于太受打击，这里推荐使用 Anaconda 来管理你的安装环境和各种工具包。</p>
<p>本文介绍了Anaconda的使用，全文大纲如下：</p>
<blockquote>
<ul>
<li>为什么选择 Anaconda</li>
</ul>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>* 什么是 Anaconda
* 什么是 conda
* Anaconda 的优点 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如何安装 Anaconda</li>
<li>如何管理 Python 包</li>
<li>如何管理 Python 环境</li>
</ul>
<hr>
<h2 id="为什么选择anaconda" tabindex="-1"><a class="header-anchor" href="#为什么选择anaconda" aria-hidden="true">#</a> 为什么选择Anaconda？</h2>
<p><strong>什么是 Anaconda？</strong></p>
<p>Anaconda是专注于数据分析的Python发行版本，包含了conda、Python等190多个科学包及其依赖项。作为好奇宝宝的你是不是发现了一个新名词 <em>conda</em>，那么你一定会问 conda 又是什么呢？</p>
<p><strong>1、什么是 conda ？</strong></p>
<p>conda 是开源包（packages）和虚拟环境（environment）的管理系统。</p>
<ul>
<li><strong>packages 管理：</strong> 可以使用 conda 来安装、更新 、卸载工具包 ，并且它更关注于数据科学相关的工具包。在安装 anaconda 时就预先集成了像 Numpy、Scipy、 pandas、Scikit-learn 这些在数据分析中常用的包。另外值得一提的是，conda 并不仅仅管理Python的工具包，它也能安装非python的包。比如在新版的 Anaconda 中就可以安装R语言的集成开发环境 Rstudio。</li>
<li><strong>虚拟环境管理：</strong>    在conda中可以建立多个虚拟环境，用于隔离不同项目所需的不同版本的工具包，以防止版本上的冲突。对纠结于 Python 版本的同学们，我们也可以建立 Python2 和 Python3 两个环境，来分别运行不同版本的 Python 代码。</li>
</ul>
<p>知道 <strong>是什么（what）</strong> 的同时，我们也需要问一问 <strong>为什么（why）</strong>。那么，为什么要选择用Anaconda呢？</p>
<p><strong>2、Anaconda 的优点？</strong></p>
<p>Anaconda的优点总结起来就八个字：省时省心、分析利器。</p>
<ul>
<li><strong>省时省心：</strong> Anaconda通过管理工具包、开发环境、Python版本，大大简化了你的工作流程。不仅可以方便地安装、更新、卸载工具包，而且安装时能自动安装相应的依赖包，同时还能使用不同的虚拟环境隔离不同要求的项目。</li>
<li><strong>分析利器：</strong> 在 <a href="https://link.jianshu.com?t=https://www.continuum.io/why-anaconda" target="_blank" rel="noopener noreferrer">Anaconda<ExternalLinkIcon/></a> 官网中是这么宣传自己的：适用于企业级大数据分析的Python工具。其包含了720多个数据科学相关的开源包，在数据可视化、机器学习、深度学习等多方面都有涉及。不仅可以做数据分析，甚至可以用在大数据和人工智能领域。</li>
</ul>
<p>解决了 <strong>是什么</strong> 以及 <strong>为什么</strong> 的问题后，下面让我们看一下 <strong>怎么做（How）</strong>。</p>
<hr>
<h2 id="如何安装anaconda" tabindex="-1"><a class="header-anchor" href="#如何安装anaconda" aria-hidden="true">#</a> 如何安装Anaconda？</h2>
<p>可以从<a href="https://link.jianshu.com?t=https://www.continuum.io/downloads" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>下载 Anaconda 的安装程序以及查看安装说明。无论是 Windows、Linux 还是 MAC 的 OSX 系统，都可以找到对应的安装软件。如果你的电脑是64位则尽量选64位版本。至于 Python 的版本是 2.7 还是 3.x，这里推荐你使用 Python3，因为 Python2 终将<a href="https://link.jianshu.com?t=https://pythonclock.org/" target="_blank" rel="noopener noreferrer">停止维护<ExternalLinkIcon/></a>。可能目前市面上大多数教程使用的都还是 Python2，这也不用着急，因为在 Anaconda 中可以同时管理两个 Python 版本的环境。</p>
<p>根据提示进行安装，完成后你大概会惊讶地发现电脑中多了好多应用，不用担心，我们一项项来看：</p>
<ul>
<li><strong>Anaconda Navigator</strong> ：用于管理工具包和环境的图形用户界面，后续涉及的众多管理命令也可以在 Navigator 中手工实现。</li>
</ul>
<ul>
<li><strong>Jupyter notebook</strong> ：基于web的交互式计算环境，可以编辑易于人们阅读的文档，用于展示数据分析的过程。</li>
<li><strong>qtconsole</strong> ：一个可执行 IPython 的仿终端图形界面程序，相比 Python Shell 界面，qtconsole 可以直接显示代码生成的图形，实现多行代码输入执行，以及内置许多有用的功能和函数。</li>
<li><strong>spyder</strong> ：一个使用Python语言、跨平台的、科学运算集成开发环境。</li>
</ul>
<p>安装完成后，我们还需要对所有工具包进行升级，以避免可能发生的错误。打开你电脑的终端，在命令行中输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda upgrade --all

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在终端询问是否安装如下升级版本时，输入 <code v-pre>y</code>。</p>
<p>有的情况下，你可能会遇到找不到 conda 命令的错误提示，这很可能是环境路径设置的问题，需要添加conda环境变量：<code v-pre>export PATH=xxx/anaconda/bin:$PATH</code>, 其中xxx替换成anaconda的安装路径。</p>
<p>至此，安装完成，下面让我们看一下如何用 Anaconda 管理工具包和环境。</p>
<hr>
<h2 id="如何管理python包" tabindex="-1"><a class="header-anchor" href="#如何管理python包" aria-hidden="true">#</a> 如何管理Python包？</h2>
<p>安装一个 package：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda install package_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 package_name 是需要安装包的名称。你也可以同时安装多个包，比如同时安装numpy 、scipy  和 pandas，则执行如下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda install numpy scipy pandas

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以指定安装的版本，比如安装 1.1 版本的 numpy ：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda install numpy=1.10

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>移除一个 package：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda remove package_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>升级 package 版本：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda update package_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看所有的 packages：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda list

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你记不清 package 的具体名称，也可以进行模糊查询：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda  search search_term

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="如何管理python环境" tabindex="-1"><a class="header-anchor" href="#如何管理python环境" aria-hidden="true">#</a> 如何管理Python环境？</h2>
<p>默认的环境是 root，你也可以创建一个新环境：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda create -n env_name  list of packages

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code v-pre>-n</code> 代表 name，<code v-pre>env_name</code> 是需要创建的环境名称，<code v-pre>list of packages</code> 则是列出在新环境中需要安装的工具包。</p>
<p>例如，当我安装了 Python3 版本的 Anaconda 后，默认的 root 环境自然是 Python3，但是我还需要创建一个 Python 2 的环境来运行旧版本的 Python 代码，最好还安装了 pandas 包，于是我们运行以下命令来创建：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda create -n py2 python=2.7 pandas 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>细心的你一定会发现，py2 环境中不仅安装了 pandas，还安装了 numpy 等一系列 packages，这就是使用 conda 的方便之处，它会自动为你安装相应的依赖包，而不需要你一个个手动安装。</p>
<p>进入名为 env_name 的环境：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>source activate env_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>退出当前环境：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>source deactivate

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外注意，在 Windows 系统中，使用 <code v-pre>activate env_name</code>  和 <code v-pre>deactivate</code> 来进入和退出某个环境。</p>
<p>删除名为 env_name 的环境：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda env remove -n env_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示所有的环境：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda env list

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当分享代码的时候，同时也需要将运行环境分享给大家，执行如下命令可以将当前环境下的 package 信息存入名为 environment 的 YAML 文件中。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda env export > environment.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，当执行他人的代码时，也需要配置相应的环境。这时你可以用对方分享的 YAML 文件来创建一摸一样的运行环境。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>conda env create -f environment.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何在多版本anaconda-python环境下转换spyder" tabindex="-1"><a class="header-anchor" href="#如何在多版本anaconda-python环境下转换spyder" aria-hidden="true">#</a> 如何在多版本anaconda python环境下转换spyder？</h2>
<p>原版本为2.7的环境，以下是增加3.6.1python的过程</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#在cmd中写入命令 更新</span>
conda update conda 
<span class="token comment">#创建python3.6的环境</span>
conda create <span class="token operator">-</span><span class="token operator">-</span>name python3 python<span class="token operator">=</span><span class="token number">3.6</span>
<span class="token comment">#进入该环境</span>
activate python3
<span class="token comment">#在环境中安装anaconda的库</span>
conda install anaconda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上步骤完成后，会在原有Spyder的基础上自动安装新的Spyder3，打开即为python3.6.1的环境，如下图：</p>
<p><img src="@source/docs/machine-learning/coding/programing-language/python/introduction/pic/anaconda_python3.jpg" alt="anaconda_python3"></p>
<p>如果我又要运行python2的代码怎么办？那就退出python3（要不要这一步我不确定，因为我还没这么干过），再进入python2，即：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>deactivate
activate root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么是进入root呢？不是说要进python2吗？因为anaconda中将第一次的默认环境命名为root，既然你第一次装的是python2，那root就是python2的环境名称了呀。当然如果你不放心，可以在进入之前查看下都有哪些环境，如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>conda env <span class="token builtin">list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>至此，你已跨入 Anaconda 的大门，后续就可以徜徉在 Python 的海洋中了。</p>
<p>祝学习愉快！</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="http://www.jianshu.com/p/169403f7e40c" target="_blank" rel="noopener noreferrer">Anaconda入门使用指南<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;用anaconda安装python&quot;小节参考的是这篇文章。</p>
</div></template>


