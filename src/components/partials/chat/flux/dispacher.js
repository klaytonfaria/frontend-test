
import { Dispatcher } from 'flux';
import ChatStore from './store';

const ChatDispatcher = new Dispatcher();

ChatDispatcher.register((action) => {
  switch (action.actionType) {
    case 'FETCH_ALL':
      ChatStore.fetchAll(action.url);
      break;
    default:
      ChatStore.filter(action.filterList);
      break;
  }
});

export default ChatDispatcher;