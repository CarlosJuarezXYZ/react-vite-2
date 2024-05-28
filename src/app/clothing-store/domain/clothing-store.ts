import { Dispatch } from "react";
import { ClothingStoreActions } from "./clothing-store-action.enum";

export interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export interface ClothingStoreProductResponse {
  id: number;
  image: string;
  title: string;
  price: string;
}

export type ClothingStoreProduct = Omit<
  ClothingStoreProductResponse,
  "image"
> & {
  src: string;
};

export type DispatchClothingStore = Dispatch<
  DispatchObject<ClothingStoreActions>
>;

export interface ClothingStoreState {
  productsClothingStore: ClothingStoreProduct[];
}
