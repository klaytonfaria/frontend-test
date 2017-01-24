import React, { Component, PropTypes } from 'react';

// Components
import Message from './message';

class MessageList extends Component {

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    const contentLoaded = this.props.data;
    let content;

    // Verify if content is loaded
    if (contentLoaded) {
      const messages = contentLoaded.talkMessages,
        Messages = messages.map((data, i, all) => {
          const previousMessage = all[i - 1];
          let userSentPreviousMessage = false;

          if (previousMessage) {
            userSentPreviousMessage = data.user.perfilId === previousMessage.user.perfilId;
          }

          return (
            <Message
              key={data.id}
              id={data.id}
              userId={data.user.id}
              profileId={data.user.perfilId}
              profileName={data.user.name}
              companyName={data.company ? data.company.name : ''}
              time={data.message.time}
              read={data.message.alreadyRead}
              text={data.message.message}
              sentPrevious={userSentPreviousMessage}
            />
          );
        });

      content = Messages;
    } else {
      content = <span className="loading">carregando...</span>;
    }

    return (
      <div className="messagelist-warpper">{ content }</div>
    );
  }
}

MessageList.propTypes = {
  data: PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ])
};

MessageList.defaultProps = {
  data: {}
};

export default MessageList;