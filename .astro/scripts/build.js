/**
 * プロジェクトビルドスクリプト
 * 使用方法: node .astro/scripts/build.js [プロジェクト番号]
 * 例: node .astro/scripts/build.js 1
 */

import { spawn } from 'child_process';
import { PROJECTS } from '../../project-config.js';

const projectNum = process.argv[2] || '1';
const projectKey = `project${projectNum}`;
const project = PROJECTS[projectKey];

if (!project) {
  console.error(`❌ プロジェクト${projectNum}の設定が見つかりません`);
  process.exit(1);
}

console.log(`📦 ${projectKey}をビルドします`);

// まずCSSをビルド
console.log('🎨 CSSをビルド中...');
const cssProcess = spawn('node', ['.astro/scripts/build-css.js', projectNum], {
  stdio: 'inherit',
  shell: true
});

cssProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error('❌ CSSビルドに失敗しました');
    process.exit(code);
  }

  // Astroビルドを実行
  console.log('🏗️  Astroプロジェクトをビルド中...');
  const astroProcess = spawn('astro', ['build'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      PROJECT: projectNum,
      PROJECT_NAME: project.name,
      PROJECT_ID: project.id
    }
  });

  astroProcess.on('error', (error) => {
    console.error('❌ ビルドに失敗しました:', error);
    process.exit(1);
  });

  astroProcess.on('exit', (buildCode) => {
    if (buildCode === 0) {
      console.log(`✅ ${projectKey}のビルドが完了しました`);
    }
    process.exit(buildCode || 0);
  });
});

cssProcess.on('error', (error) => {
  console.error('❌ CSSビルドに失敗しました:', error);
  process.exit(1);
});
