import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';
import  _ from 'lodash';
class App extends Component {
  render() {
    const { contacts, user, activeUserId  } = store.getState();
    console.log("store.getState() app: ",store.getState());
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)}/>
        <Main user={user} activeUserId={activeUserId}/>
        {/* <Main/> */}
      </div>
    );
  }
}

export default App;
