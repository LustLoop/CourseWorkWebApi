import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import * as configureStore from './store';
import Catalog from "./containers/Catalog/Catalog";
import './index.css';

const store = configureStore.STORE;

ReactDom.render(
    <Provider store={store}>
        <Catalog />
    </Provider>,
  document.getElementById('root')
);
