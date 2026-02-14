import { c as createComponent, f as renderScript, b as renderTemplate, m as maybeRenderHead, e as createAstro, d as addAttribute, r as renderComponent } from "./astro/server.js";
import { g as getProductsByName, p as projectData, f as formatPrice, a as getSizeClass } from "./project1.js";
const $$MetaHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Google Tag Manager -->${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/parts/MetaHead.astro?astro&type=script&index=0&lang.ts")}
<!-- End Google Tag Manager --><meta charset="UTF-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UNFILO Spec Page</title>

<!-- フォント読み込み -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600&family=Akshar:wght@500&family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

<!-- スタイルシート -->
<link rel="stylesheet" href="./css/style.css">

<!-- ファビコン -->
<link rel="icon" type="image/svg+xml" href="./favicon.svg">`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/parts/MetaHead.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FooterScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<!-- JavaScript --><script src="./js/functions.js"><\/script>'])));
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/parts/FooterScripts.astro", void 0);
const $$KeyVisual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="kv">
  <div class="logo"><img src="./img/logo.png" alt=""></div>
  <h1>
    <picture>
      <source media="(min-width: 768px)" srcset="./img/kv_pc.jpg">
      <img src="./img/kv_sp.jpg" alt="">
    </picture>
  </h1>
</div>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/KeyVisual.astro", void 0);
const $$Astro = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Item;
  const { themeId, productNames } = Astro2.props;
  const groupedItems = getProductsByName(projectData, themeId, productNames);
  return renderTemplate`${Object.entries(groupedItems).map(([itemName, items]) => renderTemplate`${maybeRenderHead()}<div class="item_box">
    <h4 class="item_title">${itemName}</h4>
    <ul class="item_priceList">
      ${items.map((item) => renderTemplate`<li${addAttribute(`item_price ${getSizeClass(item.size)}`, "class")}>
          <span class="item_priceText">${formatPrice(item.price)}<span class="tax">(税込)</span></span>
          <a${addAttribute(item.link, "href")} class="item_btn" target="_blank" rel="noopener">詳細</a>
        </li>`)}
    </ul>
  </div>`)}`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/parts/Item.astro", void 0);
const $$Spec = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="intro">
  <h1 style="font-size: 2em;">■ MVまわり</h1>
  <div class="infoArea">
    <div class="infoArea_lineup">
      <div class="infoArea_lineupArea infoArea_lineupArea-main">
        <p class="infoArea_lineupAreaLabel">▼ 表紙着用商品</p>
        <div class="infoArea_lineupList">
          ${renderComponent($$result, "Item", $$Item, { "themeId": 2, "productNames": "2WAY キルティング コート" })}
        </div>
      </div>
    </div>
  </div>
</div>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project2/Spec.astro", void 0);
export {
  $$MetaHead as $,
  $$KeyVisual as a,
  $$Spec as b,
  $$FooterScripts as c
};
