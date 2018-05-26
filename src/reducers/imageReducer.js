import {
  STORE_IMAGE
} from "../actions/types";

const imageReducer = (state = {src: null}, action) => {
  switch(action.type) {
    case STORE_IMAGE:
      return {src: action.payload}
  }

  return state
}

export default imageReducer
