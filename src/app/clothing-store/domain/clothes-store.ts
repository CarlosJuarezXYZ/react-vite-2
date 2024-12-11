import { Dispatch } from "react";
import { ClothesActionsEnum } from "./clothes-action.enum";
import { ClothesProducts, ShoppingCartInterface } from "./clothes";

export interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export type DispatchClothesStore = Dispatch<DispatchObject<ClothesActionsEnum>>;

export interface ClothesStoreState {
  productsClothesFakeStore: ClothesProducts[];
  productClothesDetail: ClothesProducts | null;
  shoppingCart: ShoppingCartInterface[];
  searchProduct: string;
}
