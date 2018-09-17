import { combineReducers } from "redux";
import User from "./User";
import Product from "./Product";
import openDetail from "./Detail";
console.log("reducer");

export default combineReducers({
    Product,
    User,
    openDetail
})