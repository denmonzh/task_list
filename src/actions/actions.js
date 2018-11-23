import {ADD_TASK, CHANGE_TASK, CHECK_TASK, DELETE_TASK, START_TIMER, STOP_TIMER, CHANGE_PRIORITY} from "./types";


export const Add_task = (data) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: data
    })
};

export const Delete_task = (id) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload: id
    })
};


export const Change_task = (data) => dispatch => {
    dispatch({
        type: CHANGE_TASK,
        payload: data,
    })
};


export const Check_Task = (id) => dispatch => {
    dispatch({
        type: CHECK_TASK,
        payload: id
    })
};


export const Start_timer = (id) => dispatch =>{
  dispatch({
      type: START_TIMER,
      payload: id
  })
};


export const Stop_timer = (time, id) => dispatch =>{
  dispatch({
      type: STOP_TIMER,
      payload: time,
      id: id
  })
};

export const Change_Priority = (new_data) => dispatch =>{
   dispatch({
       type: CHANGE_PRIORITY,
       payload: new_data
   })
} ;