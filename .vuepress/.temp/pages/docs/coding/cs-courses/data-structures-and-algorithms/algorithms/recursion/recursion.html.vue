<template><div><h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1>
<ul>
<li><RouterLink to="/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/algorithms.html">返回上层目录</RouterLink></li>
<li><a href="#%E7%90%86%E8%A7%A3%E9%80%92%E5%BD%92%E7%9A%84%E6%A0%B8%E5%BF%83">理解递归的核心</a></li>
<li><a href="#%E7%90%86%E8%A7%A3%E9%80%92%E5%BD%92">理解递归</a>
<ul>
<li><a href="#%E7%90%86%E8%A7%A3%E7%AE%80%E5%8D%95%E9%80%92%E5%BD%92">理解简单递归</a></li>
<li><a href="#%E7%90%86%E8%A7%A3%E5%A4%8D%E6%9D%82%E9%80%92%E5%BD%92">理解复杂递归</a></li>
</ul>
</li>
<li><a href="#%E9%80%92%E5%BD%92%E7%9A%84%E5%85%B3%E9%94%AE">递归的关键</a></li>
<li><a href="#%E9%80%92%E5%BD%92%E7%9A%84%E9%9A%BE%E7%82%B9">递归的难点</a></li>
<li><a href="#%E9%80%92%E5%BD%92%E4%B8%89%E8%A6%81%E7%B4%A0">递归三要素</a></li>
<li><a href="#%E6%B1%89%E8%AF%BA%E5%A1%94">汉诺塔</a>
<ul>
<li><a href="#%E9%A2%98%E7%9B%AE%E4%BB%8B%E7%BB%8D">题目介绍</a></li>
<li><a href="#%E5%86%99%E9%80%92%E5%BD%92%E7%A8%8B%E5%BA%8F">写递归程序</a></li>
<li><a href="#%E6%B1%89%E8%AF%BA%E5%A1%94%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81">汉诺塔完整代码</a></li>
</ul>
</li>
</ul>
<h1 id="理解递归的核心" tabindex="-1"><a class="header-anchor" href="#理解递归的核心" aria-hidden="true">#</a> 理解递归的核心</h1>
<blockquote>
<p>对递归的理解的要点主要在于放弃!</p>
<p>放弃你对于理解和跟踪递归全程的企图，只理解递归两层之间的交接，以及递归终结的条件。</p>
<p>也就是说， 一定不要试图跟踪大型递归的过程！ 要写出递归，关键就是找出递归的递归方程式： 也就是说，<strong>要完成最后一步，那么最后一步的前一步要做什么</strong>。</p>
<p>放弃的基础在于信任，信任数学归纳法。</p>
</blockquote>
<h1 id="理解递归" tabindex="-1"><a class="header-anchor" href="#理解递归" aria-hidden="true">#</a> 理解递归</h1>
<h2 id="理解简单递归" tabindex="-1"><a class="header-anchor" href="#理解简单递归" aria-hidden="true">#</a> 理解简单递归</h2>
<p>用数学代入法来理解就好。</p>
<p>假设我们用递归来算阶乘 f(n)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=></span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> n <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>f里面用到了f，怎么理解呢？</p>
<p>很简单，把式子展开即可：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">6</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token number">5</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token number">5</span> <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">24</span></span><span class="token punctuation">)</span>
<span class="token operator">=></span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">120</span>
<span class="token operator">=></span> <span class="token number">720</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到递归了吗？</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/recursion-1.jpg" alt="recursion"></p>
<p>先递进，再回归——这就是「递归」。</p>
<p><strong>可以理解为依次外包分发任务，然后开始执行</strong>。</p>
<p>其实程序是用栈来实现递归的，那我们就用栈的形式来完成上面的流程：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/recursion-3.png" alt="recursion-3"></p>
<h2 id="理解复杂递归" tabindex="-1"><a class="header-anchor" href="#理解复杂递归" aria-hidden="true">#</a> 理解复杂递归</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token function">f</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归调用的状态图如下：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/recursion-2.jpg" alt="recursion-2"></p>
<h1 id="递归的关键" tabindex="-1"><a class="header-anchor" href="#递归的关键" aria-hidden="true">#</a> 递归的关键</h1>
<p>递归的关键有两个：</p>
<p>（1）递归的结束条件（不写会死循环，TLE）</p>
<p>（2）递归最后一层和其他有关系的层的关系怎样用非递归函数来表达</p>
<p>比如：斐波纳契亚数列，（1）当n==1和n==2的时候f(n)=1，这就是递归的终止条件。给了终止条件，计算机才能进行求解子问题并回溯，最终求出f(n)</p>
<h1 id="递归的难点" tabindex="-1"><a class="header-anchor" href="#递归的难点" aria-hidden="true">#</a> 递归的难点</h1>
<p>问：递归的特殊性（同时也是难点）是什么？
答：<strong>自己调用自己</strong></p>
<p>那么，如果把递归改写成不存在“自己调用自己”的形式，是不是就好理解了呢？
我们来试一试。</p>
<p>以阶乘为例，代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> f<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 结果是6</span>
f<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了注意了，我们要以另一种方式重写这段代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> f_a<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f_a</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> f_b<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f_b</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> f_c<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">f_c</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> f_d<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># ...</span>

<span class="token comment"># 结果是6</span>
f<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么样，没有递归了吧？好理解了吧？</p>
<p>所以，搞懂解递归的关键在于：不要把递归理解成“自己调用了自己”，而是理解成：</p>
<blockquote>
<p><strong>调用了另一个不同的函数，只不过被调用函数的函数体（以及函数签名等）恰好与当前函数一模一样。</strong></p>
</blockquote>
<p>只不过编程语言的设计者根据DRY（不重复自己，不写重复代码）原则，给语言增加了<strong>递归</strong>这种特性。好处自然是少些代码，坏处就是导致理解困难。</p>
<h1 id="递归三要素" tabindex="-1"><a class="header-anchor" href="#递归三要素" aria-hidden="true">#</a> 递归三要素</h1>
<p><strong>递归的定义</strong>：接受什么参数，返回什么值，代表什么意思 。当函数直接或者间接调⽤⾃⼰时，则发⽣了递归</p>
<p><strong>递归的拆解</strong>：每次递归都是为了让问题规模变小</p>
<p>**递归的出口：**必须有⼀个明确的结束条件。因为递归就是有“递”有“归”，所以必须又有一个明确的点，到了这个点，就不用“递下去”，而是开始“归来”。</p>
<p>递归的过程：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/recursion.jpg" alt="recursion"></p>
<p>下面这个求 n! 的例子中，递归出口（确定递归什么时候结束）是fun(1)=1，递归体（确定递归求解时的递归关系）是fun(n)=n*fun(n-1)，n&gt;1。</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fun</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="汉诺塔" tabindex="-1"><a class="header-anchor" href="#汉诺塔" aria-hidden="true">#</a> 汉诺塔</h1>
<blockquote>
<p>关于递归：</p>
<p>（1）在求f(n, other variables)的时候，你就默认f(n -1, other variables)已经被求出来了——至于怎么求的，这个是计算机通过回溯求出来的。</p>
<p>PS:这里用到了一种叫做栈(stack)的先进后出的数据结构，所以递归输出的答案一般是自下而上的。</p>
<p>（2）递归和二叉树是密切相关的。可以尝试通过二叉树的数据结构来理解递归是如何将一个问题拆分成若干子问题，求解再回溯的。这里可以参考以下快速排序(QuickSort)的过程（快速排序的核心思想是分治，分治即分而治之，通过递归将原问题分解为若干容易求解的子问题，再通过递归将这些子问题联系起来并向二叉树的上层回溯，最终求解出原问题）</p>
</blockquote>
<p>对于这个汉诺塔问题，在写递归时，我们只需要确定两个条件：</p>
<p>1.递归何时结束？</p>
<p>2.递归的核心公式是什么？即：</p>
<p>怎样将n个盘子全部移动到C柱上？</p>
<p>即：若使n个盘子全部移动到C柱上，上一步应该做什么？</p>
<h2 id="题目介绍" tabindex="-1"><a class="header-anchor" href="#题目介绍" aria-hidden="true">#</a> 题目介绍</h2>
<p><strong>下面正式进入该题：</strong></p>
<blockquote>
<p>汉诺塔：汉诺塔(Tower of Hanoi)源于印度传说中，大梵天创造世界时造了三根金钢石柱子，其中一根柱子自底向上叠着64片黄金圆盘。大梵天命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上。并且规定，在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。</p>
</blockquote>
<p>下面来对汉诺塔问题进行解释和建立模型</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/hanoi-1.png" alt="hanoi-1"></p>
<p>这是示意图，a是起始柱，c是目标柱，b起到中转作用</p>
<p>在进行转移操作时，都必须确保大盘在小盘下面，且每次只能移动一个圆盘，最终c柱上有所有的盘子且也是从上到下按从小到大的顺序。</p>
<p>问题看起来并不复杂：</p>
<ul>
<li>
<p>当a柱子上只有一个盘子时只要把那个盘子直接移到c就行了，</p>
</li>
<li>
<p>有两个盘子的话把1号盘先移到b柱，在把2号盘移到c柱，最后把b柱上的1号盘移到c柱就行了，</p>
</li>
</ul>
<p>但现在我们要移动的是64个盘子。。。要是我们自己手动操作，那画面会很美，闲着无聊的人可以试试。</p>
<p>下面我用图来描述64个盘子的转移流程：</p>
<p><img src="@source/docs/coding/cs-courses/data-structures-and-algorithms/algorithms/recursion/pic/hanoi-2.png" alt="hanoi-2"></p>
<p>这里我们先把上方的63个盘子看成整体，这下就等于只有两个盘子，自然很容易了，我们只要完成两个盘子的转移就行了，好了现在我们先不管第64个盘子，假设a柱只有63个盘子，与之前一样的解决方式，前62个盘子先完成移动目标。</p>
<p>嗯，就这样一步步向前找到可以直接移动的盘子，62,61,60，......，2,1，最终，最上方的盘子是可以直接移动到c柱的，那就好办了，我们的2号盘也能完成向c柱的转移，这时c柱上时已经转移成功的2个盘，于是3号盘也可以了，一直到第64号盘。</p>
<h2 id="写递归程序" tabindex="-1"><a class="header-anchor" href="#写递归程序" aria-hidden="true">#</a> 写递归程序</h2>
<p>下面我们来写递归函数。</p>
<p>首先，题目要求的是如何操作，那么我们就必须<strong>写一个输出操作语句的函数</strong>。</p>
<p>这个操作语句必须说明：第几步将哪个盘子从哪个柱子移动到哪个柱子上（这样人类才知道怎样移动盘子嘛）</p>
<p>这里，我们定义这个函数的函数名为<code v-pre>move</code>。</p>
<p>接下来，我们来确定这个函数的参数列表。</p>
<p>显然，为了说明第几步将哪个盘子从哪个柱子移动到哪个柱子上，我们参数列表至少应该包含：</p>
<p>id，表示被移动的盘子的序号。</p>
<p>from，表示从哪个柱子上移动这个编号为id的盘子</p>
<p>to，表示移动到哪个柱子上</p>
<p>那么这个函数的函数头就确定了：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 打印移动方式：编号，从哪个盘子移动到哪个盘子
void move(int id, char from, char to) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么函数体呢？</p>
<p>唯一的难点就是如何记录这是操作的第几步。</p>
<p>注意到，每次操作必须输出移动方式且仅能输出一次，那么显然，我们已经printf的当前总数不就是第几次操作了嘛</p>
<p>我们开一个全局变量用于记录printf的次数即可</p>
<p>所以函数体中就只有这一个语句：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>printf (&quot;step %d: move %d from %c-&gt;%c\n&quot;, ++cnt, id, from, to);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并起来就是：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>// 打印移动方式：编号，从哪个盘子移动到哪个盘子
void move(int id, char from, char to) {
    printf (&quot;step %d: move %d from %c-&gt;%c\n&quot;, ++cnt, id, from, to);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>敲黑板：</p>
<p><strong>递归函数怎么写呢?</strong></p>
<p>我们先来想一下我们人类应该怎样操作吧。</p>
<p>我们每次操作都会这样问自己：我们需要将哪个柱子上的多少个盘子通过哪个柱子移动到哪个柱子上呢？</p>
<p>我们必须也只能用这么几个参数：</p>
<p>需要移动的盘子的总数，3个柱子。</p>
<p>所以函数头为：</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>void hanoi(int n, char a, char b, char c)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，n代表盘子总数，a，b，c代表柱子</p>
<p><code v-pre>hanoi(n, a, b, c)</code>的意思就是：<strong>将n个在a柱子上的盘子通过b这个柱子移动到c这个柱子上。</strong></p>
<p><code v-pre>hanoi(n, a, b, c)</code>的意思就是：<strong>将n个在a柱子上的盘子通过b这个柱子移动到c这个柱子上。</strong></p>
<p><code v-pre>hanoi(n, a, b, c)</code>的意思就是：<strong>将n个在a柱子上的盘子通过b这个柱子移动到c这个柱子上。</strong></p>
<p>那不就完了！</p>
<p><code v-pre>hanoi(n, 'A', 'B', 'C')</code>就是这道问题的答案！</p>
<p>那么<strong>这一步的前一步是什么？</strong></p>
<p>记住了，在求解f(n, other variables)的时候，我们直接默认f(n - 1, other variables)已经完了就可以了！这个在前面已经解释过了，在此不再鳌述。</p>
<p>我们<strong>将n-1个盘子当作一个整体</strong>：这就是类似于<strong>分治求解子问题</strong>的思想</p>
<p>那么，前一步也就是f(n - 1, other variables)显然是<strong>先将n-1个在A柱子上的盘子通过C柱移动到B柱上，再将在A柱子上的编号为n的盘子移动到C柱上，再将B柱子上的n-1个盘子通过A柱移动到C柱上</strong>，over</p>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>void hanoi(int n, char a, char b, char c)
{
    if (n == 0)
        return;
    hanoi(n - 1, a, c, b);
    move(n, a, c);
    hanoi(n - 1, b, a, c);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="汉诺塔完整代码" tabindex="-1"><a class="header-anchor" href="#汉诺塔完整代码" aria-hidden="true">#</a> 汉诺塔完整代码</h2>
<div class="language-c++ line-numbers-mode" data-ext="c++"><pre v-pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;stdio&gt;
using namespace std;
 
int cnt;
 
void move(int id, char from, char to) // 打印移动方式：编号，从哪个盘子移动到哪个盘子
{
    printf (&quot;step %d: move %d from %c-&gt;%c\n&quot;, ++cnt, id, from, to);
}
 
void hanoi(int n, char x, char y, char z)
{
    if (n == 0)
        return;
    hanoi(n - 1, x, z, y);
    move(n, x, z);
    hanoi(n - 1, y, x, z);
}
 
int main()
{
    int n;
    cnt = 0;
    scanf (&quot;%d&quot;, &amp;n);
    hanoi(n, 'A', 'B', 'C');
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>p.s. 这里有一个描写递归汉诺塔的有意思的小故事，通过故事来理解：<a href="https://www.zhihu.com/question/24385418/answer/257751077" target="_blank" rel="noopener noreferrer">如何理解汉诺塔的递归？<ExternalLinkIcon/></a>。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/24385418/answer/257751077" target="_blank" rel="noopener noreferrer">如何理解汉诺塔的递归？<ExternalLinkIcon/></a></li>
</ul>
<p>“理解递归的核心”参考此知乎回答。</p>
<ul>
<li><a href="https://www.zhihu.com/question/31412436/answer/738989709" target="_blank" rel="noopener noreferrer">对于递归有没有什么好的理解方法？<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;理解简单递归&quot;参考此知乎回答。</p>
<ul>
<li><a href="https://www.zhihu.com/question/31412436/answer/683820765" target="_blank" rel="noopener noreferrer">对于递归有没有什么好的理解方法？<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;理解复杂递归&quot;参考此知乎回答。</p>
<ul>
<li><a href="https://www.zhihu.com/question/24732787/answer/685687391" target="_blank" rel="noopener noreferrer">怎么样可以很好地理解编程中的递归呢？<ExternalLinkIcon/></a></li>
</ul>
<p>“递归的难点”参考此知乎回答。</p>
<ul>
<li><a href="https://www.zhihu.com/question/24732787/answer/930238132" target="_blank" rel="noopener noreferrer">怎么样可以很好地理解编程中的递归呢？<ExternalLinkIcon/></a></li>
</ul>
<p>“递归三要素”参考此知乎回答。</p>
<ul>
<li><a href="https://blog.csdn.net/qq_41705423/article/details/82025409" target="_blank" rel="noopener noreferrer">汉诺塔问题——递归（时隔9个月，终于懂了）<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/qq_37873310/article/details/80461767" target="_blank" rel="noopener noreferrer">图解汉诺塔问题（递归求解）<ExternalLinkIcon/></a></li>
</ul>
<p>“汉诺塔”参考此知乎回答。</p>
<p>===</p>
<p>https://www.cnblogs.com/mld-code-life/p/10473605.html</p>
<p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NzA4MTkxNQ==&amp;mid=2247485092&amp;idx=1&amp;sn=ff44f169aa57cac8a8e6595b7ff49ab8&amp;scene=19#wechat_redirect" target="_blank" rel="noopener noreferrer">为什么你学不会递归？告别递归，谈谈我的一些经验<ExternalLinkIcon/></a></p>
</div></template>


