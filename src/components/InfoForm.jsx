import React from 'react';
import {createField, Input, Textarea } from './General/FormControl';
import {reduxForm} from 'redux-form';
import classes from '../Styles/Info.module.css';
const InfoForm = ({handleSubmit, profile, error, isOwner, toEditMode}) => {
  return <form onSubmit={handleSubmit}>
    <div className={classes.info}>
      <div id={classes.item}><b>Nickname:</b> {createField("Full Name", "fullName", [], Input)}</div>
      <div id={classes.item}><b>Looking for a job:</b>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
      <div id={classes.item}><b>My skills:</b>{createField("My skills", "lookingForAJobDescription", [], Textarea)}</div>
      <div id={classes.item}><b>About me:</b>{profile.aboutMe}{createField("About me", "aboutMe", [], Textarea)}</div>
      <div id={classes.item}><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
        return <div key={key}><b>{key}:{createField(key, "contacts." + key, [], Input)}</b></div>})}
    </div>
      {isOwner && <div><button onClick={toEditMode}>Save</button></div>}
      {error && <div>{error}</div>}
    </div>
  </form>
}
const InfoFormReduxForm = reduxForm ({form: 'editProfile'}) (InfoForm);
export default InfoFormReduxForm;