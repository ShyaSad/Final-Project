import React, { Fragment, useState, useEffect } from "react";
import team from '../../assets/connection-copy.jpg'
import "./Profile.css";

import TimerCal from '../../components/Timer/TimerCal';
import Placeimg from '../../assets/man-1.jpg';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button'




const Profile = () => {

    useEffect(()=>{
        document.body.style.backgroundImage = `url(${team})`
    
      },[])
        
    return (
        
        <React.Fragment>

    <Row className="justify-content-md-center">
    <Col xs lg="2">
      
    </Col>
    <Col md="auto"> <img className="temp-photo" src={Placeimg}  alt='' />
              <h3 className="prodName">John Doe</h3></Col>
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
