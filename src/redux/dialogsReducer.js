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
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      let newMessage = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 3, message: newMessage}],
      };
    default:  
      return state;
  }
}
export const sendMessageActionCreator = (newMessageText) => {
  return {type: SEND_MESSAGE, newMessageText}
};
export default dialogsReducer;