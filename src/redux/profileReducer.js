import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
  myPosts : [
    {id: 1, post: "Hi everyone!"},
    {id: 2, post: "I'm here now)"}
  ],
  newPostText: '',
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: state.newPostText
      };
      return {
        ...state,
        myPosts: [...state.myPosts, newPost],
        newPostText: ''
      };
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.myNewText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;  
  }
}
export const addPostActionCreator = () => {
  return {type: ADD_POST}
};

export const postWindowChangeActionCreator = (textPost) => {
  return {type: UPDATE_POST,
          myNewText: textPost
  }
};

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};
export const getUserProfile = (userID) => (dispatch) => {
  usersAPI.getProfile (userID).then (response => {
    dispatch (setUserProfile (response.data));
  });
};
export default profileReducer;