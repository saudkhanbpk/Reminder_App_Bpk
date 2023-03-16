import axios from "axios";
import { API_URL } from "../config/EndPoint";

export function postFile(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}api/add`, data).then(async (response) => {
      resolve(response.data)

    }).catch((error) => {
      reject(error)
    })
  })
}

export function getFile(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}api/getFile`, data).then(async (response) => {
      resolve(response.data)

    }).catch((error) => {
      reject(error)
    })
  })
}

export function getAllLength(data) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}api/getAllLength`).then(async (response) => {
      resolve(response.data)

    }
    ).catch((error) => {
      reject(error)
    }
    )
  })
}

export function getAllFiles() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}api/getAllFiles`).then(async (response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    })
  })
}

export function deleteFile(payload) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}api/deleteFile`, payload).then(async (response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    })
  })
}
