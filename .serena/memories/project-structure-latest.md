# プロジェクト構成最新版 (2026-02-14更新)

## コンポーネント構成の整理

### 基本方針
- **セクションコンポーネント**: プロジェクトルートに配置（ページのレイアウトを定義）
- **ユーティリティコンポーネント**: `parts/` サブディレクトリに配置

### Project1 (UNFILO) 構成
```
src/components/project1/
├── Category.astro          # セクション: カテゴリナビゲーション
├── Intro.astro             # セクション: 導入部（商品表示含む）
├── Section1.astro          # セクション: コンテンツ
└── parts/
    ├── Item.astro          # 機能: 商品表示コンポーネント
    ├── MetaHead.astro      # メタ: HTMLヘッダー
    ├── NavFixed.astro      # ナビ: 固定ナビゲーション
    └── FooterScripts.astro # ナビ: フッタースクリプト
```

### Project2 (Spec) 構成
```
src/components/project2/
├── KeyVisual.astro         # セクション: キービジュアル
├── Spec.astro              # セクション: スペック表示
└── parts/
    ├── Item.astro          # 機能: 商品表示
    ├── MetaHead.astro      # メタ: HTMLヘッダー
    └── FooterScripts.astro # ナビ: フッタースクリプト
```

## パスエイリアス設定

### tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@project1/*": ["./src/components/project1/*"],
      "@project1-parts/*": ["./src/components/project1/parts/*"],
      "@project2/*": ["./src/components/project2/*"],
      "@project2-parts/*": ["./src/components/project2/parts/*"],
      "@utils/*": ["./src/utils/*"],
      "@spec/*": ["./src/spec/*"]
    }
  }
}
```

### 実装例
```astro
// src/pages/project1-index.astro
// Parts（機能的コンポーネント）
import MetaHead from '@project1-parts/MetaHead.astro';
import NavFixed from '@project1-parts/NavFixed.astro';

// Sections（セクションコンポーネント）
import Intro from '@project1/Intro.astro';
import Category from '@project1/Category.astro';

// src/components/project1/parts/Item.astro
import { getProductsByName, formatPrice, getSizeClass } from '@utils/productUtils.js';
import projectData from '@spec/project1.json';
```

### プロジェクト名変更時の対応
例: `project1` → `fashionSS26` に変更する場合

1. **フォルダをリネーム**
```bash
mv src/components/project1 src/components/fashionSS26
```

2. **tsconfig.jsonを更新**（この2行のみ）
```json
"@project1/*": ["./src/components/fashionSS26/*"],
"@project1-parts/*": ["./src/components/fashionSS26/parts/*"]
```

※ ファイル名（project1-index.astro等）や package.json の変更は不要
※ 相対パス（`./parts/Item.astro`）は自動追従

## 開発コマンド（改善版）

### package.json scripts
```json
{
  "dev:1": "lsof -ti:5501 | xargs kill -9 2>/dev/null || true && PROJECT=1 astro dev",
  "dev:2": "lsof -ti:5502 | xargs kill -9 2>/dev/null || true && PROJECT=2 astro dev",
  "d1": "lsof -ti:5501 | xargs kill -9 2>/dev/null || true && PROJECT=1 astro dev",
  "d2": "lsof -ti:5502 | xargs kill -9 2>/dev/null || true && PROJECT=2 astro dev"
}
```

**特徴**: ポート自動クリア機能により、確実に正しいポートで起動

### 使い方
```bash
# 標準コマンド
npm run dev:1   # Project1 → http://localhost:5501/project1-index
npm run dev:2   # Project2 → http://localhost:5502/project2-index

# ショートカット（タイプ数削減）
npm run d1      # dev:1と同じ
npm run d2      # dev:2と同じ

# @antfu/ni を使う場合（最短）
nr d1           # 5文字
nr d2           # 5文字
```

## データ構造とAPI

### src/spec/project1.json
```json
{
  "magazine": "2026春マガジン",
  "themes": [
    {
      "theme_id": 1,
      "items": [
        {
          "size": "regular",
          "name": "【洗える】シアー オーバーシャツ",
          "price": 8990,
          "link": "https://crosset.onward.co.jp/items/JKUMSW0702?cc=205"
        },
        {
          "size": "large",
          "name": "【洗える】シアー オーバーシャツ",
          "price": 9490,
          "link": "https://crosset.onward.co.jp/items/JKURSW0702?cc=205"
        },
        { "name": "Jacket", ... },
        { "name": "Cut&Sawn", ... },
        { "name": "Denim", ... },
        { "name": "Camisole", ... },
        { "name": "Belt", ... }
      ]
    }
  ]
}
```

### Item.astro の使用パターン

```astro
<!-- パターン1: theme_id の全商品を表示 -->
<Item themeId={1} />

<!-- パターン2: 特定の1商品のみ表示 -->
<Item 
  themeId={1} 
  productNames="【洗える】シアー オーバーシャツ" 
/>

<!-- パターン3: 複数商品を指定 -->
<Item 
  themeId={1} 
  productNames={["Jacket", "Cut&Sawn", "Denim"]} 
/>
```

### src/utils/productUtils.js

純粋関数として実装（データは引数で受け取る）

**主要関数**:
- `getProductsByName(data, themeId, productNames?)` 
  - 商品データをフィルタリング
  - productNames省略時は全商品を返却
  - 同名商品（regular/large）を自動グルーピング

- `formatPrice(price)` 
  - 入力: `8990`
  - 出力: `"¥8,990"`

- `getSizeClass(size)`
  - large → `"item_price-large"`
  - それ以外 → `""`

## CSS/SCSS構成

### ファイル配置
- `public/project1/css/style.css` - コンパイル済みCSS（実使用）
- `public/project1/scss/` - SCSSソースコード
  - `style.scss` - メインファイル
  - `_partial/_item.scss` - 商品表示用スタイル定義

- `public/project2/css/style.css` - Project2用
- `public/project2/scss/` - Project2 SCSSソース

### Item コンポーネント用クラス名
```scss
.item {
  &_box { ... }          // 商品ボックス
  &_title { ... }        // 商品名
  &_priceList { ... }    // 価格リスト
  &_price { ... }        // 価格表示
    &-large { ... }      // 大きい価格表示（large size用）
  &_priceText { ... }    // 価格テキスト
  &_btn { ... }          // ボタン
}
```

## 削除済み不要ファイル

以下のファイル/ディレクトリは削除済み（合計約30MB節約）:
- `/css/` - ルートの古いCSSフォルダ（52KB）
- `.yarn/` - Yarn Plug'n'Play キャッシュ（29MB）
- `package-lock.json` - npmロックファイル（177KB）

**現在使用中**: `pnpm-lock.yaml` のみ

## 環境情報

### パッケージマネージャー
- **使用中**: pnpm
- **Volta管理**:
  - Node v22.13.1
  - npm 10.9.2
  - Yarn v4.6.0 (インストール済みだが不使用)
  - @antfu/ni (ni, nr, nup, nlx等)

### ビルド設定
- `astro.config.mjs` でプロジェクトごとに設定
  - Project1: `publicDir: ./public/project1`, `outDir: ./dist-project1`, `port: 5501`
  - Project2: `publicDir: ./public/project2`, `outDir: ./dist-project2`, `port: 5502`
  
### リダイレクト設定（開発時のみ）
- `/` → `/project1-index` (Project1)
- `/` → `/project2-index` (Project2)

## 注意事項

### Astroの制約
- アンダースコアPrefix（`_Item.astro`）は使用不可
  - Fragment構文（`<_>`）と競合するため
  - 代替: `parts/` ディレクトリで整理

### クラス名の一貫性
- `item_*` プレフィックスで統一（SCSS の `_item.scss` に対応）
- 以前の `itemInfoBlock_lineupBlock*` から簡潔化

