import axios from "axios";
import { shuffle } from "../utils";
import { GET_WORDS, SAVE_UNKNOWN, START } from "./actionTypes";

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
