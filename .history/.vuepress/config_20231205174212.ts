import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { katexPlugin } from "vuepress-plugin-katex";


module.exports = {
  // extendsMarkdown: md => {
  //   md.use(require('markdown-it-mathjax3'))
  //   md.linkify.set({ fuzzyEmail: false })
  // },
  plugins: [
    katexPlugin()
  ],
  title: "花花的万能杂货铺",
  description: "Just playing around",
  theme: recoTheme({

    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: 'VuePress2',
        description: 'Vue 驱动的静态网站生成器',
      },
    },
    style: "@vuepress-reco/style-default", 
    logo: "/logo.png",
    author: "Hua Hua",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    autoSetSeries: true,
    // series 为原 sidebar
    // 手动设置边栏
    // series: {
    //   "/docs/machine-learning": [
    //     {
    //       text: "机器学习 Machine Learning",
    //       children: ["artificial-general-intelligence", "industry-application"],
    //     },
    //     {
    //       text: "视觉传达 Visual Communication Design",
    //       children: ["auto-machine-learning", "auto-machine-learning-introduction", "hyperparameter-optimization", "neural-architecture-search"],
    //     },
    //   ],
    //   "/docs/visual-communication": [
    //     {
    //       text: "机器学习 Machine Learning",
    //       children: ["artificial-general-intelligence", "industry-application"],
    //     },
    //     {
    //       text: "视觉传达 Visual Communication Design",
    //       children: ["auto-machine-learning", "auto-machine-learning-introduction", "hyperparameter-optimization", "neural-architecture-search"],
    //     },
    //   ],
    // },
    
    navbar: [
      { text: "主页", link: "/" },
      { 
        text: "漫画",
        children: [
          { text: "花花画的", link: "/blogs/comic/hsqure/" },
          { text: "NICE!精选", link: "/blogs/comic/others/" },
        ],
      },
      { text: "摄影集", link: "/blogs/comic/photograph/" },
      { text: "日常叨叨", link: "/blogs/comic/photograph/" },
      {
        text: "来学习！",
        children: [
          { text: "机器学习", link: "/docs/machine-learning/" },
          { text: "视觉传达", link: "/docs/visual-communication/" },
          { text: "Others", link: "/blogs/theme-reco/" },
        ],
      },
      { text: "系列合集", link: "/tags/tag1/1/" },
      // { text: "CAT合集", link: "/categories/category1/1/" },
    ],

    commentConfig: {
      type: 'valie',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
    // plugins: [
    //   [
    //     // 支持数学公式
    //     // https://vuepress.github.io/zh/plugins/mathjax/
    //     // npm install -D vuepress-plugin-mathjax
    //     'vuepress-plugin-mathjax',
    //     {
    //     }
    //   ],
    // ]

  }),
  // debug: true,
};
