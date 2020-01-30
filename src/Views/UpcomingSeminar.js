import React, { Component } from 'react';
import Img from 'react-image';
import Iframe from 'react-iframe';
import '../CSS/UpcomingSeminar.css';
import seminarData from '../Constants/UpcomingSeminarInfo.js';
import Countdown from '../Components/Countdown.js';

export default class UpcomingSeminar extends Component {
    // TODO: Will be used to programatically read from Al Maghrib Home Page and populate class info
    populateHomePage = () => {
        console.log("Populating");
    }

    render() {     
        return (
            <div className="container">
                <div id="upcomingSeminarTopContainer">
                    <div id="seminarCountdown">
                        <Countdown datePassedMessage="" endDate={new Date(seminarData.seminarDate + " " + seminarData.seminarTime)}/>
                    </div>
                    <Iframe id="seminarPromoVideo" src={seminarData.promoVideoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></Iframe>
                </div>
                <div id="upcomingSeminarBottomContainer">
                    <div id="upcomingSeminarLeft" className="upcomingSeminarContent">
                        <Img id="seminarFlyer" src={(seminarData.flyerLocation)} alt="Seminar Flyer" />
                    </div>
                    <div id="upcomingSeminarMiddle" className="upcomingSeminarContent">
                        <h1 id="seminarName">{seminarData.seminarName}</h1>
                        <h2 id="seminarInstructor">Taught By {seminarData.seminarInstructor}</h2>
                        <p id="seminarDescription">{seminarData.seminarDescription}</p>
                        <a href={seminarData.registrationLink} target="_blank" rel="noopener noreferrer"><div id="registerButton" className="upcomingSeminarButton">Read More & Register</div></a>
                    </div>
                    <div id="upcomingSeminarRight" className="upcomingSeminarContent">
                        <div id="aboutInstructor">
                            <h3 id="aboutInstructorHeading">ABOUT THE INSTRUCTOR</h3>
                            <Img id="instructorImage" roundedSize="2" src={(seminarData.instructorImageLocation)} alt="Seminar Flyer" />
                            <p id="instructorName">{seminarData.seminarInstructor.toUpperCase()}</p>
                            <div id="instructorDescription">{seminarData.aboutInstructor}</div>
                            <a href={seminarData.moreAboutInstructorLink} target="_blank" rel="noopener noreferrer"><div className="upcomingSeminarButton">Read More</div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}