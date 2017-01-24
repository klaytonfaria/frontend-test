import ChatDispatcher from './dispacher';

const ChatActions = {
  fetchAll: (url) => {
    ChatDispatcher.dispatch({
      actionType: 'FETCH_ALL',
      url
    });
  }
};
export default ChatActions;