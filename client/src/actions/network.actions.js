const label = 'network';
export const START_NETWORK = `[${label}] Start`;
export const END_NETWORK = `[${label}] End`;
export const CLEAR_NETWORK = `[${label}] Clear`;

export const startNetwork = networkLabel => ({
  type: START_NETWORK,
  payload: {
    networkLabel
  }
});

export const endNetwork = networkLabel => ({
  type: END_NETWORK,
  payload: {
    networkLabel
  }
});

export const clearNetwork = () => ({
  type: CLEAR_NETWORK
});
