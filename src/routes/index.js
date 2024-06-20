import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home.js"));
const LoginPage = React.lazy(() => import("../pages/Login.js"));
const Register = React.lazy(() => import("../pages/Signup.js"));

function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<LoginPage />} />
      <Route exact path="/signup" element={<Register />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default NavigationRoutes;
