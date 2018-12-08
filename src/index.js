// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.scss';
import App from './App';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(app, root);
}
