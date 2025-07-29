import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import ProductList from "./features/products/ProductList";
import { CartProvider } from "./context/cart/CartContext";
import { WishListProvider } from "./context/wishlist/WishListContext";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <CartProvider>
        <WishListProvider>
          <Navbar />
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<ProductList />} />
              <Route path="/product">
                <Route index path=":id" element={<SingleProduct />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </PageContainer>
        </WishListProvider>
      </CartProvider>
    </>
  );
}

export default App;
