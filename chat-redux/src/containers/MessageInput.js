import React from "react";
import "../styles/MessageInput.css";
import { setTypingValue, sendMessage } from "../actions";
import store from "../store";
import '../styles/MessageInput.css';

const MessageInput = ({ value }) => {

    const state = store.getState();
    //updates value
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    };


    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input className="Message__input" onChange={handleChange}
                value={value} placeholder="write a message" />
        </form>
    );
};


export default MessageInput;