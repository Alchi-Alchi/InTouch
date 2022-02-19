import React from 'react';
import classes from '../Styles/Name.module.css';
import ProfileStatus from './ProfileStatus';
const Name = (props) => {
  return <div className={classes.nameAndStatus}>
    <div id={classes.name_content}><p>Call me Pawel</p></div>
    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
  </div>
};
export default Name;