import React from 'react';
import classes from '../Styles/Post.module.css';
const Post = (props) => {
  return <div className={classes.post}>
    {props.message}
  </div>
};
export default Post;