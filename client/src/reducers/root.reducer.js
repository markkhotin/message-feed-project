import { combineReducers } from "redux";

import network from "reducers/network.reducer";

export const reducersMap = {
  network
};

export default combineReducers(reducersMap);
