import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator} from '../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch (sendMessageActionCreator (newMessageText));
    },
  }
}
export default compose (connect (mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);