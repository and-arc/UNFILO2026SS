/**
 * プロジェクト設定ファイル
 * すべてのプロジェクト固有の設定値を一元管理
 */

export const PROJECTS = {
  // プロジェクト1: UNFILO
  project1: {
    name: "project1", // ディレクトリ名・ファイル名で使用（変更時はここを編集）
    id: "#unfilo2026SS", // HTML id属性 & SCSS スコープ用（_setting.scss の $project-id と同期）
    port: 5501, // 開発サーバーのポート
  },
  // プロジェクト2: Project2
  project2: {
    name: "project2", // ディレクトリ名・ファイル名で使用（変更時はここを編集）
    id: "#project2_id", // 必要に応じて変更
    port: 5502,
  },
};

// 後方互換性のための個別エクスポート
export const PROJECT1_ID = PROJECTS.project1.id;
export const PROJECT2_ID = PROJECTS.project2.id;
