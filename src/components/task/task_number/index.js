import React from 'react';
import './style.css'

const TaskNumber = props =>(
  <div className='task_number_container'>
      <span>{props.index + 1}</span>
  </div>
);


export default TaskNumber;