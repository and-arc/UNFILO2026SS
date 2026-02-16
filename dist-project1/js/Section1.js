import { c as createComponent, f as createAstro, e as renderScript, b as addAttribute, d as renderTemplate, m as maybeRenderHead, r as renderComponent } from "./astro/server.js";
import { g as getProductsByName, p as projectData } from "./project1.js";
/* empty css      */
const $$Astro$1 = createAstro();
const $$MetaHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MetaHead;
  const {
    title = "「これ持っておけば大丈夫」な万能服でリスタート！",
    description = "新生活で忙しいあなたに！コスパ良し機能良しなUNFILOから、ハレの日や通勤服に活躍する万能服をお届けします。"
  } = Astro2.props;
  return renderTemplate`<!-- 特集ページ計測用 dataLayer -->${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/MetaHead.astro?astro&type=script&index=0&lang.ts")}

<!-- Google Tag Manager -->${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/MetaHead.astro?astro&type=script&index=1&lang.ts")}
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
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600&family=Akshar:wght@500&family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&family=Arizonia&display=swap" rel="stylesheet">

<!-- Main Stylesheet (VS Codeの拡張機能でコンパイルされたCSS) -->
<link rel="stylesheet" href="./css/style.css">`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/MetaHead.astro", void 0);
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
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/NavFixed.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FooterScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- フッター -->", '<footer class="footer">\n  <!-- スタッフ情報 -->\n  <div class="footer_staff">\n    <p class="footer_staff_title">STAFF</p>\n    <div class="footer_staff_content">\n      <p>撮影／倉本侑磨(Pygmy Company)〈人物〉／魚地武大（TENT）〈静物〉</p>\n      <p>モデル／山本美月　ヘア・メーク／森野友香子（Perle Management）</p>\n      <p>スタイリスト／荒木里実　取材／西道倫子</p>\n      <p>デザイン／mambo西岡、横田実奈（ともにma-h gra）</p>\n    </div>\n    <p class="footer_staff_note">※クレジットのない小物はすべて私物です。お問い合わせはご遠慮ください。</p>\n  </div>\n\n  <!-- SNSアイコン -->\n  <div class="footer_social">\n    <a href="#" class="footer_social_icon footer_social_icon--store" aria-label="Online Store">\n      <img src="./img/icon-store.png" alt="online store">\n    </a>\n    <a href="#" class="footer_social_icon footer_social_icon--instagram" aria-label="Instagram">\n      <img src="./img/icon-instagram.png" alt="Instagram">\n    </a>\n    <a href="#" class="footer_social_icon footer_social_icon--line" aria-label="LINE">\n      <img src="./img/icon-line.png" alt="LINE">\n    </a>\n  </div>\n\n  <!-- コピーライト -->\n  <div class="footer_copyright">\n    <div class="footer_copyright_logo">\n      <img src="./img/footer_logo.svg" alt="UNFILO アンフィーロ">\n    </div>\n    <p class="footer_copyright_text">COPYRIGHT (C) ONWARD GROUP. ALL RIGHT RESERVED.</p>\n  </div>\n</footer>\n\n<!-- JavaScriptの読み込み（従来のjQuery版を使用） -->\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>\n<script defer src="./js/functions.js"><\/script>'])), maybeRenderHead());
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/FooterScripts.astro", void 0);
const $$Astro = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Item;
  const { themeId, productNames } = Astro2.props;
  const groupedItems = getProductsByName(projectData, themeId, productNames);
  function formatPrice(price) {
    return price.toLocaleString();
  }
  return renderTemplate`${Object.entries(groupedItems).map(([itemName, items]) => {
    const itemArray = items;
    return renderTemplate`${maybeRenderHead()}<div class="item_box">
      ${itemArray.map((item, index) => {
      const isMain = index === 0;
      const formattedPrice = formatPrice(item.price);
      return renderTemplate`<div${addAttribute(`item_row ${isMain ? "item_row-main" : "item_row-sub"}`, "class")}>
            ${isMain ? renderTemplate`<h4 class="item_name">${itemName}</h4>` : renderTemplate`<div class="item_sizeLabel">L size</div>`}
            <div class="item_priceGroup">
              <div class="item_priceText">
                <small>¥</small>${formattedPrice}<small>(tax in)</small>
              </div>
              <a${addAttribute(item.link, "href")} class="item_btn" target="_blank" rel="noopener">
                <span class="item_btnText">DETAIL</span>
              </a>
            </div>
          </div>`;
    })}
    </div>`;
  })}`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/parts/Item.astro", void 0);
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
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/Intro.astro", void 0);
const $$Category = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/Category.astro", void 0);
const $$ImageSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="slider-container" id="imageSlider" data-astro-cid-jyqxx2qc>
  <div class="slider-wrapper" data-astro-cid-jyqxx2qc>
    <!-- 表示される要素 -->
    <div class="slider" data-astro-cid-jyqxx2qc><img src="https://placehold.jp/320x440.png" alt="" data-astro-cid-jyqxx2qc></div>
    <div class="slider slider-current" data-astro-cid-jyqxx2qc>
      <img src="https://placehold.jp/320x440.png" alt="" data-astro-cid-jyqxx2qc>
    </div>

    <!-- 隠れる要素群（右側） -->
    <div class="slider" data-astro-cid-jyqxx2qc><img src="https://placehold.jp/320x440.png" alt="" data-astro-cid-jyqxx2qc></div>
    <div class="slider" data-astro-cid-jyqxx2qc><img src="https://placehold.jp/320x440.png" alt="" data-astro-cid-jyqxx2qc></div>
    <div class="slider" data-astro-cid-jyqxx2qc><img src="https://placehold.jp/320x440.png" alt="" data-astro-cid-jyqxx2qc></div>
  </div>
</div>



${renderScript($$result, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/ImageSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/ImageSlider.astro", void 0);
const $$Section1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- セクション1 -->${maybeRenderHead()}<section class="section" id="jogPants">
  <div class="section_inner">
    <!-- タイトルエリア -->
    <div class="section_title">
      <img src="./img/section01_title.png" alt="累計10万本！「最愛ジョグパン」がさらにさらに進化中">
      <p class="section_lead">
        UNFILOから生まれた大ヒット名品が<br>
        より美しく、より快適に、さらに頼れる一本へと<br>
        生地もディテールもブラッシュアップ！<br>
        この春もシーンレスで活躍の予感です。
      </p>
    </div>
    <!-- 画像エリア -->
    ${renderComponent($$result, "ImageSlider", $$ImageSlider, {})}

    <!-- カラーバリエーション -->
    <div class="section_colorVariation">
      <p class="label">COLOR VARIATION</p>
      <ul class="swatches">
        <li class="swatch" style="background-color: #2b3344;"></li>
        <li class="swatch" style="background-color: #aeabb6;"></li>
        <li class="swatch" style="background-color: #2b2223;"></li>
      </ul>
    </div>

    <!-- Pointセクション -->
    <div class="section_pointList">
      <div class="point">
        <div class="point_image"></div>
        <div class="point_content">
          <p class="point_label">Point</p>
          <p class="point_text">センタープレスに樹脂加工を施すことで、より落ちにくく。縦ラインをしっかり強調してくれます。</p>
        </div>
      </div>
      <div class="point">
        <div class="point_image"></div>
        <div class="point_content">
          <p class="point_label">Point</p>
          <p class="point_text">肌に触れる側の糸を見直すこで、吸水速乾性がグッとUP。お手入れしやすくなり、汗ばむ季節でも快適です。</p>
        </div>
      </div>
    </div>

    <!-- 商品リスト -->
    <div class="section_items">
      ${renderComponent($$result, "Item", $$Item, { "themeId": 1, "productNames": ["Knit", "Camisole", "Denim", "Pants"] })}
    </div>
  </div>
</section>`;
}, "/Users/akiyamakazuki/Dropbox/_works/アム/オンワード樫山/アンフィーロ26SS/www/src/components/project1/Section1.astro", void 0);
export {
  $$MetaHead as $,
  $$Intro as a,
  $$Category as b,
  $$Section1 as c,
  $$NavFixed as d,
  $$FooterScripts as e
};
