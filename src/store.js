import { createStore, combineReducers } from 'redux'
import { todoReducer, startedReducer, completedReducer } from './reducers/reducer'

const rootReducer = combineReducers({
  todo: todoReducer,
  started: startedReducer,
  completed: completedReducer
})

const store = createStore(rootReducer)


export default store