import React, { Component } from 'react';
import '../styles/User.css';
import store from '../store/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import openCart from '../reducer/Cart';
import { setOpenCart } from '../actions/Index';
import { updateUserAction } from "../actions/Index";


const User = ({ user }) => {
    const { user_id, name, user_img, email } = user;
    function inputHandler(e) {
        [e.target.name] = e.target.value;
        console.log("e.target.name: ", e.target.name, "e.target.value: ", e.target.value);
    }

    function updateUser(){
        store.dispatch(updateUserAction(name, email));
    }
    function openCart(){
        store.dispatch(setOpenCart());
    }
    function onSubmit(e) {
        e.preventDefault();
        if (window.confirm('Sure?')) {
            console.log("submited!");

        } else {
            console.log("nothing changed..");

        }
    }
    return (
        <div className="container">
            <div className="user_info">
                <div className="shop_cart">
                    <i onClick={openCart} className="fas fa-shopping-cart"></i>
                </div>

                <br></br>
                <h3>Hi!, {name}</h3>
                <br></br>
                <img className="user_img" src={user_img} alt={user_img}></img>
                <hr></hr>
                <div className="user_data">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Nickname</label>
                            <input value={name} className="form-control" type="text" placeholder="nickname" name="nickname" onChange={inputHandler} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input value={email} className="form-control" type="email" placeholder="Email" name="email" onChange={inputHandler} />
                        </div>
                        <button className="btn btn-info" type="submit" onClick={updateUser.bind(null, name, email)}>Save</button>
                    </form>

                </div>

            </div>

        </div>

    );

}

export default User;
