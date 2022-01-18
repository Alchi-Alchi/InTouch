import { combineReducers, createStore } from "redux";
import contactsReducer from "./contactsReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
let reducers = combineReducers ({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  contactsPage: contactsReducer
});
let store = createStore (reducers);
window.store = store;
export default store;