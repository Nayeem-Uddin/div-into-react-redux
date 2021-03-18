import {createStore} from 'redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const initial_state = {}
export let store = createStore(
    rootReducer,
    initial_state,
    composeWithDevTools(applyMiddleware(logger,thunk))
)