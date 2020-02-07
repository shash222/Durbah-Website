import React, {Component} from 'react';
import Iframe from 'react-iframe';
import '../CSS/FinAid.css'

/**
 * View used to display Financial Aid/Scholarship formT
 */
export default class FinAid extends Component {
    render() {
        return(
            <div>
            <div className="container">
                <div id="financialAidHeader">
                    <h1 id="financialAidFormHeading" className="pageHeading">SCHOLARSHIPS</h1>
                    <p id="financialAidFormHeadingSubtext" className="pageHeadingSubtext">"WHOEVER TEACHES SOME KNOWLEDGE WILL HAVE THE REWARD OFTHE ONE WHO ACTS UPON IT, WITHOUT THAT DETRACTING FROM HIS REWARD IN THE SLIGHTEST" - THE PROPHET (SAW)</p>
                </div>
                <Iframe id="financialAidForm" className="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfOZFfx7Z0BLzc4FC6zm7IbgCcL37AQqQWPH_oiJjYzaLbU1w/viewform?vc=0&c=0&w=1"/>
            </div>
            </div>
        )
    }
}