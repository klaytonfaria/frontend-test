import ChatDispatcher from './dispacher';

const ChatActions = {
  fetchAll: (url) => {
    ChatDispatcher.dispatch({
      actionType: 'FETCH_ALL',
      url
    });
  },
  send: (msg) => {
    ChatDispatcher.dispatch({
      actionType: 'SEND_MESSAGE',
      msg
    });
  }
};
export default ChatActions;