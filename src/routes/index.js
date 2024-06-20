import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home.js"));
const LoginPage = React.lazy(() => import("../pages/Login.js"));
const SignupPage = React.lazy(() => import("../pages/Signup.js"));

function NavigationRoutes() {
  const userType = useSelector((state) => state?.user?.user?.user?.role);
  const isLoginned = useSelector((users) => users?.user?.isLogin);
  const adminRoutes = (
    <>
      <Route path="/*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
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
