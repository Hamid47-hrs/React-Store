import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-400 to-purple-300 text-white py-20 px-6 md:px-16 lg:px-24 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="felx-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Best Products, Best Price
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Buy today and use dicounts
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/store"
              className="bg-yellow-100 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              See Products
            </Link>
            <Link
              to="/store"
              className="bg-transparent hover:bg-white text-gray-900 hover:text-indigo-600 border-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              Today's Discounts
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://static.vecteezy.com/system/resources/previews/041/641/848/non_2x/shop-store-icon-storefront-building-supermarket-shopping-symbol-flat-illustration-vector.jpg"
            alt="home page"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
