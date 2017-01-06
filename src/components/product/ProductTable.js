import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(next) {
    console.log('componentWillReceiveProps');
    let rows = []

    next.products.forEach((product) => {
        rows.push(<ProductRow product={product} key={product.id} />);
    });
    
    this.setState({ rows: rows });
  }

  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {this.state.rows}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;