import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import type { IProductType, IStoreProductInfo } from "../../types";
import { API_ROUTES } from "../../services/apiRoutes";
import Loading from "../../components/ui/Loading";

interface Props {
  onAddToCart: (product: IStoreProductInfo) => void;
}

function ProductList({ onAddToCart }: Props) {
  const [productData, setProductData] = useState<IProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(API_ROUTES.GET_ALL_PRODUCTS);
        const fetchedProductData = await result.json();
        setProductData(fetchedProductData);
      } catch (error) {
        console.log("Error fetching Store Data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <Loading />;
  return (
    <div>
      <h1 className="text-shadow-2xs">Products List</h1>
      <br />
      <div className="grid grid-cols-5 gap-8">
        {productData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.id)}
            className="cursor-pointer"
          >
            <ProductItem productInfo={item} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
