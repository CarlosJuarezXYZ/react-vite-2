import { DispatchClothingStore } from "../domain/clothing-store";
import { ClothingStoreActions } from "../domain/clothing-store-action.enum";
import { ClothingProxy } from "../proxy/clothing-store";

const getProductsClothingStore = async (
  disptachClothing: DispatchClothingStore
): Promise<void> => {
  try {
    const productsClothing = await ClothingProxy.getProductsStore();
    disptachClothing({
      type: ClothingStoreActions.SaveProductsClotingStore,
      payload: productsClothing,
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

export const ClothingActions = {
  getProductsClothingStore,
};
