import axios from 'axios';
import { BASE_URL, EMPLOYEE_INFO_URL, ALL_EMPLOYEES_URL } from '../const';

const api = axios.create({
  baseURL: BASE_URL,
});

const getEmployees = () => api.get(ALL_EMPLOYEES_URL);
const getEmployeeById = id => api.get(`${EMPLOYEE_INFO_URL}/${id}`);

const apis = {
  getEmployees,
  getEmployeeById,
};

export default apis;
