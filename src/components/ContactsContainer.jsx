import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, getUsers} from '../redux/contactsReducer'
import Contacts from "./Contacts";
import Preloader from './General/Preloader';

class ContactsAPIComponent extends React.Component {
  componentDidMount () {
    this.props.getUsers (this.props.currentPage, this.props.pageSize);
  }
  constructor (props) {
    super (props);
  }
  onPageChanges = (pageNum) => {
    this.props.setCurrentPage (pageNum);
    this.props.getUsers (pageNum, this.props.pageSize);
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
    contacts: state.contactsPage.contacts,
    pageSize:state.contactsPage.pageSize,
    contactsCount:state.contactsPage.contactsCount,
    currentPage: state.contactsPage.currentPage,
    isFetching: state.contactsPage.isFetching,
    followingProcess: state.contactsPage.followingProcess,
  }
}

const ContactsContainer = connect (mapStateToProps, {follow,
                                                    unfollow,
                                                    setCurrentPage,
                                                    getUsers}) (ContactsAPIComponent);
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