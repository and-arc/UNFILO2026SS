/**
 * CSS（SCSS）ビルドスクリプト
 * 使用方法: node .astro/scripts/build-css.js [プロジェクト番号]
 * 例: node .astro/scripts/build-css.js 1
 */

import { spawn } from 'child_process';
import { PROJECTS } from '../../project-config.js';
import { existsSync } from 'fs';

const projectNum = process.argv[2] || '1';
const projectKey = `project${projectNum}`;
const project = PROJECTS[projectKey];

if (!project) {
  console.error(`❌ プロジェクト${projectNum}の設定が見つかりません`);
  process.exit(1);
}

const scssPath = `public/${project.name}/scss/style.scss`;
const cssOutputPath = `public/${project.name}/css/style.css`;

if (!existsSync(scssPath)) {
  console.log(`⚠️  ${scssPath} が見つかりません。CSSビルドをスキップします。`);
  process.exit(0);
}

console.log(`🎨 ${projectKey}のCSSをビルド中...`);
console.log(`   入力: ${scssPath}`);
console.log(`   出力: ${cssOutputPath}`);

const sassProcess = spawn('sass', [
  scssPath,
  cssOutputPath,
  '--style=compressed',
  '--source-map'
], {
  stdio: 'inherit',
  shell: true
});

sassProcess.on('error', (error) => {
  console.error('❌ Sassのビルドに失敗しました:', error);
  process.exit(1);
});

sassProcess.on('exit', (code) => {
  if (code === 0) {
    console.log(`✅ ${projectKey}のCSSビルドが完了しました`);
    
    // PostCSSでプレフィックスを追加
    console.log('🔧 PostCSSでスコープを追加中...');
    const postcssProcess = spawn('postcss', [
      cssOutputPath,
      '-o',
      cssOutputPath,
      '--config',
      'postcss.config.js'
    ], {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        PROJECT_ID: project.id
      }
    });

    postcssProcess.on('exit', (postcssCode) => {
      if (postcssCode === 0) {
        console.log('✅ PostCSS処理が完了しました');
      }
      process.exit(postcssCode || 0);
    });
  } else {
    process.exit(code);
  }
});
