<template><div><h1 id="优化器keras-optimizer" tabindex="-1"><a class="header-anchor" href="#优化器keras-optimizer" aria-hidden="true">#</a> 优化器keras.optimizer</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/machine-learning-framework/tensorflow/tensorflow2.0/keras/keras.html">返回上层目录</RouterLink></li>
</ul>
<h1 id="根据epoch调整学习率" tabindex="-1"><a class="header-anchor" href="#根据epoch调整学习率" aria-hidden="true">#</a> 根据Epoch调整学习率</h1>
<p>在HRNet的论文中，作者提到他们训练模型时的学习率设置为：</p>
<blockquote>
<p>The base learning rate is 0.0001 and is dropped to 0.00001 and 0.000001 at the 30 th and 50 th epochs.</p>
</blockquote>
<p>根据模型训练进程调整学习率是一种非常常见的做法。TensorFlow中自定义学习率策略有两种方法。</p>
<h3 id="拓展learningrateschedule" tabindex="-1"><a class="header-anchor" href="#拓展learningrateschedule" aria-hidden="true">#</a> 拓展LearningRateSchedule</h3>
<p>第一种是通过API <code v-pre>tf.keras.optimizers.schedules</code> 来实现。当前提供了5种学习率调整策略。如果这5种策略无法满足要求，可以通过拓展类 <code v-pre>tf.keras.optimizers.schedules.LearningRateSchedule</code> 来自定义调整策略。然后将策略实例直接作为参数传入<code v-pre>optimizer</code> 中。在官方示例<a href="https://www.tensorflow.org/tutorials/text/transformer#training_and_checkpointing" target="_blank" rel="noopener noreferrer">Transformer model<ExternalLinkIcon/></a>中展示了具体的示例代码。</p>
<p>不过这种方法存在局限性。类方法 <code v-pre>def__call__(self, step)</code> 只允许传入一个参数 <code v-pre>step</code> 。所以你的调整策略要以当前的 <code v-pre>step</code> 为依据。如果要随epoch改变学习率，需要根据当前step推算epoch。</p>
<h3 id="自定义callback" tabindex="-1"><a class="header-anchor" href="#自定义callback" aria-hidden="true">#</a> 自定义callback</h3>
<p>通过callback来改变学习率是第二种可行的方案。同样，官方提供了完善的文档来说明如何做到这一点。HRNet在第30 epoch和50 epoch时改变了学习率。自定义callback可以帮助我们做到这一点。</p>
<h4 id="全局类方法" tabindex="-1"><a class="header-anchor" href="#全局类方法" aria-hidden="true">#</a> 全局类方法</h4>
<p>Keras.model的 <code v-pre>fit</code> 方法通过接受 <code v-pre>callback</code> 对象作为参数，可以获得训练过程的内部状态。在训练开始与结束时，每个batch开始与结束时，每个epoch开始与结束时， <code v-pre>callback</code> 对应的类方法会被调用。例如在每个epoch开始时会调用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>on_epoch_begin<span class="token punctuation">(</span>self<span class="token punctuation">,</span> epoch<span class="token punctuation">,</span> logs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在epoch结束时，则会调用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>on_epoch_end<span class="token punctuation">(</span>self<span class="token punctuation">,</span> epoch<span class="token punctuation">,</span> logs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种机制给我们调整训练过程提供了机会窗口。</p>
<h4 id="访问模型属性" tabindex="-1"><a class="header-anchor" href="#访问模型属性" aria-hidden="true">#</a> 访问模型属性</h4>
<p><code v-pre>callback</code> 还提供了访问模型本身的方法，进而可以获取、设定模型的训练学习率。例如获取模型当前学习率</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lr <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>backend<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span>
            self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>optimizer<span class="token punctuation">.</span>learning_rate<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>on_epoch_begin</code> 函数中，<code v-pre>epoch</code>是一个已知参数。此刻可以根据<code v-pre>epoch</code>来调整学习率。之后再将新的学习率赋值给model</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>backend<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span>self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>optimizer<span class="token punctuation">.</span>lr<span class="token punctuation">,</span> scheduled_lr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


