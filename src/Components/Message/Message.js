import React, { Component } from 'react';
import './Message.css'

class Message extends Component {
  render() {
    let isMyMessageClass = (this.props.isMyMessage===true?' my-message':'');
    let username = (this.props.isMyMessage===true ? 'Me' : this.props.username);
    let usernameElement = <div className="message-username"><strong>Username:</strong> <span>{username}</span></div>;
    return (
      <div className={'message' + isMyMessageClass}>
        {this.props.username?usernameElement:''}
        <div className="message-content"><strong>Content:</strong> <span>{this.props.content}</span></div>
      </div>
    );
  }
}

export default Message;
