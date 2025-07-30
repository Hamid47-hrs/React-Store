import { createContext, useEffect, useState } from "react";
import type { IProductInfo } from "../../types";

interface IWishListContext {
  wishList: IProductInfo[];
  // addToWishList: (product: IProductInfo) => void;
  removeFromWishList: (id: number) => void;
  isInWishList: (id: number) => boolean;
  toggleWishList: (product: IProductInfo) => void;
}

export const WishListContext = createContext<IWishListContext | null>(null);

export const WishListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishList, setWishList] = useState<IProductInfo[]>([]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  // ! Added "toggleWishList" function instead.
  // const addToWishList = (product: IProductInfo) => {
  //   if (!wishList.find((item) => item.id === product.id))
  //     setWishList((prev) => [...prev, product]);
  // };

  const removeFromWishList = (id: number) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishList = (id: number) => {
    return wishList.some((item) => item.id === id);
  };

  const toggleWishList = (product: IProductInfo) => {
    setWishList((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };
  return (
    <WishListContext.Provider
      value={{
        wishList,
        // addToWishList,
        removeFromWishList,
        isInWishList,
        toggleWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
