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
        {props.isAuth ? <div>
          {props.login}<div className={classes.logoutBtnDiv}><button className={classes.logoutBtn} onClick={props.logout}>Log out</button></div>
        </div> : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </div>
  </header>
};
export default Logo;