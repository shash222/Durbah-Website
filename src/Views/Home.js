import React, { Component } from 'react';
import '../CSS/Home.css';
import examData from '../Constants/PreviousSeminarExamInfo.js';
import seminarData from '../Constants/UpcomingSeminarInfo.js';
import Countdown from '../Components/Countdown.js';
import Img from 'react-image';


export default class Home extends Component {
    render() {
        return (
            <div id="container"> 
                <Img id="homeImage" src="https://i.ytimg.com/vi/lXdx26srR5g/maxresdefault.jpg" />
                <div className="countdownContainer">
                    <div className="countdownHeading">
                        <p className="countdownUntil" id="countdownUntilExamDeadline">COUNTDOWN UNTIL THE</p>
                        <p className="countdownItem">{examData.seminarName.toUpperCase()} EXAM</p>
                    </div>
                    <Countdown datePassedMessage="Unfortunately, the exam is now closed" endDate={new Date(examData.examDeadline)}/>
                </div>
                {/* <div id="countdownSpacer"></div> */}
                <div className="countdownContainer">
                    <div className="countdownHeading">
                        <p className="countdownUntil" id="countdownUntilSeminar">COUNTDOWN UNTIL</p>
                        <p className="countdownItem">{seminarData.seminarName.toUpperCase()}</p>
                    </div>
                    <Countdown datePassedMessage="" endDate={new Date(seminarData.seminarDate + " " + seminarData.seminarTime)}/>
                </div>
            </div>
        );
    }
}