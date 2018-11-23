import React from 'react'
import Button from '@material-ui/core/Button';
import './style.css'

const CheckTask = props => (
    <div className='preformed_completed_container'>
        {
            !props.item.status ?
                (
                    <div>
                        <Button variant="contained" color="secondary" onClick={() => props.Check_Task(props.item.id)}>
                            PERFORMED
                        </Button>
                    </div>
                ) :
                (
                    <div>
                        <Button variant="contained" color="primary">
                            COMPLETED
                        </Button>
                    </div>
                )
        }
    </div>
);


export default CheckTask;