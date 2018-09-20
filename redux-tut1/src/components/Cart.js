import React from 'react';
import '../styles/Cart.css';
import { exitFromCart } from '../actions/Index';
import store from '../store/Index';

const Cart = () => {

    function closeCart() {
        store.dispatch(exitFromCart());
    }
    return (
        <button className="btn " onClick={closeCart.bind(false)}>close</button>
    );

}

export default Cart;
