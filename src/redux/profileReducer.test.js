import React from 'react';
import profileReducer, { addPostActionCreator } from "./profileReducer";

it ('new post should be added', () => {
  let action = addPostActionCreator ("This is new post");
  let state = {
    myPosts : [
      {id: 1, post: "Hi everyone!"},
      {id: 2, post: "I'm here now)"}
    ]
  };
  let newState = profileReducer (state, action);
  expect (newState.myPosts.length).toBe(3);
});