import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
const Clinic = React.lazy(() => import("../pages/Clinic.js"));
const Drug = React.lazy(() => import("../pages/Drug.js"));
const User = React.lazy(() => import("../pages/User.js"));
const Home = React.lazy(() => import("../pages/Home.js"));
const LoginPage = React.lazy(() => import("../pages/Login.js"));
const SignupPage = React.lazy(() => import("../pages/Signup.js"));

function NavigationRoutes() {
  const userType = useSelector((state) => state?.user?.user?.user?.role);
  const isLoginned = useSelector((users) => users?.user?.isLogin);
  const adminRoutes = (
    <>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route exact path="/clinic" element={<Clinic />}></Route>
      <Route exact path="/drug" element={<Drug />}></Route>
      <Route exact path="/user" element={<User />}></Route>
    </>
  );
  const payerRoutes = (
    <>
      <Route path="/*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
    </>
  );
  if (!isLoginned) {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />}></Route>
      </Routes>
    );
  } else if (userType === "Payer") {
    return <Routes>{payerRoutes}</Routes>;
  } else {
    return <Routes>{adminRoutes}</Routes>;
  }
}

export default NavigationRoutes;
