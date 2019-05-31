import axios from "axios";

const request = ({ method = "GET", url, data = null, headers = {} }) => {
  const request = axios({
    url,
    method,
    data,
    headers
  });

  return request.then(data => data);
};

export default request;
