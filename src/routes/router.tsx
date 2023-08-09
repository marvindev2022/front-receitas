import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RenderHome from "../pages";
import RenderRecipes from '../../../sabores-compartilhado/frontend/src/pages/recipes/index';

function MainRoutes(): JSX.Element {
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderHome />} />
          <Route path="/receitas" element={<RenderRecipes />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainRoutes;
