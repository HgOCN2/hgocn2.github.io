<template><div><h1 id="tensorflow-serving" tabindex="-1"><a class="header-anchor" href="#tensorflow-serving" aria-hidden="true">#</a> TensorFlow Serving</h1>
<ul>
<li><RouterLink to="/docs/machine-learning/machine-learning-framework/tensorflow/tensorflow.html">返回上层目录</RouterLink></li>
<li><a href="#TFserving%E4%BB%8B%E7%BB%8D">TFserving介绍</a></li>
<li><a href="#Docker%E4%B8%8ETFserving">Docker与TFserving</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85Docker">安装Docker</a>
<ul>
<li><a href="#win10%E5%AE%89%E8%A3%85">win10安装</a></li>
<li><a href="#linux%E5%AE%89%E8%A3%85">linux安装</a></li>
</ul>
</li>
<li><a href="#%E6%8B%89%E5%8F%96TF.Serving%E9%95%9C%E5%83%8F">拉取TF.Serving镜像</a></li>
<li><a href="#%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8">运行容器</a></li>
<li><a href="#%E9%80%9A%E8%BF%87API%E6%9F%A5%E7%9C%8B%E6%A8%A1%E5%9E%8B%E7%8A%B6%E6%80%81%EF%BC%8C%E5%85%83%E6%95%B0%E6%8D%AE">通过API查看模型状态，元数据</a>
<ul>
<li><a href="#%E9%80%9A%E8%BF%87model-status-API%E6%9F%A5%E7%9C%8B%E6%A8%A1%E5%9E%8B%E7%8A%B6%E6%80%81">通过model-status-API查看模型状态</a></li>
<li><a href="#%E9%80%9A%E8%BF%87model-metadata-API%E6%9F%A5%E7%9C%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%85%83%E6%95%B0%E6%8D%AE">通过model-metadata-API查看模型的元数据</a></li>
</ul>
</li>
<li><a href="#gRPC%E4%B8%8ERESTful%E8%AF%B7%E6%B1%82%E7%9A%84%E5%8C%BA%E5%88%AB">gRPC与RESTful请求的区别</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8RESTful-API%E8%AF%B7%E6%B1%82%E9%A2%84%E6%B5%8B">使用RESTful-API请求预测</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8gRPC%E8%AF%B7%E6%B1%82%E9%A2%84%E6%B5%8B">使用gRPC请求预测</a>
<ul>
<li><a href="#%E8%BE%93%E5%85%A5%E6%95%B0%E6%8D%AE%E4%B8%BA%E6%96%87%E6%9C%AC%E6%88%96%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B">输入数据为文本或数字类型</a></li>
<li><a href="#%E8%BE%93%E5%85%A5%E6%95%B0%E6%8D%AE%E4%B8%BA%E5%9B%BE%E5%83%8F%E7%B1%BB%E5%9E%8B">输入数据为图像类型</a></li>
</ul>
</li>
<li><a href="#ckpt%E6%A0%BC%E5%BC%8F%E8%BD%AC%E4%B8%BApd%E6%A0%BC%E5%BC%8F%E7%94%A8%E4%BA%8ETFserving">ckpt格式转为pd格式用于TFserving</a></li>
</ul>
</li>
<li><a href="#Flask%E6%9C%8D%E5%8A%A1">Flask服务</a>
<ul>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81Flask%E6%9C%8D%E5%8A%A1%E5%99%A8">为什么需要Flask服务器</a></li>
<li><a href="#Flask%E7%9A%84HelloWorld%E4%BB%A3%E7%A0%81">Flask的HelloWorld代码</a></li>
<li><a href="#Flask%E7%9A%84%E7%BC%BA%E9%99%B7">Flask的缺陷</a></li>
<li><a href="#gevent+Flask%E5%90%8C%E6%AD%A5%E5%8F%98%E5%BC%82%E6%AD%A5">gevent+Flask同步变异步</a></li>
</ul>
</li>
<li><a href="#Nginx+Gunicorn+Flask%E9%83%A8%E7%BD%B2">Nginx+Gunicorn+Flask部署</a>
<ul>
<li><a href="#%E7%90%86%E8%A7%A3Nginx+Gunicorn+Flask">理解Nginx+Gunicorn+Flask</a>
<ul>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8Nginx+Gunicorn+Flask+supervisor%E6%96%B9%E5%BC%8F%E9%83%A8%E7%BD%B2">为什么要用Nginx+Gunicorn+Flask+supervisor方式部署</a></li>
<li><a href="#Nginx%E3%80%81gunicore%E5%92%8CFlask%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB">Nginx、gunicore和Flask之间的关系</a></li>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88Flask%E5%92%8CNginx%E4%B9%8B%E9%97%B4%E8%A6%81%E7%94%A8uwsgi%E6%9C%8D%E5%8A%A1%E5%99%A8">为什么Flask和Nginx之间要用uwsgi服务器</a></li>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81Nginx">为什么需要Nginx</a></li>
</ul>
</li>
<li><a href="#%E9%83%A8%E7%BD%B2%E6%B5%81%E7%A8%8B">部署流程</a></li>
<li><a href="#Flask">Flask</a></li>
<li><a href="#Gunicorn">Gunicorn</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AFGunicorn">什么是Gunicorn</a></li>
<li><a href="#Gunicorn%E9%85%8D%E7%BD%AE">Gunicorn配置</a></li>
<li><a href="#%E8%BF%90%E8%A1%8CGunicorn">运行Gunicorn</a></li>
</ul>
</li>
<li><a href="#Nginx">Nginx</a>
<ul>
<li><a href="#Nginx%E4%BB%8B%E7%BB%8D">Nginx介绍</a></li>
<li><a href="#%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE">修改配置</a></li>
<li><a href="#Nginx%E7%9A%84%E5%BA%94%E7%94%A8">Nginx的应用</a>
<ul>
<li><a href="#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86">反向代理</a></li>
<li><a href="#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1">负载均衡</a></li>
</ul>
</li>
<li><a href="#%E5%AE%89%E8%A3%85%E3%80%81%E9%85%8D%E7%BD%AE%E5%B9%B6%E8%BF%90%E8%A1%8CNginx">安装、配置并运行Nginx</a></li>
</ul>
</li>
<li><a href="#supervisord">supervisord</a>
<ul>
<li><a href="#%E6%96%B0%E5%A2%9ENginx%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">新增Nginx进程配置文件</a></li>
<li><a href="#supervisorctl%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4">supervisorctl操作命令</a></li>
<li><a href="#%E6%96%B0%E5%A2%9EGunicorn%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">新增Gunicorn进程配置文件</a></li>
</ul>
</li>
<li><a href="#%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%88%90%E6%80%BB%E7%BB%93">简单例子部署完成总结</a></li>
</ul>
</li>
<li><a href="#%E5%9F%BA%E4%BA%8Esupervisor+Nginx+Gunicorn+Flask+Docker%E9%83%A8%E7%BD%B2TFserving%E6%9C%8D%E5%8A%A1">基于supervisor+Nginx+Gunicorn+Flask+Docker部署TFserving服务</a>
<ul>
<li><a href="#%E9%83%A8%E7%BD%B2%E6%A8%A1%E5%9E%8B">部署模型</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2Docker">部署Docker</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2Flask">部署Flask</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2Gunicorn">部署Gunicorn</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2Nginx">部署Nginx</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2supervisor">部署supervisor</a>
<ul>
<li><a href="#%E6%96%B0%E5%A2%9EDocker%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">新增Docker进程配置文件</a></li>
<li><a href="#%E6%96%B0%E5%A2%9EGunicorn%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">新增Gunicorn进程配置文件</a></li>
<li><a href="#%E6%96%B0%E5%A2%9ENginx%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">新增Nginx进程配置文件</a></li>
</ul>
</li>
<li><a href="#%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%88%90%E6%80%BB%E7%BB%93">部署完成总结</a></li>
<li><a href="#%E5%9F%BA%E4%BA%8Epython%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%B7%E6%B1%82">基于python的客户端请求</a></li>
<li><a href="#%E7%94%A8ab%E5%8E%8B%E6%B5%8B">用ab压测</a>
<ul>
<li><a href="#ab%E5%8E%9F%E7%90%86">ab原理</a></li>
<li><a href="#%E6%9C%8D%E5%8A%A1%E5%99%A8qps%E9%A2%84%E4%BC%B0">服务器qps预估</a></li>
<li><a href="#%E5%AF%B9%E6%A8%A1%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95">对模型进行测试</a></li>
</ul>
</li>
<li><a href="#%E5%A4%9A%E6%A8%A1%E5%9E%8B%E5%9C%A8%E7%BA%BF%E9%83%A8%E7%BD%B2">多模型在线部署</a>
<ul>
<li><a href="#%E5%A4%9A%E6%A8%A1%E5%9E%8B%E9%83%A8%E7%BD%B2">多模型部署</a></li>
<li><a href="#%E6%A8%A1%E5%9E%8B%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6">模型版本控制</a>
<ul>
<li><a href="#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE">服务端配置</a></li>
<li><a href="#%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B0%83%E7%94%A8">客户端调用</a></li>
</ul>
</li>
<li><a href="#%E7%83%AD%E6%9B%B4%E6%96%B0">热更新</a>
<ul>
<li><a href="#%E5%8F%91%E9%80%81HandleReloadConfigRequest-rpc%E8%B0%83%E7%94%A8">发送HandleReloadConfigRequest-rpc调用</a></li>
<li><a href="#%E6%8C%87%E5%AE%9A%E2%80%93-model_config_file_poll_wait_seconds%E9%80%89%E9%A1%B9">指定–-model_config_file_poll_wait_seconds选项</a></li>
</ul>
</li>
<li><a href="#%E5%85%B6%E4%BB%96%E6%9C%89%E7%94%A8%E5%8F%82%E6%95%B0">其他有用参数</a></li>
<li><a href="#%E5%A4%9A%E6%A8%A1%E5%9E%8B%E5%9C%A8%E7%BA%BF%E9%83%A8%E7%BD%B2%E5%AE%9E%E4%BE%8B">多模型在线部署实例</a>
<ul>
<li><a href="#%E5%A4%9A%E6%A8%A1%E5%9E%8B%E9%85%8D%E7%BD%AE%E4%B8%8Edocker%E9%83%A8%E7%BD%B2">多模型配置与docker部署</a></li>
<li><a href="#Flask%E9%83%A8%E7%BD%B2">Flask部署</a></li>
<li><a href="#supervisor%E9%83%A8%E7%BD%B2">supervisor部署</a>
<ul>
<li><a href="#Docker%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE">Docker进程配置</a></li>
<li><a href="#Gunicorn%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE">Gunicorn进程配置</a></li>
<li><a href="#Nginx%E8%BF%9B%E7%A8%8B%E9%85%8D%E7%BD%AE">Nginx进程配置</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8supervisord%E8%BF%9B%E8%A1%8Creload%E5%90%AF%E5%8A%A8%E8%BF%9B%E7%A8%8B">使用supervisord进行reload启动进程</a></li>
</ul>
</li>
<li><a href="#%E4%BD%BF%E7%94%A8python%E8%BF%9B%E8%A1%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%B7%E6%B1%82">使用python进行客户端请求</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8ab%E8%BF%9B%E8%A1%8C%E5%8E%8B%E6%B5%8B">使用ab进行压测</a>
<ul>
<li><a href="#%E5%8E%8B%E6%B5%8Blstm%E8%AF%84%E8%AE%BA%E6%84%9F%E6%83%85%E8%AF%86%E5%88%AB%E6%A8%A1%E5%9E%8B">压测lstm评论感情识别模型</a></li>
<li><a href="#%E5%8E%8B%E6%B5%8B%E5%9B%BE%E5%83%8F%E6%98%BE%E8%91%97%E6%80%A7%E6%A3%80%E6%B5%8B%E6%A8%A1%E5%9E%8B">压测图像显著性检测模型</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>人工智能应用需要数据、算法、算力、服务等环节。模型服务是应用的必不可少的一步，目前普遍使用TensorFlow Serving提供模型服务功能。</p>
<p>人工智能模型服务的线上发布则需要选择更高性能的web服务。这里推荐的部署方式：Nginx + Gunicorn + Flask + supervisor，这种配置可以很好的支持高并发，负载均衡，进程监控，并且安全性和鲁棒性更高。</p>
<p>Nginx + Gunicorn + Flask + supervisor的部署方式：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/web-framework.jpg" alt="web-framework"></p>
<p>TFserving + Flask的部署方式：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/flask-tfserving.jpg" alt="flask-tfserving"></p>
<h1 id="tfserving介绍" tabindex="-1"><a class="header-anchor" href="#tfserving介绍" aria-hidden="true">#</a> TFserving介绍</h1>
<p>TensorFlow服务是你训练应用机器学习模型的方式。</p>
<p>TensorFlow服务使得投入生产的过程模型更容易、更快速。它允许你安全地部署新模型并运行实验，同时保持相同的服务器体系结构和API。开箱即用，它提供了与TensorFlow的集成，而且它可以扩展为其他类型的模型。</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/tfserving.jpg" alt="tfserving"></p>
<p>大家习惯使用TensorFlow进行模型的训练、验证和预测，但模型完善之后的生产上线流程，就变得五花八门了。针对这种情况Google提供了TensorFlow Servering，可以将训练好的模型直接上线并提供服务。在2017年的TensorFlow开发者Summit上便提出了TensorFlow Serving。</p>
<p>但那时候客户端和服务端的通信只支持gRPC。在实际的生产环境中比较广泛使用的C/S通信手段是基于RESTfull API的，幸运的是从tf1.8以后，TFserving也正式支持RESTfull API通信方式了。</p>
<ul>
<li>用什么来部署：当然是TFserving</li>
<li>怎么提供api接口：TFserving有提供RESTful api接口，现实部署时会在前面再加一层如Flask api</li>
<li>多个模型GPU资源如何分配：TFserving支持部署多模型，通过配置</li>
<li>线上模型如何更新而服务不中断：TFserving支持模型的不同的版本，如your_model中1和2两个版本，当你新增一个模型3时，TFserving会自动判断，自动加载模型3为当前模型，不需要重启</li>
</ul>
<p>TensorFlow Serving还支持同时挂载多个模型或者多个版本的模型，只需简单地指定模型名称即可调用相应的模型，无需多写几份代码、运行多个后台服务。因此优势在于：</p>
<p><strong>1. 自动刷新使用新版本模型，无需重启服务。</strong></p>
<p><strong>2. 无需写任何部署代码。</strong></p>
<p><strong>3. 可以同时挂载多个模型。</strong></p>
<h1 id="docker与tfserving" tabindex="-1"><a class="header-anchor" href="#docker与tfserving" aria-hidden="true">#</a> Docker与TFserving</h1>
<h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h2>
<h3 id="win10安装" tabindex="-1"><a class="header-anchor" href="#win10安装" aria-hidden="true">#</a> win10安装</h3>
<p>对于win10环境，需要<a href="https://hub.docker.com/editions/community/docker-ce-desktop-windows" target="_blank" rel="noopener noreferrer">Docker Desktop for Windows<ExternalLinkIcon/></a>，点击<code v-pre>get docker</code>进行下载，大约500MB。</p>
<p>注意，win10家庭版要升级到专业版，否则无法安装，可让淘宝帮助升级。</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/docker-win10-download.jpg" alt="docker-win10-download"></p>
<p>然后进行安装。这样就安装好了docker了。</p>
<p>win10的docker是基于hyper-v的，但是开启了hyper-v，就无法打开其他虚拟机，比如vmware。如果要关闭hyper-v虚拟机，则运行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Disable-WindowsOptionalFeature <span class="token parameter variable">-Online</span> <span class="token parameter variable">-FeatureName</span> Microsoft-Hyper-V-Hypervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="linux安装" tabindex="-1"><a class="header-anchor" href="#linux安装" aria-hidden="true">#</a> linux安装</h3>
<p>安装docker：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要下载的文件有近300M大小，所以如果下载速度很慢，就将apt换成国内的源（具体参考<a href="https://blog.csdn.net/qq_24326765/article/details/81916222" target="_blank" rel="noopener noreferrer">Ubuntu使用apt-get下载速度慢的解决方法<ExternalLinkIcon/></a>）。</p>
<p>后续的docker的linux命令，前面都要加sudo。</p>
<p>关于docker的一些命令：<a href="https://blog.csdn.net/qq_35139965/article/details/109475695" target="_blank" rel="noopener noreferrer">Docker在Linux下载安装及部署<ExternalLinkIcon/></a>。</p>
<h2 id="拉取tf-serving镜像" tabindex="-1"><a class="header-anchor" href="#拉取tf-serving镜像" aria-hidden="true">#</a> 拉取TF.Serving镜像</h2>
<p>打开<code v-pre>powershell</code>，然后这里我们选择tensorflow 1.14.0版本的镜像。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull tensorflow/serving:1.14.0
<span class="token function">docker</span> pull tensorflow/serving:1.14.0-gpu <span class="token comment"># 注意，可以选GPU</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/docker-pull-tfserving.jpg" alt="docker-pull-tfserving"></p>
<p>安装完可以用下面的命令查看安装的镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果下载错了，可以这样删除：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> rmi tensorflow/serving:1.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h2>
<p>上述准备工作完成后可以运行容器：</p>
<p>对于RESTful，使用8501端口（如下所示）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token string">"&amp;"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而如果使用gRPC请求预测，则需将上面的8501改成8500端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token string">"&amp;"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果docker安装选的是<code v-pre>docker pull tensorflow/serving:1.14.0-gpu</code>，可以选择指定GPU：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token assign-left variable">CUDA_VISIBLE_DEVICES</span><span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token string">"&amp;"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令中：</p>
<ul>
<li>
<p><code v-pre>-p 8501:8501</code>是端口映射，是将容器的8501端口映射到宿主机的8501端口，后面预测的时候使用该端口。</p>
<p>默认tensorflow serving的8500端口是对gRPC开放，8501是对REST API开放，8501:8501即（主机端口:容器端口），如果不进行设定，则都是默认端口。</p>
<p>更具体点说，-p 22222:33333 关键参数，指定docker虚拟机的22222端口，映射为container的33333端口，即对192.168.59.103:22222的访问，统统访问到container的33333端口。如果要映射80端口，设置-p 80:80就好。</p>
</li>
<li>
<p><code v-pre>-e MODEL_NAME=lstm</code> 设置模型名称；</p>
<ul>
<li>可选参数: MODLE_NAME（默认值：model）</li>
<li>可选参数：MODEL_BASE_PATH（默认值/models）</li>
</ul>
</li>
<li>
<p><code v-pre>--mount type=bind,source=D:\xxx\v1_lstm_csv\saved_model,target=/models/lstm</code> 是将宿主机的路径D:\xxx\v1_lstm_csv\saved_model挂载到容器的/models/lstm下。D:\xxx\v1_lstm_csv\saved_model是存放的是上述准备工作中保存的模型文件，在D:\xxx\v1_lstm_csv\saved_model下新建一个以数字命名的文件夹，如100001，并将模型文件（包含一个.pb文件和一个variables文件夹）放到该文件夹中。容器内部会根据绑定的路径读取模型文件；</p>
</li>
<li>
<p><code v-pre>-t tensorflow/serving:1.14.0</code> 根据名称“tensorflow/serving:1.14.0”运行容器；</p>
</li>
</ul>
<p>注意：上面的<code v-pre>source=D:\code\xxx\v1_lstm_csv\saved_model</code>里的模型，是一个中文评论情感分类的模型，可以直接在github上下载：<a href="https://github.com/linguishi/chinese_sentiment/tree/master/model/lstm/saved_model" target="_blank" rel="noopener noreferrer">linguishi/<strong>chinese_sentiment</strong><ExternalLinkIcon/></a>，要将包含模型数据的数字名字的文件夹放在<code v-pre>D:\code\xxx\v1_lstm_csv\saved_model</code>路径下，因为docker会自动找最新的数字文件夹名进行加载，即路径只需到模型这一级，不能精确到版本级别，比如：/root/mutimodel/linear_model而不是/root/mutimodel/linear_model/1，服务会默认加载最大版本号的模型。</p>
<p>此外，如果想停止TFserving服务或者删除同名服务，则</p>
<p>停掉TFserving服务</p>
<p>先找到Docker容器进程：</p>
<blockquote>
<p>docker ps -a</p>
<p>或者更精确一点：docker ps -a | grep &quot;tensorflow/serving&quot;</p>
</blockquote>
<p>输出：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/docker-ps.jpg" alt="docker-ps"></p>
<p>第一列为container id，干掉它即可：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">kill</span> d4fcf5591676
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除该任务的话，需要输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> d4fcf5591676
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="通过api查看模型状态-元数据" tabindex="-1"><a class="header-anchor" href="#通过api查看模型状态-元数据" aria-hidden="true">#</a> 通过API查看模型状态，元数据</h2>
<h3 id="通过model-status-api查看模型状态" tabindex="-1"><a class="header-anchor" href="#通过model-status-api查看模型状态" aria-hidden="true">#</a> 通过model-status-API查看模型状态</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> http://localhost:8501/v1/models/lstm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可得</p>
<blockquote>
<p>{
&quot;model_version_status&quot;: [
{
&quot;version&quot;: &quot;1609392632&quot;,
&quot;state&quot;: &quot;AVAILABLE&quot;,
&quot;status&quot;: {
&quot;error_code&quot;: &quot;OK&quot;,
&quot;error_message&quot;: &quot;&quot;</p>
</blockquote>
<h3 id="通过model-metadata-api查看模型的元数据" tabindex="-1"><a class="header-anchor" href="#通过model-metadata-api查看模型的元数据" aria-hidden="true">#</a> 通过model-metadata-API查看模型的元数据</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> http://localhost:8501/v1/models/lstm/metadata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可得</p>
<blockquote>
<p>{
&quot;model_spec&quot;:{
&quot;name&quot;: &quot;lstm&quot;,
&quot;signature_name&quot;: &quot;&quot;,
&quot;version&quot;: &quot;1609392632&quot;
}
,
&quot;metadata&quot;: {&quot;signature_def&quot;: {
&quot;signature_def&quot;: {
&quot;serving_default&quot;: {
&quot;inputs&quot;: {
&quot;nwords&quot;: {
&quot;dtype&quot;: &quot;DT_INT32&quot;,
&quot;tensor_shape&quot;: {
&quot;dim&quot;: [
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
}
],
&quot;unknown_rank&quot;: false
},
&quot;name&quot;: &quot;nwords:0&quot;
},
&quot;words&quot;: {
&quot;dtype&quot;: &quot;DT_STRING&quot;,
&quot;tensor_shape&quot;: {
&quot;dim&quot;: [
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
},
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
}
],
&quot;unknown_rank&quot;: false
},
&quot;name&quot;: &quot;words:0&quot;
}
},
&quot;outputs&quot;: {
&quot;labels&quot;: {
&quot;dtype&quot;: &quot;DT_STRING&quot;,
&quot;tensor_shape&quot;: {
&quot;dim&quot;: [
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
}
],
&quot;unknown_rank&quot;: false
},
&quot;name&quot;: &quot;index_to_string_Lookup:0&quot;
},
&quot;classes_id&quot;: {
&quot;dtype&quot;: &quot;DT_INT64&quot;,
&quot;tensor_shape&quot;: {
&quot;dim&quot;: [
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
}
],
&quot;unknown_rank&quot;: false
},
&quot;name&quot;: &quot;ArgMax:0&quot;
},
&quot;softmax&quot;: {
&quot;dtype&quot;: &quot;DT_FLOAT&quot;,
&quot;tensor_shape&quot;: {
&quot;dim&quot;: [
{
&quot;size&quot;: &quot;-1&quot;,
&quot;name&quot;: &quot;&quot;
},
{
&quot;size&quot;: &quot;3&quot;,
&quot;name&quot;: &quot;&quot;
}
],
&quot;unknown_rank&quot;: false
},
&quot;name&quot;: &quot;Softmax:0&quot;
}
},
&quot;method_name&quot;: &quot;tensorflow/serving/predict&quot;</p>
</blockquote>
<p>我们就知道了模型的<code v-pre>signature_def</code>的名字（即<code v-pre>serving_default</code>），输入<code v-pre>inputs</code>的名称（即<code v-pre>nwords</code>和<code v-pre>words</code>），还有输出<code v-pre>outputs</code>的名称（即<code v-pre>classes_id</code>、<code v-pre>labels</code>和<code v-pre>softmax</code>）。这些名字在随后的tf_serving代码中是要用到的。</p>
<p>或者还可以使用<code v-pre>saved_model_cli</code>命令行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>saved_model_cli show <span class="token parameter variable">--all</span> <span class="token parameter variable">--dir</span> D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model<span class="token punctuation">\</span><span class="token number">1609392632</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来获取模型的<code v-pre>signature_def</code>的名字（即<code v-pre>serving_default</code>），输入<code v-pre>inputs</code>的名称（即<code v-pre>nwords</code>和<code v-pre>words</code>），还有输出<code v-pre>outputs</code>的名称（即<code v-pre>classes_id</code>、<code v-pre>labels</code>和<code v-pre>softmax</code>）。这些名字在随后的tf_serving代码中是要用到的。</p>
<blockquote>
<p>MetaGraphDef with tag-set: 'serve' contains the following SignatureDefs:</p>
<p>signature_def['serving_default']:
The given SavedModel SignatureDef contains the following input(s):
inputs['nwords'] tensor_info:
dtype: DT_INT32
shape: (-1)
name: nwords:0
inputs['words'] tensor_info:
dtype: DT_STRING
shape: (-1, -1)
name: words:0
The given SavedModel SignatureDef contains the following output(s):
outputs['classes_id'] tensor_info:
dtype: DT_INT64
shape: (-1)
name: ArgMax:0
outputs['labels'] tensor_info:
dtype: DT_STRING
shape: (-1)
name: index_to_string_Lookup:0
outputs['softmax'] tensor_info:
dtype: DT_FLOAT
shape: (-1, 3)
name: Softmax:0
Method name is: tensorflow/serving/predict</p>
</blockquote>
<h2 id="grpc与restful请求的区别" tabindex="-1"><a class="header-anchor" href="#grpc与restful请求的区别" aria-hidden="true">#</a> gRPC与RESTful请求的区别</h2>
<ul>
<li>
<p><strong>gRPC</strong></p>
<p>gRPC是一个高性能、开源和通用的RPC框架，面向服务端和移动端，基于HTTP/2设计。</p>
<p>RPC(remote procedure call远程过程调用)框架目标就是让远程服务调用更加简单、透明。RPC框架负责屏蔽底层的传输方式（TCP或者UDP）、序列化方式（XML/Json/二进制）和通信细节。服务调用者可以像调用本地接口一样调用远程的服务提供者，而不需要关心底层通信细节和调用过程。</p>
<p>gRPC的g是google，意思是google开发的。</p>
</li>
<li>
<p><strong>RESTful</strong></p>
<p>REST（Representational State Transfer）表现层状态转换，RESTful一般是采用http+JSON实现的架构。</p>
</li>
<li>
<p>gRPC与RESTful API的<strong>区别</strong></p>
<p><strong>RESTful API</strong>通常使用JSON或XML的格式传输信息，比较通俗易懂，但文本格式序列化性能较差；</p>
<p><strong>gRPC</strong>对接口有严格的约束条件，安全性更高，对于高并发的场景更适用。</p>
<p>gRPC是HTTP/2协议，REST API是HTTP/1协议</p>
</li>
</ul>
<h2 id="使用restful-api请求预测" tabindex="-1"><a class="header-anchor" href="#使用restful-api请求预测" aria-hidden="true">#</a> 使用RESTful-API请求预测</h2>
<p>第一种方式是命令行下使用<strong>curl</strong>请求预测：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-Body</span> <span class="token string">'{"instances":[{"words": ["\u5f88", "\u559c\u6b22"], "nwords": 2}]}'</span> <span class="token parameter variable">-Uri</span> http://localhost:8501/v1/models/lstm:predict <span class="token parameter variable">-Method</span> <span class="token string">'POST'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Content: <span class="token punctuation">{</span>
    <span class="token string">"predictions"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"softmax"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">0.00012</span>, <span class="token number">0.99938</span>, <span class="token number">0.00049</span><span class="token punctuation">]</span>,
            <span class="token string">"labels"</span><span class="token builtin class-name">:</span> <span class="token string">"POS"</span>,
            <span class="token string">"classes_id"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种比较简单，但是遇到稍微复杂的情况就不方便处理。比如上面的<code v-pre>[&quot;\u5f88&quot;, &quot;\u559c\u6b22&quot;]</code>其实是<code v-pre>['很', '喜欢']</code>的字符。这是因为RESTful接受的数据必须是json格式，而json格式就需要把中文转成unicode格式，不然得出的结果就是错的。</p>
<p>如果机器有公网IP（如将tfsevring部署在阿里云服务器上），则可以在其他机器上通过IP地址访问进行预测，将上面的地址中的localhost改为运行容器的机器的公网IP地址即可。</p>
<p>第二种方式是使用<strong>Python代码</strong>请求预测：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> __future__ <span class="token keyword">import</span> print_function
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># grpc vs RESTful</span>
<span class="token comment"># 代码来自 https://medium.com/tensorflow/serving-ml-quickly-with-tensorflow-serving-and-docker-7df7094aa008</span>

<span class="token comment"># The server URL specifies the endpoint of your server running the lstm</span>
<span class="token comment"># model with the name "lstm" and using the predict interface.</span>
SERVER_URL <span class="token operator">=</span> <span class="token string">' http://localhost:8501/v1/models/lstm:predict'</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 数字</span>
    <span class="token comment"># predict_request = '{"instances" : [1.0, 2.0, 5.0]}'  # for example half_plus_two</span>
    <span class="token comment"># 文本</span>
    predict_request <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">#"signature_name": "serving_default",  # 这个可加可不加</span>
        <span class="token comment"># 单个：</span>
        <span class="token comment"># "instances": [{"words": words, "nwords": nwords}]</span>
        <span class="token comment"># 同时输入多个：</span>
        <span class="token string">"instances"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"很"</span><span class="token punctuation">,</span> <span class="token string">"喜欢"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"很"</span><span class="token punctuation">,</span> <span class="token string">"垃圾"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"请求文本的原始格式 predict_request = {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>predict_request<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># json.dumps在默认情况下，对于非ascii字符生成的是相对应的字符编码，而非原始字符</span>
    predict_request <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>predict_request<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"请求文本的json格式 predict_request = {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>predict_request<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># Send few actual requests and report average latency.</span>
    total_time <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment"># 发送请求</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>SERVER_URL<span class="token punctuation">,</span> data<span class="token operator">=</span>predict_request<span class="token punctuation">)</span>
    response<span class="token punctuation">.</span>raise_for_status<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># assert response.status_code == 200, "http request error!"</span>
    total_time <span class="token operator">+=</span> response<span class="token punctuation">.</span>elapsed<span class="token punctuation">.</span>total_seconds<span class="token punctuation">(</span><span class="token punctuation">)</span>
    prediction <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'predictions'</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>prediction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        prediction_i <span class="token operator">=</span> prediction<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"第{}个：labels = {}, 详细信息 = {}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> prediction_i<span class="token punctuation">[</span><span class="token string">"labels"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> prediction_i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'latency: {} ms'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>total_time<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>请求文本的原始格式 predict_request = {'instances': [{'words': ['很', '喜欢'], 'nwords': 2}, {'words': ['很', '垃圾'], 'nwords': 2}]}

请求文本的json格式 predict_request = {"instances": [{"words": ["\u5f88", "\u559c\u6b22"], "nwords": 2}, {"words": ["\u5f88", "\u5783\u573e"], "nwords": 2}]}

第0个：labels = POS, 详细信息 = {'labels': 'POS', 'classes_id': 1, 'softmax': [0.000121352808, 0.999383211, 0.000495323213]}
第1个：labels = NEG, 详细信息 = {'labels': 'NEG', 'classes_id': 0, 'softmax': [0.998190105, 3.86381435e-05, 0.0017712554]}

latency: 9.841000000000001 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用grpc请求预测" tabindex="-1"><a class="header-anchor" href="#使用grpc请求预测" aria-hidden="true">#</a> 使用gRPC请求预测</h2>
<h3 id="输入数据为文本或数字类型" tabindex="-1"><a class="header-anchor" href="#输入数据为文本或数字类型" aria-hidden="true">#</a> 输入数据为文本或数字类型</h3>
<p>这里需要在运行容器时将gRPC的端口映射到宿主机的8500端口，前面<code v-pre>运行容器</code>章节已经说过了，这里再重复一遍：</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token string">"&amp;"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果发生重名冲突就删除已有的容器：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>  <span class="token comment"># 根据冲突提示找到冲突的已有容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> d4fcf5591676  <span class="token comment"># 停止冲突的已有容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> d4fcf5591676  <span class="token comment"># 删除冲突的的已有容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>运行python版的gRPC请求预测，需要安装tensorflow-serving-api，即<code v-pre>C:\Users\user_name\Anaconda3\envs\tf14\Scripts\pip install tensorflow_serving_api</code>（根据自己实际来选择pip路径，一般直接pip就可以了，这里是要安装到ananconda的虚拟环境中）。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> grpc
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># C:\Users\luwei\Anaconda3\envs\tf14\Scripts\pip install tensorflow_serving_api</span>
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>apis <span class="token keyword">import</span> model_service_pb2_grpc<span class="token punctuation">,</span> model_management_pb2<span class="token punctuation">,</span> get_model_status_pb2<span class="token punctuation">,</span> predict_pb2<span class="token punctuation">,</span> prediction_service_pb2_grpc
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>config <span class="token keyword">import</span> model_server_config_pb2
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>util <span class="token keyword">import</span> make_tensor_proto
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>core<span class="token punctuation">.</span>framework <span class="token keyword">import</span> types_pb2

serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token punctuation">:</span> <span class="token string">"127.0.0.1:8500"</span><span class="token punctuation">,</span>
    <span class="token string">"max_message_length"</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token string">"timeout"</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token string">"signature_name"</span><span class="token punctuation">:</span> <span class="token string">"serving_default"</span><span class="token punctuation">,</span>
    <span class="token string">"model_name"</span><span class="token punctuation">:</span> <span class="token string">"lstm"</span>
<span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">predict_test</span><span class="token punctuation">(</span>batch_size<span class="token punctuation">,</span> serving_config<span class="token punctuation">)</span><span class="token punctuation">:</span>
    channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    <span class="token comment"># Creating random images for given batch size</span>
    input_data_words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"很"</span><span class="token punctuation">,</span> <span class="token string">"喜欢"</span><span class="token punctuation">]</span>
    input_data_nwords <span class="token operator">=</span> <span class="token number">2</span>

    request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_words<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_STRING))</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_nwords<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_INT32))</span>
    result <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">)</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<code v-pre>serving_config</code>里的<code v-pre>signature_name</code>（<code v-pre>serving_default</code>）是从前面的<code v-pre>通过model metadata API 查看模型的元数据</code>章节中得到的，<code v-pre>model_name</code>（<code v-pre>lstm</code>）是从前面的<code v-pre>运行容器</code>章节中的<code v-pre>docker run -p 8501:8501 --name=&quot;lstm&quot;</code>得到的。</p>
<p>上述代码运行结果为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1
POS
[0.00012, 0.99938, 0.00049]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入数据为图像类型" tabindex="-1"><a class="header-anchor" href="#输入数据为图像类型" aria-hidden="true">#</a> 输入数据为图像类型</h3>
<p>这里需要在运行容器时将gRPC的端口映射到宿主机的8500端口，前面<code v-pre>运行容器</code>章节已经说过了，这里再重复一遍（该模型来自下节的<code v-pre>ckpt格式转为pd格式用于TFserving</code>中产出的pd格式模型）：</p>
<blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 运行容器</span>
sudo docker run <span class="token operator">-</span>p <span class="token number">8500</span><span class="token punctuation">:</span><span class="token number">8500</span> <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span><span class="token string">"cv_sod"</span> <span class="token operator">-</span><span class="token operator">-</span>mount <span class="token builtin">type</span><span class="token operator">=</span>bind<span class="token punctuation">,</span>source<span class="token operator">=</span><span class="token operator">/</span>home<span class="token operator">/</span>luwei<span class="token operator">/</span>Desktop<span class="token operator">/</span>model<span class="token operator">/</span>cv_sod<span class="token operator">/</span>saved_model<span class="token punctuation">,</span>target<span class="token operator">=</span><span class="token operator">/</span>models<span class="token operator">/</span>cv_sod <span class="token operator">-</span>e MODEL_NAME<span class="token operator">=</span>cv_sod <span class="token operator">-</span>t tensorflow<span class="token operator">/</span>serving<span class="token punctuation">:</span><span class="token number">1.14</span><span class="token number">.0</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果发生重名冲突就删除已有的容器：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>  <span class="token comment"># 根据冲突提示找到冲突的已有容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> d4fcf5591676  <span class="token comment"># 停止冲突的已有容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> d4fcf5591676  <span class="token comment"># 删除冲突的的已有容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>然后运行通过gRPC请求TFserving的python代码：<code v-pre>tf_serving_grpc_img.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> grpc
<span class="token keyword">import</span> json
<span class="token keyword">import</span> cv2
<span class="token keyword">import</span> imageio
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> misc
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># pip install tensorflow_serving_api</span>
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>apis <span class="token keyword">import</span> model_service_pb2_grpc<span class="token punctuation">,</span> model_management_pb2<span class="token punctuation">,</span> get_model_status_pb2<span class="token punctuation">,</span> predict_pb2<span class="token punctuation">,</span> prediction_service_pb2_grpc
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>config <span class="token keyword">import</span> model_server_config_pb2
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>util <span class="token keyword">import</span> make_tensor_proto
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>core<span class="token punctuation">.</span>framework <span class="token keyword">import</span> types_pb2

serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token punctuation">:</span> <span class="token string">"127.0.0.1:8500"</span><span class="token punctuation">,</span>
    <span class="token string">"max_message_length"</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token string">"timeout"</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token string">"signature_name"</span><span class="token punctuation">:</span> <span class="token string">"serving_default"</span><span class="token punctuation">,</span>
    <span class="token string">"model_name"</span><span class="token punctuation">:</span> <span class="token string">"cv_sod"</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">predict_test</span><span class="token punctuation">(</span>serving_config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">,</span> image_out_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
    channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    <span class="token comment"># ==========图片前处理====================</span>
    rgb <span class="token operator">=</span> imageio<span class="token punctuation">.</span>imread<span class="token punctuation">(</span>image_in_file<span class="token punctuation">)</span>
    <span class="token keyword">if</span> rgb<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">rgba2rgb</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> img<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">*</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>img<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        rgb <span class="token operator">=</span> rgba2rgb<span class="token punctuation">(</span>rgb<span class="token punctuation">)</span>
    origin_shape <span class="token operator">=</span> rgb<span class="token punctuation">.</span>shape
    g_mean <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">126.88</span><span class="token punctuation">,</span> <span class="token number">120.24</span><span class="token punctuation">,</span> <span class="token number">112.19</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    rgb <span class="token operator">=</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>
        misc<span class="token punctuation">.</span>imresize<span class="token punctuation">(</span>rgb<span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> interp<span class="token operator">=</span><span class="token string">"nearest"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>float32<span class="token punctuation">)</span> <span class="token operator">-</span> g_mean<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment"># ==========请求TFserving服务====================</span>
    request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'img_in'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>rgb<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>types_pb2<span class="token punctuation">.</span>DT_FLOAT<span class="token punctuation">)</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># return result, origin_shape</span>

    <span class="token comment"># ==========图片后处理====================</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    img_out <span class="token operator">=</span> result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val  <span class="token comment"># [0]</span>
    img_out <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>img_out<span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    final_alpha <span class="token operator">=</span> misc<span class="token punctuation">.</span>imresize<span class="token punctuation">(</span>np<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>img_out<span class="token punctuation">)</span><span class="token punctuation">,</span> origin_shape<span class="token punctuation">)</span>
    imageio<span class="token punctuation">.</span>imwrite<span class="token punctuation">(</span>image_out_file<span class="token punctuation">,</span> final_alpha<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    image_in_file <span class="token operator">=</span> <span class="token string">'/home/luwei/Desktop/flask_osd/goat.jpg'</span>
    image_out_file <span class="token operator">=</span> <span class="token string">'/home/luwei/Desktop/flask_osd/goat_osd.jpg'</span>

    predict_test<span class="token punctuation">(</span>image_in_file<span class="token punctuation">,</span> image_out_file<span class="token punctuation">,</span> serving_config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ckpt格式转为pd格式用于tfserving" tabindex="-1"><a class="header-anchor" href="#ckpt格式转为pd格式用于tfserving" aria-hidden="true">#</a> ckpt格式转为pd格式用于TFserving</h2>
<p>TFserving使用的是PB（ProtoBuf）文件格式，它体积较小但不可更改，而一般模型训练保存的模型文件为ckpt格式，它体积大但结构和变量值是分离的，比较灵活。所以，如果没有pb格式，就需要把ckpt格式转为pb格式。</p>
<p>使用<code v-pre>tf.saved_model.save</code>可以生成pb格式的模型文件，其他格式没有网络结构tensorflow-serving无法复现。</p>
<p>对于tf1.x，以图像的显著性检测为例（该例子的论文和github代码在下面代码注释中已给出），转换代码如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token function">import</span> tensorflow as tf
from tensorflow.python <span class="token function">import</span> saved_model

<span class="token comment"># Joker316701882/Salient-Object-Detection</span>
<span class="token comment"># github: https://github.com/Joker316701882/Salient-Object-Detection</span>
<span class="token comment"># paper: https://openaccess.thecvf.com/content_cvpr_2017/papers/Hou_Deeply_Supervised_Salient_CVPR_2017_paper.pdf</span>


def convert_ckpt_to_pb_for_tfserving<span class="token punctuation">(</span>meta_graph_file, ckpt_path, export_path<span class="token punctuation">)</span>:
    gpu_options <span class="token operator">=</span> tf.GPUOptions<span class="token punctuation">(</span>per_process_gpu_memory_fraction<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">)</span>
    with tf.Session<span class="token punctuation">(</span>config<span class="token operator">=</span>tf.ConfigProto<span class="token punctuation">(</span>gpu_options<span class="token operator">=</span>gpu_options<span class="token punctuation">))</span> as sess:
        saver <span class="token operator">=</span> tf.train.import_meta_graph<span class="token punctuation">(</span>meta_graph_file<span class="token punctuation">)</span>
        saver.restore<span class="token punctuation">(</span>sess, tf.train.latest_checkpoint<span class="token punctuation">(</span>ckpt_path<span class="token punctuation">))</span>
        sess.run<span class="token punctuation">(</span>tf.global_variables_initializer<span class="token punctuation">(</span><span class="token punctuation">))</span>
        saved_model.simple_save<span class="token punctuation">(</span>session<span class="token operator">=</span>sess,
                                <span class="token assign-left variable">export_dir</span><span class="token operator">=</span>export_path,  <span class="token comment"># 此路径过长会产生错误</span>
                                <span class="token assign-left variable">inputs</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"img_in"</span><span class="token builtin class-name">:</span> tf.get_collection<span class="token punctuation">(</span><span class="token string">'image_batch'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span>,
                                <span class="token assign-left variable">outputs</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"img_out"</span><span class="token builtin class-name">:</span> tf.get_collection<span class="token punctuation">(</span><span class="token string">'mask'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token builtin class-name">:</span>
    meta_graph_file <span class="token operator">=</span> <span class="token string">"D:/model/v1/meta_graph/my-model.meta"</span>
    ckpt_path <span class="token operator">=</span> <span class="token string">"D:model/v1/salience_model/"</span>
    export_path <span class="token operator">=</span> <span class="token string">"D:/pd"</span>

    convert_ckpt_to_pb_for_tfserving<span class="token punctuation">(</span>meta_graph_file, ckpt_path, export_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用<code v-pre>saved_model_cli</code>命令可以查看该pb文件的输入、输出信息，命令如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> pb模型所在目录
saved_model_cli show <span class="token parameter variable">--dir</span> ./ <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>MetaGraphDef with tag-set: <span class="token string">'serve'</span> contains the following SignatureDefs:

signature_def<span class="token punctuation">[</span><span class="token string">'serving_default'</span><span class="token punctuation">]</span>:
  The given SavedModel SignatureDef contains the following input<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:
    inputs<span class="token punctuation">[</span><span class="token string">'img_in'</span><span class="token punctuation">]</span> tensor_info:
        dtype: DT_FLOAT
        shape: <span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">320</span>, <span class="token number">320</span>, <span class="token number">3</span><span class="token punctuation">)</span>
        name: Placeholder:0
  The given SavedModel SignatureDef contains the following output<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:
    outputs<span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span> tensor_info:
        dtype: DT_FLOAT
        shape: <span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">320</span>, <span class="token number">320</span>, <span class="token number">1</span><span class="token punctuation">)</span>
        name: final_mask/mask:0
  Method name is: tensorflow/serving/predict
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>易知，该pb文件的输入为<code v-pre>img_in</code>，输出为<code v-pre>img_out</code>。</p>
<h1 id="flask服务" tabindex="-1"><a class="header-anchor" href="#flask服务" aria-hidden="true">#</a> Flask服务</h1>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/flask-logo.png" alt="flask-logo"></p>
<h2 id="为什么需要flask服务器" tabindex="-1"><a class="header-anchor" href="#为什么需要flask服务器" aria-hidden="true">#</a> 为什么需要Flask服务器</h2>
<p>我们可以看到，我们在serving_sample_request.py（前端调用者）中执行了一些图像预处理步骤。以下是在TensorFlow服务器上创建Flask服务器的原因：</p>
<ul>
<li>当我们向前端团队提供API端点时，我们需要确保不会因预处理技术问题而造成阻碍。</li>
<li>我们可能并不总是拥有Python后端服务器（例如Node.js服务器），因此使用numpy和keras库进行预处理可能会很麻烦。</li>
<li>如果我们计划提供多个模型，那么我们将不得不创建多个TensorFlow服务服务器，并且必须在我们的前端代码中添加新的URL。但是我们的Flask服务器会保持域URL相同，我们只需要添加一个新路由（一个函数）。</li>
<li>可以在Flask应用程序中执行基于订阅的访问、异常处理和其他任务。</li>
</ul>
<p>我们要做的是消除TensorFlow服务器和我们的前端之间的紧密耦合。</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/flask-tfserving.jpg" alt="flask-tfserving"></p>
<h2 id="flask的helloworld代码" tabindex="-1"><a class="header-anchor" href="#flask的helloworld代码" aria-hidden="true">#</a> Flask的HelloWorld代码</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World!"</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    <span class="token comment"># http://127.0.0.1:5000/</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flask的缺陷" tabindex="-1"><a class="header-anchor" href="#flask的缺陷" aria-hidden="true">#</a> Flask的缺陷</h2>
<p>Flask自带的网关不是并发的，性能不好，不适用于生产环境。</p>
<p>Flask是一个web框架，而非web server，直接用Flask拉起的web服务仅限于开发环境使用，生产环境不够稳定，也无法承受大量请求的并发，在生产环境下需要使用服务器软件来处理各种请求，如Gunicorn、 Nginx或Apache。</p>
<p><strong>Flask框架是通过多线程/多进程+阻塞的socket实现非阻塞，其本质是基于python的源库socketserver实现的</strong></p>
<h2 id="gevent-flask同步变异步" tabindex="-1"><a class="header-anchor" href="#gevent-flask同步变异步" aria-hidden="true">#</a> gevent+Flask同步变异步</h2>
<p>gevent+Flask是最简单的把同步程序变成异步程序的方法。</p>
<p>Flask自带的网关不是并发的，性能不好，不适用于生产环境。Flask的web server，不能用于生产环境，不稳定，比如说，每隔十几分钟，有一定概率遇到连接超时无返回的情况。因此Flask，Django，webpy等框架自带的web server性能都很差，只能用来做测试用途。</p>
<p><strong>gevent的原理</strong></p>
<p>Python通过<code v-pre>yield</code>提供了对协程的基本支持，但是不完全。而第三方的gevent为Python提供了比较完善的协程支持。</p>
<p>gevent是第三方库，基于greenlet（一个轻量级的协程库）的网络库，通过greenlet实现协程，其基本思想是：</p>
<p>当一个greenlet遇到IO操作时，比如访问网络，就自动切换到其他的greenlet，等到IO操作完成，再在适当的时候切换回来继续执行。由于IO操作非常耗时，经常使程序处于等待状态，有了gevent为我们自动切换协程，就保证总有greenlet在运行，而不是等待IO。</p>
<p>由于切换是在IO操作时自动完成，所以gevent需要修改Python自带的一些标准库，这一过程在启动时通过monkey patch完成。</p>
<p>具体gevent+Flask代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> monkey  <span class="token comment"># 猴子补丁</span>
monkey<span class="token punctuation">.</span>patch_all<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 这两行必须放到代码最前面</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask <span class="token keyword">import</span> request
<span class="token keyword">import</span> json
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep
<span class="token keyword">from</span> tf_serving_grpc_text <span class="token keyword">import</span> serving_config<span class="token punctuation">,</span> predict_test
<span class="token keyword">from</span> gevent <span class="token keyword">import</span> pywsgi
<span class="token keyword">from</span> werkzeug<span class="token punctuation">.</span>debug <span class="token keyword">import</span> DebuggedApplication


app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World!"</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/predict"</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">predict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Flask url中参数 https://zhuanlan.zhihu.com/p/43656865</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"request.method ="</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">:</span>  <span class="token comment"># get方法 ?num=10</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>args<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>get_json<span class="token punctuation">(</span>force<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"ERROR: request.method is not GET or POST!"</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"data = "</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>

    ret_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"status"</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token string">'words'</span> <span class="token keyword">in</span> data <span class="token keyword">and</span> <span class="token string">'nwords'</span> <span class="token keyword">in</span> data<span class="token punctuation">:</span>
        ret_data<span class="token punctuation">[</span><span class="token string">"status"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> ret_data

    data<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    data<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">,</span> data<span class="token punctuation">)</span>

    ret_data<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span> <span class="token operator">=</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    ret_data<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span> <span class="token operator">=</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ret_data<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val<span class="token punctuation">]</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"ret_data ="</span><span class="token punctuation">,</span> ret_data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret_data


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    <span class="token comment"># Flask原生服务</span>
    <span class="token comment"># app.run(host="0.0.0.0", port=5100, debug=True, threaded=True)  # threaded默认为True</span>

    dapp <span class="token operator">=</span> DebuggedApplication<span class="token punctuation">(</span>app<span class="token punctuation">,</span> evalex<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    server <span class="token operator">=</span> pywsgi<span class="token punctuation">.</span>WSGIServer<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span> <span class="token number">5100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dapp<span class="token punctuation">)</span>
    server<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，用于import的的<code v-pre>tf_serving_grpc_text.py</code>的内容为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># -*-coding:utf-8 -*-</span>
<span class="token function">import</span> grpc
<span class="token function">import</span> numpy as np
<span class="token comment"># C:\Users\luwei\Anaconda3\envs\tf14\Scripts\pip install tensorflow_serving_api</span>
from tensorflow_serving.apis <span class="token function">import</span> model_service_pb2_grpc, model_management_pb2, get_model_status_pb2, predict_pb2, prediction_service_pb2_grpc
from tensorflow_serving.config <span class="token function">import</span> model_server_config_pb2
from tensorflow.contrib.util <span class="token function">import</span> make_tensor_proto
from tensorflow.core.framework <span class="token function">import</span> types_pb2


serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token builtin class-name">:</span> <span class="token string">"127.0.0.1:8500"</span>,
    <span class="token string">"max_message_length"</span><span class="token builtin class-name">:</span> <span class="token number">10</span> * <span class="token number">1024</span> * <span class="token number">1024</span>,
    <span class="token string">"timeout"</span><span class="token builtin class-name">:</span> <span class="token number">300</span>,
    <span class="token string">"signature_name"</span><span class="token builtin class-name">:</span> <span class="token string">"serving_default"</span>,
    <span class="token string">"model_name"</span><span class="token builtin class-name">:</span> <span class="token string">"lstm"</span>
<span class="token punctuation">}</span>


def predict_test<span class="token punctuation">(</span>batch_size, serving_config, input_data<span class="token punctuation">)</span>:
    channel <span class="token operator">=</span> grpc.insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span>, <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span>, serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>,
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span>, serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc.PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    <span class="token comment"># Creating random images for given batch size</span>
    <span class="token comment"># input_data_words = ["很", "喜欢"]</span>
    <span class="token comment"># input_data_nwords = 2</span>
    input_data_words <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"words"</span><span class="token punctuation">]</span>
    input_data_nwords <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"nwords"</span><span class="token punctuation">]</span>

    request <span class="token operator">=</span> predict_pb2.PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request.model_spec.name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request.model_spec.signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request.inputs<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span>.CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_words, <span class="token assign-left variable">shape</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">))</span>  <span class="token comment"># , dtype=types_pb2.DT_STRING))</span>
    request.inputs<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span>.CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_nwords, <span class="token assign-left variable">shape</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">))</span>  <span class="token comment"># , dtype=types_pb2.DT_INT32))</span>
    result <span class="token operator">=</span> stub.Predict<span class="token punctuation">(</span>request, serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel.close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">return</span> result


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token builtin class-name">:</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span><span class="token number">1</span>, serving_config<span class="token punctuation">)</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    print<span class="token punctuation">(</span>predict_result.outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span>.int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    print<span class="token punctuation">(</span>predict_result.outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span>.string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.decode<span class="token punctuation">(</span><span class="token punctuation">))</span>
    print<span class="token punctuation">(</span>predict_result.outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span>.float_val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx-gunicorn-flask部署" tabindex="-1"><a class="header-anchor" href="#nginx-gunicorn-flask部署" aria-hidden="true">#</a> Nginx+Gunicorn+Flask部署</h1>
<p>之前用Flask写了个网站，然后直接放在服务器上运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python run.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果感觉怎么那么不稳定！！！然后就以为是服务器不行。</p>
<p>后来才知道原来Flask的<code v-pre>app.run()</code>只是用来本地调试用的，如果真正放到服务器上运行的话，是完全不行的！需要配合Gunicorn/uWsgi和Nginx才行。</p>
<h2 id="理解nginx-gunicorn-flask" tabindex="-1"><a class="header-anchor" href="#理解nginx-gunicorn-flask" aria-hidden="true">#</a> 理解Nginx+Gunicorn+Flask</h2>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/web-framework.jpg" alt="web-framework"></p>
<h3 id="为什么要用nginx-gunicorn-flask-supervisor方式部署" tabindex="-1"><a class="header-anchor" href="#为什么要用nginx-gunicorn-flask-supervisor方式部署" aria-hidden="true">#</a> 为什么要用Nginx+Gunicorn+Flask+supervisor方式部署</h3>
<p>线上发布则需要选择更高性能的wsgi server。这里推荐的部署方式：Nginx + Gunicorn + Flask + supervisor。</p>
<p>用Flask开发之后，很多人，喜欢用<code v-pre>nohup python manage.py &amp;</code>这样的形式，放到后台运行，其实这样只是个发开模式，很简陋，无法支持并发，进程监控等功能。所以采用Nginx + uwsgi + Flask的方式进行部署。</p>
<p>Flask自带的wsgi性能低下，只适合你开发调试的时候用，线上你必须用Nginx + Gunicorn才能获得更强的性能，和更高的安全性。</p>
<p>Nginx + Gunicorn，是利用Nginx高并发的优势，Nginx收到http请求之后，把他转发给wsgi服务器Gunicorn，Gunicorn上运行Flask应用，处理请求之后再返回给Nginx，而Gunicorn擅长于管理多进程，一般用来管理多个进程，有进程挂了Gunicorn可以把它拉起来，防止服务器长时间停止服务，还可以动态调整worker的数量，请求多的时候增加worker的数量，请求少的时候减少，这就是所谓的pre-fork模型。</p>
<p>如果要部署多个APP，可以采用单个Nginx，多个gunicorn+Flask的方式来实现，如下图所示。</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/single-nginx-multi-gunicorn-flask.png" alt="single-nginx-multi-gunicorn-flask"></p>
<h3 id="nginx、gunicore和flask之间的关系" tabindex="-1"><a class="header-anchor" href="#nginx、gunicore和flask之间的关系" aria-hidden="true">#</a> Nginx、gunicore和Flask之间的关系</h3>
<p>知乎：<a href="https://www.zhihu.com/question/342967945" target="_blank" rel="noopener noreferrer">为什么Nginx可以直接部署，还要uWSGI，Gunicorn等中间件？<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/nginx-gunicore-flask.jpg" alt="nginx-gunicore-flask"></p>
<p>首先来看两个概念</p>
<p><strong>WSGI</strong>：<a href="https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface" target="_blank" rel="noopener noreferrer">Web Server Gateway Interface<ExternalLinkIcon/></a>，是一个接口，定义web server如何转发请求到Python写的应用中。就像Java的servlet API，这样只要实现接口的web server都可以调用遵守此接口的任何Python应用。</p>
<p>**uWSGI：**实现了WSGI的一个中间件。</p>
<p>回到问题，其实题主问题是有些不太准确的，Nginx是不能直接部署python web的，因为Nginx不支持WSGI规范。当然Nginx也可以实现，不过术业有专攻，Nginx没有做。</p>
<p>uWSGI是实现了WSGI接口的，一个完整的http server，可以直接用来部署Python Web的，但为什么还需要Nginx呢？因为Nginx擅长高并发，静态文件，gzip压缩等，这些功能是uWSGI不具备的，如果你的网站访问量不大，可以只用uWSGI，完全不需要用Nginx。</p>
<p>所以现在流行的使用方法是Nginx+uWSGI（如上图），Nginx来完成Proxy，静态文件服务等，动态请求转给uWSGI调用Python来完成。Nginx与uWSGI通过<a href="https://uwsgi-docs.readthedocs.io/en/latest/Protocol.html" target="_blank" rel="noopener noreferrer">uwsgi<ExternalLinkIcon/></a>（全部小写）协议来完成，uwsgi是一个二进制协议允许uWSGI与Nginx等应用服务器交互。</p>
<hr>
<p>python代码里包括的wsgi app，简易的http server（不建议用于线上环境）：</p>
<p>比如你在Flask中的<code v-pre>app = Flask(__name__)​</code>，这个app就是wsgi app，它只是一个callable对象，传入一个wsgi请求，返回一个wsgi的响应， 想像成一个函数就好了，接收参数，返回结果。</p>
<p>一般的web框架还会提供一个简易的http server， 比如你在Flask中<code v-pre>app.run()</code>，其实就是启动了一个http server，这个server做的事情就是监听端口，把http请求转换为wsgi的请求，传递给wsgi app处理， 再把wsgi app返回的wsgi响应转换为http的响应，返回给客户端。</p>
<p>至于Nginx，其实在这里就是扮演了一个http server的角色，就像Flask内置的server一样，但是提供了更多的功能，也有更强的性能和稳定性。 那么Nginx怎么调用python写的wsgi app呢？两个办法：</p>
<ol>
<li>插件，就是Nginx用一个插件来在http和wsgi协议间做转换</li>
<li>自己再提供一个http server，这样Nginx就只需要做转发就好了。 这就是uwsgi和Gunicorn的作用了，他们就是一个加强版的http server，把http转换为wsgi，http这头是Nginx，wsgi那头是wsgi app。当然，因为uwsgi，Gunicorn这些东西已经提供了http服务，不要Nginx也是可以的。还是那句话，生产环境不推荐。毕竟Nginx提供的http层面的很多功能是uwsgi这些东西没有的。</li>
</ol>
<hr>
<p>首先题主要清楚</p>
<ol>
<li>
<p>理论上Nginx可以通过一些手段不用Gunicorn这玩意。</p>
</li>
<li>
<p>计算机世界里面的多一层的解决方案，都是是为了好管理，是为了职责清晰。</p>
</li>
<li>
<p>某个场景下可以，不代表这个场景下这么做就好。比如，你可以去搬砖，但你没必要去搬砖，甚至说，你搬砖水平不如专业搬砖的。</p>
</li>
</ol>
<p>举几个例子</p>
<ol>
<li>
<p>僧多粥少。Nginx 可以上万并发，而正常的python server根本不够这么多并发。那么很简单，把Nginx作为负载均衡，雨露均沾的分配请求到这些web服务器上。如果直接部署。则是把这些东西耦合在一起。没法scale。</p>
</li>
<li>
<p>让专业的去做专业的事情。Gunicorn有很多worker的姿势，比如支持sync worker，gevent worker，比如tornado worker。Nginx如果全都支持，那岂不是要累死Nginx团队？</p>
</li>
<li>
<p>精准控制，比如Gunicorn的sync worker是支持prefork，这也就意味着可以在收到足够多的请求的时候，预先帮你提升worker数量，来处理。比如，Gunicorn进程的用户可能和Nginx不一样，具备更高的权限，你用Nginx处理，是不是就有点简单粗暴了呢？再比如，我要针对wsgi做一些监控。这怎么处理？</p>
</li>
</ol>
<h3 id="为什么flask和nginx之间要用uwsgi服务器" tabindex="-1"><a class="header-anchor" href="#为什么flask和nginx之间要用uwsgi服务器" aria-hidden="true">#</a> 为什么Flask和Nginx之间要用uwsgi服务器</h3>
<p>为什么不直接把Flask部署到Nginx 上，而是要用uwsgi服务器？</p>
<p>uwsgi服务器是将web请求的参数/属性，转换成python中相应的数据结构，以便于上层的python代码不用关注tcp层的细节。</p>
<p>说的简单点，web端口接收到的请求原始格式是字符串，但是你在django中通过request.GET就可以获取到get请求的参数，是因为wsgi帮你把原始的字符串处理成request这样的数据结构。</p>
<p>而nginx的功能是处理一些静态的资源以及路由的转发。并不会将原始请求的字符串转换成python中的字符串，所以需要搭配使用！</p>
<h3 id="为什么需要nginx" tabindex="-1"><a class="header-anchor" href="#为什么需要nginx" aria-hidden="true">#</a> 为什么需要Nginx</h3>
<p>先要弄清楚web开发的两大块，<strong>web服务器</strong>和<strong>web框架</strong>。</p>
<p>web服务器即用来接受客户端请求，建立连接，转发响应的程序。至于转发的内容是什么，交由web框架来处理，即处理这些业务逻辑。如查询数据库、生成实时信息等。Nginx就是一个web服务器，Django或Flask就是web框架。</p>
<p>一个普通的个人网站，访问量不大的话，当然可以由uWSGI和Django/Flask构成。但是一旦访问量过大，客户端请求连接就要进行长时间的等待。这个时候就出来了分布式服务器，我们可以多来几台web服务器，都能处理请求。但是谁来分配客户端的请求连接和web服务器呢？Nginx就是这样一个管家的存在，由它来分配。这也就是由Nginx实现反向代理，即代理服务器。</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/why-need-nginx.jpg" alt="why-need-nginx"></p>
<h2 id="部署流程" tabindex="-1"><a class="header-anchor" href="#部署流程" aria-hidden="true">#</a> 部署流程</h2>
<p>整个部署过程可以总结为：</p>
<ul>
<li>安装Flask、Gunicorn、Nginx</li>
<li>添加Flask项目</li>
<li>运行Gunicorn</li>
<li>修改Nginx配置文件</li>
<li>运行Nginx</li>
</ul>
<p>下面一步步来。</p>
<h2 id="flask" tabindex="-1"><a class="header-anchor" href="#flask" aria-hidden="true">#</a> Flask</h2>
<p>这里就创建一个最简单的Flask项目，创建一个<code v-pre>test.py</code>的Python文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

from flask <span class="token function">import</span> Flask,request
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


@app.route<span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
def home<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token builtin class-name">return</span> <span class="token string">"home"</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token builtin class-name">:</span>
    <span class="token comment"># app.run(debug=False)</span>
    app.run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">'0.0.0.0'</span>, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">8001</span>, <span class="token assign-left variable">debug</span><span class="token operator">=</span>True<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gunicorn" tabindex="-1"><a class="header-anchor" href="#gunicorn" aria-hidden="true">#</a> Gunicorn</h2>
<h3 id="什么是gunicorn" tabindex="-1"><a class="header-anchor" href="#什么是gunicorn" aria-hidden="true">#</a> 什么是Gunicorn</h3>
<p>Gunicorn是一个基于Python的WSGI HTTP服务器。它所在的位置通常是在反向代理（如 Nginx）或者负载均衡（如AWS ELB）和一个web应用（比如Django或者Flask）之间。</p>
<p>Guincorn是支持wsgi协议的http server，实现了一个UNIX的预分发web服务端。是为了解决Django、Flask这些web框架自带wsgi server性能低下的问题。</p>
<p>好的，那这是什么意思呢？</p>
<ul>
<li>Gunicorn启动了被分发到的一个主线程，然后因此产生的子线程就是对应的worker。</li>
<li>主进程的作用是确保worker数量与设置中定义的数量相同。因此如果任何一个worker挂掉，主线程都可以通过分发它自身而另行启动。</li>
<li>worker的角色是处理HTTP请求。worker的数量建议设置为<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>⋅</mo><msub><mtext>num</mtext><mrow><mi>c</mi><mi>p</mi><mi>u</mi></mrow></msub><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2\cdot \text{num}_{cpu}+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord text"><span class="mord">num</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">c</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">u</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>。</li>
<li>这个 <strong>预</strong>in<strong>预分发</strong> 就意味着主线程在处理HTTP请求之前就创建了worker。</li>
<li>操作系统的内核就负责处理worker进程之间的负载均衡。</li>
</ul>
<h3 id="gunicorn配置" tabindex="-1"><a class="header-anchor" href="#gunicorn配置" aria-hidden="true">#</a> Gunicorn配置</h3>
<p>Gunicorn从三个不同地方获取配置：</p>
<ul>
<li>
<p>框架设置（通常只影响到Paster应用）</p>
</li>
<li>
<p>配置文件（python文件）：配置文件中的配置会覆盖框架的设置。</p>
</li>
<li>
<p>命令行<code v-pre>gunicorn -w 2 -b 0.0.0.0:8000 test.application</code></p>
<p>-w: 指定fork的worker进程数</p>
<p>-b: 指定绑定的端口</p>
<p>test: 模块名,python文件名</p>
<p>application: 变量名,python文件中可调用的wsgi接口名称</p>
</li>
</ul>
<p>置文件必须是一个python文件，只是将命令行中的参数写进py文件中而已，如果需要设置哪个参数，则在py文件中为该参数赋值即可。例如：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># example.py</span>
bind <span class="token operator">=</span> <span class="token string">"127.0.0.1:8000"</span>
workers <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行gunicorn：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gunicorn <span class="token parameter variable">-c</span> example.py test:app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等同于：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gunicorn <span class="token parameter variable">-w</span> <span class="token number">2</span> <span class="token parameter variable">-b</span> <span class="token number">127.0</span>.0.1:8000 test:app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，配置文件还能实现更复杂的配置：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># gunicorn.py</span>
<span class="token keyword">import</span> logging
<span class="token keyword">import</span> logging<span class="token punctuation">.</span>handlers
<span class="token keyword">from</span> logging<span class="token punctuation">.</span>handlers <span class="token keyword">import</span> WatchedFileHandler
<span class="token keyword">import</span> os
<span class="token keyword">import</span> multiprocessing
bind <span class="token operator">=</span> <span class="token string">'127.0.0.1:8000'</span>      <span class="token comment">#绑定ip和端口号</span>
backlog <span class="token operator">=</span> <span class="token number">512</span>                <span class="token comment">#监听队列</span>
chdir <span class="token operator">=</span> <span class="token string">'/home/test/server/bin'</span>  <span class="token comment">#gunicorn要切换到的目的工作目录</span>
timeout <span class="token operator">=</span> <span class="token number">30</span>      <span class="token comment">#超时</span>
worker_class <span class="token operator">=</span> <span class="token string">'gevent'</span> <span class="token comment">#使用gevent模式，还可以使用sync 模式，默认的是sync模式</span>

workers <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>    <span class="token comment">#进程数</span>
threads <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">#指定每个进程开启的线程数</span>
loglevel <span class="token operator">=</span> <span class="token string">'info'</span> <span class="token comment">#日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置</span>
access_log_format <span class="token operator">=</span> <span class="token string">'%(t)s %(p)s %(h)s "%(r)s" %(s)s %(L)s %(b)s %(f)s" "%(a)s"'</span>    <span class="token comment">#设置gunicorn访问日志格式，错误日志无法设置</span>

<span class="token triple-quoted-string string">"""
其每个选项的含义如下：
h          remote address
l          '-'
u          currently '-', may be user name in future releases
t          date of the request
r          status line (e.g. ``GET / HTTP/1.1``)
s          status
b          response length or '-'
f          referer
a          user agent
T          request time in seconds
D          request time in microseconds
L          request time in decimal seconds
p          process ID
"""</span>
accesslog <span class="token operator">=</span> <span class="token string">"/home/test/server/log/gunicorn_access.log"</span>      <span class="token comment">#访问日志文件</span>
errorlog <span class="token operator">=</span> <span class="token string">"/home/test/server/log/gunicorn_error.log"</span>        <span class="token comment">#错误日志文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行gunicorn" tabindex="-1"><a class="header-anchor" href="#运行gunicorn" aria-hidden="true">#</a> 运行Gunicorn</h3>
<p>跳转到<code v-pre>test.py</code>文件所在的目录下。然后</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会起1个master进程和4个worker子进程：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> gunicorn
<span class="token comment"># 1个父进程</span>
<span class="token number">14973</span> <span class="token number">5033</span> python gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token comment"># 父进程开启4个子进程</span>
<span class="token number">14976</span> <span class="token number">14973</span> python gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token number">14977</span> <span class="token number">14973</span> python gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token number">14978</span> <span class="token number">14973</span> python gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token number">14979</span> <span class="token number">14973</span> python gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出worker进程（pid：14976, 14977, 14978, 14979）是master进程（pid：14973）的子进程。</p>
<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2>
<h3 id="nginx介绍" tabindex="-1"><a class="header-anchor" href="#nginx介绍" aria-hidden="true">#</a> Nginx介绍</h3>
<p>Nginx是什么：<a href="https://juejin.cn/post/6844904129987526663" target="_blank" rel="noopener noreferrer">连前端都看得懂的《Nginx 入门指南》<ExternalLinkIcon/></a></p>
<p>Nginx的基本操作：<a href="https://blog.csdn.net/leon_zeng0/article/details/108820360" target="_blank" rel="noopener noreferrer">Nginx 在Ubuntu上的安装，测试<ExternalLinkIcon/></a></p>
<p>Nginx是全球排名前三的服务器，并且近年来用户增长非常快。有人统计，世界上约有三分之一的网址采用了Nginx。在大型网站的架构中，Nginx被普遍使用，如 百度、阿里、腾讯、京东、网易、新浪、大疆等。Nginx 安装简单，配置简洁，作用却无可替代。</p>
<blockquote>
<p>“Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的<strong>反向代理</strong>和<strong>负载均衡</strong>。”</p>
</blockquote>
<p>这是大多数开发者对Nginx的定义。</p>
<p>Nginx 是一款http服务器 （或叫web服务器）。它是由俄罗斯人<code v-pre>伊戈尔·赛索耶夫</code>为俄罗斯访问量第二的 Rambler.ru站点开发的，并于2004年首次公开发布的。</p>
<blockquote>
<p>web服务器：负责处理和响应用户请求，一般也称为http服务器，如Apache、IIS、Nginx</p>
<p>应用服务器：存放和运行系统程序的服务器，负责处理程序中的业务逻辑，如Tomcat、Weblogic、Jboss（现在大多数应用服务器也包含了web服务器的功能）</p>
</blockquote>
<p>Nginx是什么，总结一下就是这些：</p>
<ul>
<li>一种轻量级的web服务器</li>
<li>设计思想是事件驱动的异步非阻塞处理（类node.js）</li>
<li>占用内存少、启动速度快、并发能力强</li>
<li>使用C语言开发</li>
<li>扩展性好，第三方插件非常多</li>
<li>在互联网项目中广泛应用</li>
</ul>
<h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3>
<p>Nginx默认配置文件简介：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 首尾配置暂时忽略</span>
server <span class="token punctuation">{</span>  
        <span class="token comment"># 当nginx接到请求后，会匹配其配置中的service模块</span>
        <span class="token comment"># 匹配方法就是将请求携带的host和port去跟配置中的server_name和listen相匹配</span>
        listen       <span class="token number">8080</span><span class="token punctuation">;</span>        
        server_name  localhost<span class="token punctuation">;</span> <span class="token comment"># 定义当前虚拟主机（站点）匹配请求的主机名</span>

        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span> <span class="token comment"># Nginx默认值</span>
            <span class="token comment"># 设定Nginx服务器返回的文档名</span>
            index  index.html index.htm<span class="token punctuation">;</span> <span class="token comment"># 先找根目录下的index.html，如果没有再找index.htm</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 首尾配置暂时忽略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server{ }其实是包含在http{ }内部的。每一个server{ }是一个虚拟主机（站点）。</p>
<p>上面代码块的意思是：当一个请求叫做<code v-pre>localhost:8080</code>请求Nginx服务器时，该请求就会被匹配进该代码块的 server{ }中执行。</p>
<p>当然Nginx的配置非常多，用的时候可以根据文档进行配置。</p>
<blockquote>
<p>英文文档：<a href="http://nginx.org/en/docs/" target="_blank" rel="noopener noreferrer">nginx.org/en/docs/<ExternalLinkIcon/></a></p>
<p>中文文档：<a href="https://www.nginx.cn/doc/" target="_blank" rel="noopener noreferrer">www.nginx.cn/doc/<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="nginx的应用" tabindex="-1"><a class="header-anchor" href="#nginx的应用" aria-hidden="true">#</a> Nginx的应用</h3>
<p>主要有4大应用。</p>
<h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4>
<p><strong>反向代理是什么？</strong></p>
<p>反向代理其实就类似你去找代购帮你买东西（浏览器或其他终端向nginx请求），你不用管他去哪里买，只要他帮你买到你想要的东西就行（浏览器或其他终端最终拿到了他想要的内容，但是具体从哪儿拿到的这个过程它并不知道）。</p>
<p><strong>反向代理的作用</strong></p>
<ol>
<li>保障应用服务器的安全（增加一层代理，可以屏蔽危险攻击，更方便的控制权限）</li>
<li>实现负载均衡（稍等~下面会讲）</li>
<li>实现跨域（号称是最简单的跨域方式）</li>
</ol>
<p><strong>配置反向代理</strong></p>
<p>配置一个简单的反向代理是很容易的，代码如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">8080</span><span class="token punctuation">;</span>        
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
    root   html<span class="token punctuation">;</span> <span class="token comment"># Nginx默认值</span>
    index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    proxy_pass http://localhost:8000<span class="token punctuation">;</span> <span class="token comment"># 反向代理配置，请求会被转发到8000端口</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反向代理的表现很简单。那上面的代码块来说，其实就是向nginx请求<code v-pre>localhost:8080</code>跟请求 <code v-pre>http://localhost:8000</code> 是一样的效果。（跟代购的原理一样）</p>
<p>这是一个反向代理最简单的模型，只是为了说明反向代理的配置。但是现实中反向代理多数是用在负载均衡中。</p>
<p>示意图如下：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/reverse-proxy.png" alt="reverse-proxy"></p>
<p>Nginx就是充当图中的proxy。左边的3个client在请求时向Nginx获取内容，是感受不到3台server存在的。</p>
<blockquote>
<p>此时，proxy就充当了3个server的反向代理。</p>
</blockquote>
<p>反向代理应用十分广泛，CDN服务就是反向代理经典的应用场景之一。除此之外，反向代理也是实现负载均衡的基础，很多大公司的架构都应用到了反向代理。</p>
<h4 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h4>
<p><strong>负载均衡是什么？</strong></p>
<p>随着业务的不断增长和用户的不断增多，一台服务已经满足不了系统要求了。这个时候就出现了服务器<a href="https://www.cnblogs.com/bhlsheji/p/4026296.html" target="_blank" rel="noopener noreferrer">集群<ExternalLinkIcon/></a>。</p>
<p>在服务器集群中，Nginx可以将接收到的客户端请求“均匀地”（严格讲并不一定均匀，可以通过设置权重）分配到这个集群中所有的服务器上。这个就叫做<strong>负载均衡</strong>。</p>
<p>负载均衡的示意图如下：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/load-balance.png" alt="load-balance"></p>
<p><strong>负载均衡的作用</strong></p>
<ul>
<li>分摊服务器集群压力</li>
<li>保证客户端访问的稳定性</li>
</ul>
<p>前面也提到了，负载均衡可以解决分摊服务器集群压力的问题。除此之外，Nginx还带有<strong>健康检查</strong>（服务器心跳检查）功能，会定期轮询向集群里的所有服务器发送健康检查请求，来检查集群中是否有服务器处于异常状态。</p>
<p>一旦发现某台服务器异常，那么在这以后代理进来的客户端请求都不会被发送到该服务器上（直到健康检查发现该服务器已恢复正常），从而保证客户端访问的稳定性。</p>
<p><strong>配置负载均衡</strong></p>
<p>配置一个简单的负载均衡并不复杂，代码如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 负载均衡：设置domain</span>
upstream domain <span class="token punctuation">{</span>
    server localhost:8000<span class="token punctuation">;</span>
    server localhost:8001<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>  
    listen       <span class="token number">8080</span><span class="token punctuation">;</span>        
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token comment"># root   html; # Nginx默认值</span>
        <span class="token comment"># index  index.html index.htm;</span>

        proxy_pass http://domain<span class="token punctuation">;</span> <span class="token comment"># 负载均衡配置，请求会被平均分配到8000和8001端口</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8000和8001是我本地用 Node.js 起的两个服务，负载均衡成功后可以看到访问 <code v-pre>localhost:8080</code>有时会访问到8000端口的页面，有时会访问到8001端口的页面。</p>
<p>能看到这个效果，就说明你配置的负载均衡策略生效了。</p>
<p>实际项目中的负载均衡远比这个案例要更加复杂，但是万变不离其宗，都是根据这个理想模型衍生出来的。</p>
<p>受集群单台服务器内存等资源的限制，负载均衡集群的服务器也不能无限增多。但因其良好的容错机制，负载均衡成为了实现<strong>高可用架构</strong>中必不可少的一环。</p>
<h3 id="安装、配置并运行nginx" tabindex="-1"><a class="header-anchor" href="#安装、配置并运行nginx" aria-hidden="true">#</a> 安装、配置并运行Nginx</h3>
<p>安装Ngnix：<code v-pre>sudo apt-get install nginx</code>。</p>
<p>安装了Ngnix之后，打开<code v-pre>/etc/nginx/sites-available/default</code>，然后修改默认的default为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
    	try_files <span class="token variable">$uri</span> @gunicorn_proxy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location @gunicorn_proxy <span class="token punctuation">{</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_redirect off<span class="token punctuation">;</span>
        proxy_pass http://127.0.0.1:8001<span class="token punctuation">;</span>
        proxy_connect_timeout 500s<span class="token punctuation">;</span>
        proxy_read_timeout 500s<span class="token punctuation">;</span>
        proxy_send_timeout 500s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好default.conf之后就启动Ngnix吧：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">service</span> nginx start
<span class="token comment"># 更改默认配置后用下面的命令热加载：</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok！到这一步，整个部署过程就搞定了！打开浏览器输入http://你的服务器ip看是否运行？</p>
<p>在本地打开：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/nginx-localhost-http.jpg" alt="nginx-localhost-http"></p>
<p>在局域网其他主机打开（<code v-pre>192.168.43.75</code>是其在局域网中的IP）：</p>
<p><img src="@source/docs/machine-learning/machine-learning-framework/tensorflow/tf_serving/pic/nginx-other-ip-http.jpg" alt="nginx-other-ip-http"></p>
<h2 id="supervisord" tabindex="-1"><a class="header-anchor" href="#supervisord" aria-hidden="true">#</a> supervisord</h2>
<p>安装supervisord：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>装成功后，会在<code v-pre>/etc/supervisor</code>目录下，生成<code v-pre>supervisord.conf</code>配置文件。</p>
<p>你也可以使用<code v-pre>echo_supervisord_conf &gt; supervisord.conf</code>命令，生成默认的配置文件（不建议，内容比较多，而且和下面的不一致，不要使用）。</p>
<p><code v-pre>supervisord.conf</code>示例配置（不要使用）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">;</span> supervisor config <span class="token function">file</span>

<span class="token punctuation">[</span>unix_http_server<span class="token punctuation">]</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/supervisor.sock   <span class="token punctuation">;</span> <span class="token punctuation">(</span>the path to the socket <span class="token function">file</span><span class="token punctuation">)</span>
<span class="token assign-left variable">chmod</span><span class="token operator">=</span>0700                      <span class="token punctuation">;</span> sockef <span class="token function">file</span> mode <span class="token punctuation">(</span>default 0700<span class="token punctuation">)</span>

<span class="token punctuation">[</span>supervisord<span class="token punctuation">]</span>
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/var/log/supervisor/supervisord.log <span class="token punctuation">;</span> <span class="token punctuation">(</span>main log <span class="token function">file</span><span class="token punctuation">;</span>default <span class="token variable">$CWD</span>/supervisord.log<span class="token punctuation">)</span>
<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/var/run/supervisord.pid <span class="token punctuation">;</span> <span class="token punctuation">(</span>supervisord pidfile<span class="token punctuation">;</span>default supervisord.pid<span class="token punctuation">)</span>
<span class="token assign-left variable">childlogdir</span><span class="token operator">=</span>/var/log/supervisor            <span class="token punctuation">;</span> <span class="token punctuation">(</span><span class="token string">'AUTO'</span> child log dir, default <span class="token variable">$TEMP</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span> the below section must remain <span class="token keyword">in</span> the config <span class="token function">file</span> <span class="token keyword">for</span> RPC
<span class="token punctuation">;</span> <span class="token punctuation">(</span>supervisorctl/web interface<span class="token punctuation">)</span> to work, additional interfaces may be
<span class="token punctuation">;</span> added by defining them <span class="token keyword">in</span> separate rpcinterface: sections
<span class="token punctuation">[</span>rpcinterface:supervisor<span class="token punctuation">]</span>
supervisor.rpcinterface_factory <span class="token operator">=</span> supervisor.rpcinterface:make_main_rpcinterface

<span class="token punctuation">[</span>supervisorctl<span class="token punctuation">]</span>
<span class="token assign-left variable">serverurl</span><span class="token operator">=</span>unix:///var/run/supervisor.sock <span class="token punctuation">;</span> use a unix:// URL  <span class="token keyword">for</span> a unix socket

<span class="token punctuation">;</span> The <span class="token punctuation">[</span>include<span class="token punctuation">]</span> section can just contain the <span class="token string">"files"</span> setting.  This
<span class="token punctuation">;</span> setting can list multiple files <span class="token punctuation">(</span>separated by whitespace or
<span class="token punctuation">;</span> newlines<span class="token punctuation">)</span>.  It can also contain wildcards.  The filenames are
<span class="token punctuation">;</span> interpreted as relative to this file.  Included files *cannot*
<span class="token punctuation">;</span> include files themselves.

<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> /etc/supervisor/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看最后一行，进程配置会读取<code v-pre>/etc/supervisor/conf.d</code>目录下的<code v-pre>*.conf</code>配置文件</p>
<p>安装完成之后，默认就启动了supervisor</p>
<p>查看supervisord是否在运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新增nginx进程配置文件" tabindex="-1"><a class="header-anchor" href="#新增nginx进程配置文件" aria-hidden="true">#</a> 新增Nginx进程配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容如下（不要使用）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">;</span>supervisor nginx config <span class="token function">file</span>

<span class="token punctuation">[</span>program:nginx<span class="token punctuation">]</span>  <span class="token punctuation">;</span>管理的子进程。后面的是名字，最好写的具有代表性，避免日后”认错“
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /usr/sbin/nginx <span class="token parameter variable">-g</span> <span class="token string">'daemon off;'</span>  <span class="token punctuation">;</span>我们的要启动进程的命令路径，可以带参数。
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>  <span class="token punctuation">;</span>子进程启动多少秒之后,此时状态如果是running,我们认为启动成功了,默认值1
<span class="token assign-left variable">startretries</span><span class="token operator">=</span><span class="token number">10</span>  <span class="token punctuation">;</span>当进程启动失败后，最大尝试的次数。当超过10次后，进程的状态变为FAIL，默认值3
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true  <span class="token punctuation">;</span>如果是true的话，子进程将在supervisord启动后被自动启动，默认就是true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true  <span class="token punctuation">;</span>设置子进程挂掉后自动重启的情况，有三个选项，false,unexpected和true。
				  <span class="token punctuation">;</span>false表示无论什么情况下，都不会被重新启动；
				  <span class="token punctuation">;</span>unexpected表示只有当进程的退出码不在下面的exitcodes里面定义的退出码的时候，才会被自动重启。
				  <span class="token punctuation">;</span>当为true的时候，只要子进程挂掉，将会被无条件的重启
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/nginx/stdout.log  <span class="token punctuation">;</span>日志
<span class="token assign-left variable">redirect_stderr</span><span class="token operator">=</span>true  <span class="token punctuation">;</span>如果设置为true，进程则会把标准错误输出到supervisord后台的标准输出文件描述符。
<span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">10</span>  <span class="token punctuation">;</span>权重，可以控制程序启动和关闭时的顺序，权重越低：越早启动，越晚关闭。默认值是999
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true  <span class="token punctuation">;</span>这个东西主要用于，supervisord管理的子进程，这个子进程本身还有子进程。
				  <span class="token punctuation">;</span>那么我们如果仅仅干掉supervisord的子进程的话，子进程的子进程有可能会变成孤儿进程。
				  <span class="token punctuation">;</span>所以可以设置这个选项，把整个该子进程的整个进程组干掉。默认false
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true  <span class="token punctuation">;</span>把整个该子进程的整个进程组干掉。默认false
<span class="token assign-left variable">stopsignal</span><span class="token operator">=</span>INT  <span class="token punctuation">;</span>进程停止信号，可以为<span class="token environment constant">TERM</span>, HUP, INT, QUIT, KILL, USR1等,默认为<span class="token environment constant">TERM</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：由于supervisor不能监控后台程序，<code v-pre>command = /usr/local/bin/nginx</code>这个命令默认是后台启动，
加上<code v-pre>-g ‘daemon off;'</code>这个参数可解决这问题，这个参数的意思是在前台运行。</p>
<p>上面那个配置太复杂了，主要是让你理解一下各参数的含义，<strong>实际用这个</strong>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:nginx<span class="token punctuation">]</span>
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /usr/sbin/nginx <span class="token parameter variable">-g</span> <span class="token string">'daemon off;'</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/nginx/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本就算是完成了，我们可以直接干掉Nginx，然后再启动supervisor就可以了，它会自动把Nginx启动起来。</p>
<p><strong>干掉Nginx</strong>：取消Nginx默认的开机自动启动服务，以启用supervisor来托管Nginx服务。</p>
<ul>
<li>
<p>关闭开机自动启动：<code v-pre>systemctl disable nginx</code></p>
</li>
<li>
<p>开机自动启动：<code v-pre>systemctl enable nginx</code></p>
</li>
</ul>
<p>加载配置并重启supervisor：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果上面这条命令不管用，还可以试试下面这两条命令：</p>
<blockquote>
<p>supervisord : supervisor的服务器端部分，用于supervisor启动</p>
<p>supervisorctl：启动supervisor的命令行窗口，在该命令行中可执行start、stop、status、reload等操作。</p>
<p><code v-pre>sudo supervisord -c /etc/supervisor/supervisord.conf</code></p>
<p><code v-pre>service supervisor restart</code> 记得<code v-pre>kill</code>原来服务。</p>
</blockquote>
<p>查看状态：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl status
<span class="token comment"># nginx     RUNNING   pid 2698, uptime 0:00:58</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>kill掉Nginx进程后会被supervisor重新拉起：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx  <span class="token comment"># 查看是否存在nginx进程</span>
<span class="token function">sudo</span> <span class="token function">killall</span> <span class="token parameter variable">-9</span> nginx  <span class="token comment"># 杀死所有nginx进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx  <span class="token comment"># 杀死后又被supervisor拉起，又存在nginx进程，只不过pid号变了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有问题，可以用此命令查看错误的原因：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl <span class="token function">tail</span> nginx stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="supervisorctl操作命令" tabindex="-1"><a class="header-anchor" href="#supervisorctl操作命令" aria-hidden="true">#</a> supervisorctl操作命令</h3>
<p>supervisorctl：启动supervisor的命令行窗口，在该命令行中可执行start、stop、status、reload等操作。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 更新新的配置到supervisord</span>
<span class="token function">sudo</span> supervisorctl update
<span class="token comment"># 重新启动配置中的所有程序</span>
<span class="token function">sudo</span> supervisorctl reload
<span class="token comment"># 查看正在守候的进程</span>
<span class="token function">sudo</span> supervisorctl status  <span class="token comment"># 或者</span>
<span class="token function">sudo</span> supervisorctl
<span class="token comment"># 停止某一进程 (program_name=你配置中写的程序名称)</span>
<span class="token function">sudo</span> supervisorctl stop program_name
<span class="token comment"># 重启某一进程 (program_name=你配置中写的程序名称)</span>
<span class="token function">sudo</span> supervisorctl restart program_name
<span class="token comment"># 停止全部进程</span>
<span class="token function">sudo</span> supervisorctl stop all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增gunicorn进程配置文件" tabindex="-1"><a class="header-anchor" href="#新增gunicorn进程配置文件" aria-hidden="true">#</a> 新增Gunicorn进程配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> gunicorn.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容如下（更全面详尽的Gunicorn配置可以看<a href="https://www.jianshu.com/p/69e75fc3e08e" target="_blank" rel="noopener noreferrer">gunicorn 详解<ExternalLinkIcon/></a>）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:gunicorn<span class="token punctuation">]</span>
directory <span class="token operator">=</span> /home/luwei/Desktop/flask/  <span class="token punctuation">;</span>test:app的test.py就在这个文件夹
<span class="token punctuation">;</span>注意：下面的gunicore的路径，要和conda环境相匹配，使用which gunicore查看路径
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /home/luwei/anaconda3/bin/gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/gunicorn/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加载配置并重启supervisor：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看状态：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl status
<span class="token comment"># gunicorn     RUNNING   pid 2817, uptime 0:00:37</span>
<span class="token comment"># nginx        RUNNING   pid 2816, uptime 0:00:37</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kill掉Gunicorn进程后同样会被supervisor重新拉起：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> gunicorn
<span class="token function">sudo</span> <span class="token function">killall</span> <span class="token parameter variable">-9</span> gunicorn
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> gunicorn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有问题，可以用此命令查看错误的原因：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl <span class="token function">tail</span> gunicorn stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="简单例子部署完成总结" tabindex="-1"><a class="header-anchor" href="#简单例子部署完成总结" aria-hidden="true">#</a> 简单例子部署完成总结</h2>
<p>至此，我们基本搭建完了，没有supervisord的话，本应该是运行Flask，用Gunicorn来调用Flask，然后Nginx来反向代理Gunicorn，所以，我们需要分别手动运行Gunicorn和Nginx：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app

<span class="token function">service</span> nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样不仅麻烦，而且一旦这两个进程被kill了，整个服务就中断了。为了解决这种情况，使用了supervisord进行启动，监控和拉起这两个进程，这样就非常稳定了。而且断电重新开机也不怕，因为supervisord服务会自启动。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 任务重加载并重启</span>
<span class="token function">sudo</span> supervisorctl reload
<span class="token comment"># 查看任务是否都被调用开启</span>
<span class="token function">sudo</span> supervisorctl
<span class="token comment"># 查看某个任务失败原因（以Nginx为例）</span>
<span class="token function">sudo</span> supervisorctl <span class="token function">tail</span> nginx stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="基于supervisor-nginx-gunicorn-flask-docker部署tfserving服务" tabindex="-1"><a class="header-anchor" href="#基于supervisor-nginx-gunicorn-flask-docker部署tfserving服务" aria-hidden="true">#</a> 基于supervisor+Nginx+Gunicorn+Flask+Docker部署TFserving服务</h1>
<p>我们之前分别熟悉了Docker和TFserving，也用一个简单的例子实现了supervisor+Nginx+Gunicorn+Flask，那么现在，该将这两个结合起来，用supervisor+Nginx+Gunicorn+Flask+Docker部署TFserving服务了。</p>
<p>注意：要注意python环境是匹配的，不然会提示缺少包或者tf版本不对，比如这里是tf1.14的，就需要</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> activate
conda activate tf1.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署模型" tabindex="-1"><a class="header-anchor" href="#部署模型" aria-hidden="true">#</a> 部署模型</h2>
<p>这里要用一个基于LSTM的中文评论情感分类模型（基于TF1.14版本）作为例子，可以直接在github上下载：<a href="https://github.com/linguishi/chinese_sentiment/tree/master/model/lstm/saved_model" target="_blank" rel="noopener noreferrer">linguishi/<strong>chinese_sentiment</strong><ExternalLinkIcon/></a>，要将包含模型数据（pd格式）的数字名字（时间戳）的文件夹放在<code v-pre>/home/luwei/Desktop/flask/saved_model</code>路径下，docker会自动找最新的数字文件夹名进行加载。</p>
<h2 id="部署docker" tabindex="-1"><a class="header-anchor" href="#部署docker" aria-hidden="true">#</a> 部署Docker</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装docker</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io
<span class="token comment"># 拉取TFserving镜像</span>
<span class="token function">docker</span> pull tensorflow/serving:1.14.0

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/home/luwei/Desktop/flask/saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署flask" tabindex="-1"><a class="header-anchor" href="#部署flask" aria-hidden="true">#</a> 部署Flask</h2>
<p>一方面是要部署Flask，另一方面是Flask使用gRPC请求TFserving进行预测，所以会有两个python文件，均在<code v-pre>/home/luwei/Desktop/flask</code>路径下。</p>
<p>使用gRPC请求TFserving进行预测：<code v-pre>tf_serving_grpc_text.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*-coding:utf-8 -*-</span>
<span class="token keyword">import</span> grpc
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># C:\Users\luwei\Anaconda3\envs\tf14\Scripts\pip install tensorflow_serving_api</span>
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>apis <span class="token keyword">import</span> model_service_pb2_grpc<span class="token punctuation">,</span> model_management_pb2<span class="token punctuation">,</span> get_model_status_pb2<span class="token punctuation">,</span> predict_pb2<span class="token punctuation">,</span> prediction_service_pb2_grpc
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>config <span class="token keyword">import</span> model_server_config_pb2
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>util <span class="token keyword">import</span> make_tensor_proto
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>core<span class="token punctuation">.</span>framework <span class="token keyword">import</span> types_pb2


serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token punctuation">:</span> <span class="token string">"127.0.0.1:8500"</span><span class="token punctuation">,</span>
    <span class="token string">"max_message_length"</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token string">"timeout"</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token string">"signature_name"</span><span class="token punctuation">:</span> <span class="token string">"serving_default"</span><span class="token punctuation">,</span>
    <span class="token string">"model_name"</span><span class="token punctuation">:</span> <span class="token string">"lstm"</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">predict_test</span><span class="token punctuation">(</span>batch_size<span class="token punctuation">,</span> serving_config<span class="token punctuation">,</span> input_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    <span class="token comment"># Creating random images for given batch size</span>
    <span class="token comment"># input_data_words = ["很", "喜欢"]</span>
    <span class="token comment"># input_data_nwords = 2</span>
    input_data_words <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"words"</span><span class="token punctuation">]</span>
    input_data_nwords <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"nwords"</span><span class="token punctuation">]</span>

    request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_words<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_STRING))</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_nwords<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_INT32))</span>
    result <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">"很"</span><span class="token punctuation">,</span> <span class="token string">"喜欢"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署Flask：<code v-pre>flask_grpc.py</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token function">import</span> grpc
from flask <span class="token function">import</span> Flask
from flask <span class="token function">import</span> request
<span class="token function">import</span> json
<span class="token function">import</span> numpy as np
from <span class="token function">time</span> <span class="token function">import</span> <span class="token function">sleep</span>
from tf_serving_grpc_text <span class="token function">import</span> serving_config, predict_test

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


@app.route<span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
def hello<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token builtin class-name">return</span> <span class="token string">"Hello World!"</span>


@app.route<span class="token punctuation">(</span><span class="token string">"/predict"</span>, <span class="token assign-left variable">methods</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"GET"</span>, <span class="token string">"POST"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
def predict<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token comment"># flask url中参数 https://zhuanlan.zhihu.com/p/43656865</span>
    print<span class="token punctuation">(</span><span class="token string">"request.method ="</span>, request.method<span class="token punctuation">)</span>
    <span class="token keyword">if</span> request.method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token builtin class-name">:</span>  <span class="token comment"># get方法 /predict?words=["非常","喜欢"]&amp;nwords=2</span>
        data <span class="token operator">=</span> request.args.to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> request.method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token builtin class-name">:</span>
        data <span class="token operator">=</span> request.get_json<span class="token punctuation">(</span>force<span class="token operator">=</span>True<span class="token punctuation">)</span>
    else:
        <span class="token builtin class-name">return</span> <span class="token string">"ERROR: request.method is not GET or POST!"</span>
    print<span class="token punctuation">(</span><span class="token string">"data = "</span>, data<span class="token punctuation">)</span>

    ret_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"status"</span><span class="token builtin class-name">:</span> -1<span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token string">'words'</span> <span class="token keyword">in</span> data and <span class="token string">'nwords'</span> <span class="token keyword">in</span> data:
        ret_data<span class="token punctuation">[</span><span class="token string">"status"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    else:
        <span class="token builtin class-name">return</span> ret_data

	<span class="token keyword">if</span> request.method <span class="token operator">!=</span> <span class="token string">'POST'</span><span class="token builtin class-name">:</span>
    	data<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span> <span class="token operator">=</span> eval<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    	data<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span> <span class="token operator">=</span> eval<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span><span class="token number">1</span>, serving_config, data<span class="token punctuation">)</span>

    ret_data<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span> <span class="token operator">=</span> predict_result.outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span>.int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    ret_data<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span> <span class="token operator">=</span> predict_result.outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span>.string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ret_data<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> predict_result.outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span>.float_val<span class="token punctuation">]</span>

    print<span class="token punctuation">(</span><span class="token string">"ret_data ="</span>, ret_data<span class="token punctuation">)</span>
    <span class="token builtin class-name">return</span> ret_data


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token builtin class-name">:</span>
    <span class="token comment"># flask原生服务</span>
    app.run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">"0.0.0.0"</span>, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">5100</span>, <span class="token assign-left variable">debug</span><span class="token operator">=</span>True, <span class="token assign-left variable">threaded</span><span class="token operator">=</span>True<span class="token punctuation">)</span>  <span class="token comment"># threaded默认为True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署gunicorn" tabindex="-1"><a class="header-anchor" href="#部署gunicorn" aria-hidden="true">#</a> 部署Gunicorn</h2>
<p>这里不用手动部署，在之后的<code v-pre>supervisor</code>会自动调用。</p>
<p>但可以看看手动该怎么部署，<strong>下列代码仅供看看，不需要部署</strong>！</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>cd <span class="token operator">/</span>home<span class="token operator">/</span>luwei<span class="token operator">/</span>Desktop<span class="token operator">/</span>flask<span class="token operator">/</span>
<span class="token comment"># 注意，下面的gunicore要和conda环境相对应！！！</span>
<span class="token operator">/</span>home<span class="token operator">/</span>luwei<span class="token operator">/</span>anaconda3<span class="token operator">/</span>envs<span class="token operator">/</span>tf1<span class="token punctuation">.</span><span class="token number">14</span><span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>gunicorn <span class="token operator">-</span>w <span class="token number">4</span> <span class="token operator">-</span>b <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">:</span><span class="token number">8001</span> flask_grpc<span class="token punctuation">:</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署nginx" tabindex="-1"><a class="header-anchor" href="#部署nginx" aria-hidden="true">#</a> 部署Nginx</h2>
<p>安装Ngnix：<code v-pre>sudo apt-get install nginx</code>。</p>
<p>安装了Ngnix之后，打开<code v-pre>/etc/nginx/sites-available/default</code>，然后修改默认的default为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
    	try_files <span class="token variable">$uri</span> @gunicorn_proxy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location @gunicorn_proxy <span class="token punctuation">{</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_redirect off<span class="token punctuation">;</span>
        proxy_pass http://127.0.0.1:8001<span class="token punctuation">;</span>
        proxy_connect_timeout 500s<span class="token punctuation">;</span>
        proxy_read_timeout 500s<span class="token punctuation">;</span>
        proxy_send_timeout 500s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署supervisor" tabindex="-1"><a class="header-anchor" href="#部署supervisor" aria-hidden="true">#</a> 部署supervisor</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>装成功后，会在<code v-pre>/etc/supervisor</code>目录下，生成<code v-pre>supervisord.conf</code>配置文件，如果没有生成，或者生成内容和下面的不一致，建议改为下面的。</p>
<p><code v-pre>supervisord.conf</code>示例配置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">;</span> supervisor config <span class="token function">file</span>

<span class="token punctuation">[</span>unix_http_server<span class="token punctuation">]</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span>/var/run/supervisor.sock   <span class="token punctuation">;</span> <span class="token punctuation">(</span>the path to the socket <span class="token function">file</span><span class="token punctuation">)</span>
<span class="token assign-left variable">chmod</span><span class="token operator">=</span>0700                      <span class="token punctuation">;</span> sockef <span class="token function">file</span> mode <span class="token punctuation">(</span>default 0700<span class="token punctuation">)</span>

<span class="token punctuation">[</span>supervisord<span class="token punctuation">]</span>
<span class="token assign-left variable">logfile</span><span class="token operator">=</span>/var/log/supervisor/supervisord.log <span class="token punctuation">;</span> <span class="token punctuation">(</span>main log <span class="token function">file</span><span class="token punctuation">;</span>default <span class="token variable">$CWD</span>/supervisord.log<span class="token punctuation">)</span>
<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/var/run/supervisord.pid <span class="token punctuation">;</span> <span class="token punctuation">(</span>supervisord pidfile<span class="token punctuation">;</span>default supervisord.pid<span class="token punctuation">)</span>
<span class="token assign-left variable">childlogdir</span><span class="token operator">=</span>/var/log/supervisor            <span class="token punctuation">;</span> <span class="token punctuation">(</span><span class="token string">'AUTO'</span> child log dir, default <span class="token variable">$TEMP</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span> the below section must remain <span class="token keyword">in</span> the config <span class="token function">file</span> <span class="token keyword">for</span> RPC
<span class="token punctuation">;</span> <span class="token punctuation">(</span>supervisorctl/web interface<span class="token punctuation">)</span> to work, additional interfaces may be
<span class="token punctuation">;</span> added by defining them <span class="token keyword">in</span> separate rpcinterface: sections
<span class="token punctuation">[</span>rpcinterface:supervisor<span class="token punctuation">]</span>
supervisor.rpcinterface_factory <span class="token operator">=</span> supervisor.rpcinterface:make_main_rpcinterface

<span class="token punctuation">[</span>supervisorctl<span class="token punctuation">]</span>
<span class="token assign-left variable">serverurl</span><span class="token operator">=</span>unix:///var/run/supervisor.sock <span class="token punctuation">;</span> use a unix:// URL  <span class="token keyword">for</span> a unix socket

<span class="token punctuation">;</span> The <span class="token punctuation">[</span>include<span class="token punctuation">]</span> section can just contain the <span class="token string">"files"</span> setting.  This
<span class="token punctuation">;</span> setting can list multiple files <span class="token punctuation">(</span>separated by whitespace or
<span class="token punctuation">;</span> newlines<span class="token punctuation">)</span>.  It can also contain wildcards.  The filenames are
<span class="token punctuation">;</span> interpreted as relative to this file.  Included files *cannot*
<span class="token punctuation">;</span> include files themselves.

<span class="token punctuation">[</span>include<span class="token punctuation">]</span>
files <span class="token operator">=</span> /etc/supervisor/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看最后一行，进程配置会读取<code v-pre>/etc/supervisor/conf.d</code>目录下的<code v-pre>*.conf</code>配置文件。所有接下来会在该目录下配置各种需要被拉起运行的配置文件，如docker，Flask，Gunicorn，Nginx等。</p>
<p>安装完成之后，默认就启动了supervisor</p>
<p>查看supervisord是否在运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新增docker进程配置文件" tabindex="-1"><a class="header-anchor" href="#新增docker进程配置文件" aria-hidden="true">#</a> 新增Docker进程配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>docker.conf</code>的内容为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:docker<span class="token punctuation">]</span>
<span class="token builtin class-name">command</span> <span class="token operator">=</span> <span class="token function">sudo</span> <span class="token function">docker</span> start 95b865738693
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/docker/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，其中<code v-pre>stdout_logfile=/var/log/docker/stdout.log</code>需要提前创建<code v-pre>sudo mkdir /var/log/docker</code>。</p>
<p>本来commend里是这句话，但是这个只适合第一次运行，之后再运行，就只需要直接<code v-pre>docker start 容器ID</code>就行了（怎么看容器ID：<code v-pre>sudo docker ps -a</code>）。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">=</span> <span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/home/luwei/Desktop/flask/saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然也可以试试<a href="https://blog.csdn.net/qq_40308101/article/details/108823854" target="_blank" rel="noopener noreferrer">docker-重启linux机器后Docker服务及容器自动启动<ExternalLinkIcon/></a>，可以的话就不需要通过supervisor来启动了。</p>
<h3 id="新增gunicorn进程配置文件-1" tabindex="-1"><a class="header-anchor" href="#新增gunicorn进程配置文件-1" aria-hidden="true">#</a> 新增Gunicorn进程配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> gunicorn.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:gunicorn<span class="token punctuation">]</span>
directory <span class="token operator">=</span> /home/luwei/Desktop/flask/
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /home/luwei/anaconda3/envs/tf1.14/bin/gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 flask_grpc:app
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/gunicorn/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>上面command里的gunicore的路径，要和conda环境相匹配，使用which gunicore查看路径，不然就出错。</li>
<li>上面的directory，是command所运行的flask_grpc.py所在文件夹地址，意思是先cd到该文件夹下，再运行flask_grpc.py中的app，不然找不到要运行的文件路径。</li>
</ul>
<h3 id="新增nginx进程配置文件-1" tabindex="-1"><a class="header-anchor" href="#新增nginx进程配置文件-1" aria-hidden="true">#</a> 新增Nginx进程配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：由于supervisor不能监控后台程序，<code v-pre>command = /usr/local/bin/nginx</code>这个命令默认是后台启动，
加上<code v-pre>-g ‘daemon off;'</code>这个参数可解决这问题，这个参数的意思是在前台运行。</p>
<p>上面那个配置太复杂了，主要是让你理解一下各参数的含义，实际用这个：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:nginx<span class="token punctuation">]</span>
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /usr/sbin/nginx <span class="token parameter variable">-g</span> <span class="token string">'daemon off;'</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/nginx/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本就算是完成了。</p>
<h2 id="部署完成总结" tabindex="-1"><a class="header-anchor" href="#部署完成总结" aria-hidden="true">#</a> 部署完成总结</h2>
<p>至此，我们基本搭建完了。没有supervisord的话，本应该是运行docker，Flask调用docker的tfserving，用Gunicorn来调用Flask，然后Nginx来反向代理Gunicorn，所以，我们本来需要分别手动运行Docker，Gunicorn和Nginx：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 运行docker容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">"lstm"</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>D:<span class="token punctuation">\</span>code<span class="token punctuation">\</span>PycharmProject<span class="token punctuation">\</span>tf_model<span class="token punctuation">\</span>sentiment-analysis<span class="token punctuation">\</span>v1_lstm_csv<span class="token punctuation">\</span>saved_model,target<span class="token operator">=</span>/models/lstm <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODEL_NAME</span><span class="token operator">=</span>lstm <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token string">"&amp;"</span>
<span class="token comment"># 运行gunicorn</span>
gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 test:app
<span class="token comment"># 运行nginx</span>
<span class="token function">service</span> nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样不仅麻烦，而且一旦这两个进程被kill了，整个服务就中断了。为了解决这种情况，使用了supervisord进行启动，监控和拉起这两个进程，这样就非常稳定了。而且断电重新开机也不怕，因为supervisord服务会自启动。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 任务重加载并重启</span>
<span class="token function">sudo</span> supervisorctl reload
<span class="token comment"># 查看任务是否都被调用开启</span>
<span class="token function">sudo</span> supervisorctl
<span class="token comment"># 查看某个任务失败原因（以Nginx为例）</span>
<span class="token function">sudo</span> supervisorctl <span class="token function">tail</span> nginx stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可在浏览器里输入（注：下面的<code v-pre>192.168.43.75</code>需要替换成你的id）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://192.168.43.75/predict?words=["非常","喜欢"]&amp;nwords=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可得：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"classes_id"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"labels"</span><span class="token operator">:</span><span class="token string">"POS"</span><span class="token punctuation">,</span>
    <span class="token property">"softmax"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0.00007</span><span class="token punctuation">,</span><span class="token number">0.99970</span><span class="token punctuation">,</span><span class="token number">0.00023</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"status"</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功！</p>
<h2 id="基于python的客户端请求" tabindex="-1"><a class="header-anchor" href="#基于python的客户端请求" aria-hidden="true">#</a> 基于python的客户端请求</h2>
<p>之前我们请求web服务只能在网页里手动输入网址或者用curl命令来请求，但是这并不灵活，如果我们要批量化请求，并有复杂的逻辑或处理需求，就要用python了，具体如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">import</span> time

data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"非常"</span><span class="token punctuation">,</span> <span class="token string">"满意"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

requests_type <span class="token operator">=</span> <span class="token string">"POST"</span>  <span class="token comment"># "POST" "GET"</span>
<span class="token keyword">if</span> requests_type <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">:</span>
    <span class="token comment"># headers = {'content-type': 'application/json'}</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://192.168.43.75/predict"</span><span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># , headers=headers)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"http://192.168.43.75/predict?words=[\"非常\",\"开心\"]&amp;nwords=2"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># exit(0)</span>

<span class="token comment"># 看单次请求耗时</span>
t1 <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
total_num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>total_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://192.168.43.75/predict"</span><span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># , headers=headers)</span>
    <span class="token comment"># print(r.json())</span>
dt <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t1
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"单次请求耗时"</span><span class="token operator">+</span><span class="token string">"%.4f毫秒"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>dt <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">/</span> total_num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">"words"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"<span class="token entity" title="\u975e">\u975e</span><span class="token entity" title="\u5e38">\u5e38</span>"</span>, <span class="token string">"<span class="token entity" title="\u6ee1">\u6ee1</span><span class="token entity" title="\u610f">\u610f</span>"</span><span class="token punctuation">]</span>, <span class="token string">"nwords"</span><span class="token builtin class-name">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token string">'classes_id'</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">'labels'</span><span class="token builtin class-name">:</span> <span class="token string">'POS'</span>, <span class="token string">'softmax'</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">7</span>.197532977443188e-05, <span class="token number">0.9996980428695679</span>, <span class="token number">0.00022995276958681643</span><span class="token punctuation">]</span>, <span class="token string">'status'</span><span class="token builtin class-name">:</span> <span class="token number">0</span><span class="token punctuation">}</span>

单次请求耗时13.7985毫秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个单次耗时好像要比压测的高很多啊。。。不知道为啥。</p>
<h2 id="用ab压测" tabindex="-1"><a class="header-anchor" href="#用ab压测" aria-hidden="true">#</a> 用ab压测</h2>
<p>网站性能压力测试是服务器网站性能调优过程中必不可缺少的一环。只有让服务器处在高压情况下，才能真正体现出软件、硬件等各种设置不当所暴露出的问题。</p>
<p>性能测试工具目前最常见的有以下几种：ab、http_load、webbench、siege。今天我们专门来介绍ab。</p>
<p>ab是apache自带的压力测试工具。ab非常实用，它不仅可以对apache服务器进行网站访问压力测试，也可以对或其它类型的服务器进行压力测试。比如nginx、tomcat、IIS等。</p>
<p>apache的ab工具也算是一种ddos攻击工具</p>
<h3 id="ab原理" tabindex="-1"><a class="header-anchor" href="#ab原理" aria-hidden="true">#</a> ab原理</h3>
<p>ab是apachebench命令的缩写。</p>
<p>ab的原理：ab命令会创建多个并发访问线程，模拟多个访问者同时对某一URL地址进行访问。它的测试目标是基于URL的，因此，它既可以用来测试apache的负载压力，也可以测试nginx、lighthttp、tomcat、IIS等其它Web服务器的压力。</p>
<p>ab命令对发出负载的计算机要求很低，它既不会占用很高CPU，也不会占用很多内存。但却会给目标服务器造成巨大的负载，其原理类似CC攻击。自己测试使用也需要注意，否则一次上太多的负载。可能造成目标服务器资源耗完，严重时甚至导致死机。</p>
<p>安装ab压测工具：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apache2-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="服务器qps预估" tabindex="-1"><a class="header-anchor" href="#服务器qps预估" aria-hidden="true">#</a> 服务器qps预估</h3>
<p>假如想要建设一个能承受500万PV/每天的网站，服务器每秒要处理多少个请求才能应对？如何计算？</p>
<p><strong>计算模型</strong></p>
<p>每台服务器每秒处理请求的数量=((80%*总PV量) / (24小时*60分*60秒*40%)) / 服务器数量 。</p>
<p>注：其中关键的参数是80%、40%。表示一天中有80%的请求发生在一天的40%的时间内。24小时的40%是9.6小时，有80%的请求发生一天的9.6个小时当中（很适合互联网的应用，白天请求多，晚上请求少）。</p>
<p><strong>简单计算的结果</strong></p>
<p>((80%*500万) / (24小时*60分*60秒*40%)) / 1 = 115.7个请求/秒</p>
<p>((80%*100万) / (24小时*60分*60秒*40%)) / 1 = 23.1个请求/秒</p>
<p><strong>初步结论</strong></p>
<p>现在我们在做压力测试时，就有了标准，如果你的服务器一秒能处理115.7个请求，就可以承受500万PV/每天。如果你的服务器一秒能处理23.1个请求，就可以承受100万PV/每天。</p>
<p><strong>留足余量</strong></p>
<p>以上请求数量是均匀的分布在白天的9.6个小时中，但实际情况并不会这么均匀的分布，会有高峰有低谷。为了应对高峰时段，应该留一些余地，最少也要x2倍，x3倍也不为过。</p>
<p>115.7个请求/秒 *2倍=231.4个请求/秒</p>
<p>115.7个请求/秒 *3倍=347.1个请求/秒</p>
<p>23.1个请求/秒 *2倍=46.2个请求/秒</p>
<p>23.1个请求/秒 *3倍=69.3个请求/秒</p>
<p><strong>最终结论</strong></p>
<p>如果你的服务器一秒能处理231.4--347.1个请求/秒，就可以应对平均500万PV/每天。</p>
<p>如果你的服务器一秒能处理46.2--69.3个请求，就可以应对平均100万PV/每天。</p>
<h3 id="对模型进行测试" tabindex="-1"><a class="header-anchor" href="#对模型进行测试" aria-hidden="true">#</a> 对模型进行测试</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ab <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">"讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># -n    100表示请求总数为1000</span>
<span class="token comment"># -c    10表示并发用户数为10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回（会挑选最重要的三个指标进行讲解）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Benchmarking <span class="token number">192.168</span>.43.75 <span class="token punctuation">(</span>be patient<span class="token punctuation">)</span>
Completed <span class="token number">100</span> requests
Completed <span class="token number">500</span> requests
Completed <span class="token number">1000</span> requests
Finished <span class="token number">1000</span> requests

Server Software:        nginx/1.10.3  <span class="token comment"># apache版本 </span>
Server Hostname:        <span class="token number">192.168</span>.43.75  <span class="token comment"># 请求的机子 </span>
Server Port:            <span class="token number">80</span>  <span class="token comment"># 请求端口</span>

Document Path:          /predict?words<span class="token operator">=</span><span class="token punctuation">[</span>非常,讨厌<span class="token punctuation">]</span>
Document Length:        <span class="token number">14</span> bytes  <span class="token comment"># 页面长度</span>

Concurrency Level:      <span class="token number">10</span>  <span class="token comment"># 并发数</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">0.913</span> seconds  <span class="token comment"># 共使用了多少时间</span>
Complete requests:      <span class="token number">1000</span>  <span class="token comment"># 请求数</span>
Failed requests:        <span class="token number">0</span>  <span class="token comment"># 失败请求</span>
Total transferred:      <span class="token number">172000</span> bytes  <span class="token comment"># 总共传输字节数，包含http的头信息等</span>
HTML transferred:       <span class="token number">14000</span> bytes  <span class="token comment"># html字节数，实际的页面传递字节数</span>
Requests per second:    <span class="token number">1095.71</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)  # 每秒多少请求，这个是非常重要的参数数值，服务器的吞吐量</span>
Time per request:       <span class="token number">9.127</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>  <span class="token comment"># 用户平均请求等待时间</span>
Time per request:       <span class="token number">0.913</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>  <span class="token comment"># 服务器平均处理时间</span>
Transfer rate:          <span class="token number">184.04</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received  <span class="token comment"># 每秒获取的数据长度</span>

Connection Times <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
              min  mean<span class="token punctuation">[</span>+/-sd<span class="token punctuation">]</span> median   max
Connect:        <span class="token number">0</span>    <span class="token number">0</span>   <span class="token number">0.3</span>      <span class="token number">0</span>       <span class="token number">3</span>
Processing:     <span class="token number">1</span>    <span class="token number">9</span>   <span class="token number">2.7</span>      <span class="token number">8</span>      <span class="token number">19</span>
Waiting:        <span class="token number">0</span>    <span class="token number">9</span>   <span class="token number">2.7</span>      <span class="token number">8</span>      <span class="token number">19</span>
Total:          <span class="token number">3</span>    <span class="token number">9</span>   <span class="token number">2.7</span>      <span class="token number">8</span>      <span class="token number">19</span>

Percentage of the requests served within a certain <span class="token function">time</span> <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
  <span class="token number">50</span>%      <span class="token number">8</span>  <span class="token comment"># 50%的请求在8ms内返回</span>
  <span class="token number">66</span>%      <span class="token number">9</span>  <span class="token comment"># 66%的请求在9ms内返回</span>
  <span class="token number">75</span>%     <span class="token number">10</span>
  <span class="token number">80</span>%     <span class="token number">11</span>
  <span class="token number">90</span>%     <span class="token number">13</span>
 <span class="token number">100</span>%     <span class="token number">19</span> <span class="token punctuation">(</span>longest request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中这三个指标最重要：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Requests per second: <span class="token number">1095.71</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)  # 每秒多少请求，是非常重要的参数数值，服务器的吞吐量</span>
Time per request: <span class="token number">9.127</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>  <span class="token comment"># 用户平均请求等待时间</span>
Time per request: <span class="token number">0.913</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>  <span class="token comment"># 服务器平均处理时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Requests per second：qps，每秒能处理多少请求。Requests per second吞吐率越高，服务器性能越好。</li>
<li>Time per request：<strong>站在用户角度</strong>，每个用户平均请求等待时间，比如处理一个请求需要1ms，有十个用户同时发生请求，则每个用户一次请求需要10ms。如何理解呢？公平情况下，10个用户排成队，依次发送一个请求，用户此次发送请求完之后，要等其余九个人发送完后才能发送第二次，则每个用户可以发送的请求的间隔为用户的人数，也就是并发数。</li>
<li>Time per request(across all concurrent requests)：<strong>站在服务器角度</strong>，服务器平均处理时间，比如处理一个请求需要1ms</li>
</ul>
<p>我们分多次用不同的并发数和请求量测试，<strong>请求时间基本差不多在0.9ms左右</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ab <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-c</span> <span class="token number">1</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">"讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
Concurrency Level:      <span class="token number">1</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">0.955</span> seconds
Complete requests:      <span class="token number">1000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">172000</span> bytes
HTML transferred:       <span class="token number">14000</span> bytes
Requests per second:    <span class="token number">1046.85</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">0.955</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">0.955</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">175.84</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

ab <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">"讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
Concurrency Level:      <span class="token number">10</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">0.900</span> seconds
Complete requests:      <span class="token number">1000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">172000</span> bytes
HTML transferred:       <span class="token number">14000</span> bytes
Requests per second:    <span class="token number">1111.41</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">8.998</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">0.900</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">186.68</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

ab <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-c</span> <span class="token number">100</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">"讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
Concurrency Level:      <span class="token number">100</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">0.908</span> seconds
Complete requests:      <span class="token number">1000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">172000</span> bytes
HTML transferred:       <span class="token number">14000</span> bytes
Requests per second:    <span class="token number">1100.97</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">90.829</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">0.908</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">184.93</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

ab <span class="token parameter variable">-n</span> <span class="token number">10000</span> <span class="token parameter variable">-c</span> <span class="token number">1</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">" 讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
Concurrency Level:      <span class="token number">1</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">8.168</span> seconds
Complete requests:      <span class="token number">10000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">1720000</span> bytes
HTML transferred:       <span class="token number">140000</span> bytes
Requests per second:    <span class="token number">1224.30</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">0.817</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">0.817</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">205.64</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

ab <span class="token parameter variable">-n</span> <span class="token number">10000</span> <span class="token parameter variable">-c</span> <span class="token number">100</span> http://192.168.43.75/predict?words<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"非常"</span>,<span class="token string">" 讨厌"</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token assign-left variable">nwords</span><span class="token operator">=</span><span class="token number">2</span>
Concurrency Level:      <span class="token number">100</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">7.547</span> seconds
Complete requests:      <span class="token number">10000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">1720000</span> bytes
HTML transferred:       <span class="token number">140000</span> bytes
Requests per second:    <span class="token number">1325.05</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">75.469</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">0.755</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">222.57</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多模型在线部署" tabindex="-1"><a class="header-anchor" href="#多模型在线部署" aria-hidden="true">#</a> 多模型在线部署</h2>
<h3 id="多模型部署" tabindex="-1"><a class="header-anchor" href="#多模型部署" aria-hidden="true">#</a> 多模型部署</h3>
<p>前面介绍的Tensorflow serving启动服务时，会将我们的模型服务放到服务器端口，那么如果我们需要将多个模型同时放到该端口该怎么做呢？例如我们需要将dog-cat分类模型、目标检测模型同时放到端口上，用户可以根据具体地址来访问端口的不同模型，这时候就需要多模型部署了。</p>
<p>多模型部署与前面的模型部署步骤大致相同，就是多了一个多模型配置文件，这里用我的模型做为例子。我需要将两个模型部署到端口上，具体如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>multi_models/
├── cv_sod
│   └── <span class="token number">1609392632</span>
│       ├── saved_model.pb
│       └── variables
│           ├── variables.data-00000-of-00001
│           └── variables.index
├── lstm
│   └── <span class="token number">1609392632</span>
│       ├── assets
│       │   ├── vocab.labels.txt
│       │   └── vocab.words.txt
│       ├── saved_model.pb
│       └── variables
│           ├── variables.data-00000-of-00001
│           └── variables.index
└── models.config

<span class="token number">7</span> directories, <span class="token number">9</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多模型配置文件（文件名models.config）：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>model_config_list<span class="token operator">:</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"cv_sod"</span><span class="token punctuation">,</span>
    base_path<span class="token operator">:</span> <span class="token string">"/models/cv_sod"</span><span class="token punctuation">,</span>
    model_platform<span class="token operator">:</span> <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"lstm"</span><span class="token punctuation">,</span>
    base_path<span class="token operator">:</span> <span class="token string">"/models/lstm"</span><span class="token punctuation">,</span>
    model_platform<span class="token operator">:</span> <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：
– <code v-pre>name</code> 相当于第一种方式中的<code v-pre>MODEL_NAME</code>
– <code v-pre>base_path</code> 是在tensorflow/serving的docker容器中的路径
– <code v-pre>model_version_policy</code> 说明我们要加载的模型版本，比如当前配置加载版本1和版本2。</p>
<p>目前能找到的运行容器的方法有两种，区别在于共享主机路径设置上，Docker官方网站上说使用–mount进行设置会更灵活，不过Tensorflow官方文档上用的是第二种，所以随便选一种就好。</p>
<p><strong>方法一：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span> multi_models <span class="token punctuation">\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/home/luwei/Desktop/multi_models/,target<span class="token operator">=</span>/models/ <span class="token punctuation">\</span>
    <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file</span><span class="token operator">=</span>/models/models.config <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file_poll_wait_seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>-p</code>: 设定映射端口，默认tensorflow serving的8500端口是对gRPC开放，8501是对REST API开放，8501:8501即（主机端口:容器端口），如果不进行设定，则都是默认端口。</p>
<p><code v-pre>--name</code>: 容器名字，可以被替换成任意字符串，方便对后期容器进行操作。</p>
<p><code v-pre>--mount</code>: 使用挂载模式。</p>
<p><code v-pre>type</code>: 设置绑定的方式，共有三种，bind，volume，tmpfs，只有bind可以和主机共享文件夹并且通过主机修改，具体区别参见链接。</p>
<p><code v-pre>source</code>: 主机需要共享的文件夹路径。</p>
<p><code v-pre>target</code>: docker容器内共享文件夹路径，注意，不要修改target里的名称，即models。</p>
<p><code v-pre>-t</code>: 让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上，在其他应用中经常和 -i 搭配使用，后者是为了让容器的标准输入保持打开，即以互动模式运行。</p>
<p><code v-pre>tensorflow/serving</code>: 使用的镜像名。</p>
<p><code v-pre>--model_config_file</code>: 指定configure file的路径，注意是共享到容器内的路径，不是主机的路径。</p>
<p><code v-pre>&amp;</code>: 用于连接多个run，这是tensorflow官方文档用于退出docker容器运行界面并保持后台运行的方法。</p>
<p><strong>方法二：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span> multi_models <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> <span class="token string">"/home/luwei/Desktop/multi_models/:/models/"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file</span><span class="token operator">=</span>/models/models.config <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file_poll_wait_seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>-v</code>: 共享主机的某个文件夹，使得该文件夹下的文件自动被复制到docker容器的指定文件夹内。</p>
<p><code v-pre>--rm</code>: 在执行结束后删除该容器。</p>
<p><code v-pre>-p</code>: 设定映射端口，8501:8501即（主机端口:容器端口）。</p>
<p><code v-pre>-t</code>: 在终端上运行，对应的还有-i，指使用交互式操作。</p>
<p><code v-pre>tensorflow/serving</code>: 使用的镜像名。</p>
<p><code v-pre>--model_config_file</code>: 指定configure file的路径。</p>
<p><code v-pre>--model_config_file_poll_wait_seconds</code>: 指定部署服务器定时查看是否在该路径下有新的configure file。ps：其实我没理解这个的作用，因为我复制lstm文件夹为lstm_1，并且在主机的configure file中增加了lstm_1部分，并且等待了设置的n秒后，通过网页<code v-pre>http://localhost:8501/v1/models/lstm_1</code>检查lstm_1并没有运行成功。经过搜索得到的解答：Tensorflow Serving 2.1.0 supports it while 1.14.0 doesn't. 哭</p>
<p>部署成功后，就可以在网页中输入<code v-pre>http://localhost:8501/v1/models/lstm</code>或者<code v-pre>http://localhost:8501/v1/models/cv_sod</code>进行检查，如果是如下结果，就说明docker正常运行：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">"model_version_status"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
   <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1609392632"</span><span class="token punctuation">,</span>
   <span class="token property">"state"</span><span class="token operator">:</span> <span class="token string">"AVAILABLE"</span><span class="token punctuation">,</span>
   <span class="token property">"status"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"error_code"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span>
    <span class="token property">"error_message"</span><span class="token operator">:</span> <span class="token string">""</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模型版本控制" tabindex="-1"><a class="header-anchor" href="#模型版本控制" aria-hidden="true">#</a> 模型版本控制</h3>
<p>通过上述方法，我们实现了提供不同名称的模型，但服务默认只会读取最大版本号的版本，实际上我们可以提供不同版本的模型，比如可提供测试版、稳定版等不同类型的，实现版本控制，要实现此方法，需要在上述配置文件中的config选项中增加model_version_policy设置</p>
<h4 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置" aria-hidden="true">#</a> 服务端配置</h4>
<p>如果一个模型有多个版本，并在预测的时候希望指定模型的版本，可以通过以下方式实现。
修改model.config文件，增加model_version_policy：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>model_config_list: <span class="token punctuation">{</span>
  config: <span class="token punctuation">{</span>
    name: <span class="token string">"cv_sod"</span>,
    base_path: <span class="token string">"/models/cv_sod"</span>,
    model_platform: <span class="token string">"tensorflow"</span>
    model_version_policy:<span class="token punctuation">{</span>
      all:<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    version_labels <span class="token punctuation">{</span>
      key: <span class="token string">'stable'</span>
      value: <span class="token number">16323123125</span>
    <span class="token punctuation">}</span>
    version_labels <span class="token punctuation">{</span>
      key: <span class="token string">'abtest1'</span>
      value: <span class="token number">16324235421</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  config: <span class="token punctuation">{</span>
    name: <span class="token string">"lstm"</span>,
    base_path: <span class="token string">"/models/lstm"</span>,
    model_platform: <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，</p>
<ul>
<li>
<p><code v-pre>model_version_policy</code></p>
<p>如果要同时提供模型的多个版本，比如编号为<code v-pre>16323123125</code>和编号为<code v-pre>16324235421</code>的版本，则将specific设置为多个版本号即可。<code v-pre>model_version_policy</code>有以下两种：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>model_version_policy:{
  all:{}
}

model_version_policy:{
  specific {
    versions: 16323123125
    versions: 16324235421
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求预测的时候，如果要使用版本为<code v-pre>1609392632</code>的模型，就在后面加上<code v-pre>versions/1609392632</code>，要查看模型状态：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost:8501/v1/models/cv_sod/versions/1609392632
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tfserving支持模型的Hot Plug，上述容器运行起来之后，如果在宿主机的<code v-pre>/home/luwei/Desktop/multi_models/lstm</code>文件夹下新增模型文件如<code v-pre>100003</code>，tfserving会自动加载新模型；同样如果移除现有模型，tfserving也会自动卸载模型（经过试验好像并不会自动卸载呀，我把主机里的对应版本的删了，可是tfserving还存在呀，难道只能加不能减？难道是我的版本是tf1.14，那等用到tf2.1.0的时候再试试）。</p>
</li>
<li>
<p>version_labels</p>
<p>但从用户的角度来说，用户没必要知道模型版本号是什么，而只需要加载一个特定名字的版本即可，比如加载稳定版stable、临时版canary等名字，这时候就需要给这些模型版本设置别名。</p>
<p>有时，为模型版本添加一个间接级别会很有帮助, 可以为当前客户端应查询的任何版本分配别名，例如“stable”，而不是让所有客户都知道他们应该查询版本<code v-pre>16323123125</code>。</p>
<p>这样用户就只需要定向到stable或canary版本即可，而并不关心具体对应的是哪个版本号，这样做还有一个好处就是可以在不通知用户的情况下向前移动标签，比如说版本3测试稳定后，可以升级为稳定版本，则只需要将stable对应的value改为3即可。同样地，如果需要版本回滚，则只需要将value修改为之前的版本即可。</p>
<p>启动服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span> multi_models <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> <span class="token string">"/home/luwei/Desktop/multi_models/:/models/"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file</span><span class="token operator">=</span>/models/models.config <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file_poll_wait_seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">--allow_version_labels_for_unavailable_models</span><span class="token operator">=</span>true <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：根据官方说明，添加别名只能针对已经加载的模型（先启动服务，再更新配置文件），若想在启动服务的时候设置别名，需要设置allow_version_labels_for_unavailable_models=true。</p>
<p>官方说明如下：</p>
<blockquote>
<p>Please note that labels can only be assigned to model versions that are already loaded and available for serving. Once a model version is available, one may reload the model config on the fly to assign a label to it. This can be achieved using aHandleReloadConfigRequest RPC or if the server is set up to periodically poll the filesystem for the config file, as described above.</p>
<p>If you would like to assign a label to a version that is not yet loaded (for ex. by supplying both the model version and the label at startup time) then you must set the --allow_version_labels_for_unavailable_models flag to true, which allows new labels to be assigned to model versions that are not loaded yet.</p>
</blockquote>
</li>
</ul>
<h4 id="客户端调用" tabindex="-1"><a class="header-anchor" href="#客户端调用" aria-hidden="true">#</a> 客户端调用</h4>
<p>特别说明：<code v-pre>version_label</code>设置别名的方式只适用于grpc调用方式，而不适用与REST调用。</p>
<p>REST调用，直接<strong>指定版本号</strong>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">'{"inputs":[[1.0, 2.0]]}'</span> <span class="token parameter variable">-X</span> POST http://localhost:8501/v1/models/linear/versions/1:predict
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gRPC方式，</p>
<p><strong>使用版本号</strong>：</p>
<p>服务端提供了多种模型版本后，客户端可以指定要请求哪个版本的服务，如果使用grpc接口请求，则在request部分指定version.value即可，例如</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span><span class="token string">'49.233.155.170:8500'</span><span class="token punctuation">)</span>
stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"linear"</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>version<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">1</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> <span class="token string">'serving_default'</span>
request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'inputs'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>make_tensor_proto<span class="token punctuation">(</span>x<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">)</span>
output <span class="token operator">=</span> tf<span class="token punctuation">.</span>make_ndarray<span class="token punctuation">(</span>response<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">"outputs"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用别名</strong>：model_spec.version_label</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span><span class="token string">'49.233.155.170:8500'</span><span class="token punctuation">)</span>
stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"linear"</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>version_label <span class="token operator">=</span> <span class="token string">"stable"</span>
request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> <span class="token string">'serving_default'</span>
request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'inputs'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>tf<span class="token punctuation">.</span>make_tensor_proto<span class="token punctuation">(</span>x<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">)</span>
output <span class="token operator">=</span> tf<span class="token punctuation">.</span>make_ndarray<span class="token punctuation">(</span>response<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">"outputs"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>区别：model_spec.version.value与model_spec.version_label。</p>
<h3 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新" aria-hidden="true">#</a> 热更新</h3>
<p>热更新本身是支持的，只要在TFserving加载模型的时候，model.config中设置模型的加载方式为all或默认为all就行了。如果不是all，则需要如下方式：</p>
<p>服务启动后，可以通过重新加载配置文件的方式来实现模型的热更新。有两种方法可以重新加载配置文件：</p>
<ul>
<li>通过向服务器发出HandleReloadConfigRequest RPC调用来以编程方式提供新的配置</li>
<li>可通过指定--model_config_file_poll_wait_seconds选项来指定轮询此配置文件的时间</li>
</ul>
<h4 id="发送handlereloadconfigrequest-rpc调用" tabindex="-1"><a class="header-anchor" href="#发送handlereloadconfigrequest-rpc调用" aria-hidden="true">#</a> 发送HandleReloadConfigRequest-rpc调用</h4>
<p>通过向服务器发出HandleReloadConfigRequest RPC调用来以编程方式提供新的配置。</p>
<p>比如我们想新增模型textcnn和router。先更新其配置文件model.config为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>model_config_list <span class="token punctuation">{</span>
  config <span class="token punctuation">{</span>
    name: <span class="token string">"linear"</span>
    base_path: <span class="token string">"/models/mutimodel/linear_model"</span>
    model_platform: <span class="token string">"tensorflow"</span>
    model_version_policy <span class="token punctuation">{</span>
      specific <span class="token punctuation">{</span>
        versions: <span class="token number">1</span>
        versions: <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    version_labels <span class="token punctuation">{</span>
      key: <span class="token string">"stable"</span>
      value: <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  config <span class="token punctuation">{</span>
    name: <span class="token string">"textcnn"</span>
    base_path: <span class="token string">"/models/mutimodel/textcnn_model"</span>
    model_platform: <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span>
  config <span class="token punctuation">{</span>
    name: <span class="token string">"router"</span>
    base_path: <span class="token string">"/models/mutimodel/router_model"</span>
    model_platform: <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gRPC代码如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>from google.protobuf <span class="token function">import</span> text_format
from tensorflow_serving.apis <span class="token function">import</span> model_management_pb2
from tensorflow_serving.apis <span class="token function">import</span> model_service_pb2_grpc
from tensorflow_serving.config <span class="token function">import</span> model_server_config_pb2

config_file <span class="token operator">=</span> <span class="token string">"model.config"</span>
stub <span class="token operator">=</span> model_service_pb2_grpc.ModelServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
request <span class="token operator">=</span> model_management_pb2.ReloadConfigRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># read config file</span>
config_content <span class="token operator">=</span> open<span class="token punctuation">(</span>config_file, <span class="token string">"r"</span><span class="token punctuation">)</span>.read<span class="token punctuation">(</span><span class="token punctuation">)</span>
model_server_config <span class="token operator">=</span> model_server_config_pb2.ModelServerConfig<span class="token punctuation">(</span><span class="token punctuation">)</span>
model_server_config <span class="token operator">=</span> text_format.Parse<span class="token punctuation">(</span>text<span class="token operator">=</span>config_content, <span class="token assign-left variable">message</span><span class="token operator">=</span>model_server_config<span class="token punctuation">)</span>
request.config.CopyFrom<span class="token punctuation">(</span>model_server_config<span class="token punctuation">)</span>
request_response <span class="token operator">=</span> stub.HandleReloadConfigRequest<span class="token punctuation">(</span>request, <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> request_response.status.error_code <span class="token operator">==</span> <span class="token number">0</span>:
    open<span class="token punctuation">(</span>config_file, <span class="token string">"w"</span><span class="token punctuation">)</span>.write<span class="token punctuation">(</span>str<span class="token punctuation">(</span>request.config<span class="token punctuation">))</span>
    print<span class="token punctuation">(</span><span class="token string">"TF Serving config file updated."</span><span class="token punctuation">)</span>
    else:
        print<span class="token punctuation">(</span><span class="token string">"Failed to update config file."</span><span class="token punctuation">)</span>
        print<span class="token punctuation">(</span>request_response.status.error_code<span class="token punctuation">)</span>
        print<span class="token punctuation">(</span>request_response.status.error_message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试模型成功，模型新增成功。</p>
<h4 id="指定–-model-config-file-poll-wait-seconds选项" tabindex="-1"><a class="header-anchor" href="#指定–-model-config-file-poll-wait-seconds选项" aria-hidden="true">#</a> 指定–-model_config_file_poll_wait_seconds选项</h4>
<p>可通过指定--model_config_file_poll_wait_seconds选项来指定轮询此配置文件的时间。</p>
<p>注意，该选项只支持TF2.1.0版本及以上。</p>
<p>在启动服务的时候，指定重新加载配置文件的时间间隔60s。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span> multi_models <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> <span class="token string">"/home/luwei/Desktop/multi_models/:/models/"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file</span><span class="token operator">=</span>/models/models.config <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file_poll_wait_seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>立即调用textcnn，可以看到报如下错误。很明显，此时服务并没有加载textcnn模型。</p>
<p>60s之后，观察到服务出现变化，显示已经加载模型textcnn和router。</p>
<p>此时，再次调用textcnn模型，正确返回，模型更新成功。</p>
<h3 id="其他有用参数" tabindex="-1"><a class="header-anchor" href="#其他有用参数" aria-hidden="true">#</a> 其他有用参数</h3>
<p><a href="https://www.tensorflow.org/tfx/serving/serving_config#batching_configuration" target="_blank" rel="noopener noreferrer">--enabel-batching==true<ExternalLinkIcon/></a></p>
<h3 id="多模型在线部署实例" tabindex="-1"><a class="header-anchor" href="#多模型在线部署实例" aria-hidden="true">#</a> 多模型在线部署实例</h3>
<p>这里我们同时部署图像显著性检测（cv_sod）和评论情感识别（lstm）两个模型在同一个服务器上。</p>
<h4 id="多模型配置与docker部署" tabindex="-1"><a class="header-anchor" href="#多模型配置与docker部署" aria-hidden="true">#</a> 多模型配置与docker部署</h4>
<p>模型的存放路径如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>multi_models/
├── cv_sod
│   └── <span class="token number">1609392632</span>
│       ├── saved_model.pb
│       └── variables
│           ├── variables.data-00000-of-00001
│           └── variables.index
├── lstm
│   └── <span class="token number">1609392632</span>
│       ├── assets
│       │   ├── vocab.labels.txt
│       │   └── vocab.words.txt
│       ├── saved_model.pb
│       └── variables
│           ├── variables.data-00000-of-00001
│           └── variables.index
├── models.config
└── run_docker.sh

<span class="token number">7</span> directories, <span class="token number">10</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，</p>
<p>多模型配置文件（文件名models.config）：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>model_config_list<span class="token operator">:</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"cv_sod"</span><span class="token punctuation">,</span>
    base_path<span class="token operator">:</span> <span class="token string">"/models/cv_sod"</span><span class="token punctuation">,</span>
    model_platform<span class="token operator">:</span> <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"lstm"</span><span class="token punctuation">,</span>
    base_path<span class="token operator">:</span> <span class="token string">"/models/lstm"</span><span class="token punctuation">,</span>
    model_platform<span class="token operator">:</span> <span class="token string">"tensorflow"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行docker容器命令（run_docker.sh）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8501</span>:8501 <span class="token parameter variable">-p</span> <span class="token number">8500</span>:8500 <span class="token parameter variable">--name</span> multi_models <span class="token punctuation">\</span>
    <span class="token parameter variable">-v</span> <span class="token string">"/home/luwei/Desktop/multi_models/:/models/"</span> <span class="token punctuation">\</span>
    <span class="token parameter variable">-t</span> tensorflow/serving:1.14.0 <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file</span><span class="token operator">=</span>/models/models.config <span class="token punctuation">\</span>
    <span class="token parameter variable">--model_config_file_poll_wait_seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后续要重启的话，就</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> start multi_models
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="flask部署" tabindex="-1"><a class="header-anchor" href="#flask部署" aria-hidden="true">#</a> Flask部署</h4>
<p>（1）文本分类任务，基于grpc调用TFserving服务：<code v-pre>lstm_grpc.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*-coding:utf-8 -*-</span>
<span class="token keyword">import</span> grpc
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>apis <span class="token keyword">import</span> model_service_pb2_grpc<span class="token punctuation">,</span> model_management_pb2<span class="token punctuation">,</span> get_model_status_pb2<span class="token punctuation">,</span> predict_pb2<span class="token punctuation">,</span> prediction_service_pb2_grpc
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>config <span class="token keyword">import</span> model_server_config_pb2
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>util <span class="token keyword">import</span> make_tensor_proto
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>core<span class="token punctuation">.</span>framework <span class="token keyword">import</span> types_pb2


serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token punctuation">:</span> <span class="token string">"127.0.0.1:8500"</span><span class="token punctuation">,</span>
    <span class="token string">"max_message_length"</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token string">"timeout"</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token string">"signature_name"</span><span class="token punctuation">:</span> <span class="token string">"serving_default"</span><span class="token punctuation">,</span>
    <span class="token string">"model_name"</span><span class="token punctuation">:</span> <span class="token string">"lstm"</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">predict_test</span><span class="token punctuation">(</span>serving_config<span class="token punctuation">,</span> input_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    input_data_words <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"words"</span><span class="token punctuation">]</span>
    input_data_nwords <span class="token operator">=</span> input_data<span class="token punctuation">[</span><span class="token string">"nwords"</span><span class="token punctuation">]</span>

    request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'words'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_words<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>input_data_nwords<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_STRING))</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'nwords'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>
        input_data_nwords<span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_INT32))</span>
    result <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    predict_result <span class="token operator">=</span> predict_test<span class="token punctuation">(</span>serving_config<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"很"</span><span class="token punctuation">,</span> <span class="token string">"喜欢"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）图像显著性检测，基于grpc调用TFserving服务：<code v-pre>cv_sod_grpc.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> grpc
<span class="token keyword">import</span> json
<span class="token keyword">import</span> cv2
<span class="token keyword">import</span> imageio
<span class="token keyword">from</span> scipy <span class="token keyword">import</span> misc
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token comment"># pip install tensorflow_serving_api</span>
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>apis <span class="token keyword">import</span> model_service_pb2_grpc<span class="token punctuation">,</span> model_management_pb2<span class="token punctuation">,</span> get_model_status_pb2<span class="token punctuation">,</span> predict_pb2<span class="token punctuation">,</span> prediction_service_pb2_grpc
<span class="token keyword">from</span> tensorflow_serving<span class="token punctuation">.</span>config <span class="token keyword">import</span> model_server_config_pb2
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>util <span class="token keyword">import</span> make_tensor_proto
<span class="token keyword">from</span> tensorflow<span class="token punctuation">.</span>core<span class="token punctuation">.</span>framework <span class="token keyword">import</span> types_pb2

serving_config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"hostport"</span><span class="token punctuation">:</span> <span class="token string">"127.0.0.1:8500"</span><span class="token punctuation">,</span>
    <span class="token string">"max_message_length"</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token string">"timeout"</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token string">"signature_name"</span><span class="token punctuation">:</span> <span class="token string">"serving_default"</span><span class="token punctuation">,</span>
    <span class="token string">"model_name"</span><span class="token punctuation">:</span> <span class="token string">"cv_sod"</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">predict_test</span><span class="token punctuation">(</span>serving_config<span class="token punctuation">,</span> image_in<span class="token punctuation">)</span><span class="token punctuation">:</span>
    channel <span class="token operator">=</span> grpc<span class="token punctuation">.</span>insecure_channel<span class="token punctuation">(</span>serving_config<span class="token punctuation">[</span><span class="token string">'hostport'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_send_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token string">'grpc.max_receive_message_length'</span><span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'max_message_length'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    stub <span class="token operator">=</span> prediction_service_pb2_grpc<span class="token punctuation">.</span>PredictionServiceStub<span class="token punctuation">(</span>channel<span class="token punctuation">)</span>

    <span class="token comment"># ==========图片前处理====================</span>
    <span class="token comment"># rgb = imageio.imread(image_in)</span>
    rgb <span class="token operator">=</span> image_in
    <span class="token keyword">if</span> rgb<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">rgba2rgb</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> img<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">*</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>img<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token punctuation">:</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        rgb <span class="token operator">=</span> rgba2rgb<span class="token punctuation">(</span>rgb<span class="token punctuation">)</span>
    origin_shape <span class="token operator">=</span> rgb<span class="token punctuation">.</span>shape
    g_mean <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">126.88</span><span class="token punctuation">,</span> <span class="token number">120.24</span><span class="token punctuation">,</span> <span class="token number">112.19</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    rgb <span class="token operator">=</span> np<span class="token punctuation">.</span>expand_dims<span class="token punctuation">(</span>
        misc<span class="token punctuation">.</span>imresize<span class="token punctuation">(</span>rgb<span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> interp<span class="token operator">=</span><span class="token string">"nearest"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>float32<span class="token punctuation">)</span> <span class="token operator">-</span> g_mean<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment"># ==========请求TFserving服务====================</span>
    request <span class="token operator">=</span> predict_pb2<span class="token punctuation">.</span>PredictRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'model_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>model_spec<span class="token punctuation">.</span>signature_name <span class="token operator">=</span> serving_config<span class="token punctuation">[</span><span class="token string">'signature_name'</span><span class="token punctuation">]</span>
    request<span class="token punctuation">.</span>inputs<span class="token punctuation">[</span><span class="token string">'img_in'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>CopyFrom<span class="token punctuation">(</span>make_tensor_proto<span class="token punctuation">(</span>rgb<span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>float32<span class="token punctuation">)</span><span class="token punctuation">,</span> shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># , dtype=types_pb2.DT_FLOAT))</span>
    result <span class="token operator">=</span> stub<span class="token punctuation">.</span>Predict<span class="token punctuation">(</span>request<span class="token punctuation">,</span> serving_config<span class="token punctuation">[</span><span class="token string">'timeout'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    channel<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># return result, origin_shape</span>

    <span class="token comment"># ==========图片后处理====================</span>
    <span class="token comment"># print(predict_result)  # 通过打印此语句获知output含有什么项及其类型</span>
    img_out <span class="token operator">=</span> result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val  <span class="token comment"># [0]</span>
    img_out <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>img_out<span class="token punctuation">)</span><span class="token punctuation">.</span>reshape<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    final_alpha <span class="token operator">=</span> misc<span class="token punctuation">.</span>imresize<span class="token punctuation">(</span>np<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>img_out<span class="token punctuation">)</span><span class="token punctuation">,</span> origin_shape<span class="token punctuation">)</span>
    <span class="token comment"># imageio.imwrite(image_out, final_alpha)</span>
    <span class="token keyword">return</span> final_alpha


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    image_in_file <span class="token operator">=</span> <span class="token string">'/home/luwei/Desktop/model_serving/goat.jpg'</span>

    predict_test<span class="token punctuation">(</span>serving_config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）Flask主程序：<code v-pre>flask_serving.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask <span class="token keyword">import</span> request
<span class="token keyword">import</span> json
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> lstm_grpc <span class="token keyword">as</span> lstm
<span class="token keyword">import</span> cv_sod_grpc <span class="token keyword">as</span> cv_sod
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> _pickle
<span class="token keyword">import</span> cv2
<span class="token keyword">import</span> jieba

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World!"</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/lstm/predict"</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">lstm_predict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># flask url中参数 https://zhuanlan.zhihu.com/p/43656865</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">:</span>  <span class="token comment"># get方法 /predict?words=["非常","喜欢"]&amp;nwords=2</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>args<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>get_json<span class="token punctuation">(</span>force<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"ERROR: request.method is not GET or POST!"</span>

    <span class="token keyword">if</span> <span class="token string">'line'</span> <span class="token keyword">not</span> <span class="token keyword">in</span> data<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">"status"</span><span class="token punctuation">:</span> <span class="token string">"no sentence in data"</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">:</span>
        data<span class="token punctuation">[</span><span class="token string">'line'</span><span class="token punctuation">]</span> <span class="token operator">=</span> base64<span class="token punctuation">.</span>urlsafe_b64decode<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'line'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># jieba分词处理句子</span>
    sentence <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>jieba<span class="token punctuation">.</span>cut<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">'line'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cut_all<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> HMM<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    words <span class="token operator">=</span> <span class="token punctuation">[</span>w <span class="token keyword">for</span> w <span class="token keyword">in</span> sentence<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    nwords <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>
    <span class="token keyword">if</span> nwords <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">"status"</span><span class="token punctuation">:</span> <span class="token string">"no sentence in data"</span><span class="token punctuation">}</span>

    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> words<span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span> nwords<span class="token punctuation">}</span>  <span class="token comment"># data = {"words": ["非常", "满意"], "nwords": 2}</span>

    predict_result <span class="token operator">=</span> lstm<span class="token punctuation">.</span>predict_test<span class="token punctuation">(</span>lstm<span class="token punctuation">.</span>serving_config<span class="token punctuation">,</span> data<span class="token punctuation">)</span>

    ret_data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">"status"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string">'classes_id'</span><span class="token punctuation">:</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'classes_id'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>int64_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">'labels'</span><span class="token punctuation">:</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'labels'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>string_val<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">'softmax'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> predict_result<span class="token punctuation">.</span>outputs<span class="token punctuation">[</span><span class="token string">'softmax'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>float_val<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ret_data


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/cv_sod/predict"</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">cv_sod_predict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"status"</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>

    <span class="token comment"># flask url中参数 https://zhuanlan.zhihu.com/p/43656865</span>
    <span class="token keyword">assert</span> request<span class="token punctuation">.</span>method <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"ERROR: request.method is {}, not POST or GET!"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>files  <span class="token comment"># data = request.get_json(force=True)</span>
        <span class="token comment"># data: ImmutableMultiDict([('img', &lt; FileStorage: '4x4.png' (None) >)])</span>
        <span class="token comment"># data["img"]: &lt; FileStorage: '4x4.png'(None) ></span>
        <span class="token comment"># type(data["img"]): &lt;class 'werkzeug.datastructures.FileStorage'></span>
    <span class="token keyword">elif</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'GET'</span><span class="token punctuation">:</span>  <span class="token comment"># get方法 /predict?img="abcd"</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>args<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token string">'img'</span> <span class="token keyword">in</span> data<span class="token punctuation">:</span>
        ret_data<span class="token punctuation">[</span><span class="token string">"status"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> ret_data

    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'POST'</span><span class="token punctuation">:</span>
        <span class="token comment"># 输入图片，从字节转为图像</span>
        img_byte <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">"img"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># img_byte: b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x04\x00\x00\x00\x04</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        img_byte <span class="token operator">=</span> base64<span class="token punctuation">.</span>urlsafe_b64decode<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">"img"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00</span>
    img_np_arr <span class="token operator">=</span> np<span class="token punctuation">.</span>frombuffer<span class="token punctuation">(</span>img_byte<span class="token punctuation">,</span> np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span>  <span class="token comment"># 一个看不出意义的数组</span>
    image <span class="token operator">=</span> cv2<span class="token punctuation">.</span>imdecode<span class="token punctuation">(</span>img_np_arr<span class="token punctuation">,</span> cv2<span class="token punctuation">.</span>IMREAD_COLOR<span class="token punctuation">)</span>

    <span class="token comment"># 进行预测</span>
    img_out_ndarray <span class="token operator">=</span> cv_sod<span class="token punctuation">.</span>predict_test<span class="token punctuation">(</span>cv_sod<span class="token punctuation">.</span>serving_config<span class="token punctuation">,</span> image<span class="token punctuation">)</span>

    <span class="token comment"># 输出图像，序列化</span>
    img_out_bytes <span class="token operator">=</span> _pickle<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>img_out_ndarray<span class="token punctuation">)</span>  <span class="token comment"># ndarray->bytes 会保存形状信息</span>
    img_out_str <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>img_out_bytes<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># bytes->str</span>
    ret_data<span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span> <span class="token operator">=</span> img_out_str

    <span class="token keyword">return</span> ret_data


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    <span class="token comment"># flask原生服务</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">5100</span><span class="token punctuation">,</span> debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> threaded<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># threaded默认为True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到了这一步，其实就可以测试一下了，即先运行一下<code v-pre>python flask_serving.py</code>，然后运行下面的客户端请求代码<code v-pre>request_client.py</code>进行测试。但仅仅测试一下就行了，当前的阶段并不能满足实际场景的需求，我们还要继续部署Gunicorn和Nginx，以便可以高并发。</p>
<p><code v-pre>request_client.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> _pickle
<span class="token keyword">import</span> os


<span class="token keyword">def</span> <span class="token function">request_cv_sod</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 请求并返回结果</span>
    <span class="token keyword">assert</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"requests_type is {}, not POST or GET"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">:</span>
        <span class="token comment"># files = {'img': ('test.png', open(image_in_file, 'rb'), 'image/png')}</span>
        files <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'img'</span><span class="token punctuation">:</span> <span class="token builtin">open</span><span class="token punctuation">(</span>image_in_file<span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/cv_sod/predict"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span> files<span class="token operator">=</span>files<span class="token punctuation">,</span> timeout<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"requests_timeout"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># , headers=headers)</span>
    <span class="token keyword">elif</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>image_in_file<span class="token punctuation">,</span> <span class="token string">"rb"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            img_in_bytes <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00</span>
            img_in_str <span class="token operator">=</span> base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span>img_in_bytes<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># bytes->str</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/cv_sod/predict?img={img}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> img<span class="token operator">=</span>img_in_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/cv_sod/predict?img={img}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> img<span class="token operator">=</span>img_in_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># print(r.json())</span>
    img_out_arr <span class="token operator">=</span> _pickle<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 保存图像</span>
    im <span class="token operator">=</span> Image<span class="token punctuation">.</span>fromarray<span class="token punctuation">(</span>img_out_arr<span class="token punctuation">)</span>
    image_out_file <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>image_in_file<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"_out"</span> <span class="token operator">+</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>image_in_file<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    im<span class="token punctuation">.</span>save<span class="token punctuation">(</span>image_out_file<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">request_lstm</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"line"</span><span class="token punctuation">:</span> line<span class="token punctuation">}</span>

    <span class="token keyword">assert</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"requests_type is {}, not POST or GET"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/lstm/predict"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"requests_timeout"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/lstm/predict?line={line}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
            ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            line<span class="token operator">=</span>base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">"line"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># urlsafe_b64encode防止语句出现+&amp;等符号干扰</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    config <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">"ip"</span><span class="token punctuation">:</span> <span class="token string">"192.168.43.75"</span><span class="token punctuation">,</span>
        <span class="token string">"port"</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token string">"requests_type"</span><span class="token punctuation">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>  <span class="token comment"># “GET”, "POST"</span>
        <span class="token string">"requests_timeout"</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># ==========cv_osd==============================</span>
    image_in_file <span class="token operator">=</span> <span class="token string">"D:\\4x4.png"</span>
    request_cv_sod<span class="token punctuation">(</span>config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">)</span>

    <span class="token comment"># ==========lstm==============================</span>
    line <span class="token operator">=</span> <span class="token string">"我很喜欢这个产品"</span>
    request_lstm<span class="token punctuation">(</span>config<span class="token punctuation">,</span> line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="supervisor部署" tabindex="-1"><a class="header-anchor" href="#supervisor部署" aria-hidden="true">#</a> supervisor部署</h4>
<p>部署Nginx与之前的“部署Nginx”章节内容一致，这里不再赘述。</p>
<h5 id="docker进程配置" tabindex="-1"><a class="header-anchor" href="#docker进程配置" aria-hidden="true">#</a> Docker进程配置</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>docker.conf</code>的内容为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:docker<span class="token punctuation">]</span>
<span class="token builtin class-name">command</span> <span class="token operator">=</span> <span class="token function">sudo</span> <span class="token function">docker</span> start multi_models
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/docker/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="gunicorn进程配置" tabindex="-1"><a class="header-anchor" href="#gunicorn进程配置" aria-hidden="true">#</a> Gunicorn进程配置</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> gunicorn.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:gunicorn<span class="token punctuation">]</span>
directory <span class="token operator">=</span> /home/luwei/Desktop/model_serving/
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /home/luwei/anaconda3/envs/tf1.14/bin/gunicorn <span class="token parameter variable">-w</span> <span class="token number">4</span> <span class="token parameter variable">-b</span> <span class="token number">0.0</span>.0.0:8001 flask_serving:app
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/gunicorn/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nginx进程配置" tabindex="-1"><a class="header-anchor" href="#nginx进程配置" aria-hidden="true">#</a> Nginx进程配置</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/supervisor/conf.d
<span class="token function">sudo</span> <span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：由于supervisor不能监控后台程序，<code v-pre>command = /usr/local/bin/nginx</code>这个命令默认是后台启动，
加上<code v-pre>-g ‘daemon off;'</code>这个参数可解决这问题，这个参数的意思是在前台运行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>program:nginx<span class="token punctuation">]</span>
<span class="token builtin class-name">command</span> <span class="token operator">=</span> /usr/sbin/nginx <span class="token parameter variable">-g</span> <span class="token string">'daemon off;'</span>
<span class="token assign-left variable">startsecs</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">autostart</span><span class="token operator">=</span>true
<span class="token assign-left variable">autorestart</span><span class="token operator">=</span>true
<span class="token assign-left variable">stdout_logfile</span><span class="token operator">=</span>/var/log/nginx/stdout.log
<span class="token assign-left variable">stopasgroup</span><span class="token operator">=</span>true
<span class="token assign-left variable">killasgroup</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本就算是完成了。</p>
<h5 id="使用supervisord进行reload启动进程" tabindex="-1"><a class="header-anchor" href="#使用supervisord进行reload启动进程" aria-hidden="true">#</a> 使用supervisord进行reload启动进程</h5>
<p>使用了supervisord进行启动，监控和拉起这两个进程，这样就非常稳定了。而且断电重新开机也不怕，因为supervisord服务会自启动。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 任务重加载并重启</span>
<span class="token function">sudo</span> supervisorctl reload
<span class="token comment"># 查看任务是否都被调用开启</span>
<span class="token function">sudo</span> supervisorctl
<span class="token comment"># 查看某个任务失败原因（以Nginx为例）</span>
<span class="token function">sudo</span> supervisorctl <span class="token function">tail</span> nginx stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用python进行客户端请求" tabindex="-1"><a class="header-anchor" href="#使用python进行客户端请求" aria-hidden="true">#</a> 使用python进行客户端请求</h4>
<p><code v-pre>request_client.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> _pickle
<span class="token keyword">import</span> os
<span class="token keyword">import</span> jieba


<span class="token keyword">def</span> <span class="token function">request_cv_sod</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 请求并返回结果</span>
    <span class="token keyword">assert</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"requests_type is {}, not POST or GET"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">:</span>
        <span class="token comment"># files = {'img': ('test.png', open(image_in_file, 'rb'), 'image/png')}</span>
        files <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'img'</span><span class="token punctuation">:</span> <span class="token builtin">open</span><span class="token punctuation">(</span>image_in_file<span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/cv_sod/predict"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span> files<span class="token operator">=</span>files<span class="token punctuation">,</span> timeout<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"requests_timeout"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># , headers=headers)</span>
    <span class="token keyword">elif</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>image_in_file<span class="token punctuation">,</span> <span class="token string">"rb"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            img_in_bytes <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00</span>
            img_in_str <span class="token operator">=</span> base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span>img_in_bytes<span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># bytes->str</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/cv_sod/predict?img={img}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> img<span class="token operator">=</span>img_in_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># print(r.json())</span>
    img_out_arr <span class="token operator">=</span> _pickle<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'img_out'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 保存图像</span>
    im <span class="token operator">=</span> Image<span class="token punctuation">.</span>fromarray<span class="token punctuation">(</span>img_out_arr<span class="token punctuation">)</span>
    image_out_file <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>image_in_file<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"_out."</span> <span class="token operator">+</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>image_in_file<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    im<span class="token punctuation">.</span>save<span class="token punctuation">(</span>image_out_file<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">request_lstm</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># jieba分词处理句子</span>
    sentence <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>jieba<span class="token punctuation">.</span>cut<span class="token punctuation">(</span>line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cut_all<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> HMM<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    words <span class="token operator">=</span> <span class="token punctuation">[</span>w <span class="token keyword">for</span> w <span class="token keyword">in</span> sentence<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    nwords <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>
    <span class="token keyword">if</span> nwords <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"nwords is {}, which must > 0"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>nwords<span class="token punctuation">)</span><span class="token punctuation">)</span>
        exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"words"</span><span class="token punctuation">:</span> words<span class="token punctuation">,</span> <span class="token string">"nwords"</span><span class="token punctuation">:</span> nwords<span class="token punctuation">}</span>  <span class="token comment"># data = {"words": ["非常", "满意"], "nwords": 2}</span>

    <span class="token keyword">assert</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"GET"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"requests_type is {}, not POST or GET"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"POST"</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/lstm/predict"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"requests_timeout"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> config<span class="token punctuation">[</span><span class="token string">"requests_type"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"GET"</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"http://{ip}:{port}/lstm/predict?words={words}&amp;nwords={nwords}"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
            ip<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"ip"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> port<span class="token operator">=</span>config<span class="token punctuation">[</span><span class="token string">"port"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            words<span class="token operator">=</span>base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">"words"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nwords<span class="token operator">=</span>data<span class="token punctuation">[</span><span class="token string">"nwords"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    config <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">"ip"</span><span class="token punctuation">:</span> <span class="token string">"192.168.43.75"</span><span class="token punctuation">,</span>
        <span class="token string">"port"</span><span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token string">"requests_type"</span><span class="token punctuation">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>  <span class="token comment"># “GET”, "POST"</span>
        <span class="token string">"requests_timeout"</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># ==========cv_osd==============================</span>
    image_in_file <span class="token operator">=</span> <span class="token string">"D:\\4x4.png"</span>
    request_cv_sod<span class="token punctuation">(</span>config<span class="token punctuation">,</span> image_in_file<span class="token punctuation">)</span>

    <span class="token comment"># ==========lstm==============================</span>
    line <span class="token operator">=</span> <span class="token string">"我很喜欢中国银行的产品"</span>
    <span class="token comment"># request_lstm(config, line)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用ab进行压测" tabindex="-1"><a class="header-anchor" href="#使用ab进行压测" aria-hidden="true">#</a> 使用ab进行压测</h4>
<h5 id="压测lstm评论感情识别模型" tabindex="-1"><a class="header-anchor" href="#压测lstm评论感情识别模型" aria-hidden="true">#</a> 压测lstm评论感情识别模型</h5>
<p>将评论<code v-pre>我很喜欢xxxx的产品</code>转化为b64encode编码后就如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ab <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> http://192.168.43.75/lstm/predict?line<span class="token operator">=</span>5oiR5b6I5Zac5qyi5Lit5Zu96ZO26KGM55qE5Lqn5ZOB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>This is ApacheBench, Version <span class="token number">2.3</span> <span class="token operator">&lt;</span><span class="token variable">$Revision</span><span class="token builtin class-name">:</span> <span class="token number">1706008</span> $<span class="token operator">></span>
Copyright <span class="token number">1996</span> Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking <span class="token number">192.168</span>.43.75 <span class="token punctuation">(</span>be patient<span class="token punctuation">)</span>
Completed <span class="token number">100</span> requests
Completed <span class="token number">500</span> requests
Completed <span class="token number">1000</span> requests
Finished <span class="token number">1000</span> requests

Server Software:        nginx/1.10.3
Server Hostname:        <span class="token number">192.168</span>.43.75
Server Port:            <span class="token number">80</span>

Document Path:          /lstm/predict?line<span class="token operator">=</span>5oiR5b6I5Zac5qyi5Lit5Zu96ZO26KGM55qE5Lqn5ZOB
Document Length:        <span class="token number">118</span> bytes

Concurrency Level:      <span class="token number">10</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">6.712</span> seconds
Complete requests:      <span class="token number">1000</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">277000</span> bytes
HTML transferred:       <span class="token number">118000</span> bytes
Requests per second:    <span class="token number">148.99</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">67.117</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">6.712</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">40.30</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

Connection Times <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
              min  mean<span class="token punctuation">[</span>+/-sd<span class="token punctuation">]</span> median   max
Connect:        <span class="token number">0</span>    <span class="token number">0</span>   <span class="token number">0.5</span>      <span class="token number">0</span>       <span class="token number">5</span>
Processing:    <span class="token number">24</span>   <span class="token number">67</span> <span class="token number">207.0</span>     <span class="token number">43</span>    <span class="token number">3816</span>
Waiting:       <span class="token number">24</span>   <span class="token number">67</span> <span class="token number">207.0</span>     <span class="token number">43</span>    <span class="token number">3816</span>
Total:         <span class="token number">26</span>   <span class="token number">67</span> <span class="token number">207.2</span>     <span class="token number">43</span>    <span class="token number">3822</span>

Percentage of the requests served within a certain <span class="token function">time</span> <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
  <span class="token number">50</span>%     <span class="token number">43</span>
  <span class="token number">90</span>%     <span class="token number">93</span>
  <span class="token number">99</span>%    <span class="token number">185</span>
 <span class="token number">100</span>%   <span class="token number">3822</span> <span class="token punctuation">(</span>longest request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次请求的耗时为6.7ms，比之前的0.9毫秒增加了，这是因为加入了jieba分词，并且单词的长度增加了。</p>
<h5 id="压测图像显著性检测模型" tabindex="-1"><a class="header-anchor" href="#压测图像显著性检测模型" aria-hidden="true">#</a> 压测图像显著性检测模型</h5>
<p>将图像转成b64encode编码字符串，然后进行请求</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ab <span class="token parameter variable">-n</span> <span class="token number">100</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> http://192.168.43.75:80/cv_sod/predict?img<span class="token operator">=</span>iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAeSURBVBhXYwCC____Q0kghoDDhw-jciAKgICBgQEAfYYidT6KA44AAAAASUVORK5CYII<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Benchmarking <span class="token number">192.168</span>.43.75 <span class="token punctuation">(</span>be patient<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.done


Server Software:        nginx/1.10.3
Server Hostname:        <span class="token number">192.168</span>.43.75
Server Port:            <span class="token number">80</span>

Document Path:          /cv_sod/predict?img<span class="token operator">=</span>iVBORw0KGgoAAAANSUhEUgAAAAQA<span class="token punctuation">..</span>.
Document Length:        <span class="token number">258</span> bytes

Concurrency Level:      <span class="token number">10</span>
Time taken <span class="token keyword">for</span> tests:   <span class="token number">185.729</span> seconds
Complete requests:      <span class="token number">100</span>
Failed requests:        <span class="token number">0</span>
Total transferred:      <span class="token number">41700</span> bytes
HTML transferred:       <span class="token number">25800</span> bytes
Requests per second:    <span class="token number">0.54</span> <span class="token punctuation">[</span><span class="token comment">#/sec] (mean)</span>
Time per request:       <span class="token number">18572.865</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean<span class="token punctuation">)</span>
Time per request:       <span class="token number">1857.287</span> <span class="token punctuation">[</span>ms<span class="token punctuation">]</span> <span class="token punctuation">(</span>mean, across all concurrent requests<span class="token punctuation">)</span>
Transfer rate:          <span class="token number">0.22</span> <span class="token punctuation">[</span>Kbytes/sec<span class="token punctuation">]</span> received

Connection Times <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
              min  mean<span class="token punctuation">[</span>+/-sd<span class="token punctuation">]</span> median   max
Connect:        <span class="token number">0</span>    <span class="token number">0</span>   <span class="token number">1.1</span>      <span class="token number">0</span>       <span class="token number">4</span>
Processing:  <span class="token number">1919</span> <span class="token number">17723</span> <span class="token number">3010.1</span>  <span class="token number">18494</span>   <span class="token number">18935</span>
Waiting:     <span class="token number">1916</span> <span class="token number">17722</span> <span class="token number">3010.3</span>  <span class="token number">18494</span>   <span class="token number">18935</span>
Total:       <span class="token number">1920</span> <span class="token number">17723</span> <span class="token number">3009.4</span>  <span class="token number">18494</span>   <span class="token number">18935</span>

Percentage of the requests served within a certain <span class="token function">time</span> <span class="token punctuation">(</span>ms<span class="token punctuation">)</span>
  <span class="token number">50</span>%  <span class="token number">18494</span>
  <span class="token number">90</span>%  <span class="token number">18748</span>
  <span class="token number">99</span>%  <span class="token number">18935</span>
 <span class="token number">100</span>%  <span class="token number">18935</span> <span class="token punctuation">(</span>longest request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单次请求的时长为1.8秒，这是因为需要进行深度学习的图像处理，所以时间比较久。</p>
<h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>
<ul>
<li><a href="https://blog.csdn.net/JerryZhang__/article/details/85107506" target="_blank" rel="noopener noreferrer">使用docker和TFserving搭建模型预测服务<ExternalLinkIcon/></a></li>
</ul>
<p>本文结构参考了此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/baidu_37648998/article/details/109598522" target="_blank" rel="noopener noreferrer">gRPC与RESTful的区别<ExternalLinkIcon/></a></li>
</ul>
<p>&quot;gRPC与RESTful的区别&quot;参考此资料</p>
<ul>
<li><a href="https://blog.csdn.net/jclian91/article/details/109521659" target="_blank" rel="noopener noreferrer">将ckpt转化为pb文件并利用tensorflow/serving实现模型部署及预测<ExternalLinkIcon/></a></li>
</ul>
<p>“ckpt格式转为pd格式用于TFserving”参考此资料</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/99669985" target="_blank" rel="noopener noreferrer">Flask: Flask框架是如何实现非阻塞并发的<ExternalLinkIcon/></a></li>
</ul>
<p>“Flask的缺陷”参考此部分。</p>
<ul>
<li><a href="https://www.cnblogs.com/brifuture/p/10050946.html" target="_blank" rel="noopener noreferrer">在Flask应用中使用 gevent<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/iloveyin/article/details/42921583?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.baidujs&amp;dist_request_id=b658a88f-6566-4d2c-a723-b4d98a19084c&amp;depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.baidujs" target="_blank" rel="noopener noreferrer">python gevent使用-最简单把同步程序变成异步程序<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/qq_19707521/article/details/105072362?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&amp;spm=1001.2101.3001.4242" target="_blank" rel="noopener noreferrer">Python Flask高并发部署（简易）<ExternalLinkIcon/></a></li>
</ul>
<p>“gevent+Flask同步变异步”部分参考此博客。</p>
<ul>
<li><a href="https://www.zhihu.com/question/297267614?sort=created" target="_blank" rel="noopener noreferrer">Nginx和Gunicorn和Flask的关系？<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/CHENYAoo/article/details/83055108" target="_blank" rel="noopener noreferrer">uwsgi、wsgi和nginx的区别和关系<ExternalLinkIcon/></a></li>
<li><a href="https://www.jianshu.com/p/484bd73f1e80" target="_blank" rel="noopener noreferrer">Linux下部署Flask项目——Ubuntu+Flask+Gunicorn+Supervisor+Nginx<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/xiaozengzeng/p/14455444.html" target="_blank" rel="noopener noreferrer">Gunicorn使用讲解<ExternalLinkIcon/></a></li>
<li><a href="http://www.cainiao.io/archives/970" target="_blank" rel="noopener noreferrer">使用Supervisor守护Nginx进程<ExternalLinkIcon/></a></li>
<li><a href="https://www.bbsmax.com/A/o75NZK2j5W/" target="_blank" rel="noopener noreferrer">ubuntu supervisor管理uwsgi+nginx<ExternalLinkIcon/></a></li>
</ul>
<p>“Nginx+Gunicorn+Flask部署”参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/sinat_36710456/article/details/83111263?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-11.baidujs&amp;dist_request_id=&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-11.baidujs" target="_blank" rel="noopener noreferrer">假如想要建设一个能承受500万PV/每天的网站，服务器每秒要处理多少个请求才能应对？<ExternalLinkIcon/></a></li>
</ul>
<p>“用ab压测”参考此博客。</p>
<ul>
<li><a href="https://blog.csdn.net/u012433049/article/details/89354361" target="_blank" rel="noopener noreferrer">Docker + Tensorflow serving 多模型在线部署<ExternalLinkIcon/></a></li>
<li><a href="https://www.tensorflow.org/tfx/serving/serving_config" target="_blank" rel="noopener noreferrer">官网：Tensorflow Serving Configuration<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/chenguangchun1993/article/details/104971811/" target="_blank" rel="noopener noreferrer">tensorflow serving安装、部署、调用、多模型版本管理教程<ExternalLinkIcon/></a></li>
<li><a href="https://zongxp.blog.csdn.net/article/details/102953720" target="_blank" rel="noopener noreferrer">TensorFlow Serving系列之多模型多版本控制<ExternalLinkIcon/></a></li>
</ul>
<p>“多模型在线部署”参考此博客。</p>
<ul>
<li><a href="https://www.seoxiehui.cn/article-73681-1.html" target="_blank" rel="noopener noreferrer">教程帖：使用TensorFlow服务和Flask部署Keras模型！ <ExternalLinkIcon/></a></li>
<li><a href="https://zhuanlan.zhihu.com/p/107196689" target="_blank" rel="noopener noreferrer">Tensorflow训练+上线+预测过程（Docker）<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/BF02jgtRS00XKtCx/article/details/106247459" target="_blank" rel="noopener noreferrer">用 TFserving 部署深度学习模型<ExternalLinkIcon/></a></li>
</ul>
<p>“多模型在线部署实例”参考此博客，讲了图像如何从前端传给Flask。</p>
<p>===</p>
<ul>
<li><a href="https://www.jianshu.com/p/afe80b2ed7f0" target="_blank" rel="noopener noreferrer">TensorFlow Serving入门<ExternalLinkIcon/></a></li>
</ul>
<p>这个有使用RESTful和gRPC的官方例子，比较简单，初学者可以看这个。</p>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/144800734" target="_blank" rel="noopener noreferrer">小白Bert系列-生成pb模型，TFserving加载，Flask进行预测<ExternalLinkIcon/></a></li>
</ul>
<p>讲了一个TFserving同时加载多个模型，即docker --model_config_file。</p>
<ul>
<li><a href="https://blog.csdn.net/BF02jgtRS00XKtCx/article/details/106247459" target="_blank" rel="noopener noreferrer">用 TFserving 部署深度学习模型<ExternalLinkIcon/></a></li>
</ul>
<p>讲了如何将pb模型文件转为tfserving文件。</p>
<ul>
<li><a href="https://blog.csdn.net/mouxiaoqiu/article/details/81220222?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.baidujs&amp;dist_request_id=1329187.22073.16179499767350159&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.baidujs" target="_blank" rel="noopener noreferrer">如何将keras训练好的模型转换成tensorflow的.pb的文件并在TensorFlow serving环境调用<ExternalLinkIcon/></a></li>
</ul>
<p>keras模型转pb</p>
</div></template>


