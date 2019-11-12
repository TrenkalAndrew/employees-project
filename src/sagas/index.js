import {
    takeLatest,
    all
} from 'redux-saga/effects'

import {
    GET_EMPLOYEES,
    GET_EMPLOYEE_BY_ID,
    CREATE_COMMENT
} from '../const'

import {
    getEmployees,
    getEmployeeById,
} from '../sagas/employees'

import {
    createComment
} from '../sagas/comments'

export default function* rootSaga() {
    yield all([
        yield takeLatest(GET_EMPLOYEES, getEmployees),
            yield takeLatest(GET_EMPLOYEE_BY_ID, getEmployeeById),
                yield takeLatest(CREATE_COMMENT, createComment)
    ])
}