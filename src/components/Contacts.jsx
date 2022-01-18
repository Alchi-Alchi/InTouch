import React from "react";
import classes from "../Styles/Contacts.module.css";
const Contacts = (props) => {
  let contactsArr = props.contacts.map (user => <div key={user.id} id={classes.contactsWrapper}>
    <div id={classes.userAvatarAndName}>
      <span>
        <img src={user.photo} id={classes.photo}/>
        <div>
          {user.followed ? <button id={classes.followButton} onClick={() => props.unfollow (user.id)}>Unfollow</button>:<button id={classes.followButton} onClick={() => props.follow (user.id)}>Follow</button>}
        </div>
      </span>
      <span>
        <div id={classes.fullName}>{user.fullName}</div>
        <div id={classes.status}>{user.userStatus}</div>
      </span>
    </div>
    <span>
      <div id={classes.country}>{user.location.country}</div>
      <div id={classes.city}>{user.location.city}</div>
    </span>
  </div>)
  return (
    <div className={classes.contacts}>
      <p>Контакты</p>
      {contactsArr}
    </div>
  );
};
export default Contacts;