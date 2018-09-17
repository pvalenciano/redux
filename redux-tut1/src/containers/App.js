import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Main from '../containers/Main';
import Sidebar from '../containers/Sidebar';
import store from '../store/Index';
import  _ from 'lodash';

class App extends Component {


  render() {
    console.log("app");
    const { User, Product } = store.getState();
    return (
      <div className="App">
        <Sidebar user={User} />
        <Main productMain={Product}/>
      </div>
    );
  }
}

export default App;
