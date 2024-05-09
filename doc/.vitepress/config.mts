import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-Tools",
  description: "code for fun",
  outDir: "../dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'tools',
        items: [
          { text: 'vite-plugin-env-switch', link: '/markdown-examples' },
          { text: 'vite-plugin-i18n-autoimport', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PengBoUESTC' }
    ]
  }
})
