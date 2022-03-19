import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/followUnfollowHelper';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONTACTS = 'SET_CONTACTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CONTACTS_TOTAL_COUNT = 'SET_CONTACTS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';
let initialState = {
  contacts : [],
  pageSize: 7,
  contactsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProcess: [],
};
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        contacts: updateObjectInArray (state.contacts, action.userID, "id", {followed: true})
      };
      
    case UNFOLLOW:
      return {
        ...state,
        contacts: updateObjectInArray (state.contacts, action.userID, "id", {followed: false})
      };

    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts
      };

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};

    case SET_CONTACTS_TOTAL_COUNT:
      return {...state, contactsCount: action.contactsCount};

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    case TOGGLE_IS_FOLLOWING_PROCESS:
      return {...state,
        followingProcess: action.followingProcess ? [...state.followingProcess, action.userID] : state.followingProcess.filter (id => id != action.userID)
      }
    default:
      return state;  
  }
}
export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setContacts = (contacts) => ({type: SET_CONTACTS, contacts});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setContactsTotalCount = (contactsCount) => ({type: SET_CONTACTS_TOTAL_COUNT, contactsCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingProcess = (followingProcess, userID) => ({type: TOGGLE_IS_FOLLOWING_PROCESS, followingProcess, userID});
export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch (setIsFetching (true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch (setIsFetching (false));
    dispatch (setContacts (data.items));
    dispatch (setContactsTotalCount (data.totalCount))
  }
};
const followUnfollowFunction = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch (setFollowingProcess (true, userID));
    let response = await apiMethod(userID);
    if (response.data.resultCode == 0) {
      dispatch (actionCreator(userID));
    }
    dispatch (setFollowingProcess (false, userID));
}
export const follow = (userID) => {
  return async (dispatch) => {
    followUnfollowFunction (dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
  }
};
export const unfollow = (userID) => {
  return async (dispatch) => {
    followUnfollowFunction (dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
  }
};
export default contactsReducer;