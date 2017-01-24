import React, { Component } from 'react';
// Components
import Chat from './chat';
// Components actions
import ChatActions from './flux/actions';
import ChatStore from './flux/store';
// Components styles
import './chat.scss';

const URL = '/static/json/talk.json';

class ChatContainer extends Component {

  componentWillMount() {
    ChatStore.addChangeListener((chatData) => {
      this.setState({
        data: chatData
      });
    });

    ChatActions.fetchAll(URL);
  }

  componentWillUnmount() {
    ChatStore.removeChangeListener();
  }

  render() {
    const data = this.state && this.state.data ? this.state.data : false;
    return (
      <Chat data={data} />
    );
  }
}

export default ChatContainer;