import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL + "/";

export async function getData(endpoint: string) {
  console.log(`%cGET 요청 ${serverUrl + endpoint}`, "color: #a25cd1;");

  return axios.get(serverUrl + endpoint, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
}

export async function postData(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function putData(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${serverUrl + endpoint}`, "color: #296aba;");
  console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function delData(endpoint: string) {
  console.log(`%cDELETE 요청 ${serverUrl + endpoint}`, "color: #a25cd1;");

  return axios.delete(serverUrl + endpoint);
}
