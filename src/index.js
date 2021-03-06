import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from "./actions/types";

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Feature from './components/feature';
import Welcome from './components/welcome';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If token exist => consider the user to be signed in
if (token) {
    store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter >
          <App>
              <Route exact path="/" component={Welcome}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signout" component={Signout}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/feature" component={RequireAuth(Feature)}/>
          </App>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
