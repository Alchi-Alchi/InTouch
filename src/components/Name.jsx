import React from 'react';
import classes from '../Styles/Name.module.css';
import ProfileStatus from './ProfileStatus';
const Name = () => {
  return <div className={classes.nameAndStatus}>
    <div id={classes.name_content}><p>Call me Pawel</p></div>
    <ProfileStatus/>
  </div>
};
export default Name;