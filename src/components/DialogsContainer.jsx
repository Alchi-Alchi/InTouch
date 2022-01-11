import React from 'react';
import {sendMessageActionCreator, messageWindowChangeActionCreator} from '../redux/dialogsReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let sendMessage = () => {
    props.store.dispatch (sendMessageActionCreator ());
  }
  let messageWindowChange = (messageText) => {
    props.store.dispatch (messageWindowChangeActionCreator (messageText));
  }
  return (
    <Dialogs sendMessage = {sendMessage} messageWindowChange = {messageWindowChange} dialogsPage = {props.store.getState().dialogsPage}/>
  )
};
export default DialogsContainer;