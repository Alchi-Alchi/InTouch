import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, postWindowChangeActionCreator} from '../redux/profileReducer'
import Content from './Content';

// const ContentContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch (addPostActionCreator());
//   }
//   let textWindowChange = (textPost) => {
//     props.store.dispatch (postWindowChangeActionCreator(textPost));
//   }
//   return (
//     <Content addPost = {addPost} 
//               postWindowChange = {textWindowChange} 
//               myPosts = {state.profilePage.myPosts}
//               newPostText = {state.profilePage.newPostText}/>
//   );
// };

let mapStateToProps = (state) => {
  return {
    myPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch (addPostActionCreator ());
    },
    postWindowChange: (textPost) => {
      dispatch (postWindowChangeActionCreator (textPost));
    },
  }
}
const ContentContainer = connect (mapStateToProps, mapDispatchToProps) (Content);
export default ContentContainer;