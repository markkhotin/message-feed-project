import { set } from "lodash/fp";
import { handleActions } from "redux-actions";

import * as AT from "actions/network.actions";

const initialState = {};

const networkReducer = handleActions(
  {
    [AT.START_NETWORK]: (state, { payload: { networkLabel } = {} }) =>
      set(
        networkLabel,
        state[networkLabel] ? state[networkLabel] + 1 : 1,
        state
      ),

    [AT.END_NETWORK]: (state, { payload: { networkLabel } = {} }) =>
      set(
        networkLabel,
        state[networkLabel] ? state[networkLabel] - 1 : 0,
        state
      ),

    [AT.CLEAR_NETWORK]: state => initialState
  },
  initialState
);

export default networkReducer;
