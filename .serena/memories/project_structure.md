# プロジェクト構造詳細

## 全体構造
```
www/
├── index.html              # メインページ（本番用）
├── spec.html              # 仕様確認・デザインカンプ用
├── css/
│   └── style.css          # コンパイル済みCSS
├── js/
│   └── functions.js       # JavaScript機能実装
├── scss/
│   ├── style.scss         # メインSCSS（インポートのみ）
│   └── _partial/
│       ├── _setting.scss   # 変数・関数定義
│       ├── _reset.scss     # リセットCSS
│       ├── _base.scss      # 基本スタイル
│       ├── _components.scss # 共通コンポーネント
│       ├── _intro.scss     # イントロセクション
│       ├── _item.scss      # アイテム表示
│       ├── _item-ss24.scss # 24SS専用アイテム
│       └── _fixAnchorNav.scss # 固定ナビゲーション
├── img/                   # 画像アセット（100+ファイル）
├── .vscode/
│   └── settings.json      # VS Code設定
└── .serena/
    ├── project.yml        # Serena設定
    └── memories/          # Serenaメモリー
```

## ページ構造
### index.html（メインページ）
- **KV**: メインビジュアル（PC/SP画像切り替え）
- **intro**: イントロダクション・商品概要
- **pageAnchor**: ナビゲーションセクション
- **itemSection**: 商品詳細セクション群
- **fixAnchorNav**: 固定ナビゲーション

### コンテンツセクション
1. **HOT TOPICS**: 注目アイテム3点
2. **SPRING TREND**: 春のトレンド5カテゴリ
3. **steppi**: シューズライン
4. **FINEMOVE**: 機能性ウェア
5. **カテゴリ別商品**: パンツ、トップス、シューズ等

## 画像命名規則
- `fv_*`: ファーストビュー用画像
- `img_theme*`: テーマ別商品画像
- `img_hottopics*`: 注目商品画像  
- `img_trend*`: トレンド関連画像
- `ico_*`: アイコン画像
- `btn_*`: ボタン画像
- `ttl_*`: タイトル画像

## 機能コンポーネント
- レスポンシブ画像（picture要素）
- スムーズスクロール
- 固定ナビゲーション
- アンカーリンク
- 外部サイトリンク（ONWARD CROSSET）
- トラッキング（GTM/GA）