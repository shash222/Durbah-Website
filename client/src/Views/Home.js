import React, { Component } from 'react';
import '../CSS/Home.css';
// import seminarData from '../Constants/UpcomingSeminarInfo.js';
import Countdown from '../Components/Countdown.js';
import Img from 'react-image';
import homeImg from '../Res/img/Home.jpg'

/**
 * Home view for webapp
 * Displays stock image and countdown to next seminar
 */
export default class Home extends Component {

    state = {
        seminarData: {
            "flyerLocation": "",
            "promoVideoUrl": "",
            "seminarName": "",
            "seminarInstructor": "",
            "seminarDescription": "",
            "seminarDate": new Date(),
            "seminarTime": "",
            "aboutInstructor": "",
            "registrationLink": "",
            "moreAboutInstructorLink": "",
            "instructorImageLocation": ""
        },
        isLoading: true
    };

    componentDidMount() {
        this.setState({
            seminarData: JSON.parse(sessionStorage.getItem('seminarData')),
            isLoading: false
        })
    }

    render() {
        return (
            !this.state.isLoading
                ? (<div className="container">
                    <Img id="homeImage" src={homeImg} />
                    <div className="countdownContainer" id="homeCountdownContainer">
                        <div className="countdownHeading">
                            <p className="countdownUntil" id="countdownUntilSeminar">COUNTDOWN UNTIL</p>
                            <p className="countdownItem">{this.state.seminarData.seminarName.toUpperCase()}</p>
                        </div>
                        <Countdown datePassedMessage={["CLASS IS NOW ", <span key="liveTextSpan" className="liveText">IN SESSION</span>]} endDate={new Date(this.state.seminarData.seminarDate + " " + this.state.seminarData.seminarTime)} />
                    </div>
                </div>)
                : null
        );
    }
}
