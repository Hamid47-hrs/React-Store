import { Link } from "react-router-dom";
import Container from "./Container";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/cart/useCart";

function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg text-white sticky top-0 z-50">
      <Container>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:scale-105 transition"
          >
            React Store
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
            <Link to="/store" className="hover:text-yellow-300 transition">
              Store
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact Us
            </Link>
          </nav>

          <div className="relative flex items-center gap-4">
            <Link
              to="/cart"
              className="relative hover:text-yellow-300 transition"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/account" className="hover:text-yellow-300 transition">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
