
import { EventEmitter } from 'events';
import assign from 'object-assign';

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
  send(msg) {
    this.data.talkMessages = this.data.talkMessages || [];
    this.data.talkMessages.push(msg);
    this.emit('change');
  },
  getMessages() {
    return this.data;
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