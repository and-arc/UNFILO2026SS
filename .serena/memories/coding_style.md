# コーディング規約・スタイル

## HTML
- セマンティックなマークアップ
- BEM記法に近い命名規則（Block__Element__Modifier形式）
- レスポンシブ対応のためのpicture要素活用
- アクセシビリティを意識したalt属性の適切な設定

## CSS/SCSS
### ファイル構成
- パーシャルファイルによるモジュラー設計
- `_partial/` ディレクトリでの部品管理
- メインファイル（style.scss）でのインポート

### 命名規則
- BEM記法ベースのクラス命名
- 例: `.itemInfoBlock__lineupBlock__title`
- PC/SP切り替え用クラス: `.only-pc`, `.only-sp`

### SCSS関数・ミックスイン
- `p2v()`: pxをvwに変換（SP用）
- `em()`, `rem()`: 相対単位変換
- `per()`: パーセント計算
- `minset()`, `maxset()`: レスポンシブ最小・最大値設定

### カラーパレット
```scss
$pink: #f3629a;
$orange: #f68460;
$bgPink: #fff6f9;
```

### フォント設定
```scss
$serif: "yakuhanjp", "Noto Serif JP", serif;
$Akshar: "Akshar", sans-serif;
$Montserrat: "Montserrat", sans-serif;
```

## JavaScript
- jQuery使用
- ES5記法での実装
- レスポンシブ判定: 768px以下をSP扱い
- 関数型プログラミングスタイル
- イベントドリブンな実装

### 主要機能
- スムーズスクロール実装
- レスポンシブ判定処理
- 固定ナビゲーションの開閉制御
- ページトップボタン

## ディレクトリ構成規則
- `_partial/`: SCSS部品ファイル
- `img/`: 画像アセット（用途別命名）
- `css/`: コンパイル済みファイル
- `js/`: JavaScript実装ファイル

## CSS/SCSS コーディング規約（追記）

### 継承の活用
- `base.scss` や `reset.css` で定義済みのスタイル（`font-family`, `color`, `font-weight`, `letter-spacing`, `margin` 等）は、個別のコンポーネントで再定義しない。

### 画像のスタイル
- 汎用的な `display: block; width: 100%; height: 100%; object-fit: contain;` 指定は避ける。
- サイズ指定がある場合は `width` と `aspect-ratio` を使用し、`height` 指定は原則避ける。
- `hover` 効果は `@media (hover: hover)` で囲み、タッチデバイス等での意図しない適用を防ぐ。