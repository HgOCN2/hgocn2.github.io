<template><div><h1 id="pytorch基础" tabindex="-1"><a class="header-anchor" href="#pytorch基础" aria-hidden="true">#</a> Pytorch基础</h1>
<ul>
<li><RouterLink to="/docs/machine-learning-framework/pytorch/pytorch.html">返回上层目录</RouterLink></li>
<li><a href="#pytorch%E4%BB%A3%E7%A0%81%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8">pytorch代码快速入门</a></li>
</ul>
<h1 id="pytorch代码快速入门" tabindex="-1"><a class="header-anchor" href="#pytorch代码快速入门" aria-hidden="true">#</a> pytorch代码快速入门</h1>
<p>如果用过tensorflow（其实没用过也没关系），那么可以通过下面一段简单的代码来迅速入门pytorch。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> random
<span class="token keyword">import</span> torch

<span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>nn <span class="token keyword">as</span> nn
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>optim <span class="token keyword">as</span> optim

random_seed <span class="token operator">=</span> <span class="token number">1</span>
torch<span class="token punctuation">.</span>manual_seed<span class="token punctuation">(</span>random_seed<span class="token punctuation">)</span>
np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span>random_seed<span class="token punctuation">)</span>
random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span>random_seed<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">DummyModel</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>linear <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># y = a * x + b</span>
        output <span class="token operator">=</span> self<span class="token punctuation">.</span>linear<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> output

model <span class="token operator">=</span> DummyModel<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 实例化model</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"model ="</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"模型各层的参数 model.parameters() ="</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> param <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"===>"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">", type:"</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">", size:"</span><span class="token punctuation">,</span> param<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">,</span> param<span class="token punctuation">)</span>

<span class="token comment"># 定义loss function</span>
loss_fn <span class="token operator">=</span> nn<span class="token punctuation">.</span>MSELoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 这里把model的参数传入到optimizer中</span>
optimizer <span class="token operator">=</span> optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">0.1</span><span class="token punctuation">,</span> momentum<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"训练数据"</span><span class="token punctuation">)</span>
<span class="token builtin">input</span> <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"input ="</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">)</span>
label <span class="token operator">=</span> torch<span class="token punctuation">.</span>randn<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"label ="</span><span class="token punctuation">,</span> label<span class="token punctuation">)</span>

<span class="token keyword">for</span> epoch <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pred <span class="token operator">=</span> model<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">)</span>  <span class="token comment"># 计算结果</span>
    loss <span class="token operator">=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> label<span class="token punctuation">)</span>  <span class="token comment"># 计算损失</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"epoch: {}, loss: {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>epoch<span class="token punctuation">,</span> <span class="token builtin">round</span><span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>loss<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 清空过往梯度</span>
    loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 反向传播，计算当前梯度</span>
    optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 根据梯度更新网络参数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"pred ="</span><span class="token punctuation">,</span> pred<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>model = DummyModel(
  (linear): Linear(in_features=5, out_features=6, bias=True)
)
模型各层的参数 model.parameters() =
===> 0 , type: &lt;class 'torch.nn.parameter.Parameter'> , size: torch.Size([6, 5]) , Parameter containing:
tensor([[ 0.2304, -0.1974, -0.0867,  0.2099, -0.4210],
        [ 0.2682, -0.0920,  0.2275,  0.0622, -0.0548],
        [ 0.1240,  0.0221,  0.1633, -0.1743, -0.0326],
        [-0.0403,  0.0648, -0.0018,  0.3909,  0.1392],
        [-0.1665, -0.2701, -0.0750, -0.1929, -0.1433],
        [ 0.0214,  0.2666,  0.2431, -0.4372,  0.2772]], requires_grad=True)
===> 1 , type: &lt;class 'torch.nn.parameter.Parameter'> , size: torch.Size([6]) , Parameter containing:
tensor([ 0.1249,  0.4242,  0.2952, -0.4075, -0.4252, -0.2157],
       requires_grad=True)
训练数据
input = tensor([[-1.5727, -0.1232,  3.5870, -1.8313,  1.5987],
        [-1.2770,  0.3255, -0.4791,  1.3790,  2.5286]])
label = tensor([[ 0.4107, -0.9880, -0.9081,  0.5423,  0.1103, -2.2590],
        [ 0.6067, -0.1383,  0.8310, -0.2477, -0.8029,  0.2366]])
epoch: 0, loss: 2.78025
epoch: 1, loss: 1.22228
epoch: 2, loss: 0.14918
epoch: 3, loss: 0.56846
epoch: 4, loss: 1.42182
epoch: 5, loss: 1.39428
epoch: 6, loss: 0.64793
epoch: 7, loss: 0.2631
epoch: 8, loss: 0.60053
epoch: 9, loss: 0.95843
epoch: 10, loss: 0.72269
...
epoch: 15, loss: 0.4925
...
epoch: 20, loss: 0.25056
...
epoch: 40, loss: 0.01546
...
epoch: 50, loss: 0.00616
...
epoch: 90, loss: 0.0
...
epoch: 98, loss: 6e-05
epoch: 99, loss: 2e-05
pred = tensor([[ 0.4057, -0.9840, -0.9035,  0.5389,  0.1093, -2.2489],
        [ 0.6030, -0.1382,  0.8286, -0.2459, -0.8032,  0.2358]],
       grad_fn=&lt;AddmmBackward0>)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="dataloader详解" tabindex="-1"><a class="header-anchor" href="#dataloader详解" aria-hidden="true">#</a> DataLoader详解</h1>
<p><code v-pre>torch.utils.data.DataLoader</code>函数详解</p>
<p>应用实例：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
批训练：把数据分为一小批一小批进行训练
Dataloader就是用来包装使用的数据，
比如说该程序中把数据5个5个的打包，
每一次抛出一组数据进行操作。
'''</span>
<span class="token keyword">import</span> torch
<span class="token keyword">import</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data
torch<span class="token punctuation">.</span>manual_seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
BATCH_SIZE <span class="token operator">=</span> <span class="token number">5</span>

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
y <span class="token operator">=</span> torch<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>

torch_dataset <span class="token operator">=</span> Data<span class="token punctuation">.</span>TensorDataset<span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token comment">#把数据放在数据库中</span>
loader <span class="token operator">=</span> Data<span class="token punctuation">.</span>DataLoader<span class="token punctuation">(</span>
    <span class="token comment"># 从dataset数据库中每次抽出batch_size个数据</span>
    dataset<span class="token operator">=</span>torch_dataset<span class="token punctuation">,</span>
    batch_size<span class="token operator">=</span>BATCH_SIZE<span class="token punctuation">,</span>
    shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token comment">#将数据打乱</span>
    num_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">#使用两个线程</span>
<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">show_batch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> epoch <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#对全部数据进行3次训练</span>
        <span class="token keyword">for</span> step<span class="token punctuation">,</span><span class="token punctuation">(</span>batch_x<span class="token punctuation">,</span>batch_y<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 每一次挑选出来的size个数据</span>
            <span class="token comment"># training</span>
            <span class="token comment"># 打印出来，观察数据</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Epoch:'</span><span class="token punctuation">,</span>epoch<span class="token punctuation">,</span><span class="token string">'|Step:'</span><span class="token punctuation">,</span>step<span class="token punctuation">,</span><span class="token string">'|batch x:'</span><span class="token punctuation">,</span>
                  batch_x<span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'|batch y:'</span><span class="token punctuation">,</span>batch_y<span class="token punctuation">.</span>numpy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    show_batch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Epoch<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">5.</span>  <span class="token number">7.</span> <span class="token number">10.</span>  <span class="token number">3.</span>  <span class="token number">4.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">6.</span> <span class="token number">4.</span> <span class="token number">1.</span> <span class="token number">8.</span> <span class="token number">7.</span><span class="token punctuation">]</span>
Epoch<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">2.</span> <span class="token number">1.</span> <span class="token number">8.</span> <span class="token number">9.</span> <span class="token number">6.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">9.</span> <span class="token number">10.</span>  <span class="token number">3.</span>  <span class="token number">2.</span>  <span class="token number">5.</span><span class="token punctuation">]</span>
Epoch<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">4.</span>  <span class="token number">6.</span>  <span class="token number">7.</span> <span class="token number">10.</span>  <span class="token number">8.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7.</span> <span class="token number">5.</span> <span class="token number">4.</span> <span class="token number">1.</span> <span class="token number">3.</span><span class="token punctuation">]</span>
Epoch<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">5.</span> <span class="token number">3.</span> <span class="token number">2.</span> <span class="token number">1.</span> <span class="token number">9.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">6.</span>  <span class="token number">8.</span>  <span class="token number">9.</span> <span class="token number">10.</span>  <span class="token number">2.</span><span class="token punctuation">]</span>
Epoch<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">4.</span>  <span class="token number">2.</span>  <span class="token number">5.</span>  <span class="token number">6.</span> <span class="token number">10.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7.</span> <span class="token number">9.</span> <span class="token number">6.</span> <span class="token number">5.</span> <span class="token number">1.</span><span class="token punctuation">]</span>
Epoch<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">|</span>Step<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">|</span>batch x<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">3.</span> <span class="token number">9.</span> <span class="token number">1.</span> <span class="token number">8.</span> <span class="token number">7.</span><span class="token punctuation">]</span> <span class="token operator">|</span>batch y<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token number">8.</span>  <span class="token number">2.</span> <span class="token number">10.</span>  <span class="token number">3.</span>  <span class="token number">4.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="学习率调整" tabindex="-1"><a class="header-anchor" href="#学习率调整" aria-hidden="true">#</a> 学习率调整</h1>
<p>自定义：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SchedulerCosineDecayWarmup</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> optimizer<span class="token punctuation">,</span> lr<span class="token punctuation">,</span> warmup_len<span class="token punctuation">,</span> total_iters<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>optimizer <span class="token operator">=</span> optimizer
        self<span class="token punctuation">.</span>lr <span class="token operator">=</span> lr
        self<span class="token punctuation">.</span>warmup_len <span class="token operator">=</span> warmup_len
        self<span class="token punctuation">.</span>total_iters <span class="token operator">=</span> total_iters
        self<span class="token punctuation">.</span>current_iter <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">def</span> <span class="token function">get_lr</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>current_iter <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>warmup_len<span class="token punctuation">:</span>
            lr <span class="token operator">=</span> self<span class="token punctuation">.</span>lr <span class="token operator">*</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>current_iter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> self<span class="token punctuation">.</span>warmup_len
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            cur <span class="token operator">=</span> self<span class="token punctuation">.</span>current_iter <span class="token operator">-</span> self<span class="token punctuation">.</span>warmup_len
            total<span class="token operator">=</span> self<span class="token punctuation">.</span>total_iters <span class="token operator">-</span> self<span class="token punctuation">.</span>warmup_len
            lr <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>np<span class="token punctuation">.</span>pi <span class="token operator">*</span> cur <span class="token operator">/</span> total<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>lr
        <span class="token keyword">return</span> lr
    
    <span class="token keyword">def</span> <span class="token function">step</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        lr <span class="token operator">=</span> self<span class="token punctuation">.</span>get_lr<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> param <span class="token keyword">in</span> self<span class="token punctuation">.</span>optimizer<span class="token punctuation">.</span>param_groups<span class="token punctuation">:</span>
            param<span class="token punctuation">[</span><span class="token string">'lr'</span><span class="token punctuation">]</span> <span class="token operator">=</span> lr
        self<span class="token punctuation">.</span>current_iter <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment"># 使用时：</span>
scheduler <span class="token operator">=</span> SchedulerCosineDecayWarmup<span class="token punctuation">(</span>opt<span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="模型保存与加载" tabindex="-1"><a class="header-anchor" href="#模型保存与加载" aria-hidden="true">#</a> 模型保存与加载</h1>
<p>把原先模型eval，把加载后模型eval。才保证两模型完全一样。</p>
<p>保存模型</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>net<span class="token punctuation">,</span><span class="token string">'./model.pth'</span><span class="token punctuation">)</span>
<span class="token comment"># 或者</span>
torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>net<span class="token punctuation">.</span>state_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'./model-dict.pth'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加载模型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>net=torch.load('./model.pth')
或者
net.load_state_dict(torch.load('./model-dict.pth'))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加载后不同</p>
<p>如果不指定模型eval模式，那么加载回来的模型并不是和原先保存的模型相同。</p>
<p>简单说，原先的net你要eval一下，load之后的net也要eval一下，把所有参数freeze掉。才保证两个net完全相同（输入相同tensor得到完全一致的结果）。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#保存</span>
net<span class="token operator">=</span>net<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>net<span class="token punctuation">,</span><span class="token string">'./model.pth'</span><span class="token punctuation">)</span>
torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span>net<span class="token punctuation">.</span>state_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'./model-dict.pth'</span><span class="token punctuation">)</span>

<span class="token comment">#加载</span>
net_load1<span class="token operator">=</span>torch<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">'./model.pth'</span><span class="token punctuation">)</span>
net_load1<span class="token operator">=</span>net_load1<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#或者</span>
net_load2<span class="token punctuation">.</span>load_state_dict<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">'./model-dict.pth'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
net_load2<span class="token operator">=</span>net_load2<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#此时net和net_load1、net_load2完全一样。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="基本算符" tabindex="-1"><a class="header-anchor" href="#基本算符" aria-hidden="true">#</a> 基本算符</h1>
<h2 id="tensor-expand" tabindex="-1"><a class="header-anchor" href="#tensor-expand" aria-hidden="true">#</a> tensor.expand()</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># tensor([1, 2, 3, 4])</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>  <span class="token comment"># torch.Size([4])</span>

x1 <span class="token operator">=</span> x<span class="token punctuation">.</span>expand<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x1<span class="token punctuation">)</span>
<span class="token comment"># tensor([[1, 2, 3, 4],</span>
<span class="token comment">#         [1, 2, 3, 4]])</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x1<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>  <span class="token comment"># torch.Size([2, 4])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数为传入指定shape，在原shape数据上进行高维拓维，根据维度值进行重复赋值。</p>
<p>注意：</p>
<ul>
<li>只能拓展维度，比如A的shape为<code v-pre>2x4</code>的，不能<code v-pre>A.expend(1,4)</code>，只能保证原结构不变，在前面增维，比如<code v-pre>A.shape(1,1,4)</code></li>
<li>可以增加多维，比如x的shape为<code v-pre>[4]</code>，<code v-pre>x.expend(2,2,1,4)</code>只需保证本身是4</li>
<li>不能拓展低维，比如x的shape为<code v-pre>[4]</code>，不能<code v-pre>x.expend(4,2)</code></li>
</ul>
<h2 id="nn-threshold-threshold-value" tabindex="-1"><a class="header-anchor" href="#nn-threshold-threshold-value" aria-hidden="true">#</a> nn.Threshold(threshold, value)</h2>
<p>原理如下：
$$
y =
\begin{cases}
x, &amp;\text{ if } x &gt; \text{threshold} \
\text{value}, &amp;\text{ otherwise }
\end{cases}
$$
代码例子：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
t <span class="token operator">=</span> torch<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>Threshold<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># tensor([[ 0,  0,  0,  0],</span>
<span class="token comment">#         [11, 22, 33,  0]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tensor-item-和tensor-tolist" tabindex="-1"><a class="header-anchor" href="#tensor-item-和tensor-tolist" aria-hidden="true">#</a> tensor.item()和tensor.tolist()</h2>
<ul>
<li>按照官方文档，可以理解为从只包含<strong>一个</strong>元素的tensor中提取值，注意是只含有one element，其他情况用tolist()</li>
<li>在训练时统计loss的变化时，经常用到，否则会累积计算图，造成GPU的额外开销</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># tensor([1.])</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 1.0</span>

x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ValueError: only one element tensors can be converted to Python scalars</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># [1.0, 2.0]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="torch-no-grad" tabindex="-1"><a class="header-anchor" href="#torch-no-grad" aria-hidden="true">#</a> torch.no_grad()</h2>
<p>被with torch.no_grad()包住的代码，不用跟踪反向梯度计算，来做一个实验：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> requires_grad<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span>  <span class="token comment"># tensor([2.2000], grad_fn=&lt;MulBackward0>)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>add_<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># tensor([4.2000], grad_fn=&lt;AddBackward0>)</span>
<span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>mul_<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># tensor([8.4000], grad_fn=&lt;AddBackward0>)</span>
    <span class="token comment"># 看见了吗，可以看到没有跟踪乘法的梯度，还是上面的加法的梯度函数，不过乘法是执行了的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.zhihu.com/question/446595749/answer/1752209053" target="_blank" rel="noopener noreferrer">请问pytorch自定义的optimizer是怎么通过parameter和model参数联动的？<ExternalLinkIcon/></a></li>
</ul>
<p>用于pytorch快速入门的代码就来自这里。</p>
<ul>
<li><a href="https://www.zhihu.com/question/303070254" target="_blank" rel="noopener noreferrer">PyTorch中在反向传播前为什么要手动将梯度清零？<ExternalLinkIcon/></a></li>
</ul>
<p>pytorch快速入门的代码中，<code v-pre>optimizer.zero_grad()  # 清空过往梯度</code>，讲了对这句话的理解。优化器的梯度不会自动清零，默认会累加，所以要手动清零，这样的好处是多了一些玩法，比如小batch多累积几次就可以模拟一个大的batch，但同时学习率要放大。</p>
<ul>
<li><a href="https://blog.csdn.net/seven08290/article/details/83097841?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1.no_search_link&amp;spm=1001.2101.3001.4242.2" target="_blank" rel="noopener noreferrer">torch.utils.data.DataLoader函数详解<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;DataLoader详解&quot;参考了此博客。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/349973983" target="_blank" rel="noopener noreferrer">pytorch中的自带的学习率调整方案（带图示）<ExternalLinkIcon/></a></li>
</ul>
<p>“学习率调整”参考该文章，讲了几种常见的学习率调整方案。</p>
<ul>
<li><a href="https://yonggie.blog.csdn.net/article/details/105882087?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link" target="_blank" rel="noopener noreferrer">torch load或者load_state_dict（）后模型不相同<ExternalLinkIcon/></a></li>
</ul>
<p>“模型保存与加载”参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_42670810/article/details/114278285?spm=1001.2101.3001.6650.8&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-8.highlightwordscore&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-8.highlightwordscore" target="_blank" rel="noopener noreferrer">一句话理解torch.expand()<ExternalLinkIcon/></a></li>
</ul>
<p>“tensor.expand()”参考此博客。</p>
</div></template>


