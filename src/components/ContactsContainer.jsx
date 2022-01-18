import React from 'react';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setContactsAC} from '../redux/contactsReducer'
import Contacts from './Contacts';

let mapStateToProps = (state) => {
  return {
    contacts: state.contactsPage.contacts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch (followAC (userID));
    },
    unfollow: (userID) => {
      dispatch (unfollowAC (userID));
    },
    setContacts: (contacts) => {
      dispatch (setContactsAC (contacts));
    },
  }
}
const ContactsContainer = connect (mapStateToProps, mapDispatchToProps) (Contacts);
export default ContactsContainer;