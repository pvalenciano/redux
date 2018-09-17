import { SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/action-types";

export default function typing(state = "", action) {
    switch (action.type) {
        case SET_TYPING_VALUE:
        console.log("action.payload: ", action.payload)
            return action.payload;
        case SEND_MESSAGE:
            return "";

        default:
            return state;
    }
}