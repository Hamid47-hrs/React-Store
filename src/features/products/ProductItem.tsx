import Button from "../../components/ui/Button";
import type { IStoreProductInfo } from "../../types";
import { updateCart } from "../../services/cartServices";
interface productInfoProps {
  productInfo: IStoreProductInfo;
  onAddToCart: (product: IStoreProductInfo) => void;
}

function ProductItem({ productInfo, onAddToCart }: productInfoProps) {
  function showTitle(text: string, wordsLimit = 4) {
    const words = text.split(" ");
    const truncated =
      words.length > wordsLimit
        ? words.slice(0, wordsLimit).join(" ") + "..."
        : text;

    return <h2 className="m-2">{truncated}</h2>;
  }

  const handleAddToCart = async () => {
    try {
      const cartId = 1;
      const userId = 1;

      const updatedCart = await updateCart(cartId, userId, [productInfo]);
      if (updatedCart) {
        onAddToCart(productInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-sm rounded-md p-3">
      <div className="flex justify-center w-45 h-45">
        <img
          className="rounded-2xl"
          src={productInfo.image}
          alt="product-image"
        />
      </div>
      <div className="h-8 flex flex-col justify-start">
        <span>{showTitle(productInfo.title)}</span>
        <span>$ {productInfo.price}</span>
      </div>
      <div className="flex flex-row-reverse">
        <Button
          variant="primary"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
