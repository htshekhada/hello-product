import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Link to="/">Home</Link><br></br>
            <Link to="/product-list">Product List</Link><br></br>
            <Link to="/add-product">New Product</Link><br></br>
            <Link to="/about">About</Link>
        </header>
        <p className="App-intro">
          This is footer.
        </p>
        {this.props.children}

      </div>
    );
  }
}

export default App;
