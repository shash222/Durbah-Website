import React, { Component } from 'react';
import Img from 'react-image';
import Iframe from 'react-iframe';
import '../CSS/UpcomingSeminar.css';
// import seminarData from '../Constants/UpcomingSeminarInfo.js';
import Countdown from '../Components/Countdown.js';
import axios from 'axios';

/**
  * View provides information about the upcoming seminar
  * Data can be modified in the ../Constants/UpcomingSeminarInfo.js file
 */
export default class UpcomingSeminar extends Component {
    state = {
        seminarData: {
            "flyerLocation": "",
            "promoVideoUrl": "",
            "seminarName": "",
            "seminarInstructor": "",
            "seminarDescription": "",
            "seminarDate": "0",
            "seminarTime": "",
            "aboutInstructor": "",
            "registrationLink": "",
            "moreAboutInstructorLink": "",
            "instructorImageLocation": ""
        },
    };
    
    componentDidMount() {
        axios.post("https://server.durbah.org:5000/upcomingSeminarData").then((res) => {
            console.log(res);
            this.setState({seminarData: res})
        })
        // this.setState({seminarData: seminarData})
    }

    // TODO: Will be used to programatically read from Al Maghrib Home Page and populate class info
    render() {
        return (
            <div className="container" id="upcomingSeminarContainer">
                <div id="upcomingSeminarTopContainer">
                    <div id="seminarCountdown">
                        <Countdown datePassedMessage={["CLASS IS NOW ", <span key="upcomingDatePassedMessage" className="liveText">IN SESSION</span>]} endDate={new Date(this.state.seminarData.seminarDate + " " + this.state.seminarData.seminarTime)}/>
                    </div>
                    <Iframe id="seminarPromoVideo" className="video" src={this.state.seminarData.promoVideoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen;"></Iframe>
                </div>
                <div id="upcomingSeminarBottomContainer">
                    <div id="upcomingSeminarLeft" className="upcomingSeminarContent">
                        <Img id="seminarFlyer" src={(this.state.seminarData.flyerLocation)} alt="Seminar Flyer" />
                    </div>
                    <div id="upcomingSeminarMiddle" className="upcomingSeminarContent">
                        <h1 id="seminarName">{this.state.seminarData.seminarName}</h1>
                        <h2 id="seminarInstructor">Taught By {this.state.seminarData.seminarInstructor}</h2>
                        <p id="seminarDescription" className="seminarDescriptions">{this.state.seminarData.seminarDescription}</p>
                        <a href={this.state.seminarData.registrationLink} target="_blank" rel="noopener noreferrer"><div id="registerButton" className="upcomingSeminarButton">Register</div></a>
                    </div>
                    <div id="upcomingSeminarRight" className="upcomingSeminarContent">
                        <div id="aboutInstructor">
                            <h3 id="aboutInstructorHeading">ABOUT THE INSTRUCTOR</h3>
                            <Img id="instructorImage" src={(this.state.seminarData.instructorImageLocation)} alt="Seminar Flyer" />
                            <p id="instructorName">{this.state.seminarData.seminarInstructor.toUpperCase()}</p>
                            <p id="instructorDescription" className="seminarDescriptions">{this.state.seminarData.aboutInstructor}</p>
                            <a href={this.state.seminarData.moreAboutInstructorLink} target="_blank" rel="noopener noreferrer"><div className="upcomingSeminarButton">Read More</div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
