import axios from "axios";

export const api = axios.create({
    baseURL: "https://my-task-boasrd.onrender.com"
})