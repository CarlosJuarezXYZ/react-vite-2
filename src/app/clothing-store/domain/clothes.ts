export interface RateProduct {
  count: number;
  rate: number;
}

export interface ClothesProductsResponseInterface {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: RateProduct;
}

export type ClothesProducts = Omit<
  ClothesProductsResponseInterface,
  "price"
> & {
  offerPrice: number;
  realPrice: string;
  isBetSeller: boolean;
};

export interface ShoppingCartInterface {
  id: number;
  title: string;
  price: number;
  src: string;
  quantity?: number;
}
