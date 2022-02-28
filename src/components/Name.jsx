import React from 'react';
import classes from '../Styles/Name.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
const Name = (props) => {
  return <div className={classes.nameAndStatus}>
    <div id={classes.name_content}><p>Call me Pawel</p></div>
    <div id={classes.status}><ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/></div>
  </div>
};
export default Name;