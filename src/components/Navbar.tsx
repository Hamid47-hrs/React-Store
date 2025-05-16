import { Link } from "react-router-dom";
import Container from "./Container";
import { ShoppingCart, User } from "lucide-react";

function Navbar() {
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

          <div className="flex items-center gap-4">
            <Link to="/cart" className="hover:text-yellow-300 transition">
              <ShoppingCart className="w-6 h-6" />
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
