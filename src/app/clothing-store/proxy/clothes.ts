import { ClothesProducts } from "../domain/clothes";
import {
  getClothesProductDetail,
  getClothesProductsFakeMapper,
} from "../mapper/clothes-mapper";

const BASE_URI_FAKE_STORE = "https://fakestoreapi.com/products";

const getProductsFakeStore = async (): Promise<ClothesProducts[]> => {
  const response = await fetch(BASE_URI_FAKE_STORE, {
    method: "GET",
  });

  const data = await response.json();

  if (response.ok) {
    return getClothesProductsFakeMapper(data);
  }

  throw new Error({ ...data, status: response.status });
};

const getProductDetailFakeStore = async (
  id: number
): Promise<ClothesProducts> => {
  const response = await fetch(`${BASE_URI_FAKE_STORE}/${id}`, {
    method: "GET",
  });

  const data = await response.json();

  if (response.ok) {
    return getClothesProductDetail(data);
  }

  throw new Error({ ...data, status: response.status });
};

export const ClothesProxy = {
  getProductsFakeStore,
  getProductDetailFakeStore,
};
