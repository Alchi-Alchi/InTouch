import {renderEntireTree} from '../render'
let state = {
  profilePage: {
    myPosts : [
      {id: 1, post: "Hi everyone!"},
      {id: 2, post: "I'm here now)"}
    ],
  },
  messagesPage: {
    usersData: [
      {id: 1, name: "Paul"},
      {id: 2, name: "Andrew"}
    ],
    messagesData: [
      {id: 1, message: "Hi"},
      {id: 2, message: "Hello"}
    ]
  }
};
export let addPost = (myNewPost) => {
  let newPost = {
    id: 3,
    post: myNewPost
  };
  state.profilePage.myPosts.push (newPost);
  renderEntireTree (state);
};
export default state;