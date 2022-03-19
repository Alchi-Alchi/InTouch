import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, getUsers} from '../redux/contactsReducer'
import {getContacts, getPageSize, getContactsCount, getCurrentPage, getIsFetching, getFollowingProcess,} from '../redux/contactsSelectors';
import Contacts from "./Contacts";
import Preloader from './General/Preloader';

class ContactsAPIComponent extends React.Component {
  componentDidMount () {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers (currentPage, pageSize);
  }
  constructor (props) {
    super (props);
  }
  onPageChanges = (pageNum) => {
    const {pageSize} = this.props;
    this.props.setCurrentPage (pageNum);
    this.props.getUsers (pageNum, pageSize);
  }
  render () {
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
      <Contacts contactsCount={this.props.contactsCount} 
                pageSize={this.props.pageSize} 
                contacts={this.props.contacts} 
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProcess={this.props.followingProcess}
                setFollowingProcess={this.props.setFollowingProcess}/>
      </>
    );
  };
};
let mapStateToProps = (state) => {
  return {
    contacts: getContacts (state),
    pageSize: getPageSize (state),
    contactsCount:getContactsCount (state),
    currentPage: getCurrentPage (state),
    isFetching: getIsFetching (state),
    followingProcess: getFollowingProcess (state),
  }
};
const ContactsContainer = connect (mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}) (ContactsAPIComponent);
export default ContactsContainer;
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch (followAC (userID));
//     },
//     unfollow: (userID) => {
//       dispatch (unfollowAC (userID));
//     },
//     setContacts: (contacts) => {
//       dispatch (setContactsAC (contacts));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch (setCurrentPageAC (currentPage));
//     },
//     setContactsTotalCount: (contactsCount) => {
//       dispatch (setContactsTotalCountAC (contactsCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch (setIsFetchingAC (isFetching));
//     },
//   }
// }