import React, {Component} from "react";
import "./about.css";
import AboutPic from "../img/about.jpg";

class About extends Component {
    render() {
        return (
            <div className="about">
                <img className="about-pic" src={AboutPic}></img>
                <div className="about-text">
                    <h3>HELLO there.</h3>
                    <h4>here’s a little speil about myself…</h4>
                    <p> Currently, I’m wrapping up my final year as an anteater at the 
                        University of California, Irvine. I have a background in computer
                        science and am planning on moving back to the Bay Area where 
                        my love for technology first took root.
                    </p>
                    <p> As of right now, I am at Amazon Web Services as a Software 
                        Development Engineer in East Palo Alto, CA. I love music, eating, and 
                        basketball. Im dumb and I want to be a millionaire asap.
                    </p>    
                </div>    
            </div>
        )
    }
}

export default About