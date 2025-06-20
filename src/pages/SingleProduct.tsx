import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ColorPicker from "../components/ColorPicker";
import ModelPicker from "../components/ModelPicker";
import CartAmount from "../components/CartAmount";
import Button from "../components/Button";
import type { IProductType } from "../types/types";
import { API_ROUTES } from "../services/apiRoutes";

function SingleProduct() {
  const params = useParams();
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

  return (
    <div>
      <div className="mb-7">
        <span>"Bread Crums {params.id}"</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-1/6 p-3">
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={singleProductData.image}
              alt="image-gallery"
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
            <CartAmount quantity={1} />
            <Button variant="secondary">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
