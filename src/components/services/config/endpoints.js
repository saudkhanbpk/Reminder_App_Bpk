import axios from "axios";


export const API_URL = process.env.REACT_APP_BASE_URL;
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});