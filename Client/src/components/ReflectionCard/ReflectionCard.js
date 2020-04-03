import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

export default ({data})=>{
    return (
            <Card>
              <CardHeader></CardHeader>
              <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardText>
                  <p id="excerpt">{data.excerpt}</p>
                  <p id="reference">{data.reference}</p>
                  <p id="text">{data.text}</p>
                </CardText>
              </CardBody>
            </Card>
           ) 
}

