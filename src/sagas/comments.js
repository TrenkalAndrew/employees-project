import {
    call,
    put
} from 'redux-saga/effects';

import {
    createCommentStart,
    createCommentSuccess,
    createCommentFailure
} from '../actions/employees'

import api from '../api'
import {
    ERROR_MESSAGE,
} from '../const';

export function* createComment({
    payload
}) {
    try {
        const {
            userId,
            title,
            text,
            phone
        } = payload

        yield put(createCommentStart())

        const resp = yield call(api.createComment, userId, title, text, phone)

        const {
            success,
            data
        } = resp.data

        if (success) {
            yield put(createCommentSuccess({
                id: userId,
                title,
                text,
                phone,
                date: new Date().getTime()
            }))
        } else {
            yield put(createCommentFailure(data.message))
        }
    } catch (error) {
        yield put(createCommentFailure(ERROR_MESSAGE))
    }
}