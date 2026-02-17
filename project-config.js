/**
 * プロジェクト設定ファイル
 * すべてのプロジェクト固有の設定値を一元管理
 */

export const PROJECTS = {
  // プロジェクト1: UNFILO
  project1: {
    dirName: "project1", // ディレクトリ名（public/、dist- で使用）
    port: 5501, // 開発サーバーのポート
    redirectPath: "/project1-index", // 開発時のリダイレクトパス
  },
  // プロジェクト2: Spec Page
  project2: {
    dirName: "project2",
    port: 5502,
    redirectPath: "/project2-index",
  },
};
