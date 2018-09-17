import { combineReducers } from "redux";
import User from "./User";
import Product from "./Product";

console.log("reducer");

export default combineReducers({
    Product,
    User
})