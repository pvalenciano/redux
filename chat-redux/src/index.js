import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById("root"));
};
function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    // console.log('index store.getState()', store.getState());
}
store.subscribe(render);
registerServiceWorker();

render();