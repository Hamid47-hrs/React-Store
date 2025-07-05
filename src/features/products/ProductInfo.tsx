interface IProductInfoProps {
  productImage: string;
  productName: string;
  productCategory: string;
}

function ProductInfo({
  productImage,
  productName,
  productCategory,
}: IProductInfoProps) {
  return (
    <div className="flex justify-start items-center">
      <div>
        <img src={productImage} alt={productName} className="size-30" />
      </div>
      <div className="flex flex-col gap-2 pl-3">
        <span className="capitalize">{productName}</span>
        <span className="text-gray-500 capitalize">{productCategory}</span>
      </div>
    </div>
  );
}

export default ProductInfo;
