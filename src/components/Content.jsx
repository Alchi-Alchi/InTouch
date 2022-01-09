import React from 'react';
import classes from '../Styles/Content.module.css';
import Post from './Post';
import {addPostActionCreator, postWindowChangeActionCreator} from '../redux/profileReducer'

const Content = (props) => {
  let postsArr = props.myPosts.map (p => <Post message = {p.post}/>);
  let createPostWindow = React.createRef();
  let addPost = () => {
    props.dispatch (addPostActionCreator());
  }
  let textWindowChange = () => {
    let textPost = createPostWindow.current.value;
    props.dispatch (postWindowChangeActionCreator(textPost));
  }
  return (
  <div className={classes.content}>
    <div className={classes.title}>Messages</div>
    {postsArr}
    <div className={classes.sendTools}>
      <textarea id={classes.postWindow} placeholder="Message..." ref={createPostWindow} onChange={textWindowChange} value={props.newPostText}/> <br />
      <button id={classes.btn} onClick={addPost}>Send</button>
    </div>
  </div>
  );
};
export default Content;