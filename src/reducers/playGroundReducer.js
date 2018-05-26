import {
  SAVE_PLAYGROUND
} from "../actions/types";

const playGroundReducer = (state = {src: null}, action) => {
  switch(action.type) {
    case SAVE_PLAYGROUND:
      return {src: action.payload}
  }

  return state
}

export default playGroundReducer
