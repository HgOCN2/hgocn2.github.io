<template><div><h1 id="yolo-mark打标工具" tabindex="-1"><a class="header-anchor" href="#yolo-mark打标工具" aria-hidden="true">#</a> yolo_mark打标工具</h1>
<ul>
<li><RouterLink to="/docs/engineering/computer-vision/image-mark-tool/image-mark-tool.html">返回上层目录</RouterLink></li>
<li><a href="#yolo_mark%E4%BB%8B%E7%BB%8D">yolo_mark介绍</a></li>
<li><a href="#%E6%BA%90%E7%A0%81%E7%BC%96%E8%AF%91">源码编译</a></li>
<li><a href="#%E6%89%93%E6%A0%87%E9%85%8D%E7%BD%AE%E4%B8%8E%E6%89%93%E6%A0%87%E6%96%B9%E6%B3%95">打标配置与打标方法</a></li>
<li><a href="#%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6%E5%88%86%E5%89%B2">视频文件分割</a></li>
<li><a href="#%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98">遇到的问题</a>
<ul>
<li><a href="#%E6%89%BE%E4%B8%8D%E5%88%B0opencv_worldxxx.dll">找不到opencv_worldxxx.dll</a></li>
</ul>
</li>
</ul>
<h1 id="yolo-mark介绍" tabindex="-1"><a class="header-anchor" href="#yolo-mark介绍" aria-hidden="true">#</a> yolo_mark介绍</h1>
<p>yolo_mark适用于图像检测任务的数据集制作，它是yolo2的团队开源的一个图像标注工具，为了方便其他人使用yolo2训练自己的任务模型。在linux和win下都可运行，依赖opencv库。</p>
<p>它来自于下面的项目：<a href="https://github.com/AlexeyAB/Yolo_mark" target="_blank" rel="noopener noreferrer">https://github.com/AlexeyAB/Yolo_mark<ExternalLinkIcon/></a>。</p>
<p><img src="@source/docs/engineering/computer-vision/image-mark-tool/yolo-mark/pic/yolo_mark.jpg" alt="yolo_mark"></p>
<h1 id="源码编译" tabindex="-1"><a class="header-anchor" href="#源码编译" aria-hidden="true">#</a> 源码编译</h1>
<p>在windows或linux下都可编译，这里以windows为例。</p>
<p>下载源码<a href="https://github.com/AlexeyAB/Yolo_mark" target="_blank" rel="noopener noreferrer">https://github.com/AlexeyAB/Yolo_mark<ExternalLinkIcon/></a>，具体编译方法参考里面的ReadMe。下面仅简单说明下。</p>
<p>在<code v-pre>Visual Studio</code>IDE中，打开<code v-pre>yolo_mark.sln</code>，设置为<strong>x64 &amp; Release</strong>进行编译。但前提是要先下载好<a href="https://sourceforge.net/projects/opencvlibrary/" target="_blank" rel="noopener noreferrer">OpenCV<ExternalLinkIcon/></a>并配置<code v-pre>Visual Studio</code>。</p>
<ul>
<li>(right click on project) -&gt; properties -&gt; C/C++ -&gt; General -&gt; Additional Include Directories: <code v-pre>C:\opencv_3.0\opencv\build\include;</code></li>
<li>(right click on project) -&gt; properties -&gt; Linker -&gt; General -&gt; Additional Library Directories: <code v-pre>C:\opencv_3.0\opencv\build\x64\vc14\lib;</code></li>
</ul>
<h1 id="打标配置与打标方法" tabindex="-1"><a class="header-anchor" href="#打标配置与打标方法" aria-hidden="true">#</a> 打标配置与打标方法</h1>
<p>（1）删除<code v-pre>x64/Release/data/img</code>里的原有图片</p>
<p>（2）将你自己的图片放入<code v-pre>x64/Release/data/img</code></p>
<p>（3）将类别名填入<code v-pre>x64/Release/data/obj.names</code>，每行一个，要和下一步的classes数目一致。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>air
bird
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）更改 <code v-pre>x64/Release/data/obj.data</code>文件里的classes数目，实际有多少个类别就改为多少，要和上一步的<code v-pre>x64/Release/data/obj.names</code>里写的类别数目一样。此文件包含了需要标记的物体有几类，训练集和验证集对应的txt文件路径，物体名字，backup是训练生成的权重文件路径。标记只需要修改第一行后面的数字，后面的数字表示标记的物体有几类。 例子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>classes= 2
train  = data/train.txt
valid  = data/train.txt
names = data/obj.names
backup = backup/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）双击<code v-pre>x64\Release\yolo_mark.cmd</code>运行打标工具开始打标。</p>
<p><code v-pre>yolo_mark.cmd</code>内部语句为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yolo_mark.exe data/img data/train.txt data/obj.names
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标注完成后，会在<code v-pre>x64\Release\data\img</code>文件夹下面生成与图片相对应的同名txt文件，</p>
<p><img src="@source/docs/engineering/computer-vision/image-mark-tool/yolo-mark/pic/img_data_txt.png" alt="img_data_txt"></p>
<p>同名txt文件里面为训练需要标注的数据。例子：</p>
<p><code v-pre>0 0.425781 0.645833 0.235938 0.436111</code></p>
<p>第一个参数是对应的类，后面的四个参数为标记物体归一化后中心位置和尺寸。</p>
<p>打标的YOLO标签的格式为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;object-class> &lt;x> &lt;y> &lt;width> &lt;height>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>x, y</code>是目标的中心坐标，<code v-pre>width, height</code>是目标的宽和高。这些坐标是通过归一化的，其中<code v-pre>x, width</code>是使用原图的<code v-pre>width</code>进行归一化；而<code v-pre>y, height</code>是使用原图的<code v-pre>height</code>进行归一化。</p>
<p>同时，会在生成<code v-pre>x64\Release\data\train.txt</code>文件，里面包含了已经完成标记的图片的路径，比如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>data/img/test_00000000.jpg
data/img/test_00000002.jpg
data/img/test_00000004.jpg
data/img/test_00000006.jpg
data/img/test_00000008.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）具体打标方法</p>
<p><img src="@source/docs/engineering/computer-vision/image-mark-tool/yolo-mark/pic/yolo_mark.jpg" alt="yolo_mark"></p>
<p>主界面顶部为图片预览，绿色的小勾表示已有标记或者标记完成。</p>
<p>下面的Object id是你标记对应的类，可以通过键盘上面的快捷键切换。例如你标记的物体名字是：<code v-pre>person air bird</code>, 最前面 <code v-pre>person</code> 的ID是<code v-pre>0</code>，要切换到<code v-pre>bird</code>，按下数字键<code v-pre>2</code>即可。</p>
<p>在中间部分的大图上，按下鼠标左键拖动，松开左键后会生成上图所示的矩形框，包含类对应的ID，自定义的名字。</p>
<p>快捷键<code v-pre>C</code>会清除当前图片上面的所有标记，<code v-pre>空格键</code>保存标记信息并切换到下一张。用<code v-pre>Esc</code>或者<code v-pre>Ctrl + c</code>退出。</p>
<h1 id="视频文件分割" tabindex="-1"><a class="header-anchor" href="#视频文件分割" aria-hidden="true">#</a> 视频文件分割</h1>
<p>对应视频文件，需要先每隔固定帧数截取图片，使用如下命令，即可将截图存放进<code v-pre>x64/Release/data/img</code>文件夹中。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>yolo_mark.exe data/img cap_video test.mp4 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意要将里面的视频文件名字<code v-pre>test.mp4</code>改为你自己的文件名，视频文件放在<code v-pre>yolo_mark.exe</code>同目录下。命令里的<code v-pre>10</code>是指每隔10帧截取一次图片。</p>
<h1 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h1>
<h2 id="找不到opencv-worldxxx-dll" tabindex="-1"><a class="header-anchor" href="#找不到opencv-worldxxx-dll" aria-hidden="true">#</a> 找不到opencv_worldxxx.dll</h2>
<p>运行打标程序时遇到问题：</p>
<blockquote>
<p>由于找不到opencv_world453.dll，无法继续执行代码。重新安装程序可能会解决此问题。</p>
</blockquote>
<p>这是因为没有安装opencv。</p>
<p>有两种解决办法，<strong>如果你觉得你以后还可能要用opencv，那就建议用第二种方法</strong>。</p>
<p><strong>第一种方法</strong>：把缺少的dll文件放在<code v-pre>system32</code>里</p>
<p>参考：<a href="https://blog.csdn.net/qq_25038325/article/details/100922393" target="_blank" rel="noopener noreferrer">OPENCV配置：找不到opencv_worldXXXd.dll的问题<ExternalLinkIcon/></a>。</p>
<p>dll文件需要先<a href="https://sourceforge.net/projects/opencvlibrary/files/" target="_blank" rel="noopener noreferrer">下载opencv<ExternalLinkIcon/></a>，再从路径<code v-pre>C:\Library\opencv\build\x64\vc15\bin</code>里找到<code v-pre>opencv_worldxxx.dll</code>复制到C盘的<code v-pre>system32</code>里。</p>
<p><strong>第二种方法</strong>：下载完整版的opencv</p>
<p>下载地址：<a href="https://sourceforge.net/projects/opencvlibrary/files/" target="_blank" rel="noopener noreferrer">下载opencv<ExternalLinkIcon/></a>。安装的具体方法参考（只需要看需要的那部分即可）：<a href="https://blog.csdn.net/maizousidemao/article/details/81474834" target="_blank" rel="noopener noreferrer">windows下OpenCV的安装配置部署详细教程<ExternalLinkIcon/></a>，并将文件解压在<code v-pre>C:\Library\opencv</code>中，然后在系统路径path上添加<code v-pre>C:\Library\opencv\build\x64\vc15\bin</code>。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://sourceforge.net/projects/opencvlibrary/files/" target="_blank" rel="noopener noreferrer">open_cv下载地址<ExternalLinkIcon/></a></li>
</ul>
<p>这是open_cv下载地址。</p>
</div></template>


