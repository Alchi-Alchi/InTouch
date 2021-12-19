import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import Dialogs from './components/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Logo/>
        <Menu/>
        <div className="app-wrapper_content">
          <Route path='/profile' render = {() => <Profile myPosts = {props.state.profilePage.myPosts} addPost={props.addPost}/>}/>
          <Route path='/dialogs' render = {() => <Dialogs dialogs = {props.state.messagesPage.usersData} messages = {props.state.messagesPage.messagesData}/>}/>
        </div>
        <Contacts/>
      </div>
    </BrowserRouter>
  );
}

export default App;