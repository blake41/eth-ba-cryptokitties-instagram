import {
  GET_KITTIES
} from "../actions/types";

const getKittiesReducer = (state = [], action) => {
  switch(action.type) {
    case GET_KITTIES:
      return [...state, action.payload]
  }

  return state
}

export default getKittiesReducer
