import React, { Component } from 'react';
import './CreateMessage.css'

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  render() {
    return (
      <form className="create-message" onSubmit={this.onSubmit}>
        <input className="create-message-content"
              type="text"
              placeholder="Please enter message"
              value={this.state.content}
              onChange={this.onChangeContent} />
        <input className="create-message-submit" type="submit" value="SEND" />
      </form>
    );
  }

  onChangeContent = e => {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.content===''){
      alert('Missing content message');
      return false;
    }
    let username = (this.props.username ? this.props.username : 'Default Username');
    let messageObject = {
      username: username,
      content: this.state.content
    }
    this.props.onSubmit(messageObject);
    this.setState({
      content: ''
    });
  }
}

export default Message;
