import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';import { Form, Control } from 'react-redux-form';

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

const store = createStore(combineForms({
  product: initialProduct,
}));

class AddProduct extends React.Component {

  handleSubmit(val) {
    console.log('code='+val.code);
  }
  render() {
    return (
      <Provider store={ store }>
        <Form model="product" onSubmit={(val) => this.handleSubmit(val)}>
          <label>Code: </label><Control.text model=".code" />
          <label>Name: </label><Control.text model=".name" />
          <label>Description: </label><Control.text model=".description" />
          <label>Category: </label>
          <Control.select model=".category">
            <option></option>
            <option value="cloth">Cloth</option>
            <option value="electronics">Electronics</option>
          </Control.select>
          <label>Sub-Category: </label>
          <Control.select model=".sub-category">
            <option></option>
            <option value="t-shirt">T-Shirt</option>
            <option value="trouser">Trouser</option>
          </Control.select>
          <button>Submit!</button>
        </Form>
      </Provider>
    );
  }
}

export default AddProduct;