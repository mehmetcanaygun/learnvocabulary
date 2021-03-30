import { GET_WORDS, START, SAVE_UNKNOWN, SAVE_KNOWN } from "../actionTypes";

const initialState = {
  words: [],
  started: false,
  unknownWords: [],
  knownWords: [],
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
    case SAVE_KNOWN:
      return {
        ...state,
        knownWords: [...state.knownWords, payload],
      };
    default:
      return state;
  }
}
