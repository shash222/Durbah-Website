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
        timeRemaining: {},
    };

    componentDidMount() {
        // var seminarDate = new Date(seminarData.seminarDate + " " + seminarData.seminarTime);
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
            <div>
                {
                    this.state.timeRemaining == null
                        ? <p className="countdownOutput datePassedMessage">{this.state.datePassedMessage}</p>
                        : (<table className="countdownOutput">
                                <tbody>
                                    <tr>
                                        <td className="countdown">{this.state.timeRemaining.daysRemaining}</td>
                                        <td className="countdown">{this.state.timeRemaining.hoursRemaining}</td>
                                        <td className="countdown">{this.state.timeRemaining.minutesRemaining}</td>
                                        <td className="countdown">{this.state.timeRemaining.secondsRemaining}</td>
                                    </tr>
                                    <tr>
                                        <td>DAYS</td>
                                        <td>HOURS</td>
                                        <td>MINUTES</td>
                                        <td>SECONDS</td>
                                    </tr>
                                </tbody>
                            </table>)
                }
            </div>
        )
    }
}