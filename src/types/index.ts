export interface IProductInfo {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
}

export interface IProductType extends IProductInfo {
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
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
  __v: number;
}
