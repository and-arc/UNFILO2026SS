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
    PROJECT_NAME: project.displayName,
  },
});

astroProcess.on("error", (error) => {
  console.error("❌ ビルドに失敗しました:", error);
  process.exit(1);
});


astroProcess.on("exit", async (buildCode) => {
  if (buildCode === 0) {
    const distDir = `dist-${projectKey}`;

    // 1. まず、このプロジェクトの-index.htmlをindex.htmlにリネーム（削除前に実行）
    const projectIndexHtml = join(distDir, `${projectKey}-index.html`);
    const mainIndexHtml = join(distDir, "index.html");

    if (existsSync(projectIndexHtml)) {
      try {
        // まず既存のindex.htmlを削除
        if (existsSync(mainIndexHtml)) {
          await unlink(mainIndexHtml);
        }
        // project*-index.htmlをindex.htmlにリネーム
        await import("fs/promises").then(({ rename }) =>
          rename(projectIndexHtml, mainIndexHtml)
        );
        console.log(`✅ ${projectKey}-index.html → index.html にリネームしました`);
      } catch (error) {
        console.error(`❌ リネームに失敗しました:`, error);
      }
    }

    // 2. 他のプロジェクトの不要なHTMLファイルを削除
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

    // 不要なJSファイルを削除（functions.js以外）
    const jsDir = join(distDir, "js");
    if (existsSync(jsDir)) {
      const jsFilesToRemove = [
        join(jsDir, "Section.js"),
        join(jsDir, "astro.js"),
        join(jsDir, "project1.js"),
        join(jsDir, "project2.js"),
      ];

      for (const file of jsFilesToRemove) {
        if (existsSync(file)) {
          try {
            await unlink(file);
            console.log(`🗑️  削除: ${file}`);
          } catch (error) {
            console.warn(`⚠️  削除できませんでした: ${file}`);
          }
        }
      }

      // astroディレクトリを削除
      const astroDir = join(jsDir, "astro");
      if (existsSync(astroDir)) {
        try {
          await rmdir(astroDir, { recursive: true });
          console.log(`🗑️  削除: ${astroDir}`);
        } catch (error) {
          console.warn(`⚠️  削除できませんでした: ${astroDir}`);
        }
      }
    }

    console.log(`✅ ${projectKey}のビルドが完了しました`);
  }
  process.exit(buildCode || 0);
});
