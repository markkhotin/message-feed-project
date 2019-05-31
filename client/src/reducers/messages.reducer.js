import { handleActions } from "redux-actions";
import { get } from "lodash/fp";

import * as AT from "actions/messages.actions";

const initialState = [];

const messagesReducer = handleActions(
  {
    [AT.SET_MESSAGE]: (state, { payload }) => [
      ...state,
      get("data.createdMessage", payload)
    ]
  },
  initialState
);

export default messagesReducer;
