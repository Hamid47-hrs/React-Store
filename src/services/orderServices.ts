import type { IOrder } from "../types";
import { API_ROUTES } from "./apiRoutes";

export const getOrders = async (): Promise<IOrder[]> => {
  const result = await fetch(API_ROUTES.GET_CART_PRODUCTS);
  if (!result) throw new Error("Failed to fetch Orders!");

  return await result.json();
};
