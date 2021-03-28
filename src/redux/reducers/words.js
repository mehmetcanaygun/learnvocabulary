import { GET_WORDS } from "../actionTypes";

const initialState = {
  words: null,
};

export default function wordsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORDS:
      return {
        ...state,
        words: payload,
      };
    default:
      return state;
  }
}
