import { combineReducers } from 'redux'
import pokemon from './reducers/pokemon'
import common from './reducers/common'

export default combineReducers({
    pokemon,
    common
})