import React, {useState} from 'react';
import classes from '../Styles/Profile.module.css';
import Photo from './Photo';
import Name from './Name';
import Info from './Info';
import InfoForm from './InfoForm';
import ContentContainer from './ContentContainer';
import store from '../redux/reduxStore';
const Profile = (props) => {
  let [editMode, setEditMode] = useState (false);
  const onSubmit = (formData) => {
   props.saveProfile(formData).then(() => {setEditMode(false)});
  };
  return (
  <div className={classes.profile}>
    <Photo isOwner={props.isOwner} profile={props.profile} savePhoto={props.savePhoto}/>
    <Name status={props.status} updateStatus={props.updateStatus}/>
    {editMode ? <InfoForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} isOwner={props.isOwner} toEditMode={() => {setEditMode(true)}}/> : <Info profile={props.profile} isOwner={props.isOwner} toEditMode={() => {setEditMode(true)}}/>}
    <ContentContainer store={store}/>
  </div>
  );
};
export default Profile;