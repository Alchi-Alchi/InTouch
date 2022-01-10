const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE-POST';
let initialState = {
  myPosts : [
    {id: 1, post: "Hi everyone!"},
    {id: 2, post: "I'm here now)"}
  ],
  newPostText: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: state.newPostText
      };
      state.myPosts.push (newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST:
      state.newPostText = action.myNewText;
      return state;
    default:
      return state;  
  }
}
export const addPostActionCreator = () => {
  return {type: ADD_POST}
};

export const postWindowChangeActionCreator = (textPost) => {
  return {type: UPDATE_POST,
          myNewText: textPost
  }
};
export default profileReducer;