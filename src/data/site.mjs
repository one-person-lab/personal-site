/* 站点内容源。改文案只需要动这个文件，不必碰组件。 */

export const profile = {
  brand: '醒醒老己 · Maken',
  name: '醒醒老己',
  tagline: '醒醒老己 · 个人产品生态',
  lede1: 'Solo Builder | Tool Maker | Content Systems',
  lede2: 'toB PM by day, 把重复交给机器 by night.      _[ ʘ̅_ʘ̅ ]_',
  lede3: 'A ONE-MAN PRODUCT ECOSYSTEM !!!',
  github: 'https://github.com/one-person-lab',
}

/* 生态飞轮：不是把几个产品硬凑在一起，而是形成闭环 */
export const ecosystem = {
  flywheel: ['传播', '创造', '沉淀', '产品化', '再传播'],
  summary: 'Loop 帮你被看见，Forge 帮你做成事，BuildHub 帮你沉淀资产，产品帮你创造价值。',
  loopLine: '内容 → 用户 → 创造 → 资产 → 产品 → 收入 → 内容',
}

/* 导航：框架 1:1 参考站（3 项 + 邮箱按钮开商务合作弹窗）；文章区暂时隐藏 */
export const nav = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于我' },
  { path: '/products', label: '产品' },
]

/* icon 字段决定卡片图标方块里的 lucide 风格图形 */
export const products = [
  {
    id: '001', name: 'Loop', tag: '创作者增长平台',
    desc: '选题 → 创作 → 发布 → 数据 → 优化 → 下一轮选题。不是单纯的 AI 写作工具，是帮个人创作者接管整个内容增长流程。',
    quote: '让每一次创作，都成为下一次增长。',
    detail: '生态的飞轮从这里转起来：内容带来用户与需求，流向下游每一个产品。',
    href: '#',
    icon: 'loop', color: '#ffb5e8', status: '开发中',
  },
  {
    id: '002', name: 'BuildHub', tag: '技能资产库',
    desc: '技能 → 方法 → 模板 → Skill → 数字资产 → 交易。整个体系里的资产层。',
    quote: '把会的东西，变成可用的资产。',
    detail: '发现 → 购买 → 解锁。存放被自己亲手验证过的能力。',
    href: 'https://buildhub.cn',
    icon: 'layers', color: '#b5deff', status: '已上线',
  },
  {
    id: '003', name: 'Forge', tag: '个人创造系统',
    desc: '知识 → 行动 → 成果 → 新资产。不是传统知识库，也不是 Todo 软件。',
    quote: '把知道的，做成自己的。',
    detail: '我知道什么 → 我想做什么 → 我正在做什么 → 我做成什么。',
    href: '#',
    icon: 'hammer', color: '#fff5b5', status: '开发中',
  },
  {
    id: '004', name: '地球 Online', tag: '人生探索 APP',
    desc: '把人生当成一场可以探索的游戏，目标、进度、成果都在这张地图上。',
    quote: '人生除了上班，还能怎么玩？',
    detail: '人生，不止一种玩法。',
    href: '#',
    icon: 'globe', color: '#b5ffce', status: '开发中',
  },
  {
    id: '005', name: '醒醒老己', tag: '挑战小程序',
    desc: '给自己一个挑战 → 去做 → 留下结果。',
    quote: '别只想，去试试。',
    detail: '想做的事，去做一次。',
    href: '#',
    icon: 'alarm', color: '#e9d5ff', status: '已上线',
  },
  {
    id: '006', name: '今晚整花活', tag: '娱乐小程序',
    desc: '给今晚找点不一样的乐子，随开随玩。',
    quote: '今晚，玩点不一样的。',
    detail: '不端着、不正经、想到就整。',
    href: '#',
    icon: 'sparkles', color: '#fed7aa', status: '已上线',
  },
]

export const articles = [
  {
    date: '2026-09-12', cat: '工程', catColor: '#b5ffce',
    title: '为什么我把三个工作台拆成三个仓库',
    excerpt: '关于边界、复用与心智负担。',
    href: '#',
  },
  {
    date: '2026-09-03', cat: '方法', catColor: '#fff5b5',
    title: '知识库不该按 PARA 分',
    excerpt: '加工程度与用途是两条轴。',
    href: '#',
  },
  {
    date: '2026-08-21', cat: '开源', catColor: '#ffb5e8',
    title: '开源前必须过的三道门禁',
    excerpt: '泄露校验、品牌残留、历史清洗。',
    href: '#',
  },
]

/* 首页第四区块：参考站是 Videos，我们的对应位是「能力」 */
export const skills = [
  {
    title: '把想法变成可用软件', en: 'IDEA → SHIPPED',
    desc: '产品经理视角 + 全栈执行力，从需求到上线一个人闭环。',
    stat: { label: 'SHIPPED', value: '5 台机器' },
  },
  {
    title: '让机器干重复的活', en: 'AUTOMATION',
    desc: '内容流水线、构建流水线、数据流水线——能自动化的绝不手动。',
    stat: { label: 'AUTO', value: '3 条流水线' },
  },
  {
    title: '把知识变成资产', en: 'KNOWLEDGE',
    desc: '自建知识库与工作流，每一次记录都为下一次省力。',
    stat: { label: 'NOTES', value: '1000+ 条' },
  },
]

/* 友情链接跑马灯（占位，换成你自己的好友站点） */
export const friends = [
  { name: '友情链接位 01', href: '#' },
  { name: '友情链接位 02', href: '#' },
  { name: '友情链接位 03', href: '#' },
  { name: '友情链接位 04', href: '#' },
]

export const about = {
  welcome: '醒醒老己 · Maken 的世界！',
  intro: [
    '我是一名白天上班、晚上开厂的产品人。',
    '中文世界叫醒醒老己，英文世界叫 Maken。白天在 toB 软件公司做产品经理，晚上经营自己的个人产品生态：传播 → 创造 → 沉淀 → 产品化 → 再传播。',
    'Loop 帮你被看见，Forge 帮你做成事，BuildHub 帮你沉淀资产，产品帮你创造价值。',
  ],
  /* ID CARD */
  idCard: {
    org: 'Maken · One-Person Product Ecosystem',
    chips: [
      { text: '2026.01', bg: '#3b82f6', fg: '#fff' },
      { text: '杭州', bg: '#f472b6', fg: '#000' },
    ],
    facts: [
      { k: 'NAME', v: '醒醒老己 / Maken', bg: '#fef08a' },
      { k: 'ROLE', v: 'toB 产品经理 / Solo Builder', bg: '#dbeafe' },
      { k: 'MISSION', v: '一个人，转起一整个产品生态', bg: '#e9d5ff' },
    ],
    idNo: 'MKN-20260101-LAB',
  },
  /* 打字机下方的小卡片（参考站「近日生活」三张便签） */
  recent: [
    { icon: 'book', label: '最近在读', value: '《纳瓦尔宝典》', color: '#3b82f6', rot: '-rotate-1' },
    { icon: 'zap', label: '最近在搞', value: '个人产品生态：Loop / Forge / BuildHub', color: '#f472b6', rot: 'rotate-2' },
    { icon: 'robot', label: '最近感兴趣', value: 'AI 编程与 Agent 工作流', color: '#4ade80', rot: '-rotate-1' },
  ],
  /* 地球Online 进度时间线 */
  timeline: [
    { date: '2026.09', kind: '主线', text: '工作台们收编为「醒醒老己 · 个人产品生态」：传播 → 创造 → 沉淀 → 产品化 → 再传播', color: '#facc15', icon: 'loop', side: 'right' },
    { date: '2026.06', kind: '主线', text: 'build-hub 工程底座落地，一个引擎撑起全部工作台', color: '#4ade80', icon: 'layers', side: 'right' },
    { date: '2026.04', kind: '主线', text: '过完开源三道门禁，工作台系列正式开源', color: '#3b82f6', icon: 'rocket', side: 'left' },
    { date: '2026.03', kind: '支线', text: 'media-hub 上线，内容生产从玄学变成流程', color: '#FACC15', icon: 'pen', side: 'right' },
    { date: '2026.01', kind: '主线', text: 'uni-workbench 诞生：给所有项目一个家', color: '#f472b6', icon: 'code', side: 'left' },
  ],
  statement: [
    '把重复交给机器，把判断留给自己',
    '一个人也是一家公司',
    '每一个 side project 都要上线',
  ],
  statementTail: [
    '我正在朝着自己喜欢的方向前进！',
    '不知道 3年 5年 10年后这条产线会长成什么样呢？',
  ],
}
