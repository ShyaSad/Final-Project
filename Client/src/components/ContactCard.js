import React from 'react';
import {Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';


export default ({name, title, url, email}) => {
return <Card>
        <CardBody>
          <CardTitle><h4>{name}</h4></CardTitle>
          <CardSubtitle>{title}</CardSubtitle>
          <CardText><a href={url}>GitHub</a></CardText>
          <CardText><a href={email}>Email</a></CardText>
        </CardBody>
      </Card>
    

}