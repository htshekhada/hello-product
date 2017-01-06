import React from 'react';

class ProductRow extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.product.active ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    return (
      <tr>
        <td>{this.props.product.code}</td>
        <td>{name}</td>
        <td>{this.props.product.description}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product["sub-category"]}</td>
        <td>{this.props.product.rate}</td>
        <td>{this.props.product.active}</td>
      </tr>
    )
  }
}

export default ProductRow;