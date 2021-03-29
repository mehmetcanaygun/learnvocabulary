import { GET_WORDS, START } from "../actionTypes";

const initialState = {
  words: [],
  started: false,
};

export default function wordsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORDS:
      return {
        ...state,
        words: payload,
      };
    case START:
      return {
        ...state,
        started: payload,
      };
    default:
      return state;
  }
}
