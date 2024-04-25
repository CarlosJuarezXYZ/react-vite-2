import { lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoute } from "./module-route";

const Clothing = lazy(() => import("./app/clothing-store/Clothing"));

function App() {
  return (
    <Routes>
      <Route path={`${ModuleRoute.ClothingStore}/*`} element={<Clothing />} />
      <Route
        path="*"
        element={<Navigate to={ModuleRoute.ClothingStore} replace />}
      />
    </Routes>
  );
}

export default App;
