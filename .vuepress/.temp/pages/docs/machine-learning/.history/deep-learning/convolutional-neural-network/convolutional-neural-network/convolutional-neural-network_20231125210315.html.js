export const data = JSON.parse("{\"key\":\"v-0cbba565\",\"path\":\"/docs/machine-learning/.history/deep-learning/convolutional-neural-network/convolutional-neural-network/convolutional-neural-network_20231125210315.html\",\"title\":\"CNN卷积神经网络\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"LeNet架构（1990s）\",\"slug\":\"lenet架构-1990s\",\"link\":\"#lenet架构-1990s\",\"children\":[]},{\"level\":2,\"title\":\"图像是像素值的矩阵\",\"slug\":\"图像是像素值的矩阵\",\"link\":\"#图像是像素值的矩阵\",\"children\":[]},{\"level\":2,\"title\":\"卷积直观解释\",\"slug\":\"卷积直观解释\",\"link\":\"#卷积直观解释\",\"children\":[]},{\"level\":2,\"title\":\"激活函数（ReLU）\",\"slug\":\"激活函数-relu\",\"link\":\"#激活函数-relu\",\"children\":[]},{\"level\":2,\"title\":\"池化直观解释\",\"slug\":\"池化直观解释\",\"link\":\"#池化直观解释\",\"children\":[]},{\"level\":2,\"title\":\"目前为止的故事\",\"slug\":\"目前为止的故事\",\"link\":\"#目前为止的故事\",\"children\":[]},{\"level\":2,\"title\":\"全连接层直观解释\",\"slug\":\"全连接层直观解释\",\"link\":\"#全连接层直观解释\",\"children\":[]},{\"level\":2,\"title\":\"组合并用反向传播训练\",\"slug\":\"组合并用反向传播训练\",\"link\":\"#组合并用反向传播训练\",\"children\":[]},{\"level\":2,\"title\":\"卷积神经网络的可视化\",\"slug\":\"卷积神经网络的可视化\",\"link\":\"#卷积神经网络的可视化\",\"children\":[]},{\"level\":2,\"title\":\"其他的ConvNet架构\",\"slug\":\"其他的convnet架构\",\"link\":\"#其他的convnet架构\",\"children\":[]},{\"level\":2,\"title\":\"CNN直观解释的总结\",\"slug\":\"cnn直观解释的总结\",\"link\":\"#cnn直观解释的总结\",\"children\":[]},{\"level\":2,\"title\":\"网络加深\",\"slug\":\"网络加深\",\"link\":\"#网络加深\",\"children\":[{\"level\":3,\"title\":\"LeNet\",\"slug\":\"lenet\",\"link\":\"#lenet\",\"children\":[]},{\"level\":3,\"title\":\"AlexNet\",\"slug\":\"alexnet\",\"link\":\"#alexnet\",\"children\":[]}]},{\"level\":2,\"title\":\"增强卷积层的功能\",\"slug\":\"增强卷积层的功能\",\"link\":\"#增强卷积层的功能\",\"children\":[{\"level\":3,\"title\":\"VGGNet\",\"slug\":\"vggnet\",\"link\":\"#vggnet\",\"children\":[]},{\"level\":3,\"title\":\"GoogLeNet\",\"slug\":\"googlenet\",\"link\":\"#googlenet\",\"children\":[]}]},{\"level\":2,\"title\":\"ResNet（网络加深+增强卷积层）\",\"slug\":\"resnet-网络加深-增强卷积层\",\"link\":\"#resnet-网络加深-增强卷积层\",\"children\":[]},{\"level\":2,\"title\":\"从分类任务到检测任务\",\"slug\":\"从分类任务到检测任务\",\"link\":\"#从分类任务到检测任务\",\"children\":[]},{\"level\":2,\"title\":\"增加新的功能模块\",\"slug\":\"增加新的功能模块\",\"link\":\"#增加新的功能模块\",\"children\":[]},{\"level\":2,\"title\":\"什么是卷积运算\",\"slug\":\"什么是卷积运算\",\"link\":\"#什么是卷积运算\",\"children\":[{\"level\":3,\"title\":\"基本假设：特征局部相关性\",\"slug\":\"基本假设-特征局部相关性\",\"link\":\"#基本假设-特征局部相关性\",\"children\":[]},{\"level\":3,\"title\":\"卷积运算的数学公式\",\"slug\":\"卷积运算的数学公式\",\"link\":\"#卷积运算的数学公式\",\"children\":[]},{\"level\":3,\"title\":\"CNN中的卷积核\",\"slug\":\"cnn中的卷积核\",\"link\":\"#cnn中的卷积核\",\"children\":[]}]},{\"level\":2,\"title\":\"使用卷积运算的动机\",\"slug\":\"使用卷积运算的动机\",\"link\":\"#使用卷积运算的动机\",\"children\":[{\"level\":3,\"title\":\"稀疏交互\",\"slug\":\"稀疏交互\",\"link\":\"#稀疏交互\",\"children\":[]},{\"level\":3,\"title\":\"参数共享\",\"slug\":\"参数共享\",\"link\":\"#参数共享\",\"children\":[]},{\"level\":3,\"title\":\"等变表示\",\"slug\":\"等变表示\",\"link\":\"#等变表示\",\"children\":[]}]},{\"level\":2,\"title\":\"对CNN中卷积的理解\",\"slug\":\"对cnn中卷积的理解\",\"link\":\"#对cnn中卷积的理解\",\"children\":[]},{\"level\":2,\"title\":\"池化层概念\",\"slug\":\"池化层概念\",\"link\":\"#池化层概念\",\"children\":[]},{\"level\":2,\"title\":\"池化层的目的与好处\",\"slug\":\"池化层的目的与好处\",\"link\":\"#池化层的目的与好处\",\"children\":[]},{\"level\":2,\"title\":\"池化层具体操作\",\"slug\":\"池化层具体操作\",\"link\":\"#池化层具体操作\",\"children\":[]},{\"level\":2,\"title\":\"从方差损失函数说起\",\"slug\":\"从方差损失函数说起\",\"link\":\"#从方差损失函数说起\",\"children\":[]},{\"level\":2,\"title\":\"交叉熵损失函数\",\"slug\":\"交叉熵损失函数\",\"link\":\"#交叉熵损失函数\",\"children\":[]},{\"level\":2,\"title\":\"损失函数总结\",\"slug\":\"损失函数总结\",\"link\":\"#损失函数总结\",\"children\":[]},{\"level\":2,\"title\":\"CNN训练原理引言\",\"slug\":\"cnn训练原理引言\",\"link\":\"#cnn训练原理引言\",\"children\":[]},{\"level\":2,\"title\":\"用BP训练全连接网络\",\"slug\":\"用bp训练全连接网络\",\"link\":\"#用bp训练全连接网络\",\"children\":[{\"level\":3,\"title\":\"全连接网络前向传播\",\"slug\":\"全连接网络前向传播\",\"link\":\"#全连接网络前向传播\",\"children\":[]},{\"level\":3,\"title\":\"全连接网络反向传播\",\"slug\":\"全连接网络反向传播\",\"link\":\"#全连接网络反向传播\",\"children\":[]}]},{\"level\":2,\"title\":\"卷积层前后向传播\",\"slug\":\"卷积层前后向传播\",\"link\":\"#卷积层前后向传播\",\"children\":[{\"level\":3,\"title\":\"卷积层前向传播\",\"slug\":\"卷积层前向传播\",\"link\":\"#卷积层前向传播\",\"children\":[]},{\"level\":3,\"title\":\"下层为卷积层的反向传播\",\"slug\":\"下层为卷积层的反向传播\",\"link\":\"#下层为卷积层的反向传播\",\"children\":[]},{\"level\":3,\"title\":\"卷积层梯度计算\",\"slug\":\"卷积层梯度计算\",\"link\":\"#卷积层梯度计算\",\"children\":[]}]},{\"level\":2,\"title\":\"降采样层前后向传播\",\"slug\":\"降采样层前后向传播\",\"link\":\"#降采样层前后向传播\",\"children\":[{\"level\":3,\"title\":\"降采样层前向传播\",\"slug\":\"降采样层前向传播\",\"link\":\"#降采样层前向传播\",\"children\":[]},{\"level\":3,\"title\":\"下层为降采样层的反向传播\",\"slug\":\"下层为降采样层的反向传播\",\"link\":\"#下层为降采样层的反向传播\",\"children\":[]},{\"level\":3,\"title\":\"降采样层梯度计算\",\"slug\":\"降采样层梯度计算\",\"link\":\"#降采样层梯度计算\",\"children\":[]}]},{\"level\":2,\"title\":\"全连接层前后向传播\",\"slug\":\"全连接层前后向传播\",\"link\":\"#全连接层前后向传播\",\"children\":[{\"level\":3,\"title\":\"全连接层前向传播\",\"slug\":\"全连接层前向传播\",\"link\":\"#全连接层前向传播\",\"children\":[]},{\"level\":3,\"title\":\"下层为全连接层的反向传播\",\"slug\":\"下层为全连接层的反向传播\",\"link\":\"#下层为全连接层的反向传播\",\"children\":[]},{\"level\":3,\"title\":\"全连接层梯度计算\",\"slug\":\"全连接层梯度计算\",\"link\":\"#全连接层梯度计算\",\"children\":[]}]},{\"level\":2,\"title\":\"学习特征图的组合\",\"slug\":\"学习特征图的组合\",\"link\":\"#学习特征图的组合\",\"children\":[]},{\"level\":2,\"title\":\"加强稀疏组合\",\"slug\":\"加强稀疏组合\",\"link\":\"#加强稀疏组合\",\"children\":[]},{\"level\":2,\"title\":\"在Matlab中的加速\",\"slug\":\"在matlab中的加速\",\"link\":\"#在matlab中的加速\",\"children\":[]},{\"level\":2,\"title\":\"实际训练问题\",\"slug\":\"实际训练问题\",\"link\":\"#实际训练问题\",\"children\":[{\"level\":3,\"title\":\"批量更新VS在线更新\",\"slug\":\"批量更新vs在线更新\",\"link\":\"#批量更新vs在线更新\",\"children\":[]},{\"level\":3,\"title\":\"学习率\",\"slug\":\"学习率\",\"link\":\"#学习率\",\"children\":[]},{\"level\":3,\"title\":\"损失函数的选择\",\"slug\":\"损失函数的选择\",\"link\":\"#损失函数的选择\",\"children\":[]},{\"level\":3,\"title\":\"检查求导是否正确\",\"slug\":\"检查求导是否正确\",\"link\":\"#检查求导是否正确\",\"children\":[]}]},{\"level\":2,\"title\":\"梯度下降法存在的问题\",\"slug\":\"梯度下降法存在的问题\",\"link\":\"#梯度下降法存在的问题\",\"children\":[]},{\"level\":2,\"title\":\"动量法\",\"slug\":\"动量法\",\"link\":\"#动量法\",\"children\":[]},{\"level\":2,\"title\":\"LeNet5手写数字识别的C++实现\",\"slug\":\"lenet5手写数字识别的c-实现\",\"link\":\"#lenet5手写数字识别的c-实现\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"docs/machine-learning/.history/deep-learning/convolutional-neural-network/convolutional-neural-network/convolutional-neural-network_20231125210315.md\"}")

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
