import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setContacts, setCurrentPage, setContactsTotalCount, setIsFetching} from '../redux/contactsReducer'
import * as axios from "axios";
import Contacts from "./Contacts";
import Preloader from './General/Preloader';

class ContactsAPIComponent extends React.Component {
  componentDidMount () {
    this.props.setIsFetching (true);
    axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then (response => {
      this.props.setIsFetching (false);
      this.props.setContacts (response.data.items)
      this.props.setContactsTotalCount (response.data.totalCount)});
  }
  constructor (props) {
    super (props);
  }
  onPageChanges = (pageNum) => {
    this.props.setCurrentPage (pageNum);
    this.props.setIsFetching (true);
    axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then (response => {
      this.props.setIsFetching (false);
      this.props.setContacts (response.data.items);
    });
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
                unfollow={this.props.unfollow}/>
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
  }
}

const ContactsContainer = connect (mapStateToProps, {follow,
                                                    unfollow,
                                                    setContacts,
                                                    setCurrentPage,
                                                    setContactsTotalCount,
                                                    setIsFetching,}) (ContactsAPIComponent);
export default ContactsContainer;
// const Contact = (props) => {
  // let getContacts = () => {
  //  if (props.contacts.length === 0) {
  //   axios.get ("").then (response =>{props.setContacts (response.data.items)});
  //  }
  // }
  // let contactsArr = props.contacts.map (user => <div key={user.id} id={classes.contactsWrapper}>
  //   <div id={classes.userAvatarAndName}>
  //     <span>
  //       <img src={user.photo} id={classes.photo}/>
  //       <div>
  //         {user.followed ? <button id={classes.followButton} onClick={() => props.unfollow (user.id)}>Unfollow</button>:<button id={classes.followButton} onClick={() => props.follow (user.id)}>Follow</button>}
  //       </div>
  //     </span>
  //     <span>
  //       <div id={classes.fullName}>{user.fullName}</div>
  //       <div id={classes.status}>{user.userStatus}</div>
  //     </span>
  //   </div>
  //   <span>
  //     <div id={classes.country}>{user.location.country}</div>
  //     <div id={classes.city}>{user.location.city}</div>
  //   </span>
  // </div>)
  // return (
  //   <div className={classes.contacts}>
  //     <p>Контакты</p>
  //     <button onClick={getContacts}>Show Contacts</button>
  //     {contactsArr}
  //   </div>
  // );
// };
// export default Contact;

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