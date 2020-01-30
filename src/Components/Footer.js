import React, {Component} from 'react';
import Img from 'react-image';
import '../CSS/Footer.css';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <div id="socialMediaContainer">
                    <a href="https://www.facebook.com/QabeelatDurbah/"><Img id="facebookLogo" className="socialMediaLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"/></a>
                    <a href="https://www.instagram.com/qabeelatdurbah/?hl=en"><Img id="instagramLogo" className="socialMediaLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"/></a>
                    <a href="https://twitter.com/durbah?lang=en"><Img id="twitterLogo" className="socialMediaLogo" src="https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_960_720.png"/></a>
                </div>
                <p>Qabeelat Durbah 2019</p>
            </footer>
        );
    }
}