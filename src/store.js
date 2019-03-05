import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from 'reducers/search'
import thunk from 'redux-thunk'
import movieList from './reducers/container'

const reducers = combineReducers({
  movieList,
  searchReducer,

})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
)


export default store
