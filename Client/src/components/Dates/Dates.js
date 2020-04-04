import React from 'react';
import { Jumbotron } from 'reactstrap';
import Moment from 'react-moment';


const Calendar = (props) => {

  return (
    <div>
      <Jumbotron>
        {/* <Moment id='momentMonth' format='MMMM'/><Moment id='momentDay' format='D'/> */}
        <h3>{props.mo}</h3> <h3>{props.day}</h3>
      </Jumbotron>
    </div>
  );
};

export default Calendar;
