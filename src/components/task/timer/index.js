import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './style.css'

let count_seconds;


class Timer extends Component {
    state = {
        second: 0,
        minutes: 0,
        hour: 0,
        timerId: ''
    };

    handleStartCount = () => {
        const {second} = this.state;
        const {Start_timer, item} = this.props;
        count_seconds = second;
        let timerId = setInterval(() => (
            this.setState({
                second: count_seconds = count_seconds + 1
            })
        ), 1000);
        this.setState({timerId: timerId});
        Start_timer(item.id)

    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.second === 59 && prevState.minutes === 59) {
            count_seconds = 0;
            this.setState({
                second: count_seconds,
                minutes: 0,
                hour: prevState.hour + 1
            })

        } else if (prevState.second === 59) {
            count_seconds = 0;
            this.setState({
                second: count_seconds,
                minutes: prevState.minutes + 1,


            })
        }
    }


    componentWillUnmount(){
        clearInterval(this.state.timerId);
        const {Unmount_task} = this.props;
        Unmount_task()
    }

    handleCountStop = () => {
        clearInterval(this.state.timerId);
        const {Stop_timer, item} = this.props;
        const time = {
            second: this.state.second,
            minutes: this.state.minutes,
            hour: this.state.hour
        };
        Stop_timer(time, item.id)
    };



    render() {

        let button_start;
        let button_stop;
        const {general_timer, item} = this.props;
        if (general_timer && !item.timer){
            button_start =
                (
                    <div>
                        <Button variant="outlined" onClick={this.handleStartCount}>
                            Start
                        </Button>
                    </div>
                );
        } else if (!general_timer && !item.timer){
                button_start =
                    (
                        <div>
                            <span>Task in process</span>
                        </div>
                    )

        } else if (!general_timer && item.timer){

            button_stop = (
                <div>
                    <Button variant="outlined" onClick={this.handleCountStop}>
                        Stop
                    </Button>
                </div>
            )
        }

        return (
            <div className='timer_main_container'>
                {button_start}
                {button_stop}
                <div>
                    <span>{this.state.hour} : {this.state.minutes} : {this.state.second}</span>
                </div>
            </div>
        );
    }
}

export default Timer;