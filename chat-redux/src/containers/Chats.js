import React, { Component } from "react";
import "../styles/Chats.css";
import ReactDOM from 'react-dom';

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;

  console.log("parametros: ",text, is_user_msg);
  console.log("message: ",message);

  const onChange = e => {
    console.log('e: '+ text);
  }

  return (
    <span onClick={onChange} className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {

  constructor(props) {
    super(props);
    //if i put the ref on div element then i have a reference to the div that holds all the chat conversations.
    this.chatsRef = React.createRef();
  }
  //update the scrollTop
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  //cuando el componente se haya montado
  componentDidMount() {
    console.log("createref", React.createRef());
    this.scrollToBottom();
  }
  //called after updating occurs
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;