import api from '../api';
import {
  ERROR_MESSAGE,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
} from '../const';

export const getEmployees = dispatch => {
  dispatch(fetchEmployeesStart);

  api
    .getEmployees()
    .then(({ data }) => {
      const { success } = data;

      if (success) {
        dispatch(fetchEmployeesSuccess(data.data));
      } else {
        dispatch(fetchEmployeesFailure(data.message));
      }
    })
    .catch(_ => dispatch(fetchEmployeesFailure(ERROR_MESSAGE)));
};

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
