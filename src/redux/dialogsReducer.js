const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.newMessageText = action.messageItem;
      return stateCopy;
    }
      
    case SEND_MESSAGE: {
      let newMessage = state.newMessageText;
      let stateCopy = {...state};
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push ({id: 3, message: newMessage});
      stateCopy.newMessageText = '';
      return stateCopy;
    }
      
    default:  
      return state;
  }
}
export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
};

export const messageWindowChangeActionCreator = (messageText) => {
  return {type: UPDATE_MESSAGE,
          messageItem: messageText
  }
};
export default dialogsReducer;