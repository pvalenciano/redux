import { createStore } from "redux";
// import reducer from "../reducer/contacts";
import reducer from "../reducer/index";

// const store = createStore(reducer, { contacts });
const store = createStore(reducer);
export default store;