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
        <td>{name}</td>
        <td>{this.props.product.rate}</td>
      </tr>
    )
  }
}

export default ProductRow;