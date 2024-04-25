import { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClothingRoutes } from "./clothing-routes";

const Home = lazy(() => import("./pages/Home/Home"));

const Clothing: FC = () => {
  return (
    <Routes>
      <Route path={ClothingRoutes.home} element={<Home />} />
      <Route path="*" element={<Navigate to={ClothingRoutes.home} replace />}/>
    </Routes>
  );
};

export default Clothing;
