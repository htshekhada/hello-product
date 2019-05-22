import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   rows: []
    // };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(next) {
    console.log('componentWillReceiveProps');
  }

  render() {
    const products = this.props.products.map(product => {
      return <ProductRow product={product} key={product.id} />
    });
    return (
      <ul className="list">
        {this.props.products.map(product =>
          <ProductRow product={product} key={product.id} />
        )}
      </ul>

    )
  }
}

export default ProductTable;