import Button from "./Button";
import type { IStoreProductInfo } from "../types/types";

interface productInfoProps {
  productInfo: IStoreProductInfo;
}

function ProductItem({ productInfo }: productInfoProps) {
  return (
    <div className="shadow-sm rounded-md p-3">
      <div className="flex justify-around">
        <img
          className="rounded-2xl"
          src={productInfo.image}
          alt="product-image"
        />
      </div>
      <div className="h-8">
        <h2>{productInfo.title}</h2>
        <span>$ {productInfo.price}</span>
      </div>
      <div className="flex flex-row-reverse">
        <Button variant="primary" onClick={(e) => e.stopPropagation()}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
