import React, { Component } from 'react';

const closeWindow = () => {
    document.getElementById('chat').style.display = 'none';
    return true;
  },

  openWindow = () => {
    document.getElementById('chat').style.display = 'block';
    return true;
  },

  minimize = () => {
    const chat = document.getElementById('chat'),
      chatClasses = chat.getAttribute('class');

    chat.setAttribute('class', chatClasses.replace('minimized', ''));
    return false;
  },

  restore = () => {
    const chat = document.getElementById('chat'),
      chatClasses = chat.getAttribute('class');

    chat.setAttribute('class', `${chatClasses} minimized`);
    return true;
  },

  toggleWindow = (isMinimized = false) => {
    const chatClasses = document.getElementById('chat').getAttribute('class');
    let shouldMinimize = (chatClasses.indexOf('minimized') >= 0);

    if (shouldMinimize && !isMinimized) {
      shouldMinimize = minimize();
    } else {
      shouldMinimize = restore();
    }
    return shouldMinimize;
  };

class Header extends Component {

  constructor() {
    super();
    this.state = {
      minimized: false,
      closed: false
    };
  }

  componentDidUpdate() {
    if (this.state.minimized) {
      restore();
    } else {
      minimize();
    }
    if (this.state.closed) {
      closeWindow();
    } else {
      openWindow();
    }
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
