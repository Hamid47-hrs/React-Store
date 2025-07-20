import { API_ROUTES } from "./apiRoutes";

export const updateCart = async (
  cartId: number,
  userId: number,
  products: {
    productId: number;
    quantity: number;
  }[]
) => {
  const response = await fetch(API_ROUTES.ADD_SINGLE_CART_PRODUCT(cartId), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: cartId,
      userId,
      products,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to update cart.");
  }

  const data = await response.json();
  return data;
};
