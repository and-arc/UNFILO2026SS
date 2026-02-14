# 開発・運用コマンド

## 基本コマンド（macOS）

### ファイル・ディレクトリ操作
```bash
ls -la                    # ファイル一覧表示
cd [ディレクトリ名]        # ディレクトリ移動
mkdir [ディレクトリ名]     # ディレクトリ作成
cp [コピー元] [コピー先]   # ファイルコピー
mv [移動元] [移動先]       # ファイル移動・リネーム
rm [ファイル名]           # ファイル削除
```

### 検索・確認
```bash
find . -name "*.scss"     # SCSSファイル検索
grep -r "クラス名" .      # 文字列検索
head -n 20 [ファイル名]   # ファイル先頭20行表示
tail -n 20 [ファイル名]   # ファイル末尾20行表示
```

## 開発サーバー起動
VS Code Live Server拡張を使用
- ポート: 5501
- 自動リロード対応

## SCSS開発
Live Sass Compiler拡張による自動コンパイル
- 監視対象: `scss/style.scss`
- 出力先: `css/style.css`
- 出力形式: expanded

### 手動コンパイル（必要に応じて）
```bash
sass scss/style.scss css/style.css --style=expanded
```

## Git操作
```bash
git status               # 変更状況確認
git add .               # 全変更をステージング
git commit -m "コミットメッセージ"  # コミット
git push                # リモートへプッシュ
git pull                # リモートから最新取得
```

## デバッグ・確認
### ブラウザ開発者ツール
- F12またはCmd+Option+I
- レスポンシブ表示切り替え: Cmd+Shift+M

### 動作確認
1. Live Serverでローカルサーバー起動
2. ブラウザで http://localhost:5501 にアクセス
3. レスポンシブ動作確認（768px境界）
4. スムーズスクロール動作確認
5. ナビゲーション開閉動作確認

## ファイル監視・更新確認
```bash
ls -l css/style.css      # CSSファイル更新日時確認
```