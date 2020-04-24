import React, {Component} from "react";
import "./about.css";
import AboutPic from "../img/about.jpg";

class About extends Component {
    render() {
        return (
            <div className="about">
                <img className="about-pic" src={AboutPic}></img>      
            </div>
        )
    }
}

export default About