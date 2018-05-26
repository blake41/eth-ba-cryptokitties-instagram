import {
  FETCH_KITTY
} from "../actions/types";

const kittyReducer = (state = {src: null}, action) => {
  switch(action.type) {
    case FETCH_KITTY:
      return {src: action.payload}
  }

  return state
}

export default kittyReducer
