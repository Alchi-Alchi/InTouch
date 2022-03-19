import { applyMiddleware, combineReducers, createStore, compose } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;