import React, {Component} from 'react';
import TaskForm from './task_form/index'
import Paper from '@material-ui/core/Paper';
import './style.css'
import TaskControl from './task_control/index'
import CheckTask from './check_task/index'
import Timer from './timer/index'

class Task extends Component {
    state = {
        readOnly: true
    };

    handleChangeRead = ()=> {
        const {readOnly} = this.state;
        this.setState({readOnly : !readOnly})
    };


    render() {
        const {item, Delete_task, Change_task, Check_Task} = this.props;
        const {readOnly} = this.state;


        return (
            <Paper className='main_task_container'>
                <TaskForm
                    item={item}
                    readOnly = {readOnly}
                    handleChangeRead = {this.handleChangeRead}
                    Change_task = {Change_task}
                />
                <TaskControl
                    item = {item}
                    Delete_task = {Delete_task}
                    handleChangeRead = {this.handleChangeRead}
                />
                <CheckTask
                    item = {item}
                    Check_Task = {Check_Task}
                />
                <Timer

                />
            </Paper>
        );
    }
}

export default Task;