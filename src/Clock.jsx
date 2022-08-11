import React, { Component } from "react";
import './index.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
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
        const time = Date.parse(deadline) - Date.parse (Date())
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000 * 60 *60)) % 24);
        const days = Math.floor((time/(1000 *60*60*24)));

        this.setState({seconds,minutes,hours,days});

    }

    leading0(num){
        return num > 10 ? num : "0" + num
    }

    render(){
        return (
            <div className="Clock-main-div">
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;