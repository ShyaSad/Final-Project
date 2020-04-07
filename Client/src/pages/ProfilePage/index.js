import React from "react";
import TimerCal from '../../components/Timer/TimerCal';
import "./Profile.css";
import Placeimg from '../../assets/round-placeholder.png';
import {Container, Row, Col, Button} from 'reactstrap';



const Profile = () => {
    return (
        <React.Fragment>
    <Row className="justify-content-md-center">
    <Col xs lg="2">
      
    </Col>
    <Col md="auto"> <img className="temp-photo" src={Placeimg}  alt='' />
              <h3 className="prodName">Joe Biden</h3></Col>
    <Col xs lg="2">
      
    </Col>
  </Row>
            <div>
             
        
            <h1 className="goal">PERSONAL GOAL</h1>
            <p className="description">My long-term goal is to go the rest of the year WITHOUT alcohol.</p>

        </div>
        
        <div className="clock">
            <TimerCal futureDate="2020-12-31 00:00:00"/>
        </div>

        </React.Fragment>
    )
}

export default Profile;
