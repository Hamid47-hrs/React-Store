import { X } from "lucide-react";
import CartAmount from "./CartAmount";
import ProductInfo from "./ProductInfo";
import type { EnrichedCartProduct } from "../types/types";

interface productInfoProps {
  product: EnrichedCartProduct["product"];
  quantity: number;
}

function CartItem(props: productInfoProps) {
  const { product, quantity } = props;

  return (
    <div className="flex flex-wrap items-center md:flex-nowrap my-2 px-5 gap-2 shadow-2xl rounded-lg border-2 border-gray-50">
      <div className="md:w-1/2">
        <ProductInfo
          productImage={product.image}
          productName={product.title}
          productCategory={product.category}
        />
      </div>
      <div className="md:w-1/6">$ {product.price}</div>
      <div className="md:w-1/6">
        <CartAmount number={quantity} />
      </div>
      <div className="flex justify-between items-center md:w-1/6">
        <div>$ {product.price * quantity}</div>
        <X className="text-red-600 cursor-pointer hover:text-red-700 hover:drop-shadow-xs hover:drop-shadow-gray-500" />
      </div>
    </div>
  );
}

export default CartItem;
