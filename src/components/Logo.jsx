import React from 'react';
import logoIMG from '../images/logo.png';
import avatar from '../images/myAvatar.png';
import classes from '../Styles/Logo.module.css';
const Logo = () => {
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
      <img src={avatar} id={classes.profileIMG} alt="I" />
    </div>
  </header>
};
export default Logo;