import { lazy } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoute } from "./module-route";
import { ClothesStoreProvider } from "./app/clothing-store/store/context";
import Layout from "./app/clothing-store/components/Layout/Layout";

const Clothing = lazy(() => import("./app/clothing-store/Clothes"));

function App() {
  return (
    <Routes>
      <Route
        path={`${ModuleRoute.Clothes}/*`}
        element={
          <ClothesStoreProvider>
            <Layout>
              <Clothing />
            </Layout>
          </ClothesStoreProvider>
        }
      />
      <Route path="*" element={<Navigate to={ModuleRoute.Clothes} replace />} />
    </Routes>
  );
}

export default App;
