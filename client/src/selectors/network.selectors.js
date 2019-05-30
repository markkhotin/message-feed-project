import { createSelector } from 'reselect';
import { some, castArray } from 'lodash/fp';

const networkSelector = (state) => state.network;

export const isLoadingSelector = createSelector(
  networkSelector,
  (state, networkLabel) => networkLabel,
  (network, networkLabel) => {
    const labels = castArray(networkLabel);

    return some(currentLabel => network[currentLabel] > 0, labels);
  }
);
