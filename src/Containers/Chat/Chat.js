import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'

import Message from '../../Components/Message/Message.js';
import CreateMessage from '../../Components/CreateMessage/CreateMessage.js';

import { connect } from 'react-redux'

var socket = null;

class Chat extends Component {
  constructor(props) {
    super(props);
     
    if(socket===null){
      socket = socketIOClient("http://localhost:4001");
    }

    socket.on('SET_USERNAME', (username) => {
      this.props.setUsername(username);
    });
    socket.on('CREATE_MESSAGE', (messageObject) => {
      this.props.createMessage(messageObject);
    });
  }
  render() {
    return (
      <div id="chat">
          <div id="messages">
            {this.props.messagesArray.map((messageObject, messageIndex) =>
              <Message
                key={messageIndex}
                username={messageObject.username}
                content={messageObject.content}
                isMyMessage={this.props.username === messageObject.username}
              />
            )}
          </div>
          <CreateMessage username={this.props.username} onSubmit={this.props.sendMessageToServer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    endpoint: state.endpoint,
    socket: state.socket,
    username: state.username,
    messagesArray: state.messagesArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: username => {
      const action = {type: 'SET_USERNAME', username: username};
      dispatch(action);
    },
    sendMessageToServer: messageObject => {
      socket.emit('SEND_MESSAGE', messageObject);
    },
    createMessage: messageObject => {
      const action = {type: 'CREATE_MESSAGE', messageObject: messageObject};
      dispatch(action);
    }
  }
}

const ChatWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatWithStore;
