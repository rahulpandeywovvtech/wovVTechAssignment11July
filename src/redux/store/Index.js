
import {createStore,applyMiddleware,combineReducers}  from 'redux'
import thunk  from 'redux-thunk'
import getNewsReducer from '../reducer/getNewsReducer'

const rootReducer = combineReducers({
getNewsReducer

})

export default store = createStore(rootReducer,applyMiddleware(thunk));