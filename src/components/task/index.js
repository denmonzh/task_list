import React, {Component} from 'react';
import TaskForm from './task_form/index'
import Paper from '@material-ui/core/Paper';
import './style.css'
import TaskControl from './task_control/index'
import CheckTask from './check_task/index'
import Timer from './timer/index'
import {Draggable} from 'react-beautiful-dnd'


class Task extends Component {
    state = {
        readOnly: true
    };

    handleChangeRead = () => {
        const {readOnly} = this.state;
        this.setState({readOnly: !readOnly})
    };


    render() {
        const {item, Delete_task, Change_task, Check_Task, Start_timer, Stop_timer, general_timer, taskProcess} = this.props;
        const {readOnly} = this.state;


        return (
            <Draggable draggableId={item.id} index={this.props.index}>
                {
                    provider => (
                        <div
                            {...provider.draggableProps}
                            {...provider.dragHandleProps}
                            ref = {provider.innerRef}
                        >
                            <Paper className='main_task_container'>
                                <TaskForm
                                    item={item}
                                    readOnly={readOnly}
                                    handleChangeRead={this.handleChangeRead}
                                    Change_task={Change_task}
                                />
                                <TaskControl
                                    item={item}
                                    Delete_task={Delete_task}
                                    handleChangeRead={this.handleChangeRead}
                                />
                                <CheckTask
                                    item={item}
                                    Check_Task={Check_Task}
                                />
                                <Timer
                                    item={item}
                                    Start_timer={Start_timer}
                                    Stop_timer={Stop_timer}
                                    general_timer={general_timer}
                                    taskProcess={taskProcess}
                                />
                            </Paper>
                        </div>
                    )
                }
            </Draggable>
        );
    }
}

export default Task;