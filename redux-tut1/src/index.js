import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import store from './store/Index';

//i want to render twice cause im going to show a component or other by a conditional
const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById("root"));
};
function fancyLog() {
    console.log("%c TUTORIAL 👉 👉👇", "background: purple; color: #FFF");
}
store.subscribe(render);
registerServiceWorker();

render();




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



// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
