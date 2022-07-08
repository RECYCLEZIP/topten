import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL + "/";

export async function getData(endpoint: string) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cGET 요청 ${serverUrl + endpoint}`, "color: #a25cd1;");
  }

  return axios.get(serverUrl + endpoint, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
}

export async function postData(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
    console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");
  }

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function aiPostData(endpoint: string, data: any) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
    console.log(`%cPOST 요청 데이터: ${data}`, "color: #296aba;");
  }

  return axios.post(serverUrl + endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function qnaPostData(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
    console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");
  }

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
}

export async function putData(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cPUT 요청: ${serverUrl + endpoint}`, "color: #296aba;");
    console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #296aba;");
  }

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
}

export async function delData(endpoint: string) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`%cDELETE 요청 ${serverUrl + endpoint}`, "color: #a25cd1;");
  }

  return axios.delete(serverUrl + endpoint, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
}
