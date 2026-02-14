import { PROJECTS } from "./project-config.js";

export default {
  plugins: {
    "postcss-prefix-selector": {
      prefix: PROJECTS.project1.id,
      exclude: [/^html/, /^body/, /^:root/],
      // htmlとbody、:root擬似クラスには接頭辞を付けない
    },
  },
};
