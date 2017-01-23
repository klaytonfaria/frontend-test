import React, { Component, PropTypes } from 'react';

// Components
// import Header from '../partials/chat/header';

class Chat extends Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div id={this.props.id} className={`${this.props.baseClass} chat-window`}>

        <div className="chat-window-header">
          <span className="chat-window-title">Vaga: desenvolvedor Front-end</span>
          <div className="chat-window-tools">
            <span className="icon minimize" />
            <span className="icon close" />
          </div>
        </div>

        <div className="chat-window-content">
          <div className="chat-message-stream">

            <div className="message">
              <img src="http://www.piachievers.com/img/users-male-2.png" alt="Profile Name" className="profile-picture" width="65" />
              <div className="message-content">
                <div className="message-info">
                  <span className="profile-name">Você</span>
                  <span className="send-time">Enviado a poucos segundos</span>
                </div>
                <span className="message-text">Claro. A Catho fica próximo ao shopping Tamboré, ao lado do prédio da Engevix.</span>
                <span className="message-reading-status pendding read" />
              </div>
            </div>

          </div>
        </div>

        <div className="chat-footer">
          <textarea className="chat-message-composer" name="chat-message-composer" id={`${this.props.id}-message-composer`} cols="30" rows="10" placeholder="Digite aqui sua mensagem..." />
        </div>
      </div>
    );
  }
}


Chat.propTypes = {
  id: PropTypes.string.isRequired,
  baseClass: PropTypes.string
};

Chat.defaultProps = {
  id: 'chat',
  baseClass: ''
};

export default Chat;