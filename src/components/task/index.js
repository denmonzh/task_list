import React, {Component} from 'react';
import TaskForm from './task_form/index'
import Paper from '@material-ui/core/Paper';
import './style.css'
import TaskControl from './task_control/index'

class Task extends Component {
    state = {
        readOnly: true
    };

    handleChangeRead = ()=> {
        const {readOnly} = this.state;
        this.setState({readOnly : !readOnly})
    };


    render() {
        const {item, Delete_task} = this.props;
        const {readOnly} = this.state;


        return (
            <Paper className='main_task_container'>
                <TaskForm
                    item={item}
                    readOnly = {readOnly}
                    handleChangeRead = {this.handleChangeRead}
                />
                <TaskControl
                    item = {item}
                    Delete_task = {Delete_task}
                    handleChangeRead = {this.handleChangeRead}
                />
            </Paper>
        );
    }
}

export default Task;