import {
  GET_WORDS,
  START,
  SAVE_UNKNOWN,
  SAVE_KNOWN,
  EXCLUDE_KNOWN_WORDS,
} from "../actionTypes";

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
      // Prevent duplicates
      if (!state.unknownWords.includes(payload)) {
        return {
          ...state,
          unknownWords: [...state.unknownWords, payload],
        };
      }
      return {
        ...state,
        unknownWords: [...state.unknownWords],
      };
    case SAVE_KNOWN:
      // If the word was unknown before, remove it from unknown list
      if (state.unknownWords.includes(payload)) {
        return {
          ...state,
          knownWords: [...state.knownWords, payload],
          unknownWords: state.unknownWords.filter((w) => w !== payload),
        };
      }
      return {
        ...state,
        knownWords: [...state.knownWords, payload],
      };
    case EXCLUDE_KNOWN_WORDS:
      return {
        ...state,
        words: state.words.filter((w) => !state.knownWords.includes(w)),
      };
    default:
      return state;
  }
}
