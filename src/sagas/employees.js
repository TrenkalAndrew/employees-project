import {
    call,
    put
} from 'redux-saga/effects'

import {
    fetchEmployeesStart,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    fetchEmployeeInfoStart,
    fetchEmployeeInfoSuccess,
    fetchEmployeeInfoFailure
} from '../actions/employees'

import api from '../api'
import {
    ERROR_MESSAGE,
} from '../const';

export function* getEmployees() {
    try {
        yield put(fetchEmployeesStart());

        const resp = yield call(api.getEmployees);
        const {
            data,
            success
        } = resp.data;

        if (success) {
            yield put(fetchEmployeesSuccess(data))
            return {
                success: true
            }
        } else {
            yield put(fetchEmployeesFailure(data.message))
        }
    } catch (err) {
        yield put(fetchEmployeesFailure(ERROR_MESSAGE))
    }
}

export function* getEmployeeById({
    payload
}) {
    const {
        id,
        isFirstVisit
    } = payload;

    try {
        if (isFirstVisit) {
            const {
                success
            } = yield call(getEmployees)

            if (success) {
                yield put(fetchEmployeeInfoStart())

                const resp = yield call(api.getEmployeeById, id)

                const {
                    data,
                    success
                } = resp.data;

                if (success) {
                    yield put(fetchEmployeeInfoSuccess(data))
                } else {
                    yield put(fetchEmployeeInfoFailure(data.message))
                }
            }
        }
    } catch (error) {
        yield put(fetchEmployeeInfoFailure(ERROR_MESSAGE))
    }
}