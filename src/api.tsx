import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL + "/";

export async function getData(endpoint: string, params = "") {
  console.log(
    `%cGET 요청 ${serverUrl + endpoint + "/" + params}`,
    "color: #a25cd1;",
  );

  return axios.get(serverUrl + endpoint + "/" + params);
}
