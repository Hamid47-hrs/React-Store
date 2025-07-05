import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./features/products/ProductList";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product">
            <Route index path=":id" element={<SingleProduct />} />
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
