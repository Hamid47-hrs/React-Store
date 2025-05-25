import Button from "./Button";

function ProductItem() {
  return (
    <div className="shadow-sm rounded-md p-3">
      <div className="flex justify-around">
        <img
          className="rounded-2xl"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tag-packages-box-marketing-advertisement-pack-branding-icons-4863042.png?f=webp"
          alt="product-image"
        />
      </div>
      <div className="h-8">
        <h2>Product Title</h2>
        <span>Product Price $</span>
      </div>
      <div className="flex flex-row-reverse">
        <Button variant="primary" onClick={(e) => e.stopPropagation()}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
