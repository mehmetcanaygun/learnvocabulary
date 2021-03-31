import axios from "axios";
import { shuffle } from "../utils";
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
  RESET,
} from "./actionTypes";

// Get Words
export const getWords = () => async (dispatch) => {
  const res = await axios.get("/data/words.json");

  dispatch({
    type: GET_WORDS,
    payload: shuffle(res.data),
  });
};

// Start
export const start = () => (dispatch) => {
  dispatch({
    type: START,
    payload: true,
  });
};

// Save Unknown Word
export const saveUnknown = (word) => (dispatch) => {
  dispatch({
    type: SAVE_UNKNOWN,
    payload: word,
  });
};

// Save Known Word
export const saveKnown = (word) => (dispatch) => {
  dispatch({
    type: SAVE_KNOWN,
    payload: word,
  });
};

// Exclude Known Words
export const excludeKnownWords = () => (dispatch) => {
  dispatch({
    type: EXCLUDE_KNOWN_WORDS,
  });
};

// Remove Known Word
export const removeKnownWord = (word) => (dispatch) => {
  dispatch({
    type: REMOVE_KNOWN,
    payload: word,
  });
};

// Remove Unknown Word
export const removeUnknownWord = (word) => (dispatch) => {
  dispatch({
    type: REMOVE_UNKNOWN,
    payload: word,
  });
};

// Add to words when word is moved from known to unknown
export const addToWords = (word) => (dispatch) => {
  dispatch({
    type: ADD_TO_WORDS,
    payload: word,
  });
};

// Remove from words when word is moved from unknown to known
export const removeFromWords = (word) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_WORDS,
    payload: word,
  });
};

// Reset
export const reset = () => (dispatch) => {
  dispatch(getWords());

  dispatch({
    type: RESET,
  });
};
