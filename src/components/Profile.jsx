import React from 'react';
import classes from '../Styles/Profile.module.css';
import Photo from './Photo';
import Name from './Name';
import Info from './Info';
import ContentContainer from './ContentContainer';
import store from '../redux/reduxStore';
const Profile = (props) => {
  return (
  <div className={classes.profile}>
    <Photo/>
    <Name status={props.status} updateStatus={props.updateStatus}/>
    <Info profile={props.profile}/>
    <ContentContainer store={store}/>
  </div>
  );
};
export default Profile;