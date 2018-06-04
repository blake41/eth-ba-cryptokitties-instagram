import {
  STORE_KITTY_IMAGE_DATA
} from "../actions/types";

const getKittiesReducer = (state = [], action) => {
  switch(action.type) {
    case STORE_KITTY_IMAGE_DATA:
      return [...state, action.payload]
  }

  return state
}

export default getKittiesReducer
