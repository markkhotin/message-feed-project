import { handleActions } from "redux-actions";
import { get } from "lodash/fp";

import * as AT from "actions/main.actions";

const initialState = {
  messages: [],
  filterTerm: ""
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
    })
  },
  initialState
);

export default mainReducer;
