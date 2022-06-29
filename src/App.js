import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ContactsContainer from './components/ContactsContainer';
import News from './components/News';
import {Route, withRouter} from 'react-router-dom';
//import DialogsContainer from './components/DialogsContainer';
//import ProfileContainer from './components/ProfileContainer';
import LogoContainer from './components/LogoContainer';
import Login from './components/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/General/Preloader';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
const DialogsContainer = React.lazy (() => import ('./components/DialogsContainer'));
const ProfileContainer = React.lazy (() => import ('./components/ProfileContainer'));
class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.error (promiseRejectionEvent);
  }
  componentDidMount () {
    this.props.initializeApp ();
    window.addEventListener ("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount () {
    window.removeEventListener ("unhandledrejection", this.catchAllUnhandledErrors)
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
          <Switch>
            <Route path='/profile/:userID?' render = {() => {return <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/></React.Suspense> }}/>
            <Route path='/dialogs' render = {() => {return <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer/></React.Suspense> }}/>
            <Route path='/contacts' render = {() => <ContactsContainer/>}/>
            <Route path='/login' render = {() => <Login />}/>
            <Route path='*' render = {() => <div>404 NOT FOUND</div>}/>
          </Switch>
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
};
export default InTouchApp;