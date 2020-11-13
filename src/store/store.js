import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer';

let middleware = (ReduxThunk);

export const store = createStore(rootReducer, applyMiddleware(...middleware));