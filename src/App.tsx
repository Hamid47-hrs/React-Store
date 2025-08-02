import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cart/CartContext";
import { WishListProvider } from "./context/wishlist/WishListContext";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./features/cart/Cart";
import DashboardLayout from "./features/dashboard/DashboardLayout.tsx";
import ProductDashboard from "./features/dashboard/ProductDashboard.tsx";
import OrdersDashboard from "./features/dashboard/OrdersDashboard.tsx";
import Settings from "./features/dashboard/Settings.tsx";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Loading from "./components/ui/Loading";
import Login from "./pages/Login.tsx";
// import ProductList from "./features/products/ProductList";

const Dashboard = lazy(() => import("./features/dashboard/Dashboard.tsx"));
const ProductList = lazy(() => import("./features/products/ProductList.tsx"));

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(true);

  useEffect(() => {
    setIsloggedIn(true);
  }, []);
  return (
    <>
      <CartProvider>
        <WishListProvider>
          <Navbar />
          <PageContainer>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />
                  }
                >
                  <Route path="" element={<Dashboard />} />
                  <Route path="products" element={<ProductDashboard />} />
                  <Route path="orders" element={<OrdersDashboard />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="/login" element={<Login />} />
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
            </Suspense>
          </PageContainer>
        </WishListProvider>
      </CartProvider>
    </>
  );
}

export default App;
