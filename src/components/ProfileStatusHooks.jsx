import React, { useState } from 'react';
import classes from '../Styles/ProfileStatus.module.css';
const ProfileStatusHooks = (props) => {
  let [editMode, setEditMode] = useState (false);
  let [status, setStatus] = useState (props.status);
  const activateMode = () => {
    setEditMode (true);
  };
  const deactivateMode = () => {
    setEditMode (false);
    props.updateStatus (status);
  };
  const onStatusChange = (e) => {
    setStatus (e.currentTarget.value)
  };
  return (
    <div className={classes.status}>
      {!editMode && <div><span onDoubleClick={activateMode}>{props.status || 'Установить статус'}</span></div>}
      {editMode && <div><input autoFocus={true} onBlur={deactivateMode} onChange={onStatusChange} value={status}/></div>}
    </div>
  );
};
export default ProfileStatusHooks;