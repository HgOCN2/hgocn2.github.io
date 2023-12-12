<template><div><h1 id="cython" tabindex="-1"><a class="header-anchor" href="#cython" aria-hidden="true">#</a> cython</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/programing-language/python/python.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="cython简介" tabindex="-1"><a class="header-anchor" href="#cython简介" aria-hidden="true">#</a> Cython简介</h1>
<p>Cython的本质可以总结如下：Cython是包含C数据类型的Python。</p>
<p>Cython是Python：几乎所有Python代码都是合法的Cython代码。 （存在一些限制，但是差不多也可以。） Cython的编译器会转化Python代码为C代码，这些C代码均可以调用Python/C的API。</p>
<p>Cython可不仅仅包含这些，Cython中的参数和变量还可以以C数据类型来声明。代码中的Python值和C的值可以自由地交叉混合（intermixed）使用, 所有的转化都是自动进行。</p>
<h1 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h1>
<p>在同一个目录下创建如下两个文件：</p>
<p><strong>pytest.pyx</strong></p>
<div class="language-cython line-numbers-mode" data-ext="cython"><pre v-pre class="language-cython"><code>import numpy as np
from libc.math cimport pow, tanh
cimport numpy as np
cimport cython
np.import_array()

cdef class FmSGD(object):

    cdef public int vec_dim

    def __init__(self, int vec_dim):
        self.vec_dim = vec_dim

    def fit(self, int num):
        self.vec_dim  = num

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>setup.py</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> setuptools <span class="token keyword">import</span> setup<span class="token punctuation">,</span> find_packages<span class="token punctuation">,</span> Extension
<span class="token keyword">from</span> Cython<span class="token punctuation">.</span>Distutils <span class="token keyword">import</span> build_ext
<span class="token keyword">import</span> numpy

setup<span class="token punctuation">(</span>
    maintainer<span class="token operator">=</span><span class="token string">'luwei'</span><span class="token punctuation">,</span>
    name<span class="token operator">=</span><span class="token string">'pytest'</span><span class="token punctuation">,</span>
    version<span class="token operator">=</span><span class="token string">'0.0.1'</span><span class="token punctuation">,</span>
    packages<span class="token operator">=</span>find_packages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    cmdclass <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'build_ext'</span><span class="token punctuation">:</span> build_ext<span class="token punctuation">}</span><span class="token punctuation">,</span>
    ext_modules <span class="token operator">=</span> <span class="token punctuation">[</span>Extension<span class="token punctuation">(</span><span class="token string">"pytest"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"pytest.pyx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    						 libraries<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"m"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    						 include_dirs<span class="token operator">=</span><span class="token punctuation">[</span>numpy<span class="token punctuation">.</span>get_include<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过<code v-pre>python setup.py build_ext --inplace</code>命令就可以将pytest库安装到python中了。</p>
<p>如下所示：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> pytest <span class="token keyword">import</span> FmSGD
fm <span class="token operator">=</span> FmSGD<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
fm<span class="token punctuation">.</span>vec_dim
<span class="token comment">#11</span>
fm<span class="token punctuation">.</span>fit<span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>
fm<span class="token punctuation">.</span>vec_dim
<span class="token comment">#22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p>
<ul>
<li>python setup.py build_ext --inplace，这种方式不好，不利于后续的管理和替换，建议安装的时候用pip</li>
<li>安装cython文件，和anaconda没有任何关系，是给你的python添加组件，只影响你的python库</li>
<li>用conda打包，这样可以保证把依赖的库都打包好，不会有环境不一致的问题</li>
<li>cython文件是在桌面上的一个文件夹内，cd到该目录下，然后pip安装（pip可以安装本地的包<code v-pre>pip install .</code>），就会自动把这个文件添加到python环境里</li>
</ul>
<p><strong>安装方法：</strong></p>
<p>通过<code v-pre>conda env list</code>查看环境列表，激活你想安装的conda环境<code v-pre>source activate xxx</code>。</p>
<p>然后cd到cyhon文件的目录下，进行安装<code v-pre>pip install .</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Looking <span class="token keyword">in</span> indexes: http://mirrors.momo.com/pypi/simple/
Processing /data4/recommend_nearby/lu.wei/fm/cython
Building wheels <span class="token keyword">for</span> collected packages: PySparkFM
  Building wheel <span class="token keyword">for</span> PySparkFM <span class="token punctuation">(</span>setup.py<span class="token punctuation">)</span> <span class="token punctuation">..</span>. <span class="token keyword">done</span>
  Stored <span class="token keyword">in</span> directory: /tmp/pip-ephem-wheel-cache-4hx2m394/wheels/d8/6c/d4/645ca5adc6e249f6dc4e303a044be9c8d2aedb804bb0940b4c
Successfully built PySparkFM
Installing collected packages: PySparkFM
Successfully installed PySparkFM-0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>pip install conda-pack</code>安装打包程序。</p>
<p>通过<code v-pre>conda pack -o ./luwei_environment.tar.gz</code>将需要的环境打包。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Collecting packages<span class="token punctuation">..</span>.
Packing environment at <span class="token string">'/home/recommend_nearby/work_space/anaconda3'</span> to <span class="token string">'./luwei_environment.tar.gz'</span>
<span class="token punctuation">[</span><span class="token comment">####                                    ] | 12% Completed | 43.2s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并拷贝到目标机器或者上传到hdfs上</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>hadoop fs -put ./luwei_environment.tar.gz hdfs://nameservice3/user/recommend_nearby/lu.wei/python3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在目标机器上新建目录<code v-pre>mkdir -p $Anaconda/envs/xxx</code>。</p>
<p>解压<code v-pre>tar -xzf wrfpy.tar.gz -C $Anaconda/envs/xxx</code>。</p>
<p>此时<code v-pre>conda env list</code>就可以看到该环境了。</p>
<p><code v-pre>conda activate xxx</code>激活环境，执行<code v-pre>conda-unpack</code>，大功告成！</p>
<p>====
另外，我发现还有个参数
--conf spark.pyspark.driver.python = /home/barrenlake/tmp/python-2.7.15/bin/python <br>
这个用该是告诉driver端，所用python的路径吧？
那有了这个设置，是不是就可以不要export PATH=<code v-pre>pwd</code>/bin:$PATH了？</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://moonlet.gitbooks.io/cython-document-zh_cn/content/ch1-basic_tutorial.html" target="_blank" rel="noopener noreferrer">Cython官方文档中文版<ExternalLinkIcon/></a></li>
</ul>
<p>“Cython简介”参考此博客。</p>
<ul>
<li><a href="https://zyxin.xyz/blog/2017-12/CythonIntro/" target="_blank" rel="noopener noreferrer">Cython - 入门简介<ExternalLinkIcon/></a></li>
</ul>
<p>“例子”参考该博客。</p>
<ul>
<li><a href="http://docs.cython.org/en/latest/src/userguide/wrapping_CPlusPlus.html" target="_blank" rel="noopener noreferrer">官方文档：Using C++ in Cython<ExternalLinkIcon/></a></li>
</ul>
<p>更多请看官方文档。</p>
<ul>
<li><a href="https://www.jianshu.com/p/d77e16008957" target="_blank" rel="noopener noreferrer">Spark on Yarn 之Python环境定制<ExternalLinkIcon/></a></li>
</ul>
<p><code v-pre>--archives xxx#xxx</code>和<code v-pre>--conf spark.pyspark.driver.python</code>。</p>
<ul>
<li><a href="https://blog.csdn.net/crookie/article/details/78351095" target="_blank" rel="noopener noreferrer">pyspark使用anaconda后spark-submit方法<ExternalLinkIcon/></a></li>
</ul>
<p>python上传后，在进行spark-submit时，会自动分发anaconda2的包到各个工作节点。但还需要给工作节点指定python解压路径。</p>
<ul>
<li><a href="https://youyou-tech.com/2019/11/03/Anaconda%E7%8E%AF%E5%A2%83%E6%89%93%E5%8C%85%E8%BF%81%E7%A7%BB%E5%88%B0%E5%8F%A6%E4%B8%80%E5%8F%B0%E6%9C%BA%E5%99%A8/" target="_blank" rel="noopener noreferrer">Anaconda环境打包迁移到另一台机器<ExternalLinkIcon/></a></li>
</ul>
<p>使用Conda-Pack来进行环境的打包和迁移。</p>
<ul>
<li><a href="https://conda.github.io/conda-pack/" target="_blank" rel="noopener noreferrer">Conda-Pack<ExternalLinkIcon/></a></li>
</ul>
<p>Conda-Pack的官方说明。</p>
</div></template>


