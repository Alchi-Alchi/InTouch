import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;  
  }
}
export const setUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userID, email, login, isAuth}});
export const getCaptchaURLSuccess = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}});
export const getUserData = () => async (dispatch) => {
  let response = await authAPI.me ();
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setUserData (id, email, login, true));
  }
};
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login (email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    //dispatch(getCaptchaURL());
    dispatch(getUserData());
  } else {
      // if (response.data.resultCode === 10) {
      //   dispatch(getCaptchaURL());
      // }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Something went wrong";
    dispatch (stopSubmit ("login", {_error: message}));
  }
};

export const getCaptchaURL = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaURL ();
  const captchaURL = response.data.url;
  dispatch (getCaptchaURLSuccess (captchaURL));
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout ()
    if (response.data.resultCode === 0) {
      dispatch(setUserData (null, null, null, false));
    }
};
export default authReducer;