import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ContactsContainer from './components/ContactsContainer';
import News from './components/News';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/DialogsContainer';
import ProfileContainer from './components/ProfileContainer';
import LogoContainer from './components/LogoContainer';
import Login from './components/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/General/Preloader';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
class App extends Component {
  componentDidMount () {
    this.props.initializeApp ();
  }
  render () {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <LogoContainer/>
        <Menu/>
        <div className="app-wrapper_content">
          <Route path='/profile/:userID?' render = {() => <ProfileContainer/>}/>
          <Route path='/dialogs' render = {() => <DialogsContainer/>}/>
          <Route path='/contacts' render = {() => <ContactsContainer/>}/>
          <Route path='/login' render = {() => <Login />}/>
        </div>
        <News/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
let AppContainer = compose (withRouter, connect (mapStateToProps, {initializeApp})) (App);
const InTouchApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
};
export default InTouchApp;