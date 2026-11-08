# TokGrid 官网与 Guides 博客交付报告

- 日期：2026-11-08
- 项目目录：`/home/ouyanghu/project/web/tokgrid-website`
- 目标域名：`https://tokgrid.app/`（尚未部署）
- 联系邮箱：`pandahi.cc@gmail.com`
- GA4：`G-8SL1Y6HB4Q`（生产默认启用）

---

## A. 完成情况

已完成可静态构建的英文官网与 Guides 博客：

- 首页 `/`
- Features 索引 `/features/`
- 4 个功能页：
  - `/features/video-analytics/`
  - `/features/product-research/`
  - `/features/bulk-download/`
  - `/features/data-export/`
- Guides 索引 `/guides/`
- 8 篇完整 MDX 文章（每篇约 900–1,300 词正文）：
  1. How to Analyze TikTok Video Performance
  2. How to Calculate TikTok Engagement Rate
  3. How to Find High-Performing TikTok Videos
  4. How to Research TikTok Competitors
  5. How to Find TikTok Products by Category
  6. How to Export TikTok Video Data to CSV
  7. How to Analyze TikTok Creator Content
  8. How to Bulk Download TikTok Videos
- Privacy `/privacy/`
- Support `/support/`
- About `/about/`
- Changelog `/changelog/`
- 404 `/404.html`
- `sitemap.xml`、`robots.txt`、Cloudflare `_headers`
- 12 个真实截图预留槽位（当前显示明确占位，放入图片后自动替换）
- GA4 已启用（`G-8SL1Y6HB4Q`；生产默认；可置空禁用）
- 联系邮箱已接入 Support、Privacy、Footer 和 FAQ
- GitHub Actions CI（build + check）
- 链接/SEO/JSON-LD/sitemap 自动检查脚本
- 英文 README 与中文交付报告

构建结果：**20 个 HTML 页面**，其中 **19 个可索引页面 + 404**。

## B. 技术实现

| 项目 | 实现 |
|---|---|
| Framework | Astro 7.4.7，静态输出 |
| Styling | Tailwind CSS 4.3.5，`@tailwindcss/vite`，CSS-first theme |
| Content | Astro Content Collections + MDX（`@astrojs/mdx` 8.1.3） |
| TypeScript | Astro strict 配置（未额外引入 `@astrojs/check`） |
| Client JS | 无框架客户端运行时；JSON-LD + GA4（生产默认） |
| Analytics | 生产默认启用 GA4 `G-8SL1Y6HB4Q`；env 覆盖/置空禁用 |
| Hosting target | Cloudflare Pages（推荐），输出 `dist/` |
| CI | `.github/workflows/ci.yml`：Node 22 + `npm ci` + `npm run verify` |

新增依赖仅 `@astrojs/mdx`。没有引入图标库、字体服务、图表库或 CMS。

### 设计系统

- 浅色 SaaS/开发者工具风格，靛蓝主色，玫红仅作小面积品牌点缀。
- 使用真实扩展图标（`tokgrid-icon-16/48/128.png`）。
- 无外部字体、无第三方图片、无虚构产品截图、无客户评价或评分。
- 移动导航、FAQ、文章目录均使用原生 `<details>`，不依赖 JS。
- 文章目录、关键要点、Callout、相关文章、上一篇/下一篇、安装 CTA 已完成。

## C. SEO 实现

- 每页独立 `<title>`、meta description、canonical、Open Graph、Twitter Card。
- canonical 使用 `https://tokgrid.app/` 根域名与尾斜杠。
- JSON-LD：
  - 首页：`SoftwareApplication`、`Organization`、`WebSite`、`FAQPage`
  - 子页：`BreadcrumbList`
  - 功能页/Support：`FAQPage`
  - Guides 索引：`ItemList`
  - 文章：`Article` + `BreadcrumbList`
- 未写虚假 `aggregateRating`、review、用户数、价格或销量。
- `src/pages/sitemap.xml.ts` 生成 19 个 URL，Guides 含 `lastmod`。
- `public/robots.txt` 允许抓取并指向 sitemap。
- 文章与功能页内链、Header/Footer 导航、面包屑均已完成。
- 未生成 `llms.txt`（不作为收录保证）。

## D. 测试结果

### 构建与检查

```text
npm run verify
Site check passed: 20 HTML pages, 19 sitemap URLs.
```

检查覆盖：

- 每页 title/description/canonical/OG/Twitter
- 每页唯一 H1
- JSON-LD 可解析
- 内部链接与锚点
- 图片/资源路径
- sitemap URL 与构建页面映射
- robots 指向 sitemap
- 404 noindex
- 默认仅 JSON-LD 与 GA4，无其他异常客户端脚本
- 无 TODO/lorem ipsum 标记

### Lighthouse

在本地生产预览（`http://127.0.0.1:4322`）运行移动端 Lighthouse：

| 页面 | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| 首页 | 95 | 100 | 100 | 100 |
| Guides 索引 | 98 | 100 | 100 | 100 |
| 文章（Analyze TikTok Video Performance） | 92 | 100 | 100 | 100 |
| Video Analytics 功能页 | 98 | 100 | 100 | 100 |

GA4 启用后，第三方 `gtag.js` 会占用部分移动端性能预算，因此 Performance 从之前的 100 降至 92–98；Accessibility、Best Practices、SEO 仍为 100。文章页最初因 Markdown checklist 生成未标注的 disabled checkbox，Accessibility 为 94；已改为文本勾选框并保持 100。

### 响应式

使用 Chrome CDP 在 390、768、1440 宽度检查：

- 首页
- Guides 索引
- 文章
- Video Analytics 功能页
- Privacy

结果：**所有页面 `documentElement.scrollWidth <= innerWidth`，无页面级横向溢出**。移动端 Free/Pro 表已改为可换行布局，避免只看到第一列。

### GA4

- 生产默认构建包含 `googletagmanager.com/gtag/js?id=G-8SL1Y6HB4Q`。
- Privacy 页面显示 “Google Analytics (enabled on this build)” 并注明 measurement ID 与 `_ga` Cookie。
- 使用 `PUBLIC_GA_MEASUREMENT_ID='' npm run build` 验证禁用：产物无 GA 脚本，Privacy 显示 disabled，`npm run check` 通过；随后已恢复默认构建。
- 未实现 Cookie 同意横幅；面向需要 opt-in 的地区上线前需补充同意机制或禁用 GA。

### 截图槽自动替换

- 临时放入 `data-list-filters.png` 后重新构建，首页渲染真实 `<img>`。
- 删除测试图并重新构建，页面恢复占位。
- 测试图未提交。

### 外部链接

- Chrome Web Store 链接在核验时返回 HTTP 200。
- `https://tokgrid.app/` 当前 TLS/服务不可用；未进行生产部署。

## E. 未完成事项

1. **真实产品截图**：12 个槽位目前均为占位，需要真实扩展截图。
2. **Support URL / Privacy 法律主体信息**：邮箱已设置为 `pandahi.cc@gmail.com`；CWS Support URL 与必要的法律主体信息仍待补齐。
3. **GitHub 远程仓库**：本地提交已完成；当前仓库没有 remote，也没有 `gh` 登录，实际 push 需要远程地址与凭据。
4. **GA 同意/合规评估**：GA4 已默认启用并可能设置 `_ga` Cookie；当前没有 Cookie 同意横幅，面向 EEA/UK 等地区上线前需评估或禁用。
5. **Cloudflare Pages / DNS 权限**：未执行部署，未修改 DNS。
6. **Chrome Web Store Homepage/Support URL**：需上线后更新。
7. **Search Console / Bing Webmaster Tools**：未提交。
8. **Pro 价格展示**：已确认不在网站展示；网站只说明 Pro 为付费升级，具体方案在扩展内查看。
9. **法律/隐私审阅**：Privacy 已按当前代码事实编写，但正式上线前建议进行法律审阅。
10. **GitHub Actions 实际运行**：CI 文件已创建，但尚未在 GitHub 上触发。

## F. 用户需要执行的操作

1. 提供或放入 12 张真实插件截图到 `public/images/screenshots/`，文件名、所在页面和图片含义见 `docs/screenshot-guide.md`。
2. 在 Chrome Web Store 后台配置 Support URL；如需变更邮箱，更新 `src/data/site.ts`。
3. 提供 GitHub 仓库地址并完成认证，然后执行：
   ```bash
   git remote add origin git@github.com:<owner>/tokgrid-website.git
   git push -u origin main
   ```
4. GA4 已默认启用；如受众地区要求 opt-in，请在 Cloudflare Pages 增加同意机制，或用 `PUBLIC_GA_MEASUREMENT_ID=''` 禁用。
5. 在 Cloudflare Pages 连接 GitHub，配置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: `/`
6. 确认 DNS 托管状态后绑定 `tokgrid.app`；当前域名不可服务，不要覆盖现有 DNS 记录。
7. 上线后更新 Chrome Web Store 的 Homepage URL 与 Support URL。
8. 上线后提交 Google Search Console 与 Bing Webmaster Tools 的 sitemap。
9. 确认是否要更新 Pro 方案说明；当前页面已确认不展示订阅价格。

## G. 部署信息

**未部署，未上线。**

- 本地生产构建已通过，产物目录：`dist/`
- 页面数：20 HTML；sitemap：19 URL
- Chrome Web Store 链接：可访问（核验时 HTTP 200）
- `https://tokgrid.app/`：当前 TLS/服务不可用
- GitHub：本地 `main` 分支已提交；**没有配置 remote**，因此没有远程仓库 URL，也没有 push
- GA4：生产构建已启用 `G-8SL1Y6HB4Q`
- Cloudflare Pages / DNS：未执行

在完成远程 push、Cloudflare 项目创建、自定义域名绑定与 HTTPS 验证之前，不应对外声称网站已上线。

---

## 附：关键文件

- `README.md` — 开发、内容、SEO、部署说明
- `docs/screenshot-guide.md` — 截图槽位与替换方法
- `.env.example` — GA4 默认 ID 与覆盖/禁用说明
- `.github/workflows/ci.yml` — GitHub Actions CI
- `scripts/check-site.mjs` — 构建产物检查
- `src/content/guides/*.mdx` — 8 篇博客文章
- `src/data/screenshots.ts` — 截图槽注册表
- `src/data/site.ts` — 站点、导航、CWS 链接与 UTM
