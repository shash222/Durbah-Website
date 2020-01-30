import React, { Component } from 'react';
import Iframe from 'react-iframe';
import '../CSS/Volunteer.css'

export default class Volunteer extends Component {
    render() {
        return(
            <div className="container">
                <h1 id="volunteerFormHeading">VOLUNTEER</h1>
                <p id="volunteerFormHeadingSubtext">AND BE A PART OF THE DURBAH EXPERIENCE</p>
                <Iframe id="volunteerForm" src="https://docs.google.com/forms/d/e/1FAIpQLSfOZFfx7Z0BLzc4FC6zm7IbgCcL37AQqQWPH_oiJjYzaLbU1w/viewform?vc=0&c=0&w=1"/>
            </div>
        );
    }
}