import React, { Component } from 'react';
import '../styles/User.css';
import store from '../store/Index';


const User = ({ user }) => {
    return (
        <div className="User">
            User:
            <br></br>
            {user}
        </div>
    );

}

export default User;
