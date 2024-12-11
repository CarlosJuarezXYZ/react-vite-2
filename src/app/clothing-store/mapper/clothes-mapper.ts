import {
  ClothesProducts,
  ClothesProductsResponseInterface,
} from "../domain/clothes";

export const getClothesProductsFakeMapper = (
  products: ClothesProductsResponseInterface[]
): ClothesProducts[] => {
  return products.map(({ price, ...rest }) => {
    return {
      ...rest,
      offerPrice: price,
      realPrice: (price + 20).toFixed(2),
      isBetSeller: true,
    };
  });
};

export const getClothesProductDetail = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
}: ClothesProductsResponseInterface): ClothesProducts => {
  return {
    id,
    title,
    category,
    description,
    image,
    rating,
    offerPrice: price,
    realPrice: (price + 20).toFixed(2),
    isBetSeller: true,
  };
};
