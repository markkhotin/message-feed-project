import { handleActions } from "redux-actions";
import { get } from "lodash/fp";

import * as AT from "actions/main.actions";

const initialState = {
  messages: [],
  filterTerm: "",
  error: ""
};

const mainReducer = handleActions(
  {
    [AT.SET_MESSAGE]: (state, { payload }) => ({
      ...state,
      messages: [...state.messages, get("message", payload)]
    }),
    [AT.SET_MESSAGES]: (state, { payload }) => ({
      ...state,
      messages: get("messages", payload)
    }),
    [AT.SET_FILTER_TERM]: (state, { payload }) => ({
      ...state,
      filterTerm: get("filterTerm", payload)
    }),
    [AT.SET_ERROR]: (state, { payload }) => ({
      ...state,
      error: get("error", payload)
    }),
    [AT.CLEAR_ERROR]: state => ({
      ...state,
      error: ""
    })
  },
  initialState
);

export default mainReducer;
