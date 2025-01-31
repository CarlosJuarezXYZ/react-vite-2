import { FC, lazy, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClothesRoutes } from "./clothes-routes";
import { useClothesStoreState } from "./store/context";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

const Clothing: FC = () => {
  const { shoppingCart } = useClothesStoreState();

  const withRedirect = (Component: ReactElement): ReactElement => {
    if (shoppingCart.length > 0) {
      return Component;
    }

    return <Navigate to={ClothesRoutes.home} replace />;
  };

  return (
    <Routes>
      <Route path={ClothesRoutes.home} element={<Home />} />
      <Route path={ClothesRoutes.productDetail} element={<ProductDetail />} />
      <Route path={ClothesRoutes.cartPage} element={<CartPage />} />
      <Route
        path={ClothesRoutes.checkout}
        element={withRedirect(<Checkout />)}
      />
      <Route path="*" element={<Navigate to={ClothesRoutes.home} replace />} />
    </Routes>
  );
};

export default Clothing;
