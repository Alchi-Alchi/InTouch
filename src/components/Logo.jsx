import React from 'react';
import logoIMG from '../images/logo.png';
import classes from '../Styles/Logo.module.css';
const Logo = () => {
  return <header className={classes.logo}>
    <div id={classes.headerContent_wrapper}>
      <img src={logoIMG} alt="logo" />
      <p id={classes.logo_name}>InTouch</p>
    </div>
  </header>
};
export default Logo;