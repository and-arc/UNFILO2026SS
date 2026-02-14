import { c as createComponent, e as createAstro, f as renderScript, d as addAttribute, b as renderTemplate, m as maybeRenderHead, r as renderComponent } from "./astro/server.js";
import { g as getProductsByName, f as formatPrice, a as getSizeClass, p as projectData } from "./project1.js";
const $$Astro$1 = createAstro();
const $$MetaHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MetaHead;
  const {
    title = "「これ持っておけば大丈夫」な万能服でリスタート！",
    description = "新生活で忙しいあなたに！コスパ良し機能良しなUNFILOから、ハレの日や通勤服に活躍する万能服をお届けします。"
  } = Astro2.props;
  return renderTemplate`<!-- 特集ページ計測用 dataLayer -->${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/MetaHead.astro?astro&type=script&index=0&lang.ts")}

<!-- Google Tag Manager -->${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/MetaHead.astro?astro&type=script&index=1&lang.ts")}
<!-- End Google Tag Manager --><meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${title}</title>
<meta name="description"${addAttribute(description, "content")}>
<meta name="keywords" content="UNFILO,UNFILO L,steppi,アンフィ―ロ,アンフィーロエル,ステッピ,稲沢朋子,竹内友梨,明希知美,竹村はま子,機能美,洗える,撥水,UVケア,接触冷感,マルチ機能,多機能,ジョグパン,最愛ジョグパン,BEAUTYMOVE,FINEMOVE,ワンピース,Tシャツ,カーディガン,パンツ,ゆるパンツ,スカート,ブラウス,ロゴT,,ニットシューズ,シャツ,ブルゾン,ジャンスカ,セットアップ,トレンド,春,春服,ニット,ジレ,最旬,通販,クローゼット,CROSSET,マガジン,マガジンCROSSET,ファッション,fashion,オンワード樫山,ONWARD">

<!-- OGP Meta Tags -->
<meta property="og:locale" content="ja_JP">
<meta property="og:site_name" content="ONWARD CROSSET">
<meta property="og:url" content="https://crosset.onward.co.jp/feature/unfilo/24spring/unfilo_magazine01/">
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:type" content="website">
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image" content="https://crosset.onward.co.jp/feature/unfilo/24spring/unfilo_magazine01/img/ogp.jpg">
<meta name="twitter:card" content="summary_large_image">

<link rel="canonical" href="https://crosset.onward.co.jp/feature/unfilo/24spring/unfilo_magazine01/">
<link rel="shortcut icon" type="image/x-icon" href="https://crosset.onward.co.jp/favicon/crost/favicon.ico">

<!-- Web Fonts -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600&family=Akshar:wght@500&family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Main Stylesheet (VS Codeの拡張機能でコンパイルされたCSS) -->
<link rel="stylesheet" href="./css/style.css">`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/MetaHead.astro", void 0);
const $$NavFixed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 固定ナビゲーション -->${maybeRenderHead()}<div class="fixedNav">
  <div class="pagetop_btn">
    <a href="">
      <picture>
        <img src="./img/btn_pagetop.png" alt="">
      </picture>
    </a>
  </div>
</div>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/NavFixed.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FooterScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- フッター -->", '<footer class="footer">\n  <div class="logo">\n    <img src="./img/logo.png" alt="">\n  </div>\n  <p class="copyright">Copyright © ONWARD KASHIYAMA Co.,Ltd.</p>\n</footer>\n\n<!-- JavaScriptの読み込み（従来のjQuery版を使用） -->\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>\n<script defer src="./js/functions.js"><\/script>'])), maybeRenderHead());
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/FooterScripts.astro", void 0);
const $$Astro = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Item;
  const { themeId, productNames } = Astro2.props;
  const groupedItems = getProductsByName(projectData, themeId, productNames);
  return renderTemplate`${Object.entries(groupedItems).map(([itemName, items]) => renderTemplate`${maybeRenderHead()}<div class="item_box">
    <h4 class="item_name">${itemName}</h4>
    <ul class="item_priceList">
      ${items.map((item) => renderTemplate`<li${addAttribute(`item_price ${getSizeClass(item.size)}`, "class")}>
          <span class="item_priceText">${formatPrice(item.price)}<span class="tax">(税込)</span></span>
          <a${addAttribute(item.link, "href")} class="item_btn" target="_blank" rel="noopener">詳細</a>
        </li>`)}
    </ul>
  </div>`)}`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/parts/Item.astro", void 0);
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Key Visual Section -->${maybeRenderHead()}<div class="kv">
  <h1>
    <picture>
      <source media="(min-width: 768px)" srcset="./img/kv_pc.jpg">
      <img src="./img/kv_sp.jpg" alt="">
    </picture>
  </h1>
</div>

<!-- Introduction Section -->
<div class="intro">
  <h2 class="title">
  </h2>
  <p class="catch"></p>
  <img src="./img/ttl_main.png" alt="">
  <div class="text">
    <p>復職、子どもの進級etc.新生活が始まる春<br class="only-pc">
    アンフィーロにお任せ！</p>
    <p></p>
  </div>

  <!-- 商品ラインナップ -->
  <div class="item">
    <div class="item_main">
      <p class="item_label">▼ 表紙着用商品</p>
      <div class="item_list">
        ${renderComponent($$result, "Item", $$Item, { "themeId": 1 })}
      </div>
    </div>
  </div>
</div>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/Intro.astro", void 0);
const $$Category = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/Category.astro", void 0);
const $$Section1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- セクション -->${maybeRenderHead()}<section class="section section01" id="theme1">
  <div class="section_inner">
		<div class="section_head">
			<p class="catch"><span>可愛さ・コスパ機能性を総取り!</span></p>
			<h2 class="title">
				<img src="./img/img_theme01_anchor.png" alt="!">
			</h2>
			<p class="lead">
					機能面にはさらなる磨きを、そしてトレンド感も網羅する新作から、<br>
					忙しい私たちがすぐ取り入れるべきニュースをピックアップします。
			</p>
		</div>
  </div>
	
</section>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/www_フォーマット/src/components/project1/Section1.astro", void 0);
export {
  $$MetaHead as $,
  $$Intro as a,
  $$Category as b,
  $$Section1 as c,
  $$NavFixed as d,
  $$FooterScripts as e
};
