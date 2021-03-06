import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
// import CatsPage from './components/cats/CatsPage';
import AboutPage from './components/about/AboutPage';
// import CatPage from './components/cats/CatPage';
// import NewCatPage from './components/cats/NewCatPage';
// import LogInPage from './components/LogInPage';
// import auth from './auth/authenticator';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);

function requireAuth(nextState, replace) {
  console.log('in requireAuth');
  // if (!auth.loggedIn()) {
  //   replace({
  //     pathname: '/login',
  //     state: { nextPathname: nextState.location.pathname }
  //   })
  // }
}
