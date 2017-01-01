import React from 'react';
import {Link} from 'react-router';
import productsApi from '../../api/ProductsApi';

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="jumbotron">
      New Product:

      </div>
    );
  }
}

export default AddProduct;