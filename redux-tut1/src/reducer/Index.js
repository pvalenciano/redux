import { combineReducers } from "redux";
import User from "./User";
import Product from "./Product";
import openDetail from "./Detail";
import openCart from "./Cart";
console.log("reducer");

export default combineReducers({
    Product,
    User,
    openDetail,
    openCart
})