import { Link } from "react-router-dom";

function SpecialOffer() {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Today's Special Offer
          </h2>
          <p className="text-lg mb-6">
            To 50% Dicount on Special Products. Don't miss this offer.
          </p>
          <Link
            to="/store"
            className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Purchase
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Special Offer"
            className="w-64 h-64 object-contain rounded-xl shadow-lg bg-white p-4"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
