export const LOGO_TITLE = 'EMPLOYEE PROJECT';
export const BASE_URL = 'http://6020j.mocklab.io/';
export const ALL_EMPLOYEES_URL = '/employees';
export const EMPLOYEE_INFO_URL = '/employee';
export const EMPLOYEE_CREATE_COMMENT_URL = '/create-comment';
export const ERROR_MESSAGE =
  'Something was going wrong! Please, try again later...';

//actions and reducers
export const FETCH_EMPLOYEES_START = 'FETCH_EMPLOYEES_START';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';

export const FETCH_EMPLOYEE_INFO_START = 'FETCH_EMPLOYEE_INFO_START';
export const FETCH_EMPLOYEE_INFO_SUCCESS = 'FETCH_EMPLOYEE_INFO_SUCCESS';
export const FETCH_EMPLOYEE_INFO_FAILURE = 'FETCH_EMPLOYEE_INFO_FAILURE';

export const FETCH_CREATE_COMMENT_START = 'FETCH_CREATE_COMMENT_START';
export const FETCH_CREATE_COMMENT_SUCCESS = 'FETCH_CREATE_COMMENT_SUCCESS';
export const FETCH_CREATE_COMMENT_FAILURE = 'FETCH_CREATE_COMMENT_FAILURE';

//validation rules

export const REQUIRED_RULE = 'required';
export const MIN_LENGTH_RULE = 'minLength';
export const MAX_LENGTH_RULE = 'maxLength';
export const MATCH_REGEXP_RULE = 'match';

export const REQUIRED_ERROR_MESSAGE = 'This field is required';
export const MIN_LENGTH_ERROR_MESSAGE = 'This field should more than';
export const MAX_LENGTH_ERROR_MESSAGE = 'This field should less than';
export const MATCH_RULE_ERROR_MESSAGE = 'This field can only contain this symbols -';
