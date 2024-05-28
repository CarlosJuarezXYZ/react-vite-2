import { ClothingStoreProduct } from "../domain/clothing-store";
import { getClothingStoreProductsMapper } from "../mapper/clothing-thing";

const BASE_URI = "http://localhost:5000/products";

const getProductsStore = async (): Promise<ClothingStoreProduct[]> => {
  const response = await fetch(`${BASE_URI}`, {
    method: "GET",
  });

  const data = await response.json();

  if (response.ok) {
    return getClothingStoreProductsMapper(data);
  }

  throw new Error({ ...data, status: response.status });
};

export const ClothingProxy = {
  getProductsStore,
};
