import React from 'react';
import classes from '../Styles/Login.module.css';
import { NavLink } from "react-router-dom";
const Login = (props) => {
  return <div className={classes.authWrapper}>
    <h1>Авторизация</h1>
    <div className={classes.authBlock}>
      <p>Авторизируйтесь, чтобы просматривать эту страницу</p>
    </div>
  </div>
};
export default Login;