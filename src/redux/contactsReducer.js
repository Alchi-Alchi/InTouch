import { usersAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONTACTS = 'SET_CONTACTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CONTACTS_TOTAL_COUNT = 'SET_CONTACTS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';
let initialState = {
  contacts : [],
  pageSize: 5,
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
        contacts: state.contacts.map (user => {
          if (user.id === action.userID) {
            return {...user, followed: true}
          }
          return user;
        })
      };
      
    case UNFOLLOW:
      return {
        ...state,
        contacts: state.contacts.map (user => {
          if (user.id === action.userID) {
            return {...user, followed: false}
          }
          return user;
        })
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
  return (dispatch) => {
    dispatch (setIsFetching (true));
    usersAPI.getUsers(page, pageSize).then (data => {
      dispatch (setIsFetching (false));
      dispatch (setContacts (data.items));
      dispatch (setContactsTotalCount (data.totalCount))
    });
  }
}
export const follow = (userID) => {
  return (dispatch) => {
    dispatch (setFollowingProcess (true, userID));
    usersAPI.follow (userID)
    .then (response => {
      if (response.data.resultCode == 0) {
        dispatch (followSuccess (userID));
      }
      dispatch (setFollowingProcess (false, userID));
    });
  }
}
export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch (setFollowingProcess (true, userID));
    usersAPI.unfollow (userID)
    .then (response => {
      if (response.data.resultCode == 0) {
        dispatch (unfollowSuccess (userID));
      }
      dispatch (setFollowingProcess (false, userID));
    });
  }
}
export default contactsReducer;