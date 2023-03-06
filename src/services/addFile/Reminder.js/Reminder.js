import axios from "axios";
import { API_URL } from "../../config/EndPoint";


export function postReminder(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}api/sendReminder`, data).then(async (response) => {
      resolve(response.data)

    }).catch((error) => {
      reject(error)
    })
  })
}

export function getReminders(id) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}api/getReminders/${id}`).then(async (response) => {
      resolve(response.data)

    }).catch((error) => {
      reject(error)
    })
  })
}
