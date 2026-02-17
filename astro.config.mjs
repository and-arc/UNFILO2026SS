// @ts-check
import { defineConfig } from "astro/config";
import { PROJECTS } from "./project-config.js";


/**
 * 共通のAstro設定を生成する関数
 * @param {Object} projectConfig - プロジェクト固有の設定
 * @param {string} projectConfig.dirName - ディレクトリ名
 * @param {number} projectConfig.port - ポート番号
 * @param {string} projectConfig.redirectPath - リダイレクトパス
 * @param {string} [projectId] - プロジェクトID（環境変数から取得）
 * @returns {import('astro').AstroUserConfig} Astro設定オブジェクト
 */
function createProjectConfig(
  { dirName, port, redirectPath },
  projectId = undefined
) {
  // プロジェクトIDを取得（引数優先、なければ環境変数）
  const project = projectId || process.env.PROJECT || "1";

  console.log(`🚀 Loading Project ${project} (${dirName}) configuration...`);

  return {
    srcDir: "./src",
    publicDir: `./public/${dirName}`,
    outDir: `./dist-${dirName}`,

    // 静的サイト生成の設定
    output: "static",

    // HTMLの圧縮を無効化
    compressHTML: false,

    // デフォルトポート設定（既存プロジェクトと合わせる）
    server: {
      port: port,
    },

    // 開発時のみリダイレクト設定（ビルド時は無効）
    redirects:
      process.env.NODE_ENV !== "production"
        ? {
            "/": redirectPath,
          }
        : {},

    // ビルド設定
    build: {
      assets: "_astro",
      format: "preserve", // HTMLの整形を保持
      // 不要なJSファイルの生成を抑制
      inlineStylesheets: "always",
    },

    // Vite設定でHTMLの圧縮を無効化
    vite: {
      build: {
        minify: false, // HTMLの圧縮を無効にして整形を保持
        // チャンク分割を無効化して不要なJSファイルを減らす
        rollupOptions: {
          output: {
            entryFileNames: "js/[name].js",
            chunkFileNames: "js/[name].js",
            assetFileNames: (assetInfo) => {
              if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                return "css/[name][extname]";
              }
              return "assets/[name][extname]";
            },
            // 不要なチャンクを避けるためのマニュアルチャンク設定
            manualChunks: (id) => {
              // 不要なJSファイル生成を抑制
              return null;
            },
          },
        },
        // ES5互換性の確保
        target: "es2015",
      },
      // ルートファイル指定（index.astroを使うため）
      css: {
        devSourcemap: true,
      },
      // 開発サーバーの監視設定
      server: {
        watch: {
          // publicディレクトリのCSSファイルも監視対象に含める
          usePolling: false,
          ignored: ["**/node_modules/**", "**/.git/**"],
        },
      },
    },

    // 画像最適化の設定
    image: {
      domains: ["crosset.onward.co.jp"],
    },
  };
}

// 環境変数でプロジェクトを指定 (デフォルトは1)
const projectNum = process.env.PROJECT || "1";
const projectKey = `project${projectNum}`;
const config = PROJECTS[projectKey];

if (!config) {
  throw new Error(
    `Unknown project: ${projectNum}. Available projects: ${Object.keys(
      PROJECTS
    ).join(", ")}`
  );
}

// 共通設定関数をエクスポート（他のファイルからも利用可能）
export { createProjectConfig };

// デフォルトエクスポート
export default defineConfig(createProjectConfig(config));
