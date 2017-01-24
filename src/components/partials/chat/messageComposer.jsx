import React from 'react';
import { ENTER_KEY } from '../../../constants';

// Actions
import ChatActions from './flux/actions';

const composeMessageObj = msg => ({
    id: new Date().getTime(),
    user: {
      id: 9483484,
      perfilId: 1,
      name: 'Nome do Candidato'
    },
    message: {
      time: new Date().getTime(),
      alreadyRead: false,
      message: msg
    }
  }),
  handleSendMessage = (e) => {
    const component = e.target,
      value = component.value,
      message = composeMessageObj(value);

    if (e.which === ENTER_KEY && value.match(/./)) {
      if (!e.shiftKey) {
        ChatActions.send(message);
        component.value = '';
      }
    } else if (!value.match(/./)) {
      component.value = '';
    }
  },
  MessageComposer = () => (
    <textarea
      className="chat-message-composer"
      name="chat-message-composer"
      placeholder="Digite aqui sua mensagem..."
      onKeyPress={e => handleSendMessage(e)}
    />
  );

export default MessageComposer;
