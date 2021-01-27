import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [ thunk ];

let enhancer;

enhancer = compose(
    applyMiddleware(...middleware)
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}