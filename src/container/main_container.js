import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTask from '../components/add_task/index'
import {Add_task} from "../actions/actions";

class MainContainer extends Component {
    render() {
        return (
            <div className='main_container'>
                <AddTask/>
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
        Add_task: (data) => dispatch(Add_task(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);