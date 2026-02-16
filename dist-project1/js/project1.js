function getThemeItems(data, themeId) {
  const theme = data.themes.find((theme2) => theme2.theme_id === themeId);
  return theme ? theme.items : {};
}
function getProductsByName(data, themeId, productNames = null) {
  const themeItems = getThemeItems(data, themeId);
  if (!productNames) {
    return themeItems;
  }
  const names = Array.isArray(productNames) ? productNames : [productNames];
  const filteredItems = {};
  names.forEach((name) => {
    if (themeItems[name]) {
      filteredItems[name] = themeItems[name];
    }
  });
  return filteredItems;
}
function formatPrice(price) {
  return `¥${price.toLocaleString()}`;
}
function getSizeClass(size) {
  return size === "large" ? "item_price-large" : "";
}
const themes = [{ "theme_id": 1, "items": { "Jacket": [{ "size": "regular", "price": 13990, "link": "https://crosset.onward.co.jp/items/JKUMSW0702?cc=205" }, { "size": "large", "price": 14990, "link": "https://crosset.onward.co.jp/items/JKURSW0702?cc=205" }], "Cut&Sawn": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/KKUMLS0352?cc=001" }, { "size": "large", "price": 8490, "link": "https://crosset.onward.co.jp/items/KKURLS0352?cc=001" }], "Denim": [{ "size": "regular", "price": 9990, "link": "https://crosset.onward.co.jp/items/PRUMGM0001?cc=001" }, { "size": "large", "price": 10990, "link": "https://crosset.onward.co.jp/items/PRURGM0001?cc=001" }], "Camisole": [{ "size": "regular", "price": 4990, "link": "https://crosset.onward.co.jp/items/KKUMGA0651?cc=002" }, { "size": "large", "price": 5490, "link": "https://crosset.onward.co.jp/items/KKURGA0651?cc=002" }], "Belt": [{ "size": "regular", "price": 4500, "link": "https://crosset.onward.co.jp/items/ZZUMCM0260?cc=005" }] } }, { "theme_id": 2, "items": { "Pants": [{ "size": "regular", "price": 8990, "link": "https://crosset.onward.co.jp/items/PRUMLM0702?cc=003" }, { "size": "large", "price": 9990, "link": "https://crosset.onward.co.jp/items/PRURLM0702?cc=003" }], "Coat": [{ "size": "regular", "price": 15990, "link": "https://crosset.onward.co.jp/items/CMUMLS0202?cc=075" }, { "size": "large", "price": 16990, "link": "https://crosset.onward.co.jp/items/CMURLS0202?cc=075" }], "Camisole": [{ "size": "regular", "price": 6990, "link": "https://crosset.onward.co.jp/items/BLUMLM0403?cc=001" }, { "size": "large", "price": 7480, "link": "https://crosset.onward.co.jp/items/BLUMLM0403?cc=001" }], "Bag": [{ "size": "regular", "price": 4990, "link": "https://crosset.onward.co.jp/items/BOUMLS0400?cc=001" }] } }, { "theme_id": 3, "items": { "Blouson": [{ "size": "regular", "price": 11990, "link": "https://crosset.onward.co.jp/items/JKUMSM0700?cc=202" }, { "size": "large", "price": 12980, "link": "https://crosset.onward.co.jp/items/JKURSM0700?cc=202" }], "Knit": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/KRUMLM0324?cc=135" }, { "size": "large", "price": 8490, "link": "https://crosset.onward.co.jp/items/KRURLM0324?cc=135" }], "Camisole": [{ "size": "regular", "price": 4990, "link": "https://crosset.onward.co.jp/items/KKUMGA0651?cc=002" }, { "size": "large", "price": 5490, "link": "https://crosset.onward.co.jp/items/KKURGA0651?cc=002" }], "Pants": [{ "size": "regular", "price": 8990, "link": "https://crosset.onward.co.jp/items/PRUMLM0305?cc=033" }, { "size": "large", "price": 9990, "link": "https://crosset.onward.co.jp/items/PRURLM0305?cc=033" }] } }, { "theme_id": 4, "items": { "Jogger pants": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/PRUMLM0700?cc=005" }, { "size": "large", "price": 8990, "link": "https://crosset.onward.co.jp/items/PRURLM0700?cc=005" }], "Shirt": [{ "size": "regular", "price": 8990, "link": "https://crosset.onward.co.jp/items/BLUMLM0301?cc=012" }, { "size": "large", "price": 9490, "link": "https://crosset.onward.co.jp/items/BLURLM0301?cc=012" }], "Knit": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/KRUMLM0324?cc=012" }, { "size": "large", "price": 8490, "link": "https://crosset.onward.co.jp/items/KRURLM0324?cc=012" }], "Sunglasses": [{ "size": "regular", "price": 3990, "link": "https://crosset.onward.co.jp/items/ZZUMGA0012?cc=005" }] } }, { "theme_id": 5, "items": { "One piece": [{ "size": "regular", "price": 13990, "link": "https://crosset.onward.co.jp/items/OPUMLM0700?cc=005" }, { "size": "large", "price": 14990, "link": "https://crosset.onward.co.jp/items/OPURLM0700?cc=005" }], "Blouse": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/BLUMLM0103?cc=172" }, { "size": "large", "price": 8490, "link": "https://crosset.onward.co.jp/items/BLURLM0103?cc=172" }], "Sunglasses": [{ "size": "regular", "price": 3990, "link": "https://crosset.onward.co.jp/items/ZZUMGA0012?cc=004" }] } }, { "theme_id": 6, "items": { "Jacket": [{ "size": "regular", "price": 13990, "link": "https://crosset.onward.co.jp/items/JKUMSW0702?cc=075" }, { "size": "large", "price": 14990, "link": "https://crosset.onward.co.jp/items/JKURSW0702?cc=075" }], "T-shirt": [{ "size": "regular", "price": 4990, "link": "https://crosset.onward.co.jp/items/KKUMLS0252?cc=101" }, { "size": "large", "price": 5490, "link": "https://crosset.onward.co.jp/items/KKURLS0252?cc=101" }], "Knit": [{ "size": "regular", "price": 7990, "link": "https://crosset.onward.co.jp/items/KRUMLM0325?cc=201" }, { "size": "large", "price": 8490, "link": "https://crosset.onward.co.jp/items/KRURLM0325?cc=201" }], "Pants": [{ "size": "regular", "price": 8490, "link": "https://crosset.onward.co.jp/items/PRUMGM0315?cc=075" }, { "size": "large", "price": 9490, "link": "https://crosset.onward.co.jp/items/PRURGM0315?cc=075" }] } }];
const projectData = {
  themes
};
export {
  getSizeClass as a,
  formatPrice as f,
  getProductsByName as g,
  projectData as p
};
