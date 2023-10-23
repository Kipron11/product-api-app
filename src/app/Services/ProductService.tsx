import axios from "axios";
import { ProductModel } from "../Models/ProductModel";

const apiUrl = "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd";
let products: ProductModel[] = [];

export const fetchProducts = async () => {
  if (products.length) {
    return products;
  }

  try {
    const response = await axios.get(apiUrl);
    products = response.data.products;

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);

    throw error;
  }
};
