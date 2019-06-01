const label = "main";
export const SUBMIT_MESSAGE = `[${label}] Submit message`;
export const SET_MESSAGE = `[${label}] Set message`;
export const FETCH_MESSAGES = `[${label}] Fetch messages`;
export const SET_MESSAGES = `[${label}] Set messages`;
export const SET_FILTER_TERM = `[${label}] Set filter term`;
export const SET_ERROR = `[${label}] Set error`;
export const CLEAR_ERROR = `[${label}] Clear error`;

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
    onSuccess: setMessage,
    onError: setError
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
    onSuccess: setMessages,
    onError: setError
  },
  meta: {
    api: true
  }
});

const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: { messages }
});

export const setFilterTerm = filterTerm => ({
  type: SET_FILTER_TERM,
  payload: { filterTerm }
});

export const setError = error => ({
  type: SET_ERROR,
  payload: { error }
});

export const clearError = () => ({
  type: CLEAR_ERROR
});
