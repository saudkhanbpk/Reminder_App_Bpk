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
