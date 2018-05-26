import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import imageReducer from './reducers/imageReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  image: imageReducer,
  web3: web3Reducer
})

export default reducer
