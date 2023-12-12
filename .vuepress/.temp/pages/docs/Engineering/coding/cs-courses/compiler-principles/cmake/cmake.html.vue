<template><div><h1 id="cmake" tabindex="-1"><a class="header-anchor" href="#cmake" aria-hidden="true">#</a> CMake</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/compiler-principles/compiler-principles.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%AE%80%E5%8C%96%E9%80%9A%E7%94%A8%E7%89%88CMakeLists%E6%A8%A1%E6%9D%BF">简化通用版CMakeLists模板</a></li>
<li><a href="%E6%94%AF%E6%8C%81OpemMP">支持OpemMP</a></li>
</ul>
<h1 id="简化通用版cmakelists模板" tabindex="-1"><a class="header-anchor" href="#简化通用版cmakelists模板" aria-hidden="true">#</a> 简化通用版CMakeLists模板</h1>
<p>一段代码的结构如下所示，也就是有很多子文件夹。用<code v-pre>tree /f</code>（windows）或<code v-pre>tree -a</code>（linux）命令展示代码的目录结构：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── CMakeLists.txt
├── Makefile
├── src
│   ├── src.cpp
│   └── src.h
├── src1
│   ├── main.cpp
│   ├── src1_1
│   │   └── src1_1.cpp
│   ├── src1.cpp
│   ├── src1.h
│   └── src2.cpp
└── TestTemp1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其最简化通用版的CMakeLists模板如下所示：</p>
<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre v-pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.21</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>TestTemp1<span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_CXX_STANDARD</span> <span class="token number">11</span><span class="token punctuation">)</span>

<span class="token keyword">set</span><span class="token punctuation">(</span>prj_src_dir <span class="token punctuation">${</span><span class="token variable">CMAKE_CURRENT_SOURCE_DIR</span><span class="token punctuation">}</span>/src1<span class="token punctuation">)</span>
<span class="token keyword">file</span><span class="token punctuation">(</span>GLOB_RECURSE root_src_files <span class="token string">"<span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">prj_src_dir</span><span class="token punctuation">}</span></span>/*"</span><span class="token punctuation">)</span>
<span class="token keyword">message</span><span class="token punctuation">(</span>STATUS <span class="token string">"root_src_files = <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">root_src_files</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>

<span class="token keyword">set</span><span class="token punctuation">(</span>PRJ_SRC_LIST<span class="token punctuation">)</span>
<span class="token keyword">list</span><span class="token punctuation">(</span>APPEND PRJ_SRC_LIST <span class="token punctuation">${</span>root_src_files<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">"PRJ_SRC_LIST = <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">PRJ_SRC_LIST</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>

<span class="token keyword">include_directories</span><span class="token punctuation">(</span>./<span class="token punctuation">)</span>

<span class="token keyword">add_executable</span><span class="token punctuation">(</span><span class="token punctuation">${</span><span class="token variable">PROJECT_NAME</span><span class="token punctuation">}</span> <span class="token punctuation">${</span>PRJ_SRC_LIST<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此内容简化自<a href="https://zhuanlan.zhihu.com/p/409339062" target="_blank" rel="noopener noreferrer">cmake+vscode编译多个子目录c++文件的源代码<ExternalLinkIcon/></a>，更全面的请点开看该网址。</p>
<p>注意，</p>
<ul>
<li>上述代码中的<code v-pre>include_directories(./)</code>意思是添加头文件搜索路径，这里只添加了当前CMakeLists所在的根目录，所以代码里引用的头文件地址，必须要从根目录开始引用，比如需要写成<code v-pre>#include &quot;src1/src1.h&quot;</code>，而不能只写成<code v-pre>#include &quot;src1.h&quot;</code>，因为其搜索路径只有当前的根目录，除非你加上该地址，比如<code v-pre>include_directories(./;src1/)</code>，不同头文件搜索路径用空格或分号分开。</li>
<li><code v-pre>file(GLOB_RECURSE root_src_files &quot;${prj_src_dir}/*&quot;)</code>是指在指定目录下递归搜索所有的文件（包括子文件里的文件或子文件夹里的子文件的文件或文件夹，如此递归直到找出所有的文件）。具体解释请看这里：<a href="https://www.cnblogs.com/yongdaimi/p/14689417.html" target="_blank" rel="noopener noreferrer">CMake : 递归的添加所有cpp文件<ExternalLinkIcon/></a></li>
</ul>
<p>另一个简单的入门CMakelists.txt：</p>
<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre v-pre class="language-cmake"><code><span class="token comment">#设定Cmake的最低版本要求</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.0.0</span><span class="token punctuation">)</span>
<span class="token comment">#项目名称，可以和文件夹名称不同</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Hello <span class="token property">VERSION</span> <span class="token number">0.1.0</span><span class="token punctuation">)</span>
<span class="token comment">#命令指定 SOURE_TEST变量（自己定义就行）来表示多个源文件</span>
<span class="token keyword">set</span><span class="token punctuation">(</span>SOURCE_TEST main.cpp math.cpp math.h<span class="token punctuation">)</span>
<span class="token comment">#例如：set(SOURCE_TEST main.cpp test.cpp test1.cpp)</span>
<span class="token comment">#将生成的可执行文件保存至bin文件夹中</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">EXECUTABLE_OUTPUT_PATH</span>  <span class="token punctuation">${</span><span class="token variable">CMAKE_CURRENT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
<span class="token comment">#生成可执行文件main.exe(可执行文件名 自己定义就行)，用${var_name}获取变量的值。</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>main <span class="token punctuation">${</span>SOURCE_TEST<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体见<a href="https://blog.csdn.net/qq_52045548/article/details/127091568" target="_blank" rel="noopener noreferrer">Cmake实现VScode中c++多文件编译（记录）<ExternalLinkIcon/></a></p>
<h1 id="支持opemmp" tabindex="-1"><a class="header-anchor" href="#支持opemmp" aria-hidden="true">#</a> 支持OpemMP</h1>
<p>在</p>
<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre v-pre class="language-cmake"><code><span class="token keyword">add_executable</span><span class="token punctuation">(</span><span class="token punctuation">${</span><span class="token variable">PROJECT_NAME</span><span class="token punctuation">}</span> <span class="token punctuation">${</span>PRJ_SRC_LIST<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的后面，加上下面的语句。</p>
<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre v-pre class="language-cmake"><code><span class="token comment"># openMP 配置</span>
<span class="token function">FIND_PACKAGE</span><span class="token punctuation">(</span>OpenMP REQUIRED<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>OPENMP_FOUND<span class="token punctuation">)</span>
    <span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">"OPENMP FOUND"</span><span class="token punctuation">)</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_C_FLAGS</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">CMAKE_C_FLAGS</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">OpenMP_C_FLAGS</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_CXX_FLAGS</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">CMAKE_CXX_FLAGS</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">${</span><span class="token variable">OpenMP_CXX_FLAGS</span><span class="token punctuation">}</span></span>"</span><span class="token punctuation">)</span>
<span class="token keyword">endif</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<p>https://www.jetbrains.com/help/clion/quick-cmake-tutorial.html#link-libs</p>
<p><a href="https://zhuanlan.zhihu.com/p/409339062" target="_blank" rel="noopener noreferrer">cmake+vscode编译多个子目录c++文件的源代码<ExternalLinkIcon/></a></p>
<p>https://zhuanlan.zhihu.com/p/406886060</p>
<p><a href="https://www.shuzhiduo.com/A/nAJvK2go5r/" target="_blank" rel="noopener noreferrer">多个源文件，多个目录<ExternalLinkIcon/></a></p>
</div></template>


