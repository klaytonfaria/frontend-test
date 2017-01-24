import React, { Component, PropTypes } from 'react';

// Components
import Header from './header';
import Message from './message';

class Chat extends Component {
  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        data: this.props.data
      });
    }
  }

  render() {
    const contentLoaded = this.state.data;
    let content;

    // Verify if content ins loaded
    if (contentLoaded) {
      const messages = contentLoaded.talkMessages,
        MessageList = messages.map(data => <Message
          key={data.id}
          id={data.id}
          userId={data.user.id}
          profileId={data.user.perfilId}
          profileName={data.user.name}
          companyName={data.company ? data.company.name : ''}
          time={data.message.time}
          read={data.message.alreadyRead}
          text={data.message.message}
        />);

      content = MessageList;
    } else {
      content = <span className="loading">carregando...</span>;
    }

    return (
      <div id={this.props.id} className={`${this.props.baseClass} chat-window`}>
        <Header />
        <div className="chat-window-wrapper">
          <div className="chat-window-content">
            <div className="chat-message-stream">
              {content}
            </div>
          </div>
          <div className="chat-footer">
            <textarea
              className="chat-message-composer"
              name="chat-message-composer"
              id={`${this.props.id}-message-composer`}
              cols="30" rows="10" placeholder="Digite aqui sua mensagem..."
            />
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
  baseClass: ''
};

export default Chat;