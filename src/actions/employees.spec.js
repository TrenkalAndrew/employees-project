import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { api } from '../api';
import MockAdapter from 'axios-mock-adapter';

import {
  ERROR_MESSAGE,
  BASE_URL,
  ALL_EMPLOYEES_URL,
  EMPLOYEE_CREATE_COMMENT_URL,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_INFO_START,
  FETCH_EMPLOYEE_INFO_SUCCESS,
  FETCH_EMPLOYEE_INFO_FAILURE,
  FETCH_CREATE_COMMENT_START,
  FETCH_CREATE_COMMENT_SUCCESS,
  FETCH_CREATE_COMMENT_FAILURE,
  EMPLOYEE_INFO_URL,
} from '../const';

import {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  fetchEmployeeInfoStart,
  fetchEmployeeInfoSuccess,
  fetchEmployeeInfoFailure,
  createComment,
  createCommentStart,
  createCommentSuccess,
  createCommentFailure,
  getEmployees, getEmployeeById,
} from './employees';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
        payload: { success: true },
      };

      expect(fetchEmployeesSuccess(action.payload)).toEqual(action);
    });

    it('fetchEmployeesFailure', () => {
      const action = {
        type: FETCH_EMPLOYEES_FAILURE,
        payload: ERROR_MESSAGE,
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
        payload: { success: true },
      };

      expect(fetchEmployeeInfoSuccess(action.payload)).toEqual(action);
    });

    it('fetchEmployeeInfoSuccess', () => {
      const action = {
        type: FETCH_EMPLOYEE_INFO_FAILURE,
        payload: ERROR_MESSAGE,
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
        payload: { success: true },
      };

      expect(createCommentSuccess(action.payload)).toEqual(action);
    });

    it('createCommentFailure', () => {
      const action = {
        type: FETCH_CREATE_COMMENT_FAILURE,
        payload: ERROR_MESSAGE,
      };

      expect(createCommentFailure(action.payload)).toEqual(action);
    });
  });

  describe('Async actions', () => {
    it('getEmployees with success', () => {
      const mockAxios = new MockAdapter(api);
      const data = { success: true, data: [1, 2, 3] };

      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_SUCCESS,
          payload: [1, 2, 3],
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployees()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployees with success', () => {
      const mockAxios = new MockAdapter(api);
      const data = { success: true, data: [1, 2, 3] };

      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_SUCCESS,
          payload: [1, 2, 3],
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployees()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployees with failure', () => {
      const mockAxios = new MockAdapter(api);
      const data = { success: false, message: ERROR_MESSAGE };

      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployees()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployeeById with success (first visit)', () => {
      const mockAxios = new MockAdapter(api);
      const id = Math.floor(Math.random() * 10);
      const data = { success: true, data: {id} };

      mockAxios.onGet(`${BASE_URL}${EMPLOYEE_INFO_URL}/${id}`).reply(200, data);
      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(200, { success: true, data: [1, 2, 3] });

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_SUCCESS,
          payload: [1, 2, 3],
        },
        {
          type: FETCH_EMPLOYEE_INFO_START,
        },
        {
          type: FETCH_EMPLOYEE_INFO_SUCCESS,
          payload: {id},
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployeeById(id, true)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployeeById with failure on employees request (first visit)', () => {
      const mockAxios = new MockAdapter(api);
      const id = Math.floor(Math.random() * 10);
      const data = { success: true, data: {id} };

      mockAxios.onGet(`${BASE_URL}${EMPLOYEE_INFO_URL}/${id}`).reply(200, data);
      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(200, { success: false, message: ERROR_MESSAGE });

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployeeById(id, true)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployeeById with failure on employees request - 500 error (first visit)', () => {
      const mockAxios = new MockAdapter(api);
      const id = Math.floor(Math.random() * 10);
      const data = { success: true, data: {id} };

      mockAxios.onGet(`${BASE_URL}${EMPLOYEE_INFO_URL}/${id}`).reply(200, data);
      mockAxios.onGet(`${BASE_URL}${ALL_EMPLOYEES_URL}`).reply(500);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEES_START,
        },
        {
          type: FETCH_EMPLOYEES_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployeeById(id, true)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployeeById with success (not first visit)', () => {
      const mockAxios = new MockAdapter(api);
      const id = Math.floor(Math.random() * 10);
      const data = { success: true, data: {id} };

      mockAxios.onGet(`${BASE_URL}${EMPLOYEE_INFO_URL}/${id}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEE_INFO_START,
        },
        {
          type: FETCH_EMPLOYEE_INFO_SUCCESS,
          payload: {id},
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployeeById(id, false)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('getEmployeeById with failure (not first visit)', () => {
      const mockAxios = new MockAdapter(api);
      const id = Math.floor(Math.random() * 10);
      const data = { success: false, message: ERROR_MESSAGE };

      mockAxios.onGet(`${BASE_URL}${EMPLOYEE_INFO_URL}/${id}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_EMPLOYEE_INFO_START,
        },
        {
          type: FETCH_EMPLOYEE_INFO_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(getEmployeeById(id, false)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('createComment with failure', () => {
      const mockAxios = new MockAdapter(api);
      const data = { success: false, message: ERROR_MESSAGE };

      mockAxios.onPost(`${BASE_URL}${EMPLOYEE_CREATE_COMMENT_URL}`).reply(200, data);

      const expectedActions = [
        {
          type: FETCH_CREATE_COMMENT_START,
        },
        {
          type: FETCH_CREATE_COMMENT_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(createComment(Math.floor(Math.random() * 10), 'label', 'text', 'phone')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('createComment with failure - 500 error', () => {
      const mockAxios = new MockAdapter(api);

      mockAxios.onPost(`${BASE_URL}${EMPLOYEE_CREATE_COMMENT_URL}`).reply(500);

      const expectedActions = [
        {
          type: FETCH_CREATE_COMMENT_START,
        },
        {
          type: FETCH_CREATE_COMMENT_FAILURE,
          payload: ERROR_MESSAGE,
        },
      ];

      const store = mockStore({});

      return store.dispatch(createComment(Math.floor(Math.random() * 10), 'label', 'text', 'phone')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
