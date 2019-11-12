import {
  GET_EMPLOYEES,
  GET_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_INFO_START,
  FETCH_EMPLOYEE_INFO_SUCCESS,
  FETCH_EMPLOYEE_INFO_FAILURE,
  FETCH_CREATE_COMMENT_START,
  FETCH_CREATE_COMMENT_SUCCESS,
  FETCH_CREATE_COMMENT_FAILURE,
  CREATE_COMMENT
} from '../const';

export const fetchEmployeesStart = () => ({
  type: FETCH_EMPLOYEES_START,
});

export const fetchEmployeesSuccess = employees => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const fetchEmployeesFailure = err => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: err,
});

export const fetchEmployeeInfoStart = () => ({
  type: FETCH_EMPLOYEE_INFO_START,
});

export const fetchEmployeeInfoSuccess = employee => ({
  type: FETCH_EMPLOYEE_INFO_SUCCESS,
  payload: employee,
});

export const fetchEmployeeInfoFailure = err => ({
  type: FETCH_EMPLOYEE_INFO_FAILURE,
  payload: err,
});

export const createCommentStart = () => ({
  type: FETCH_CREATE_COMMENT_START,
});

export const createCommentSuccess = comment => ({
  type: FETCH_CREATE_COMMENT_SUCCESS,
  payload: comment,
});

export const createCommentFailure = err => ({
  type: FETCH_CREATE_COMMENT_FAILURE,
  payload: err,
});

export const getEmployees = () => ({
  type: GET_EMPLOYEES,
});

export const getEmployeeById = (id, isFirstVisit) => ({
  type: GET_EMPLOYEE_BY_ID,
  payload: {
    id,
    isFirstVisit
  }
})

export const createComment = (userId, title, text, phone) => ({
  type: CREATE_COMMENT,
  payload: {
    userId,
    title,
    text,
    phone
  }
})