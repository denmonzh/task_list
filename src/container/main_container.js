import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTask from '../components/add_task/index'
import {Add_task} from "../actions/actions";
import {Delete_task} from "../actions/actions";
import {Change_task} from "../actions/actions";
import {Check_Task} from '../actions/actions'
import {Start_timer} from '../actions/actions'
import {Stop_timer} from '../actions/actions'
import {Change_Priority} from '../actions/actions'
import {reorder} from "./reorder/reorder";
import {Unmount_task} from '../actions/actions'
import Task from '../components/task/index'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import WaitingTask from '../components/waiting_the_task/index'

import './style.css'

class MainContainer extends Component {


    onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            this.props.task_form,
            result.source.index,
            result.destination.index
        );
        console.log(result.source.index, result.destination.index);
        const {Change_Priority} = this.props;
        Change_Priority(items)
    };

    render() {

        const {Add_task, Delete_task, Change_task, Check_Task, Start_timer, Stop_timer, Unmount_task} = this.props;
        const {task_form, timer, taskProcess, task_time_process} = this.props;

        return (
            <div className='main_container'>
                <div className='add_task_container'>
                    <AddTask
                        Add_task={Add_task}
                    />
                    {
                        task_form.length === 0 ? null :
                            (
                                <div className='task_list_title_text'>
                                    <span>Task List</span>
                                </div>
                            )
                    }
                </div>
                {
                    task_form.length === 0 ?
                        (
                            <WaitingTask/>
                        ) :
                        (
                            <DragDropContext onDragEnd={this.onDragEnd}>
                                <Droppable droppableId='1'>
                                    {
                                        (provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {
                                                    task_form.map((item, index) => (
                                                        <div key={item.id}>
                                                            <Task
                                                                index={index}
                                                                item={item}
                                                                Delete_task={Delete_task}
                                                                Change_task={Change_task}
                                                                Check_Task={Check_Task}
                                                                Start_timer={Start_timer}
                                                                Stop_timer={Stop_timer}
                                                                Unmount_task = {Unmount_task}
                                                                general_timer={timer}
                                                                taskProcess={taskProcess}
                                                                task_time_process={task_time_process}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }
                                </Droppable>
                            </DragDropContext>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task_form: state.task_action.task,
    timer: state.task_action.timer,
    taskProcess: state.task_action.taskProcess,
});


const mapDispatchToProps = dispatch => {
    return {
        Add_task: (data) => dispatch(Add_task(data)),
        Delete_task: (id) => dispatch(Delete_task(id)),
        Change_task: (data) => dispatch(Change_task(data)),
        Check_Task: (id) => dispatch(Check_Task(id)),
        Start_timer: (id) => dispatch(Start_timer(id)),
        Stop_timer: (time, id) => dispatch(Stop_timer(time, id)),
        Change_Priority: (new_data) => dispatch(Change_Priority(new_data)),
        Unmount_task: ()=> dispatch(Unmount_task())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);