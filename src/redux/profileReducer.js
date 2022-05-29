import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO_PROFILE = 'SET_PHOTO_PROFILE';
let initialState = {
  myPosts : [
    {id: 1, post: "Hi everyone!"},
    {id: 2, post: "I'm here now)"}
  ],
  profile: null,
  status: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: action.newPostText
      };
      return {
        ...state,
        myPosts: [...state.myPosts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
      case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
      case SET_PHOTO_PROFILE:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    default:
      return state;  
  }
}
export const addPostActionCreator = (newPostText) => {
  return {type: ADD_POST, newPostText}
};
export const setStatus = (status) => {
  return {type: SET_STATUS, status}
};
export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};
export const setPhotoSuccess = (photos) => {
  return {type: SET_PHOTO_PROFILE, photos}
};

export const getUserProfile = (userID) => async (dispatch) => {
  let response = await profileAPI.getProfile (userID);
  dispatch (setUserProfile (response.data));
};
export const getStatus = (userID) => async (dispatch) => {
  let response = await profileAPI.getStatus (userID);
  dispatch (setStatus (response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus (status);
  if (response.data.resultCode === 0) {
    dispatch (setStatus (status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto (file);
  if (response.data.resultCode === 0) {
    dispatch (setPhotoSuccess (response.data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userID = getState().auth.userID;
  const response = await profileAPI.saveProfile (profile);
  if (response.data.resultCode === 0) {
    dispatch (getUserProfile (userID));
  } else {
    dispatch (stopSubmit ("editProfile", {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};
export default profileReducer;