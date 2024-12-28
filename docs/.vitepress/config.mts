import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/PlumLanguage',
  title: "Plum Script",
  description: "高效、简单和朴实无华😊",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入交流群', link: '/加入交流群' },
      {
        text: '当前发行版本',
        items: [
          { text: "Beta_2", link: "https://cloud.wujiyan.cc/f/81matb/Beta_2.rar" },
          /*{ text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },*/
        ]
      }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'HelloWorld程序', link: '/快速开始/HelloWorld程序' },
          { text: '变量', link: '/快速开始/变量' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
