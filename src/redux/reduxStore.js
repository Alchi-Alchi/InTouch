import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import contactsReducer from "./contactsReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
let reducers = combineReducers ({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  contactsPage: contactsReducer,
  auth: authReducer
});
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;