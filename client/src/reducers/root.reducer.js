import { combineReducers } from "redux";

import network from "reducers/network.reducer";
import messages from "reducers/messages.reducer";

export const reducersMap = {
  network,
  messages
};

export default combineReducers(reducersMap);
