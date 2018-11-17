import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter >
          <App>
              <Route path="/signin" component={Signin}/>
          </App>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
