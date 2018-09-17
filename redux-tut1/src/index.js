import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
//-------------ejemplo 1-----------------

// function reducer(state, action) {
//     if (action.type === 'changeState') {
//         return action.payload.newState;
//     }

//     return 'State';

// }

// const store = createStore(reducer);
// const action = {
//     type: 'changeState',
//     payload: {
//         newState: "New state"
//     }
// };
// store.dispatch(action);
// console.log(store.getState());

//-------------ejemplo 2-----------------

// function productsReducer(state = [], action) {
//     return state;
// }

// function userReducer(state = '', { type, payload }) {
//     //(state = '', action)
//     switch (type) {
//         case 'updateUser':
//             return payload

//         default:
//             break;
//     }
//     return state;
// }

// const reducers = combineReducers({
//     products: productsReducer,
//     user: userReducer
// })
// const store = createStore(reducers,
//     {
//         products: [{ name: 'Hola' }],
//         user: 'Michael'
//     },

//     //to see on redux devtools
//     window.devToolsExtension && window.devToolsExtension()
// );

// const updateUserAction = {
//     type: 'updateUser',
//     payload: {
//         user: 'Paula',
//     }
// }
// store.dispatch(updateUserAction);
// console.log("update user: ", store.getState());
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
