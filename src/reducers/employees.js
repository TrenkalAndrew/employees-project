import {
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

const initialState = {
  loading: false,
  error: false,
  items: [],
};

export const employees = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EMPLOYEES_START:
      return { ...state, loading: true };
    case FETCH_EMPLOYEES_SUCCESS:
      return { loading: false, error: false, items: payload };
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, loading: false, error: true };
    case FETCH_EMPLOYEE_INFO_START:
      return { ...state, loading: true };
    case FETCH_EMPLOYEE_INFO_SUCCESS:
      const employeeIndex = state.items.findIndex(
        ({ id }) => id === Number(payload.id)
      );
      const newItems = [...state.items];
      newItems[employeeIndex] = payload;

      return { loading: false, error: false, items: newItems };
    case FETCH_EMPLOYEE_INFO_FAILURE:
      return { ...state, loading: false, error: true };
    case FETCH_CREATE_COMMENT_START:
      return { ...state, loading: true };
    case FETCH_CREATE_COMMENT_SUCCESS:
      const newState = {...state};
      const index = state.items.findIndex(
        ({ id }) => id === Number(payload.id)
      );
      console.warn(newState.items[index], index, payload.id);
      newState.items[index].comments.push({title: payload.title, text: payload.text, phone: payload.phone, date: payload.date});

      return newState;
    case FETCH_CREATE_COMMENT_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
