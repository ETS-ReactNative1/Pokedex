import { createStore, applyMiddleware } from 'redux'
import reducer from './index'
import thunk from 'redux-thunk'

const middlewares = [thunk]

if (__DEV__) {
    const createDebugger = require('redux-flipper').default
    middlewares.push(createDebugger())
}

export default store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)