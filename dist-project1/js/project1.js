function getThemeItems(data, themeId) {
  const theme = data.themes.find((theme2) => theme2.theme_id === themeId);
  return theme ? theme.items : [];
}
function getProductsByName(data, themeId, productNames = null) {
  const themeItems = getThemeItems(data, themeId);
  if (!productNames) {
    return groupItemsByName(themeItems);
  }
  const names = Array.isArray(productNames) ? productNames : [productNames];
  const filteredItems = themeItems.filter(
    (item) => names.some((name) => item.name === name)
  );
  return groupItemsByName(filteredItems);
}
function groupItemsByName(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item);
    return acc;
  }, {});
}
function formatPrice(price) {
  return `¥${price.toLocaleString()}`;
}
function getSizeClass(size) {
  return size === "large" ? "item_price-large" : "";
}
const themes = [{ "theme_id": 1, "items": [{ "size": "regular", "name": "【洗える】シアー オーバーシャツ", "price": 8990, "link": "https://crosset.onward.co.jp/items/JKUMSW0702?cc=205" }, { "size": "large", "name": "【洗える】シアー オーバーシャツ", "price": 9490, "link": "https://crosset.onward.co.jp/items/JKURSW0702?cc=205" }, { "size": "regular", "name": "Jacket", "price": 13990, "link": "https://crosset.onward.co.jp/items/JKUMSW0702?cc=205" }, { "size": "large", "name": "Jacket", "price": 14990, "link": "https://crosset.onward.co.jp/items/JKURSW0702?cc=205" }, { "size": "regular", "name": "Cut&Sawn", "price": 7990, "link": "https://crosset.onward.co.jp/items/KKUMLS0352?cc=001" }, { "size": "large", "name": "Cut&Sawn", "price": 8490, "link": "https://crosset.onward.co.jp/items/KKURLS0352?cc=001" }, { "size": "regular", "name": "Denim", "price": 9990, "link": "https://crosset.onward.co.jp/items/PRUMGM0001?cc=001" }, { "size": "large", "name": "Denim", "price": 10990, "link": "https://crosset.onward.co.jp/items/PRURGM0001?cc=001" }, { "size": "regular", "name": "Camisole", "price": 4990, "link": "https://crosset.onward.co.jp/items/KKUMGA0651?cc=002" }, { "size": "large", "name": "Camisole", "price": 5490, "link": "https://crosset.onward.co.jp/items/KKURGA0651?cc=002" }, { "size": "regular", "name": "Belt", "price": 4500, "link": "https://crosset.onward.co.jp/items/ZZUMCM0260?cc=005" }] }, { "theme_id": 2, "items": [{ "size": "regular", "name": "", "price": 100, "link": "https://crosset.onward.co.jp/items/###" }] }];
const projectData = {
  themes
};
export {
  getSizeClass as a,
  formatPrice as f,
  getProductsByName as g,
  projectData as p
};
