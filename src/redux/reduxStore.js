import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import contactsReducer from "./contactsReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";
let reducers = combineReducers ({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  contactsPage: contactsReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;