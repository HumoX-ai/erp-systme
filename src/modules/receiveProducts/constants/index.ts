export enum brandProductFK {
  key1 = "image",
  key2 = "product_name",
  key3 = "price",
  key4 = "sell_price",
  key5 = "count",
  key6 = "brand_name",
}

export enum brandFK {
  key1 = "brand_name",
  key2 = "children",
}

export const brandIV = {
  [brandFK.key1]: "",
};

export const brandProductIV = {
  [brandProductFK.key1]: null,
  [brandProductFK.key2]: "",
  [brandProductFK.key3]: "",
  [brandProductFK.key4]: "",
  [brandProductFK.key5]: "",
};
