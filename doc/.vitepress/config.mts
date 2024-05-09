import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-Tools",
  description: "code for fun",
  base: "/FE-Tools/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'vitePluginEnvSwitch', link: '/vitePluginEnvSwitch' },
          { text: 'vitePluginI18nAutoimport', link: '/vitePluginI18nAutoimport' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PengBoUESTC' }
    ]
  }
})
