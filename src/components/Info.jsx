import React from 'react';
import classes from '../Styles/Info.module.css';
const Info = () => {
  return <div className={classes.info}>
    <p id={classes.item}>Дата рождения:</p>
    <p id={classes.item}>Страна:</p>
    <p id={classes.item}>Город:</p>
    <p id={classes.item}>Интересы:</p>
  </div>
};
export default Info;