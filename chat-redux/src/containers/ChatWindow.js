import React from 'react';
import store from '../store';
import Header from '../components/Header';
import Chats from './Chats';
import _ from "lodash";
import '../styles/ChatWindow.css'
import MessageInput from './MessageInput';

const ChatWindow = ({ activeUserId }) => {
    // 
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const { typing } = state;

    const handleChange = e => {
        e.defaultPrevent();
       
        // store.dispatch(sendMessage(typing, activeUserId));
    };
    return (
        <div className="ChatWindow">
            <Header user={activeUser}></Header>
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput value={typing} />
        </div>
    );

};

export default ChatWindow;
