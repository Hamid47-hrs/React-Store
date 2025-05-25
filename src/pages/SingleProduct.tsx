import { useParams } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import ModelPicker from "../components/ModelPicker";
import CartAmount from "../components/CartAmount";
import Button from "../components/Button";

function SingleProduct() {
  const params = useParams();
  const colors = ["#f87171", "#60a5fa", "#34d399", "#facc15", "#a78bfa"];
  const models = ["A", "B", "C", "D"];
  const gallery = [
    "https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tag-packages-box-marketing-advertisement-pack-branding-icons-4863042.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tag-packages-box-marketing-advertisement-pack-branding-icons-4863042.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tag-packages-box-marketing-advertisement-pack-branding-icons-4863042.png?f=webp",
  ];
  return (
    <div>
      <div className="mb-7">
        <span>"Bread Crums {params.id}"</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-1/6 p-3">
          {gallery.map((image) => (
            <img src={image} alt="image-gallery" />
          ))}
        </div>
        <div className="w-full md:w-1/3 p-3">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tag-packages-box-marketing-advertisement-pack-branding-icons-4863042.png?f=webp"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 p-3">
          <div>
            <h1 className="text-2xl font-medium mb-5">Product Title</h1>
            <h2 className="text-xl font-medium mb-10">$ Product Price</h2>
            <p className="text-shadow-md text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              reprehenderit esse cum doloremque nam nesciunt provident obcaecati
              impedit, sapiente quasi similique officia odit optio ipsam a,
              minus itaque quae tempore?
            </p>
          </div>
          <hr className="my-5 text-zinc-200 text-shadow-lg" />
          <div>
            <ColorPicker colors={colors} />
            <ModelPicker models={models} />
          </div>
          <hr className="my-5 text-zinc-200 text-shadow-lg" />
          <div className="flex items-center">
            <CartAmount number={1} />
            <Button variant="secondary">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
