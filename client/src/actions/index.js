import axios from "axios";
import { GET_BACK_END } from "./types";
export const testBackEnd = () => dispatch => {
  axios.get("/home").then(res => {
    dispatch({
      type: GET_BACK_END,
      payload: res.data
    });
  });
};
