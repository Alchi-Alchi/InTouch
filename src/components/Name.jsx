import React from 'react';
import classes from '../Styles/Name.module.css';
const Name = () => {
  return <div className={classes.nameAndStatus}>
    <div id={classes.name_content}><p>Call me Pawel</p></div>
    <div id={classes.status}><p>Open for work</p></div>
  </div>
};
export default Name;