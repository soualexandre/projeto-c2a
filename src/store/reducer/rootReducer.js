import {combineReducers} from 'redux'

import authReducer from './authReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    authReducer,
    loadingReducer

})

export default rootReducer;