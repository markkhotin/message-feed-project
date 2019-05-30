import { get, castArray, compact } from "lodash/fp";

import apiUtils from "utils/api.utils";
import { startNetwork, endNetwork } from "actions/network.actions";

const apiMiddleware = ({ dispatch, getState }) => {
  const dispatchActions = actions => {
    compact(castArray(actions)).forEach(action => dispatch(action));
  };

  return next => action => {
    if (!get("meta.api", action)) {
      return next(action);
    }
    const { payload } = action;
    const { path, onSuccess, onError } = payload || {};
    const { networkLabel, data, method = "GET" } = payload || {};
    const headers = {};

    next(action);

    dispatch(startNetwork(networkLabel));

    apiUtils
      .request({ method, url: path, data, headers })
      .then(({ body }) => {
        if (onSuccess) {
          dispatchActions(onSuccess(body));
        }

        dispatch(endNetwork(networkLabel));
      })
      .catch(error => {
        console.error("API error", error, action);

        if (get("response.status", error) === 401) {
          console.log("Error during API request: ", error);
        }

        if (onError) {
          dispatchActions(onError(error));
        }
        dispatch(endNetwork(networkLabel));
      });
  };
};

export default apiMiddleware;
