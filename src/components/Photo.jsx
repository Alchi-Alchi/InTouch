import React from 'react';
import avatar from '../images/myAvatar.png';
import classes from '../Styles/Photo.module.css';
const Photo = () => {
  return <div className={classes.photo}>
    <img src={avatar} alt="avatar" />
  </div>
};
export default Photo;