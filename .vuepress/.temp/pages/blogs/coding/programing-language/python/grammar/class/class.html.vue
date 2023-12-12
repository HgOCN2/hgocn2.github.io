<template><div><h1 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h1>
<ul>
<li><RouterLink to="/blogs/coding/programing-language/python/grammar/python.html">返回上层目录</RouterLink></li>
<li><a href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">面向对象编程</a></li>
<li><a href="#%E7%B1%BB%E7%9A%84%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95">类的构造方法</a></li>
<li><a href="#%E7%B1%BB%E7%9A%84%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90">类的访问权限</a></li>
<li><a href="#%E7%BB%A7%E6%89%BF">继承</a></li>
<li><a href="#%E5%A4%9A%E6%80%81">多态</a></li>
<li><a href="#%E5%BC%95%E7%94%A8%E5%85%B6%E4%BB%96.py%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E7%B1%BB">引用其他.py文件中的类</a></li>
<li><a href="#%E7%B1%BB%E5%B1%9E%E6%80%A7">类属性</a></li>
<li><a href="#%E7%B1%BB%E6%96%B9%E6%B3%95%E3%80%81%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95">类方法、静态方法</a></li>
<li><a href="#%E5%8D%95%E4%BE%8B%E7%B1%BB">单例类</a></li>
<li><a href="#%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86">异常处理</a></li>
<li><a href="#%E5%8C%85%E5%92%8C%E6%A8%A1%E5%9D%97">包和模块</a></li>
</ul>
<h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程</h1>
<ul>
<li>
<p>面向对象编程（简称oop）：是一种解决软件复用问题的设计和编程方法。</p>
<p>这种方法把软件系统由相似的操作逻辑、数据、状态等以类的形式描述出来，通过对象实例在软件系统中复用，从而提高软件开发效率。</p>
</li>
<li>
<p>类：一个事物的抽象，定义了一类事物的属性和行为</p>
</li>
<li>
<p>对象：通过类创建的一个具体事物，它具有状态和行为，可以做具体的事情。</p>
</li>
<li>
<p>类和对象的关系</p>
<ul>
<li>类相当于创建对象的模板，根据类可以创建多个对象</li>
</ul>
</li>
<li>
<p>类的构成</p>
<ul>
<li>类的名称</li>
<li>类的属性</li>
<li>类的方法</li>
</ul>
</li>
<li>
<p>类的定义</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> 类名<span class="token punctuation">:</span>
	<span class="token keyword">def</span> 方法名<span class="token punctuation">(</span>self<span class="token punctuation">[</span>，参数列表<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>类名的命名规则按照“大驼峰”</p>
</li>
<li>
<p>定义的方法默认要传入一个self参数，表示自己，self参数必须是第一个参数</p>
</li>
<li>
<p>创建对象：对象变量名 = 类名()</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"小狗正在啃骨头！"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">drink</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"小狗正在喝水！"</span><span class="token punctuation">)</span>

<span class="token comment"># 创建对象</span>
wang_cai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 旺财</span>
wang_cai<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
wang_cai<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-----------"</span><span class="token punctuation">)</span>
afu <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 阿福</span>
afu<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
afu<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类的构造方法" tabindex="-1"><a class="header-anchor" href="#类的构造方法" aria-hidden="true">#</a> 类的构造方法</h1>
<ul>
<li>__int__构造方法
<ul>
<li>调用时间：在对象被实例化时被程序自动调用</li>
<li>作用：用于对象创建时初始化</li>
<li>书写格式：init前后分别是两个下划线</li>
<li>程序不显示定义init方法，则程序默认调用一个无参init方法</li>
</ul>
</li>
</ul>
<p>构造一个类</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># def __init__(self):# 无参构造方法</span>
    <span class="token comment">#     print("定义了一条狗")</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> variety<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 有参构造方法</span>
        self<span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
        self<span class="token punctuation">.</span>variety <span class="token operator">=</span> variety
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">def</span> <span class="token function">get_pro</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我的名字是：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在啃骨头"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">drink</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在喝水"</span><span class="token punctuation">)</span>

<span class="token comment"># wangcai = Dog()</span>
wangcai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">"male"</span><span class="token punctuation">,</span> <span class="token string">"golden"</span><span class="token punctuation">,</span> <span class="token string">"wangcai"</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>wangcai<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>wangcai<span class="token punctuation">.</span>variety<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>wangcai<span class="token punctuation">.</span>gender<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>wangcai<span class="token punctuation">.</span>get_pro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># print("-------------")</span>
<span class="token comment"># heibei = Dog("female", "lapulasi", "heibei")</span>
<span class="token comment"># heibei.eat()</span>
<span class="token comment"># heibei.drink()</span>
<span class="token comment"># print(heibei.name)</span>
<span class="token comment"># print(heibei.variety)</span>
<span class="token comment"># print(heibei.gender)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类的访问权限" tabindex="-1"><a class="header-anchor" href="#类的访问权限" aria-hidden="true">#</a> 类的访问权限</h1>
<ul>
<li>修改对象属性的方法
<ul>
<li>方法1：对象变量名.属性 = 新值</li>
<li>方法1的问题：
<ul>
<li>1)可能修改的属性值不合法</li>
<li>2)在类的外部可以随意修改类的内部属性</li>
</ul>
</li>
<li>方法2：对象变量名.内部修改属性方法</li>
</ul>
</li>
<li>私有属性
<ul>
<li>定义：__私有变量名，变量名钱是两个下划线</li>
<li>只能在类的内部使用，类外部不能访问，否则报错</li>
</ul>
</li>
<li>私有方法
<ul>
<li>只能在类内部调用，在类的外部无法调用</li>
<li>定义私有方法在方法前加两个下划线</li>
<li>类内部调用私有方法要使用self.私有方法的方式调用</li>
</ul>
</li>
</ul>
<p>类的私有属性无法被修改：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># def __init__(self):# 无参构造方法</span>
    <span class="token comment">#     print("定义了一条狗")</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> variety<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 有参构造方法</span>
        self<span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
        self<span class="token punctuation">.</span>variety <span class="token operator">=</span> variety
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age
    <span class="token keyword">def</span> <span class="token function">get_pro</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"gender:{}, variety:{}, name:{}, age:{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>variety<span class="token punctuation">,</span> self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__age<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">set_pro</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">**</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token string">"gender"</span> <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>gender <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">"gender"</span><span class="token punctuation">]</span>
        <span class="token keyword">elif</span> <span class="token string">"variety"</span> <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>variety <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">"variety"</span><span class="token punctuation">]</span>
        <span class="token keyword">elif</span> <span class="token string">"name"</span> <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>name <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span>
        <span class="token keyword">elif</span> <span class="token string">"age"</span> <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            <span class="token keyword">if</span> args<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> args<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">20</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"非法年龄：{}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>__age <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在啃骨头"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">drink</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在喝水"</span><span class="token punctuation">)</span>

wangcai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">"male"</span><span class="token punctuation">,</span><span class="token string">"golden"</span><span class="token punctuation">,</span> <span class="token string">"wangcai"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>get_pro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># age:1</span>
wangcai<span class="token punctuation">.</span>set_pro<span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token comment"># 非法年龄：100</span>
wangcai<span class="token punctuation">.</span>get_pro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># age:1</span>
wangcai<span class="token punctuation">.</span>__age<span class="token operator">=</span> <span class="token number">10</span><span class="token comment"># 类的外部不能对类的四有属性进行修改</span>
wangcai<span class="token punctuation">.</span>get_pro<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># age:1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>私有方法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Comrade</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__send_message</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment">#私有方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"消息已经汇报给上级"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">answer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> secret<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> secret <span class="token operator">==</span> <span class="token string">"芝麻开门"</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"接头成功"</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>__send_message<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 调用私有方法</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"接头失败！"</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> Comrade<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>answer<span class="token punctuation">(</span><span class="token string">"芝麻开门"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h1>
<ul>
<li>在程序中，继承描述的是类中类型与子类型之间的所属关系，例如猫和狗都属于动物</li>
<li>单继承
<ul>
<li>子类继承一个父类，在定义子类时，小括号()中写父类的类名</li>
<li>父类的非私有属性、方法、会被子类继承</li>
<li>子类中方法的查找：先查找子类中对应的方法，如果找不到，再到父类中查找</li>
<li>子类可以继承父类的属性和方法，也可以继承父类的父类的非私有属性和方法，以此类推</li>
<li>在子类中调用父类的方法：ClassName.methodname(self)</li>
</ul>
</li>
<li>多继承
<ul>
<li>object类是所有类的基类，在定义类的时候，不需要显式地在括号中表明继承自object类</li>
<li>多继承：一些子类可以继承多个父类</li>
<li>多继承定义方式：在类名后的括号中添加需要继承的多个类名</li>
<li>多继承中，如果在多个类中有同名的方法，子类调用查找方法的顺序是按照小括号内继承父类从左到右的顺序查找，第一个匹配方法名的父类方法将会被调用</li>
</ul>
</li>
</ul>
<p>单继承</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__my</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"私有方法"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---吃---"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">drink</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"---喝---"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"--跑---"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">hand</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"***握手***"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 重写与父类同名的成员函数</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"***狗在吃饭***"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">GoldDog</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">guide</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Animal<span class="token punctuation">.</span>run<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token comment"># 在子类中调用父类的方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我能导航"</span><span class="token punctuation">)</span>
wangcai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 子类可继承父类的非私有方法</span>
wangcai<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
wangcai<span class="token punctuation">.</span>hand<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># wangcai.__my()# 子类不能继承父类的私有方法</span>
<span class="token comment"># Error: 'Dog' object has no attribute '__my'</span>
jinmao <span class="token operator">=</span> GoldDog<span class="token punctuation">(</span><span class="token punctuation">)</span>
jinmao<span class="token punctuation">.</span>hand<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 继承父类</span>
jinmao<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 继承父类重新定义的函数</span>
jinmao<span class="token punctuation">.</span>drink<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 继承爷爷类</span>
jinmao<span class="token punctuation">.</span>guide<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多继承：（尽量不雅使用相同的方法名称，以免产生分歧）</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AI</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">face</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"人脸识别"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">data_ana</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"人工智能的数据分析"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">BigData</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">data_ana</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"大数据的数据分析"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Python</span><span class="token punctuation">(</span>AI<span class="token punctuation">,</span> BigData<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 继承了两个父类的方法</span>
    <span class="token keyword">def</span> <span class="token function">operate</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"自动化运维"</span><span class="token punctuation">)</span>

py <span class="token operator">=</span> Python<span class="token punctuation">(</span><span class="token punctuation">)</span>
py<span class="token punctuation">.</span>face<span class="token punctuation">(</span><span class="token punctuation">)</span>
py<span class="token punctuation">.</span>data_ana<span class="token punctuation">(</span><span class="token punctuation">)</span>
py<span class="token punctuation">.</span>operate<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h1>
<p>多态(主要用于JAVA、C#强类型的语言中)</p>
<ul>
<li>一个抽象类有多个子类，不同的类表现出多种形态</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正在吃饭"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Dog正在吃饭"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Cat正在吃饭"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">show_eat</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
    obj<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>

wangcai <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
show_eat<span class="token punctuation">(</span>wangcai<span class="token punctuation">)</span>
tom <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
show_eat<span class="token punctuation">(</span>tom<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="引用其他-py文件中的类" tabindex="-1"><a class="header-anchor" href="#引用其他-py文件中的类" aria-hidden="true">#</a> 引用其他.py文件中的类</h1>
<p>dog_define.py:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"狗在吃饭"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dog_use.py:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> dog_define <span class="token keyword">import</span> Dog
jinmao <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
jinmao<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意的是，在pycharm中，会发生无法导入同级别其他文件中的类的情况。需要对所在的包右击“Mark directory as”-&gt;&quot;sources Root&quot;。</p>
<h1 id="类属性" tabindex="-1"><a class="header-anchor" href="#类属性" aria-hidden="true">#</a> 类属性</h1>
<ul>
<li>
<p>实例属性</p>
<ul>
<li>所属于具体的实例对象，不同的实例对象之间的实例属性互不影响</li>
</ul>
</li>
<li>
<p>类属性</p>
<ul>
<li>
<p>所属于类对象，多个实例对象之间共享一个类属性</p>
</li>
<li>
<p>获取类属性方法：类名.类属性</p>
</li>
<li>
<p>通过实例对象不能修改类属性</p>
<p><img src="@source/blogs/coding/programing-language/python/grammar/class/pic/class_attribute.png" alt="class_attribute"></p>
</li>
</ul>
</li>
</ul>
<p>类属性（在所有对象中共享的属性）</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    sum_num <span class="token operator">=</span> <span class="token number">0</span><span class="token comment"># 类属性:人类总数，对象全局共享</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> new_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> new_name
        Person<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span><span class="token comment"># 1 1</span>
p2 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"lisi"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span><span class="token comment"># 2 2 2</span>
p1<span class="token punctuation">.</span>sum_num <span class="token operator">=</span> <span class="token number">100</span><span class="token comment"># 相当于动态的添加了一个实例属性，并不能修改类属性</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span><span class="token comment"># 2 100 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果名称相同，则优先找实例属性，再找类属性：</p>
<p>建议：尽量使用类名.类属性来调用类属性，以免和实例属性混淆。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    sum_num <span class="token operator">=</span> <span class="token number">0</span><span class="token comment"># 类属性:人类总数，对象全局共享</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> new_name<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> new_name
        self<span class="token punctuation">.</span>sum_num <span class="token operator">=</span> num
        Person<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span><span class="token comment"># 1 99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类方法、静态方法" tabindex="-1"><a class="header-anchor" href="#类方法、静态方法" aria-hidden="true">#</a> 类方法、静态方法</h1>
<ul>
<li>类方法
<ul>
<li>所属与类对象，使用@classmethod修饰的方法</li>
<li>定义类方法的第一个参数通常以&quot;cls&quot;参数作为类对象被传入</li>
<li>调用方式：类名.类方法 或者 实例对象.类方法（不推荐）</li>
</ul>
</li>
<li>静态方法
<ul>
<li>使用@staticmethod修饰的方法，不需要默认传递任何参数</li>
<li>调用方式：类名.静态方法 或者 实例对象.静态方法</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    sum_num <span class="token operator">=</span> <span class="token number">0</span><span class="token comment"># 类属性:人类总数，对象全局共享</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> new_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> new_name
        Person<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">add_sum_num</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        cls<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span>

<span class="token comment"># 类名调用类方法</span>
Person<span class="token punctuation">.</span>add_sum_num<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 1</span>
p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span><span class="token comment"># 2 2</span>
<span class="token comment"># 不建议用实例对象调用类方法</span>
p1<span class="token punctuation">.</span>add_sum_num<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态方法</p>
<p>静态方法几乎和类和对象本身没什么关系,所以不建议使用静态方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    sum_num <span class="token operator">=</span> <span class="token number">0</span><span class="token comment"># 类属性:人类总数，对象全局共享</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> new_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> new_name
        Person<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">static_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-----静态方法-----"</span><span class="token punctuation">)</span>
        Person<span class="token punctuation">.</span>sum_num <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>sum_num<span class="token punctuation">)</span>

Person<span class="token punctuation">.</span>static_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"------"</span><span class="token punctuation">)</span>
p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">"p1"</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span>static_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类方法和静态方法中，不能直接调用实例属性。</p>
<h1 id="单例类" tabindex="-1"><a class="header-anchor" href="#单例类" aria-hidden="true">#</a> 单例类</h1>
<ul>
<li>__new__(cls)
<ul>
<li>超类object类内置的方法，用户创建对象，返回创建对象的引用</li>
<li>先在内存里创建一个对象，在根据__init__添加具体的类的属性</li>
<li>必须要提供cls参数，代表类对象</li>
<li>必须要有返回值，返回创建对象的引用</li>
</ul>
</li>
<li>单例类
<ul>
<li>在整个程序系统中确保某一个类只有一个实例对象。比如数据库连接的类，确保只有一个数据库连接的类，保证系统的性能。</li>
</ul>
</li>
</ul>
<p>实例化对象的过程</p>
<ul>
<li>1、调用__new__方法创建对象，并返回创建的对象的引用。（new是创建具体对象的，而不是创建类属性的，类属性在new之前就已经被python解释器创建了）</li>
<li>2、调用__init__构造方法初始化对象，将先创建的对象的引用作为参数传入，此时self指向的是上一步new方法创建的对象的引用</li>
<li>3、初始化对象结束，将对象的引用返回给具体的对象变量(如例子中的db)</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">DataBaseObj</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># __init__是在__new__基础上完成了一些其他的初始化的操作</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"__init__构造方法"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment"># 重写父类的__new__方法</span>
        <span class="token comment"># cls代表的是类对象</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"cls_id:{}"</span><span class="token punctuation">,</span><span class="token builtin">id</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token comment"># 必须要返回一个对象</span>
<span class="token comment"># 类就像是一个制造商，new就是前期的原材料购买环节，</span>
<span class="token comment"># init就是在原材料基础上加工初始化商品的缓解.</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"DataBaseObj_id:"</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">(</span>DataBaseObj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># DataBaseObj_id: 6092792</span>
db <span class="token operator">=</span> DataBaseObj<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># cls_id:{} 6092792</span>
<span class="token comment"># __init__构造方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
<span class="token comment"># &lt;__main__.DataBaseObj object at 0x0000000002869588></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单例类：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SingleObj</span><span class="token punctuation">:</span>
    instance <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"__init__"</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>instance <span class="token operator">==</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            cls<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
        <span class="token comment"># 类属性指向实例对象</span>
        <span class="token keyword">return</span>  cls<span class="token punctuation">.</span>instance

s1 <span class="token operator">=</span> SingleObj<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># __init__</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 34452592</span>
s2 <span class="token operator">=</span> SingleObj<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment"># __init__</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># 34452592</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1>
<ul>
<li>
<p>捕获异常</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
	逻辑代码块
<span class="token keyword">except</span> ExceptionType <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>捕获多个异常</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
	逻辑代码块
<span class="token keyword">except</span> <span class="token punctuation">(</span>ExceptionType1<span class="token punctuation">,</span> ExceptionType1<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>捕获所有可能发生发生的异常</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
	逻辑代码块
<span class="token keyword">except</span> <span class="token punctuation">(</span>ExceptionType1<span class="token punctuation">,</span> ExceptionType1<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>finally，常用于关闭文件或数据库连接等程序运行过程中，是否发生异常，程序都要处理。不论是否产生异常，均要执行</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
	逻辑代码块
<span class="token keyword">except</span> <span class="token punctuation">(</span>ExceptionType1<span class="token punctuation">,</span> ExceptionType1<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span>
	异常处理方法
<span class="token keyword">finally</span><span class="token punctuation">:</span>
  	无论是否有异常产生，都会执行这里的代码块！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>函数嵌套异常传递</p>
</li>
</ul>
<p>单个</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> FileNotFoundError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"捕获到了异常：文件不存在!"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"哈哈"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个(一旦出错，后面的代码均不会执行)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> <span class="token punctuation">(</span>NameError<span class="token punctuation">,</span> FileNotFoundError<span class="token punctuation">)</span> <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"哈哈"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> <span class="token punctuation">(</span>NameError<span class="token punctuation">)</span> <span class="token keyword">as</span> err1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>err1<span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> err2<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>err2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"哈哈"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>finally</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"关闭文件"</span><span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不论发生什么，都会执行我"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"哈哈"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数嵌套，也即程序调用时发生异常</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-------test1-------"</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-------test2--------"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"*******test2********"</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        test1<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> err<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"捕获到了test1函数的异常"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"********test-2********"</span><span class="token punctuation">)</span>

test2<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="包和模块" tabindex="-1"><a class="header-anchor" href="#包和模块" aria-hidden="true">#</a> 包和模块</h1>
<ul>
<li>
<p>python项目结构</p>
<ul>
<li>
<p>一个项目里有多个包，一个包里有多个模块(.py)，一个模块就是一个以.py结尾的文件，一个模块内可以定义变量、函数、类等。</p>
<p><img src="@source/blogs/coding/programing-language/python/grammar/class/pic/package_and_model.png" alt="package_and_model"></p>
</li>
</ul>
</li>
<li>
<p>模块的名字：.py文件的名字</p>
</li>
<li>
<p>包下可以包含子包</p>
</li>
<li>
<p>不同包下可以有相同的模块名称，使用“包名.模块名”的方法区分</p>
</li>
<li>
<p>引入模块的方式</p>
<ul>
<li>
<p>引入单个模块：import model_name</p>
</li>
<li>
<p>引入多个模块：import model_name1, model_name2, ...</p>
</li>
<li>
<p>引入模块中的指定函数：</p>
<p>from model_name import funcc1, func2, ...</p>
</li>
</ul>
</li>
<li>
<p>包中必须包含一个默认的__init__文件</p>
<ul>
<li>
<p>用于标识一个包，而不是一个普通的文件夹</p>
</li>
<li>
<p><strong>会在包或者该包下的模块被引入时自动调用</strong></p>
</li>
<li>
<p>常用于设置包和模块的一些初始化操作</p>
<p>如__init__.py可写成：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"init文件自动被调用"</span><span class="token punctuation">)</span>
<span class="token comment"># import business.model1</span>
__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'model1'</span><span class="token punctuation">,</span><span class="token string">'model2'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以便</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> business <span class="token keyword">import</span> <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>不同的包之间可以创建同名的模块(.py)。</p>
</div></template>


