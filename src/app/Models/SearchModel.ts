import { ProductModel } from "./ProductModel";

export interface SearchModel {
  products: ProductModel[];
  onSearch: (item: ProductModel[]) => void;
}
