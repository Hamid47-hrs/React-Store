import { useEffect, useState } from "react";
import type { IProductInfo } from "../types";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface IProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProductInfo;
  onSave: (updatedProduct: IProductInfo) => void;
}

export default function EditProductModal({
  isOpen,
  onClose,
  product,
  onSave,
}: IProductModalProps) {
  const [formData, setFormData] = useState<IProductInfo>(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-1">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-center items-center">
        <DialogPanel className="bg-white p-6 rounded-xl w-[90%] max-w-md">
          <DialogTitle className="text-lg font-bold mb-4">
            Edit Product
          </DialogTitle>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Title"
            />

            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Price"
            />

            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Category"
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Description"
            />
            <div className="flex justify-end gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 px-4 py-2 rounded shadow-sm hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
