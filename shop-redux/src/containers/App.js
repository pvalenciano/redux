import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import ProductList from '../components/ProductList'; s

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>

          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
