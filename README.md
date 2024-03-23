# chrome-extension-example

[![Build Status](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)

## 使い方

```sh
# 依存関係をインストール
pnpm install

# ビルド
pnpm build

# アーカイブを作成
pnpm archive

# Chrome Web Store にアップロード
pnpm upload
```

## 技術スタック

- パッケージ管理
  - [pnpm](https://pnpm.io/)
- フロントエンド
  - [TypeScript](https://www.typescriptlang.org/)
  - [SolidJS](https://www.solidjs.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
- ビルド
  - [Vite](https://vitejs.dev/)
  - [CRXJS](https://crxjs.dev/vite-plugin/)
- テスト
  - [Vitest](https://vitest.dev/)
- フォーマッタ、リンタ
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [sort-package-json](https://github.com/keithamus/sort-package-json)
  - [Dependency Cruiser](https://github.com/sverweij/dependency-cruiser)
