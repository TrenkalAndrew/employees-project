import axios from 'axios';
import { BASE_URL, EMPLOYEE_INFO_URL, ALL_EMPLOYEES_URL, EMPLOYEE_CREATE_COMMENT_URL } from '../const';

const api = axios.create({
  baseURL: BASE_URL,
});

const getEmployees = () => api.get(ALL_EMPLOYEES_URL);
const getEmployeeById = id => api.get(`${EMPLOYEE_INFO_URL}/${id}`);
const createComment = (userId, label, text, phone) => api.post(EMPLOYEE_CREATE_COMMENT_URL, {id: userId, label, text, phone});

const apis = {
  getEmployees,
  getEmployeeById,
  createComment
};

export default apis;
