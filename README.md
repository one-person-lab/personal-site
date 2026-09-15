# personal-site

个人项目与产品的宣传总入口（对外门户）。

复刻 [oiloil.org](https://www.oiloil.org/) 的信息架构与设计语言（产品卡片网格 + 可交互能力演示），在其基础上改造，不重复造轮子。

## 定位

| 仓库 | 定位 | 面向 |
| --- | --- | --- |
| **personal-site** | 个人项目 + 产品宣传的总入口 | 外部访客 |
| `career-hub` | 求职相关（简历 / 面试 / 投递） | 招聘方 |
| `uni-workbench` | 通用工作台 + 知识库 = 所有项目的总入口 | 自己 |

## 技术栈

- [Astro 5](https://astro.build/)（纯静态输出，可托管 GitHub Pages / 任意 CDN）
- 零运行时框架依赖，交互用原生 JS + CSS 实现

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建产物
```

## 内容维护

改文案 / 增删产品卡 / 改文章列表，只动 `src/data/site.mjs`，不必碰组件。
每个产品卡的 `demo` 字段决定卡片内嵌哪种可视化：`media` 内容流 / `product` 迭代流 / `career` 投递漏斗 / `build` 构建流水线 / `kb` 知识网络。

## 目录结构

```
src/
  data/site.mjs              # 内容数据层（唯一需要常改的文件）
  layouts/Base.astro         # 页面骨架
  components/
    ProductCard.astro        # 产品卡（内嵌可视化 demo）
    SkillsDemo.astro         # 可交互能力演示区
  pages/index.astro          # 单页，5 Tab 切换
  styles/global.css          # 设计 token 与动效
```

## 部署

纯静态产物，构建后把 `dist/` 丢到任意静态托管即可（GitHub Pages / Vercel / Netlify / Cloudflare Pages）。
