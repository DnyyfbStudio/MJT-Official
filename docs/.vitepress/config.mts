import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "梦和远方",
  description: "梦和远方的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/v-logo.png",
    siteTitle: "二级标题，会替换一级标题",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present 梦和远方",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

