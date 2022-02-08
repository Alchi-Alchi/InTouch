import React from 'react';
import { NavLink,  Redirect } from 'react-router-dom';
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
  let state = props.dialogsPage;
  let dialogsArr = state.usersData.map (dialog => <DialogUser name={dialog.name} id= {dialog.id}/>);
  let messagesArr = state.messagesData.map (item => <Message message={item.message} id= {item.id}/>);
  let newMessageText = state.newMessageText;
  let sendMessage = () => {
    props.sendMessage();
  }
  let changeMessage = (e) => {
    let messageText = e.target.value;
    props.messageWindowChange(messageText);
  }
  if (!props.isAuth) {
    return <Redirect to={"/login"}/>
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