import defaultIMG from '../images/unknown.png'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONTACTS = 'SET_CONTACTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CONTACTS_TOTAL_COUNT = 'SET_CONTACTS_TOTAL_COUNT';
let initialState = {
  contacts : [
    {id: 1, photo: defaultIMG,  fullName: 'Pawel', followed: true, userStatus: 'Hi everyone', location: {city: 'Warszawa', country: 'Polska'} },
    {id: 2, photo: defaultIMG, fullName: 'Andrew', followed: true, userStatus: 'This is my official account', location: {city: 'New-York', country: 'USA'} },
    {id: 3, photo: defaultIMG, fullName: 'Peter', followed: false, userStatus: 'Hello. Anybody here?', location: {city: 'Roma', country: 'Italy'} }
  ],
  pageSize: 5,
  contactsCount: 0,
  currentPage: 1
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

    default:
      return state;  
  }
}
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setContactsAC = (contacts) => ({type: SET_CONTACTS, contacts});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setContactsTotalCountAC = (contactsCount) => ({type: SET_CONTACTS_TOTAL_COUNT, contactsCount});
export default contactsReducer;