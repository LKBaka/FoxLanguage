---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fox Script"
  image:
    src: /console.png
    alt: Console
  tagline: 简单、效率、轻量
  actions:
    - theme: brand
      text: 快速开始
      link: /快速开始

features:
  - title: 🚀 简单
    details: FoxScript参考大量的Python和VB的简单的语法
  - title: 🔨 效率
    details: FoxScript通过动态类型为开发者省下各种繁琐时间、让开发者专注于灵感中
  - title: 🔐 轻量
    details: 如果您不介意。您甚至可以把FoxScript文件移动至U盘中使用，这不会占用太大空间
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style> 