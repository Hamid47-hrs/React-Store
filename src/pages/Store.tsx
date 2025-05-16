import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

function Store() {
  return (
    <div>
      <h1 className="text-shadow-2xs">Products List</h1>
      <br />
      <div className="grid grid-cols-5 gap-8">
        <Link to={`/product/${1}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${2}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${3}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${4}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${5}`}>
          <ProductItem />
        </Link>
      </div>
    </div>
  );
}

export default Store;
