import { ModuleRoute } from "../../module-route";

export enum ClothingRoutes {
  home = "home",
}

export interface ClothingRoutesInterface {
  home: string;
}

export const clothingRoutes: ClothingRoutesInterface = {
  home: `/${ModuleRoute.ClothingStore}/${ClothingRoutes.home}`,
};
