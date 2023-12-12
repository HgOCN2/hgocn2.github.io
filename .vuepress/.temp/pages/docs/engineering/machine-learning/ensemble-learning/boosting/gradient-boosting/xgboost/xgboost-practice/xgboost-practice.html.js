export const data = JSON.parse("{\"key\":\"v-3e07abf2\",\"path\":\"/docs/engineering/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/xgboost-practice.html\",\"title\":\"XGBoost实践\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简单介绍一下XGBoost\",\"slug\":\"简单介绍一下xgboost\",\"link\":\"#简单介绍一下xgboost\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost与GBDT有什么不同\",\"slug\":\"xgboost与gbdt有什么不同\",\"link\":\"#xgboost与gbdt有什么不同\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost为什么使用泰勒二阶展开\",\"slug\":\"xgboost为什么使用泰勒二阶展开\",\"link\":\"#xgboost为什么使用泰勒二阶展开\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost为什么可以并行训练\",\"slug\":\"xgboost为什么可以并行训练\",\"link\":\"#xgboost为什么可以并行训练\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost为什么快\",\"slug\":\"xgboost为什么快\",\"link\":\"#xgboost为什么快\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost防止过拟合的方法\",\"slug\":\"xgboost防止过拟合的方法\",\"link\":\"#xgboost防止过拟合的方法\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost如何处理缺失值\",\"slug\":\"xgboost如何处理缺失值\",\"link\":\"#xgboost如何处理缺失值\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost中叶子结点的权重如何计算出来\",\"slug\":\"xgboost中叶子结点的权重如何计算出来\",\"link\":\"#xgboost中叶子结点的权重如何计算出来\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost中的一棵树的停止生长条件\",\"slug\":\"xgboost中的一棵树的停止生长条件\",\"link\":\"#xgboost中的一棵树的停止生长条件\",\"children\":[]},{\"level\":2,\"title\":\"RF和GBDT的区别\",\"slug\":\"rf和gbdt的区别\",\"link\":\"#rf和gbdt的区别\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost如何处理不平衡数据\",\"slug\":\"xgboost如何处理不平衡数据\",\"link\":\"#xgboost如何处理不平衡数据\",\"children\":[]},{\"level\":2,\"title\":\"比较LR和GBDT，说说什么情景下GBDT不如LR\",\"slug\":\"比较lr和gbdt-说说什么情景下gbdt不如lr\",\"link\":\"#比较lr和gbdt-说说什么情景下gbdt不如lr\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost中如何对树进行剪枝\",\"slug\":\"xgboost中如何对树进行剪枝\",\"link\":\"#xgboost中如何对树进行剪枝\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost如何选择最佳分裂点\",\"slug\":\"xgboost如何选择最佳分裂点\",\"link\":\"#xgboost如何选择最佳分裂点\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost的Scalable性如何体现\",\"slug\":\"xgboost的scalable性如何体现\",\"link\":\"#xgboost的scalable性如何体现\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost如何评价特征的重要性\",\"slug\":\"xgboost如何评价特征的重要性\",\"link\":\"#xgboost如何评价特征的重要性\",\"children\":[]},{\"level\":2,\"title\":\"XGBooost参数调优的一般步骤\",\"slug\":\"xgbooost参数调优的一般步骤\",\"link\":\"#xgbooost参数调优的一般步骤\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost模型如果过拟合了怎么解决\",\"slug\":\"xgboost模型如果过拟合了怎么解决\",\"link\":\"#xgboost模型如果过拟合了怎么解决\",\"children\":[]},{\"level\":2,\"title\":\"为什么XGBoost相比某些模型对缺失值不敏感\",\"slug\":\"为什么xgboost相比某些模型对缺失值不敏感\",\"link\":\"#为什么xgboost相比某些模型对缺失值不敏感\",\"children\":[]},{\"level\":2,\"title\":\"XGBoost运行环境搭建\",\"slug\":\"xgboost运行环境搭建\",\"link\":\"#xgboost运行环境搭建\",\"children\":[{\"level\":3,\"title\":\"通过pip安装\",\"slug\":\"通过pip安装\",\"link\":\"#通过pip安装\",\"children\":[]},{\"level\":3,\"title\":\"通过源码编译安装\",\"slug\":\"通过源码编译安装\",\"link\":\"#通过源码编译安装\",\"children\":[]}]},{\"level\":2,\"title\":\"XGBoost参数详解\",\"slug\":\"xgboost参数详解\",\"link\":\"#xgboost参数详解\",\"children\":[{\"level\":3,\"title\":\"常规参数\",\"slug\":\"常规参数\",\"link\":\"#常规参数\",\"children\":[]},{\"level\":3,\"title\":\"模型参数Tree Booster\",\"slug\":\"模型参数tree-booster\",\"link\":\"#模型参数tree-booster\",\"children\":[]},{\"level\":3,\"title\":\"模型参数Linear Booster\",\"slug\":\"模型参数linear-booster\",\"link\":\"#模型参数linear-booster\",\"children\":[]},{\"level\":3,\"title\":\"学习任务参数\",\"slug\":\"学习任务参数\",\"link\":\"#学习任务参数\",\"children\":[]},{\"level\":3,\"title\":\"min_child_weight参数详解\",\"slug\":\"min-child-weight参数详解\",\"link\":\"#min-child-weight参数详解\",\"children\":[]},{\"level\":3,\"title\":\"正常调参方法\",\"slug\":\"正常调参方法\",\"link\":\"#正常调参方法\",\"children\":[]}]},{\"level\":2,\"title\":\"XGBoost实战\",\"slug\":\"xgboost实战\",\"link\":\"#xgboost实战\",\"children\":[{\"level\":3,\"title\":\"数据格式\",\"slug\":\"数据格式\",\"link\":\"#数据格式\",\"children\":[]},{\"level\":3,\"title\":\"代码简单实践：毒蘑菇判定\",\"slug\":\"代码简单实践-毒蘑菇判定\",\"link\":\"#代码简单实践-毒蘑菇判定\",\"children\":[]},{\"level\":3,\"title\":\"基于XGBoost原生接口的分类\",\"slug\":\"基于xgboost原生接口的分类\",\"link\":\"#基于xgboost原生接口的分类\",\"children\":[]},{\"level\":3,\"title\":\"基于XGBoost原生接口的回归\",\"slug\":\"基于xgboost原生接口的回归\",\"link\":\"#基于xgboost原生接口的回归\",\"children\":[]},{\"level\":3,\"title\":\"基于Scikit-learn接口的分类\",\"slug\":\"基于scikit-learn接口的分类\",\"link\":\"#基于scikit-learn接口的分类\",\"children\":[]},{\"level\":3,\"title\":\"基于Scikit-learn接口的回归\",\"slug\":\"基于scikit-learn接口的回归\",\"link\":\"#基于scikit-learn接口的回归\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"docs/engineering/machine-learning/ensemble-learning/boosting/gradient-boosting/xgboost/xgboost-practice/xgboost-practice.md\"}")

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
