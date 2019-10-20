import api from '../api';
import {
  ERROR_MESSAGE,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_INFO_START,
  FETCH_EMPLOYEE_INFO_SUCCESS,
  FETCH_EMPLOYEE_INFO_FAILURE,
} from '../const';

export const getEmployees = dispatch => {
  dispatch(fetchEmployeesStart());

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

export const getEmployeeById = (id, isFirstVisit) => dispatch => {
  //Если пользователь перезагрузил страницу, то необходимо загрузить достаточные данные для карусели, после чего подгрузить данные для карточки
  if (isFirstVisit) {
    dispatch(fetchEmployeesStart());

    api
      .getEmployees()
      .then(async ({ data }) => {
        const { success } = data;

        if (success) {
          dispatch(fetchEmployeesSuccess(data.data));

          dispatch(fetchEmployeeInfoStart());

          getEmployeeByIdWithApi(id, dispatch);
        } else {
          dispatch(fetchEmployeesFailure(data.message));
        }
      })
      .catch(_ => dispatch(fetchEmployeesFailure(ERROR_MESSAGE)));
  } else {
    dispatch(fetchEmployeeInfoStart());

    getEmployeeByIdWithApi(id, dispatch);
  }
};

const fetchEmployeesStart = () => ({
  type: FETCH_EMPLOYEES_START,
});

const fetchEmployeesSuccess = employees => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

const fetchEmployeesFailure = err => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: err,
});

const fetchEmployeeInfoStart = () => ({
  type: FETCH_EMPLOYEE_INFO_START,
});

const fetchEmployeeInfoSuccess = employee => ({
  type: FETCH_EMPLOYEE_INFO_SUCCESS,
  payload: employee,
});

const fetchEmployeeInfoFailure = err => ({
  type: FETCH_EMPLOYEE_INFO_FAILURE,
  payload: err,
});

const getEmployeeByIdWithApi = (id, dispatch) => {
  api
    .getEmployeeById(id)
    .then(({ data }) => {
      const { success } = data;

      if (success) {
        dispatch(fetchEmployeeInfoSuccess(data.data));
      } else {
        dispatch(fetchEmployeeInfoFailure(data.message));
      }
    })
    .catch(fetchEmployeeInfoFailure(ERROR_MESSAGE));
}
