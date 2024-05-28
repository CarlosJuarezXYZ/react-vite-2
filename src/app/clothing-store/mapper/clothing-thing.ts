import {
  ClothingStoreProduct,
  ClothingStoreProductResponse,
} from "../domain/clothing-store";

export const getClothingStoreProductsMapper = (
  products: ClothingStoreProductResponse[]
): ClothingStoreProduct[] => {
  return products.map(({ image, ...rest }) => {
    return {
      src: image,
      ...rest,
    };
  });
};
