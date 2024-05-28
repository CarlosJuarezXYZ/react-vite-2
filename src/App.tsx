import { lazy } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoute } from "./module-route";
import { ClothingStoreProvider } from "./app/clothing-store/store/context";

const Clothing = lazy(() => import("./app/clothing-store/Clothing"));

function App() {
  return (
    <Routes>
      <Route
        path={`${ModuleRoute.ClothingStore}/*`}
        element={
          <ClothingStoreProvider>
            <Clothing />
          </ClothingStoreProvider>
        }
      />
      <Route
        path="*"
        element={<Navigate to={ModuleRoute.ClothingStore} replace />}
      />
    </Routes>
  );
}

export default App;
