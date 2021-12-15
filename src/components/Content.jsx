import React from 'react';
import classes from '../Styles/Content.module.css';
import Post from './Post';

const Content = (props) => {
  let postsArr = props.myPosts.map (p => <Post message = {p.post}/>)
  return (
  <div className={classes.content}>
    <div className={classes.title}>Messages</div>
    {postsArr}
    <div className={classes.sendTools}>
      <textarea id={classes.postWindow} placeholder="Message..."></textarea> <br />
      <button id={classes.btn}>Send</button>
    </div>
  </div>
  );
};
export default Content;