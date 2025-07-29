import React, { createContext, useState, useEffect } from "react";
import type { EnrichedCartProduct, IProductInfo } from "../../types";
import { API_ROUTES } from "../../services/apiRoutes";

export interface ICartContext {
  cartItems: EnrichedCartProduct[];
  addToCart: (product: IProductInfo) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  updateQuantity: (productId: number, newQuantity: number) => Promise<void>;
}

export const CartContext = createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<EnrichedCartProduct[]>([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch(API_ROUTES.GET_SINGLE_CART_PRODUCT(1));
        const data = await response.json();

        const enriched: EnrichedCartProduct[] = await Promise.all(
          data.products.map(
            async (item: { productId: number; quantity: number }) => {
              const resProduct = await fetch(
                API_ROUTES.GET_SINGLE_PRODUCT(item.productId)
              );
              const productData = await resProduct.json();

              return {
                product: productData,
                quantity: item.quantity,
              } as EnrichedCartProduct;
            }
          )
        );

        setCartItems(enriched);
      } catch (error) {
        console.error("Error Fetch from API: ", error);
      }
    }

    fetchCart();
  }, []);

  const addToCart = async (product: IProductInfo) => {
    try {
      const existing = cartItems.find((item) => item.product.id === product.id);

      let newCart;

      if (existing) {
        newCart = cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...cartItems, { product, quantity: 1 }];
      }

      const payload = {
        userId: 1,
        product: newCart.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      await fetch(API_ROUTES.ADD_SINGLE_CART_PRODUCT(1), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setCartItems(newCart);
    } catch (error) {
      console.error("Error Add To Cart: ", error);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      const newCart = cartItems.filter((item) => item.product.id !== productId);

      const payload = {
        userId: 1,
        products: newCart.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      await fetch(API_ROUTES.REMOVE_SINGLE_CART_PRODUCT(1), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setCartItems(newCart);
    } catch (error) {
      console.log("Error Remove from Cart: ", error);
    }
  };

  const updateQuantity = async (productId: number, newQuantity: number) => {
    try {
      const newCart = cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );

      const payload = {
        userId: 1,
        products: newCart.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      await fetch(API_ROUTES.ADD_SINGLE_CART_PRODUCT(1), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setCartItems(newCart);
    } catch (error) {
      console.log("Updating Cart Data: ", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
