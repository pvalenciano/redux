//import the string 
import { SET_ACTIVE_USER_ID } from "../constants/action-types";
/*We then check if the action passed in is of type SET_ACTIVE_USER_ID . 
If yes, then the new value of activeUserId is set to action.payload.*/
export default function activeUserId(state = null, action) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            //payload contains the user_id
            return action.payload;

        default:
            return state;
    }

};
