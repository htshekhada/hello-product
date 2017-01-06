import React from 'react';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';
// import { Form, Control } from 'react-redux-form';
import productsApi from '../../api/ProductsApi';
import { browserHistory, router } from 'react-router'

const initialProduct = {
      "id": -1,
      "code": "",
      "name": "",
      "description": "",
      "category": "",
      "sub-category": "",
      "rate": 0,
      "active": true
};

class AddProduct extends React.Component {

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      productToEdit: initialProduct,
      categories: [],
      subCategories: [],
      productActive: false,
      code: ''
    };
     
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onCategorySelected = this.onCategorySelected.bind(this);

  }   

  componentDidMount() {
    let categories = productsApi.getCategories(1,0);
    this.setState({ categories: categories });
    if(this.props.params.productId && this.props.params.productId !== "") {
        let product = productsApi.getProduct(this.props.params.productId);
        if(product !== null) {
        this.setState({ productToEdit: product });
        this.setState({ code: product.code });
    } else {
        this.setState({ productToEdit: initialProduct });
      }
    }

  }

  handleSubmit(val) {
    let productCodeInput = this.refs.product_code;
    let productNameInput = this.refs.product_name;
    let productDescriptionInput = this.refs.product_description;
    let categoryInput = this.refs.category;
    let subCategoryInput = this.refs.sub_category;
    let productRateInput = this.refs.product_rate;
    let productActiveInput = this.refs.product_active;

    console.log(productCodeInput.value+', '+productNameInput.value+', '+productDescriptionInput.value+', '
                  +categoryInput.value+', '+subCategoryInput.value+', '+productRateInput.value+', '
                    +productActiveInput.value+'('+this.state.productActive+')');
    //TODO validate form input

    //after successful AddProduct, navigate to product-list
    let newProduct = {
      "id": new Date().valueOf(),
      "code": productCodeInput.value,
      "name": productNameInput.value,
      "description": productDescriptionInput.value,
      "category": categoryInput.value,
      "sub-category": subCategoryInput.value,
      "rate": productRateInput.value,
      "active": this.state.productActive
    };

    productsApi.createProduct(newProduct);
    //browserHistory.push('/#/product-list');
    this.context.router.push('/product-list');

  }

  onCategorySelected(e) {
    let categoryInput = this.refs.category;
    let subCategories = productsApi.getCategories(2,categoryInput.value);
    this.setState({ subCategories: subCategories });
    console.log('category='+categoryInput.value);
  }

  toggleCheckbox(event) {
    let newValue = (this.state.productActive === "on" || this.state.productActive === true) ? false : true;
    this.setState({
      productActive: newValue
    });
  }

  handleChange(e) {
    var newState = {productToEdit:{}}; 
    newState.productToEdit[e.target.name] = e.target.value; 
//    this.state.productToEdit.code=e.target.value;
    //this.setState({code: e.target.value});
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <table>
          <tbody>
          <tr><td><input name="code" placeholder="Code" ref="product_code" value={this.state.productToEdit.code} onChange={this.handleChange}/></td></tr>
          <tr><td><input name="name" placeholder="Name" ref="product_name" value={this.state.productToEdit.name} onChange={this.handleChange}/></td></tr>
          <tr><td><input name="description" placeholder="Description" ref="product_description" value={this.state.productToEdit.description} onChange={this.handleChange}/></td></tr>
          <tr><td><select name="category" ref="category" value={this.state.productToEdit.category} placeholder="Category" onChange={this.onCategorySelected} required>
            <option value="-1">-Category-</option>
            {
              this.state.categories.map(function(category) {
                return ( <option key={category.id} value={category.id}>{category.name}</option>)
              })
            }
          </select></td></tr>
          <tr><td><select ref="sub_category" defaultValue="-1" placeholder="Sub Category" required>
            <option value="-1">-Sub Category-</option>
            {
              this.state.subCategories.map(function(subCategory) {
                return ( <option key={subCategory.id} value={subCategory.id}>{subCategory.name}</option>)
              })
            }
          </select></td></tr>
          <tr><td><input placeholder="Rate" ref="product_rate" /></td></tr>
          <tr><td>Active: <input type="checkbox" checked={this.state.productActive} onChange={this.toggleCheckbox.bind(this)} ref="product_active" /></td></tr>
          <tr><td><button>Add Product</button></td></tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default AddProduct;