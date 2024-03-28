import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zhou's BLOG",
  description: "A Blog Site that not only focus on Frontend",
  base: '/blog/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    //TODO transform to Multiple Sidebars
    // sidebar: {
    //   '/blogs/typescipt/': [
    //     {
    //       text: 'Typescript',
    //       items: [
    //         { text: 'TypeScript入门', link: '/blogs/typescript/TypeScript入门' },
    //       ]
    //     }
    //   ],
    //   '/blogs/algorithm/': [
    //     {
    //       text: 'Algorithm 算法',
    //       items: [
    //         { text: '代码随想录', link: '/blogs/algorithm/代码随想录' },
    //       ]
    //     }
    //   ],
    // },

    sidebar: [
      {
        items: [
          { text: 'TypeScript入门', link: '/blogs/typescript/TypeScript入门' },
          { text: '代码随想录', link: '/blogs/algorithm/代码随想录' },
          { text: 'Vue Again', link: '/blogs/Vue/VueAgain' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhoudaixing/blog' }
    ]
  }
})
