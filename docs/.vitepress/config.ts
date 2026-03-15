import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const description = [
  "欢迎来到 cbofjou 的个人博客，这里是我记录学习和生活的地方。希望我的分享能为你带来帮助和启发！"
].toString();

export default defineConfig({
  extends: teekConfig,
  title: "cbofjou",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teek | VitePress Theme" }],
    ["meta", { property: "og:site_name", content: "Teek" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "Teek" }],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详情",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "归档", link: "/archives" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cbofjou",
      },
    ],
    search: {
      provider: "local",
    }
  },
  vite: {
    plugins: [
      llmstxt() as any,
      ViteImageOptimizer({
        test: /\.(jpe?g|png|webp)$/i,
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
        webp: {
          quality: 80,
        },
        exclude: /node_modules/,
        includePublic: true,
      })
    ],
  },
});
