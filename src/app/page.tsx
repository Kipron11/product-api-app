"use client";
import { useEffect, useState } from "react";
import { ProductModel } from "./Models/ProductModel";
import { fetchProducts } from "./Services/ProductService";
import Search from "./Components/Search";
import ProductsInfo from "./Components/ProductsInfo";
import Pagination from "./Components/Pagination";
import Loader from "./Components/Loader/Loader";
import NothingFound from "./Components/NothingFound";

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);

  const itemsPerPage: number = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const fetchProductData = async () => {
    try {
      const productsArr = await fetchProducts();
      setProducts(productsArr);
      setFilteredProducts(productsArr);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (filteredProducts: ProductModel[]) => {
    setFilteredProducts(filteredProducts);
  };

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const showPagination = () => {
    if (filteredProducts.length > itemsPerPage) {
      return (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          onPageClick={onPageClick}
        />
      );
    }
  };

  const showNothingFound = () => {
    if(!isLoading && currentItems.length == 0 ) {
      return( <NothingFound />)
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const productCounter = () => {
    return `${currentItems.length} / ${filteredProducts.length}`;
  };

  return (
    <div className="flex flex-col p-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search products={products} onSearch={handleSearch} />
          {productCounter()}
        </>
      )}

      {currentItems.map((product: ProductModel) => (
        <ProductsInfo key={product.id} product={product} />
      ))}
      {showNothingFound()}
      {showPagination()}
    </div>
  );
};

export default ProductsPage;
