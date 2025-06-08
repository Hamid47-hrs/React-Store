import { X } from "lucide-react";
import CartAmount from "./CartAmount";
import ProductInfo from "./ProductInfo";
import type { IProductInfo } from "../types/types";

interface productInfoProps {
  productInfo: IProductInfo;
}

function CartItem({ productInfo }: productInfoProps) {
  return (
    <div className="flex flex-wrap items-center md:flex-nowrap my-2 px-5 gap-2 shadow-2xl rounded-lg border-2 border-gray-50">
      <div className="md:w-1/2">
        <ProductInfo
          productImage={productInfo.productImage}
          productName={productInfo.productName}
          productCategory={productInfo.productCategory}
        />
      </div>
      <div className="md:w-1/6">$ {productInfo.productPrice}</div>
      <div className="md:w-1/6">
        <CartAmount number={productInfo.productQuantity} />
      </div>
      <div className="flex justify-between items-center md:w-1/6">
        <div>$ 400.00</div>
        <X className="text-red-600 cursor-pointer hover:text-red-700 hover:drop-shadow-xs hover:drop-shadow-gray-500" />
      </div>
    </div>
  );
}

export default CartItem;
