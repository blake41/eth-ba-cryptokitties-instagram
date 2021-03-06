import Web3 from 'web3'
import axios from 'axios'
// import TokenizedTicket from '../../build/contracts/TokenizedTicket.json'

export const GET_WEB3 = 'get_web3'
export const INSTANTIATE_CONTRACT = 'initiate_contract'
export const CREATE_ZOMBIE = 'create_zombie'
import {
  STORE_IMAGE,
  FETCH_KITTY,
  SAVE_PLAYGROUND,
  GET_KITTIES,
  IPFS_HOST,
  STORE_KITTY_IMAGE_DATA
} from '../actions/types'

export function getKitties(contract, userAccount) {
  return function(dispatch) {
    contract.KittyMemoryCount.call(1).then((res) => {
      var memoryCount = res.toNumber()
      var memoryArray = Array.from(Array(memoryCount).keys())
      memoryArray.forEach((i) => {
        contract.KittyMemories.call(1, i + 1).then((res) => {
          dispatch(getKittiesImageData({address: res[0], ipfsHash: res[1], comment: res[2]}))
        })
      })
    })
  }
}

export function getKittiesImageData(data) {
  return function(dispatch) {
    axios.get(`${IPFS_HOST}${data.ipfsHash}`).then((response) => {
      const action = {
        type: STORE_KITTY_IMAGE_DATA,
        payload: { address: data.address, imageData: response.data, ipfsHash: data.ipfsHash, comment: data.comment }
      }
      dispatch(action)
    })
  }
}

export function savePlayground(dataURL) {
  return {
    type: SAVE_PLAYGROUND,
    payload: dataURL
  }
}

export function fetchKitty(address) {
  return function(dispatch) {
    const prepend = 'https://cors-anywhere.herokuapp.com/'
    const root = 'https://api.cryptokitties.co/kitties?owner_wallet_address='
    const url = `${prepend}${root}${address}`
    axios.get(url).then((response) => {
      const action = {
        type: FETCH_KITTY,
        payload: response.data.kitties[0].image_url
      }
      dispatch(action)
    })
  }
}

export function storeImage (src) {
  return {
    type: STORE_IMAGE,
    payload: src
  }
}

export function createZombie (userAccount, zombieHelperContract, name) {
  zombieHelperContract.createRandomZombie(name, {gas: 540000, from: userAccount})
  return {
    type: CREATE_ZOMBIE
  }
}
export function fetchWeb3() {

  let getWeb3 = new Promise(function(resolve, reject) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', function() {
      var results
      var web3 = window.web3

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider.
        web3 = new Web3(web3.currentProvider)

        results = web3

        console.log('Injected web3 detected.');

        resolve(results)
      } else {
        // Fallback to localhost if no web3 injection. We've configured this to
        // use the development console's port by default.
        var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')

        web3 = new Web3(provider)

        results = web3

        console.log('No web3 instance injected, using Local web3.');

        resolve(results)
      }
    })
  })

  return {
    type: GET_WEB3,
    payload: getWeb3
  }
}
