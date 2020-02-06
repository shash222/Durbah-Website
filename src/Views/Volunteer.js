import React, { Component } from 'react';
import Iframe from 'react-iframe';
import '../CSS/Volunteer.css'

/**
 * View used to display volunteer form
 */
export default class Volunteer extends Component {
    render() {
        return(
            <div className="container">
                <h1 id="volunteerFormHeading" className="pageHeading">VOLUNTEER</h1>
                <p id="volunteerFormHeadingSubtext" className="pageHeadingSubtext">AND BE A PART OF THE DURBAH EXPERIENCE</p>
                <Iframe id="volunteerForm" className="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfOZFfx7Z0BLzc4FC6zm7IbgCcL37AQqQWPH_oiJjYzaLbU1w/viewform?vc=0&c=0&w=1"/>
            </div>
        );
    }
}