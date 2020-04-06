import React from 'react';
import { Card, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './Reflection.css';

export default ({data})=>{
    return (
            <Card id="reflection-cont">
              <CardBody>
                <CardTitle id='title'>{data.title}</CardTitle>
                  <CardText id="excerpt">{data.excerpt}</CardText>
                  <CardText id="reference">{data.reference}</CardText>
                  <CardText id="text">{data.text}</CardText>
              </CardBody>
            </Card>
           ) 
}
