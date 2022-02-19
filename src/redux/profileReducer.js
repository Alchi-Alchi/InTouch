import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
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

export const getUserProfile = (userID) => (dispatch) => {
  profileAPI.getProfile (userID).then (response => {
    dispatch (setUserProfile (response.data));
  });
};
export const getStatus = (userID) => (dispatch) => {
  profileAPI.getStatus (userID).then (response => {
    dispatch (setStatus (response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus (status).then (response => {
    if (response.data.resultCode === 0) {
      dispatch (setStatus (status));
    }
  });
};
export default profileReducer;