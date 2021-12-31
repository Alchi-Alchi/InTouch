let store = {
  _state: {
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
  },
//
  getState () {
    return this._state
  },
//
  _callSubscriber () {},
//
  addPost () {
    let newPost = {
      id: 3,
      post: this._state.profilePage.newPostText
    };
    this._state.profilePage.myPosts.push (newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber (this._state);
  },
//
  updatePost (myNewText) {
    this._state.profilePage.newPostText = myNewText;
    this._callSubscriber (this._state);
  },
//
  subscribe (observer) {
    this._callSubscriber = observer;
  },
//  
  dispatch (action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        post: this._state.profilePage.newPostText
      };
      this._state.profilePage.myPosts.push (newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber (this._state);
    } else if (action.type === 'UPDATE-POST') {
      this._state.profilePage.newPostText = action.myNewText;
      this._callSubscriber (this._state);
    }
  },
};
window.store = store;
export default store;