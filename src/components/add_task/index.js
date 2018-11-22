import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import './style.css'


class AddTask extends Component {
    state = {
        id: 0,
        title: '',
        description: '',
        open: false,
    };

    handleOnChange = (e) =>{
        this.setState({
            [e.target.name]:[e.target.value]
        })
    };


    handleAddTask = (e) =>{
        e.preventDefault();
        if (this.state.title === '' || this.state.description === ''){
            alert('Form is empty! ')
        } else {
            const {Add_task} = this.props;
            const data = {
                id: this.state.id,
                title: e.target.title.value,
                description: e.target.description.value,
                time: null,
                status: false,
                timer: false
            };
            Add_task(data);
            this.setState({
                title: '',
                description: '',
                open:false
            })
        }
    };

    handleOpen = () => {
        const {open} = this.state;
        this.setState({ open: !open });
    };



    render() {
        const {open, title, description} = this.state;

        return (
            <div>
                <div className='add_task_button'>
                    <Button variant="fab" color="primary" aria-label="Add" onClick = {this.handleOpen} className='add_button'>
                        <AddIcon />
                    </Button>
                </div>
                <Modal open={open} onClose={this.handleOpen} className='modal_container' style={{position:'relative'}}>
                    <form className='modal_form' onSubmit={this.handleAddTask}>
                        <div className='modal_form_container'>
                            <div className='form_add_task_text'>
                                <span>Add task</span>
                            </div>
                            <div>
                                <TextField
                                    name='title'
                                    id="outlined-dense"
                                    label="Title"
                                    margin="dense"
                                    variant="outlined"
                                    value={title}
                                    onChange={this.handleOnChange}
                                    />
                            </div>
                            <div>
                                <TextField
                                    name='description'
                                    id="standard-uncontrolled"
                                    label="Description"
                                    margin="normal"
                                    value={description}
                                    onChange={this.handleOnChange}
                                />
                            </div>
                            <div className='form_button_container'>
                                <div >
                                    <Button variant="outlined" color="primary" type='submit'>
                                        Add
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" color="secondary" onClick = {this.handleOpen}>
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