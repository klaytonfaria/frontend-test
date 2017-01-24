import React, { Component, PropTypes } from 'react';
import Moment from 'moment';

class Message extends Component {

  componentWillMount() {
    this.setState({
      userId: this.props.userId,
      profileId: this.props.profileId,
      profileName: this.props.profileName,
      companyName: this.props.companyName,
      text: this.props.text,
      time: this.props.time,
      read: this.props.read
    });
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        userId: this.props.userId,
        profileId: this.props.profileId,
        profileName: this.props.profileName,
        companyName: this.props.companyName,
        text: this.props.text,
        time: this.props.time,
        read: this.props.read
      });
    }
  }

  render() {
    const isPendingOrRead = this.state.read ? 'checked' : 'clock',
      sentByUser = this.state.profileId === 1 ? 'me' : '',
      Time = Moment(this.state.time)
        .locale('pt-BR')
        .startOf('minutes')
        .fromNow();

    return (
      <div id={this.props.id} className={`chat-message user-${this.state.userId} ${sentByUser}`}>
        <img src={this.props.profilePicture} alt={this.state.profileName} className="chat-profile-picture" width="65" />
        <div className="chat-message-content">
          <div className="chat-message-info">
            <span className="chat-message-profile-name">{this.state.profileName}</span>
            <span className="chat-message-company-name">{this.state.companyName}</span>
            <span className="chat-message-send-time">{`enviado ${Time}`}</span>
          </div>
          <span className="chat-message-text">{this.state.text}</span>
          <div className="chat-message-reading-status">
            <span className={`icon icon-${isPendingOrRead}`} />
          </div>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  profilePicture: PropTypes.string.isRequired,
  profileId: PropTypes.number.isRequired,
  profileName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  read: PropTypes.bool.isRequired
};

Message.defaultProps = {
  profilePicture: 'http://www.piachievers.com/img/users-male-2.png',
  profileName: 'User',
  companyName: 'Company',
  profileId: 1,
  text: '',
  time: new Date().getTime(),
  read: false
};

export default Message;