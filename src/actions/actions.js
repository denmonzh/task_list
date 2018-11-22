import {ADD_TASK, CHANGE_TASK, DELETE_TASK} from "./types";



export const Add_task = (data) => dispatch =>{
  dispatch({
      actions: ADD_TASK,
      payload: data
  })
};

