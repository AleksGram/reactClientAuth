import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter >
          <App>
              <Route path="/signin" component={Signin}/>
              <Route path="/signout" component={Signout}/>
              <Route path="/signup" component={Signup}/>
          </App>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
