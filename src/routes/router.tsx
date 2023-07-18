import React from "react";
import { Outlet, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "../pages/Home";
import SignIn from "./../pages/SignIn";
import SignUp from "./../pages/SignUp";
import { getItem } from "./../utils/storage";
import RenderHome from "../pages/Home";

function ProtectedRoutes() {
  const token = getItem("token") ?? null;

  return !token ? <Navigate to="/" /> : <Outlet />;
}

function MainRoutes(): JSX.Element {
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderHome/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Main />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainRoutes;
