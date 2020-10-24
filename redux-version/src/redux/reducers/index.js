import { combineReducers } from 'redux'
import dataApiReducer from './dataApiReducer'

export default combineReducers({
    data: dataApiReducer
})