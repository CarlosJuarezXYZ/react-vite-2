import { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClothesRoutes } from "./clothes-routes";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductDetail = lazy(()=> import("./pages/ProductDetail/ProductDetail"));
const CartPage = lazy(()=>import("./pages/CartPage/CartPage"));
const Checkout = lazy(()=>import("./pages/Checkout/Checkout"));

const Clothing: FC = () => {
  return (
    <Routes>
      <Route path={ClothesRoutes.home} element={<Home />} />
      <Route path={ClothesRoutes.productDetail} element={<ProductDetail/>}/>
      <Route path={ClothesRoutes.cartPage} element={<CartPage/>}/>
      <Route path={ClothesRoutes.checkout} element={<Checkout/>}/>
      <Route path="*" element={<Navigate to={ClothesRoutes.home} replace />} />
    </Routes>
  );
};

export default Clothing;
