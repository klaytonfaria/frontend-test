import React from 'react';
import { render } from 'react-dom';
import Chat from './components/partials/chat';

// Global style
import './style-settings/base.scss';
import './components/elements/icons/icons-font';

const app = document.getElementById('help-chat');

if (app) {
  render(<Chat />, document.getElementById('help-chat'));
}
