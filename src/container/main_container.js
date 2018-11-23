import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTask from '../components/add_task/index'
import {Add_task} from "../actions/actions";
import {Delete_task} from "../actions/actions";
import {Change_task} from "../actions/actions";
import {Check_Task} from '../actions/actions'
import {Start_timer} from '../actions/actions'
import {Stop_timer} from '../actions/actions'
import Task from '../components/task/index'

class MainContainer extends Component {
    render() {

        const {Add_task, Delete_task, Change_task, Check_Task, Start_timer, Stop_timer} = this.props;
        const {task_form,timer,taskProcess} = this.props;




        return (
            <div className='main_container'>
                <div>
                    <AddTask
                        Add_task = {Add_task}
                    />
                </div>
                <div>
                    {
                        task_form.map((item, index)=>(
                            <div key={item.id}>
                                <Task
                                    item = {item}
                                    Delete_task = {Delete_task}
                                    Change_task = {Change_task}
                                    Check_Task = {Check_Task}
                                    Start_timer = {Start_timer}
                                    Stop_timer = {Stop_timer}
                                    general_timer = {timer}
                                    taskProcess = {taskProcess}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task_form: state.task_action.task,
    timer: state.task_action.timer,
    taskProcess: state.task_action.taskProcess
});



const mapDispatchToProps = dispatch => {
    return {
        Add_task: (data) => dispatch(Add_task(data)),
        Delete_task: (id) => dispatch(Delete_task(id)),
        Change_task: (data) => dispatch(Change_task(data)),
        Check_Task: (id) => dispatch(Check_Task(id)),
        Start_timer: (id) => dispatch(Start_timer(id)),
        Stop_timer: (time, id) => dispatch(Stop_timer(time, id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);