import React, {Component} from "react";
import "./main.css";
import MainPic from "../img/main.jpg";
import SignaturePic from "../img/signature.png";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-text">
                    <h5>yello! I'm</h5>
                    <h2>Brian Chou</h2>
                    <h3>a <b>developer.|</b></h3>
                    <h4>and my journey has just begun...</h4>
                    <p>
                        Growing up in the bay area has exposed me to the countless positive impacts
                        technology has made on our communities and its potential to do stuff. I love to
                        problem solve, create new things, eat, not do work. I am excited to get out there
                        and help change the way we live for the better.
                    </p>
                    <p>Sincerely,</p>
                    <img className="signature" src={SignaturePic} alt="Brian Chou"></img>
                </div>

                <img className="main-pic" src={MainPic}></img>      
            </div>
        )
    }
}

export default Main