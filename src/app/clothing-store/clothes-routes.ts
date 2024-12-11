import { ModuleRoute } from "../../module-route";

export enum ClothesRoutes {
  home = "home",
  productDetail = "product-detail",
  cartPage = "cart-page",
  checkout = "checkout",
}

export interface ClothesRoutesInterface {
  home: string;
  productDetail: string;
  cartPage: string;
  checkout: string;
}

export const clothesRoutes: ClothesRoutesInterface = {
  home: `/${ModuleRoute.Clothes}/${ClothesRoutes.home}`,
  productDetail: `/${ModuleRoute.Clothes}/${ClothesRoutes.productDetail}`,
  cartPage: `/${ModuleRoute.Clothes}/${ClothesRoutes.cartPage}`,
  checkout: `/${ModuleRoute.Clothes}/${ClothesRoutes.checkout}`,
};
