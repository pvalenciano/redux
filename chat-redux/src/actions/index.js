//action creator
import {
    SET_ACTIVE_USER_ID,
    SET_TYPING_VALUE,
    SEND_MESSAGE,
    // UPDATE_MESSAGE,
    DELETE_MESSAGE
} from "../constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});
//store the input value in the app state object
export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})
export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})
export const deleteMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})
// export const updateMesagge = (message, userId) => ({
//     type: UPDATE_MESSAGE,
//     payload: {
//         message,
//         userId
//     }
// })