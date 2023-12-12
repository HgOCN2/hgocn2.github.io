<template><div><h1 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h1>
<ul>
<li><RouterLink to="/docs/Engineering/coding/cs-courses/data-structures-and-algorithms/data-structures/data-structures.html">返上层目录</RouterLink></li>
</ul>
<h1 id="二叉树的类型" tabindex="-1"><a class="header-anchor" href="#二叉树的类型" aria-hidden="true">#</a> 二叉树的类型</h1>
<h2 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h2>
<h3 id="完全二叉树的最后一个非终端节点的下标" tabindex="-1"><a class="header-anchor" href="#完全二叉树的最后一个非终端节点的下标" aria-hidden="true">#</a> 完全二叉树的最后一个非终端节点的下标</h3>
<p>堆排序是基于完全二叉树实现的，在将一个数组调整成一个堆的时候，关键之一的是确定最后一个非叶子节点的序号，这个序号为<code v-pre>n/2-1</code>，n为数组的长度。但是为什么呢？</p>
<p>完全二叉树的性质之一是：</p>
<blockquote>
<p>如果节点序号为i，在它的左孩子序号为2*i+1，右孩子序号为2*i+2。</p>
</blockquote>
<p><img src="/Users/momo/Desktop/machine-learning-notes/content/coding/data-structures-and-algorithms/data-structures/tree/pic/complete-binary-tree-1.png" alt="complete-binary-tree-1"></p>
<p>可以分两种情形考虑：</p>
<ul>
<li>
<p>堆的最后一个非叶子节点若只有左孩子</p>
<p>树的节点数为偶数，如上图为6，则有
$
\begin{aligned}
&amp;2*i+1=n-1\
\Rightarrow&amp;i=(n-2)/2=n/2-1
\end{aligned}
$</p>
</li>
<li>
<p>堆的最后一个非叶子节点有左右两个孩子</p>
<p>树的节点数为奇数，如上图为7
$
\begin{aligned}
&amp;2*i+2=n-1\
\Rightarrow&amp;i=(n-3)/2=(n-1)/2-1=[n/2]-1
\end{aligned}
$</p>
</li>
</ul>
<p>所以，无论最后一个节点的父节点有没有右孩子，其父节点的序号都是$[n/2]-1$。</p>
<p>注意：这里的序号都是从0开始的，不是从1开始。</p>
<h1 id="平衡二叉树-avl" tabindex="-1"><a class="header-anchor" href="#平衡二叉树-avl" aria-hidden="true">#</a> 平衡二叉树（AVL）</h1>
<p><a href="https://blog.csdn.net/u014634338/article/details/42465089" target="_blank" rel="noopener noreferrer">平衡二叉树（AVL）图解与实现<ExternalLinkIcon/></a></p>
<h1 id="伸展树" tabindex="-1"><a class="header-anchor" href="#伸展树" aria-hidden="true">#</a> 伸展树</h1>
<p><a href="https://blog.csdn.net/u014634338/article/details/49586689" target="_blank" rel="noopener noreferrer">伸展树(Splay tree)图解与实现<ExternalLinkIcon/></a></p>
<h1 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h1>
<p><a href="https://zhuanlan.zhihu.com/p/95892351" target="_blank" rel="noopener noreferrer">我画了 20 张图，给女朋友讲清楚红黑树<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/122257022" target="_blank" rel="noopener noreferrer">红黑树揭秘<ExternalLinkIcon/></a></p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.cnblogs.com/malw/p/10542557.html" target="_blank" rel="noopener noreferrer">堆排序（完全二叉树）最后一个非叶子节点的序号是n/2-1的原因<ExternalLinkIcon/></a></li>
</ul>
<p>“完全二叉树的最后一个非终端节点的下标”参考此博客。</p>
</div></template>


