import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import ProductList from "./features/products/ProductList";
import type { IStoreProductInfo } from "./types";

type CartItem = {
  product: IStoreProductInfo;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddToCart(product: IStoreProductInfo) {
    setCartItems((prev) => {
      const found = prev.find((item) => item.product.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  }

  function getTotalQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  return (
    <>
      <Navbar totalItems={getTotalQuantity()} />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route path="/product">
            <Route
              index
              path=":id"
              element={<SingleProduct onAddToCart={handleAddToCart} />}
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
