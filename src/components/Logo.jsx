import React from 'react';
import logoIMG from '../images/logo.png';
import classes from '../Styles/Logo.module.css';
import { NavLink } from "react-router-dom";
const Logo = (props) => {
  return <header className={classes.header}>
    <div id={classes.headerContent_wrapper}>
      <div id={classes.logo}>
        <img src={logoIMG} alt="logo" />
        <p id={classes.logo_name}>InTouch</p>
      </div>
      <div className={classes.searchTools}>
        <textarea placeholder='Search...'></textarea>
        <button>Поиск</button>
      </div>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </div>
  </header>
};
export default Logo;