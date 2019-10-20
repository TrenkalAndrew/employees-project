import {FETCH_EMPLOYEES_START, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE} from '../const';

const initialState = {
    loading: false,
    error: false,
    items: []
};

export const employees = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_EMPLOYEES_START:
            return {...state, loading: true};
        case FETCH_EMPLOYEES_SUCCESS:
            return {loading: false, error: false, items: payload};
        case FETCH_EMPLOYEES_FAILURE:
            return {...state, loading: false, error: true};
        default:
            return state
    }
};