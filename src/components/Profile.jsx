import React from 'react';
import classes from '../Styles/Profile.module.css';
import Photo from './Photo';
import Name from './Name';
import Info from './Info';
import Content from './Content';
const Profile = (props) => {
  return (
  <div className={classes.profile}>
    <Photo/>
    <Name/>
    <Info/>
    <Content  myPosts={props.profilePage.myPosts}
              newPostText={props.profilePage.newPostText}
              dispatch={props.dispatch}/>
  </div>
  );
};
export default Profile;