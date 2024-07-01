import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLogin: false,
  user: {},
  isLoading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case actionTypes.USER_SIGNUP:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {
        isLogin: false,
        user: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
