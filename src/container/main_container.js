import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTask from '../components/add_task/index'
import {Add_task} from "../actions/actions";
import {Delete_task} from "../actions/actions";
import Task from '../components/task/index'

class MainContainer extends Component {
    render() {

        const {Add_task, Delete_task} = this.props;
        const {task_form} = this.props;



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
    time: state.task_action.timer
});



const mapDispatchToProps = dispatch => {
    return {
        Add_task: (data) => dispatch(Add_task(data)),
        Delete_task: (id) => dispatch(Delete_task(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);