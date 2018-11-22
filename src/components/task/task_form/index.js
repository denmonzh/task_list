import React, {Component} from 'react';
import './style.css'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

class TaskForm extends Component {
    state = {
        title: this.props.item.title,
        description: this.props.item.description
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    };

    render() {

        const {title, description} = this.state;
        const {readOnly} = this.props;

        return (
            <form className='main_task_form_container'>
                <div className='title_form_container'>
                    <input
                        value={title}
                        className='title_task_form'
                        onChange={this.handleChange}
                        name='title'
                        readOnly={readOnly}
                    />
                </div>
                <div className='textarea_form_container'>
                    <textarea
                        value={description}
                        className='description_task_form'
                        onChange={this.handleChange}
                        name='description'
                        readOnly={readOnly}
                    />
                </div>
                {
                    !readOnly ?
                        (
                            <div className='button_save_container'>
                                <Button variant="contained" size="small" type='submit'>
                                    <SaveIcon/>
                                    Save
                                </Button>
                            </div>
                        ) : null
                }

            </form>
        );
    }
}

export default TaskForm;