const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';
const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newMessageText = action.messageItem;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.messagesData.push ({id: 3, message: newMessage});
      state.newMessageText = '';
      return state;
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