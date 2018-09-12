import React from 'react';
import store from '../store';
import Header from '../components/Header';
import Chats from './Chats';
import _ from "lodash";
import '../styles/ChatWindow.css'
const ChatWindow = ({ activeUserId }) => {

    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={activeUser}></Header>
            <Chats messages={_.values(activeMsgs)} />
        </div>
    );

};

export default ChatWindow;
