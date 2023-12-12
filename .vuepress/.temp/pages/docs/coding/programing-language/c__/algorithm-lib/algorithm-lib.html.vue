<template><div><h1 id="algorithm算法库" tabindex="-1"><a class="header-anchor" href="#algorithm算法库" aria-hidden="true">#</a> algorithm算法库</h1>
<ul>
<li><RouterLink to="/docs/coding/programing-language/c++/c++.html">返回上层目录</RouterLink></li>
<li><a href="#sort%E6%8E%92%E5%BA%8F">sort排序</a></li>
<li><a href="#reverse%E5%8F%8D%E8%BD%AC">reverse反转</a></li>
</ul>
<p>使用algorithm算法库需先包含：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;algorithm&gt;
using namespace std;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sort排序" tabindex="-1"><a class="header-anchor" href="#sort排序" aria-hidden="true">#</a> sort排序</h1>
<p>sort(first_pointer,first_pointer+n,cmp)</p>
<p>该函数可以给数组，或者链表list、向量排序。</p>
<p>实现原理：sort并不是简单的快速排序，它对普通的快速排序进行了优化，此外，它还结合了插入排序和推排序。系统会根据你的数据形式和数据量自动选择合适的排序方法，这并不是说它每次排序只选择一种方法，它是在一次完整排序中不同的情况选用不同方法，比如给一个数据量较大的数组排序，开始采用快速排序，分段递归，分段之后每一段的数据量达到一个较小值后它就不继续往下递归，而是选择插入排序，如果递归的太深，他会选择推排序。</p>
<p>此函数有3个参数：</p>
<ul>
<li>参数1：第一个参数是数组的首地址，一般写上数组名就可以，因为数组名是一个指针常量。</li>
<li>参数2：第二个参数相对较好理解，即首地址加上数组的长度n（代表尾地址的下一地址）。</li>
<li>参数3：默认可以不填，如果不填sort会<strong>默认按数组升序排序</strong>。也就是1,2,3,4排序。也可以自定义一个排序函数，改排序方式为降序什么的，也就是4,3,2,1这样。</li>
</ul>
<h1 id="reverse反转" tabindex="-1"><a class="header-anchor" href="#reverse反转" aria-hidden="true">#</a> reverse反转</h1>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>reverse(s.begin(), s.end());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


