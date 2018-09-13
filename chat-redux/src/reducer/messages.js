import { getMessages } from "../data/data";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";
import _ from 'lodash';
export default function messages(state = getMessages(10), action) {

    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            //_.keys = Object.keys() but i used the helper from lodash
            //function is used to retrieve the last item in the array
            //+ before = this is to make sure that the result is converted to a Number instead of a String.
            const number = +_.keys(allUserMsgs).pop() + 1;

            return {
                // will make sure we don’t mess with the previous messages in the application.
                ...state,
                [userId]: {
                    //Within the object, we make sure that all of the user’s messages are untouched
                    ...allUserMsgs,
                    //we add the new message object with the previously computed number
                    [number]: {
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        case DELETE_MESSAGE:
            
            console.log("el mensaje: ", action.payload);
        default:
            return state;
    }
}