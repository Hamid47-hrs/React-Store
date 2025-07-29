import { Link } from "react-router-dom";
import type { IProductInfo } from "../types";
import { useWishList } from "../context/wishlist/useWishList";
import { useCart } from "../context/cart/useCart";
import Button from "./ui/Button";

interface Props {
  product: IProductInfo;
}

export default function WishListItem({ product }: Props) {
  const { removeFromWishList } = useWishList();
  const { addToCart } = useCart();

  const handleRemoveFromWishList = () => {
    removeFromWishList(product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
      <Link to={`/product/${product.id}`}>
        <div className="flex items-center gap-10">
          <div>
            <img className="w-35" src={product.image} alt="product-image" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">$ {product.price}</p>
          </div>
        </div>
      </Link>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button variant="danger" onClick={handleRemoveFromWishList}>
          Remove
        </Button>
      </div>
    </div>
  );
}
