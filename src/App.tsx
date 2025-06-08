import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
