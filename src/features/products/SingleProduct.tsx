import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ColorPicker from "../../components/ui/ColorPicker";
import ModelPicker from "../../components/ui/ModelPicker";
import Button from "../../components/ui/Button";
import type { IProductType } from "../../types";
import { API_ROUTES } from "../../services/apiRoutes";
import { useCart } from "../../context/cart/useCart";

function SingleProduct() {
  const params = useParams();
  const [added, setAdded] = useState(false);
  const [singleProductData, setSingleProductData] = useState<IProductType>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const { addToCart } = useCart();
  const colors = ["#f87171", "#60a5fa", "#34d399", "#facc15", "#a78bfa"];
  const models = ["A", "B", "C", "D"];

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return null;
      const result = await fetch(API_ROUTES.GET_SINGLE_PRODUCT(params.id));
      const fetchedProductData = await result.json();
      setSingleProductData(fetchedProductData);
    };

    fetchData();
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(singleProductData);
  };

  return (
    <div>
      <div className="mb-7">
        <span>
          {singleProductData
            ? `Store / ${singleProductData.category.toUpperCase()} /
          ${singleProductData.title}`
            : null}
        </span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-1/6 p-3 flex flex-col items-center">
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={singleProductData.image}
              alt="image-gallery"
              className="w-30 mb-5"
            />
          ))}
        </div>
        <div className="w-full md:w-1/3 p-3">
          <img src={singleProductData.image} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div>
            <h1 className="text-2xl font-medium mb-5">
              {singleProductData.title}
            </h1>
            <h2 className="text-xl font-medium mb-10">
              $ {singleProductData.price}
            </h2>
            <p className="text-shadow-md text-gray-800">
              {singleProductData.description}
            </p>
          </div>
          <hr className="my-5 text-zinc-200 text-shadow-lg" />
          <div>
            <ColorPicker colors={colors} />
            <ModelPicker models={models} />
          </div>
          <hr className="my-5 text-zinc-200 text-shadow-lg" />
          <div className="flex items-center">
            <Button
              variant={added ? "warning" : "secondary"}
              onClick={(e) => {
                e.stopPropagation();
                setAdded(true);
                handleAddToCart();
              }}
            >
              {added ? "Added" : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
