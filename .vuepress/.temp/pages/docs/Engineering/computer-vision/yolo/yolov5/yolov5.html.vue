<template><div><h1 id="yolov5" tabindex="-1"><a class="header-anchor" href="#yolov5" aria-hidden="true">#</a> YOLOv5</h1>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>yolov5源码：<a href="https://github.com/ultralytics/yolov5" target="_blank" rel="noopener noreferrer">ultralytics/yolov5<ExternalLinkIcon/></a></p>
<p>yolov5主要是有四种模型，分别是yolov5s，yolov5m，yolov5l，yolov5x，就跟我们买衣服的码一样的标号哈哈，网络的宽度深度也是依次递增。</p>
<p><img src="@source/docs/Engineering/computer-vision/yolo/yolov5/pic/yolov5-models.png" alt="yolov5-models"></p>
<h1 id="主要代码介绍" tabindex="-1"><a class="header-anchor" href="#主要代码介绍" aria-hidden="true">#</a> 主要代码介绍</h1>
<h2 id="data文件夹" tabindex="-1"><a class="header-anchor" href="#data文件夹" aria-hidden="true">#</a> data文件夹</h2>
<p>data文件夹里面主要是放数据配置文件(.yaml)，即指明数据存放位置和检测类别，当然你也可以自定义一个放数据集的文件，我是自定义了一个mydata文件夹专门放数据集，不然都放data文件夹有点乱。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>│  Argoverse.yaml
│  coco.yaml
│  coco128.yaml
│  GlobalWheat2020.yaml
│  Objects365.yaml
│  SKU-110K.yaml
│  VisDrone.yaml
│  VOC.yaml
│  xView.yaml
│
├─hyps
│      hyp.Objects365.yaml
│      hyp.scratch-high.yaml
│      hyp.scratch-low.yaml
│      hyp.scratch-med.yaml
│      hyp.VOC.yaml
│
├─images
│      bus.jpg
│      zidane.jpg
│
└─scripts
        download_weights.sh
        get_coco.sh
        get_coco128.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="model文件夹" tabindex="-1"><a class="header-anchor" href="#model文件夹" aria-hidden="true">#</a> model文件夹</h2>
<p>model文件夹里主要放的是四种网络(s, m, l, x)的配置文件(.yaml)；</p>
<p>common.py是每个模块的代码，如果要改进网络结构，添加新的模块可以模仿里面的代码写；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>│  common.py
│  experimental.py
│  tf.py
│  yolo.py
│  yolov5l.yaml
│  yolov5m.yaml
│  yolov5n.yaml
│  yolov5s.yaml
│  yolov5x.yaml
│  __init__.py
│
└─hub
        anchors.yaml
        yolov3-spp.yaml
        yolov3-tiny.yaml
        yolov3.yaml
        yolov5-bifpn.yaml
        yolov5-fpn.yaml
        yolov5-p2.yaml
        yolov5-p34.yaml
        yolov5-p6.yaml
        yolov5-p7.yaml
        yolov5-panet.yaml
        yolov5l6.yaml
        yolov5m6.yaml
        yolov5n6.yaml
        yolov5s-ghost.yaml
        yolov5s-transformer.yaml
        yolov5s6.yaml
        yolov5x6.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yolo.py是用于查看模型的结构和参数数量的，改一下299行的cfg，如改成下面的就可以查看yolov5x的模型结构和参数数量了。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--cfg'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">'yolov5x.yaml'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'model.yaml'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要py文件" tabindex="-1"><a class="header-anchor" href="#主要py文件" aria-hidden="true">#</a> 主要py文件</h2>
<p>train.py用于训练模型</p>
<p>val.py用于测试结果，输出precision, recall, mAP等信息</p>
<p>detect.py用于对图片进行检测</p>
<h2 id="新建weights文件夹" tabindex="-1"><a class="header-anchor" href="#新建weights文件夹" aria-hidden="true">#</a> 新建weights文件夹</h2>
<p>需要新建weights文件夹，放预训练的权重文件。</p>
<p>下载地址：https://github.com/ultralytics/yolov5/releases</p>
<p><img src="@source/docs/Engineering/computer-vision/yolo/yolov5/pic/model-download.png" alt="model-download"></p>
<h1 id="训练" tabindex="-1"><a class="header-anchor" href="#训练" aria-hidden="true">#</a> 训练</h1>
<h2 id="创建yaml" tabindex="-1"><a class="header-anchor" href="#创建yaml" aria-hidden="true">#</a> 创建yaml</h2>
<p>在<code v-pre>data</code>文件夹中，</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>│  Argoverse.yaml
│  coco.yaml
│  coco128.yaml
│  GlobalWheat2020.yaml
│  Objects365.yaml
│  SKU-110K.yaml
│  VisDrone.yaml
│  VOC.yaml
│  xView.yaml
│
├─hyps
├─images
└─scripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开<code v-pre>coco128.yaml</code>文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Train/val/test sets as 1) dir: path/to/imgs, 2) file: path/to/imgs.txt, or 3) list: [path/to/imgs1, path/to/imgs2, ..]</span>
path: <span class="token punctuation">..</span>/datasets/coco128  <span class="token comment"># dataset root dir</span>
train: images/train2017  <span class="token comment"># train images (relative to 'path') 128 images</span>
val: images/train2017  <span class="token comment"># val images (relative to 'path') 128 images</span>
test:  <span class="token comment"># test images (optional)</span>

<span class="token comment"># Classes</span>
nc: <span class="token number">80</span>  <span class="token comment"># number of classes</span>
names: <span class="token punctuation">[</span><span class="token string">'person'</span>, <span class="token punctuation">..</span>., <span class="token string">'toothbrush'</span><span class="token punctuation">]</span>  <span class="token comment"># class names</span>


<span class="token comment"># Download script/URL (optional)</span>
download: https://ultralytics.com/assets/coco128.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制该文件，重命名，修改为自己数据集的种类。注意，无需指定打标文件的地址，训练代码会自动根据<code v-pre>train: images/train2017</code>的地址，替换最后一个images得到打标文件的地址<code v-pre>train: labels/train2017</code>。</p>
<h2 id="数据集准备" tabindex="-1"><a class="header-anchor" href="#数据集准备" aria-hidden="true">#</a> 数据集准备</h2>
<p>以<a href="https://www.kaggle.com/ultralytics/coco128" target="_blank" rel="noopener noreferrer">coco128<ExternalLinkIcon/></a>数据集为例，如下如所示，在和yolov5同一个目录下，新建<code v-pre>datasets</code>文件夹，里边存放数据。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>├─datasets
│  ├─coco128
│  │  ├─images
│  │  │  └─train2017
│  │  └─labels
│  │      └─train2017
└─yolov5
    ├─data
    ├─models
    └─utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>coco128/images/train2017</code>文件夹中存放图片，<code v-pre>coco128/labels/train2017</code>文件夹中存放图片对应的打标txt，每个图片对应一个打标txt文件。</p>
<p>打标的txt的格式为<code v-pre>class x_center y_center width height</code>，即<code v-pre>图片类别 框的x中心位置 框的y中心位置 框的x长度 框的y长度</code>。注意，都是归一化的。</p>
<p>如下图所示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>45 0.479492 0.688771 0.955609 0.5955
45 0.736516 0.247188 0.498875 0.476417
50 0.637063 0.732938 0.494125 0.510583
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Engineering/computer-vision/yolo/yolov5/pic/label.jpg" alt="label"></p>
<h2 id="修改train-py" tabindex="-1"><a class="header-anchor" href="#修改train-py" aria-hidden="true">#</a> 修改train.py</h2>
<p>将train.py对应的地方修改为：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">parse_opt</span><span class="token punctuation">(</span>known<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 修改成模型对应的权重文件</span>
    <span class="token comment"># parser.add_argument('--weights', type=str, default=ROOT / 'yolov5s.pt', help='initial weights path')</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--weights'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'weights/yolov5s.pt'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'initial weights path'</span><span class="token punctuation">)</span>
    <span class="token comment"># 修改成要训练的模型的配置文件</span>
    <span class="token comment"># parser.add_argument('--cfg', type=str, default='', help='model.yaml path')</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--cfg'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'models/yolov5s.yaml'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'model.yaml path'</span><span class="token punctuation">)</span>
    <span class="token comment"># parser.add_argument('--data', type=str, default=ROOT / 'data/coco128.yaml', help='dataset.yaml path')</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--data'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'data/hm.yaml'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'dataset.yaml path'</span><span class="token punctuation">)</span>
    <span class="token comment"># 超参数设置，不需要修改</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--hyp'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'data/hyps/hyp.scratch-low.yaml'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'hyperparameters path'</span><span class="token punctuation">)</span>
    <span class="token comment"># 训练多少代</span>
    <span class="token comment"># parser.add_argument('--epochs', type=int, default=300)</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--epochs'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token comment"># 训练中断后重新开始，是否接上次训练结果继续</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--resume'</span><span class="token punctuation">,</span> nargs<span class="token operator">=</span><span class="token string">'?'</span><span class="token punctuation">,</span> const<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'resume most recent training'</span><span class="token punctuation">)</span>
    <span class="token comment"># 自动计算锚框，设置成False，则不会自动计算</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--noautoanchor'</span><span class="token punctuation">,</span> action<span class="token operator">=</span><span class="token string">'store_true'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'disable AutoAnchor'</span><span class="token punctuation">)</span>
    <span class="token comment"># 是否用GPU</span>
    <span class="token comment"># parser.add_argument('--device', default='', help='cuda device, i.e. 0 or 0,1,2,3 or cpu')</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--device'</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'cuda device, i.e. 0 or 0,1,2,3 or cpu'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是修改 --weights, --cfg, --data, --epochs 和 --batch-size。修改完就可以train啦。</p>
<p>注意:</p>
<blockquote>
<p>epochs 迭代次数,根据自己需求设置,默认300代</p>
<p>batch-size 一般要修改小一点,默认是32,根据自己电脑配置设置</p>
<p>workers 一般也要设置小一点,他需要很大的虚拟内存,实在不行设置为0.</p>
</blockquote>
<p>注意，</p>
<blockquote>
<p>还要添加一个字体文件，<a href="https://ultralytics.com/assets/Arial.ttf" target="_blank" rel="noopener noreferrer">Arial.ttf<ExternalLinkIcon/></a>，下载下来放到yolov5的根目录下</p>
<p>因为这里有要求：general.py，可以注释掉</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">check_font</span><span class="token punctuation">(</span>font<span class="token operator">=</span>FONT<span class="token punctuation">,</span> progress<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Download font to CONFIG_DIR if necessary</span>
    font <span class="token operator">=</span> Path<span class="token punctuation">(</span>font<span class="token punctuation">)</span>
    <span class="token builtin">file</span> <span class="token operator">=</span> CONFIG_DIR <span class="token operator">/</span> font<span class="token punctuation">.</span>name
    <span class="token keyword">if</span> <span class="token keyword">not</span> font<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token keyword">not</span> <span class="token builtin">file</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        url <span class="token operator">=</span> <span class="token string">"https://ultralytics.com/assets/"</span> <span class="token operator">+</span> font<span class="token punctuation">.</span>name
        LOGGER<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Downloading </span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">file</span><span class="token punctuation">}</span></span><span class="token string">...'</span></span><span class="token punctuation">)</span>
        torch<span class="token punctuation">.</span>hub<span class="token punctuation">.</span>download_url_to_file<span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">,</span> progress<span class="token operator">=</span>progress<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="https://blog.csdn.net/weixin_39048703/article/details/124405145" target="_blank" rel="noopener noreferrer">yolov5-6.0 出现Arial.ttf无法下载问题解决办法<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="训练-1" tabindex="-1"><a class="header-anchor" href="#训练-1" aria-hidden="true">#</a> 训练</h2>
<p>运行train，等待模型跑完，可以中断，他会生成一个run/train文件夹，里面保存有训练好的权重，best.pt 和 last.pt，按我的经验，best.pt的测试效果更好一些，可以都试试。</p>
<p>若要继续跑则，将这里的default改为True：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 断点续训,是否在上一次训练的基础上继续训练，若要继续跑则，将这里的default改为True</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--resume'</span><span class="token punctuation">,</span> nargs<span class="token operator">=</span><span class="token string">'?'</span><span class="token punctuation">,</span> const<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'resume most recent training'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行时，可以通过终端查看，点击链接，进入tensorboard页面查看曲线</p>
<p><img src="@source/docs/Engineering/computer-vision/yolo/yolov5/pic/tensorboard.png" alt="tensorboard"></p>
<p>训练结束后，你就可以进行预测了，当然，未结束，中断后也可以采用现有模型进行预测</p>
<h1 id="推理-检测detect" tabindex="-1"><a class="header-anchor" href="#推理-检测detect" aria-hidden="true">#</a> 推理(检测detect)</h1>
<p>对<code v-pre>detect.py</code>进行如下修改：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">parse_opt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 指定网络权重的路径</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--weights'</span><span class="token punctuation">,</span> nargs<span class="token operator">=</span><span class="token string">'+'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'runs/train/exp2/weights/best.pt'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'model path(s)'</span><span class="token punctuation">)</span>
    <span class="token comment"># 指定网络输入的路径,默认文件夹,可以是具体文件或扩展名 :   path/   path/*.jpg</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--source'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">r'D:\1work\code\PycharmProjects\model_deep_learning\yolov5_pytorch\datasets\coco128\images\train2017'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'file/dir/URL/glob, 0 for webcam'</span><span class="token punctuation">)</span>
    <span class="token comment"># 配置文件的一个路径,配置文件包含下载路径和一些数据集基本信息,若不指定数据集,则自动下载coco128数据集</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--data'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> default<span class="token operator">=</span>ROOT <span class="token operator">/</span> <span class="token string">'data/coco128.yaml'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'(optional) dataset.yaml path'</span><span class="token punctuation">)</span>
    <span class="token comment"># 置信度的阈值。这里之所以把置信度调到0，是因为想看看检测情况再确定一个合适的值</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--conf-thres'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'confidence threshold'</span><span class="token punctuation">)</span>
    <span class="token comment"># 最大检测数量。注意：由于本项目只检测一个类别，且图像中该类别只有一个，故设置为1</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--max-det'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'maximum detections per image'</span><span class="token punctuation">)</span>
    <span class="token comment"># 指定GPU数量,不指定则自动检测</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--device'</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'cuda device, i.e. 0 or 0,1,2,3 or cpu'</span><span class="token punctuation">)</span>
    <span class="token comment"># 是否把检测结果保存成一个txt格式</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--save-txt'</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> action<span class="token operator">=</span><span class="token string">'store_true'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'save results to *.txt'</span><span class="token punctuation">)</span>
    <span class="token comment"># 是否以txt格式保存目标的置信度 必须和--save-txt一起使用,单独指定无效</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--save-conf'</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> action<span class="token operator">=</span><span class="token string">'store_true'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'save confidences in --save-txt labels'</span><span class="token punctuation">)</span>
    <span class="token comment"># 是否把模型检测的物体裁剪下来</span>
    parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--save-crop'</span><span class="token punctuation">,</span> action<span class="token operator">=</span><span class="token string">'store_true'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'save cropped prediction boxes'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着运行即可，他将在<code v-pre>runs</code>文件夹下生成<code v-pre>detect</code>文件夹，<code v-pre>runs\detect\exp</code>文件下会有显示预测框的图片，<code v-pre>runs\detect\labels</code>文件夹下会有每个图片对应的预测结果txt，内容和训练标注txt的内容几乎一样，只是可以多一个预测置信度（<code v-pre>--save-conf=True</code>）。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://www.ngui.cc/article/show-301276.html" target="_blank" rel="noopener noreferrer">yolov5-pytorch训练自己的数据集-超详细<ExternalLinkIcon/></a></li>
</ul>
<p>本文参考此博客。</p>
<ul>
<li><a href="https://baijiahao.baidu.com/s?id=1731898927430277672&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">YOLOv5（v6.1）解析（三）<ExternalLinkIcon/></a></li>
</ul>
<p>解析各种参数的含义。</p>
<ul>
<li><a href="https://blog.csdn.net/weixin_60520739/article/details/125884505" target="_blank" rel="noopener noreferrer">YOLOv5-v6.1训练自己的数据速成---pytorch（GPU实现）<ExternalLinkIcon/></a></li>
</ul>
<p>介绍了训练流程，以及各种参数的含义。</p>
<p>===</p>
<p><a href="https://zhuanlan.zhihu.com/p/503971609" target="_blank" rel="noopener noreferrer">YOLO系列梳理（三）YOLOv5<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/read/cv17162688/" target="_blank" rel="noopener noreferrer">Yolov5总结文档(理论、代码、实验结果)<ExternalLinkIcon/></a></p>
<p>介绍了yolo模型。</p>
</div></template>


