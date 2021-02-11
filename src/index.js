import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import * as configureStore from './store';
import './index.css';
import App from "./App";

const store = configureStore.STORE;

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
