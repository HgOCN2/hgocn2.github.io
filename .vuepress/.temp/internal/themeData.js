export const themeData = JSON.parse("{\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"VuePress2\",\"description\":\"Vue 驱动的静态网站生成器\"}},\"primaryColor\":\"#ff8800\",\"logo\":\"/logo.png\",\"author\":\"Hua Hua\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"autoSetSeries\":true,\"series\":{\"/blogs/photograph/Tokyo2023/\":[{\"text\":\"东京2023\",\"children\":[{\"text\":\"卷一：东京市区篇\",\"link\":\"/blogs/photograph/Tokyo2023/K1\"},{\"text\":\"卷二：湘南篇\",\"link\":\"/blogs/photograph/Tokyo2023/K2\"}]}]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"漫画\",\"children\":[{\"text\":\"花花画的\",\"link\":\"/blogs/comic/hsqure/\"},{\"text\":\"NICE!精选\",\"link\":\"/blogs/comic/others/\"}]},{\"text\":\"摄影集\",\"link\":\"/blogs/photograph/\",\"children\":[{\"text\":\"东京2023\",\"link\":\"/blogs/photograph/Tokyo2023\"},{\"text\":\"上海2022\",\"link\":\"/blogs/photograph/\"}]},{\"text\":\"日常叨叨\",\"link\":\"/blogs/article/\"},{\"text\":\"来学习！\",\"children\":[{\"text\":\"机器学习\",\"link\":\"/docs/machine-learning/\"},{\"text\":\"视觉传达\",\"link\":\"/docs/visual-communication/\"},{\"text\":\"Others\",\"link\":\"/docs/machine-learning/\"}]},{\"text\":\"系列合集\",\"link\":\"/tags/richang/1/\"}],\"commentConfig\":{\"type\":\"valie\",\"options\":{}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
