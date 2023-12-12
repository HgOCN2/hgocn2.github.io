export const data = JSON.parse("{\"key\":\"v-8d192022\",\"path\":\"/docs/engineering/machine-learning-framework/tensorflow/tf_serving/tf_serving.html\",\"title\":\"TensorFlow Serving\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"安装Docker\",\"slug\":\"安装docker\",\"link\":\"#安装docker\",\"children\":[{\"level\":3,\"title\":\"win10安装\",\"slug\":\"win10安装\",\"link\":\"#win10安装\",\"children\":[]},{\"level\":3,\"title\":\"linux安装\",\"slug\":\"linux安装\",\"link\":\"#linux安装\",\"children\":[]}]},{\"level\":2,\"title\":\"拉取TF.Serving镜像\",\"slug\":\"拉取tf-serving镜像\",\"link\":\"#拉取tf-serving镜像\",\"children\":[]},{\"level\":2,\"title\":\"运行容器\",\"slug\":\"运行容器\",\"link\":\"#运行容器\",\"children\":[]},{\"level\":2,\"title\":\"通过API查看模型状态，元数据\",\"slug\":\"通过api查看模型状态-元数据\",\"link\":\"#通过api查看模型状态-元数据\",\"children\":[{\"level\":3,\"title\":\"通过model-status-API查看模型状态\",\"slug\":\"通过model-status-api查看模型状态\",\"link\":\"#通过model-status-api查看模型状态\",\"children\":[]},{\"level\":3,\"title\":\"通过model-metadata-API查看模型的元数据\",\"slug\":\"通过model-metadata-api查看模型的元数据\",\"link\":\"#通过model-metadata-api查看模型的元数据\",\"children\":[]}]},{\"level\":2,\"title\":\"gRPC与RESTful请求的区别\",\"slug\":\"grpc与restful请求的区别\",\"link\":\"#grpc与restful请求的区别\",\"children\":[]},{\"level\":2,\"title\":\"使用RESTful-API请求预测\",\"slug\":\"使用restful-api请求预测\",\"link\":\"#使用restful-api请求预测\",\"children\":[]},{\"level\":2,\"title\":\"使用gRPC请求预测\",\"slug\":\"使用grpc请求预测\",\"link\":\"#使用grpc请求预测\",\"children\":[{\"level\":3,\"title\":\"输入数据为文本或数字类型\",\"slug\":\"输入数据为文本或数字类型\",\"link\":\"#输入数据为文本或数字类型\",\"children\":[]},{\"level\":3,\"title\":\"输入数据为图像类型\",\"slug\":\"输入数据为图像类型\",\"link\":\"#输入数据为图像类型\",\"children\":[]}]},{\"level\":2,\"title\":\"ckpt格式转为pd格式用于TFserving\",\"slug\":\"ckpt格式转为pd格式用于tfserving\",\"link\":\"#ckpt格式转为pd格式用于tfserving\",\"children\":[]},{\"level\":2,\"title\":\"为什么需要Flask服务器\",\"slug\":\"为什么需要flask服务器\",\"link\":\"#为什么需要flask服务器\",\"children\":[]},{\"level\":2,\"title\":\"Flask的HelloWorld代码\",\"slug\":\"flask的helloworld代码\",\"link\":\"#flask的helloworld代码\",\"children\":[]},{\"level\":2,\"title\":\"Flask的缺陷\",\"slug\":\"flask的缺陷\",\"link\":\"#flask的缺陷\",\"children\":[]},{\"level\":2,\"title\":\"gevent+Flask同步变异步\",\"slug\":\"gevent-flask同步变异步\",\"link\":\"#gevent-flask同步变异步\",\"children\":[]},{\"level\":2,\"title\":\"理解Nginx+Gunicorn+Flask\",\"slug\":\"理解nginx-gunicorn-flask\",\"link\":\"#理解nginx-gunicorn-flask\",\"children\":[{\"level\":3,\"title\":\"为什么要用Nginx+Gunicorn+Flask+supervisor方式部署\",\"slug\":\"为什么要用nginx-gunicorn-flask-supervisor方式部署\",\"link\":\"#为什么要用nginx-gunicorn-flask-supervisor方式部署\",\"children\":[]},{\"level\":3,\"title\":\"Nginx、gunicore和Flask之间的关系\",\"slug\":\"nginx、gunicore和flask之间的关系\",\"link\":\"#nginx、gunicore和flask之间的关系\",\"children\":[]},{\"level\":3,\"title\":\"为什么Flask和Nginx之间要用uwsgi服务器\",\"slug\":\"为什么flask和nginx之间要用uwsgi服务器\",\"link\":\"#为什么flask和nginx之间要用uwsgi服务器\",\"children\":[]},{\"level\":3,\"title\":\"为什么需要Nginx\",\"slug\":\"为什么需要nginx\",\"link\":\"#为什么需要nginx\",\"children\":[]}]},{\"level\":2,\"title\":\"部署流程\",\"slug\":\"部署流程\",\"link\":\"#部署流程\",\"children\":[]},{\"level\":2,\"title\":\"Flask\",\"slug\":\"flask\",\"link\":\"#flask\",\"children\":[]},{\"level\":2,\"title\":\"Gunicorn\",\"slug\":\"gunicorn\",\"link\":\"#gunicorn\",\"children\":[{\"level\":3,\"title\":\"什么是Gunicorn\",\"slug\":\"什么是gunicorn\",\"link\":\"#什么是gunicorn\",\"children\":[]},{\"level\":3,\"title\":\"Gunicorn配置\",\"slug\":\"gunicorn配置\",\"link\":\"#gunicorn配置\",\"children\":[]},{\"level\":3,\"title\":\"运行Gunicorn\",\"slug\":\"运行gunicorn\",\"link\":\"#运行gunicorn\",\"children\":[]}]},{\"level\":2,\"title\":\"Nginx\",\"slug\":\"nginx\",\"link\":\"#nginx\",\"children\":[{\"level\":3,\"title\":\"Nginx介绍\",\"slug\":\"nginx介绍\",\"link\":\"#nginx介绍\",\"children\":[]},{\"level\":3,\"title\":\"修改配置\",\"slug\":\"修改配置\",\"link\":\"#修改配置\",\"children\":[]},{\"level\":3,\"title\":\"Nginx的应用\",\"slug\":\"nginx的应用\",\"link\":\"#nginx的应用\",\"children\":[]},{\"level\":3,\"title\":\"安装、配置并运行Nginx\",\"slug\":\"安装、配置并运行nginx\",\"link\":\"#安装、配置并运行nginx\",\"children\":[]}]},{\"level\":2,\"title\":\"supervisord\",\"slug\":\"supervisord\",\"link\":\"#supervisord\",\"children\":[{\"level\":3,\"title\":\"新增Nginx进程配置文件\",\"slug\":\"新增nginx进程配置文件\",\"link\":\"#新增nginx进程配置文件\",\"children\":[]},{\"level\":3,\"title\":\"supervisorctl操作命令\",\"slug\":\"supervisorctl操作命令\",\"link\":\"#supervisorctl操作命令\",\"children\":[]},{\"level\":3,\"title\":\"新增Gunicorn进程配置文件\",\"slug\":\"新增gunicorn进程配置文件\",\"link\":\"#新增gunicorn进程配置文件\",\"children\":[]}]},{\"level\":2,\"title\":\"简单例子部署完成总结\",\"slug\":\"简单例子部署完成总结\",\"link\":\"#简单例子部署完成总结\",\"children\":[]},{\"level\":2,\"title\":\"部署模型\",\"slug\":\"部署模型\",\"link\":\"#部署模型\",\"children\":[]},{\"level\":2,\"title\":\"部署Docker\",\"slug\":\"部署docker\",\"link\":\"#部署docker\",\"children\":[]},{\"level\":2,\"title\":\"部署Flask\",\"slug\":\"部署flask\",\"link\":\"#部署flask\",\"children\":[]},{\"level\":2,\"title\":\"部署Gunicorn\",\"slug\":\"部署gunicorn\",\"link\":\"#部署gunicorn\",\"children\":[]},{\"level\":2,\"title\":\"部署Nginx\",\"slug\":\"部署nginx\",\"link\":\"#部署nginx\",\"children\":[]},{\"level\":2,\"title\":\"部署supervisor\",\"slug\":\"部署supervisor\",\"link\":\"#部署supervisor\",\"children\":[{\"level\":3,\"title\":\"新增Docker进程配置文件\",\"slug\":\"新增docker进程配置文件\",\"link\":\"#新增docker进程配置文件\",\"children\":[]},{\"level\":3,\"title\":\"新增Gunicorn进程配置文件\",\"slug\":\"新增gunicorn进程配置文件-1\",\"link\":\"#新增gunicorn进程配置文件-1\",\"children\":[]},{\"level\":3,\"title\":\"新增Nginx进程配置文件\",\"slug\":\"新增nginx进程配置文件-1\",\"link\":\"#新增nginx进程配置文件-1\",\"children\":[]}]},{\"level\":2,\"title\":\"部署完成总结\",\"slug\":\"部署完成总结\",\"link\":\"#部署完成总结\",\"children\":[]},{\"level\":2,\"title\":\"基于python的客户端请求\",\"slug\":\"基于python的客户端请求\",\"link\":\"#基于python的客户端请求\",\"children\":[]},{\"level\":2,\"title\":\"用ab压测\",\"slug\":\"用ab压测\",\"link\":\"#用ab压测\",\"children\":[{\"level\":3,\"title\":\"ab原理\",\"slug\":\"ab原理\",\"link\":\"#ab原理\",\"children\":[]},{\"level\":3,\"title\":\"服务器qps预估\",\"slug\":\"服务器qps预估\",\"link\":\"#服务器qps预估\",\"children\":[]},{\"level\":3,\"title\":\"对模型进行测试\",\"slug\":\"对模型进行测试\",\"link\":\"#对模型进行测试\",\"children\":[]}]},{\"level\":2,\"title\":\"多模型在线部署\",\"slug\":\"多模型在线部署\",\"link\":\"#多模型在线部署\",\"children\":[{\"level\":3,\"title\":\"多模型部署\",\"slug\":\"多模型部署\",\"link\":\"#多模型部署\",\"children\":[]},{\"level\":3,\"title\":\"模型版本控制\",\"slug\":\"模型版本控制\",\"link\":\"#模型版本控制\",\"children\":[]},{\"level\":3,\"title\":\"热更新\",\"slug\":\"热更新\",\"link\":\"#热更新\",\"children\":[]},{\"level\":3,\"title\":\"其他有用参数\",\"slug\":\"其他有用参数\",\"link\":\"#其他有用参数\",\"children\":[]},{\"level\":3,\"title\":\"多模型在线部署实例\",\"slug\":\"多模型在线部署实例\",\"link\":\"#多模型在线部署实例\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"docs/engineering/machine-learning-framework/tensorflow/tf_serving/tf_serving.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
