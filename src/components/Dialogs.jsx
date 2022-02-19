import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import classes from '../Styles/Dialogs.module.css';
import { maxLengthCreator, required } from '../utils/validators/validator';
import { Textarea } from './General/FormControl';
let maxLength = maxLengthCreator (300);
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
const AddMessageForm = (props) => {
  return (
    <div id={classes.sendTools}>
      <form onSubmit={props.handleSubmit}>
        <div><Field component={Textarea} validate={[required, maxLength,]} id={classes.postWindow} name={"newMessageText"} placeholder='Message...'/></div>
        <div><button id={classes.btn}>Send</button></div>
      </form>
    </div> 
  )
}
const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm);
const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsArr = state.usersData.map (dialog => <DialogUser name={dialog.name} id= {dialog.id}/>);
  let messagesArr = state.messagesData.map (item => <Message message={item.message} id= {item.id}/>);
  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageText);
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
    <AddMessageFormRedux onSubmit={addNewMessage}/>
  </div>
};
export default Dialogs;