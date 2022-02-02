import React from 'react';
import classes from '../Styles/Info.module.css';
import Preloader from './General/Preloader';
const Info = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return <div className={classes.info}>
    <p id={classes.item}>Дата рождения:</p>
    <p id={classes.item}>Страна:</p>
    <p id={classes.item}>Город:</p>
    <p id={classes.item}>Интересы:</p>
    
  </div>
};
export default Info;