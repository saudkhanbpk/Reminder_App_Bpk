import axios from "axios"
import { API_URL } from "../config/endpoints"

export function signUp(formdata) {
    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}api/register`, formdata)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}
export  function userLogin (data){
  return new Promise((resolve,reject)=>{
    axios.post (`${API_URL}api/login`,data)
    .then((response)=>{
        resolve(response.data);
    })
    .catch((error)=>{
        reject(error);
    })
  })  
}