import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="product-list" component={HomePage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
