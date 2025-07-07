export interface IProductInfo {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export interface IStoreProductInfo extends IProductInfo {
  description: string;
}

export interface IProductType extends IStoreProductInfo {
  rating: {
    rate: number;
    count: number;
  };
}

export interface EnrichedCartProduct {
  product: IProductInfo;
  quantity: number;
}

export interface ICartProductInfo {
  id: number;
  useId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
  __v: number;
}
