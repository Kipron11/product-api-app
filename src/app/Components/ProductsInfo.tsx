import Link from "next/link";
import { ProductModel } from "../Models/ProductModel";

const ProductsInfo = ({ product }: { product: ProductModel }) => {
  const { id, name, price, currency, category } = product;

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg my-4 hover:bg-gray-300 transition">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 max-[600px]:text-center">{name}</div>
      </div>
      <div className="px-6 pt-4 pb-2 max-[600px]:flex max-[600px]:items-center max-[600px]:flex-col">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 min-w-[85px] text-center">
          {price} {currency}
        </div>
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 min-w-[95px] text-center">
          {category}
        </div>
        <Link href={`/product/${id}`}>
          <button className="bg-green-300 hover:bg-green-500 font-bold py-1 px-3 rounded-full text-gray-700 mr-2 mb-2">
            Show product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsInfo;
