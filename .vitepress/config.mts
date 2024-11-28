import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zhou Daixing",
  description: "Zhou's Blog",
  base: '/blog/',
  cleanUrls: true,
  vite: {
    plugins: [
      UnoCSS(),
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhoudaixing/blog' }
    ]
  }
})
