const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE-POST';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
      ],
      newMessageText: '',
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        post: this._state.profilePage.newPostText
      };
      this._state.profilePage.myPosts.push (newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber (this._state);
    } else if (action.type === UPDATE_POST) {
      this._state.profilePage.newPostText = action.myNewText;
      this._callSubscriber (this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.messagesPage.newMessageText = action.messageItem;
      this._callSubscriber (this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.messagesPage.newMessageText;
      this._state.messagesPage.messagesData.push ({id: 3, message: newMessage});
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber (this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {type: ADD_POST}
};

export const postWindowChangeActionCreator = (textPost) => {
  return {type: UPDATE_POST,
          myNewText: textPost
  }
};

export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
};

export const messageWindowChangeActionCreator = (messageText) => {
  return {type: UPDATE_MESSAGE,
          messageItem: messageText
  }
};

window.store = store;
export default store;