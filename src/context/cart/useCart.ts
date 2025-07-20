import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be uesd inside CartProvider");
  }

  return context;
};
