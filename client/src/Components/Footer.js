import React, { Component } from 'react';
import Img from 'react-image';
import '../CSS/Footer.css';
import facebookLogo from '../Res/img/facebook.png';
import instagramLogo from '../Res/img/instagram.png';
import twitterLogo from '../Res/img/twitter.png';

/**
 * Footer component containing links to social media
 */
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="socialMediaContainer">
                    <a href="https://www.facebook.com/QabeelatDurbah/" target="_blank" rel="noopener noreferrer"><Img id="facebookLogo" className="socialMediaLogo" src={facebookLogo} /></a>
                    <a href="https://www.instagram.com/qabeelatdurbah/?hl=en" target="_blank" rel="noopener noreferrer"><Img id="instagramLogo" className="socialMediaLogo" src={instagramLogo} /></a>
                    <a href="https://twitter.com/durbah?lang=en" target="_blank" rel="noopener noreferrer"><Img id="twitterLogo" className="socialMediaLogo" src={twitterLogo} /></a>
                </div>
                <p>Qabeelat Durbah 2020</p>
            </footer>
        );
    }
}