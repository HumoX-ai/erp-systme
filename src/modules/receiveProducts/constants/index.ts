export enum brandProductFK {
  key1 = "background_img",
  key2 = "name",
  key3 = "first_price",
  key4 = "sale_price",
  key5 = "stock",
  key6 = "brand",
  key7 = "color",
  key8 = "description",
  key9 = "where_to",
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
  [brandProductFK.key6]: "",
  [brandProductFK.key7]: "",
  [brandProductFK.key8]: "",
  [brandProductFK.key9]: "",
};
