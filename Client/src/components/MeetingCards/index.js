import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Badge } from 'reactstrap';
import './MeetingCards.css';

export default ({meeting})=>{
    return (
            <Card id="meeting-card-bg">
              <CardHeader id="meeting-name">{meeting.name}</CardHeader>
              <CardBody>
                <CardTitle id="meeting-time">{meeting.day} at {meeting.time}</CardTitle>
                <CardText id="meeting-notes">{meeting.notes}</CardText>
                <Button id="meeting-link" href={meeting.link}>Zoom Link</Button>
                <Badge id="favorites">Add to Favorites</Badge>
              </CardBody>
            </Card>
           ) 
}
