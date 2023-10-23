import { useState, useEffect } from "react";
import { ProductModel } from "../Models/ProductModel";
import { SearchModel } from "../Models/SearchModel";

const Search = ({ products, onSearch }: SearchModel) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const filteredProducts = products.filter((product: ProductModel) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      onSearch(filteredProducts);
    }, 500);
    
    return () => clearTimeout(delaySearch);
  }, [search, onSearch, products]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        className="relative m-0 block w-full min-w-350 max-w-350 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
