import React, {Component} from 'react';
import countdownUtility from '../Utilities/Countdown.js';
import '../CSS/Countdown.css';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state.endDate = props.endDate;
        this.state.datePassedMessage = props.datePassedMessage;
    }

    state = {
        timeRemaining: {
            daysRemaining: "00",
            hoursRemaining: "00",
            minutesRemaining: "00",
            secondsRemaining: "00",
        },
    };

    componentDidMount() {
        // var seminarDate = new Date(seminarData.seminarDate + " " + seminarData.seminarTime);
        // var endDate = this.state.endDate;
        // var timeRemainingObj;
        // if (new Date() < endDate) {
        //     setInterval(() => {
        //         timeRemainingObj = countdownUtility.calculateTimeRemaining(endDate);
        //         this.setState({timeRemaining: timeRemainingObj});
        //     }, 1000)
        // } else {
        //     this.setState({timeRemaining: null});
        // }
        this.calculateTimeRemaining();
    }
    
    calculateTimeRemaining() {
        var endDate = this.state.endDate;
        var timeRemainingObj;
        if (new Date() < endDate) {
            setInterval(() => {
                timeRemainingObj = countdownUtility.calculateTimeRemaining(endDate);
                this.setState({timeRemaining: timeRemainingObj});
            }, 1000)
        } else {
            this.setState({timeRemaining: null});
        }
    }

    render() {
        return(
            <div className="countdownComponent">
                {
                    this.state.timeRemaining == null
                        ? <p className="countdownOutput datePassedMessage">{this.state.datePassedMessage}</p>
                        : (
                            // <table className="countdownOutput">
                            //     <tbody>
                            //         <tr>
                            //             <td className="countdown">{this.state.timeRemaining.daysRemaining}</td>
                            //             <td className="countdown">{this.state.timeRemaining.hoursRemaining}</td>
                            //             <td className="countdown">{this.state.timeRemaining.minutesRemaining}</td>
                            //             <td className="countdown">{this.state.timeRemaining.secondsRemaining}</td>
                            //         </tr>
                            //         <tr id="timeUnit">
                            //             <td>DAYS</td>
                            //             <td>HOURS</td>
                            //             <td>MINUTES</td>
                            //             <td>SECONDS</td>
                            //         </tr>
                            //     </tbody>
                            // </table>



                            // <div className="countdownOutput">
                            //     <div id="countdownContainer">
                            //         <p className="countdown">{this.state.timeRemaining.daysRemaining}</p>
                            //         <p className="countdown">{this.state.timeRemaining.hoursRemaining}</p>
                            //         <p className="countdown">{this.state.timeRemaining.minutesRemaining}</p>
                            //         <p className="countdown">{this.state.timeRemaining.secondsRemaining}</p>
                            //     </div>
                            //     <div id="timeUnit">
                            //         <p>DAYS</p>
                            //         <p>HOURS</p>
                            //         <p>MINUTES</p>
                            //         <p>SECONDS</p>
                            //     </div>
                            // </div>
                            
                            
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
                            
                            
                            )
                }
            </div>
        )
    }
}