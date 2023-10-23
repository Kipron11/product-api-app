"use client";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { ProductModel } from "../../Models/ProductModel";
import { fetchProducts } from "../../Services/ProductService";
import Loader from "../../Components/Loader/Loader";
import ProductInfo from "../../Components/ProductInfo";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductModel>();
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productsArr = await fetchProducts();
        const product = productsArr.find(
          (product) => product.id === Number(id)
        );
        setProduct(product);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div className="p-5">
      {isLoading && <Loader />}
      {product && <ProductInfo product={product} />}
    </div>
  );
};

export default ProductPage;
