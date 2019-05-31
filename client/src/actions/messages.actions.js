const label = "main";
export const SUBMIT_MESSAGE = `[${label}] Submit message`;
export const SET_MESSAGE = `[${label}] Set message`;

export const setMessage = data => ({
  type: SET_MESSAGE,
  payload: {
    data
  }
});

export const submitMessage = message => ({
  type: SUBMIT_MESSAGE,
  payload: {
    data: message,
    networkLabel: label,
    method: "POST",
    path: `api/submitMessage`,
    onSuccess: setMessage
  },
  meta: {
    api: true
  }
});
