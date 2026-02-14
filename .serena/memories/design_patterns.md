# 設計パターン・ガイドライン

## CSS/SCSS設計パターン

### FLOCSS風のファイル構造
- **Foundation**: `_reset.scss`, `_base.scss`
- **Layout**: レイアウト系スタイル（wrapperなど）
- **Object/Component**: `_components.scss`（再利用可能なコンポーネント）
- **Object/Project**: `_intro.scss`, `_item.scss`（プロジェクト固有）
- **Object/Utility**: レスポンシブ用クラス（`.only-pc`, `.only-sp`）

### BEM記法の採用
```scss
// Block
.itemInfoBlock

// Block__Element  
.itemInfoBlock__lineup
.itemInfoBlock__lineupBlock
.itemInfoBlock__lineupBlock__title

// Block__Element--Modifier
.itemInfoBlock__lineupBlock-main
```

### レスポンシブ設計原則
- モバイルファースト思考
- 768px境界でのブレークポイント
- vw単位を活用した可変レイアウト
- picture要素による画像の適応的配信

## JavaScript設計パターン

### jQuery依存の関数型実装
- イベントドリブンなコード構成
- 即座に実行される処理とイベントハンドラーの分離
- レスポンシブ判定の効率的な実装

### 命名規則
- フラグ変数: `spFlag`, `pcFlag`
- イベントハンドラー: 機能名＋動作（例：スムーズスクロール）

## ファイル組織化方針

### 画像ファイル管理
- 用途別プレフィックス（`img_`, `ico_`, `btn_`, `ttl_`）  
- デバイス別サフィックス（`_pc`, `_sp`）
- ファイル形式の使い分け（JPG/PNG/SVG）

### パーシャルSCSS管理
- 機能別・セクション別の分割
- 設定ファイル（`_setting.scss`）の優先読み込み
- モジュール間の依存関係を最小化

## 開発ワークフロー
1. デザインカンプ確認（spec.html）
2. SCSS編集・コンパイル
3. JavaScript機能実装
4. 動作確認・デバッグ
5. レスポンシブ対応確認
6. 本番環境デプロイ

## コード品質維持方針
- セマンティックHTML優先
- アクセシビリティ配慮
- パフォーマンス最適化
- 保守性重視のコード構成