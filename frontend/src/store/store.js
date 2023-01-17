import { combineReducers, legacy_createStore as createStore } from 'redux'
import { gigReducer } from './gig.reducer.js'


// const { createStore, combineReducers } = Redux
const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const rootReducer = combineReducers({
    gigModule: gigReducer,
})

export const store = createStore(rootReducer, middleware)


