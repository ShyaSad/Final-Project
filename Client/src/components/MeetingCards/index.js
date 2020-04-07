import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Badge } from 'reactstrap';
import './MeetingCards.css';

export default ({meeting, saveFav})=>{
    return (
            <Card id="meeting-card-bg">
              <CardHeader id="meeting-name">{meeting.name}{saveFav ? <Badge onClick={()=>saveFav(meeting.name)} id="favorites">ADD TO FAVORITES</Badge>: ''}</CardHeader>
              <CardBody>
                <CardTitle id="meeting-time">{meeting.day} at {meeting.time}</CardTitle>
                <CardText id="meeting-notes">{meeting.notes}</CardText>
                <Button id="meeting-link" href={meeting.link}>Zoom Link</Button>
              </CardBody>
            </Card>
           ) 
}
