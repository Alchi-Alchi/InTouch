import React from 'react';
import classes from '../Styles/Content.module.css';
import Post from './Post';

const Content = (props) => {
  let postsArr = props.myPosts.map (p => <Post message = {p.post}/>);
  let createPostWindow = React.createRef();
  let addPost = () => {
    let textPost = createPostWindow.current.value;
    props.addPost (textPost)
    createPostWindow.current.value = '';
  }
  return (
  <div className={classes.content}>
    <div className={classes.title}>Messages</div>
    {postsArr}
    <div className={classes.sendTools}>
      <textarea id={classes.postWindow} placeholder="Message..." ref={createPostWindow}></textarea> <br />
      <button id={classes.btn} onClick={addPost}>Send</button>
    </div>
  </div>
  );
};
export default Content;