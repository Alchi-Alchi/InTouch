import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from '../Styles/Content.module.css';
import { maxLengthCreator, required } from '../utils/validators/validator';
import { Textarea } from './General/FormControl';
import Post from './Post';
let maxLength = maxLengthCreator (300);
const AddNewPostForm = (props) => {
  let createPostWindow = React.createRef();
  return (
    <div className={classes.sendTools}>
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} id={classes.postWindow} placeholder="Message..." ref={createPostWindow} name={"newPostText"} validate={[required, maxLength, ]}/> <br/>
        <button id={classes.btn}>Send</button>
      </form>
    </div>
  )
}
const AddNewPostFormRedux = reduxForm ({form: "profileAddPost"}) (AddNewPostForm);
const Content = React.memo (props => {
  let postsArr = props.myPosts.map (p => <Post message = {p.post}/>);
  
  let addPost = (value) => {
    props.addPost (value.newPostText);
  }
  return (
  <div className={classes.content}>
    <div className={classes.title}>Messages</div>
    {postsArr}
    <AddNewPostFormRedux onSubmit={addPost}/>
  </div>
  );
});
export default Content;