import React, { Component } from 'react';

const closeWindow = () => {
    document.getElementById('chat').style.display = 'none';
    return true;
  },
  minimize = (el, chatClasses) => {
    el.setAttribute('class', chatClasses.replace('minimized', ''));
    return false;
  },
  restore = (el, chatClasses) => {
    el.setAttribute('class', `${chatClasses} minimized`);
    return true;
  },
  toggleWindow = () => {
    const chat = document.getElementById('chat'),
      chatClasses = chat.getAttribute('class');

    let isMinimized = false;

    if (chatClasses.indexOf('minimized') >= 0) {
      isMinimized = minimize(chat, chatClasses);
    } else {
      isMinimized = restore(chat, chatClasses);
    }
    return isMinimized;
  };

class Header extends Component {

  constructor() {
    super();
    this.state = {
      minimized: false,
      closed: false
    };
  }

  handleToggleWindow() {
    this.setState({
      closed: this.state.closed,
      minimized: toggleWindow()
    });
  }

  handleCloseWindow() {
    this.setState({
      closed: closeWindow(),
      minimized: this.state.minimized || false
    });
  }

  render() {
    return (
      <div className="chat-window-header">
        <span className="chat-window-title">Vaga: desenvolvedor Front-end</span>
        <div className="chat-window-tools">
          <button type="button" className="icon" onClick={this.handleCloseWindow.bind(this)}>
            <span className="icon icon-close" />
          </button>
          <button type="button" className="icon" onClick={this.handleToggleWindow.bind(this)}>
            <span className="icon icon-minimize" />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
