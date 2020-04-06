import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';


export default ({title, description, url}) => {
return <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button href={url}>Click Here</Button>
        </CardBody>
      </Card>
    

}