import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'

class WaitingTask extends Component {
    render() {
        return (
            <div className='main_waiting_container'>
                <div className='text_waiting'>
                    I am waiting the task
                </div>
                <div className='progress_waiting'>
                    <CircularProgress />
                </div>

            </div>
        );
    }
}

export default WaitingTask;