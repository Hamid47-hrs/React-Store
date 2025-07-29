import { useContext } from "react";
import { WishListContext } from "./WishListContext";

export const useWishList = () => {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error("useWishList must be uesd inside CartProvider");
  }

  return context;
};
