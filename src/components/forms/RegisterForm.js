import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo/pharmacy-sm.png";
import TextField from "../../shared/TextField";
import RateIcon from "../../assets/icons/@.svg";
import PassIcon from "../../assets/icons/lock.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import CloseEye from "../../assets/icons/eyeclose.svg";
import Speciality from "../../assets/icons/speciality.svg";
import FullName from "../../assets/icons/fullName.svg";

import { useDispatch } from "react-redux";
import { userSignUp } from "../../store/user/actions/actionCreators";

const errorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .required("Password is required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Must match 'Password' field value")
    .required("Confirm password is required"),
  specialty: Yup.string().required("Specialty is required"),
  specialtyId: Yup.string().required("Specialty Id is required"),
});

const RegisterForm = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const validValues = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
    specialty: "",
    specialtyId: "",
  };

  const loginHandler = (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.cPassword,
      specialty: values.specialty,
      specialtyId: values.specialtyId,
    };
    dispatch(userSignUp(data, navigation));
  };

  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);

  return (
    <div className="px-sm-5 px-4  w-100 max-w-500px" data-aos="fade-right">
      <Image
        fluid
        src={LogoImg}
        alt="Logo"
        loading="lazy"
        xs="12"
        md="6"
        className="auth-logo"
      />
      <h2 className="auth-heading">
        Register
        <span className="auth-special"> Now</span>
      </h2>
      <p className="auth-subheading">Create your new account.</p>
      <div className="mt-5 w-100 max-w-500px">
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
                    src={FullName}
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                }
                placeholder="Name"
                name="name"
                type="text"
              />
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
                    className="field-righticon"
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
                    className="field-righticon"
                    src={eye1 ? CloseEye : EyeIcon}
                    loading="lazy"
                    width={20}
                    height={20}
                    onClick={() => {
                      setEye1(!eye1);
                    }}
                  />
                }
                placeholder="Confirm Password"
                name="cPassword"
                type={eye1 ? "text" : "password"}
              />
              <TextField
                icon={
                  <Image
                    fluid
                    className="field-icon"
                    src={Speciality}
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                }
                placeholder="Specialty"
                name="specialty"
                type="text"
              />
              <TextField
                icon={
                  <Image
                    fluid
                    className="field-icon"
                    src={Speciality}
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                }
                placeholder="Specialty Id"
                name="specialtyId"
                type="text"
              />
              <Button
                type="submit"
                className="w-100 mt-3 h-56px gradient-btn-orange"
              >
                Create
              </Button>
            </Form>
          )}
        </Formik>
        <p className="auth-subheading fw-bold text-center mt-5 text-dark">
          Already have an account?
          <Link to="/login" className="text-decoration-none ps-1">
            <span className="text-primary-blue fs-6"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
