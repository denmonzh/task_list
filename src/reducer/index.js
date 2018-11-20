import {combineReducers} from 'redux'
import TaskReducer from './reducer'


export default combineReducers({
    task_action: TaskReducer
})

