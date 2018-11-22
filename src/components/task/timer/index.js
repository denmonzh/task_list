import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

let count_seconds;


class Timer extends Component {
    state = {
      second: 0,
      minutes: 0,
      hour: 0,
      timerId: ''
    };

    handleStartCount = () =>{
      const {second} = this.state;
        count_seconds = second;
        let timerId = setInterval(()=>(
            this.setState({
                second: count_seconds =  count_seconds + 1
            })
        ), 1000);
        this.setState({timerId: timerId})

    };

    componentDidUpdate(prevProps, prevState){
        if (prevState.second === 59 && prevState.minutes === 59){
            count_seconds = 0;
            this.setState({
                second: count_seconds,
                minutes: 0,
                hour: prevState.hour + 1
            })

        } else if (prevState.second === 59){
            count_seconds = 0;
            this.setState({
                second: count_seconds,
                minutes: prevState.minutes + 1,


            })
        }
    }

    handleCountStop = () =>{
      clearInterval(this.state.timerId)
    };





    render() {
        return (
            <div>
                <div>
                    <Button variant="outlined" onClick = {this.handleStartCount}>
                        Start
                    </Button>
                </div>
                <div>
                    <Button variant="outlined" onClick = {this.handleCountStop}>
                        Stop
                    </Button>
                </div>
                <div>
                    <span>{this.state.hour} : {this.state.minutes} : {this.state.second}</span>
                </div>
            </div>
        );
    }
}

export default Timer;