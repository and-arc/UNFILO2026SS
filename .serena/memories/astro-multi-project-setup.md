# Astro複数プロジェクト管理システム

## プロジェクト概要
UNFILO Magazine LPをAstroフレームワークに移行し、複数プロジェクトを単一のAstroワークスペースで管理できる構造を構築。各プロジェクトが異なるドメインのルートで独立して動作可能。

## ディレクトリ構造

```
astro-version/
├── src/
│   ├── pages/
│   │   ├── index.astro                  # プロジェクト選択ページ（デフォルト）
│   │   ├── project1-index.astro         # Project1専用ページ（UNFILOプロジェクト）
│   │   └── project2-index.astro         # Project2専用ページ（サンプルプロジェクト）
│   ├── components/
│   │   ├── project1/                    # Project1専用コンポーネント（統合済み）
│   │   │   ├── MetaHead.astro
│   │   │   ├── FirstViewIntroduction.astro  # FirstView + Introduction統合
│   │   │   ├── CategoryArea.astro
│   │   │   ├── Section1.astro
│   │   │   ├── FixedNavigation.astro
│   │   │   └── FooterScripts.astro      # Footer + Scripts統合
│   │   └── project2/                    # Project2専用（空）
│   └── scripts/
│       └── functions.js                 # 移行前のJavaScript
├── public/
│   ├── project1/                        # Project1のアセット
│   │   ├── css/style.css               # 相対パス使用: ./css/style.css
│   │   ├── img/（全画像ファイル）        # 相対パス使用: ./img/xxx.jpg
│   │   └── js/functions.js             # 相対パス使用: ./js/functions.js
│   └── project2/                        # Project2のアセット
│       ├── css/style.css               # 同名ファイル（独立）
│       ├── img/sample.svg
│       └── js/functions.js             # 同名ファイル（独立）
├── astro.config.mjs                    # メイン設定（開発用）
├── astro.config.project1.mjs           # Project1ビルド専用設定
├── astro.config.project2.mjs           # Project2ビルド専用設定
└── package.json                        # 複数ビルドスクリプト対応
```

## ビルド出力構造

### Project1 (UNFILO)
```
dist-project1/
├── index.html          # ドメインルート用
├── css/style.css       # 相対パス: ./css/style.css
├── img/                # 相対パス: ./img/xxx.jpg
└── js/functions.js     # 相対パス: ./js/functions.js
```

### Project2 (サンプル)
```
dist-project2/
├── index.html          # ドメインルート用
├── css/style.css       # 相対パス: ./css/style.css
├── img/sample.svg      # 相対パス: ./img/xxx.svg
└── js/functions.js     # 相対パス: ./js/functions.js
```

## 技術仕様

### フレームワーク
- **Astro v5.13.5** - 静的サイトジェネレーター
- **jQuery 3.6.0** - 既存JavaScript機能保持
- **SCSS** - VS Code Live Sass Compilerでコンパイル

### 設定詳細
- `compressHTML: false` - HTML整形保持
- `build.format: "file"` - ファイル形式出力
- 相対パス統一（`./css/`, `./img/`, `./js/`）
- `is:inline + defer` でJavaScript読み込み

### コンポーネント統合
- **FirstViewIntroduction.astro**: キービジュアル + イントロダクション統合
- **FooterScripts.astro**: フッター + JavaScript読み込み統合
- 8個 → 6個にコンポーネント数削減（25%削減）

## ビルドシステム

### package.jsonスクリプト
```json
{
  "build:project1": "build:setup:project1 → astro build project1 → restore → cleanup",
  "build:project2": "build:setup:project2 → astro build project2 → restore → cleanup", 
  "build:all": "build:project1 + build:project2",
  "build:setup:projectX": "index.astro backup → projectX-index.astro → index.astro copy",
  "build:cleanup:projectX": "余分なHTMLファイル削除（index-backup.html等）"
}
```

### ビルドフロー
1. **Setup**: 現在のindex.astroをバックアップ、対象プロジェクトをindex.astroにコピー
2. **Build**: 専用設定ファイルでビルド実行
3. **Restore**: 元のindex.astroを復元
4. **Cleanup**: 不要なHTMLファイルを削除

## デプロイメント仕様

### 想定使用方法
- 各プロジェクトを**異なるドメインのルート**で使用
- `domain1.com/` ← `dist-project1/`
- `domain2.com/` ← `dist-project2/`

### アセットパス
- **相対パス統一**: `./css/style.css`, `./img/xxx.jpg`, `./js/functions.js`
- **同名ファイル使用可能**: 各プロジェクトで独立したstyle.css、functions.js等
- **ポータビリティ**: サブディレクトリ配置やCDN使用に対応

## 開発・運用コマンド

```bash
# 開発
yarn dev                    # 開発サーバー起動（プロジェクト選択ページ）

# ビルド
yarn build:project1         # Project1のみビルド（UNFILO）
yarn build:project2         # Project2のみビルド
yarn build:all             # 両プロジェクト一括ビルド

# プレビュー  
yarn preview               # ビルド結果プレビュー
```

## 成果・効果

### 機能面
✅ 完全なAstro移行完了  
✅ JavaScript機能保持（jQuery、カテゴリーナビ等）  
✅ HTML整形機能付きビルド  
✅ npm/yarn両対応  

### 構造面  
✅ コンポーネント統合による保守性向上  
✅ 複数プロジェクト独立管理  
✅ 相対パス統一によるポータビリティ向上  
✅ ドメインルート用最適化  

### 運用面
✅ 個別・一括ビルド対応  
✅ クリーンな出力構造（index.html + アセット）  
✅ 異なるドメインでの並行運用可能  
✅ 拡張性確保（Section2.astro等の追加容易）