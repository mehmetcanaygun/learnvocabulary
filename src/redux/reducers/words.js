import {
  GET_WORDS,
  START,
  SAVE_UNKNOWN,
  SAVE_KNOWN,
  EXCLUDE_KNOWN_WORDS,
  REMOVE_KNOWN,
  REMOVE_UNKNOWN,
  ADD_TO_WORDS,
  REMOVE_FROM_WORDS,
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
      // Check for duplicate
      if (state.unknownWords.filter((w) => w.id === payload.id).length > 0) {
        return state;
      }
      return {
        ...state,
        unknownWords: [...state.unknownWords, payload],
        knownWords: state.knownWords.filter((w) => w.id !== payload.id),
      };
    case SAVE_KNOWN:
      // Check for duplicate
      if (state.knownWords.filter((w) => w.id === payload.id).length > 0) {
        return state;
      }
      return {
        ...state,
        knownWords: [...state.knownWords, payload],
        unknownWords: state.unknownWords.filter((w) => w.id !== payload.id),
      };
    case EXCLUDE_KNOWN_WORDS:
      return {
        ...state,
        words: state.words.filter((w) => !state.knownWords.includes(w)),
      };
    case REMOVE_KNOWN:
      return {
        ...state,
        knownWords: state.knownWords.filter((w) => w.id !== payload.id),
      };
    case REMOVE_UNKNOWN:
      return {
        ...state,
        unknownWords: state.unknownWords.filter((w) => w.id !== payload.id),
      };
    case ADD_TO_WORDS:
      return {
        ...state,
        words: [...state.words, payload],
      };
    case REMOVE_FROM_WORDS:
      return {
        ...state,
        words: state.words.filter((w) => w.id !== payload.id),
      };
    default:
      return state;
  }
}
