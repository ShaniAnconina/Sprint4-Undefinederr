import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { gigReducer } from './gig/gig.reducer.js'
import { userReducer } from './user/user.reducer.js'


const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose()

const rootReducer = combineReducers({
    gigModule: gigReducer,
    userModule: userReducer,
})

export const store = createStore(rootReducer, middleware)


