import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import Dialogs from './components/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Logo/>
        <Menu/>
        <div className="app-wrapper_content">
          <Route path='/profile' render = {() => <Profile profilePage = {props.state.profilePage}
                                                          dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' render = {() => <Dialogs dialogs = {props.state.dialogsPage.usersData}
                                                          messages = {props.state.dialogsPage.messagesData}
                                                          store = {props.store}/>}/>
        </div>
        <Contacts/>
      </div>
  );
}

export default App;