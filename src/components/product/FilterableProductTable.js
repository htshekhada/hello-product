import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import productsApi from '../../api/ProductsApi';

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      filterText: '',
      isActiveOnly: false,
      products: [],
      productsFiltered: []
    };
    console.log('222');
  }

  componentWillMount() {
    console.log('componentWillMount in FilterableProductTable');
    productsApi.getAllProducts().then(result =>
      {
        this.setState({ products: result, productsFiltered: result });
        productsApi.setProducts(result);
      }
    );
    
  }

  componentDidMount() {
  }

  handleUserInput(filterText, isActiveOnly) {
    this.setState({
      filterText: filterText.toLowerCase(),
      isActiveOnly: isActiveOnly
    });

    let productsFiltered = this.state.products.filter(product => {
        if(product.name.toLowerCase().indexOf(filterText) !== -1 && (product.active || !isActiveOnly)) {
            return product;
        } else {
            return null;
        }
    });

    this.setState({ productsFiltered: productsFiltered });    
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.isActiveOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.state.productsFiltered}
          filterText={this.state.filterText}
          inStockOnly={this.state.isActiveOnly}
          />
      </div>
    );
  }
}

export default FilterableProductTable;