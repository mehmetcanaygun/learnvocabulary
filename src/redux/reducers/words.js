import { GET_WORDS, START, SAVE_UNKNOWN } from "../actionTypes";

const initialState = {
  words: [],
  started: false,
  unknownWords: [],
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
    case SAVE_UNKNOWN:
      return {
        ...state,
        unknownWords: [...state.unknownWords, payload],
      };
    default:
      return state;
  }
}
