import WishListItem from "../components/WishListItem";
import { useWishList } from "../context/wishlist/useWishList";

export default function WishList() {
  const { wishList } = useWishList();
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Wish List</h1>
        {wishList.length === 0 ? (
          <p>Your Wish List is Empty</p>
        ) : (
          <div className="flex flex-col gap-6">
            {wishList.map((item, index) => (
              <WishListItem key={index} product={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
