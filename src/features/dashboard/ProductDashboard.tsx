import { useEffect, useState } from "react";
import type { IProductInfo } from "../../types";
import { API_ROUTES } from "../../services/apiRoutes";
import EditProductModal from "../../components/EditProductModal";

function ProductDashboard() {
  const [products, setProducts] = useState<IProductInfo[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProductInfo | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(API_ROUTES.GET_ALL_PRODUCTS);
        const fetchedProductData = await result.json();
        setProducts(fetchedProductData);
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (product: IProductInfo) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmation) {
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleSave = () => {
    return null;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Category</th>
            <th className="p-3">Description</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-3">
                <img src={product.image} alt="product-image" />
              </td>
              <td className="p-3">{product.title}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.description}</td>
              <td className="flex flex-col p-3 space-x-2 space-y-3 items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-700"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default ProductDashboard;
