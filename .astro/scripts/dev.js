/**
 * 開発サーバー起動スクリプト
 * 使用方法: node .astro/scripts/dev.js [プロジェクト番号]
 * 例: node .astro/scripts/dev.js 1
 */

import { spawn } from "child_process";
import { PROJECTS } from "../../project-config.js";

const projectNum = process.argv[2] || "1";
const projectKey = `project${projectNum}`;
const project = PROJECTS[projectKey];

if (!project) {
  console.error(`❌ プロジェクト${projectNum}の設定が見つかりません`);
  process.exit(1);
}

console.log(
  `🚀 ${projectKey}の開発サーバーを起動します (ポート: ${project.port})`,
);

const astroProcess = spawn(
  "astro",
  ["dev", "--port", project.port.toString()],
  {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      PROJECT: projectNum,
      PROJECT_NAME: project.name,
    },
  },
);

astroProcess.on("error", (error) => {
  console.error("❌ 開発サーバーの起動に失敗しました:", error);
  process.exit(1);
});

astroProcess.on("exit", (code) => {
  process.exit(code || 0);
});
