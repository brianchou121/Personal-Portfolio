import React, {Component} from "react";
import "./experience.css";
import {Row, Col, Button} from 'react-bootstrap';
import AmazonLogo from '../img/amazon-logo.png'

class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <h4><bold>Work Experience</bold></h4>
                <h5>Where I've worked at!</h5>
                <Row>
                    <Col md={5}>
                        <div className="experience-box-1">
                            <div className="experience-box-text">
                                <h4><b>Amazon Web Services</b></h4>
                                <h5>Software Developer Engineer Intern</h5>
                                <p> Worked on the AWS Kinesis Team and 
                                    Implemented features to the Kinesis Data
                                    Analytics Console.
                                </p>
                            </div>
                            <div>
                                <img className="experience-logo" src={AmazonLogo}></img>
                            </div>
                        </div>  
                    </Col>
                    <Col md={5}>
                        <div className="experience-box-2">
                            <div className="experience-box-text">
                                <h4><b>Barclays Investment Bank</b></h4>
                                <h5>Software Engineer Intern</h5>
                                <p> Worked on Specialized Infrastructure Team
                                    and built applications to run tests on high
                                    frequency trading servers.
                                </p>
                            </div>
                        </div>  
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Experience