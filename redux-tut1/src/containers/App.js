import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Main from '../containers/Main';
import Sidebar from '../containers/Sidebar';
import store from '../store/Index';
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)


class App extends Component {

  render() {
    console.log("getState: ",store.getState());

    console.log("app");
    const { User, Product, openDetail, openCart } = store.getState();
    return (
      <div className="App">
        <Sidebar shoppingCartOpen={openCart} user={User} />
        <Main detailOpen={openDetail} productMain={Product} />
      </div>
    );
  }
}

export default App;
