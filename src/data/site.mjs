/* 站点内容源。改文案只需要动这个文件，不必碰组件。 */

export const profile = {
  brand: 'one-person-lab',
  tagline: '一个人，做出一整个产品矩阵。',
  lede: '我做工作台、做工具、做内容系统——把重复的事交给机器，把判断留给自己。下面是正在做的事。',
  email: '136267719@qq.com',
  github: 'https://github.com/one-person-lab',
}

export const tabs = [
  { id: 'products', label: '产品' },
  { id: 'skills', label: '能力' },
  { id: 'articles', label: '文章' },
  { id: 'about', label: '关于我' },
  { id: 'contact', label: '交流' },
]

/* demo 字段决定卡片里内嵌哪种可视化：
   media 内容流 / product 迭代流 / career 投递漏斗 / build 构建流水线 / kb 知识网络 */
export const products = [
  {
    num: '01',
    name: 'media-hub',
    tag: '自媒体工作台',
    desc: '选题、文案、排期、复盘收在一处，一个人的内容生产线。',
    href: 'https://github.com/one-person-lab/media-hub',
    cta: '查看源码',
    demo: 'media',
  },
  {
    num: '02',
    name: 'product-hub',
    tag: '产品工作台',
    desc: '从需求池到迭代记录，把每一次产品决策留成可追溯的轨迹。',
    href: 'https://github.com/one-person-lab/product-hub',
    cta: '查看源码',
    demo: 'product',
  },
  {
    num: '03',
    name: 'career-hub',
    tag: '求职工作台',
    desc: '简历、面试、投递与作品集原件统一管理，求职不再散落各处。',
    href: 'https://github.com/one-person-lab/career-hub',
    cta: '查看源码',
    demo: 'career',
  },
  {
    num: '04',
    name: 'build-hub',
    tag: '工程底座',
    desc: '构建、资产与工程化能力的公共底座，支撑上面所有工作台。',
    href: 'https://github.com/one-person-lab/build-hub',
    cta: '查看源码',
    demo: 'build',
  },
  {
    num: '05',
    name: 'uni-workbench',
    tag: '通用工作台',
    desc: '通用工作台 + 知识库，我所有项目的总入口。',
    href: 'https://github.com/one-person-lab/uni-workbench',
    cta: '查看源码',
    demo: 'kb',
  },
]

export const articles = [
  {
    date: '2026-09',
    title: '为什么我把三个工作台拆成三个仓库',
    sub: '关于边界、复用与心智负担',
    href: '#',
  },
  {
    date: '2026-09',
    title: '知识库不该按 PARA 分',
    sub: '加工程度与用途是两条轴',
    href: '#',
  },
  {
    date: '2026-08',
    title: '开源前必须过的三道门禁',
    sub: '泄露校验、品牌残留、历史清洗',
    href: '#',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/one-person-lab' },
  { label: '邮箱', href: 'mailto:136267719@qq.com' },
]
