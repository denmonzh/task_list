import {ADD_TASK, CHANGE_TASK, DELETE_TASK} from "../actions/types";

const initialState = {
    task: [],
    timer: false
};


export default function TaskReducer(state = initialState, actions) {
    switch (actions.type) {
        case ADD_TASK:
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }
}