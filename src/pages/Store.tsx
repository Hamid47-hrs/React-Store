import { useNavigate } from "react-router-dom";
import ProductItem from "../components/ProductItem";

function Store() {
  const navigate = useNavigate();
  const handleNavigation = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1 className="text-shadow-2xs">Products List</h1>
      <br />
      <div className="grid grid-cols-5 gap-8">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div
            key={id}
            onClick={() => handleNavigation(id)}
            className="cursor-pointer"
          >
            <ProductItem />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
