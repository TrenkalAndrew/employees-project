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

import { fetchEmployeesStart, fetchEmployeesSuccess, fetchEmployeesFailure, fetchEmployeeInfoStart, fetchEmployeeInfoSuccess, fetchEmployeeInfoFailure, createCommentStart, createCommentSuccess, createCommentFailure } from './employees';

describe('Employees actions', () => {
  describe('Sync actions', () => {
    it('fetchEmployeesStart', () => {
      const action = {
        type: FETCH_EMPLOYEES_START,
      };

      expect(fetchEmployeesStart()).toEqual(action);
    });

    it('fetchEmployeesSuccess', () => {
      const action = {
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: {success: true}
      };

      expect(fetchEmployeesSuccess(action.payload)).toEqual(action);
    });

    it('fetchEmployeesFailure', () => {
      const action = {
        type: FETCH_EMPLOYEES_FAILURE,
        payload: ERROR_MESSAGE
      };

      expect(fetchEmployeesFailure(action.payload)).toEqual(action);
    });

    it('fetchEmployeeInfoStart', () => {
      const action = {
        type: FETCH_EMPLOYEE_INFO_START,
      };

      expect(fetchEmployeeInfoStart()).toEqual(action);
    });

    it('fetchEmployeeInfoSuccess', () => {
      const action = {
        type: FETCH_EMPLOYEE_INFO_SUCCESS,
        payload: {success: true}
      };

      expect(fetchEmployeeInfoSuccess(action.payload)).toEqual(action);
    });

    it('fetchEmployeeInfoSuccess', () => {
      const action = {
        type: FETCH_EMPLOYEE_INFO_FAILURE,
        payload: ERROR_MESSAGE
      };

      expect(fetchEmployeeInfoFailure(action.payload)).toEqual(action);
    });

    it('createCommentStart', () => {
      const action = {
        type: FETCH_CREATE_COMMENT_START,
      };

      expect(createCommentStart()).toEqual(action);
    });

    it('createCommentSuccess', () => {
      const action = {
        type: FETCH_CREATE_COMMENT_SUCCESS,
        payload: {success: true}
      };

      expect(createCommentSuccess(action.payload)).toEqual(action);
    });

    it('createCommentFailure', () => {
      const action = {
        type: FETCH_CREATE_COMMENT_FAILURE,
        payload: ERROR_MESSAGE
      };

      expect(createCommentFailure(action.payload)).toEqual(action);
    });
  });
});
