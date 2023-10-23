import Link from "next/link";
import { ProductModel } from "../Models/ProductModel";

const ProductInfo = ({ product }: { product: ProductModel }) => {
  const { id, name, price, currency, category, description } = product;

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg my-4 max-[600px]:text-center"
      key={id}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name} </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 max-[600px]:flex max-[600px]:items-center max-[600px]:flex-col">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {price} {currency}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
        <Link href={"/"}>
          <button className="bg-green-300 hover:bg-green-500 font-bold py-1 px-3 rounded-full text-gray-700 mr-2 mb-2">
            Back to product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
