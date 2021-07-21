import { combineReducers } from 'redux'
import pokemonReducer from './reducers/pokemon'
import commonReducer from './reducers/common'

export default combineReducers({
    pokemonReducer,
    commonReducer
})