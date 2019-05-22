import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import AboutPage from './components/about/AboutPage';
import FilterableProductTable from './components/product/FilterableProductTable';
import AddProduct from './components/product/AddProduct';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/product-list" component={FilterableProductTable} />
            {/* <Route path="/add-product(/:productId)" component={AddProduct} /> */}
            <Route path="/add-product/:productId?" component={AddProduct} />
            <Route path="/about" component={AboutPage} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
