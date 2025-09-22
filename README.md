# Stream Tool

## 🚀 技術棧

- **Next.js 15.5.3** - 最新版本的 React 框架，支援 App Router 和 Turbopack
- **Bun** - 極速的 JavaScript 運行時和包管理器
- **Biome** - 快速的程式碼格式化和 Linting 工具
- **OXLint** - 高效能的 JavaScript/TypeScript Linter
- **Tailwind CSS v4.1** - 最新版本的實用優先 CSS 框架
- **TypeScript** - 型別安全的 JavaScript 超集
- **Husky + lint-staged** - Git hooks 自動化程式碼品質檢查

## 📦 安裝

確保您已安裝 [Bun](https://bun.sh/)：

```bash
curl -fsSL https://bun.sh/install | bash
```

克隆專案並安裝依賴：

```bash
git clone <repository-url>
cd stream_tool
bun install
```

## 🛠️ 開發

啟動開發伺服器：

```bash
bun dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

## 📋 可用指令

### 開發和建置

```bash
bun dev          # 啟動開發伺服器（使用 Turbopack）
bun run build    # 建置專案
bun start        # 啟動生產伺服器
```

### 程式碼品質

```bash
bun run format        # 使用 Biome 格式化程式碼
bun run check         # 使用 Biome 檢查和修復程式碼
bun run lint:biome    # 僅使用 Biome 進行 Linting
bun run lint          # 使用 ESLint 進行 Linting
```

### OXLint 工具

```bash
bun run oxlint        # 使用 OXLint 進行 Linting
bun run oxlint:fix    # 使用 OXLint 進行 Linting 並自動修復
```

### Git Hooks (Husky)

專案已配置 Husky 和 lint-staged，會在提交前自動執行：

- **JavaScript/TypeScript 檔案** (`*.{js,jsx,ts,tsx}`)：
  - 使用 Biome 進行格式化和 Linting
  - 使用 OXLint 進行額外的 Linting 檢查
- **其他檔案** (`*.{json,css,md}`)：
  - 使用 Biome 進行格式化

```bash
# 手動執行 lint-staged
bunx lint-staged
```

## 📁 專案結構

```text
stream_tool/
├── .husky/                 # Git hooks 配置
│   ├── pre-commit          # 提交前執行 lint-staged
│   └── commit-msg          # 提交訊息檢查（可選）
├── src/
│   └── app/
│       ├── globals.css     # 全域樣式和 Tailwind 配置
│       ├── layout.tsx      # 根佈局
│       └── page.tsx        # 首頁
├── public/                 # 靜態資源
├── biome.json             # Biome 配置
├── next.config.ts         # Next.js 配置
├── package.json           # 專案依賴和腳本（包含 lint-staged 配置）
├── postcss.config.mjs     # PostCSS 配置
└── tsconfig.json          # TypeScript 配置
```

## 🚀 部署

### Vercel（推薦）

```bash
# 安裝 Vercel CLI
bun add -g vercel

# 部署
vercel
```

### 其他平台

專案可以部署到任何支援 Node.js 的平台。確保：

1. 設定 `bun install` 作為建置指令
2. 設定 `bun run build` 作為建置腳本
3. 設定 `bun start` 作為啟動指令

## 📚 學習資源

- [Next.js 文檔](https://nextjs.org/docs)
- [Bun 文檔](https://bun.sh/docs)
- [Biome 文檔](https://biomejs.dev/)
- [OXC 文檔](https://oxc.rs/)
- [Tailwind CSS v4 文檔](https://tailwindcss.com/docs)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License
