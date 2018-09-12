import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import logo from './logo.svg';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';


// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {

  constructor() {
    super();
    this.state = {
      openAddPost: false,
      styleAdd: {
        'position': 'absolute',
        'fontSize': '30px',
        'left': '10px',
        'color': 'rgba(255, 255, 255, 0.801)'
      }

    }

  }
  onAddClicked() {


    console.log("pulsado");
    if (!this.state.openAddPost) {
      this.setState({
        openAddPost: true,
        styleAdd: {
          'position': 'absolute',
          'fontSize': '30px',
          'left': '470px',
          'color': 'rgba(255, 255, 255, 0.801)'
        }

      })

    } else {
      this.setState({
        openAddPost: false,
        styleAdd: {
          'position': 'absolute',
          'fontSize': '30px',
          'left': '10px',
          'color': 'rgba(255, 255, 255, 0.801)'
        }

      })

    }

  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <button onClick={() => this.onAddClicked()} className="add-post-btn" style={this.state.styleAdd}> <i className="fas fa-plus"></i></button>

          {this.state.openAddPost ?
            <div className="column-form">
              <PostForm />
            </div>


            : null
          }

          {/* <Posts posts={this.state} /> */}
          <Posts/>

        </div>
      </Provider>
    );
  }
}

export default App;
