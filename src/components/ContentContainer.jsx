import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator} from '../redux/profileReducer'
import Content from './Content';

let mapStateToProps = (state) => {
  return {
    myPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch (addPostActionCreator (newPostText));
    },
  }
}
const ContentContainer = connect (mapStateToProps, mapDispatchToProps) (Content);
export default ContentContainer;