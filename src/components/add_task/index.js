import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import './style.css'


class AddTask extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const {open} = this.state;

        return (
            <div>
                <Button variant="fab" color="primary" aria-label="Add" onClick = {this.handleOpen}>
                    <AddIcon />
                </Button>
                <Modal open={open} onClose={this.handleClose} className='modal_container' style={{position:'relative'}}>
                    <form className='modal_form'>
                        <div className='modal_form_container'>
                            <div className='form_add_task_text'>
                                <span>Add task</span>
                            </div>
                            <div>
                                <TextField
                                    id="outlined-dense"
                                    label="Title"
                                    margin="dense"
                                    variant="outlined"
                                    />
                            </div>
                            <div>
                                <TextField
                                    id="standard-uncontrolled"
                                    label="Description"
                                    margin="normal"
                                />
                            </div>
                            <div className='form_button_container'>
                                <div >
                                    <Button variant="outlined" color="primary">
                                        Add
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" color="secondary" >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddTask;