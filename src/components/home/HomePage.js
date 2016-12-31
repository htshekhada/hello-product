import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
      Product List: 
        <ul className="user-list">
          <li>product-a</li>
          <li>product-b</li>
          <li>product-c</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;