import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/DialogsContainer';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Logo/>
        <Menu/>
        <div className="app-wrapper_content">
          <Route path='/profile' render = {() => <Profile store = {props.store}/>}/>
          <Route path='/dialogs' render = {() => <DialogsContainer store = {props.store}/>}/>
        </div>
        <Contacts/>
      </div>
  );
}

export default App;