import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo/pharmacy-sm.png";
import TextField from "../../shared/TextField";
import RateIcon from "../../assets/icons/@.svg";
import PassIcon from "../../assets/icons/lock.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import CloseEye from "../../assets/icons/eyeclose.svg";

const LoginForm = () => {
  const validValues = {
    email: "",
    password: "",
  };
  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginHandler = (values) => {};

  const [eye, setEye] = useState(false);

  return (
    <div className="px-md-5 px-3 w-100 max-w-500px" data-aos="fade-right">
      <Image
        fluid
        src={LogoImg}
        alt="Logo"
        loading="lazy"
        xs="12"
        md="6"
        className="auth-logo"
      />
      <div className="w-100 max-w-500px ">
        <h2 className="auth-heading">
          Welcome <span className="auth-special">Back</span>
        </h2>
        <p className="auth-subheading">Login to your account again</p>
        <Formik
          initialValues={validValues}
          validationSchema={errorSchema}
          onSubmit={loginHandler}
        >
          {() => (
            <Form>
              <TextField
                icon={
                  <Image
                    fluid
                    className="field-icon"
                    src={RateIcon}
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                }
                placeholder="Email"
                name="email"
                type="email"
              />
              <TextField
                icon={
                  <Image
                    fluid
                    className="field-icon"
                    src={PassIcon}
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                }
                righticon={
                  <Image
                    fluid
                    className="field-righticon cr-p"
                    src={eye ? CloseEye : EyeIcon}
                    loading="lazy"
                    width={20}
                    height={20}
                    onClick={() => {
                      setEye(!eye);
                    }}
                  />
                }
                placeholder="Password"
                name="password"
                type={eye ? "text" : "password"}
              />
              <Link to="/forget-password" className="text-decoration-none">
                <p className="text-black text-end">Forgot Password</p>
              </Link>
              <Button
                type="submit"
                className="w-100 mt-3 h-56px gradient-btn-orange"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>

        <p className="auth-subheading fw-bold text-center mt-5 text-dark">
          Don't have an account
          <Link to="/signup" className="text-decoration-none">
            <span className="fs-6 text-primary-blue"> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
