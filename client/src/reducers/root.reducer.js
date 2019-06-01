import { combineReducers } from "redux";

import network from "reducers/network.reducer";
import main from "reducers/main.reducer";

export const reducersMap = {
  network,
  main
};

export default combineReducers(reducersMap);
