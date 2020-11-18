import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

let middleware = [reduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));