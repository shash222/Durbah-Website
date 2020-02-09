import React, { Component } from 'react';
import '../CSS/Home.css';
import seminarData from '../Constants/UpcomingSeminarInfo.js';
import Countdown from '../Components/Countdown.js';
import Img from 'react-image';
import homeImg from '../Res/img/Home.jpg'

/**
 * Home view for webapp
 * Displays stock image and countdown to next seminar
 */
export default class Home extends Component {
    render() {
        return (
            <div className="container"> 
                <Img id="homeImage" src={homeImg} />
                <div className="countdownContainer" id="homeCountdownContainer">
                    <div className="countdownHeading">
                        <p className="countdownUntil" id="countdownUntilSeminar">COUNTDOWN UNTIL</p>
                        <p className="countdownItem">{seminarData.seminarName.toUpperCase()}</p>
                    </div>
                    <Countdown datePassedMessage={["THE CLASS IS NOW ", <span className="liveText">LIVE</span>]} endDate={new Date(seminarData.seminarDate + " " + seminarData.seminarTime)}/>
                </div>
            </div>
        );
    }
}