# Astroマルチプロジェクト構成（UNFILO）

## 概要
- Astro v5系でUNFILOマガジン（project1）とスペックページ（project2）の2プロジェクトを同一リポジトリで管理
- publicディレクトリは`public/project1`と`public/project2`で分離
- `astro.config.mjs`は環境変数`PROJECT`で動的にpublicDir, outDirを切り替え
- `yarn dev`や`yarn dev:1`/`yarn dev:2`でプロジェクト切り替えが可能
- 不要なスクリプト（switch-dev.sh）は削除済み

## package.json主要スクリプト
- dev: `PROJECT=2 astro dev`（デフォルトはproject2）
- dev:1: `PROJECT=1 astro dev`
- dev:2: `PROJECT=2 astro dev`

## 切り替え方法
- `yarn dev` → project2
- `yarn dev:1` → project1
- `yarn dev:2` → project2
- `PROJECT=1 yarn dev` でもOK

## その他
- src/pages/index.astro, project1.astro, project2.astroでページ切り替え
- ビルドは`yarn build`で両プロジェクト出力
- 不要なHTMLはクリーンアップスクリプトで削除

## 推奨運用
- 共通アセットは現状分離運用
- メンテナンス性・切り替え性重視

2025/08/30時点の安定構成