import { useEffect, useState } from "react";
import type { IProductInfo } from "../types";
import { API_ROUTES } from "../services/apiRoutes";
interface IOrdersProductPorps {
  productId: number;
  quantity: number;
}

// ! اینجا باید هر محصول رو بر اساس ID خود Fetch کنی و Quantity رو بهش بچسبونی و توی این لییست نمایش بدی.

function OrdersProduct({ productId, quantity }: IOrdersProductPorps) {
  const [product, setProduct] = useState<IProductInfo | null>(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const res = await fetch(API_ROUTES.GET_SINGLE_PRODUCT(productId));
        const data = await res.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };

    fetchProductInfo();
  }, [productId]);
  return (
    <div className="flex flex-col space-y-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 flex-wrap cursor-default justify-between text-base font-semibold">
      <p>Name: {product?.title}</p>
      <img className="w-6" src={product?.image} alt="product-image" />
      <p>Qnt: {quantity}</p>
    </div>
  );
}

export default OrdersProduct;
