const BASE_URL = "https://fakestoreapi.com";

export const API_ROUTES = {
  GET_ALL_PRODUCTS: `${BASE_URL}/products`,
  GET_SINGLE_PRODUCT: (id: number | string) => `${BASE_URL}/products/${id}`,
  GET_CART_PRODUCTS: `${BASE_URL}/carts`,
  GET_SINGLE_CART_PRODUCT: (id: number | string) => `${BASE_URL}/carts/${id}`,
  GET_ALL_USSERS: `${BASE_URL}/users`,
  GET_SINGLE_USER: (id: number | string) => `${BASE_URL}/users/${id}`,
};
