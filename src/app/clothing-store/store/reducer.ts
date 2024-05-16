import { Draft, produce } from "immer";
import {
  ClothingStoreProduct,
  ClothingStoreState,
  DispatchObject,
} from "../domain/clothing-store";
import { ClothingStoreActions } from "../domain/clothing-store-action.enum";

export const clothingStoreInitialState: ClothingStoreState = {
  productsClothingStore: [],
};

export const clothingStoreReducer = produce(
  (
    draft: Draft<ClothingStoreState>,
    { type, payload }: DispatchObject<ClothingStoreActions>
  ) => {
    switch (type) {
      case ClothingStoreActions.SaveProductsClotingStore:
        draft.productsClothingStore = payload as ClothingStoreProduct[];
        break;
      default:
        throw new Error(`Unknow type: ${type}`);
    }
  }
);
