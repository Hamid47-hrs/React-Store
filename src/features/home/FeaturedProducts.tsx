import { useEffect, useState } from "react";
import type { IProductType } from "../../types";
import { API_ROUTES } from "../../services/apiRoutes";
import Loading from "../../components/ui/Loading";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function FeaturedProducts() {
  const [allProducts, setAllProducts] = useState<IProductType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<IProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const result = await fetch(API_ROUTES.GET_ALL_PRODUCTS);
        const data = await result.json();
        setAllProducts(data);
        const top4Products = allProducts
          .filter((item) => item.rating.rate > 4)
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 4);
        setFeaturedProducts(top4Products);
      } catch (error) {
        console.error("Failed to fetch product: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, [allProducts]);

  if (loading) return <Loading />;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-4 bg-white border border-gray-50 rounded-xl shadow hover:shadow-lg hover:shadow-gray-400 transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>
              <div className="flex justify-between text-indigo-500 items-end mb-4 mt-auto">
                <p className="text-lg font-bold text-indigo-600">
                  $ {product.price}
                </p>
                <div className="flex justify-center items-center gap-2">
                  <Star width={18} />
                  <span className="pt-1">{product.rating.rate}</span>
                </div>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition text-center"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
