import {ADD_TASK, CHANGE_TASK, DELETE_TASK} from "./types";



export const Add_task = (data) => dispatch =>{
  dispatch({
      type: ADD_TASK,
      payload: data
  })
};

export const Delete_task = (id) => dispatch =>{
  dispatch({
      type: DELETE_TASK,
      payload: id
  })
};


export const Change_task = (data) => dispatch =>{
  dispatch({
      type:CHANGE_TASK,
      payload: data,
  })
};