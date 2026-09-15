import { defineConfig } from 'astro/config'

// 个人项目与产品的宣传总入口。纯静态输出，可托管 GitHub Pages / 任意 CDN。
export default defineConfig({
  site: 'https://one-person-lab.github.io',
  base: '/',
  build: {
    format: 'directory',
  },
  server: {
    port: 4321,
  },
})
