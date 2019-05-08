import * as types from '../actions/actionsTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            debugger;
            return [...state, { ...action.course }];
        default:
            return state;
    }
}