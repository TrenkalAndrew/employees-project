import api from '../api';
import {
  ERROR_MESSAGE,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_INFO_START,
  FETCH_EMPLOYEE_INFO_SUCCESS,
  FETCH_EMPLOYEE_INFO_FAILURE,
  FETCH_CREATE_COMMENT_START,
  FETCH_CREATE_COMMENT_SUCCESS,
  FETCH_CREATE_COMMENT_FAILURE
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

export const createComment = (userId, title, text, phone) => dispatch => {
  dispatch(createCommentStart());

  api

    .createComment(userId, title, text, phone)
    .then(({ data }) => {
      const { success } = data;

      if (success) {
        dispatch(createCommentSuccess({id: userId, title, text, phone, date: new Date().getTime()}));
      } else {
        dispatch(createCommentFailure(data.message));
      }
    })
    .catch(_ => dispatch(createCommentFailure(ERROR_MESSAGE)));
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

export const getEmployeeByIdWithApi = (id, dispatch) => {
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
};
