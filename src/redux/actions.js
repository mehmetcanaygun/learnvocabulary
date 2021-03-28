import axios from "axios";
import { GET_WORDS } from "./actionTypes";

// Get Words
export const getWords = () => async (dispatch) => {
  const res = await axios.get("/data/words.json");
  // console.log(res.data);

  dispatch({
    type: GET_WORDS,
    payload: res.data,
  });
};
