import React from 'react';
import classes from '../Styles/Photo.module.css';
import unknown from '../images/unknown.png';
import Preloader from './General/Preloader';
const Photo = ({profile, savePhoto, isOwner}) => {
  if (!profile) {
    return <Preloader/>
  };
  const profilePhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return <div className={classes.photo}>
    {<img src={profile.photos.large || unknown} className={classes.avatar} alt="avatar" /> }
    {isOwner && <input type={"file"} onChange={profilePhotoSelected}/>}
  </div>
};
export default Photo;