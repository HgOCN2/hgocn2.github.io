import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions, HeadConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  plugins: [
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
    }),
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
    // style: "@vuepress-reco/style-default", 
    primaryColor: '#ff8800',
    // primaryColor: 'transparent',
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
    series: {
      "/blogs/photograph/Tokyo2023/": [
        {
          text: "东京2023",
          children: [
            { text: "卷一：东京市区篇", children: [{text: "迷失东京", link: "/blogs/photograph/Tokyo2023/tokyo"},],},
            { text: "卷二：湘南篇", children: [{text: "湘南蓝", link: "/blogs/photograph/Tokyo2023/syounan"},],},
            { text: "卷三：横滨篇", children: [{text: "横滨港", link: "/blogs/photograph/Tokyo2023/yokohama"},],},
            { text: "卷四：热海篇", children: [{text: "热海氲氤", link: "/blogs/photograph/Tokyo2023/atami"},],},
            { 
              text: "卷五：伊豆篇",
              children: [
                { text: "始发：伊豆北川", link: "/blogs/photograph/Tokyo2023/izu/hokkawa" },
                { text: "途径：爪木崎的黄昏", link: "/blogs/photograph/Tokyo2023/izu/tsumekizaki" },
                { text: "途径：川奈海水浴场", link: "/blogs/photograph/Tokyo2023/izu/kawana" },
                { text: "终点站：城崎海岸徒步", link: "/blogs/photograph/Tokyo2023/izu/jogasaki" },
              ], 
            },
          ],
        },
        // {
        //   text: "视觉传达 Visual Communication Design",
        //   children: ["auto-machine-learning", "auto-machine-learning-introduction", "hyperparameter-optimization", "neural-architecture-search"],
        // },
      ],
    },
    
    navbar: [
      { text: "主页", link: "/" },
      { 
        text: "漫画",
        children: [
          { text: "花花画的", link: "/blogs/comic/hsqure/" },
          { text: "NICE!精选", link: "/blogs/comic/others/" },
        ],
      },
      { 
        text: "摄影集", link: "/blogs/photograph/",
        children: [
          { 
            text: "东京2023", link: "/blogs/photograph/Tokyo2023",
          },
          { text: "上海2022", link: "/blogs/photograph/" },
        ],
      },
      { text: "日常叨叨", link: "/blogs/article/" },
      {
        text: "来学习！",
        children: [
          { text: "机器学习", link: "/docs/machine-learning/" },
          { text: "视觉传达", link: "/docs/visual-communication/" },
          { text: "Others", link: "/docs/machine-learning/" },
        ],
      },
      { text: "系列合集", link: "/tags/richang/1/" },
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

  }),
  // debug: true,
});
