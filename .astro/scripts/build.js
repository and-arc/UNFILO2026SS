/**
 * プロジェクトビルドスクリプト
 * 使用方法: node .astro/scripts/build.js [プロジェクト番号]
 * 例: node .astro/scripts/build.js 1
 */

import { spawn } from "child_process";
import { unlink, rmdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import { PROJECTS } from "../../project-config.js";

const projectNum = process.argv[2] || "1";
const projectKey = `project${projectNum}`;
const project = PROJECTS[projectKey];

if (!project) {
  console.error(`❌ プロジェクト${projectNum}の設定が見つかりません`);
  process.exit(1);
}

console.log(`📦 ${projectKey}をビルドします`);

// Astroビルドを実行
console.log("🏗️  Astroプロジェクトをビルド中...");
const astroProcess = spawn("astro", ["build"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    PROJECT: projectNum,
    PROJECT_NAME: project.name,
  },
});

astroProcess.on("error", (error) => {
  console.error("❌ ビルドに失敗しました:", error);
  process.exit(1);
});

astroProcess.on("exit", async (buildCode) => {
  if (buildCode === 0) {
    // ビルド成功時、不要なファイルを削除
    const distDir = `dist-${projectKey}`;
    const filesToRemove = [
      join(distDir, "project1-index.html"),
      join(distDir, "project2-index.html"),
    ];

    for (const file of filesToRemove) {
      if (existsSync(file)) {
        try {
          await unlink(file);
          console.log(`🗑️  削除: ${file}`);
        } catch (error) {
          console.warn(`⚠️  削除できませんでした: ${file}`);
        }
      }
    }

    // scssディレクトリを削除（もし存在すれば）
    const scssDir = join(distDir, "scss");
    if (existsSync(scssDir)) {
      try {
        await rmdir(scssDir, { recursive: true });
        console.log(`🗑️  削除: ${scssDir}`);
      } catch (error) {
        console.warn(`⚠️  削除できませんでした: ${scssDir}`);
      }
    }

    console.log(`✅ ${projectKey}のビルドが完了しました`);
  }
  process.exit(buildCode || 0);
});
