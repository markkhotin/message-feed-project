const label = "main";
export const SUBMIT_MESSAGE = `[${label}] Submit message`;
export const SET_MESSAGE = `[${label}] Set message`;
export const FETCH_MESSAGES = `[${label}] Fetch messages`;
export const SET_MESSAGES = `[${label}] Set messages`;

const setMessage = message => ({
  type: SET_MESSAGE,
  payload: { message }
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

export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
  payload: {
    networkLabel: label,
    method: "GET",
    path: `api/getMessages`,
    onSuccess: setMessages
  },
  meta: {
    api: true
  }
});

const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: { messages }
});
