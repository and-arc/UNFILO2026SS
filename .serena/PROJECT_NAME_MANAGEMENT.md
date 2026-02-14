# プロジェクト名一元管理システム

## 概要

プロジェクト名（ディレクトリ名）を `project-config.js` で一元管理し、
各種ビルドスクリプトで自動的に参照する仕組みです。

**完全相対パスベース** により、設定ファイルの変更を最小限にしています。
TypeScript path aliases も使用せず、シンプルな構成を維持しています。

---

## プロジェクト名の変更方法

### ステップ1: project-config.jsを編集

**[project-config.js](project-config.js)** の `name` プロパティを変更:

```javascript
export const PROJECTS = {
  project1: {
    name: "project1", // ← ここを変更（例: "unfilo2026ss"）
    id: "#unfilo2026SS",
    port: 5501,
  },
};
```

### ステップ2: ディレクトリリネーム

```bash
# project1 → unfilo2026ss の場合
mv public/project1 public/unfilo2026ss
mv src/components/project1 src/components/unfilo2026ss
mv src/pages/project1-index.astro src/pages/unfilo2026ss-index.astro
```

### ステップ3: import文を一括置換

VSCode検索置換（`Cmd+Shift+H`）:

**検索:** `/project1/`
**置換:** `/unfilo2026ss/`

相対パスのimport文が自動で更新されます：

```javascript
// 変更前
import Intro from "../components/project1/Intro.astro";

// 変更後
import Intro from "../components/unfilo2026ss/Intro.astro";
```

### ✅ 完了！

**たった3ステップ**でプロジェクト名変更完了です。

---

## 使用方法

### 開発サーバー

```bash
npm run dev:1    # Project1
npm run dev:2    # Project2

# ショートカット
npm run d1       # Project1
npm run d2       # Project2
```

### 本番ビルド

```bash
npm run b1       # Project1
npm run b2       # Project2
npm run build    # 全プロジェクト
```

### CSSのみビルド

```bash
npm run build:css:1    # Project1
npm run build:css:2    # Project2
```

---

## 仕組み

### 設定ファイル

**[project-config.js](project-config.js)** - プロジェクト設定一元管理

```javascript
export const PROJECTS = {
  project1: {
    name: "project1", // ビルド時のパス構築に使用
    id: "#unfilo2026SS", // CSS scoping用
    port: 5501, // 開発サーバーポート
  },
};
```

Astro Base のみ

```json
{
  "extends": "astro/tsconfigs/base"
}
```

すべてのimport文を**相対パス**で管理することで、
tsconfig.jsonは最小限の設定だけせず相対パス\*\*で管理することで、
tsconfig.jsonの変更が不要になりました。

### ビルドスクリプト

```
scripts/
  ├── build-css.js    # CSS ビルド（SCSS → CSS → PostCSS）
  ├── dev.js          # 開発サーバー起動
.astro/scripts/
  ├── build-css.js    # CSS ビルド（SCSS → CSS → PostCSS）
  ├── dev.js          # 開発サーバー起動
  └── build.js        # 本番ビルド
```

すべてのスクリプトが `project-config.js` から `name` を読み取り、
動的にパスを構築します。

> **Note:** `.astro/scripts/` に配置することで、
> web用JSファイル（public/\*/js/）との名前衝突を回避してい

## メリット

### ✅ シンプルな変更手順

- project-config.js の編集
- ディレクトリリネーム
- VSCode一括置換

### ✅ 設定ファイルが最小限

- tsconfig.jsonはAstro baseのみ
- すべて相対パスで管理
- 自動生成スクリプト不要

### ✅ 保守性が高い

- 相対パスで依存関係が明確
- build/dev スクリプトで一元管理

---

## トラブルシューティング

### import文のパスエラー

相対パスが正しいか確認してください：

```javascript
// src/pages/project1-index.astro から
import Intro from "../components/project1/Intro.astro"; // OK

// src/pages/index.astro から
import Intro from "./components/project1/Intro.astro"; // OK
```

### CSSが更新されない

手動で

> **Note:** SCSS ファイルが存在しないプロジェクトでは、
> CSSビルドが自動的にスキップされます（警告のみ表示）。CSSビルド：

```bash
npm run build:css:1
```

### ビルドエラー

- `project-config.js` の `name` とディレクトリ名が一致しているか確認
- `src/pages/{name}-index.astro` が存在するか確認

---

## プロジェクト追加方法

### 1. project-config.js に追加

````javascript
project3: {
  name: "project3",
  id: "#project3_id",
  port: 5503,.astro/scripts/dev.js 3",
"d3": "npm run dev:3",
"b3": "node .astro/scripts/build.js 3",
"build:3": "npm run b3",
"build:css:3": "node .astro/

### 2. package.json にコマンド追加

```json
"dev:3": "node scripts/dev.js 3",
"b3": "node scripts/build.js 3",
"build:css:3": "node scripts/build-css.js 3"
````

### 3. ディレクトリ作成

---

## ディレクトリ構造

```
.astro/
  └── scripts/          # ビルド自動化スクリプト
public/
  ├── project1/         # Project1 静的ファイル
  │   ├── css/
  │   ├── js/
  │   ├── scss/
  │   └── img/
  └── project2/         # Project2 静的ファイル
src/
  ├── components/
  │   ├── project1/
  │   └── project2/
  ├── pages/
  │   ├── project1-index.astro
  │   └── project2-index.astro
  ├── spec/
  └── utils/
dist-project1/          # ビルド出力（project1）
dist-project2/          # ビルド出力（project2）
project-config.js       # プロジェクト設定（一元管理）
```

---

## 変更履歴

- **2026-02-14 (v3)**: スクリプトディレクトリ移動、完全相対パス化
  - scripts/ → .astro/scripts/ に移動
  - 共通エイリアスも削除（@utils, @spec）
  - すべて相対パスに統一
  - tsconfig.jsonをAstro baseのみに最小化
  - README.md削除（このファイルに集約）
  - build-css.jsにSCSSファイル存在チェック追加

```bash
mkdir -p public/project3/{css,js,scss,img}
mkdir -p src/components/project3/parts
cp src/pages/project1-index.astro src/pages/project3-index.astro
```

---

## 変更履歴

- **2026-02-14 (v2)**: 相対パスベースに変更、tsconfig.json自動生成機能を削除
  - import文を相対パスに統一
  - tsconfig.jsonは共通エイリアスのみ
  - generate-tsconfig.js を削除

- **2026-02-14 (v1)**: プロジェクト名一元管理システム実装
