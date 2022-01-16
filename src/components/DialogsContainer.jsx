import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator, messageWindowChangeActionCreator} from '../redux/dialogsReducer'
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {
//   let sendMessage = () => {
//     props.store.dispatch (sendMessageActionCreator ());
//   }
//   let messageWindowChange = (messageText) => {
//     props.store.dispatch (messageWindowChangeActionCreator (messageText));
//   }
//   return (
//     <Dialogs sendMessage = {sendMessage} messageWindowChange = {messageWindowChange} dialogsPage = {props.store.getState().dialogsPage}/>
//   )
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch (sendMessageActionCreator ());
    },
    messageWindowChange: (messageText) => {
      dispatch (messageWindowChangeActionCreator (messageText));
    },
  }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;