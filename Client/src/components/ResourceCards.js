import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Button from 'react-bootstrap/Button';

export default ({title, url}) => {
return <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button href={url}>Click Here</Button>
        </CardBody>
      </Card>
    

}