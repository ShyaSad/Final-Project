
import React, { Component } from 'react';
import moment, { duration } from 'moment';

class TimerCal extends Component {
    state = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    };

    addZero(value) {
        value = String(value);
        while (value.length < 2) {
            value = `0${value}`
        }
        return value
    }

setCounter() {
    const futureDate = moment(this.props.futureDate)

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    this.setState({
        days,
        hours,
        mins,
        secs,
    });
}

componentWillUnmount() {
    clearInterval(this.interval);
}

componentDidMount() {
    this.setCounter();
    this.interval = setInterval(() => {
        this.setCounter();
    }, 1000);
}

    render() {
        return (
            <div className="counter">
                {Object.keys(this.state).map((key, i) => (
                    <div className="count-one">
                        <span className="count-num">
                            {this.addZero(this.state[key])}
                        </span>
                        <span className="count-deps">
                            {key.toUpperCase()}
                        </span>

                    </div>

                ))}
            </div>
        );
    }
}

export default TimerCal;
