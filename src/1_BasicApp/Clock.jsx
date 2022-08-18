import React, { Component } from "react";
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            sign : 1,
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0,
        };
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000)
    }

    getTimeUntil(deadline){
        let sign = 1;
        const time = Date.parse(deadline) - Date.parse (Date())
        let seconds = Math.floor((time/1000) % 60);
        let minutes = Math.floor((time/1000/60) % 60);
        let hours = Math.floor((time/(1000 * 60 *60)) % 24);
        let days = Math.floor((time/(1000 *60*60*24)));

        if (time < 0){
            minutes += 1;
            hours += 1;
            days += 1;
            sign = 1;
            seconds *= -1
            minutes *= -1
            hours *= -1
            days *= -1
        }
        if (time > 0){
            sign = -1;
        }

        this.setState({seconds,minutes,hours,days,sign});

    }

    leading0(num){
        return num > 10 ? num : "0" + num
    }

    render(){
        if (this.state.sign === -1){
            return (
                <div className="Clock-main-div" style={{
                    color : "#FF8A8A"
                }}>
                    <div className="Clock-days">{this.state.days} days</div>
                    <div className="Clock-hours">{this.state.hours} hours</div>
                    <div className="Clock-minutes">{this.state.minutes} minutes</div>
                    <div className="Clock-seconds">{this.state.seconds} seconds</div>
                </div>
            )
        }else{
            return (
                <div className="Clock-main-div" style={{
                    color : "#3CB043"
                }}>
                    <div className="Clock-days">{this.state.days} days</div>
                    <div className="Clock-hours">{this.state.hours} hours</div>
                    <div className="Clock-minutes">{this.state.minutes} minutes</div>
                    <div className="Clock-seconds">{this.state.seconds} seconds</div>
                </div>
            )
        }

    }
}

export default Clock;