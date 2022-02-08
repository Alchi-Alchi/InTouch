import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Styles/Contacts.module.css";
import defaultIMG from '../images/unknown.png'
let Contacts = (props) => {
  let pagesCount = Math.ceil (props.contactsCount / props.pageSize);
  let pages = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push (i);
  };
  let contactsArr = props.contacts.map (user => <div key={user.id} id={classes.contactsWrapper}>
    <div id={classes.userAvatarAndName}>
      <span>
        <NavLink to={'/profile/' + user.id}><img src={user.photos ? defaultIMG: null} id={classes.photo}/></NavLink>
        <div>
          {user.followed ? <button id={classes.followButton} disabled={props.followingProcess.some (id => id === user.id)} onClick={() => {props.unfollow (user.id)}}>Unfollow</button>
          :<button id={classes.followButton} disabled={props.followingProcess.some (id => id === user.id)} onClick={() => {props.follow (user.id)}}>Follow</button>}
        </div>
      </span>
      <span>
        <div id={classes.fullName}>{user.name}</div>
        <div id={classes.status}>{user.userStatus}</div>
      </span>
    </div>
    <span>
      {/* <div id={classes.country}>{user.location.country}</div> */}
      {/* <div id={classes.city}>{user.location.city}</div> */}
    </span>
  </div>)
    return (
      <div className={classes.contacts}>
        <p>Контакты</p>
        {contactsArr}
        <div className={classes.numbersOfPagesWrapper}>
          {pages.map (page => {
            return <span className={`${props.currentPage === page && classes.selectedPage} ${classes.numSpan}`} onClick={(e) => {props.onPageChanges (page)}}>{page}</span>
          })}
        </div>
      </div>
    );
  }
export default Contacts;