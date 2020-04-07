import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Badge } from 'reactstrap';
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MeetingCards.css';

export default ({meeting})=>{
    return (
            <Card>
              <CardHeader>{meeting.name}</CardHeader>
              <CardBody>
                <CardTitle>{meeting.day} at {meeting.time}</CardTitle>
                <CardText>{meeting.notes}</CardText>
                <Button href={meeting.link}>Zoom Link</Button>
                {/* <Button><FontAwesomeIcon icon={faStar} /></Button> */}
              </CardBody>
            </Card>
           ) 
}
