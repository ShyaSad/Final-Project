import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './style.css';

export default ({meeting})=>{
    return (
            <Card>
              <CardHeader>{meeting.name}</CardHeader>
              <CardBody>
                <CardTitle>{meeting.day} at {meeting.time}</CardTitle>
                <CardText>{meeting.notes}</CardText>
                <Button href={meeting.link}>Zoom Link</Button>
              </CardBody>
            </Card>
           ) 
}