import axios from "axios";
import { BASE_URL } from "../const";

const api = axios.create({
    baseURL: BASE_URL
});

const getEmployees = () => api.get("/employees");

const apis = {
    getEmployees
};

export default apis;
