/* eslint-disable no-unused-vars */
import * as actionTypes from "./actionTypes";

import Toast from "../../../shared/Toast";
import Axios from "../../../axios/Axios";

export const userSignUp = (data, navigation) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  Axios.post("user/register", data)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/home");
      Toast.success(response?.data?.message);
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: false,
  });
};

export const userLogin = (data, navigation) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });

  Axios.post("user/login", data)
    .then((response) => {
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });

      dispatch({
        type: actionTypes.USER_LOGIN,
        payload: response.data,
      });
      navigation("/home");
      Toast.success(response?.data?.message);
    })
    .catch((error) => {
      Toast.error(error?.response?.data?.message);

      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};

export const userLogout = (navigate, userRole) => (dispatch) => {
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
  if (userRole === "admin") {
    navigate("/adminlogin");
  } else {
    navigate("/login");
  }
};
