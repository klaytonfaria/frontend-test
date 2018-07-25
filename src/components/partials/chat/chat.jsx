import React, { Component, PropTypes } from 'react';

// Components
import Header from './header';
import MessageList from './messageList';
import MessageComposer from './messageComposer';

const scrollToBottom = (scrollDuration = 100) => {
  const messageStream = document.getElementById('chat-message-stream'),
    scrollStep = messageStream.scrollHeight / scrollDuration,
    scrollInterval = setInterval(() => {
      const scrollSize = messageStream.scrollHeight - messageStream.offsetHeight;
      if (messageStream.scrollTop !== scrollSize) {
        messageStream.scrollTop += scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 1);
};

class Chat extends Component {

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        data: this.props.data
      });
    }
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  render() {
    return (
      <div id={this.props.id} className={`${this.props.baseClass} chat-window`}>
        <Header />
        <div className="chat-window-wrapper">
          <div className="chat-window-content">
            <div id="chat-message-stream" className="chat-message-stream">
              <MessageList data={this.state.data} />
            </div>
          </div>
          <div className="chat-footer">
            <MessageComposer />
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  id: PropTypes.string.isRequired,
  baseClass: PropTypes.string,
  data: PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ])
};

Chat.defaultProps = {
  id: 'chat',
  baseClass: '',
  data: {}
};

export default Chat;