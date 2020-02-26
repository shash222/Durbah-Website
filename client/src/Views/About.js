import React, {Component} from 'react';
import Iframe from 'react-iframe';
import AlMaghribInfo from '../Constants/AlMaghribInfo.js';
import '../CSS/About.css';


/**
 * View used as About page
 * Descriptions were copied from Al Maghrib website
 */
export default class About extends Component {
    render() {
        return(
            <div className="container" id="aboutContainer">
                <div id="aboutTopContainer">
                    <h1 id="aboutPageHeading" className="pageHeading">ABOUT</h1>
                    <p id="aboutPageHeadingSubtext" className="pageHeadingSubtext">{"The vision of AlMaghrib Institute is to become the largest and most beneficial learning system in modern Islamic history. We envision our learning system entering every nation of the world, accessible to all who seek a deeper understanding of Islam.".toUpperCase()}</p>
                    <Iframe id="alMaghribPromoVideo" className="video" src={AlMaghribInfo.promoVideoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></Iframe>
                </div>
                <div id="aboutBottomContainer">
                    <div id="aboutLeft" className="aboutContent">
                        <h2>IT STARTED WITH A QUESTION</h2>
                        <p>
                            How can we teach Islam to an English-speaking audience in the West, in a way that was authentic, academic, professional, reproducible, engaging, spiritual, and fun? In fact, was such a vision even possible?

                            It was.

                            By the grace of the Almighty, in 2002, in College Park, Maryland, USA, Shaykh Muhammad Alshareef taught that first class to a small group of just 30 students.

                            With classes being offered in over 40 cities around the globe, and catering to over 80,000 unique students, AlMaghrib has the largest onsite student body, and is the leading institute teaching premier Islamic education in the West.
                        </p>
                    </div>
                    <div id="aboutMiddle" className="aboutContent">
                        <h2>OUR METHODOLOGY</h2>
                        <p>
                            Our mission is simple: to empower people through the best Islamic learning experience possible so that they lead more fulfilling lives in this world, and are better prepared for the next.
        
                            We do this based upon an ethos of excellence and a refusal to accept excuses for poor quality. We offer trademark double and single-weekend degree-level seminars centred on a comprehensive academic curriculum, and taught by the leading and most engaging instructors in the West.

                            We are the pioneers in professional English-language with Islamic education being first on the scene, but we are always learning, accepting the fact that there is always room for improvement. We use the best multimedia materials around, we are helped by hundreds of volunteers across the entire AlMaghrib family, and we are supported by a dedicated admin and logistics team. It's no wonder AlMaghrib continues to raise the bar on how knowledge is not only addictively sought…but also loved!
                        </p>
                    </div>
                    <div id="aboutRight" className="aboutContent">
                        <h2>THE VISION</h2>
                        <p>
                            Ultimately, the purpose of AlMaghrib Institute is to make Islamic education as easy as possible. We thereby aim to equip our students with deep knowledge and practical application of their skills. Through this education, we hope to raise leaders who will serve their communities and humanity at large.

                            AlMaghrib runs on the backs of a highly committed team of staff and instructors, as well as hundreds of dedicated volunteers worldwide. This powerful, well-oiled engine runs around the clock, 24 hours a day, 7 days a week.

                            So what drives us?

                            The vision of AlMaghrib Institute is to become the largest and most beneficial learning system in modern Islamic history. We envision our learning system entering every nation of the world, accessible to all who seek a deeper understanding of Islam.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}