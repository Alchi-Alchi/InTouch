import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Styles/Dialogs.module.css';
import {sendMessageActionCreator, messageWindowChangeActionCreator} from '../redux/dialogsReducer'

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
  let newMessageText = props.store.getState().dialogsPage.newMessageText;
  let sendMessage = () => {
    props.store.dispatch (sendMessageActionCreator ())
  }
  let changeMessage = (e) => {
    let messageText = e.target.value;
    props.store.dispatch (messageWindowChangeActionCreator (messageText))
  }
  return <div className={classes.dialogs}>
    <p>Беседы</p>
    <div className={classes.dialogs_wrapper}>
      <div className={classes.contacts}>
        {dialogsArr}
      </div>
      <div className={classes.messages}>
        <div>{messagesArr}</div>
      </div>
    </div>
    <div id={classes.sendTools}>
      <div><textarea id={classes.postWindow} value={newMessageText} onChange={changeMessage} placeholder='Message...'></textarea></div>
      <div><button id={classes.btn} onClick={sendMessage}>Send</button></div>
    </div> 
  </div>
};
export default Dialogs;