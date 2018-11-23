import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {ReactComponent as EditIcon} from '../icon/edit.svg'
import './style.css'

class TaskControl extends Component {
    render() {
        const {handleChangeRead, Delete_task, item, readOnly} = this.props;
        return (
            <div className='form_control_container'>
                <div>
                    {
                        readOnly ?
                            (
                                <Button
                                    variant="fab"
                                    color="secondary"
                                    aria-label="Edit"
                                    onClick = {handleChangeRead}
                                >
                                    <EditIcon/>
                                </Button>
                            ) : null
                    }
                </div>
                <div>
                    <Button
                        variant="fab"
                        aria-label="Delete"
                        onClick = {() => Delete_task(item.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

export default TaskControl;