import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import * as configureStore from './store';
import Feed from "./containers/Feed";


const store = configureStore.STORE;

ReactDom.render(
    <Provider store={store}>
        <Feed />
    </Provider>,
  document.getElementById('root')
);
