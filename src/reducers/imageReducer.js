const initialState = {
  web3Instance: null
}

const imageReducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED')
  {
    return Object.assign({}, state, {
      imageInstance: action.payload.imageInstance
    })
  }

  return state
}

export default imageReducer
