import { combineReducers } from 'redux-immutable'
import web3 from './web3'
import accounts from './accounts'
import contract from './contract'
import defaultAccount from './defaultAccount'
import web3Error from './web3Error'
import secondContract from './secondContract'
import image from '../../../../reducers/imageReducer'
export {
  web3,
  accounts,
  contract,
  defaultAccount,
  web3Error,
  secondContract
}

export const reducers = {
  web3,
  accounts,
  contract,
  defaultAccount,
  web3Error,
  secondContract,
  image
}

const web3CombinedReducers = combineReducers(reducers)

export default web3CombinedReducers
