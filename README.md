---
home: true
modules:
  - BannerBrand
#  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: 花花的万能杂货铺
  description: 应有尽有，什么都有。
  tagline: 听说这间杂货铺收集了老板在这个世界上走过的路过的所有好玩的东西，要进来看看吗？
  buttons:
    - { text: 让我们开始吧！, link: '/docs/machine-learning' }
    - { text: 先等等我看看有啥, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/HSqure' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/HSqure' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---
## 多分类

GBDT采用多类逻辑损失函数（muti-class log-loss）作为损失函数： 
$$
L(\{ y_k,F_k(x) \}^K_1)=-\sum_{k=1}^Ky_k\text{log}\ p_k(x)
$$
这里的$y_k\in [0,1]$，使用softmax来计算最后的类别概率：
$$
p_k(x)=\text{exp}(F_k(x))/\sum_{l=1}^K\text{exp}(F_l(x))
$$
从上式中我们可以得出，对于多分类问题，我们需要为每个类别创建一棵回归树$F_l(x) = 1, 2, ... , k$，每一棵树用来预测一类的概率。


## 快速开始

Update test 3

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
