import React from 'react';
import classes from '../Styles/Info.module.css';
import Preloader from './General/Preloader';
const Info = ({profile, isOwner, toEditMode}) => {
  if (!profile) {
    return <Preloader/>
  }
  return <div className={classes.info}>
    <div id={classes.item}><b>Nickname:</b>{profile.fullName}</div>
    <div id={classes.item}><b>Looking for a job:</b>{profile.lookingForAJob ? "Yes": "No"}</div>
    <div id={classes.item}><b>My skills:</b>{profile.lookingForAJobDescription}</div>
    <div id={classes.item}><b>About me:</b>{profile.aboutMe}</div>
    <div id={classes.item}><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}</div>
    {isOwner && <div><button onClick={toEditMode}>Edit</button></div>}
  </div>
};
const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
};
const InfoForm = ({profile}) => {
  return <div>Form</div>
}
export default Info;