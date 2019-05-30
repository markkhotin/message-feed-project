export const START_NETWORK = "[network] Start";
export const END_NETWORK = "[network] End";
export const CLEAR_NETWORK = "[network] Clear";

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
