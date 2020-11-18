import {actionTypes} from '../actions/Loading.action';
import initialstate from './initialstate'


export default (state = initialstate.loading, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE_LOADING:
        return { ...state, ...payload }

    default:
        return state
    }
}

