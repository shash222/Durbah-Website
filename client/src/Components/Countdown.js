import React, { Component } from 'react';
// import countdownUtility from '../Utilities/Countdown.js';
import '../CSS/Countdown.css';

/**
 * Countdown component that returns time remaining between current and provided time
 */
export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state.endDate = props.endDate;
        this.state.datePassedMessage = props.datePassedMessage;
    }

    /**
     * State keeps track of each time duration remaining
     */
    state = {
        timeRemaining: {
            daysRemaining: "00",
            hoursRemaining: "00",
            minutesRemaining: "00",
            secondsRemaining: "00",
        },
        countdownComplete: false,
    };

    /**
     * Calculates time remaining before provided date as soon as component is mounted 
     */
    componentDidMount() {
        this.calculateTimeRemaining();
    }

    // componentDidUpdate() {
    //     if (this.state.endDate <= new Date() && !this.state.countdownComplete) {
    //         this.setState({ countdownComplete: true })
    //     }
    // }

    getCurrentDateTimeInEST() {
        // -5.0 refers to EST
        var offset = -5.0;
        var clientDate = new Date();
        var utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
        var serverDate = new Date(utc + (3600000 * offset));
        return new Date(serverDate);
    }

    addLeadingZero(num) {
        if (num < 10) return "0" + num;
        return num;
    }

    /**
     * 
     * @param {*} endDate end date to determine countdown until
     * Calculates the time remaining between the current date and the provided end date
     */
    calculateTimeRemainingGivenEndDate(endDate) {
        const oneMillisecond = 1;
        const oneSecond = 1000 * oneMillisecond;
        const oneMinute = 60 * oneSecond;
        const oneHour = 60 * oneMinute;
        const oneDay = 24 * oneHour;
        const currentDateTimeEST = this.getCurrentDateTimeInEST();
        var timeRemainingInMilliseconds = endDate - currentDateTimeEST;
        if (timeRemainingInMilliseconds < 1000) {
            this.setState({ countdownComplete: true });
            return this.zeroTimeObject
        }
        const daysRemaining = Math.floor(timeRemainingInMilliseconds / oneDay);
        timeRemainingInMilliseconds -= daysRemaining * oneDay;
        const hoursRemaining = Math.floor(timeRemainingInMilliseconds / oneHour);
        timeRemainingInMilliseconds -= hoursRemaining * oneHour;
        const minutesRemaining = Math.floor(timeRemainingInMilliseconds / oneMinute);
        timeRemainingInMilliseconds -= minutesRemaining * oneMinute;
        const secondsRemaining = Math.floor(timeRemainingInMilliseconds / oneSecond);
        timeRemainingInMilliseconds -= secondsRemaining * oneSecond;
        return {
            daysRemaining: this.addLeadingZero(daysRemaining),
            hoursRemaining: this.addLeadingZero(hoursRemaining),
            minutesRemaining: this.addLeadingZero(minutesRemaining),
            secondsRemaining: this.addLeadingZero(secondsRemaining)
        }
    }

    zeroTimeObject = {
        daysRemaining: this.addLeadingZero(0),
        hoursRemaining: this.addLeadingZero(0),
        minutesRemaining: this.addLeadingZero(0),
        secondsRemaining: this.addLeadingZero(0)
    }

    /**
     * Calculates time remaining until provided time
     */
    calculateTimeRemaining() {
        var endDate = this.state.endDate;
        var timeRemainingObj;
        if (new Date() < endDate) {
            var countdown = setInterval(() => {
                if (this.state.countdownComplete) clearInterval(countdown);
                timeRemainingObj = this.calculateTimeRemainingGivenEndDate(endDate);
                this.setState({ timeRemaining: timeRemainingObj });
            }, 1000)
        } else {
            // this.setState({ timeRemaining: this.zeroTimeObject })
            this.setState({ countdownComplete: true })
        }
    }

    /**
     * Divs are styled as flexbox; flex-direction is row for desktop version and and column
     * for mobile
     */
    render() {
        return (
            <div className="countdownComponent">
                {
                    this.state.countdownComplete
                        ? <p className="datePassedMessage">{this.state.datePassedMessage}</p>
                        : null
                }
                <div className="countdownOutput">
                    <div>
                        <p className="countdown">{this.state.timeRemaining.daysRemaining}</p>
                        <p className="timeUnit">DAYS</p>
                    </div>
                    <div>
                        <p className="countdown">{this.state.timeRemaining.hoursRemaining}</p>
                        <p className="timeUnit">HOURS</p>
                    </div>
                    <div>
                        <p className="countdown">{this.state.timeRemaining.minutesRemaining}</p>
                        <p className="timeUnit">MINUTES</p>
                    </div>
                    <div>
                        <p className="countdown">{this.state.timeRemaining.secondsRemaining}</p>
                        <p className="timeUnit">SECONDS</p>
                    </div>
                </div>
            </div>
        )
    }
}