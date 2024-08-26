import Product from "../models/Product";
import { ActionCreator } from "./main";

export const LOAD_PRODUCTS = "Load_Products";

export const loadProductsAction: ActionCreator = () => ({
  type: LOAD_PRODUCTS,
});

export const LOADING_PRODUCTS = "Loading_Products";

export const loadingProductsAction: ActionCreator<Product[]> = (products: Product[]) => ({
  type: LOADING_PRODUCTS,
  payload: products,
});