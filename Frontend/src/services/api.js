import axios from "axios";

const API = axios.create({

  baseURL: "https://task-management-system-production-dceb.up.railway.app/"
});

export default API;