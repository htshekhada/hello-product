class ProductsApi {

  static products = [
    {
      "id": 1,
      "code": "prd001",
      "name": "Medium t-shirt",
      "description": "A Medium t-shirt",
      "category": "cloth",
      "sub-category": "t-shirt",
      "rate": 4,
      "active": true
    }, {
      "id": 2,
      "code": "prd002",
      "name": "Medium Trouser",
      "description": "A Medium trouser",
      "category": "cloth",
      "sub-category": "trouser",
      "rate": 3,
      "active": true
    }, {
      "id": 3,
      "code": "prd003",
      "name": "keyboard",
      "description": "keyboard for desktop PC",
      "category": "electronics",
      "sub-category": "computer",
      "rate": 3,
      "active": true
    }
];

  static getAllProducts() {

    return this.products;
    // return fetch("products.json").then(response => {
    //   return response.json()
    // }).catch(error => {
    //   return error;
    // });
  }

  static updateCat(cat) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
      method: 'PUT',
      headers: headers, 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createProduct() {
    let myProd = {
      "id": 4,
      "code": "prd004",
      "name": "Mouse",
      "description": "Mouse for desktop PC",
      "category": "electronics",
      "sub-category": "computer",
      "rate": 3,
      "active": true
    };
    this.products.push(myProd);
  }

  static deleteCat(cat) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
      method: 'DELETE', 
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductsApi;
