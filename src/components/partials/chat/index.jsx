import React, { Component } from 'react';
import * as Constants from '../../../constants';
// Components
import Chat from './chat';
// Components actions
import ChatActions from './flux/actions';
import ChatStore from './flux/store';
// Components styles
import './chat.scss';

class ChatContainer extends Component {

  componentWillMount() {
    ChatStore.addChangeListener((chatData) => {
      this.setState({
        data: chatData
      });
      this.forceUpdate();
    });
    ChatActions.fetchAll(Constants.API_ENDPOIN);
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