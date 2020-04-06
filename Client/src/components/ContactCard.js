import React from 'react';
import {Card, CardBody, CardTitle, CardText } from 'reactstrap';


export default ({name, title, url, email}) => {
return <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardTitle>{title}</CardTitle>
          <CardText><a href={url}>GitHub</a></CardText>
          <CardText><a href={email}>Email</a></CardText>
        </CardBody>
      </Card>
    

}