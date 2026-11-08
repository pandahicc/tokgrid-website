# TokGrid 官方静态网站建设执行规范

**用途：** 交给其他 AI 编程助手 / Agent 执行完整的网站建设任务。\
**域名：** https://tokgrid.app/\
**Chrome Web Store：**
https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl\
**首发语言：** 英文\
**项目类型：** 静态产品官网与 Chrome 扩展推广站

------------------------------------------------------------------------

## 0. 给执行 AI 的总指令

请实际检查项目环境并完成网站，而不只是提供建议或代码片段。先检查工作目录、现有代码、品牌资源和产品素材，再决定新建或接入现有项目。不要覆盖已有文件而不检查。

交付一个可构建、可部署、搜索引擎可抓取的英文静态网站。网站应完成品牌展示、产品解释、搜索引擎优化、AI
搜索可理解性和 Chrome Web Store 安装转化。

执行原则：

-   不虚构功能、用户数、评分、客户评价、价格、性能数据或测试结果。
-   不暗示 TokGrid 是 TikTok 官方产品、合作伙伴或附属产品。
-   不声称可以访问 TikTok 未公开数据、完整数据库或所有历史视频。
-   必须准确说明：扩展处理的是用户浏览器中公开页面已加载、可访问的数据；不能承诺完整采集所有视频或所有字段。
-   官网只宣传当前已实现的 TikTok
    功能。品牌架构可以为未来其他平台留空间，但不得暗示其他平台已支持。
-   不需要用户系统、数据库、后台管理或自建 API。
-   不添加不必要的第三方追踪、广告 SDK 或外部服务。
-   没有真实截图时使用明确标记的占位区，不得伪装成真实产品界面。
-   核心文案必须存在于静态生成的 HTML 中，不能依赖客户端 JavaScript
    才出现。
-   信息不确定时采用保守表述或占位符，并在最终报告中列为待确认事项；不要猜测。
-   若无法访问 Chrome Web Store
    页面，以本文产品事实为基线，并列出需进一步核实项。

## 1. 品牌与产品基线

### 品牌

-   品牌：**TokGrid**
-   官网：`https://tokgrid.app/`
-   产品：Chrome 浏览器扩展
-   当前定位：TikTok 视频分析、内容研究、商品研究和数据整理工具
-   长期品牌方向：**Social Media Data Intelligence**
-   当前实际支持平台：TikTok（仅宣传已实现功能）

### 推荐品牌定位与文案

定位：**Social Media Data Intelligence**

首页主标题：

> Turn TikTok Content Into Actionable Insights.

副标题：

> Analyze video performance, research competitors, explore products, and
> organize public page data --- all in your browser.

辅助表达：

> Research smarter. Understand content. Discover opportunities.

可在不改变含义的前提下润色，但不得夸大能力。

### 产品价值主张

TokGrid 帮助内容研究人员、电商卖家、选品人员和营销人员，把 TikTok
公开页面中已加载、可访问的视频和商品信息整理为更易筛选、分析和导出的结构化数据。

主要价值： - 在浏览器中研究公开内容。 - 将视频信息整理为结构化列表。 -
对视频表现和互动指标进行筛选、排序和统计。 -
研究创作者、竞品内容和商品信息。 - 将可用数据导出供后续分析。 -
采用本地优先的处理方式，减少不必要的数据上传。

### 目标用户

1.  TikTok Shop 电商卖家和选品人员。
2.  内容营销人员和社交媒体运营人员。
3.  创作者研究人员。
4.  竞品分析人员。
5.  需要整理公开视频数据的研究人员。

不要把 TokGrid 描述成企业级社交聆听平台。

## 2. 产品功能事实与文案边界

以下为已知产品范围，实际页面和当前商店版本如有差异，以真实已发布功能为准。

### Video Analytics

可介绍（仅限当前版本真实具备的功能）： -
整理当前页面已加载的视频数据。 -
显示可获取的视频指标，如播放量、点赞、评论、分享、收藏等。 -
展示互动率或其他基于可用字段计算的指标。 - 视频列表筛选、排序和浏览。 -
视频排名、概览统计或图表（仅当当前版本确实具备）。 -
用于发现高表现内容、观察内容趋势和研究竞品视频。

不得承诺： - 覆盖某账号全部历史视频。 - 所有视频都能获得所有指标。 -
页面数据等同于 TikTok 官方完整数据 API。 -
未经确认自行定义互动率公式或统计口径。

### Product Research

可介绍（以实际版本为准）： - 整理页面中可访问的商品信息。 -
商品标题、封面、分类路径、卖家 ID、SKU 数量等可获取字段。 -
商品浏览和整理。 - 辅助商品发现、选品和内容关联研究。

不得声称提供完整 TikTok Shop
商品数据库，也不得虚构销量、销售额、广告数据。

### Video & Subtitle Downloads

可介绍当前版本真实支持的视频下载、清晰度、字幕格式（如 VTT / SRT）和 Pro
批量下载功能。

不得： - 声称每个视频都可下载。 - 宣传绕过访问控制、DRM 或安全限制。 -
未核实就列出分辨率、格式或 Free / Pro 权益。

下载页面应提醒用户遵守适用法律、平台规则及内容权利人的授权要求。

### Data Export

可介绍 CSV / JSON
导出（以当前版本为准），以及将结构化数据用于电子表格或进一步研究。不得虚构
Excel、Google Sheets 等集成。

### Local-first & Privacy

已知方向： - 本地优先的浏览器扩展。 - 基础扩展使用是否无需 TokGrid
账号，应与当前版本核实。 -
产品设计强调在用户浏览器本地处理可访问页面数据。

Privacy 页面发布前必须核实： - 页面数据是否全部不会离开设备。 - 是否有
Pro 订阅验证、支付、许可证、崩溃报告或遥测。 - 官网是否使用
Analytics、Cookie、表单服务或第三方嵌入。 - 扩展是否向服务端发送元数据。

必须区分扩展本地处理、必要的许可证/支付通信和官网访问统计。不得未经核实写出"完全不收集任何数据""绝不进行任何网络请求"等绝对化承诺。

## 3. 网站信息架构

第一版至少完成：

  页面       URL                             目标
  ---------- ------------------------------- --------------------------
  首页       `/`                             品牌介绍、价值、安装转化
  视频分析   `/features/video-analytics/`    视频分析功能
  商品研究   `/features/product-research/`   商品研究功能
  批量下载   `/features/bulk-download/`      下载与 Pro 功能
  数据导出   `/features/data-export/`        CSV / JSON 导出
  指南首页   `/guides/`                      教程入口
  隐私政策   `/privacy/`                     数据处理说明
  支持       `/support/`                     支持渠道和 FAQ
  关于       `/about/`                       品牌与产品介绍
  更新日志   `/changelog/`                   真实产品更新

桌面导航：Logo、Features、Guides、Changelog、Privacy、Add to
Chrome。移动端使用简洁菜单，安装入口必须容易找到。

页脚包含：品牌简述、Features、Guides、Privacy、Support、About、Chrome
Web Store 链接及独立产品声明。

## 4. 首页设计与内容

### 视觉方向

-   现代、简洁、可信赖的 SaaS / Developer Tool 风格。
-   浅色背景、深色文字，紫色/蓝色/靛蓝色作为统一强调色。
-   清晰留白、卡片和数据可视化布局。
-   优先真实扩展截图。
-   避免模板化夸张渐变、无意义装饰和虚构客户评价。
-   响应式适配桌面、平板、手机。

### 首页内容顺序

1.  **Header**：品牌、导航、安装 CTA。
2.  **Hero**：
    -   H1: "Turn TikTok Content Into Actionable Insights."
    -   描述： "Analyze video performance, research competitors, explore
        products, and organize public page data --- all in your
        browser."
    -   CTA: "Add to Chrome --- Free"（Free 承诺需与当前版本核实）
    -   辅助信息：No TokGrid account required for core extension use /
        Local-first data processing（账号要求需核实）
3.  **Product Preview**：展示真实扩展截图。
4.  **Core Features**：Video Analytics、Product Research、Video &
    Subtitle Downloads、Structured Data Export。
5.  **How It Works**：打开受支持的公开 TikTok 页面 → TokGrid
    整理页面可用数据 → 筛选排序分析 → 导出或下载支持的数据。
6.  **Use Cases**：Competitor Content Research、Creator Performance
    Research、Product Discovery、Content Trend Analysis。
7.  **Privacy / Local-first**：简述处理方式并链接 Privacy。
8.  **FAQ**：What is TokGrid? Is it free? Does it require an account?
    Which pages are supported? Does it collect every video? Can I export
    data? Does it support bulk downloads? Is it affiliated with TikTok?
9.  **Final CTA**：再次引导安装。
10. **Footer**：站点链接和独立产品声明。

### 截图素材

至少准备四类真实截图： - 视频列表和指标。 - 视频分析概览或统计图表。 -
商品研究列表。 - 下载和导出界面。

截图存放在 `public/images/`，使用 WebP / AVIF，提供准确
alt。数据脱敏。若没有截图，使用明确标记的占位组件，并在最终报告列出素材需求。不得伪造产品界面。

## 5. 功能页规范

功能页必须有独立、实质内容，不能只是复制首页卡片。

### `/features/video-analytics/`

-   H1: TikTok Video Analytics
-   功能简介、真实列表截图、可用指标、筛选排序、排名/图表（仅已实现）、使用场景、数据限制、FAQ、安装
    CTA。
-   自然覆盖关键词：TikTok video analytics、TikTok video
    performance、TikTok engagement rate、TikTok competitor research。

### `/features/product-research/`

-   H1: TikTok Product Research
-   商品研究场景、真实可用字段、分类和卖家信息、截图、操作步骤、数据可用性说明、FAQ、CTA。

### `/features/bulk-download/`

-   H1: TikTok Video and Subtitle Downloads
-   单条和批量下载区别、Free / Pro
    权益（先核实）、可用清晰度和字幕格式（先核实）、步骤、内容权利提示、FAQ、CTA。
-   不得声称能下载所有视频。

### `/features/data-export/`

-   H1: Export TikTok Research Data
-   CSV / JSON 支持情况、真实可导出字段、研究工作流、截图、步骤、CTA。

## 6. Guides 内容策略

第一版建立 Guides 列表页和文章模板。建议首批 8 个英文选题：

1.  How to Analyze TikTok Video Performance
2.  How to Calculate TikTok Engagement Rate
3.  How to Find High-Performing TikTok Videos
4.  How to Research TikTok Competitors
5.  How to Find TikTok Products by Category
6.  How to Export TikTok Video Data to CSV
7.  How to Analyze TikTok Creator Content
8.  How to Bulk Download TikTok Videos

若无法一次完成全部文章，至少完成列表页、文章模板和 2
篇高质量文章，其余进入 backlog。

每篇文章必须解决明确问题，包含可执行步骤、限制说明、相关功能页内链和真实截图；不得堆砌关键词、编造研究数据或只写广告。建议用
Astro Content Collections 管理 Markdown。

示例 frontmatter（日期按真实发布日期填写）：

``` yaml
title: "How to Analyze TikTok Video Performance"
description: "A practical guide to reviewing publicly available TikTok video metrics."
pubDate: 2026-11-08
updatedDate: 2026-11-08
draft: true
```

未完成或未核实文章保持 draft。

## 7. 技术架构

推荐技术栈：

  层级                       方案
  -------------------------- --------------------------------------
  Framework                  Astro
  Styling                    Tailwind CSS
  Language                   TypeScript（如适用）
  Content                    Astro Content Collections / Markdown
  Hosting                    Cloudflare Pages
  Repository                 GitHub
  Backend / Database / CMS   第一版不需要

官方文档： - Astro: https://docs.astro.build/ - Tailwind:
https://tailwindcss.com/docs - Cloudflare Pages:
https://developers.cloudflare.com/pages/ - GitHub:
https://docs.github.com/

初始化示例：

``` bash
npm create astro@latest tokgrid-website
cd tokgrid-website
npx astro add tailwind
npm run dev
npm run build
```

按当前 Astro / Tailwind 官方文档采用最新兼容配置，不要照搬过时配置。

推荐目录：

``` text
tokgrid-website/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── robots.txt
│   ├── images/
│   └── og/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── InstallButton.astro
│   │   ├── Screenshot.astro
│   │   ├── FAQ.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── content/
│   │   └── guides/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   ├── support.astro
│   │   ├── changelog.astro
│   │   ├── features/
│   │   └── guides/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

目录可根据实际项目调整，但必须保持组件复用、页面清晰和内容可维护。

工程要求： - 使用 Astro 静态输出，构建产物默认 `dist/`。 -
核心文案存在于静态 HTML。 - 不引入不必要客户端 JS。 -
图片压缩，设置尺寸/比例，避免布局偏移。 -
避免不必要第三方字体、脚本和自动播放视频。

## 8. Chrome Web Store 安装入口

统一商品链接：

``` text
https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl
```

可加 UTM 参数区分网站来源，例如：

``` text
?utm_source=tokgrid.app&utm_medium=website&utm_campaign=homepage
```

UTM 仅用于来源标记，不要承诺商店提供完整安装归因。

建立复用的 `InstallButton` 组件。CTA 可用： - Add to Chrome --- Free -
Install TokGrid - Get TokGrid

Free / Pro 权益未核实前不要做不准确承诺。

CTA 位置：Header、Hero、各功能页、相关 Guides
内容、Footer。所有按钮必须链接到真实商店页面。

网站上线后，建议 Chrome Web Store 后台设置： - Homepage URL:
`https://tokgrid.app/` - Support URL: `https://tokgrid.app/support/`

网站上线且支持渠道可用后再修改商店配置。

## 9. SEO 技术要求

### Metadata

每页必须有独立： - `<title>` - meta description - canonical URL - Open
Graph title / description / image - Twitter Card metadata - 语言声明 -
正确 H1 / H2 层级

首页建议：

``` html
<title>TokGrid — TikTok Video Analytics & Product Research</title>
<meta
  name="description"
  content="Analyze TikTok video performance, research competitors, explore products, and export structured data with TokGrid, a local-first Chrome extension."
/>
<link rel="canonical" href="https://tokgrid.app/" />
```

自然表达关键词，不要重复堆砌。

### Structured Data

按实际页面加入 JSON-LD： - SoftwareApplication - Organization -
WebSite - BreadcrumbList - Article（教程）

SoftwareApplication 示例：

``` json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TokGrid",
  "applicationCategory": "BrowserApplication",
  "operatingSystem": "Chrome",
  "description": "A browser extension for TikTok video analytics, product research, and structured data export.",
  "url": "https://tokgrid.app/",
  "installUrl": "https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl"
}
```

不得虚构 `aggregateRating`、review、用户数量或价格。只写真实功能。使用
Google 当前结构化数据指南检查。

### Sitemap 与 robots.txt

生成包含所有希望索引的 canonical 页面 Sitemap。若采用 Astro sitemap
集成，按当前官方文档配置。确认实际输出路径后再写 robots.txt。

示例（路径需按实际生成结果核对）：

``` text
User-agent: *
Allow: /

Sitemap: https://tokgrid.app/sitemap-index.xml
```

不要无意屏蔽 CSS、图片或核心页面。

### AI Search

-   页面主体必须是可抓取 HTML。
-   使用清晰产品名称、功能描述、FAQ、教程结构。
-   About、Privacy、Features 等页面互相链接。
-   可按策略允许 `OAI-SearchBot`。
-   `OAI-SearchBot`（搜索发现）与
    `GPTBot`（模型训练相关）用途不同，应分别决定。
-   不承诺保证被 ChatGPT、Perplexity 或其他 AI 搜索推荐。
-   不需要为了 AI 搜索而生成没有实质价值的
    `llms.txt`，也不能把它当成收录保证。

### Search Console

部署后： - Google Search Console 验证域名并提交 Sitemap。 - Bing
Webmaster Tools 验证并提交 Sitemap。 -
检查首页、功能页和文章索引状态。 - 检查 canonical、重定向、robots。 -
记录上线日期和初始索引状态。

## 10. Privacy、Support 与合规

### Privacy Policy

必须核实并准确说明： 1. 扩展读取哪些页面内容/字段。 2.
页面数据在哪里处理。 3. 是否上传页面数据或个人数据。 4.
是否存在许可证验证、Pro 订阅或支付服务。 5.
官网是否使用访问分析、Cookie、表单或第三方嵌入。 6.
是否有日志、错误报告或遥测。 7. 数据保留期限（如适用）。 8.
联系方式和隐私请求渠道。

资料缺失时使用待填项，不得伪造公司地址、法人信息或邮箱。

### Support

至少包括安装说明、基础使用方式、FAQ、支持范围与限制、真实反馈/联系渠道。没有真实支持邮箱时不要编造；标记待提供，并在上线前提醒用户补齐。

### 独立产品声明

建议在 Footer 或 Privacy 中加入：

> TokGrid is an independent browser extension and is not affiliated
> with, endorsed by, or sponsored by TikTok or ByteDance.

按适用政策和法律要求复核。不要使用 TikTok 官方
Logo、官方品牌视觉或容易造成官方背书误解的设计。

### 下载提示

提醒用户确保下载和使用内容符合适用法律、平台条款及内容权利人的授权要求。不要给出"所有地区均合法"等法律保证。

## 11. 分析与转化追踪

第一版可不安装第三方 Analytics。若使用统计工具，先核实隐私政策和 Cookie
要求。

建议追踪： - 页面浏览（如启用统计）。 - Header 安装 CTA 点击。 - Hero
安装 CTA 点击。 - 功能页 CTA 点击。 - Guides CTA 点击。 - UTM 来源。

优先选择隐私友好、低开销方案，不要默认安装多个分析脚本。

必须区分网站 CTA 点击、商店页访问、实际安装、活跃用户。CTA
点击不等于安装量。

## 12. Cloudflare Pages 部署

推荐配置：

  配置                     值
  ------------------------ -----------------
  Framework preset         Astro
  Build command            `npm run build`
  Build output directory   `dist`
  Root directory           `/`

部署步骤： 1. 推送代码到 GitHub。 2. Cloudflare Pages
创建项目并连接仓库。 3. 设置构建参数。 4. 首次部署到预览域名。 5.
检查预览页面。 6. 添加 `tokgrid.app` 自定义域名。 7. 按 Cloudflare
提示设置 DNS。 8. 验证 HTTPS、重定向和最终域名。

不得在未确认 DNS 托管状态时覆盖现有 DNS 记录。

上线检查： - `https://tokgrid.app/` 可访问。 - HTTP 自动跳转 HTTPS。 -
根域名与 www 策略明确，单一 canonical 域名。 - 无循环重定向。 -
内链、图片、Sitemap、robots 正常。 - 404 页面可用。 - 手机端布局正常。

## 13. 性能、无障碍与质量

性能： - 减少客户端 JS。 - 压缩图片，非首屏图片延迟加载。 -
避免不必要第三方脚本。 - 使用合理字体策略。 - 避免大体积视频自动播放。 -
检查 Core Web Vitals。

可访问性： - 图片有准确 alt。 - 按钮有清晰文本。 - 导航可键盘访问。 -
焦点状态清晰。 - 颜色对比度合理。 - 表单有标签和错误提示。 -
标题层级正确。

至少检查 Chrome 桌面、常见手机和 tablet 视口。执行 Lighthouse
Performance、Accessibility、Best Practices、SEO
测试并记录真实结果，不得伪造分数。

## 14. 推荐实施阶段

### Phase 1 --- 检查与准备

-   检查工作目录和现有代码。
-   核实当前产品功能和商店文案。
-   收集 Logo、图标、真实截图。
-   核实 Privacy 所需事实。
-   建立待确认清单。

### Phase 2 --- 网站基础设施

-   初始化 Astro。
-   配置 Tailwind。
-   建立全局布局、Header、Footer、SEO 组件。
-   配置站点 URL、静态构建、favicon。

### Phase 3 --- MVP 页面

完成首页、四个功能页、Privacy、Support、About、Changelog、Guides
列表页。

### Phase 4 --- 内容与 SEO

-   每页 Metadata。
-   JSON-LD。
-   Sitemap、robots.txt。
-   内链。
-   至少 2 篇高质量 Guides。
-   其他文章进入 backlog。

### Phase 5 --- 测试与部署

-   生产构建。
-   修复构建和链接错误。
-   响应式检查。
-   Lighthouse。
-   预览部署。
-   用户确认后绑定正式域名。
-   提交 Search Console 和 Bing Webmaster Tools。

### Phase 6 --- 交付

提供完整源代码、README、本地运行/构建/部署说明、页面清单、SEO
说明、依赖版本、素材缺失清单、待确认事项、测试结果和部署状态。

## 15. 验收标准（Definition of Done）

### 网站

-   [ ] 首页可访问。
-   [ ] 所有功能页可访问。
-   [ ] Privacy、Support、About、Changelog 可访问。
-   [ ] Guides 列表和文章模板可用。
-   [ ] 所有 CTA 指向正确商店页面。
-   [ ] Header、Footer、移动导航正常。
-   [ ] 404 页面存在。
-   [ ] 无明显死链或空白页面。

### 内容准确性

-   [ ] 功能描述与当前扩展一致。
-   [ ] 无虚构用户数、评分、评价或性能数据。
-   [ ] 无宣称支持未实现的平台。
-   [ ] 明确数据来自公开页面中可访问/已加载的信息。
-   [ ] 无暗示 TokGrid 是 TikTok 官方产品。
-   [ ] Privacy 经事实核对。
-   [ ] Free / Pro 权益经核对。

### SEO

-   [ ] 每页独立 Title、Description、Canonical。
-   [ ] Open Graph 完整。
-   [ ] JSON-LD 有效且真实。
-   [ ] Sitemap、robots 可访问。
-   [ ] 核心内容存在于静态 HTML。
-   [ ] 页面内链合理。
-   [ ] 无关键词堆砌。

### 工程

-   [ ] `npm run build` 成功。
-   [ ] 无关键控制台错误。
-   [ ] 图片优化。
-   [ ] 手机、平板、桌面布局正常。
-   [ ] 无明显横向溢出。
-   [ ] 主要交互可键盘操作。
-   [ ] Lighthouse 已执行并记录真实结果。

### 部署

-   [ ] Cloudflare Pages 部署成功，或提供可执行部署说明。
-   [ ] 自定义域名 DNS 正确。
-   [ ] HTTPS 正常。
-   [ ] 根域名/www 重定向明确。
-   [ ] Sitemap 已提交或提供提交步骤。

## 16. 待确认素材与事实

执行者必须维护此清单：

  项目                         状态 / 要求
  ---------------------------- ------------------------------------------------
  TokGrid Logo / SVG           待提供或从现有产品资源提取；不要擅自做冲突设计
  Chrome Web Store 链接        已提供，使用本文固定链接
  产品真实截图                 待提供或从扩展截取，不得伪造
  Free / Pro 权益              待核实
  支持的 TikTok 页面           待核实
  可导出字段                   待核实
  下载分辨率与字幕格式         待核实
  Privacy 事实                 待核实
  Support 邮箱                 待提供，不得编造
  域名 DNS / Cloudflare 权限   待确认，不得覆盖现有 DNS
  Search Console               上线后配置
  Bing Webmaster Tools         上线后配置

缺少素材不应阻止其他部分开发。用明确占位符继续，并在最终报告中列出用户需要补充的资料。

## 17. 最终执行报告格式

完成后必须输出：

### A. 完成情况

已完成的页面、组件和功能。

### B. 技术实现

Astro、Tailwind、部署平台、构建输出和关键依赖版本。

### C. SEO 实现

Title、Description、Canonical、Schema、Sitemap、robots 和站点提交状态。

### D. 测试结果

构建、链接检查、响应式检查、Lighthouse 真实结果。

### E. 未完成事项

缺失截图、文案、联系信息、隐私事实或配置。

### F. 用户需要执行的操作

例如提供截图、确认 Free / Pro 权益、确认隐私细节、提供支持邮箱、配置
DNS、授权 GitHub / Cloudflare、更新商店 Homepage / Support URL、验证
Search Console。

### G. 部署信息

只有真实部署成功后才报告正式 URL、预览 URL
和部署状态。不得把本地构建成功说成网站已上线。

------------------------------------------------------------------------

## 18. 最终执行要求

请直接检查项目环境并开始实施。优先交付视觉完成度高、内容准确、可静态构建的
MVP，而不是继续讨论技术选型。

如果资料缺失，不要停止整个项目：先完成不依赖资料的部分，将缺失内容用明确占位符处理，并在最终报告中列出需要用户补充的内容。

**最终目标：建立一个长期可维护的 TokGrid
官方产品网站，能够解释产品、建立信任、承接搜索流量，并把合适访客转化为
Chrome 扩展用户。**
