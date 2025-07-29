import type { IProductInfo, IProductType } from "../types";

export function extractProductInfo(product: IProductType): IProductInfo {
  const { id, title, price, category, description, image } = product;
  return { id, title, price, category, description, image };
}
