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
    let rows = []
    this.props.products.forEach((product) => {
        rows.push(<ProductRow product={product} key={product.id} />);
    });
    this.setState({ rows: rows });      
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
            <th>Product Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Rate</th>
            <th>Active?</th>
            <th>Edit</th>
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