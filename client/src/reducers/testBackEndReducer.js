import { GET_BACK_END } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BACK_END:
      return {
        ...state,
        data: action.payload.msg
      };
    default:
      return state;
  }
}
