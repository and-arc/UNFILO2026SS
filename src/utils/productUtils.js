// 商品データユーティリティ関数

/**
 * 指定されたtheme_idから商品情報を取得する
 * @param {Object} data - 商品データオブジェクト
 * @param {number} themeId - テーマID
 * @returns {Array} - 商品配列
 */
export function getThemeItems(data, themeId) {
  const theme = data.themes.find((theme) => theme.theme_id === themeId);
  return theme ? theme.items : [];
}

/**
 * 指定されたtheme_idと商品名から商品情報を取得する
 * @param {Object} data - 商品データオブジェクト
 * @param {number} themeId - テーマID
 * @param {string|Array} productNames - 商品名（文字列または配列）
 * @returns {Object} - 商品名でグループ化された商品情報
 */
export function getProductsByName(data, themeId, productNames = null) {
  const themeItems = getThemeItems(data, themeId);

  // 商品名が指定されていない場合は、すべての商品を返す
  if (!productNames) {
    return groupItemsByName(themeItems);
  }

  // 商品名が文字列の場合は配列に変換
  const names = Array.isArray(productNames) ? productNames : [productNames];

  // 指定された商品名でフィルタリング（完全一致）
  const filteredItems = themeItems.filter((item) =>
    names.some((name) => item.name === name),
  );

  return groupItemsByName(filteredItems);
}

/**
 * 商品を名前でグループ化する
 * @param {Array} items - 商品配列
 * @returns {Object} - 商品名でグループ化されたオブジェクト
 */
function groupItemsByName(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item);
    return acc;
  }, {});
}

/**
 * 商品価格をフォーマットする
 * @param {number} price - 価格
 * @returns {string} - フォーマットされた価格文字列
 */
export function formatPrice(price) {
  return `¥${price.toLocaleString()}`;
}

/**
 * 商品サイズに応じたCSSクラスを取得する
 * @param {string} size - サイズ（'regular' または 'large'）
 * @returns {string} - CSSクラス名
 */
export function getSizeClass(size) {
  return size === "large" ? "item_price-large" : "";
}
