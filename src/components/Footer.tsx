import { Earth, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
          <p className="text-sm leading-6">
            Our store was established with the aim of providing the best
            products of the highest quality at the most reasonable prices. Your
            satisfaction is our priority.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-white transition">
                Store
              </Link>
            </li>
            <li>
              <Link to="/Store" className="hover:text-white transition">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">
            Contact Information
          </h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-2">
              <Earth /> <span>Iran, Tehran, Somewhere</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone /> <span>(+98)021-12345678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail /> <span>info@example.com</span>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
