import React from 'react';
import {addPostActionCreator, postWindowChangeActionCreator} from '../redux/profileReducer'
import Content from './Content';

const ContentContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch (addPostActionCreator());
  }
  let textWindowChange = (textPost) => {
    props.store.dispatch (postWindowChangeActionCreator(textPost));
  }
  return (
    <Content addPost = {addPost} 
              postWindowChange = {textWindowChange} 
              myPosts = {state.profilePage.myPosts}
              newPostText = {state.profilePage.newPostText}/>
  );
};
export default ContentContainer;