let renderEntireTree = () => {

}
let state = {
  
  profilePage: {
    myPosts : [
      {id: 1, post: "Hi everyone!"},
      {id: 2, post: "I'm here now)"}
    ],
    newPostText: '',
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
window.state = state;
export const addPost = () => {
  let newPost = {
    id: 3,
    post: state.profilePage.newPostText
  };
  state.profilePage.myPosts.push (newPost);
  state.profilePage.newPostText = '';
  renderEntireTree (state);
};
export const updatePost = (myNewText) => {
  state.profilePage.newPostText = myNewText;
  renderEntireTree (state);
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
}
export default state;