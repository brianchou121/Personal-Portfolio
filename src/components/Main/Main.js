import React, {Component} from "react";
import "./main.css";
import {Button} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import MainPic from "../img/main.jpg";
import SignaturePic from "../img/signature.png";
import Resume from "../files/Brian Chou Resume.pdf";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-text">
                    <Button href={Resume} target="_blank">Resume</Button>
                    <h5>yello! I'm</h5>
                    <div className="main-sub-text">
                        <h2>Brian Chou</h2>
                        <h3><Typewriter
                            options={{
                                strings: ['a <b>developer.</b>', 'an <b>adventurer.</b>', ''],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h3>
                        <h4>and my journey has just begun...</h4>
                        <p> Growing up in the bay area has exposed me to the countless positive impacts
                            technology has made on our communities and its potential to do stuff. I love to
                            problem solve, create new things, eat, not do work. I am excited to get out there
                            and help change the way we live for the better.
                        </p>
                        <br></br>
                        <p>Sincerely,</p>
                        <img className="signature" src={SignaturePic} alt="Brian Chou"></img>
                    </div>
                </div>

                {/* <Button>What I've Been Up To</Button> */}

                <img className="main-pic" src={MainPic}></img>
            </div>
        )
    }
}

export default Main