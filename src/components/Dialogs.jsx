import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Styles/Dialogs.module.css';

const DialogUser = (props) => {
  return <div className={classes.contact}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
};

const Message = (props) => {
  return <div className={classes.message}>
    {props.message}
  </div>
};

const Dialogs = (props) => {
  let dialogsArr = props.dialogs.map (dialog => <DialogUser name={dialog.name} id= {dialog.id}/>);
  let messagesArr = props.messages.map (item => <Message message={item.message} id= {item.id}/>);
  return <div className={classes.dialogs}>
    <p>Беседы</p>
    <div className={classes.dialogs_wrapper}>
      <div className={classes.contacts}>
        {dialogsArr}
      </div>
      <div className={classes.messages}>
        {messagesArr}
      </div>
    </div>
  </div>
};
export default Dialogs;