import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/FoxLanguage',
  title: "Fox Script",
  description: "高效、简单和朴实无华😊",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入交流群', link: '/加入交流群' },
      {
        text: '当前发行版本',
        items: [
          { text: "0.1", link: "https://www.123684.com/s/qvjrVv-HRkl" },
          /*{ text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },*/
        ]
      }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '你好，世界！', link: '/快速开始/你好，世界！' },
          { text: '数据类型', link: '/快速开始/数据类型' },
          { text: '变量', link: '/快速开始/变量' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
