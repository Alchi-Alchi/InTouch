import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import ContactsContainer from './components/ContactsContainer';
import News from './components/News';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/DialogsContainer';
import ProfileContainer from './components/ProfileContainer';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Logo/>
        <Menu/>
        <div className="app-wrapper_content">
          <Route path='/profile/:userID?' render = {() => <ProfileContainer store = {props.store}/>}/>
          <Route path='/dialogs' render = {() => <DialogsContainer store = {props.store}/>}/>
          <Route path='/contacts' render = {() => <ContactsContainer store = {props.store}/>}/>
        </div>
        <News/>
      </div>
  );
}

export default App;