import {ADD_TASK, CHANGE_TASK, DELETE_TASK, CHECK_TASK, START_TIMER, STOP_TIMER, CHANGE_PRIORITY} from "../actions/types";

const initialState = {
    task: [],
    taskProcess: null,
    timer: true,
};


export default function TaskReducer(state = initialState, actions) {
    switch (actions.type) {
        case ADD_TASK:
            const id = state.task.length + 1;
            actions.payload.id  = id;
            return {
                ...state,
                task:[...state.task, actions.payload]
            };

        case DELETE_TASK:
            const find_delete_index  = state.task.findIndex(element => element.id === actions.payload);
            state.task.splice(find_delete_index, 1);
            return{
                ...state,
                task: [...state.task]
            };

        case CHANGE_TASK:

            const find_change_index = state.task.findIndex(element => element.id === actions.payload.id);
            state.task.splice(find_change_index, 1, actions.payload);
            return{
                ...state,
                task: [...state.task]
            };
        case CHECK_TASK:
            const find_index_status = state.task.findIndex(element => element.id === actions.payload);
            state.task[find_index_status].status = true;
            return{
                ...state,
                task: [...state.task]
            };

        case START_TIMER:
            const find_index_start = state.task.findIndex(element => element.id === actions.payload);
            state.task[find_index_start].timer = true;
            state.taskProcess = actions.payload;
            return{
                ...state,
                task:[...state.task],
                timer: false,
                taskProcess: state.taskProcess,
                task_time_process: find_index_start
            };
        case  STOP_TIMER:
            const find_index_stop = state.task.findIndex(element => element.id === actions.id);
            state.task[find_index_stop].time = actions.payload;
            state.task[find_index_stop].timer = false;
            return{
                ...state,
                task: [...state.task],
                timer: true,
                taskProcess: null,
                task_time_process: null
            };
        case CHANGE_PRIORITY:

            state.task = actions.payload;
            return{
                ...state,
                task:[...state.task],
            };
        default:
            return {
                ...state
            }
    }
}