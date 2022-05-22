import React from 'react';
import {createField, Input, Textarea } from './General/FormControl';
import {reduxForm} from 'redux-form';
import classes from '../Styles/Info.module.css';
const InfoForm = ({handleSubmit, profile}) => {
  return <form onSubmit={handleSubmit}>
    <div className={classes.info}>
      <div id={classes.item}><b>Nickname:</b> {createField("Full Name", "fullName", [], Input)}</div>
      <div id={classes.item}><b>Looking for a job:</b>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
      <div id={classes.item}><b>My skills:</b>{createField("My skills", "lookingForAJobDescription", [], Textarea)}</div>
      <div id={classes.item}><b>About me:</b>{profile.aboutMe}{createField("About me", "aboutMe", [], Textarea)}</div>
      {/* <div id={classes.item}><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}</div> */}
      {/* {isOwner && <div><button onClick={toEditMode}>Save</button></div>} */}
    </div>
  </form>
}
const InfoFormReduxForm = reduxForm ({form: 'editProfile'}) (InfoForm);
export default InfoFormReduxForm;