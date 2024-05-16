import { Dispatch } from "react";
import { ClothingStoreActions } from "./clothing-store-action.enum";

export type DispatchClothingStore = Dispatch<
  DispatchObject<ClothingStoreActions>
>;

export interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export interface ClothingStoreProduct {
  id: number;
  src: string;
  title: string;
  price: string;
}

export interface ClothingStoreState {
  productsClothingStore: ClothingStoreProduct[];
}
