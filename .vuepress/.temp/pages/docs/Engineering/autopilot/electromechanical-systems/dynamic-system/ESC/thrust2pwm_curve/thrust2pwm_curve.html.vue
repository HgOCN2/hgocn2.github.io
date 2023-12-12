<template><div><h1 id="螺旋桨推力与转速的关系" tabindex="-1"><a class="header-anchor" href="#螺旋桨推力与转速的关系" aria-hidden="true">#</a> 螺旋桨推力与转速的关系</h1>
<ul>
<li><RouterLink to="/docs/Engineering/autopilot/electromechanical-systems/dynamic-system/ESC/ESC.html">返回上层目录</RouterLink></li>
</ul>
<p>螺旋桨推力thrust与转速pwm（假设转速正比于pwm）的关系为：
$$
\begin{aligned}
\text{thrust}&amp;=k_1\times C_l \times \text{rpm}^2\
&amp;=k_2\times C_l \times \text{pwm}^2
\end{aligned}
$$
其中，$C_l$表示升力系数，$\sqrt{\frac{k_2}{k_1}}$为电调输入pwm和转速rpm的正比系数。</p>
<p>但有的电调比如T-model可能会做pwm到推力的线性化</p>
<p>下面是经验公式，实际上不符合物理模型，但是能用：</p>
<p><img src="@source/docs/Engineering/autopilot/electromechanical-systems/dynamic-system/ESC/thrust2pwm_curve/pic/pwm2thrust_curve.png" alt="pwm2thrust_curve"></p>
<p>我们需要一个参数a来对直线和平方曲线进行混合，并根据真实值进行曲线拟合，得到最适合的a，但一般来说，0.65适合大部分情况。</p>
<p>即令转速为<code v-pre>p</code>，推力为<code v-pre>t</code>，则有
$$
t=(1-a)\cdot p+a\cdot p^2
$$
现在我们想根据推力<code v-pre>t</code>来求转速<code v-pre>p</code>：
$$
\begin{aligned}
t&amp;=(1-a)\cdot p+a\cdot p^2\
&amp;=a(p^2+\frac{1-a}{a}p)\
&amp;=a(p^2+2bp+b^2)-ab^2\quad \text{assum}\ b=\frac{1-a}{2a}\
&amp;=a(p+b)^2-ab^2
\end{aligned}
$$
从而
$$
\begin{aligned}
&amp;t=a(p+b)^2-ab^2\
\Rightarrow&amp;a(p+b)^2=t+ab^2\
\Rightarrow&amp;p=\sqrt{\frac{t+ab^2}{a}}-b\
\Rightarrow&amp;p=\sqrt{\frac{t+a(\frac{1-a}{2a})^2}{a}}-\frac{1-a}{2a}\
\Rightarrow&amp;p=\sqrt{\frac{at+a^2(\frac{1-a}{2a})^2}{a^2}}-\frac{1-a}{2a}\
\Rightarrow&amp;p=\sqrt{\frac{at+\frac{(1-a)^2}{4}}{a^2}}-\frac{1-a}{2a}\
\Rightarrow&amp;p=\sqrt{\frac{4at+(1-a)^2}{4a^2}}-\frac{1-a}{2a}\
\Rightarrow&amp;p=\frac{\sqrt{4at+(1-a)^2}}{2a}+\frac{a-1}{2a}\
\Rightarrow&amp;p=\frac{a-1+\sqrt{(1-a)^2+4at}}{2a}\
\end{aligned}
$$
即</p>
<p><img src="@source/docs/Engineering/autopilot/electromechanical-systems/dynamic-system/ESC/thrust2pwm_curve/pic/thrust2pwm_curve.png" alt="thrust2pwm_curve"></p>
<p>上图的python代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> math
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token keyword">def</span> <span class="token function">apply_thrust_curve_and_volt_scaling</span><span class="token punctuation">(</span>thrust<span class="token punctuation">,</span> motors_thrust_curve_expo<span class="token operator">=</span><span class="token number">0.65</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    motors_lift_max <span class="token operator">=</span> <span class="token number">1.0</span>
    a <span class="token operator">=</span> <span class="token punctuation">(</span>motors_thrust_curve_expo <span class="token operator">-</span> <span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token operator">+</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1.0</span> <span class="token operator">-</span> motors_thrust_curve_expo<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">4.0</span> <span class="token operator">*</span> motors_thrust_curve_expo <span class="token operator">*</span> thrust<span class="token punctuation">)</span>
    b <span class="token operator">=</span> <span class="token number">2.0</span> <span class="token operator">*</span> motors_thrust_curve_expo
    throttle_ratio <span class="token operator">=</span> a <span class="token operator">/</span> b
    <span class="token keyword">return</span> throttle_ratio

thrust <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span>
throttle_ratio <span class="token operator">=</span> <span class="token punctuation">[</span>apply_thrust_curve_and_volt_scaling<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> thrust<span class="token punctuation">]</span>
sqrt_x <span class="token operator">=</span> <span class="token punctuation">[</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> thrust<span class="token punctuation">]</span>

plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>thrust<span class="token punctuation">,</span> sqrt_x<span class="token punctuation">,</span> <span class="token string">'--g'</span><span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">3.0</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'$y=\sqrt{x}$'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>thrust<span class="token punctuation">,</span> thrust<span class="token punctuation">,</span> <span class="token string">'--b'</span><span class="token punctuation">,</span> linewidth<span class="token operator">=</span><span class="token number">3.0</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">'$y=x$'</span><span class="token punctuation">)</span>
LINE_NUM <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>LINE_NUM <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    factor <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> LINE_NUM
    thrust <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span>
    throttle_ratio <span class="token operator">=</span> <span class="token punctuation">[</span>apply_thrust_curve_and_volt_scaling<span class="token punctuation">(</span>i<span class="token punctuation">,</span> factor<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> thrust<span class="token punctuation">]</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>thrust<span class="token punctuation">,</span> throttle_ratio<span class="token punctuation">,</span> <span class="token string">'--r'</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">"thrust"</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">"throttle_ratio"</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">"$pwm=\sqrt{thrust}$"</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># plt.legend(loc='upper left')</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>猜测：</p>
<p>电调电压和转速线性相关？回答：并不线性相关，而是转速和转速平方的加权和。</p>
<h1 id="台架实验" tabindex="-1"><a class="header-anchor" href="#台架实验" aria-hidden="true">#</a> 台架实验</h1>
<p>使用实验台架测试</p>
<p>电调ECS实时输出PWM值，其范围是$1000us\leqslant \text{ECS} \leqslant 2000us$。</p>
<p>电调ECS输出对应螺旋桨产生的推力是Thrust​，单位为kgf，1kgf表示一公斤质量产生的重力，其实就是9.8N。</p>
<p>电调的实时电压为Voltage，其单位是V。</p>
<p>就只测这三个值，测一组数据（最好能达到100组数据），如下图所示（只列出5个）：</p>
<table>
<thead>
<tr>
<th>index</th>
<th>PWM of ECS (us)</th>
<th>Thrust (kgf)</th>
<th>Voltage (V)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1000</td>
<td>0.196</td>
<td>21.72</td>
</tr>
<tr>
<td>2</td>
<td>1118</td>
<td>0.245</td>
<td>21.72</td>
</tr>
<tr>
<td>3</td>
<td>1512</td>
<td>0.915</td>
<td>21.68</td>
</tr>
<tr>
<td>4</td>
<td>1923</td>
<td>2.028</td>
<td>21.55</td>
</tr>
<tr>
<td>5</td>
<td>2000</td>
<td>2.254</td>
<td>21.52</td>
</tr>
</tbody>
</table>
<p>在计算之前，设定一些阈值</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>值</th>
<th></th>
<th>推出的参数</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>MOT_PWM_MIN</td>
<td>1000</td>
<td></td>
<td>Data   Rows</td>
<td>76</td>
</tr>
<tr>
<td>MOT_PWM_MAX</td>
<td>2000</td>
<td></td>
<td>PWM at MOT_SPIN_MIN</td>
<td>1150</td>
</tr>
<tr>
<td>MOT_THST_EXPO</td>
<td>0.5</td>
<td></td>
<td>PWM at MOT_SPIN_MAX</td>
<td>1950</td>
</tr>
<tr>
<td>MOT_SPIN_ARM</td>
<td>0.1</td>
<td></td>
<td>Thrust at MOT_SPIN_MIN</td>
<td>0.271</td>
</tr>
<tr>
<td>MOT_SPIN_MIN</td>
<td>0.15</td>
<td></td>
<td>Thrust at MOT_SPIN_MAX(应当为scale)</td>
<td>1.881383512</td>
</tr>
<tr>
<td>MOT_SPIN_MAX</td>
<td>0.95</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>其中，左侧值是给定值，右侧值是根据左侧给定值和实验数据计算得到：</p>
<p><code v-pre>PWM at MOT_SPIN_MIN</code>的值为
$$
\begin{aligned}
&amp;\text{PWM_at_MOT_SPIN_MIN}\
=&amp;\text{PWM_MIN} + (\text{PWM_MIN}-\text{PWM_MIN})\cdot \text{SPIN_MIN}\
=&amp;1000+(2000-1000)*0.15\
=&amp;1150
\end{aligned}
$$
<code v-pre>PWM at MOT_SPIN_MAX</code>的值为
$$
\begin{aligned}
&amp;\text{PWM_at_MOT_SPIN_MAX}\
=&amp;\text{PWM_MIN} + (\text{PWM_MIN}-\text{PWM_MIN})\cdot \text{SPIN_MAX}\
=&amp;1000+(2000-1000)*0.95\
=&amp;1950
\end{aligned}
$$
<code v-pre>Thrust at MOT SPIN_MIN</code>的值为</p>
<div class="language-e line-numbers-mode" data-ext="e"><pre v-pre class="language-e"><code>=INDEX(B12:B1000, MATCH(SMALL(A12:A1000, COUNTIF(A12:A1000, &quot;&lt;&quot;&amp;$G$5)+1), A12:A1000, 0), 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该值的含义是，当<code v-pre>SPIN_MIN=0.15</code>，即<code v-pre>PWM at MOT_SPIN_MIN=1150</code>时，对应的推力值为0.271kgf。</p>
<p><code v-pre>Thrust at MOT_SPIN_MAX</code>的值为1.881383512</p>
<p>其含义是。。。这个值应该是写错了。</p>
<p>1</p>
<p>（1）<code v-pre>Normalized Throttle</code>为归一化后的油门，归一化的同时，考虑了压降，其定义为
$$
\begin{aligned}
\text{throttle}<em>{\text{norm}}&amp;=\frac{V}{V</em>{\text{max}}}max(0, \frac{\text{PWM}-\text{PWM}<em>{\text{spin_min}}}{\text{PWM}</em>{\text{spin_max}}-\text{PWM}_{\text{spin_min}}})\
&amp;=\frac{21.68}{21.72}max(0, \frac{1555-1150}{1950-1150})\
&amp;=0.9982\times 0.5063\
&amp;=0.5053
\end{aligned}
$$</p>
<p>（2）<code v-pre>Normalized Thrust</code>为由归一化后的油门计算得到的推力，其定义为
$$
\begin{aligned}
\text{thrust}<em>{\text{norm}}&amp;=max((1-\text{EXPO})\cdot \text{throttle}</em>{\text{norm}} + \text{EXPO}\cdot \text{throttle}_{\text{norm}}^2,0)\
&amp;=(1-0.5)\times 0.5053 + 0.5\times 0.5053^2\
&amp;=0.25265+0.12766\
&amp;=0.3803
\end{aligned}
$$
<strong>注意，该变量不是测出来的推力值，而是根据油门值估算出的推力值</strong>。</p>
<p>（3）<code v-pre>Rescaled Thrust</code>为
$$
\begin{aligned}
\text{thrust}<em>{\text{rescaled}}&amp;=\frac{\text{thrust}</em>{\text{real-kgf}}-{\text{thrust}<em>{\text{spin_min}}}}{\text{thrust}</em>{\text{norm}}}\
&amp;=\frac{1.039-0.271}{0.3803}\
&amp;=2.0193
\end{aligned}
$$
这其实是，真实推力值和估算推力值的比值。</p>
<p>（4）<code v-pre>Corrected Thrust</code>为修正后的推力，其定义为
$$
\begin{aligned}
\text{thrust}<em>{\text{corrected}}&amp;=\text{thrust}</em>{\text{norm}}\cdot mean(\text{thrust}<em>{\text{rescaled}}) + \text{thrust}</em>{\text{spin_min}}\
&amp;=\text{thrust}<em>{\text{norm}}\cdot mean(\frac{\text{thrust}</em>{\text{real-kgf}}-{\text{thrust}<em>{\text{spin_min}}}}{\text{thrust}</em>{\text{norm}}}) + \text{thrust}_{\text{spin_min}}
\end{aligned}
$$
下面这个xlsx可以自动计算thrust_curve_expo值。</p>
<p><a href="https://docs.google.com/spreadsheets/d/1_75aZqiT_K1CdduhUe4-DjRgx3Alun4p8V2pt6vM5P8/edit#gid=0" target="_blank" rel="noopener noreferrer">原版ArduPilot Motor Thrust Fit.xlsx<ExternalLinkIcon/></a></p>
<p><a href="https://docs.google.com/spreadsheets/d/1_l8iOQ7tlthABDotDbcDRmZIHLIVbNOiLjNEUL10f0M/edit#gid=0" target="_blank" rel="noopener noreferrer">我改进的ArduPilot Motor Thrust Fit.xlsx<ExternalLinkIcon/></a></p>
<p>改进的点：</p>
<p>G7处改为了：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>=INDEX(B12:B1000, MATCH(SMALL(A12:A1000, COUNTIF(A12:A1000, "&lt;"&amp;$G$5)+1), A12:A1000, 0), 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://discuss.ardupilot.org/t/using-measured-mot-thst-expo-what-improvement-can-one-expect/26172" target="_blank" rel="noopener noreferrer">Using “measured” MOT_THST_EXPO: What improvement can one expect?<ExternalLinkIcon/></a></li>
</ul>
<p>这里作者讲了对thrust_curve_expo的理解。</p>
<blockquote>
<p>这是调整飞机的一个极其重要的参数。大多数 ESC 的工作原理是指令输入与用于驱动电机的平均电压大致成正比。这导致每个螺旋桨的强烈非线性推力响应。我使用大约 100 个螺旋桨的测量值得出默认的 MOT_THST_EXPO 值 0.65。基本原则是道具越大价值越高。因此，对于普通 ESC，30&quot; 螺旋桨将更接近 0.8，而 5&quot; 螺旋桨将更接近 0.5。同轴螺旋桨似乎也更低，所以如果我没有测量推力特性，我对大多数同轴设计使用 0.5。</p>
<p>但是，某些 ESC 似乎会对命令输入进行补偿以尝试使推力值线性化。根据 ESC 和螺旋桨的不同，MOT_THST_EXPO 可以在 -0.3 到 0.5 之间变化。</p>
<p>另一个改变 MOT_THST_EXPO 值的参数是 MOT_SPIN_MIN 值。因此，如果您增加 MOT_SPIN_MIN，则需要减少完美的 MOT_THST_EXPO。</p>
<p>因此，正确定义此参数的唯一方法是测量推力曲线并计算 MOT_THST_EXPO。然而，对于大多数 ESC 和螺旋桨组合，默认值会很好地工作。</p>
<p>那么如何判断这个值是否错误呢？
全油门时会出现振荡，或者在低油门时控制很差。
您发现如果不重新进行调整就无法更改飞机的起飞重量。</p>
<p>这两个都假设你在悬停时有一个近乎完美的曲调（我的意思是我对一个近乎完美的曲调的想法）。您还应该在 MOT_ 参数中设置电压补偿功能。</p>
<p>所以给你一些我调过的飞机的例子。我有悬停油门小于 15% 的飞机，在全油门下不会显示任何振荡迹象，在低油门设置下不会调整或妥协 PID。我的飞机起飞重量可以在 12.5 到 50 公斤之间变化，而无需调整 PID 值。</p>
<p>我希望这能回答你的问题。</p>
</blockquote>
<ul>
<li><a href="https://discuss.ardupilot.org/t/mot-thst-expo-and-need-for-thrust-stand/78258" target="_blank" rel="noopener noreferrer">MOT_THST_EXPO and need for thrust stand<ExternalLinkIcon/></a></li>
</ul>
<p>下面这个xlsx可以自动计算thrust_curve_expo值。</p>
<p><a href="https://docs.google.com/spreadsheets/d/1_75aZqiT_K1CdduhUe4-DjRgx3Alun4p8V2pt6vM5P8/edit#gid=0" target="_blank" rel="noopener noreferrer">ArduPilot Motor Thrust Fit.xlsx<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://www.bookstack.cn/read/px4-user-guide/zh-config_mc-pid_tuning_guide_multicopter.md#%E6%8E%A8%E5%8A%9B%E6%9B%B2%E7%BA%BF%20/%20%E5%A4%A7%E6%B2%B9%E9%97%A8%20PID%20%E8%A1%B0%E5%87%8F(Throttle%20PID%20Attenuation)%20%7B#thrust_curve%7D" target="_blank" rel="noopener noreferrer">PX4调参 MC PID Tuning Guide<ExternalLinkIcon/></a></li>
</ul>
<p>这一章：推力曲线 / 大油门 PID 衰减(Throttle PID Attenuation) {#thrust_curve}</p>
<blockquote>
<p>用 <strong>THR_MDL_FAC</strong>参数来调整<a href="https://www.bookstack.cn/read/px4-user-guide/zh-advanced_config-parameter_reference.md#THR_MDL_FAC" target="_blank" rel="noopener noreferrer">推力曲线<ExternalLinkIcon/></a>(推荐的方式)。 默认情况下的PWM - 推力 对应关系是线性的。 — 你可以把参数<code v-pre>THR_MDL_FAC</code>设为1来让这种关系变成二次的。 0~1之间的值表示线性和二次之间的一个插值。 这个参数一般在0.3~0.5之间，你可以每次增加0.1。 如果该参数太大，你可以看到低油门下的振荡现象。</p>
</blockquote>
<p>===</p>
<ul>
<li><a href="https://github.com/ArduPilot/ardupilot/issues/23575" target="_blank" rel="noopener noreferrer">Copter: Voltage compensation to throttle/pwm is used in many places in motor output function, is it used repeatedly? #23575<ExternalLinkIcon/></a></li>
</ul>
<p>这个Issue详细分析了曲线的来由和电机动力学模型。</p>
</div></template>


