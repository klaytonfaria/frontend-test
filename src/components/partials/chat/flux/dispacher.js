
import { Dispatcher } from 'flux';
import ChatStore from './store';

const ChatDispatcher = new Dispatcher();

ChatDispatcher.register((action) => {
  switch (action.actionType) {
    case 'FETCH_ALL':
      ChatStore.fetchAll(action.url);
      break;
    case 'SEND_MESSAGE':
      ChatStore.send(action.msg);
      break;
    default:
      ChatStore.fetchAll(action.url);
      break;
  }
});

export default ChatDispatcher;