# ProductLineupContentコンポーネントの最適化

## 問題の概要
ProductLineupContentコンポーネントは商品カタログのJSON化されたデータを出力する重要なコンポーネントですが、ビルド時に不要なJavaScriptファイル（ProductLineupContent.js）が生成されていました。

## 解決方法
1. **コンポーネントの維持**: ProductLineupContentコンポーネント自体は商品データ出力に必要なため残す
2. **ビルド後のクリーンアップ**: package.jsonのcleanupスクリプトで不要なJSファイルを削除

### 修正されたcleanupスクリプト
```json
{
  "build:cleanup:project1": "cd dist-project1 && rm -f index-backup.html project1-index.html project2-index.html && rm -f js/FooterScripts.js js/astro.js js/ProductLineupContent.js && rm -rf js/astro/",
  "build:cleanup:project2": "cd dist-project2 && rm -f index-backup.html project1-index.html project2-index.html && rm -f js/FooterScripts.js js/FooterScripts2.js js/astro.js js/ProductLineupContent.js && rm -rf js/astro/"
}
```

## ProductLineupContentコンポーネントの役割
- 商品カタログデータのJSON化
- 動的な商品情報表示
- テーマID（themeId）と商品名（productNames）による絞り込み
- 価格表示とサイズクラス適用

## 使用方法
```astro
<ProductLineupContent
  themeId={1}
  productNames="【洗える】シアー オーバーシャツ"
/>
```

## 最終結果
- ProductLineupContentコンポーネントは正常に機能
- ビルド後のjsディレクトリにはfunctions.jsのみが残る
- 不要なProductLineupContent.jsファイルは自動削除される