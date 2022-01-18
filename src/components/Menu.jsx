import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Styles/Menu.module.css';
const Menu = () => {
  return <div className={classes.menu}>
    <ul>
      <li><NavLink to="/profile" activeClassName={classes.active}>Мой профиль</NavLink></li>
      <li><NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink></li>
      <li><NavLink to="/contacts" activeClassName={classes.active}>Контакты</NavLink></li>
      <li><NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink></li>
      <li><NavLink to="/music" activeClassName={classes.active}>Музыка</NavLink></li>
      <li><NavLink to="/videos" activeClassName={classes.active}>Видео</NavLink></li>
    </ul>
  </div>
};
export default Menu;