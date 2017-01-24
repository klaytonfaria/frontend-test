
import { EventEmitter } from 'events';
import { default as assign } from 'object-assign';

const ChatStore = assign({}, EventEmitter.prototype, {
  data: {},
  fetchAll: (url) => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        ChatStore.data = res;
        ChatStore.emitChange();
      });
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', () => {
      if (callback && typeof callback === 'function') {
        callback(this.data);
      }
    });
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

export default ChatStore;