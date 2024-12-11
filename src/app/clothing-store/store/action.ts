import { DispatchClothesStore } from "../domain/clothes-store";
import { ClothesActionsEnum } from "../domain/clothes-action.enum";
import { ClothesProxy } from "../proxy/clothes";
import { ShoppingCartInterface } from "../domain/clothes";

const getProductsClothesFake = async (
  dispatchClothing: DispatchClothesStore
): Promise<void> => {
  try {
    const productsClotheFake = await ClothesProxy.getProductsFakeStore();
    dispatchClothing({
      type: ClothesActionsEnum.SaveProductsClotheFakeStore,
      payload: productsClotheFake,
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

const getProductDetailClothesFake = async (
  dispatchClothing: DispatchClothesStore,
  id: number
): Promise<void> => {
  try {
    const productsDetailClotheFake =
      await ClothesProxy.getProductDetailFakeStore(id);
    dispatchClothing({
      type: ClothesActionsEnum.SaveProductsClotheDetailFakeStore,
      payload: productsDetailClotheFake,
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

const saveProductClotheFake = async (
  dispatchCloting: DispatchClothesStore,
  product: ShoppingCartInterface
): Promise<void> => {
  dispatchCloting({
    type: ClothesActionsEnum.SaveProductShoppingCart,
    payload: product,
  });
};

export const ClothesActions = {
  getProductsClothesFake,
  getProductDetailClothesFake,
  saveProductClotheFake,
};
