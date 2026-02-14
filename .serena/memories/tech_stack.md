# 技術スタック

## フロントエンド技術
- **HTML5**: セマンティックなマークアップ
- **CSS3**: レスポンシブデザイン対応
- **SCSS (Sass)**: CSS前処理ツール
- **JavaScript (jQuery)**: インタラクション実装
- **Live Sass Compiler**: VS Code拡張によるSCSSコンパイル

## 使用ライブラリ・フレームワーク
- **jQuery**: DOM操作、イベント処理
- **yakuhanjp**: 日本語フォント最適化
- **Google Fonts**: Webフォント
  - Noto Serif JP
  - Akshar
  - Montserrat
  - Noto Sans JP

## 外部サービス
- **Google Tag Manager (GTM)**: アクセス解析・タグ管理
- **Google Analytics**: ユーザー行動分析

## 開発ツール
- **VS Code**: 開発エディタ
- **Live Server**: ローカル開発サーバー（ポート5501）
- **Live Sass Compiler**: SCSS自動コンパイル

## ファイル構成
```
├── index.html          # メインページ
├── spec.html           # 仕様確認用ページ
├── css/
│   └── style.css       # コンパイル済みCSS
├── scss/
│   ├── style.scss      # メインSCSSファイル
│   └── _partial/       # パーシャルSCSSファイル群
├── js/
│   └── functions.js    # JavaScript機能実装
└── img/                # 画像アセット
```

## アーキテクチャの特徴
- 静的サイト（HTML/CSS/JS）
- SCSSによるモジュラーなCSS設計
- レスポンシブ対応（768px以下をSPとして判定）
- 画像の適応的配信（picture要素使用）