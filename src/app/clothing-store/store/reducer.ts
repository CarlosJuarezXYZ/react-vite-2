import { Draft, produce } from "immer";
import { ClothesStoreState, DispatchObject } from "../domain/clothes-store";
import { ClothesActionsEnum } from "../domain/clothes-action.enum";
import { ClothesProducts, ShoppingCartInterface } from "../domain/clothes";

export const clothesStoreInitialState: ClothesStoreState = {
  productsClothesFakeStore: [],
  productClothesDetail: null,
  shoppingCart: [],
  searchProduct: "",
};

export const clothesStoreReducer = produce(
  (
    draft: Draft<ClothesStoreState>,
    { type, payload }: DispatchObject<ClothesActionsEnum>
  ) => {
    switch (type) {
      case ClothesActionsEnum.SaveProductsClotheFakeStore:
        draft.productsClothesFakeStore = payload as ClothesProducts[];
        break;
      case ClothesActionsEnum.SaveProductsClotheDetailFakeStore:
        draft.productClothesDetail = payload as ClothesProducts;
        break;
      case ClothesActionsEnum.SaveSearchProduct:
        draft.searchProduct = payload as string;
        break;
      case ClothesActionsEnum.DeleteProduct:
        draft.shoppingCart = draft.shoppingCart.filter(
          (item) => item.id !== (payload as number)
        );
        break;
      case ClothesActionsEnum.SaveProductShoppingCart:
        // eslint-disable-next-line no-case-declarations
        const newProduct = payload as ShoppingCartInterface;

        // eslint-disable-next-line no-case-declarations
        const isProduct = draft.shoppingCart.find(
          (item) => item.id === newProduct.id
        );

        if (isProduct) {
          isProduct.quantity! += 1;
        } else {
          draft.shoppingCart = [
            ...draft.shoppingCart,
            { ...newProduct, quantity: 1 },
          ];
        }
        break;
      default:
        throw new Error(`Unknow type: ${type}`);
    }
  }
);
