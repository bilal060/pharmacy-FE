import React from "react";
import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../components/forms/RegisterForm";

const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default AuthLayout(Register);
